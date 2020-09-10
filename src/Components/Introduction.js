import React, { Fragment } from 'react';
import './Introduction.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import About from '../Img/about-us.png';
import Resume from '../Img/My-Resume.pdf';

const Introduction = () => {
    return (
        <Fragment>
            <Container className="introduction" fluid>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <Image src={About} className="about-img" fluid />
                    </Col>
                    <Col lg={6} md={12} sm={12} className="text-area-introduction">
                        <h1>
                            <span>Let Me</span>
                            <span>Introduce</span>
                            <span>Myself</span>
                        </h1>
                        <p>My Name is Sachin Rajkumar Saini. I am From Bharuch, Gujarat. I Have Completed My Class 10 & 12 From Gujarat. Now, I am Pursuing Engineering in Infomation Technology From Poornima College of Engineering.</p>
                        <p>I want To Become an Full Stack Developer & Android Developer. Till Now, I Have Completed 5 Projects. Now I am Learning Front-end Development and Next I will Learn Back-end Development.</p>
                        <Button className="primary-btn-introduction shadow-none" href={Resume}>Download CV</Button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default React.memo(Introduction);