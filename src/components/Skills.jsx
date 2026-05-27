const skills = {
  Languages: [
    { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Python', color: 'bg-amber-100 text-amber-700' },
    { name: 'HTML', color: 'bg-orange-100 text-orange-700' },
    { name: 'CSS', color: 'bg-blue-100 text-blue-700' },
  ],
  Frameworks: [
    { name: 'React', color: 'bg-cyan-100 text-cyan-700' },
    { name: 'Node.js', color: 'bg-green-100 text-green-700' },
    { name: 'Express', color: 'bg-lime-100 text-lime-700' },
    { name: 'Tailwind CSS', color: 'bg-teal-100 text-teal-700' },
  ],
  'Tools & DevOps': [
    { name: 'Git', color: 'bg-red-100 text-red-700' },
    { name: 'GitHub', color: 'bg-gray-100 text-gray-700' },
    { name: 'VS Code', color: 'bg-violet-100 text-violet-700' },
    { name: 'Vite', color: 'bg-pink-100 text-pink-700' },
  ],
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills</h2>
        <div className="w-12 h-1 bg-amber-400 rounded mb-10" />

        <div className="space-y-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map(skill => (
                  <span
                    key={skill.name}
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${skill.color}`}
                  >
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