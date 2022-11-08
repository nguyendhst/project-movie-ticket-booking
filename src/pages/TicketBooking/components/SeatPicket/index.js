import React, { Component } from "react";
import SeatPicker from "react-seat-picker";
import "./index.css";

const rows = [
  [
    null,

    { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
    { id: 2, number: 2, tooltip: "Cost: 15$" },
    {
      id: 3,
      number: "3",
      isReserved: true,
      orientation: "east",
      tooltip: "Reserved by Rogger",
    },
    null,
    null,
    null,
    { id: 6, number: 6 },
    { id: 7, number: 7 },
    { id: 8, number: 8 },
  ],
  [
    null,
    {
      id: 9,
      number: 1,
      isReserved: true,
      tooltip: "Reserved by Matthias Nadler",
    },
    { id: 10, number: 2, isReserved: true },
    { id: 11, number: 3, orientation: "west" },
    { id: 12, number: 4, isReserved: true, orientation: "east" },
    null,
    { id: 13, number: 5 },
    { id: 14, number: 6 },
    { id: 15, number: 7 },
    { id: 16, number: 8 },
  ],
  [
    { id: 17, number: 1 },
    {
      id: 18,
      number: 2,
      isReserved: true,
      tooltip: "Reserved by Matthias Nadler",
    },
    { id: 19, number: 3, isReserved: true },
    { id: 20, number: 4, orientation: "west" },
    { id: 21, number: 5, isReserved: true, orientation: "east" },
    null,
    { id: 22, number: 6 },
    { id: 23, number: 7 },
    { id: 24, number: 8 },
    { id: 25, number: 9 },
    { id: 26, number: 10 },
  ],
  [
    { id: 16, number: 8 },
    {
      id: 9,
      number: 1,
      isReserved: true,
      tooltip: "Reserved by Matthias Nadler",
    },
    { id: 10, number: 2, isReserved: true },
    { id: 11, number: 3, orientation: "west" },
    { id: 12, number: 4, isReserved: true, orientation: "east" },
    null,
    { id: 16, number: 8 },
    { id: 13, number: 5 },
    { id: 14, number: 6 },
    { id: 15, number: 7 },
    { id: 16, number: 8 },
  ],
  [
    { id: 16, number: 8 },
    {
      id: 9,
      number: 1,
      isReserved: true,
      tooltip: "Reserved by Matthias Nadler",
    },
    { id: 10, number: 2, isReserved: true },
    { id: 11, number: 3, orientation: "west" },
    { id: 12, number: 4, isReserved: true, orientation: "east" },
    null,
    { id: 16, number: 8 },
    { id: 13, number: 5 },
    { id: 14, number: 6 },
    { id: 15, number: 7 },
    { id: 16, number: 8 },
  ],
  [
    { id: 16, number: 8 },
    {
      id: 9,
      number: 1,
      isReserved: true,
      tooltip: "Reserved by Matthias Nadler",
    },
    { id: 10, number: 2, isReserved: true },
    { id: 11, number: 3, orientation: "west" },
    { id: 12, number: 4, isReserved: true, orientation: "east" },
    null,
    { id: 16, number: 8 },
    { id: 13, number: 5 },
    { id: 14, number: 6 },
    { id: 15, number: 7 },
    { id: 16, number: 8 },
  ],
];

export default class SeatMenu extends Component {
  addSeatCallback = ({ row, number, id }, addCb) => {
    this.props.setSelected(`Added seat ${number}, row ${row}, id ${id}`);
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
    this.props.setSelected(`Added seat ${number}, row ${row}, id ${id}`);
    const newTooltip = `tooltip for id-${id} added by callback`;
    addCb(row, number, id, newTooltip);
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
    removeCb(row, number, newTooltip);
  };

  render() {
    return (
      <div>
        <div style={{ marginTop: "10px" }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallback.bind(this)}
            removeSeatCallback={this.removeSeatCallback.bind(this)}
            rows={rows}
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
