import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="header  mx-auto">
      <Navbar className="navbar p-4 bg-dar" expand="lg">
        <Container className="ms-auto">
          <Navbar.Brand>
            <NavLink to="/csify">
              <img src={logo} alt="" width="150" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-white"
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto tex">
              <Nav className="me-auto mx-5 text-start">
                {/* a link to a custom page  */}
                <Nav.Link
                  className="text-white"
                  href="https://www.selubi.tech/"
                >
                  HOME
                </Nav.Link>
                <Nav.Link
                  className="text-white"
                  href="https://www.selubi.tech/projects"
                >
                  PROJECTS
                </Nav.Link>
                <NavLink to="/csify">CSIFY</NavLink>
                <Nav.Link
                  className="text-white"
                  href="https://www.selubi.tech/articles"
                >
                  ARTICLES
                </Nav.Link>
                <Nav.Link
                  className="text-white"
                  href="https://www.selubi.tech/about"
                >
                  ABOUT
                </Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
