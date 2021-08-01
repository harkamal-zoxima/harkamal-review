import { INITIAL_STATE } from "./initial_state";
import { UserTypes } from "./actions";
import { createReducer } from "reduxsauce";

export const changeLoginForm = (state, { payload }) => {
  const { edited_field, edited_value } = payload;

  let changed_entity = {};
  changed_entity[edited_field] = edited_value;
  return {
    ...state,
    loginForm: {
      ...state.loginForm,
      ...changed_entity,
    },
  };
};

export const loginFormLoading = (state) => ({
  ...state,
  loginLoader: true,
});

export const loginFormLoadingStop = (state) => ({
  ...state,
  loginLoader: false,
});

export const submitLoginFormSuccess = (state, { payload }) => ({
  ...state,
  loginLoader: false,
});

export const setUserDetails = (state, { payload }) => ({
  ...state,
  userDetails: payload,
});

export const submitLoginFormFailure = (state, { errorMessage }) => ({
  ...state,
  loginLoader: false,
});

export const logoutSuccess = (state, { payload }) => ({
  ...state,
  logoutResponse: payload
});

export const logoutFailure = (state, { payload }) => ({
  ...state,
});

export const reducer = createReducer(INITIAL_STATE, {
  //login reducer
  [UserTypes.CHANGE_LOGIN_FORM]: changeLoginForm,
  [UserTypes.LOGIN_FORM_LOADING]: loginFormLoading,
  [UserTypes.LOGIN_FORM_LOADING_STOP]: loginFormLoadingStop,
  [UserTypes.SUBMIT_LOGIN_FORM_SUCCESS]: submitLoginFormSuccess,
  [UserTypes.SUBMIT_LOGIN_FORM_FAILURE]: submitLoginFormFailure,

  //user interaction reducer
  [UserTypes.SET_USER_DETAILS]: setUserDetails,

  //logout reducer
  [UserTypes.LOGOUT_SUCCESS]: logoutSuccess,
  [UserTypes.LOGOUT_FAILURE]: logoutFailure,
});
