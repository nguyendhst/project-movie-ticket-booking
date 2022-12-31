import React from "react";

import { Navbar } from "react-bootstrap";

import "./style.css";

import { faHome, faFilm } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button, Nav } from "react-bootstrap";

import LoginPopup from "../../services/LoginPopup";

import {Navigate} from "react-router-dom";

function Header() {
    const [loginShow, setLoginShow] = React.useState(false);

    // redirect to /login
    const handleLogin = () => {
        console.log("ref")
        window.location.href = "/login";
    }

    return (
        <Navbar className="header-navbar" expand="lg">
            <Navbar.Brand href="/">
                <FontAwesomeIcon icon={faFilm} className="header-logo" />
                NTTVN Cinema
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/#">
                        <FontAwesomeIcon
                            icon={faHome}
                            className="header-icon"
                        />
                        Trang chủ
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Button
                        className="header-login"
                        onClick={handleLogin}
                    >
                        Đăng nhập
                    </Button>

                    <LoginPopup
                        show={loginShow}
                        onHide={() => setLoginShow(false)}
                    />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
