import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation, profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href="#home" aria-label="Abhishek Narwal home">
          <span className="brand-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand-text">
            <strong>Abhishek Narwal</strong>
            <small>Full-Stack Engineer</small>
          </span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links${menuOpen ? " is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <span className="nav-divider" aria-hidden="true" />

          <a
            className="icon-link"
            href="https://www.linkedin.com/in/anarwal500/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            className="icon-link"
            href="https://github.com/narwalabhi"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a className="nav-resume" href={profile.resumeUrl} download onClick={closeMenu}>
            <Download aria-hidden="true" />
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
