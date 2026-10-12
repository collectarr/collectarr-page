import assert from 'node:assert/strict';
import { chromium } from 'playwright';

// Run against `npm run preview` after a build. Uses an isolated browser profile.
const base = process.env.PREVIEW_URL || 'http://127.0.0.1:4321/collectarr-site/';
const browser = await chromium.launch({
  headless: true,
  ...(process.env.BROWSER_CHANNEL ? { channel: process.env.BROWSER_CHANNEL } : {}),
});
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => {
    if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
  });
  await page.goto(base);
  await page.getByRole('link', { name: 'User manual', exact: true }).click();
  assert.equal(await page.getByRole('heading', { level: 1 }).innerText(), 'Collectarr user manual');
  await page.getByRole('button', { name: /Search/ }).first().click();
  await page.getByRole('textbox').fill('Credits');
  await page.locator('.pagefind-ui__result-link').first().waitFor();
  assert.match(await page.locator('dialog').innerText(), /Music/);
  await page.keyboard.press('Escape');
  for (const kind of ['music', 'book', 'comic', 'manga', 'movie', 'tv', 'anime', 'game', 'boardgame']) {
    await page.goto(`${base}manual/kinds/${kind}/`);
    assert.equal(await page.getByRole('heading', { level: 1 }).count(), 1);
  }
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 844 });
    for (const path of ['', 'manual/custom-fields/']) {
      await page.goto(base + path);
      const size = await page.evaluate(() => ({
        available: document.documentElement.clientWidth,
        content: document.documentElement.scrollWidth,
      }));
      assert.ok(size.content <= size.available, `Horizontal overflow at ${width}px: ${path}`);
    }
  }
  assert.deepEqual(errors, []);
  console.log('Manual navigation, search, nine kind chapters and responsive layouts passed.');
} finally {
  await browser.close();
}
