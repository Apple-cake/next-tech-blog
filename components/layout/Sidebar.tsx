/**
 * サイドバー
 */

import ProfileCard from "@/components/profile/ProfileCard";
import TableOfContents from "@/components/article/TableOfContents";
import { TocItem } from "@/lib/toc";

type Props = {
  toc?: TocItem[];
};

export default function Sidebar({ toc }: Props) {
  return (
    <aside className="w-full md:w-[260px] shrink-0">
      <div className="md:sticky md:top-12 space-y-8">
        {/* プロフィール */}
        <ProfileCard />

        {/* 目次 */}
        {toc && toc.length > 0 && (
          <div className="hidden md:block">
            <TableOfContents items={toc} />
          </div>
        )}
      </div>
    </aside>
  );
}
