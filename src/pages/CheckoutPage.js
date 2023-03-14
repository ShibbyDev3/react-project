import { Container, Row, Col, Button } from "reactstrap";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext,useEffect, useState } from "react";
import "../pages/Checkout.css";

const CheckoutPage = () => {
  const { cartItems, removeFromCart } = useContext(ShoppingCartContext);
  const [movieData, setMovieData] = useState([]);
    useEffect(() =>{
      fetch("https://shibbydev3.github.io/data/moviehouse/movies.json")
      .then(response => response.json())
      .then(data => setMovieData(data))
    },[]);

  return (
    <>
      {movieData.length && <section>
        <Container>
          <Row>
            <Col>
              <h1>Checkout</h1>
              {cartItems.length ? null : <h2>Your Cart Is Empty</h2>}
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="8">
              {cartItems.map((item, index) => {
                const movie = movieData.find((film) => {
                  return film.id === item;
                });
                return (
                  <Row className="cart-item" key={index}>
                    <Col xs="12" md="2">
                      <img src={movie.poster} alt={movie.name} />
                    </Col>
                    <Col>
                      <p className="cart-header">Choose A Time</p>
                      <div className="timeGroup">
                        {movie.showtimes.map((time, index) => {
                          return (
                            <>
                              <input type="radio" className="btn-check" id={`${movie.id}-${time}`} autoComplete="off" name={`${movie.id}`} />
                              <label className="btn btn-outline-primary cartButtons" htmlFor={`${movie.id}-${time}`}>
                                {time}
                              </label>
                            </>
                          );
                        })}
                      </div>
                    </Col>
                    <Col>
                      <p className="cart-header">How Many Tickets?</p>
                      <input type="number" defaultValue="1" min="1"></input>
                    </Col>
                    <Col className="removeContainer">
                      <p className="cart-header">Remove?</p>
                      <Button className="removeButton" data-movieid={movie.id} onClick={removeFromCart}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </Button>
                    </Col>
                  </Row>
                );
              })}
            </Col>
            <Col xs="12" md="4">
              <div className="total"></div>
            </Col>
          </Row>
        </Container>
      </section>}
    </>
  );
};

export default CheckoutPage;
