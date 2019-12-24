import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { firebaseAuth } from "../../firebase/firebase.helpers";

const NavHeader = ({ currentUser }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/" className="nav navbar-brand">
        GYMBELLS &amp; GYMATS
      </Link>
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavHeader;
