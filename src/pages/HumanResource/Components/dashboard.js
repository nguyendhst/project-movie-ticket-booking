import React from "react";
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

const date_rage = [
    "31/10/2022 - 06/11/2022",
    "07/11/2022 - 13/11/2022",
    "14/11/2022 - 20/11/2022",
    "21/11/2022 - 27/11/2022"
]

const SelectWeek = () => {
    return (
        <div className="d-flex justify-content-center mt-4">
            <select className="form-select border-success" id="select-week" defaultValue="unselected">
                <option value="unselected">Chọn tuần làm việc</option>
                {date_rage.map(item => <option>{item}</option>)}
            </select>
        </div>

    );
}

const ShiftManager = (props) => {
    const date_name = props.date_name.split(" ").join("")
    const shift_title = props.shift_title.split(" ").join("")
    return (
        <>
            <div className="my-2">
                <button type="button"
                        id="select-shift"
                        className="btn btn-secondary position-relative rounded border-0 text-white my-1 p-1 w-100"
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
                </div>
            </div>
        </>
    )
}

const ShiftStaff = (props) => {
    const date_name = props.date_name.split(" ").join("")
    const shift_title = props.shift_title.split(" ").join("")
    return (
        <>
            <div className="my-2">
                <button type="button"
                        id="select-shift"
                        className="btn btn-secondary position-relative rounded border-0 text-white my-1 p-1 w-100"
                        data-bs-toggle="collapse"
                        data-bs-target={'#' + date_name + shift_title}>
                    {props.shift_title}<br/>
                    {props.shift_time}
                </button>
                <div className="collapse"
                     id={date_name + shift_title}>
                    <div className="border border-dark rounded p-2">
                        <div className="form-check text-start" defaultChecked="">
                            <input type="checkbox"
                                   className="form-check-input"
                                   id="select1"
                                   value="select2"/>
                            Quầy bán vé
                            <label className="form-check-label" htmlFor="select1"></label>
                        </div>
                        <div className="form-check text-start">
                            <input type="checkbox"
                                   className="form-check-input"
                                   id="select2"
                                   value="select2"/>
                            Kiểm soát vé
                            <label className="form-check-label" htmlFor="select2"></label>
                        </div>
                        <div className="form-check text-start">
                            <input type="checkbox"
                                   className="form-check-input"
                                   id="select3"
                                   value="select3"/>
                            Quầy bắp nước
                            <label className="form-check-label" htmlFor="select3"></label>
                        </div>
                        <button type="button" className="btn btn-info position-relative my-1">
                            Lưu
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

const DateInWeek = (props) => {
    if (props.role === "manager") {
        return (
            <>
                <div className="col-xxl col-lg-2 col-md-3 col-sm-4 m-2">
                    <div className="bg-success border rounded text-white p-2 my-2">
                        <span className="h5">{props.date_name}</span><br/>
                    </div>
                    {shift_list.map(item =>
                        <ShiftManager
                            key={props.date_name + item.shift_title}
                            shift_title={item.shift_title}
                            shift_time={item.shift_time}
                            date_name={props.date_name}
                        />)}
                </div>
            </>
        );
    } else if (props.role === "staff") {
        return (
            <>
                <div className="col-xxl col-lg-2 col-md-3 col-sm-4 m-2">
                    <div className="bg-success border rounded text-white p-2 my-2">
                        <span className="h5">{props.date_name}</span><br/>
                    </div>
                    {shift_list.map(item =>
                        <ShiftStaff
                            key={props.date_name + item.shift_title}
                            shift_title={item.shift_title}
                            shift_time={item.shift_time}
                            date_name={props.date_name}
                        />)}
                </div>
            </>
        );
    }
}

export default function Dashboard (props) {
    return (
        <>
            <SelectWeek/>
            <div className="container-fluid text-center p-4">
                <div className="row">
                    {week_list.map(item => <DateInWeek date_name={item} key={item} role={props.role}/>)}
                </div>
            </div>
        </>
    );
}