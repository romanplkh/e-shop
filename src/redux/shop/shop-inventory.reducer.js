//import { inventory } from "./shop-inventory.mock-data";
import { POPULATE_SHOP_WITH_INVENTORY } from "./shop.types";

const initialState = {
  inventory: null
};

const shopInventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_SHOP_WITH_INVENTORY:
      return {
        ...state,
        inventory: action.payload
      };
    default:
      return state;
  }
};

export default shopInventoryReducer;
