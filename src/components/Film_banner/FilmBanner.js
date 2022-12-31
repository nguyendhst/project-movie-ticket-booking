import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./FilmBanner.css";

// import films from "../../data/films.json";
import CarouselBanner from "./CasourelBanner/CarouselBanner";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ongoingMoviesAPI = "http://localhost:8080/api/movies?status=ongoing";
const tredingMoviesAPI = "http://localhost:8080/api/movies?status=trending";
const imgPath = "https://image.tmdb.org/t/p/original";

function MoviePoster(props) {
    const { film } = props;
    return (
        <Card className="Banner_horizontal">
            <a href={"/movie/" + props.filmDetail.id} style={{ textDecoration: 'none' , color: "inherit"}}>
            <Card.Img variant="top" src= {props.filmDetail.poster}/>
            <Card.Body>
                <Card.Title style={{
                    textOverflow: "ellipsis"
                }}>{props.filmDetail.name}</Card.Title>
            </Card.Body>
            </a>
        </Card>
    ) 
}

function FilmBanner() {
    const [ongoing, setOngoing] = React.useState([]);
    const [trending, setTrending] = React.useState([]);

    // fetch on-going movies
    useEffect(() => {
        axios
            .get(ongoingMoviesAPI)
            .then((response) => {
                setOngoing(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // fetch trending movies
    useEffect(() => {
        axios
            .get(tredingMoviesAPI)
            .then((response) => {
                console.log(response.data.results);
                setTrending(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="Film_Banner">
            <CarouselBanner trending={trending} />

            <Container>
                <Row>
                    <Col>
                        <h3>Trending</h3>
                    </Col>
                </Row>
                <Row>
                    {trending.map((film, index) => (
                        <Col key={film.id} xs={6} md={4} lg={4}>
                            <MoviePoster film={film} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col>
                        <h3>On-going</h3>
                    </Col>
                </Row>
                <Row>
                    {ongoing.map((film, index) => (
                        <Col key={film.id} xs={6} md={4} lg={4}>
                            <MoviePoster film={film} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default FilmBanner;
