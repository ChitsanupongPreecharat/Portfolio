export default function ProjectCard({ project }) {
  const { title, category, context, period, status, points, tags, github } = project;
  return (
    <article className="card">
      <div className="meta">
        <span className="category">{category}</span>
        <span>{period}</span>
      </div>
      <h3>{title}</h3>
      <p className="context">{context}</p>
      {status && <span className="status">{status}</span>}
      <ul className="points">
        {points.map((p) => <li key={p}>{p}</li>)}
      </ul>
      <div className="footer">
        <ul className="tags">
          {tags.map((t) => <li className="tag" key={t}>{t}</li>)}
        </ul>
        {github && (
          <a className="btn" href={github} target="_blank" rel="noreferrer">GitHub ↗</a>
        )}
      </div>
    </article>
  );
}
