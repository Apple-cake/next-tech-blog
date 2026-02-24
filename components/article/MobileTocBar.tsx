"use client";

/**
 * スマホ用 目次バー
 */

import { useEffect, useRef, useState } from "react";
import { TocItem } from "@/lib/toc";
import TableOfContents from "./TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

type Props = {
  items: TocItem[];
};

export default function MobileTocBar({ items }: Props) {
  const [isFixed, setIsFixed] = useState(false);
  const [open, setOpen] = useState(false);
  const [barHeight, setBarHeight] = useState(0);

  const barRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  /* ======================
    ヘッダー監視
  ====================== */
  useEffect(() => {
    headerRef.current = document.querySelector("header");

    if (!headerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  /* ======================
    高さ保持（ガクつき防止）
  ====================== */
  useEffect(() => {
    if (barRef.current) {
      setBarHeight(barRef.current.offsetHeight);
    }
  }, [isFixed]);

  return (
    <div className="md:hidden relative z-40">

      {/* 高さプレースホルダー */}
      {isFixed && (
        <div style={{ height: barHeight }} />
      )}

      {/* バー本体 */}
      <div
        ref={barRef}
        className={`
          w-full bg-white border-b border-zinc-200
          px-4 py-3 flex justify-end items-center
          transition-all duration-300
          ${isFixed ? "fixed top-0 left-0 right-0 shadow-md" : ""}
        `}
      >
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 font-xs text-zinc-500"
        >
          目次
          <FontAwesomeIcon
            icon={open ? faChevronUp : faChevronDown}
            className="text-sm"
          />
        </button>
      </div>

      {/* ======================
        目次ポップアップ
      ====================== */}
      {open && (
        <div
          className="fixed inset-0 z-50"
          onClick={() => setOpen(false)} // 背景クリックで閉じる
        >
          <div
            className={`
              z-50
              ${isFixed ? "fixed" : "absolute"}
            `}
            style={{
              top: isFixed
                ? barHeight - 8 // fixed時：画面上端 + バー高さ
                : barHeight - 8, // relative時：バー直下
              left: "52%",
              transform: "translateX(-50%)",
              width: "90vw",
              maxWidth: "90vw",
            }}
          >
            <div className="
              bg-white
              border border-zinc-200
              shadow-xl
              rounded-2xl
              px-5 py-5
              max-h-[60vh]
              overflow-y-auto
            ">
              <TableOfContents
                onItemClick={() => setOpen(false)}
                items={items}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
