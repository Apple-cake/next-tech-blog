"use client";

/**
 * 「トップへ戻る」ボタン
 */

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50
        w-14 h-14
        rounded-full
        bg-zinc-700 text-white
        shadow-lg
        flex items-center justify-center
        transition-all duration-300
        hover:bg-zinc-900
        ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"}
      `}
      aria-label="ページトップへ戻る"
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
}