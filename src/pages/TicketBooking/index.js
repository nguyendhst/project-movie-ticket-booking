import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
// TODO: fix time calculation
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
                new Date(
                    new Date(timeslot.start_time).getTime() - 7 * 3600000
                ).toLocaleTimeString("vi-VN", {
                    hour: "2-digit",
                    minute: "2-digit",
                }) +
                "-" +
                new Date(
                    new Date(timeslot.start_time).getTime() -
                        7 * 3600000 +
                        duration * 60000
                ).toLocaleTimeString("vi-VN", {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
        });
    });
    return timeslots;
};

const timeslotsAPI = "http://localhost:8080/api/movies/:id/timeslots";
const movieAPI = "http://localhost:8080/api/movies/:id";

// const refs = ticketData.reduce((acc, ticket) => {
//   acc[ticket.id] = React.createRef();
//   return acc;
// }, {});

const priceToVND = (decimal102) => {
    // convert '70000.00' to '70.000 VND'
    // convert to integer
    const integer = parseInt(decimal102);
    // convert to string
    // localise to Vietnamese
    const string = integer.toLocaleString("vi-VN");
    // add ' VND' to the end
    return string + " VND";
};

// refactor functional component
function TicketBooking() {
    const [originalTicketData, setOriginalTicketData] = useState([]);
    const [ticketData, setTicketData] = useState([]);
    const [activeID, setActiveID] = useState(-1);
    const [priceFilter, setPriceFilter] = useState(false);
    const [timeFilter, setTimeFilter] = useState(false);
    const [movieID, setMovieID] = useState(null);
    const [movie, setMovie] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        setMovieID(id);
        console.log("movieID: " + id);

        // get timeslots from API
        axios
            .get(timeslotsAPI.replace(":id", id))
            .then((res) => {
                console.log(res.data);
                setOriginalTicketData(legacyParser(res.data.results));
                setTicketData(legacyParser(res.data.results));
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    // get movie info from API
    useEffect(() => {
        console.log("get movie info");
        axios
            .get(movieAPI.replace(":id", movieID))
            .then((res) => {
                console.log(res.data);
                setMovie(res.data.results[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [movieID]);

    const activeTicket = (id) => {
        console.log("activeTicket", id);
        setActiveID(id);
    };

    const sortByPriceRegister = (priceFilter) => {
        setPriceFilter(priceFilter);
    };

    const sortByTimeRegister = (timeFilter) => {
        setTimeFilter(timeFilter);
    };

    const applyAllFilter = () => {
        console.log("applyAllFilter");
        let base = originalTicketData.map((ticket) => ticket);
        console.log(base[0].price);
        console.log(priceFilter);
        if (priceFilter) {
            base.sort((a, b) => a.price - b.price);
        }
        if (timeFilter) {
            base.sort((a, b) => {
                const aTime = new Date("2022-12-17 " + a.time.slice(0, 5));
                const bTime = new Date("2022-12-17 " + b.time.slice(0, 5));
                return aTime - bTime;
            });
        }
        setTicketData(base);
    };

    return (
        <React.Fragment>
            <Banner movie={movie} />
            <Container>
                <Row className="ticket-booking">
                    <Col sm={4} className="filter">
                        <Filter
                            sortByPriceRegister={sortByPriceRegister}
                            sortByTimeRegister={sortByTimeRegister}
                            applyAllFilter={applyAllFilter}
                        />
                    </Col>
                    <Col sm={8}>
                        {ticketData?.map((ticket) => (
                            <TicketItem
                                id={ticket.id}
                                ticket={ticket}
                                activeTicket={activeTicket}
                                activeID={activeID}
                                emptySeats={ticket.emptySeats}
                                price={priceToVND(ticket.price)}
                                time={ticket.time}
                                timeShort={ticket.timeShort}
                                timeLong={ticket.timeLong}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

// refactor TicketItem to functional component
function TicketItem(props) {
    const {
        timeShort,
        timeLong,
        price,
        emptySeats,
        time,
        activeID,
        activeTicket,
        id,
    } = props;
    const [openBooking, setOpenBooking] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);

    useEffect(() => {
        if (activeID === id) {
            setOpenBooking(true);
        } else {
            setOpenBooking(false);
        }
    }, [activeID, id]);

    const handleBooking = () => {
        setOpenBooking(!openBooking);
        activeTicket(id);
    };

    const handleDetails = () => {
        setOpenDetails(!openDetails);
    };

    return (
        <React.Fragment>
            <Row>
                <div className="ticket-item">
                    <Container>
                        <Row className="align-items-center h-100">
                            <Col sm={2}>
                                <div className="ticket-item__week-time">
                                    <div className="ticket-item__time--short">
                                        {timeShort}
                                    </div>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className="ticket-item__time">
                                    <div className="ticket-item__time--long">
                                        {timeLong}
                                    </div>

                                    <div className="ticket-item__time--value">
                                        {time}
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="ticket-item__price">
                                    <div className="ticket-item__price--value">
                                        {price}
                                    </div>{" "}
                                </div>
                                <div className="ticket-item__empty-seats">
                                    <div className="ticket-item__empty-seats--text">
                                        Empty Seats
                                    </div>
                                    <div className="ticket-item__empty-seats--value">
                                        {emptySeats}
                                    </div>
                                </div>

                                <div className="ticket-item__button">
                                    <ButtonGroup>
                                        <Button
                                            variant="outline-info"
                                            onClick={handleDetails}
                                            aria-controls="collapse-text"
                                            aria-expanded={openDetails}
                                        >
                                            Details
                                        </Button>
                                        <Button
                                            variant="info"
                                            onClick={handleBooking}
                                            aria-controls="collapse-text"
                                            aria-expanded={openBooking}
                                        >
                                            Book Now
                                        </Button>
                                    </ButtonGroup>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Collapse
                    in={openBooking && activeID === id}
                    unmountOnExit={true}
                >
                    <div id="collapse-booking">
                        <MasterForm basePrice={price} />
                    </div>
                </Collapse>
                <Collapse
                    in={openDetails && activeID === id}
                    unmountOnExit={true}
                >
                    <div id="collapse-detail">Details</div>
                </Collapse>
            </Row>
        </React.Fragment>
    );
}

export default TicketBooking;
