const links = ['About', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-xl tracking-tight text-violet-600">sneha.dev</span>
        <ul className="flex gap-6">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}