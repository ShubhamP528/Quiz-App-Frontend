import React from "react";
import Nav1 from "./NavBar";
import "./LandingPage.css";
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

const LandingPage = () => {
  const { user } = useAuthContext();
  const { subject } = useQuestionhook();

  const { logout } = useLogout();

  const logoutHandler = () => {
    logout();
  };

  return (
    <div>
      <div id="main">
        <div id="main1" className="rounded bg-slate-200">
          <Nav1 />
          {/* <Navbar expand="lg" className="bg-green-400">
            <Container fluid>
              <Navbar.Brand href="#">Logo</Navbar.Brand>
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
                <Nav.Link href="#action3">
                  <Button
                    className="bg-white text-black  hover:bg-green-200"
                    variant="outline-success">
                    Try For Free
                  </Button>
                </Nav.Link>
              </Navbar.Collapse>
            </Container>
          </Navbar> */}
          <div className="flex flex-row ">
            <div className="w-1/2 mt-20">
              <h1 className="text-center font-2xl font-bold  text-pink-500 mt-20">
                Quiz Competition Application
              </h1>

              <p className="ml-5 text-center italic ">
                " Transform your website into an interactive learning hub with
                our captivating quiz competitions. Immerse your audience in the
                excitement of friendly knowledge battles that cater to diverse
                interests. Whether it's general knowledge, skill refinement, or
                exploring niche topics, our customizable platform ensures an
                engaging user experience. Challenge participants, foster a sense
                of community, and make learning fun. Our user-friendly interface
                and seamless integration elevate your website, turning passive
                visits into dynamic, educational adventures. Drive traffic,
                enhance user engagement, and establish your site as a go-to
                destination for both learning and entertainment. Join us in
                creating an enriching online experience for your visitors."
              </p>
            </div>
            <div className="w-1/2">
              <img
                className="h-4/4 ml-24 rounded   mt-16 mw-3/4"
                src="https://img.freepik.com/premium-vector/man-asks-another-one-woman-puts-checkmark-checklist_177517-309.jpg?size=626&ext=jpg&ga=GA1.1.1287577530.1694759978&semt=ais"
                alt=""
                // height={"300rem"}
                // width={"300rem"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
