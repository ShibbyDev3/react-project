import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import { movieData } from "../app/shared/MOVIES";
import '../pages/movie.css'
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { useContext } from 'react';

const MoviePage = () => {
    const {cartItems, addToCart} = useContext(ShoppingCartContext);
    const { path } = useParams();
    const movie = movieData.find(movie => { return movie.path === path});

    return(
        <>
        <section id="movieInfo">
            <Container>
                <Row>
                    <Col xs="12">
                        <h1>{movie.name}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="4">
                        <img src={movie.poster} alt={movie.name} />
                        {cartItems.find(id => { return id === movie.id}) + 1 ? <Link to='/checkout' className="getMovieTicket btn"> Already In Your Cart </Link> : <Link to='/checkout' onClick={() => {addToCart(movie.id)}} className="getMovieTicket btn"> Get Tickets </Link>}
                        
                    </Col>
                    <Col xs="12" md="8">
                        <h2>Trailer</h2>
                        <iframe className="videoTrailer" src={`https://www.youtube.com/embed/${movie.trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen=""></iframe>
                        {movie.nowPlaying && <><h2>Showtimes</h2>
                        <p>{movie.showtimes}</p></>}
                        {!movie.nowPlaying && <><h2>Release Date</h2>
                        <p>{movie.releaseDate}</p></>}
                        <h2>About</h2>
                        <p>{movie.description}</p>
                        <h2>Genre</h2>
                        <p>{movie.genre}</p>
                        <h2>Director</h2>
                        <p>{movie.director}</p>
                        <h2>Cast</h2>
                        <p>{movie.cast}</p>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default MoviePage