import { Container, Row, Col } from "reactstrap";
import MenuItems from "../components/MenuItems";
//import { menuData } from "../app/shared/MENU";
import { useEffect, useState } from "react";
import "./Menu.css";

const MenuPage = () => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() =>{
    fetch("https://shibbydev3.github.io/data/moviehouse/menu.json")
    .then(response => response.json())
    .then(data => setMenuData(data))
  },[]);
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
            <MenuItems array={menuData} category={`food`} />
            <Col xs="12">
                <h2>Candy</h2>
            </Col>
            <MenuItems array={menuData} category={`candy`} />
            <Col xs="12">
                <h2>Drinks</h2>
            </Col>
            <MenuItems array={menuData} category={`beverages`} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MenuPage;
