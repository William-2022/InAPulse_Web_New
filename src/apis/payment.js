import { getData, postData, deleteData } from "./APIhelper";


export const getPaymentMethodList=()=>{
  return getData(`/v1/customer/payment/method/list`)
}

/**
 * 
 * @param {Object} body params : number!,expMonth!,expYear!,cvc!
 * @returns 
 */
export const createPaymentMethod=(body)=>{
  return postData(`/v1/customer/payment/method`,body)
}

export const deletePaymentMethod=(paymentMethodId)=>{
  return deleteData(`/v1/customer/payment/method/${paymentMethodId}`)
}