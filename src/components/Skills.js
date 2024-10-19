// /src/components/Skills.js
import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function Skills() {
  return (
    <Container>
      <Row>
        <Col md={8} className="mx-auto text-center">
          <h1 className="display-5 mb-4">My Skills</h1>
          <ListGroup variant="flush">
            <ListGroup.Item>JavaScript</ListGroup.Item>
            <ListGroup.Item>React.js</ListGroup.Item>
            <ListGroup.Item>CSS/SCSS</ListGroup.Item>
            <ListGroup.Item>Node.js</ListGroup.Item>
            <ListGroup.Item>Bootstrap</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
