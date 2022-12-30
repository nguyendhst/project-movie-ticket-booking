import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
const insert_activity = "http://localhost:8080/api/monitoring/add";
function checknumber(str){
    if(parseInt(str)===NaN){
        return false;
    }
    return true;
}
function AddEvent() {
    const submit = (e) => {
        e.preventDefault();

        axios
            .post(insert_activity, {
                names: e.target.names.value,
                code: e.target.code.value,
                start_time: e.target.start_time.value,
                end_time: e.target.end_time.value,
                received: e.target.received.value,
                spend: e.target.spend.value,
                kpi: e.target.kpi.value,
                descriptions: e.target.descriptions.value,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <Container fluid>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="names">
                    <Form.Label>Tên hoạt động</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Tên hoạt động"
                        name="names"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="code">
                    <Form.Label>Mã hoạt động</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="mã hoạt động"
                        name="code"
                    />
                </Form.Group>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="start-time">
                                <Form.Label>Thời gian bắt đầu</Form.Label>
                                <Form.Control type="date" name="start_time" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="end-time">
                                <Form.Label>Thời gian kết thúc</Form.Label>
                                <Form.Control type="date" name="end_time" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="received">
                                <Form.Label>Thu</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Thu"
                                    name="received"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="spend">
                                <Form.Label>Chi</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Chi"
                                    name="spend"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="kpi">
                                <Form.Label>Chỉ tiêu</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Chỉ tiêu"
                                    name="kpi"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="descriptions">
                            <Form.Label>Mô tả</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="descriptions"
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Button variant="primary" type="submit" style={{width:"fit-content",margin: "1em"}}>
                            Thêm hoạt động
                        </Button>
                    </Row>
                </Container>
            </Form>
        </Container>
    );
}
export default AddEvent;
