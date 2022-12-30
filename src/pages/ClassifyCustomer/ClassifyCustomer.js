import React, { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import Header from '../Customer_Care/components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {customers, customerClass } from './data.js';
import './ClassifyCustomer.css';


function ClassifyCustomer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("")
  const [filterCustomer, setFilterCustomer] = useState(customers.filter(post => post.cclass === "Khách hàng mới"));
  const [curCustomer, setCurCustomer] = useState("Khách hàng mới");

  function checkQuery(post) {
    const postName = post.name.toLowerCase().includes(query.toLowerCase());
    return postName;
  }

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  }

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  }

  const handleFilterCustomer = (cclass) => {
    setFilterCustomer(customers.filter(post => post.cclass === cclass));
    setCurCustomer(cclass);
  }
  
  const indexOfLastPost = currentPage * 3;
  const indexOfFirstPost = indexOfLastPost - 3;

  const customerToDisplay = filterCustomer.filter(post => {
    if (query === '') return post;
    return checkQuery(post) ? post : null;
  });
  
  const totalPage = Math.ceil(customerToDisplay.length / 3);

  return (
    <Container fluid>
      <Header/>
      <Row className="me-0 mainwork">
        <Col lg={12} className="search-bar">
          <input type="text" placeholder="Tìm kiếm khách hàng" onChange={event => setQuery(event.target.value)} />
        </Col>
        <Col md={12} lg={2} className="ms-1 mt-3">
          <Row className="text-center">
            {
              customerClass.map((classbtn) => (
                <Col md={12}>
                  <button 
                    style={{
                      backgroundColor: curCustomer === classbtn.name ? '#2EB19F' : '',
                      color: curCustomer === classbtn.name ? 'white' : '',
                    }} 
                    className="classBtn" 
                    onClick={() => handleFilterCustomer(classbtn.name)}> 
                      <span>
                          <img class="class_img" alt="class" src={classbtn.icon} />
                      </span>
                      {classbtn.name}
                  </button>
                </Col>
              ))
            }
          </Row>
        </Col>
        <Col md={12} lg={9} className="Main mx-auto px-5 py-4">
          <Row className="d-flex justify-content-end me-2">
            <Col xs={1} className="d-flex align-items-center">
              <span>
                Trang{' '}
                <strong>
                  {currentPage} / {totalPage}
                </strong>{' '}
              </span>
            </Col>
            <Col xs={1} className="ms-2">
              <button className="prenext" onClick={() => handlePrevClick()} disabled={currentPage<=1}>
              &larr; Trước
              </button>
            </Col>
            <Col xs={1} className="mqfb">
              <button className="prenext" onClick={() => handleNextClick()} disabled={currentPage>=totalPage}>
                Sau &rarr;
              </button>
            </Col>
          </Row>
          {
            customerToDisplay.slice(indexOfFirstPost, indexOfLastPost).map((post) => (
              <Row
                key={post.id}
                className="customerInfor py-3"
              >
                <Col xs={2} className="mt-2">
                  <p>{post.name}</p>
                </Col>
                <Col xs={7} className="mt-2">
                </Col>
                <Col xs={3} className="getright">
                  <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Col xs="auto" className="mt-2">
                            <Form.Select required aria-label="Default select example">
                                <option value="">Nhóm khách hàng</option>
                                <option value="KHM">Khách hàng mới</option>
                                <option value="KHTN">Khách hàng tiềm năng</option>
                                <option value="KHTC">Khách hàng trung cấp</option>
                                <option value="KHCC">Khách hàng cao cấp</option>
                            </Form.Select>
                        </Col>
                        <Col xs="auto" className="mt-2">
                          <button className="changeClassBtn" type='submit'>
                              Đổi nhóm
                          </button>
                        </Col>
                    </Form.Group>
                  </Form>
                </Col>
                <Row>
                  <Col xs={3}>
                    <p>Ngày sinh: {post.bdate}</p>
                  </Col>
                  <Col xs={4}>
                    <p>Tổng số lần truy cập: {post.totalAcces}</p>
                  </Col>
                  <Col xs={5}>
                    <p>Tổng số vé đã đặt: {post.totalTicket}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3}>
                    <p>Liên lạc: {post.phone}</p>
                  </Col>
                  <Col xs={4}>
                    <p>Số lần truy cập trong 3 tháng qua: {post.threeMonthAccess}</p>
                  </Col>
                  <Col xs={5}>
                    <p>Tổng số vé đã đặt trong 3 tháng qua: {post.threeMonthTicket}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3}>
                    <p>Email: {post.mail}</p>
                  </Col>
                  <Col xs={4}>
                    <p>Lần truy cập gần nhất: {post.lastAccess}</p>
                  </Col>
                  <Col xs={5}>
                    <p>Tổng số tiền đã thanh toán: {post.totalPay}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>
                    <p>Facebook: {post.facebook}</p>
                  </Col>
                  <Col xs={3}>
                  </Col>
                  <Col xs={5}>
                    <p>Tổng số tiền đã thanh toán trong 3 tháng qua: {post.threeMonthPay}</p>
                  </Col>
                </Row>
              </Row>
            ))
          }
        </Col>
      </Row>
      <Footer/>
    </Container>
    
  );
}

export default ClassifyCustomer;
