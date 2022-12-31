import React from "react";
import { Col, Row } from "react-bootstrap";
import { faLocationDot, faPhone, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ContactUs.css'

function Contact_us() {
    return (      
        <Row className="d-flex justify-content-center">
            <Col md={12}>
                <h1 className="text-center my-4">CONTACT US</h1>
            </Col>
            <Col md={4} className="text-center mb-3">
                <div className='cbox w-100 text-center'>
                    <div className='icon d-flex align-items-center justify-content-center'>
                        <FontAwesomeIcon icon={faLocationDot} className="contact-logo" />
                    </div>
                    <div className='text'>
                        <h2>Address</h2>
                        <p>268 Lý Thường Kiệt, Phường 14, Quận 10, TP.HCM</p>
                    </div>
                </div>
            </Col>
            <Col md={4} className="text-center mb-3">
                <div className='cbox w-100 text-center'>
                    <div className='icon d-flex align-items-center justify-content-center'>
                        <FontAwesomeIcon icon={faPhone} className="contact-logo" />
                    </div>
                    <div className='text'>
                        <h2>Phone</h2>
                        <p>+84 522 818 291</p>
                    </div>
                </div>
            </Col>
            <Col md={4} className="text-center mb-3">
                <div className='cbox w-100 text-center'>
                    <div className='icon d-flex align-items-center justify-content-center'>
                        <FontAwesomeIcon icon={faMessage} className="contact-logo" />
                    </div>
                    <div className='text'>
                        <h2>Email</h2>
                        <p>contact@nttvn.cinema</p>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Contact_us;