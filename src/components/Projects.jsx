import { useState } from 'react'

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web app with user auth, REST API, and a responsive dashboard.',
    summary: 'Built with a React frontend and Node.js/Express backend. Features include JWT authentication, role-based access control, and a real-time dashboard with charts. Deployed on Render with a MongoDB Atlas database.',
    screenshot: '/screenshots/project1.png',
    tags: ['React', 'Node', 'MongoDB'],
    live: '#',
    github: '#',
  },
  {
    title: 'Project Two',
    description: 'A real-time chat application with WebSocket support and message history.',
    summary: 'Users can join named rooms, send messages in real time, and scroll through chat history. Built with Socket.io on the backend and React on the frontend. Messages are persisted in MongoDB.',
    screenshot: '/screenshots/project2.png',
    tags: ['React', 'Socket.io', 'Express'],
    live: '#',
    github: '#',
  },
  {
    title: 'Project Three',
    description: 'A Python script that scrapes, processes, and visualizes public data.',
    summary: 'Scrapes data from public APIs using BeautifulSoup, cleans and processes it with Pandas, and generates interactive visualizations with Matplotlib and Seaborn. Outputs a PDF report automatically.',
    screenshot: '/screenshots/project3.png',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    live: '#',
    github: '#',
  },
  {
    title: 'Project Four',
    description: 'A mobile-friendly e-commerce UI with cart, filters, and checkout flow.',
    summary: 'A fully responsive shopping UI with product filtering, a persistent cart using localStorage, and a multi-step checkout form. Styled with Tailwind CSS and backed by Firebase for auth and product data.',
    screenshot: '/screenshots/project4.png',
    tags: ['React', 'Tailwind', 'Firebase'],
    live: '#',
    github: '#',
  },
]

const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))]

const tagColors = {
  React:       { backgroundColor: '#D4DCC8', color: '#4A2E1A' },
  Node:        { backgroundColor: '#C2CEAF', color: '#4A2E1A' },
  MongoDB:     { backgroundColor: '#B8C9A3', color: '#4A2E1A' },
  'Socket.io': { backgroundColor: '#D9C9B8', color: '#4A2E1A' },
  Express:     { backgroundColor: '#E8DDD0', color: '#4A2E1A' },
  Python:      { backgroundColor: '#C9D4B8', color: '#4A2E1A' },
  Pandas:      { backgroundColor: '#D0C9A8', color: '#4A2E1A' },
  Matplotlib:  { backgroundColor: '#C8BFA8', color: '#4A2E1A' },
  Tailwind:    { backgroundColor: '#BFC9B0', color: '#4A2E1A' },
  Firebase:    { backgroundColor: '#D4C4A8', color: '#4A2E1A' },
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const [hovered, setHovered] = useState(null)

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

        <div className="grid sm:grid-cols-2 gap-6 items-start">
          {filtered.map(project => (
            <div
              key={project.title}
              onMouseEnter={() => setHovered(project.title)}
              onMouseLeave={() => setHovered(null)}
              style={{
                backgroundColor: '#F5F0E8',
                border: '1px solid #C2CEAF',
                transform: hovered === project.title ? 'scale(1.03)' : 'scale(1)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                boxShadow: hovered === project.title ? '0 12px 32px rgba(74,46,26,0.15)' : 'none',
              }}
              className="rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Screenshot — shows on hover */}
              <div style={{
                height: hovered === project.title ? '180px' : '0px',
                transition: 'height 0.3s ease',
                overflow: 'hidden',
              }}>
                <img
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.parentElement.style.height = '0px'
                  }}
                />
              </div>

              <div className="p-6">
                <h3 style={{ color: '#4A2E1A' }} className="text-lg font-bold mb-2">{project.title}</h3>

                {/* Summary replaces description on hover */}
                <p style={{ color: '#6B4226' }} className="text-sm mb-4">
                  {hovered === project.title ? project.summary : project.description}
                </p>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}