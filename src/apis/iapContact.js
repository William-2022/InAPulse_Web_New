import {unAuthedGetData } from "./APIhelper";



export const getIapContact=()=>{
  return unAuthedGetData('/v1/public/iapContactMethod/',`publicRESTv1`)
}




