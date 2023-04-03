import { Row, Col, Card, CardBody } from "reactstrap";
import "../css/Movies.css";

const MenuItems = ({ array, category }:{array: any[], category:string}) => {
  return (
    <>
     {array.map((menuItem) => {
        if (menuItem.category === category) {
          return (
            <Col xs="12" md="6" key={menuItem.id}>
              <Card>
                <Row>
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
        return null;
      })}
    </>
  );
};

export default MenuItems;
