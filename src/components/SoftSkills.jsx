import { softSkills } from '../data/projects.js';
import { useLang, ui } from '../i18n.jsx';

export default function SoftSkills() {
  const { t } = useLang();
  return (
    <section className="container" id="soft-skills">
      <h2>{t(ui.softSkills)}</h2>
      <div className="soft-skills">
        {softSkills.map((s) => (
          <div className="activity" key={s.title.en}>
            <h3>{t(s.title)}</h3>
            <p>{t(s.text)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
