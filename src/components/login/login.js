import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { FormInput } from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  submitHandler = e => {
    e.prevetnDefault();

    this.setState({ email: "", password: "" });
  };

  inputHandler = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="mt-5">
        <h3>Already have account with us?</h3>
        <small>Login with your email and password</small>
        <Form onSubmit={this.submitHandler} className="mt-5">
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            placeholder="Enter email"
            inputHandler={this.inputHandler}
            required
          ></FormInput>

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            label="Password"
            inputHandler={this.inputHandler}
            required
          ></FormInput>

          <CustomButton variant="warning" type="submit" className="float-right">
            Log In
          </CustomButton>
        </Form>
      </div>
    );
  }
}
