import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ManagerLP from "./pages/ManagerLP/ManagerLP";
import AboutUs from "./pages/AboutUs/AboutUs";
import StaffLP from "./pages/StaffLP/StaffLP";
import MemberLP from "./pages/MemberLP/MemberLP";
import Content from "./pages/Content/Content";
import Movie from "./pages/Content/Movie/Movie";
import Event from "./pages/Content/Event/Event";
import Food from "./pages/Content/Food/Food";
import TicketBooking from "./pages/TicketBooking";
import ManageShift from "./pages/HumanResource/ManageShift/manage_shift";
import StaffShift from "./pages/HumanResource/StaffShift/staff_shift";
import CustomerCare from "./pages/Customer_Care/CustomerCare";
import NewFeedbacks from "./pages/Customer_Care/NewFeedback";
import MainFeedbacks from "./pages/Customer_Care/components/MainFeedback/MainFeedback";
import ReplyFeedback from "./pages/ReplyFeedback/ReplyFeedback";
import NotifyEvent from "./pages/NotifyEvent/NotifyEvent";
import ClassifyCustomer from "./pages/ClassifyCustomer/ClassifyCustomer";
import ManageStaff from "./pages/HumanResource/ManageStaff/manage_staff";
import Monitoring from "./pages/Monitoring/monitoring";
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";

function App() {
    return (
        <React.Fragment>
            <main>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/manager" element={<ManagerLP />} />
                    <Route path="/staff" element={<StaffLP />} />
                    <Route path="/member" element={<MemberLP />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/content-manage" element={<Content />}/>
                    <Route path="movie-manage/:movie_id" element={<Movie />}/>
                    <Route path="/event-manage" element={<Event />} />
                    <Route path="/food-manage" element={<Food />} />
                    <Route path="monitoring" element={<Monitoring />}/>
                    <Route path="/movie/:id" element={<TicketBooking />} />
                    <Route path="/manage-shift" element={<ManageShift />} />
                    <Route path="/manage-staff" element={<ManageStaff />} />
                    <Route path="/select-shift" element={<StaffShift />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
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
        </React.Fragment>
    );
}

export default App;
