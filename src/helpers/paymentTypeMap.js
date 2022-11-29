import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
  FaCcJcb,
  FaCreditCard,
} from "react-icons/fa";

const cardMap = {
  visa: <FaCcVisa />,
  mastercard: <FaCcMastercard />,
  amex: <FaCcAmex />,
  discover: <FaCcDiscover />,
  jcb: <FaCcJcb />,
  others: <FaCreditCard />,
};

export default cardMap;
