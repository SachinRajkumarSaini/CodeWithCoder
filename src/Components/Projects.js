import React, { Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from './Project';
import Grade from '../Img/Projects/Grade.png';
import Music from '../Img/Projects/Music.png';
import Avatar from '../Img/Projects/Avatar.png';
import Birthday from '../Img/Projects/Birthday.png';
import './Projects.css';

const Projects = () => {
    return (
        <Fragment>
            <Container className="projects-area">
                <Row className="text-area">
                    <h1>RECENTLY DONE PROJECT</h1>
                </Row>
                <Row className="projects">
                    <Project src={Grade} name="Grade Calculator" link="https://sachinrajkumarsaini.github.io/Grade_Calculator/" para="Grade Calculator will Find Out Your Total Marks, Percentage & Grade with Final Result." />
                    <Project src={Music} name="Music Player" link="https://sachinrajkumarsaini.github.io/Music_Player/" para="A Simple Music Player For Listening Audio Files With Previous and Next Option." />
                    <Project src={Avatar} name="Avatar Generator" link="https://sachinrajkumarsaini.github.io/Avatar/" para="Avatar Generator Will Generate the Random Avatar By the Name." />
                    <Project src={Birthday} name="Birthday Wish" link="https://sachinrajkumarsaini.github.io/Birthday_Wish/" para="Birthday Wisher With Animation and Song Using Confetti Library." />
                </Row>
            </Container>
        </Fragment>
    );
}

export default React.memo(Projects);