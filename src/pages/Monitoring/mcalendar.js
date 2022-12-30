import React,{Component} from "react";
const startyear=2022;

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

var date = new Date();

function Yearlist(startyear, page) {
  let list;
  if (date.getFullYear() - startyear >= 30) {
      list = [...Array(30).keys()].map((i) => i + date.getFullYear() - 30);
  } else {
      list = [...Array(date.getFullYear() - startyear).keys()].map(
          (i) => i + startyear
      );
  }
  var start = Math.floor(list.length / 10 - 2 + page) * 10;
  return list.slice(start, start + 10);
}

function daysInMonth(year,month){
    return  (month !== 2) ? 
  31 - (((month - 1) % 7) % 2) : 
  28 + (year % 4 === 0 ? 1 : 0) - (year % 100 === 0 ? 1 : 0) + (year % 400 === 0 ? 1 : 0)
}
class MCalendar extends Component {
  constructor(props) {
      super(props);
      this.state = {
          unit: "Tháng",
          start_time: new Date(date.getFullYear(),date.getMonth(),1),
          end_time: new Date(date.getFullYear(),date.getMonth(),daysInMonth(date.getFullYear(),date.getMonth()+1)),
        //   month: date.getMonth(), //count from 1->12
        //   quarter:Math.ceil(date.getMonth()/3-1), //count from 0->3
          year: date.getFullYear(),
          page: 2,
          yearrange: Yearlist(startyear, 2),
      };
      this.pre_year_func= this.pre_year_func.bind(this);
      this.next_year_func= this.next_year_func.bind(this);
      this.pre_func= this.pre_func.bind(this);
      this.next_func= this.next_func.bind(this);
      this.choose=this.choose.bind(this);
      this.display_time=this.display_time.bind(this);
      this.setUnit=this.setUnit.bind(this);
  }
  setUnit=(unit)=>{
    this.setState({unit: unit});
  }
  display_time=()=>{
    let t;
    if(this.state.unit==="Tháng"){
      t= (this.state.start_time.getMonth()+1)+ '/' + this.state.year;
    }
    else if(this.state.unit==="Quý"){
      t= '0' + Math.floor((this.start_time.getMonth() + 3) / 3) + '/' + this.state.year;
    }
    else{
      t=this.state.year;
    }
    return (this.state.unit + ' ' + t).toUpperCase();
    }
  //event handlers
  pre_year_func = () => {
      this.setState({
          page: this.state.page - 1,
          yearrange: Yearlist(startyear, this.state.page),
          year: this.state.yearrange[0],           
      });
      
  };
  next_year_func =() =>{
      this.setState({
          count: this.state.page + 1,
          yearrange: Yearlist(startyear, this.state.page),
          year: this.state.yearrange[0],
      });
  };
  pre_func= ()=>{
      this.setState({ year: this.state.year - 1 });
      if (this.state.year < this.state.yearrange[0]) {
          this.setState({ page: this.state.page - 1 });
      };
  };
  next_func= ()=>{
      this.setState({ year: this.state.year + 1 });
      if (this.state.year > this.state.yearrange[-1]) {
      this.setState({ page: this.state.page + 1 });
      };
  };
  choose=(idx)=>{
      if(this.state.unit==="Quý"){
          this.setState({start_time: new Date(this.state.year,idx*3,1),end_time: new Date(this.state.year,idx*3+2,0)});
      }
      else if (this.state.unit==="Tháng"){
          this.setState({start_time: new Date(this.state.year,idx,1),end_time: new Date(this.state.year,idx,0)});
      }
      else{
      this.setState({start_time: new Date(idx,0,1),end_time: new Date(idx,11,0)});
      }
  };
  //event handlers
  maincalendar() {
      let list;
      let showlist;
      let pagin;
      if (this.state.unit === "Năm") {
          list = this.state.yearrange;
          showlist = list.map((idx) => {
              return (
                  <div className="used year" onClick={this.choose(idx)}>
                      {idx}
                  </div>
              );
          });
          pagin = () => {
              return (
                  <div className="m-centering paginating">
                      <span className="preyear" onClick={this.pre_year_func()}>
                          &laquo;
                      </span>
                      {/* <a>{yearrange[0]} - {yearrange[-1]}</a> */}
                      <span className="nextyear" onClick={this.next_year_func()}>
                          &raquo;
                      </span>
                  </div>
              );
          };
      } else if (this.state.unit === "Quý") {
          list = Quarters;
          showlist = list.map((quarter, idx) => {
              if (idx * 3 >= date.getMonth()) {
                  return <div className="unused quarter">{quarter}</div>;
              } else {
                  return (
                      <div className="used quarter" onClick={this.choose(idx)}>
                          {quarter}
                      </div>
                  );
              }
          });
          pagin = () => {
              return (
                  <div className="calendar paginating">
                      <span className="pre" onClick={this.pre_func()}>
                          &laquo;
                      </span>
                      {/* <a>{this.state.year}</a> */}
                      <span className="next" onClick={this.next_func()}>
                          &raquo;
                      </span>
                  </div>
              );
          };
      } else {
          list = Months;
          showlist = list.map((month, idx) => {
              if (idx >= date.getMonth()) {
                  return <div className="unused month">{month}</div>;
              } else {
                  return (
                      <div className="used month" onClick={this.choose(idx)}>
                          {month}
                      </div>
                  );
              }
          });
          pagin = () => {
              return (
                  <div className="m-centering m-paginating">
                      <span className="pre" onClick={this.pre_func()}>
                          &laquo;
                      </span>
                      {/* <a>{this.state.year}</a> */}
                      <span className="next" onClick={this.next_func()}>
                          &raquo;
                      </span>
                  </div>
              );
          };
      }
      return [showlist, pagin];
  }

  render() {
      let show = this.maincalendar(2022);
      if (this.state.unit === "Năm") {
        return (
            /* {drop_calendar.render("Chọn thời gian", Calendar_unit)} */
            <div className="m-centering">
                <div className="m-centering m-header">
                  <div className="m-paginating">
                    {this.state.year} 
                  </div>
                  <div className="m-centering paginating">
                      <span className="preyear" onClick={this.pre_year_func()}>
                          &laquo;
                      </span>
                      {/* <a>{yearrange[0]} - {yearrange[-1]}</a> */}
                      <span className="nextyear" onClick={this.next_year_func()}>
                          &raquo;
                      </span>
                  </div>
                </div>
                <div className="calendar content">
                {this.state.yearrange.map((idx) => {
                        return (
                            <div className="used year" onClick={this.choose(idx)}>
                                {idx}
                            </div>
                        );
                    })}
                </div>
            </div>
    );
      }
      return (
              /* {drop_calendar.render("Chọn thời gian", Calendar_unit)} */
              <div className="m-centering">
                  <div className="m-centering m-header">
                    <div className="m-paginating">
                      {this.state.year} {show[1]}
                    </div>
                  </div>
                  <div className="calendar content">{show[0]}</div>
              </div>
      );
  }
}
export default MCalendar;