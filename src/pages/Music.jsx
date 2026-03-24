import './Page.css'

function Music() {
  return (
    <section className="page music-page">
      <h2>Your Favorite Song</h2>
      <p className="subtext">I picked this one just for us.</p>

      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/3JZ4pnNtyxQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="caption">Turn it on, close your eyes, and think of us.</p>
    </section>
  )
}

export default Music
