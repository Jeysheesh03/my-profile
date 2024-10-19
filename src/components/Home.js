// /src/components/Home.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container className="text-center">
      <h1 className="display-4">Welcome to My Profile!</h1>
      <p className="lead">I'm Jhon Carl Mangabat, a web developer focused on building user-centric web experiences.</p>
      <Button variant="primary" size="lg" className="mt-3">Explore My Work</Button>
    </Container>
  );
}

export default Home;
