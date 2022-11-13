import React from "react"
import './NewFeedback.css';
import Search from "./components/Search/Search";
import SideButton from "./components/SideButton/SideButton";
import NewFeedbackForm from "./components/NewFeedbackForm/NewFeedbackForm";

function NewFeedbacks() {
     return (
        <>
            <Search/>
            <div className='Work_space'>
                <div className="Side">
                    <SideButton/>
                </div>      
                <div className="Main">
                    <NewFeedbackForm/>
                </div>
            </div>
        </>
    )
}

export default NewFeedbacks;