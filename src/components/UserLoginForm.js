import { useState } from "react";
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button, ModalFooter } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateUserLoginForm } from "../utils/validateUserLoginForm";
import "../css/UserForm.css";

const UserLoginForm = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const [loggedinUser, setloggedinUser] = useState({});
  const [formSubmitErrors, setformSubmitErrors] = useState({
    password: ''
  });

  /*const [userData, setUserData] = useState([]);
  useEffect(() =>{
    fetch("https://nucamp-nodejs.onrender.com/api/movies")
    .then(response => response.json())
    .then(data => setUserData(data))
  },[]);*/
  
  const handleLogin = async (values) => {
    const response = await fetch("http://localhost:3030/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });
    const jsonData = await response.json();
      console.log(jsonData.username);
      setloggedinUser(jsonData);
      setLoginState(true);
      setLoginModalOpen(false);
  };

  const handleLogout = () => {
    setloggedinUser({});
    setLoginState(false);
    setLoginModalOpen(false);
  }

  const register = async () => {
    const response = await fetch("https://nucamp-nodejs.onrender.com/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username:document.querySelector(`.username`).value,password:document.querySelector(`.password`).value})
    });
  }

  return (
    <>
      <span className="navbar-text">
        {loginState ? (
          <>
            <Button outline onClick={() => setLoginModalOpen(true)} style={{ color: "white", border: "1px solid white" }}>
              {loggedinUser.username}
            </Button>
            <Modal isOpen={loginModalOpen}>
              <ModalHeader toggle={() => setLoginModalOpen(false)}>Hello {loggedinUser.username}</ModalHeader>
              <ModalBody>
                  <h2>Movie Points:</h2>
                  <p>{loggedinUser.points} Points</p> 
              </ModalBody>
              <ModalFooter><button onClick={handleLogout} className="btn logout">Log Out</button></ModalFooter>
            </Modal>
          </>
        ) : (
          <>
            <Button outline onClick={() => setLoginModalOpen(true)} style={{ color: "white", border: "1px solid white" }}>
              <i className="fa fa-sign-in fa-lg" /> Login
            </Button>
            <Modal isOpen={loginModalOpen}>
              <ModalHeader toggle={() => setLoginModalOpen(false)}>Use 'Guest' and 'Guest'</ModalHeader>
              <ModalBody>
                <Formik initialValues={{ username: "", password: "" }} onSubmit={handleLogin} validate={validateUserLoginForm}>
                  <Form>
                    <FormGroup>
                      <Label htmlFor="username">Username</Label>
                      <Field id="username" name="username" placeholder="Username" className="form-control username" />
                      <ErrorMessage name="username">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="password">Password</Label>
                      <Field id="password" name="password" placeholder="Password" className="form-control password" type="password" />
                      <ErrorMessage name="password">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
                      <p className="text-danger">{formSubmitErrors.password}</p>
                    </FormGroup>
                    <Button type="submit" className="formSubmit">
                      Login
                    </Button>
                    <Button type="submit" className="formRegister" onClick={register} >
                      Register
                    </Button>
                  </Form>
                </Formik>
              </ModalBody>
            </Modal>
          </>
        )}
      </span>
    </>
  );
};

export default UserLoginForm;
