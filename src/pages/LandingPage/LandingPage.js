import React from "react"
import './LandingPage.css';
import HamburgerLogo from '../../Asset/Hamburger.png';
import Footer from '../../components/Footer/Footer';
import FilmBanner from "../../components/Film_banner/FilmBanner";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';



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
                <Button className="LoginOption">
                    Quản lý
                </Button>
            </ButtonGroup> 
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }

function Header() {
    const [loginShow, setLoginShow] = React.useState(false);

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
                <Button className="LoginButton" onClick={() => setLoginShow(true)}>
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

// function 

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