import React, { useState } from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import "./CarouselBanner.css";
import { Link } from "react-router-dom";

// import films from "../../../data/films.json";

const imgPath = "https://image.tmdb.org/t/p/original";
const moviePath = "http://localhost:3000/movie/";

function CarouselBanner(props) {
    const { trending } = props;
    const [index, setIndex] = useState(0);


  let trendFilms = films.Trend;
  let OnGoingFilms = films.OnGoing;
  return (
    <Carousel className="Banner_vertical" activeIndex={index} onSelect={handleSelect}>
      {trendFilms.map((trend) => 
      OnGoingFilms.filter((Ongoing) => Ongoing.id.toString() === trend.toString()).map(
        (trendFilms) =>
        // console.log(trendFilms)
          <Carousel.Item> 
          <a href={"/movie/" + trendFilms.id}> 
            <img
              className='d-block w-100 rounded'
              src={trendFilms.verticalPoster}
              alt="Film slide"
            />
            </a>
          </Carousel.Item>
      )
      // console.log(trend)
      )}
    </Carousel>
  );
}

// render(<CarouselBanner />);
export default CarouselBanner;
