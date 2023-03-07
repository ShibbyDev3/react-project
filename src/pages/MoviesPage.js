import { Container, Row, Col } from "reactstrap";
import { movieData } from "../app/shared/MOVIES";
import MovieItems from "../components/MovieItems";
import "./Movies.css";

const MoviesPage = () => {
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
