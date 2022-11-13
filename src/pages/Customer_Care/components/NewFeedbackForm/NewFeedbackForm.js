import React from "react";
// import { confirmAlert } from 'react-confirm-alert';
// import "react-confirm-alert/src/react-confirm-alert.css";
import './NewFeedbackForm.css'
import DropdownPL from "../../components/DropdownPL/DropdownPL";

function New_feedback_form() {
    /* const submit = () => {
    confirmAlert({
      title: 'Thông báo',
      message: 'Bạn có chắc chắn muốn gửi không',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Đã gửi phản hồi')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
    }; */
    return (
        <div className='New_feedback_form'>
                <div>
                    <h2>Phản hồi mới</h2>
                </div>
                <div className='row'>
                    <div className='col'>Phân loại</div>
                    <div className='Dropdown_PL'>
                        <DropdownPL/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>Chủ đề</div>
                    <div className='topic'>
                        <input type="text"/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>Nội dung</div>
                    <div className='content'> 
                        <textarea name="Content"></textarea>
                    </div>
                </div>
                <div>
                    <button className="Confirm_Button">
                        Xác nhận
                    </button>
                </div>
        </div>
    )
}

export default New_feedback_form;
