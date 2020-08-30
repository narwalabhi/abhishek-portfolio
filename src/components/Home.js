import React from "react";
import "./Home.css";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Jumbotron id="jumbo">
        <h1>Abhishek Narwal</h1>
        <p>
          I'm an Android Developer  focused
          on creating clean & user‑friendly applications with a hunger to learn more.
        </p>
        <Link to="/projects">
          <Button id="btnProject" variant="secondary">
            My Work
          </Button>
        </Link>
      </Jumbotron>
    </div>
  );
};

export default Home;
