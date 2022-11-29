import * as payment from "../apis/payment";
import * as order from "../apis/order";
import * as address from "../apis/address";
import * as google from "../apis/google";
import * as account from "../apis/account";
import * as iapContact from "../apis/iapContact";
import * as quote from "../apis/quote";

/**
 *
 * @returns all api methods
 */
const useApi = () => {
  return {
    ...address,
    ...order,
    ...payment,
    ...google,
    ...account,
    ...iapContact,
    ...quote,
  };
};

export default useApi;
