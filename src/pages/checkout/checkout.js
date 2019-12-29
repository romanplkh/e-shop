import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectTotalItemsInCart
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import CheckoutButton from "../../components/checkout-button/checkout-button";

export const CheckoutPage = ({ itemsInCart, total }) => {
  return (
    <Container className="mb-5">
      <h1 className="display-3 mt-5 text-center">Checkout Page</h1>
      <Row>
        <Table responsive>
          <thead>
            <tr className="text-center">
              <th>Product</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {itemsInCart.map(item => {
              return <CheckoutItem cartItem={item} key={item.id} />;
            })}
          </tbody>
        </Table>
      </Row>
      <Row className="justify-content-end border-top">
        <h2 className="mt-3"> TOTAL: CAD$ {total}</h2>
      </Row>
      <Row className="justify-content-center">
        <CheckoutButton price={total} />
      </Row>
      <div className="text-danger mt-5">
        <p>
          Payment is implemented for testing purposes only! Do not enter a valid
          CC information. If you want to test payment processing use the
          following credentials
        </p>
        <p>CC: 4242 4242 4242 4242 </p>
        <p>CVV: Any 3 digits </p>
        <p>EXP: Any future date</p>
      </div>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsInCart: selectCartItems,
  total: selectTotalItemsInCart
});

export default connect(mapStateToProps)(CheckoutPage);
