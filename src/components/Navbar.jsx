import { profile } from '../data/projects.js';
import { useLang, ui } from '../i18n.jsx';

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a className="nav-brand" href="#top">{t(profile.name)}</a>
        <div className="nav-links">
          <a href={profile.github} target="_blank" rel="noreferrer">{t(ui.github)}</a>
          <a href={`mailto:${profile.email}`}>{t(ui.email)}</a>
          <a href="#projects">{t(ui.projects)}</a>
        </div>
        <div className="lang-toggle" role="group" aria-label={t(ui.langLabel)}>
          {['en', 'th'].map((l) => (
            <button
              key={l}
              type="button"
              className={lang === l ? 'active' : ''}
              aria-pressed={lang === l}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
