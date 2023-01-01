import React from "react";
import ReactDOM from "react-dom";
import '../../HumanResource/Assets/style.css';
import users from '../../../data/user.json';


function HandleLogin() {
    let data = users.User;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let accRole = "-1";
    for (let i = 0; i < data.length; ++i) {
        let user = data[i];
        if (user.username === username && user.password === password) {
            accRole = user.role;
            break;
        }
    }
    if (accRole !== "-1") {
        if (accRole === "1") {
            window.location.href = "/manager";
        } else if (accRole === "2") {
            window.location.href = "/staff";
        } else if (accRole === "3"){
            window.location.href = "/member";
        }
    } else {
        ReactDOM.render(<span>Tên đăng nhập hoặc mật khẩu không đúng</span>, document.getElementById("error"));
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
                                            <form action=""
                                                  method="">
                                                <p className="text-center">Đăng nhập vào tài khoản của bạn</p>
                                                <div className="mb-4 d-flex justify-content-center">
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
                                                    <p className="text-danger mt-1"></p>
                                                </div>
                                                <div className="mb-4  d-flex justify-content-center">
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
                                                    <p className="text-danger mt-1"></p>
                                                </div>
                                                <div className="text-center pt-1 mb-2 pb-1">
                                                    <button
                                                        className="btn btn-primary btn-block fa-lg gradient-custom-3 mb-3"
                                                        type="button"
                                                        onClick={HandleLogin}>
                                                        Đăng nhập
                                                    </button>
                                                    <p className="text-danger mt-1" id="error"></p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <p className="mb-0 me-2">Chưa có tài khoản?</p>
                                                    <a type="button" className="btn btn-outline-primary" href="/register">Đăng
                                                        ký</a>
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