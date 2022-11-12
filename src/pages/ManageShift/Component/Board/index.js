import React from "react";
import {Button} from "react-bootstrap";

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
            <div>
                <div className="bg-primary rounded-pill text-white my-2 p-1"
                     data-bs-toggle="collapse">{props.shift}<br/>{props.time}
                </div>
                <div className="my-2 border border-danger rounded p-2">
                    <div>
                        Quầy bán vé
                        <input type="range" className="form-range" id="customRange"/>
                    </div>
                    <div>
                        Kiểm soát vé
                        <input type="range" className="form-range" id="customRange"/>
                    </div>
                    <div>
                        Quầy bắp nước
                        <input type="range" className="form-range" id="customRange"/>
                    </div>
                </div>
            </div>
        </>
    );
}

const DateInWeek = (props) => {
    return (
        <>
            <div className="col-sm m-2 p-2 border border-success rounded">
                <div className="bg-success rounded-pill text-white p-3">
                    <span className="h5">{props.name}</span><br/>
                    <span className="h5">{props.num}</span>
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
                    <DateInWeek name="Thứ Hai" num="03/10/2022"/>
                    <DateInWeek name="Thứ Ba" num="04/10/2022"/>
                    <DateInWeek name="Thứ Tư" num="05/10/2022"/>
                    <DateInWeek name="Thứ Năm" num="06/10/2022"/>
                    <DateInWeek name="Thứ Sáu" num="07/10/2022"/>
                    <DateInWeek name="Thứ Bảy" num="08/10/2022"/>
                    <DateInWeek name="Chủ Nhật" num="09/10/2022"/>
                </div>
            </div>
        </>
    );
}