import { Code2, Download, Mail, MapPin, Phone } from "lucide-react";
import { profile, socialLinks } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-panel glass-card">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build reliable software together.</h2>
            <p>
              I&apos;m open to full-stack and backend engineering opportunities where distributed
              systems, thoughtful APIs, and useful products matter.
            </p>
            <span className="contact-location">
              <MapPin aria-hidden="true" />
              {profile.location}
            </span>
          </div>

          <div className="contact-methods">
            <a href={`mailto:${profile.email}`}>
              <span className="contact-icon" aria-hidden="true">
                <Mail />
              </span>
              <span>
                <small>Email</small>
                <strong>{profile.email}</strong>
              </span>
            </a>
            <a href={profile.phoneHref}>
              <span className="contact-icon" aria-hidden="true">
                <Phone />
              </span>
              <span>
                <small>Phone</small>
                <strong>{profile.phone}</strong>
              </span>
            </a>
            {socialLinks.map((link) => {
              const Icon =
                link.label === "GitHub"
                  ? GithubIcon
                  : link.label === "LinkedIn"
                    ? LinkedinIcon
                    : Code2;
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  <span className="contact-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>
                    <small>Profile</small>
                    <strong>{link.label}</strong>
                  </span>
                </a>
              );
            })}
          </div>

          <a className="button button-primary contact-resume" href={profile.resumeUrl} download>
            <Download aria-hidden="true" />
            Download résumé
          </a>
        </div>
      </div>
    </section>
  );
}
