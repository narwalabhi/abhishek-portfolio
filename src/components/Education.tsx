import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container education-grid">
        <div>
          <SectionHeading
            eyebrow="Education"
            title="Systems thinking, backed by computer science fundamentals"
          />

          <div className="education-list">
            {education.map((item) => (
              <article className="education-card glass-card" key={item.degree}>
                <span className="education-icon" aria-hidden="true">
                  <GraduationCap />
                </span>
                <div>
                  <p className="education-period">{item.period}</p>
                  <h3>{item.degree}</h3>
                  <p className="education-institution">
                    {item.institution} · {item.location}
                  </p>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="credentials-card glass-card" aria-labelledby="credentials-title">
          <span className="education-icon" aria-hidden="true">
            <Award />
          </span>
          <p className="eyebrow">Credentials</p>
          <h2 id="credentials-title">Verified skills</h2>
          <ul>
            {certifications.map((certification) => (
              <li key={certification.name}>
                <a href={certification.href} target="_blank" rel="noreferrer">
                  <strong>{certification.name}</strong>
                  <span className="credential-issuer">{certification.issuer}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
