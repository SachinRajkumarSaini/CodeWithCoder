import React, { Fragment } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Banner from '../Img/banner-image.png';
import './Header.css';

const Header = () =>{
    return(
        <Fragment>
            <Container className="header-area"  fluid>
                <Row>
                    <Col className="text-area-banner" lg={6} md={12} sm={12}>
                        <h1>Hey</h1>
                        <span>I Am Sachin</span>
                        <h4>Full Stack Web Developer</h4>
                        <Button variant="primary" className="primary-btn-banner shadow-none" href="./contact" >Hire Me</Button>
                        <Button variant="primary" className="secondary-btn-banner shadow-none">Get CV</Button>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <Image src={Banner} className="banner-img" fluid />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default React.memo(Header);