import React, { Fragment } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Container, Row, Figure, Col } from 'react-bootstrap';
import './About.css';
import Aboutimg from '../Img/About/Aboutimg.png';
import Image from 'react-bootstrap/Image';

const About = () => {
    return (
        <Fragment>
            <Navigation about="active" />
            <AboutUs />
            <Footer />
        </Fragment>
    );
}

const AboutUs = () => {
    return (
        <Fragment>
            <Container className="contact-area" >
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <Figure>
                            <Image src={Aboutimg} className="about-img" fluid />
                        </Figure>
                    </Col>
                    <Col lg={6} md={12} sm={12} className="text-area-about">
                        <span className="about-title pt-4">About US</span>
                        <p className="pt-3">
                            Welcome to CodeWithCoder, This is Portfolio Website and this Website is Created By Using HTML5, CSS3, Javascript, Bootstrap, Tachyons and React JS.
                            In this Website I Showed My Skills, Interest and Till Now Total Projects. You Can Contact Me Using the Below Social Handles. For More Information You Can Mail Me at Sachinrajkumarsaini2002@gmail.com
                            <br /> <br />
                            Sincerely,<br />
                            [Sachin Rajkumar Saini]
                        </p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}



export default React.memo(About);