import React from "react"
import { Routes, Route } from 'react-router-dom';
import './CustomerCare.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CSKHBanner from "./components/CSKHBanner/CSKHBanner";
import ContactUs from "./components/ContactUs/ContactUs";
import CSKHButton from "./components/CSKHButton/CSKHButton";
import NewFeedbacks from "./NewFeedback";

function Home(){
    return (
        <>
            <CSKHBanner/>
            <ContactUs/>
            <CSKHButton/>
        </>
    )
}

function LandingPage() {
    return (
    	<div className="CSKHPage">
            <Header/>
                <div className="CSKHPage_main">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="customer-care/new-feedback" element={<NewFeedbacks />} />
                    </Routes>
                </div>
            <Footer/>
        </div>
    )
}

export default LandingPage;