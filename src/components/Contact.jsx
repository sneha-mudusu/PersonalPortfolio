import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" style={{ backgroundColor: '#D4DCC8' }} className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 style={{ color: '#4A2E1A' }} className="text-3xl font-bold mb-4">Let's Build Something Together</h2>
        <div style={{ backgroundColor: '#7A9E7E' }} className="w-12 h-1 rounded mb-4 mx-auto" />
        <p style={{ color: '#6B4226' }} className="mb-10">I'm currently open to full-time roles. Drop me a message!</p>

        {sent ? (
          <div style={{ backgroundColor: '#C2CEAF', color: '#4A2E1A' }} className="rounded-2xl p-6 font-medium">
            🌿 Message sent! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4 text-left">
            <input
              name="name" type="text" placeholder="Your Name" required
              value={form.name} onChange={handle}
              style={{ border: '1px solid #C2CEAF', backgroundColor: '#F5F0E8', color: '#4A2E1A' }}
              className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
            />
            <input
              name="email" type="email" placeholder="Your Email" required
              value={form.email} onChange={handle}
              style={{ border: '1px solid #C2CEAF', backgroundColor: '#F5F0E8', color: '#4A2E1A' }}
              className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
            />
            <textarea
              name="message" rows={5} placeholder="Your Message" required
              value={form.message} onChange={handle}
              style={{ border: '1px solid #C2CEAF', backgroundColor: '#F5F0E8', color: '#4A2E1A' }}
              className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none resize-none"
            />
            <button
              type="submit"
              style={{ backgroundColor: '#7A9E7E', color: '#F5F0E8' }}
              className="w-full py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="flex justify-center gap-6 mt-10 text-sm">
          <a href="https://github.com/sneha-mudusu" target="_blank" rel="noreferrer" style={{ color: '#6B4226' }} className="hover:opacity-70 transition-opacity">GitHub ↗</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" style={{ color: '#6B4226' }} className="hover:opacity-70 transition-opacity">LinkedIn ↗</a>
          <a href="mailto:your@email.com" style={{ color: '#6B4226' }} className="hover:opacity-70 transition-opacity">Email ↗</a>
        </div>
      </div>
    </section>
  )
}