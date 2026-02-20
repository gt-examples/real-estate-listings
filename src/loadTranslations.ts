import fs from "fs";
import path from "path";

export default async function loadTranslations(locale: string) {
  const filePath = path.join(process.cwd(), "public", "_gt", `${locale}.json`);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
