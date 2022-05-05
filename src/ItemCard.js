import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';

import { imgNames } from './data/img-names';

export const ItemCard = ({item}) => {
  const key = item.item.replaceAll(' ', '_');
  const img = key in imgNames ? imgNames[key] : key;

  return (
    <div className="item-card">
      <Container className="px-2 py-2">
        <Row>
          <Col xs={2}>
            <Image fluid src={`/img/${img}.png`} />
          </Col>
          <Col className="ps-0">
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
