import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const productLinks = [
  // Smartphones
  { id: 101, url: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-oranzhevyi-145468241/' },
  { id: 102, url: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/' },
  { id: 103, url: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-chernyi-145466647/' },
  { id: 104, url: 'https://kaspi.kz/shop/p/apple-iphone-16-256gb-chernyi-123728177/' },
  { id: 105, url: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/' },

  // Laptops
  { id: 201, url: 'https://kaspi.kz/shop/p/hp-victus-gaming-laptop-15-6-16-gb-ssd-512-gb-win-11-15-fb1000ci-a9dt1ea-124536440/' },
  { id: 202, url: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-512-gb-dos-g614ju-n3229-90nr0cc1-m00dp0-112210028/' },
  { id: 203, url: 'https://kaspi.kz/shop/p/microsoft-surface-laptop-7-x-elite-13-8-16-gb-ssd-512-gb-win-11-zgp-00037-142210379/' },
  { id: 204, url: 'https://kaspi.kz/shop/p/huawei-matebook-d14-14-16-gb-ssd-512-gb-win-11-mendelg-w5651d-137116014/' },
  { id: 205, url: 'https://kaspi.kz/shop/p/hp-laptop-15-fd0198ci-15-6-16-gb-ssd-512-gb-bez-os-ae0k3ea-130770536/' },

  // Headphones
  { id: 301, url: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-serebristyi-105577599/' },
  { id: 302, url: 'https://kaspi.kz/shop/p/naushniki-sennheiser-momentum-4-wireless-headphones-bluetooth-seryi-120662700/' },
  { id: 303, url: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-headphones-chernyi-115912667/' },
  { id: 304, url: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/' },
  { id: 305, url: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-770nc-chernyi-112143394/' },

  // Tablets
  { id: 401, url: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-8-gb-128-gb-sinii-113807096/' },
  { id: 402, url: 'https://kaspi.kz/shop/p/lenovo-tab-p12-12-7-djuim-8-gb-128-gb-seryi-115734582/' },
  { id: 403, url: 'https://kaspi.kz/shop/p/teclast-tablet-m40-10-1-djuim-6-gb-128-gb-chernyi-102089793/' },
  { id: 404, url: 'https://kaspi.kz/shop/p/blackview-tab-60-4g-8-68-djuim-4-gb-128-gb-seryi-113585095/' },
  { id: 405, url: 'https://kaspi.kz/shop/p/lenovo-tab-m10-plus-tb128xu-10-6-djuim-4-gb-128-gb-serebristyi-106195719/' },
];
const OUT_DIR = path.resolve("src/assets/products");

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function download(url, outPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(outPath, buf);
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

await ensureDir(OUT_DIR);

for (const p of productLinks) {
  const dir = path.join(OUT_DIR, String(p.id));
  await ensureDir(dir);

  console.log("Open:", p.url);
  await page.goto(p.url, { waitUntil: "domcontentloaded" });

  // Даем странице загрузить контент/галерею
  await page.waitForTimeout(1500);

  // Пытаемся найти изображения товара.
  // На Kaspi часто картинки в <img>, иногда в background-image.
  const urls = await page.evaluate(() => {
    const set = new Set();

    // img
    document.querySelectorAll("img").forEach((img) => {
      const src = img.getAttribute("src") || "";
      if (src.includes("kaspi") || src.includes("cdn") || src.includes("resources")) set.add(src);
    });

    // background-image
    document.querySelectorAll("*").forEach((el) => {
      const bg = getComputedStyle(el).backgroundImage || "";
      const m = bg.match(/url\(["']?(.*?)["']?\)/);
      if (m && m[1] && (m[1].includes("kaspi") || m[1].includes("cdn") || m[1].includes("resources"))) {
        set.add(m[1]);
      }
    });

    return Array.from(set);
  });

  // Берем первые 3 уникальные ссылки
  const top3 = urls.filter(Boolean).slice(0, 3);

  if (top3.length < 3) {
    console.warn(`⚠️ For product ${p.id} found only ${top3.length} image(s). You may need to tweak selectors.`);
  }

  for (let i = 0; i < top3.length; i++) {
    const imgUrl = top3[i];
    const file = path.join(dir, `${i + 1}.jpg`);
    console.log("  download:", imgUrl);
    try {
      await download(imgUrl, file);
    } catch (e) {
      console.warn("  failed:", imgUrl, e.message);
    }
  }
}

await browser.close();
console.log("Done. Images saved to:", OUT_DIR);
