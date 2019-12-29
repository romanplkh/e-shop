import { POPULATE_SHOP_WITH_INVENTORY } from "./shop.types";

export const populateShopInventory = inventory => {
  return {
    type: POPULATE_SHOP_WITH_INVENTORY,
    payload: inventory
  };
};
