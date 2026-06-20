import { useEffect, useState } from "react";

interface HideOnScrollOptions {
  threshold?: number;
  revealOffset?: number;
}

interface HideOnScrollState {
  hidden: boolean;
  scrolled: boolean;
}

const useHideOnScroll = ({
  threshold = 24,
  revealOffset = 8,
}: HideOnScrollOptions = {}): HideOnScrollState => {
  const [state, setState] = useState<HideOnScrollState>({
    hidden: false,
    scrolled: false,
  });

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;

      setState((prev) => {
        const scrolled = y > threshold;
        let hidden = prev.hidden;

        if (Math.abs(delta) > revealOffset) {
          hidden = delta > 0 && y > threshold;
        }

        if (hidden === prev.hidden && scrolled === prev.scrolled) {
          return prev;
        }
        return { hidden, scrolled };
      });

      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, revealOffset]);

  return state;
};

export default useHideOnScroll;
