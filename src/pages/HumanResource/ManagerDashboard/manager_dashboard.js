import React from "react";
import '../Assets/style.css';
import Title from "../Components/title";

export default function Page () {
    return (
        <>
            <div className="main-page-3">
                <div className="">
                    <Title title="TRANG QUẢN TRỊ VIÊN"/>
                    <div className="page-1 d-flex justify-content-center mt-5">
                        <div className="d-flex justify-content-center mt-5 mx-3">
                            <h1 className="m-0">
                                <a href="/manage-staff" className="">
                                <span className="badge bg-info rounded-5 p-4">
                                    Quản lý nhân viên
                                </span>
                                </a>
                            </h1>
                        </div>
                        <div className="d-flex justify-content-center mt-5 mx-3">
                            <h1 className="m-0">
                                <a href="/manage-shift" className="">
                                <span className="badge bg-danger rounded-5 p-4">
                                    Quản lý ca làm việc
                                </span>
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}