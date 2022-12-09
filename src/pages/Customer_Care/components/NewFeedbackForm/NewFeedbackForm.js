import React, {useState} from "react";
import './NewFeedbackForm.css'
import { Col, Row ,Form} from "react-bootstrap";

function New_feedback_form() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h2>Phản hồi mới</h2>
            <Form.Group as={Row} className="mb-3">
                <Col md={2}>
                    <Form.Select required aria-label="Default select example">
                        <option value="">Phân loại</option>
                        <option value="CSHT">Cơ sở hạ tầng</option>
                        <option value="DV">Dịch vụ</option>
                        <option value="NV">Nhân viên</option>
                        <option value="TT">Thanh toán</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Chọn loại phản hồi
                    </Form.Control.Feedback>
                </Col>
                <Col md={10}>
                    <Form.Control 
                        required
                        type="text" 
                        placeholder="Chủ đề" 
                    />
                    <Form.Control.Feedback type="invalid">
                        Nhập chủ đề phản hồi.
                    </Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col md={12}>
                <Form.Control
                    required
                    as="textarea"
                    placeholder="Nội dung của phản hồi"
                    style={{ height: '340px' }}
                />
                <Form.Control.Feedback type="invalid">
                    Nhập nội dung phản hồi.
                </Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Col className="Confirm">
                <button className="Confirm_Button" type='submit'>
                    Xác nhận
                </button>
            </Col>
        </Form>
    )
}

export default New_feedback_form;