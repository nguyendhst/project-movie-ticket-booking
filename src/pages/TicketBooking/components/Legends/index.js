import React from "react";
import "./index.css";

const Legends = () => {
  return (
    <div className="legends">
      <div className="legend">
        <div className="seat"></div>
        <span className="available">Available</span>
      </div>
      <div className="legend">
        <div className="seat selected"></div>
        <span className="selected">Selected</span>
      </div>
      <div className="legend">
        <div className="seat occupied"></div>
        <span className="occupied">Occupied</span>
      </div>
    </div>
  );
};

export default Legends;
