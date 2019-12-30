import { all, call } from "redux-saga/effects";
import {fetchInventoryStart} from "./shop/shop.sagas";

export default function* rootSaga() {
  yield all([ call(fetchInventoryStart)]);
}
