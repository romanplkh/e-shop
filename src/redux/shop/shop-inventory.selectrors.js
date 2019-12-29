import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopInventory = createSelector(
  [selectShop],
  shop => shop.inventory
);

export const selectGroupsPreview = createSelector(
  [selectShopInventory],
  inventory =>
    inventory
      ? Object.keys(inventory).map(
          inventoryGroupKey => inventory[inventoryGroupKey]
        )
      : []
);

export const selectGroup = groupId =>
  createSelector([selectShopInventory], groups =>
    groups ? groups[groupId] : null
  );
