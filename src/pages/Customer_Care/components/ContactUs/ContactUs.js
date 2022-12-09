import React from "react";
import { Col, Row } from "react-bootstrap";
import './ContactUs.css'

function Contact_us() {
    return (
        <Row className="justify-content-md-center contact">
            <Col md={12}>
                <h1>CONTACT US</h1>
            </Col>
            <Col md='auto' xs={12} className='contact_inf'>
                <p>Email: contact@nttvn.cinema</p>
                <p>Địa chỉ liên hệ: 268 Lý Thường Kiệt, Phường 14, QUận 10, TP.HCM</p>
                <p>Phone: (+84) xxx xxx xxx</p>
            </Col>
            <Col md='auto' xs={12} className='contact_inf'>
                <p>Facebook: fb.com/nttvn.cinema</p>
                <p>Instagram: @nttvn.cinema</p>
                <p>Telegram: t.me/nttvn.cinema</p>
            </Col>
        </Row>
    )
}

export default Contact_us;