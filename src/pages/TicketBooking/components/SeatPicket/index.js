import React, { Component } from "react";
import SeatPicker from "react-seat-picker";
import "./index.css";


export default class SeatMenu extends Component {
  addSeatCallback = ({ row, number, id }, addCb) => {
    this.props.setSelected([...this.props.selected, {id: id, number: number, row: row}]);
    this.props.onSelect(id);
    const newTooltip = `tooltip for id-${id} added by callback`;
    addCb(row, number, id, newTooltip);
  };

  addSeatCallbackContinousCase = (
    { row, number, id },
    addCb,
    params,
    removeCb
  ) => {
    if (removeCb) {
      removeCb(params.row, params.number);
    }
    this.props.setSelected([...this.props.selected, {id: id, number: number, row: row}]);
    const newTooltip = `tooltip for id-${id} added by callback`;
    this.props.onSelect(id);
    addCb(row, number, id, newTooltip);

  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
    this.props.setSelected(this.props.selected.filter((item) => item.id !== id));
    removeCb(row, number, newTooltip);
    
  };

  render() {

    return (
      <div>
        <div style={{ marginTop: "10px" }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallback.bind(this)}
            removeSeatCallback={this.removeSeatCallback.bind(this)}
            rows={this.props.seats}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={false}
            tooltipProps={{ multiline: true }}

          />
        </div>
      </div>
    );
  }
}
