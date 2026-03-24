import { useState } from "react";
import "./Page.css";

function Proposal() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYes = () => {
    setShowConfetti(true);
    setTimeout(() => {
      // Redirect to WhatsApp with message
      window.location.href =
        "https://wa.me/1234567890?text=Yes!%20Let%27s%20video%20call%20now!%20❤️";
    }, 2000);
  };

  const handleNoHover = (e) => {
    const btn = e.target;
    const offsetX = (Math.random() - 0.5) * 200;
    const offsetY = (Math.random() - 0.5) * 100;
    btn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  };

  return (
    <section className="page proposal-page">
      <h2>The Big Moment</h2>
      <p className="subtext">
        I’ve literally been practicing this in the mirror for weeks… even gave
        myself pep talks. So please be kind if I fumble a little 😅
      </p>

      <div className="question-section">
        <p className="banter">
          Okay, so here’s the thing… I’ve been thinking about this a
          lot—probably more than I should admit.
        </p>

        <p className="banter">
          You’re honestly amazing, like dangerously amazing… and at this point,
          just being friends feels like I’m underselling how I really feel about
          you.
        </p>
        <h3>Will you be my girlfriend?</h3>
        <p className="banter">
          No pressure, but if you say yes, I'll probably do a happy dance.
        </p>

        <div className="buttons">
          <button className="yes-btn" onClick={handleYes}>
            YES 💖
          </button>
          <button className="no-btn" onMouseEnter={handleNoHover}>
            NO 😅
          </button>
        </div>

        {showConfetti && (
          <div className="response">
            <p>You just made me the happiest person alive! ❤️</p>
            <p className="banter">
              Redirecting to WhatsApp for our video call...
            </p>
            <div className="confetti">🎉🎊✨</div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Proposal;
