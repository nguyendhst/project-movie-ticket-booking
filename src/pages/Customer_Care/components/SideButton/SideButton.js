import React from "react";
import './SideButton.css'
import { NavLink } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";

function Side_Button() {
    return (
        <Row className="text-center">
            <Col md={12} >
                <NavLink to="/customer-care/new-feedback" className="sideOption"> 
                        <img class="newFb_img" src="https://i.postimg.cc/mg70YDFf/new.png" />
                    <span>Tạo phản hồi mời</span>
                </NavLink>
            </Col>
            <Col md={12}>
                <NavLink to="/customer-care/user-feedback" className="sideOption"> 
                    <span>
                        <img class="myFb_img" src="https://i.postimg.cc/4yT8NvBY/haved.png" />
                    </span>
                    Kết quả phản hồi
                </NavLink>
            </Col>
        </Row>
    )
}

export default Side_Button;