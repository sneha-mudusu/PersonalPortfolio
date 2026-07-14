import { useState } from 'react'

export default function Hero() {
  const [showResume, setShowResume] = useState(false)

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #D4DCC8 0%, #E8EDE0 50%, #EDE8DF 100%)' }} className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-2xl">
          <div style={{ backgroundColor: '#C2CEAF', color: '#4A2E1A' }} className="inline-block text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            🌿 Open to new opportunities
          </div>
          <h1 style={{ color: '#4A2E1A' }} className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Hi, I'm <span style={{ color: '#7A9E7E' }}>Sneha Mudusu</span>
          </h1>
          <p style={{ color: '#6B4226' }} className="text-xl mb-8">
            Data Analyst who turns messy things into something useful - And i'm pretty sure My spirit animal is an outlier.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#projects" style={{ backgroundColor: '#7A9E7E', color: '#F5F0E8' }} className="px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              View My Work
            </a>
            <button
              onClick={() => setShowResume(true)}
              style={{ border: '2px solid #7A9E7E', color: '#7A9E7E' }}
              className="px-6 py-3 rounded-full font-semibold hover:opacity-80 transition-opacity bg-transparent cursor-pointer"
            >
              Preview Resume
            </button>
          </div>
        </div>
      </section>

      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(74, 46, 26, 0.6)' }}
          onClick={() => setShowResume(false)}
        >
          <div
            style={{ backgroundColor: '#F5F0E8', maxWidth: '800px', width: '100%', maxHeight: '90vh' }}
            className="rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div style={{ backgroundColor: '#D4DCC8', borderBottom: '1px solid #C2CEAF' }} className="flex justify-between items-center px-6 py-4">
              <span style={{ color: '#4A2E1A' }} className="font-semibold text-sm">Resume — Sneha Mudusu</span>
              <div className="flex items-center gap-3">
                
                <a  href="/resume.pdf"
                  download
                  style={{ backgroundColor: '#7A9E7E', color: '#F5F0E8' }}
                  className="text-sm px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  ⬇ Download
                </a>
                <button
                  onClick={() => setShowResume(false)}
                  style={{ color: '#6B4226' }}
                  className="text-xl font-bold hover:opacity-60 transition-opacity bg-transparent border-none cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto">
              <iframe
                src="/resume.pdf"
                title="Resume Preview"
                style={{ width: '100%', height: '75vh', border: 'none' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}