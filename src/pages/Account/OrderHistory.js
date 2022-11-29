import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import OrderCard from "../../components/Account/OrderCard/OrderCard";

import Title from "../../components/general/Title";
import UseOrder from "../../hooks/useOrder";
import ResponsiveSection from "../../layout/ResponsiveSection";

function OrderHistory({ title = "Order", short }) {
  const { orderList, listLoading } = UseOrder();
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  if (listLoading) return <CircularProgress size={80} />;

  const resultOrderList = short
    ? orderList.length >= 4
      ? orderList.slice(0, 4)
      : orderList
    : orderList;

  return (
    <Box height="65vh">
      {title && (
        <Title  title={title} highlight="history" fullWidth />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 5,
          py: sm ? 8 : 0,
          borderStyle: "solid",
          borderwidth: "1px",
          borderColor: "grey.400",
          height:"60vh",
          borderRadius: 3,
        }}
      >
        {resultOrderList?.length ? (
          resultOrderList.map((order, index) => (
            <Box
              key={index}
              justifyContent="space-evenly"
              width={sm ? undefined : "100%"}
            >
              <OrderCard width={short ? "350px" : "450px"} order={order} />
            </Box>
          ))
        ) : (
          <Box
            display="flex"
            minHeight={"300px"}
            alignItems="center"
            justifyContent={"center"}
          >
            <Title title="Looks like you have no order"/>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default OrderHistory;
