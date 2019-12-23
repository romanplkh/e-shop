import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/" className="nav navbar-brand">
        GYMBELLS &amp; GYMATS
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav className="mr-5">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          <Link to="/shop" className="nav-link">
            CONTACT
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavHeader;
