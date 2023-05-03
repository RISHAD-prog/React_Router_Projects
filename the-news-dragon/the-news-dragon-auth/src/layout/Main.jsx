import React from 'react';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import RightNavbar from '../RightNavbar/RightNavbar';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col sm={3}><LeftNavbar></LeftNavbar></Col>
                    <Col sm={6}>Main Content coming...</Col>
                    <Col sm={3}><RightNavbar></RightNavbar></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;