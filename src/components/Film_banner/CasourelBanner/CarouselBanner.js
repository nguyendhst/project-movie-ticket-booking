import React, { useState } from 'react';
import Carousel from 'react-bootstrap/esm/Carousel';
import './CarouselBanner.css';
import banner_1 from '../../../Asset/banner_1.png';
import banner_1p from '../../../Asset/banner_1p.jpg';

function CarouselBanner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="Banner_vertical" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className='d-block w-100 rounded'
          src={banner_1p}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 rounded'
          src={banner_1}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

// render(<CarouselBanner />);
export default CarouselBanner;