import { React, useEffect, useState } from "react";
import "./index.css";
import { Container, Row, Col, Image } from "react-bootstrap";

import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const imgPath = "https://image.tmdb.org/t/p/original";

function Banner(props) {
    const { movie } = props;
    console.log("movie", movie);
    const [bannerPoster, setBannerPoster] = useState({});

    // get big poster
    useEffect(() => {
        console.log("movie", movie);
        if (movie) {
            setBannerPoster(imgPath + movie.vertical_poster_path);
        }
    }, [movie]);

    // hedonist or revolutionary

    return (
        <Row>
            <Col md={4}>
                <Image
                    src={movie ? `${imgPath}${movie.poster_path}` : null}
                    alt="Banner"
                />
            </Col>
            <Col md={8}>
                <Row className="banner-main">
                    <div
                        className="booking-banner_details"
                        style={{
                            background: `rgba(0, 0, 0, .65) url(${bannerPoster}) no-repeat center center/cover`,
                        }}
                    >
                        <h1>{movie ? movie.title : null}</h1>
                        <p>{movie ? movie.overview : null}</p>
                    </div>
                </Row>
                <Row className="banner-stats">
                    <div className="booking-banner_trending">
                        <div className="booking-banner_trending-item">
                            <div className="booking-banner_trending-item-icon">
                                <FontAwesomeIcon icon={faFire} color="white" />
                            </div>
                            {movie?.status === "Trending" ? (
                                <div className="booking-banner_trending-item-text">
                                    <p>Trending</p>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </Row>
            </Col>
        </Row>
    );
}

export default Banner;
