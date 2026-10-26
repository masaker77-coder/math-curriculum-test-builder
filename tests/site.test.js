// The installable website (PWA): the service worker caches every module, and the manifest points at real icons.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const read = p => fs.readFileSync(new URL(`../${p}`, import.meta.url), 'utf8');

test('service worker caches every source module and the styles', () => {
  const sw = read('sw.js');
  for (const f of fs.readdirSync(new URL('../src/', import.meta.url)).filter(f => /\.(js|css)$/.test(f)))
    assert.ok(sw.includes(`'./src/${f}'`), `sw.js SHELL is missing src/${f}`);
});

test('manifest is valid JSON and its icons exist', () => {
  const m = JSON.parse(read('manifest.webmanifest'));
  assert.ok(m.name && m.short_name && m.start_url && m.display === 'standalone');
  for (const ic of m.icons) assert.ok(fs.existsSync(new URL(`../${ic.src}`, import.meta.url)), ic.src);
  assert.ok(m.icons.some(i => i.sizes === '192x192') && m.icons.some(i => i.sizes === '512x512'));
});
