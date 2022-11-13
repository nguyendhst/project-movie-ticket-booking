import React from "react";
import "./index.css"

const SelectWeek = () => {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center m-3">
                <select className="form-select-md p-2 rounded-pill">
                    <option selected>Chọn tuần làm việc</option>
                    <option value="1">03/10/2022 - 09/10/2022</option>
                    <option value="2">10/10/2022 - 16/10/2022</option>
                    <option value="3">17/10/2022 - 23/10/2022</option>
                    <option value="3">24/10/2022 - 30/10/2022</option>
                </select>
            </div>
        </>
    );
}

const Shift = (props) => {
    return (
        <>
            <div className="my-2">
                <div className="bg-primary rounded text-white mt-3 p-1">
                    {props.shift}<br/>{props.time}
                </div>
                <div className="card card-body my-2 border border-dark rounded p-2">
                    <div className="m-1">
                        Quầy bán vé
                        <input type="range" className="form-range" id="customRange"/>
                    </div>
                    <div className="m-1">
                        Kiểm soát vé
                        <input type="range" className="form-range" id="customRange"/>
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
    );
}

const DateInWeek = (props) => {
    return (
        <>
            <div className="col-xxl col-lg-2 col-md-3 col-sm-4 m-3 border border-success border-2 rounded">
                <div className="bg-success rounded text-white p-2 my-2">
                    <span className="h5">{props.name}</span><br/>
                    <span className="h5">{props.date}</span>
                </div>
                <Shift shift="Ca sáng" time="08:00 - 12:00"/>
                <Shift shift="Ca trưa" time="12:00 - 16:00"/>
                <Shift shift="Ca chiều" time="16:00 - 20:00"/>
                <Shift shift="Ca tối" time="20:00 - 24:00"/>
            </div>
        </>
    );
}

export default function Board () {
    return (
        <>
            <SelectWeek/>
            <div className="container-fluid text-center p-4">
                <div className="row">
                    <DateInWeek name="Thứ Hai" date="03/10/2022"/>
                    <DateInWeek name="Thứ Ba" date="04/10/2022"/>
                    <DateInWeek name="Thứ Tư" date="05/10/2022"/>
                    <DateInWeek name="Thứ Năm" date="06/10/2022"/>
                    <DateInWeek name="Thứ Sáu" date="07/10/2022"/>
                    <DateInWeek name="Thứ Bảy" date="08/10/2022"/>
                    <DateInWeek name="Chủ Nhật" date="09/10/2022"/>
                </div>
            </div>
        </>
    );
}