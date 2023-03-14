import { Col } from "reactstrap";
import { Link } from 'react-router-dom';

const MovieItems = ({ array, nowPlaying }) => {
  return (
    <>
    {console.log(array)}
      {array.map((movie) => {
        if (movie.nowPlaying === nowPlaying) {
          return (
            <Col xs="6" md="4" key={movie.id}>
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
