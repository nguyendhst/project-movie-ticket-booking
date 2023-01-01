import React, { useState} from "react";
import { Form } from "react-bootstrap";

import "./index.css";

const paymentMethods = [
    {
        id: 1,
        name: "Momo",
        value: "momo",
    },
    {
        id: 2,
        name: "ZaloPay",
        value: "zalopay",
    },
    {
        id: 3,
        name: "Credit/Debit Card",
        value: "card",
    },
    {
        id: 4,
        name: "Bitcoin",
        value: "bitcoin",
    },
];
function Step3(props) {
    const { updatePayment, payment } = props;
    const [selected, setSelected] = useState(payment);

    const handleChange = (e) => {
        console.log(e.target.value);
        setSelected(e.target.value);
        updatePayment(e.target.value);
    };

    return (
        <React.Fragment>
            <div className="info">
                <h3>Chọn phương thức thanh toán</h3>
            </div>
            <div className="form-group">
                <div className="payment-methods">
                    <Form.Group>
                        {paymentMethods.map((item) => (
                            <Form.Check
                                type="radio"
                                label={item.name}
                                name="payment"
                                value={item.value}
                                onChange={handleChange}
                                checked={selected === item.value}
                            />
                        ))}
                    </Form.Group>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Step3;
