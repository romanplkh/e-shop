import { all, call, takeLatest, put } from "redux-saga/effects";
import { LOG_OUT_SUCCESS } from "../user/user.types";
import { resetCart } from "./cart.actions";

export function* clearCart() {
  yield put(resetCart());
}

export function* onUserLogOut() {
  yield takeLatest(LOG_OUT_SUCCESS, clearCart);
}

export function* cartSagas() {
  yield all([call(onUserLogOut)]);
}
