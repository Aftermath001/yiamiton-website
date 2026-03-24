import { useState, useEffect } from 'react'
import './Page.css'

// Import all image assets
import img1 from '../assets/WhatsApp Image 2026-03-24 at 21.54.47 (2).jpeg'
import img2 from '../assets/WhatsApp Image 2026-03-24 at 21.54.47 (3).jpeg'
import img3 from '../assets/WhatsApp Image 2026-03-24 at 21.54.47 (4).jpeg'
import img4 from '../assets/WhatsApp Image 2026-03-24 at 21.54.47 (5).jpeg'
import img5 from '../assets/WhatsApp Image 2026-03-24 at 21.54.47 (6).jpeg'
import img6 from '../assets/WhatsApp Image 2026-03-24 at 21.54.47 (7).jpeg'
import img7 from '../assets/WhatsApp Image 2026-03-24 at 21.54.47.jpeg'
import img8 from '../assets/WhatsApp Image 2026-03-24 at 21.54.48 (1).jpeg'
import img9 from '../assets/WhatsApp Image 2026-03-24 at 21.54.48 (2).jpeg'
import img10 from '../assets/WhatsApp Image 2026-03-24 at 21.54.48 (3).jpeg'
import img11 from '../assets/WhatsApp Image 2026-03-24 at 21.54.48 (4).jpeg'
import img12 from '../assets/WhatsApp Image 2026-03-24 at 21.54.48 (5).jpeg'
import img13 from '../assets/WhatsApp Image 2026-03-24 at 21.54.48 (6).jpeg'
import img14 from '../assets/WhatsApp Image 2026-03-24 at 21.54.48 (7).jpeg'
import img15 from '../assets/WhatsApp Image 2026-03-24 at 21.54.48 (8).jpeg'
import img16 from '../assets/WhatsApp Image 2026-03-24 at 21.54.48.jpeg'
import img17 from '../assets/WhatsApp Image 2026-03-24 at 21.54.49 (1).jpeg'
import img18 from '../assets/WhatsApp Image 2026-03-24 at 21.54.49 (2).jpeg'
import img19 from '../assets/WhatsApp Image 2026-03-24 at 21.54.49.jpeg'
import img20 from '../assets/WhatsApp Image 2026-03-24 at 21.59.14 (1).jpeg'
import img21 from '../assets/WhatsApp Image 2026-03-24 at 21.59.14 (2).jpeg'
import img22 from '../assets/WhatsApp Image 2026-03-24 at 21.59.14.jpeg'
import img23 from '../assets/WhatsApp Image 2026-03-24 at 21.59.30.jpeg'
import img24 from '../assets/WhatsApp Image 2026-03-24 at 21.59.31.jpeg'

// Import all video assets
import vid1 from '../assets/WhatsApp Video 2026-03-24 at 21.54.49.mp4'
import vid2 from '../assets/WhatsApp Video 2026-03-24 at 21.59.12.mp4'
import vid3 from '../assets/WhatsApp Video 2026-03-24 at 21.59.29.mp4'

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24
]

const videos = [vid1, vid2, vid3]

function Carousel({ items, type }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [items.length])

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)

  return (
    <div className="carousel">
      <button className="carousel-btn prev" onClick={prev}>‹</button>
      <div className="carousel-content">
        {type === 'image' ? (
          <img src={items[currentIndex]} alt={`Gallery ${currentIndex + 1}`} />
        ) : (
          <video controls>
            <source src={items[currentIndex]} type="video/mp4" />
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
        <h3>Photos</h3>
        <Carousel items={images} type="image" />
      </div>

      <div className="carousel-section">
        <h3>Videos</h3>
        <p className="banter">And the moving ones... Because your laugh in motion? Priceless.</p>
        <Carousel items={videos} type="video" />
      </div>
    </section>
  )
}

export default Gallery


