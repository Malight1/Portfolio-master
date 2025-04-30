import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/pavillion.PNG";
import emotion from "../../Assets/Projects/glob.PNG";
import editor from "../../Assets/Projects/easy.png";
import chatify from "../../Assets/Projects/vertex.PNG";
import suicide from "../../Assets/Projects/cyber.PNG";
import bitsOfCode from "../../Assets/Projects/Wallid.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="CyberPay"
              demoLink="https://cyberpay-landing.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Vertex"
              demoLink="https://vertexflex.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Shelf 21 website/Dashboard"
              demoLink="https://www.shelf21.com/"
            />
          </Col>    

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Pavilion Bookings"
              demoLink="https://www.pavilionbookings.com/"
            />
          </Col>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Globfolio"
              demoLink="https://globfolio-landing.netlify.app/"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Easycomp Technologies"
              demoLink="https://easycomp-tech.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
