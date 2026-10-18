document.getElementById("year").textContent = new Date().getFullYear();

const cursorLightQuery = window.matchMedia(
  "(hover: hover) and (pointer: fine)",
);

if (
  cursorLightQuery.matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  let animationFrame;

  window.addEventListener("pointermove", ({ clientX, clientY }) => {
    cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(() => {
      document.body.style.setProperty("--cursor-x", `${clientX}px`);
      document.body.style.setProperty("--cursor-y", `${clientY}px`);
    });
  });
}
