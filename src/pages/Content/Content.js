import React from "react";

import Button from "react-bootstrap/esm/Button";

import './Content.css';
import Footer from "../../components/Footer/Footer";

import House from "../../Asset/house.svg"





function Header() {

    return(
        <ul className="Header">
            <ul className="Left_header">
                <li id="Home-logo">
                    <a href="/manager">
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

function Content() {
    return (
        <div className="Content">
            <Header/>
            <div className="ContentMain">
                <div>aa</div>
                <div className="ContentHeader">
                    a
                </div>
                <div className="ContentBody">
                    b
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Content;