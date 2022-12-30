import React from "react";

export default function Title(props) {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center m-3 mt-5">
                <h1 className="m-0">
                    <span className="badge bg-success rounded-pill p-4">{props.title}</span>
                </h1>
            </div>
        </>
    );
}