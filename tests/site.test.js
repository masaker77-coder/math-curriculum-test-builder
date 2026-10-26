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

test('old phone browsers can run it: no ES2020+ syntax in the sources, compat.js loads first', async () => {
  // ??, ?., ||=, &&=, ??= stop the whole program in browsers before 2020 (old Android WebViews, iOS 13), which leaves the
  // page without courses; compat.js (plain ES5) fills in newer built-ins and explains how to open the file if it cannot start
  for (const f of fs.readdirSync(new URL('../src/', import.meta.url)).filter(f => f.endsWith('.js'))) {
    const code = read(`src/${f}`).replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
    for (const [re, what] of [[/\?\?=?|\|\|=|&&=/, '?? / ??= / ||= / &&='], [/\?\.[A-Za-z_$(\[]/, '?.']])
      assert.ok(!re.test(code), `src/${f} uses ${what}: ${(code.match(new RegExp('.{0,40}' + re.source + '.{0,20}')) || [''])[0]}`);
  }
  const html = read('index.html');
  assert.ok(html.indexOf('src/compat.js') > 0 && html.indexOf('src/compat.js') < html.indexOf('src/main.js'));
  assert.ok(html.includes('id="bootNote"') && html.includes('<noscript>'));
  let acorn = null; try { acorn = (await import('/opt/node-tools/node_modules/acorn/dist/acorn.mjs')); } catch (e) {}
  if (acorn) {                                                          // where a parser is installed, check exactly
    acorn.parse(read('src/compat.js'), { ecmaVersion: 5 });
    for (const f of fs.readdirSync(new URL('../src/', import.meta.url)).filter(f => f.endsWith('.js') && f !== 'compat.js'))
      acorn.parse(read(`src/${f}`).replace(/import\.meta\.url/g, 'document.baseURI'), { ecmaVersion: 2018, sourceType: 'module' });   // as the offline build does
  }
});
