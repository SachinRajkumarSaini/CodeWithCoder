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
            <Container className="footer-area" fluid>
                <Row className="text-area">
                    <h2 className="brand-title">CodeWithCoder</h2>
                    <h3>Follow Me</h3>
                    <div className="icons">
                        <a href="https://www.facebook.com/profile.php?id=100011747374303"> <Image src={facebook} className="facebook" fluid /> </a>
                        <a href="https://instagram.com/vidmax_official?igshid=viuj6itgxf0p"> <Image src={instagram} className="instagram " fluid /> </a>
                        <a href="https://www.linkedin.com/in/sachin-rajkumar-saini-87a65a1aa"> <Image src={linkedin} className="linkedin " fluid /> </a>
                        <a href="https://www.youtube.com/channel/UClssoj5fX37IVRua_-8ndsw"> <Image src={youtube} className="youtube" fluid /> </a>
                        <a href="https://twitter.com/SachinSaini432?s=09"> <Image src={twitter} className="twitter " fluid /> </a>
                    </div>
                    <p className="para-footer">Copyright © 2020 All rights reserved</p>
                </Row>
            </Container>
        </Fragment>
    );
}

export default React.memo(Footer);