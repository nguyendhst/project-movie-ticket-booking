import React from "react";

import NavBar from "../Components/navbar";
import Dashboard from "../Components/dashboard";
import Title from "../Components/title";
import '../Assets/shift.css';



const Page = () => {
    return (
        <>
            <NavBar/>
            <Title title="TRANG LỰA CHỌN CA LÀM VIỆC"/>
            <div className="h-100">
                <div className="container-fluid p-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl">
                            <div className="card rounded-3 text-black p-1">
                                <Dashboard role="staff"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page