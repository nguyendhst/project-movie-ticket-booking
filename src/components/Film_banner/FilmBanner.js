import React from "react";
import './FilmBanner.css';

import banner_2 from '../../Asset/banner_2.png'

import CarouselBanner from "./CasourelBanner/CarouselBanner";
import Card from 'react-bootstrap/esm/Card';

function BannerHorizontal() {
    return (
        <Card className="Banner_horizontal">
            <Card.Img variant="top" src={banner_2} />
            <Card.Body>
                <Card.Title >Fight Club</Card.Title>
            </Card.Body>
        </Card>
    )
}

function FilmBanner() {
    return (
        <div className="Film_Banner">
            <CarouselBanner/>

            <div className="Banner_container">
                <BannerHorizontal/>
                <BannerHorizontal/>
                <BannerHorizontal/>
                <BannerHorizontal/>
                <BannerHorizontal/>
                <BannerHorizontal/>
                <BannerHorizontal/>
                <BannerHorizontal/>
            </div>
        </div>
    )
}

export default FilmBanner;