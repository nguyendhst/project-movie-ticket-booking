import React from 'react';
import Select from 'react-select';
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
const Calendar_unit = [
  {value: "Tháng", label:"month"},
  {value: "Quý", label:"quarter"},
  {value: "Năm", label:"year"}
];

const cal =new MCalendar();

function ChooseTime(){
  const drop_click= (options)=>{
      cal.setUnit(options);
  };
  return(
      <div className="choose-time">
          <Select options={Calendar_unit} onChange={drop_click}/>
          {cal.render()}
      </div>
  );
}
//helpers
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
    axios.post(get_activity,{start_time:MakestringFromDate(cal.state.start_time), end_time:MakestringFromDate(cal.state.end_time)})
      .then(res => {
        setData(res.data.results);
      })
      .catch(err=>{console.log(err);})
  })
  return (
    <Container>
      <Row >
    <h2 className="m-centering">THỐNG KÊ HOẠT ĐỘNG {cal.display_time()} </h2>
    </Row>
    <Row>
    <Table bordered hover responsive="xl" variant='success m-centering' >
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tên hoạt động</th>
          <th scope="col">Mã hoạt động</th>
          <th scope="col">Thời gian</th>
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
          <th scope='row'>{id}</th>
          <td>{data.names}</td>
          <td>{data.code}</td>
          <td>{data.start_time.split('T')[0]} đến {data.end_time.split('T')[0]}</td>
          <td>{data.received}</td>
          <td>{data.spend}</td>
          <td>{data.received - data.spend}</td>
          <td>{Math.ceil((data.received - data.spend) / (data.kpi) * 100)}</td>
        </tr>);
      }
    ):<tr><td colSpan={8}><h3 className='m-calendar'>Không có dữ liệu</h3></td></tr>
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
        <ChooseTime/>
      </Modal.Body>
    </Modal>

    <Modal show={exportstate} size="lg">
      <Modal.Header className='m-close-bar'>
      <Modal.Title>{close_bar_monitoring(handleE)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h2 className='m-centering'>Xuất báo cáo</h2>
        <ExportReport/>
      </Modal.Body>
    </Modal>
    </Container>
  );
}

export default Monitoring;