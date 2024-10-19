// /src/components/SubmissionSuccess.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function SubmissionSuccess() {
  const location = useLocation();
  const { name, email, message } = location.state || {};

  return (
    <Container className="text-center">
      <h1 className="display-6">Thank You, {name}!</h1>
      <p>Your message has been successfully sent.</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
    </Container>
  );
}

export default SubmissionSuccess;
