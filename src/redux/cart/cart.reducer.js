import {
  CART_TOGGLER,
  ADD_ITEM_TO_CART,
  REMOVE_ITEMS_FROM_CART,
  REMOVE_ITEM_FROM_CART
} from "./cart.types";

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

    case REMOVE_ITEMS_FROM_CART:
      return {
        ...state,
        items: state.items.filter(it => it.id !== action.payload.id)
      };

    case REMOVE_ITEM_FROM_CART:
      let oldCart = [...state.items];
      let newCart = [];

      let foundCartItem = oldCart.find(
        cartItem => cartItem.id === action.payload.id
      );

      if (foundCartItem && foundCartItem.quantity === 1) {
        newCart = oldCart.filter(item => item.id !== foundCartItem.id);
      } else {
        newCart = oldCart.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity - 1
            };
          }

          return { ...item };
        });
      }

      return {
        ...state,
        items: newCart
      };
    default:
      return state;
  }
};

export default cartReducer;
