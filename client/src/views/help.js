import axios from "axios";
import React, { useState } from "react";
import { navigate, Link } from "@reach/router";
import { Nav, Navbar, Form, Button } from "react-bootstrap";

const Help = () => {
  return (
    <div>
      <div className="main-container">
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#">Group Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="justify-content-center" navbarScroll>
                <Nav.Link href="/chatrooms">Home</Nav.Link>
                <Nav.Link href="/python">Python</Nav.Link>
                <Nav.Link href="/mern">MERN</Nav.Link>
                <Nav.Link href="/java">Java</Nav.Link>
                <Nav.Link href="/algos">Algos</Nav.Link>
                <Nav.Link href="/help">Help</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
      <h1>Help</h1>
    </div>
  );
};

export default Help;
