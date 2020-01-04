import React from "react";
import "./checkout-item.css";
import { connect } from "react-redux";
import {
  removeItemsFromCart,
  removeItemFromCart,
  addToCart
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, dispatch }) => {
  return (
    <tr className="checkout-item">
      <td>
        <img
          src={cartItem.imageUrl}
          alt={cartItem.name}
          style={{ height: "150px", width: "150px" }}
        />
      </td>
      <td>{cartItem.name}</td>
      <td style={{ verticalAlign: "middle" }}>
        <i
          className="fa fa-angle-left control quantity-control"
          onClick={() => dispatch(removeItemFromCart(cartItem))}
        ></i>
        <span style={{ padding: "5px", fontSize: "1.3em" }}>
          {cartItem.quantity}
        </span>
        <i
          className="fa fa-angle-right control quantity-control"
          onClick={() => dispatch(addToCart(cartItem))}
        ></i>
      </td>
      <td>CAD$ {cartItem.price}</td>
      <td className="text-center">
        <i
          className="fa fa-times-circle control remove-control"
          onClick={() => dispatch(removeItemsFromCart(cartItem))}
        ></i>
      </td>
    </tr>
  );
};

export default connect(null)(CheckoutItem);
