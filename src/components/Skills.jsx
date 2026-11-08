import { skills } from '../data/projects.js';
import { useLang, ui } from '../i18n.jsx';

export default function Skills() {
  const { t } = useLang();
  return (
    <section className="container" id="skills">
      <h2>{t(ui.skills)}</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.group}>
            <h3>{s.group}</h3>
            <ul className="tags">
              {s.items.map((item) => <li className="tag" key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
