import React from "react";
import './Header.css'
import { Button } from "react-bootstrap";
import House from "../../../../Asset/house.svg"


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
                <a href='/'>
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

export default Header;