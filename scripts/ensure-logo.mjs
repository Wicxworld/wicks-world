import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "..", "public", "brand", "wicks-world-logo.png");
const single = join(__dirname, "wicks-world-logo.b64");
const partsDir = join(__dirname, "logo-parts");

let b64 = "";
try {
  if (existsSync(single)) {
    b64 = readFileSync(single, "utf8");
  } else if (existsSync(partsDir)) {
    const files = readdirSync(partsDir).filter((f) => f.endsWith(".b64")).sort();
    b64 = files.map((f) => readFileSync(join(partsDir, f), "utf8")).join("");
  }
} catch (err) {
  console.warn("ensure-logo: skipped read", err);
}

b64 = b64.replace(/\s+/g, "");
if (!b64) {
  console.warn("ensure-logo: no embedded logo source; keeping existing public brand file");
  process.exit(0);
}

mkdirSync(dirname(out), { recursive: true });
const buf = Buffer.from(b64, "base64");
if (buf.length < 100 || buf[0] !== 0x89 || buf[1] !== 0x50) {
  console.warn("ensure-logo: decoded payload is not a PNG; keeping existing file");
  process.exit(0);
}
writeFileSync(out, buf);
console.log("wrote", out, buf.length, "bytes");
