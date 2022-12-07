import React, { useState } from "react";
import "./Tabs.css";
import AddPreviewPic from "./addPreviewPic/addPreviewPic";

import { Modal, Button, Form/*, ButtonGroup*/ } from "react-bootstrap";
// import FormCheckInput from "react-bootstrap/esm/FormCheckInput";


function AddModal(props) {
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
            <div className="BannerPic">
                <AddPreviewPic />
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

            <Form.Group className="Startdate">
                <Form.Label className="iLabel" htmlFor="inputStartdate">
                    Ngày khởi chiếu
                </Form.Label>
            </Form.Group>
            <Form.Group className="InputStartdate">
                <Form.Control type="text" id="inputStartdate" />
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
        :
        <Modal>
            Từ từ add
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
                        <div className="TabContent overflow-auto">
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