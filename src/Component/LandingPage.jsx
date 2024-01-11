import React from 'react';
import './LandingPage.css';
import { useLogout } from '../hooks/useLogout';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../GlobleContext/AuthContext';
// import { useAppContext } from '../GlobleContext/AppContext';
import { useQuestionhook } from '../hooks/useQuestion';
import toast from 'react-hot-toast';

const LandingPage = () => {

  const {user}=useAuthContext()
  const {subject}=useQuestionhook()

  const {logout}=useLogout()

  const logoutHandler=()=>{
    logout()
  }

    return (
        <div>
            <div id="main">
                <div id="main1">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                    <Navbar.Brand href="#">Logo</Navbar.Brand>   
                    <Navbar.Toggle aria-controls="navbarScroll" />
                      <Navbar.Collapse id="navbarScroll">
                        <Nav
                          className="me-auto my-2 my-lg-0"
                          style={{ maxHeight: '100px' }}
                          navbarScroll
                        >
                          <Link className='link' to="/home">Home</Link>

                          {
                            user &&
                            <>
                             <Link className='link'   to="/addQuestion">create A quiz</Link>
                             <Link className='link'   to="/createQuize">questionList</Link>
                             </>
                          }
                          
                        </Nav>
                        {user && (
                          <Nav>
                        <Link className='link'>{user.username}</Link> <Link onClick={logoutHandler} className='link'>Logout</Link>
                         </Nav>
                        )}  
                        {!user && (
                          <Nav>
                            <Link className='link' to="/logSig">Login/Sigin</Link>
                         </Nav>
                        )}
                        <Nav.Link href="#action3"><Button variant="outline-success">Try For Free</Button></Nav.Link> 
                      </Navbar.Collapse>
                    </Container>
                </Navbar>
                <h1>Online Test</h1>
                <h2>Landing Page</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>Deleniti soluta dolor et accusamus quo amet delectus <br/>pariatur vero, vitae debitis!</p>
                <img  className='Img1' src="https://img.freepik.com/free-photo/online-survey-3d-render-laptop-form-with-ticks_107791-15911.jpg?w=1060&t=st=1701773507~exp=1701774107~hmac=11ad574f4da2e5cbffbe2e0a4cdf5bbbe2451254d00df697e4749cc640a8de43" alt="" height={"300rem"}/>
                <Nav.Link className='try_btn' href="#action3"><Button variant="outline-success">Get Started</Button></Nav.Link> 
    </div>
</div>
</div>
    );
}

export default LandingPage;
