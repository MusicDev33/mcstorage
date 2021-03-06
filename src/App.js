import React, { useState, useEffect } from 'react';

import './App.scss';
import { data } from './data/export';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ItemCard } from './ItemCard';

function App() {
  const max = 60;

  data.sort((a, b) => a.item.localeCompare(b.item));

  const [searchTerm, setSearchTerm] = useState('');
  const [currentData, setCurrentData] = useState(data.slice(0, max));

  useEffect(() => {
    if (searchTerm.toLowerCase() === 'all items') {
      setCurrentData(data);
    } else {
      setCurrentData(data.filter(item => item.item.includes(searchTerm.toLowerCase())).slice(0, max));
    }
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
