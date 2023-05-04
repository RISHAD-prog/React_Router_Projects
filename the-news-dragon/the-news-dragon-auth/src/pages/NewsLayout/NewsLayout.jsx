import React from 'react';
import { Outlet } from 'react-router-dom';
import RightNavbar from '../../RightNavbar/RightNavbar';
import Header from '../../shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../shared/Footer/Footer';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col sm={9}><Outlet></Outlet></Col>
                    <Col sm={3}><RightNavbar></RightNavbar></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;