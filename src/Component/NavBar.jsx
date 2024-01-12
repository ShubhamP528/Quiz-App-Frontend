import React from "react";
import "./NavBar.css";
import { useLogout } from "../hooks/useLogout";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuthContext } from "../GlobleContext/AuthContext";
// import { useAppContext } from '../GlobleContext/AppContext';
import { useQuestionhook } from "../hooks/useQuestion";
import toast from "react-hot-toast";

function NavBar() {
  const { user } = useAuthContext();
  // const {subject}=useQuestionhook()
  const { logout } = useLogout();

  const logoutHandler = () => {
    logout();
  };
  return (
    <div className="bg-green-400">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand to="#">
            <img
              className="h-10 w-15 rounded cursor-pointer "
              src="https://img.freepik.com/premium-vector/quiz-symbol-neon-illustration-night-isolated-design-elements_168425-181.jpg?size=626&ext=jpg&ga=GA1.1.1287577530.1694759978&semt=ais"
              alt="random"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Link className="link" to="/home">
                Home
              </Link>
              {user && (
                <>
                  <Link className="link" to="/addQuestion">
                    create A quiz
                  </Link>
                  <Link className="link" to="/createQuize">
                    questionList
                  </Link>
                </>
              )}
            </Nav>
            {user && (
              <Nav>
                <Link className="link">{user.username}</Link>{" "}
                <Link onClick={logoutHandler} className="link">
                  Logout
                </Link>
              </Nav>
            )}
            {!user && (
              <Nav>
                <Link className="link" to="/logSig">
                  Login/Sigin
                </Link>
              </Nav>
            )}
            <Link className="try" to="#action3">
              <Button variant="outline-success">Try For Free</Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
