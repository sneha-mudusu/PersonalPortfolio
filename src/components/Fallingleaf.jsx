import { useState, useEffect } from 'react'

const greenLeaf = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M50 10 C20 20, 5 50, 20 80 C35 95, 65 95, 80 80 C95 50, 80 20, 50 10Z" fill="#7A9E7E"/>
  <line x1="50" y1="10" x2="50" y2="90" stroke="#4A2E1A" stroke-width="2"/>
  <line x1="50" y1="35" x2="30" y2="55" stroke="#4A2E1A" stroke-width="1.5"/>
  <line x1="50" y1="50" x2="70" y2="65" stroke="#4A2E1A" stroke-width="1.5"/>
  <line x1="50" y1="60" x2="32" y2="72" stroke="#4A2E1A" stroke-width="1.5"/>
</svg>`

const yellowLeaf = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M50 10 C20 20, 5 50, 20 80 C35 95, 65 95, 80 80 C95 50, 80 20, 50 10Z" fill="#D4A843"/>
  <line x1="50" y1="10" x2="50" y2="90" stroke="#4A2E1A" stroke-width="2"/>
  <line x1="50" y1="35" x2="30" y2="55" stroke="#4A2E1A" stroke-width="1.5"/>
  <line x1="50" y1="50" x2="70" y2="65" stroke="#4A2E1A" stroke-width="1.5"/>
  <line x1="50" y1="60" x2="32" y2="72" stroke="#4A2E1A" stroke-width="1.5"/>
</svg>`

export default function FallingLeaf() {
  const [leaves, setLeaves] = useState([])
  const [isGreen, setIsGreen] = useState(true)

  useEffect(() => {
    const spawn = () => {
      const id = Date.now()
      const xPos = Math.random() * 90 + 5
      const rotation = Math.random() * 360
      const drift = (Math.random() - 0.5) * 120
      const svg = isGreen ? greenLeaf : yellowLeaf

      setLeaves(prev => [...prev, { id, xPos, rotation, drift, svg }])
      setIsGreen(prev => !prev)

      setTimeout(() => {
        setLeaves(prev => prev.filter(l => l.id !== id))
      }, 100)
    }

    spawn()
    const interval = setInterval(spawn, 7000)
    return () => clearInterval(interval)
  }, [isGreen])

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 40, overflow: 'hidden' }}>
      {leaves.map(leaf => (
        <div
          key={leaf.id}
          style={{
            position: 'absolute',
            top: '-80px',
            left: `${leaf.xPos}%`,
            width: '40px',
            height: '40px',
            animation: `fall-${leaf.id} 4s ease-in forwards`,
          }}
        >
          <style>{`
            @keyframes fall-${leaf.id} {
              0%   { transform: translateY(0px)   translateX(0px)              rotate(${leaf.rotation}deg); opacity: 1; }
              25%  { transform: translateY(25vh)  translateX(${leaf.drift * 0.3}px) rotate(${leaf.rotation + 90}deg); }
              50%  { transform: translateY(50vh)  translateX(${leaf.drift * 0.6}px) rotate(${leaf.rotation + 180}deg); }
              75%  { transform: translateY(75vh)  translateX(${leaf.drift * 0.8}px) rotate(${leaf.rotation + 270}deg); }
              100% { transform: translateY(105vh) translateX(${leaf.drift}px)        rotate(${leaf.rotation + 360}deg); opacity: 0; }
            }
          `}</style>
          <div dangerouslySetInnerHTML={{ __html: leaf.svg }} style={{ width: '100%', height: '100%' }} />
        </div>
      ))}
    </div>
  )
}