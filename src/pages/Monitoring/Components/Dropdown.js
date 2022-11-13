import React, {Component} from 'react';
import { useRef } from 'react';
import "./Dropdown.css"

function Dropdown(title, content){
    const item= content.map(idx =>{
        return(
            <div className='dropdown-item'>{idx}</div>
        );
    })
    return(
        <div className='dropdown'>
            <div className='dropdown-btn'>{title}</div>
            <div className='dropdown-content'>
                {item}
            </div>
        </div>
    );
};

export default Dropdown