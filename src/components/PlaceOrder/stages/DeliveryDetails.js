import React,{useEffect} from "react";
import { Typography, Box} from "@mui/material";

import categoryList from "../../../helpers/categoryList";
import ItemCard from "../ItemCard";

import { MoreHoriz } from "@mui/icons-material";
import UseOrder from "../../../hooks/useOrder";

const DeliveryDetails = ({setIsCurrentStageValid}) => {
  const { order, setParamOrder } = UseOrder();
  const categoryListwithOthers = [
    ...categoryList,
    { label: "Others", icon: <MoreHoriz />, key: "others" },
  ];

  const isValid =
    Boolean(order.packageDescription)

    useEffect(() => {
      setIsCurrentStageValid(isValid);
    
    }, [isValid,setIsCurrentStageValid]);

  return (
    <Box>
      <Typography variant="body2" fontWeight="bold" >
        Select An Item Type
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignSelf: "center",
          maxWidth:"600px",
          gap: "20px",
          mt: "2%",
        }}
      >
        {categoryListwithOthers.map(({ label, icon, key }) => {
          const active = order.packageDescription === key;
          return (
            <ItemCard
              key={key}
              active={active}
              ItemType={label}
              icon={icon}
              onClick={() => {
                setParamOrder("packageDescription", key);
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default DeliveryDetails;
