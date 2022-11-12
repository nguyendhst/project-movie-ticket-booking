import React from "react";
import "./index.css";
import Board from "./Component/Board";

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#/homepage">
                        <span className="h2 text-white">RẠP CHIẾU PHIM</span>
                    </a>
                    <button className="navbar-toggler m-1 bg-success" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link bg-success text-white rounded-pill m-1 px-3" href="#/manage">Quản lý</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link bg-success text-white rounded-pill m-1 px-3" href="#/logout">Đăng xuất</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

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
            <NavBar/>
            <Title/>
            <Board/>
        </>
    );
}

export default Page