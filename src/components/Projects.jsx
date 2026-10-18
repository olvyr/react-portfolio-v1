import React from 'react';

export default function Projects() {
  const projects = ['E-commerce API', 'Weather Dashboard', 'Task Manager'];
  return (
    <section>
      <h2>My Projects</h2>
      <div className="grid">
        {projects.map(p => <div key={p} className="card">{p}</div>)}
      </div>
    </section>
  );
}