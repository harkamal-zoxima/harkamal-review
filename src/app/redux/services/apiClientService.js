import axios from "axios";
import { is, curryN, gte } from "ramda";
import { helperService } from "../../../common/utils/helperService";

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number);
  return (
    isNumber(min) &&
    isNumber(max) &&
    isNumber(value) &&
    gte(value, min) &&
    gte(max, value)
  );
});

const in200s = isWithin(200, 299);

function errorResponseHandler(error) {console.log(error);}

const apiClient = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("cookie"),
  },
  timeout: 30000,
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  errorResponseHandler
);

export const apiClientService = {
  apiClient,
  isWithin,
  in200s,
};
