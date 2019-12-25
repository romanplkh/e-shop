import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./cart-mini.css";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";

export const CartMini = ({ cart }) => {
  return (
    <div className="cart-mini">
      <div className="cart-items">
        {cart.map(item => {
          return <CartItem {...item} key={item.id} />;
        })}
      </div>
      <CustomButton className="button">Go to Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart.items
  };
};

export default connect(mapStateToProps)(CartMini);
