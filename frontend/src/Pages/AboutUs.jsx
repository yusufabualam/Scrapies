import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUs = () => {
    return ( 
        <Container fluid>
        {/* First Section */}
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={4} className="my-3 mx-3">
            <Image
              src="/images/handmade-papers.jpeg"
              alt="handmade-papers"
              fluid
              style={{ height: '30rem' }}
            />
          </Col>
          <Col md={6} className="my-3 mx-3 p-2 text-center">
            <h2 className="mb-5 font title-text">Who We Are?</h2>
            <p className="fs-5">
              We are 6 cousins working on a project to create Eco-friendly scrapbooks and artistic materials. <br />
              We are very passionate about art and have creative and crafty minds. <br />
              We're generally the organized hoarder kind of people and we're into upcycling and memory collection.
            </p>
          </Col>
        </Row>
  
        {/* Second Section */}
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={6} className="my-3 mx-3 p-2 text-center">
            <h2 className="mb-5 font title-text">What Do We Offer?</h2>
            <p className="fs-5">
              We offer scrapbooking, notebook binding, personalized and nostalgic stickers. <br />
              We can also customize your scrapies box from A to Z, reuse found/kept scraps aesthetically, <br />
              and finally, we personally upcycle papers. Together, we can help you preserve your memories in a nature-friendly way.
            </p>
          </Col>
          <Col md={4} className="mx-3 my-3">
            <Image
              src="/images/scrapies-box.jpeg"
              alt="scrapies-box"
              fluid
              style={{ height: '30rem' }}
            />
          </Col>
        </Row>
  
        {/* Third Section */}
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={4} className="my-3 mx-3">
            <Image
              src="/images/wedding-guestbook.jpeg"
              alt="wedding-guestbook"
              fluid
              style={{ height: '30rem' }}
            />
          </Col>
          <Col md={6} className="my-3 mx-3 p-2 text-center">
            <h2 className="mb-5 font title-text">Our Goals</h2>
            <p className="fs-5">
              Our main goal is to allow people to create personalized content while minimizing waste. <br />
              We care about being able to express your creative side in a fun and inspiring manner. <br />
              We value giving seemingly unusable items life and allowing for a new cycle to be born. <br />
              We'd also love to give you a chance to have all your needed tools and supplies to start your own scrapbook/journal by customizing your suitable box of Scrapies.
            </p>
          </Col>
        </Row>
      </Container> 
     );
}
 
export default AboutUs;

