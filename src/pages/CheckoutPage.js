import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { movieData } from "../app/shared/MOVIES";
import "../pages/movie.css";

const CheckoutPage = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
              <p>CheckoutPage</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CheckoutPage;
