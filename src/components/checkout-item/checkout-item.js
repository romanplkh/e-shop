import React from "react";
import "./checkout-item.css";

const CheckoutItem = ({ cartItem }) => {
  return (
    <tr className="checkout-item">
      <td>
        <img
          src={cartItem.imageUrl}
          alt={cartItem.name}
          style={{ height: "150px" }}
        />
      </td>
      <td>{cartItem.name}</td>
      <td>
        <i class="fa fa-angle-left quantity-control"> </i> {cartItem.quantity}{" "}
        <i class="fa fa-angle-right quantity-control"></i>
      </td>
      <td>{cartItem.price}</td>
      <td className="text-center">
        <i class="fa fa-times-circle remove-control"></i>
      </td>
    </tr>
  );
};

export default CheckoutItem;
