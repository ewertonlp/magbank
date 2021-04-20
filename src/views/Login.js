import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
import logo from "../assets/magbanklogin.png";

import "./Login.scss";

const Login = () => (
  <section className="login">
    <div className="login__container">
      <Row>
        <Col className="text-center text-light">
          <Image src={logo} className="mb-5" />
          <Form>
            <Form>
              <Form.Group controlId="formBasicNumber">
                <Form.Label className="lead">Número da conta</Form.Label>
                <Form.Control type="number" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label className="lead">Senha</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Link to='/dashboard'>
                <Button className='mt-3' variant='success' type='submit'>
                  Acessar conta
                </Button>
              </Link>
            </Form>
          </Form>
        </Col>
      </Row>
    </div>
  </section>
);

export default Login;
