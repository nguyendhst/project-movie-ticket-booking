import { React, useEffect, useState } from "react";
import "./index.css";
import { Container, Row, Col, Image } from "react-bootstrap";

import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const imgPath = "https://image.tmdb.org/t/p/original";
const genrePath = "http://localhost:8080/api/genres?id=";

function Banner(props) {
    const { movie } = props;
    console.log("movie", movie);
    const [bannerPoster, setBannerPoster] = useState({});
    const [genres, setGenres] = useState([]);

    // fetch genres
    useEffect(() => {
        if (movie) {
            fetch(genrePath + movie.genre_ids)
                .then((res) => res.json())
                .then((data) => {
                    setGenres(data.results);
                });
        }
    }, [movie]);

    // get big poster
    useEffect(() => {
        console.log("movie", movie);
        if (movie) {
            setBannerPoster(imgPath + movie.vertical_poster_path);
        }
    }, [movie]);

    return (
        <Container className="booking-banner" fluid>
            <Row>
                <Col md={4}>
                    <Image
                        src={movie ? `${imgPath}${movie.poster_path}` : null}
                        alt="Banner"
                    />
                </Col>
                <Col md={8}>
                    <Row className="banner">
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
                        <Col>
                            <div className="booking-banner_trending">
                                <div className="booking-banner_trending-item">
                                    <div className="booking-banner_trending-item-icon">
                                        <FontAwesomeIcon
                                            icon={faFire}
                                            color="white"
                                        />
                                    </div>
                                    {movie?.status === "Trending" ? (
                                        <div className="booking-banner_trending-item-text">
                                            <p>Trending</p>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="booking-banner_genres">
                                <p>
                                    {genres?.map((genre) => {
                                        // if not last, add comma
                                        if (
                                            genre !== genres[genres.length - 1]
                                        ) {
                                            return genre.name + ", ";
                                        }
                                        return genre.name;
                                    })}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner;
