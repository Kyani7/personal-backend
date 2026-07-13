import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Smooth-scrolls to the element whose id matches the current location hash
 */

export function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    const id = hash.replace("#", "");
    // Wait a tick so the target section has mounted before we scroll.
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);

    return () => window.clearTimeout(timer);
  }, [hash]);
}
