import {
  GOOGLE_LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  EMAIL_LOGIN_START,
  CHECK_USER_SESSION,
  LOG_OUT_FAIL,
  LOG_OUT_START,
  LOG_OUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_START
} from "./user.types";

//GOOGLE LOGIN
export const googleLoginStart = () => {
  return {
    type: GOOGLE_LOGIN_START
  };
};

//EMAIL LOGIN
export const emailLoginStart = ({ email, password }) => {
  return {
    type: EMAIL_LOGIN_START,
    payload: { email, password }
  };
};

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};

export const loginFail = error => {
  return {
    type: LOGIN_FAIL,
    payload: error
  };
};

export const checkUserSession = () => {
  return {
    type: CHECK_USER_SESSION
  };
};

export const logOutStart = () => {
  return {
    type: LOG_OUT_START
  };
};

export const logOutSuccess = () => {
  return {
    type: LOG_OUT_SUCCESS
  };
};

export const logOutFail = err => {
  return {
    type: LOG_OUT_FAIL,
    payload: err
  };
};

export const registerStart = user => {
  return {
    type: REGISTER_USER_START,
    payload: user
  };
};
export const registerSuccess = ({ user, additionalData }) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: { user, additionalData }
  };
};
export const registerFail = err => {
  return {
    type: REGISTER_USER_FAIL,
    payload: err
  };
};
