import { browser } from "$app/env";
import axios from "axios";

const axiosAPI = axios.create({
  baseURL : "https://happivibes-backend.com/api/",
});
let token = '';
if(browser){
  token = window.localStorage.getItem('token') && window.localStorage.getItem('token') != "undefined" ? `${window.localStorage.getItem('token')}` : ``
  token = token.substring(1)
  token = token.replace('"',"")
}

const apiRequest = (method, url, request) => {
    const headers = {
        "Authorization": "Bearer "+token,
        "content-type": "application/json",
        "Accept": "application/json"
    };
    return axiosAPI({
        method,
        url,
        data: request,
        headers
      }).then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.resolve(err.response.data);
      });
};

const get = (url, request) => apiRequest("get",url,request);

const deleteRequest = (url, request) =>  apiRequest("delete", url, request);

const post = (url, request) => apiRequest("post", url, request);

const put = (url, request) => apiRequest("put", url, request);

const patch = (url, request) =>  apiRequest("patch", url, request);

const API = {
    get,
    delete: deleteRequest,
    post,
    put,
    patch
};
export default API;