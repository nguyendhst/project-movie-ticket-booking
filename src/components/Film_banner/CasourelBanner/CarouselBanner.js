import React, { useState } from 'react';
import Carousel from 'react-bootstrap/esm/Carousel';
import './CarouselBanner.css';

import films from '../../../data/lp_movies.json'

function CarouselBanner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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