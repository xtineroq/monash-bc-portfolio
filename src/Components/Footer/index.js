import React from "react";
import "./style.css";
import { Form, Col } from "react-bootstrap";
import logo from "../../Images/c-logo.png";
import Modal from "../Modal";

function Footer() {

  // submit form useState
  const [state, setState] = React.useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: ""
  });

  // Modal useState
  const [modalShow, setModalShow] = React.useState(false);

  const handleFormSubmit = event => {
    event.preventDefault();

    if (state.name !== "" && state.email !== "" && state.message !== "") {

      setModalShow(true);

    } else {

      setModalShow(false);
      console.log("Please complete all required fields.");

    }
  }

  return (
    <footer className="footer-align this-block" id="contact">
      <div className="container" id="footer-logo">
        <a href="#home">
          <img src={logo} alt="website-logo" width="70" height="70"></img>
        </a>
      </div>

      <div id="contact-section">
        <Form id="contact-form">
          <h3 className="heading-style">LET'S CHAT</h3>

          <div className="contact-text">
            <p>
              Use the contact form below or email{" "}
              <span>mcroque89@gmail.com</span>.
            </p>
          </div>
          <Form.Group>
            <Form.Row className="form-row">
              <Col className="required">
                <Form.Control
                  id="u-name"
                  className="input-field"
                  name="name"
                  type="text"
                  onChange={event => {setState({name: event.target.value})}}
                  placeholder="Your Name*" />
              </Col>
              <Col className="required">
                <Form.Control
                  id="u-email"
                  className="input-field"
                  name="email"
                  type="email"
                  onChange={event => {setState({email: event.target.value})}}
                  placeholder="Your Email*" />
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <Form.Control
                  id="u-phone"
                  className="input-field"
                  name="phone"
                  onChange={event => {setState({phone: event.target.value})}}
                  placeholder="Your Phone" />
              </Col>
              <Col>
                <Form.Control
                  id="u-web"
                  className="input-field"
                  name="website"
                  onChange={event => {setState({website: event.target.value})}}
                  placeholder="Your Website" />
              </Col>
            </Form.Row>

            <Form.Row>
              <Col className="required">
                <Form.Control
                  as="textarea"
                  id="u-msg"
                  name="message"
                  onChange={event => {setState({message: event.target.value})}}
                  placeholder="How can I help you? Please include details about your project.*"
                />
              </Col>
            </Form.Row>

            <Form.Row>
              <button
                className="btn btn-light formBtn"
                id="submitBtn"
                type="button"
                data-toggle="modal"
                data-target="#thankYou"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
              <div id="stop-submit"></div>
            </Form.Row>
          </Form.Group>
        </Form>
      </div>

      {/* Form Submission Modal */}
      <Modal modalShow={modalShow} onHide={() => setModalShow(false)}/>

      <div id="footer-text">
        <p>&copy; MCR. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
