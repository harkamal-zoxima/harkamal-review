import { put, call, take } from "redux-saga/effects";
import UserActions from "../stores/user/actions"; // user action
import { UserTypes } from "../stores/user/actions"; // user types
import { helperService } from "../../../common/utils/helperService";
import { userService } from "../services/userService";

function* loginUser(payload) {
  yield put(UserActions.loginFormLoading());
  const user = yield call(userService.login, payload);
  if (user) {
    yield put(UserActions.submitLoginFormSuccess(user));
    localStorage.setItem("UserDetails", JSON.stringify(user))
    yield put(UserActions.setUserDetails(user));
    
    payload.history.push("/dashboard");
  } else {
    yield put(UserActions.submitLoginFormFailure());
  }
}

export function* logout(payload) {
  const user = yield call(userService.logout);
  helperService.clearCookie();

  if (user) {
    window.location.href = "/login";
    yield put(UserActions.logoutSuccess(user));
  } else {
    yield put(UserActions.logoutFailure());
  }
}

export function* watchUserLoginRequest() {
  while (true) {
    const { payload } = yield take(UserTypes.SUBMIT_LOGIN_FORM);
    try {
      // const validationFailed = yield call(ValidationService.validateLoginForm, data);
      // if (validationFailed) {
      // 	HelperService.showToast({ message: validationFailed.error_message, duration: 2000, buttonText: 'Okay' });
      // 	yield put(UserActions.userLoginValidationFailed(validationFailed));
      // 	continue;
      // }
      yield call(loginUser, payload);
    } catch (err) {}
  }
}
