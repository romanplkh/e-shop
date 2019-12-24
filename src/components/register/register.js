import React, { Component } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { firebaseAuth, addUserProfile } from "../../firebase/firebase.helpers";

export default class Register extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      formIsValidated: false,
      errorMessage: "",
      showAlert: false
    };
  }

  submitHandler = async e => {
    e.preventDefault();

    const form = e.currentTarget;
    this.setState({ formIsValidated: true });

    const { confirmPassword, displayName, email, password } = this.state;

    if (password !== confirmPassword) {
      this.setState({
        errorMessage: "Passwords do not match",
        showAlert: true
      });
      return;
    }

    if (!form.checkValidity()) {
      return;
    }

    try {
      const { user } = await firebaseAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      await addUserProfile(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        formIsValidated: false,
        errorMessage: ""
      });

      //!TODO: REDIRECT TO SHOP
    } catch (error) {
      console.log(error.message);
    }
  };

  inputHandler = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  render() {
    const {
      confirmPassword,
      displayName,
      email,
      password,
      formIsValidated,
      errorMessage,
      showAlert
    } = this.state;
    return (
      <div className="mt-5">
        <h3>Do not have an account?</h3>
        <small>Register with email and password</small>
        {showAlert && (
          <Alert
            variant="danger"
            onClose={() => this.setState({ showAlert: false })}
            dismissible
          >
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>{errorMessage}</p>
          </Alert>
        )}
        <Form
          onSubmit={this.submitHandler}
          className="mt-5"
          validated={formIsValidated}
          noValidate
        >
          <FormInput
            type="text"
            name="displayName"
            label="Name"
            value={displayName}
            placeholder="Your Name"
            inputHandler={this.inputHandler}
            validationMsg="Name is required"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            placeholder="Enter email"
            inputHandler={this.inputHandler}
            validationMsg="Email is invalid"
            required
          ></FormInput>

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            label="Password"
            inputHandler={this.inputHandler}
            validationMsg="Password is required"
            required
          ></FormInput>

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            label="Confirm Password"
            inputHandler={this.inputHandler}
            validationMsg="Confirm password is required"
            required
          ></FormInput>

          <Row className="justify-content-around align-items-start">
            <CustomButton
              variant="warning"
              type="submit"
              className="float-right"
            >
              Register
            </CustomButton>
            <div>
              <CustomButton variant="danger">Log In with Google</CustomButton>
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
