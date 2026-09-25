import { ArrowUpRight } from "lucide-react";
import { earlierProjects, featuredProjects, type Project } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article className={`project-card glass-card${compact ? " project-card-compact" : ""}`}>
      <div className="project-card-topline">
        <p className="project-category">{project.category}</p>
        {project.metric ? <span className="project-metric">{project.metric}</span> : null}
      </div>

      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>

      {!compact ? (
        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}

      <div className="project-footer">
        <ul className="tag-list" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {project.links?.length ? (
          <div className="project-links">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} on ${link.label}`}
              >
                {link.label}
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Systems that solve real operational problems"
          description="Selected backend, distributed-systems, and full-stack work spanning payments, messaging, reliability, and automation."
        />

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="earlier-work">
          <div className="subsection-heading">
            <p className="eyebrow">Earlier work</p>
            <h3>Android product development</h3>
          </div>
          <div className="project-grid project-grid-compact">
            {earlierProjects.map((project) => (
              <ProjectCard key={project.name} project={project} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
