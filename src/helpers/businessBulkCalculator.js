const BUSINESS_REGULAR_FLAT_RATE_BEYOND_2 = 14.99;
const BUSINESS_REGULAR_FLAT_RATE_BEYOND_5 = 11.99;
const BUSINESS_REGULAR_FLAT_RATE_BEYOND_10 = 9.99;

/**
 *  calculate the business flat rate based on number of order
 * @param {INT} numOfOrder
 * @returns {float} deliveryprice of order
 */
const getBusinessDeliveryOrderPrice = (numOfOrder) => {
  let rate;
  if (numOfOrder >= 2 && numOfOrder <= 4) {
    rate = BUSINESS_REGULAR_FLAT_RATE_BEYOND_2;
  }
  if (numOfOrder >= 5 && numOfOrder < 10) {
    rate = BUSINESS_REGULAR_FLAT_RATE_BEYOND_5;
  }
  if (numOfOrder >= 10) {
    rate = BUSINESS_REGULAR_FLAT_RATE_BEYOND_10;
  }
  return numOfOrder * rate;
};

export default getBusinessDeliveryOrderPrice;
