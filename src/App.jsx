import { useState } from 'react';
import { projects } from './data/projects.js';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import ProjectFilter from './components/ProjectFilter.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import Activities from './components/Activities.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [category, setCategory] = useState('All');
  const shown = category === 'All' ? projects : projects.filter((p) => p.category === category);

  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <section className="container" id="projects">
        <h2>Projects</h2>
        <ProjectFilter active={category} onChange={setCategory} />
        <div className="project-grid">
          {shown.map((p) => <ProjectCard key={p.title} project={p} />)}
        </div>
      </section>
      <Activities />
      <Footer />
    </>
  );
}
