import { useContext } from "react";
import { QuotationContext } from "../context/QuotationContextProvider";

const useQuotation = () => {
  const { quotation, setQuotation, initQuotation } =
    useContext(QuotationContext);
  const handleClearQuotation = () => {
    setQuotation(initQuotation);
  };

  return {
    quotation,
    handleClearQuotation,
    setQuotation,
  };
};

export default useQuotation;
