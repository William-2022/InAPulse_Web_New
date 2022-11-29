import { Box, CircularProgress, Grid, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import Moment from "moment";
import { useParams, useNavigate } from "react-router-dom";

import Title from "../../components/general/Title";
import ResponsiveSection from "../../layout/ResponsiveSection";
import { getOrderDetail } from "../../apis/order";
import ErrorPage from "../ErrorPage";
import OrderBreakdown from "../../components/Account/OrderBreakdown/OrderBreakdown";
import { imageUrlEndpoint } from "../../apis/APIhelper";
import OrderTimeline from "../../components/Account/OrderTimeline";
import Card from "../../components/general/Card";
import { ORDER_STATUS } from "../../helpers/OrderStatus";
import StatusLogo from "../../components/StatusLogo";
import ImageViewer from "../../components/general/ImageViewer";
import Button from "../../components/general/Button";
import CancelOrder from "../../components/Account/CancelOrder";

function OrderDetails() {
  const { id } = useParams();
  const md = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageViewer, setImageViewer] = useState(false);
  const [cancelDialog, setCancelDialog] = useState(false);

  const fetchOrderDetails = (id) => {
    return getOrderDetail(id)
      .then((res) => {
        if (res.payload.deliveryProofPhotoURL) {
        }
        setDetail(res.payload);
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchOrderDetails(id);
  }, [id]);

  const dateFormat = (date) => {
    Moment.locale("en");
    return Moment(date).format("hh:mm A on MMMM DD, YYYY");
  };

  const cancelHandler = () => {
    setCancelDialog(true);
  };

  if ((!detail && !isLoading) || hasError) return <ErrorPage />;
  if (!detail) return <CircularProgress size={80} />;

  return (
    <ResponsiveSection width="90%">
      <Box sx={{ width: "100%", display: "flex", mt: 4 }}>
        <Button sx={{ mr: "auto" }} onClick={() => navigate(-1)}>
          Back
        </Button>
        {(detail.status === ORDER_STATUS.PENDING ||
          detail.status === ORDER_STATUS.ENROUTE_PICKUP) && (
          <Button
            variant="outlined"
            sx={{ ml: "auto" }}
            onClick={cancelHandler}
          >
            Cancel Order
          </Button>
        )}
      </Box>
      <Grid container mt={0} mb={8} spacing={5}>
        <Grid item xs={12}>
          <Card noMin>
            <Box
              sx={{
                display: "flex",
                flexDirection: md ? "column" : "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box mb={4}>
                <Title starting={38}>#{detail?.orderNumber}</Title>
                <Title component="h2" starting={24} sx={{ fontWeight: "400" }}>
                  {dateFormat(detail?.createdAt)}
                </Title>
              </Box>
              <Box pt={1.5}>
                <StatusLogo status={detail.status} />
              </Box>
            </Box>
            <OrderTimeline
              timeline={{
                createdAt: detail.createdAt,
                ...detail.DeliveryOrderDatetime,
              }}
              current={detail.status}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card noMin sx={{ height: "100%", boxSizing: "border-box" }}>
            <OrderBreakdown order={detail} />
          </Card>
        </Grid>

        <Grid container item xs={12} md={6} spacing={5}>
          <Grid item xs={12}>
            <Card
              noMin
              sx={{
                height: "100%",
                p: 0,
                overflow: "hidden",
                boxSizing: "border-box",
                position: "relative",
                cursor:
                  detail.deliveryProofPhotoURL && !md ? "pointer" : undefined,
                "&:hover > img": {
                  filter: md ? undefined : "brightness(.5)",
                },
                "&:hover > h1": {
                  opacity: 1,
                },
              }}
              onClick={() => {
                if (md) return;
                setImageViewer(Boolean(detail.deliveryProofPhotoURL));
              }}
            >
              {detail.deliveryProofPhotoURL && (
                <Box
                  component="img"
                  alt="delivery-image"
                  sx={{
                    width: "100%",
                    objectFit: "cover",
                    height: "100%",
                    borderRadius: 2,
                    maxHeight: 700,
                    mx: "auto",
                    userSelect: "none",
                    transition: "all .5s",
                    filter: detail.deliveryProofPhotoURL
                      ? "brightness(.8)"
                      : "brightness(.5)",
                  }}
                  src={imageUrlEndpoint + detail.deliveryProofPhotoURL}
                />
              )}
              <Title
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: !detail.deliveryProofPhotoURL
                    ? "primary.main"
                    : "white",
                  opacity: detail.deliveryProofPhotoURL ? 0 : 1,
                  transition: "all 1s",
                  userSelect: "none",
                  zIndex: 100,
                }}
              >
                {detail.deliveryProofPhotoURL ? "View Image" : "No Image"}
              </Title>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <ImageViewer
        open={imageViewer}
        dismiss={() => setImageViewer(false)}
        src={imageUrlEndpoint + detail.deliveryProofPhotoURL}
      />
      <CancelOrder
        open={cancelDialog}
        id={id}
        fetchOrderDetails={fetchOrderDetails}
        onDismiss={() => setCancelDialog(false)}
      />
    </ResponsiveSection>
  );
}

export default OrderDetails;
