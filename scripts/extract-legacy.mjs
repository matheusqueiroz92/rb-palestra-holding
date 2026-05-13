import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const legacyPath = path.join(root, "legacy", "reference.html");
const html = fs.readFileSync(legacyPath, "utf8");

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (!styleMatch) throw new Error("No <style> block found");
fs.mkdirSync(path.join(root, "src", "styles"), { recursive: true });
fs.writeFileSync(path.join(root, "src", "styles", "global.css"), styleMatch[1].trim() + "\n");

const imgDir = path.join(root, "public", "images");
fs.mkdirSync(imgDir, { recursive: true });

let processed = html;
const dataUrlRe = /src="(data:image\/jpeg;base64,[^"]+)"/g;
let idx = 0;
for (const m of html.matchAll(dataUrlRe)) {
  idx += 1;
  const dataUrl = m[1];
  const b64 = dataUrl.split(",")[1];
  const buf = Buffer.from(b64, "base64");
  const name = idx === 1 ? "hero.jpg" : `image-${idx}.jpg`;
  fs.writeFileSync(path.join(imgDir, name), buf);
  processed = processed.replace(m[0], `src="/images/${name}"`);
}

const bodyMatch = processed.match(/<body>([\s\S]*?)<script>/);
if (!bodyMatch) throw new Error("No body block found");
fs.writeFileSync(path.join(root, "legacy", "body-processed.html"), bodyMatch[1].trim() + "\n");

console.log("Extracted: global.css, public/images/*.jpg, legacy/body-processed.html");
