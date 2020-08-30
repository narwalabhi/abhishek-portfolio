import React from "react";
import "./About.css";
import { Col, Row } from "react-bootstrap";
import SkillsChart from './SkillsChart'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHackerrank,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about-div">
      <Row>
        <Col className="about-col" xs={8} md={6}>
          <div>
            <h1>about me</h1>
            <p className="intro">
              I'm a B.Tech CSE Student and an Android App Developer based in
              India.
            </p>
            <p className="about-desc">
              I enjoy turning complex ideas into simple apps and learn new
              skills. When I'm not working, you'll find me watching sports or
              playing FIFA. Also I'm a die hard Manchester United fan!
            </p>
            <p>
              <a className="contact-icon"  href="https://github.com/narwalabhi">
                <FontAwesomeIcon icon={faGithub} size="3x"/>
              </a>
              <a className="contact-icon" href="https://www.hackerrank.com/anarwal500">
                <FontAwesomeIcon icon={faHackerrank} size="3x"/>
              </a>
              <a className="contact-icon" href="https://www.linkedin.com/in/anarwal500/">
                <FontAwesomeIcon icon={faLinkedin} size="3x"/>
              </a>
              <a className="contact-icon" href="mailto:anarwal500@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="3x"/>
              </a>
              <a className="contact-icon" href="https://www.facebook.com/abhishek.narwal.16/">
                <FontAwesomeIcon icon={faFacebook} size="3x"/>
              </a>
            </p>
          </div>
        </Col>
        <Col className="about-col" xs={8} md={6}>
          <img
            className="about-img"
            src={require("../media/about.jpg")}
            alt="My pic"
          ></img>
        </Col>
      </Row>
      <div className="skills-div">
        <h2 id="title-myskills">My Skills</h2>
        <SkillsChart/>
      </div>
    </div>
  );
};

export default About;
