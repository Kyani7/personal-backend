// src/hooks/usePageTitle.ts
import { useEffect } from "react";

function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | Hima Aus`;
  }, [title]);
}
export default  usePageTitle;