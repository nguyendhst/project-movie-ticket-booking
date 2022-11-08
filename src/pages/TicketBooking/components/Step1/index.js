import React, { Component } from "react";

import { Container, Row, Col, Collapse, Button, ButtonGroup } from "react-bootstrap";
import SeatMenu from "../SeatPicket";
import Legends from "../Legends";

function Step1(props) {
    const [selected, setSelected] = React.useState(null);
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <div className="form-group">
        <h2>{selected}</h2>
        <SeatMenu setSelected={setSelected}/>
        <Legends/>
      </div>
    );
  }
  
export default Step1;