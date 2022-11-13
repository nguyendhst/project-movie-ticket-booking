import React from "react";
import './ContactUs.css'

function Contact_us() {
    return (
        <div className='contact'>
            <h1>CONTACT US</h1>
            <div className='contact_us'>
                <div className='contact_inf'>
                    <p>Email: contact@nttvn.cinema</p>
                    <p>Địa chỉ liên hệ: 268 Lý Thường Kiệt, Phường 14, QUận 10, TP.HCM</p>
                    <p>Phone: (+84) xxx xxx xxx</p>
                </div>
                <div className='contact_inf'>
                    <p>Facebook: fb.com/nttvn.cinema</p>
                    <p>Instagram: @nttvn.cinema</p>
                    <p>Telegram: t.me/nttvn.cinema</p>
                </div>
            </div>
        </div>
    )
}

export default Contact_us;