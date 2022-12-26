import React from "react";

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-dark p-2">
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
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item m-2">
                                <button type="button"
                                        className="btn btn-info position-relative rounded-pill d-inline">
                                    Trang chính
                                </button>
                            </li>
                            <li className="nav-item m-2">
                                <button type="button"
                                        className="btn btn-warning position-relative rounded-pill d-inline">
                                    Đăng xuất
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}