import { categories } from '../data/projects.js';
import { useLang, ui } from '../i18n.jsx';

export default function ProjectFilter({ active, onChange }) {
  const { t } = useLang();
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
          {c === 'All' ? t(ui.all) : c}
        </button>
      ))}
    </div>
  );
}
