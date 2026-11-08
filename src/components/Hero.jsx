import { profile } from '../data/projects.js';
import { useLang, ui } from '../i18n.jsx';

export default function Hero() {
  const { t } = useLang();
  return (
    <header className="hero container" id="top">
      <div className="hero-text">
        <h1>{t(profile.name)}</h1>
        <p className="title">{t(profile.title)}</p>
        <div className="intro">
          {t(profile.intro).map((para) => <p key={para}>{para}</p>)}
        </div>
      </div>
      <img
        className="hero-photo"
        src={`${import.meta.env.BASE_URL}${profile.photo}`}
        alt={t(ui.photoAlt)}
      />
    </header>
  );
}
