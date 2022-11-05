import React from "react";
import './FilmBanner.css'
import banner_1 from '../../Asset/banner_1.png'
import banner_2 from '../../Asset/banner_2.png'


function BannerVertical() {
    return (
        <img src={banner_1} alt="A movie banner that is large and vertical." className="Banner_vertical"/>
    )
}

function BannerHorizontal() {
    return (
        <img src={banner_2} alt="A movie banner that is horizontal and relatively small." className="Banner_horizontal"/>
    )
}

function FilmBanner() {
    return (
        <div className="Film_Banner">
            <BannerVertical/>

            <div className="Banner_container">
                <BannerHorizontal/>
                <BannerHorizontal/>
                <BannerHorizontal/>
                <BannerHorizontal/>
                <BannerHorizontal/>
                <BannerHorizontal/>
                <BannerHorizontal/>
                <BannerHorizontal/>
            </div>
        </div>
    )
}

export default FilmBanner;