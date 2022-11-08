import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselBanner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.oneesports.vn/cdn-data/sites/4/2021/12/t1-doi-hinh-2022.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// render(<CarouselBanner />);
export default CarouselBanner;