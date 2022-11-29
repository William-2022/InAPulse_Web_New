import { useContext } from "react";
import { OrderContext } from "../context/OrderContextProvider";
import useApi from "./useApi";

const UseOrder = () => {
  const {
    coverage,
    businessCoverage,
    order,
    setOrder,
    initOrder,
    orderList,
    listLoading,
    fetchOrderList,
  } = useContext(OrderContext);
  const { orderSubmit: orderSubmitapi, orderEstimate } = useApi();

  const inAciveOrderStatusList = ["COMPLETED", "SCHEDULED", "CANCELLED"];
  // check if there is any active order for the customer
  const activeOrder = orderList.filter(
    (order) => !inAciveOrderStatusList.includes(order.status)
  )[0];

  /**
   * adjust the order state providing parma name, order object:
   * 
   * {
    "paymentMethodId": "",
    "pickupPersonName": "",
    "pickupPersonPhone": "",
    "pickupFullAddress": "",
    "pickupAddress2": "",
    "pickupLat": null,
    "pickupLong": null,
    "dropPersonName": "",
    "dropPersonPhone": "",
    "dropFullAddress": "",
    "dropAddress2": "",
    "dropLat": null,
    "dropLong": null,
    "deliveryInstruction": "",
    "packageType": "",
    "packageDescription": "document",
    "isLoadNeeded": false,
    "isSpecialHandling": false,
  }
   * 
   * @param {String} paramName key of the order that you want to adjust
   * @param {*} value value you want to input to the order key
   */
  const setParamOrder = (paramName, value) => {
    setOrder((prev) => {
      return { ...prev, [paramName]: value };
    });
  };

  const resetOrder = () => {
    setOrder(initOrder);
  };

  const orderSubmit = () => {
    let orderCopy = { ...order };
    if (!order.scheduledAt) {
      delete orderCopy.scheduledAt;
    }
    return orderSubmitapi(orderCopy).then((res) => {
      resetOrder();
      return res;
    });
  };

  return {
    activeOrder,
    coverage,
    businessCoverage,
    order,
    setParamOrder,
    orderSubmit,
    orderEstimate,
    fetchOrderList,
    orderList,
    listLoading,
  };
};

export default UseOrder;
