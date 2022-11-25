import {React} from 'react';
import "./index.css";

import BannerImg from '../../../../Asset/banner_2.png';


const Banner = () => {

    return (
        <div className="booking-banner">
            <img src={BannerImg} alt="Banner" />
        </div>
    )
}

export default Banner;