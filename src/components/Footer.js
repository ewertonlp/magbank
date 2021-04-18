import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/magbank.png";
import applestore from "../assets/apple-store.png";
import googleplay from "../assets/google-play.png";

import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="text-center py-5">
        <Col xs={12} lg={6} className="text-lg-left my-4">
          <Image src={logo} />
        </Col>
        <Col xs={12} lg={4} className="my-4">
          <Image src={applestore} />
          <Image src={googleplay} className="ml-2" />
        </Col>
        <Col
          xs={12}
          lg={2}
          className="d-flex align-items-center justify-content-center"
        >
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              color="#7C7C7C"
              size="2x"
            />
          </a>
          <FontAwesomeIcon
            icon={faTwitter}
            color="#7C7C7C"
            size="2x"
            className="ml-2"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            color="#7C7C7C"
            size="2x"
            className="ml-2"
          />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
