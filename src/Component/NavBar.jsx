import React from 'react'
import './NavBar.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
            <Navbar.Brand to="#">Logo</Navbar.Brand>   
            <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Link to="/home">Home</Link>
                  <Link to="#action2">About</Link>
                  <Link to="#action2">Service</Link>
                  <Link to="#action2">Contact Us</Link>
                  <Link to="#action2">FAQ</Link>
                </Nav>
                <Link className='login' to="/login">Login</Link>
                 <Link to="#action3"><Button variant="outline-success">Try For Free</Button></Link> 
              </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar



