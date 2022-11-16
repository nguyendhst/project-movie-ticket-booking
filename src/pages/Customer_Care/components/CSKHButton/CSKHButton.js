import React from "react";
import './CSKHButton.css'
import { Link } from 'react-router-dom';

function CSKHButton() {
    return (
        <div className='CSKH_Button'>
            <Link to='customer-care/new-feedback'>
                <button className="New_feedback"> 
                    TẠO PHẢN HỒI MỚI
                </button>
            </Link>
            <button className="View_feedback">
                KẾT QUẢ PHẢN HỒI
            </button>
            
        </div>
        
    )
}

export default CSKHButton;