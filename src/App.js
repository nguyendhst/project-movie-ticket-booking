import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import ManagerLP from "./pages/ManagerLP/ManagerLP";
import Content from "./pages/Content/Content";
import TicketBooking from "./pages/TicketBooking";
import ManageShift from "./pages/ManageShift";
import CustomerCare from "./pages/Customer_Care/CustomerCare";
import NewFeedbacks from "./pages/Customer_Care/NewFeedback";
import MainFeedbacks from "./pages/Customer_Care/components/MainFeedback/MainFeedback";
import ReplyFeedback from "./pages/ReplyFeedback/ReplyFeedback";
import NotifyEvent from "./pages/NotifyEvent/NotifyEvent";
import ClassifyCustomer from "./pages/ClassifyCustomer/ClassifyCustomer";
import Footer from "./components/Footer";
import Header from "./components/Header";





function App() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/manager" element={<ManagerLP />} />
                    <Route path="/content-manage" element={<Content />} />
                    <Route path="/movie/:id" element={<TicketBooking />} />
                    <Route path="/manage-shift" element={<ManageShift />} />
                    <Route path="/customer-care" element={<CustomerCare />}>
                        <Route path="new-feedback" element={<NewFeedbacks />} />
                        <Route
                            path="user-feedback"
                            element={<MainFeedbacks />}
                        />
                    </Route>
                    <Route path="/reply-feedback" element={<ReplyFeedback />} />
                    <Route path="/notify-event" element={<NotifyEvent />} />
                    <Route
                        path="/classify-customer"
                        element={<ClassifyCustomer />}
                    />
                </Routes>
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default App;
