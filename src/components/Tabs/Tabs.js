import React, { useState } from "react";
import "./Tabs.css";

import { Modal, Button, Form/*, ButtonGroup*/ } from "react-bootstrap";

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'


function AddModal(props) {
    // const bnnRef = useRef();
    const [bannerSrc, setBannerSrc] = useState("")
    const [dateselected, setDateselected] = useState(new Date())
    function bannerChange(e) {
        const srcValue =  e.target.value;
        setBannerSrc(srcValue)
    }
    const [startdate, setStartdate] = useState(new Date())
    const [enddate, setEnddate] = useState(new Date())

    return (
        props.type === 0?
        <Modal>
            Không có loại tab
        </Modal>
        : props.type === 1?
        <Modal
          {...props}
        //   className="addModal"
        //   size="xl"
        //   aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName="addModal"
          >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Thêm phim mới
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Form className="addModalBody overflow-auto">
            {/* // ======================// */}
            <div className="BannerContainer">
                <img className="BannerPreview" src={bannerSrc} alt="Please input film banner source"/>
                <Form.Control onChange={bannerChange} type="text" id="BannerSrc"/>
            </div>

            <Form.Group className="FilmName">
                <Form.Label className="iLabel" htmlFor="inputName">Tên phim</Form.Label>
            </Form.Group>
            <Form.Group className="InputName">
                <Form.Control type="text" id="inputName"/>
            </Form.Group>

            <Form.Group className="Duration">
                <Form.Label className="iLabel" htmlFor="inputDuration">Thời lượng</Form.Label>
            </Form.Group>
            <Form.Group className="InputDuration">
                <Form.Control type="number" id="inputDuration"/>
                <h4 className="iLabel dimension">phút</h4>
            </Form.Group>

            <Form.Group className="Categories">
                <Form.Label className="iLabel" htmlFor="inputCategories">Thể loại</Form.Label>
            </Form.Group>
            <Form.Group className="InputCategories">
                <Form.Select id="inputCategories" className="CategoriesOption">
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
                <Form.Control type="number" id="inputShowtime" defaultValue={14}/>
                <h4 className="iLabel dimension">ngày</h4>
            </Form.Group>

            <Form.Group className="StartdateMovie">
                <Form.Label className="iLabel" htmlFor="inputStartdate">
                    Ngày khởi chiếu
                </Form.Label>
            </Form.Group>
            <Form.Group className="InputStartdateMovie">
                <DatePicker
                dateFormat='dd/MM/yyyy'
                className='form-control'
                selected={dateselected}
                onChange={date => setDateselected(date)}
                id="inputStartdate"
                />
            </Form.Group>

            <Form.Group className="Director">
                <Form.Label className="iLabel" htmlFor="inputDirector">
                    Đạo diễn
                </Form.Label>
            </Form.Group>
            <Form.Group className="InputDirector">
                <Form.Control type="text" id="inputDirector" />
            </Form.Group>

            <Form.Group className="Producer">
                <Form.Label className="iLabel" htmlFor="inputProducer">
                    Nhà sản xuất
                </Form.Label>
            </Form.Group>
            <Form.Group className="InputProducer">
                <Form.Control type="text" id="inputProducer" />
            </Form.Group>

            <Form.Group className="Actor">
                <Form.Label className="iLabel" htmlFor="inputActor">
                    Diễn viên
                </Form.Label>
            </Form.Group>
            <Form.Group className="InputActor">
                <Form.Control as="textarea" rows={3} id="inputActor" />
            </Form.Group>

            <Form.Group className="Description">
                <Form.Label className="iLabel" htmlFor="inputDescription">
                    Nội dung
                </Form.Label>
            </Form.Group>
            <Form.Group className="InputDescription">
                <Form.Control as="textarea" rows={3} id="inputDescription" />
            </Form.Group>
            
            </Form>
          </Modal.Body>
          <Modal.Footer>
                <Button onClick={props.onHide} className="footerBtn">Lưu</Button>
                <Button onClick={props.onHide} className="footerBtn">Huỷ</Button>
            </Modal.Footer>
        </Modal>
        : props.type === 2?
        <Modal {...props} centered
        dialogClassName="addModal">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Thêm đồ ăn - thức uống mới
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
            <Form className="addModalBody2 overflow-auto">
                <Form.Label className="iLabel eventName" htmlFor="inputName">Tên món ăn</Form.Label>
                <Form.Group className="InputName">
                    <Form.Control type="text" id="inputName"/>
                </Form.Group>

                <Form.Label className="iLabel price" htmlFor="inputPrice">Giá</Form.Label>
                <Form.Group className="InputPrice">
                    <Form.Control type="number" id="inputPrice" defaultValue={10000}/>
                </Form.Group>

                <Form.Label className="iLabel type" htmlFor="inputType">Sản phẩm</Form.Label>
                <Form.Group className="InputType">
                    <Form.Select id="inputType" className="CategoriesOption">
                        <option value={1}>Đồ ăn</option>
                        <option value={2}>Thức uống</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="BannerPreview">
                    <Form.Control onChange={bannerChange} type="text" id="BannerSrc"/>
                    <img className="BannerPreview" src={bannerSrc} alt="Please input film banner source"/>
                </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
                <Button onClick={props.onHide} className="footerBtn">Lưu</Button>
                <Button onClick={props.onHide} className="footerBtn">Huỷ</Button>
            </Modal.Footer>

        </Modal>
        : 
        <Modal {...props}
        //   className="addModal"
        //   size="xl"
        //   aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName="addModal"
          >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Thêm khuyến mãi mới
                </Modal.Title>
            </Modal.Header>
            
          <Modal.Body >
            <Form className="addModalBody3 overflow-auto">
                <Form.Label className="iLabel eventName" htmlFor="inputName">Tên sự kiện</Form.Label>
                <Form.Group className="InputName">
                    <Form.Control type="text" id="inputName"/>
                </Form.Group>

                <Form.Label className="iLabel discount" htmlFor="Discount">Giảm (%)</Form.Label>
                <Form.Group className="InputDiscount">
                    <Form.Control type="number" id="discount"/>
                </Form.Group>

                <Form.Label className="iLabel discountOn" htmlFor="DiscountOn">Sản phẩm</Form.Label>
                <Form.Group className="InputDiscountOn">
                    <Form.Select id="DiscountOn" className="CategoriesOption">
                        <option value={1}>Vé xem phim</option>
                        <option value={2}>Đồ ăn & thức uống</option>
                    </Form.Select>
                </Form.Group>

                <Form.Label className="iLabel Startdate" htmlFor="inputStartdate">Ngày bắt đầu</Form.Label>
                <Form.Group className="InputStartdate">
                    <DatePicker
                    dateFormat='dd/MM/yyyy'
                    className='form-control'
                    selected={startdate}
                    onChange={date => setStartdate(date)}
                    id="inputStartdate"
                    />
                </Form.Group>

                <Form.Label className="iLabel Enddate" htmlFor="inputEnddate">Ngày kết thúc</Form.Label>
                <Form.Group className="InputEnddate">
                    <DatePicker
                    dateFormat='dd/MM/yyyy'
                    className='form-control'
                    selected={enddate}
                    onChange={date => setEnddate(date)}
                    id="inputEnddate"
                    />
                </Form.Group>

                <Form.Group className="BannerPreview">
                    <Form.Control onChange={bannerChange} type="text" id="BannerSrc"/>
                    <img className="BannerPreview" src={bannerSrc} alt="Please input film banner source"/>
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
                <Button onClick={props.onHide} className="footerBtn">Lưu</Button>
                <Button onClick={props.onHide} className="footerBtn">Huỷ</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Tabs({tabs = [], editable = false , type = 0, sourceData = ""}) { 
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    // const [filmListState, setFilmListState] = useState(tabs[activeTabIndex].content)
    const [addPopup, setAddPopup] = useState(false);

    const activateTab = (index) => {
            setActiveTabIndex(index);
    }

    // console.log(tabs[activeTabIndex].content[0].props.deleted)
    return(
        <div className="Tabs">
                {Object.keys(tabs).length === 0 ?
                    <div> No Tabs</div>
                :    
                    (
                    <>
                    <div className="Tab">
                        {
                            
                            tabs.map((tab, index) => (
                                <Button
                                    key = {index}
                                    className={index === activeTabIndex ? "tab-btn active-tab-btn" : "tab-btn"}
                                    onClick={() => activateTab(index)}
                                >
                                    {tab.name}
                                </Button>
                        ))}
                    </div>
                    <div className="TabBody">
                        <div className="TabToolbar overflow-clip">
                            <Button type="button" className="add-btn"
                            onClick={() => setAddPopup(true)}
                            >
                                Thêm {type === 0? "Loại tab không xác định" : type === 1? "phim" : type === 2? "thức ăn" : "khuyến mãi"} mới
                            </Button>
                            {/* {console.log(addPopup)} */}
                        </div>
                        
                        <div className={"TabContent"+ type + " overflow-auto"}>
                        {tabs[activeTabIndex].content}
                        </div>

                        <AddModal
                            show={addPopup}
                            onHide={() => setAddPopup(false)}
                            type={type}
                        />
                    </div>
                    
                    </>
                )}
        </div>
    )
}

export default Tabs;