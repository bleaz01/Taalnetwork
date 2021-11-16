import axios from "axios";

// export const URL = "https://boiling-wildwood-62655.herokuapp.com/https://taalnetworkserver.herokuapp.com/graphql",
//;
export const URL = "http://localhost:4000/";


export const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 8000,
  responseType: "json",
  headers: { "X-Custom-Header": "foobar" },
});

export default function RequestAPI(method = "GET", url = "/", data = []) {
  return axios({
    method: method,
    url: URL + url,
    data: data,
    responseType: "json",
    withCredentials:false,
    headers: {
       "Access-Control-Allow-Origin": "http://localhost:3000",
       
       },
    
  });
}

export function RequestAPIAuth(
  method = "GET",
  url = "/",
  data = [],
  authToken = ""
) {
  return axios({
    method: method,
    url: URL + url,
    data: data,
    responseType: "json",
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      Authorization: authToken,
    },
  });
}

export const CHECK_USERNAME = `check-username/`;