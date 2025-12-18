// Simple confetti effect
export default function confetti() {
  const colors = ["#8B5CF6", "#EC4899", "#10B981", "#F59E0B", "#3B82F6"];
  const confettiCount = 150;

  for (let i = 0; i < confettiCount; i++) {
    createConfettiPiece(colors[Math.floor(Math.random() * colors.length)], i);
  }
}

function createConfettiPiece(color, index) {
  const confetti = document.createElement("div");
  confetti.style.cssText = `
    position: fixed;
    width: ${Math.random() * 10 + 5}px;
    height: ${Math.random() * 10 + 5}px;
    background: ${color};
    left: ${Math.random() * 100}vw;
    top: -20px;
    opacity: ${Math.random() + 0.5};
    border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
    pointer-events: none;
    z-index: 9999;
    animation: confetti-fall ${Math.random() * 3 + 2}s linear forwards;
    animation-delay: ${index * 0.01}s;
  `;

  document.body.appendChild(confetti);

  // Add animation keyframes if not exists
  if (!document.querySelector("#confetti-style")) {
    const style = document.createElement("style");
    style.id = "confetti-style";
    style.textContent = `
      @keyframes confetti-fall {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(720deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Remove confetti after animation
  setTimeout(() => {
    confetti.remove();
  }, 5000);
}
