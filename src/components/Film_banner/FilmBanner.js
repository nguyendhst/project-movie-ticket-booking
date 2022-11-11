import React from "react";
import './FilmBanner.css';
import banner_1 from '../../Asset/banner_1.png'
import banner_2 from '../../Asset/banner_2.png'
import CarouselBanner from "./CasourelBanner/CarouselBanner";
// import Card from 'react-bootstrap/Card';
// import { Button } from "react-bootstrap";


// function BannerVertical() {
//     return (
//         <img src={banner_1} alt="A movie banner that is large and vertical." className="Banner_vertical"/>
//     )
// }

function BannerHorizontal() {
    return (
        <img src={banner_2} alt="A movie banner that is horizontal and relatively small." className="Banner_horizontal"/>
        // <Card style={{ width: '18rem' }}>
        //     <Card.Img variant="top" src={banner_2} />
        //     <Card.Body>
        //         <Card.Title>Card Title</Card.Title>
        //         <Card.Text>
        //         Some quick example text to build on the card title and make up the
        //         bulk of the card's content.
        //         </Card.Text>
        //         <Button variant="primary">Go somewhere</Button>
        //     </Card.Body>
        // </Card>
    )
}

function FilmBanner() {
    return (
        <div className="Film_Banner">
            {/* <BannerVertical/> */}
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