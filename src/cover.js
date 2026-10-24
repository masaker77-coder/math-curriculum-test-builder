/* Cover illustration for the study booklet: an SVG collage whose motifs come from the booklet's topics
   (a parabola for algebra, a bell curve for statistics, a matrix for linear algebra, …). Pure: no DOM. */

/* which family of motif a topic belongs to (first matching rule wins) */
const FAMILIES = [
  ['stats',    /^(ci|test|sampleSize|anova|zScore|meanMedianMode|binomial|joint|marginal|conditional|correlation|independence|sumOfRV|bivariate|multinomial|expectedValue|variance|probability|combinations|permutations)/],
  ['or',       /^(lp|simplex)/],
  ['tree',     /^decision/],
  ['network',  /^(transport|assignment)/],
  ['graph',    /(Graph|Edges|degreeSum|eulerCircuit|chromatic)/],
  ['matrix',   /^(matrix|determinant|transpose|scalarMultiply|trace|inverse|matVec|eigen|gaussJordan|systems|linearSystem2)/],
  ['complex',  /^(complex|iPowers)/],
  ['numth',    /^(mod|isPrime|eulerPhi|divisor|linearCongruence|crt|primeFactorization|gcfLcm|isUnit|zeroDivisors|polyEvalModP|fieldCheck|element|group|permutationOrder|lagrange)/],
  ['pde',      /^(fd|pde|wave|laplacian|heat)/],
  ['vector',   /^(dotProduct|crossProduct|vectorMagnitude|divergence|gradient|helix|circleCurvature|parabolaCurvature)/],
  ['geometry', /^(rectangle|triangle|circle|pythagorean|parallelogram|trapezoid|volume|polygon|distance|midpoint|slope|trig|degRad|radToDeg|reference)/],
  ['calculus', /^(deriv|integral|defIntegral|limit|tangent|second|avgRate|riemann|avgValue|critical|euler|improvedEuler|newton|bisection|trapezoidRule|charRoots|expGrowth|ivp|gamma|beta|legendre|chebyshev|fredholm|l2|operatorNorm|vectorNorms)/],
  ['sets',     /^(set|powerSet|cartesian|logic|function|numberSets|intervalNotation|topology|surface)/],
  ['series',   /^(seq|geometric|telescoping|epsilon|arithmetic)/],
  ['finance',  /^(simpleInterest|compoundInterest|presentValue|effectiveRate|annuity|percentOf|breakEven)/],
  ['algebra',  /./],
];
export const familyOf = t => FAMILIES.find(([,re])=>re.test(t))[0];

/* formulas scattered faintly in the background, by family */
const GLYPHS = {
  algebra:['ax² + bx + c = 0','x = −b ± √Δ / 2a','(x − r₁)(x − r₂)','y = mx + b'],
  calculus:['∫ f(x) dx','f′(x) = lim Δy/Δx','dy/dx','Σ f(xᵢ)Δx'],
  stats:['μ ± z σ/√n','P(X = k)','σ²','H₀ : μ = μ₀'],
  matrix:['det A','A⁻¹','Ax = b','λ'],
  geometry:['a² + b² = c²','sin θ','πr²','180°'],
  or:['Max Z = c·x','Ax ≤ b','x ≥ 0','Z − c·x = 0'],
  tree:['EMV','Σ pᵢ vᵢ','max','α'],
  network:['Σ cᵢⱼ xᵢⱼ','supply = demand','min cost','xᵢⱼ ≥ 0'],
  graph:['V − E + F = 2','Σ deg = 2E','Kₙ','χ(G)'],
  complex:['z = a + bi','|z|','i² = −1','e^{iθ}'],
  numth:['a ≡ b (mod n)','φ(n)','gcd(a, b)','ℤₙ'],
  pde:['uₜ = α uₓₓ','uₜₜ = c² uₓₓ','Δu = 0','Δx'],
  vector:['∇·F','u × v','‖v‖','κ'],
  sets:['A ∪ B','A ∩ B','p ∧ q','𝒫(A)'],
  series:['Σ arⁿ','aₙ → L','a/(1 − r)','ε, N'],
  finance:['P(1 + r)ᵗ','I = Prt','FV','PV'],
};

const f1 = v => (+v).toFixed(1);
const path = (fn, x0, x1, X, Y, n=60) => Array.from({length:n+1},(_,i)=>{ const x=x0+(x1-x0)*i/n; return `${i?'L':'M'}${f1(X(x))},${f1(Y(fn(x)))}`; }).join('');

/* each motif is drawn inside a w×h box at (0,0); strokes use the panel's light colours */
const MOTIFS = {
  algebra:(w,h)=>{ const X=x=>w/2+x*w/9, Y=y=>h*0.78-y*h/11;
    return `<path class="ax" d="M8,${f1(Y(0))}H${w-8}M${f1(X(0))},8V${h-8}"/><path class="ln" d="${path(x=>0.45*x*x-2.6,-3.9,3.9,X,Y)}"/>
      <path class="ln2" d="${path(x=>0.9*x+1.2,-4,3.8,X,Y)}"/><circle class="dot" cx="${f1(X(-2.4))}" cy="${f1(Y(0))}" r="4"/><circle class="dot" cx="${f1(X(2.4))}" cy="${f1(Y(0))}" r="4"/>`; },
  calculus:(w,h)=>{ const X=x=>14+x*(w-28)/6, Y=y=>h-16-y*(h-30)/5, f=x=>1.2+0.9*Math.sin(x*0.9)+0.35*x;
    return `<path class="fill" d="${path(f,1,4.6,X,Y)}L${f1(X(4.6))},${f1(Y(0))}L${f1(X(1))},${f1(Y(0))}Z"/><path class="ax" d="M10,${f1(Y(0))}H${w-8}M${f1(X(0))},${h-8}V8"/>
      <path class="ln" d="${path(f,0,6,X,Y)}"/><path class="ln2" d="${path(x=>f(2.2)+(0.81*Math.cos(1.98)+0.35)*(x-2.2),0.6,3.8,X,Y,2)}"/><circle class="dot" cx="${f1(X(2.2))}" cy="${f1(Y(f(2.2)))}" r="4"/>`; },
  stats:(w,h)=>{ const X=x=>w/2+x*w/7.4, Y=y=>h-16-y*(h-28)/0.42, g=x=>Math.exp(-x*x/2)/Math.sqrt(2*Math.PI);
    const bars=Array.from({length:9},(_,i)=>{ const a=-3.1+i*0.7, v=g(a+0.35)*0.92; return `<rect class="bar" x="${f1(X(a))}" y="${f1(Y(v))}" width="${f1(X(a+0.62)-X(a))}" height="${f1(Y(0)-Y(v))}"/>`; }).join('');
    return `${bars}<path class="fill2" d="${path(g,1.96,3.6,X,Y,20)}L${f1(X(3.6))},${f1(Y(0))}L${f1(X(1.96))},${f1(Y(0))}Z"/><path class="fill2" d="${path(g,-3.6,-1.96,X,Y,20)}L${f1(X(-1.96))},${f1(Y(0))}L${f1(X(-3.6))},${f1(Y(0))}Z"/>
      <path class="ax" d="M8,${f1(Y(0))}H${w-8}"/><path class="ln" d="${path(g,-3.6,3.6,X,Y)}"/><path class="ln2" d="M${f1(X(0))},${f1(Y(0))}V${f1(Y(g(0)))}"/>`; },
  matrix:(w,h)=>{ const v=[[2,-1,0],[1,3,4],[0,5,-2]], cw=w/5, x0=w/2-1.5*cw, y0=h/2-1.5*h/5.2, rh=h/5.2;
    const cells=v.flatMap((r,i)=>r.map((n,j)=>`<text class="num" x="${f1(x0+(j+0.5)*cw)}" y="${f1(y0+(i+0.68)*rh)}">${n<0?'−'+(-n):n}</text>`)).join('');
    return `<path class="ln" d="M${f1(x0+8)},${f1(y0-4)}h-12v${f1(3*rh+8)}h12M${f1(x0+3*cw-8)},${f1(y0-4)}h12v${f1(3*rh+8)}h-12"/>${cells}
      <path class="ln2" d="M${f1(x0+0.2*cw)},${f1(y0+0.2*rh)}L${f1(x0+2.8*cw)},${f1(y0+2.8*rh)}"/>`; },
  geometry:(w,h)=>{ const r=Math.min(w,h)*0.36, cx=w/2, cy=h/2+4, a=Math.PI/3, px=cx+r*Math.cos(a), py=cy-r*Math.sin(a);
    return `<path class="ax" d="M${f1(cx-r-14)},${f1(cy)}H${f1(cx+r+14)}M${f1(cx)},${f1(cy+r+10)}V${f1(cy-r-10)}"/><circle class="ln" cx="${cx}" cy="${cy}" r="${f1(r)}"/>
      <path class="fill" d="M${cx},${cy}L${f1(px)},${f1(py)}L${f1(px)},${f1(cy)}Z"/><path class="ln2" d="M${cx},${cy}L${f1(px)},${f1(py)}V${f1(cy)}"/>
      <path class="ln2" d="M${f1(cx+r*0.28)},${f1(cy)}A${f1(r*0.28)},${f1(r*0.28)} 0 0 0 ${f1(cx+r*0.28*Math.cos(a))},${f1(cy-r*0.28*Math.sin(a))}"/><circle class="dot" cx="${f1(px)}" cy="${f1(py)}" r="4"/>`; },
  or:(w,h)=>{ const X=x=>18+x*(w-36)/8, Y=y=>h-16-y*(h-30)/8, P=[[0,0],[6,0],[5,3],[2,6],[0,6.5]];
    return `<path class="ax" d="M10,${f1(Y(0))}H${w-8}M${f1(X(0))},${h-8}V8"/><path class="fill" d="M${P.map(([x,y])=>`${f1(X(x))},${f1(Y(y))}`).join('L')}Z"/>
      <path class="ln" d="M${f1(X(7))},${f1(Y(-1))}L${f1(X(1))},${f1(Y(8))}"/><path class="ln2" d="M${f1(X(-0.3))},${f1(Y(7.4))}L${f1(X(7.5))},${f1(Y(-0.2))}"/>
      ${P.map(([x,y],i)=>`<circle class="${i===2?'dot':'pt'}" cx="${f1(X(x))}" cy="${f1(Y(y))}" r="${i===2?5:3.5}"/>`).join('')}`; },
  tree:(w,h)=>{ const x0=22, x1=w*0.42, x2=w-46, ys=[h*0.3,h*0.72], out=[`<rect class="dsq" x="${x0-10}" y="${f1(h/2-10)}" width="20" height="20"/>`];
    ys.forEach((y,i)=>{ out.push(`<path class="ln" d="M${x0+10},${f1(h/2)}L${f1(x1-9)},${f1(y)}"/>`,`<circle class="node" cx="${f1(x1)}" cy="${f1(y)}" r="9"/>`);
      [-1,1].forEach(k=>{ const yy=y+k*h*0.13; out.push(`<path class="${i===0&&k<0?'ln':'ln2'}" d="M${f1(x1+9)},${f1(y)}L${f1(x2)},${f1(yy)}"/>`,`<path class="tri" d="M${f1(x2)},${f1(yy)}l12,-7v14z"/>`); }); });
    return out.join(''); },
  network:(w,h)=>{ const L=[0.22,0.5,0.78].map(t=>[34,h*t]), R=[0.15,0.38,0.62,0.85].map(t=>[w-34,h*t]);
    return L.flatMap((a,i)=>R.map((b,j)=>`<path class="${(i+j)%3===0?'ln':'ln2'}" d="M${f1(a[0])},${f1(a[1])}L${f1(b[0])},${f1(b[1])}"/>`)).join('')+
      L.map(([x,y])=>`<rect class="dsq" x="${f1(x-10)}" y="${f1(y-10)}" width="20" height="20" rx="3"/>`).join('')+R.map(([x,y])=>`<circle class="node" cx="${f1(x)}" cy="${f1(y)}" r="9"/>`).join(''); },
  graph:(w,h)=>{ const n=6, cx=w/2, cy=h/2, r=Math.min(w,h)*0.36, V=Array.from({length:n},(_,i)=>[cx+r*Math.cos(i*2*Math.PI/n-Math.PI/2), cy+r*Math.sin(i*2*Math.PI/n-Math.PI/2)]);
    const E=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,3],[1,4],[2,5],[0,2]];
    return E.map(([a,b],k)=>`<path class="${k<6?'ln':'ln2'}" d="M${f1(V[a][0])},${f1(V[a][1])}L${f1(V[b][0])},${f1(V[b][1])}"/>`).join('')+
      V.map(([x,y],i)=>`<circle class="${i%2?'dot':'node'}" cx="${f1(x)}" cy="${f1(y)}" r="7"/>`).join(''); },
  complex:(w,h)=>{ const cx=w*0.38, cy=h*0.62, X=x=>cx+x*w/9, Y=y=>cy-y*h/7.5;
    return `<path class="ax" d="M10,${f1(cy)}H${w-8}M${f1(cx)},${h-6}V6"/><path class="ln" d="M${f1(cx)},${f1(cy)}L${f1(X(3))},${f1(Y(3))}"/>
      <path class="ln2" d="M${f1(X(3))},${f1(Y(3))}V${f1(cy)}M${f1(cx)},${f1(cy)}L${f1(X(3))},${f1(Y(-1.2))}"/><path class="ln2" d="M${f1(cx+26)},${f1(cy)}A26,26 0 0 0 ${f1(cx+26*Math.SQRT1_2)},${f1(cy-26*Math.SQRT1_2)}"/>
      <circle class="dot" cx="${f1(X(3))}" cy="${f1(Y(3))}" r="5"/><text class="lbl" x="${f1(X(3)+8)}" y="${f1(Y(3)-6)}">a + bi</text>`; },
  numth:(w,h)=>{ const n=12, cx=w/2, cy=h/2, r=Math.min(w,h)*0.38;
    return `<circle class="ln" cx="${cx}" cy="${cy}" r="${f1(r)}"/>`+Array.from({length:n},(_,i)=>{ const a=i*2*Math.PI/n-Math.PI/2, x=cx+r*Math.cos(a), y=cy+r*Math.sin(a);
      return `<circle class="${[2,3,5,7,11].includes(i)?'dot':'node'}" cx="${f1(x)}" cy="${f1(y)}" r="9"/><text class="num sm" x="${f1(x)}" y="${f1(y+3.5)}">${i}</text>`; }).join('')+
      `<path class="ln2" d="M${f1(cx)},${f1(cy)}L${f1(cx+r*0.62*Math.cos(Math.PI/6-Math.PI/2+Math.PI/3))},${f1(cy+r*0.62*Math.sin(-Math.PI/6))}"/>`; },
  pde:(w,h)=>{ const cols=10, rows=6, gx=(w-30)/cols, gy=(h-30)/rows, lines=[];
    for(let i=0;i<=cols;i++) lines.push(`M${f1(15+i*gx)},15V${f1(15+rows*gy)}`); for(let j=0;j<=rows;j++) lines.push(`M15,${f1(15+j*gy)}H${f1(15+cols*gx)}`);
    const X=x=>15+x*cols*gx, Y=y=>15+rows*gy*(0.55-0.4*y);
    return `<path class="grid" d="${lines.join('')}"/><path class="ln" d="${path(x=>Math.sin(Math.PI*x)*Math.exp(-0.4*x),0,1,X,Y)}"/>
      <path class="ln2" d="${path(x=>0.6*Math.sin(Math.PI*x),0,1,X,Y)}"/><circle class="dot" cx="${f1(15+5*gx)}" cy="${f1(15+3*gy)}" r="4.5"/>
      <circle class="pt" cx="${f1(15+4*gx)}" cy="${f1(15+3*gy)}" r="3.5"/><circle class="pt" cx="${f1(15+6*gx)}" cy="${f1(15+3*gy)}" r="3.5"/><circle class="pt" cx="${f1(15+5*gx)}" cy="${f1(15+2*gy)}" r="3.5"/>`; },
  vector:(w,h)=>{ const ox=w*0.4, oy=h*0.68, ar=(x,y,c)=>`<path class="${c}" d="M${ox},${oy}L${f1(x)},${f1(y)}"/><circle class="${c==='ln'?'dot':'pt'}" cx="${f1(x)}" cy="${f1(y)}" r="4"/>`;
    const hel=Array.from({length:81},(_,i)=>{ const t=i/80*4*Math.PI; return `${i?'L':'M'}${f1(w*0.78+18*Math.cos(t))},${f1(h-14-i*(h-28)/80+5*Math.sin(t))}`; }).join('');
    return `<path class="ax" d="M${ox},${oy}H${w-8}M${ox},${oy}V8M${ox},${oy}L${f1(ox-60)},${f1(oy+40)}"/>${ar(ox+70,oy-50,'ln')}${ar(ox-30,oy-70,'ln2')}${ar(ox+40,oy-110,'ln2')}<path class="ln" d="${hel}"/>`; },
  sets:(w,h)=>{ const r=Math.min(w,h)*0.3;
    return `<rect class="ax" x="10" y="10" width="${w-20}" height="${h-20}" rx="8"/><circle class="fill" cx="${f1(w/2-r*0.55)}" cy="${f1(h/2)}" r="${f1(r)}"/><circle class="fill2" cx="${f1(w/2+r*0.55)}" cy="${f1(h/2)}" r="${f1(r)}"/>
      <circle class="ln" cx="${f1(w/2-r*0.55)}" cy="${f1(h/2)}" r="${f1(r)}"/><circle class="ln2" cx="${f1(w/2+r*0.55)}" cy="${f1(h/2)}" r="${f1(r)}"/>
      <text class="lbl" x="${f1(w/2-r*1.1)}" y="${f1(h/2+4)}">A</text><text class="lbl" x="${f1(w/2+r)}" y="${f1(h/2+4)}">B</text>`; },
  series:(w,h)=>{ const n=10, X=i=>20+i*(w-40)/n, Y=v=>h-18-v*(h-36);
    return `<path class="ax" d="M12,${f1(Y(0))}H${w-8}"/><path class="ln2" d="M12,${f1(Y(0.62))}H${w-8}"/>`+Array.from({length:n},(_,i)=>{ const v=0.62+0.36*Math.pow(-0.62,i);
      return `<path class="ln" d="M${f1(X(i)+6)},${f1(Y(0))}V${f1(Y(v))}"/><circle class="${i%3?'pt':'dot'}" cx="${f1(X(i)+6)}" cy="${f1(Y(v))}" r="4"/>`; }).join(''); },
  finance:(w,h)=>{ const X=t=>20+t*(w-40)/10, Y=v=>h-16-(v-1)*(h-34)/1.6;
    const bars=Array.from({length:10},(_,t)=>{ const v=Math.pow(1.06,t+1); return `<rect class="bar" x="${f1(X(t)+2)}" y="${f1(Y(v))}" width="${f1((w-40)/10-5)}" height="${f1(Y(1)-Y(v))}"/>`; }).join('');
    return `${bars}<path class="ax" d="M14,${f1(Y(1))}H${w-8}"/><path class="ln" d="${path(t=>Math.pow(1.06,t),0,10,X,Y)}"/><path class="ln2" d="${path(t=>1+0.06*t,0,10,X,Y,2)}"/>`; },
};

/* the cover panel: up to four motifs for the most common families, over a dark gradient with faint formulas */
export function coverArt(topics, w=600, h=380){
  const count={}; topics.forEach(t=>{ const f=familyOf(t); count[f]=(count[f]||0)+1; });
  let fams=Object.keys(count).sort((a,b)=>count[b]-count[a]).slice(0,4);
  const RELATED={or:'network',network:'tree',tree:'or',stats:'calculus',calculus:'algebra',algebra:'geometry',geometry:'algebra',matrix:'algebra',
    graph:'network',numth:'sets',complex:'geometry',pde:'calculus',vector:'geometry',sets:'numth',series:'calculus',finance:'stats'};
  for(const f of [...fams]) if(fams.length<3 && !fams.includes(RELATED[f])) fams.push(RELATED[f]);
  for(const f of ['algebra','calculus','geometry','stats']) if(fams.length<2 && !fams.includes(f)) fams.push(f);
  const slots = fams.length===2 ? [[24,40,w/2-36,h-80],[w/2+12,40,w/2-36,h-80]]
              : fams.length===3 ? [[24,30,w*0.46,h-60],[w*0.52,30,w*0.44,(h-72)/2],[w*0.52,h/2+6,w*0.44,(h-72)/2]]
              : [[24,26,w/2-36,h/2-38],[w/2+12,26,w/2-36,h/2-38],[24,h/2+12,w/2-36,h/2-38],[w/2+12,h/2+12,w/2-36,h/2-38]];
  const glyphs=fams.flatMap(f=>GLYPHS[f]).slice(0,10);
  const gpos=[[0.06,0.12],[0.62,0.08],[0.3,0.5],[0.8,0.46],[0.08,0.9],[0.55,0.95],[0.42,0.2],[0.86,0.86],[0.2,0.68],[0.7,0.62]];
  return `<svg class="cover-art" viewBox="0 0 ${w} ${h}" role="img" aria-label="cover illustration" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="cvBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--th-1,#0f2a5c)"/><stop offset="0.6" style="stop-color:var(--th-2,#173f86)"/><stop offset="1" style="stop-color:var(--th-3,#0c6a7a)"/></linearGradient>
      <pattern id="cvGrid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#ffffff" stroke-opacity="0.06"/></pattern></defs>
    <rect width="${w}" height="${h}" rx="14" fill="url(#cvBg)"/><rect width="${w}" height="${h}" rx="14" fill="url(#cvGrid)"/>
    ${glyphs.map((g,i)=>`<text class="glyph" x="${f1(gpos[i][0]*w)}" y="${f1(gpos[i][1]*h)}">${g}</text>`).join('')}
    ${fams.map((f,i)=>{ const [x,y,sw,sh]=slots[i]; return `<clipPath id="cvT${i}"><rect width="${f1(sw)}" height="${f1(sh)}" rx="10"/></clipPath>
      <g transform="translate(${f1(x)},${f1(y)})"><rect class="tile" width="${f1(sw)}" height="${f1(sh)}" rx="10"/><g clip-path="url(#cvT${i})">${MOTIFS[f](sw,sh)}</g></g>`; }).join('')}
  </svg>`;
}
