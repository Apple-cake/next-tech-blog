"use client";

/**
 * 記事目次
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { TocItem } from "@/lib/toc";

type Props = {
  items: TocItem[];
  onItemClick?: () => void;
};

export default function TableOfContents({
  items,
  onItemClick,
}: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -80% 0px",
        threshold: 0.2,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [items]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const isMobile = window.innerWidth < 768;
    const offset = isMobile ? 70 : 20;

    const position =
      el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  if (!items.length) return null;

  return (
    <div className="md:mt-10 md:pt-6">
      <p className="text-sm font-semibold mb-6 tracking-wide text-zinc-700">
        目次
      </p>

      <div className="relative pl-6">
        {/* 縦線 */}
        <div className="absolute left-2 top-[4px] bottom-0 h-[calc(100%-8px)] w-[2px] bg-[var(--brand-300)]" />

        <ul className="space-y-4 text-sm">
          {items.map((item) => {
            const isActive = activeId === item.id;
            const isH2 = item.level === 2;

            return (
              <li
                key={item.id}
                className={`relative ${
                  isH2 ? "pl-0" : "pl-4"
                }`}
              >
                {/* 丸 */}
                <span
                  className={`
                    absolute -left-[15px] top-[4px]
                    -translate-x-1/2
                    rounded-full
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-[var(--brand-500)] "
                        : "bg-[var(--brand-300)] border-2 border-zinc-50"
                    }
                    ${
                      isH2
                        ? "w-3 h-3"
                        : "w-2 h-2"
                    }
                    ${
                      isH2
                        ? isActive
                          ? "border-2 border-[var(--brand-300)] scale-120"
                          : ""
                        : isActive
                          ? "border-transparent"
                          : ""
                    }
                  `}
                />

                <Link
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onItemClick?.();
                    scrollToHeading(item.id);
                  }}
                  className={`
                    transition-colors
                    ${
                      isActive
                        ? "text-zinc-900"
                        : "text-zinc-400 hover:text-zinc-900"
                    }
                    ${
                      isH2
                        ? "font-semibold"
                        : "font-normal"
                    }
                  `}
                >
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
