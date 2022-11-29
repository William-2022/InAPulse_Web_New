import React, { createContext, useState, useEffect, useCallback } from "react";
import _ from "lodash";

import useApi from "../hooks/useApi";

export const OrderContext = createContext({});

const fetchDurationMinute = 1 / 6;
const fetchDurtionMs = fetchDurationMinute * 60 * 1000;
const initOrder = {
  paymentMethodId: "",
  pickupPersonName: "",
  pickupPersonPhone: "+1",
  pickupFullAddress: "",
  pickupAddress2: "",
  pickupLat: 0,
  pickupLong: 0,
  dropPersonName: "",
  dropPersonPhone: "+1",
  dropFullAddress: "",
  dropAddress2: "",
  dropLat: 0,
  dropLong: 0,
  deliveryInstruction: "",
  packageType: "PARCEL",
  packageDescription: "",
  isLoadNeeded: false,
  isSpecialHandling: false,
  scheduledAt: null,
};
//** DO NOT put postal code in full address as sometimes it may lead to wrong coord generated for geocoding api in backend
// ***important the long,lat send to the backend will not be processed by the back, backend itself uses geocoding to convert address provided to coord,

const OrderContextProvider = ({ children }) => {
  const [coverage, setCoverage] = useState([]);
  const [businessCoverage, setBusinessCoverage] = useState([]);

  const [order, setOrder] = useState(initOrder);
  const [orderList, setOrderList] = useState([]);
  const [listLoading, setListLoading] = useState(true);

  const { orderCoverage, getOrderList, getBusinessCoverage } = useApi();

  const fetchOrderList = useCallback(async () => {
    try {
      const res = await getOrderList();
  //Fetching Order List

      // Checks to see if the list needs to be updated
      if (!_.isEqual(orderList, res.payload)) {
     //Updating Order List
        setOrderList(res.payload);
      }
    } catch (err) {
      //console.log(err);
    } finally {
      setListLoading(false);
    }
  }, [getOrderList, orderList]);

  // Used for getting orderlist
  useEffect(() => {
    // Interval to set the order list
    const orderInterval = setInterval(async () => {
      fetchOrderList();
    }, fetchDurtionMs);

    fetchOrderList();
    // clear the interval when leaving screen
    return () => {
      clearInterval(orderInterval);
    };
  }, [fetchOrderList, orderList]);

  // Used to get the coverage for dropdown
  useEffect(() => {
    orderCoverage()
      .then((res) => setCoverage(res.payload))
      .catch((err) => window.alert("error fetching coverage:", err));
  }, [orderCoverage]);

  useEffect(() => {
    getBusinessCoverage()
      .then((res) => {setBusinessCoverage(res.payload)})
      .catch((err) => window.alert("error fetching coverage:", err));
  }, [getBusinessCoverage]);

  return (
    <OrderContext.Provider
      value={{
        coverage,
        businessCoverage,
        order,
        initOrder,
        setOrder,
        fetchOrderList,
        orderList,
        listLoading,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
