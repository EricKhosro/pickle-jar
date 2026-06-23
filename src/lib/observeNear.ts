export default function observeNear(
  el: Element,
  onNear: () => void,
  rootMargin = "300px 0px",
): () => void {
  const io = new IntersectionObserver(
    (entries, obs) => {
      if (entries[0].isIntersecting) {
        obs.disconnect();
        onNear();
      }
    },
    { rootMargin },
  );
  io.observe(el);
  return () => io.disconnect();
}
