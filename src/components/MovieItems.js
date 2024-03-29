import { Col } from "reactstrap";
import { Link } from 'react-router-dom';

const MovieItems = ({ array, nowPlaying }) => {
  return (
    <>
      {array.map((movie) => {
        if (movie.nowPlaying === nowPlaying) {
          return (
            <Col xs="6" md="4" key={movie.id}>
              {console.log(movie)}
              <Link to={`${movie.path}`}>
                <img src={movie.poster} alt={movie.name} />
              </Link>
            </Col>
          );
        }
        return null;
      })}
    </>
  );
};

export default MovieItems;
