import { React, useEffect, useState } from "react";
import "./index.css";
import { Container, Row, Col, Image } from "react-bootstrap";

import { faFire, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const imgPath = "https://image.tmdb.org/t/p/original";
const genresPath = "http://localhost:8080/api/genres?ids=";

function Banner(props) {
    const { movie } = props;
    console.log("movie", movie);
    const [bannerPoster, setBannerPoster] = useState({});
    const [genres, setGenres] = useState([]);

    // get big poster
    useEffect(() => {
        console.log("movie", movie);
        console.log("status", movie?.status);
        if (movie) {
            setBannerPoster(imgPath + movie.vertical_poster_path);
        }
    }, [movie]);

    // get genres
    useEffect(() => {
        if (movie) {
            fetch(genresPath + movie.genre_ids)
                .then((res) => res.json())
                .then((data) => {
                    console.log("genres", data.results);
                    setGenres(data.results);
                });
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
                            <div className="booking-banner_showing">
                                <div className="booking-banner-item">
                                    <div className="booking-banner_showing-item-icon">
                                        <FontAwesomeIcon
                                            icon={faFilm}
                                            color="white"
                                        />
                                    </div>
                                    {(movie?.status &&
                                        movie?.status === "Ongoing") ||
                                    movie?.status === "Trending" ? (
                                        <div className="booking-banner_showing-item-text">
                                            <p>Ongoing</p>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="booking-banner_trending">
                                <div className="booking-banner-item">
                                    <div className="booking-banner_trending-item-icon">
                                        <FontAwesomeIcon
                                            icon={faFire}
                                            color="white"
                                        />
                                    </div>
                                    {movie?.status &&
                                    movie?.status === "Trending" ? (
                                        <div className="booking-banner_trending-item-text">
                                            <p>Trending</p>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="booking-banner_genres">
                                <div className="booking-banner_genres-item">
                                    <p className="booking-banner_genres-item-text">
                                        {genres
                                            ? genres.map((genre) => {
                                                  if (
                                                      genres.indexOf(genre) !==
                                                      genres.length - 1
                                                  ) {
                                                      return genre.name + ", ";
                                                  }
                                                  return genre.name;
                                              })
                                            : null}
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner;
