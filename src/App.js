import React, { useState, useEffect } from 'react';

import './App.scss';
import { data } from './data/export';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ItemCard } from './ItemCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentData, setCurrentData] = useState(data);

  useEffect(() => {
    setCurrentData(data.filter(item => item.item.includes(searchTerm)));
  })

  return (
    <div className="app">
      <Container fluid>
        <Row className="justify-content-center pt-3">
          <Col sm={6}>
            <input className="search-bar" placeholder='Search' value={searchTerm}
              onChange={e => {
                setSearchTerm(e.target.value);
            }} />
          </Col>
        </Row>
        <Row className="mt-3">
          {currentData.map((item, index) => (
            <Col sm={3}>
              <ItemCard item={item} key={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
