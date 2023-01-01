import React from "react";

import { useState, useEffect } from "react";

import "./index.css";

import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Step4 from "../Step4";

function MasterForm(props) {
    const { basePrice, time, date } = props;
    const [currentStep, setCurrentStep] = useState(1);
    const [total, setTotal] = useState(0);
    const [payment, setPayment] = useState("");
    const [selectedMenu, setSelectedMenu] = useState("");
    const [seats, setSeats] = useState([]);

    // render when sum changes
    useEffect(() => {
        console.log("master total: ", total);
    }, [total]);

    const _next = () => {
        // If the current step is 1 or 2 or 3, then add one on "next" button click
        setCurrentStep(currentStep >= 4 ? 4 : currentStep + 1);
    };

    const _prev = () => {
        // If the current step is 2 or 3 or 4, then subtract one on "previous" button click
        setCurrentStep(currentStep <= 1 ? 1 : currentStep - 1);
    };

    const _finish = () => {
        // alert all states
        alert(
            `Your order is confirmed! You have ordered ${seats.length} tickets for ${date} ${time}. Your total is ${total} VND. Your payment method is ${payment}. Your menu is ${selectedMenu}.`
        );
    };

    const previousButton = () => {
        if (currentStep !== 1 && currentStep !== 4) {
            return (
                <button
                    className="btn btn btn-outline-info prev-expand"
                    type="button"
                    onClick={_prev}
                >
                    Previous
                </button>
            );
        } else if (currentStep === 4) {
            return (
                <button
                    className="btn btn btn-info prev-expand"
                    type="button"
                    onClick={_finish}
                >
                    Download
                </button>
            );
        }
        return null;
    };

    const nextButton = () => {
        if (currentStep <= 3) {
            return (
                <button
                    className="btn btn-info next-expand"
                    type="button"
                    onClick={_next}
                >
                    Next
                </button>
            );
        }
        return null;
    };

    const updateSum = (newSum) => {
        console.log("update master total: ", newSum);
        setTotal(newSum);
    };

    const updateMenu = (newMenu) => {
        setSelectedMenu(newMenu);
    };

    const updateSeats = (newSeats) => {
        setSeats(newSeats);
    };

    const updatePayment = (newPayment) => {
        setPayment(newPayment);
    };

    return (
        <React.Fragment>
            <form>
                {currentStep === 1 && (
                    <Step1
                        sum={total}
                        basePrice={basePrice}
                        updateSum={updateSum}
                        updateSeats={updateSeats}
                    />
                )}
                {currentStep === 2 && (
                    <Step2
                        basePrice={total}
                        updateSum={updateSum}
                        selectedMenu={selectedMenu}
                        updateMenu={updateMenu}
                    />
                )}
                {currentStep === 3 && (
                    <Step3 updatePayment={updatePayment} payment={payment} />
                )}
                {currentStep === 4 && (
                    <Step4
                        total={total}
                        payment={payment}
                        seats={seats}
                        snacks={selectedMenu}
                        time={time}
                        date={date}
                    />
                )}
            </form>
            <div className="total-box">
                {currentStep !== 4 && (
                    <h4>
                        Total:{" "}
                        {
                            // parse to vnd format
                            total.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                            })
                        }
                    </h4>
                )}

                {previousButton()}
                {nextButton()}
            </div>
        </React.Fragment>
    );
}

export default MasterForm;
