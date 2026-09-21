import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <i><b className="purple">Senior Frontend Engineer</b></i> with
              5+ years building enterprise-grade web applications across
              insurance, fintech and SaaS.
              <br />
              <br />I specialise in
              <i>
                <b className="purple"> React.js, Next.js and TypeScript</b>
              </i>
              , and I'm capable across the stack with
              <i>
                <b className="purple"> Node.js, Express and Supabase.</b>
              </i>
              <br />
              <br />
              I've cut frontend bugs by up to 40% and lifted shipping velocity
              by 20%+ through
              <i>
                <b className="purple"> design systems and modular architecture</b>
              </i>
              , and I enjoy mentoring engineers through code reviews.
              <br />
              <br />
              Beyond client work, I build independent products end to end, from
              API and database design through to
              <i>
                <b className="purple"> deployment</b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Malight1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
        
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mubarak-oguntunde-168724193/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            
                          <li className="social-icons">
                <a
                  href="mailto:Oguntunde722@gmail.com"
                  aria-label="Email Mubarak"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
