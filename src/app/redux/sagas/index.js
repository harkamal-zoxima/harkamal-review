import { takeLatest, takeEvery, all, fork } from "redux-saga/effects";
import { UserTypes } from "../stores/user/actions"; // user actions
import { NotificationTypes } from "../stores/notification/actions"; //notification actions

import { logout, watchUserLoginRequest } from "./userSaga"; // User Saga
import { fetchNotification } from "./notificationSaga"

export default function* root() {
  yield all([
    //user
    takeLatest(UserTypes.LOGOUT, logout),
    fork(watchUserLoginRequest),
    takeEvery(NotificationTypes.LANDING_NOTIFICATION, fetchNotification),
  ]);
  
}
