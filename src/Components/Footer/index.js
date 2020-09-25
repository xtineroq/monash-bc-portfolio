import React from 'react';
import "./style.css";
import { Form, Row, Col } from 'react-bootstrap';

function Footer() {

    return (

        <footer class="footer-align this-block">
            <div class="container" id="footer-logo">
                <a href="index.html"><img src="./assets/images/c-logo.png" alt="website-logo" width="70" height="70"></img></a>
            </div>

            <div id="contact-section" class="container">
                <a name="contact"></a>
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-8">
                        <Form>
                            <h6 class="heading-style">LET'S CHAT</h6>
            
                            <div class="contact-text">
                                <p>Use the contact form below or email <span>mcroque89@gmail.com</span>.</p>
                            </div>

                            <Row className="form-row">
                                <Col className="required">
                                    <Form.Control id="u-name" placeholder="Your Name*" />
                                </Col>
                                <Col className="required">
                                    <Form.Control id="u-email" placeholder="Your Email*" />
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col className="required">
                                    <Form.Control id="u-phone" placeholder="Your Phone" />
                                </Col>
                                <Col className="required">
                                    <Form.Control id="u-web" placeholder="Your Website" />
                                </Col>
                            </Row>

                            <Row>
                                <Col className="required">
                                    <Form.Control as="textarea" id="u-msg" placeholder="How can I help you? Please include details about your project." />
                                </Col>
                            </Row>

                            <Row>
                                <button class="btn btn-light" id="submitBtn" type="button" data-toggle="modal" data-target="#thankYou">
                                    Submit
                                </button>
                                <div id="stop-submit"></div>
                            </Row>
                        </Form>
                
                        {/* The Modal */}
                        <div class="modal fade" id="thankYou">
                            <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                            
                                {/* Modal Header */}
                                <div class="modal-header">
                                    <h4 class="modal-title">Thank You!</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                
                                {/* Modal body */}
                                <div class="modal-body">
                                    I will get back to you shortly.
                                </div>
                                
                                {/* Modal footer */}
                                <div class="modal-footer">
                                    <button type="button" id="closeBtn" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>
            <div id="footer-text">
                <p>&copy; MCR. All Rights Reserved.</p>
            </div>
        </footer>

    );
}

export default Footer;