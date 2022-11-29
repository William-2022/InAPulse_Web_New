import {
  getData,
  postData,
  patchData,
  unAuthedPostData,
  unAuthedGetData,
} from "./APIhelper";
import axios from "axios";

export const getOrderList = () => {
  return getData(`/v1/customer/delivery/order/list`);
};

export const getOrderDetail = (orderId) => {
  return getData(`/v1/customer/delivery/order/detail/${orderId}`);
};

/**
 *
 * @param {String} orderId
 * @returns
 */
export const getOrderTimeline = (orderId) => {
  return getData(`/v1/customer/delivery/order/timeline/${orderId}`);
};

/**
 * Get order estimation before submit
 *
 * @param {Object} body
 * params:
 * pickupFullAddress!,
 * dropFullAddress!,
 * discountCode
 * @returns
 */
export const orderEstimate = (body) => {
  return postData(`/v1/customer/delivery/order/estimate`, body);
};

/**
 * Get order estimation before submit
 *
 * @param {Object} body
 * params:
 * pickupFullAddress!,
 * dropFullAddress!,
 * discountCode
 * @returns
 */
export const orderEstimateUnAuthed = (body) => {
  return unAuthedPostData(
    `/v1/customer/delivery/order/estimate`,
    body,
    `publicRESTv1`
  );
};

/**
 *  return available customer promotion (only one possible concurrent promotion in current design)
 * @returns
 */
export const getCustomerOrderPromotion = () => {
  return getData(`/v1/customer/promotion`);
};

/**
 * 
 * @param {Object} body 
 * params:
 * paymentMethodId!,
  pickupPersonName!,
  pickupPersonPhone,
  pickupFullAddress!,
  dropPersonName!,
  dropPersonPhone,
  dropFullAddress!,
  deliveryInstruction,
  packageType!,
  packageDescription!,
  isLoadNeeded!,
  isSpecialHandling!,
  scheduledAt,
  discountCode
 * 
 * 
 * @returns 
 */
export const orderSubmit = (body) => {
  return postData(`/v1/customer/delivery/order/submit`, body);
};

export const orderCancel = (orderId, body) => {
  return patchData(`/v1/customer/delivery/order/cancel/${orderId}`, body);
};

/**
 *
 * @param {Stinrg} orderId
 * @param {Object} body param : paymentMethodId!, totalAmount!
 * @returns
 */
export const orderTip = (orderId, body) => {
  return postData(`/v1/customer/delivery/order/tip/${orderId}`, body);
};

/**
 *  city list of coverage
 * @returns {Promise}
 */
export const orderCoverage = () => {
  return unAuthedGetData(`/v1/public/coverage`, `publicRESTv1`);
};

/// TEMPORARY
const tgPublic =
  "https://42559ec8re.execute-api.ca-central-1.amazonaws.com/williamtg";

export const getBusinessCoverage = () => {
  return axios.get(`${tgPublic}/v1/public/coverage`).then((res) => res.data);
};

export const getBusinessEstimate = (pickupFullAddress, orderList, optimize) => {
  return axios.post(`${tgPublic}/v1/public/delivery/businessorder/estimate`, {
    pickupFullAddress,
    orderList,
    optimize,
  }).then(res=>res.data)
};
