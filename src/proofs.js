/* Proofs of the main formulas of each course, used by the "Proofs of formulas" topic.
   Each proof: t = [English title, Arabic title], g = the formula proved (math HTML), s = steps.
   A step is either a formula (string, shown as math) or [English, Arabic] text in which `…` marks math. */
const s2='<sup>2</sup>', s3='<sup>3</sup>', sn='<sup>n</sup>', a2='<sub>α/2</sub>';
const fr=(a,b)=>`<span class="frac"><span class="n">${a}</span><span class="d">${b}</span></span>`;
const rt=x=>`&radic;<span style="border-top:1.2px solid currentColor;padding:0 2px">${x}</span>`;

export const PROOFS = {
  /* ---------- algebra & precalculus ---------- */
  quadFormula:{ t:['the quadratic formula','القانون العام لحل المعادلة التربيعية'], g:`x = ${fr(`&minus;b &plusmn; ${rt('b'+s2+' &minus; 4ac')}`,'2a')}`, s:[
    ['Start from `ax² + bx + c = 0` (a ≠ 0) and divide by a:','نبدأ من `ax² + bx + c = 0` (a ≠ 0) ونقسم على a:'], `x${s2} + ${fr('b','a')}x = &minus;${fr('c','a')}`,
    ['Complete the square: add `(b/2a)²` to both sides:','نكمل المربع: نضيف `(b/2a)²` للطرفين:'], `(x + ${fr('b','2a')})${s2} = ${fr('b'+s2+' &minus; 4ac','4a'+s2)}`,
    ['Take square roots and isolate x:','نأخذ الجذر التربيعي ونعزل x:'], `x = ${fr(`&minus;b &plusmn; ${rt('b'+s2+' &minus; 4ac')}`,'2a')}`]},
  rootsSumProduct:{ t:['the sum and product of the roots of a quadratic','مجموع جذري المعادلة التربيعية وحاصل ضربهما'], g:`x<sub>1</sub> + x<sub>2</sub> = &minus;${fr('b','a')}, &nbsp; x<sub>1</sub>x<sub>2</sub> = ${fr('c','a')}`, s:[
    ['Let `Δ = b² − 4ac`; by the quadratic formula','نضع `Δ = b² − 4ac`؛ ومن القانون العام'], `x<sub>1,2</sub> = ${fr(`&minus;b &plusmn; ${rt('&Delta;')}`,'2a')}`,
    ['Add them: the square roots cancel.','بالجمع يُحذف الجذران:'], `x<sub>1</sub> + x<sub>2</sub> = ${fr('&minus;2b','2a')} = &minus;${fr('b','a')}`,
    ['Multiply them (difference of squares):','بالضرب (فرق بين مربعين):'], `x<sub>1</sub>x<sub>2</sub> = ${fr('b'+s2+' &minus; &Delta;','4a'+s2)} = ${fr('4ac','4a'+s2)} = ${fr('c','a')}`]},
  logProduct:{ t:['the product rule of logarithms','قانون لوغاريتم حاصل الضرب'], g:'log<sub>b</sub>(xy) = log<sub>b</sub>x + log<sub>b</sub>y', s:[
    ['Let `m = log_b x` and `n = log_b y`, so `x = bᵐ` and `y = bⁿ`.','نضع `m = log_b x` و `n = log_b y` فيكون `x = bᵐ` و `y = bⁿ`.'],
    ['Multiply and use the exponent rule:','نضرب ونستخدم قانون الأسس:'], 'xy = b<sup>m</sup>b<sup>n</sup> = b<sup>m+n</sup>',
    ['By the definition of the logarithm:','ومن تعريف اللوغاريتم:'], 'log<sub>b</sub>(xy) = m + n = log<sub>b</sub>x + log<sub>b</sub>y']},
  cramer2:{ t:["Cramer's rule for two equations","قاعدة كرامر لمعادلتين"], g:`x = ${fr('c<sub>1</sub>b<sub>2</sub> &minus; c<sub>2</sub>b<sub>1</sub>','a<sub>1</sub>b<sub>2</sub> &minus; a<sub>2</sub>b<sub>1</sub>')}, &nbsp; y = ${fr('a<sub>1</sub>c<sub>2</sub> &minus; a<sub>2</sub>c<sub>1</sub>','a<sub>1</sub>b<sub>2</sub> &minus; a<sub>2</sub>b<sub>1</sub>')}`, s:[
    ['System: `a₁x + b₁y = c₁`, `a₂x + b₂y = c₂`. Multiply the first by `b₂` and the second by `b₁`:','النظام: `a₁x + b₁y = c₁` و `a₂x + b₂y = c₂`. نضرب الأولى في `b₂` والثانية في `b₁`:'],
    'a<sub>1</sub>b<sub>2</sub>x + b<sub>1</sub>b<sub>2</sub>y = c<sub>1</sub>b<sub>2</sub>, &nbsp; a<sub>2</sub>b<sub>1</sub>x + b<sub>1</sub>b<sub>2</sub>y = c<sub>2</sub>b<sub>1</sub>',
    ['Subtract (y cancels) and divide by the determinant (≠ 0):','نطرح (يُحذف y) ونقسم على المحدد (≠ 0):'], `(a<sub>1</sub>b<sub>2</sub> &minus; a<sub>2</sub>b<sub>1</sub>)x = c<sub>1</sub>b<sub>2</sub> &minus; c<sub>2</sub>b<sub>1</sub>`,
    ['Eliminating x in the same way gives y.','وبحذف x بالطريقة نفسها نحصل على y.']]},
  inverse2x2:{ t:['the inverse of a 2×2 matrix','معكوس المصفوفة 2×2'], g:`A<sup>&minus;1</sup> = ${fr(1,'ad &minus; bc')}[d &minus;b; &minus;c a]`, s:[
    ['Let `A = [a b; c d]` and `B = [d −b; −c a]`. Multiply:','نضع `A = [a b; c d]` و `B = [d −b; −c a]` ونضرب:'], 'AB = [ad &minus; bc, &minus;ab + ba; cd &minus; dc, &minus;bc + ad] = (ad &minus; bc) I',
    ['So if `ad − bc ≠ 0`, dividing by it gives the identity:','إذا كان `ad − bc ≠ 0` فبالقسمة عليه نحصل على مصفوفة الوحدة:'], `A &middot; ${fr(1,'ad &minus; bc')}B = I &rArr; A<sup>&minus;1</sup> = ${fr(1,'ad &minus; bc')}[d &minus;b; &minus;c a]`]},
  matrixSolve:{ t:['the solution of AX = B by the inverse','حل النظام AX = B باستخدام المعكوس'], g:'X = A<sup>&minus;1</sup>B', s:[
    ['If A is invertible, multiply both sides of `AX = B` on the left by `A⁻¹`:','إذا كانت A قابلة للعكس نضرب طرفي `AX = B` من اليسار في `A⁻¹`:'], 'A<sup>&minus;1</sup>(AX) = A<sup>&minus;1</sup>B',
    ['Associativity and `A⁻¹A = I`:','التجميع و `A⁻¹A = I`:'], '(A<sup>&minus;1</sup>A)X = IX = X = A<sup>&minus;1</sup>B',
    ['It is the only solution: any solution must equal `A⁻¹B` by the same steps.','وهو الحل الوحيد: أي حل يساوي `A⁻¹B` بالخطوات نفسها.']]},
  breakEvenPt:{ t:['the break-even quantity','قانون كمية التعادل'], g:`x = ${fr('F','p &minus; v')}`, s:[
    ['Revenue `R(x) = px`; cost `C(x) = F + vx` (fixed cost F, variable cost v per unit).','الإيراد `R(x) = px` والتكلفة `C(x) = F + vx` (تكلفة ثابتة F ومتغيرة v للوحدة).'],
    ['Break-even means no profit and no loss: `R(x) = C(x)`.','التعادل يعني لا ربح ولا خسارة: `R(x) = C(x)`.'], 'px = F + vx &rArr; (p &minus; v)x = F',
    ['Divide by `p − v` (the profit per unit, > 0):','نقسم على `p − v` (ربح الوحدة، موجب):'], `x = ${fr('F','p &minus; v')}`]},
  inverseComposition:{ t:['the inverse of a composition','معكوس تركيب دالتين'], g:'(f &#8728; g)<sup>&minus;1</sup> = g<sup>&minus;1</sup> &#8728; f<sup>&minus;1</sup>', s:[
    ['Compose `f ∘ g` with `g⁻¹ ∘ f⁻¹` and use associativity:','نركّب `f ∘ g` مع `g⁻¹ ∘ f⁻¹` ونستخدم التجميع:'], '(f &#8728; g) &#8728; (g<sup>&minus;1</sup> &#8728; f<sup>&minus;1</sup>) = f &#8728; (g &#8728; g<sup>&minus;1</sup>) &#8728; f<sup>&minus;1</sup> = f &#8728; f<sup>&minus;1</sup> = I',
    ['In the same way `(g⁻¹ ∘ f⁻¹) ∘ (f ∘ g) = I`, so it is the inverse.','وبالمثل `(g⁻¹ ∘ f⁻¹) ∘ (f ∘ g) = I`، إذن هي المعكوس.']]},
  evenOddRules:{ t:['the product of two odd functions is even','حاصل ضرب دالتين فرديتين دالة زوجية'], g:'f, g odd &rArr; fg even', s:[
    ['Odd means `f(−x) = −f(x)` and `g(−x) = −g(x)`. Let `h = fg`:','الفردية تعني `f(−x) = −f(x)` و `g(−x) = −g(x)`. نضع `h = fg`:'],
    'h(&minus;x) = f(&minus;x)g(&minus;x) = (&minus;f(x))(&minus;g(x)) = f(x)g(x) = h(x)', ['So h is even.','إذن h زوجية.']]},
  /* ---------- calculus ---------- */
  derivXsq:{ t:['the derivative of x³ from the definition','مشتقة x³ من التعريف'], g:'(x<sup>3</sup>)&prime; = 3x<sup>2</sup>', s:[
    ['Definition:','التعريف:'], `f&prime;(x) = lim<sub>h&rarr;0</sub> ${fr('(x + h)'+s3+' &minus; x'+s3,'h')}`,
    ['Expand `(x + h)³ = x³ + 3x²h + 3xh² + h³`:','نفك `(x + h)³ = x³ + 3x²h + 3xh² + h³`:'], `${fr('3x'+s2+'h + 3xh'+s2+' + h'+s3,'h')} = 3x${s2} + 3xh + h${s2}`,
    ['Let h → 0:','نجعل h → 0:'], '(x<sup>3</sup>)&prime; = 3x<sup>2</sup>']},
  productRule:{ t:['the product rule','قاعدة مشتقة حاصل الضرب'], g:'(fg)&prime; = f&prime;g + fg&prime;', s:[
    ['Definition, and add and subtract `f(x + h)g(x)`:','من التعريف، ونضيف ونطرح `f(x + h)g(x)`:'], `${fr('f(x+h)g(x+h) &minus; f(x)g(x)','h')} = f(x+h)${fr('g(x+h) &minus; g(x)','h')} + g(x)${fr('f(x+h) &minus; f(x)','h')}`,
    ['As h → 0, `f(x + h) → f(x)` (f is continuous) and the quotients become derivatives:','عندما h → 0 فإن `f(x + h) → f(x)` (f متصلة) وخوارج القسمة تصبح مشتقات:'], '(fg)&prime; = f g&prime; + g f&prime;']},
  quotientRule:{ t:['the quotient rule','قاعدة مشتقة القسمة'], g:`(${fr('f','g')})&prime; = ${fr("f&prime;g &minus; fg&prime;",'g'+s2)}`, s:[
    ['Write `f/g = f · g⁻¹` and use the product and chain rules:','نكتب `f/g = f · g⁻¹` ونستخدم قاعدتي الضرب والسلسلة:'], `(fg<sup>&minus;1</sup>)&prime; = f&prime;g<sup>&minus;1</sup> + f(&minus;g<sup>&minus;2</sup>g&prime;)`,
    ['Common denominator `g²`:','نوحّد المقام `g²`:'], `= ${fr("f&prime;g &minus; fg&prime;",'g'+s2)}`]},
  derivLn:{ t:['the derivative of ln x','مشتقة ln x'], g:`(ln x)&prime; = ${fr(1,'x')}`, s:[
    ['For x > 0, `e^{ln x} = x`. Differentiate both sides with the chain rule:','لكل x > 0 لدينا `e^{ln x} = x`. نشتق الطرفين بقاعدة السلسلة:'], 'e<sup>ln x</sup> &middot; (ln x)&prime; = 1',
    ['Since `e^{ln x} = x`:','وبما أن `e^{ln x} = x`:'], `x(ln x)&prime; = 1 &rArr; (ln x)&prime; = ${fr(1,'x')}`]},
  derivSin:{ t:['the derivative of sin x','مشتقة sin x'], g:'(sin x)&prime; = cos x', s:[
    ['Definition and the addition formula `sin(x + h) = sin x cos h + cos x sin h`:','من التعريف وقانون الجمع `sin(x + h) = sin x cos h + cos x sin h`:'],
    `${fr('sin(x+h) &minus; sin x','h')} = sin x &middot; ${fr('cos h &minus; 1','h')} + cos x &middot; ${fr('sin h','h')}`,
    ['Known limits: `(cos h − 1)/h → 0` and `sin h / h → 1` as h → 0:','النهايتان المعروفتان: `(cos h − 1)/h → 0` و `sin h / h → 1` عندما h → 0:'], '(sin x)&prime; = sin x &middot; 0 + cos x &middot; 1 = cos x']},
  fermatCritical:{ t:["Fermat's theorem: f′(c) = 0 at a local maximum","مبرهنة فيرما: f′(c) = 0 عند القيمة العظمى المحلية"], g:'f&prime;(c) = 0', s:[
    ['At a local maximum c, `f(c + h) − f(c) ≤ 0` for small h.','عند قيمة عظمى محلية c يكون `f(c + h) − f(c) ≤ 0` لكل h صغير.'],
    ['For h > 0 the quotient `(f(c+h) − f(c))/h ≤ 0`, so its limit `f′(c) ≤ 0`.','عندما h > 0 يكون خارج القسمة `(f(c+h) − f(c))/h ≤ 0` فنهايته `f′(c) ≤ 0`.'],
    ['For h < 0 the quotient is `≥ 0`, so `f′(c) ≥ 0`. Together `f′(c) = 0`.','وعندما h < 0 يكون `≥ 0` فإن `f′(c) ≥ 0`. إذن `f′(c) = 0`.']]},
  powerIntegral:{ t:['the power rule for integrals','قاعدة القوة في التكامل'], g:`&int; x${sn} dx = ${fr('x<sup>n+1</sup>','n+1')} + C &nbsp; (n &ne; &minus;1)`, s:[
    ['An antiderivative is checked by differentiating it:','نتحقق من الدالة الأصلية باشتقاقها:'], `${fr(1,'n+1')}(x<sup>n+1</sup>)&prime; = ${fr('(n+1)x'+sn,'n+1')} = x${sn}`,
    ['Any two antiderivatives differ by a constant, hence `+ C`.','وأي دالتين أصليتين تختلفان بثابت، ومن هنا `+ C`.']]},
  byParts:{ t:['integration by parts','قانون التكامل بالتجزيء'], g:'&int; u dv = uv &minus; &int; v du', s:[
    ['Product rule:','قاعدة الضرب:'], '(uv)&prime; = u&prime;v + uv&prime;',
    ['Integrate both sides:','نكامل الطرفين:'], 'uv = &int; v du + &int; u dv', ['Rearrange:','نعيد الترتيب:'], '&int; u dv = uv &minus; &int; v du']},
  substitution:{ t:['the substitution rule','قاعدة التكامل بالتعويض'], g:'&int; f(g(x))g&prime;(x) dx = &int; f(u) du, &nbsp; u = g(x)', s:[
    ['Let F be an antiderivative of f. By the chain rule:','لتكن F دالة أصلية لـ f. من قاعدة السلسلة:'], '[F(g(x))]&prime; = F&prime;(g(x))g&prime;(x) = f(g(x))g&prime;(x)',
    ['So `F(g(x)) + C` is the integral on the left, and it equals `F(u) + C = ∫f(u)du` with `u = g(x)`.','إذن `F(g(x)) + C` هو التكامل الأيسر، ويساوي `F(u) + C = ∫f(u)du` حيث `u = g(x)`.']]},
  riemannX:{ t:['∫₀ᵇ x dx = b²/2 from a Riemann sum','إثبات ∫₀ᵇ x dx = b²/2 بمجموع ريمان'], g:`&int;<sub>0</sub><sup>b</sup> x dx = ${fr('b'+s2,2)}`, s:[
    ['Split [0, b] into n parts of width `Δx = b/n`; right endpoints `xᵢ = ib/n`:','نقسم [0, b] إلى n أجزاء عرضها `Δx = b/n`؛ والأطراف اليمنى `xᵢ = ib/n`:'],
    `S<sub>n</sub> = &Sigma;<sub>i=1</sub><sup>n</sup> ${fr('ib','n')} &middot; ${fr('b','n')} = ${fr('b'+s2,'n'+s2)} &middot; ${fr('n(n+1)','2')} = ${fr('b'+s2,2)}(1 + ${fr(1,'n')})`,
    ['Let n → ∞:','نجعل n → ∞:'], `&int;<sub>0</sub><sup>b</sup> x dx = ${fr('b'+s2,2)}`]},
  avgValueThm:{ t:['the average value of a function','قانون القيمة المتوسطة للدالة'], g:`f<sub>avg</sub> = ${fr(1,'b &minus; a')}&int;<sub>a</sub><sup>b</sup> f(x) dx`, s:[
    ['Average of n sample values `f(x₁), …, f(xₙ)` with `Δx = (b − a)/n`:','متوسط n قيمة `f(x₁)، …، f(xₙ)` حيث `Δx = (b − a)/n`:'], `${fr(1,'n')}&Sigma; f(x<sub>i</sub>) = ${fr(1,'b &minus; a')}&Sigma; f(x<sub>i</sub>)&Delta;x`,
    ['As n → ∞ the sum becomes the integral:','عندما n → ∞ يصبح المجموع تكاملاً:'], `f<sub>avg</sub> = ${fr(1,'b &minus; a')}&int;<sub>a</sub><sup>b</sup> f(x) dx`]},
  /* ---------- geometry & trigonometry ---------- */
  triangleAreaPf:{ t:['the area of a triangle','قانون مساحة المثلث'], g:`A = ${fr(1,2)}bh`, s:[
    ['Copy the triangle, rotate it 180° and join it along a side: the two copies form a parallelogram with base b and height h.','ننسخ المثلث وندوّره 180° ونلصقه على أحد أضلاعه: تتكون من النسختين متوازي أضلاع قاعدته b وارتفاعه h.'],
    ['Parallelogram area = `bh` (cut a right triangle off one end and move it to the other to get a rectangle).','مساحة متوازي الأضلاع = `bh` (نقص مثلثاً قائماً من طرف وننقله للطرف الآخر فنحصل على مستطيل).'],
    ['The triangle is half of it:','والمثلث نصفه:'], `A = ${fr(1,2)}bh`]},
  pythagIdentity:{ t:['the identity sin²θ + cos²θ = 1','المتطابقة sin²θ + cos²θ = 1'], g:'sin<sup>2</sup>&theta; + cos<sup>2</sup>&theta; = 1', s:[
    ['On the unit circle the point at angle θ is `(cos θ, sin θ)`, at distance 1 from the origin.','على دائرة الوحدة النقطة عند الزاوية θ هي `(cos θ, sin θ)` وتبعد 1 عن الأصل.'],
    ['Distance formula (Pythagoras):','قانون المسافة (فيثاغورس):'], `${rt('cos'+s2+'&theta; + sin'+s2+'&theta;')} = 1 &rArr; sin${s2}&theta; + cos${s2}&theta; = 1`]},
  distancePf:{ t:['the distance formula','قانون المسافة بين نقطتين'], g:`d = ${rt('(x<sub>2</sub> &minus; x<sub>1</sub>)'+s2+' + (y<sub>2</sub> &minus; y<sub>1</sub>)'+s2)}`, s:[
    ['Draw the right triangle with horizontal leg `|x₂ − x₁|` and vertical leg `|y₂ − y₁|`; the segment is its hypotenuse.','نرسم مثلثاً قائماً ضلعه الأفقي `|x₂ − x₁|` والرأسي `|y₂ − y₁|`؛ والقطعة هي الوتر.'],
    ['Pythagoras:','فيثاغورس:'], `d${s2} = (x<sub>2</sub> &minus; x<sub>1</sub>)${s2} + (y<sub>2</sub> &minus; y<sub>1</sub>)${s2}`, ['Take the positive root.','نأخذ الجذر الموجب.']]},
  polygonSum:{ t:['the sum of the interior angles of a polygon','قانون مجموع الزوايا الداخلية للمضلع'], g:'S = (n &minus; 2) &times; 180&deg;', s:[
    ['From one vertex draw diagonals to all non-adjacent vertices: they split the convex n-gon into `n − 2` triangles.','من رأس واحد نرسم الأقطار لكل الرؤوس غير المجاورة فتقسم المضلع المحدب إلى `n − 2` مثلثاً.'],
    ['The angles of these triangles make up exactly the interior angles of the polygon; each triangle contributes 180°:','زوايا هذه المثلثات تكوّن تماماً الزوايا الداخلية للمضلع، وكل مثلث 180°:'], 'S = (n &minus; 2) &times; 180&deg;']},
  /* ---------- sets & logic ---------- */
  powerSetPf:{ t:['|𝒫(A)| = 2ⁿ','|𝒫(A)| = 2ⁿ'], g:'|&#119979;(A)| = 2<sup>n</sup>', s:[
    ['A subset is chosen by deciding, for each of the n elements, whether it is in or out: 2 choices each.','نختار المجموعة الجزئية بأن نقرر لكل عنصر من العناصر n هل يدخل أو لا: خياران لكل عنصر.'],
    ['Multiplication principle:','مبدأ الضرب:'], '2 &times; 2 &times; &hellip; &times; 2 = 2<sup>n</sup>']},
  deMorgan:{ t:["De Morgan's law (A ∪ B)′ = A′ ∩ B′","قانون دي مورغان (A ∪ B)′ = A′ ∩ B′"], g:'(A &cup; B)&prime; = A&prime; &cap; B&prime;', s:[
    ['x ∈ (A ∪ B)′ ⇔ x ∉ A ∪ B ⇔ x is in neither A nor B','x ∈ (A ∪ B)′ ⇔ x ∉ A ∪ B ⇔ x ليس في A ولا في B'],
    ['⇔ x ∉ A and x ∉ B ⇔ x ∈ A′ and x ∈ B′ ⇔ x ∈ A′ ∩ B′.','⇔ x ∉ A و x ∉ B ⇔ x ∈ A′ و x ∈ B′ ⇔ x ∈ A′ ∩ B′.'], ['Both sets have the same elements, so they are equal.','للمجموعتين العناصر نفسها فهما متساويتان.']]},
  inclExcl:{ t:['the inclusion–exclusion principle','مبدأ الاحتواء والاستبعاد'], g:'|A &cup; B| = |A| + |B| &minus; |A &cap; B|', s:[
    ['Split A ∪ B into three disjoint parts: `A − B`, `A ∩ B`, `B − A`.','نقسم A ∪ B إلى ثلاثة أجزاء منفصلة: `A − B` و `A ∩ B` و `B − A`.'],
    ['`|A| = |A − B| + |A ∩ B|` and `|B| = |B − A| + |A ∩ B|`.','`|A| = |A − B| + |A ∩ B|` و `|B| = |B − A| + |A ∩ B|`.'],
    '|A &cup; B| = |A &minus; B| + |A &cap; B| + |B &minus; A| = |A| + |B| &minus; |A &cap; B|']},
  contrapositive:{ t:['p → q is equivalent to ¬q → ¬p','p → q تكافئ ¬q → ¬p'], g:'p &rarr; q &equiv; &not;q &rarr; &not;p', s:[
    ['Use `p → q ≡ ¬p ∨ q`:','نستخدم `p → q ≡ ¬p ∨ q`:'], '&not;q &rarr; &not;p &equiv; &not;(&not;q) &or; &not;p &equiv; q &or; &not;p &equiv; &not;p &or; q &equiv; p &rarr; q']},
  sqrt2Irr:{ t:['√2 is irrational','√2 عدد غير نسبي'], g:`${rt(2)} &notin; &#8474;`, s:[
    ['Suppose `√2 = a/b` in lowest terms. Then `a² = 2b²`, so a² is even, hence a is even: `a = 2k`.','نفرض `√2 = a/b` في أبسط صورة. إذن `a² = 2b²` فـ a² زوجي، ومنه a زوجي: `a = 2k`.'],
    ['Then `4k² = 2b²`, so `b² = 2k²` and b is even too.','إذن `4k² = 2b²` فيكون `b² = 2k²` و b زوجي أيضاً.'],
    ['a and b are both even — contradicting lowest terms. So √2 is irrational.','a و b زوجيان، وهذا يناقض كون الكسر في أبسط صورة. إذن √2 غير نسبي.']]},
  /* ---------- probability & statistics ---------- */
  sumDeviations:{ t:['Σ(x − x̄) = 0','Σ(x − x̄) = 0'], g:'&Sigma;(x<sub>i</sub> &minus; x&#772;) = 0', s:[
    ['Split the sum:','نفصل المجموع:'], '&Sigma;(x<sub>i</sub> &minus; x&#772;) = &Sigma;x<sub>i</sub> &minus; n x&#772;',
    ['Since `x̄ = Σxᵢ / n`, we have `n x̄ = Σxᵢ`:','وبما أن `x̄ = Σxᵢ / n` فإن `n x̄ = Σxᵢ`:'], '&Sigma;x<sub>i</sub> &minus; &Sigma;x<sub>i</sub> = 0']},
  varianceShortcut:{ t:['the shortcut formula for the variance','القانون المختصر للتباين'], g:`s${s2} = ${fr('&Sigma;x<sub>i</sub>'+s2+' &minus; n x&#772;'+s2,'n &minus; 1')}`, s:[
    ['Expand the square in the definition `s² = Σ(xᵢ − x̄)²/(n − 1)`:','نفك المربع في التعريف `s² = Σ(xᵢ − x̄)²/(n − 1)`:'], `&Sigma;(x<sub>i</sub> &minus; x&#772;)${s2} = &Sigma;x<sub>i</sub>${s2} &minus; 2x&#772;&Sigma;x<sub>i</sub> + n x&#772;${s2}`,
    ['Use `Σxᵢ = n x̄`:','نستخدم `Σxᵢ = n x̄`:'], `= &Sigma;x<sub>i</sub>${s2} &minus; 2n x&#772;${s2} + n x&#772;${s2} = &Sigma;x<sub>i</sub>${s2} &minus; n x&#772;${s2}`, ['Divide by `n − 1`.','نقسم على `n − 1`.']]},
  combFromPerm:{ t:['C(n, r) = P(n, r) / r!','C(n, r) = P(n, r) / r!'], g:`C(n, r) = ${fr('n!','r!(n &minus; r)!')}`, s:[
    ['Each choice of r objects (a combination) can be arranged in `r!` orders, and each order is a different permutation.','كل اختيار لـ r عنصراً (توفيقة) يمكن ترتيبه بـ `r!` طريقة، وكل ترتيب تبديل مختلف.'],
    'P(n, r) = C(n, r) &middot; r!', ['With `P(n, r) = n!/(n − r)!`:','ومع `P(n, r) = n!/(n − r)!`:'], `C(n, r) = ${fr('n!','r!(n &minus; r)!')}`]},
  complementRule:{ t:['P(A′) = 1 − P(A)','P(A′) = 1 − P(A)'], g:'P(A&prime;) = 1 &minus; P(A)', s:[
    ['A and A′ are disjoint and `A ∪ A′ = S`.','A و A′ منفصلتان و `A ∪ A′ = S`.'], ['By the axioms (additivity and `P(S) = 1`):','من المسلّمات (الجمع و `P(S) = 1`):'], 'P(A) + P(A&prime;) = P(S) = 1 &rArr; P(A&prime;) = 1 &minus; P(A)']},
  zStandard:{ t:['z-scores have mean 0 and standard deviation 1','الدرجات المعيارية متوسطها 0 وانحرافها المعياري 1'], g:'E(Z) = 0, &nbsp; &sigma;<sub>Z</sub> = 1', s:[
    [`\`Z = (X − μ)/σ\`. Expectation is linear:`,'`Z = (X − μ)/σ` والتوقع خطي:'], `E(Z) = ${fr('E(X) &minus; &mu;','&sigma;')} = 0`,
    ['Adding a constant does not change the variance; multiplying by k multiplies it by k²:','إضافة ثابت لا تغير التباين، والضرب في k يضربه في k²:'], `Var(Z) = ${fr('Var(X)','&sigma;'+s2)} = 1`]},
  additionRule:{ t:['the addition rule P(A ∪ B)','قانون جمع الاحتمالات P(A ∪ B)'], g:'P(A &cup; B) = P(A) + P(B) &minus; P(A &cap; B)', s:[
    ['Write A ∪ B as the disjoint union of `A` and `B − A`, and B as the disjoint union of `A ∩ B` and `B − A`:','نكتب A ∪ B كاتحاد منفصل لـ `A` و `B − A`، و B كاتحاد منفصل لـ `A ∩ B` و `B − A`:'],
    'P(A &cup; B) = P(A) + P(B &minus; A), &nbsp; P(B) = P(A &cap; B) + P(B &minus; A)', ['Eliminate `P(B − A)`.','نحذف `P(B − A)`.']]},
  bayes:{ t:["Bayes' theorem","مبرهنة بايز"], g:`P(A|B) = ${fr('P(B|A)P(A)','P(B)')}`, s:[
    ['From the definition of conditional probability, `P(A ∩ B)` can be written two ways:','من تعريف الاحتمال الشرطي يُكتب `P(A ∩ B)` بطريقتين:'], 'P(A &cap; B) = P(A|B)P(B) = P(B|A)P(A)',
    ['Divide by `P(B) > 0`.','نقسم على `P(B) > 0`.'], `P(A|B) = ${fr('P(B|A)P(A)','P(B)')}`]},
  binomMean:{ t:['the mean of a binomial variable E(X) = np','قانون متوسط ذي الحدين E(X) = np'], g:'E(X) = np', s:[
    ['Write `X = X₁ + … + Xₙ` where Xᵢ = 1 if trial i succeeds, 0 otherwise.','نكتب `X = X₁ + … + Xₙ` حيث Xᵢ = 1 إذا نجحت المحاولة i و 0 خلاف ذلك.'],
    'E(X<sub>i</sub>) = 1&middot;p + 0&middot;(1 &minus; p) = p', ['Expectation is additive:','التوقع يقبل الجمع:'], 'E(X) = p + p + &hellip; + p = np']},
  varShortcutRV:{ t:['Var(X) = E(X²) − [E(X)]²','Var(X) = E(X²) − [E(X)]²'], g:'Var(X) = E(X<sup>2</sup>) &minus; &mu;<sup>2</sup>', s:[
    ['Definition with `μ = E(X)` and expand:','التعريف مع `μ = E(X)` ونفك:'], 'E[(X &minus; &mu;)<sup>2</sup>] = E(X<sup>2</sup>) &minus; 2&mu;E(X) + &mu;<sup>2</sup>',
    '= E(X<sup>2</sup>) &minus; 2&mu;<sup>2</sup> + &mu;<sup>2</sup> = E(X<sup>2</sup>) &minus; &mu;<sup>2</sup>']},
  binomSum:{ t:['the binomial probabilities add up to 1','مجموع احتمالات ذي الحدين يساوي 1'], g:'&Sigma;<sub>k=0</sub><sup>n</sup> C(n, k)p<sup>k</sup>(1 &minus; p)<sup>n&minus;k</sup> = 1', s:[
    ['Binomial theorem: `(a + b)ⁿ = Σ C(n, k)aᵏbⁿ⁻ᵏ`. Put `a = p`, `b = 1 − p`:','مبرهنة ذات الحدين: `(a + b)ⁿ = Σ C(n, k)aᵏbⁿ⁻ᵏ`. نضع `a = p` و `b = 1 − p`:'], '&Sigma; C(n, k)p<sup>k</sup>(1 &minus; p)<sup>n&minus;k</sup> = (p + 1 &minus; p)<sup>n</sup> = 1']},
  ciMeanPf:{ t:['the confidence interval for a mean','قانون فترة الثقة لمتوسط'], g:`x&#772; &plusmn; z${a2}${fr('&sigma;',rt('n'))}`, s:[
    [`\`Z = (x̄ − μ)/(σ/√n)\` is standard normal, so`,'`Z = (x̄ − μ)/(σ/√n)` طبيعي معياري، إذن'], `P(&minus;z${a2} &lt; ${fr('x&#772; &minus; &mu;','&sigma;/'+rt('n'))} &lt; z${a2}) = 1 &minus; &alpha;`,
    ['Multiply by `σ/√n` and solve the inequalities for μ:','نضرب في `σ/√n` ونحل المتباينة بالنسبة لـ μ:'], `P(x&#772; &minus; z${a2}${fr('&sigma;',rt('n'))} &lt; &mu; &lt; x&#772; + z${a2}${fr('&sigma;',rt('n'))}) = 1 &minus; &alpha;`]},
  ciPropPf:{ t:['the confidence interval for a proportion','قانون فترة الثقة لنسبة'], g:`p&#770; &plusmn; z${a2}${rt(fr('p&#770;(1 &minus; p&#770;)','n'))}`, s:[
    ['For large n, `p̂` is approximately normal with mean p and standard deviation `√(p(1 − p)/n)`.','للعينات الكبيرة `p̂` تقريباً طبيعي متوسطه p وانحرافه `√(p(1 − p)/n)`.'],
    ['So `P(−z_{α/2} < (p̂ − p)/√(p(1−p)/n) < z_{α/2}) = 1 − α`; solve for p and estimate the unknown p in the root by p̂:','إذن `P(−z_{α/2} < (p̂ − p)/√(p(1−p)/n) < z_{α/2}) = 1 − α`؛ نحل بالنسبة لـ p ونقدّر p داخل الجذر بـ p̂:'],
    `p&#770; &minus; z${a2}${rt(fr('p&#770;(1 &minus; p&#770;)','n'))} &lt; p &lt; p&#770; + z${a2}${rt(fr('p&#770;(1 &minus; p&#770;)','n'))}`]},
  sampleSizeMeanPf:{ t:['the sample-size formula for a mean (from the confidence interval)','قانون حجم العينة لمتوسط (من فترة الثقة)'], g:`n = (${fr(`z${a2}&sigma;`,'E')})${s2}`, s:[
    ['The confidence interval is `x̄ ± z_{α/2}σ/√n`; its half-width is the margin of error:','فترة الثقة `x̄ ± z_{α/2}σ/√n`، ونصف طولها هو هامش الخطأ:'], `E = z${a2}${fr('&sigma;',rt('n'))}`,
    ['Solve for √n, then square:','نحل بالنسبة لـ √n ثم نربّع:'], `${rt('n')} = ${fr(`z${a2}&sigma;`,'E')} &rArr; n = (${fr(`z${a2}&sigma;`,'E')})${s2}`,
    ['n must be a whole number at least this large, so round UP.','يجب أن يكون n عدداً صحيحاً لا يقل عن ذلك، لذا نقرّب للأعلى.']]},
  sampleSizePropPf:{ t:['the sample-size formula for a proportion (from the confidence interval)','قانون حجم العينة لنسبة (من فترة الثقة)'], g:`n = ${fr(`z${a2}${s2}p(1 &minus; p)`,'E'+s2)} &le; ${fr(`z${a2}${s2}`,'4E'+s2)}`, s:[
    ['Margin of error of the interval for p:','هامش خطأ فترة الثقة للنسبة:'], `E = z${a2}${rt(fr('p(1 &minus; p)','n'))}`,
    ['Square and solve for n:','نربّع ونحل بالنسبة لـ n:'], `E${s2} = z${a2}${s2}${fr('p(1 &minus; p)','n')} &rArr; n = ${fr(`z${a2}${s2}p(1 &minus; p)`,'E'+s2)}`,
    ['`p(1 − p) = ¼ − (p − ½)²` is largest at `p = ½`, so with no estimate of p use ¼:','`p(1 − p) = ¼ − (p − ½)²` أكبر ما يمكن عند `p = ½`، لذا بدون تقدير لـ p نأخذ ¼:'], `n = ${fr(`z${a2}${s2}`,'4E'+s2)}`]},
  testFromCI:{ t:['the hypothesis test for a mean from the confidence interval','قانون اختبار الفرض لمتوسط (من فترة الثقة)'], g:`|z| = |${fr('x&#772; &minus; &mu;<sub>0</sub>','&sigma;/'+rt('n'))}| &gt; z${a2} &hArr; reject H<sub>0</sub>`, s:[
    ['Two-sided test of `H₀: μ = μ₀` at level α: reject H₀ exactly when μ₀ is NOT inside the `(1 − α)` confidence interval.','اختبار ذو طرفين لـ `H₀: μ = μ₀` عند α: نرفض H₀ عندما لا تقع μ₀ داخل فترة الثقة `(1 − α)`.'],
    ['μ₀ inside the interval means:','وقوع μ₀ داخل الفترة يعني:'], `x&#772; &minus; z${a2}${fr('&sigma;',rt('n'))} &lt; &mu;<sub>0</sub> &lt; x&#772; + z${a2}${fr('&sigma;',rt('n'))} &hArr; |x&#772; &minus; &mu;<sub>0</sub>| &lt; z${a2}${fr('&sigma;',rt('n'))}`,
    ['Divide by `σ/√n`: μ₀ is inside ⇔ `|z| < z_{α/2}`. So we reject H₀ ⇔ `|z| > z_{α/2}` — the test statistic and critical value.','نقسم على `σ/√n`: μ₀ داخل الفترة ⇔ `|z| < z_{α/2}`. إذن نرفض H₀ ⇔ `|z| > z_{α/2}` — وهي إحصاءة الاختبار والقيمة الحرجة.']]},
  testPropFromCI:{ t:['the test statistic for a proportion','قانون إحصاءة اختبار الفرض لنسبة'], g:`z = ${fr('p&#770; &minus; p<sub>0</sub>',rt(fr('p<sub>0</sub>(1 &minus; p<sub>0</sub>)','n')))}`, s:[
    ['Under `H₀: p = p₀`, p̂ is approximately normal with mean p₀ and standard deviation `√(p₀(1 − p₀)/n)` (we use p₀, not p̂, because H₀ fixes p).','تحت `H₀: p = p₀` يكون p̂ تقريباً طبيعياً متوسطه p₀ وانحرافه `√(p₀(1 − p₀)/n)` (نستخدم p₀ لأن H₀ يحدد p).'],
    ['Standardise:','نحوّل للمعياري:'], `z = ${fr('p&#770; &minus; p<sub>0</sub>',rt(fr('p<sub>0</sub>(1 &minus; p<sub>0</sub>)','n')))}`, ['Reject H₀ when z falls in the rejection region, as for a mean.','نرفض H₀ إذا وقعت z في منطقة الرفض كما في المتوسط.']]},
  anovaSST:{ t:['SST = SSB + SSW in one-way ANOVA','SST = SSB + SSW في تحليل التباين'], g:'SST = SSB + SSW', s:[
    ['Write each deviation from the grand mean through the group mean:','نكتب كل انحراف عن المتوسط العام عبر متوسط المجموعة:'], '(x<sub>ij</sub> &minus; x&#772;) = (x<sub>ij</sub> &minus; x&#772;<sub>i</sub>) + (x&#772;<sub>i</sub> &minus; x&#772;)',
    ['Square and sum. The cross term vanishes because `Σⱼ(xᵢⱼ − x̄ᵢ) = 0` in every group:','نربّع ونجمع. الحد المختلط يساوي صفراً لأن `Σⱼ(xᵢⱼ − x̄ᵢ) = 0` في كل مجموعة:'],
    '&Sigma;&Sigma;(x<sub>ij</sub> &minus; x&#772;)<sup>2</sup> = &Sigma;&Sigma;(x<sub>ij</sub> &minus; x&#772;<sub>i</sub>)<sup>2</sup> + &Sigma;n<sub>i</sub>(x&#772;<sub>i</sub> &minus; x&#772;)<sup>2</sup>']},
  /* ---------- STAT 312 ---------- */
  linearExp:{ t:['E(aX + bY) = aE(X) + bE(Y)','E(aX + bY) = aE(X) + bE(Y)'], g:'E(aX + bY) = aE(X) + bE(Y)', s:[
    'E(aX + bY) = &Sigma;&Sigma;(ax + by)p(x, y) = a&Sigma;&Sigma;x p(x, y) + b&Sigma;&Sigma;y p(x, y)',
    ['Summing the joint pmf over y gives the marginal of X (and over x the marginal of Y):','جمع الدالة المشتركة على y يعطي الهامشية لـ X (وعلى x الهامشية لـ Y):'], '= a&Sigma;x p<sub>X</sub>(x) + b&Sigma;y p<sub>Y</sub>(y) = aE(X) + bE(Y)']},
  covShortcut:{ t:['Cov(X, Y) = E(XY) − E(X)E(Y)','Cov(X, Y) = E(XY) − E(X)E(Y)'], g:'Cov(X, Y) = E(XY) &minus; &mu;<sub>X</sub>&mu;<sub>Y</sub>', s:[
    'E[(X &minus; &mu;<sub>X</sub>)(Y &minus; &mu;<sub>Y</sub>)] = E(XY) &minus; &mu;<sub>Y</sub>E(X) &minus; &mu;<sub>X</sub>E(Y) + &mu;<sub>X</sub>&mu;<sub>Y</sub>',
    '= E(XY) &minus; &mu;<sub>X</sub>&mu;<sub>Y</sub> &minus; &mu;<sub>X</sub>&mu;<sub>Y</sub> + &mu;<sub>X</sub>&mu;<sub>Y</sub> = E(XY) &minus; &mu;<sub>X</sub>&mu;<sub>Y</sub>']},
  varSum:{ t:['Var(aX + bY)','قانون تباين aX + bY'], g:'Var(aX + bY) = a<sup>2</sup>Var(X) + b<sup>2</sup>Var(Y) + 2ab Cov(X, Y)', s:[
    ['Centre: `aX + bY − E(aX + bY) = a(X − μ_X) + b(Y − μ_Y)`. Square and take expectations:','نطرح المتوسط: `aX + bY − E(aX + bY) = a(X − μ_X) + b(Y − μ_Y)`. نربّع ونأخذ التوقع:'],
    'E[a<sup>2</sup>(X &minus; &mu;<sub>X</sub>)<sup>2</sup> + 2ab(X &minus; &mu;<sub>X</sub>)(Y &minus; &mu;<sub>Y</sub>) + b<sup>2</sup>(Y &minus; &mu;<sub>Y</sub>)<sup>2</sup>]', '= a<sup>2</sup>Var(X) + 2ab Cov(X, Y) + b<sup>2</sup>Var(Y)']},
  indepCov:{ t:['independence implies Cov(X, Y) = 0','الاستقلال يؤدي إلى Cov(X, Y) = 0'], g:'X, Y independent &rArr; Cov(X, Y) = 0', s:[
    ['Independence: `p(x, y) = p_X(x)p_Y(y)`, so the double sum factorises:','الاستقلال: `p(x, y) = p_X(x)p_Y(y)` فينفصل المجموع المزدوج:'], 'E(XY) = &Sigma;&Sigma;xy p<sub>X</sub>(x)p<sub>Y</sub>(y) = (&Sigma;x p<sub>X</sub>(x))(&Sigma;y p<sub>Y</sub>(y)) = E(X)E(Y)',
    'Cov(X, Y) = E(XY) &minus; E(X)E(Y) = 0', ['(The converse is false: zero covariance does not imply independence.)','(العكس غير صحيح: التغاير الصفري لا يعني الاستقلال.)']]},
  rhoBound:{ t:['−1 ≤ ρ ≤ 1','−1 ≤ ρ ≤ 1'], g:'&minus;1 &le; &rho; &le; 1', s:[
    ['A variance is never negative. Apply this to the standardised sum and difference:','التباين لا يكون سالباً. نطبق ذلك على مجموع المتغيرين المعياريين وفرقهما:'], `0 &le; Var(${fr('X','&sigma;<sub>X</sub>')} &plusmn; ${fr('Y','&sigma;<sub>Y</sub>')}) = 1 + 1 &plusmn; 2&rho; = 2(1 &plusmn; &rho;)`,
    ['So `1 + ρ ≥ 0` and `1 − ρ ≥ 0`, i.e. `−1 ≤ ρ ≤ 1`.','إذن `1 + ρ ≥ 0` و `1 − ρ ≥ 0` أي `−1 ≤ ρ ≤ 1`.']]},
  /* ---------- financial mathematics ---------- */
  simpleAmount:{ t:['the simple-interest amount','قانون الجملة بالفائدة البسيطة'], g:'A = P(1 + rt)', s:[['Interest each year is `Pr`; after t years it is `Prt`.','الفائدة كل سنة `Pr`، وبعد t سنة تكون `Prt`.'], 'A = P + Prt = P(1 + rt)']},
  compoundAmount:{ t:['the compound amount A = P(1 + r)ᵗ','قانون الجملة بالفائدة المركبة A = P(1 + r)ᵗ'], g:'A = P(1 + r)<sup>t</sup>', s:[
    ['Each year the balance is multiplied by `(1 + r)`: `A₁ = P(1 + r)`, `A₂ = A₁(1 + r) = P(1 + r)²`, …','كل سنة يُضرب الرصيد في `(1 + r)`: `A₁ = P(1 + r)` و `A₂ = A₁(1 + r) = P(1 + r)²` …'],
    ['Induction: if `Aₖ = P(1 + r)ᵏ` then `Aₖ₊₁ = Aₖ(1 + r) = P(1 + r)ᵏ⁺¹`.','بالاستقراء: إذا `Aₖ = P(1 + r)ᵏ` فإن `Aₖ₊₁ = Aₖ(1 + r) = P(1 + r)ᵏ⁺¹`.'], 'A<sub>t</sub> = P(1 + r)<sup>t</sup>']},
  presentValuePf:{ t:['the present value formula','قانون القيمة الحالية'], g:`PV = ${fr('FV','(1 + r)<sup>t</sup>')}`, s:[
    ['PV is the amount that grows to FV: `PV(1 + r)ᵗ = FV`.','القيمة الحالية هي المبلغ الذي ينمو إلى FV: `PV(1 + r)ᵗ = FV`.'], ['Divide:','نقسم:'], `PV = ${fr('FV','(1 + r)<sup>t</sup>')}`]},
  effectiveRatePf:{ t:['the effective annual rate','قانون المعدل السنوي الفعلي'], g:'r<sub>eff</sub> = (1 + r/m)<sup>m</sup> &minus; 1', s:[
    ['Compounding m times a year at `r/m` per period, 1 riyal grows in one year to `(1 + r/m)ᵐ`.','بالتركيب m مرة في السنة بمعدل `r/m` لكل فترة، يصبح الريال بعد سنة `(1 + r/m)ᵐ`.'],
    ['The effective rate is the single annual rate giving the same growth:','المعدل الفعلي هو المعدل السنوي الوحيد الذي يعطي النمو نفسه:'], '1 + r<sub>eff</sub> = (1 + r/m)<sup>m</sup>']},
  annuityFVPf:{ t:['the future value of an annuity','قانون القيمة المستقبلية للدفعات'], g:`FV = P${fr('(1 + i)<sup>n</sup> &minus; 1','i')}`, s:[
    ['Payment k (end of period k) earns interest for `n − k` periods:','الدفعة k (نهاية الفترة k) تكسب فائدة لمدة `n − k` فترة:'], 'FV = P[1 + (1 + i) + (1 + i)<sup>2</sup> + &hellip; + (1 + i)<sup>n&minus;1</sup>]',
    ['Geometric series with ratio `1 + i`:','متسلسلة هندسية أساسها `1 + i`:'], `FV = P${fr('(1 + i)<sup>n</sup> &minus; 1','(1 + i) &minus; 1')} = P${fr('(1 + i)<sup>n</sup> &minus; 1','i')}`]},
  continuousComp:{ t:['continuous compounding A = Peʳᵗ','التركيب المستمر A = Peʳᵗ'], g:'A = Pe<sup>rt</sup>', s:[
    ['With m compoundings a year: `A = P(1 + r/m)^{mt}`. Put `k = m/r`:','مع m مرة تركيب في السنة: `A = P(1 + r/m)^{mt}`. نضع `k = m/r`:'], 'A = P[(1 + 1/k)<sup>k</sup>]<sup>rt</sup>',
    ['As m → ∞, k → ∞ and `(1 + 1/k)ᵏ → e`:','عندما m → ∞ فإن k → ∞ و `(1 + 1/k)ᵏ → e`:'], 'A = Pe<sup>rt</sup>']},
  /* ---------- ODE & numerical ---------- */
  expSolution:{ t:['the solution of y′ = ky','حل المعادلة y′ = ky'], g:'y = y<sub>0</sub>e<sup>kt</sup>', s:[
    ['Separate the variables (y ≠ 0):','نفصل المتغيرات (y ≠ 0):'], `${fr('dy','y')} = k dt &rArr; ln|y| = kt + C`,
    ['Exponentiate and use `y(0) = y₀`:','نأخذ الأس ونستخدم `y(0) = y₀`:'], 'y = Ae<sup>kt</sup>, &nbsp; A = y(0) = y<sub>0</sub>']},
  doublingTime:{ t:['the doubling time T = ln 2 / k','قانون زمن التضاعف T = ln 2 / k'], g:`T = ${fr('ln 2','k')}`, s:[
    ['Doubling means `y(T) = 2y₀`:','التضاعف يعني `y(T) = 2y₀`:'], 'y<sub>0</sub>e<sup>kT</sup> = 2y<sub>0</sub> &rArr; e<sup>kT</sup> = 2', ['Take ln:','نأخذ ln:'], `kT = ln 2 &rArr; T = ${fr('ln 2','k')}`]},
  charEquationPf:{ t:['the characteristic equation of ay″ + by′ + cy = 0','المعادلة المميزة لـ ay″ + by′ + cy = 0'], g:'ar<sup>2</sup> + br + c = 0', s:[
    ['Try `y = e^{rx}`: `y′ = re^{rx}`, `y″ = r²e^{rx}`. Substitute:','نجرب `y = e^{rx}`: `y′ = re^{rx}` و `y″ = r²e^{rx}`. نعوّض:'], '(ar<sup>2</sup> + br + c)e<sup>rx</sup> = 0',
    ['`e^{rx}` is never zero, so `ar² + br + c = 0`.','`e^{rx}` لا تساوي صفراً أبداً، إذن `ar² + br + c = 0`.']]},
  integratingFactor:{ t:['the integrating factor for y′ + P(x)y = Q(x)','عامل التكامل للمعادلة y′ + P(x)y = Q(x)'], g:'(&mu;y)&prime; = &mu;Q, &nbsp; &mu; = e<sup>&int;P dx</sup>', s:[
    ['Multiply by `μ = e^{∫P dx}`; note `μ′ = Pμ`:','نضرب في `μ = e^{∫P dx}`؛ ولاحظ أن `μ′ = Pμ`:'], '&mu;y&prime; + &mu;Py = &mu;y&prime; + &mu;&prime;y = (&mu;y)&prime;',
    ['So `(μy)′ = μQ`; integrate:','إذن `(μy)′ = μQ`؛ نكامل:'], `y = ${fr(1,'&mu;')}(&int; &mu;Q dx + C)`]},
  newtonPf:{ t:["Newton's method","طريقة نيوتن"], g:`x<sub>n+1</sub> = x<sub>n</sub> &minus; ${fr('f(x<sub>n</sub>)',"f&prime;(x<sub>n</sub>)")}`, s:[
    ['Replace f near xₙ by its tangent line:','نستبدل f قرب xₙ بالمماس:'], 'y = f(x<sub>n</sub>) + f&prime;(x<sub>n</sub>)(x &minus; x<sub>n</sub>)',
    ['The next approximation is where the tangent meets the x-axis (y = 0):','التقريب التالي هو تقاطع المماس مع محور x (y = 0):'], `x<sub>n+1</sub> = x<sub>n</sub> &minus; ${fr('f(x<sub>n</sub>)',"f&prime;(x<sub>n</sub>)")}`]},
  newtonSqrtPf:{ t:["Newton's iteration for √N","تكرار نيوتن لحساب √N"], g:`x<sub>n+1</sub> = ${fr(1,2)}(x<sub>n</sub> + ${fr('N','x<sub>n</sub>')})`, s:[
    ['Use `f(x) = x² − N`, `f′(x) = 2x` in Newton’s formula:','نستخدم `f(x) = x² − N` و `f′(x) = 2x` في قانون نيوتن:'], `x<sub>n+1</sub> = x<sub>n</sub> &minus; ${fr('x<sub>n</sub>'+s2+' &minus; N','2x<sub>n</sub>')} = ${fr('x<sub>n</sub>'+s2+' + N','2x<sub>n</sub>')} = ${fr(1,2)}(x<sub>n</sub> + ${fr('N','x<sub>n</sub>')})`]},
  trapezoidPf:{ t:['the trapezoidal rule','قاعدة شبه المنحرف'], g:`T = ${fr('h',2)}[f<sub>0</sub> + 2f<sub>1</sub> + &hellip; + 2f<sub>n&minus;1</sub> + f<sub>n</sub>]`, s:[
    ['On each strip `[xᵢ, xᵢ₊₁]` replace the curve by a straight line; the area is a trapezoid:','على كل شريحة `[xᵢ, xᵢ₊₁]` نستبدل المنحنى بخط مستقيم فتكون المساحة شبه منحرف:'], `${fr('h',2)}(f<sub>i</sub> + f<sub>i+1</sub>)`,
    ['Add the n trapezoids: every inner value appears in two of them:','نجمع أشباه المنحرف n: كل قيمة داخلية تظهر في اثنين منها:'], `T = ${fr('h',2)}[f<sub>0</sub> + 2f<sub>1</sub> + &hellip; + 2f<sub>n&minus;1</sub> + f<sub>n</sub>]`]},
  bisectionError:{ t:['the bisection error bound','حد الخطأ في طريقة التنصيف'], g:`|c<sub>n</sub> &minus; r| &le; ${fr('b &minus; a','2<sup>n</sup>')}`, s:[
    ['Each step halves the interval that contains the root: after n steps its length is `(b − a)/2ⁿ`.','كل خطوة تنصّف الفترة التي تحتوي الجذر: بعد n خطوة يكون طولها `(b − a)/2ⁿ`.'],
    ['The root and the midpoint cₙ both lie in an interval of length `(b − a)/2ⁿ` (of the previous step, halved), so their distance is at most that.','الجذر ونقطة المنتصف cₙ يقعان في فترة طولها `(b − a)/2ⁿ`، فالمسافة بينهما لا تزيد على ذلك.']]},
  linInterpPf:{ t:['the linear interpolation formula','قانون الاستيفاء الخطي'], g:`p(x) = y<sub>0</sub> + ${fr('y<sub>1</sub> &minus; y<sub>0</sub>','x<sub>1</sub> &minus; x<sub>0</sub>')}(x &minus; x<sub>0</sub>)`, s:[
    ['The line through `(x₀, y₀)` and `(x₁, y₁)` has slope `m = (y₁ − y₀)/(x₁ − x₀)`.','المستقيم المار بـ `(x₀, y₀)` و `(x₁, y₁)` ميله `m = (y₁ − y₀)/(x₁ − x₀)`.'],
    ['Point–slope form:','صيغة النقطة والميل:'], 'p(x) = y<sub>0</sub> + m(x &minus; x<sub>0</sub>)', ['Check: `p(x₀) = y₀` and `p(x₁) = y₀ + (y₁ − y₀) = y₁`.','تحقق: `p(x₀) = y₀` و `p(x₁) = y₀ + (y₁ − y₀) = y₁`.']]},
  eulerPf:{ t:["Euler's method from Taylor's theorem","طريقة أويلر من مبرهنة تايلور"], g:'y<sub>n+1</sub> = y<sub>n</sub> + h f(x<sub>n</sub>, y<sub>n</sub>)', s:[
    ['Taylor:','تايلور:'], `y(x<sub>n</sub> + h) = y(x<sub>n</sub>) + h y&prime;(x<sub>n</sub>) + ${fr('h'+s2,2)}y&Prime;(&xi;)`,
    ['Use `y′ = f(x, y)` and drop the `O(h²)` term:','نستخدم `y′ = f(x, y)` ونهمل الحد `O(h²)`:'], 'y<sub>n+1</sub> = y<sub>n</sub> + h f(x<sub>n</sub>, y<sub>n</sub>)', ['The local error is `O(h²)`, so the global error is `O(h)`.','الخطأ المحلي `O(h²)` والخطأ الكلي `O(h)`.']]},
  heunPf:{ t:['the improved Euler (Heun) method','طريقة أويلر المحسّنة (هيون)'], g:`y<sub>n+1</sub> = y<sub>n</sub> + ${fr('h',2)}(k<sub>1</sub> + k<sub>2</sub>)`, s:[
    ['Integrate the equation over one step:','نكامل المعادلة على خطوة واحدة:'], 'y(x<sub>n+1</sub>) = y(x<sub>n</sub>) + &int;<sub>x<sub>n</sub></sub><sup>x<sub>n+1</sub></sup> f(x, y(x)) dx',
    ['Approximate the integral by the trapezoidal rule; the unknown `y(x_{n+1})` inside is predicted by Euler:','نقرّب التكامل بقاعدة شبه المنحرف؛ والقيمة المجهولة `y(x_{n+1})` نتنبأ بها بطريقة أويلر:'],
    `k<sub>1</sub> = f(x<sub>n</sub>, y<sub>n</sub>), &nbsp; k<sub>2</sub> = f(x<sub>n+1</sub>, y<sub>n</sub> + hk<sub>1</sub>), &nbsp; y<sub>n+1</sub> = y<sub>n</sub> + ${fr('h',2)}(k<sub>1</sub> + k<sub>2</sub>)`]},
  eulerStability:{ t:["the stability condition of Euler's method for y′ = λy","شرط استقرار طريقة أويلر للمعادلة y′ = λy"], g:'|1 + h&lambda;| &le; 1', s:[
    ['Euler gives `y_{n+1} = yₙ + hλyₙ = (1 + hλ)yₙ`, so','أويلر تعطي `y_{n+1} = yₙ + hλyₙ = (1 + hλ)yₙ`، إذن'], 'y<sub>n</sub> = (1 + h&lambda;)<sup>n</sup>y<sub>0</sub>',
    ['For λ < 0 the true solution decays; the numerical one stays bounded only if `|1 + hλ| ≤ 1`, i.e. `0 < h ≤ 2/|λ|`.','عندما λ < 0 يتناقص الحل الدقيق؛ والحل العددي يبقى محدوداً فقط إذا `|1 + hλ| ≤ 1` أي `0 < h ≤ 2/|λ|`.']]},
  /* ---------- PDE & finite differences ---------- */
  dAlembert:{ t:["d'Alembert's solution of the wave equation","حل دالامبير لمعادلة الموجة"], g:'u = F(x + ct) + G(x &minus; ct)', s:[
    ['Differentiate with the chain rule:','نشتق بقاعدة السلسلة:'], 'u<sub>tt</sub> = c<sup>2</sup>F&Prime; + c<sup>2</sup>G&Prime;, &nbsp; u<sub>xx</sub> = F&Prime; + G&Prime;',
    ['So `u_tt = c²u_xx` for any twice-differentiable F and G.','إذن `u_tt = c²u_xx` لأي دالتين F و G قابلتين للاشتقاق مرتين.']]},
  heatSeparationPf:{ t:['separation of variables for the heat equation','فصل المتغيرات في معادلة الحرارة'], g:'u = e<sup>&minus;&alpha;n<sup>2</sup>t</sup> sin nx', s:[
    ['Try `u = X(x)T(t)` in `u_t = αu_xx`:','نجرب `u = X(x)T(t)` في `u_t = αu_xx`:'], `XT&prime; = &alpha;X&Prime;T &rArr; ${fr("T&prime;","&alpha;T")} = ${fr("X&Prime;",'X')} = &minus;&lambda;`,
    ['With `X(0) = X(π) = 0`: `X = sin nx`, `λ = n²`; then `T′ = −αn²T` gives `T = e^{−αn²t}`.','مع `X(0) = X(π) = 0`: `X = sin nx` و `λ = n²`؛ ثم `T′ = −αn²T` تعطي `T = e^{−αn²t}`.']]},
  pdeTypePf:{ t:['why B² − 4AC classifies a second-order PDE','لماذا يصنّف المميز B² − 4AC المعادلة من الرتبة الثانية'], g:'A(dy)<sup>2</sup> &minus; B dx dy + C(dx)<sup>2</sup> = 0', s:[
    ['The characteristic curves of `Au_xx + Bu_xy + Cu_yy = …` satisfy','المنحنيات المميزة للمعادلة `Au_xx + Bu_xy + Cu_yy = …` تحقق'], `A(${fr('dy','dx')})${s2} &minus; B${fr('dy','dx')} + C = 0`,
    ['This quadratic in `dy/dx` has two real, one, or no real roots as `B² − 4AC` is `> 0`, `= 0`, `< 0`: two families of characteristics (hyperbolic), one (parabolic), none (elliptic).','لهذه المعادلة التربيعية في `dy/dx` جذران حقيقيان أو جذر واحد أو لا جذور حسب `B² − 4AC` موجب أو صفر أو سالب: عائلتان من المميزات (زائدية)، عائلة واحدة (مكافئة)، لا شيء (ناقصية).']]},
  forwardDiff:{ t:['the forward difference has error O(h)','خطأ الفرق الأمامي من الرتبة O(h)'], g:`u&prime;(x) = ${fr('u(x+h) &minus; u(x)','h')} + O(h)`, s:[
    ['Taylor:','تايلور:'], `u(x + h) = u(x) + hu&prime;(x) + ${fr('h'+s2,2)}u&Prime;(&xi;)`, ['Solve for `u′(x)`:','نحل بالنسبة لـ `u′(x)`:'], `u&prime;(x) = ${fr('u(x+h) &minus; u(x)','h')} &minus; ${fr('h',2)}u&Prime;(&xi;)`]},
  centralDiff:{ t:['the central difference has error O(h²)','خطأ الفرق المركزي من الرتبة O(h²)'], g:`u&prime;(x) = ${fr('u(x+h) &minus; u(x&minus;h)','2h')} + O(h${s2})`, s:[
    ['Taylor both ways:','تايلور في الاتجاهين:'], `u(x &plusmn; h) = u &plusmn; hu&prime; + ${fr('h'+s2,2)}u&Prime; &plusmn; ${fr('h'+s3,6)}u&#8244; + &hellip;`,
    ['Subtract: the even terms cancel:','نطرح فتُحذف الحدود الزوجية:'], `u(x+h) &minus; u(x&minus;h) = 2hu&prime; + ${fr('h'+s3,3)}u&#8244; + &hellip; &rArr; u&prime; = ${fr('u(x+h) &minus; u(x&minus;h)','2h')} + O(h${s2})`]},
  secondDiff:{ t:['the central second difference','الفرق المركزي الثاني'], g:`u&Prime;(x) = ${fr('u(x+h) &minus; 2u(x) + u(x&minus;h)','h'+s2)} + O(h${s2})`, s:[
    ['Add the two Taylor expansions: the odd terms cancel:','نجمع مفكوكي تايلور فتُحذف الحدود الفردية:'], `u(x+h) + u(x&minus;h) = 2u + h${s2}u&Prime; + ${fr('h<sup>4</sup>',12)}u<sup>(4)</sup> + &hellip;`,
    ['Solve for `u″`:','نحل بالنسبة لـ `u″`:'], `u&Prime; = ${fr('u(x+h) &minus; 2u(x) + u(x&minus;h)','h'+s2)} + O(h${s2})`]},
  explicitHeat:{ t:['the explicit scheme for the heat equation','الطريقة الصريحة لمعادلة الحرارة'], g:`u<sub>i</sub><sup>n+1</sup> = u<sub>i</sub><sup>n</sup> + r(u<sub>i+1</sub><sup>n</sup> &minus; 2u<sub>i</sub><sup>n</sup> + u<sub>i&minus;1</sub><sup>n</sup>), &nbsp; r = ${fr('&alpha;k','h'+s2)}`, s:[
    ['In `u_t = αu_xx` use a forward difference in t and a central second difference in x:','في `u_t = αu_xx` نستخدم فرقاً أمامياً في t وفرقاً مركزياً ثانياً في x:'], `${fr('u<sub>i</sub><sup>n+1</sup> &minus; u<sub>i</sub><sup>n</sup>','k')} = &alpha;${fr('u<sub>i+1</sub><sup>n</sup> &minus; 2u<sub>i</sub><sup>n</sup> + u<sub>i&minus;1</sub><sup>n</sup>','h'+s2)}`,
    ['Multiply by k and solve for the new value.','نضرب في k ونحل بالنسبة للقيمة الجديدة.'], ['It is stable when `r ≤ ½` (von Neumann analysis).','وهي مستقرة عندما `r ≤ ½` (تحليل فون نيومان).']]},
  /* ---------- operations research ---------- */
  lpCorner:{ t:['an LP optimum occurs at a corner point','الحل الأمثل للبرمجة الخطية يقع عند رأس'], g:'max Z attained at a vertex', s:[
    ['Every point of a bounded feasible polygon is a convex combination of its vertices: `x = Σλᵢvᵢ`, `λᵢ ≥ 0`, `Σλᵢ = 1`.','كل نقطة في مضلع الحلول المحدود تركيبة محدبة لرؤوسه: `x = Σλᵢvᵢ` حيث `λᵢ ≥ 0` و `Σλᵢ = 1`.'],
    ['Z is linear, so `Z(x) = ΣλᵢZ(vᵢ) ≤ (max Z(vᵢ))Σλᵢ = max Z(vᵢ)`.','Z خطية فإن `Z(x) = ΣλᵢZ(vᵢ) ≤ (max Z(vᵢ))Σλᵢ = max Z(vᵢ)`.'], ['No point beats the best vertex, so comparing vertices is enough.','لا توجد نقطة أفضل من أفضل رأس، لذا تكفي المقارنة بين الرؤوس.']]},
  hungarianRow:{ t:['subtracting a constant from a row keeps the optimal assignment','طرح ثابت من صف لا يغيّر التخصيص الأمثل'], g:'cost&prime; = cost &minus; k', s:[
    ['Every assignment uses exactly one cell of each row.','كل تخصيص يستخدم خلية واحدة بالضبط من كل صف.'],
    ['Subtracting k from row i lowers the cost of EVERY assignment by exactly k, so their order does not change and the cheapest stays cheapest.','طرح k من الصف i يخفض تكلفة كل تخصيص بمقدار k بالضبط، فلا يتغير ترتيبها ويبقى الأرخص هو الأرخص.'],
    ['The same holds for columns — this justifies the row and column reductions of the Hungarian method.','وكذلك الأعمدة — وهذا يبرر طرح أصغر عنصر في الصفوف والأعمدة في الطريقة المجرية.']]},
  balancedTransport:{ t:['a transportation problem needs total supply = total demand','مسألة النقل تتطلب تساوي العرض والطلب'], g:'&Sigma;s<sub>i</sub> = &Sigma;d<sub>j</sub>', s:[
    ['If every supply is shipped and every demand met: `Σⱼxᵢⱼ = sᵢ` and `Σᵢxᵢⱼ = dⱼ`.','إذا شُحن كل العرض وغُطي كل الطلب: `Σⱼxᵢⱼ = sᵢ` و `Σᵢxᵢⱼ = dⱼ`.'],
    ['Sum all the shipments both ways:','نجمع كل الشحنات بالطريقتين:'], '&Sigma;<sub>i</sub>s<sub>i</sub> = &Sigma;<sub>i</sub>&Sigma;<sub>j</sub>x<sub>ij</sub> = &Sigma;<sub>j</sub>d<sub>j</sub>',
    ['If not, add a dummy source or destination with zero costs to balance the problem.','وإلا نضيف مصدراً أو وجهة وهمية بتكاليف صفرية لموازنة المسألة.']]},
  emvPf:{ t:['the expected monetary value of a decision','القيمة النقدية المتوقعة للقرار'], g:'EMV(A<sub>i</sub>) = &Sigma;<sub>j</sub> p<sub>j</sub> v<sub>ij</sub>', s:[
    ['The payoff of alternative Aᵢ is a random variable taking `vᵢⱼ` with probability `pⱼ` (state j).','عائد البديل Aᵢ متغير عشوائي يأخذ القيمة `vᵢⱼ` باحتمال `pⱼ` (الحالة j).'], ['Its expected value is','قيمته المتوقعة'], 'EMV(A<sub>i</sub>) = &Sigma;<sub>j</sub> p<sub>j</sub> v<sub>ij</sub>',
    ['Repeated many times, the average payoff approaches the EMV, so we choose the largest.','عند التكرار كثيراً يقترب متوسط العائد من القيمة المتوقعة، لذا نختار الأكبر.']]},
  /* ---------- vectors & differential geometry ---------- */
  dotCos:{ t:['u · v = |u||v| cos θ','u · v = |u||v| cos θ'], g:'u &middot; v = |u||v| cos &theta;', s:[
    ['Law of cosines in the triangle with sides u, v, u − v:','قانون جيب التمام في المثلث الذي أضلاعه u و v و u − v:'], '|u &minus; v|<sup>2</sup> = |u|<sup>2</sup> + |v|<sup>2</sup> &minus; 2|u||v| cos &theta;',
    ['Expand the left side with the dot product:','نفك الطرف الأيسر بالضرب النقطي:'], '|u &minus; v|<sup>2</sup> = (u &minus; v)&middot;(u &minus; v) = |u|<sup>2</sup> &minus; 2u&middot;v + |v|<sup>2</sup>', ['Compare the two.','نقارن الطرفين.']]},
  crossPerp:{ t:['u × v is perpendicular to u and v','u × v عمودي على u و v'], g:'u &middot; (u &times; v) = 0', s:[
    'u &middot; (u &times; v) = u<sub>1</sub>(u<sub>2</sub>v<sub>3</sub> &minus; u<sub>3</sub>v<sub>2</sub>) + u<sub>2</sub>(u<sub>3</sub>v<sub>1</sub> &minus; u<sub>1</sub>v<sub>3</sub>) + u<sub>3</sub>(u<sub>1</sub>v<sub>2</sub> &minus; u<sub>2</sub>v<sub>1</sub>)',
    ['All six products cancel in pairs, so it is 0; the same for v.','الحدود الستة تُحذف مثنى مثنى فيكون الناتج 0، وكذلك مع v.']]},
  divCurl:{ t:['div(curl F) = 0','div(curl F) = 0'], g:'&nabla;&middot;(&nabla; &times; F) = 0', s:[
    ['With `F = ⟨P, Q, R⟩`:','مع `F = ⟨P, Q, R⟩`:'], '&nabla;&middot;(&nabla;&times;F) = (R<sub>y</sub> &minus; Q<sub>z</sub>)<sub>x</sub> + (P<sub>z</sub> &minus; R<sub>x</sub>)<sub>y</sub> + (Q<sub>x</sub> &minus; P<sub>y</sub>)<sub>z</sub>',
    ['Mixed partials are equal (Clairaut), so the terms cancel in pairs: `R_yx − R_xy`, `P_zy − P_yz`, `Q_xz − Q_zx`.','المشتقات المختلطة متساوية (كليرو) فتُحذف الحدود مثنى: `R_yx − R_xy` و `P_zy − P_yz` و `Q_xz − Q_zx`.']]},
  curlGrad:{ t:['curl(grad f) = 0','curl(grad f) = 0'], g:'&nabla; &times; (&nabla;f) = 0', s:[
    '&nabla;&times;&nabla;f = &lang;f<sub>zy</sub> &minus; f<sub>yz</sub>, f<sub>xz</sub> &minus; f<sub>zx</sub>, f<sub>yx</sub> &minus; f<sub>xy</sub>&rang;', ['Equal mixed partials make every component zero.','تساوي المشتقات المختلطة يجعل كل مركبة صفراً.']]},
  curvCircle:{ t:['the curvature of a circle is 1/r','قانون انحناء الدائرة 1/r'], g:`&kappa; = ${fr(1,'r')}`, s:[
    ['Arc-length parametrisation: `r(s) = (r cos(s/r), r sin(s/r))`, so `|r′(s)| = 1`.','الوسيط بطول القوس: `r(s) = (r cos(s/r), r sin(s/r))` فيكون `|r′(s)| = 1`.'], `r&Prime;(s) = &minus;${fr(1,'r')}(cos(s/r), sin(s/r))`, `&kappa; = |r&Prime;(s)| = ${fr(1,'r')}`]},
  curvGraph:{ t:['the curvature of y = f(x)','قانون انحناء المنحنى y = f(x)'], g:`&kappa; = ${fr('|y&Prime;|','(1 + y&prime;'+s2+')<sup>3/2</sup>')}`, s:[
    ['Parametrise `r(x) = (x, f(x))`: `r′ = (1, f′)`, `r″ = (0, f″)`.','نضع `r(x) = (x, f(x))`: `r′ = (1, f′)` و `r″ = (0, f″)`.'],
    ['Plane-curve formula `κ = |x′y″ − y′x″| / |r′|³`:','قانون المنحنى المستوي `κ = |x′y″ − y′x″| / |r′|³`:'], `&kappa; = ${fr('|1&middot;f&Prime; &minus; f&prime;&middot;0|','(1 + f&prime;'+s2+')<sup>3/2</sup>')}`]},
  helixPf:{ t:['the curvature of a helix','قانون انحناء الحلزون'], g:`&kappa; = ${fr('a','a'+s2+' + b'+s2)}`, s:[
    ['`r = (a cos t, a sin t, bt)`: `r′ = (−a sin t, a cos t, b)`, `|r′| = √(a² + b²)`; `r″ = (−a cos t, −a sin t, 0)`.','`r = (a cos t, a sin t, bt)`: `r′ = (−a sin t, a cos t, b)` و `|r′| = √(a² + b²)`، و `r″ = (−a cos t, −a sin t, 0)`.'],
    `r&prime; &times; r&Prime; = (ab sin t, &minus;ab cos t, a${s2}), &nbsp; |r&prime; &times; r&Prime;| = a${rt('a'+s2+' + b'+s2)}`,
    `&kappa; = ${fr('|r&prime; &times; r&Prime;|','|r&prime;|'+s3)} = ${fr('a'+rt('a'+s2+' + b'+s2),'(a'+s2+' + b'+s2+')<sup>3/2</sup>')} = ${fr('a','a'+s2+' + b'+s2)}`]},
  /* ---------- algebraic structures & number theory ---------- */
  uniqueIdentity:{ t:['the identity of a group is unique','العنصر المحايد في الزمرة وحيد'], g:'e = e&prime;', s:[
    ['Suppose e and e′ are both identities.','نفرض أن e و e′ عنصران محايدان.'], ['Since e′ is an identity, `ee′ = e`; since e is an identity, `ee′ = e′`.','بما أن e′ محايد فإن `ee′ = e`، وبما أن e محايد فإن `ee′ = e′`.'], 'e = ee&prime; = e&prime;']},
  uniqueInverse:{ t:['inverses in a group are unique','المعكوس في الزمرة وحيد'], g:'b = c', s:[
    ['Let b and c both be inverses of a: `ab = ba = e`, `ac = ca = e`.','ليكن b و c معكوسين لـ a: `ab = ba = e` و `ac = ca = e`.'], 'b = be = b(ac) = (ba)c = ec = c']},
  lagrangePf:{ t:["Lagrange's theorem","مبرهنة لاغرانج"], g:'|H| divides |G|, &nbsp; [G : H] = |G|/|H|', s:[
    ['The left cosets `gH` partition G: two cosets are either equal or disjoint.','المجموعات المشاركة اليسرى `gH` تجزئ G: أي اثنتين إما متساويتان أو منفصلتان.'],
    ['Each coset has |H| elements: `h ↦ gh` is a bijection H → gH (cancellation).','كل مجموعة مشاركة فيها |H| عنصراً: `h ↦ gh` تقابل من H إلى gH (قانون الاختصار).'],
    ['So `|G| = (number of cosets) · |H|`.','إذن `|G| = (عدد المجموعات المشاركة) · |H|`.']]},
  orderDivides:{ t:['the order of an element divides the order of the group','رتبة العنصر تقسم رتبة الزمرة'], g:'o(a) | |G|', s:[
    ['The cyclic subgroup `⟨a⟩ = {e, a, …, a^{k−1}}` has exactly `k = o(a)` elements.','الزمرة الجزئية الدائرية `⟨a⟩ = {e, a, …, a^{k−1}}` فيها `k = o(a)` عنصراً بالضبط.'], ['By Lagrange, `|⟨a⟩|` divides |G|.','ومن لاغرانج `|⟨a⟩|` يقسم |G|.']]},
  primeCyclic:{ t:['a group of prime order is cyclic','الزمرة ذات الرتبة الأولية دائرية'], g:'|G| = p &rArr; G = &lang;a&rang;', s:[
    ['Take any `a ≠ e`. Its order divides p (Lagrange) and is not 1, so it is p.','نأخذ أي `a ≠ e`. رتبته تقسم p (لاغرانج) وليست 1، إذن هي p.'], ['So `⟨a⟩` has p elements, i.e. `⟨a⟩ = G`.','إذن `⟨a⟩` فيها p عنصراً أي `⟨a⟩ = G`.']]},
  infinitePrimes:{ t:['there are infinitely many primes','الأعداد الأولية لا نهائية'], g:'|&#8473;| = &infin;', s:[
    ['Suppose the primes are only `p₁, …, pₖ`. Let `N = p₁p₂…pₖ + 1`.','نفرض أن الأعداد الأولية هي `p₁، …، pₖ` فقط. نضع `N = p₁p₂…pₖ + 1`.'],
    ['N > 1 has a prime factor p; but dividing N by any pᵢ leaves remainder 1.','N > 1 له عامل أولي p؛ لكن قسمة N على أي pᵢ تترك الباقي 1.'], ['So p is a new prime — contradiction.','إذن p عدد أولي جديد — تناقض.']]},
  euclidGcd:{ t:['gcd(a, b) = gcd(b, a mod b)','gcd(a, b) = gcd(b, a mod b)'], g:'gcd(a, b) = gcd(b, r), &nbsp; a = qb + r', s:[
    ['If d divides a and b, it divides `r = a − qb`.','إذا قسم d العددين a و b فإنه يقسم `r = a − qb`.'], ['If d divides b and r, it divides `a = qb + r`.','وإذا قسم d العددين b و r فإنه يقسم `a = qb + r`.'],
    ['So the pairs (a, b) and (b, r) have the same common divisors, hence the same gcd.','إذن للزوجين (a, b) و (b, r) القواسم المشتركة نفسها، فلهما القاسم المشترك الأكبر نفسه.']]},
  phiPrimePower:{ t:['φ(pᵏ) = pᵏ − pᵏ⁻¹','φ(pᵏ) = pᵏ − pᵏ⁻¹'], g:'&phi;(p<sup>k</sup>) = p<sup>k</sup> &minus; p<sup>k&minus;1</sup>', s:[
    ['A number `1 ≤ m ≤ pᵏ` shares a factor with pᵏ only if p divides it.','العدد `1 ≤ m ≤ pᵏ` يشترك مع pᵏ في عامل فقط إذا كان p يقسمه.'], ['The multiples of p up to pᵏ are `p, 2p, …, p^{k−1}·p`: `p^{k−1}` of them.','مضاعفات p حتى pᵏ هي `p، 2p، …، p^{k−1}·p` وعددها `p^{k−1}`.'], '&phi;(p<sup>k</sup>) = p<sup>k</sup> &minus; p<sup>k&minus;1</sup>']},
  tauFormula:{ t:['the number of divisors τ(n)','قانون عدد القواسم τ(n)'], g:'&tau;(n) = (a<sub>1</sub> + 1)(a<sub>2</sub> + 1)&hellip;(a<sub>k</sub> + 1)', s:[
    ['With `n = p₁^{a₁}…pₖ^{aₖ}`, every divisor is `p₁^{b₁}…pₖ^{bₖ}` with `0 ≤ bᵢ ≤ aᵢ` (unique factorisation).','مع `n = p₁^{a₁}…pₖ^{aₖ}` كل قاسم على الصورة `p₁^{b₁}…pₖ^{bₖ}` حيث `0 ≤ bᵢ ≤ aᵢ` (وحدانية التحليل).'],
    ['Each bᵢ has `aᵢ + 1` choices; multiply.','لكل bᵢ عدد `aᵢ + 1` من الخيارات؛ نضرب.']]},
  congruenceUnique:{ t:['ax ≡ b (mod m) has a unique solution when gcd(a, m) = 1','للتطابق ax ≡ b (mod m) حل وحيد عندما gcd(a, m) = 1'], g:'x &equiv; a<sup>&minus;1</sup>b (mod m)', s:[
    ['Bézout: `gcd(a, m) = 1` gives integers s, t with `as + mt = 1`, so `as ≡ 1`: s is the inverse of a.','بيزو: `gcd(a, m) = 1` يعطي صحيحين s و t بحيث `as + mt = 1` أي `as ≡ 1`: إذن s معكوس a.'],
    ['Multiply by s: `x ≡ sb`. If x and y are both solutions, `a(x − y) ≡ 0`; multiplying by s gives `x ≡ y`.','نضرب في s: `x ≡ sb`. وإذا كان x و y حلين فإن `a(x − y) ≡ 0`، وبالضرب في s نجد `x ≡ y`.']]},
  unitGcd:{ t:['a is a unit in ℤₙ ⇔ gcd(a, n) = 1','a وحدة في ℤₙ ⇔ gcd(a, n) = 1'], g:'a &isin; U(&#8484;<sub>n</sub>) &hArr; gcd(a, n) = 1', s:[
    ['(⇐) Bézout: `as + nt = 1` ⇒ `as ≡ 1 (mod n)`, so s is an inverse.','(⇐) بيزو: `as + nt = 1` ⇒ `as ≡ 1 (mod n)` فيكون s معكوساً.'],
    ['(⇒) If `as ≡ 1` then `as − 1 = nk`; any common divisor of a and n divides 1.','(⇒) إذا `as ≡ 1` فإن `as − 1 = nk`، وأي قاسم مشترك لـ a و n يقسم 1.']]},
  fieldPrime:{ t:['ℤₙ is a field ⇔ n is prime','ℤₙ حقل ⇔ n أولي'], g:'&#8484;<sub>n</sub> field &hArr; n prime', s:[
    ['(⇐) If n is prime, every `a ≠ 0` has `gcd(a, n) = 1`, so it is a unit.','(⇐) إذا كان n أولياً فلكل `a ≠ 0` يكون `gcd(a, n) = 1` فهو وحدة.'],
    ['(⇒) If `n = ab` with `1 < a, b < n`, then `ab ≡ 0` with a, b ≠ 0: zero divisors, which a field cannot have.','(⇒) إذا `n = ab` حيث `1 < a, b < n` فإن `ab ≡ 0` مع a و b غير صفريين: قواسم للصفر، والحقل لا يحتويها.']]},
  fieldNoZeroDiv:{ t:['a field has no zero divisors','الحقل لا يحتوي قواسم للصفر'], g:'ab = 0 &rArr; a = 0 or b = 0', s:[
    ['Let `ab = 0` with `a ≠ 0`. Multiply by `a⁻¹`:','نفرض `ab = 0` مع `a ≠ 0`. نضرب في `a⁻¹`:'], 'b = a<sup>&minus;1</sup>(ab) = a<sup>&minus;1</sup>0 = 0']},
  /* ---------- analysis ---------- */
  geomSeriesPf:{ t:['the sum of a geometric series','قانون مجموع المتسلسلة الهندسية'], g:`&Sigma;<sub>n=0</sub><sup>&infin;</sup> ar${sn} = ${fr('a','1 &minus; r')}, &nbsp; |r| &lt; 1`, s:[
    ['Partial sum: multiply `Sₙ = a + ar + … + arⁿ⁻¹` by r and subtract:','المجموع الجزئي: نضرب `Sₙ = a + ar + … + arⁿ⁻¹` في r ونطرح:'], `S<sub>n</sub> &minus; rS<sub>n</sub> = a &minus; ar${sn} &rArr; S<sub>n</sub> = ${fr('a(1 &minus; r'+sn+')','1 &minus; r')}`,
    ['For |r| < 1, `rⁿ → 0`:','عندما |r| < 1 فإن `rⁿ → 0`:'], `S = ${fr('a','1 &minus; r')}`]},
  limitOneOverN:{ t:['lim 1/n = 0 (ε–N proof)','lim 1/n = 0 (برهان ε–N)'], g:`lim<sub>n&rarr;&infin;</sub> ${fr(1,'n')} = 0`, s:[
    ['Given ε > 0, choose an integer `N > 1/ε` (Archimedean property).','لكل ε > 0 نختار عدداً صحيحاً `N > 1/ε` (خاصية أرخميدس).'], ['For n ≥ N:','لكل n ≥ N:'], `|${fr(1,'n')} &minus; 0| = ${fr(1,'n')} &le; ${fr(1,'N')} &lt; &epsilon;`]},
  limitUnique:{ t:['the limit of a sequence is unique','نهاية المتتابعة وحيدة'], g:'a<sub>n</sub> &rarr; L, a<sub>n</sub> &rarr; M &rArr; L = M', s:[
    ['Let ε > 0. For n large enough both `|aₙ − L| < ε/2` and `|aₙ − M| < ε/2`.','ليكن ε > 0. لكل n كبير بما يكفي يتحقق `|aₙ − L| < ε/2` و `|aₙ − M| < ε/2`.'],
    '|L &minus; M| &le; |L &minus; a<sub>n</sub>| + |a<sub>n</sub> &minus; M| &lt; &epsilon;', ['This holds for every ε > 0, so `|L − M| = 0`.','وهذا صحيح لكل ε > 0، إذن `|L − M| = 0`.']]},
  convergentBounded:{ t:['a convergent sequence is bounded','المتتابعة المتقاربة محدودة'], g:'|a<sub>n</sub>| &le; B', s:[
    ['Take ε = 1: for n ≥ N, `|aₙ − L| < 1`, so `|aₙ| < |L| + 1`.','نأخذ ε = 1: لكل n ≥ N يكون `|aₙ − L| < 1` إذن `|aₙ| < |L| + 1`.'], ['Only finitely many terms come before N. Let','قبل N يوجد عدد منته من الحدود. نضع'], 'B = max(|a<sub>1</sub>|, &hellip;, |a<sub>N&minus;1</sub>|, |L| + 1)']},
  telescopePf:{ t:['Σ 1/(n(n + 1)) = 1','Σ 1/(n(n + 1)) = 1'], g:`&Sigma;<sub>n=1</sub><sup>&infin;</sup> ${fr(1,'n(n + 1)')} = 1`, s:[
    ['Partial fractions:','كسور جزئية:'], `${fr(1,'n(n + 1)')} = ${fr(1,'n')} &minus; ${fr(1,'n + 1')}`,
    ['The partial sum telescopes:','المجموع الجزئي يتلاشى:'], `S<sub>N</sub> = 1 &minus; ${fr(1,'N + 1')} &rarr; 1`]},
  /* ---------- topology ---------- */
  genusChi:{ t:['χ = 2 − 2g for a surface of genus g','χ = 2 − 2g للسطح من الجنس g'], g:'&chi; = 2 &minus; 2g', s:[
    ['The sphere has `χ = V − E + F = 2` (e.g. a tetrahedron: 4 − 6 + 4).','للكرة `χ = V − E + F = 2` (مثلاً رباعي الأوجه: 4 − 6 + 4).'],
    ['Adding a handle: remove two discs (χ decreases by 2) and glue in a tube (χ of a cylinder is 0).','إضافة مقبض: نزيل قرصين (تنقص χ بمقدار 2) ونلصق أنبوباً (χ للأسطوانة = 0).'], ['Each of the g handles lowers χ by 2:','كل مقبض من g يُنقص χ بمقدار 2:'], '&chi; = 2 &minus; 2g']},
  closedUnion:{ t:['a finite union of closed sets is closed','الاتحاد المنتهي لمجموعات مغلقة مغلق'], g:'F<sub>1</sub> &cup; &hellip; &cup; F<sub>n</sub> closed', s:[
    ['Closed means the complement is open. De Morgan:','المغلقة تعني أن متممتها مفتوحة. دي مورغان:'], '(F<sub>1</sub> &cup; &hellip; &cup; F<sub>n</sub>)&prime; = F<sub>1</sub>&prime; &cap; &hellip; &cap; F<sub>n</sub>&prime;',
    ['A finite intersection of open sets is open (topology axiom), so the union is closed.','تقاطع عدد منته من المجموعات المفتوحة مفتوح (مسلّمة التبولوجيا)، إذن الاتحاد مغلق.']]},
  discreteCount:{ t:['the discrete topology on n points has 2ⁿ open sets','التبولوجيا المتقطعة على n نقطة فيها 2ⁿ مجموعة مفتوحة'], g:'2<sup>n</sup>', s:[
    ['In the discrete topology every subset is open; it satisfies the axioms because unions and intersections of subsets are subsets.','في التبولوجيا المتقطعة كل مجموعة جزئية مفتوحة، وتحقق المسلّمات لأن الاتحادات والتقاطعات مجموعات جزئية.'],
    ['So the open sets are exactly the subsets: `|𝒫(X)| = 2ⁿ`.','إذن المجموعات المفتوحة هي بالضبط المجموعات الجزئية: `|𝒫(X)| = 2ⁿ`.']]},
  /* ---------- special functions & functional analysis ---------- */
  gammaRec:{ t:['Γ(x + 1) = xΓ(x)','Γ(x + 1) = xΓ(x)'], g:'&Gamma;(x + 1) = x&Gamma;(x)', s:[
    ['Definition and integration by parts with `u = tˣ`, `dv = e^{−t}dt`:','التعريف والتكامل بالتجزيء مع `u = tˣ` و `dv = e^{−t}dt`:'], '&Gamma;(x + 1) = &int;<sub>0</sub><sup>&infin;</sup> t<sup>x</sup>e<sup>&minus;t</sup> dt = [&minus;t<sup>x</sup>e<sup>&minus;t</sup>]<sub>0</sub><sup>&infin;</sup> + x&int;<sub>0</sub><sup>&infin;</sup> t<sup>x&minus;1</sup>e<sup>&minus;t</sup> dt',
    ['The boundary term is 0 (x > 0):','الحد الحدّي يساوي 0 (x > 0):'], '&Gamma;(x + 1) = x&Gamma;(x)']},
  gammaFact:{ t:['Γ(n) = (n − 1)!','Γ(n) = (n − 1)!'], g:'&Gamma;(n) = (n &minus; 1)!', s:[
    'Γ(1) = &int;<sub>0</sub><sup>&infin;</sup> e<sup>&minus;t</sup> dt = 1 = 0!', ['Induction with `Γ(n + 1) = nΓ(n)`: if `Γ(n) = (n − 1)!` then','بالاستقراء مع `Γ(n + 1) = nΓ(n)`: إذا `Γ(n) = (n − 1)!` فإن'], '&Gamma;(n + 1) = n(n &minus; 1)! = n!']},
  gammaHalfPf:{ t:['Γ(½) = √π','Γ(½) = √π'], g:`&Gamma;(${fr(1,2)}) = ${rt('&pi;')}`, s:[
    ['Substitute `t = u²` (`dt = 2u du`):','نعوّض `t = u²` (`dt = 2u du`):'], `&Gamma;(${fr(1,2)}) = &int;<sub>0</sub><sup>&infin;</sup> t<sup>&minus;1/2</sup>e<sup>&minus;t</sup> dt = 2&int;<sub>0</sub><sup>&infin;</sup> e<sup>&minus;u<sup>2</sup></sup> du`,
    ['The Gaussian integral (squared and computed in polar coordinates) gives `∫₀^∞ e^{−u²} du = √π / 2`:','تكامل جاوس (بتربيعه وحسابه بالإحداثيات القطبية) يعطي `∫₀^∞ e^{−u²} du = √π / 2`:'], `&Gamma;(${fr(1,2)}) = ${rt('&pi;')}`]},
  betaSym:{ t:['B(m, n) = B(n, m)','B(m, n) = B(n, m)'], g:'B(m, n) = B(n, m)', s:[
    'B(m, n) = &int;<sub>0</sub><sup>1</sup> t<sup>m&minus;1</sup>(1 &minus; t)<sup>n&minus;1</sup> dt', ['Substitute `s = 1 − t` (`dt = −ds`, limits swap):','نعوّض `s = 1 − t` (`dt = −ds` وتتبادل الحدود):'], '= &int;<sub>0</sub><sup>1</sup> (1 &minus; s)<sup>m&minus;1</sup>s<sup>n&minus;1</sup> ds = B(n, m)']},
  chebyRec:{ t:['the Chebyshev recurrence','العلاقة التكرارية لكثيرات حدود تشيبيشيف'], g:'T<sub>n+1</sub>(x) = 2xT<sub>n</sub>(x) &minus; T<sub>n&minus;1</sub>(x)', s:[
    ['`Tₙ(cos θ) = cos nθ`. Add the identities `cos(n ± 1)θ = cos nθ cos θ ∓ sin nθ sin θ`:','`Tₙ(cos θ) = cos nθ`. نجمع المتطابقتين `cos(n ± 1)θ = cos nθ cos θ ∓ sin nθ sin θ`:'],
    'cos(n + 1)&theta; + cos(n &minus; 1)&theta; = 2 cos &theta; cos n&theta;', ['Put `x = cos θ`.','نضع `x = cos θ`.']]},
  cauchySchwarz:{ t:['the Cauchy–Schwarz inequality','متباينة كوشي–شوارتز'], g:'|&lang;u, v&rang;| &le; &Vert;u&Vert; &Vert;v&Vert;', s:[
    ['For every real t, `0 ≤ ‖u − tv‖² = ‖u‖² − 2t⟨u, v⟩ + t²‖v‖²`.','لكل t حقيقي `0 ≤ ‖u − tv‖² = ‖u‖² − 2t⟨u, v⟩ + t²‖v‖²`.'],
    ['A quadratic in t that is never negative has discriminant ≤ 0:','كثيرة حدود تربيعية في t لا تكون سالبة مميزها ≤ 0:'], '4&lang;u, v&rang;<sup>2</sup> &minus; 4&Vert;u&Vert;<sup>2</sup>&Vert;v&Vert;<sup>2</sup> &le; 0']},
  triangleIneq:{ t:['the triangle inequality ‖u + v‖ ≤ ‖u‖ + ‖v‖','متباينة المثلث ‖u + v‖ ≤ ‖u‖ + ‖v‖'], g:'&Vert;u + v&Vert; &le; &Vert;u&Vert; + &Vert;v&Vert;', s:[
    '&Vert;u + v&Vert;<sup>2</sup> = &Vert;u&Vert;<sup>2</sup> + 2&lang;u, v&rang; + &Vert;v&Vert;<sup>2</sup>', ['Cauchy–Schwarz: `⟨u, v⟩ ≤ ‖u‖‖v‖`:','كوشي–شوارتز: `⟨u, v⟩ ≤ ‖u‖‖v‖`:'], '&le; &Vert;u&Vert;<sup>2</sup> + 2&Vert;u&Vert;&Vert;v&Vert; + &Vert;v&Vert;<sup>2</sup> = (&Vert;u&Vert; + &Vert;v&Vert;)<sup>2</sup>']},
  normEquiv:{ t:['‖v‖∞ ≤ ‖v‖₂ ≤ √n ‖v‖∞','‖v‖∞ ≤ ‖v‖₂ ≤ √n ‖v‖∞'], g:`&Vert;v&Vert;<sub>&infin;</sub> &le; &Vert;v&Vert;<sub>2</sub> &le; ${rt('n')}&Vert;v&Vert;<sub>&infin;</sub>`, s:[
    ['Let `M = max|vᵢ| = ‖v‖∞`. The sum of squares contains `M²`, so `‖v‖₂² ≥ M²`.','نضع `M = max|vᵢ| = ‖v‖∞`. مجموع المربعات يحتوي `M²` إذن `‖v‖₂² ≥ M²`.'], ['Each of the n squares is at most `M²`, so `‖v‖₂² ≤ nM²`.','وكل مربع من المربعات n لا يزيد على `M²` إذن `‖v‖₂² ≤ nM²`.']]},
  diagNorm:{ t:['the operator norm of a diagonal matrix','نظيم المؤثر للمصفوفة القطرية'], g:'&Vert;D&Vert;<sub>2</sub> = max|d<sub>i</sub>|', s:[
    ['`‖Dx‖² = Σdᵢ²xᵢ² ≤ (max dᵢ²)Σxᵢ² = (max|dᵢ|)²‖x‖²`, so `‖D‖₂ ≤ max|dᵢ|`.','`‖Dx‖² = Σdᵢ²xᵢ² ≤ (max dᵢ²)Σxᵢ² = (max|dᵢ|)²‖x‖²` إذن `‖D‖₂ ≤ max|dᵢ|`.'],
    ['Equality for `x = eₖ` where `|dₖ|` is largest: `‖Deₖ‖ = |dₖ|`.','وتتحقق المساواة عند `x = eₖ` حيث `|dₖ|` الأكبر: `‖Deₖ‖ = |dₖ|`.']]},
  separableKernel:{ t:['a separable kernel reduces a Fredholm equation to algebra','النواة القابلة للفصل تحوّل معادلة فريدهولم إلى معادلة جبرية'], g:'u(x) = f(x) + &lambda;A g(x)', s:[
    ['In `u(x) = f(x) + λ∫K(x, t)u(t)dt` with `K = g(x)h(t)`, the integral is a constant times g(x):','في `u(x) = f(x) + λ∫K(x, t)u(t)dt` مع `K = g(x)h(t)` يكون التكامل ثابتاً مضروباً في g(x):'], 'u(x) = f(x) + &lambda;A g(x), &nbsp; A = &int;h(t)u(t) dt',
    ['Substitute this form back into the definition of A:','نعوّض هذه الصورة في تعريف A:'], `A = &int;hf dt + &lambda;A&int;hg dt &rArr; A = ${fr('&int;hf dt','1 &minus; &lambda;&int;hg dt')}`]},
  ivpToVolterra:{ t:['converting an initial value problem to a Volterra equation','تحويل مسألة القيمة الابتدائية إلى معادلة فولتيرا'], g:'y(x) = a + bx + &int;<sub>0</sub><sup>x</sup>(x &minus; t)f(t) dt', s:[
    ['For `y″ = f(x)`, `y(0) = a`, `y′(0) = b`, integrate once: `y′(x) = b + ∫₀ˣ f(t) dt`.','للمعادلة `y″ = f(x)` مع `y(0) = a` و `y′(0) = b` نكامل مرة: `y′(x) = b + ∫₀ˣ f(t) dt`.'],
    ['Integrate again and swap the order of the double integral (Cauchy’s formula):','نكامل مرة أخرى ونبدّل ترتيب التكامل المزدوج (صيغة كوشي):'], '&int;<sub>0</sub><sup>x</sup>&int;<sub>0</sub><sup>s</sup> f(t) dt ds = &int;<sub>0</sub><sup>x</sup>(x &minus; t)f(t) dt']},
  /* ---------- graph theory ---------- */
  handshake:{ t:['the handshake lemma','مبرهنة المصافحة'], g:'&Sigma; deg(v) = 2|E|', s:[
    ['Count the pairs (vertex, edge at that vertex) in two ways.','نعدّ الأزواج (رأس، ضلع عند ذلك الرأس) بطريقتين.'], ['By vertices: `Σ deg(v)`. By edges: every edge has 2 ends, so `2|E|`.','حسب الرؤوس: `Σ deg(v)`. وحسب الأضلاع: لكل ضلع طرفان، فيكون `2|E|`.']]},
  oddVertices:{ t:['the number of odd-degree vertices is even','عدد الرؤوس ذات الدرجة الفردية زوجي'], g:'#{v : deg v odd} even', s:[
    ['`Σ deg(v) = 2|E|` is even. The even degrees add up to an even number,','`Σ deg(v) = 2|E|` عدد زوجي. ومجموع الدرجات الزوجية زوجي،'], ['so the odd degrees must also add up to an even number — which needs an even count of them.','إذن مجموع الدرجات الفردية زوجي أيضاً — ولا يكون ذلك إلا إذا كان عددها زوجياً.']]},
  completeEdgesPf:{ t:['Kₙ has n(n − 1)/2 edges','للبيان Kₙ عدد n(n − 1)/2 من الأضلاع'], g:`|E(K<sub>n</sub>)| = ${fr('n(n &minus; 1)',2)}`, s:[
    ['Each of the n vertices has degree `n − 1`. Handshake:','لكل رأس من الرؤوس n الدرجة `n − 1`. مبرهنة المصافحة:'], `2|E| = n(n &minus; 1) &rArr; |E| = ${fr('n(n &minus; 1)',2)}`]},
  treeEdgesPf:{ t:['a tree with n vertices has n − 1 edges','الشجرة ذات n رأساً لها n − 1 ضلعاً'], g:'|E| = n &minus; 1', s:[
    ['A tree with n ≥ 2 vertices has a leaf (the end of a longest path).','للشجرة ذات n ≥ 2 رأساً ورقة (نهاية أطول مسار).'], ['Removing the leaf and its edge leaves a tree with `n − 1` vertices.','بإزالة الورقة وضلعها تبقى شجرة فيها `n − 1` رأساً.'],
    ['Induction from the single vertex (0 edges): each step removes one vertex and one edge, so `|E| = n − 1`.','بالاستقراء من رأس واحد (0 أضلاع): كل خطوة تزيل رأساً وضلعاً، إذن `|E| = n − 1`.']]},
  bipartiteChi:{ t:['a bipartite graph with an edge has chromatic number 2','البيان الثنائي الذي فيه ضلع عدده اللوني 2'], g:'&chi; = 2', s:[
    ['Colour one part with colour 1 and the other with colour 2: every edge joins the two parts, so its ends differ.','نلوّن جزءاً باللون 1 والآخر باللون 2: كل ضلع يصل بين الجزأين فيختلف لونا طرفيه.'], ['An edge needs two colours, so χ = 2.','والضلع يحتاج لونين، إذن χ = 2.']]},
  /* ---------- complex numbers ---------- */
  modProduct:{ t:['|zw| = |z||w|','|zw| = |z||w|'], g:'|zw| = |z||w|', s:[
    ['Use `|z|² = z z̄` and `conj(zw) = z̄ w̄`:','نستخدم `|z|² = z z̄` و `conj(zw) = z̄ w̄`:'], '|zw|<sup>2</sup> = zw z&#772;w&#772; = (zz&#772;)(ww&#772;) = |z|<sup>2</sup>|w|<sup>2</sup>', ['Take positive square roots.','نأخذ الجذر الموجب.']]},
  zzbar:{ t:['z z̄ = |z|²','z z̄ = |z|²'], g:'z z&#772; = |z|<sup>2</sup>', s:['(a + bi)(a &minus; bi) = a<sup>2</sup> &minus; abi + abi &minus; b<sup>2</sup>i<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> = |z|<sup>2</sup>']},
  complexDivPf:{ t:['the division formula for complex numbers','قانون قسمة الأعداد المركبة'], g:`${fr('a + bi','c + di')} = ${fr('(ac + bd) + (bc &minus; ad)i','c'+s2+' + d'+s2)}`, s:[
    ['Multiply top and bottom by the conjugate `c − di`; the denominator becomes `c² + d²` (real):','نضرب البسط والمقام في المرافق `c − di` فيصبح المقام `c² + d²` (حقيقياً):'], '(a + bi)(c &minus; di) = ac &minus; adi + bci &minus; bdi<sup>2</sup> = (ac + bd) + (bc &minus; ad)i']},
  deMoivre:{ t:["De Moivre's theorem","مبرهنة دي موافر"], g:'(cos &theta; + i sin &theta;)<sup>n</sup> = cos n&theta; + i sin n&theta;', s:[
    ['True for n = 1. Assume it for n and multiply by `cos θ + i sin θ`:','صحيحة عند n = 1. نفرضها صحيحة عند n ونضرب في `cos θ + i sin θ`:'],
    '(cos n&theta; cos &theta; &minus; sin n&theta; sin &theta;) + i(sin n&theta; cos &theta; + cos n&theta; sin &theta;)', ['Addition formulas:','قوانين الجمع:'], '= cos(n + 1)&theta; + i sin(n + 1)&theta;']},
  iCycle:{ t:['powers of i repeat every 4','قوى i تتكرر كل 4'], g:'i<sup>n</sup> = i<sup>n mod 4</sup>', s:[
    'i<sup>2</sup> = &minus;1, &nbsp; i<sup>3</sup> = i<sup>2</sup>i = &minus;i, &nbsp; i<sup>4</sup> = (i<sup>2</sup>)<sup>2</sup> = 1', ['Write `n = 4q + r`:','نكتب `n = 4q + r`:'], 'i<sup>n</sup> = (i<sup>4</sup>)<sup>q</sup>i<sup>r</sup> = i<sup>r</sup>']},
  /* ---------- foundations (MATH 319) ---------- */
  fracAddPf:{ t:['the rule for adding fractions','قاعدة جمع الكسور'], g:`${fr('a','b')} + ${fr('c','d')} = ${fr('ad + bc','bd')}`, s:[
    ['Rewrite both over the common denominator bd (multiplying by 1 = d/d and b/b):','نكتب الكسرين على المقام المشترك bd (بالضرب في 1 = d/d و b/b):'], `${fr('a','b')}&middot;${fr('d','d')} + ${fr('c','d')}&middot;${fr('b','b')} = ${fr('ad','bd')} + ${fr('bc','bd')} = ${fr('ad + bc','bd')}`]},
  arithSumPf:{ t:['the sum of an arithmetic sequence (Gauss)','قانون مجموع المتتابعة الحسابية (جاوس)'], g:`S<sub>n</sub> = ${fr('n(a<sub>1</sub> + a<sub>n</sub>)',2)}`, s:[
    ['Write the sum forwards and backwards and add term by term; each pair adds to `a₁ + aₙ`:','نكتب المجموع من الأمام والخلف ونجمع حداً حداً؛ كل زوج مجموعه `a₁ + aₙ`:'], '2S<sub>n</sub> = n(a<sub>1</sub> + a<sub>n</sub>)', `S<sub>n</sub> = ${fr('n(a<sub>1</sub> + a<sub>n</sub>)',2)}`]},
  geomSumFinite:{ t:['the sum of a geometric sequence','قانون مجموع المتتابعة الهندسية'], g:`S<sub>n</sub> = ${fr('a(r'+sn+' &minus; 1)','r &minus; 1')}`, s:[
    ['`rSₙ − Sₙ`: all middle terms cancel:','`rSₙ − Sₙ`: تُحذف كل الحدود الوسطى:'], '(r &minus; 1)S<sub>n</sub> = ar<sup>n</sup> &minus; a', ['Divide by `r − 1` (r ≠ 1).','نقسم على `r − 1` (r ≠ 1).']]},
  gcdLcm:{ t:['GCF × LCM = a × b','ع.م.أ × م.م.أ = a × b'], g:'gcd(a, b) &middot; lcm(a, b) = ab', s:[
    ['For each prime p, let a and b contain p to the powers α and β.','لكل عدد أولي p ليكن أسّه في a و b هو α و β.'], ['The gcd takes `min(α, β)` and the lcm takes `max(α, β)`; and `min + max = α + β`.','القاسم المشترك يأخذ `min(α, β)` والمضاعف يأخذ `max(α, β)`، و `min + max = α + β`.'], ['So the product has exactly the prime powers of ab.','إذن حاصل الضرب له قوى الأعداد الأولية نفسها في ab.']]},
};

/* topic label of a proof: "Proof: …" / "إثبات …" */
export const proofLabel = P => [`Proof: ${P.t[0]}`, P.t[1].startsWith('إثبات') ? P.t[1] : `إثبات ${P.t[1]}`];
export const proofKey = id => 'proof_' + id;

/* which proofs each course offers (shared proofs appear in several courses) */
export const COURSE_PROOFS = {
  'MATH 130':['quadFormula','rootsSumProduct','logProduct','cramer2','derivXsq'],
  'STAT 101':['sumDeviations','varianceShortcut','combFromPerm','complementRule','zStandard'],
  'MATH 140':['triangleAreaPf','pythagIdentity','distancePf','polygonSum','derivXsq'],
  'MATH 212':['powerIntegral','byParts','substitution','riemannX','avgValueThm'],
  'MATH 234':['powerSetPf','deMorgan','inclExcl','contrapositive','sqrt2Irr'],
  'STAT 212':['additionRule','bayes','binomMean','varShortcutRV','binomSum'],
  'MATH 232':['productRule','quotientRule','derivLn','derivSin','fermatCritical'],
  'MATH 244':['inverse2x2','cramer2','matrixSolve'],
  'STAT 302':['ciMeanPf','ciPropPf','sampleSizeMeanPf','sampleSizePropPf','testFromCI','testPropFromCI','anovaSST'],
  'MATH 321':['simpleAmount','compoundAmount','presentValuePf','effectiveRatePf'],
  'MATH 333':['expSolution','doublingTime','charEquationPf','integratingFactor'],
  'MATH 353':['newtonPf','newtonSqrtPf','trapezoidPf','bisectionError','linInterpPf','eulerPf'],
  'STAT 312':['linearExp','covShortcut','varSum','indepCov','rhoBound','varShortcutRV'],
  'MATH 315':['dAlembert','heatSeparationPf','pdeTypePf'],
  'STAT 361':['lpCorner','hungarianRow','balancedTransport','emvPf'],
  'MATH 371':['annuityFVPf','compoundAmount','presentValuePf','effectiveRatePf','continuousComp'],
  'MATH 335':['dotCos','crossPerp','divCurl','curlGrad'],
  'MATH 344':['uniqueIdentity','uniqueInverse','lagrangePf','orderDivides','primeCyclic'],
  'MATH 383':['geomSeriesPf','limitOneOverN','limitUnique','convergentBounded','telescopePf'],
  'MATH 473':['genusChi','closedUnion','discreteCount'],
  'MATH 475':['curvCircle','curvGraph','helixPf'],
  'MATH 319':['fracAddPf','arithSumPf','geomSumFinite','gcdLcm','simpleAmount'],
  'MATH 331':['geomSeriesPf','limitOneOverN','limitUnique','convergentBounded','telescopePf'],
  'MATH 342':['eulerPf','heunPf','eulerStability'],
  'MATH 367':['infinitePrimes','euclidGcd','phiPrimePower','tauFormula','congruenceUnique'],
  'MATH 416':['separableKernel','ivpToVolterra','byParts'],
  'MATH 417':['gammaRec','gammaFact','gammaHalfPf','betaSym','chebyRec'],
  'MATH 432':['cauchySchwarz','triangleIneq','normEquiv','diagNorm'],
  'MATH 442':['forwardDiff','centralDiff','secondDiff','explicitHeat','pdeTypePf'],
  'MATH 444':['unitGcd','fieldPrime','fieldNoZeroDiv','uniqueInverse'],
  'MATH 468':['handshake','oddVertices','completeEdgesPf','treeEdgesPf','bipartiteChi'],
  'MATH 485':['modProduct','zzbar','complexDivPf','deMoivre','iCycle'],
  'QM 102':['breakEvenPt','quadFormula','inverseComposition','inverse2x2','matrixSolve','evenOddRules'],
};
