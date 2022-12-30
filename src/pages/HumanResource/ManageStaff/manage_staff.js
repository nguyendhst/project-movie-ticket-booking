import React from "react";
import NavBar from "../Components/navbar";
import '../Assets/style.css';
import Title from "../Components/title";
import data from '../Assets/data.json';


function searchTable() {
    let input, filter, found, table, tr, td, i, j;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    table = document.getElementById("staff-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}


const DeleteStaff = (id) => {
    return (
        <>

        </>
    );
}

const Table = () => {
    let staffs = data.Staff;
    return (
        <>
            <div id="datatable" className="table-responsive-lg">
                <table className="table align-middle mb-0 bg-white table-hover">
                    <thead className="bg-light">
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Họ và tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody id="staff-table">
                        {staffs.map(item =>
                            <tr>
                                <td className="text-center">{item.id}</td>
                                <td>
                                    <div className="d-flex">
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">{item.name}</p>
                                            <p className="badge text-bg-warning rounded-pill mb-0">{item.username}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="">{item.email}</td>
                                <td className="text-center">{item.phone}</td>
                                <td className="">{item.address}</td>
                                <td>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button
                                            type="button"
                                            className="btn bg-primary position-relative text-white btn-sm btn-rounded rounded-3 m-1">
                                            Sửa
                                        </button>
                                        <button
                                            type="button"
                                            className="btn bg-danger position-relative text-white btn-sm btn-rounded rounded-3 m-1"
                                            data-mdb-toggle="modal"
                                            data-mdb-target={"#delete" + item.id}>
                                            Xóa
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default function Page () {
    return (
        <>
            <NavBar/>
            <div className="main-page-2">
                <Title title="TRANG QUẢN LÝ THÔNG TIN NHÂN VIÊN"/>
                <div className="h-100">
                    <div className="container-fluid p-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="page col-xl">
                                <div className="card rounded-3 text-black p-5 d-flex justify-content-center">
                                    <div className="form-outline mb-4 d-flex justify-content-center">
                                        <input type="search"
                                               className="form-control w-25"
                                               id="search-input"
                                               onKeyUp={searchTable}
                                               placeholder="Tìm kiếm nhân viên..."/>
                                    </div>
                                    <Table/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}