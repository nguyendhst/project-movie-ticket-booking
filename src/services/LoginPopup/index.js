import React from "react";
import {Modal, Button, ButtonGroup} from "react-bootstrap";

function LoginPopup(props) {
    return (
        <Modal
            {...props}
            className="LoginPopup"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Đăng nhập với tư cách:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ButtonGroup vertical>
                    <Button className="LoginOption">Khách hàng</Button>
                    <Button className="LoginOption">Nhân viên</Button>
                    <Button className="LoginOption" href="/manager">
                        Quản lý
                    </Button>
                </ButtonGroup>
            </Modal.Body>
        </Modal>
    );
}

export default LoginPopup;
