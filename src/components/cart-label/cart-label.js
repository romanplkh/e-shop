import React from "react";
import Badge from "react-bootstrap/Badge";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions";

const CartLabel = ({ cartToggler }) => {
  return (
    <div className="nav-link ml-3" onClick={cartToggler}>
      <i
        className="fa fa-shopping-cart"
        style={{
          fontSize: "25px",
          display: "block",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        <Badge variant="dark">9</Badge>
      </i>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    cartToggler: () => dispatch(toggleCart())
  };
};

export default connect(null, mapDispatchToProps)(CartLabel);
