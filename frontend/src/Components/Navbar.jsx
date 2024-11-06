import React, { useState } from 'react';
import { Container, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const CustomNavbar = () => {
    const [showSearch, setShowSearch] = useState(false); 

    const toggleSearch = () => {
        setShowSearch(!showSearch); 
    };

    return ( 
        <BootstrapNavbar expand="lg" className="navbar">
            <Container>
                <BootstrapNavbar.Brand as={NavLink} to="/home">
                    <img
                        src="/images/Scrapies-2.jpeg"  
                        alt="Scrapies Logo"
                        width="200rem"
                    />
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="navbar-content" />
                <BootstrapNavbar.Collapse id="navbar-content">
                    <Nav className="mx-auto">
                        <Nav.Link as={NavLink} to="/" className="me-4 fs-5">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/shop" className="me-4 fs-5">
                            Shop
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="me-4 fs-5">
                            About Us
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="me-4 fs-5">
                            Contact Us
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto d-flex align-items-center">
                    <div style={{ position: 'relative' }}>
                            {showSearch && (
                                <input 
                                    type="text" 
                                    placeholder="Search..." 
                                    className="form-control" 
                                    style={{
                                        position: 'absolute',
                                        right: '2.5rem', 
                                        width: "200px",
                                        zIndex: 1000
                                    }}
                                />
                            )}
                            <Nav.Link onClick={toggleSearch} style={{ cursor: 'pointer' }}>
                                <i className="fas fa-search fs-5"></i>
                            </Nav.Link>
                        </div>
                        <Nav.Link href="/wishlist" className="ms-3">
                            <i className="far fa-heart fs-5"></i>
                        </Nav.Link>
                        <Nav.Link href="/account" className="ms-3">
                            <i className="far fa-user fs-5"></i>
                        </Nav.Link>
                        <Nav.Link href="/cart" className="ms-3">
                            <i className="fas fa-shopping-cart fs-5"></i>
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default CustomNavbar;
