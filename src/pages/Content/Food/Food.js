import React from "react";

import foods from '../../../data/food.json'

import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Tabs from "../../../components/Tabs/Tabs";
import './Food.css'

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
  const foodList = foods.foodList
  return (
    <div className="Event">
      <Header />
      <div className="EventMain">
        <Tabs 
          tabs={
            [
              {
                name: "Đồ ăn",
                content: foodList.filter(food => food.type === 1).map((food, index) => 
                  <Card
                  key={food.id}
                  className="FoodBanner">
                    <Card.Body>
                      <Card.Title style={{
                              color: '#000000',
                              textOverflow: 'ellipsis'
                      }}>
                        {food.name}
                      </Card.Title>
                    </Card.Body>
                    <Card.Img variant="bottom" src={food.image}>
                    </Card.Img>
                  </Card>
                )
              },
              {
                name: "Thức uống",
                content: foodList.filter(food => food.type === 2).map((food, index) => 
                  <Card
                  key={food.id}
                  className="FoodBanner">
                    <Card.Body>
                      <Card.Title style={{
                              color: '#000000',
                              textOverflow: 'ellipsis'
                      }}>
                        {food.name}
                      </Card.Title>
                    </Card.Body>
                    <Card.Img variant="bottom" src={food.image}>
                    </Card.Img>
                  </Card>
                )
              }
            ]
          }
          type = {2}
        />
      </div>
      <Footer />
    </div>
  )
}

export default Event