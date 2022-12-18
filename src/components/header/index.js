import React from "react";

import { Navbar, Container } from "react-bootstrap";

import "./style.css";

import { Link } from "react-router-dom";

import { faHome, faBars, faFilm } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button, Modal, ButtonGroup, Nav } from "react-bootstrap";

function Header() {
    return (
        <Navbar className="header-navbar" expand="lg">
            <Navbar.Brand href="/">
                <FontAwesomeIcon icon={faFilm} className="header-logo" />
                NTTVN Cinema
            </Navbar.Brand>

            <Nav>
                <Nav.Link href="/#">
                    <FontAwesomeIcon icon={faHome} className="header-icon" />
                    Trang chủ
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

function LoginPopup(props) {
    return (
        <Modal
            {...props}
            className="LoginPopup"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Đăng nhập với tư cách:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ButtonGroup vertical>
                    <Button className="LoginOption">Khách hàng</Button>
                    <Button className="LoginOption">Nhân viên</Button>
                    <Button className="LoginOption" href="/manager">
                        Quản lý
                    </Button>
                </ButtonGroup>
            </Modal.Body>
        </Modal>
    );
}

export default Header;
