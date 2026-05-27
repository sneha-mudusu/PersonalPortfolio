import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    // Wire up to Formspree or EmailJS later
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Build Something Together</h2>
        <div className="w-12 h-1 bg-violet-500 rounded mb-4 mx-auto" />
        <p className="text-gray-500 mb-10">I'm currently open to full-time roles. Drop me a message!</p>

        {sent ? (
          <div className="bg-green-50 text-green-700 rounded-2xl p-6 font-medium">
            ✅ Message sent! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4 text-left">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handle}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handle}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              value={form.message}
              onChange={handle}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-violet-600 text-white py-3 rounded-xl font-semibold hover:bg-violet-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="flex justify-center gap-6 mt-10 text-sm text-gray-500">
          <a href="https://github.com/sneha-mudusu" target="_blank" className="hover:text-violet-600 transition-colors">GitHub ↗</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-violet-600 transition-colors">LinkedIn ↗</a>
          <a href="mailto:your@email.com" className="hover:text-violet-600 transition-colors">Email ↗</a>
        </div>
      </div>
    </section>
  )
}