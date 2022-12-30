import React from "react";
import './NewFeedback.css';
import SideButton from "./components/SideButton/SideButton";
import NewFeedbackForm from "./components/NewFeedbackForm/NewFeedbackForm";
import { Col, Row } from "react-bootstrap";

function NewFeedbacks() {
     return (
        <Row className="me-0 mainwork">
            <Col lg={12} className="search-bar">
                <input type="text" placeholder="Tìm kiếm phản hồi" disabled/>
            </Col>
            <Col md={12} lg={2} className='ms-1 mt-3'>
                <SideButton/>
            </Col>
            <Col md={12} lg={9} className='Main mx-auto px-5 py-4'>
                <NewFeedbackForm />
            </Col>
        </Row>
    )
}

export default NewFeedbacks;