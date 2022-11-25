import { React } from "react";
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
  const handleChange = (e) => {
    console.log("handleChange", e.target.value);
    props.updatePayment(e);
  };

  if (props.currentStep !== 3) {
    return null;
  }
  return (
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
              />
            ))}
          </Form.Group>
        </div>
    </div>
  );
}

export default Step3;
