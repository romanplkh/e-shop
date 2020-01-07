import React, { useState } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { registerStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const Register = ({ dispatch }) => {
  const [userCreds, setUserCreds] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    formIsValidated: false,
    errorMessage: "",
    showAlert: false
  });

  const {
    confirmPassword,
    password,
    email,
    displayName,
    formIsValidated,
    errorMessage,
    showAlert
  } = userCreds;

  const submitHandler = async e => {
    e.preventDefault();

    const form = e.currentTarget;

    setUserCreds({ ...userCreds, formIsValidated: true });

    if (password !== confirmPassword) {
      setUserCreds({
        ...userCreds,
        errorMessage: "Passwords do not match",
        showAlert: true
      });
      return;
    }

    if (!form.checkValidity()) {
      return;
    }

    dispatch(registerStart({ email, password, displayName }));
  };

  const inputHandler = ({ target: { value, name } }) => {
    setUserCreds({ ...userCreds, [name]: value });
  };

  return (
    <div>
      <h3>Do not have an account?</h3>
      <small>Register with email and password</small>
      {showAlert && (
        <Alert
          variant="danger"
          onClose={() => setUserCreds({ ...userCreds, showAlert: false })}
          dismissible
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{errorMessage}</p>
        </Alert>
      )}
      <Form onSubmit={submitHandler} validated={formIsValidated} noValidate>
        <FormInput
          type="text"
          name="displayName"
          label="Name"
          value={displayName}
          placeholder="Your Name"
          inputHandler={inputHandler}
          validationMsg="Name is required"
          required
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          placeholder="Enter email"
          inputHandler={inputHandler}
          validationMsg="Email is invalid"
          required
        ></FormInput>

        <FormInput
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          label="Password"
          inputHandler={inputHandler}
          validationMsg="Password is required"
          required
        ></FormInput>

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm Password"
          label="Confirm Password"
          inputHandler={inputHandler}
          validationMsg="Confirm password is required"
          required
        ></FormInput>
        <CustomButton variant="warning" type="submit" className="float-right">
          Register
        </CustomButton>
      </Form>
    </div>
  );
};

export default connect(null)(Register);
