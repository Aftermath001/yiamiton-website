import './Page.css'

function Music() {
  return (
    <section className="page music-page">
      <h2>Your Favorite Song</h2>
      <p className="subtext">I picked this one just for us.</p>

      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/gyCPkNBz918"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="caption">Turn it on, close your eyes, and think of us.</p>

      <p className="message">
        That song Feel the Love just feels like us. From that first coffee date, vibes zilikuwa tu effortless—no pressure, no pretending, just real energy. The way we talk, laugh, and understand each other bila force… ni kama everything just fell into place. Honestly, ukiiskiza, it's like our story iko kwa every beat—simple, genuine, na full of love. Na si mchezo, you really make life feel softer and better.
      </p>
    </section>
  )
}

export default Music
