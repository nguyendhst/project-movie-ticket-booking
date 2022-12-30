import React, { useState } from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import "./CarouselBanner.css";

// import films from "../../../data/films.json";

const imgPath = "https://image.tmdb.org/t/p/original";
const moviePath = "http://localhost:3000/movie/";

function CarouselBanner(props) {
    const { trending } = props;
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        // navigate to movie page
        window.open(moviePath + trending[selectedIndex].id, "_blank");
        setIndex(selectedIndex);
    };

    // let trendFilms = films.Trend;
    // let OnGoingFilms = films.OnGoing;
    return (
        <Carousel
            className="Banner_vertical"
            activeIndex={index}
            fade
            interval={3000}
            variant="dark"
        >
            {trending.map((film, index) => (
                <Carousel.Item key={film.id}>
                    <a onClick={handleSelect.bind(this, index)}>
                        <img
                            className="d-block w-100"
                            src={imgPath + film.vertical_poster_path}
                            alt={film.title}
                        />
                    </a>
                    <Carousel.Caption>
                        <h3>{film.title}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

// render(<CarouselBanner />);
export default CarouselBanner;
