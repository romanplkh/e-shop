import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopInventory = createSelector(
  [selectShop],
  shop => shop.inventory
);
