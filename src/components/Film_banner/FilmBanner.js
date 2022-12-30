import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./FilmBanner.css";

// import films from "../../data/films.json";
import CarouselBanner from "./CasourelBanner/CarouselBanner";
import { Card } from "react-bootstrap";

const ongoingMoviesAPI = "http://localhost:3000/movies?status=ongoing";
const tredingMoviesAPI = "http://localhost:3000/movies?status=trending";
const imgPath = "https://image.tmdb.org/t/p/original";

function MoviePoster(props) {
    const { film } = props;
    return (
        <Card className="Banner_horizontal">
            <Card.Img variant="top" src={imgPath + film?.poster_path} />
            <Card.Body>
                <Card.Title
                    style={{
                        textOverflow: "ellipsis",
                    }}
                >
                    {film?.title}
                </Card.Title>
            </Card.Body>
        </Card>
    );
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
                setTrending(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="Film_Banner">
            <CarouselBanner trending={trending} />

            <div className="Banner_container">
                {ongoing.forEach((film) => {
                    <MoviePoster film={film} />;
                })}
            </div>
        </div>
    );
}

export default FilmBanner;
