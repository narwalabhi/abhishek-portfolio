import { ArrowDown, Download, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";

export function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="status-badge">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </p>

          <p className="eyebrow">Hello, I&apos;m</p>
          <h1>
            {profile.name}
            <span className="hero-role">{profile.headline}</span>
          </h1>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              Explore my work
              <ArrowDown aria-hidden="true" />
            </a>
            <a className="button button-secondary" href={profile.resumeUrl} download>
              <Download aria-hidden="true" />
              Download résumé
            </a>
          </div>

          <div className="hero-meta">
            <span className="hero-meta-item">
              <MapPin aria-hidden="true" />
              {profile.location}
            </span>
            <span className="hero-meta-item">5+ years building production software</span>
          </div>

          <ul className="tag-list hero-tags" aria-label="Core technologies">
            {profile.heroTags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <img
              src={profile.portrait}
              alt={profile.portraitAlt}
              width="1200"
              height="1600"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="portrait-glow" aria-hidden="true" />
          </div>
          <div className="visual-card">
            <span className="visual-card-label">Current focus</span>
            <strong>Distributed systems &amp; AI products</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
