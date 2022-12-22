import React from "react";
import { useState } from "react";
import '../Assets/style.css';

const shift_list = [
    {
        shift_title: "Ca sáng",
        shift_time: "08:00 - 12:00"
    },
    {
        shift_title: "Ca trưa",
        shift_time: "12:00 - 16:00"
    },
    {
        shift_title: "Ca chiều",
        shift_time: "16:00 - 20:00"
    },
    {
        shift_title: "Ca tối",
        shift_time: "20:00 - 24:00"
    }
]

const week_list = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"]

const SelectWeek = () => {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center m-3">
                <input id="week-select" type="week" className="rounded p-2 border border-success"/>
            </div>
        </>
    );
}

const Shift = (props) => {
    const [color, setColor] = useState("btn-secondary");
    const CheckValue = () => {
        let ticket_seller_id = "ticket-seller-" + props.shift_title + "-" + props.shift_time;
    }
    const date_name = props.date_name.split(" ").join("")
    const shift_title = props.shift_title.split(" ").join("")
    return (
        <>
            <div className="my-2">
                <button type="button"
                        id="select-shift"
                        className={color + " btn position-relative rounded border-0 text-white my-1 p-1 w-100"}
                        data-bs-toggle="collapse"
                        data-bs-target={'#' + date_name + shift_title}>
                    {props.shift_title}<br/>
                    {props.shift_time}
                </button>
                <div className="collapse"
                     id={date_name + shift_title}>
                    <div className="border border-dark rounded p-2">
                        <div className="m-1">
                            Quầy bán vé
                            <input type="number"
                                   id={"ticket-seller-" + props.shift_title + "-" + props.shift_time}
                                   className="form-control my-1"
                                   min="0"
                                   max="10"
                                   defaultValue="0"/>
                        </div>
                        <div className="m-1">
                            Kiểm soát vé
                            <input type="number"
                                   id="ticket-controller"
                                   className="form-control my-1 num-staff"
                                   min="0"
                                   max="10"
                                   defaultValue="0"/>
                        </div>
                        <div className="m-1">
                            Quầy bắp nước
                            <input type="number"
                                   id="popcorn-corner"
                                   className="form-control my-1 num-staff"
                                   min="0"
                                   max="10"
                                   defaultValue="0"/>
                        </div>
                        <button type="button" className="btn btn-info position-relative my-1" onClick={CheckValue}>
                            Lưu
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

const DateInWeek = (props) => {
    return (
        <>
            <div className="col-xxl col-lg-2 col-md-3 col-sm-4 m-3">
                <div className="bg-success border rounded text-white p-2 my-2">
                    <span className="h5">{props.date_name}</span><br/>
                    <span className="h5">{props.date_num}</span><br/>
                </div>
                {shift_list.map(item =>
                    <Shift
                        key={props.date_name + item.shift_title}
                        shift_title={item.shift_title}
                        shift_time={item.shift_time}
                        date_name={props.date_name}
                    />)}
            </div>
        </>
    );
}

export default function Dashboard () {
    return (
        <>
            <SelectWeek/>
            <div className="container-fluid text-center p-4">
                <div className="row">
                    {week_list.map(item => <DateInWeek date_name={item} key={item}/>)}
                </div>
            </div>
        </>
    );
}