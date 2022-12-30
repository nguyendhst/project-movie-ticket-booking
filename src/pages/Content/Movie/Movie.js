import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'


import Footer from "../../../components/Footer/Footer";

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



function Movie() {
	let {movie_id} = useParams();
	const [modifying, setModifying] = useState(false);

	return (
		<div className='MovieEdit'>
			<Header/>
			<div className='MovieEditMain'>
				<Form className="addModalBody overflow-auto" aria-disabled={!modifying}>
					{/* // ======================// */}
					<div className="BannerPic">
							{/* <AddPreviewPic /> */}
					</div>

					<Form.Group className="FilmName">
							<Form.Label className="iLabel" htmlFor="inputName">Tên phim</Form.Label>
					</Form.Group>
					<Form.Group className="InputName">
							<Form.Control type="text" id="inputName" disabled={!modifying}/>
					</Form.Group>

					<Form.Group className="Duration">
							<Form.Label className="iLabel" htmlFor="inputDuration">Thời lượng</Form.Label>
					</Form.Group>
					<Form.Group className="InputDuration">
							<Form.Control type="number" id="inputDuration" disabled={!modifying}/>
							<h4 className="iLabel dimension">phút</h4>
					</Form.Group>

					<Form.Group className="Categories">
							<Form.Label className="iLabel" htmlFor="inputCategories">Thể loại</Form.Label>
					</Form.Group>
					<Form.Group className="InputCategories">
						<Form.Select id="inputCategories" className="CategoriesOption" disabled={!modifying}>
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
							<Form.Control type="number" id="inputShowtime" defaultValue={14} disabled={!modifying}/>
							<h4 className="iLabel dimension">ngày</h4>
					</Form.Group>

					<Form.Group className="Startdate">
							<Form.Label className="iLabel" htmlFor="inputStartdate">
									Ngày khởi chiếu
							</Form.Label>
					</Form.Group>
					<Form.Group className="InputStartdate">
							<Form.Control type="text" id="inputStartdate" disabled={!modifying}/>
					</Form.Group>

					<Form.Group className="Director">
							<Form.Label className="iLabel" htmlFor="inputDirector">
									Đạo diễn
							</Form.Label>
					</Form.Group>
					<Form.Group className="InputDirector">
							<Form.Control type="text" id="inputDirector" disabled={!modifying}/>
					</Form.Group>

					<Form.Group className="Producer">
							<Form.Label className="iLabel" htmlFor="inputProducer">
									Nhà sản xuất
							</Form.Label>
					</Form.Group>
					<Form.Group className="InputProducer">
							<Form.Control type="text" id="inputProducer" disabled={!modifying}/>
					</Form.Group>

					<Form.Group className="Actor">
							<Form.Label className="iLabel" htmlFor="inputActor">
									Diễn viên
							</Form.Label>
					</Form.Group>
					<Form.Group className="InputActor">
							<Form.Control as="textarea" rows={3} id="inputActor" disabled={!modifying}/>
					</Form.Group>

					<Form.Group className="Description">
							<Form.Label className="iLabel" htmlFor="inputDescription">
									Nội dung
							</Form.Label>
					</Form.Group>
					<Form.Group className="InputDescription">
							<Form.Control as="textarea" rows={3} id="inputDescription" disabled={!modifying}/>
					</Form.Group>
					
				</Form>
			</div>

			<Footer/>
		</div>
	)
}

export default Movie