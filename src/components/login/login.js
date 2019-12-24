import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { loginWithGoogle, firebaseAuth } from "../../firebase/firebase.helpers";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  submitHandler = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
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

          <Row className="justify-content-around align-items-start">
            <CustomButton
              variant="warning"
              type="submit"
              className="float-right"
            >
              Log In
            </CustomButton>
            <div>
              <CustomButton variant="danger" onClick={loginWithGoogle}>
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
  }
}
