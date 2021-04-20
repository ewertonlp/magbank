import React from "react";
import { Container, Row, Col, Button, Tabs, Tab, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.scss";

const Dashboard = ({ className = false }) => {
  const latestData = [
    { date: "22/07", description: "Saque 24H 012345", value: "300,00" },
    { date: "21/07", description: "Supermercado 2312332", value: "275,90" },
    { date: "21/07", description: "Estacionamento 123234", value: "15,00" },
    { date: "15/07", description: "Farmácia 242625", value: "124,90" },
  ];
  
  const futureData = [
      { date: "21/08", description: "C CRÉDITO 123234", value: "783,00" },
      { date: "15/08", description: "NETFLIX 2312332", value: "21,90" },
      { date: "10/08", description: "SALÁRIO 012345", value: "3000,00" },
    
  ];

  return (
    <Container className={`dashboard py-5 ${className ? className : ''}`}>
      <Row>
        <Col xs={12} lg={4}>
          <Row className="mb-5">
            <Col xs={3}>
              <span ClassName="dashboard__user-avatar">
                <FontAwesomeIcon icon={faCircle} size="4x" color="#f8f9fa" />
                <FontAwesomeIcon
                  className="dashboard__user-icon"
                  icon={faUser}
                  size="2x"
                  color="#7c7d7d"
                />
              </span>
            </Col>
            <Col xs={9}>
              <h5>Ewerton Lopes Pereira</h5>
              <p className="text-muted">ag: 1234 c/c: 4321-5</p>
            </Col>
          </Row>
          <Col className="d-block">
            <Button
              className="dashboard__button dashboard__button--active text-left"
              variant="link"
              size="lg"
              block
            >
              Minha Conta
            </Button>
            <Button
              className="dashboard__button text-left"
              variant="link"
              size="lg"
              block
            >
              Pagamento
            </Button>
            <Button
              className="dashboard__button text-left"
              variant="link"
              size="lg"
              block
            >
              Extrato
            </Button>
          </Col>
        </Col>
        <Col xs={12} lg={3} className="mt-lg-5 pt-lg-4">
          <h3 className="my-5">Conta Corrente</h3>
          <h6>
            <small>
              <strong>Saldo em conta corrente</strong>
            </small>
          </h6>
          <h4 className="text-success mb-4">
            <small>R$ </small>3.500<small>,00</small>
          </h4>
          <h6>
            <small>
              <strong>Cheque especial</strong>
            </small>
          </h6>
          <p className="mb-0">Limite disponível</p>
          <p className="mb-4">R$ 5.000,00</p>
          <Button variant="secondary">Ver Extrato</Button>
        </Col>
        <Col xs={12} lg={5} className="mt-lg-5">
          <Tabs className="mt-5 pt-lg-5" defaultActiveKey="latest">
            <Tab eventKey="latest" title="Últimos Lançamentos">
              <Table striped borderless>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {latestData.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="future" title="Lançamentos Futuros" >
            <Table  striped borderless>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {futureData.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
