import { useState } from 'react'
import './Page.css'

function GiftRequest() {
  const [formData, setFormData] = useState({ name: '', email: '', photoLink: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Sending your love...')

    setTimeout(() => {
      setStatus('You’ve done it! I’ll check my inbox soon ❤️')
      setFormData({ name: '', email: '', photoLink: '', message: '' })
    }, 900)
  }

  return (
    <section className="page gift-page">
      <h2>Can you send me a picture?</h2>
      <p className="subtext">Of the gifts I sent you and your answer to my question.</p>

      <form className="gift-form" onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />
        <input name="photoLink" value={formData.photoLink} onChange={handleChange} placeholder="Link to the photo" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your answer + message" rows="4" required />
        <button type="submit">Send to my email</button>
      </form>

      {status && <p className="status">{status}</p>}
    </section>
  )
}

export default GiftRequest
