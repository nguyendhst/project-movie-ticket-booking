import React from "react";
import Button from "react-bootstrap/esm/Button";

import './Content.css';

import HamburgerLogo from '../../Asset/Hamburger.png';
import Footer from '../../components/Footer/Footer';






function Header() {
    // const [loginShow, setLoginShow] = React.useState(false);

    return(
        <ul className="Header">
            <ul className="Left_header">
                <li id="Ham-icon">
                    <img src={HamburgerLogo} alt="Hamburger icon" width="52px" height="40px"></img>
                </li>
                <li>
                    <button className="CinemaLogo">
                        Home Page
                    </button>
                </li>
            </ul>
            <li>
                <Button
                className="LogoutButton"
                // onClick={() => setLoginShow(true)}
                >
                    Đăng nhập
                </Button>

                {/* <LoginPopup
                    show={loginShow}
                    onHide={() => setLoginShow(false)}
                /> */}
            </li>
        </ul>
    )
}

function Content() {
    return (
        <div className="Content">
            <Header/>
            <div className="ContentMain">

            </div>
            <Footer/>
        </div>
    )
}

export default Content;