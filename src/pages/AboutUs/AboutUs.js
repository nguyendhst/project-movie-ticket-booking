import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import './AboutUs.css';
import { faN, faT, faV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from '../Customer_Care/components/Header/Header';
import Footer from '../../components/Footer/Footer';
import banner_aboutUs from '../../Asset/AboutUs.png'


function CustomerCare() {
    return (
        <Container fluid>
            <Header/>
            <Row className="me-0 about-us">
                <div className='AboutUs_Banner'>
                    <img src={banner_aboutUs} alt="About Us banner"/>
                </div>
                <Col md={12}>
                    <h1 className="text-center my-4">ABOUT US</h1>
                </Col>
                <Col md={4} className="text-center mb-3">
                    <div className='cbox w-100 text-center'>
                        <div className='icon d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon={faN} className="contact-logo" />
                        </div>
                        <div className='text'>
                            <h2>2013924</h2>
                            <p>Nguyễn Nhật Nguyên</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="text-center mb-3">
                    <div className='cbox w-100 text-center'>
                        <div className='icon d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon={faT} className="contact-logo" />
                        </div>
                        <div className='text'>
                            <h2>2012537</h2>
                            <p>Nguyễn Đức Triết</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="text-center mb-3">
                    <div className='cbox w-100 text-center'>
                        <div className='icon d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon={faT} className="contact-logo" />
                        </div>
                        <div className='text'>
                            <h2>2012118</h2>
                            <p>Tô Đại Thịnh</p>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="text-center mb-3">
                    <div className='cbox w-100 text-center'>
                        <div className='icon d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon={faV} className="contact-logo" />
                        </div>
                        <div className='text'>
                            <h2>2012445</h2>
                            <p>Trần Nguyên Vũ</p>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="text-center mb-3">
                    <div className='cbox w-100 text-center'>
                        <div className='icon d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon={faN} className="contact-logo" />
                        </div>
                        <div className='text'>
                            <h2>2012519</h2>
                            <p>Nguyễn Cao Trung Nghĩa</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Footer/>
        </Container>
    )
}

export default CustomerCare;