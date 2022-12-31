import React from "react";

import events from '../../../data/event.json'

import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Tabs from "../../../components/Tabs/Tabs";
import './Event.css'

import House from "../../../Asset/house.svg";
import Footer from "../../../components/Footer/Footer";

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

function Event() {
  const eventList = events.eventList
  return (
    <div className="Event">
      <Header />
      <div className="EventMain">
        <Tabs 
          tabs={
            [
              {
                name: "Khuyến mãi đang có",
                content: eventList.filter(event => event.status === 0).map((event, index) => 
                  <Card
                  key={event.id}
                  className="EventBanner">
                    <Card.Body>
                      <Card.Title style={{
                              color: '#000000',
                              textOverflow: 'ellipsis'
                      }}>
                        <h3>{event.eventName}</h3>
                        Giảm giá: {event.discount * 100}% cho các sản phẩm {event.discount_on === 1 ? "vé xem phim" : "đồ ăn & thức uống"} 
                        <br/>
                        Từ {event.eventStart} đến {event.eventEnd}
                      </Card.Title>
                    </Card.Body>
                    <Card.Img variant="bottom" src={event.eventImage}>
                    </Card.Img>
                  </Card>
                )
              },
              {
                name: "Khuyến mãi sắp đến",
                content: eventList.filter(event => event.status === 1).map((event, index) => 
                  <Card
                  key={event.id}
                  className="EventBanner">
                    <Card.Body>
                      <Card.Title style={{
                              color: '#000000',
                              textOverflow: 'ellipsis'
                      }}>
                        {event.eventName}
                        <br/>
                        Giảm giá: {event.discount * 100}% cho các sản phẩm {event.discount_on === 1 ? "vé xem phim" : "đồ ăn & thức uống"} 
                        <br/>
                        Từ {event.eventStart} đến {event.eventEnd}
                      </Card.Title>
                    </Card.Body>
                    <Card.Img variant="bottom" src={event.eventImage}>
                    </Card.Img>
                  </Card>
                )
              },
              {
                name: "Khuyến mãi đã hết hạn",
                content: eventList.filter(event => event.status === 2).map((event, index) => 
                  <Card
                  key={event.id}
                  className="EventBanner">
                    <Card.Body>
                      <Card.Title style={{
                              color: '#000000',
                              textOverflow: 'ellipsis'
                      }}>
                        {event.eventName}
                        <br/>
                        Giảm giá: {event.discount * 100}% cho các sản phẩm {event.discount_on === 1 ? "vé xem phim" : "đồ ăn & thức uống"} 
                        <br/>
                        Từ {event.eventStart} đến {event.eventEnd}
                      </Card.Title>
                    </Card.Body>
                    <Card.Img variant="bottom" src={event.eventImage}>
                    </Card.Img>
                  </Card>
                )
              }
            ]
          }
          type = {3}
        />
      </div>
      <Footer/>
    </div>
  )
}

export default Event