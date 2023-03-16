import { Container, Row, Col, Button } from "reactstrap";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import "../pages/Checkout.css";

const CartSummary = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <Row className="justify-content-between cartSummary__row">
        <h2>Cart Summary</h2>
      </Row>

      <Row className="justify-content-between cartSummary__row">
        <Col>Tickets</Col>
        <Col>
          <p className="text-right">{USDollar.format(
            cartItems.reduce((total, currentPrice) => {
              return total + parseInt(currentPrice.qty) * 9.99;
            }, 0)
          )} </p>
        </Col>
      </Row>
      <Row className="justify-content-between cartSummary__row last">
        <Col>Tax</Col>
        <Col>
        <p className="text-right">{USDollar.format(
            cartItems.reduce((total, currentPrice) => {
              return total + parseInt(currentPrice.qty) * 9.99;
            }, 0) * 0.07
          )}</p>
        </Col>
      </Row>
      <Row className="justify-content-between cartSummary__row align-items-center">
        <Col><h2>Total</h2></Col>
        <Col><p>
          {USDollar.format(
            cartItems.reduce((total, currentPrice) => {
              return total + parseInt(currentPrice.qty) * 9.99;
            }, 0) * 1.07
          )}
        </p></Col>
      </Row>
    </>
  );
};

export default CartSummary;
