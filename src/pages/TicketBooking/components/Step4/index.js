import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Barcode from "react-barcode";
import "./index.css";

const randHash = () => {
    return Math.random().toString(36).substring(2, 15);
};

function Step4(props) {
    const {
        total,
        payment,
        seats,
        snacks,
        time,
        date,
        updateBarhash,
        barhash,
    } = props;

    const [barcode, setBarcode] = React.useState(randHash());

    useEffect(() => {
        updateBarhash(barcode);
    }, [barcode]);

    return (
        <div className="summary">
            <div className="info">
                <h3>Payment Summary</h3>
            </div>
            <Container className="summary-content">
                <Row>
                    <Col xs={6}>
                        <p>Time</p>
                    </Col>
                    <Col xs={6}>
                        <p>{time}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <p>Date</p>
                    </Col>
                    <Col xs={6}>
                        <p>{date}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <p>Seats</p>
                    </Col>
                    <Col xs={6}>
                        <p>
                            {seats.map((item, index) => {
                                return (
                                    <span key={index}>
                                        {"/"}
                                        {item.number} - {item.row}
                                    </span>
                                );
                            })}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <p>Snacks</p>
                    </Col>
                    <Col xs={6}>
                        <p>{snacks}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <p>Payment</p>
                    </Col>
                    <Col xs={6}>
                        <p>{payment}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <p>Total</p>
                    </Col>

                    <Col xs={6}>
                        <p>{total}</p>
                    </Col>
                </Row>
                <Row>
                    <Barcode value={barhash !== "" ? barhash : ""} />
                </Row>
            </Container>
        </div>
    );
}

export default Step4;
