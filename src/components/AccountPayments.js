import React from "react";
import { Col, Button, Tabs, Tab, Form } from "react-bootstrap";

const AccountPayments = () => (
  <>
    <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
      <h3 className="mt-4">Pagamentos</h3>
      <Tabs className="mt-5 pt-lg-5" defaultActiveKey="latest">
        <Tab eventKey="boleto" title="Boleto">
          <Form>
            <Form.Group controlId="formBarCode" className="my-5">
              <Form.Label>Código de Barras</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insira aqui o código de barras"
              />
            </Form.Group>
            <Form.Group controlId="formPaymentType" className="mb-5">
              <Form.Label>Forma de Pagamento</Form.Label>
              <div className="d-flex">
                <Form.Check
                  type="radio"
                  id="debit"
                  label="Débito em Conta Corrente"
                  name="paymentType"
                />

                <Form.Check
                  type="radio"
                  id="credit"
                  className="ml-4"
                  label="Cartão de Crédito"
                  name="paymentType"
                />
              </div>
            </Form.Group>

            <Button variant="success">Continuar</Button>
          </Form>
        </Tab>
        <Tab eventKey="transfer" title="Transferência">
          <Form>
            <Form.Row className="mt-5">
              <Form.Group as={Col} controlId="formGridBank" >
                <Form.Label>Banco</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Selecione</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAgency" className="ml-lg-5">
                <Form.Label>Agência</Form.Label>
                <Form.Control type='number' />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAccount" className="ml-lg-5">
                <Form.Label>Conta Corrente</Form.Label>
                <Form.Control type='number' />
              </Form.Group>
            </Form.Row>

            <Form.Row className="mt-5">

              <Form.Group as={Col} controlId="formGridValue" >
                <Form.Label>Valor</Form.Label>
                <Form.Control type='number' />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridId" className="ml-3">
                <Form.Label>Identificação</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
            </Form.Row>
          </Form>
        </Tab>
      </Tabs>
    </Col>
  </>
);

export default AccountPayments;
