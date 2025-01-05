import React from 'react'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import logo from "../asserts/logo.jpeg";

function Login() {
  return (
    <div>
         <Container  className="d-flex justify-content-center align-items-center min-vh-100 p-3">
      <Row className="d-flex justify-content-center">
        {/* Illustration Section */}
        <Col xs={12} md={4} className="d-flex justify-content-center align-items-center p-4 " style={{ backgroundColor: 'white', boxShadow: '-4px 0px 10px rgba(0, 0, 0, 0.1)' }} >
          <Image src={logo} alt="Login Illustration" fluid />
        </Col>

        {/* Login Form Section */}
        <Col xs={12} md={5} className="d-flex flex-column justify-content-center p-4" style={{ backgroundColor: 'white', boxShadow: '4px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <h1 className="text-center mb-4" style={{ fontSize: '1.5rem ',}}>Log in to continue your learning journey</h1>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Control type="text" placeholder="Username" required className="mb-3" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control type="password" placeholder="Password" required className="mb-3" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mb-3" style={{ backgroundColor: '#ff6f61',border :"#ff6f61"}}>Login</Button>
          </Form>
          <p className="text-center">
            or <a href="/forgetpassword" style={{ color: '#ff6f61' }}>Forgot Password</a>
          </p>
          <p className="text-center">
            Don't have an account? <a href="./registration" style={{ color: '#ff6f61' }}>Register</a>
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Login