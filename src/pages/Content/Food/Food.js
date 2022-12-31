import React from "react";

import foods from '../../../data/food.json'

// import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Tabs from "../../../components/Tabs/Tabs";
import './Food.css'


function Event() {
  const foodList = foods.foodList
  return (
    <div className="Event">
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
    </div>
  )
}

export default Event