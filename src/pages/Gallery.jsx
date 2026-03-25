import { useState, useEffect, useRef } from 'react'
import './Page.css'

const images = [
  '/assets/WhatsApp Image 2026-03-24 at 21.54.47 (2).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.47 (3).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.47 (4).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.47 (5).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.47 (6).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.47 (7).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.47.jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.48 (1).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.48 (2).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.48 (3).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.48 (4).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.48 (5).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.48 (6).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.48 (7).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.48 (8).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.48.jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.49 (1).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.49 (2).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.54.49.jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.59.14 (1).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.59.14 (2).jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.59.14.jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.59.30.jpeg',
  '/assets/WhatsApp Image 2026-03-24 at 21.59.31.jpeg'
]

const videos = [
  '/assets/WhatsApp Video 2026-03-24 at 21.54.49.mp4',
  '/assets/WhatsApp Video 2026-03-24 at 21.59.12.mp4',
  '/assets/WhatsApp Video 2026-03-24 at 21.59.29.mp4',
  '/assets/WhatsApp Video 2026-03-25 at 21.22.20.mp4',
  '/assets/WhatsApp Video 2026-03-24 at 21.59.29.mp4',
  '/assets/WhatsApp Video 2026-03-25 at 21.22.45.mp4'
]

function Carousel({ items, type }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    if (type === 'image') {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length)
      }, 4000)
      return () => clearInterval(interval)
    }
    // For videos, no fixed autoplay interval so each video can play fully.
    return undefined
  }, [items.length, type])

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  const onVideoEnded = () => {
    // advance only after full video playback
    next()
  }

  return (
    <div className="carousel">
      <button className="carousel-btn prev" onClick={prev}>‹</button>
      <div className="carousel-content">
        {type === 'image' ? (
          <img src={items[currentIndex]} alt={`Gallery ${currentIndex + 1}`} />
        ) : (
          <video
            key={items[currentIndex]}
            ref={videoRef}
            controls
            preload="metadata"
            src={items[currentIndex]}
            onEnded={onVideoEnded}
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <button className="carousel-btn next" onClick={next}>›</button>
      <div className="carousel-indicators">
        {items.map((_, idx) => (
          <span
            key={idx}
            className={`indicator ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  )
}

function Gallery() {
  return (
    <section className="page gallery-page">
      <h2>Our Memories</h2>
      <p className="subtext">A few of my favorite moments with you. Because who needs a photo album when we have these?</p>

      <div className="carousel-section">
        <h3>My View of You</h3>
        <Carousel items={images} type="image" />
      </div>

      <div className="carousel-section">
        <h3>Our Moving Memories</h3>
        <p className="banter">And the moving ones... Because your laugh in motion? Priceless.</p>
        <Carousel items={videos} type="video" />
      </div>
    </section>
  )
}

export default Gallery


