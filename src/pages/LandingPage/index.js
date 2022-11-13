import React from "react"
import './index.css';
import HamburgerLogo from '../../assets/Hamburger.png';
import Footer from '../../components/footer';
import FilmBanner from "../../components/Film_banner/FilmBanner";

function Header() {
    return(
        <ul className="Header">
            <ul className="Left_header">
                <li id="Ham-icon">
                    <img src={HamburgerLogo} alt="Hamburger icon" width="40px" height="40px"></img>
                </li>
                <li>
                    <button className="CinemaLogo">
                        Home Page
                    </button>
                </li>
            </ul>
            <li>
                <button className="LoginButton">
                    Đăng nhập
                </button>
            </li>
        </ul>
    )
}

const LandingPage = () => {
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
