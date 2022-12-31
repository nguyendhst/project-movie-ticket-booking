import React, { useEffect } from "react";

import SeatMenu from "../SeatPicket";
import Legends from "../Legends";

import "./index.css";

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
    const { sum, basePrice, updateSum, updateSeats } = props;
    const [selected, setSelected] = React.useState([]);
    const [total, setTotal] = React.useState(sum);
    const [seats, setSeats] = React.useState(seatData);

    //destructuring props
    // currentStep={this.state.currentStep}
    // basePrice={this.props.basePrice}
    // updateSum={this.updateSum}
    // updateSeats={this.updateSeats}

    // update sum when selected seats change
    useEffect(() => {
        console.log("prop sum", sum);
        console.log("step 1 useEffect ", parseInt(basePrice));
        if (selected.length > 0) {
            console.log(
                "update sum: ",
                selected.length * parseInt(basePrice) * 1000
            );
            setTotal(selected.length * parseInt(basePrice) * 1000);
        }
        updateSeats(selected);
    }, [selected]);

    useEffect(() => {
        console.log("update total:", total);
        updateSum(total);
    }, [total]);

    const handleSeatSelection = (id) => {
        // change seatdata
        console.log("handle seat ");
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
            <div className="info">
                <h3>Chọn ghế ngồi:</h3>
                <h5>Mỗi người dùng được phép chọn tối đa 3 ghế.</h5>
            </div>
            <div className="form-group">
                <h5>
                    Các ghế đã chọn:{" "}
                    {selected.length > 0 ? (
                        <span>
                            {" "}
                            {selected.map((seat) => {
                                return (
                                    <span key={seat.id}> {seat.row}-{seat.number} </span>
                                );
                            })}
                        </span>
                    ) : (
                        <span> Không có ghế nào được chọn</span>
                    )}
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
