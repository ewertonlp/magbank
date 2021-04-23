import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Form, Button } from "react-bootstrap";

import "./AccountModal.scss";

const AccountModal = ({ show, handleClose, auth }) => {
  const history = useHistory();
  const [name, setName] = useState();

  const handleSubmit = () => {
    auth.login(name, '12345', history.push("/dashboard"));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} className="text-center">
      <Modal.Header closeButton>
        <Modal.Title>Abra sua conta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label className="modal-label">Seu nome</Form.Label>
            <Form.Control type="text" placeholder="Seu nome" value={name} onChange={(e) => setName(e.currentTarget.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="modal-label">Seu e-mail</Form.Label>
            <Form.Control type="email" placeholder="Seu e-mail" />
          </Form.Group>

          <Form.Group controlId="formCity">
            <Form.Label
              className="modal-label my-1 mr-2"
              htmlFor="formCitySelect"
            >
              Sua cidade
            </Form.Label>
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="formCitySelect"
              custom
            >
              <option value="0">Mogi das Cruzes - SP</option>
              <option value="1">São Paulo - SP</option>
              <option value="2">Rio de Janeiro - RJ</option>
              <option value="3">Belo Horizonte - MG</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox" className="text-lg-left">
            <Form.Check
              type="checkbox"
              variant="secondary"
              label="Eu li e concordo com os termos de uso."
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button className="modal-btn-criar" onClick={handleSubmit}>
          Criar conta
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AccountModal;
