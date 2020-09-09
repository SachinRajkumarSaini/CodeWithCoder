import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Navigation.css';

const Navigation = (props) => {
    return (
        <Container className="Navigation" fluid>
            <Navbar expand="lg" fixed="top" bg="white">
                <Navbar.Brand><h1 className="brand-name">CodeWithCoder</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="nav-link mr-4"  href="/"><Nav.Link className={props.home} href="/">Home</Nav.Link></Nav.Link>
                        <Nav.Link className="nav-link mr-4" href="https://github.com/SachinRajkumarSaini/CodeWithCoder.git"><Nav.Link href="https://github.com/SachinRajkumarSaini/CodeWithCoder.git">GitHub</Nav.Link></Nav.Link>
                        <NavDropdown className="mr-4 pt-2" title="Projects" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://github.com/SachinRajkumarSaini/Grade_Calculator.git" className="nav-link-projects">Grade Calculator</NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/SachinRajkumarSaini/Music_Player.git" className="nav-link-projects">Music Player</NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/SachinRajkumarSaini/Avatar.git" className="nav-link-projects">Avatar Generator</NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/SachinRajkumarSaini/Birthday_Wish.git" className="nav-link-projects">Birthday Wish</NavDropdown.Item>
                        </NavDropdown> 
                        <Nav.Link className="nav-link mr-4" href="/about"><Nav.Link className={props.about} href="/about">About</Nav.Link></Nav.Link>      
                        <Nav.Link className="nav-link mr-4" href="/contact"><Nav.Link className={props.contact} href="/contact">Contact</Nav.Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>

    );
}

export default React.memo(Navigation);