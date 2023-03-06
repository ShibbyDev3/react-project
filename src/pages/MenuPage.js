import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { menuData } from "../app/shared/MENU";
import "./Menu.css";

const MenuPage = () => {
  return (
    <>
      <section id="menu">
        <Container>
          <Row>
            <Col xs="12">
              <h1>Our Menu</h1>
              <p>Don't forget to grab your favorite snacks and beverages.</p>
              <h2>Food</h2>
            </Col>
            {menuData.map((menuItem) => {
              if (menuItem.category === "food") {
                return (
                  <Col xs="12" md="6">
                    <Card>
                      <Row noGutters>
                        <Col xs="12" md="4" className={`imgContainer ${menuItem.name}`}></Col>
                        <Col xs="12" md="8">
                          <CardBody>
                            <h3 className="card-title">{menuItem.name}</h3>
                            <p className="card-text">{menuItem.description}</p>
                            <p className="card-price">{menuItem.price}</p>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                );
              }
            })}
            <Col xs="12">
                <h2>Candy</h2>
            </Col>
            {menuData.map((menuItem) => {
              if (menuItem.category === "candy") {
                return (
                  <Col xs="12" md="6">
                    <Card>
                      <Row noGutters>
                        <Col xs="12" md="4" className={`imgContainer ${menuItem.name}`}></Col>
                        <Col xs="12" md="8">
                          <CardBody>
                            <h3 className="card-title">{menuItem.name}</h3>
                            <p className="card-text">{menuItem.description}</p>
                            <p className="card-price">{menuItem.price}</p>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                );
              }
            })}
            <Col xs="12">
                <h2>Drinks</h2>
            </Col>
            {menuData.map((menuItem) => {
              if (menuItem.category === "beverages") {
                return (
                  <Col xs="12" md="6">
                    <Card>
                      <Row noGutters>
                        <Col xs="12" md="4" className={`imgContainer ${menuItem.name}`}></Col>
                        <Col xs="12" md="8">
                          <CardBody>
                            <h3 className="card-title">{menuItem.name}</h3>
                            <p className="card-text">{menuItem.description}</p>
                            <p className="card-price">{menuItem.price}</p>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                );
              }
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MenuPage;
