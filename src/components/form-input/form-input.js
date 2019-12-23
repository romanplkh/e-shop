import React from "react";
import Form from "react-bootstrap/Form";

export const FormInput = ({ inputHandler, label, ...props }) => {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control {...props} onChange={inputHandler} />
    </Form.Group>
  );
};
