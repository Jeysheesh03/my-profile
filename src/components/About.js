// /src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <Row>
        <Col md={8} className="mx-auto text-center">
          <h1 className="display-5 mb-4">About Me</h1>
          <p>
            I have a background in Computer Science and a passion for coding. I enjoy building projects using modern technologies like React, Node.js, and more. In my free time, I enjoy reading tech blogs, hiking, and learning new skills.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
