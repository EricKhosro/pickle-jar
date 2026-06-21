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
  revealOffset = 6,
}: HideOnScrollOptions = {}): HideOnScrollState => {
  const [state, setState] = useState<HideOnScrollState>({
    hidden: false,
    scrolled: false,
  });

  useEffect(() => {
    let lastY = window.scrollY;
    let acc = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const diff = y - lastY;
      lastY = y;

      if ((acc > 0 && diff < 0) || (acc < 0 && diff > 0)) acc = 0;
      acc += diff;

      setState((prev) => {
        const scrolled = y > threshold;
        let hidden = prev.hidden;

        if (y <= threshold) {
          hidden = false;
        } else if (acc > revealOffset) {
          hidden = true;
        } else if (acc < -revealOffset) {
          hidden = false;
        }

        if (hidden === prev.hidden && scrolled === prev.scrolled) {
          return prev;
        }
        return { hidden, scrolled };
      });
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
