import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
  Collapse,
  Button,
  ButtonGroup,
} from "react-bootstrap";

import './index.css'

import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1, // Default is Step 1
      seats: [],
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);
    // Bind the submission to handleSubmit()
    this.handleSubmit = this.handleSubmit.bind(this);
    // Bind the functions to this class
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
           Password: ${password}`);
  };

  _next() {
    let currentStep = this.state.currentStep;
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn btn-outline-info prev-expand"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-info next-expand"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <p>Step {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
          {/* 
        render the form steps and pass required props in
      */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          
        </form>
        {this.previousButton()}
        {this.nextButton()}
      </React.Fragment>
    );
  }
}


export default MasterForm;