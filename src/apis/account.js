import { deleteData, patchData, unAuthedPostData } from "./APIhelper";

export const deleteUser = () => {
  return deleteData(`/v1/customer`);
};

export const updateUserApi = (name, phone_number) => {
  return patchData(`/v1/customer`, { name, phone_number });
};


/**
 *
 * @param {Object} params params required:
 * email,
 * name,
 * password,
 * phone_number
 *
 */
export const reEnableUser = (params) => {
  return unAuthedPostData(`/v1/public/customer/enable`, params, `publicRESTv1`);
};
