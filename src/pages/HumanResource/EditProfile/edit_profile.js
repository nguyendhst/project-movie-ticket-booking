import React from "react";
import ReactDOM from "react-dom";
import '../Assets/style.css';
import data from '../../../data/staff.json';

export function EditProfile (id) {
    let Profile = data.Staff.filter(function(item) { return item.id === id; });
    const elem = (
        <div className="mb-4">
            <div className="d-flex align-items-center">
                <div className="form-outline">
                    <input type="text"
                           id="username-edit"
                           name="username-edit"
                           className="form-control"
                           value={Profile.name}/>
                </div>
                <span className="text-white ms-1">*</span>
            </div>
        </div>
    );
    ReactDOM.render(elem, document.getElementById("main-card"));
}