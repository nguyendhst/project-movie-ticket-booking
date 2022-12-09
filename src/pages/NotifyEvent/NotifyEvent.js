import React, { useState } from "react";
import { Col, Container, Row, Form} from "react-bootstrap";
import Header from '../Customer_Care/components/Header/Header';
import './NotifyEvent.css';

function NotifyEvent() {
  const events = [
    {
      id: 1,
      eventName: "SỰ KIỆN ĐÓN PHIM ONE PIECE: FILM RED CÙNG NTTVN",
      eventTime: "25/11/2020 - 30/11/2020",
      eventImage: "https://cartelescine.files.wordpress.com/2022/07/onepieceredbanner.jpg"
    },

    {
      id: 2,
      eventName: "SỰ KIỆN MỪNG NGÀY NHÀ GIÁO CÙNG NTTVN",
      eventTime: "19/11/2020 - 21/11/2020",
      eventImage: "https://i.postimg.cc/7ZFKFCMP/2011.png"
    },

    {
      id: 3,
      eventName: "SỰ KIỆN BÙNG NỔ HỨNG KHỞI KHAI PHÁ PHIM MỚI CÙNG NTTVN",
      eventTime: "01/11/2020 - 10/11/2020",
      eventImage: "https://i.postimg.cc/15jSNHPW/event.png"
    },

    {
      id: 4,
      eventName: "SỰ KIỆN KHUYẾN MÃI PHIM MỚI CÙNG NTTVN",
      eventTime: "01/11/2020 - 10/11/2020",
      eventImage: "https://i.postimg.cc/6QpcDDyc/film.png"
    },

    {
      id: 5,
      eventName: "SỰ KIỆN KHAI TRƯƠNG CÙNG NTTVN",
      eventTime: "01/11/2020 - 10/11/2020",
      eventImage: "https://i.postimg.cc/q7sKDgv3/nttvn.pnghttps://i.postimg.cc/6QpcDDyc/film.png"
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(3);
  const [query, setQuery] = useState("")

  function checkQuery(post) {
    const postEventName = post.eventName.toLowerCase().includes(query.toLowerCase());
    return postEventName;
  }

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  }

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  }

  const indexOfLastPost = currentPage * resultsPerPage;
  const indexOfFirstPost = indexOfLastPost - resultsPerPage;

  const eventToDisplay = events.filter(post => {
    if (query === '') {
      return post;
    } else if (checkQuery(post)) {
      return post;
    }
  });
  const totalPage = Math.ceil(eventToDisplay.length / resultsPerPage);

  return (
    <Container fluid>
      <Header/>
      <Row className="mb-3 me-0">
        <Col lg={12} className="d-flex justify-content-center search-bar">
          <input type="text" placeholder="Tìm kiếm sự kiện" onChange={event => setQuery(event.target.value)} />
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
            eventToDisplay.slice(indexOfFirstPost, indexOfLastPost).map((post) => (
              <Row key={post.id} className="main-event py-3">
                <Col xs={6} className="mt-2">
                  <p>{post.eventName}</p>
                </Col>
                <Col xs={3} className="mt-2">
                  <p>Thời gian: {post.eventTime}</p>
                </Col>
                <Col xs={3}>
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
                          <button className="sendEventBtn" type='submit'>
                              Gửi thông báo
                          </button>
                        </Col>
                    </Form.Group>
                  </Form>
                  <p>{post.title}</p>
                </Col>
                <Col xs={12} className="eventImg">
                  <img className="" src={post.eventImage} />
                </Col>
              </Row>
            ))
          }
        </Col>
      </Row>
    </Container>
    
  );
}

export default NotifyEvent;
