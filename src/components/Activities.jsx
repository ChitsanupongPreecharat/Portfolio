import { activities } from '../data/projects.js';
import { useLang, ui } from '../i18n.jsx';

export default function Activities() {
  const { t } = useLang();
  return (
    <section className="container" id="activities">
      <h2>{t(ui.activities)}</h2>
      {activities.map((a) => (
        <div className="activity" key={a.title.en}>
          <h3>{t(a.title)}</h3>
          <p>{t(a.text)}</p>
        </div>
      ))}
    </section>
  );
}
