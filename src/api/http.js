import axios from "axios";
import { Message } from "element-ui";
import Router from "@/router";

axios.defaults.timeout = 10000;
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
