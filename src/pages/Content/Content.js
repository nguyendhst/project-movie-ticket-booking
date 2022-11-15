import React from "react";

import Button from "react-bootstrap/esm/Button";

import './Content.css';
import Footer from "../../components/Footer/Footer";
import Tabs from "../../components/Tabs/Tabs"

import House from "../../Asset/house.svg"



function Header() {

    return(
        <ul className="Header">
            <ul className="Left_header">
                <li id="Home-logo">
                    <a href="/manager">
                        <img src={House} width='40px' height='40px' alt="Home logo"></img>
                    </a>
                </li>
            </ul>
            <li>
                <a href='/#'>
                <Button
                className="LogoutButton"
                >
                    Đăng xuất
                </Button>
                </a>
            </li>
        </ul>
    )
}

const Students = ["a", "b", "c", "d", ]
const Hello = ["e", "f", "g", "h"]


function Content() {
    return (
        <div className="Content">
            <Header/>
            <div className="ContentMain">
                <Tabs
                    title={"Tab test"}
                    tabs={
                        [
                            {name: "Student", content:  Students.map((student, index)   => <div key={index}>{(student) }</div>)},
                            {name: "Hello", content:    Hello.map((hellu, index)        => <div key={index}>{(hellu)}</div>)},
                            // {name: "Student2", content:  Students.map((student, index)   => <div key={index}>{(student) }</div>)},
                            {name: "Hello2", content:    Hello.map((hellu, index)        => <div key={index}>{(hellu)}</div>)}
                        ]
                    }
                />
            </div>
            <Footer/>
        </div>
    )
}

export default Content;