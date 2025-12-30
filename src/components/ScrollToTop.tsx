import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositions = new Map<string, number>();

export function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const prevPathname = useRef<string | null>(null);

  useEffect(() => {
    // Save scroll position of the previous page before navigating
    if (prevPathname.current && prevPathname.current !== pathname) {
      scrollPositions.set(prevPathname.current, window.scrollY);
    }

    // If going back/forward (POP), restore scroll position
    if (navigationType === "POP") {
      const savedPosition = scrollPositions.get(pathname);
      if (savedPosition !== undefined) {
        setTimeout(() => window.scrollTo(0, savedPosition), 0);
      }
    } else {
      // New navigation (PUSH/REPLACE), scroll to top
      window.scrollTo(0, 0);
    }

    prevPathname.current = pathname;
  }, [pathname, navigationType]);

  return null;
}
