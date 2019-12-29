import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CartLabel from "../cart-label/cart-label";
import CartMini from "../cart-mini/cart-mini";
import { Link } from "react-router-dom";
import { firebaseAuth } from "../../firebase/firebase.helpers";
import { connect } from "react-redux";

const NavHeader = ({ currentUser, cartDisplay }) => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand>
        <Link to="/" className="nav navbar-brand">
          GYMBELLS &amp; GYMATS
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav className="mr-5">
          <Link to="/" className="nav-link">
            HOME
          </Link>
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <div
              className="nav-link"
              style={{ cursor: "pointer" }}
              onClick={() => firebaseAuth.signOut()}
            >
              LOG OUT
            </div>
          ) : (
            <Link to="/signin" className="nav-link">
              LOGIN
            </Link>
          )}
          <CartLabel />
        </Nav>
        {cartDisplay && <CartMini />}
      </Navbar.Collapse>
    </Navbar>
  );
};

//ACCESS STATE ROOT REDUCER
const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    cartDisplay: state.cart.display
  };
};

export default connect(mapStateToProps)(NavHeader);
