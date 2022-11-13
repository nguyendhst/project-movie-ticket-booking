import React, { Component } from 'react';
import { useState } from 'react';
import './Calendar.css'

const Calendar_unit = ["month", "quarter", "year"];

const Months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
];

const Quarters = [
    "Quý 1",
    "Quý 2",
    "Quý 3",
    "Quý 4",
];

var date = new Date()

function Yearlist(startyear, page) {
    let list;
    if (date.getFullYear() - startyear >= 30) {
        list = [...Array(30).keys()].map(i => i + date.getFullYear() - 30);
    }
    else {
        list = [...Array(date.getFullYear() - startyear).keys()].map(i => i + startyear);
    }
    var start = Math.floor((yearlist.length / 10) - 2 + this.state.page) * 10;
    return list.slice(start, start + 10);
}

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unit: "month",
            quaters: Math.floor(date.getMonth() / 3 + 1),
            month: date.getMonth(),
            year: date.getFullYear(),
            page: 2,
        }
    }
    render() {
        let list;
        let show;
        let startyear = 2022;
        let pagin;
        let yearrange = Yearlist(startyear, this.state.page);
        const main= () => {if (this.state.unit == "year") {
            list = yearrange;
            show = list.map(idx => {
                return (<div className='used year' onClick={this.state.year = { idx }}>{idx}</div>);
            });
            pagin = () => {
                return (
                    <div className='calendar paginating'>
                        <a onClick={() => {
                            this.setState({ count: this.state.page - 1, year: this.state.year - 10 });
                            yearrange = Yearlist(startyear, this.state.page);
                        }}>&laquo;</a>
                        {/* <a>{yearrange[0]} - {yearrange[-1]}</a> */}
                        <a onClick={() => {
                            this.setState({ count: this.state.page + 1, year: this.state.year + 10 });
                            yearrange = Yearlist(startyear, this.state.page);
                        }}>&raquo;</a>
                    </div>);
            };
        }
        else if (this.state.unit == "quarter") {
            list = Quarters;
            show = list.map((quarter, idx) => {
                if (idx * 3 >= date.getMonth()) {
                    return (
                        <div className='unused quarter'>{quarter}</div>
                    );
                }
                else {
                    return (
                        <div className='used quarter'>{quarter}</div>
                    );
                }
            });
            pagin = () => {
                return (
                    <div className='calendar paginating'>
                        <a onClick={() => {
                            this.setState({ year: this.state.year - 1 });
                            if (this.state.year < yearrange[0]) { this.setState({ page: this.state.page - 1 }); };
                        }}>&laquo;</a>
                        {/* <a>{this.state.year}</a> */}
                        <a onClick={() => {
                            this.setState({ year: this.state.year + 1 });
                            if (this.state.year > yearrange[-1]) { this.setState({ page: this.state.page + 1 }); };
                        }}>&raquo;</a>
                    </div>);
            };
        }
        else {
            list = Months;
            show = list.map((month, idx) => {
                if (idx + 1 >= date.getMonth()) {
                    return (
                        <div className='unused month'>{month}</div>
                    );
                }
                else {
                    return (
                        <div className='used month'>{month}</div>
                    );
                }
            });
            pagin = () => {
                return (
                    <div className='calendar paginating'>
                        <a onClick={() => {
                            this.setState({ year: this.state.year - 1 });
                            if (this.state.year < yearrange[0]) { this.setState({ page: this.state.page - 1 }); };
                        }}>&laquo;</a>
                        {/* <a>{this.state.year}</a> */}
                        <a onClick={() => {
                            this.setState({ year: this.state.year + 1 });
                            if (this.state.year > yearrange[-1]) { this.setState({ page: this.state.page + 1 }); };
                        }}>&raquo;</a>
                    </div>);
            };
        };
    }
        return (
            <div className='calendar'>
                <div className='calendar header'>{this.state.year}</div>
                {pagin}
                <div className='calendar container'>{show}</div>
            </div>
        );
    }
}

export default Calendar