import { getData } from "./APIhelper";
const apiName = "appRESTv1";



/**
 * gettint api key from appRest server
 * @returns {Promise}
 */
export const getGoogleAPIKey = () => {
  return getData("/v1/app/key/googlemap",apiName);
};




