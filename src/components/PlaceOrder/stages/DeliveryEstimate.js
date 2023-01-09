import React, { useEffect, useState } from "react";
import Title from "../../general/Title";
import Body from "../../general/Body";
import { Box } from "@mui/system";

import EstimateFlexRow from "../../EstimateFlexRow";
import UseOrder from "../../../hooks/useOrder";
import InParentLoader from "../../InParentLoader";
import useApi from "../../../hooks/useApi";
import { Button, Typography } from "@mui/material";
import PaymentSelect from "../PaymentSelect";
import PaymentMethods from "../../../pages/UserProfile/PaymentMethods";
const DeliveryEstimate = ({ setIsCurrentStageValid, submissionError }) => {
  const [estimate, setEstimate] = useState({});
  const [paymentMethodList, setPaymentMethodList] = useState([]);
  const { order } = UseOrder();
  const { getPaymentMethodList, orderEstimate, getCustomerOrderPromotion } =
    useApi();

  const {
    pickupFullAddress,
    deliveryChargeAmount,
    subTotalChargeAmount,
    salesTaxChargeAmount,
    discountAmount,
    totalChargeAmount,
  } = estimate;

  const { paymentMethodId } = order;

  setIsCurrentStageValid(
    Boolean(paymentMethodId) && Boolean(estimate.pickupFullAddress)
  );

  useEffect(() => {
    if (!Boolean(estimate.pickupFullAddress)) {
      getCustomerOrderPromotion()
        .then((res) => res.payload.discountCode)
        .then((discountCode) => orderEstimate({ ...order, discountCode }))
        .then((res) => {
          setEstimate(res.payload);
        })
        .catch((err) => console.log(err));
    }
  }, [order, orderEstimate, getCustomerOrderPromotion, estimate]);

  useEffect(() => {
    getPaymentMethodList()
      .then((res) => setPaymentMethodList(res.payload))
      .catch((err) => console.log(err));
  }, [getPaymentMethodList]);

  if (!pickupFullAddress) return <InParentLoader />;

  return (
    <Box width="80%">
      <Title id="modal-modal-title">Order Estimation</Title>
      <Body mt={2} fontWeight={"bold"} component="h6">
        Pricing Details
      </Body>
      <Box sx={sectionStyle} id="pricing details" component={"section"}>
        <EstimateFlexRow label={"Delivery Fee"} price={deliveryChargeAmount} />
        {Boolean(discountAmount) && (
          <EstimateFlexRow label={"Discount"} minus price={discountAmount} />
        )}
        <EstimateFlexRow label={"Subtotal"} price={subTotalChargeAmount} />
        <EstimateFlexRow label={"Tax"} price={salesTaxChargeAmount} />
        <EstimateFlexRow bold label={"Total"} price={totalChargeAmount} />
      </Box>
      <Typography sx={{ my: 2 }}>Select A Payment Method</Typography>
      <PaymentSelect paymentMethodList={paymentMethodList} />
      <Typography sx={{ my: 2 }} color="error">
        {submissionError}
      </Typography>
      <Button>
        <PaymentMethods />
      </Button>
    </Box>
  );
};

const sectionStyle = {
  px: 2,
  py: 3,
  mt: 2,
  borderColor: "secondary",
  borderStyle: "solid",
  borderRadius: 2,
  borderWidth: 1,
};

export default React.memo(DeliveryEstimate);
