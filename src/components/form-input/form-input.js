import React from "react";
import Form from "react-bootstrap/Form";

const FormInput = ({ inputHandler, label, validationMsg, ...props }) => {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control {...props} onChange={inputHandler} />
      <Form.Control.Feedback type="invalid">
        {validationMsg}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default FormInput;
