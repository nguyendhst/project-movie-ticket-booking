import React, { Component } from "react";


function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="form-group">
        TODO
      </div>
    </React.Fragment>
  );
}


export default Step3;