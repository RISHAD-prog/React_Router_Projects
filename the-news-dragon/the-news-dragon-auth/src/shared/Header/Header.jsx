import React from 'react';
import logo from "../../assets/logo.png"
import moment from 'moment/moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
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


        </Container>
    );
};

export default Header;