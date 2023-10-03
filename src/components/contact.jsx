import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const AppContact = () => {
    return (
        <section id="contact" className="block contact-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Contact Us</h2>
                    <div className="subtitle">get connected with us</div>
                </div>
                <Form className="contact-form">
                    <Row>
                        <Col sm={4}>
                            <Form.Control
                                placeholder="Enter your full name"
                                type="text"
                                required
                            />
                        </Col>
                        <Col sm={4}>
                            <Form.Control
                                placeholder="Enter your email address"
                                type="email"
                                required
                            />
                        </Col>
                        <Col sm={4}>
                            <Form.Control
                                placeholder="Enter your contact number"
                                type="tel"
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control
                                as="textarea"
                                placeholder="Enter your message"
                            />
                        </Col>
                    </Row>
                    <div className="btn-holder">
                        <Button type="submit" variant="primary">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Container>

            <div className="google-map">
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143005.83894162672!2d-3.3701423330761493!3d55.941290665006214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887b800a5982623%3A0x64f2147b7ce71727!2sEdimburgo%2C%20Regno%20Unito!5e0!3m2!1sit!2sit!4v1696327886559!5m2!1sit!2sit"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <Container fluid>
                <div className="contact-info">
                    <ul>
                        <li>
                            <i className="fas fa-envelope"></i>
                            hello@domain.com
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            000-000-0000
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            Edinburgh, United Kingdom
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default AppContact;
