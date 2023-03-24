import { useState } from "react";
import { Container, Row, Col, Card, FormGroup, Label, Button } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "../css/Contact.css";
import { validateContactForm } from "../utils/validateContactForm";

const ContactPage = () => {
  const [formSent, setFormSent] = useState(false);

  return (
    <>
      <section id="contact">
        <Container>
          <Row>
            <Col xs="12">
              <h1>Contact Us</h1>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="4">
              <p>Would you like to host an event or do you have any accomdantions for a guest. Feel free to reach out either by filling out the form below or by calling at 1-800-123-4567.</p>
              <h2>Hours Of Operation</h2>
              <ul>
                <li>Sunday: 8 A.M. - 1 A.M.</li>
                <li>Monday: 8 A.M. - 1 A.M.</li>
                <li>Tuesday: 8 A.M. - 1 A.M.</li>
                <li>Wednesday: 8 A.M. - 1 A.M.</li>
                <li>Thurday: 8 A.M. - 1 A.M.</li>
                <li>Friday: 8 A.M. - 1 A.M.</li>
                <li>Saturday: 8 A.M. - 1 A.M.</li>
              </ul>
              <p>Hours may differ based on national holiday</p>
            </Col>
            <Col xs="12" md={{offset: 1, size: 7}}>
              <Card>
                { !formSent &&
                <Formik initialValues={{ email: "", firstName: "", lastName: "", request: "" }} onSubmit={() => {setFormSent(true)}} validate={validateContactForm}>
                  <Form>
                    <FormGroup>
                      <Label htmlFor="email">Email</Label>
                      <Field name="email" className="form-control" />
                      <ErrorMessage name="email">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="firstName">First Name</Label>
                      <Field name="firstName" className="form-control" />
                      <ErrorMessage name="firstName">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Field name="lastName" className="form-control" />
                      <ErrorMessage name="lastName">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="request">Request</Label>
                      <Field name="request" as="textarea" rows="3" className="form-control" />
                      <ErrorMessage name="request">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
                    </FormGroup>
                    <Button type="submit" className="formSubmit">
                      Submit
                    </Button>
                  </Form>
                </Formik>
                }
                { formSent &&
                    <p className="formSuccess"> Thank you for reaching out! We will get in touch shortly.</p>
                }
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="location">
        <Container>
          <Row>
            <Col xs="12">
              <h2>Location</h2>
              <iframe className="map" title="google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.5667308121015!2d-81.5670241840167!3d30.19236831852281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5cba3fdea53ed%3A0xd886d84e0ba0b9ac!2sRegal%20Avenues!5e0!3m2!1sen!2sus!4v1674797302284!5m2!1sen!2sus"></iframe>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
