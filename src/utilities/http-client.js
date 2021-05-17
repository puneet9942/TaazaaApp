import { create } from 'axios';

let globaltimeout = 10000;
export const setGlobalTimeOut = timeout => {
  globaltimeout = timeout || 10000;
};

export const getGlobalTimeOut = () => globaltimeout;

const api = create({
  timeout: globaltimeout,
});

const createApi = () => api;

const httpClient = () => createApi();

const httpPost = (endpoint, requestBody = {}, config = {}) =>
  httpClient().post(endpoint, requestBody, {
    ...config,
  });

const httpGet = (endpoint, config = {}) => {
  httpClient().get(endpoint, {
    ...config,
  });
};

const httpPut = (endpoint, config = {}) =>
  httpClient().put(endpoint, {
    ...config,
  });

const httpDelete = (endpoint, config = {}) =>
  httpClient().delete(endpoint, {
    ...config,
  });

const httpPatch = (endpoint, config = {}) =>
  httpClient().patch(endpoint, {
    ...config,
  });

const isSuccessResponse = statusCode =>
  statusCode === 200 || statusCode === 201 || statusCode === 204;

export { httpPost, httpGet, httpPut, httpDelete, httpPatch, isSuccessResponse };
