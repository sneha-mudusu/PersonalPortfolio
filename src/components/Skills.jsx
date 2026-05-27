const skills = {
  Languages: [
    { name: 'JavaScript', style: { backgroundColor: '#D4DCC8', color: '#4A2E1A' } },
    { name: 'Python',     style: { backgroundColor: '#C9D4B8', color: '#4A2E1A' } },
    { name: 'HTML',       style: { backgroundColor: '#E8DDD0', color: '#4A2E1A' } },
    { name: 'CSS',        style: { backgroundColor: '#C2CEAF', color: '#4A2E1A' } },
  ],
  Frameworks: [
    { name: 'React',       style: { backgroundColor: '#BFC9B0', color: '#4A2E1A' } },
    { name: 'Node.js',     style: { backgroundColor: '#B8C9A3', color: '#4A2E1A' } },
    { name: 'Express',     style: { backgroundColor: '#D9C9B8', color: '#4A2E1A' } },
    { name: 'Tailwind CSS',style: { backgroundColor: '#C8D4BC', color: '#4A2E1A' } },
  ],
  'Tools & DevOps': [
    { name: 'Git',    style: { backgroundColor: '#D9C4B0', color: '#4A2E1A' } },
    { name: 'GitHub', style: { backgroundColor: '#D4C4A8', color: '#4A2E1A' } },
    { name: 'VS Code',style: { backgroundColor: '#C2CEAF', color: '#4A2E1A' } },
    { name: 'Vite',   style: { backgroundColor: '#D4DCC8', color: '#4A2E1A' } },
  ],
}

export default function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: '#F5F0E8' }} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 style={{ color: '#4A2E1A' }} className="text-3xl font-bold mb-4">Skills</h2>
        <div style={{ backgroundColor: '#7A9E7E' }} className="w-12 h-1 rounded mb-10" />
        <div className="space-y-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 style={{ color: '#7A9E7E' }} className="text-sm font-semibold uppercase tracking-widest mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map(skill => (
                  <span key={skill.name} style={skill.style} className="px-4 py-2 rounded-full text-sm font-semibold">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}