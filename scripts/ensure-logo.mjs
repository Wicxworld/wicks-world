import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const b64Path = join(__dirname, "wicks-world-logo.b64");
const out = join(__dirname, "..", "public", "brand", "wicks-world-logo.png");
const b64 = readFileSync(b64Path, "utf8").replace(/\s+/g, "");
mkdirSync(dirname(out), { recursive: true });
const buf = Buffer.from(b64, "base64");
writeFileSync(out, buf);
console.log("wrote", out, buf.length, "bytes");
