import React, {useState}  from "react";

import Slider from "react-slick";
import { Button,
	//  OverlayTrigger, Popover
	 } from "react-bootstrap";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './style.css'

import showtimes from '../../../../data/showtime.json'
import films from '../../../../data/films.json'

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

function getFilm (id) {
	return films.OnGoing.filter(film => film.id === id)[0]
}

function getScreen(activeDay) {
	let screen = []
	screen[1] = []
	screen[2] = []
	screen[3] = []
	showtimes.Screen1.forEach((date, index) =>
		{
			if (date.date.toString() === activeDay) 
				screen[1] = date.showtime
				screen[1].forEach((showtime, index) => 
					showtime["film"] = getFilm(showtime.id)
				)
		}
	)
	showtimes.Screen2.forEach((date, index) =>
		{
			if (date.date.toString() === activeDay) 
				screen[2] = date.showtime
				screen[2].forEach((showtime, index) => 
					showtime["film"] = getFilm(showtime.id)
				)
		}
	)
	showtimes.Screen3.forEach((date, index) =>
		{
			if (date.date.toString() === activeDay) 
				screen[3] = date.showtime
				screen[3].forEach((showtime, index) => 
					showtime["film"] = getFilm(showtime.id)
				)
		}
	)
	return screen
}

// const popover = (
// 	<Popover id="popover-basic">
// 	  <Popover.Header as="h3">Popover right</Popover.Header>
// 	  <Popover.Body>
// 		And here's some <strong>amazing</strong> content. It's very engaging.
// 		right?
// 	  </Popover.Body>
// 	</Popover>
//   );

function ShowtimeTabs(props) {
	const [allShowtime, setAllShowtime] = useState(false)
	function onClick_all(e) {
		e.preventDefault();
		setAllShowtime(!allShowtime)
		console.log(allShowtime)
	}

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
	  let screen = getScreen(activeDay)
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
		{
			(!allShowtime)? 
			<div >
			{	
				(showtime.length === 0)?
				<h3>
					Không có lịch chiếu phim này trong ngày {activeDay}
				</h3>:
				<div className='startTimeContainer'>
				{
				showtime.map((time, index) =>
					<Button key={index} className="startTime">
						{time}
					</Button>
				)
				}
				</div>
			}
			</div>
			:
			<>
			<h2 style={{textAlign: "center"}}>Screen 1</h2>
			<div className='mb-4'>
			{	
				(screen[1].length === 0 )?
				<h3>
					Không có lịch chiếu phim trong ngày {activeDay}
				</h3>:
				<div className='startTimeContainer'>
				{
					screen[1].map((time, index) => 
					<Button
					key={index}
					className = "startTime"
					>
						{time.film.name}
						<br/>
						<h4>{time["start-time"]}</h4>
					</Button>
					)
				}
				</div>
			}
			</div>
			<h2 style={{textAlign: "center"}}>Screen 2</h2>
			<div className='mb-4'>
			{	
				(screen[2].length === 0 )?
				<h3>
					Không có lịch chiếu phim trong ngày {activeDay}
				</h3>:
				<div className='startTimeContainer'>
				{
					screen[2].map((time, index) => 
					<Button
					key={index}
					className = "startTime"
					>
						{time.film.name}
						<br/>
						<h4>{time["start-time"]}</h4>
					</Button>
					)
				}
				</div>
			}
			</div>
			<h2 style={{textAlign: "center"}}>Screen 3</h2>
			<div className=''>
			{	
				(screen[3].length === 0 )?
				<h3>
					Không có lịch chiếu phim trong ngày {activeDay}
				</h3>:
				<div className='startTimeContainer'>
				{
					screen[3].map((time, index) => 
					<Button
					key={index}
					className = "startTime"
					>
						{time.film.name}
						<br/>
						<h4 >{time["start-time"]}</h4>
					</Button>
					)
				}
				</div>
			}
			</div>
			</>
		}
		
		<div className='manageShowtimeBtn mt-4'>
			<Button onClick={onClick_all}>
				{
					(allShowtime)?
					"Chỉ phim này"
					:
					"Tất cả lịch chiếu các phim"
				}
			</Button>
		</div>
		</div>
    </div>
  )
}

export default ShowtimeTabs