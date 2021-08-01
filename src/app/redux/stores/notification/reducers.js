import { INITIAL_STATE } from "./initial_state";
import { NotificationTypes } from "./actions";
import { createReducer } from "reduxsauce";

export const landingNotificationLoading = (state) => ({
    ...state,
    landingNotificationLoader: true
  })
  
  export const landingNotificationLoadingStop = (state) => ({
    ...state,
    landingNotificationLoader: false
  })
  
  export const landingNotificationSuccess = (state, { payload }) => ({
    ...state,
    landingNotifications: payload,
    landingNotificationLoader: false
  })
  
  export const landingNotificationFailure = (state, { errorMessage }) => ({
    ...state,
    landingNotificationLoader: false,
    landingNotifications: []
  });

  export const reducer = createReducer(INITIAL_STATE, {

    [NotificationTypes.LANDING_NOTIFICATION_LOADING]: landingNotificationLoading,
    [NotificationTypes.LANDING_NOTIFICATION_LOADING_STOP]: landingNotificationLoadingStop,
    [NotificationTypes.LANDING_NOTIFICATION_SUCCESS]: landingNotificationSuccess,
    [NotificationTypes.LANDING_NOTIFICATION_FAILURE]: landingNotificationFailure,
  
    
  });