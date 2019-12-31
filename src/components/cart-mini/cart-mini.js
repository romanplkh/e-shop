import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./cart-mini.css";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCart } from "../../redux/cart/cart.actions";

export const CartMini = ({ itemsInCart, history, dispatch }) => {
  let itemsToDisplay;
  if (itemsInCart.length > 0) {
    itemsToDisplay = itemsInCart.map(item => {
      return <CartItem {...item} key={item.id} />;
    });
  } else {
    itemsToDisplay = (
      <h3 className="d-flex align-self-center my-auto text-muted">
        Cart is empty
      </h3>
    );
  }

  return (
    <div className="cart-mini">
      <div className="cart-items">{itemsToDisplay}</div>
      <CustomButton
        className="btn btn-warning font-weight-bold"
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCart());
        }}
      >
        Go to Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsInCart: selectCartItems
});

// const mapStateToProps = state => {
//   return {
//     itemsInCart: selectCartItems(state)
//   };
// };

export default withRouter(connect(mapStateToProps)(CartMini));
