import { useEffect, useState } from 'react'
import './Page.css'

const STORY = [
  { title: 'The first time we met…', content: 'At that cozy café, your smile felt like home.' },
  { title: 'When I knew you were special…', content: 'The way you understood the quiet parts of me.' },
  { title: 'Every small thing I love…', content: 'Your laugh, your stubborn kindness, your gentle strength.' },
]

function Home() {
  const [typedText, setTypedText] = useState('')
  const phrase = 'So… I’ve been meaning to ask you something…'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= phrase.length) {
        setTypedText(phrase.slice(0, i))
        i += 1
      } else {
        clearInterval(timer)
      }
    }, 60)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="page home-page">
      <div className="intro-card">
        <h2>Hey Love, I made this for you</h2>
        <p>Just give me 60 seconds ❤️</p>
      </div>

      <div className="story-grid">
        {STORY.map((item) => (
          <article key={item.title} className="story-card">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </article>
        ))}
      </div>

      <div className="typing-section">
        <p className="typewriter">{typedText}</p>
        <p className="big-question">Will you be my girlfriend?</p>
      </div>

      <div className="love-notes">
        <div className="heart-button">💖</div>
      </div>
    </section>
  )
}

export default Home
