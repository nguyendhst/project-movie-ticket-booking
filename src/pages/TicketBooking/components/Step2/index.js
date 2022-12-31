import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

import "./index.css";

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

    const { basePrice, updateSum, selectedMenu, updateMenu } = props;

    useEffect(() => {
        console.log("step 2 useEffect ", basePrice);
        console.log(selected);
        let sum = basePrice;
        if (selected.length > 0) {
            sum = parseInt(basePrice) + parseInt(selected.reduce((a, b) => parseInt(a) + parseInt(b)));
        }
        updateSum(sum);
    }, [selected]);

    return (
        <React.Fragment>
            <div className="info">
                <h3>Chọn snacks</h3>
                <h5>
                    Bạn có thể chọn thêm các món ăn nhẹ với giá cả phù hợp.
                </h5>
            </div>
            <div className="form-group">
                <div className="menu-container">
                    {menuData.map((item) => (
                        <div className="menu-item">
                            <Form.Check
                                type="checkbox"
                                label={item.name + " - " + item.price + " VND"}
                                value={item.price}
                                checked={selectedMenu.includes(item.id)}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        console.log("checked");
                                        setSelected([
                                            ...selected,
                                            e.target.value,
                                        ]);
                                        updateMenu([...selectedMenu, item.id]);
                                        console.log(selected);
                                    } else {
                                        console.log("unchecked");
                                        setSelected(
                                            selected.filter(
                                                (i) => i !== e.target.value
                                            )
                                        );
                                        updateMenu(
                                            selectedMenu.filter(
                                                (i) => i !== item.id
                                            )
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
