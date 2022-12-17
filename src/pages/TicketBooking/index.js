import React, { Component } from "react";
import { useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Collapse,
    Button,
    ButtonGroup,
} from "react-bootstrap";
import Filter from "./components/Filter";
import MasterForm from "./components/MasterForm";
import Banner from "./components/Banner";
import axios from "axios";
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

const getWeekday = (date) => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekdays[date.getDay()];
};

const getMonth = (date) => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    return months[date.getMonth()];
};

// parse data from API to match ticketData format
const legacyParser = (data) => {
    // start_time format: '2022-12-17 17:41:24'
    const timeslots = [];
    data.forEach((timeslot) => {
        const duration = timeslot.duration; // in minutes
        timeslots.push({
            id: timeslot.id,
            timeShort:
                timeslot.start_time.slice(8, 10) +
                " " +
                getWeekday(new Date(timeslot.start_time)),
            timeLong:
                getWeekday(new Date(timeslot.start_time)) +
                " " +
                timeslot.start_time.slice(8, 10) +
                "-" +
                getMonth(new Date(timeslot.start_time)) +
                "-" +
                timeslot.start_time.slice(0, 4),
            price: timeslot.price,
            emptySeats: timeslot.empty_seats,
            time:
                timeslot.start_time.slice(11, 16) +
                "-" +
                new Date(
                    new Date(timeslot.start_time).getTime() + duration * 60000
                )
                    .toTimeString()
                    .slice(0, 5),
        });
    });
    return timeslots;
};

const timeslotsAPI = "http://localhost:3000/api/movies/:id/timeslots";

// const refs = ticketData.reduce((acc, ticket) => {
//   acc[ticket.id] = React.createRef();
//   return acc;
// }, {});

const intToVND = (int) => {
    return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

class TicketBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originalTicketData: ticketData,
            ticketData: ticketData,
            activeID: null,
            priceFilter: false,
            timeFilter: false,
            movieID: null,
        };

        this.activeTicket = this.activeTicket.bind(this);
        this.sortByPriceRegister = this.sortByPriceRegister.bind(this);
        this.sortByTimeRegister = this.sortByTimeRegister.bind(this);
        this.applyAllFilter = this.applyAllFilter.bind(this);
    }

    componentDidMount() {
        // get movie id from url
        const movieID = this.props.match.params.id;
        this.setState({ movieID: movieID });
        console.log("movieID: " + movieID);

        // get timeslots from API
        axios
            .get(timeslotsAPI.replace(":id", movieID))
            .then((res) => {
                // console.log(res.data);
                this.setState({
                    originalTicketData: legacyParser(res.data),
                    ticketData: legacyParser(res.data),
                });
            })
            .catch((err) => {
                console.log(err);
            });
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
            <React.Fragment>
                <Banner />
                <Container>
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
            </React.Fragment>
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
                    <Row className="align-items-center h-100">
                        <Col sm={2}>
                            <div className="ticket-item__week-time">
                                <div className="ticket-item__time--short">
                                    {this.props.timeShort}
                                </div>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="ticket-item__time">
                                <div className="ticket-item__time--long">
                                    {this.props.timeLong}
                                </div>

                                <div className="ticket-item__time--value">
                                    {this.props.time}
                                </div>
                            </div>
                        </Col>

                        <Col sm={6}>
                            <div className="ticket-item__price">
                                <div className="ticket-item__price--value">
                                    {intToVND(this.props.price)}đ
                                </div>
                            </div>
                            <div className="ticket-item__empty-seats">
                                <div className="ticket-item__empty-seats--text">
                                    Empty Seats
                                </div>
                                <div className="ticket-item__empty-seats--value">
                                    {this.props.emptySeats}
                                </div>
                            </div>

                            <div className="ticket-item__button">
                                <ButtonGroup>
                                    <Button
                                        variant="outline-info"
                                        onClick={() =>
                                            this.detailsClickHandler()
                                        }
                                        aria-controls="collapse-text"
                                        aria-expanded={this.state.openDetails}
                                    >
                                        Details
                                    </Button>
                                    <Button
                                        variant="info"
                                        onClick={() =>
                                            this.bookingClickHandler()
                                        }
                                        aria-controls="collapse-text"
                                        aria-expanded={this.state.openBooking}
                                    >
                                        Book Now
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </Col>
                    </Row>
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
