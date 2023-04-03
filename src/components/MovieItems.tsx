import { Col } from "reactstrap";
import { Link } from 'react-router-dom';

const MovieItems = ({ array, nowPlaying }:{array: any[], nowPlaying: boolean}) => {
  interface movieShape {
    nowPlaying: boolean,
    id: number,
    path: string,
    poster: string,
    name: string
  }
  return (
    <>
      {array.map((movie:movieShape) => {
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
