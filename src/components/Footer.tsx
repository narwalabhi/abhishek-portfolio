import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, and Vite.
        </p>
        <a href="#home">
          Back to top
          <ArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
