import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT_FAIL,
  LOG_OUT_SUCCESS,
  REGISTER_USER_FAIL
} from "./user.types";

const initialState = {
  currentUser: null,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };

    case LOGIN_FAIL:
    case LOG_OUT_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case LOG_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };

    default:
      return state;
  }
};

export default userReducer;
