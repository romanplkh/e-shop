import { CART_TOGGLER, ADD_ITEM_TO_CART } from "./cart.types";

export const toggleCart = () => ({
  type: CART_TOGGLER
});

export const addToCart = item => ({
  type: ADD_ITEM_TO_CART,
  payload: item
});
