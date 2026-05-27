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
  React: 'bg-blue-100 text-blue-700',
  Node: 'bg-green-100 text-green-700',
  MongoDB: 'bg-emerald-100 text-emerald-700',
  'Socket.io': 'bg-pink-100 text-pink-700',
  Express: 'bg-yellow-100 text-yellow-700',
  Python: 'bg-amber-100 text-amber-700',
  Pandas: 'bg-orange-100 text-orange-700',
  Matplotlib: 'bg-red-100 text-red-700',
  Tailwind: 'bg-cyan-100 text-cyan-700',
  Firebase: 'bg-violet-100 text-violet-700',
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(active))

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
        <div className="w-12 h-1 bg-pink-500 rounded mb-8" />

        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                active === tag
                  ? 'bg-violet-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-violet-400'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map(project => (
            <div key={project.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className={`text-xs px-2.5 py-1 rounded-full font-medium ${tagColors[tag] || 'bg-gray-100 text-gray-600'}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.live} className="text-sm text-violet-600 font-medium hover:underline">Live ↗</a>
                <a href={project.github} className="text-sm text-gray-500 font-medium hover:underline">GitHub ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}