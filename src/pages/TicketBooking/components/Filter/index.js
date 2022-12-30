import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./index.css";

const filterCheck = [
    {
        id: 1,
        name: "Price",
        value: "price",
        checked: false,
    },
    {
        id: 2,
        name: "Time",
        value: "time",
        checked: false,
    },
];

const filterRange = [
    {
        id: 1,
        name: "Price",
        value: "price",
    },
    {
        id: 2,
        name: "Seats",
        value: "seats",
    },
];

// class Filter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filterCheck: filterCheck,
//       filterRange: filterRange,
//     };

//     this.checkClickHandler = this.checkClickHandler.bind(this);
//   }

//   checkClickHandler = (value) => {
//     if (value === "price") {
//       this.props.sortByPrice();
//     } else if (value === "time") {
//       this.props.sortByTime();
//     }
//   };

//   render() {
//     return (
//       <div className="filter-box">
//         <Form className="sticky">
//           <div className="filter-radio">
//             <Form.Label>Sort By</Form.Label>
//             <FilterCheckList
//               options={this.state.filterCheck}
//               checkClickHandler={this.checkClickHandler}
//             />
//           </div>
//           <div className="filter-range">
//             <Form.Label>Filter By</Form.Label>
//           </div>
//         </Form>
//       </div>
//     );
//   }
// }

// const FilterCheckList = ({ options, checkClickHandler }) => {
//   return (
//     <div className="filter-check-list">
//       {options.map((option) => (
//         <Form.Check
//           key={option.id}
//           type="checkbox"
//           label={option.name}
//           onClick={() => {checkClickHandler(option.value)}}
//         />
//       ))}
//     </div>
//   );
// };

// class FilterRange extends Component {
//   render() {
//     return (
//       <Form.Range
//         key={this.props.id}
//         type="range"
//         label={this.props.name}
//         id={this.props.name}
//       />
//     );
//   }
// }

function Filter(props) {
    const { sortByPriceRegister, sortByTimeRegister } = props;

    const sortByPriceRegisterHandler = () => {
        sortByPriceRegister();
    };

    const sortByTimeRegisterHandler = () => {
        sortByTimeRegister();
    };

    return (
        <div className="filter-box">
            <Form className="sticky">
                <div className="filter-radio">
                    <Form.Label>Sort By</Form.Label>
                    <div className="filter-check-list">
                        <Form.Check
                            type="checkbox"
                            label="Price"
                            onClick={sortByPriceRegisterHandler}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Time"
                            onClick={sortByTimeRegisterHandler}
                        />
                    </div>
                </div>
                <div className="filter-range">
                    <Form.Label>Filter By</Form.Label>
                </div>
            </Form>
        </div>
    );
}

export default Filter;
