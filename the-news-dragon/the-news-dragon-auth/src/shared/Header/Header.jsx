import React from 'react';
import logo from "../../assets/logo.png"
import moment from 'moment/moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <Container  >
            <div className='text-center' >
                <img src={logo} alt="logo" />
                <p className='text-secondary fs-4' ><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
            </div>
            <div className='d-flex bg-light my-4 fs-3' >
                <Button variant="danger">Latest</Button>
                <Marquee speed={90} play pauseOnHover >
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar className='mb-4' expand="lg">
                <Container  >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto fs-5">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Career</Nav.Link>
                        </Nav>
                        <Nav className='align-items-center' >
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="dark">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;