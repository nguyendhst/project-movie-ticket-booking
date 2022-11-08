import {React, Component} from 'react';
import "./index.css";

import BannerImg from '../../../../assets/banner_2.png';


const Banner = () => {

    return (
        <div className="booking-banner">
            <img src={BannerImg} alt="Banner" />
        </div>
    )
}

export default Banner;