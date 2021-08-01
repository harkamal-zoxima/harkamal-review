import { apiClientService } from "./apiClientService";
import { helperService } from "../../../common/utils/helperService";
import _config from "../../../config";

const { apiClient, isWithin, in200s } = apiClientService;

let base_url = _config["hosts"]["adminServer"];

function login(params) {
  let url = `${base_url}/login/login?username=${params.username}&password=${params.password}`;

  return apiClient
    .get(url)
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"][0];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function logout(params) {
  let url = `${base_url}/login/logout`;
  const zxUser = JSON.parse(localStorage.getItem("UserDetails"))["Id"];
  const body = { zx_user: zxUser };

  return apiClient
    .post(url, body)
    .then((response) => {
      if (in200s(response.status)) {
        // localStorage.removeItem("user_name");
        // localStorage.removeItem("account_type");
        return response.data || true;
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

export const userService = {
  login,
  logout,
};
