import React from "react";

function Step4(props) {

  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <div className="summary">
        <h2>Summary</h2>
        {/* <p>Movie: {props.movie}</p>
        <p>Time: {props.time}</p>
        <p>Seats: {props.seats}</p> */}
        <p>Payment: {props.payment}</p>
        <p>Total: {props.currentSum}</p>
    </div>
  );
}

export default Step4;
