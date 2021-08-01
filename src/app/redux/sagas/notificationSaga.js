import { put, call } from "redux-saga/effects";
import NotificationActions from "../stores/notification/actions";
import { notificationService } from "../services/notificationService";

export function* fetchNotification({payload}) {
	try {
	  	yield put(NotificationActions.landingNotificationLoading())
	 	const data = yield call(notificationService.landingNotification, payload);
	  	if (data) {
	    	yield put(NotificationActions.landingNotificationSuccess(data));
	  	}else {
	    	yield put(NotificationActions.landingNotificationFailure());
	  	}
	}catch(error) {
		yield put(NotificationActions.landingNotificationFailure());
	}
}