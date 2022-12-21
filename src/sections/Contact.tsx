import React, { FormEvent, useRef } from "react";
import { Section } from "../components";
import { Row, Col, Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import contact from "../data/contact.json";

import discrdIcon from "../assets/images/discord_icon.svg";
import skypeIcon from "../assets/images/skype_icon.svg";
import whatsappIcon from "../assets/images/whatsapp_icon.svg";

export function Contact() {
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;

  const SendEmail = (e: FormEvent): void => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qvignkf",
        "template_zcw24cm",
        form.current,
        "ync0I_nA_mr7ztoTR"
      )
      .then(
        (result) => {
          // show the user a success message
          console.log(result.text,'success');
        },
        (error) => {
          // show the user an error
          console.log(error.text, 'error');
        }
      );
  };

  return (
    <Section id="contact" title="Get In Touch">
      <Row>
        <Col md={4}>
          <div className="contact-info">
            <h3>{contact.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: contact.subTitle }} />
            <div className="contact-icon mb-4 d-flex align-items-center"><img src={discrdIcon} alt="discord"/>{contact.discord}</div>
            <div className="contact-icon mb-4 d-flex align-items-center"><img src={skypeIcon} alt="skype"/>{contact.skype}</div>
            <div className="contact-icon mb-4 d-flex align-items-center"><img src={whatsappIcon} alt="phone"/>{contact.phone}</div>
          </div>
        </Col>
        <Col md={8}>
          <Form ref={form} onSubmit={SendEmail}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-4" controlId="inputName">
                  <Form.Control
                    type="text"
                    className="kd-form-control"
                    placeholder="Your name"
                    name="user_name"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-4" controlId="inputEmail">
                  <Form.Control
                    type="email"
                    className="kd-form-control"
                    placeholder="Email address"
                    name="user_email"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-4" controlId="inputSubject">
                  <Form.Control
                    type="text"
                    className="kd-form-control"
                    placeholder="Subject"
                    name="subject"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-4" controlId="inputMessage">
                  <Form.Control
                    as="textarea"
                    className="kd-form-control"
                    placeholder="Message"
                    style={{ height: "150px" }}
                    name="message"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button variant="kd" type="submit" value="send">Send Message</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Section>
  );
}

export default Contact;
