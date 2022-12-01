import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Language.css";

const Language = () => {
  return (
    <div className="">
      <h2>This is Language</h2>
    </div>
    // <div className="header">
    //   <Navbar className="navbar" bg="" expand="lg">
    //     <Container>
    //       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="ms-auto">
    //           <Nav className="">
    //             <NavLink to="/home">Home</NavLink>
    //             <NavLink to="/portfolio">Portfolio</NavLink>
    //             <NavLink to="/csify">CSIFY</NavLink>
    //             <NavLink to="/blog">Blog</NavLink>
    //             <NavLink to="/about">About</NavLink>
    //             <NavLink to="/language">Language</NavLink>
    //             <NavLink to="/about">About</NavLink>
    //           </Nav>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </div>
  );
};

export default Language;
