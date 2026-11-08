import { experience } from '../data/projects.js';

export default function Experience() {
  return (
    <section className="container" id="experience">
      <h2>Experience</h2>
      {experience.map((e) => (
        <div key={e.org}>
          <div className="exp-head">
            <h3>{e.role} <span className="exp-org">· {e.org}</span></h3>
            <span className="period">{e.period}</span>
          </div>
          <ul className="points">
            {e.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
