import React from "react";

import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";

import './Content.css';
import Footer from "../../components/Footer/Footer";
import Tabs from "../../components/Tabs/Tabs";

import House from "../../Asset/house.svg";
import Bp2 from "../../Asset/bp2.jpg";
import banner_2 from "../../Asset/banner_2.png";
import banner_1p_h from "../../Asset/banner_1p_h.webp"



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
    const OnGoing = [
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
        },
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
        },
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
        },
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
        },
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
        },
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
        },
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
        },
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
        },
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
        }
    ]

    const UpComing = [
        {
            name: "One Piece Film: RED",
            poster: banner_1p_h,
        },
        {
            name: "One Piece Film: RED",
            poster: banner_1p_h,
        },
        {
            name: "One Piece Film: RED",
            poster: banner_1p_h,
        },
        {
            name: "One Piece Film: RED",
            poster: banner_1p_h,
        },
        {
            name: "One Piece Film: RED",
            poster: banner_1p_h,
        },
        {
            name: "One Piece Film: RED",
            poster: banner_1p_h,
        },
        {
            name: "One Piece Film: RED",
            poster: banner_1p_h,
        },
        {
            name: "One Piece Film: RED",
            poster: banner_1p_h,
        },
        {
            name: "One Piece Film: RED",
            poster: banner_1p_h,
        }
    ]
    const Archived = [
        {
            name: "Fight Club",
            poster: banner_2,
        },
        {
            name: "Fight Club",
            poster: banner_2,
        },
        {
            name: "Fight Club",
            poster: banner_2,
        },
        {
            name: "Fight Club",
            poster: banner_2,
        },
        {
            name: "Fight Club",
            poster: banner_2,
        },
        {
            name: "Fight Club",
            poster: banner_2,
        },
        {
            name: "Fight Club",
            poster: banner_2,
        },
        {
            name: "Fight Club",
            poster: banner_2,
        },
        {
            name: "Fight Club",
            poster: banner_2,
        }
    ]

    return (
        <div className="Content">
            <Header/>
            <div className="ContentMain">
                <Tabs
                    title={"Tab test"}
                    tabs={
                        [
                            {
                                name: "Phim đang chiếu",
                                content: OnGoing.map(
                                    (film, index) =>
                                    <Card style={{ width: '133px' }}>
                                    <Card.Img variant="top" src={film.poster} />
                                    <Card.Body>
                                        <Card.Title style={{color: '#000000'}}>{film.name}</Card.Title>
                                        {/* <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                    </Card>
                                )
                            },
                            {
                                name: "Phim sắp chiếu",
                                content: UpComing.map(
                                    (film, index) =>
                                    <Card style={{ width: '133px' }}>
                                    <Card.Img variant="top" src={film.poster} />
                                    <Card.Body>
                                        <Card.Title style={{color: '#000000'}}>{film.name}</Card.Title>
                                        {/* <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                    </Card>
                                )
                            },
                            {
                                name: "Phim đã dừng chiếu",
                                content: Archived.map(
                                    (film, index) =>
                                    <Card style={{ width: '133px' }}>
                                    <Card.Img variant="top" src={film.poster} />
                                    <Card.Body>
                                        <Card.Title style={{color: '#000000'}}>{film.name}</Card.Title>
                                    </Card.Body>
                                    </Card>
                                )
                            }
                        ]
                    }
                />
            </div>
            <Footer/>
        </div>
    )
}

export default Content;