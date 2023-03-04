import { Container, Row, Col, Card } from "reactstrap";
import CustomCarousel from "../components/CustomCarousel";

const HomePage = () => {
  return (
    <>
      <section id="carousel">
        <Container>
          <Row>
            <Col xs="12">
              <div id="movieCarousel">
                <CustomCarousel />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="menuAd">
        <Container>
          <Row className="align-items-center">
            <Col xs="12" md="4">
                <Card>
                    <img src="assets/popcorn.jpg" alt="" />
                </Card>
            </Col>
            <Col xs="12" md="8">
              <h2>Check Out Our Menu</h2>
              <p>We have all of the classics, from popcorn to pizza. Our food is made fresh everyday with the highest quality of ingredients. We also have an extensive varity of candy to choose from in case your not in the mood for a meal but just a snack. Also choose from our beverages to wash it all down. A great movie always pairs well with great food.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="loyaltyAd">
        <Container>
          <Row className="align-items-center">
            <Col xs="12" md="8">
              <h2>Loyalty Program Coming Soon</h2>
              <p>Coming in May 2023, or whenever we have the back end portion of the class ;), we will offer a loyalty program. Earn points the more you watch movies with us. Then you can use those points for free movie tickets or popcorn. If you forget how many points you have you will be able to login and view them.</p>
            </Col>
            <Col xs="12" md="4" className="order-first order-md-last">
                <Card>
                    <img src="assets/loyalty.jpg" alt="" />
                </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
