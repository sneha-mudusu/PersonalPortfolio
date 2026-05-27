const facts = [
  { label: 'Experience', value: '2+ years' },
  { label: 'Favorite Stack', value: 'React + Node' },
  { label: 'Currently Learning', value: 'TypeScript' },
  { label: 'Based In', value: 'Your City' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
        <div className="w-12 h-1 bg-violet-500 rounded mb-8" />

        <div className="flex flex-col sm:flex-row gap-10 items-start">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-white text-4xl font-bold shrink-0">
            SM
          </div>
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I'm a full-stack engineer passionate about building products that are both
              technically solid and a joy to use. I love turning complex problems into
              clean, simple interfaces. Currently looking for a role where I can
              contribute, grow, and keep shipping great work.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {facts.map(f => (
                <div key={f.label} className="bg-violet-50 rounded-xl p-4">
                  <p className="text-xs text-violet-500 font-medium uppercase tracking-wide mb-1">{f.label}</p>
                  <p className="text-gray-900 font-semibold text-sm">{f.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}