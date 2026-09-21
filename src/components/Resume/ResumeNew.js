import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Mubarak_General_Resume_ATS.pdf";
import { AiOutlineDownload, AiOutlineMessage } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume-actions">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          <Button
            variant="primary"
            href="mailto:Oguntunde722@gmail.com"
          >
            <AiOutlineMessage />
            &nbsp;Email Me
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex flex-column align-items-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row className="resume-actions">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          <Button
            variant="primary"
            href="mailto:Oguntunde722@gmail.com"
          >
            <AiOutlineMessage />
            &nbsp;Email Me
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
