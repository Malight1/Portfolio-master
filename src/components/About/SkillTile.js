import React from "react";
import { Col } from "react-bootstrap";

function SkillTile({ Icon, label }) {
  return (
    <Col xs={4} md={2} className="skill-item">
      <div className="tech-icons" title={label}>
        <Icon />
      </div>
      <span className="skill-label">{label}</span>
    </Col>
  );
}

export default SkillTile;
