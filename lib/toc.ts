/**
 * HTML文字列から目次情報を抽出する
 */
export type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function extractHeadings(html: string): TocItem[] {
  const headingRegex = /<(h2|h3).*?>(.*?)<\/\1>/g;

  const items: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(html)) !== null) {
    const level = match[1] === "h2" ? 2 : 3;
    const text = match[2].replace(/<[^>]+>/g, "");

    const id = text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-ぁ-んァ-ン一-龥]/g, "");

    items.push({ id, text, level });
  }

  return items;
}