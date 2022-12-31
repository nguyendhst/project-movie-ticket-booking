import React from "react"
import './LandingPage.css';

import HamburgerLogo from '../../Asset/Hamburger.png';
import House from '../../Asset/house.svg';
import Footer from '../../components/Footer/Footer';
import FilmBanner from "../../components/Film_banner/FilmBanner";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {Modal, Button, ButtonGroup} from "react-bootstrap";

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
            <ButtonGroup vertical >
                <Button className="LoginOption">
                    Khách hàng
                </Button>
                <Button className="LoginOption">
                    Nhân viên
                </Button>
                <Button className="LoginOption" href="/manager">
                    Quản lý
                </Button>
            </ButtonGroup> 
        </Modal.Body>
      </Modal>
    );
}

function Login () {
    window.location.href = "/login";
}

function Header() {
    const [loginShow, setLoginShow] = React.useState(false);
    const [sidebar, setSidebar] = React.useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <ul className="Header">
            <ul className="Left_header">
                <li id="Ham-icon">
                    <img src={HamburgerLogo} alt="Hamburger icon" width="52px" height="40px" onClick={showSidebar}></img>
                </li>
                <li id="Home-logo">
                    <a href="/#">
                        <img src={House} width='40px' height='40px' alt="Home logo"></img>
                    </a>
                </li>
            </ul>
            <li className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                    <a href='/#' className='menu-bars'>
                        <FontAwesomeIcon icon={faXmark} className="sidebar-logo" />
                    </a>
                    </li>
                    {/* <li className="nav-text">
                        <a href='/customer-care'>
                            Lịch chiếu phim
                        </a>
                    </li>
                    <li className="nav-text">
                        <a href='/customer-care'>
                            Ưu đãi
                        </a>
                    </li> */}
                    <li className="nav-text">
                        <a href='/customer-care'>
                            Contact us
                        </a>
                    </li>
                    <li className="nav-text">
                        <a href='/customer-care'>
                            About us
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <Button className="LoginButton" onClick={Login}>
                    Đăng nhập
                </Button>

                <LoginPopup
                    show={loginShow}
                    onHide={() => setLoginShow(false)}
                />
            </li>
        </ul>
    )
}

function LandingPage() {
    return (
        <div className="LandingPage">
            <Header/>
            <div className="LandingPage_main">
                <FilmBanner/>
            </div>
            <Footer/>
        </div>
    )
}

export default LandingPage;
