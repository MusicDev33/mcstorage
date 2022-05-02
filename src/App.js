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
  }, [searchTerm]);

  return (
    <div className="app">
      <Container fluid>
        <Row className="justify-content-center pt-2 pb-1 search-container fixed-top">
          <Col sm={6} className="px-4">
            <input className="search-bar" placeholder='Search' value={searchTerm}
              onChange={e => {
                setSearchTerm(e.target.value);
            }} />
          </Col>
        </Row>
        <Row className="pt-5 mt-3 item-container">
          {currentData.map((item, index) => (
            <Col sm={6} md={4} lg={3}>
              <ItemCard item={item} key={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
