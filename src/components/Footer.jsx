import { profile } from '../data/projects.js';

export default function Footer() {
  return (
    <footer className="container" id="contact">
      <h2>Contact</h2>
      <div className="links">
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn" href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
      <small>© {new Date().getFullYear()} {profile.name}</small>
    </footer>
  );
}
