import React from 'react';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import RightNavbar from '../RightNavbar/RightNavbar';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../shared/NavigationBar/NavigationBar';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col sm={3}><LeftNavbar></LeftNavbar></Col>
                    <Col sm={6}><Outlet></Outlet></Col>
                    <Col sm={3}><RightNavbar></RightNavbar></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;