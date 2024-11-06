import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <Container>
            <h1 className="fw-bold mb-3">Contact Us</h1>
            <p className="fs-5 fw-semibold">
                We're here to help! Whether you have a question about our products, need assistance with an order,
                <br />
                or just want to say hello, we'd love to hear from you. Let's get in touch!
            </p>
            <Row>
                <Col md={6}>
                    <h3 className="fw-bold my-3">
                    <i className="fas fa-envelope" style={{ fontSize: '2.2rem' }}></i> { } 
                        Email: <span>
                            <a 
                                className="fs-3 fw-semibold link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" 
                                href="mailto:scrapies.eg@gmail.com"
                            >
                                scrapies.eg@gmail.com
                            </a>
                        </span>
                    </h3>
                    <h3 className="fw-bold my-3">
                        or contact us through DM on Instagram. <br /> Scan now!
                    </h3>
                    <img 
                        src="/images/QR Code (png).png" 
                        alt="Instagram QR Code" 
                        className="w-50" 
                    />
                </Col>
                <Col md={6}>
                    {/* Placeholder for additional content or a form if needed */}
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;
