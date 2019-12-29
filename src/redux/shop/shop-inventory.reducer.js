//import { inventory } from "./shop-inventory.mock-data";
import {
  POPULATE_SHOP_WITH_INVENTORY,
  FETCH_INVENTORY_START,
  FETCH_INVENTORY_FAIL,
  FETCH_INVENTORY_SUCCESS
} from "./shop.types";

const initialState = {
  inventory: null,
  isFetching: false,
  errorMessage: undefined
};

const shopInventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_SHOP_WITH_INVENTORY:
      return {
        ...state,
        inventory: action.payload
      };
    case FETCH_INVENTORY_START:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_INVENTORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        inventory: action.payload
      };
    case FETCH_INVENTORY_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default shopInventoryReducer;
