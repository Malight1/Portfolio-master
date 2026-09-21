import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aero from "../../Assets/Projects/aero.jpg";
import adaptonia from "../../Assets/Projects/adaptonia.jpg";
import atlas from "../../Assets/Projects/atlas.jpg";
import stockflow from "../../Assets/Projects/stockflow.jpg";
import aafuoye from "../../Assets/Projects/aafuoye.jpg";
import editor from "../../Assets/Projects/easy.png";
import chatify from "../../Assets/Projects/vertex.PNG";
import suicide from "../../Assets/Projects/cyber.PNG";
import bitsOfCode from "../../Assets/Projects/shelf.png";
import tobi from "../../Assets/Projects/tobi.png";

const projects = [
  {
    imgPath: stockflow,
    title: "StockFlow",
    tag: "Sales & Inventory App",
    description:
      "Sales and inventory platform with real FIFO costing, profit dashboards, WhatsApp invoices and a point of sale that keeps working offline.",
    demoLink: "https://jokesan-sales-app.vercel.app/",
  },
  {
    imgPath: aafuoye,
    title: "AAFUOYE",
    tag: "Community Platform",
    description:
      "Website for the Federal University Oye-Ekiti alumni association, with community, transcript requests, donations and news updates.",
    demoLink: "https://www.aafuoye.online/",
  },
  {
    imgPath: atlas,
    title: "Atlas Africa",
    tag: "Agency Website",
    description:
      "Conversion-focused website for a performance marketing agency, built around a free strategy call booking flow.",
    demoLink: "https://atlasafrica.org/",
  },
  {
    imgPath: suicide,
    title: "CyberPay",
    tag: "Fintech",
    description:
      "Landing page for a CBN-licensed payments app, presenting flexible payment options and app downloads.",
    demoLink: "https://cyberpay-landing.netlify.app/",
  },
  {
    imgPath: adaptonia,
    title: "Adaptonia",
    tag: "SaaS Platform",
    description:
      "Founder portal that guides startups through a staged roadmap from clarity to launch, with expert discovery, collaboration and escrow-protected payments.",
    demoLink: "http://adaptonia-web.vercel.app/",
  },
  {
    imgPath: aero,
    title: "Aero AI Systems",
    tag: "AI Automation",
    description:
      "Marketing site for an AI voice and SMS receptionist that answers calls, texts back prospects and books appointments 24/7.",
    demoLink: "https://www.aeroaisystems.com/",
  },
  {
    imgPath: chatify,
    title: "Vertex Flex Ltd",
    tag: "Business Website",
    description:
      "Corporate website for a construction and roof installation company, with services, gallery and quote requests.",
    demoLink: "https://vertexflex.com/",
  },
  {
    imgPath: bitsOfCode,
    title: "Shelf 21 Website & Dashboard",
    tag: "School Management",
    description:
      "React and Next.js features for a complete school management platform, delivered on a UK contract.",
    demoLink: "https://www.shelf21.com/",
  },
  {
    imgPath: editor,
    title: "Easycomp Technologies",
    tag: "IT Solutions",
    description:
      "Company website for an IT solutions and consultancy firm with over 10 years of experience.",
    demoLink: "https://easycomp-tech.netlify.app/",
  },
  {
    imgPath: tobi,
    title: "TobisWurld",
    tag: "Creative Portfolio",
    description:
      "Portfolio site for a creative studio covering commercials, brand films, event coverage, editing and VFX.",
    demoLink: "https://tobiswurld.com.ng/",
  },
];

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
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.title}>
              <ProjectCard {...project} isBlog={false} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
