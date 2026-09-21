import React from "react";
import { Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import SkillTile from "./SkillTile";

const tools = [
  { Icon: SiVisualstudiocode, label: "VS Code" },
  { Icon: SiPostman, label: "Postman" },
  { Icon: SiFigma, label: "Figma" },
  { Icon: SiGithub, label: "GitHub" },
  { Icon: SiVercel, label: "Vercel" },
  { Icon: SiNetlify, label: "Netlify" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <SkillTile key={tool.label} {...tool} />
      ))}
    </Row>
  );
}

export default Toolstack;
