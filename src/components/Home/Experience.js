import React from "react";
import { Container } from "react-bootstrap";

const experience = [
  {
    role: "Senior React Developer",
    company: "Corpine Lab",
    place: "United Kingdom (Remote)",
    period: "Oct 2024 - Present",
    points: [
      "Cut frontend bugs by 25% through ESLint enforcement, strict typing and a shared component library.",
      "Rolled out a Material-UI design system that reduced per-feature development time by 20%.",
      "Mentor junior developers through structured code reviews.",
    ],
  },
  {
    role: "Frontend Developer (Contract)",
    company: "Shelf 21",
    place: "United Kingdom (Remote)",
    period: "Oct 2025 - Apr 2026",
    points: [
      "Shipped production React, Next.js and TypeScript features with pixel-accurate Tailwind CSS from Figma.",
      "Improved Core Web Vitals with code-splitting, lazy loading and image optimisation.",
    ],
  },
  {
    role: "IT & Software Development Intern",
    company: "AIICO Insurance PLC",
    place: "Lagos, Nigeria",
    period: "Mar 2025 - Oct 2025",
    points: [
      "Built Angular and TypeScript components for two enterprise platforms used daily by business teams.",
      "Sole IT administrator for 100+ staff, achieving 99.9% uptime.",
    ],
  },
  {
    role: "Software Developer Manager",
    company: "Easycomp Technologies",
    place: "Lagos, Nigeria",
    period: "Mar 2024 - Sep 2024",
    points: [
      "Led a TypeScript refactor that eliminated 30% of runtime errors.",
      "Built real-time D3.js dashboards for enterprise clients and improved performance scores by 22%.",
    ],
  },
  {
    role: "React Developer",
    company: "Green Mouse Technologies",
    place: "Lagos, Nigeria",
    period: "Sep 2023 - Mar 2024",
    points: [
      "Replaced a legacy reporting system with React, Redux Toolkit and Axios dashboards.",
      "Implemented role-based access control and reusable service layers that cut turnaround by 20%.",
    ],
  },
  {
    role: "Software Developer",
    company: "Easycomp Technologies",
    place: "Lagos, Nigeria",
    period: "Feb 2022 - Aug 2023",
    points: [
      "Reduced legacy code dependencies by 40% through refactoring and component modularisation.",
      "Produced interactive D3.js data visualisations for fintech clients.",
    ],
  },
];

function Experience() {
  return (
    <Container fluid className="experience-section" id="experience">
      <Container>
        <h1 className="project-heading">
          Work <strong className="purple">Experience</strong>
        </h1>
        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline-item" key={job.company + job.period}>
              <span className="timeline-period">{job.period}</span>
              <h3 className="timeline-role">
                {job.role} <span className="purple">@ {job.company}</span>
              </h3>
              <span className="timeline-place">{job.place}</span>
              <ul className="timeline-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </Container>
  );
}

export default Experience;
