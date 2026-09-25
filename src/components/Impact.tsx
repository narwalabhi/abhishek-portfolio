import { impactStats } from "../data/portfolio";

export function Impact() {
  return (
    <section className="impact-section" aria-labelledby="impact-heading">
      <div className="container">
        <h2 id="impact-heading" className="sr-only">
          Career impact
        </h2>
        <div className="impact-grid">
          {impactStats.map((stat) => (
            <article className="impact-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span className="impact-label">{stat.label}</span>
              <p>{stat.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
