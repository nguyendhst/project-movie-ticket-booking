import React,{useEffect, useState} from "react";
import { Form } from "react-bootstrap";

import './index.css';

const menuData = [
  {
    id: 1,
    name: "Popcorn",
    price: 15000,
  },
  {
    id: 2,
    name: "Coca Cola",
    price: 20000,
  },
  {
    id: 3,
    name: "Milk Tea",
    price: 25000,
  },
];
// Display the snack menu
function Step2(props) {
  const [selected, setSelected] = useState([]);

  const {
    currentStep,
    basePrice,
    updateSum,
    selectedMenu,
    updateMenu,
  } = props;

  useEffect(() => {
    console.log("step 2 useEffect ");

    let sum;
    if (selected.length > 0) {
      sum = selected.reduce((acc, curr) => {
        return parseInt(acc) + parseInt(curr);
      }, 0);
    } else {
      sum = 0;
    }
    console.log("sum: ", sum);
    let newSum = sum + basePrice;
    console.log("t2 newSum: ", newSum);
    updateSum(newSum);
  }, [selected, basePrice, updateSum]);

  if (currentStep !== 2) {
    return null;
  }

  return (
    <React.Fragment>
    <div className="info">
      <div className="info__title">Select your snacks</div>
      <div className="info__subtitle">
        You can add snacks to your order for an additional cost
      </div>
    </div>
    <div className="form-group">
      <div className="menu-container">
        {menuData.map((item) => (
          <div className="menu-item">
            <Form.Check
              type="checkbox"
              label={item.name}
              value={item.price}
              checked={selectedMenu.includes(item.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  console.log("checked");
                  setSelected([...selected, e.target.value]);
                  updateMenu([...selectedMenu, item.id]);
                  console.log(selected);
                } else {
                  console.log("unchecked");
                  setSelected(selected.filter((i) => i !== e.target.value));
                  updateMenu(
                    selectedMenu.filter((i) => i !== item.id)
                  );
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
    </React.Fragment>
  );
}

export default Step2;
