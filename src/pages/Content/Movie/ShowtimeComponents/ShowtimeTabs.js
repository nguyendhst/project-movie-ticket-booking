import React, {useState}  from "react";

import Slider from "react-slick";
import { Button } from "react-bootstrap";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './style.css'

import showtimes from '../../../../data/showtime.json'

function getShowtime(activeDay, id) {
	let shtimes = []
	showtimes.Screen1.forEach((date, index) =>
		{
			if (date.date.toString() === activeDay) 
				date.showtime.forEach((time, index) => 
				{
					if (time.id === id) shtimes.push(time["start-time"])
				}
				)
		}
	)
	showtimes.Screen2.forEach((date, index) =>
		{
			if (date.date.toString() === activeDay) 
				date.showtime.forEach((time, index) => 
				{
					if (time.id === id) shtimes.push(time["start-time"])
				}
				)
		}
	)
	showtimes.Screen3.forEach((date, index) =>
		{
			if (date.date.toString() === activeDay) 
				date.showtime.forEach((time, index) => 
				{
					if (time.id === id) shtimes.push(time["start-time"])
				}
				)
		}
	)
	return shtimes
}

function ShowtimeTabs(props) {
	const dates = props.dates
	const id = props.filmID
    const settings = {
        dots: true,
        infinite: false ,
        speed: 400,
        slidesToShow: 7,
        slidesToScroll: 7
      };
	
	const [activeIndex, setActiveIndex] = useState(0)
	let activeDay = dates[activeIndex].getDate() + '/' + (dates[activeIndex].getMonth() + 1) + '/' + dates[activeIndex].getFullYear()
	let showtime = getShowtime(activeDay, id)

	  return (
    <div >
        <Slider {...settings}>
			{
				dates.map((date, index) => (
					<Button
						key = {index}
						className={index === activeIndex ? "tab-btn active-tab-btn" : "tab-btn"}
						onClick={() => setActiveIndex(index)}
					>
						{date.getDate() + "/" + (date.getMonth() + 1)}
					</Button>
				))
			}
        </Slider>
		<div className='showtimeTabBody'>
		<div className='startTimeContainer'>
			{	
				(showtime.length === 0)?
				<h3>
					Không có lịch chiếu phim này trong ngày {activeDay}
				</h3>:
				showtime.map((time, index) =>
					<Button key={index} className="startTime">
						{time}
					</Button>
				)
			}
		</div>
		<div className='manageShowtimeBtn'>
			<Button>
				Quản lý
			</Button>
		</div>
		</div>
    </div>
  )
}

export default ShowtimeTabs