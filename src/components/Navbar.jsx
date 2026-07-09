const links = ['About', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: 'rgba(232,237,224,0.85)', borderBottom: '1px solid #C2CEAF' }} className="fixed top-0 w-full z-50 backdrop-blur">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span style={{ color: '#4A2E1A' }} className="font-bold text-xl tracking-tight">Sneha.Mudusu</span>
        <ul className="flex gap-6">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} style={{ color: '#6B4226' }} className="text-sm font-medium hover:opacity-70 transition-opacity">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}