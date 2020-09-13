import React, { Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Footer.css';
import Image from 'react-bootstrap/Image';
import facebook from '../Img/icons/facebook.png';
import instagram from '../Img/icons/instagram.png';
import linkedin from '../Img/icons/linkedin.png';
import youtube from '../Img/icons/youtube.png';
import twitter from '../Img/icons/twitter.png';



const Footer = () => {
    return (
        <Fragment>
            <Container className="footer-area" data-aos="slide-right" data-aos-duration="1000" fluid>
                <Row className="text-area">
                    <h2 className="brand-title">CodeWithCoder</h2>
                    <h3>Follow Me</h3>
                    <div className="icons">
                        <a href="https://www.facebook.com/profile.php?id=100011747374303"> <Image src={facebook} className="facebook" data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="1200" fluid /> </a>
                        <a href="https://www.instagram.com/_they_call_me_bunty_/"> <Image src={instagram} className="instagram " data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="1400" fluid /> </a>
                        <a href="https://www.linkedin.com/in/sachin-rajkumar-saini-87a65a1aa"> <Image src={linkedin} className="linkedin" data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="1600" fluid /> </a>
                        <a href="https://www.youtube.com/channel/UClssoj5fX37IVRua_-8ndsw"> <Image src={youtube} className="youtube" data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="1800" fluid /> </a>
                        <a href="https://twitter.com/SachinSaini432?s=09"> <Image src={twitter} className="twitter " data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="1600" fluid /> </a>
                    </div>
                    <p className="para-footer">Copyright © 2020 All rights reserved</p>
                </Row>
            </Container>
        </Fragment>
    );
}

export default React.memo(Footer);