import { useCallback } from "react";

export default function useSmoothScroll(defaultOffset = 0) {
  const scrollTo = useCallback((id, useOffset = false) => {
    const el = document.getElementById(id);

    if (el) {
      if (useOffset || defaultOffset > 0) {
        const y = el.getBoundingClientRect().top + window.scrollY - defaultOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      } else {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [defaultOffset]);

  return scrollTo;
}
