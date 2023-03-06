import React, { useState } from "react";
import { Container, Row, Col, Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import { movieData } from "../app/shared/MOVIES";
import "./Movies.css";

const MoviesPage = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <>
      <section id="movies">
        <Container>
          <Row>
            <Col xs="12">
              <h1>Movies</h1>
              <h2>Now Playing</h2>
              <Row>
              {movieData.map((movie) => {
                        if (movie.nowPlaying) {
                          return (
                            <Col xs="6" md="4" key={movie.id}>
                              <a href="#">
                                <img src={movie.poster} />
                              </a>
                            </Col>
                          );
                        }
                      })}
              </Row>
              <h2>Coming Soon</h2>
              <Row>
              {movieData.map((movie) => {
                        if (!movie.nowPlaying) {
                          return (
                            <Col xs="6" md="4" key={movie.id}>
                              <a href="#">
                                <img src={movie.poster} />
                              </a>
                            </Col>
                          );
                        }
                      })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MoviesPage;
