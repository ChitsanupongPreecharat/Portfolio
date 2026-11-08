import { profile } from '../data/projects.js';

export default function Hero() {
  return (
    <header className="hero container">
      <h1>{profile.name}</h1>
      <p className="title">{profile.title}</p>
      <p className="tagline">{profile.tagline}</p>
      <div className="links">
        <a className="btn primary" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn" href={`mailto:${profile.email}`}>Email</a>
        <a className="btn" href="#projects">Projects</a>
      </div>
    </header>
  );
}
