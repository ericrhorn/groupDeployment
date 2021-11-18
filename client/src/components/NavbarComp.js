import React, {Component} from "react";
import { Navbar, Nav } from "react-bootstrap";


export default class NavbarComp extends Component{
    render() {
        return(
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Discord 2.0</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="justify-content-center" navbarScroll>
                    <Nav.Link href="/chatrooms">Home</Nav.Link>
                    <Nav.Link href="/python">Python</Nav.Link>
                    <Nav.Link href="/mern">MERN</Nav.Link>
                    <Nav.Link href="/java">Java</Nav.Link>
                    <Nav.Link href="/algos">Algos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}