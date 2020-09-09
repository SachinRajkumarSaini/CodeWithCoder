import React, { Fragment, Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Container, Figure, Col, Row, Form, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Contactimg from '../Img/Contact/contact-1.png';
import './Contact.css';
import swal from 'sweetalert';

const Contact = () => {
    return (
        <Fragment>
            <Navigation contact="active" />
            <ContactUs />
            <Footer />
        </Fragment>
    );
}

const ContactUs = () => {
    return (<Fragment>
        <Container className="contact-area">
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <Figure>
                        <Image src={Contactimg} className="contact-img" />
                    </Figure>
                </Col>
                <Col lg={6} md={12} sm={12} className="text-area-contact">
                    <h1>Contact US</h1>
                    <h3>We'd love to talk about how we can help you. <span role="img" aria-label="Emoji">🤗🤗</span></h3>
                </Col>
            </Row>
            <Row className="form-title">
                <h1>TELL US ABOUT YOURSELF</h1>
                <p>Whether you have questions or you would just like to say hello, contact us.</p>
            </Row>
            <FormArea />
        </Container>
    </Fragment>);
}

class FormArea extends Component {

    constructor(props) {
        super(props);

        this.state = {

            name: '', email: '', subject: '', phone: '', reason: '', nameerror: '', emailerror: '', subjecterror: '', phoneerror: '', reasonerror: ''
        }
    }


    submit = () => {
        if ((this.state.email.includes('@')) && (isNaN(this.state.name)) && (isNaN(this.state.subject) && (this.state.phone.length === 10 || this.state.phone.length === 11 || this.state.phone.length === 12) && (this.state.reason.length > 2))) {
            swal("Done!", `Thank You ${this.state.name}. We will Contact You Soon.`, "success");
            this.setState({ nameerror: "", emailerror: "", subjecterror: "", phoneerror: "", reasonerror: "" })
        }

        if (this.state.email.includes('@')) {
            this.setState({ emailerror: "" })
        }
        if (isNaN(this.state.name)) {
            this.setState({ nameerror: "" })
        }
        if (isNaN(this.state.subject)) {
            this.setState({ subjecterror: "" })
        }
        if (this.state.phone.length === 10 || this.state.phone.length === 11 || this.state.phone.length === 12) {
            this.setState({ phoneerror: "" })
        }

        if (this.state.reason.length > 2) {
            this.setState({ reasonerror: "" })
        }


        if (!isNaN(this.state.name)) {
            this.setState({ nameerror: "Invalid Name" })
        }
        if (!isNaN(this.state.subject)) {
            this.setState({ subjecterror: "Invalid Subject" })
        }
        if (!this.state.email.includes('@')) {
            this.setState({ emailerror: "Invalid Email" })
        }
        if (this.state.phone.length < 9 || this.state.phone.length > 13) {
            this.setState({ phoneerror: "Invalid Number" })
        }
        if (this.state.reason.length < 2) {
            this.setState({ reasonerror: "Please Type Some Reason :)" })
        }

    }


    render() {

        return (<Fragment>
            <Row >
                <Container className="form-area py-5">
                    <Form >
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <Form.Group>
                                    <Form.Label>Your Full Name</Form.Label>
                                    <Form.Control type="text" name="fullname" onChange={(event) => { this.setState({ name: event.target.value }) }} className="input-area" placeholder="Sachin Rajkumar Saini" ></Form.Control>
                                    <p> {this.state.nameerror} </p>
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <Form.Group>
                                    <Form.Label>Your Email Address</Form.Label>
                                    <Form.Control type="email" name="email" onChange={(event) => { this.setState({ email: event.target.value }) }} className="input-area" placeholder="jackwale@gmail.com" ></Form.Control>
                                    <p> {this.state.emailerror} </p>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <Form.Group>
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" name="subject" onChange={(event) => { this.setState({ subject: event.target.value }) }} className="input-area" placeholder="Web Design" ></Form.Control>
                                    <p> {this.state.subjecterror} </p>
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <Form.Group>
                                    <Form.Label>Your Number</Form.Label>
                                    <Form.Control type="number" name="phone" onChange={(event) => { this.setState({ phone: event.target.value }) }} className="input-area" placeholder="1-800-643-4500" ></Form.Control>
                                    <p> {this.state.phoneerror} </p>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <Form.Group>
                                    <Form.Label>How can we help you?</Form.Label>
                                    <Form.Control as="textarea" name="reason" rows="4" onChange={(event) => { this.setState({ reason: event.target.value }) }} className="input-area" placeholder="Hii, I would like to..." />
                                    <p> {this.state.reasonerror} </p>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                    <div className="btn-area">
                        <Button onClick={() => this.submit()} className="primary-btn-contact mt-5 shadow-none">SUBMIT</Button>
                    </div>
                </Container>
            </Row>
        </Fragment>);
    }
}
export default React.memo(Contact);