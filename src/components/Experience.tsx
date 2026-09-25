import { experience } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Engineering work with measurable impact"
          description="Backend and distributed-systems work, connected to products used by real customers and operations teams."
        />

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-card glass-card">
                <div className="timeline-header">
                  <div className="timeline-heading">
                    <span className={`company-logo-frame company-logo-frame-${item.logoSurface}`}>
                      <img
                        className="company-logo"
                        src={item.logo}
                        alt={item.logoAlt}
                        width={item.logoWidth}
                        height={item.logoHeight}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <div>
                      <p className="timeline-period">{item.period}</p>
                      <h3>{item.role}</h3>
                      <p className="timeline-company">{item.company}</p>
                    </div>
                  </div>
                  <span className="timeline-location">{item.location}</span>
                </div>

                <ul className="detail-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <ul className="tag-list" aria-label={`${item.company} technologies`}>
                  {item.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
