import React, { Fragment } from 'react';
import { Figure, Col, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './Skill.css';
import "tachyons";

const Skill = (props) => {
    return (
        <Fragment>
            <Col lg={3} md={4} sm={6} xs={12} className="skills-area mt-5" >
                <Card className="skills grow" data-aos="zoom-in" data-aos-duration="700">
                    <div className="skill-img">
                        <Figure>
                            <Image src={props.src} fluid />
                        </Figure>
                    </div>
                    <h1 className="skill-title">{props.skill}</h1>
                    <p className="skill-para">{props.para}</p>
                </Card>
            </Col>
        </Fragment>
    );
}

export default React.memo(Skill);