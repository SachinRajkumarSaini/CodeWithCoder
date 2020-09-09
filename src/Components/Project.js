import React, { Fragment } from 'react';
import {Col, Figure} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './Project.css';

const Project = (props) => {
    return (
        <Fragment>
            <Col lg={4} md={6} sm={12} className="project-area">
                <Figure>
                    <Image src={props.src} fluid />
                </Figure>
                <h3 className="project-title"><a href={props.link}>{props.name}</a></h3>
                <p className="project-para">{props.para}</p>
            </Col>
        </Fragment>
    );
}

export default React.memo(Project);