import { experience } from '../data/projects.js';
import { useLang, ui } from '../i18n.jsx';

export default function Experience() {
  const { t } = useLang();
  return (
    <section className="container" id="experience">
      <h2>{t(ui.experience)}</h2>
      {experience.map((e) => (
        <div key={e.org.en}>
          <div className="exp-head">
            <h3>{t(e.role)} <span className="exp-org">· {t(e.org)}</span></h3>
            <span className="period">{e.period}</span>
          </div>
          <ul className="points">
            {e.points.map((p) => <li key={p.en}>{t(p)}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
