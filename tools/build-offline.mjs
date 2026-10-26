// Builds dist/math-test-builder-offline.html: the whole program in one file that opens without a server or internet
// (browsers do not load ES modules from file://, so the modules are bundled into one classic script).
// Run: node tools/build-offline.mjs
import fs from 'node:fs';
import { bundle } from '../src/bundle.js';

const root = new URL('../', import.meta.url), read = p => fs.readFileSync(new URL(p, root), 'utf8');
const order = ['helpers', 'viz', 'proofs', 'intros', 'curriculum', 'i18n', 'cover', 'generators', 'answer', 'practice', 'bundle', 'guide', 'ui', 'main'];
const src = Object.fromEntries(order.map(n => [n, read(`src/${n}.js`)]));
const appOnly = ['helpers', 'viz', 'proofs', 'intros', 'generators', 'answer', 'practice'];        // what the practice-app download needs
const forBundle = { ...src, ui: src.ui.replace(/import\.meta\.url/g, 'document.baseURI') };
const js = `window.__APP_SRC = ${JSON.stringify(Object.fromEntries(appOnly.map(n => [n, src[n]])))};\n` + bundle(forBundle, order);
const html = read('index.html')
  .replace(/<link rel="stylesheet" href="src\/styles\.css">/, () => `<style>\n${read('src/styles.css')}\n</style>`)
  .replace(/<link rel="(manifest|icon|apple-touch-icon)"[^>]*>\n/g, '')              // the installable-app links only work on the website
  .replace(/<script type="module" src="src\/main\.js"><\/script>/, () => `<script>\n${js.replace(/<\/script/gi, '<\\/script')}\n</script>`);
if (html.includes('src/main.js') || html.includes('src/styles.css')) throw new Error('index.html layout changed: update the build');
fs.mkdirSync(new URL('dist/', root), { recursive: true });
fs.writeFileSync(new URL('dist/math-test-builder-offline.html', root), html);
console.log(`dist/math-test-builder-offline.html  ${(html.length / 1024).toFixed(0)} KB`);
