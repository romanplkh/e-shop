import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {
  googleLoginStart,
  emailLoginStart
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

const Login = ({ dispatch }) => {
  const [userCreds, setUserCreds] = useState({ email: "", password: "" });

  const submitHandler = async e => {
    e.preventDefault();
    dispatch(emailLoginStart(userCreds));
  };

  const inputHandler = ({ target: { value, name } }) => {
    setUserCreds({ ...userCreds, [name]: value });
  };

  const { email, password } = userCreds;
  return (
    <div className="mt-5">
      <h3>Already have account with us?</h3>
      <small>Login with your email and password</small>
      <Form onSubmit={submitHandler} className="mt-5">
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          placeholder="Enter email"
          inputHandler={inputHandler}
          required
        ></FormInput>

        <FormInput
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          label="Password"
          inputHandler={inputHandler}
          required
        ></FormInput>

        <Row className="justify-content-around align-items-start">
          <CustomButton variant="warning" type="submit" className="float-right">
            Log In
          </CustomButton>
          <div>
            <CustomButton
              variant="danger"
              onClick={() => dispatch(googleLoginStart())}
              type="button"
            >
              Log In with Google
            </CustomButton>
            <small className="d-block text-muted">
              3rd part cookie must be enabled
            </small>
          </div>
        </Row>
      </Form>
    </div>
  );
};

export default connect(null)(Login);
