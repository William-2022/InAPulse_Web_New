import { Auth, API } from "aws-amplify";
import awsExport from "../aws-exports";

const defaultApiName = "customerRESTv1";

const { aws_user_files_s3_bucket, aws_user_files_s3_bucket_region } = awsExport;

export const imageUrlEndpoint = `https://${aws_user_files_s3_bucket}.s3.${aws_user_files_s3_bucket_region}.amazonaws.com/public/`;

/**
 *
 * @param {*} path  path of request
 * @returns {Promise}
 */
export const getData = async (path, apiName = defaultApiName) => {
  const myInit = {
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getIdToken()
        .getJwtToken()}`,
    },
  };

  return await API.get(apiName, path, myInit);
};

/**
 *
 * @param {*} path path of request
 * @param {*} body body of request
 * @returns {Promise}
 */
export const postData = async (path, body, apiName = defaultApiName) => {
  const myInit = {
    body,
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getIdToken()
        .getJwtToken()}`,
    },
  };

  return await API.post(apiName, path, myInit);
};
/**
 *
 * @param {*} path path of request
 * @param {*} body body of request
 * @returns {Promise}
 */
export const patchData = async (path, body, apiName = defaultApiName) => {
  const myInit = {
    body,
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getIdToken()
        .getJwtToken()}`,
    },
  };

  return await API.patch(apiName, path, myInit);
};

/**
 *
 * @param {*} path path of request
 * @param {*} body body of request
 * @returns {Promise}
 */
export const putData = async (path, body, apiName = defaultApiName) => {
  const myInit = {
    body,
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getIdToken()
        .getJwtToken()}`,
    },
  };

  return await API.put(apiName, path, myInit);
};

/**
 *
 * @param {*} path path of request
 * @param {*} body body of request
 * @returns {Promise}
 */
export const deleteData = async (path, apiName = defaultApiName) => {
  const myInit = {
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getIdToken()
        .getJwtToken()}`,
    },
  };

  return await API.del(apiName, path, myInit);
};

/**
 *
 * @param {*} path path of request
 * @param {*} body body of request
 * @returns {Promise}
 */
export const unAuthedPostData = async (path, body, apiName) => {
  const myInit = {
    body,
  };

  return await API.post(apiName, path, myInit);
};

/**
 *
 * @param {*} path path of request
 * @param {*} body body of request
 * @returns {Promise}
 */
export const unAuthedGetData = async (path, apiName) => {
  return await API.get(apiName, path);
};
