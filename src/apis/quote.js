import { unAuthedPostData } from "./APIhelper";

/**
 * provide order estimation without promotion (as there is no user present), 
 * 
 * body: required {pickupFullAddress,dropFullAddress},
 * Example:    
 *   
 * {
 * "pickupFullAddress": "2770 Dufferin St #201, North York, ON M6B 3R7, Canada",
 *     
 * "dropFullAddress": "564 Pape Ave, Toronto, ON M4K 3R6, Canada"}
 * @param {Object} body 
 * @returns {Promise}
 */
export const getUnAuthedOrderEstimate=(body)=>{
  return unAuthedPostData(`/v1/public/delivery/order/estimate`,body,`publicRESTv1`) 

}

/**
 *  send support email provideing the followings:
 * 
 * body:firstName, lastName, email(required), message
 * Example:
 * {
 * "firstName":"William",
 * "lastName":"Liu",
 * "email":"William@inapulse.com",
 * "message":"Hello there"
 *  }
 *
 * @param {Object} body 
 * @returns 
 */
export const sendSupportEmail=(body)=>{
  return unAuthedPostData(`/v1/public/contact`,body,`publicRESTv1`) 
}

/**
 *  send driver application email provideing the followings:
 * 
 * body:fullName, email(required), phone
 * Example:
 * {
 * "fullName":"Mike Sanocki",
 * "email":"mike@inapulse.com",
 * "phone":"+15555555"
 *  }
 *
 * @param {Object} body 
 * @returns 
 */
 export const sendApplicationEmail=(body)=>{
  return unAuthedPostData(`/v1/public/application`,body,`publicRESTv1`) 
}