import './Page.css'

const images = [
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1533777324565-a040eb52fac2?auto=format&fit=crop&w=900&q=80',
]

function Gallery() {
  return (
    <section className="page gallery-page">
      <h2>Our Memories</h2>
      <p className="subtext">A few of my favorite moments with you.</p>

      <div className="photo-grid">
        {images.map((src, idx) => (
          <div key={idx} className="photo-card">
            <img src={src} alt={`Memory ${idx + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <p className="note">(Replace these placeholder images with your date photos.)</p>
    </section>
  )
}

export default Gallery
