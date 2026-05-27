import { useState } from 'react'

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web app with user auth, REST API, and a responsive dashboard.',
    tags: ['React', 'Node', 'MongoDB'],
    live: '#',
    github: '#',
  },
  {
    title: 'Project Two',
    description: 'A real-time chat application with WebSocket support and message history.',
    tags: ['React', 'Socket.io', 'Express'],
    live: '#',
    github: '#',
  },
  {
    title: 'Project Three',
    description: 'A Python script that scrapes, processes, and visualizes public data.',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    live: '#',
    github: '#',
  },
  {
    title: 'Project Four',
    description: 'A mobile-friendly e-commerce UI with cart, filters, and checkout flow.',
    tags: ['React', 'Tailwind', 'Firebase'],
    live: '#',
    github: '#',
  },
]

const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))]

const tagColors = {
  React:      { backgroundColor: '#D4DCC8', color: '#4A2E1A' },
  Node:       { backgroundColor: '#C2CEAF', color: '#4A2E1A' },
  MongoDB:    { backgroundColor: '#B8C9A3', color: '#4A2E1A' },
  'Socket.io':{ backgroundColor: '#D9C9B8', color: '#4A2E1A' },
  Express:    { backgroundColor: '#E8DDD0', color: '#4A2E1A' },
  Python:     { backgroundColor: '#C9D4B8', color: '#4A2E1A' },
  Pandas:     { backgroundColor: '#D0C9A8', color: '#4A2E1A' },
  Matplotlib: { backgroundColor: '#C8BFA8', color: '#4A2E1A' },
  Tailwind:   { backgroundColor: '#BFC9B0', color: '#4A2E1A' },
  Firebase:   { backgroundColor: '#D4C4A8', color: '#4A2E1A' },
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(active))

  return (
    <section id="projects" style={{ backgroundColor: '#E8EDE0' }} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 style={{ color: '#4A2E1A' }} className="text-3xl font-bold mb-4">Projects</h2>
        <div style={{ backgroundColor: '#6B4226' }} className="w-12 h-1 rounded mb-8" />

        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              style={active === tag
                ? { backgroundColor: '#7A9E7E', color: '#F5F0E8' }
                : { backgroundColor: '#F5F0E8', color: '#6B4226', border: '1px solid #C2CEAF' }}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map(project => (
            <div key={project.title} style={{ backgroundColor: '#F5F0E8', border: '1px solid #C2CEAF' }} className="rounded-2xl p-6 hover:shadow-md transition-shadow">
              <h3 style={{ color: '#4A2E1A' }} className="text-lg font-bold mb-2">{project.title}</h3>
              <p style={{ color: '#6B4226' }} className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} style={tagColors[tag] || { backgroundColor: '#D4DCC8', color: '#4A2E1A' }} className="text-xs px-2.5 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.live} style={{ color: '#7A9E7E' }} className="text-sm font-medium hover:underline">Live ↗</a>
                <a href={project.github} style={{ color: '#6B4226' }} className="text-sm font-medium hover:underline">GitHub ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}