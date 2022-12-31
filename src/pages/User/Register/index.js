import React from "react";
import ReactDOM from "react-dom";
import '../../HumanResource/Assets/style.css';
import users from '../../../data/user.json';

function HandelRegister () {
    let data = users.User;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let usernameExist = function() {
        for (let i = 0; i < data.length; ++i) {
            if (data[i].username === username) {
                return true;
            }
        }
        return false;
    }
    if (username === "") {
        ReactDOM.render(<span>Thiếu tên đăng nhập</span>, document.getElementById("error"));
    } else if (usernameExist === true) {
        ReactDOM.render(<span>Tên đăng nhập đã tồn tại</span>, document.getElementById("error"));
    } else if (password === "") {
        ReactDOM.render(<span>Mật khẩu không được để trống</span>, document.getElementById("error"));
    } else if (password !== confirm) {
        ReactDOM.render(<span>Xác nhận mật khẩu không khớp</span>, document.getElementById("error"));
    } else {
        window.location.href = "/login";
    }
}

export default function Page () {
    return (
        <div className="h-100 ">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">
                                        <div className="text-center">
                                            <h4 className="mt-1 mb-5 pb-1">Chào mừng bạn đến với NTTVN</h4>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <form action="" method="">
                                                <p>Đăng ký để trải nghiệm tốt nhất</p>
                                                <div className="mb-4">
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-outline">
                                                            <input type="text"
                                                                   id="username"
                                                                   name="username"
                                                                   className="form-control"
                                                                   placeholder="Tên đăng nhập"/>
                                                        </div>
                                                        <span className="text-danger ms-1 d-inline-block">*</span>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-outline">
                                                            <input type="password"
                                                                   id="password"
                                                                   name="password"
                                                                   className="form-control"
                                                                   placeholder="Mật khẩu"/>
                                                        </div>
                                                        <span className="text-danger ms-1">*</span>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-outline">
                                                            <input type="password"
                                                                   id="confirm"
                                                                   name="confirm"
                                                                   className="form-control"
                                                                   placeholder="Xác nhận mật khẩu"/>
                                                        </div>
                                                        <span className="text-danger ms-1">*</span>
                                                    </div>
                                                </div>
                                                <p className="text-danger mt-1" id="error"></p>
                                                <div className="text-center pt-1 mb-2 pb-1">
                                                    <button
                                                        className="btn btn-primary btn-block fa-lg gradient-custom-3 mb-3"
                                                        type="button"
                                                        onClick={HandelRegister}>
                                                        Đăng ký
                                                    </button>
                                                    <p className="text-danger mt-1"></p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <p className="mb-0 me-2">Đã có tài khoản?</p>
                                                    <a type="button" className="btn btn-outline-primary" href="/login">Đăng
                                                        nhập</a>
                                                </div>
                                            </form>
                                        </div>


                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-3">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">Trải nghiệm phim điện ảnh theo cách của bạn</h4>
                                        <p className="small mb-0">
                                            Trải nghiệm phim điện ảnh theo cách của bạn
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
