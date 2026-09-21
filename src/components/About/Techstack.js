import React from "react";
import { Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiGit } from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiAngular,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiSupabase,
  SiD3Dotjs,
  SiCss3,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import SkillTile from "./SkillTile";

const skills = [
  { Icon: DiReact, label: "React" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: DiJavascript1, label: "JavaScript" },
  { Icon: SiAngular, label: "Angular" },
  { Icon: SiRedux, label: "Redux Toolkit" },
  { Icon: SiTailwindcss, label: "Tailwind CSS" },
  { Icon: SiMui, label: "Material-UI" },
  { Icon: SiCss3, label: "CSS3" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiSupabase, label: "Supabase" },
  { Icon: TbApi, label: "REST APIs" },
  { Icon: SiD3Dotjs, label: "D3.js" },
  { Icon: DiGit, label: "Git" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill) => (
        <SkillTile key={skill.label} {...skill} />
      ))}
    </Row>
  );
}

export default Techstack;
