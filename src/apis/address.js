import { getData, postData, deleteData, putData } from "./APIhelper";

export const getAddressList = () => {
  return getData(`/v1/customer/preset/address/list`);
};

/**
 * 
 * @param {Object} body  params:name!, address!, address2, city!, province!, postalCode!
 * @returns 
 */
export const createAddresss = (body) => {
  return postData(`/v1/customer/preset/address`, body);
};
/**
 * @param {String} addressId
 * @param {Object} body  params:name!, address!, address2,  city!, province!, postalCode
 * @returns 
 */
export const updateAddress = (addressId, body) => {
  return putData(`/v1/customer/preset/address/${addressId}`, body);
};



export const deleteAddress = (addressId) => {
  return deleteData(`/v1/customer/preset/address/${addressId}`);
};


