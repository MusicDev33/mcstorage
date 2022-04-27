import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ItemCard = ({item}) => {
  return (
    <div className="item-card">
      <Container className="px-2 py-1">
        <Row>
          <Col>
            <div className="title">{item.item.split(' ').map(name => name.charAt(0).toUpperCase() + name.substring(1)).join(' ')}</div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div>
              <span className="category">Wing: </span>{item.wing} <span className="category">Side: </span>{item.side} <span className="category">Pod: </span>{item.pod} 
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
