import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';

const root = resolve('dist');
const base = (process.env.SITE_BASE ?? '/collectarr-site').replace(/\/$/, '');
const files = [];
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.name.endsWith('.html')) files.push(path);
  }
}
await walk(root);
const failures = [];
for (const file of files) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/\b(?:href|src)="([^"<>]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    if (/^(?:https?:|mailto:|data:|javascript:|#|\/\/)/.test(href)) continue;
    const path = decodeURIComponent(href.split(/[?#]/)[0]);
    let target;
    if (path.startsWith('/')) {
      if (base && path !== base && !path.startsWith(`${base}/`)) {
        failures.push(`${file}: outside configured base: ${href}`);
        continue;
      }
      target = resolve(root, '.' + (base ? path.slice(base.length) : path));
    } else target = resolve(dirname(file), path);
    try {
      if ((await stat(target)).isDirectory()) await stat(resolve(target, 'index.html'));
    } catch { failures.push(`${file}: missing ${href}`); }
  }
}
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
else console.log(`Checked local links and assets in ${files.length} generated pages.`);
