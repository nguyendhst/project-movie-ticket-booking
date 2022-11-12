import React from "react";
import './SideButton.css'
import { Link } from 'react-router-dom';

function Side_Button() {
    return (
        <div className='Side_Button'>
            <Link to='/NewFeedback'>
                <button className="New_feedbacks">
                    Tạo phản hồi mới
                </button>
            </Link>

                <button className="View_feedbacks">
                    Kết quả phản hồi
                </button>
        </div>
    )
}

export default Side_Button;