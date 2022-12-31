import React from "react";
import './CSKHButton.css'
import { Link } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";

function CSKHButton() {
    return (
        <Row className="text-center mainwork">
            <Col md={6} >
                <Link to='/customer-care/new-feedback'>
                    <button className="New_feedback"> 
                       TẠO PHẢN HỒI MỚI
                    </button>
                </Link>
            </Col>
            <Col md={6}>
                <Link to='/customer-care/user-feedback'>
                    <button className="View_feedback">
                        KẾT QUẢ PHẢN HỒI
                    </button>
                </Link>
            </Col>
        </Row>
    )
}

export default CSKHButton;