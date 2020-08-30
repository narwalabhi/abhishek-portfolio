import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroadcastTower } from "@fortawesome/free-solid-svg-icons";

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
        <Link to="/home">
          <FontAwesomeIcon id="logo" size="2x" icon={faBroadcastTower} />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav className="ml-xl-3">
            <Link className="nav-item nav-link px-3" to={"/home"}>
              Home
            </Link>
          </Nav>
          <Nav className="ml-xl-3">
            <Link className="nav-item nav-link px-3" to={"/projects"}>
              Projects
            </Link>
          </Nav>
          <Nav className="ml-xl-3">
            <Link className="nav-item nav-link px-3" to={"/resume"}>
              Resume
            </Link>
          </Nav>
          <Nav className="ml-xl-3">
            <Link className="nav-item nav-link px-3" to={"/about"}>
              About
            </Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
