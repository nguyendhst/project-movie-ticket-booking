import React from "react";

import { Navbar } from "react-bootstrap";

import "./style.css";

import { faHome, faFilm} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button, Modal, ButtonGroup, Nav } from "react-bootstrap";

function Header() {
    const [loginShow, setLoginShow] = React.useState(false);

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
                        onClick={() => setLoginShow(true)}
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
