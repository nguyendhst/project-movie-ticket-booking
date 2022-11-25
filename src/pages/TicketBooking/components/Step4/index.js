import React from "react";

function Step4(props) {
  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <div className="summary">
      <div className="info">
        <div className="title">Payment Summary</div>
      </div>
      <div className="summary__content">
        <div className="summary__content__item">
          <div className="summary__content__item__title">Movie</div>
          <div className="summary__content__item__value">{props.movie}</div>

          <div className="summary__content__item__time">{props.time}</div>

          <div className="summary__content__item__date">{props.date}</div>

          <div className="summary__content__item__payment">{props.payment}</div>

          <div className="summary__content__item__seats">
            {props.seats.map((item) => (
              <div className="summary__content__item__seats__item">
                <div className="summary__content__item__seats__item__name">
                  {item.name}
                </div>

                <div className="summary__content__item__seats__item__price">
                  {item.price}
                </div>
              </div>
            ))}
          </div>

          <div className="summary__content__item__snacks">
            {props.snacks.map((item) => (
              <div className="summary__content__item__snacks__item">
                <div className="summary__content__item__snacks__item__name">
                  {item.name}
                </div>
                <div className="summary__content__item__snacks__item__price">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
          <div className="summary__content__item__total">
            <div className="summary__content__item__total__title">Total</div>
            <div className="summary__content__item__total__value">
              {props.total}
            </div>
          </div>
        </div>

        <p>Total: {props.currentSum}</p>
      </div>
    </div>
  );
}

export default Step4;
