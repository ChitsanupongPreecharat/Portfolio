import { categories } from '../data/projects.js';

export default function ProjectFilter({ active, onChange }) {
  return (
    <div className="filter" role="tablist" aria-label="Project categories">
      {categories.map((c) => (
        <button
          key={c}
          type="button"
          role="tab"
          aria-selected={active === c}
          className={active === c ? 'active' : ''}
          onClick={() => onChange(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
