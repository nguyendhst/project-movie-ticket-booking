import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

import films from "../../../data/films.json"

import Footer from "../../../components/Footer/Footer";
import ShowtimeTabs from "./ShowtimeComponents/ShowtimeTabs.js"
import House from "../../../Asset/house.svg";
import {
	Button,
	Form
 } from 'react-bootstrap';
import './Movie.css';

function Header() {

	return(
			<ul className="Header">
					<ul className="Left_header">
							<li id="Home-logo">
									<a href="/manager">
											<img src={House} width='40px' height='40px' alt="Home logo"></img>
									</a>
							</li>
					</ul>
					<li>
							<a href='/#'>
							<Button
							className="LogoutButton"
							>
									Đăng xuất
							</Button>
							</a>
					</li>
			</ul>
	)
}

function getShowtimeDate(startDate, showtime=0){
	let dates = []
	let dateState = new Date(startDate)
	for (let i = 0; i < parseInt(showtime); i++) {
		dates[i] = new Date(dateState)
		dateState = new Date(dateState.getTime() + 24*60*60*1000)
	}
	return dates
}

function Movie() {
	const [modifying, setModifying] = useState(false);
	function onclick(e){
		e.preventDefault();
		setModifying(!modifying)
	}

	
	//Filter the selected film
	let {movie_id} = useParams();
	movie_id = parseInt(movie_id)

	let movie;

	let filter_result = films.Archived.filter(film => film.id === movie_id)

	if (filter_result.length === 0) filter_result = films.OnGoing.filter(film => film.id === movie_id)
	if (filter_result.length === 0) filter_result = films.UpComing.filter(film => film.id === movie_id)
	if (filter_result.length === 0) movie = null
	else movie = filter_result[0]

	//Get state from selected film
	const [bannerSrc, setBannerSrc] = useState(movie.poster)
	const [bigbannerSrc, setBigbannerSrc] = useState(movie.verticalPoster)
	const [showtimeInput, setShowtimeInput] = useState(movie.showtime)
	const [day, month, year] = movie.startdate.split('/');
	const [dateselected, setDateselected] = useState(new Date(+year, +month - 1, +day))
	//Update date state and recalculate the showtime
    
    function bannerChange(e) {
        const srcValue =  e.target.value;
        setBannerSrc(srcValue)
    }

	function bigBannerChange(e) {
        const srcValue =  e.target.value;
        setBigbannerSrc(srcValue)
    }
	function dateChange(date) {
		setDateselected(date)
	}
	function showtimeChange(e) {
		const showtimeValue = e.target.value;
		setShowtimeInput(showtimeValue);
	}

	let showtimeDates = getShowtimeDate(dateselected, showtimeInput)

	return (
		<div className='MovieEdit'>
			<Header/>
			<div className='MovieEditMain '>
				<Form className="MovieEditForm" aria-disabled={!modifying}>
					<div className="BigBannerContainer">
						<img className="BigBannerPreview" src={bigbannerSrc} alt="Please input film banner source"/>
						<Form.Control defaultValue={movie.verticalPoster} onChange={bigBannerChange} type="text" id="BigBannerSrc" disabled={!modifying}/>
					</div>

					{/* // ======================// */}
					<div className="BannerContainer">
						<img className="BannerPreview" src={bannerSrc} alt="Please input film banner source"/>
						<Form.Control defaultValue={movie.poster} onChange={bannerChange} type="text" id="BannerSrc" disabled={!modifying}/>
					</div>

					<Form.Group className="FilmName">
							<Form.Label className="iLabel" htmlFor="inputName">Tên phim</Form.Label>
					</Form.Group>
					<Form.Group className="InputName">
							<Form.Control type="text" id="inputName" defaultValue={movie.name} disabled={!modifying}/>
					</Form.Group>

					<Form.Group className="Duration">
							<Form.Label className="iLabel" htmlFor="inputDuration">Thời lượng</Form.Label>
					</Form.Group>
					<Form.Group className="InputDuration">
							<Form.Control defaultValue={movie.duration} type="number" id="inputDuration" disabled={!modifying}/>
							<h4 className="iLabel dimension">phút</h4>
					</Form.Group>

					<Form.Group className="Categories">
							<Form.Label className="iLabel" htmlFor="inputCategories">Thể loại</Form.Label>
					</Form.Group>
					<Form.Group className="InputCategories">
						<Form.Select defaultValue={movie.category} id="inputCategories" className="CategoriesOption" disabled={!modifying}>
							<option>Thể loại</option>
							<option value="caoboi">Cao bồi</option>
							<option value="chientranh">Chiến tranh</option>
							<option value="giadinh">Gia đình</option>
							<option value="giatuong">Giả tưởng</option>
							<option value="giatgan">Giật gân</option>
							<option value="hai">Hài</option>
							<option value="hanhdong">Hành động</option>
							<option value="hinhsu">Hình sự</option>
							<option value="hoathinh">Hoạt hình</option>
							<option value="kinhdi">Kinh dị</option>
							<option value="langman">Lãng mạn</option>
							<option value="lichsu">Lịch sử</option>
							<option value="lyky">Ly kỳ</option>
							<option value="nhackich">Nhạc kịch</option>
							<option value="phieuluu">Phiêu lưu</option>
							<option value="tailieu">Tài liệu</option>
							<option value="tamly">Tâm lý</option>
							<option value="thanthoai">Thần thoại</option>
							<option value="thethao">Thể thao</option>
							<option value="tieusu">Tiểu sử</option>
							<option value="tinhcam">Tình cảm</option>   
							<option value="toipham">Tội phạm</option>
						</Form.Select>
					</Form.Group>
					
					<Form.Group className="Showtime">
							<Form.Label className="iLabel" htmlFor="inputShowtime">Thời gian chiếu</Form.Label>
					</Form.Group>
					<Form.Group className="InputShowtime">
							<Form.Control defaultValue={movie.showtime} onChange={showtimeChange} type="number" id="inputShowtime" disabled={!modifying}/>
							<h4 className="iLabel dimension">ngày</h4>
					</Form.Group>

					<Form.Group className="StartdateMovie">
							<Form.Label className="iLabel" htmlFor="inputStartdate">
									Ngày khởi chiếu
							</Form.Label>
					</Form.Group>
					<Form.Group className="InputStartdateMovie">
						<DatePicker dateFormat='dd/MM/yyyy'
						defaultValue={movie.startdate}
						className='form-control'
						selected={dateselected}
						onChange={date => dateChange(date)}
						id="inputStartdate"
						disabled={!modifying}
						/>
					</Form.Group>

					<Form.Group className="Director">
							<Form.Label className="iLabel" htmlFor="inputDirector">
									Đạo diễn
							</Form.Label>
					</Form.Group>
					<Form.Group className="InputDirector">
							<Form.Control defaultValue={movie.director} type="text" id="inputDirector" disabled={!modifying}/>
					</Form.Group>

					<Form.Group className="Producer">
							<Form.Label className="iLabel" htmlFor="inputProducer">
									Nhà sản xuất
							</Form.Label>
					</Form.Group>
					<Form.Group className="InputProducer">
							<Form.Control defaultValue={movie.producer} type="text" id="inputProducer" disabled={!modifying}/>
					</Form.Group>

					<Form.Group className="Actor">
							<Form.Label className="iLabel" htmlFor="inputActor">
									Diễn viên
							</Form.Label>
					</Form.Group>
					<Form.Group className="InputActor">
							<Form.Control defaultValue={movie.actor} as="textarea" rows={3} id="inputActor" disabled={!modifying}/>
					</Form.Group>

					<Form.Group className="Description">
							<Form.Label className="iLabel" htmlFor="inputDescription">
									Nội dung
							</Form.Label>
					</Form.Group>
					<Form.Group className="InputDescription">
							<Form.Control defaultValue={movie.description} as="textarea" rows={3} id="inputDescription" disabled={!modifying}/>
					</Form.Group>
					

					<Button onClick={onclick} className="m-4 SubmitBtn">
						{modifying?
						"Lưu":
						"Chỉnh sửa"
						}
					</Button>

					{modifying?
					<></>:
					<Button href='/content-manage' className='CancelBtn m-4'>
						Quay về
					</Button>}
				</Form>
				
			</div>
			<div className='showtime'>
			<ShowtimeTabs
				dates={showtimeDates}
				filmID={movie.id}
			/>
			</div>
			<Footer/>
		</div>
	)
}

export default Movie