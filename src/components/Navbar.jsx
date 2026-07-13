import { useState } from 'react'

const links = ['About', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{ backgroundColor: 'rgba(232,237,224,0.85)', borderBottom: '1px solid #C2CEAF' }} className="fixed top-0 w-full z-50 backdrop-blur">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span style={{ color: '#4A2E1A' }} className="font-bold text-xl tracking-tight">Sneha.Mudusu</span>

        {/* Desktop links */}
        <ul className="hidden sm:flex gap-6">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} style={{ color: '#6B4226' }} className="text-sm font-medium hover:opacity-70 transition-opacity">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          aria-label="Toggle menu"
        >
          <span style={{ backgroundColor: '#4A2E1A' }} className={`block h-0.5 w-6 transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span style={{ backgroundColor: '#4A2E1A' }} className={`block h-0.5 w-6 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span style={{ backgroundColor: '#4A2E1A' }} className={`block h-0.5 w-6 transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <ul style={{ backgroundColor: 'rgba(232,237,224,0.98)' }} className="sm:hidden flex flex-col items-center gap-4 py-6 border-t" >
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                style={{ color: '#6B4226' }}
                className="text-base font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}