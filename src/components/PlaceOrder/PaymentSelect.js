import React from "react";
import { Select, MenuItem, Box, Typography } from "@mui/material";
import paymentTypeMap from "../../helpers/paymentTypeMap";
import UseOrder from "../../hooks/useOrder";
const PaymentSelect = ({ paymentMethodList }) => {
  const { order, setParamOrder } = UseOrder();
  const { paymentMethodId } = order;
  const firstAvailableMethod = paymentMethodList[0]?.id;

  const defaultValue = paymentMethodId
    ? paymentMethodId
    : firstAvailableMethod
    ? firstAvailableMethod
    : "";
  if (!paymentMethodId && firstAvailableMethod) {
    setParamOrder("paymentMethodId", firstAvailableMethod);
  }

  return (
    <Select
      value={defaultValue}
      onChange={(e) => {
        //console.log(e.target.value);

        setParamOrder("paymentMethodId", e.target.value);
        console.log(e.target.value);
      }}
      MenuProps={{ disableScrollLock: true }}
      sx={{ width: "100%" }}
    >
      {paymentMethodList.map(
        ({ id, brand, last4, expMonth, expYear }, index) => {
          return (
            <MenuItem key={index} value={id}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: "20px",
                }}
              >
                {paymentTypeMap[brand]
                  ? paymentTypeMap[brand]
                  : paymentTypeMap.others}
                <Box ml="20px">
                  <Typography>{`**** **** **** ${last4}`}</Typography>
                  <Typography
                    color={"grey.800"}
                    variant={"caption"}
                  >{`${expMonth} / ${expYear}`}</Typography>
                </Box>
              </Box>
            </MenuItem>
          );
        }
      )}
    </Select>
  );
};

export default PaymentSelect;

