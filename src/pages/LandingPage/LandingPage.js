import React from "react";
import "./LandingPage.css";

import FilmBanner from "../../components/Film_banner/FilmBanner";

function LandingPage() {
    
    return (
        <div className="LandingPage">
            <div className="LandingPage_main">
                <FilmBanner />
            </div>
        </div>
    );
}

export default LandingPage;
