import { useLang } from '../i18n.jsx';

export default function ProjectCard({ project }) {
  const { t } = useLang();
  const { title, category, context, period, status, points, tags, github } = project;
  return (
    <article className="card">
      <div className="meta">
        <span className="category">{category}</span>
        <span>{period}</span>
      </div>
      <h3>{title}</h3>
      <p className="context">{t(context)}</p>
      {status && <span className="status">{t(status)}</span>}
      <ul className="points">
        {points.map((p) => <li key={p.en}>{t(p)}</li>)}
      </ul>
      <div className="footer">
        <ul className="tags">
          {tags.map((tag) => <li className="tag" key={tag}>{tag}</li>)}
        </ul>
        {github && (
          <a className="btn" href={github} target="_blank" rel="noreferrer">GitHub ↗</a>
        )}
      </div>
    </article>
  );
}
