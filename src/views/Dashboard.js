import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/AccountBalance";
import AccountPayments from '../components/AccountPayments';
import AccountHistory from '../components/AccountHistory';

import "./Dashboard.scss";

const Dashboard = ({ className = false, name, account }) => {
const [ activeLink, setActiveLink ] = useState(0);

const links = [
{ text: 'Minha Conta', path: '/dashboard', exact: true  },
{ text: 'Pagamentos', path: '/dashboard/payments' },
{ text: 'Extrato', path: '/dashboard/history' }
];

  const data = {
    latestBalance: [
      { date: "22/07", description: "SAQUE24H 012345", value: "300,00" },
      { date: "21/07", description: "SUPERMERCADO 2312332", value: "275,90" },
      { date: "21/07", description: "ESTACIONAMENTO 123234", value: "15,00" },
      { date: "15/07", description: "FARMÁCIA 242625", value: "124,90" },
    ],
    futureBalance: [
      { date: "21/08", description: "C CRÉDITO 123234", value: "783,00" },
      { date: "15/08", description: "NETFLIX 2312332", value: "21,90" },
      { date: "10/08", description: "SALÁRIO 012345", value: "3000,00" },
    ],
    history: [
      { date: '17/07', description: 'SAQUE 24H 012345', value: '200,00-', over: '' },
      { date: '17/07', description: 'SALDO DO DIA', value: '', over: '2.780,00' },
      { date: '19/07', description: 'ESTACIONAMENTO 01234', value: '12,00-', over: '' },
      { date: '19/07', description: 'COMPRA INTERNET 123456', value: '450,00-', over: '' },
      { date: '19/07', description: 'SALDO DO DIA', value: '', over: '2.318,00' },
      { date: '21/07', description: 'SUPERMERCADO 987654', value: '275,90', over: '' },
      { date: '21/07', description: 'NETFLIX 242526', value: '12,00-', over: '' },
      { date: '21/07', description: 'CINEMARK 789456', value: '180,00-', over: '' },
      { date: '21/07', description: 'SALDO DO DIA', value: '', over: '1.851,00' },
      { date: '22/07', description: 'FARMÁCIA 242625', value: '275,90-', over: '' },
      { date: '22/07', description: 'DEPÓSITO 147258', value: '1.000,00', over: '' },
      { date: '22/07', description: 'SALDO DO DIA', value: '', over: '2.576,00' },
    ]
  };

  return (
    <Container className={`dashboard py-5 ${className ? className : ""}`}>
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
              <h5>{name}</h5>
              <p className="text-muted">{account}</p>
            </Col>
          </Row>
          {links.map(({text, path, exact }, key) => (
         
            <Link className='dashboard__link' to={path} exact={exact ? exact : false } key={key}>
              <Button
                className={`dashboard__button text-left ${key === activeLink ? 'dashboard__button--active' : ''}`}
                variant="link"
                size="lg"
                block
                onClick={() => setActiveLink(key)}
              >
                {text}
              </Button>
            </Link>
            ))}
          
        </Col>
        <Switch>
          <Route path="/dashboard/history">
            <AccountHistory data={data} />
          </Route>
          <Route path="/dashboard/payments">
            <AccountPayments />
          </Route>
          <Route path="/dashboard">
            <AccountBalance data={data} />
          </Route>
        </Switch>
      </Row>
    </Container>
  );
};

export default Dashboard;
