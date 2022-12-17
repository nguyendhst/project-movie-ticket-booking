import React from "react";

import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";

import './Content.css';
import films from '../../data/films.json'
import Footer from "../../components/Footer/Footer";
import Tabs from "../../components/Tabs/Tabs";

import House from "../../Asset/house.svg";



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
    let OnGoing = films.OnGoing
    let UpComing = films.UpComing;
    let Archived = films.Archived;
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
                                    // deleted={film.deleted}
                                    className="FilmBanner">
                                    <Card.Img variant="top" src={film.poster}> 
                                    </Card.Img>
                                    <Card.Body>
                                        <Card.Title style={{
                                                    color: '#000000',
                                                    textOverflow: 'ellipsis'
                                            }}>{film.name}</Card.Title>
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
                                                <Card.Title style={{
                                                    color: '#000000',
                                                    textOverflow: 'ellipsis'
                                            }}>{film.name}</Card.Title>
                                            </Card.Body>
                                    </Card>
                                )
                            }
                        ]
                    }
                    type = {1}
                />
            </div>
            <Footer/>
        </div>
    )
}

export default Content;