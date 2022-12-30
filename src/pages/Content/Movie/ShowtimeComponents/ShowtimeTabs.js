import React, {useState}  from "react";

import Slider from "react-slick";
import { Button } from "react-bootstrap";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function ShowtimeTabs() {
    const settings = {
        dots: true,
        infinite: false ,
        speed: 400,
        slidesToShow: 7,
        slidesToScroll: 7
      };
	
	  const days = [1, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4]
	const [activeDay, setActiveDay] = useState(0)
	  return (
    <div >
        <h2> Multiple items </h2>
        <Slider {...settings}>
			{
				days.map((day, index) => (
					<Button
						key = {index}
						className={index === activeDay ? "tab-btn active-tab-btn" : "tab-btn"}
						onClick={() => setActiveDay(index)}
					>
						{day}
					</Button>
				))
			}
        </Slider>

    </div>
  )
}

export default ShowtimeTabs