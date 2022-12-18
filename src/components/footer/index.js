import React from "react";
import "./index.css";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Company</h3>
                        <ul className="list-unstyled three_cols">
                            <li>
                                <a href="/about">About us</a>
                            </li>
                            <li>
                                <a href="/contact">Contact us</a>
                            </li>
                            <li>
                                <a href="/toc">Terms and conditions</a>
                            </li>
                            <li>
                                <a href="/faq">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Help</h3>
                        <ul className="list-unstyled three_cols">
                            <li>
                                <a href="/ship">Shipping</a>
                            </li>
                            <li>
                                <a href="/returns">Returns</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
