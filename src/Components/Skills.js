import React, { Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Skills.css';
import Html5 from '../Img/Skills/html-img.png';
import Css3 from '../Img/Skills/css3.png';
import Javascript from '../Img/Skills/Javascript.png';
import ReactJS from '../Img/Skills/React.png';
import Node from '../Img/Skills/node.png';
import Mongodb from '../Img/Skills/Mongodb.png';
import Bootstrap from '../Img/Skills/Bootstrap.png';
import MySql from '../Img/Skills/MySql.png';
import Skill from './Skill';

const Skills = () => {
    return (
        <Fragment>
            <Container>
                <Row className="text-area" data-aos="fade-down" data-aos-duration="1000">
                    <h1 className="text-center">Skills</h1>
                    <p className="mt-3 text-center">Passionate Programmer | Web Developer | Android Developer | Coder</p>
                </Row>
                <Row className="skills-area" data-aos="fade-up" >
                    <Skill src={Html5} skill="HTML5" para="HTML5 is a Hyper Text Markup Language. It is the Fifth and Latest Major Version of HTML." />
                    <Skill src={Css3} skill="CSS3" para="Cascading Style Sheet(CSS) is Used to Set the Style in Web Pages that contain HTML elements." />
                    <Skill src={Javascript} skill="Javascript" para="JavaScript is a Scripting or Programming Language that allows you to implement Complex Features on Web Pages." />
                    <Skill src={ReactJS} skill="React JS" para="React is an open-source JavaScript library for Building User Interfaces or UI Components." />
                    <Skill src={Node} skill="Node JS" para="Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser." />
                    <Skill src={Mongodb} skill="MongoDB" para="MongoDB is a Document-Oriented NoSQL Database used for High Volume Data Storage." />
                    <Skill src={Bootstrap} skill="Bootstrap" para="Bootstrap is the Open-source CSS Framework Directed at Responsive, Mobile-first Front-end Web Development." />
                    <Skill src={MySql} skill="MySql" para="MySQL is a Relational Batabase Management System (RDBMS) based on the SQL (Structured Query Language) Queries." />
                </Row>
            </Container>
        </Fragment>
    );
}

export default React.memo(Skills);