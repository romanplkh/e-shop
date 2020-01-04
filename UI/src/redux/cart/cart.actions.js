import {
  CART_TOGGLER,
  ADD_ITEM_TO_CART,
  REMOVE_ITEMS_FROM_CART,
  REMOVE_ITEM_FROM_CART,
  RESET_CART
} from "./cart.types";

export const toggleCart = () => ({
  type: CART_TOGGLER
});

export const addToCart = item => ({
  type: ADD_ITEM_TO_CART,
  payload: item
});

export const removeItemsFromCart = item => ({
  type: REMOVE_ITEMS_FROM_CART,
  payload: item
});

export const removeItemFromCart = item => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: item
});

export const resetCart = () => ({
  type: RESET_CART
});
