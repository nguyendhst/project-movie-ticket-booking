import React from "react"
import { Routes, Route } from 'react-router-dom';
import { Container, Row } from "react-bootstrap";
import './CustomerCare.css';
import Footer from '../../components/Footer';
import Header from './components/Header/Header';
import CSKHBanner from "./components/CSKHBanner/CSKHBanner";
import ContactUs from "./components/ContactUs/ContactUs";
import CSKHButton from "./components/CSKHButton/CSKHButton";
import MainFeedback from "./components/MainFeedback/MainFeedback";
import NewFeedbacks from "./NewFeedback";

function Home(){
    return (
        <Row className="me-0">
            <CSKHBanner/>
            <ContactUs/>
            <CSKHButton/>
        </Row>
    )
}

function LandingPage() {
    return (
        <Container fluid>
            <Header/>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/new-feedback" element={<NewFeedbacks />} />
                    <Route path="/user-feedback" element={<MainFeedback />} />
                </Routes>
            <Footer/>
        </Container>
    )
}

export default LandingPage;