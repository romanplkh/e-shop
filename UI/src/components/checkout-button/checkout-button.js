import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./checkout-button.css";
import axios from "axios";

const CheckoutButton = ({ price }) => {
  const formatedPrice = price * 100;
  const key = "pk_test_XxI5lDJP3gHz4h15ZA9J2dTV00IGO78dGq";

  const onToken = async token => {
    try {
      await axios({
        url: "payment",
        headers: {
          "Content-type": "application/json"
        },
        method: "post",
        data: {
          amount: formatedPrice,
          token: token
        }
      });

      alert("Successfull payment");
    } catch (error) {
      console.log("Payment error: ", error);
      alert(
        "We could not process your payment. Please make sure you provided correct data"
      );
    }
  };

  return (
    <StripeCheckout
      currency="CAD"
      label="Pay Order 💳"
      name="GYMBELLS &amp; GYMATS"
      billingAddress
      shippingAddress
      image="https://i.ibb.co/7r4PJ6v/pay.jpg"
      description={`Your total is $${price}`}
      amount={formatedPrice}
      panelLabel="Pay Order 💳"
      token={onToken}
      stripeKey={key}
    />
  );
};

export default CheckoutButton;
