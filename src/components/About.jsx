const facts = [
  { label: 'Experience', value: '3+ years' },
  { label: 'Favorite Work', value: 'ML models' },
  { label: 'Currently Learning', value: 'Agentic Analysis' },
  { label: 'Based In', value: 'New York' },
]

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#F5F0E8' }} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 style={{ color: '#4A2E1A' }} className="text-3xl font-bold mb-4">About Me</h2>
        <div style={{ backgroundColor: '#7A9E7E' }} className="w-12 h-1 rounded mb-8" />
        <div className="flex flex-col sm:flex-row gap-10 items-start">
          <div style={{ background: 'linear-gradient(135deg, #7A9E7E, #A8C5A0)' }} className="w-32 h-32 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shrink-0">
            <img src="src/assets/propic.jpeg" alt="SM" />
          </div>
          <div>
            <p style={{ color: '#6B4226' }} className="text-lg leading-relaxed mb-6">
              Hey! I'm a Data Analyst by trade and a web developer by passion.
              I specialize in bridging the gap between deep analytical insights and modern web design ensuring that every project 
              i touch is both technically sound and user-centric. I love turning complex problems into
              clean, simple interfaces. Currently looking for a role where I can
              contribute, grow, and keep shipping great work.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {facts.map(f => (
                <div key={f.label} style={{ backgroundColor: '#D4DCC8' }} className="rounded-xl p-4">
                  <p style={{ color: '#7A9E7E' }} className="text-xs font-medium uppercase tracking-wide mb-1">{f.label}</p>
                  <p style={{ color: '#4A2E1A' }} className="font-semibold text-sm">{f.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}