import { Container, Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
import MovieItems from "../components/MovieItems";
import "../css/Movies.css";

const MoviesPage = () => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() =>{
    fetch("https://shibbydev3.github.io/data/moviehouse/movies.json")
    .then(response => response.json())
    .then(data => setMovieData(data))
  },[]);
  return (
    <>
      <section id="movies">
        <Container>
          <Row>
            <Col xs="12">
              <h1>Movies</h1>
              <h2>Now Playing</h2>
              <Row>
                <MovieItems array={movieData} nowPlaying={true} />
              </Row>
              <hr/>
              <h2>Coming Soon</h2>
              <Row>
                <MovieItems array={movieData} nowPlaying={false} />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MoviesPage;
