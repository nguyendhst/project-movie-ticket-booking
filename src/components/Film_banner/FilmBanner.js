import React from "react";
import './FilmBanner.css';

import films from '../../data/films.json';
import CarouselBanner from "./CasourelBanner/CarouselBanner";
import Card from 'react-bootstrap/esm/Card';

function BannerHorizontal(props) {
    return (
        <Card className="Banner_horizontal">
            <a href={"/movie/" + props.filmDetail.id} style={{ textDecoration: 'none' , color: "inherit"}}>
            <Card.Img variant="top" src= {props.filmDetail.poster}/>
            <Card.Body>
                <Card.Title style={{
                    textOverflow: "ellipsis"
                }}>{props.filmDetail.name}</Card.Title>
            </Card.Body>
            </a>
        </Card>
    )
}

function FilmBanner() {
    let OnGoingFilm = films.OnGoing;
    return (
        <div className="Film_Banner">
            <CarouselBanner/>

            <div className="Banner_container">
            {OnGoingFilm.map((film, index) =>
                <BannerHorizontal
                filmDetail = {film}
                key = {index}
                />
            )}
            </div>
        </div>
    )
}

export default FilmBanner;