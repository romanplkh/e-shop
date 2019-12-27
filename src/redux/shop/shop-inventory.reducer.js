import { inventory } from "./shop-inventory.mock-data";

const initialState = {
  inventory
};

const shopInventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopInventoryReducer;
