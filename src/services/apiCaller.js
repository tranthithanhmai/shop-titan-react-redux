import axios from "axios";
import * as Config from "../constants/config";

export function NoAuth(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    headers: { 'content-type': 'application/json' },
    data: body
  });
}

export function call(endpoint, method, body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    data: body
  });
}