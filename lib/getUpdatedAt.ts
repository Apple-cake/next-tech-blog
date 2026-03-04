/**
 * 指定ファイルの最終更新日を取得する
 */

import fs from "fs";
import path from "path";

export function getUpdatedMeta(relativePath: string) {
  const absolutePath = path.join(process.cwd(), relativePath);
  const stats = fs.statSync(absolutePath);

  const updated = stats.mtime;

  const year = updated.getFullYear();
  const month = String(updated.getMonth() + 1).padStart(2, "0");
  const day = String(updated.getDate()).padStart(2, "0");

  return {
    formatted: `${year}.${month}.${day}`, // 表示用
    timestamp: updated.getTime(),        // ソート用
  };
}