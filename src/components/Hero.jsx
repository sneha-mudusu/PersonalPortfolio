export default function Hero() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #D4DCC8 0%, #E8EDE0 50%, #EDE8DF 100%)' }} className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-2xl">
        <div style={{ backgroundColor: '#C2CEAF', color: '#4A2E1A' }} className="inline-block text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          🌿 Open to new opportunities
        </div>
        <h1 style={{ color: '#4A2E1A' }} className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4">
          Hi, I'm <span style={{ color: '#7A9E7E' }}>Sneha Mudusu</span>
        </h1>
        <p style={{ color: '#6B4226' }} className="text-xl mb-8">
          Full-Stack Engineer who builds fast, accessible, and delightful web apps.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#projects" style={{ backgroundColor: '#7A9E7E', color: '#F5F0E8' }} className="px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            View My Work
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" style={{ border: '2px solid #7A9E7E', color: '#7A9E7E' }} className="px-6 py-3 rounded-full font-semibold hover:opacity-80 transition-opacity">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}