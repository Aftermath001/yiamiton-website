import { useEffect } from 'react'
import './Page.css'

function Home() {

  return (
    <section className="page home-page">
      <div className="poem-section">
        <h2>Our Story in Verse</h2>
        <div className="poem">
          <p>
            In the tapestry of life, where paths twist and turn,<br />
            I wandered through storms, lessons I had to learn.<br />
            From quiet moments alone to laughter shared with friends,<br />
            Each step led me closer to where our story begins.<br />
            Then came the day, under skies so vast and blue,<br />
            When fate introduced me to someone as wonderful as you.<br />
            Your smile, a beacon, your heart, a gentle guide,<br />
            In your presence, all my doubts began to subside.
          </p>
          <p>
            Now, looking back, I see how perfectly it all aligns,<br />
            Every challenge, every joy, now makes complete sense.<br />
            I'm lucky beyond measure, blessed with your light,<br />
            In this dance of destiny, you're my perfect match, my delight.<br />
            With you, every day feels like a new adventure,<br />
            Your love, my anchor, in life's grand venture.<br />
            Forever grateful for the path that brought us here,<br />
            My love, my heart, my everything, my dear.
          </p>
        </div>
        <p className="banter">Okay, that was cheesy, but you know I mean every word. 😘</p>
      </div>

      <div className="story-grid">
        <article className="story-card cartoon-card">
          <div className="cartoon-scene">
            <div className="character boy">
              <div className="head"></div>
              <div className="body"></div>
              <div className="arm left"></div>
              <div className="arm right"></div>
              <div className="leg left"></div>
              <div className="leg right"></div>
            </div>
            <div className="character girl">
              <div className="head"></div>
              <div className="body"></div>
              <div className="arm left"></div>
              <div className="arm right"></div>
              <div className="leg left"></div>
              <div className="leg right"></div>
            </div>
            <div className="hearts">
              <span>💖</span>
              <span>💕</span>
              <span>❤️</span>
            </div>
          </div>
          <div className="card-overlay">
            <h3>Our first time we met…</h3>
            <p>At that cozy café, your laugh lit up the entire room. Who knew coffee could be this magical? That little coffee date… I still remember it like it was yesterday. The way you smiled across the table, 
                how your laugh filled that cozy café—it made everything else fade away. I went in for coffee, but I walked out thinking about you.</p>
          </div>
        </article>
        <article className="story-card">
          <h3>When I knew you were special…</h3>
          <p>The way you understood the quiet parts of me. You're basically a mind reader, but cuter. It wasn’t one big moment—it was the little things. The way you understood me without me saying much, the way you listened, the way you just… got me. That’s when it hit me—you’re not just special, you’re rare.</p>
        </article>
        <article className="story-card">
          <h3>Every small thing I love…</h3>
          <p>Your laugh, your stubborn kindness, your gentle strength. Basically, you're a superhero in disguise.Your laugh that I could listen to all day, your kindness that shows up in the smallest ways, your strength that you carry so effortlessly. Being around you feels easy, real… like exactly where I’m supposed to be.</p>
        </article>
      </div>
    </section>
  )
}

export default Home


