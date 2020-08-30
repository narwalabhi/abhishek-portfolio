import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Projects.css";
const Projects = () => {
  return (
    <div id="projects">
      <article className="project">
        <div className="page-wrap clearfix">
          <div className="project-info">
            <h3 class="project-title">Foliyoo</h3>
            <hr />
            <p className="project-desc">
              I developed an android Application for{" "}
              <a href="https://www.foliyoo.com/">Foliyoo</a>, I was responsible
              for updating and adding new features. Foliyoo is a transport
              (Truck) aggregator to make your Packing Shifting and Moving
              concerns easier. It squeezes the gapes and has been designed an
              efficient platform to shift your materials with just three step
              Filter vehicle, Set ride fare and Choose an appropriate vehicle to
              load products.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.teceads.foliyooDevbrat&hl=en"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="button-checkout">Check Out!</button>
            </a>
            <Container>
              <Row>
                <Col className="col-img" xs={6} md={4}>
                  <img
                    className="image"
                    src={require("../media/foliyoo/login.jpg")}
                    alt="Splash Screen Foliyoo"
                  />
                </Col>
                <Col className="col-img" xs={6} md={4}>
                  <img
                    className="image"
                    src={require("../media/foliyoo/main.jpg")}
                    alt="Splash Screen Foliyoo"
                  />
                </Col>
                <Col className="col-img" xs={6} md={4}>
                  <img
                    className="image"
                    src={require("../media/foliyoo/search.jpg")}
                    alt="Splash Screen Foliyoo"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </article>
      <article className="project">
        <div className="page-wrap clearfix">
          <div className="project-info">
            <h3 class="project-title">Foliyoo Driver</h3>
            <hr />
            <p className="project-desc">
              An android Application for{" "}
              <a href="https://www.foliyoo.com/">Foliyoo</a>, I was responsible
              for designing and adding new features. Foliyoo driver is a digital
              platform where customers, transporter, and driver will be
              communicated and can move their goods easily from pickup point to
              destination point.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.foliyoo.driver&hl=en"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="button-checkout">Check Out!</button>
            </a>
            <Container>
              <Row>
                <Col className="col-img" xs={6} md={4}>
                  <img
                    className="image"
                    src={require("../media/foliyoo-driver/dashboard.jpg")}
                    alt="Splash Screen Foliyoo"
                  />
                </Col>
                <Col className="col-img" xs={6} md={4}>
                  <img
                    className="image"
                    src={require("../media/foliyoo-driver/bookings.jpg")}
                    alt="Splash Screen Foliyoo"
                  />
                </Col>
                <Col className="col-img" xs={6} md={4}>
                  <img
                    className="image"
                    src={require("../media/foliyoo-driver/speed.jpg")}
                    alt="Splash Screen Foliyoo"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </article>
      <article className="project">
        <div className="page-wrap clearfix">
          <div className="project-info">
            <h3 class="project-title">PostApp</h3>
            <hr />
            <p className="project-desc">
              A blog post app where users can post, like, comment, view other
              profiles. It is developed using Firebase (MBaaS) Realtime database
              and Firebase Firestore for real time updates.
            </p>
            <a
              href="https://github.com/narwalabhi/PostApp"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="button-checkout">Check Out!</button>
            </a>
            <Container>
              <Row>
                <Col className="col-img" xs={6} md={4}>
                  <img
                    className="image"
                    src={require("../media/PostApp/posts.jpg")}
                    alt="Splash Screen Foliyoo"
                  />
                </Col>
                <Col className="col-img" xs={6} md={4}>
                  <img
                    className="image"
                    src={require("../media/PostApp/post.jpg")}
                    alt="Splash Screen Foliyoo"
                  />
                </Col>
                <Col className="col-img" xs={6} md={4}>
                  <img
                    className="image"
                    src={require("../media/PostApp/profile.jpg")}
                    alt="Splash Screen Foliyoo"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </article>
      <article className="project">
        <div className="page-wrap clearfix">
          <div className="project-info">
            <h3 class="project-title">Whatsapp Clone</h3>
            <hr />
            <p className="project-desc">
                A whatsapp clone, It is developed using Firebase (MBaaS) Realtime database
              and Firebase Firestore for real time chat updates.
            </p>
            <a
              href="https://github.com/narwalabhi/Whtssapp-clone"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="button-checkout">Check Out!</button>
            </a>
            <Container>
              <Row>
                <Col className="col-img" xs={6} md={4}>
                  <img
                    className="image"
                    src={require("../media/whatsapp-clone/number.jpg")}
                    alt="Splash Screen Foliyoo"
                  />
                </Col>
                <Col className="col-img" xs={6} md={4}>
                  <img
                    className="image"
                    src={require("../media/whatsapp-clone/chat.jpg")}
                    alt="Splash Screen Foliyoo"
                  />
                </Col>
                <Col className="col-img" xs={6} md={4}>
                  <img
                    className="image"
                    src={require("../media/whatsapp-clone/users.jpg")}
                    alt="Splash Screen Foliyoo"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Projects;
