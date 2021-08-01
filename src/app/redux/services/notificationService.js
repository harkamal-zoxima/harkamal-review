import {apiClientService} from './apiClientService'
import _config from "../../../config"

const {
  apiClient,
  isWithin,
  in200s
} = apiClientService;

let base_url = _config['hosts']['clientServer'];

function landingNotification(params) {
  let url = `${base_url}/imonwebapi/api/Notification/getAllNotificationUAT`;
  
  return apiClient.post(url, {
            "ActionId":"9824", 
            "CustomerNo":"C0727", 
            "UniqueCode":"6a3bc6c3b993494d918660aaceb36882" 
    }).then((response) => {
    if (in200s(response.status)) {
      console.log(response)
      return response.data.Item;
    }
    return null
  })
}

export const notificationService = {
    landingNotification
}
