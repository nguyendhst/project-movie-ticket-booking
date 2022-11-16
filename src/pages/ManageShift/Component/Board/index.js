import React from "react";
import "./index.css"

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

const SelectWeek = () => {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center m-3">
                <select className="form-select-md p-2 rounded-pill" defaultValue="unselected">
                    <option value="unselected">Chọn tuần làm việc</option>
                    <option value="week1">03/10/2022 - 09/10/2022</option>
                    <option value="week2">10/10/2022 - 16/10/2022</option>
                    <option value="week3">17/10/2022 - 23/10/2022</option>
                    <option value="week4">24/10/2022 - 30/10/2022</option>
                </select>
            </div>
        </>
    );
}

const Shift = (props) => {
    const date_name = props.date_name.split(" ").join("")
    const shift_title = props.shift_title.split(" ").join("")
    return (
        <>
            <div className="my-2">
                <button type="button"
                        id="select-shift"
                        className="btn btn-primary position-relative rounded border-0 text-white my-3 p-1 w-100"
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
                                   id="ticket-seller"
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
                        <button type="button" className="btn btn-info position-relative my-1">
                            Lưu
                        </button>
                    </div>
                    <div className="m-1">
                        Quầy bắp nước
                        <input type="range" className="form-range" id="customRange"/>
                    </div>
                    <br/>
                    <button type="button" className="btn btn-info m-1 save-btn">
                        Lưu
                    </button>
                </div>
            </div>
        </>
    )
}

const DateInWeek = (props) => {
    return (
        <>
            <div className="col-xxl col-lg-2 col-md-3 col-sm-4 m-3">
                <div className="bg-success border rounded text-white p-2 my-2 ">
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

export default function Board () {
    return (
        <>/
            <SelectWeek/>
            <div className="container-fluid text-center p-4">
                <div className="row">
                    <DateInWeek date_name="Thứ Hai" date_num= "03/10/2022"/>
                    <DateInWeek date_name="Thứ Ba" date_num= "04/10/2022"/>
                    <DateInWeek date_name="Thứ Tư" date_num= "05/10/2022"/>
                    <DateInWeek date_name="Thứ Năm" date_num= "06/10/2022"/>
                    <DateInWeek date_name="Thứ Sáu" date_num= "07/10/2022"/>
                    <DateInWeek date_name="Thứ Bảy" date_num= "08/10/2022"/>
                    <DateInWeek date_name="Chủ Nhật" date_num= "09/10/2022"/>
                </div>
            </div>
        </>
    );
}