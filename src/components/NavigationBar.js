import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar
      id="navbar"
      collapseOnSelect
      expand="lg"
      bg="#757575"
      fixed="top"
      variant="dark"
    >
      <Navbar.Brand>
        <Link to={process.env.PUBLIC_URL + '/'}>
          <img id="logo" src="https://res.cloudinary.com/dn13kq97f/image/upload/v1598793092/portfolioo/logo2_u3gxhv.png" alt="logo"/>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav className="ml-xl-3">
            <Link className="nav-item nav-link px-3" to={process.env.PUBLIC_URL + '/'}>
              Home
            </Link>
          </Nav>
          <Nav className="ml-xl-3">
            <Link className="nav-item nav-link px-3" to={process.env.PUBLIC_URL + '/projects'}>
              Projects
            </Link>
          </Nav>
          <Nav className="ml-xl-3">
            <Link className="nav-item nav-link px-3" to={process.env.PUBLIC_URL + '/resume'}>
              Resume
            </Link>
          </Nav>
          <Nav className="ml-xl-3">
            <Link className="nav-item nav-link px-3" to={process.env.PUBLIC_URL + '/about'}>
              About
            </Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
