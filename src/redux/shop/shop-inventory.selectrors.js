import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopInventory = createSelector(
  [selectShop],
  shop => shop.inventory
);

export const selectInventoryPreview = createSelector(
  [selectShopInventory],
  inventory =>
    inventory
      ? Object.keys(inventory).map(
          inventoryGroupKey => inventory[inventoryGroupKey]
        )
      : []
);

export const selectInventory = groupId =>
  createSelector([selectShopInventory], groups =>
    groups ? groups[groupId] : null
  );

export const selectIsInventoryFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);
