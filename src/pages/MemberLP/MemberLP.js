import React from "react"
import './MemberLP.css';

import HamburgerLogo from '../../Asset/Hamburger.png';
import House from '../../Asset/house.svg';
import Footer from '../../components/Footer/Footer';
import FilmBanner from "../../components/Film_banner/FilmBanner";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {Button} from "react-bootstrap";

function Header() {
    const [sidebar, setSidebar] = React.useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <ul className="Header">
            <ul className="Left_header">
                <li id="Ham-icon">
                    <img src={HamburgerLogo} alt="Hamburger icon" width="52px" height="40px" onClick={showSidebar}></img>
                </li>
                <li id="Home-logo">
                    <a href="/member">
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
                        <a href='/about-us'>
                            About us
                        </a>
                    </li>
                </ul>
            </li>
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
