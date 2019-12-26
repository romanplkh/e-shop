import React from "react";
import Badge from "react-bootstrap/Badge";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions";
import { countItemsInCart } from "../../redux/cart/cart.selectors";

const CartLabel = ({ cartToggler, numItemsInCart }) => {
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
        <Badge variant="dark">{numItemsInCart}</Badge>
      </i>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numItemsInCart: countItemsInCart(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cartToggler: () => dispatch(toggleCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartLabel);
