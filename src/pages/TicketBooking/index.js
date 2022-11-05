import React, { Component } from "react";
import { Container, Row, Col, Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Filter from "./components/Filter";
import "./index.css";

const ticketData = [
  {
    id: 1,
    timeShort: "06 Thu",
    timeLong: "Thu 06-Dec-2022",
    price: "660.000",
    emptySeats: "10",
    time: "18:00-20:00",
  },
  {
    id: 2,
    timeShort: "07 Fri",
    timeLong: "Fri 07-Dec-2022",
    price: "660.000",
    emptySeats: "10",
    time: "18:00-20:00",
  },
  {
    id: 3,
    timeShort: "08 Sat",
    timeLong: "Sat 08-Dec-2022",
    price: "660.000",
    emptySeats: "10",
    time: "18:00-20:00",
  },
  {
    id: 4,
    timeShort: "09 Sun",
    timeLong: "Sun 09-Dec-2022",
    price: "660.000",
    emptySeats: "10",
    time: "18:00-20:00",
  },
  {
    id: 5,
    timeShort: "10 Mon",
    timeLong: "Mon 10-Dec-2022",
    price: "660.000",
    emptySeats: "10",
    time: "18:00-20:00",
  },
  {
    id: 6,
    timeShort: "11 Tue",
    timeLong: "Tue 11-Dec-2022",
    price: "660.000",
    emptySeats: "10",
    time: "18:00-20:00",
  },
];

class TicketBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketData: ticketData,
    };
  }

  render() {
    const ticketItem = this.state.ticketData.map((ticket) => (
      <TicketItem
        key={ticket.id}
        timeShort={ticket.timeShort}
        timeLong={ticket.timeLong}
        price={ticket.price}
        emptySeats={ticket.emptySeats}
        time={ticket.time}
      />
    ));
    return (
      <Container>
        <Row>
          <Col sm={4}>
            <Filter />
          </Col>
          <Col sm={8}>{ticketItem}</Col>
        </Row>
      </Container>
    );
  }
}

class TicketItem extends Component {
  state = {
    open: false,
    setOpen: false,
  };

  render() {
    return (
      <Row>
        <div className="ticket-item">
          <div className="ticket-item__time">
            <div className="ticket-item__time--short">
              {this.props.timeShort}
            </div>
            <div className="ticket-item__time--long">{this.props.timeLong}</div>
          </div>
          <div className="ticket-item__price">
            <div className="ticket-item__price--text">Price</div>
            <div className="ticket-item__price--value">{this.props.price}</div>
          </div>
          <div className="ticket-item__empty-seats">
            <div className="ticket-item__empty-seats--text">Empty Seats</div>
            <div className="ticket-item__empty-seats--value">
              {this.props.emptySeats}
            </div>
          </div>
          <div className="ticket-item__time">
            <div className="ticket-item__time--text">Time</div>
            <div className="ticket-item__time--value">{this.props.time}</div>
          </div>
          <div className="ticket-item__button">
            <Button
              onClick={() => this.setState({ open: !this.state.open })}
              aria-controls="collapse-text"
              aria-expanded={this.state.open}
            >
              Book Now
            </Button>
          </div>
          <Collapse in={this.state.open}>
            <div id="collapse-text">
              Hello
            </div>
          </Collapse>
        </div>
      </Row>
    );
  }
}

class ExpandedTicketItem extends Component {

}

export default TicketBooking;
