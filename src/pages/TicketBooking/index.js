import React, { Component } from "react";
import { useRef } from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Filter from "./components/Filter";
import MasterForm from "./components/MasterForm";
import Banner from "./components/Banner";
import "./index.css";

const ticketData = [
  {
    id: 1,
    timeShort: "06 Thu",
    timeLong: "Thu 06-Dec-2022",
    price: "670000",
    emptySeats: "10",
    time: "14:00-20:00",
  },
  {
    id: 2,
    timeShort: "07 Fri",
    timeLong: "Fri 07-Dec-2022",
    price: "360000",
    emptySeats: "10",
    time: "18:00-20:00",
  },
  {
    id: 3,
    timeShort: "08 Sat",
    timeLong: "Sat 08-Dec-2022",
    price: "560000",
    emptySeats: "10",
    time: "20:00-22:00",
  },
  {
    id: 4,
    timeShort: "09 Sun",
    timeLong: "Sun 09-Dec-2022",
    price: "860000",
    emptySeats: "10",
    time: "10:00-14:00",
  },
  {
    id: 5,
    timeShort: "10 Mon",
    timeLong: "Mon 10-Dec-2022",
    price: "660000",
    emptySeats: "10",
    time: "15:00-17:00",
  },
  {
    id: 6,
    timeShort: "11 Tue",
    timeLong: "Tue 11-Dec-2022",
    price: "660000",
    emptySeats: "10",
    time: "18:00-20:00",
  },
];

// const refs = ticketData.reduce((acc, ticket) => {
//   acc[ticket.id] = React.createRef();
//   return acc;
// }, {});

class TicketBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalTicketData: ticketData,
      ticketData: ticketData,
      activeID: null,
      priceFilter: false,
      timeFilter: false,
    };

    this.activeTicket = this.activeTicket.bind(this);
    this.sortByPriceRegister = this.sortByPriceRegister.bind(this);
    this.sortByTimeRegister = this.sortByTimeRegister.bind(this);
    this.applyAllFilter = this.applyAllFilter.bind(this);
  }

  applyAllFilter = () => {
    console.log("applyAllFilter");
    let base = this.state.originalTicketData.map((ticket) => ticket);
    console.log(base[0].price);
    console.log(this.state.priceFilter);
    if (this.state.priceFilter === true) {
      this.sortByPrice(base);
    }
    if (this.state.timeFilter === true) {
      this.sortByTime(base);
    }

    this.setState(
      {
        ticketData: base,
      },
      () => {
        console.log("list updated" + this.state.ticketData[0].price);
      }
    );
  };

  sortByPrice = (base) => {
    console.log("sortByPrice");
    base.sort((a, b) => {
      return a.price - b.price;
    });
  };

  sortByPriceRegister = () => {
    console.log("sortByPriceRegister");
    console.log("before: " + this.state.priceFilter);
    this.setState(
      {
        priceFilter: !this.state.priceFilter,
      },
      () => {
        console.log("after: " + this.state.priceFilter);
        this.applyAllFilter();
      }
    );
  };

  sortByTimeRegister = () => {
    console.log("sortByTimeRegister");
    console.log("before: " + this.state.timeFilter);
    this.setState(
      {
        timeFilter: !this.state.timeFilter,
      },
      () => {
        console.log("after: " + this.state.timeFilter);
        this.applyAllFilter();
      }
    );
  };

  sortByTime = (base) => {
    // time format: "18:00-20:00"
    base.sort((a, b) => {
      let aHour = parseInt(a.time.split(":")[0]);
      let bHour = parseInt(b.time.split(":")[0]);
      return aHour - bHour;
    });
  };

  activeTicket = (id) => {
    this.setState({ activeID: id });
    console.log("active ticket " + id);
  };

  // scrollToTicket = id => {
  //   refs[id].current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  // }

  render() {
    console.log("render: " + this.state.activeID);
    const ticketItem = this.state.ticketData.map((ticket) => (
      <TicketItem
        keya={ticket.id}
        timeShort={ticket.timeShort}
        timeLong={ticket.timeLong}
        price={ticket.price}
        emptySeats={ticket.emptySeats}
        time={ticket.time}
        onPress={this.activeTicket}
        active={this.state.activeID === ticket.id}
        // refProp={refs[ticket.id]}
        // scrollTo={this.scrollToTicket}
      />
    ));
    return (
      <Container>
        <Banner />
        <Row>
          <Col sm={4}>
            <Filter 
            sortByPrice={this.sortByPriceRegister} 
            sortByTime={this.sortByTimeRegister}
            
            />
          </Col>
          <Col sm={8}>{ticketItem}</Col>
        </Row>
      </Container>
    );
  }
}

class TicketItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openBooking: false,
      setOpenBooking: false,
      openDetails: false,
      setOpenDetails: false,
    };

    this.detailsClickHandler = this.detailsClickHandler.bind(this);
    this.bookingClickHandler = this.bookingClickHandler.bind(this);
  }

  handleButtonClick = (ticketID) => {
    console.log("button clicked " + ticketID);
    this.props.onPress(ticketID);
    // this.props.scrollTo(ticketID);
  };

  detailsClickHandler = () => {
    if (this.state.openBooking) {
      this.setState({ openBooking: false });
    }
    this.setState(
      {
        openDetails: !this.state.openDetails,
      },
      () => {
        this.handleButtonClick(this.props.keya);
      }
    );
  };

  bookingClickHandler = () => {
    if (this.state.openDetails) {
      this.setState({
        openDetails: !this.state.openDetails,
      });
    }
    this.setState(
      {
        openBooking: !this.state.openBooking,
      },
      () => {
        this.handleButtonClick(this.props.keya);
      }
    );
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
            <ButtonGroup>
              <Button
                variant="outline-info"
                onClick={() => this.detailsClickHandler()}
                aria-controls="collapse-text"
                aria-expanded={this.state.openDetails}
              >
                Details
              </Button>
              <Button
                variant="info"
                onClick={() => this.bookingClickHandler()}
                aria-controls="collapse-text"
                aria-expanded={this.state.openBooking}
              >
                Book Now
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <Collapse
          in={this.state.openBooking && this.props.active}
          unmountOnExit={true}
        >
          <div id="collapse-booking">
            <MasterForm basePrice={this.props.price} />
          </div>
        </Collapse>
        <Collapse
          in={this.state.openDetails && this.props.active}
          unmountOnExit={true}
        >
          <div id="collapse-detail">Details</div>
        </Collapse>
      </Row>
    );
  }
}

export default TicketBooking;
