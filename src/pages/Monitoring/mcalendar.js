import React from "react";
import {useContext } from "react";
import Select from 'react-select';
import { monitoring_context } from "./monitoring";
import { faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const startyear = 2022;
const Calendar_unit = [
    { value: "Tháng", label: "Tháng" },
    { value: "Quý", label: "Quý" },
    { value: "Năm", label: "Năm" }
];

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

const Quarters = ["01", "02", "03", "04"];

// function Yearlist(startyear, page) {
//     let list;
//     if (date.getFullYear() - startyear >= 30) {
//         list = [...Array(30).keys()].map((i) => i + date.getFullYear() - 30);
//     } else {
//         list = [...Array(date.getFullYear() - startyear).keys()].map(
//             (i) => i + startyear
//         );
//     }
//     var start = Math.floor(list.length / 10 - 2 + page) * 10;
//     return list.slice(start, start + 10);
// }

function Yearlist_full(startyear){
    const firstyear=Math.floor(startyear/10-1)*10;
    
    return [...Array(30).keys()].map((i) => i + firstyear);
}

function daysInMonth(year, month) {
    return (month !== 2) ?
        31 - (((month - 1) % 7) % 2) :
        28 + (year % 4 === 0 ? 1 : 0) - (year % 100 === 0 ? 1 : 0) + (year % 400 === 0 ? 1 : 0)
  }

function MCalendar(){
    const{unit_us,start_time_us,end_time_us,yearpage_us,date_us,handleCT}=useContext(monitoring_context);
    const {start_time,setStart_time}=start_time_us;
    const{end_time,setEnd_time}=end_time_us;
    const{unit,setUnit}=unit_us;
    const date=date_us;
    const {yearpage,setYearPage}=yearpage_us;
    //const [page,setPage]=useState(2);
    // const [yearrange,setYearrange]=useState(Yearlist(startyear, 2));
    const year_list=Yearlist_full(startyear);
    // const choose = (idx) => {
    //     if (unit === "Quý") {
            
    //         setStart_time(new Date(yearpage, idx * 3, 1));
    //         setEnd_time(new Date(yearpage, idx * 3 + 2, daysInMonth(yearpage, idx*3+2)))
    //     }
    //     else if (unit === "Tháng") {
    //         setStart_time(new Date(yearpage, idx, 1));
    //         setEnd_time(new Date(yearpage, idx, daysInMonth(yearpage, idx)));
    //     }
    //     else {
    //         setStart_time(new Date(yearpage, 0, 1));
    //         setEnd_time(new Date(yearpage, 11, 31));
    //     }
    // };
    const pre_func = () => {
        if(yearpage-1>=year_list[0])
        {setYearPage(yearpage-1);}
    };
    const next_func = () => {
        if(yearpage+1<=year_list[29]&&yearpage+1<=date.getFullYear())
        {setYearPage(yearpage+1);}
    };
    const m_paginating=()=>{
        return (
            <div className="m-centering m-paginating">
                <button className="m-navi" onClick={pre_func}>
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h4>{yearpage}</h4>
                <button className="m-navi" onClick={next_func}>
                <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        );
    }
    const m_calendar_body= ()=>{
        if(unit==="Tháng"){
            return (
                <div className="m-month">
                    {
                        Months.map((month, idx) => {
                            if (idx > date.getMonth() && yearpage>=date.getFullYear()) {
                                return <button className="unused" value={idx} key={idx} disabled>{month}</button>;
                            } else if (idx===date.getMonth() && yearpage===date.getFullYear()){
                                return <button className="unused m-cur" value={idx} key={idx} disabled>{month}</button>
                            } else if(idx===start_time.getMonth() && yearpage===start_time.getFullYear()) {
                                return (
                                    <button className="used m-chosed" value={idx} onClick={(e)=>{
                                        setStart_time(new Date(yearpage, e.target.value, 1));
                                        setEnd_time(new Date(yearpage, e.target.value, daysInMonth(yearpage, e.target.value)));
                                        handleCT(e);
                                    }}>
                                        {month}
                                    </button>
                                );
                            }
                            else{
                                return (
                                    <button className="used" key={idx} value={idx} onClick={(e)=>{
                                        setStart_time(new Date(yearpage, e.target.value, 1));
                                        setEnd_time(new Date(yearpage, e.target.value, daysInMonth(yearpage, e.target.value)));
                                        handleCT(e);
                                    }}>
                                        {month}
                                    </button>
                                );
                            }
                        })
                    }
                </div>
                );
        }
        else if (unit==="Quý"){
            return (
                <div className="m-quarter">
                    {
                        Quarters.map((quarter, idx) => {
                            if (idx > Math.floor(date.getMonth()/3) && yearpage>=date.getFullYear()) {
                                return <button className="unused" key={idx} value={idx} disabled>{quarter}</button>;
                            } else if(idx===Math.floor(date.getMonth()/3) && yearpage===date.getFullYear()){
                                return <button className="unused m-cur" key={idx} value={idx} disabled>{quarter}</button>;
                            } else if(idx===Math.floor(start_time.getMonth()/3) && yearpage===start_time.getFullYear()) {
                                return (
                                    <button className="used m-chosed" key={idx} value={idx} onClick={(e)=>{
                                        setStart_time(new Date(yearpage, e.target.value * 3, 1));
                                        setEnd_time(new Date(yearpage, e.target.value * 3 + 2, daysInMonth(yearpage, e.target.value*3+2)));
                                        handleCT(e);
                                    }}>
                                        {quarter}
                                    </button>
                                );
                            }
                            else{
                                return (
                                    <button className="used" key={idx} value={idx} onClick={(e)=>{
                                        setStart_time(new Date(yearpage, e.target.value * 3, 1));
                                        setEnd_time(new Date(yearpage, e.target.value * 3 + 2, daysInMonth(yearpage, e.target.value*3+2)));
                                        handleCT(e);
                                    }}>
                                        {quarter}
                                    </button>
                                );
                            }
                        })
                    }
                </div>
                );
        }
        else{
            return (
                <div className="m-year">
                    {
                        year_list.slice(Math.floor((yearpage-year_list[0])/10)*10,Math.floor((yearpage-year_list[0])/10)*10+10)
                        .map((year, idx) => {
                            if (year > date.getFullYear()) {
                                return <button className="unused" key={idx} value={idx} disabled>{year}</button>;
                            } else if(year===date.getFullYear()){
                                return <button className="unused m-cur" key={idx} value={idx} disabled>{year}</button>;
                            } else if(year===yearpage) {
                                return (
                                    <button className="used m-chosed" key={idx} value={year} onClick={(e)=>{
                                        setStart_time(new Date(e.target.value, 0, 1));
                                        setEnd_time(new Date(e.target.value, 11, 31));
                                        setYearPage(e.target.value);
                                        handleCT(e);
                                    }}>
                                        {year}
                                    </button>
                                );
                            }
                            else{
                                return (
                                    <button className="used" key={idx} value={year} onClick={(e)=>{
                                        setStart_time(new Date(e.target.value, 0, 1));
                                        setEnd_time(new Date(e.target.value, 11, 31));
                                        setYearPage(e.target.value);
                                        handleCT(e);
                                    }}>
                                        {year}
                                    </button>
                                );
                            }
                        })
                    }
                </div>
                );
        }
    }
    return(
        <div className="m-centering">
            <div id='m-select-cal'>
                <Select options={Calendar_unit} onChange={(val)=>{
                setUnit(val.value);
                setYearPage(date.getFullYear()-(date.getMonth()-1<0?1:0));}} />
            </div>
            <div className="m-centering m-header">
                <div className="m-paginating">
                    {m_paginating()}
                </div>
            </div>
            {m_calendar_body()}
        </div>
    )
}

// class MmCalendar extends Component { 
//     constructor(props) {
//         super(props);
//         this.state = {
//             unit: "Tháng",
//             start_time: new Date(date.getFullYear(), date.getMonth(), 1),
//             end_time: new Date(date.getFullYear(), date.getMonth(), daysInMonth(date.getFullYear(), date.getMonth() + 1)),
//             //   month: date.getMonth(), //count from 1->12
//             //   quarter:Math.ceil(date.getMonth()/3-1), //count from 0->3
//             year: date.getFullYear(),
//             page: 2,
//             yearrange: Yearlist(startyear, 2),
//         };
//         this.pre_year_func = this.pre_year_func.bind(this);
//         this.next_year_func = this.next_year_func.bind(this);
//         this.pre_func = this.pre_func.bind(this);
//         this.next_func = this.next_func.bind(this);
        
//         this.display_time = this.display_time.bind(this);
//     }
//     componentDidMount(){
//         this.choose = this.choose.bind(this);
//     }
//     display_time = () => {
//         let t;
//         if (this.state.unit === "Tháng") {
//             t = (this.state.start_time.getMonth() + 1) + '/' + this.state.year;
//         }
//         else if (this.state.unit === "Quý") {
//             t = '0' + Math.floor((this.start_time.getMonth() + 3) / 3) + '/' + this.state.year;
//         }
//         else {
//             t = this.state.year;
//         }
//         return (this.state.unit + ' ' + t).toUpperCase();
//     }
//     //event handlers
//     pre_year_func = () => {
//         this.setState({
//             page: this.state.page - 1,
//             yearrange: Yearlist(startyear, this.state.page),
//             year: this.state.yearrange[0],
//         });

//     };
//     next_year_func = () => {
//         this.setState({
//             count: this.state.page + 1,
//             yearrange: Yearlist(startyear, this.state.page),
//             year: this.state.yearrange[0],
//         });
//     };
//     pre_func = () => {
//         this.setState({ year: this.state.year - 1 });
//         if (this.state.year < this.state.yearrange[0]) {
//             this.setState({ page: this.state.page - 1 });
//         };
//     };
//     next_func = () => {
//         this.setState({ year: this.state.year + 1 });
//         if (this.state.year > this.state.yearrange[-1]) {
//             this.setState({ page: this.state.page + 1 });
//         };
//     };
//     choose = (idx) => {
//         console.log(idx);
//         if (this.state.unit === "Quý") {
//             this.setState({ start_time: new Date(this.state.year, idx * 3, 1), end_time: new Date(this.state.year, idx * 3 + 2, 0) });
//         }
//         else if (this.state.unit === "Tháng") {
//             this.setState({ start_time: new Date(this.state.year, idx, 1), end_time: new Date(this.state.year, idx, 0) });
//         }
//         else {
//             this.setState({ start_time: new Date(idx, 0, 1), end_time: new Date(idx, 11, 0) });
//         }
//     };
//     //event handlers
//     maincalendar() {
//         let list;
//         let showlist;
//         let pagin;
//         if (this.state.unit === "Năm") {
//             list = this.state.yearrange;
//             showlist =()=>{
//                 return(
//                     <div className="m-year">
//                         {
//                             list.map((idx) => {
//                                 return (
//                                     <div className="used" onClick={(idx)=>this.choose(idx)}>
//                                         {idx}
//                                     </div>
//                                 );
//                             })
//                         }
//                     </div>
//                 );
//             } 
//             pagin = () => {
//                 return (
//                     <div className="m-centering paginating">
//                         <span className="preyear" onClick={this.pre_year_func}>
//                             &laquo;
//                         </span>
//                         {/* <a>{yearrange[0]} - {yearrange[-1]}</a> */}
//                         <span className="nextyear" onClick={this.next_year_func}>
//                             &raquo;
//                         </span>
//                     </div>
//                 );
//             };
//         } else if (this.state.unit === "Quý") {
//             list = Quarters;
//             showlist =()=>{
//                 return(
//                     <div className="m-quarter">
//                         {
//                             list.map((quarter, idx) => {
//                                 if (idx * 3 >= date.getMonth()) {
//                                     return <div className="unused">{quarter}</div>;
//                                 } else {
//                                     return (
//                                         <div className="used" onClick={(idx)=>this.choose(idx)}>
//                                             {quarter}
//                                         </div>
//                                     );
//                                 }
//                             })
//                         }
//                     </div>
//                 )
//             } 
//             pagin = () => {
//                 return (
//                     <div className="m-calendar paginating">
//                         <span className="pre" onClick={this.pre_func}>
//                             &laquo;
//                         </span>
//                         {/* <a>{this.state.year}</a> */}
//                         <span className="next" onClick={this.next_func}>
//                             &raquo;
//                         </span>
//                     </div>
//                 );
//             };
//         } else {
//             list = Months;
//             showlist = () => {
//                 return (
//                     <div className="m-month">
//                         {
//                             list.map((month, idx) => {
//                                 if (idx >= date.getMonth()) {
//                                     return <div className="unused" key={idx}>{month}</div>;
//                                 } else {
//                                     return (
//                                         <div className="used" key={idx} onClick={()=>this.choose(idx)}>
//                                             {month}
//                                         </div>
//                                     );
//                                 }
//                             })
//                         }
//                     </div>
//                     );
//             };
//             pagin = () => {
//                 return (
//                     <div className="m-centering m-paginating">
//                         <span className="pre" onClick={this.pre_func}>
//                             &laquo;
//                         </span>
//                         {/* <a>{this.state.year}</a> */}
//                         <span className="next" onClick={this.next_func}>
//                             &raquo;
//                         </span>
//                     </div>
//                 );
//             };
//         }
//         return [showlist, pagin];
//     }

//     render() {
//         let show = this.maincalendar(2022);
//         return (
//             /* {drop_calendar.render("Chọn thời gian", Calendar_unit)} */
//             <div className="m-centering">
//                 <Select options={Calendar_unit} onChange={(options) => this.setState({ unit: options })} />
//                 <div className="m-centering m-header">
//                     <div className="m-paginating">
//                         {this.state.year} {show[1]()}
//                     </div>
//                 </div>
//                 {show[0]()}
//             </div>
//         );
//     }
// }
export default MCalendar;