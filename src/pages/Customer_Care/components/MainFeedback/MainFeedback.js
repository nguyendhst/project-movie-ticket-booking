import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SideButton from "../SideButton/SideButton";

import "./MainFeedback.css";

function FeedbackResult(props) {
  return (
    <Row className="user_feedback_result">
      <h3>Phản hồi</h3>
      <Row className="py-1">
        <p>{props.resp.greet}</p>
      </Row>
      <Row className="py-1">
        <p>{props.resp.respcontent}</p>
      </Row>
      <Row className="py-1 getright">
        <p>{props.resp.thank}</p>
      </Row>
    </Row>
  );
}

function Feedback(props) {
  return (
    <Row>
      <Row
        key={props.post.id}
        className="user_feedback py-3"
        onClick={() => props.toggleResult(props.post.id)}
      >
        <Col xs={2}>
          <p>{props.post.result}</p>
        </Col>
        <Col xs={2}>
          <p>{props.post.topic}</p>
        </Col>
        <Col xs={3}>
          <p>{props.post.title}</p>
        </Col>
        <Col xs={5} className="getright">
          <p>{props.post.date}</p>
        </Col>
        <Col xs={12} className="fcontent">
          <p>{props.post.content}</p>
        </Col>
      </Row>
      {props.resultFeedback === props.post.id &&
      props.post.result === "Đã có kết quả" ? (
        <FeedbackResult resp={props.post.resp}></FeedbackResult>
      ) : null}
    </Row>
  );
}

function MainFeedback() {
  const feedbacks = [
    {
      id: 1,
      result: "Đã có kết quả",
      topic: "Dịch vụ",
      title: "Về sự kiện ngày 20/10",
      content:
        "Ngày 20/10 tôi và bạn gái có đến rạp và có chương trình cho cặp đôi vào lúc 19h nhưng chúng tôi đến tham gia thì không có chương trình nào cả theo thông báo được gửi đến tài khoản của tôi. Tôi nghĩ rạp chiếu phim nên xem xét kỹ hơn nữa về vấn đề khuyến mãi và sự kiện trước khi thông báo đến với khách hàng. Hy vọng bên rạp chiếu phim lắng nghe ý kiến của tôi và sẽ sửa đổi tốt hơn.",
      date: "21-10-2022",
      resp: {
        greet:
          "Chào bạn, cảm ơn bạn đã gửi phản hồi về với dịch vụ chăm sóc khách hàng của rạp NTT.",
        respcontent:
          "Về chương trình cho cặp đôi ngày 20/10, rạp NTT chỉ tiến hành trong khung giờ từ 20h đến 22h nên nếu bạn đến rạp trong khoảng thời gian khác thì nội dung khuyến mãi sẽ không được áp dụng.",
        thank:
          "Cảm ơn bạn đã xem phim ở rạp NTT và chúc bạn một ngày tốt lành.",
      },
    },

    {
      id: 2,
      result: "Đã có kết quả",
      topic: "Cơ sở hạ tầng",
      title: "Về sự kiện ngày 20/10",
      content:
        "Ngày 20/10 tôi và bạn gái có đến rạp và có chương trình cho cặp đôi vào lúc 19h nhưng chúng tôi đến tham gia thì không có chương trình nào cả theo thông báo được gửi đến tài khoản của tôi. Tôi nghĩ rạp chiếu phim nên xem xét kỹ hơn nữa về vấn đề khuyến mãi và sự kiện trước khi thông báo đến với khách hàng. Hy vọng bên rạp chiếu phim lắng nghe ý kiến của tôi và sẽ sửa đổi tốt hơn.",
      date: "22-10-2022",
      resp: {
        greet:
          "Chào bạn, cảm ơn bạn đã gửi phản hồi về với dịch vụ chăm sóc khách hàng của rạp NTT.",
        respcontent:
          "Về chương trình cho cặp đôi ngày 20/10, rạp NTT chỉ tiến hành trong khung giờ từ 20h đến 22h nên nếu bạn đến rạp trong khoảng thời gian khác thì nội dung khuyến mãi sẽ không được áp dụng.",
        thank:
          "Cảm ơn bạn đã xem phim ở rạp NTT và chúc bạn một ngày tốt lành.",
      },
    },

    {
      id: 3,
      result: "Đã có kết quả",
      topic: "Nhân viên",
      title: "Về sự kiện ngày 20/10",
      content:
        "Ngày 20/10 tôi và bạn gái có đến rạp và có chương trình cho cặp đôi vào lúc 19h nhưng chúng tôi đến tham gia thì không có chương trình nào cả theo thông báo được gửi đến tài khoản của tôi. Tôi nghĩ rạp chiếu phim nên xem xét kỹ hơn nữa về vấn đề khuyến mãi và sự kiện trước khi thông báo đến với khách hàng. Hy vọng bên rạp chiếu phim lắng nghe ý kiến của tôi và sẽ sửa đổi tốt hơn.",
      date: "23-10-2022",
      resp: {
        greet:
          "Chào bạn, cảm ơn bạn đã gửi phản hồi về với dịch vụ chăm sóc khách hàng của rạp NTT.",
        respcontent:
          "Về chương trình cho cặp đôi ngày 20/10, rạp NTT chỉ tiến hành trong khung giờ từ 20h đến 22h nên nếu bạn đến rạp trong khoảng thời gian khác thì nội dung khuyến mãi sẽ không được áp dụng.",
        thank:
          "Cảm ơn bạn đã xem phim ở rạp NTT và chúc bạn một ngày tốt lành.",
      },
    },

    {
      id: 4,
      result: "Đã có kết quả",
      topic: "Thanh toán",
      title: "Về sự kiện ngày 20/10",
      content:
        "Ngày 20/10 tôi và bạn gái có đến rạp và có chương trình cho cặp đôi vào lúc 19h nhưng chúng tôi đến tham gia thì không có chương trình nào cả theo thông báo được gửi đến tài khoản của tôi. Tôi nghĩ rạp chiếu phim nên xem xét kỹ hơn nữa về vấn đề khuyến mãi và sự kiện trước khi thông báo đến với khách hàng. Hy vọng bên rạp chiếu phim lắng nghe ý kiến của tôi và sẽ sửa đổi tốt hơn.",
      date: "24-10-2022",
      resp: {
        greet:
          "Chào bạn, cảm ơn bạn đã gửi phản hồi về với dịch vụ chăm sóc khách hàng của rạp NTT.",
        respcontent:
          "Về chương trình cho cặp đôi ngày 20/10, rạp NTT chỉ tiến hành trong khung giờ từ 20h đến 22h nên nếu bạn đến rạp trong khoảng thời gian khác thì nội dung khuyến mãi sẽ không được áp dụng.",
        thank:
          "Cảm ơn bạn đã xem phim ở rạp NTT và chúc bạn một ngày tốt lành.",
      },
    },

    {
      id: 5,
      result: "Đã có kết quả",
      topic: "Dịch vụ",
      title: "Về sự kiện ngày 20/10",
      content:
        "Ngày 20/10 tôi và bạn gái có đến rạp và có chương trình cho cặp đôi vào lúc 19h nhưng chúng tôi đến tham gia thì không có chương trình nào cả theo thông báo được gửi đến tài khoản của tôi. Tôi nghĩ rạp chiếu phim nên xem xét kỹ hơn nữa về vấn đề khuyến mãi và sự kiện trước khi thông báo đến với khách hàng. Hy vọng bên rạp chiếu phim lắng nghe ý kiến của tôi và sẽ sửa đổi tốt hơn.",
      date: "25-10-2022",
      resp: {
        greet:
          "Chào bạn, cảm ơn bạn đã gửi phản hồi về với dịch vụ chăm sóc khách hàng của rạp NTT.",
        respcontent:
          "Về chương trình cho cặp đôi ngày 20/10, rạp NTT chỉ tiến hành trong khung giờ từ 20h đến 22h nên nếu bạn đến rạp trong khoảng thời gian khác thì nội dung khuyến mãi sẽ không được áp dụng.",
        thank:
          "Cảm ơn bạn đã xem phim ở rạp NTT và chúc bạn một ngày tốt lành.",
      },
    },

    {
      id: 6,
      result: "Đã có kết quả",
      topic: "Dịch vụ",
      title: "Về sự kiện ngày 20/10",
      content:
        "Ngày 20/10 tôi và bạn gái có đến rạp và có chương trình cho cặp đôi vào lúc 19h nhưng chúng tôi đến tham gia thì không có chương trình nào cả theo thông báo được gửi đến tài khoản của tôi. Tôi nghĩ rạp chiếu phim nên xem xét kỹ hơn nữa về vấn đề khuyến mãi và sự kiện trước khi thông báo đến với khách hàng. Hy vọng bên rạp chiếu phim lắng nghe ý kiến của tôi và sẽ sửa đổi tốt hơn.",
      date: "26-10-2022",
      resp: {
        greet:
          "Chào bạn, cảm ơn bạn đã gửi phản hồi về với dịch vụ chăm sóc khách hàng của rạp NTT.",
        respcontent:
          "Về chương trình cho cặp đôi ngày 20/10, rạp NTT chỉ tiến hành trong khung giờ từ 20h đến 22h nên nếu bạn đến rạp trong khoảng thời gian khác thì nội dung khuyến mãi sẽ không được áp dụng.",
        thank:
          "Cảm ơn bạn đã xem phim ở rạp NTT và chúc bạn một ngày tốt lành.",
      },
    },

    {
      id: 7,
      result: "Chưa có kết quả",
      topic: "Thanh toán",
      title: "Về sự kiện ngày 20/10",
      content:
        "Ngày 20/10 tôi và bạn gái có đến rạp và có chương trình cho cặp đôi vào lúc 19h nhưng chúng tôi đến tham gia thì không có chương trình nào cả theo thông báo được gửi đến tài khoản của tôi. Tôi nghĩ rạp chiếu phim nên xem xét kỹ hơn nữa về vấn đề khuyến mãi và sự kiện trước khi thông báo đến với khách hàng. Hy vọng bên rạp chiếu phim lắng nghe ý kiến của tôi và sẽ sửa đổi tốt hơn.",
      date: "27-10-2022",
      resp: {
        greet:
          "Chào bạn, cảm ơn bạn đã gửi phản hồi về với dịch vụ chăm sóc khách hàng của rạp NTT.",
        respcontent:
          "Về chương trình cho cặp đôi ngày 20/10, rạp NTT chỉ tiến hành trong khung giờ từ 20h đến 22h nên nếu bạn đến rạp trong khoảng thời gian khác thì nội dung khuyến mãi sẽ không được áp dụng.",
        thank:
          "Cảm ơn bạn đã xem phim ở rạp NTT và chúc bạn một ngày tốt lành.",
      },
    },

    {
      id: 8,
      result: "Đã có kết quả",
      topic: "Dịch vụ",
      title: "Về sự kiện ngày 20/10",
      content:
        "Ngày 20/10 tôi và bạn gái có đến rạp và có chương trình cho cặp đôi vào lúc 19h nhưng chúng tôi đến tham gia thì không có chương trình nào cả theo thông báo được gửi đến tài khoản của tôi. Tôi nghĩ rạp chiếu phim nên xem xét kỹ hơn nữa về vấn đề khuyến mãi và sự kiện trước khi thông báo đến với khách hàng. Hy vọng bên rạp chiếu phim lắng nghe ý kiến của tôi và sẽ sửa đổi tốt hơn.",
      date: "28-10-2022",
      resp: {
        greet:
          "Chào bạn, cảm ơn bạn đã gửi phản hồi về với dịch vụ chăm sóc khách hàng của rạp NTT.",
        respcontent:
          "Về chương trình cho cặp đôi ngày 20/10, rạp NTT chỉ tiến hành trong khung giờ từ 20h đến 22h nên nếu bạn đến rạp trong khoảng thời gian khác thì nội dung khuyến mãi sẽ không được áp dụng.",
        thank:
          "Cảm ơn bạn đã xem phim ở rạp NTT và chúc bạn một ngày tốt lành.",
      },
    },
  ];

  const [resultFeedback, setResultFeedback] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("")

  function checkQuery(post) {
    const postResult = post.result.toLowerCase().includes(query.toLowerCase());
    const postTopic = post.topic.toLowerCase().includes(query.toLowerCase());
    const postTitle = post.title.toLowerCase().includes(query.toLowerCase());
    const postContent = post.content.toLowerCase().includes(query.toLowerCase());
    const postDate = post.date.toLowerCase().includes(query.toLowerCase());
    return postResult || postTopic || postTitle || postContent || postDate;
  }

  const toggleResult = (id) => {
    setResultFeedback((prev) => (prev.resultFeedback !== id ? id : ""));
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
    console.log(currentPage);
  }

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  }

  
  const indexOfLastPost = currentPage * 3;
  const indexOfFirstPost = indexOfLastPost - 3;
  const feedbackToDisplay = feedbacks.filter(post => {
    if (query === '') return post;
    return checkQuery(post) ? post : null;
  });
  const totalPage = Math.ceil(feedbackToDisplay.length / 3);

  return (
    <Row className="mb-3 me-0">
      <Col lg={12} className="d-flex justify-content-center search-bar">
        <input type="text" placeholder="Tìm kiếm phản hồi" onChange={event => setQuery(event.target.value)} />
      </Col>
      <Col md={12} lg={2} className="ms-1 mt-3">
        <SideButton />
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
            <button className="leftright" onClick={() => handlePrevClick()} disabled={currentPage<=1}>
            &larr; Trước
            </button>
          </Col>
          <Col xs={1} className="mqfb">
            <button className="leftright" onClick={() => handleNextClick()} disabled={currentPage>=totalPage}>
              Sau &rarr;
            </button>
          </Col>
        </Row>
        {
          feedbackToDisplay.slice(indexOfFirstPost, indexOfLastPost).map((post) => (
            <Feedback
              resultFeedback={resultFeedback}
              toggleResult={toggleResult}
              post={post}
            ></Feedback>
          ))
        }
      </Col>
    </Row>
  );
}

export default MainFeedback;
