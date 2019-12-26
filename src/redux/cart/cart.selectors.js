import { createSelector } from "reselect";

//Input selector
const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.items);

export const countItemsInCart = createSelector([selectCartItems], itemsInCart =>
  itemsInCart.reduce((result, currentItem) => result + currentItem.quantity, 0)
);

export const selectTotalItemsInCart = createSelector([selectCartItems], items =>
  items.reduce(
    (result, currentItem) => result + currentItem.price * currentItem.quantity,
    0
  )
);
