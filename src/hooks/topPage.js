import React, { useCallback } from "react";

export default function TopButton() {
  const scrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
 
 
    return scrollTop
}