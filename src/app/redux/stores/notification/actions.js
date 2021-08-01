import {createActions} from "reduxsauce"

const {Types, Creators} = createActions({
    //notification action
    landingNotification: ['payload'],
	landingNotificationLoading: null,
	landingNotificationLoadingStop: null,
	landingNotificationSuccess: ['payload'],
	landingNotificationFailure: null,


})

export const NotificationTypes = Types
export default Creators