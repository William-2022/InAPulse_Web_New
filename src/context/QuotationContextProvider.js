import React, { createContext, useState } from "react";

export const QuotationContext = createContext({});

const QuotationContextProvider = ({ children }) => {
  const initQuotation = {
    pickupFullAddress: "",
    dropFullAddress: "",
    pickupLat: 0,
    pickupLng: 0,
    dropLat: 0,
    dropLng: 0,
  };
  const [quotation, setQuotation] = useState(initQuotation);
  return (
    <QuotationContext.Provider
      value={{ quotation, setQuotation, initQuotation }}
    >
      {children}
    </QuotationContext.Provider>
  );
};

export default QuotationContextProvider;
