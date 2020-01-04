import React from "react";

const CartItem = ({ imageUrl, price, name, quantity }) => {
  return (
    <div className="row no-gutters justify-content-between align-items-start">
      <div className="col-md-4">
        <img
          src={imageUrl}
          style={{ width: "100%", height: "auto" }}
          alt={name}
        />
      </div>
      <div className="col-md-8">
        <h5>{name}</h5>
        <p className="mb-0">Price: {price} $</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
