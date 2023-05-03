import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Q_Zone from '../shared/Q-Zone/Q_Zone';
import bg1 from "../assets/bg1.png";
import "./RightNavbar.css"
const RightNavbar = () => {
    return (
        <div  >
            <div className='mb-3' >
                <h4>Login With </h4>
                <Button variant="outline-primary"> <FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login With Github</Button>
            </div>
            <div className='mb-4' >
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook></FaFacebook> Facebook </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> Twitter </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram></FaInstagram> Instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <Q_Zone></Q_Zone>
            <div className='mt-4' >
                <img className='w-100' src={bg1} alt="" />
                <div className='more_info px-5 text-center' >
                    <h4 className='fs-2' >Create an Amazing Newspaper</h4>
                    <p className='fs-5' >Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='fs-5' variant="danger">Learn More</Button>
                </div>

            </div>
        </div>
    );
};

export default RightNavbar;