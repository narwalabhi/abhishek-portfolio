import { Code2 } from "lucide-react";
import { skillGroups } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Toolkit"
          title="Technologies I use to ship and operate software"
          description="A practical stack centered on Java services, event-driven architecture, cloud infrastructure, and modern web interfaces."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card glass-card" key={group.title}>
              <div className="skill-card-heading">
                <span className="skill-icon" aria-hidden="true">
                  <Code2 />
                </span>
                <span className="skill-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
