import { Container, Row, Col, Button } from "reactstrap";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext, useEffect, useState, Fragment } from "react";
import CartSummary from "../components/CartSummary";
import { USDollar } from "../utils/USDollarFormat";
import "../pages/Checkout.css";

const CheckoutPage = () => {
  const { cartItems, removeFromCart, modifyTime, modifyQty } = useContext(ShoppingCartContext);
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    fetch("https://shibbydev3.github.io/data/moviehouse/movies.json")
      .then((response) => response.json())
      .then((data) => setMovieData(data));
  }, []);
  return (
    <>
      {movieData.length && (
        <section>
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
                    return film.id === item.id;
                  });
                  return (
                    <Row className="cart-item" key={index}>
                      <Col xs="6" xl="3">
                        <img src={movie.poster} alt={movie.name} />
                      </Col>
                      <Col xs="6" xl="4">
                        <p className="cart-header">Choose A Time</p>
                        <div className="timeGroup">
                          {movie.showtimes.map((time, index) => {
                            return (
                              <Fragment key={index}>
                                <input type="radio" className="btn-check" id={`${movie.id}-${time}`} autoComplete="off" name={`${movie.id}`} defaultChecked={parseInt(index) === parseInt(item.time) ? `true` : ""} />
                                <label
                                  className="btn btn-outline-primary cartButtons"
                                  data-cartid={item.id}
                                  data-id={index}
                                  onClick={(event) => {
                                    modifyTime(event.target.getAttribute(`data-cartid`), event.target.getAttribute(`data-id`), event.target.innerText);
                                  }}
                                  htmlFor={`${movie.id}-${time}`}
                                >
                                  {time}
                                </label>
                              </Fragment>
                            );
                          })}
                        </div>
                      </Col>
                      <Col xs="4" xl="1">
                        <p className="cart-header">Qty</p>
                        <input
                          className="cartInput"
                          type="number"
                          defaultValue={item.qty}
                          min="1"
                          data-cartid={item.id}
                          onChange={(event) => {
                            modifyQty(event.target.getAttribute(`data-cartid`), event.target.value);
                          }}
                        ></input>
                      </Col>
                      <Col xs="4" xl="2">
                        <p className="cart-header">Price</p>
                          <p className="itemPrice">{USDollar.format(item.qty * 9.99)}</p>
                      </Col>
                      <Col className="removeContainer" xs="4" xl="2">
                        <p className="cart-header">Remove?</p>
                        <Button className="removeButton" data-movieid={movie.id} onClick={removeFromCart}>
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </Button>
                      </Col>
                    </Row>
                  );
                })}
              </Col>
              <Col xs="12" md="4" className="total">
                <div>
                  <CartSummary />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default CheckoutPage;
