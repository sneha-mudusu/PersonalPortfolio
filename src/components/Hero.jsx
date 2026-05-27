export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-violet-50 via-pink-50 to-amber-50">
      <div className="text-center max-w-2xl">
        <div className="inline-block bg-violet-100 text-violet-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          Open to new opportunities
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 mb-4">
          Hi, I'm <span className="text-violet-600">Sneha Mudusu</span>
        </h1>
        <p className="text-xl text-gray-500 mb-8">
          Full-Stack Engineer who builds fast, accessible, and delightful web apps.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#projects" className="bg-violet-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-700 transition-colors">
            View My Work
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="border-2 border-violet-600 text-violet-600 px-6 py-3 rounded-full font-semibold hover:bg-violet-50 transition-colors">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}