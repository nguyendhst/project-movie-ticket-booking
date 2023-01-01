import React from "react";

// import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import Button from "react-bootstrap/esm/Button";
// import Image from 'react-bootstrap/Image';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import './StaffLP.css';
import Footer from "../../components/Footer/Footer";

import House from "../../Asset/house.svg"


function Header() {

    return(
        <ul className="Header">
            <ul className="Left_header">
                <li id="Home-logo">
                    <a href="/staff">
                        <img src={House} width='40px' height='40px' alt="Home logo"></img>
                    </a>
                </li>
            </ul>
            <li>
                <a href='/#'>
                <Button
                className="LogoutButton"
                >
                    Đăng xuất
                </Button>
                </a>
            </li>
        </ul>
    )
}

function ManagerOptions(props) {
    return (
        <a href={props.route} className="ManagerOptions">
            <Button className="ManagerOptionBtn">
                {props.content}
            </Button>
        </a>
    )
}

function ManagerLP() {
    return (
        <div className="ManagerLP">
            <Header/>
            <div className="StaffLPMain">
                <ManagerOptions content="Chọn ca làm việc" route="/select-shift"/>
                <ManagerOptions content="Thông báo sự kiện" route="/notify-event"/>
                <ManagerOptions content="Phân nhóm khách hàng" route="/classify-customer"/>
                <ManagerOptions content="Phản hồi khách hàng" route="/reply-feedback"/>
            </div>
            <Footer/>
        </div>
    )
}

export default ManagerLP;