import React from "react";

import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";

import './Content.css';
import Footer from "../../components/Footer/Footer";
import Tabs from "../../components/Tabs/Tabs";

import House from "../../Asset/house.svg";
import Bp2 from "../../Asset/bp2.jpg";
import banner_2 from "../../Asset/banner_2.png";
import banner_1p_h from "../../Asset/banner_1p_h.webp";
// import trash from "../../Asset/trash.png";



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
            id: 1,
            deleted: false
        },
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
            id: 2,
            deleted: false
        },
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
            id: 3,
            deleted: false
        },
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
            id: 4,
            deleted: false
        },
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
            id: 5,
            deleted: false
        },
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
            id: 6,
            deleted: false
        },
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
            id: 7,
            deleted: false
        },
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
            id: 8,
            deleted: false
        },
        {
            name: "Black Panther: Wakanda Forever",
            poster: Bp2,
            id: 9,
            deleted: false
        }
    ]

    const UpComing = [
        {
            name: "One Piece Film: RED",
            poster: banner_1p_h,
            id: 10,
            deleted: false
        },
        {
            name: "One Piece Film: RED",
            poster: banner_1p_h,
            id: 11,
            deleted: false
        },
        {
            name: "One Piece Film: RED",
            poster: banner_1p_h,
            id: 12,
            deleted: false
        },
        {
            name: "One Piece Film: RED",
            poster: banner_1p_h,
            id: 13,
            deleted: false
        },
        {
            name: "One Piece Film: RED",
            poster: banner_1p_h,
            id: 14,
            deleted: false
        },
        {
            name: "One Piece Film: RED",
            poster: banner_1p_h,
            id: 15,
            deleted: false
        }
    ]
    const Archived = [
        {
            name: "Fight Club",
            poster: banner_2,
            id: 16,
            deleted: false
        },
        {
            name: "Fight Club",
            poster: banner_2,
            id: 17,
            deleted: false
        },
        {
            name: "Fight Club",
            poster: banner_2,
            id: 18,
            deleted: false
        }
    ]

    return (
        <div className="Content">
            <Header/>
            <div className="ContentMain">
                <Tabs
                    tabs={
                        [
                            {
                                name: "Phim đang chiếu",
                                content: OnGoing.map(
                                    (film, index) => 
                                    <Card 
                                    key={film.id}
                                    deleted={film.deleted}
                                    className="FilmBanner">
                                    <Card.Img variant="top" src={film.poster}> 
                                    </Card.Img>
                                     {/* <Card.ImgOverlay>
                                        <a href="/content-manage">
                                            <img src={trash} alt="Delete Button" className="deleteBtn"/>
                                        </a>
                                    </Card.ImgOverlay> */}
                                    <Card.Body>
                                        <Card.Title style={{color: '#000000'}}>{film.name}</Card.Title>
                                    </Card.Body>
                                    </Card>
                                )
                            },
                            {
                                name: "Phim sắp chiếu",
                                content: UpComing.map(
                                    (film, index) =>
                                    <Card 
                                    key={film.id}
                                    className="FilmBanner">
                                    <div className="FilmBannerHovering">
                                        <Card.Img variant="top" src={film.poster}> 
                                        </Card.Img>
                                    </div>
                                    <Card.Body style={{ height: '100%'}}>
                                        <Card.Title style={{color: '#000000'}}>{film.name}</Card.Title>
                                    </Card.Body>
                                    </Card>
                                )
                            },
                            {
                                name: "Phim đã dừng chiếu",
                                content: Archived.map(
                                    (film, index) =>
                                    <Card 
                                    key={film.id}
                                    className="FilmBanner">
                                    <div className="FilmBannerHovering">
                                        <Card.Img variant="top" src={film.poster}> 
                                        </Card.Img>

                                    </div>
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