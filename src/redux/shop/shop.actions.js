import {
  POPULATE_SHOP_WITH_INVENTORY,
  FETCH_INVENTORY_START,
  FETCH_INVENTORY_SUCCESS,
  FETCH_INVENTORY_FAIL
} from "./shop.types";
import {
  firestore,
  mapCollectionSnaphotToObject
} from "../../firebase/firebase.helpers";

export const fetchInventoryStart = inventory => {
  return {
    type: FETCH_INVENTORY_START
  };
};

export const fetchInventorySuccess = inventory => {
  return {
    type: FETCH_INVENTORY_SUCCESS,
    payload: inventory
  };
};

export const fetchInventoryFail = err => {
  return {
    type: FETCH_INVENTORY_FAIL,
    payload: err
  };
};

export const fetchInventoryStartAsync = () => {
  return async dispatch => {
    try {
      const collectionRef = firestore
        .collection("groups")
        .orderBy("title", "asc");

      //FETCHING_DATA_STARTED
      dispatch(fetchInventoryStart());

      //USE PROMISE PATTERNT TO GET DATA FROM FB
      const snapshot = await collectionRef.get();
      //TRANSFORM SNAPSHOT DATA
      const inventory = mapCollectionSnaphotToObject(snapshot);
      //UPDATE REDUX STORE
      dispatch(fetchInventorySuccess(inventory));
    } catch (error) {
      dispatch(fetchInventoryFail(error.message));
    }
  };
};
