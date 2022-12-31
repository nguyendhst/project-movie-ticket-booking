import React, { createContext } from 'react';
// import Select from 'react-select';
import {Modal, Button, Table ,Container,Row, ButtonGroup} from 'react-bootstrap';
import { useState, useEffect} from 'react';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MCalendar from './mcalendar';
import AddEvent from './add-event';
import ExportReport from './exportreport';
import './common.css';
//for calendar
// const Calendar_unit = [
//   {value: "Tháng", label:"month"},
//   {value: "Quý", label:"quarter"},
//   {value: "Năm", label:"year"}
// ];

// const cal =MCalendar();

// function ChooseTime(){
//   // const drop_click= (options)=>{
//   //     cal.setUnit(options);
//   // };
//   const calendar=cal.render();
//   return(
//       <div className="choose-time">
//           {calendar}
//       </div>
//   );
// }
//helpers

const date= new Date();
function daysInMonth(year, month) {
  return (month !== 2) ?
      31 - (((month - 1) % 7) % 2) :
      28 + (year % 4 === 0 ? 1 : 0) - (year % 100 === 0 ? 1 : 0) + (year % 400 === 0 ? 1 : 0)
}

function display_time(unit,year,start_time){
          let t;
          if (unit === "Tháng") {
              t = (start_time.getMonth() + 1) + '/' + year;
          }
          else if (unit === "Quý") {
              t = '0' + Math.floor((start_time.getMonth() + 3) / 3) + '/' + year;
          }
          else {
              t = year;
          }
          return (unit + ' ' + t).toUpperCase();
      }

function MakestringFromDate(inp){
  let t='';
  if (inp.getDate()<10){
    t='0';
  }
  return inp.getFullYear()+'-'+(inp.getMonth()+1)+'-'+t+inp.getDate();
}
function close_bar_monitoring(trigger){
  return(
      <FontAwesomeIcon icon={faCircleXmark} onClick={trigger}/>
  )
}
export const monitoring_context=createContext();

//for monitoring
const get_activity = "http://localhost:8080/api/monitoring";

function Monitoring() {
  const detail = (code) => {

  };
  //useState 
  const [activity_data, setData] = useState([]);
  const [addeventstate,toggleAE]=useState(false);
  const [ctimestate,toggleCT]=useState(false);
  const [exportstate,toggleE]=useState(false);
  const [unit,setUnit]=useState("Tháng");
  const [start_time,setStart_time]=useState(new Date(date.getFullYear(), date.getMonth()-1, 1));
  const [end_time,setEnd_time]=useState(new Date(date.getFullYear(), date.getMonth()-1, daysInMonth(date.getFullYear(), date.getMonth())));
  const [yearpage,setYearPage]=useState(date.getFullYear()-(date.getMonth()-1<0?1:0));
  const handleAE=(e)=>{
    e.preventDefault();
    toggleAE(!addeventstate);
  }
  const handleCT=(e)=>{
    e.preventDefault();
    toggleCT(!ctimestate);
  }
  const handleE=(e)=>{
    e.preventDefault();
    toggleE(!exportstate);
  }
  useEffect(() => {
    axios.post(get_activity,{start_time:MakestringFromDate(start_time), end_time:MakestringFromDate(end_time)})
      .then(res => {
        setData(res.data.results);
      })
      .catch(err=>{console.log(err);})
  })

  return (
    <Container>
      <Row >
    <h2 className="m-centering">THỐNG KÊ HOẠT ĐỘNG {display_time(unit,yearpage,start_time)} </h2>
    </Row>
    <Row>
    <Table bordered hover responsive='lg' variant='success' >
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tên hoạt động</th>
          <th scope="col">Mã hoạt động</th>
          <th scope="col">Thời gian bắt đầu</th>
          <th scope="col">Thời gian kết thúc</th>
          <th scope="col">Thu (đ)</th>
          <th scope="col">Chi (đ)</th>
          <th scope="col">Lợi nhuận (đ)</th>
          <th scope="col">So với chỉ tiêu (%)</th>
        </tr>
      </thead>
      <tbody>
      {activity_data.length ?
    activity_data.map(
      (data, id) => { return(
        <tr onClick={detail} key={id}>
          <th >{id}</th>
          <td>{data.names}</td>
          <td>{data.code}</td>
          <td>{data.start_time.split('T')[0]}</td>
          <td>{data.end_time.split('T')[0]}</td>
          <td>{data.received}</td>
          <td>{data.spend}</td>
          <td>{data.received - data.spend}</td>
          <td>{Math.ceil((data.received - data.spend) / (data.kpi) * 100)}</td>
        </tr>);
      }
    ):<tr><td colSpan={9}><h5 className='m-centering'>Không có dữ liệu</h5></td></tr>
  }
      </tbody>
    </Table>
    <Row id='m-monitor-button'>
    <ButtonGroup >
      <Button variant="primary me-3" onClick={handleAE}> Thêm hoạt động</Button>
      <Button variant="primary me-3" onClick={handleCT}> Chọn thời gian</Button>
      <Button variant="primary me-3" onClick={handleE}> Xuất báo cáo</Button>
    </ButtonGroup>
    </Row>
    </Row>
    <Footer/>
    <Modal show={addeventstate} centered size="lg">
      <Modal.Header className='m-close-bar'>
      <Modal.Title>{close_bar_monitoring(handleAE)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2 className='m-centering'>Thêm hoạt động</h2>
        <AddEvent/>
      </Modal.Body>
    </Modal>

    <Modal show={ctimestate} size="lg">
      <Modal.Header className='m-close-bar'>
      <Modal.Title>{close_bar_monitoring(handleCT)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2 className='m-centering'>Chọn thời gian</h2>
        <monitoring_context.Provider value={{
          unit_us:{unit,setUnit},
          start_time_us:{start_time,setStart_time},
          end_time_us:{end_time,setEnd_time},
          yearpage_us:{yearpage,setYearPage},
          date_us:date,
          handleCT:handleCT}}>
        {/* <MCalendar unit={unit} start_time={start_time} end_time={end_time} 
        setUnit={setUnit} setStart_time={setStart_time} setEnd_time={setEnd_time}/> */}
        <MCalendar/>
        </monitoring_context.Provider>
        
      </Modal.Body>
    </Modal>

    <Modal show={exportstate} size="lg">
      <Modal.Header className='m-close-bar'>
      <Modal.Title>{close_bar_monitoring(handleE)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h2 className='m-centering'>Xuất báo cáo</h2>
        <ExportReport activity_data={activity_data} name={display_time(unit,yearpage,start_time).replace("/","_")}/>
      </Modal.Body>
    </Modal>
    </Container>
  );
}

export default Monitoring;