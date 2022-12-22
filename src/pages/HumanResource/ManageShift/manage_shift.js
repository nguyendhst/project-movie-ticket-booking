import React from "react";

import NavBar from "../Components/navbar";
import Dashboard from "../Components/dashboard";
import '../Assets/style.css';

function Title() {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center m-3">
                <h1 className="m-0">
                    <span className="badge bg-success rounded-pill p-4">TRANG QUẢN LÝ CA LÀM VIỆC CỦA NHÂN VIÊN</span>
                </h1>
            </div>
        </>
    );
}

const Page = () => {
    return (
        <>
            <NavBar />
            <Title/>
            <Dashboard/>
        </>
    );
}

export default Page