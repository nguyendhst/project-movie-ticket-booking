import React, { useState } from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import "./CarouselBanner.css";

// import films from "../../../data/films.json";

const imgPath = "https://image.tmdb.org/t/p/original";
const moviePath = "http://localhost:3000/movies/";

function CarouselBanner(props) {
    const { trending } = props;
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        // navigate to movie page
        window.open(moviePath + trending[selectedIndex].id, "_blank").focus();
        setIndex(selectedIndex);
    };

    // let trendFilms = films.Trend;
    // let OnGoingFilms = films.OnGoing;
    return (
        <Carousel
            className="Banner_vertical"
            activeIndex={index}
            onSelect={handleSelect}
        >
            {trending.map((item) => (
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={imgPath + item?.poster_path}
                        alt="Trending film poster"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

// render(<CarouselBanner />);
export default CarouselBanner;
