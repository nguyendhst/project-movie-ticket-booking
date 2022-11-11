import React, { useEffect } from "react";

import SeatMenu from "../SeatPicket";
import Legends from "../Legends";

const seatData = [
  [
    null,

    { id: 1, number: 1 },
    { id: 2, number: 2 },
    {
      id: 3,
      number: "3",
      isReserved: true,
      orientation: "east",
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
    { id: 27, number: 1 },
    {
      id: 28,
      number: 2,
      isReserved: true,
    },
    { id: 29, number: 3, isReserved: true },
    { id: 30, number: 4, orientation: "west" },
    { id: 31, number: 5, isReserved: true, orientation: "east" },
    null,
    { id: 32, number: 6 },
    { id: 33, number: 7 },
    { id: 34, number: 8 },
    { id: 35, number: 9 },
    { id: 36, number: 10 },
  ],
  [
    { id: 37, number: 1 },
    {
      id: 38,
      number: 2,
      isReserved: true,
    },
    { id: 39, number: 3, isReserved: true },
    { id: 40, number: 4, orientation: "west" },
    { id: 41, number: 5, isReserved: true, orientation: "east" },
    null,
    { id: 42, number: 6 },
    { id: 43, number: 7 },
    { id: 44, number: 8 },
    { id: 45, number: 9 },
    { id: 46, number: 10 },
  ],
  [
    { id: 47, number: 1 },
    {
      id: 48,
      number: 2,
      isReserved: true,
    },
    { id: 49, number: 3, isReserved: true },
    { id: 50, number: 4, orientation: "west" },
    { id: 51, number: 5, isReserved: true, orientation: "east" },
    null,
    { id: 52, number: 6 },
    { id: 53, number: 7 },
    { id: 54, number: 8 },
    { id: 55, number: 9 },
    { id: 56, number: 10 },
  ],
];

function Step1(props) {
  const [selected, setSelected] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [seats, setSeats] = React.useState(seatData);

  useEffect(() => {
    console.log("step 1 useEffect ", parseInt(props.basePrice));

    let sum;
    if (selected.length > 0) {
      console.log("selected: ", selected);
      sum = props.basePrice * selected.length;
    } else {
      sum = 0;
    }
    console.log("total: ", sum);

    setTotal(sum);
    props.updateSeats(selected);
    console.log("step 1 state: ", total);
    props.updateSum(total);
  }, [selected, total]);

  if (props.currentStep !== 1) {
    return null;
  }

  const handleSeatSelection = (id) => {
    // change seatdata
    console.log("handle seat ")
    let newSeats = seats.map((row) => {
      return row.map((seat) => {
        if (seat && seat.id === id) {
          if (seat.isSelected) {
            seat.isSelected = false;
          } else {
            seat.isSelected = true;
          }
        }
        return seat;
      });
    });
    setSeats(newSeats);
  };

  return (
    <React.Fragment>
      <div className="form-group">
        <h5>
          Selected seats: 
          {selected.length > 0 ? (
            <span className="selected-seats">
              {selected.map((item) => (
                <span className="selected-seat">
                  {item.row}-{item.number},{" "}
                </span>
              ))}
            </span>
          ) : (
            <span className="selected-seats">None</span>
          )
          }
        </h5>
        <SeatMenu
          selected={selected}
          setSelected={setSelected}
          seats={seats}
          onSelect={handleSeatSelection}
        />
        <Legends />
      </div>
    </React.Fragment>
  );
}

export default Step1;
