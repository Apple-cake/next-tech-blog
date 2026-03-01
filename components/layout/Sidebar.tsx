/**
 * サイドバー
 */

import ProfileCard from "@/components/profile/ProfileCard";
import TableOfContents from "@/components/article/TableOfContents";
import TagList from "../ui/TagList";
import { TocItem } from "@/lib/toc";

type Props = {
  toc?: TocItem[];
};

export default function Sidebar({ toc }: Props) {
  return (
    <aside className="w-full md:w-[265px] shrink-0 space-y-8">

      {/* プロフィール */}
      <ProfileCard />
      {/* タグ一覧 */}
      <div className="hidden md:block">
        <TagList />
      </div>
      {/* 目次 */}
      {toc && toc.length > 0 && (
        <div className="hidden md:block md:sticky md:top-10">
          <TableOfContents items={toc} />
        </div>
      )}

    </aside>
  );
}
