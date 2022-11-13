import React, { Component } from "react";

// import {
//   Container,
//   Row,
//   Col,
//   Collapse,
//   Button,
//   ButtonGroup,
// } from "react-bootstrap";

import "./index.css";

import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Step4 from "../Step4";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1, // Default is Step 1
      seats: "",
      total: 0,
      step1Total: 0,
      payment: null,
      selectedMenu: [],
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);
    // Bind the submission to handleSubmit()
    this.handleSubmit = this.handleSubmit.bind(this);
    // Bind the functions to this class
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this._finish = this._finish.bind(this);

    this.updateSum = this.updateSum.bind(this);
    this.updateSeats = this.updateSeats.bind(this);
  }

  handleChange = (event) => {
    console.log("handlechange");
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handlePaymentChange = (event) => {
    console.log("handlpayment", event.target.value);
    this.setState({
      payment: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  _next() {
    let currentStep = this.state.currentStep;
    // If the current step is 1 or 2 or 3, then add one on "next" button click
    currentStep = currentStep >= 4 ? 4 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3 or 4, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _finish() {
    // alert all states
    let seatInfo = "";
    this.state.seats.forEach((seat) => {
      // seats.push(seat.row + seat.number);
      seatInfo += seat.row + seat.number + ", ";
    });

    let menu = this.state.selectedMenu;
    let payment = this.state.payment;
    let total = this.state.total;
    alert(
      `Your booking detail: \n
      Seats: ${seatInfo} \n
      Menu: ${menu} \n
      Payment: ${payment} \n
      Total: ${total}`
    );
  }

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1 && currentStep !== 4) {
      return (
        <button
          className="btn btn btn-outline-info prev-expand"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    } else if (currentStep === 4) {
      return (
        <button
          className="btn btn btn-info prev-expand"
          type="button"
          onClick={this._finish}
        >
          Download
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep <= 3) {
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

  updateSum = (newSum) => {
    console.log("newSum: ", newSum);
    this.setState(
      {
        total: newSum,
      },
      () => {
        console.log(this.state.total);
      }
    );
    if (this.state.currentStep === 1) {
      this.setState({
        step1Total: newSum,
      });
    }
  };

  // updatePayment = (newPayment) => {
  //   this.setState({
  //     payment: newPayment,
  //   });
  // }

  updateMenu = (newMenu) => {
    this.setState({
      selectedMenu: newMenu,
    });
  };

  updateSeats = (newSeats) => {
    console.log("newSeats: ", newSeats);
    this.setState({
      seats: newSeats,
    });
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
            basePrice={this.props.basePrice}
            updateSum={this.updateSum}
            updateSeats={this.updateSeats}
          />
          <Step2
            currentStep={this.state.currentStep}
            // handleChange={this.handleChange}
            // currentSum={this.state.total}
            basePrice={this.state.step1Total}
            updateSum={this.updateSum}
            selectedMenu={this.state.selectedMenu}
            updateMenu={this.updateMenu}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            currentSum={this.state.total}
            updatePayment={this.handlePaymentChange}
            payment={this.state.payment}
          />
          <Step4
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            currentSum={this.state.total}
            payment={this.state.payment}
          />
        </form>
        <div className="total-box">
          <h3>Total: {this.state.total}</h3>
        </div>
        {this.previousButton()}
        {this.nextButton()}
      </React.Fragment>
    );
  }
}

export default MasterForm;
