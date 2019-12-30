import { takeEvery, call, put, takeLatest } from "redux-saga/effects"; //listens for every type of action passed to it
import { FETCH_INVENTORY_START } from "./shop.types";
import {
  firestore,
  mapCollectionSnaphotToObject
} from "../../firebase/firebase.helpers";
import { fetchInventorySuccess, fetchInventoryFail } from "./shop.actions";

export function* fetchInventoryAsync() {
  try {
    const collectionRef = firestore
      .collection("groups")
      .orderBy("title", "asc");

    //LIKE ASYNC/AWAIT WILL BRING VALUE TO VAR
    const snapshot = yield collectionRef.get();
    //CALL --> INVOKES THE FUNCTION WITH PARAMS PASSED TO IT
    const inventory = yield call(mapCollectionSnaphotToObject, snapshot);

    //PUT---> ANALOG OF DISPATCH IN REDUX
    yield put(fetchInventorySuccess(inventory));
  } catch (error) {
    yield put(fetchInventoryFail(error.message));
  }
}

export function* fetchInventoryStart() {
  //LISTEN FOR ACTION, CALL METHOD BASED ON THIS ACTION
  //CREATE NON BLOCKING WAY OF RUNNING APP, EVENT IF API OR DB TRIP IS LONG
  yield takeLatest(FETCH_INVENTORY_START, fetchInventoryAsync);
}
