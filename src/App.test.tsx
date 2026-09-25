import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("portfolio page", () => {
  it("renders the primary positioning and navigation", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: /Abhishek Narwal/i })).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Software Engineer")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute("href", "#experience");
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute("href", "#projects");
  });

  it("renders experience, projects, and contact information", () => {
    render(<App />);

    expect(screen.getByText("Ticketmaster / Live Nation Entertainment")).toBeInTheDocument();
    expect(screen.getByText("AI Voicemail Assistant")).toBeInTheDocument();
    expect(screen.getByText(/University of Waterloo/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /anarwal500@gmail.com/i })).toHaveAttribute(
      "href",
      "mailto:anarwal500@gmail.com",
    );
    expect(screen.getAllByRole("link", { name: /Download résumé/i })[0]).toHaveAttribute(
      "download",
      "",
    );
  });
});
