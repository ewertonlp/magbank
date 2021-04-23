import React from 'react';
import { Col, Table } from 'react-bootstrap';

import './AccountHistory.scss';

const AccountHistory = ({ data }) => {
    const { history } = data;

    return (
        <Col xs={11} lg={8} className="mt-lg-5 pt-lg-5">
            <h3 className='mt-4'>Extrato Conta Corrente</h3>
            
            <Table className='history__table' striped borderless responsive='sm'>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor (R$)</th>
                  <th>Saldo (R$)</th>
                </tr>
              </thead>
              <tbody>
                {history.map(({ date, description, value, over }) => (
                  <tr>
                    <td>{date}</td>
                    <td>{description}</td>
                    <td>{value}</td>
                    <td>{over}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
              
        </Col>

    )
};

export default AccountHistory;