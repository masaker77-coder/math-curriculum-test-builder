/* A tiny bundler for the standalone practice app: turns our ES modules into one classic script.
   Each module becomes a function scope; its `export` declarations become the fields of __m[name],
   and `import { a, b as c } from './x.js'` becomes `const { a, b: c } = __m.x`. Pure: no DOM. */
export function bundle(sources, order){
  const out=['const __m = {};'];
  for(const name of order){
    let src=sources[name];
    const names=[...src.matchAll(/^export\s+(?:async\s+)?(?:const|let|function)\s+([\w$]+)/gm)].map(m=>m[1]);
    src=src.replace(/import\s*\{([^}]*)\}\s*from\s*'\.\/([\w-]+)\.js';?/g,
      (_, list, from)=>`const { ${list.split(',').map(s=>s.trim()).filter(Boolean).map(s=>s.replace(/\s+as\s+/,': ')).join(', ')} } = __m['${from}'];`);
    src=src.replace(/^export\s+/gm,'');
    out.push(`__m['${name}'] = (() => {\n${src}\nreturn { ${names.join(', ')} };\n})();`);
  }
  return out.join('\n').replace(/<\/script/gi,'<\\/script');
}
