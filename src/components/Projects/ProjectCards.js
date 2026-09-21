import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={props.title}
        style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: "top" }}
      />
      <Card.Body className="project-card-body">
        {props.tag && <span className="project-tag">{props.tag}</span>}
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text className="project-card-text">{props.description}</Card.Text>

        {/* Demo button renders only for non-blog cards that have a link */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noreferrer"
            className="project-card-btn"
          >
            <CgWebsite /> &nbsp;
            {"Live Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
