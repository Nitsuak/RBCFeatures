document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".feature-card");
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // play/pause video for perf
        const vid = entry.target.querySelector("video");
        if (vid) vid.play();
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach((card) => io.observe(card));
});
