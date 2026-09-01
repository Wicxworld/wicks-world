import { mkdir, writeFile, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public");

const jobs = [
  ["work/brand-film-language/cover.jpg", "photo-1485846234645-a62644f84728"],
  ["work/brand-film-language/hero.jpg", "photo-1517604931442-7e0c8ed2963c"],
  ["work/brand-film-language/sequence.jpg", "photo-1440404653325-ab127d49abc1"],
  ["work/brand-film-language/finishing.jpg", "photo-1536440136628-849c177e76a1"],
  ["work/commercial-stills/cover.jpg", "photo-1490481651871-ab68de25d43d"],
  ["work/commercial-stills/hero.jpg", "photo-1490481651871-ab68de25d43d"],
  ["work/commercial-stills/sequence.jpg", "photo-1523275335684-37898b6baf30"],
  ["work/commercial-stills/finishing.jpg", "photo-1469334031218-e382a71b716b"],
  ["work/campaign-content-systems/cover.jpg", "photo-1611162617213-7d7a39e9b1d7"],
  ["work/campaign-content-systems/hero.jpg", "photo-1611162617213-7d7a39e9b1d7"],
  ["work/campaign-content-systems/sequence.jpg", "photo-1553877522-43269d4ea984"],
  ["work/campaign-content-systems/finishing.jpg", "photo-1552664730-d307ca884978"],
  ["about/lagos.jpg", "photo-1578271887552-5ac3a72752bc"],
  ["services/creative-direction.jpg", "photo-1533750349088-cd871a92f312"],
  ["services/photography.jpg", "photo-1516035069371-29a1b244cc32"],
  ["services/cinematography-film.jpg", "photo-1492693429561-1c283eb1b2e8"],
  ["services/video-editing-post.jpg", "photo-1574717024653-61fd2cf4d44d"],
  ["services/motion-visual-design.jpg", "photo-1550745165-9bc0b252726f"],
  ["services/content-production.jpg", "photo-1598488035139-bdbb2231ce04"],
  ["solutions/brands.jpg", "photo-1529139574466-a303027c1d8b"],
  ["solutions/businesses.jpg", "photo-1497366216548-37526070297c"],
  ["solutions/artists-creatives.jpg", "photo-1513364776144-60967b0f800f"],
  ["solutions/organizations.jpg", "photo-1559027615-cd4628902d4a"],
  ["solutions/individuals.jpg", "photo-1544005313-94ddf0286df2"],
];

async function ensure(rel, id) {
  const dest = join(root, rel);
  try {
    const s = await stat(dest);
    if (s.size > 20000) {
      console.log("skip", rel, s.size);
      return;
    }
  } catch {}
  await mkdir(dirname(dest), { recursive: true });
  const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" }, redirect: "follow" });
  if (!res.ok) throw new Error(`download failed ${rel} ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 20000 || buf[0] !== 0xff || buf[1] !== 0xd8) {
    throw new Error(`invalid jpeg ${rel} size=${buf.length}`);
  }
  await writeFile(dest, buf);
  console.log("ok", rel, buf.length);
}

async function main() {
  for (const [rel, id] of jobs) await ensure(rel, id);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
