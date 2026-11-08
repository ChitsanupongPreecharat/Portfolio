import { activities } from '../data/projects.js';

export default function Activities() {
  return (
    <section className="container" id="activities">
      <h2>Activities</h2>
      {activities.map((a) => (
        <div className="activity" key={a.title}>
          <h3>{a.title}</h3>
          <p>{a.text}</p>
        </div>
      ))}
    </section>
  );
}
