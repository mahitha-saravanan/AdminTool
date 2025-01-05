import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function ForgetPassword() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate the sending of a reset link
    setTimeout(() => {
      setIsLoading(false);
      if (email) {
        setMessage({ type: 'success', text: 'Reset link has been sent to your email.' });
      } else {
        setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      }
    }, 2000);
  };
  return (
    <div>
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="justify-content-center w-100">
        <Col xs={12} md={6} lg={4}>
          <div className="forgot-password-container p-4" style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <h3 className="text-center mb-4">Forgot Password</h3>
            <Form onSubmit={handleSubmit}>
              {/* Email Input */}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {message && (
                  <div id="message" className="mt-2">
                    <Alert variant={message.type === 'error' ? 'danger' : 'success'}>
                      {message.text}
                    </Alert>
                  </div>
                )}
              </Form.Group>

              {/* Reset Button */}
              <div className="d-grid gap-2">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="navy-btn mt-2"
                  style={{ backgroundColor: '#ff6f61',border :"#ff6f61" }}
                >
                  {isLoading ? 'Sending Reset Link...' : 'Send Reset Link'}
                </Button>
              </div>
            </Form>

            <div className="text-center mt-3">
              <p className="mb-1">New here? <a href="/registration" className="text-decoration-none" style={{ color: '#ff6f61' }}>Register</a> </p>
              <p className="mt-2"><a href="/login" style={{ color: '#ff6f61' }}>Back to Login</a></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default ForgetPassword