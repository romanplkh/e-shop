import { CART_TOGGLER, ADD_ITEM_TO_CART } from "./cart.types";

const intitalState = {
  display: false,
  items: []
};

const cartReducer = (state = intitalState, action) => {
  switch (action.type) {
    case CART_TOGGLER:
      return {
        ...state,
        display: !state.display
      };
    case ADD_ITEM_TO_CART:
      let oldCartItems = [...state.items];
      let newCartItems = [];

      let existingCartItem = oldCartItems.find(
        cartItem => cartItem.id === action.payload.id
      );

      if (existingCartItem) {
        newCartItems = oldCartItems.map(cartItem => {
          if (cartItem.id === existingCartItem.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1
            };
          } else {
            return cartItem;
          }
        });
      } else {
        newCartItems = [...oldCartItems, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        items: newCartItems
      };
    default:
      return { ...state };
  }
};

export default cartReducer;
