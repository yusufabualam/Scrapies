import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Error = () => {
    return (  
    <Container className="text-center" style={{ marginTop: '100px' }}>
      <Row>
        <Col>
          <h1 className="display-4 text-danger">Oops! Page Not Found</h1>
          <p className="lead">The page you are looking for doesn't exist or an error has occurred.</p>
          <Button href="/" variant="primary">
            Go back to the homepage
          </Button>
        </Col>
      </Row>
    </Container>
    );
}
 
export default Error;
