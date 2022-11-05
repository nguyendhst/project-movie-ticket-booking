import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./index.css";

const filterRadio = [
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

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterRadio: filterRadio,
      filterRange: filterRange,
    };
  }

  render() {
    const radioItem = this.state.filterRadio.map((radio) => (
      <FilterRadio
        key={radio.id}
        name={radio.name}
        value={radio.value}
        checked={radio.checked}
      />
    ));

    const rangeItem = this.state.filterRange.map((range) => (
      <FilterRange
        key={range.id}
        name={range.name}
        value={range.value}
      />
    ));

    return (
      <Form className="sticky">
        <div className="filter-radio">
          <Form.Label>Sort By</Form.Label>
            {radioItem}
        </div>
        <div className="filter-range">
            <Form.Label>Filter By</Form.Label>
            {rangeItem}
        </div>
      </Form>
    );
  }
}

class FilterRadio extends Component {
  render() {
    return (
      <Form.Check
        key={this.props.id}
        type="radio"
        label={this.props.name}
        name="formHorizontalRadios"
        id={this.props.name}
        value={this.props.value}
        checked={this.props.checked}
      />
    );
  }
}

class FilterRange extends Component {
  render() {
    return (
      <Form.Range
        key={this.props.id}
        type="range"
        label={this.props.name}
        name="formHorizontalRange"
        id={this.props.name}
      />
    );
  }
}


export default Filter;