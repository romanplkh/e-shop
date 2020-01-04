import React from "react";
import Button from "react-bootstrap/Button";

export const CustomButton = ({ variant, children, ...otherProps }) => {
  return (
    <Button variant={variant} {...otherProps}>
      {children}
    </Button>
  );
};

export default CustomButton;
