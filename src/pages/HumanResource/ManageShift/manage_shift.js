import React from "react";

import Dashboard from "../Components/dashboard";
import Title from "../Components/title";
import '../Assets/style.css';



const Page = () => {
    return (
        <>
            <div className="main-page-1">
                <Title title="TRANG QUẢN LÝ CA LÀM VIỆC CỦA NHÂN VIÊN"/>
                <div className="h-100">
                    <div className="container-fluid p-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-xl">
                                <div className="card rounded-3 text-black p-1">
                                    <Dashboard role="manager"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page