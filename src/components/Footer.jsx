import { profile } from '../data/projects.js';
import { useLang, ui } from '../i18n.jsx';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="container" id="contact">
      <h2>{t(ui.contact)}</h2>
      <div className="links">
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn" href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
      <small>© {new Date().getFullYear()} {t(profile.name)}</small>
    </footer>
  );
}
