/* MATH/COMP 503 — the course's road map (10 units × 10 lessons) and its lessons. The authoring markup is described in mscore.js. */
import { course, lesson, Q } from './mscore.js';

/* ---------------- 503: Jacobi polynomials ---------------- */
course('503','MATH 503','Jacobi Polynomials','كثيرات حدود جاكوبي (503 ريض)',`
# Unit 1 · Tools and the weight | الوحدة 1 · الأدوات والوزن
The Gamma function | دالة جاما
The Pochhammer symbol and generalized binomial coefficients | رمز بوخهامر والمعاملات ذات الحدين المعممة
The Beta function and the integral of the Jacobi weight | دالة بيتا وتكامل وزن جاكوبي
Weight functions, orthogonality and Gram–Schmidt | دوال الوزن والتعامد وطريقة جرام–شميت
The Jacobi weight and Rodrigues' formula | وزن جاكوبي وصيغة رودريغز
The first Jacobi polynomials P_0, P_1, P_2 | كثيرات حدود جاكوبي الأولى P_0 و P_1 و P_2
The explicit formula | الصيغة الصريحة
The hypergeometric function ₂F₁ | الدالة فوق الهندسية ₂F₁
Jacobi polynomials as ₂F₁ | كثيرات حدود جاكوبي بدلالة ₂F₁
The leading coefficient | المعامل الرئيس
# Unit 2 · The basic laws | الوحدة 2 · القوانين الأساسية
The three-term recurrence: A_n, B_n, C_n | علاقة التكرار الثلاثية: A_n و B_n و C_n
Computing P_n^{(α,β)}(x) stably by the recurrence | حساب P_n^{(α,β)}(x) باستقرار بعلاقة التكرار
The Jacobi differential equation | معادلة جاكوبي التفاضلية
The Sturm–Liouville form | صيغة شتورم–ليوفيل
Orthogonality: the proof from Rodrigues' formula | التعامد: البرهان من صيغة رودريغز
The norm h_n | المعيار h_n
End value P_n^{(α,β)}(1) = C(n + α, n) | القيمة الطرفية P_n^{(α,β)}(1) = C(n + α, n)
Symmetry P_n^{(α,β)}(−x) = (−1)^n P_n^{(β,α)}(x) | التماثل P_n^{(α,β)}(−x) = (−1)^n P_n^{(β,α)}(x)
The derivative law: both parameters are raised | قانون المشتقة: يرتفع الوسيطان معاً
Higher derivatives | المشتقات العليا
# Unit 3 · Special cases | الوحدة 3 · الحالات الخاصة
Legendre polynomials: α = β = 0 | كثيرات حدود ليجندر: α = β = 0
Chebyshev polynomials of the first kind: α = β = −1/2 | تشيبيشيف من النوع الأول: α = β = −1/2
Chebyshev polynomials of the second kind: α = β = 1/2 | تشيبيشيف من النوع الثاني: α = β = 1/2
Chebyshev polynomials of the third and fourth kinds | تشيبيشيف من النوعين الثالث والرابع
Gegenbauer (ultraspherical) polynomials: α = β | كثيرات حدود جيجنباور: α = β
Normalizations and conversion factors | التطبيعات وعوامل التحويل
Comparing the families: zeros and end growth | مقارنة العائلات: الجذور والنمو الطرفي
Laguerre and Hermite polynomials as limits | لاجير وهيرميت بوصفها نهايات
The generating function | الدالة المولدة
A table of the classical families | جدول العائلات الكلاسيكية
# Unit 4 · Further identities | الوحدة 4 · متطابقات إضافية
Contiguous relations in α and β | العلاقات المتجاورة في α و β
The Christoffel–Darboux formula | صيغة كريستوفل–داربو
Connection coefficients between two Jacobi families | معاملات الربط بين عائلتين من جاكوبي
Linearization of products | خطية حواصل الضرب
Integrals of Jacobi polynomials | تكاملات كثيرات حدود جاكوبي
Expressing x^m in Jacobi polynomials | كتابة x^m بدلالة كثيرات حدود جاكوبي
Bounds on [−1, 1] | الحدود على [−1, 1]
Growth of the end value: n^α/Γ(α + 1) | نمو القيمة الطرفية: n^α/Γ(α + 1)
Asymptotics for large n | السلوك التقاربي عند n كبير
Worked identities: a problem session | متطابقات محلولة: حصة مسائل
# Unit 5 · Zeros and quadrature | الوحدة 5 · الجذور والتربيع
Zeros: real, simple and inside (−1, 1) | الجذور: حقيقية وبسيطة وداخل (−1, 1)
Interlacing and dependence on α, β | التشابك والاعتماد على α و β
Computing zeros by Newton's method | حساب الجذور بطريقة نيوتن
The Jacobi matrix and Golub–Welsch | مصفوفة جاكوبي وطريقة Golub–Welsch
The Gauss–Jacobi rule: degree of exactness 2n − 1 | قاعدة جاوس–جاكوبي: درجة الدقة 2n − 1
The Gauss–Jacobi weights | أوزان جاوس–جاكوبي
The sum of the weights | مجموع الأوزان
Gauss–Jacobi–Radau rules | قواعد جاوس–جاكوبي–رادو
Gauss–Jacobi–Lobatto rules | قواعد جاوس–جاكوبي–لوباتو
Integrating functions with end singularities | تكامل الدوال ذات الانفراد الطرفي
# Unit 6 · Series | الوحدة 6 · المتسلسلات
The Jacobi series and its coefficients c_n | متسلسلة جاكوبي ومعاملاتها c_n
Best approximation in the weighted norm | أفضل تقريب في المعيار الموزون
Parseval's identity | متطابقة بارسيفال
Decay of coefficients for analytic functions | تناقص المعاملات للدوال التحليلية
Series and end singularities | المتسلسلة وانفراد الطرف
Discrete coefficients from Gauss–Jacobi points | المعاملات المتقطعة من نقاط جاوس–جاكوبي
Interpolation at Jacobi points | الاستكمال عند نقاط جاكوبي
Differentiation matrices at Jacobi points | مصفوفات التفاضل عند نقاط جاكوبي
Choosing α and β for a problem | اختيار α و β لمسألة
Evaluating a Jacobi series: Clenshaw's algorithm | حساب متسلسلة جاكوبي: خوارزمية كلينشو
# Unit 7 · Shifted and fractional forms | الوحدة 7 · الصيغ المزاحة والكسرية
Shifted Jacobi polynomials on [0, 1] | كثيرات حدود جاكوبي المزاحة على [0, 1]
Shifted Jacobi polynomials on [0, γ] | كثيرات حدود جاكوبي المزاحة على [0, γ]
The analytic form of the shifted polynomials | الصيغة التحليلية للكثيرات المزاحة
Orthogonality and norm on the new interval | التعامد والمعيار على المجال الجديد
The fractional functions J_n^λ(t) = P_n^{(α,β)}(2t^λ − 1) | الدوال الكسرية J_n^λ(t) = P_n^{(α,β)}(2t^λ − 1)
Orthogonality of J_n^λ and its weight | تعامد J_n^λ ووزنها
Mapped nodes and the weighted rule | العقد المحولة والقاعدة الموزونة
Expansions in fractional Jacobi functions | المفكوكات بدوال جاكوبي الكسرية
Choosing λ: matching the singularity | اختيار λ: مطابقة الانفراد
The Legendre case λ, α = β = 0 of the paper | حالة ليجندر في البحث: α = β = 0
# Unit 8 · Operational matrices | الوحدة 8 · المصفوفات التشغيلية
The derivative matrix of shifted Jacobi polynomials | مصفوفة المشتقة لكثيرات جاكوبي المزاحة
The second-derivative matrix (Theorem 3.1 generalized) | مصفوفة المشتقة الثانية (تعميم النظرية 3.1)
The integration matrix | مصفوفة التكامل
D^{−μ} of a shifted Jacobi polynomial | D^{−μ} لكثيرة جاكوبي مزاحة
The fractional integration matrix (Theorem 3.2 generalized) | مصفوفة التكامل الكسري (تعميم النظرية 3.2)
The Caputo derivative of a shifted Jacobi polynomial | مشتقة كابوتو لكثيرة جاكوبي مزاحة
The fractional derivative matrix | مصفوفة المشتقة الكسرية
The product matrix | مصفوفة الضرب
A basis vanishing at both ends: φ_k = P_k + r_k P_{k+1} + q_k P_{k+2} | أساس ينعدم عند الطرفين: φ_k = P_k + r_k P_{k+1} + q_k P_{k+2}
Building the matrices in code (the names al1, bt1) | بناء المصفوفات بالكود (الاسمان al1 و bt1)
# Unit 9 · Spectral methods with Jacobi polynomials | الوحدة 9 · الطرق الطيفية بكثيرات حدود جاكوبي
Jacobi–Galerkin methods | طرق جاكوبي–جاليركن
Jacobi–Tau methods | طرق جاكوبي–تاو
Jacobi collocation methods | طرق التجميع بجاكوبي
Boundary-value problems | مسائل القيم الحدية
Fractional differential equations in integrated form | المعادلات التفاضلية الكسرية بالصيغة التكاملية
Multi-term fractional equations | المعادلات الكسرية متعددة الحدود
Time-fractional partial differential equations | المعادلات التفاضلية الجزئية الكسرية الزمنية
Problems in two space dimensions | المسائل في بعدين مكانيين
Integral and integro-differential equations | المعادلات التكاملية والتكاملية التفاضلية
Comparing parameters: which (α, β) is best? | مقارنة الوسائط: أي (α, β) أفضل؟
# Unit 10 · Advanced topics and research | الوحدة 10 · موضوعات متقدمة وبحث
Generalized Jacobi functions with negative parameters | دوال جاكوبي المعممة بوسائط سالبة
Jacobi poly-fractonomials | كثيرات جاكوبي الكسرية (poly-fractonomials)
Fractional Sturm–Liouville problems | مسائل شتورم–ليوفيل الكسرية
Jacobi polynomials on unbounded domains by mapping | جاكوبي على مجالات غير محدودة بالتحويل
Error estimates in weighted Sobolev spaces | تقديرات الخطأ في فضاءات سوبوليف الموزونة
Stability and conditioning | الاستقرار والحالة العددية
Fast transforms between families | التحويلات السريعة بين العائلات
Implementing Jacobi methods in Mathematica, MATLAB and Python | تنفيذ طرق جاكوبي في Mathematica و MATLAB و Python
Reading and reproducing a research paper | قراءة بحث علمي وإعادة إنتاجه
Capstone project | مشروع ختامي
`);

lesson('503',1,[
  ['The Gamma function extends the factorial to non-integer numbers. Every law of the Jacobi polynomials (norm, end value, weights) is written with it:',
   'دالة جاما تمد المضروب إلى الأعداد غير الصحيحة. وكل قوانين كثيرات حدود جاكوبي (المعيار والقيمة الطرفية والأوزان) مكتوبة بها:'],
  'Γ(z) = ∫_0^∞ t^{z−1} e^{−t} dt,   z > 0',
  ['Three facts are enough for almost every calculation:','وثلاث حقائق تكفي لمعظم الحسابات:'],
  'Γ(z + 1) = z Γ(z),   Γ(n + 1) = n!,   Γ(#f{1}{2}) = #r{π}',
  ['The first one moves any argument up or down by 1, so `Γ` at a half-integer is always a rational multiple of `#r{π}`.','الأولى تنقل أي متغير بمقدار 1 صعوداً أو نزولاً، فقيمة `Γ` عند نصف عدد صحيح مضاعف نسبي لـ `#r{π}` دائماً.'],
],[
  Q('Compute `Γ(4)` and `Γ(6)/Γ(4)`.','احسب `Γ(4)` و `Γ(6)/Γ(4)`.','Γ(4) = 6,   #f{Γ(6)}{Γ(4)} = 20',['Γ(4) = 3! = 6', '#f{Γ(6)}{Γ(4)} = #f{5!}{3!} = 5·4 = 20'],['Γ(4) = 24,   #f{Γ(6)}{Γ(4)} = 30','Γ(4) = 6,   #f{Γ(6)}{Γ(4)} = 30','Γ(4) = 24,   #f{Γ(6)}{Γ(4)} = 20']),
  Q('Compute `Γ(7/2)`.','احسب `Γ(7/2)`.','#f{15#r{π}}{8} ≈ 3.3234',
    ['Γ(#f{7}{2}) = #f{5}{2}·#f{3}{2}·#f{1}{2}·Γ(#f{1}{2})', '= #f{15}{8}#r{π} ≈ 3.3234'],['#f{15#r{π}}{4} ≈ 6.6467','#f{3#r{π}}{4} ≈ 1.3293','#f{105#r{π}}{16} ≈ 11.6317']),
  Q('Simplify `Γ(n + α + 1)/Γ(α + 1)` for n = 2.','بسّط `Γ(n + α + 1)/Γ(α + 1)` عند n = 2.','(α + 1)(α + 2)',
    ['Γ(α + 3) = (α + 2) Γ(α + 2) = (α + 2)(α + 1) Γ(α + 1)', '#f{Γ(α + 3)}{Γ(α + 1)} = (α + 1)(α + 2)', ['Ratios like this appear in the end value `P_n^{(α,β)}(1)` and in the norm `h_n`.','ونسب كهذه تظهر في القيمة الطرفية `P_n^{(α,β)}(1)` وفي المعيار `h_n`.']],
    ['α(α + 1)','(α + 2)(α + 3)','α^2 + 2']),
  Q('Evaluate `∫_0^∞ #r{t} e^{−t} dt`.','احسب `∫_0^∞ #r{t} e^{−t} dt`.','#f{#r{π}}{2} ≈ 0.8862',
    ['∫_0^∞ t^{3/2 − 1} e^{−t} dt = Γ(#f{3}{2})', 'Γ(#f{3}{2}) = #f{1}{2}Γ(#f{1}{2}) = #f{#r{π}}{2}'],['#r{π} ≈ 1.7725','#f{#r{π}}{4} ≈ 0.4431','#f{3#r{π}}{4} ≈ 1.3293']),
]);

lesson('503',2,[
  ['The Pochhammer symbol (rising factorial) is a product of n consecutive factors:','رمز بوخهامر (المضروب الصاعد) حاصل ضرب n عاملاً متتالياً:'],
  '(a)_n = a(a + 1)(a + 2) ⋯ (a + n − 1) = #f{Γ(a + n)}{Γ(a)},   (a)_0 = 1',
  ['It gives the binomial coefficient a meaning for any real upper number, which is how the end value of a Jacobi polynomial is written:','وهو يعطي المعامل ذا الحدين معنى لأي عدد حقيقي علوي، وبه تُكتب القيمة الطرفية لكثيرة جاكوبي:'],
  'C(n + α, n) = #f{(α + 1)_n}{n!} = #f{Γ(n + α + 1)}{n! Γ(α + 1)}',
  ['A key fact: `(−m)_n = 0` when `n > m`, because one factor is zero. This is what cuts a hypergeometric series into a polynomial.','حقيقة مهمة: `(−m)_n = 0` إذا كان `n > m` لأن أحد العوامل صفر. وهذا ما يقطع المتسلسلة فوق الهندسية فتصبح كثيرة حدود.'],
],[
  Q('Compute `(3)_4` and `(1)_5`.','احسب `(3)_4` و `(1)_5`.','(3)_4 = 360,   (1)_5 = 120',['(3)_4 = 3·4·5·6 = 360', '(1)_5 = 1·2·3·4·5 = 5! = 120'],['(3)_4 = 81,   (1)_5 = 5','(3)_4 = 120,   (1)_5 = 120','(3)_4 = 360,   (1)_5 = 24']),
  Q('Compute `(1/2)_3`.','احسب `(1/2)_3`.','#f{15}{8}',['(#f{1}{2})_3 = #f{1}{2}·#f{3}{2}·#f{5}{2} = #f{15}{8}'],['#f{1}{8}','#f{5}{8}','#f{15}{4}']),
  Q('Compute `(−2)_2` and `(−2)_3`.','احسب `(−2)_2` و `(−2)_3`.','(−2)_2 = 2,   (−2)_3 = 0',
    ['(−2)_2 = (−2)(−1) = 2', '(−2)_3 = (−2)(−1)(0) = 0', ['Every later symbol `(−2)_n`, n ≥ 3, is zero too.','وكل الرموز التالية `(−2)_n` عند n ≥ 3 تساوي صفراً أيضاً.']],
    ['(−2)_2 = −2,   (−2)_3 = 0','(−2)_2 = 2,   (−2)_3 = −6','(−2)_2 = 6,   (−2)_3 = −24']),
  Q('Find the end value `C(n + α, n)` for n = 2 and α = 1/2.','أوجد القيمة الطرفية `C(n + α, n)` عند n = 2 و α = 1/2.','#f{15}{8}',
    ['C(2 + #f{1}{2}, 2) = #f{(#f{3}{2})_2}{2!} = #f{#f{3}{2}·#f{5}{2}}{2}', '= #f{15}{8}', ['So `P_2^{(1/2,β)}(1) = 15/8` for every β.','إذن `P_2^{(1/2,β)}(1) = 15/8` لكل β.']],
    ['#f{15}{4}','#f{3}{8}','3']),
]);

lesson('503',3,[
  ['The Beta function is an integral of two powers, and it is expressed by Gamma functions:','دالة بيتا تكامل لقوتين، وتُكتب بدلالة دوال جاما:'],
  'B(p, q) = ∫_0^1 t^{p−1} (1 − t)^{q−1} dt = #f{Γ(p) Γ(q)}{Γ(p + q)},   p, q > 0',
  ['With the change of variable `x = 2t − 1` it gives the total mass of the Jacobi weight, which is also the sum of all Gauss–Jacobi weights:',
   'وبتغيير المتغير `x = 2t − 1` تعطي الكتلة الكلية لوزن جاكوبي، وهي أيضاً مجموع أوزان جاوس–جاكوبي كلها:'],
  '∫_{−1}^{1} (1 − x)^α (1 + x)^β dx = 2^{α+β+1} #f{Γ(α + 1) Γ(β + 1)}{Γ(α + β + 2)}',
  ['The integral exists only if `α > −1` and `β > −1`; this is the condition on the Jacobi parameters.','والتكامل موجود فقط إذا كان `α > −1` و `β > −1`، وهذا هو الشرط على وسيطي جاكوبي.'],
],[
  Q('Compute `B(3, 2)`.','احسب `B(3, 2)`.','#f{1}{12}',['B(3, 2) = #f{Γ(3)Γ(2)}{Γ(5)} = #f{2·1}{24} = #f{1}{12}'],['#f{1}{6}','#f{1}{24}','#f{1}{10}']),
  Q('Compute `B(1/2, 1/2)`.','احسب `B(1/2, 1/2)`.','π',['B(#f{1}{2}, #f{1}{2}) = #f{Γ(#f{1}{2})^2}{Γ(1)} = (#r{π})^2 = π'],['#r{π}','#f{π}{2}','2π']),
  Q('Use the law to evaluate `∫_{−1}^{1} (1 − x)^2 (1 + x) dx`, then check directly.','استخدم القانون لحساب `∫_{−1}^{1} (1 − x)^2 (1 + x) dx` ثم تحقق مباشرة.','#f{4}{3}',
    ['α = 2, β = 1:   2^4·#f{Γ(3)Γ(2)}{Γ(5)} = 16·#f{2}{24} = #f{4}{3}', ['Directly: `(1 − x)^2(1 + x) = 1 − x − x^2 + x^3`, and the odd powers integrate to zero:','مباشرة: `(1 − x)^2(1 + x) = 1 − x − x^2 + x^3` والقوى الفردية تكاملها صفر:'], '2 − #f{2}{3} = #f{4}{3}'],
    ['#f{8}{3}','#f{2}{3}','#f{16}{3}']),
  Q('Find the total mass of the Chebyshev weight `(1 − x^2)^{−1/2}` from the law.','أوجد الكتلة الكلية لوزن تشيبيشيف `(1 − x^2)^{−1/2}` من القانون.','π',
    ['α = β = −#f{1}{2}:   2^0·#f{Γ(#f{1}{2})Γ(#f{1}{2})}{Γ(1)} = π', ['This is why the Gauss–Chebyshev weights are all `π/n`.','ولهذا أوزان جاوس–تشيبيشيف كلها `π/n`.']],
    ['#f{π}{2}','2','2π']),
]);

lesson('503',4,[
  ['A weight function `w(x) > 0` on (a, b) defines an inner product and a meaning for «orthogonal»:','دالة الوزن `w(x) > 0` على (a, b) تعرّف ضرباً داخلياً ومعنى للتعامد:'],
  '⟨f, g⟩_w = ∫_a^b f(x) g(x) w(x) dx,   f ⊥ g  ⇔  ⟨f, g⟩_w = 0',
  ['For each weight there is exactly one sequence of polynomials `p_0, p_1, p_2, …` (one of each degree, up to a constant factor) that are mutually orthogonal. The Gram–Schmidt process builds it from `1, x, x^2, …`:',
   'ولكل وزن متتالية وحيدة من كثيرات الحدود `p_0, p_1, p_2, …` (واحدة لكل درجة، حتى عامل ثابت) متعامدة فيما بينها. وطريقة جرام–شميت تبنيها من `1, x, x^2, …`:'],
  'p_n = x^n − Σ_{k<n} #f{⟨x^n, p_k⟩_w}{⟨p_k, p_k⟩_w} p_k',
  ['Changing the weight changes the family: `w = 1` gives Legendre, `w = (1 − x^2)^{−1/2}` gives Chebyshev, and `w = (1 − x)^α(1 + x)^β` gives Jacobi.',
   'وتغيير الوزن يغيّر العائلة: `w = 1` يعطي ليجندر، و `w = (1 − x^2)^{−1/2}` يعطي تشيبيشيف، و `w = (1 − x)^α(1 + x)^β` يعطي جاكوبي.'],
],[
  Q('Apply Gram–Schmidt to `1, x, x^2` on [−1, 1] with `w = 1`.','طبّق جرام–شميت على `1, x, x^2` على [−1, 1] بالوزن `w = 1`.','p_0 = 1,   p_1 = x,   p_2 = x^2 − #f{1}{3}',
    ['p_0 = 1,   ⟨x, 1⟩ = 0  ⇒  p_1 = x', '⟨x^2, 1⟩ = #f{2}{3},   ⟨1, 1⟩ = 2,   ⟨x^2, x⟩ = 0', 'p_2 = x^2 − #f{2/3}{2} = x^2 − #f{1}{3}', ['`p_2` is `P_2` divided by its leading coefficient 3/2.','`p_2` هي `P_2` مقسومة على معاملها الرئيس 3/2.']],
    ['p_0 = 1,   p_1 = x,   p_2 = x^2 − #f{2}{3}','p_0 = 1,   p_1 = x,   p_2 = x^2 − 1','p_0 = 1,   p_1 = x − 1,   p_2 = x^2 − #f{1}{3}']),
  Q('Find the polynomial of degree 1 orthogonal to 1 on [−1, 1] with weight `w = 1 − x`.','أوجد كثيرة الحدود من الدرجة 1 العمودية على 1 على [−1, 1] بالوزن `w = 1 − x`.','p_1 = x + #f{1}{3}',
    ['⟨1, 1⟩_w = ∫_{−1}^{1}(1 − x) dx = 2', '⟨x, 1⟩_w = ∫_{−1}^{1} x(1 − x) dx = −#f{2}{3}', 'p_1 = x − #f{−2/3}{2} = x + #f{1}{3}',
     ['This is the Jacobi polynomial `P_1^{(1,0)} = (3x + 1)/2` up to a constant.','وهذه كثيرة جاكوبي `P_1^{(1,0)} = (3x + 1)/2` حتى ثابت.']],
    ['p_1 = x − #f{1}{3}','p_1 = x','p_1 = x + #f{2}{3}']),
  Q('With the Chebyshev weight `w = (1 − x^2)^{−1/2}`, find `p_2` given `⟨1, 1⟩_w = π` and `⟨x^2, 1⟩_w = π/2`.','بوزن تشيبيشيف `w = (1 − x^2)^{−1/2}` أوجد `p_2` علماً أن `⟨1, 1⟩_w = π` و `⟨x^2, 1⟩_w = π/2`.','p_2 = x^2 − #f{1}{2}',
    [['`⟨x^2, x⟩_w = 0`, because the integrand is odd.','`⟨x^2, x⟩_w = 0` لأن الدالة المكامَلة فردية.'], 'p_2 = x^2 − #f{π/2}{π} = x^2 − #f{1}{2}', ['Indeed `T_2 = 2x^2 − 1 = 2p_2`.','وفعلاً `T_2 = 2x^2 − 1 = 2p_2`.']],
    ['p_2 = x^2 − #f{1}{3}','p_2 = x^2 − 1','p_2 = 2x^2 − #f{1}{2}']),
  Q('Are `x` and `x^2 − 1/3` orthogonal on [−1, 1] with `w = 1`? Why?','هل `x` و `x^2 − 1/3` متعامدتان على [−1, 1] بالوزن `w = 1`؟ ولماذا؟',['Yes: the product is odd','نعم: حاصل الضرب دالة فردية'],
    ['x(x^2 − #f{1}{3}) = x^3 − #f{x}{3}', ['An odd function integrates to zero over a symmetric interval.','الدالة الفردية تكاملها صفر على مجال متماثل.']],[['No','لا']]),
]);

lesson('503',5,[
  ['The Jacobi polynomials `P_n^{(α,β)}(x)` are the orthogonal polynomials of the weight','كثيرات حدود جاكوبي `P_n^{(α,β)}(x)` هي كثيرات الحدود المتعامدة للوزن'],
  'w(x) = (1 − x)^α (1 + x)^β,   α, β > −1',
  ['`α` controls the behaviour at `x = 1` and `β` at `x = −1`. They are defined by Rodrigues’ formula:','`α` يتحكم في السلوك عند `x = 1` و `β` عند `x = −1`. وتُعرّف بصيغة رودريغز:'],
  'P_n^{(α,β)}(x) = #f{(−1)^n}{2^n n!} #f{1}{w(x)} #f{d^n}{dx^n}[w(x)(1 − x^2)^n]',
  ['For n = 1 the formula gives the general first polynomial and, at x = 1, the end value:','وعند n = 1 تعطي الصيغة كثيرة الحدود الأولى العامة، وعند x = 1 القيمة الطرفية:'],
  'P_1^{(α,β)}(x) = #f{(α + β + 2)x + α − β}{2},   P_n^{(α,β)}(1) = C(n + α, n)',
  ['Special cases: `α = β = 0` Legendre, `α = β = −1/2` Chebyshev (first kind), `α = β = 1/2` Chebyshev (second kind), `α = β` Gegenbauer.',
   'حالات خاصة: `α = β = 0` ليجندر، `α = β = −1/2` تشيبيشيف (النوع الأول)، `α = β = 1/2` تشيبيشيف (النوع الثاني)، `α = β` جيجنباور.'],
],[
  Q('Derive `P_1^{(α,β)}(x)` from Rodrigues’ formula.','اشتق `P_1^{(α,β)}(x)` من صيغة رودريغز.','P_1^{(α,β)} = #f{(α + β + 2)x + α − β}{2}',
    ['w(1 − x^2) = (1 − x)^{α+1}(1 + x)^{β+1}', '#f{d}{dx}[⋯] = w·[−(α + 1)(1 + x) + (β + 1)(1 − x)]', 'P_1 = −#f{1}{2}[−(α + 1)(1 + x) + (β + 1)(1 − x)]', '= #f{(α + β + 2)x + α − β}{2}']),
  Q('Write `P_1^{(1,0)}(x)` and `P_1^{(2,1)}(x)`, and find the zero of each.','اكتب `P_1^{(1,0)}(x)` و `P_1^{(2,1)}(x)` وأوجد جذر كل منهما.','P_1^{(1,0)} = #f{3x + 1}{2},  x = −#f{1}{3};   P_1^{(2,1)} = #f{5x + 1}{2},  x = −#f{1}{5}',
    ['(α, β) = (1, 0):   #f{3x + 1}{2}  ⇒  x = −#f{1}{3}', '(α, β) = (2, 1):   #f{5x + 1}{2}  ⇒  x = −#f{1}{5}', ['The zero is `(β − α)/(α + β + 2)`: a larger α pushes it away from x = 1.','الجذر هو `(β − α)/(α + β + 2)`: كلما كبر α ابتعد عن x = 1.']]),
  Q('Find `P_1^{(α,β)}(1)` and `P_1^{(α,β)}(−1)`.','أوجد `P_1^{(α,β)}(1)` و `P_1^{(α,β)}(−1)`.','P_1(1) = α + 1,   P_1(−1) = −(β + 1)',
    ['P_1(1) = #f{α + β + 2 + α − β}{2} = α + 1 = C(1 + α, 1)', 'P_1(−1) = #f{−α − β − 2 + α − β}{2} = −(β + 1)', ['This agrees with the symmetry law `P_n^{(α,β)}(−x) = (−1)^n P_n^{(β,α)}(x)`.','وهذا يطابق قانون التماثل `P_n^{(α,β)}(−x) = (−1)^n P_n^{(β,α)}(x)`.']],
    ['P_1(1) = α,   P_1(−1) = −β','P_1(1) = α + 1,   P_1(−1) = β + 1','P_1(1) = 1,   P_1(−1) = −1']),
  Q('Which classical family corresponds to the weight `w(x) = #r{1 − x^2}`, and what is its total mass?','أي عائلة كلاسيكية تقابل الوزن `w(x) = #r{1 − x^2}` وما كتلته الكلية؟',['Chebyshev of the second kind, `α = β = 1/2`; mass `π/2`','تشيبيشيف من النوع الثاني، `α = β = 1/2`، والكتلة `π/2`'],
    ['#r{1 − x^2} = (1 − x)^{1/2}(1 + x)^{1/2}', '2^2·#f{Γ(#f{3}{2})^2}{Γ(3)} = 4·#f{π/4}{2} = #f{π}{2}'],
    [['Chebyshev of the first kind, `α = β = −1/2`; mass `π`','تشيبيشيف من النوع الأول، `α = β = −1/2`، والكتلة `π`'],['Legendre, `α = β = 0`; mass 2','ليجندر، `α = β = 0`، والكتلة 2'],['Chebyshev of the second kind, `α = β = 1/2`; mass `π`','تشيبيشيف من النوع الثاني، `α = β = 1/2`، والكتلة `π`']]),
]);

/* ---- 503 · Unit 1 (lessons 6–10) and Unit 2 (lessons 11–20): first polynomials and the basic laws ---- */
lesson('503',6,[
  ['The first Jacobi polynomials, written in powers of `(x − 1)`:','كثيرات حدود جاكوبي الأولى مكتوبة بقوى `(x − 1)`:'],
  'P_0^{(α,β)} = 1,     P_1^{(α,β)} = (α + 1) + (α + β + 2)#f{x − 1}{2}',
  'P_2^{(α,β)} = #f{(α + 1)(α + 2)}{2} + (α + 2)(α + β + 3)#f{x − 1}{2} + (α + β + 3)(α + β + 4)#f{(x − 1)^2}{8}',
  ['At x = 1 only the first term survives, which gives the end value `C(n + α, n)` directly. With α = β = 0 these are `1, x, (3x^2 − 1)/2`.','وعند x = 1 لا يبقى إلا الحد الأول، فنحصل مباشرة على القيمة الطرفية `C(n + α, n)`. ومع α = β = 0 تكون `1, x, (3x^2 − 1)/2`.'],
],[
  Q('Find `P_1^{(0,1)}(x)`.','أوجد `P_1^{(0,1)}(x)`.','P_1^{(0,1)} = #f{3x − 1}{2}',['1 + 3·#f{x − 1}{2} = #f{3x − 1}{2}'],['P_1^{(0,1)} = #f{3x + 1}{2}','P_1^{(0,1)} = x','P_1^{(0,1)} = 3x − 1']),
  Q('Find `P_2^{(1,1)}(x)`.','أوجد `P_2^{(1,1)}(x)`.','P_2^{(1,1)} = #f{15x^2 − 3}{4}',['3 + 15·#f{x − 1}{2} + 30·#f{(x − 1)^2}{8}', '= 3 + 7.5x − 7.5 + 3.75x^2 − 7.5x + 3.75 = 3.75x^2 − 0.75'],['P_2^{(1,1)} = #f{3x^2 − 1}{2}','P_2^{(1,1)} = #f{15x^2 + 3}{4}','P_2^{(1,1)} = 15x^2 − 3']),
  Q('Find `P_2^{(1,0)}(x)`.','أوجد `P_2^{(1,0)}(x)`.','P_2^{(1,0)} = #f{5x^2}{2} + x − #f{1}{2}',['3 + 3·4·#f{x − 1}{2} + 4·5·#f{(x − 1)^2}{8} = 3 + 6(x − 1) + 2.5(x − 1)^2'],['P_2^{(1,0)} = #f{5x^2}{2} − x − #f{1}{2}','P_2^{(1,0)} = #f{3x^2 − 1}{2}','P_2^{(1,0)} = #f{5x^2}{2} + x + #f{1}{2}']),
  Q('Use the formula to check `P_2^{(0,0)} = (3x^2 − 1)/2`.','استخدم الصيغة للتحقق من `P_2^{(0,0)} = (3x^2 − 1)/2`.',['Verified','تحقق'],['1 + 2·3·#f{x − 1}{2} + 3·4·#f{(x − 1)^2}{8} = 1 + 3(x − 1) + 1.5(x − 1)^2','= 1.5x^2 − 0.5']),
]);

lesson('503',7,[
  ['Collecting the powers of `(x − 1)/2` and `(x + 1)/2` gives a symmetric explicit formula:','بجمع قوى `(x − 1)/2` و `(x + 1)/2` نحصل على صيغة صريحة متماثلة:'],
  'P_n^{(α,β)}(x) = Σ_{s=0}^{n} C(n + α, n − s) C(n + β, s) (#f{x − 1}{2})^s (#f{x + 1}{2})^{n−s}',
  ['At x = 1 only s = 0 survives, at x = −1 only s = n: the two end values `C(n + α, n)` and `(−1)^n C(n + β, n)` can be read off at once. For integer parameters every coefficient is an ordinary binomial coefficient.','وعند x = 1 لا يبقى إلا s = 0، وعند x = −1 لا يبقى إلا s = n: فتُقرأ القيمتان الطرفيتان `C(n + α, n)` و `(−1)^n C(n + β, n)` مباشرة. وللوسائط الصحيحة كل معامل معامل ذو حدين عادي.'],
],[
  Q('Use the explicit formula to find `P_1^{(α,β)}`.','استخدم الصيغة الصريحة لإيجاد `P_1^{(α,β)}`.','#f{(α + β + 2)x + α − β}{2}',['s = 0:  (1 + α)#f{x + 1}{2},     s = 1:  (1 + β)#f{x − 1}{2}'],['#f{(α + β)x + α − β}{2}','(α + 1)x','#f{(α + β + 2)x − α + β}{2}']),
  Q('Find `P_2^{(1,0)}(1)`.','أوجد `P_2^{(1,0)}(1)`.','3',['C(n + α, n) = C(3, 2) = 3'],['1','2','6']),
  Q('Find `P_2^{(1,1)}(0)`.','أوجد `P_2^{(1,1)}(0)`.','−#f{3}{4}',['s = 0:  C(3, 2)C(3, 0)(#f{1}{2})^2 = #f{3}{4}','s = 1:  C(3, 1)C(3, 1)(−#f{1}{2})(#f{1}{2}) = −#f{9}{4},   s = 2:  C(3, 0)C(3, 2)·#f{1}{4} = #f{3}{4}', '#f{3}{4} − #f{9}{4} + #f{3}{4} = −#f{3}{4}'],['#f{3}{4}','0','−#f{3}{2}']),
  Q('Find `P_3^{(0,2)}(−1)`.','أوجد `P_3^{(0,2)}(−1)`.','−10',['(−1)^3 C(3 + 2, 3) = −10'],['10','−1','−5']),
]);

lesson('503',8,[
  ['The Gauss hypergeometric function is the series','الدالة فوق الهندسية لجاوس هي المتسلسلة'],
  '₂F₁(a, b; c; z) = Σ_{k=0}^{∞} #f{(a)_k (b)_k}{(c)_k k!} z^k,   |z| < 1',
  ['Many functions are special cases: `₂F₁(a, b; b; z) = (1 − z)^{−a}` and `z·₂F₁(1, 1; 2; z) = −ln(1 − z)`. If a = −m is a negative integer, `(−m)_k = 0` for k > m and the series stops: it is a polynomial of degree m.','وكثير من الدوال حالات خاصة: `₂F₁(a, b; b; z) = (1 − z)^{−a}` و `z·₂F₁(1, 1; 2; z) = −ln(1 − z)`. وإذا كان a = −m عدداً صحيحاً سالباً فإن `(−m)_k = 0` عند k > m فتتوقف المتسلسلة: إنها كثيرة حدود من الدرجة m.'],
],[
  Q('Write `₂F₁(−1, b; c; z)`.','اكتب `₂F₁(−1, b; c; z)`.','1 − #f{bz}{c}',['k = 0:  1,     k = 1:  #f{(−1)b}{c}z,     k ≥ 2:  0'],['1 + #f{bz}{c}','1 − bz','(1 − z)^b']),
  Q('Simplify `₂F₁(2, b; b; z)`.','بسّط `₂F₁(2, b; b; z)`.','(1 − z)^{−2}',['#f{(2)_k}{k!} z^k = (k + 1)z^k   ⇒   Σ (k + 1)z^k = #f{1}{(1 − z)^2}'],['(1 − z)^2','e^{2z}','#f{1}{1 − z}']),
  Q('What is the degree of `₂F₁(−3, 5; 2; z)` as a polynomial in z?','ما درجة `₂F₁(−3, 5; 2; z)` بوصفها كثيرة حدود في z؟','3',['(−3)_k = 0  for  k ≥ 4'],['5','2','∞']),
  Q('Compute the coefficient of `z^2` in `₂F₁(−2, 3; 1; z)`.','احسب معامل `z^2` في `₂F₁(−2, 3; 1; z)`.','6',['#f{(−2)(−1)·3·4}{1·2·2!} = #f{24}{4}'],['−6','12','3']),
]);

lesson('503',9,[
  ['Jacobi polynomials are terminating hypergeometric series in `z = (1 − x)/2`:','كثيرات حدود جاكوبي متسلسلات فوق هندسية منتهية في `z = (1 − x)/2`:'],
  'P_n^{(α,β)}(x) = C(n + α, n) ₂F₁(−n, n + α + β + 1; α + 1; #f{1 − x}{2})',
  ['This one formula contains everything: at x = 1, z = 0 and the value is `C(n + α, n)`; the expansion in powers of `(1 − x)` is the series itself; and identities for ₂F₁ become identities for Jacobi polynomials. For Legendre, `P_n(x) = ₂F₁(−n, n + 1; 1; (1 − x)/2)`.','وهذه الصيغة الواحدة تحوي كل شيء: عند x = 1 يكون z = 0 والقيمة `C(n + α, n)`، والنشر بقوى `(1 − x)` هو المتسلسلة نفسها، ومتطابقات ₂F₁ تصبح متطابقات لكثيرات جاكوبي. ولليجندر `P_n(x) = ₂F₁(−n, n + 1; 1; (1 − x)/2)`.'],
],[
  Q('Use the ₂F₁ form to find `P_1^{(α,β)}`.','استخدم صيغة ₂F₁ لإيجاد `P_1^{(α,β)}`.','(α + 1) − (α + β + 2)#f{1 − x}{2}',['(α + 1)[1 − #f{(α + β + 2)}{α + 1}·#f{1 − x}{2}]'],['(α + 1) + (α + β + 2)#f{1 − x}{2}','(α + 1)x','1 − (α + β + 2)x']),
  Q('Use `P_2(x) = ₂F₁(−2, 3; 1; (1 − x)/2)` to compute `P_2(0)`.','استخدم `P_2(x) = ₂F₁(−2, 3; 1; (1 − x)/2)` لحساب `P_2(0)`.','−#f{1}{2}',['z = #f{1}{2}:   1 + #f{(−2)(3)}{1}·#f{1}{2} + 6·#f{1}{4} = 1 − 3 + 1.5'],['#f{1}{2}','1','−1']),
  Q('What is `z` at x = −1, and why is the series still finite there?','ما قيمة `z` عند x = −1، ولماذا تبقى المتسلسلة منتهية هناك؟',['z = 1; the series is a polynomial, so it converges everywhere','z = 1، والمتسلسلة كثيرة حدود فتتقارب في كل مكان'],['z = #f{1 − (−1)}{2} = 1'],[['z = 0; the series vanishes','z = 0، والمتسلسلة تنعدم'],['z = −1; it diverges','z = −1، وتتباعد']]),
  Q('Which parameter of ₂F₁ makes the series a polynomial of degree n?','أي وسيط في ₂F₁ يجعل المتسلسلة كثيرة حدود من الدرجة n؟','a = −n',['(−n)_k = 0,   k > n'],['b = n + α + β + 1','c = α + 1','z = 1']),
]);

lesson('503',10,[
  ['The coefficient of `x^n` in `P_n^{(α,β)}` is','معامل `x^n` في `P_n^{(α,β)}` هو'],
  'k_n = #f{Γ(2n + α + β + 1)}{2^n n! Γ(n + α + β + 1)} = #f{(n + α + β + 1)_n}{2^n n!}',
  ['It is needed for the normalization of the polynomials, for the weights of Gauss–Jacobi rules and for comparing different normalizations of Chebyshev and Gegenbauer polynomials (Unit 3).','وهو لازم لتطبيع الكثيرات ولأوزان قواعد جاوس–جاكوبي ولمقارنة التطبيعات المختلفة لكثيرات تشيبيشيف وجيجنباور (الوحدة 3).'],
],[
  Q('Find `k_1`.','أوجد `k_1`.','#f{α + β + 2}{2}',['#f{(α + β + 2)_1}{2·1!}'],['α + β + 2','#f{α + 1}{2}','1']),
  Q('Check `k_2` for Legendre.','تحقق من `k_2` لليجندر.','#f{3}{2}',['#f{(3)_2}{4·2!} = #f{3·4}{8}'],['3','#f{3}{4}','#f{5}{2}']),
  Q('Find `k_2` for α = β = 1.','أوجد `k_2` عند α = β = 1.','#f{15}{4}',['#f{(5)_2}{8} = #f{30}{8}'],['#f{15}{2}','#f{3}{2}','#f{5}{4}']),
  Q('Find `k_2` for α = β = −1/2 and compare with `T_2 = 2x^2 − 1`.','أوجد `k_2` عند α = β = −1/2 وقارن بـ `T_2 = 2x^2 − 1`.','#f{3}{4};   P_2^{(−1/2,−1/2)} = #f{3}{8}T_2',['#f{(2)_2}{8} = #f{6}{8}', ['The leading coefficients differ by the factor `3/8 = (1/2)_2/2!`.','المعاملان الرئيسان يختلفان بالعامل `3/8 = (1/2)_2/2!`.']],['2;   P_2^{(−1/2,−1/2)} = T_2','#f{3}{2};   P_2^{(−1/2,−1/2)} = #f{3}{4}T_2','#f{3}{4};   P_2^{(−1/2,−1/2)} = #f{3}{4}T_2']),
]);

lesson('503',11,[
  ['Every family of orthogonal polynomials satisfies a three-term recurrence. For Jacobi polynomials, with `c = 2n + α + β`:','كل عائلة من الكثيرات المتعامدة تحقق علاقة تكرار ثلاثية. ولكثيرات جاكوبي مع `c = 2n + α + β`:'],
  '2n(n + α + β)(c − 2) P_n = (c − 1)[c(c − 2)x + α^2 − β^2] P_{n−1} − 2(n + α − 1)(n + β − 1)c P_{n−2}',
  ['Written as `P_n = (A_n x + B_n)P_{n−1} − C_n P_{n−2}`, it computes every polynomial from `P_0 = 1` and `P_1`. With α = β the term `α^2 − β^2` disappears and the polynomials keep their parity; with α = β = 0 it is Bonnet’s recurrence.','وبكتابتها `P_n = (A_n x + B_n)P_{n−1} − C_n P_{n−2}` تحسب كل كثيرة من `P_0 = 1` و `P_1`. ومع α = β يختفي الحد `α^2 − β^2` وتحتفظ الكثيرات بزوجيتها، ومع α = β = 0 تكون علاقة بونيه.'],
],[
  Q('Use the recurrence with n = 2, α = β = 1 to find `P_2^{(1,1)}` from `P_1^{(1,1)} = 2x`.','استخدم علاقة التكرار مع n = 2 و α = β = 1 لإيجاد `P_2^{(1,1)}` من `P_1^{(1,1)} = 2x`.','#f{15x^2 − 3}{4}',['c = 6:   2·2·4·4 P_2 = 5[24x]·2x − 2·2·2·6','64P_2 = 240x^2 − 48'],['#f{15x^2 − 1}{4}','#f{3x^2 − 1}{2}','#f{15x^2 − 3}{2}']),
  Q('Reduce the recurrence to Bonnet’s for α = β = 0.','اختصر علاقة التكرار إلى علاقة بونيه عند α = β = 0.','n P_n = (2n − 1)x P_{n−1} − (n − 1)P_{n−2}',['c = 2n:   2n·n·(2n − 2)P_n = (2n − 1)·2n(2n − 2)x P_{n−1} − 2(n − 1)^2·2n P_{n−2}', ['Divide by `2n(2n − 2)`.','نقسم على `2n(2n − 2)`.']],['n P_n = (2n + 1)x P_{n−1} − n P_{n−2}','P_n = 2x P_{n−1} − P_{n−2}','n P_n = x P_{n−1} − P_{n−2}']),
  Q('Use the recurrence to compute `P_2^{(1,0)}(0.5)` from `P_1^{(1,0)}(0.5) = 1.25`.','استخدم علاقة التكرار لحساب `P_2^{(1,0)}(0.5)` من `P_1^{(1,0)}(0.5) = 1.25`.','0.625',['c = 5:   2·2·3·3 P_2 = 4[15·0.5 + 1]·1.25 − 2·2·1·5', '36P_2 = 42.5 − 20  ⇒  P_2 = 0.625'],['1.25','0.5','0.875']),
  Q('When is `B_n = 0` in `P_n = (A_n x + B_n)P_{n−1} − C_n P_{n−2}`?','متى يكون `B_n = 0` في `P_n = (A_n x + B_n)P_{n−1} − C_n P_{n−2}`؟',['When α = β','عندما α = β'],['B_n ∝ α^2 − β^2'],[['When n is even','عندما n زوجي'],['Never','أبداً']]),
]);

lesson('503',12,[
  ['To evaluate `P_n^{(α,β)}(x)` for large n, run the recurrence with numbers, never expand into powers of x. The power coefficients are huge and alternate in sign (as for Legendre in Course 501), while the values stay moderate and the recurrence keeps full precision on `[−1, 1]`.',
   'لحساب `P_n^{(α,β)}(x)` عند n كبير شغّل علاقة التكرار بالأعداد، ولا تنشر أبداً بقوى x. فمعاملات القوى ضخمة ومتناوبة الإشارة (كما لليجندر في المقرر 501)، بينما القيم معتدلة وعلاقة التكرار تحافظ على الدقة كاملة على `[−1, 1]`.'],
  'P_0 = 1,   P_1 = #f{(α + β + 2)x + α − β}{2},   P_n = (A_n x + B_n)P_{n−1} − C_n P_{n−2}',
  ['Derivatives come from the derivative law of Lesson 19, and for many points at once the recurrence is vectorised over x.','والمشتقات تأتي من قانون المشتقة في الدرس 19، ولنقاط كثيرة معاً تُطبَّق علاقة التكرار على متجه x دفعة واحدة.'],
],[
  Q('Compute `P_1^{(1,0)}(0.5)`.','احسب `P_1^{(1,0)}(0.5)`.','1.25',['#f{3·0.5 + 1}{2}'],['0.75','1','1.5']),
  Q('Compute `P_1^{(2,2)}(0.3)`.','احسب `P_1^{(2,2)}(0.3)`.','0.9',['#f{6·0.3 + 0}{2}'],['1.8','0.3','0.6']),
  Q('Why is the recurrence preferred to the explicit formula for n = 50?','لماذا تُفضَّل علاقة التكرار على الصيغة الصريحة عند n = 50؟',['The explicit coefficients cancel catastrophically; the recurrence works with values of moderate size','المعاملات الصريحة تتلاشى تلاشياً كارثياً، وعلاقة التكرار تعمل بقيم معتدلة الحجم'],[['Its cost is also only `O(n)` per point.','وتكلفتها أيضاً `O(n)` فقط لكل نقطة.']],[['Because it is exact','لأنها مضبوطة'],['They are equally good','هما متساويتان']]),
  Q('How many recurrence steps give `P_{10}` from `P_0` and `P_1`?','كم خطوة تكرار تعطي `P_{10}` من `P_0` و `P_1`؟','9',['n = 2, 3, …, 10'],['10','11','8']),
]);

lesson('503',13,[
  ['`P_n^{(α,β)}` is the polynomial solution of the Jacobi differential equation:','`P_n^{(α,β)}` هي الحل كثير الحدود لمعادلة جاكوبي التفاضلية:'],
  '(1 − x^2) y″ + [β − α − (α + β + 2)x] y′ + n(n + α + β + 1) y = 0',
  ['The eigenvalue `λ_n = n(n + α + β + 1)` grows like `n^2`. With α = β = 0 it is Legendre’s equation, with α = β = −1/2 Chebyshev’s `(1 − x^2)y″ − xy′ + n^2 y = 0`.','والقيمة الذاتية `λ_n = n(n + α + β + 1)` تنمو مثل `n^2`. ومع α = β = 0 هي معادلة ليجندر، ومع α = β = −1/2 معادلة تشيبيشيف `(1 − x^2)y″ − xy′ + n^2 y = 0`.'],
],[
  Q('Verify that `y = 2x` solves the equation for α = β = 1, n = 1.','تحقق أن `y = 2x` تحل المعادلة عند α = β = 1 و n = 1.',['Verified: `−4x·2 + 4·2x = 0`','تحقق: `−4x·2 + 4·2x = 0`'],['β − α − (α + β + 2)x = −4x,   λ_1 = 1·4 = 4'],[['It fails','لا تحققها']]),
  Q('Find the eigenvalue for n = 2, α = β = 1.','أوجد القيمة الذاتية عند n = 2 و α = β = 1.','10',['2(2 + 1 + 1 + 1) = 10'],['6','8','12']),
  Q('Reduce the equation to Chebyshev’s for α = β = −1/2.','اختصر المعادلة إلى معادلة تشيبيشيف عند α = β = −1/2.','(1 − x^2)y″ − xy′ + n^2 y = 0',['β − α = 0,   α + β + 2 = 1,   n(n + 0) = n^2'],['(1 − x^2)y″ − 2xy′ + n(n + 1)y = 0','(1 − x^2)y″ + xy′ + n^2 y = 0','y″ + n^2 y = 0']),
  Q('Find the coefficient of `y′` for α = 1, β = 0.','أوجد معامل `y′` عند α = 1 و β = 0.','−1 − 3x',['β − α − (α + β + 2)x = −1 − 3x'],['1 − 3x','−3x','−1 + 3x']),
]);

lesson('503',14,[
  ['Multiplying the Jacobi equation by the weight `w = (1 − x)^α(1 + x)^β` puts it in Sturm–Liouville form:','بضرب معادلة جاكوبي في الوزن `w = (1 − x)^α(1 + x)^β` نضعها في صيغة شتورم–ليوفيل:'],
  '#f{d}{dx}[(1 − x)^{α+1}(1 + x)^{β+1} y′] + n(n + α + β + 1)(1 − x)^α(1 + x)^β y = 0',
  ['The coefficient `p(x) = (1 − x)^{α+1}(1 + x)^{β+1}` vanishes at both ends (because α, β > −1), so the boundary terms in Green’s formula drop out and eigenfunctions with different eigenvalues are orthogonal with the weight w. This is the second proof of orthogonality.','والمعامل `p(x) = (1 − x)^{α+1}(1 + x)^{β+1}` ينعدم عند الطرفين (لأن α, β > −1)، فتسقط الحدود الطرفية في صيغة جرين وتتعامد الدوال الذاتية ذات القيم الذاتية المختلفة بالوزن w. وهذا البرهان الثاني للتعامد.'],
],[
  Q('Write `p(x)` for α = β = 0.','اكتب `p(x)` عند α = β = 0.','1 − x^2',['(1 − x)(1 + x)'],['1','(1 − x^2)^2','x^2 − 1']),
  Q('Write the weight for α = 1, β = 0.','اكتب الوزن عند α = 1 و β = 0.','w = 1 − x',['(1 − x)^1(1 + x)^0'],['w = 1 + x','w = 1 − x^2','w = 1']),
  Q('Why does `p(±1) = 0` matter?','لماذا يهم أن `p(±1) = 0`؟',['It removes the boundary terms, so orthogonality needs no boundary conditions','لأنه يزيل الحدود الطرفية، فلا يحتاج التعامد شروطاً حدية'],['[p(y_m′y_n − y_m y_n′)]_{−1}^{1} = 0'],[['It makes the weight positive','يجعل الوزن موجباً'],['It does not matter','لا يهم']]),
  Q('For α = β = −1/2, what is `p(x)`?','عند α = β = −1/2 ما `p(x)`؟','#r{1 − x^2}',['(1 − x)^{1/2}(1 + x)^{1/2}'],['#f{1}{#r{1 − x^2}}','1 − x^2','1']),
]);

lesson('503',15,[
  ['Rodrigues’ formula for Jacobi polynomials carries the weight:','صيغة رودريغز لكثيرات جاكوبي تحمل الوزن:'],
  '(1 − x)^α(1 + x)^β P_n^{(α,β)}(x) = #f{(−1)^n}{2^n n!} #f{d^n}{dx^n}[(1 − x)^{n+α}(1 + x)^{n+β}]',
  ['To prove `∫ w P_n q dx = 0` for every polynomial q of degree < n, replace `w P_n` by the n-th derivative and integrate by parts n times. Each boundary term contains a factor `(1 − x)^{k+α+1}(1 + x)^{k+β+1}` that vanishes at ±1, and the final integrand contains `q^{(n)} = 0`.','ولإثبات `∫ w P_n q dx = 0` لكل كثيرة حدود q درجتها < n نستبدل بـ `w P_n` المشتقة ذات الرتبة n ونكامل بالتجزئة n مرة. كل حد طرفي يحتوي عاملاً `(1 − x)^{k+α+1}(1 + x)^{k+β+1}` ينعدم عند ±1، والدالة المكامَلة الأخيرة تحتوي `q^{(n)} = 0`.'],
],[
  Q('Use Rodrigues’ formula with n = 1 to find `P_1^{(1,0)}`.','استخدم صيغة رودريغز مع n = 1 لإيجاد `P_1^{(1,0)}`.','P_1^{(1,0)} = #f{3x + 1}{2}',['(1 − x)P_1 = −#f{1}{2}#f{d}{dx}[(1 − x)^2(1 + x)]', '#f{d}{dx}[(1 − x)^2(1 + x)] = (1 − x)(−2(1 + x) + (1 − x)) = (1 − x)(−1 − 3x)'],['P_1^{(1,0)} = #f{3x − 1}{2}','P_1^{(1,0)} = 2x','P_1^{(1,0)} = #f{1 + x}{2}']),
  Q('In the proof, why do the boundary terms vanish?','في البرهان لماذا تنعدم الحدود الطرفية؟',['Each contains `(1 − x)^{α+1+k}(1 + x)^{β+1+k}`, which is 0 at ±1 since α, β > −1','كل منها يحتوي `(1 − x)^{α+1+k}(1 + x)^{β+1+k}` وهو صفر عند ±1 لأن α, β > −1'],[['The factors come from fewer than n derivatives of `(1 − x)^{n+α}(1 + x)^{n+β}`.','العوامل تأتي من أقل من n مشتقة للدالة `(1 − x)^{n+α}(1 + x)^{n+β}`.']],[['Because q(±1) = 0','لأن q(±1) = 0']]),
  Q('Which property of q finishes the proof?','أي خاصية لـ q تُنهي البرهان؟','q^{(n)} = 0',['deg q < n'],['q(0) = 0','q > 0','q′ = 0']),
  Q('What does Rodrigues’ formula give for α = β = 0?','ماذا تعطي صيغة رودريغز عند α = β = 0؟','P_n = #f{(−1)^n}{2^n n!}#f{d^n}{dx^n}(1 − x^2)^n',['(1 − x)^n(1 + x)^n = (1 − x^2)^n',['The same as `(1/(2^n n!)) d^n(x^2 − 1)^n/dx^n`.','وهي نفسها `(1/(2^n n!)) d^n(x^2 − 1)^n/dx^n`.']],['P_n = #f{d^n}{dx^n}x^n','P_n = (1 − x^2)^n','P_n = #f{1}{n!}#f{d^n}{dx^n}(1 + x)^n']),
]);

lesson('503',16,[
  ['The squared norm of `P_n^{(α,β)}` with the Jacobi weight is','مربع معيار `P_n^{(α,β)}` بوزن جاكوبي هو'],
  'h_n = ∫_{−1}^{1} w [P_n^{(α,β)}]^2 dx = #f{2^{α+β+1}}{2n + α + β + 1}·#f{Γ(n + α + 1) Γ(n + β + 1)}{n! Γ(n + α + β + 1)}',
  ['It gives the expansion coefficients `c_n = ⟨f, P_n⟩_w/h_n`. For n = 0 it is the total mass of the weight, `2^{α+β+1}Γ(α + 1)Γ(β + 1)/Γ(α + β + 2)`; for α = β = 0 it is `2/(2n + 1)`.','وهو يعطي معاملات المفكوك `c_n = ⟨f, P_n⟩_w/h_n`. وعند n = 0 هو الكتلة الكلية للوزن `2^{α+β+1}Γ(α + 1)Γ(β + 1)/Γ(α + β + 2)`، وعند α = β = 0 هو `2/(2n + 1)`.'],
],[
  Q('Compute `h_1` for α = β = 1, and check it directly.','احسب `h_1` عند α = β = 1 وتحقق منه مباشرة.','#f{16}{15}',['#f{2^3}{5}·#f{Γ(3)Γ(3)}{1!·Γ(4)} = #f{8}{5}·#f{4}{6}','∫_{−1}^{1}(1 − x^2)(2x)^2 dx = 4(#f{2}{3} − #f{2}{5}) = #f{16}{15}'],['#f{8}{15}','#f{2}{3}','#f{4}{5}']),
  Q('Reduce `h_n` to the Legendre norm.','اختصر `h_n` إلى معيار ليجندر.','#f{2}{2n + 1}',['α = β = 0:   #f{2}{2n + 1}·#f{n! n!}{n! n!}'],['#f{1}{2n + 1}','2','#f{2}{n + 1}']),
  Q('Compute `h_0` for α = 1, β = 0.','احسب `h_0` عند α = 1 و β = 0.','2',['∫_{−1}^{1}(1 − x) dx = 2'],['1','4','#f{4}{3}']),
  Q('Compute `h_0` for α = β = −1/2.','احسب `h_0` عند α = β = −1/2.','π',['∫_{−1}^{1} #f{dx}{#r{1 − x^2}} = π'],['2','#f{π}{2}','1']),
]);

lesson('503',17,[
  ['The end values are generalized binomial coefficients:','القيم الطرفية معاملات ذات حدين معممة:'],
  'P_n^{(α,β)}(1) = C(n + α, n) = #f{(α + 1)_n}{n!},     P_n^{(α,β)}(−1) = (−1)^n C(n + β, n)',
  ['For α > 0 they grow with n like `n^{α}/Γ(α + 1)`; for α < 0 they decay. This growth is the price paid for a weight that vanishes at the end: the polynomial is pushed to be large where the weight is small.','وعند α > 0 تنمو مع n مثل `n^{α}/Γ(α + 1)`، وعند α < 0 تتناقص. وهذا النمو ثمن الوزن الذي ينعدم عند الطرف: تُدفع الكثيرة لتكون كبيرة حيث يكون الوزن صغيراً.'],
],[
  Q('Find `P_3^{(2,0)}(1)`.','أوجد `P_3^{(2,0)}(1)`.','10',['C(5, 3)'],['3','6','20']),
  Q('Find `P_2^{(1/2,0)}(1)`.','أوجد `P_2^{(1/2,0)}(1)`.','#f{15}{8}',['#f{(3/2)_2}{2!} = #f{(3/2)(5/2)}{2}'],['#f{3}{2}','#f{5}{2}','1']),
  Q('Find `P_4^{(0,1)}(−1)`.','أوجد `P_4^{(0,1)}(−1)`.','5',['(−1)^4 C(5, 4)'],['−5','1','4']),
  Q('Find `P_n^{(−1/2,−1/2)}(1)` for n = 2.','أوجد `P_n^{(−1/2,−1/2)}(1)` عند n = 2.','#f{3}{8}',['#f{(1/2)_2}{2!} = #f{(1/2)(3/2)}{2}',['It matches `P_2^{(−1/2,−1/2)} = (3/8)T_2` and `T_2(1) = 1`.','وتطابق `P_2^{(−1/2,−1/2)} = (3/8)T_2` و `T_2(1) = 1`.']],['1','#f{1}{2}','#f{3}{4}']),
]);

lesson('503',18,[
  ['Replacing x by −x swaps the roles of the two ends:','استبدال x بـ −x يبادل دوري الطرفين:'],
  'P_n^{(α,β)}(−x) = (−1)^n P_n^{(β,α)}(x)',
  ['So every statement about the end x = 1 and the parameter α has a mirror statement about x = −1 and β. When α = β the polynomials have the parity of n, like Legendre and Chebyshev.','فكل عبارة عن الطرف x = 1 والوسيط α لها عبارة مرآة عن x = −1 و β. وعندما α = β تكون للكثيرات زوجية n، مثل ليجندر وتشيبيشيف.'],
],[
  Q('Use the symmetry to find `P_2^{(1,0)}(−1)`.','استخدم التماثل لإيجاد `P_2^{(1,0)}(−1)`.','1',['P_2^{(1,0)}(−1) = (−1)^2 P_2^{(0,1)}(1) = C(2, 2)',['Check with `5x^2/2 + x − 1/2` at −1: `2.5 − 1 − 0.5 = 1`.','تحقق بـ `5x^2/2 + x − 1/2` عند −1: `2.5 − 1 − 0.5 = 1`.']],['3','−1','0']),
  Q('Write `P_1^{(0,1)}(x)` from `P_1^{(1,0)}(x) = (3x + 1)/2`.','اكتب `P_1^{(0,1)}(x)` من `P_1^{(1,0)}(x) = (3x + 1)/2`.','#f{3x − 1}{2}',['P_1^{(0,1)}(x) = −P_1^{(1,0)}(−x) = −#f{−3x + 1}{2}'],['#f{3x + 1}{2}','#f{1 − 3x}{2}','3x − 1']),
  Q('For α = β, is `P_5^{(α,α)}` even or odd?','عند α = β هل `P_5^{(α,α)}` زوجية أم فردية؟',['Odd','فردية'],['P_5(−x) = (−1)^5 P_5(x)'],[['Even','زوجية'],['Neither','لا هذا ولا ذاك']]),
  Q('Compute `P_3^{(1,1)}(0)`.','احسب `P_3^{(1,1)}(0)`.','0',[['`P_3^{(1,1)}` is odd, so it vanishes at 0.','`P_3^{(1,1)}` فردية فتنعدم عند 0.']],['1','4','−1']),
]);

lesson('503',19,[
  ['Differentiating a Jacobi polynomial raises both parameters by one:','اشتقاق كثيرة جاكوبي يرفع الوسيطين بواحد:'],
  '#f{d}{dx} P_n^{(α,β)}(x) = #f{n + α + β + 1}{2} P_{n−1}^{(α+1,β+1)}(x)',
  ['This is why the derivatives of Legendre polynomials are Gegenbauer (α = β = 1) polynomials, and why spectral methods with Jacobi polynomials differentiate without leaving the family.','ولهذا مشتقات كثيرات ليجندر كثيرات جيجنباور (α = β = 1)، ولهذا تشتق الطرق الطيفية بكثيرات جاكوبي دون الخروج من العائلة.'],
],[
  Q('Check the law for `P_1^{(α,β)}`.','تحقق من القانون لـ `P_1^{(α,β)}`.','#f{α + β + 2}{2}',['#f{d}{dx}#f{(α + β + 2)x + α − β}{2} = #f{α + β + 2}{2} P_0'],['α + β + 2','1','#f{α + 1}{2}']),
  Q('Use the law to find `P_2′` for Legendre.','استخدم القانون لإيجاد `P_2′` لليجندر.','3x',['#f{3}{2}P_1^{(1,1)} = #f{3}{2}·2x'],['#f{3}{2}x','6x','x']),
  Q('Find `#f{d}{dx}P_2^{(1,1)}`.','أوجد `#f{d}{dx}P_2^{(1,1)}`.','#f{15}{2}x',['#f{5}{2}P_1^{(2,2)} = #f{5}{2}·3x'],['#f{15}{4}x','5x','15x']),
  Q('Which family do the derivatives of `P_n^{(0,0)}` belong to?','إلى أي عائلة تنتمي مشتقات `P_n^{(0,0)}`؟','P_{n−1}^{(1,1)}',[['Gegenbauer polynomials with λ = 3/2.','كثيرات جيجنباور مع λ = 3/2.']],['P_{n−1}^{(0,0)}','P_{n−1}^{(−1,−1)}','P_n^{(1,0)}']),
]);

lesson('503',20,[
  ['Repeating the derivative law k times:','بتكرار قانون المشتقة k مرة:'],
  '#f{d^k}{dx^k} P_n^{(α,β)} = #f{Γ(n + α + β + 1 + k)}{2^k Γ(n + α + β + 1)} P_{n−k}^{(α+k,β+k)}',
  ['So high derivatives of Jacobi polynomials are again Jacobi polynomials with larger parameters. Combined with the end values this gives `P_n^{(k)}(1)` in closed form, used in boundary conditions of high-order problems.','فالمشتقات العليا لكثيرات جاكوبي كثيرات جاكوبي بوسائط أكبر. ومع القيم الطرفية يعطي هذا `P_n^{(k)}(1)` بصيغة مغلقة، وتُستخدم في الشروط الحدية للمسائل عالية الرتبة.'],
],[
  Q('Use the formula to find `P_2″` for Legendre.','استخدم الصيغة لإيجاد `P_2″` لليجندر.','3',['#f{Γ(5)}{4Γ(3)}P_0^{(2,2)} = #f{24}{8}'],['6','#f{3}{2}','1']),
  Q('Find `P_3″` for Legendre.','أوجد `P_3″` لليجندر.','15x',['#f{Γ(6)}{4Γ(4)}P_1^{(2,2)} = #f{120}{24}·3x'],['5x','30x','15']),
  Q('Find `P_n″(1)` for Legendre, n = 3.','أوجد `P_n″(1)` لليجندر عند n = 3.','15',['15x  at  x = 1'],['6','30','3']),
  Q('What are the parameters of `d^3/dx^3 P_n^{(0,0)}`?','ما وسيطا `d^3/dx^3 P_n^{(0,0)}`؟','(3, 3)',['α + k = 3,   β + k = 3'],['(0, 0)','(1, 1)','(3, 0)']),
]);

/* ---- 503 · Unit 3 (lessons 21–30): special cases;  Unit 4 (lessons 31–40): further identities ---- */
lesson('503',21,[
  ['With α = β = 0 the weight is 1 and the Jacobi polynomials are the Legendre polynomials of Course 501:','مع α = β = 0 يكون الوزن 1 وتكون كثيرات جاكوبي هي كثيرات ليجندر في المقرر 501:'],
  'P_n^{(0,0)} = P_n,   h_n = #f{2}{2n + 1},   P_n(1) = 1,   (n + 1)P_{n+1} = (2n + 1)x P_n − n P_{n−1}',
  ['Every general Jacobi law reduces to a known Legendre law, which is the best way to check a formula before using it.','وكل قانون عام لجاكوبي يؤول إلى قانون ليجندر معروف، وهذه أفضل طريقة لفحص صيغة قبل استخدامها.'],
],[
  Q('Reduce the end value `C(n + α, n)` to Legendre.','اختصر القيمة الطرفية `C(n + α, n)` إلى ليجندر.','1',['C(n, n) = 1'],['n','0','n + 1']),
  Q('Reduce the eigenvalue `n(n + α + β + 1)` to Legendre.','اختصر القيمة الذاتية `n(n + α + β + 1)` إلى ليجندر.','n(n + 1)',['α = β = 0'],['n^2','n(n − 1)','2n + 1']),
  Q('Reduce the leading coefficient `(n + α + β + 1)_n/(2^n n!)` for n = 3.','اختصر المعامل الرئيس `(n + α + β + 1)_n/(2^n n!)` عند n = 3.','#f{5}{2}',['#f{(4)_3}{8·6} = #f{4·5·6}{48}',['Indeed `P_3 = (5x^3 − 3x)/2`.','وفعلاً `P_3 = (5x^3 − 3x)/2`.']],['#f{15}{8}','5','#f{3}{2}']),
  Q('Reduce the derivative law to Legendre.','اختصر قانون المشتقة إلى ليجندر.','P_n′ = #f{n + 1}{2} P_{n−1}^{(1,1)}',['α = β = 0:   #f{n + 0 + 0 + 1}{2}'],['P_n′ = n P_{n−1}','P_n′ = #f{n}{2} P_{n−1}^{(1,1)}','P_n′ = (n + 1)P_{n−1}']),
]);

lesson('503',22,[
  ['With α = β = −1/2 the weight is `(1 − x^2)^{−1/2}` and the polynomials are multiples of Chebyshev’s `T_n`:','مع α = β = −1/2 يكون الوزن `(1 − x^2)^{−1/2}` وتكون الكثيرات مضاعفات لـ `T_n` عند تشيبيشيف:'],
  'P_n^{(−1/2,−1/2)}(x) = #f{(1/2)_n}{n!} T_n(x)',
  ['The factor is the end value `C(n − 1/2, n)`, since `T_n(1) = 1`. The two families are orthogonal with the same weight, so they differ only in normalization.','والعامل هو القيمة الطرفية `C(n − 1/2, n)` لأن `T_n(1) = 1`. والعائلتان متعامدتان بالوزن نفسه فلا تختلفان إلا في التطبيع.'],
],[
  Q('Find `P_1^{(−1/2,−1/2)}`.','أوجد `P_1^{(−1/2,−1/2)}`.','#f{x}{2}',['#f{(α + β + 2)x + α − β}{2} = #f{x}{2}'],['x','2x','#f{x}{4}']),
  Q('Find the factor `(1/2)_n/n!` for n = 3.','أوجد العامل `(1/2)_n/n!` عند n = 3.','#f{5}{16}',['#f{(1/2)(3/2)(5/2)}{6} = #f{15/8}{6}',['So `P_3^{(−1/2,−1/2)} = (5/16)(4x^3 − 3x) = (5/4)x^3 − (15/16)x`.','إذن `P_3^{(−1/2,−1/2)} = (5/16)(4x^3 − 3x) = (5/4)x^3 − (15/16)x`.']],['#f{3}{8}','#f{15}{8}','#f{1}{2}']),
  Q('Write the weight function.','اكتب دالة الوزن.','(1 − x^2)^{−1/2}',['(1 − x)^{−1/2}(1 + x)^{−1/2}'],['#r{1 − x^2}','1','(1 − x)^{−1/2}']),
  Q('Find `P_2^{(−1/2,−1/2)}(1)`.','أوجد `P_2^{(−1/2,−1/2)}(1)`.','#f{3}{8}',['#f{(1/2)_2}{2!}·T_2(1)'],['1','#f{1}{2}','#f{3}{4}']),
]);

lesson('503',23,[
  ['With α = β = 1/2 the weight is `#r{1 − x^2}` and the polynomials are multiples of the second-kind Chebyshev polynomials `U_n`:','مع α = β = 1/2 يكون الوزن `#r{1 − x^2}` وتكون الكثيرات مضاعفات لكثيرات تشيبيشيف من النوع الثاني `U_n`:'],
  'P_n^{(1/2,1/2)}(x) = #f{(3/2)_n}{(n + 1)!} U_n(x),     U_n(cos θ) = #f{sin(n + 1)θ}{sin θ}',
  ['`U_n(1) = n + 1`, which again fixes the factor through the end value. The `U_n` give the derivatives of the `T_n`: `T_n′ = nU_{n−1}`.','و `U_n(1) = n + 1`، وهذا يحدد العامل مرة أخرى عبر القيمة الطرفية. و `U_n` تعطي مشتقات `T_n`: `T_n′ = nU_{n−1}`.'],
],[
  Q('Find `P_1^{(1/2,1/2)}` and check it against `U_1 = 2x`.','أوجد `P_1^{(1/2,1/2)}` وتحقق منها مقابل `U_1 = 2x`.','#f{3x}{2} = #f{3}{4}U_1',['#f{3x + 0}{2}','#f{(3/2)_1}{2!} = #f{3}{4}'],['x = #f{1}{2}U_1','3x = #f{3}{2}U_1','#f{3x}{2} = #f{3}{2}U_1']),
  Q('Find `P_2^{(1/2,1/2)}` from `U_2 = 4x^2 − 1`.','أوجد `P_2^{(1/2,1/2)}` من `U_2 = 4x^2 − 1`.','#f{5}{2}x^2 − #f{5}{8}',['#f{(3/2)(5/2)}{3!} = #f{5}{8}','#f{5}{8}(4x^2 − 1)'],['4x^2 − 1','#f{15}{8}x^2 − #f{5}{8}','#f{5}{2}x^2 − #f{5}{2}']),
  Q('Find `U_3(1)`.','أوجد `U_3(1)`.','4',['U_n(1) = n + 1'],['1','3','8']),
  Q('Write the weight of the second-kind polynomials.','اكتب وزن كثيرات النوع الثاني.','#r{1 − x^2}',['(1 − x)^{1/2}(1 + x)^{1/2}'],['#f{1}{#r{1 − x^2}}','1 − x^2','1']),
]);

lesson('503',24,[
  ['The two mixed cases give Chebyshev polynomials of the third and fourth kinds:','الحالتان المختلطتان تعطيان كثيرات تشيبيشيف من النوعين الثالث والرابع:'],
  'V_n(cos θ) = #f{cos(n + 1/2)θ}{cos(θ/2)}   (α = −#f{1}{2}, β = #f{1}{2}),     W_n(cos θ) = #f{sin(n + 1/2)θ}{sin(θ/2)}   (α = #f{1}{2}, β = −#f{1}{2})',
  ['Their weights `#r{(1 + x)/(1 − x)}` and `#r{(1 − x)/(1 + x)}` are singular at one end only. They appear in problems with a singularity at one end, and `V_1 = 2x − 1`, `W_1 = 2x + 1`.','وأوزانها `#r{(1 + x)/(1 − x)}` و `#r{(1 − x)/(1 + x)}` شاذة عند طرف واحد فقط. وتظهر في المسائل ذات الانفراد عند طرف واحد، و `V_1 = 2x − 1` و `W_1 = 2x + 1`.'],
],[
  Q('Find `P_1^{(−1/2,1/2)}` and compare it with `V_1`.','أوجد `P_1^{(−1/2,1/2)}` وقارنها بـ `V_1`.','x − #f{1}{2} = #f{1}{2}V_1',['#f{2x + (−1/2 − 1/2)}{2} = #f{2x − 1}{2}'],['x + #f{1}{2} = #f{1}{2}W_1','2x − 1 = V_1','x = #f{1}{2}U_1']),
  Q('Find `W_n(1)`.','أوجد `W_n(1)`.','2n + 1',['θ → 0:   #f{sin(n + 1/2)θ}{sin(θ/2)} → #f{n + 1/2}{1/2}'],['1','n + 1','2^n']),
  Q('Find `V_n(1)`.','أوجد `V_n(1)`.','1',['θ = 0:   #f{cos 0}{cos 0}'],['2n + 1','n + 1','0']),
  Q('Which end is singular for the weight of `V_n`?','أي طرف شاذ في وزن `V_n`؟','x = 1',['#r{#f{1 + x}{1 − x}} → ∞   (x → 1)'],['x = −1',['Both ends','كلا الطرفين'],['Neither end','ولا طرف']]),
]);

lesson('503',25,[
  ['When α = β the Jacobi polynomials are the Gegenbauer (ultraspherical) polynomials, usually written with `λ = α + 1/2`:','عندما α = β تكون كثيرات جاكوبي كثيرات جيجنباور (فوق الكروية)، وتُكتب عادةً مع `λ = α + 1/2`:'],
  'C_n^{λ}(x) = #f{(2λ)_n}{(λ + 1/2)_n} P_n^{(λ−1/2, λ−1/2)}(x),     C_1^{λ} = 2λx,     C_2^{λ} = 2λ(λ + 1)x^2 − λ',
  ['λ = 1/2 gives Legendre, λ = 1 gives `U_n`, and the limit λ → 0 (suitably scaled) gives `T_n`. They are even or odd with n, and their generating function is `(1 − 2xt + t^2)^{−λ}`.','و λ = 1/2 تعطي ليجندر، و λ = 1 تعطي `U_n`، والنهاية λ → 0 (بتحجيم مناسب) تعطي `T_n`. وهي زوجية أو فردية مع n، ودالتها المولدة `(1 − 2xt + t^2)^{−λ}`.'],
],[
  Q('Find `C_2^{3/2}(x)`.','أوجد `C_2^{3/2}(x)`.','#f{15}{2}x^2 − #f{3}{2}',['2·#f{3}{2}·#f{5}{2}x^2 − #f{3}{2}'],['#f{15}{4}x^2 − #f{3}{4}','3x^2 − 1','#f{5}{2}x^2 − #f{3}{2}']),
  Q('Check that `C_1^{1} = U_1`.','تحقق أن `C_1^{1} = U_1`.','2x',['C_1^{λ} = 2λx,   λ = 1'],['x','4x','1']),
  Q('Check that `C_2^{1/2} = P_2`.','تحقق أن `C_2^{1/2} = P_2`.','#f{3x^2 − 1}{2}',['2·#f{1}{2}·#f{3}{2}x^2 − #f{1}{2}'],['3x^2 − 1','x^2 − #f{1}{2}','#f{3x^2 + 1}{2}']),
  Q('Which Jacobi parameters correspond to `C_n^{2}`?','أي وسيطي جاكوبي يقابلان `C_n^{2}`؟','α = β = #f{3}{2}',['α = λ − #f{1}{2}'],['α = β = 2','α = β = #f{5}{2}','α = 2,   β = 0']),
]);

lesson('503',26,[
  ['Different books normalize the same polynomials differently. A table of factors relative to `P_n^{(α,β)}` avoids mistakes:','الكتب المختلفة تطبّع الكثيرات نفسها تطبيعات مختلفة. وجدول العوامل بالنسبة إلى `P_n^{(α,β)}` يتجنب الأخطاء:'],
  'T_n = #f{n!}{(1/2)_n} P_n^{(−1/2,−1/2)},   U_n = #f{(n + 1)!}{(3/2)_n} P_n^{(1/2,1/2)},   C_n^{λ} = #f{(2λ)_n}{(λ + 1/2)_n} P_n^{(λ−1/2,λ−1/2)}',
  ['A quick check of any normalization: evaluate at x = 1 and compare with `C(n + α, n)`. Orthonormal versions divide by `#r{h_n}`.','والتحقق السريع من أي تطبيع: احسب القيمة عند x = 1 وقارنها بـ `C(n + α, n)`. والصيغ المتعامدة المعيارية تقسم على `#r{h_n}`.'],
],[
  Q('Find the factor `n!/(1/2)_n` for n = 2.','أوجد العامل `n!/(1/2)_n` عند n = 2.','#f{8}{3}',['#f{2}{(1/2)(3/2)} = #f{2}{3/4}'],['#f{3}{8}','2','#f{4}{3}']),
  Q('Find the factor `(n + 1)!/(3/2)_n` for n = 1.','أوجد العامل `(n + 1)!/(3/2)_n` عند n = 1.','#f{4}{3}',['#f{2}{3/2}'],['#f{3}{4}','2','1']),
  Q('An author writes `P̂_n = P_n^{(α,β)}/P_n^{(α,β)}(1)`. What is `P̂_n(1)`?','مؤلف يكتب `P̂_n = P_n^{(α,β)}/P_n^{(α,β)}(1)`. ما `P̂_n(1)`؟','1',[['This normalization makes every family equal 1 at the right end, like `T_n` and `P_n`.','وهذا التطبيع يجعل كل عائلة تساوي 1 عند الطرف الأيمن مثل `T_n` و `P_n`.']],['C(n + α, n)','0','n + 1']),
  Q('Write the orthonormal Legendre polynomial of degree 1.','اكتب كثيرة ليجندر المتعامدة المعيارية من الدرجة 1.','#r{#f{3}{2}} x',['#f{P_1}{#r{h_1}} = #f{x}{#r{2/3}}'],['x','#r{3} x','#f{x}{#r{3}}']),
]);

lesson('503',27,[
  ['The parameters change where the polynomials are large and where their zeros sit. With `q = max(α, β) ≥ −1/2`, the maximum on `[−1, 1]` is reached at an end:','الوسيطان يغيّران أين تكون الكثيرات كبيرة وأين تقع جذورها. ومع `q = max(α, β) ≥ −1/2` تبلغ القيمة العظمى على `[−1, 1]` عند أحد الطرفين:'],
  'max_{[−1,1]} |P_n^{(α,β)}| = C(n + q, n) ≈ #f{n^q}{Γ(q + 1)}',
  ['Increasing α pushes the zeros away from x = 1 and makes the polynomial large there; the weight `(1 − x)^α`, which is small near 1, compensates. Chebyshev points (α = β = −1/2) are the most clustered at the ends.','وزيادة α تدفع الجذور بعيداً عن x = 1 وتجعل الكثيرة كبيرة هناك، ويعوّض ذلك الوزن `(1 − x)^α` الصغير قرب 1. ونقاط تشيبيشيف (α = β = −1/2) هي الأشد تكاثفاً عند الطرفين.'],
],[
  Q('Find the maximum of `|P_n^{(1,0)}|` on `[−1, 1]`.','أوجد القيمة العظمى لـ `|P_n^{(1,0)}|` على `[−1, 1]`.','n + 1',['q = 1:   C(n + 1, n)'],['1','n','2^n']),
  Q('Find the maximum of `|P_4^{(2,1)}|` on `[−1, 1]`.','أوجد القيمة العظمى لـ `|P_4^{(2,1)}|` على `[−1, 1]`.','15',['q = 2:   C(6, 4) = 15'],['5','10','20']),
  Q('How does `P_n^{(α,β)}(1)` grow for α = 2?','كيف تنمو `P_n^{(α,β)}(1)` عند α = 2؟',['Like `n^2/2`','مثل `n^2/2`'],['C(n + 2, n) = #f{(n + 1)(n + 2)}{2}'],[['Like n','مثل n'],['It stays 1','تبقى 1']]),
  Q('When α increases with β fixed, where do the zeros move?','عند زيادة α مع ثبات β أين تتحرك الجذور؟',['Away from x = 1, towards −1','بعيداً عن x = 1، نحو −1'],[['The weight `(1 − x)^α` pushes mass away from x = 1.','الوزن `(1 − x)^α` يدفع الكتلة بعيداً عن x = 1.']],[['Towards x = 1','نحو x = 1'],['They do not move','لا تتحرك']]),
]);

lesson('503',28,[
  ['Laguerre and Hermite polynomials are limits of Jacobi polynomials. Stretching the interval near x = 1:','كثيرات لاجير وهيرميت نهايات لكثيرات جاكوبي. فبمطّ المجال قرب x = 1:'],
  'L_n^{(α)}(x) = lim_{β→∞} P_n^{(α,β)}(1 − #f{2x}{β}),     H_n(x) = lim_{α→∞} 2^n n! α^{−n/2} P_n^{(α,α)}(#f{x}{#r{α}})',
  ['Laguerre polynomials are orthogonal on `[0, ∞)` with `x^{α}e^{−x}`, Hermite on `(−∞, ∞)` with `e^{−x^2}`. The limits explain why their laws look like the Jacobi laws with one parameter sent to infinity.','وكثيرات لاجير متعامدة على `[0, ∞)` بالوزن `x^{α}e^{−x}`، وهيرميت على `(−∞, ∞)` بالوزن `e^{−x^2}`. والنهايات تفسر لماذا تشبه قوانينها قوانين جاكوبي مع إرسال أحد الوسيطين إلى اللانهاية.'],
],[
  Q('Compute `L_1^{(α)}(x)` from the limit.','احسب `L_1^{(α)}(x)` من النهاية.','1 + α − x',['P_1^{(α,β)}(1 − #f{2x}{β}) = α + 1 − x(1 + #f{α + 2}{β})  →  α + 1 − x'],['1 − x','α − x','1 + α + x']),
  Q('Write `L_1^{(0)}` and `L_2^{(0)}`.','اكتب `L_1^{(0)}` و `L_2^{(0)}`.','1 − x,   #f{x^2 − 4x + 2}{2}',[['The standard Laguerre polynomials (Course 501, Lesson 96).','كثيرات لاجير المعيارية (المقرر 501، الدرس 96).']],['1 + x,   x^2 − 4x + 2','x,   x^2','1 − x,   x^2 − 2x + 1']),
  Q('On which interval and with which weight are Hermite polynomials orthogonal?','على أي مجال وبأي وزن تتعامد كثيرات هيرميت؟','(−∞, ∞),   e^{−x^2}',[['The limit α = β → ∞ makes the weight `(1 − x^2/α)^{α} → e^{−x^2}`.','النهاية α = β → ∞ تجعل الوزن `(1 − x^2/α)^{α} → e^{−x^2}`.']],['[0, ∞),   e^{−x}','[−1, 1],   1','(−∞, ∞),   e^{−x}']),
  Q('Write `H_1(x)`.','اكتب `H_1(x)`.','2x',['2·1!·α^{−1/2}·P_1^{(α,α)}(x/#r{α}) = 2α^{−1/2}·(α + 1)#f{x}{#r{α}}  →  2x'],['x','4x','2']),
]);

lesson('503',29,[
  ['The generating function of the Jacobi polynomials, with `R = #r{1 − 2xt + t^2}`:','الدالة المولدة لكثيرات جاكوبي مع `R = #r{1 − 2xt + t^2}`:'],
  'Σ_{n=0}^{∞} P_n^{(α,β)}(x) t^n = #f{2^{α+β}}{R (1 − t + R)^{α} (1 + t + R)^{β}}',
  ['With α = β = 0 it is Legendre’s `1/R`. At x = 1, `R = 1 − t`, and the formula reduces to `(1 − t)^{−α−1} = Σ C(n + α, n) t^n`, which again gives the end values.','ومع α = β = 0 تكون `1/R` لليجندر. وعند x = 1 يكون `R = 1 − t`، فتؤول الصيغة إلى `(1 − t)^{−α−1} = Σ C(n + α, n) t^n`، وهذا يعطي القيم الطرفية مرة أخرى.'],
],[
  Q('Reduce the generating function to Legendre.','اختصر الدالة المولدة إلى ليجندر.','#f{1}{#r{1 − 2xt + t^2}}',['α = β = 0:   #f{2^0}{R}'],['#f{1}{1 − 2xt + t^2}','e^{xt}','#f{1}{1 − xt}']),
  Q('Evaluate the generating function at x = 1.','احسب الدالة المولدة عند x = 1.','(1 − t)^{−α−1}',['R = 1 − t,   1 − t + R = 2(1 − t),   1 + t + R = 2', '#f{2^{α+β}}{(1 − t)·2^{α}(1 − t)^{α}·2^{β}}'],['(1 − t)^{−1}','(1 + t)^{−β−1}','2^{α+β}']),
  Q('Read `P_2^{(α,β)}(1)` from `(1 − t)^{−α−1}`.','اقرأ `P_2^{(α,β)}(1)` من `(1 − t)^{−α−1}`.','#f{(α + 1)(α + 2)}{2}',['(1 − t)^{−a} = Σ #f{(a)_n}{n!} t^n,   a = α + 1'],['α + 1','(α + 1)^2','2(α + 1)']),
  Q('What is R at x = −1?','ما R عند x = −1؟','1 + t',['#r{1 + 2t + t^2}'],['1 − t','#r{2}','t']),
]);

lesson('503',30,[
  ['The classical orthogonal polynomials, side by side:','الكثيرات المتعامدة الكلاسيكية جنباً إلى جنب:'],
  ['Jacobi: `[−1, 1]`, weight `(1 − x)^α(1 + x)^β`, equation `(1 − x^2)y″ + [β − α − (α + β + 2)x]y′ + n(n + α + β + 1)y = 0`. Laguerre: `[0, ∞)`, weight `x^α e^{−x}`, equation `xy″ + (α + 1 − x)y′ + ny = 0`. Hermite: `(−∞, ∞)`, weight `e^{−x^2}`, equation `y″ − 2xy′ + 2ny = 0`.',
   'جاكوبي: `[−1, 1]` بالوزن `(1 − x)^α(1 + x)^β` والمعادلة `(1 − x^2)y″ + [β − α − (α + β + 2)x]y′ + n(n + α + β + 1)y = 0`. لاجير: `[0, ∞)` بالوزن `x^α e^{−x}` والمعادلة `xy″ + (α + 1 − x)y′ + ny = 0`. هيرميت: `(−∞, ∞)` بالوزن `e^{−x^2}` والمعادلة `y″ − 2xy′ + 2ny = 0`.'],
  ['By Bochner’s theorem these are, up to linear changes of variable, the only polynomial families that are eigenfunctions of a second-order differential operator.','وبحسب نظرية بوخنر هذه وحدها (حتى تغييرات المتغير الخطية) عائلات الكثيرات التي هي دوال ذاتية لمؤثر تفاضلي من الرتبة الثانية.'],
],[
  Q('Which family lives on `[0, ∞)`?','أي عائلة تعيش على `[0, ∞)`؟',['Laguerre','لاجير'],['x^α e^{−x}'],[['Hermite','هيرميت'],['Jacobi','جاكوبي']]),
  Q('Verify that `H_1 = 2x` satisfies `y″ − 2xy′ + 2ny = 0` with n = 1.','تحقق أن `H_1 = 2x` تحقق `y″ − 2xy′ + 2ny = 0` مع n = 1.',['Verified: `0 − 4x + 4x = 0`','تحقق: `0 − 4x + 4x = 0`'],['y′ = 2,   y″ = 0']),
  Q('Verify that `L_1^{(0)} = 1 − x` satisfies `xy″ + (1 − x)y′ + y = 0`.','تحقق أن `L_1^{(0)} = 1 − x` تحقق `xy″ + (1 − x)y′ + y = 0`.',['Verified: `0 − (1 − x) + (1 − x) = 0`','تحقق: `0 − (1 − x) + (1 − x) = 0`'],['y′ = −1,   y″ = 0']),
  Q('Which weight belongs to Hermite polynomials?','أي وزن يخص كثيرات هيرميت؟','e^{−x^2}',[['On the whole real line.','على الخط الحقيقي كله.']],['e^{−x}','1 − x^2','x e^{−x}']),
]);

lesson('503',31,[
  ['Contiguous relations connect Jacobi polynomials whose parameters differ by one. Two useful ones:','العلاقات المتجاورة تربط كثيرات جاكوبي التي يختلف وسيطاها بواحد. واثنتان مفيدتان:'],
  'P_n^{(α+1,β)} − P_n^{(α,β+1)} = P_{n−1}^{(α+1,β+1)},     (1 − x)P_n^{(α+1,β)} + (1 + x)P_n^{(α,β+1)} = 2P_n^{(α,β)}',
  ['They let a program move between families (for example from a basis adapted to boundary conditions to an orthogonal one) without recomputing integrals.','وتسمح للبرنامج بالتنقل بين العائلات (مثلاً من أساس مكيّف للشروط الحدية إلى أساس متعامد) دون إعادة حساب التكاملات.'],
],[
  Q('Check the first relation for n = 1, α = β = 0.','تحقق من العلاقة الأولى عند n = 1 و α = β = 0.','1',['P_1^{(1,0)} − P_1^{(0,1)} = #f{3x + 1}{2} − #f{3x − 1}{2} = 1 = P_0^{(1,1)}'],['0','x','3x']),
  Q('Check the second relation for n = 1, α = β = 0.','تحقق من العلاقة الثانية عند n = 1 و α = β = 0.','2x',['(1 − x)#f{3x + 1}{2} + (1 + x)#f{3x − 1}{2} = #f{4x}{2} = 2P_1'],['x','0','3x']),
  Q('Use the first relation to write `P_2^{(1,0)} − P_2^{(0,1)}`.','استخدم العلاقة الأولى لكتابة `P_2^{(1,0)} − P_2^{(0,1)}`.','P_1^{(1,1)} = 2x',['n = 2:   P_1^{(1,1)}',['Check: `(5x^2/2 + x − 1/2) − (5x^2/2 − x − 1/2) = 2x`.','تحقق: `(5x^2/2 + x − 1/2) − (5x^2/2 − x − 1/2) = 2x`.']],['0','2','x^2']),
  Q('What is `P_n^{(α+1,β)} − P_n^{(α,β+1)}` at x = 1?','ما `P_n^{(α+1,β)} − P_n^{(α,β+1)}` عند x = 1؟','C(n + α, n − 1)',['P_{n−1}^{(α+1,β+1)}(1) = C(n + α, n − 1)'],['0','C(n + α, n)','1']),
]);

lesson('503',32,[
  ['The Christoffel–Darboux formula holds for every orthogonal family. For Jacobi polynomials, with `k_n` the leading coefficients:','صيغة كريستوفل–داربو تتحقق لكل عائلة متعامدة. ولكثيرات جاكوبي مع `k_n` المعاملات الرئيسة:'],
  'Σ_{k=0}^{n} #f{P_k(x) P_k(y)}{h_k} = #f{k_n}{k_{n+1} h_n}·#f{P_{n+1}(x)P_n(y) − P_n(x)P_{n+1}(y)}{x − y}',
  ['Its confluent form (y → x) gives the Gauss–Jacobi weights, and the kernel on the left reproduces every polynomial of degree ≤ n under the weighted integral.','وصيغتها المتطابقة (y → x) تعطي أوزان جاوس–جاكوبي، والنواة في الطرف الأيسر تعيد إنتاج كل كثيرة حدود درجتها ≤ n تحت التكامل الموزون.'],
],[
  Q('For Legendre and n = 0, check the formula at x = 1, y = 0.','لليجندر و n = 0 تحقق من الصيغة عند x = 1 و y = 0.','#f{1}{2}',['#f{P_0(1)P_0(0)}{h_0} = #f{1}{2}','#f{k_0}{k_1 h_0}·#f{P_1(1)P_0(0) − P_0(1)P_1(0)}{1} = #f{1}{1·2}·1'],['1','2','0']),
  Q('What does the kernel `K_n(x, y) = Σ P_k(x)P_k(y)/h_k` do?','ماذا تفعل النواة `K_n(x, y) = Σ P_k(x)P_k(y)/h_k`؟',['It reproduces polynomials of degree ≤ n: `∫ w(y) K_n(x, y) p(y) dy = p(x)`','تعيد إنتاج كثيرات الحدود ذات الدرجة ≤ n: `∫ w(y) K_n(x, y) p(y) dy = p(x)`'],[['Expand p in the orthogonal basis and use orthogonality.','انشر p في الأساس المتعامد واستخدم التعامد.']],[['It differentiates','تشتق'],['It vanishes','تنعدم']]),
  Q('For Legendre, `k_n/k_{n+1} = (n + 1)/(2n + 1)`. Compute it for n = 1.','لليجندر `k_n/k_{n+1} = (n + 1)/(2n + 1)`. احسبه عند n = 1.','#f{2}{3}',['#f{k_1}{k_2} = #f{1}{3/2}'],['#f{3}{2}','#f{1}{3}','1']),
  Q('Which quantity of Gauss–Jacobi quadrature comes from the confluent formula?','أي كمية في تربيع جاوس–جاكوبي تأتي من الصيغة المتطابقة؟',['The weights','الأوزان'],[['`1/w_i = K_{n−1}(x_i, x_i)`.','`1/w_i = K_{n−1}(x_i, x_i)`.']],[['The nodes','العقد'],['The degree of exactness','درجة الدقة']]),
]);

lesson('503',33,[
  ['Connection coefficients rewrite one Jacobi family in another:','معاملات الربط تعيد كتابة عائلة جاكوبي بعائلة أخرى:'],
  'P_n^{(γ,δ)}(x) = Σ_{k=0}^{n} c_{n,k} P_k^{(α,β)}(x)',
  ['They are explicit (hypergeometric) in general, and very simple in common cases: `P_2 = (1/4)T_0 + (3/4)T_2`, `T_2 = −(1/3)P_0 + (4/3)P_2`. They are used to transfer coefficients between a Chebyshev code (fast transforms) and a Legendre or Jacobi method.','وهي صريحة (فوق هندسية) عموماً، وبسيطة جداً في الحالات الشائعة: `P_2 = (1/4)T_0 + (3/4)T_2` و `T_2 = −(1/3)P_0 + (4/3)P_2`. وتُستخدم لنقل المعاملات بين برنامج تشيبيشيف (التحويلات السريعة) وطريقة ليجندر أو جاكوبي.'],
],[
  Q('Write `P_2` in Chebyshev polynomials.','اكتب `P_2` بدلالة كثيرات تشيبيشيف.','#f{1}{4}T_0 + #f{3}{4}T_2',['x^2 = #f{T_0 + T_2}{2}','#f{3}{2}·#f{T_0 + T_2}{2} − #f{1}{2}T_0'],['#f{3}{4}T_0 + #f{1}{4}T_2','T_2','#f{1}{2}T_0 + #f{1}{2}T_2']),
  Q('Write `T_2` in Legendre polynomials.','اكتب `T_2` بدلالة كثيرات ليجندر.','−#f{1}{3}P_0 + #f{4}{3}P_2',['T_2 = 2x^2 − 1 = 2(#f{1}{3}P_0 + #f{2}{3}P_2) − P_0'],['#f{1}{3}P_0 + #f{4}{3}P_2','2P_2 − P_0','P_2']),
  Q('Write `P_1^{(1,0)}` in Legendre polynomials.','اكتب `P_1^{(1,0)}` بدلالة كثيرات ليجندر.','#f{1}{2}P_0 + #f{3}{2}P_1',['#f{3x + 1}{2}'],['#f{3}{2}P_0 + #f{1}{2}P_1','P_1','2P_1']),
  Q('Check `P_2 = (1/4)T_0 + (3/4)T_2` at x = 1.','تحقق من `P_2 = (1/4)T_0 + (3/4)T_2` عند x = 1.','1',['#f{1}{4} + #f{3}{4} = 1 = P_2(1)'],['#f{3}{4}','0','#f{1}{2}']),
]);

lesson('503',34,[
  ['A product of two Jacobi polynomials of the same family is again a finite sum in that family (linearization):','حاصل ضرب كثيرتي جاكوبي من العائلة نفسها مجموع منته في تلك العائلة (الخطية):'],
  'P_m^{(α,β)} P_n^{(α,β)} = Σ_{k=|m−n|}^{m+n} L(m, n, k) P_k^{(α,β)}',
  ['For Chebyshev polynomials the coefficients are trivial, `T_m T_n = (T_{m+n} + T_{|m−n|})/2`; for Legendre they are Adams’ formula (Course 501); for general α, β they are known and non-negative when `α ≥ β ≥ −1/2`. Linearization gives the product operational matrix.','ولكثيرات تشيبيشيف المعاملات بديهية `T_m T_n = (T_{m+n} + T_{|m−n|})/2`، ولليجندر هي صيغة آدامز (المقرر 501)، ولـ α و β العامة معروفة وغير سالبة عندما `α ≥ β ≥ −1/2`. والخطية تعطي مصفوفة الضرب التشغيلية.'],
],[
  Q('Expand `T_2 T_3`.','انشر `T_2 T_3`.','#f{T_5 + T_1}{2}',['cos 2θ cos 3θ = #f{cos 5θ + cos θ}{2}'],['T_6','#f{T_5 − T_1}{2}','T_5 + T_1']),
  Q('Expand `[P_1^{(1,1)}]^2 = 4x^2` in the family `P_k^{(1,1)}`.','انشر `[P_1^{(1,1)}]^2 = 4x^2` في العائلة `P_k^{(1,1)}`.','#f{4}{5}P_0 + #f{16}{15}P_2^{(1,1)}',['P_2^{(1,1)} = #f{15x^2 − 3}{4}  ⇒  x^2 = #f{4P_2 + 3}{15}'],['4P_2^{(1,1)}','#f{16}{15}P_2^{(1,1)}','#f{4}{15}P_0 + #f{16}{15}P_2^{(1,1)}']),
  Q('What are the lowest and highest degrees in `P_3 P_5`?','ما أدنى درجة وأعلاها في `P_3 P_5`؟','2,   8',['|3 − 5| = 2,   3 + 5 = 8'],['0,   8','3,   5','2,   15']),
  Q('Expand `T_1^2`.','انشر `T_1^2`.','#f{T_0 + T_2}{2}',['#f{T_2 + T_0}{2} = #f{2x^2 − 1 + 1}{2} = x^2'],['T_2','T_0','#f{T_2 − T_0}{2}']),
]);

lesson('503',35,[
  ['The derivative law read backwards integrates a Jacobi polynomial:','قانون المشتقة مقروءاً بالعكس يكامل كثيرة جاكوبي:'],
  '∫ P_n^{(α,β)}(x) dx = #f{2}{n + α + β} P_{n+1}^{(α−1,β−1)}(x) + C',
  ['(valid when `n + α + β ≠ 0` and the new parameters exceed −1). Weighted integrals over the whole interval are simpler still: `∫ w P_n dx = 0` for n ≥ 1, by orthogonality with `P_0`.','(وتصح عندما `n + α + β ≠ 0` وكان الوسيطان الجديدان أكبر من −1). والتكاملات الموزونة على المجال كله أبسط: `∫ w P_n dx = 0` عند n ≥ 1 بالتعامد مع `P_0`.'],
],[
  Q('Integrate `P_1^{(1,1)} = 2x` with the formula.','كامل `P_1^{(1,1)} = 2x` بالصيغة.','#f{2}{3}P_2 + C = x^2 − #f{1}{3} + C',['#f{2}{1 + 2}P_2^{(0,0)}'],['x^2 + C = P_2 + C','2P_2 + C','#f{1}{3}P_2 + C']),
  Q('Compute `∫_{−1}^{1} (1 − x)(1 + x) P_3^{(1,1)} dx`.','احسب `∫_{−1}^{1} (1 − x)(1 + x) P_3^{(1,1)} dx`.','0',[['Orthogonality with `P_0^{(1,1)} = 1`.','التعامد مع `P_0^{(1,1)} = 1`.']],['#f{4}{3}','h_3','1']),
  Q('Compute `∫_{−1}^{1} (1 − x) P_1^{(1,0)} dx`.','احسب `∫_{−1}^{1} (1 − x) P_1^{(1,0)} dx`.','0',['∫_{−1}^{1}(1 − x)#f{3x + 1}{2} dx = #f{1}{2}∫(1 + 2x − 3x^2) dx = #f{1}{2}(2 + 0 − 2)'],['2','1','−1']),
  Q('Why does the formula fail for Legendre `P_0` (n = 0, α = β = 0)?','لماذا تفشل الصيغة لـ `P_0` عند ليجندر (n = 0 و α = β = 0)؟',['`n + α + β = 0` makes the factor infinite (and α − 1 = −1 is not allowed)','`n + α + β = 0` يجعل العامل لانهائياً (و α − 1 = −1 غير مسموح)'],[['`∫ 1 dx = x` is simply `P_1`.','و `∫ 1 dx = x` هي ببساطة `P_1`.']],[['It does not fail','لا تفشل']]),
]);

lesson('503',36,[
  ['Powers of x have finite Jacobi expansions. From `P_1` and `P_2`:','قوى x لها مفكوكات جاكوبي منتهية. ومن `P_1` و `P_2`:'],
  'x = #f{2P_1^{(α,β)} − (α − β)}{α + β + 2}',
  ['For higher powers multiply by x and use the recurrence (`xP_n` is a combination of `P_{n−1}, P_n, P_{n+1}`), or project with `c_k = ⟨x^m, P_k⟩_w/h_k`. When α = β only even or only odd degrees appear.','وللقوى الأعلى نضرب في x ونستخدم علاقة التكرار (`xP_n` تركيب من `P_{n−1}, P_n, P_{n+1}`)، أو نُسقط بـ `c_k = ⟨x^m, P_k⟩_w/h_k`. وعندما α = β لا تظهر إلا الدرجات الزوجية أو الفردية فقط.'],
],[
  Q('Write x in the family `P_k^{(1,0)}`.','اكتب x في العائلة `P_k^{(1,0)}`.','x = #f{2P_1^{(1,0)} − 1}{3}',['2P_1^{(1,0)} = 3x + 1'],['x = #f{2P_1^{(1,0)} + 1}{3}','x = P_1^{(1,0)}','x = #f{P_1^{(1,0)}}{3}']),
  Q('Write `x^2` in the family `P_k^{(1,1)}`.','اكتب `x^2` في العائلة `P_k^{(1,1)}`.','x^2 = #f{1}{5} + #f{4}{15}P_2^{(1,1)}',['P_2^{(1,1)} = #f{15x^2 − 3}{4}'],['x^2 = #f{4}{15}P_2^{(1,1)}','x^2 = #f{1}{3} + #f{2}{3}P_2^{(1,1)}','x^2 = #f{3}{15} + #f{4}{5}P_2^{(1,1)}']),
  Q('Write x in the family `P_k^{(1,1)}`.','اكتب x في العائلة `P_k^{(1,1)}`.','x = #f{1}{2}P_1^{(1,1)}',['P_1^{(1,1)} = 2x'],['x = P_1^{(1,1)}','x = 2P_1^{(1,1)}','x = #f{1}{4}P_1^{(1,1)}']),
  Q('For α = β, which degrees appear in the expansion of `x^5`?','عند α = β أي الدرجات تظهر في مفكوك `x^5`؟','1,  3,  5',[['`x^5` is odd and every `P_k^{(α,α)}` has the parity of k.','`x^5` فردية وكل `P_k^{(α,α)}` لها زوجية k.']],['0,  2,  4','0, 1, 2, 3, 4, 5','5']),
]);

lesson('503',37,[
  ['On `[−1, 1]` the size of `P_n^{(α,β)}` is controlled by the larger parameter. With `q = max(α, β)`:','على `[−1, 1]` يتحكم الوسيط الأكبر في حجم `P_n^{(α,β)}`. ومع `q = max(α, β)`:'],
  'q ≥ −#f{1}{2}:   max_{[−1,1]} |P_n^{(α,β)}| = C(n + q, n)',
  ['The maximum is attained at x = 1 if α ≥ β, at x = −1 otherwise. For `q < −1/2` the maximum sits inside the interval and grows more slowly. These bounds feed directly into error estimates of Jacobi spectral methods.','وتتحقق القيمة العظمى عند x = 1 إذا كان α ≥ β، وعند x = −1 في غير ذلك. وعند `q < −1/2` تقع القيمة العظمى داخل المجال وتنمو أبطأ. وهذه الحدود تدخل مباشرة في تقديرات الخطأ لطرق جاكوبي الطيفية.'],
],[
  Q('Bound `|P_5^{(0,2)}|` on `[−1, 1]`.','أوجد حداً لـ `|P_5^{(0,2)}|` على `[−1, 1]`.','21',['q = 2:   C(7, 5) = 21'],['1','6','35']),
  Q('Where is the maximum of `|P_5^{(0,2)}|` attained?','أين تتحقق القيمة العظمى لـ `|P_5^{(0,2)}|`؟','x = −1',['β > α'],['x = 1','x = 0','x = #f{1}{2}']),
  Q('Bound `|P_n|` for Legendre.','أوجد حداً لـ `|P_n|` لليجندر.','1',['q = 0:   C(n, n) = 1'],['n','#f{2}{2n + 1}','n + 1']),
  Q('Bound `|P_3^{(1/2,1/2)}|`.','أوجد حداً لـ `|P_3^{(1/2,1/2)}|`.','#f{35}{16}',['C(3.5, 3) = #f{(3/2)(5/2)(7/2)}{6} = #f{105/8}{6}'],['4','#f{35}{8}','1']),
]);

lesson('503',38,[
  ['The end value grows like a power of n:','القيمة الطرفية تنمو مثل قوة لـ n:'],
  'C(n + α, n) = #f{Γ(n + α + 1)}{Γ(n + 1) Γ(α + 1)} ≈ #f{n^{α}}{Γ(α + 1)}   (n → ∞)',
  ['This follows from `Γ(n + a)/Γ(n) ≈ n^{a}`. For α = 1/2 and n = 100 the exact value is 11.33 and the estimate 11.28. The growth is balanced by the weight: `(1 − x)^{α}P_n^2` stays of moderate size.','وهذا يأتي من `Γ(n + a)/Γ(n) ≈ n^{a}`. وعند α = 1/2 و n = 100 القيمة المضبوطة 11.33 والتقدير 11.28. والنمو يوازنه الوزن: `(1 − x)^{α}P_n^2` يبقى معتدل الحجم.'],
],[
  Q('Estimate `P_{100}^{(1/2,0)}(1)`.','قدّر `P_{100}^{(1/2,0)}(1)`.','≈ 11.28',['#f{100^{1/2}}{Γ(3/2)} = #f{10}{0.8862}',['The exact value is 11.33.','والقيمة المضبوطة 11.33.']],['≈ 1','≈ 100','≈ 5.64']),
  Q('Compare the exact `P_{10}^{(2,0)}(1)` with the estimate.','قارن القيمة المضبوطة `P_{10}^{(2,0)}(1)` بالتقدير.','66  vs  50',['C(12, 10) = 66,   #f{10^2}{Γ(3)} = 50',['For small n the estimate is rough; the ratio tends to 1 as n grows.','عند n صغير التقدير خشن، والنسبة تقترب من 1 بزيادة n.']],['66  vs  66','50  vs  66','10  vs  50']),
  Q('How does `P_n^{(1,0)}(1)` grow?','كيف تنمو `P_n^{(1,0)}(1)`؟',['Like n (exactly n + 1)','مثل n (تماماً n + 1)'],['C(n + 1, n) = n + 1'],[['Like `n^2`','مثل `n^2`'],['It is constant','ثابتة']]),
  Q('For α = −1/2, what happens to `P_n^{(α,β)}(1)` as n → ∞?','عند α = −1/2 ماذا يحدث لـ `P_n^{(α,β)}(1)` عندما n → ∞؟',['It tends to 0 like `1/#r{πn}`','تقترب من 0 مثل `1/#r{πn}`'],['#f{n^{−1/2}}{Γ(1/2)} = #f{1}{#r{πn}}'],['→ ∞','→ 1','→ #f{1}{2}']),
]);

lesson('503',39,[
  ['For large n, inside the interval, Jacobi polynomials behave like modulated cosines (Darboux’s formula). With `x = cos θ`, `N = n + (α + β + 1)/2`:','عند n كبير وداخل المجال تسلك كثيرات جاكوبي سلوك جيوب تمام مُعدَّلة (صيغة داربو). ومع `x = cos θ` و `N = n + (α + β + 1)/2`:'],
  'P_n^{(α,β)}(cos θ) ≈ #f{cos(Nθ − (α + 1/2)π/2)}{#r{πn} sin^{α+1/2}(θ/2) cos^{β+1/2}(θ/2)}',
  ['So the amplitude decays like `n^{−1/2}` inside, the zeros are nearly equally spaced in θ, and near the ends the factors `sin(θ/2)` and `cos(θ/2)` explain the end growth. For Legendre at x = 0 and n = 100 the formula gives 0.0798, close to the exact 0.0796.','فتتناقص السعة مثل `n^{−1/2}` في الداخل، والجذور شبه متساوية التباعد في θ، وقرب الطرفين يفسر العاملان `sin(θ/2)` و `cos(θ/2)` النمو الطرفي. ولليجندر عند x = 0 و n = 100 تعطي الصيغة 0.0798 قريباً من القيمة المضبوطة 0.0796.'],
],[
  Q('Apply the formula to Legendre at x = 0, n = 100.','طبّق الصيغة على ليجندر عند x = 0 و n = 100.','≈ 0.0798',['θ = #f{π}{2},   N = 100.5:   cos(50.25π − #f{π}{4}) = cos 50π = 1','#f{1}{#r{100π}·(sin #f{π}{4})^{1/2}(cos #f{π}{4})^{1/2}} = #f{1}{17.72·0.7071}'],['≈ 0.0564','≈ 0.1128','≈ 1']),
  Q('How does the amplitude inside the interval decay with n?','كيف تتناقص السعة داخل المجال مع n؟',['Like `n^{−1/2}`','مثل `n^{−1/2}`'],[['From the factor `1/#r{πn}`.','من العامل `1/#r{πn}`.']],[['Like `n^{−1}`','مثل `n^{−1}`'],['It does not decay','لا تتناقص']]),
  Q('What is the spacing of consecutive zeros in θ for large n?','ما التباعد بين الجذور المتتالية في θ عند n كبير؟','≈ #f{π}{N}',[['Between two zeros of the cosine, Nθ changes by π.','بين جذرين لجيب التمام يتغير Nθ بمقدار π.']],['≈ #f{1}{n}','≈ #f{π}{n^2}','≈ #f{2}{n}']),
  Q('What is N for Chebyshev (α = β = −1/2)?','ما N لتشيبيشيف (α = β = −1/2)؟','N = n',['n + #f{−1/2 − 1/2 + 1}{2} = n',['Then the formula is exact: `cos nθ` up to the constant factor.','وعندها الصيغة مضبوطة: `cos nθ` حتى العامل الثابت.']],['N = n + #f{1}{2}','N = n − 1','N = 2n']),
]);

lesson('503',40,[
  ['A problem session that combines the laws of Units 1–4: end values, symmetry, the derivative law, the recurrence, norms and expansions. When a result is in doubt, test it with α = β = 0 (Legendre) or α = β = ±1/2 (Chebyshev), and at x = ±1.',
   'حصة مسائل تجمع قوانين الوحدات 1–4: القيم الطرفية والتماثل وقانون المشتقة وعلاقة التكرار والمعايير والمفكوكات. وعند الشك في نتيجة اختبرها مع α = β = 0 (ليجندر) أو α = β = ±1/2 (تشيبيشيف)، وعند x = ±1.'],
  'P_n(1) = C(n + α, n),   P_n(−x) = (−1)^n P_n^{(β,α)}(x),   P_n′ = #f{n + α + β + 1}{2}P_{n−1}^{(α+1,β+1)}',
],[
  Q('Find `#f{d}{dx}P_3^{(1,0)}` at x = 1.','أوجد `#f{d}{dx}P_3^{(1,0)}` عند x = 1.','15',['#f{3 + 1 + 0 + 1}{2}P_2^{(2,1)}(1) = #f{5}{2}C(4, 2) = #f{5}{2}·6'],['10','6','5']),
  Q('Find `P_3^{(0,1)}(−1)`.','أوجد `P_3^{(0,1)}(−1)`.','−4',['(−1)^3 C(4, 3)'],['4','−1','−3']),
  Q('Find `h_1` for α = 1, β = 0.','أوجد `h_1` عند α = 1 و β = 0.','1',['#f{2^2}{4}·#f{Γ(3)Γ(2)}{1!·Γ(3)} = 1',['Check: `∫_{−1}^{1}(1 − x)(3x + 1)^2/4 dx = 1`.','تحقق: `∫_{−1}^{1}(1 − x)(3x + 1)^2/4 dx = 1`.']],['#f{4}{3}','#f{2}{3}','2']),
  Q('Find the eigenvalue of `P_3^{(1,0)}` in the Jacobi equation.','أوجد القيمة الذاتية لـ `P_3^{(1,0)}` في معادلة جاكوبي.','15',['3(3 + 1 + 0 + 1) = 15'],['12','9','18']),
]);

/* ---- 503 · Unit 5 (lessons 41–50): zeros and quadrature ---- */
lesson('503',41,[
  ['Like every orthogonal family, `P_n^{(α,β)}` has n real, simple zeros, all inside `(−1, 1)`. The proof: if `P_n` changed sign at only m < n points `x_1, …, x_m`, then `q = Π(x − x_k)` would make `w P_n q` of one sign, so `∫ w P_n q dx ≠ 0`, contradicting orthogonality to polynomials of lower degree.',
   'ككل عائلة متعامدة، لـ `P_n^{(α,β)}` عدد n من الجذور الحقيقية البسيطة وكلها داخل `(−1, 1)`. والبرهان: لو غيّرت `P_n` إشارتها عند m < n نقطة فقط `x_1, …, x_m` لجعلت `q = Π(x − x_k)` الحاصل `w P_n q` بإشارة واحدة، فيكون `∫ w P_n q dx ≠ 0`، وهذا يناقض التعامد مع الكثيرات الأقل درجة.'],
  'P_1^{(α,β)}(x) = 0   ⇔   x = #f{β − α}{α + β + 2}',
],[
  Q('Find the zero of `P_1^{(1,0)}`.','أوجد جذر `P_1^{(1,0)}`.','x = −#f{1}{3}',['#f{0 − 1}{1 + 0 + 2}'],['x = #f{1}{3}','x = 0','x = −#f{1}{2}']),
  Q('Find the zeros of `P_2^{(1,1)} = (15x^2 − 3)/4`.','أوجد جذور `P_2^{(1,1)} = (15x^2 − 3)/4`.','x = ±#f{1}{#r{5}} ≈ ±0.4472',['x^2 = #f{3}{15} = #f{1}{5}'],['x = ±#f{1}{#r{3}}','x = ±#f{1}{5}','x = ±#r{#f{3}{5}}']),
  Q('Find the zero of `P_1^{(0,1)}`.','أوجد جذر `P_1^{(0,1)}`.','x = #f{1}{3}',['#f{1 − 0}{3}'],['x = −#f{1}{3}','x = 0','x = #f{2}{3}']),
  Q('How many zeros does `P_7^{(2,3)}` have in `(−1, 1)`?','كم جذراً لـ `P_7^{(2,3)}` في `(−1, 1)`؟','7',[['All n zeros are real, simple and inside the interval.','كل الجذور الـ n حقيقية بسيطة وداخل المجال.']],['5','9','3']),
]);

lesson('503',42,[
  ['The zeros of `P_n` and `P_{n+1}` interlace, and they move continuously with the parameters: increasing α moves every zero towards −1 (away from the end where the weight `(1 − x)^α` vanishes), increasing β moves them towards +1.','جذور `P_n` و `P_{n+1}` متشابكة، وتتحرك باستمرار مع الوسيطين: زيادة α تحرك كل جذر نحو −1 (بعيداً عن الطرف الذي ينعدم عنده الوزن `(1 − x)^α`)، وزيادة β تحركها نحو +1.'],
  'P_1^{(α,0)}:   x = −#f{α}{α + 2} = 0,  −#f{1}{3},  −#f{1}{2}   (α = 0, 1, 2)',
  ['This is why the choice of α, β changes where the collocation points cluster.','ولهذا يغيّر اختيار α و β مكان تكاثف نقاط التجميع.'],
],[
  Q('Find the zeros of `P_2^{(1,0)} = 5x^2/2 + x − 1/2`.','أوجد جذور `P_2^{(1,0)} = 5x^2/2 + x − 1/2`.','x ≈ −0.6899,   0.2899',['5x^2 + 2x − 1 = 0  ⇒  x = #f{−2 ± #r{24}}{10}'],['x ≈ ±0.4472','x ≈ −0.2899,   0.6899','x ≈ −1,   0.2']),
  Q('Check that they interlace with the zero −1/3 of `P_1^{(1,0)}`.','تحقق أنها متشابكة مع الجذر −1/3 لـ `P_1^{(1,0)}`.',['Yes: −0.6899 < −0.3333 < 0.2899','نعم: −0.6899 < −0.3333 < 0.2899'],[['Exactly one zero of `P_1` lies between the two zeros of `P_2`.','يقع جذر واحد تماماً لـ `P_1` بين جذري `P_2`.']],[['No','لا']]),
  Q('Find the zero of `P_1^{(2,0)}`.','أوجد جذر `P_1^{(2,0)}`.','x = −#f{1}{2}',['−#f{2}{2 + 2}'],['x = −#f{1}{3}','x = #f{1}{2}','x = −#f{2}{3}']),
  Q('If β increases with α fixed, in which direction do the zeros move?','إذا زادت β مع ثبات α ففي أي اتجاه تتحرك الجذور؟',['Towards x = 1','نحو x = 1'],['P_1^{(0,β)}:   x = #f{β}{β + 2}'],[['Towards x = −1','نحو x = −1'],['They do not move','لا تتحرك']]),
]);

lesson('503',43,[
  ['The zeros are computed by Newton’s method with values and derivatives from the recurrence and the derivative law:','تُحسب الجذور بطريقة نيوتن بقيم ومشتقات من علاقة التكرار وقانون المشتقة:'],
  'x_{k+1} = x_k − #f{P_n(x_k)}{P_n′(x_k)}',
  ['Good starting values are the Chebyshev-like guesses `cos((4i − 1)π/(4n + 2))` adjusted for α, β, or the zeros of `P_{n−1}` (interlacing). Newton converges quadratically, so three or four steps give full precision.','والقيم الابتدائية الجيدة تخمينات شبيهة بتشيبيشيف `cos((4i − 1)π/(4n + 2))` معدّلة حسب α و β، أو جذور `P_{n−1}` (التشابك). ونيوتن يتقارب تربيعياً فتكفي ثلاث أو أربع خطوات لدقة كاملة.'],
],[
  Q('Do one Newton step for `P_2^{(1,1)} = (15x^2 − 3)/4` from `x_0 = 0.5`.','نفذ خطوة نيوتن واحدة لـ `P_2^{(1,1)} = (15x^2 − 3)/4` من `x_0 = 0.5`.','x_1 = 0.45',['P(0.5) = #f{3.75 − 3}{4} = 0.1875,   P′(0.5) = 7.5·0.5 = 3.75','x_1 = 0.5 − 0.05'],['x_1 = 0.4472','x_1 = 0.55','x_1 = 0.4']),
  Q('Do a second step from `x_1 = 0.45`.','نفذ خطوة ثانية من `x_1 = 0.45`.','x_2 ≈ 0.447222',['P(0.45) = #f{3.0375 − 3}{4} = 0.009375,   P′ = 3.375','x_2 = 0.45 − 0.002778'],['x_2 = 0.45','x_2 ≈ 0.4444','x_2 ≈ 0.4528']),
  Q('The exact zero is `1/#r{5} = 0.4472136`. How many correct digits did each step give?','الجذر المضبوط `1/#r{5} = 0.4472136`. كم رقماً صحيحاً أعطت كل خطوة؟',['About 1, then about 4: the digits roughly double','نحو رقم ثم نحو أربعة: الأرقام تتضاعف تقريباً'],['|0.45 − 0.44721| ≈ 2.8 × 10^{−3},   |0.447222 − 0.4472136| ≈ 8 × 10^{−6}'],[['No improvement','لا تحسن'],['One digit per step','رقم في كل خطوة']]),
  Q('Which law gives `P_n′` needed in Newton’s method?','أي قانون يعطي `P_n′` اللازمة في طريقة نيوتن؟','P_n′ = #f{n + α + β + 1}{2} P_{n−1}^{(α+1,β+1)}',[['The derivative is again a Jacobi polynomial, evaluated by its own recurrence.','المشتقة كثيرة جاكوبي أيضاً تُحسب بعلاقة تكرارها.']],['P_n′ = n P_{n−1}','P_n′ = (2n + 1)P_{n−1}','P_n′ = #f{n}{2}P_{n−1}^{(α,β)}']),
]);

lesson('503',44,[
  ['As in Course 501, the Gauss nodes are the eigenvalues of the Jacobi matrix of the recurrence of the orthonormal polynomials (Golub–Welsch):','كما في المقرر 501، عقد جاوس هي القيم الذاتية لمصفوفة جاكوبي لعلاقة تكرار الكثيرات المتعامدة المعيارية (Golub–Welsch):'],
  'x_i = λ_i(J_n),   w_i = μ_0 v_{1i}^2,   μ_0 = h_0',
  ['For the Jacobi weight the diagonal is `a_k = (β^2 − α^2)/((2k + α + β)(2k + α + β + 2))`, zero when α = β. The weights are the total mass `μ_0` times the squared first components of the normalised eigenvectors.','ولوزن جاكوبي يكون القطر `a_k = (β^2 − α^2)/((2k + α + β)(2k + α + β + 2))`، وهو صفر عندما α = β. والأوزان هي الكتلة الكلية `μ_0` مضروبة في مربعات المركبات الأولى للمتجهات الذاتية المعيارية.'],
],[
  Q('Find `a_0` for α = 1, β = 0, and compare with the zero of `P_1^{(1,0)}`.','أوجد `a_0` عند α = 1 و β = 0، وقارنه بجذر `P_1^{(1,0)}`.','a_0 = −#f{1}{3}',['#f{0 − 1}{(1)(3)}',['`J_1 = (a_0)`, so the one-point node is `−1/3`, the zero of `P_1^{(1,0)}`.','`J_1 = (a_0)` فعقدة النقطة الواحدة `−1/3` وهي جذر `P_1^{(1,0)}`.']],['a_0 = #f{1}{3}','a_0 = 0','a_0 = −1']),
  Q('What is the diagonal of `J_n` when α = β?','ما قطر `J_n` عندما α = β؟','0',['β^2 − α^2 = 0'],['1','#f{1}{2}','α']),
  Q('What is `μ_0` for α = β = 1?','ما `μ_0` عند α = β = 1؟','#f{4}{3}',['∫_{−1}^{1}(1 − x^2) dx'],['2','#f{2}{3}','π']),
  Q('For a symmetric two-point rule, the eigenvectors are `(1, ±1)/#r{2}`. Find the weights for α = β = 1.','لقاعدة متماثلة بنقطتين المتجهات الذاتية `(1, ±1)/#r{2}`. أوجد الأوزان عند α = β = 1.','#f{2}{3},   #f{2}{3}',['μ_0·#f{1}{2} = #f{4}{3}·#f{1}{2}'],['1,   1','#f{4}{3},   #f{4}{3}','#f{1}{3},   #f{1}{3}']),
]);

lesson('503',45,[
  ['The Gauss–Jacobi rule uses the n zeros of `P_n^{(α,β)}` and integrates the weight exactly:','قاعدة جاوس–جاكوبي تستخدم جذور `P_n^{(α,β)}` الـ n وتكامل الوزن بدقة:'],
  '∫_{−1}^{1} (1 − x)^α(1 + x)^β f(x) dx ≈ Σ_{i=1}^{n} w_i f(x_i)',
  ['The rule is exact whenever f is a polynomial of degree ≤ 2n − 1.','والقاعدة مضبوطة متى كانت f كثيرة حدود درجتها ≤ 2n − 1.'],
  ['The proof is the same as for Gauss–Legendre: divide f by `P_n` and use orthogonality. The one-point rule is `μ_0 f((β − α)/(α + β + 2))`.','والبرهان كما في جاوس–ليجندر: نقسم f على `P_n` ونستخدم التعامد. وقاعدة النقطة الواحدة `μ_0 f((β − α)/(α + β + 2))`.'],
],[
  Q('Check the one-point rule for α = 1, β = 0 on f = x.','تحقق من قاعدة النقطة الواحدة عند α = 1 و β = 0 على f = x.','−#f{2}{3}',['μ_0 = 2,   x_1 = −#f{1}{3}:   2·(−#f{1}{3})','∫_{−1}^{1}(1 − x)x dx = 0 − #f{2}{3}'],['0','#f{2}{3}','−#f{1}{3}']),
  Q('Apply the two-point rule for α = β = 1 (nodes `±1/#r{5}`, weights 2/3) to `f = x^2`.','طبّق قاعدة النقطتين عند α = β = 1 (العقدتان `±1/#r{5}` والوزنان 2/3) على `f = x^2`.','#f{4}{15}',['2·#f{2}{3}·#f{1}{5} = #f{4}{15}','∫_{−1}^{1}(1 − x^2)x^2 dx = #f{2}{3} − #f{2}{5} = #f{4}{15}'],['#f{2}{15}','#f{2}{5}','#f{8}{15}']),
  Q('Up to which degree is the four-point Gauss–Jacobi rule exact?','حتى أي درجة تكون قاعدة جاوس–جاكوبي ذات النقاط الأربع مضبوطة؟','7',['2n − 1'],['4','8','5']),
  Q('Apply the two-point rule for α = β = 1 to `f = x^4` and compare with the exact value.','طبّق قاعدة النقطتين عند α = β = 1 على `f = x^4` وقارنها بالقيمة المضبوطة.','#f{4}{75}  vs  #f{4}{35}',['2·#f{2}{3}·#f{1}{25} = #f{4}{75}','∫_{−1}^{1}(1 − x^2)x^4 dx = #f{2}{5} − #f{2}{7} = #f{4}{35}',['Degree 4 > 3, so the rule is no longer exact.','الدرجة 4 > 3 فلم تعد القاعدة مضبوطة.']],['#f{4}{35}  vs  #f{4}{35}','#f{4}{15}  vs  #f{4}{35}','0  vs  #f{4}{35}']),
]);

lesson('503',46,[
  ['The Gauss–Jacobi weights have a closed form in terms of the derivative at the nodes:','لأوزان جاوس–جاكوبي صيغة مغلقة بدلالة المشتقة عند العقد:'],
  'w_i = #f{2^{α+β+1} Γ(n + α + 1) Γ(n + β + 1)}{n! Γ(n + α + β + 1)}·#f{1}{(1 − x_i^2)[P_n′(x_i)]^2}',
  ['With α = β = 0 it reduces to `2/((1 − x_i^2)P_n′(x_i)^2)` of Course 501. All weights are positive.','ومع α = β = 0 تؤول إلى `2/((1 − x_i^2)P_n′(x_i)^2)` في المقرر 501. وكل الأوزان موجبة.'],
],[
  Q('Use the formula for n = 1, α = 1, β = 0.','استخدم الصيغة عند n = 1 و α = 1 و β = 0.','w = 2',['#f{2^2 Γ(3)Γ(2)}{1!·Γ(3)} = 4,   1 − x^2 = #f{8}{9},   P_1′ = #f{3}{2}','w = #f{4}{#f{8}{9}·#f{9}{4}} = 2'],['w = 1','w = 4','w = #f{4}{3}']),
  Q('Use the formula for the two-point rule with α = β = 1.','استخدم الصيغة لقاعدة النقطتين مع α = β = 1.','w = #f{2}{3}',['#f{2^3 Γ(4)Γ(4)}{2!·Γ(5)} = #f{8·36}{48} = 6','P_2′(#f{1}{#r{5}}) = 7.5·0.4472 = 3.354,   1 − x^2 = #f{4}{5}','w = #f{6}{0.8·11.25} = #f{6}{9}'],['w = 1','w = #f{4}{3}','w = #f{1}{3}']),
  Q('Reduce the constant in front to Legendre.','اختصر الثابت في المقدمة إلى ليجندر.','2',['α = β = 0:   #f{2·n!·n!}{n!·n!}'],['1','#f{2}{2n + 1}','n']),
  Q('Why are Gauss–Jacobi weights always positive?','لماذا تكون أوزان جاوس–جاكوبي موجبة دائماً؟',['They are integrals of the squares of Lagrange functions: `w_i = ∫ w ℓ_i^2 dx > 0`','لأنها تكاملات مربعات دوال لاجرانج: `w_i = ∫ w ℓ_i^2 dx > 0`'],[['`ℓ_i^2` has degree 2n − 2, so the rule integrates it exactly and gives `w_i`.','`ℓ_i^2` درجتها 2n − 2، فالقاعدة تكاملها بدقة وتعطي `w_i`.']],[['Because the nodes are positive','لأن العقد موجبة']]),
]);

lesson('503',47,[
  ['The weights add up to the total mass of the Jacobi weight (exactness for f = 1):','مجموع الأوزان هو الكتلة الكلية لوزن جاكوبي (الضبط عند f = 1):'],
  'Σ_i w_i = μ_0 = 2^{α+β+1} #f{Γ(α + 1) Γ(β + 1)}{Γ(α + β + 2)}',
  ['This is a cheap check of any computed rule, and it shows how the weight changes the scale: for α = β = −1/2 the weights add up to π, for α = β = 1 to 4/3.','وهذا فحص رخيص لأي قاعدة محسوبة، ويبيّن كيف يغيّر الوزن المقياس: عند α = β = −1/2 مجموع الأوزان π، وعند α = β = 1 يساوي 4/3.'],
],[
  Q('Find `Σ w_i` for α = 1, β = 0.','أوجد `Σ w_i` عند α = 1 و β = 0.','2',['2^2·#f{Γ(2)Γ(1)}{Γ(3)} = 4·#f{1}{2}'],['1','4','#f{4}{3}']),
  Q('Find `Σ w_i` for α = β = −1/2.','أوجد `Σ w_i` عند α = β = −1/2.','π',['2^0·#f{Γ(1/2)^2}{Γ(1)} = π'],['2','#f{π}{2}','1']),
  Q('Find `Σ w_i` for α = 2, β = 0.','أوجد `Σ w_i` عند α = 2 و β = 0.','#f{8}{3}',['2^3·#f{Γ(3)Γ(1)}{Γ(4)} = 8·#f{2}{6}'],['#f{4}{3}','2','4']),
  Q('Find `Σ w_i` for α = 1/2, β = 0.','أوجد `Σ w_i` عند α = 1/2 و β = 0.','#f{4#r{2}}{3} ≈ 1.8856',['2^{3/2}·#f{Γ(3/2)Γ(1)}{Γ(5/2)} = 2#r{2}·#f{2}{3}'],['2','#r{2}','1.5']),
]);

lesson('503',48,[
  ['Gauss–Jacobi–Radau rules fix one end. With the node x = −1 fixed, the other n − 1 nodes are the zeros of `P_{n−1}^{(α,β+1)}`; the rule is exact for degree ≤ 2n − 2. With x = +1 fixed, use `P_{n−1}^{(α+1,β)}`.','قواعد جاوس–جاكوبي–رادو تثبّت طرفاً. ومع تثبيت العقدة x = −1 تكون العقد الأخرى n − 1 جذور `P_{n−1}^{(α,β+1)}`، والقاعدة مضبوطة للدرجة ≤ 2n − 2. ومع تثبيت x = +1 نستخدم `P_{n−1}^{(α+1,β)}`.'],
  'x_0 = −1,   P_{n−1}^{(α,β+1)}(x_i) = 0',
  ['The extra factor `(1 + x)` in the weight of the free nodes is what makes room for the fixed node. For α = β = 0 and n = 2 the free node is the zero `1/3` of `P_1^{(0,1)}`, the Radau rule of Course 501.','والعامل الإضافي `(1 + x)` في وزن العقد الحرة هو ما يفسح المجال للعقدة الثابتة. وعند α = β = 0 و n = 2 تكون العقدة الحرة الجذر `1/3` لـ `P_1^{(0,1)}`، وهي قاعدة رادو في المقرر 501.'],
],[
  Q('Find the free node of the two-point Legendre–Radau rule fixed at −1.','أوجد العقدة الحرة لقاعدة ليجندر–رادو ذات النقطتين المثبتة عند −1.','x = #f{1}{3}',['P_1^{(0,1)} = 0  ⇒  x = #f{1}{3}'],['x = −#f{1}{3}','x = 0','x = #f{1}{#r{3}}']),
  Q('Up to which degree is the three-point Radau rule exact?','حتى أي درجة تكون قاعدة رادو ذات النقاط الثلاث مضبوطة؟','4',['2n − 2'],['5','3','6']),
  Q('Which polynomial gives the free nodes when x = +1 is fixed?','أي كثيرة حدود تعطي العقد الحرة عند تثبيت x = +1؟','P_{n−1}^{(α+1,β)}',[['The fixed end x = 1 adds the factor `(1 − x)`, raising α.','الطرف الثابت x = 1 يضيف العامل `(1 − x)` فيرتفع α.']],['P_{n−1}^{(α,β+1)}','P_n^{(α,β)}','P_{n−2}^{(α+1,β+1)}']),
  Q('Find the free node for α = 1, β = 0 and n = 2, fixed at −1.','أوجد العقدة الحرة عند α = 1 و β = 0 و n = 2 مع التثبيت عند −1.','x = 0',['P_1^{(1,1)} = 2x = 0'],['x = −#f{1}{3}','x = #f{1}{3}','x = #f{1}{2}']),
]);

lesson('503',49,[
  ['Gauss–Jacobi–Lobatto rules fix both ends; the interior nodes are the zeros of `P_{n−2}^{(α+1,β+1)}`, and the rule is exact for degree ≤ 2n − 3.','قواعد جاوس–جاكوبي–لوباتو تثبّت الطرفين، والعقد الداخلية جذور `P_{n−2}^{(α+1,β+1)}`، والقاعدة مضبوطة للدرجة ≤ 2n − 3.'],
  'x_0 = −1,   x_{n−1} = 1,   P_{n−2}^{(α+1,β+1)}(x_i) = 0',
  ['By the derivative law these interior nodes are the extrema of `P_{n−1}^{(α,β)}`. For Legendre (α = β = 0) they are the zeros of `P_{n−1}′`, as in Course 501.','وبقانون المشتقة هذه العقد الداخلية هي القيم القصوى لـ `P_{n−1}^{(α,β)}`. ولليجندر (α = β = 0) هي جذور `P_{n−1}′` كما في المقرر 501.'],
],[
  Q('Find the interior node of the three-point Legendre–Lobatto rule.','أوجد العقدة الداخلية لقاعدة ليجندر–لوباتو ذات النقاط الثلاث.','x = 0',['P_1^{(1,1)} = 2x'],['x = ±#f{1}{#r{5}}','x = #f{1}{3}','x = #f{1}{2}']),
  Q('Find the interior nodes of the four-point Legendre–Lobatto rule.','أوجد العقد الداخلية لقاعدة ليجندر–لوباتو ذات النقاط الأربع.','x = ±#f{1}{#r{5}}',['P_2^{(1,1)} = #f{15x^2 − 3}{4} = 0'],['x = ±#f{1}{#r{3}}','x = 0, ±1','x = ±#r{#f{3}{5}}']),
  Q('Up to which degree is the five-point Lobatto rule exact?','حتى أي درجة تكون قاعدة لوباتو ذات النقاط الخمس مضبوطة؟','7',['2n − 3'],['9','8','5']),
  Q('Why are the interior Lobatto nodes the extrema of `P_{n−1}^{(α,β)}`?','لماذا العقد الداخلية للوباتو هي القيم القصوى لـ `P_{n−1}^{(α,β)}`؟',['Because `P_{n−1}′ ∝ P_{n−2}^{(α+1,β+1)}`','لأن `P_{n−1}′ ∝ P_{n−2}^{(α+1,β+1)}`'],[['The derivative law turns zeros of the derivative into zeros of the raised family.','قانون المشتقة يحوّل جذور المشتقة إلى جذور العائلة المرفوعة.']],[['By symmetry','بالتماثل'],['They are not','ليست كذلك']]),
]);

lesson('503',50,[
  ['Gauss–Jacobi rules integrate end singularities of power type exactly, by putting them into the weight. For example, with α = 1/2, β = 0:','قواعد جاوس–جاكوبي تكامل الانفرادات الطرفية من نوع القوى بدقة بإدخالها في الوزن. فمثلاً مع α = 1/2 و β = 0:'],
  '∫_{−1}^{1} #r{1 − x} f(x) dx ≈ Σ w_i f(x_i)',
  ['The one-point rule already gives `∫ #r{1 − x} dx = 4#r{2}/3 ≈ 1.8856` exactly, while the plain three-point Gauss–Legendre rule on `#r{1 − x}` gives 1.8927, an error of 0.007, because the square root has an infinite derivative at x = 1.','وقاعدة النقطة الواحدة تعطي مسبقاً `∫ #r{1 − x} dx = 4#r{2}/3 ≈ 1.8856` بدقة، بينما تعطي قاعدة جاوس–ليجندر العادية ذات النقاط الثلاث على `#r{1 − x}` القيمة 1.8927 بخطأ 0.007، لأن للجذر التربيعي مشتقة لانهائية عند x = 1.'],
],[
  Q('Use the one-point rule (α = 1/2, β = 0) for `∫_{−1}^{1} x#r{1 − x} dx`.','استخدم قاعدة النقطة الواحدة (α = 1/2 و β = 0) لـ `∫_{−1}^{1} x#r{1 − x} dx`.','≈ −0.3771',['x_1 = #f{0 − 1/2}{5/2} = −0.2,   μ_0 = 1.8856','1.8856·(−0.2) ≈ −0.3771',['Exact, since f = x has degree 1.','مضبوطة لأن f = x درجتها 1.']],['≈ 0.3771','0','≈ −1.8856']),
  Q('Plain three-point Gauss gives 1.8927 for `∫_{−1}^{1} #r{1 − x} dx`. Find its error.','قاعدة جاوس العادية بثلاث نقاط تعطي 1.8927 لـ `∫_{−1}^{1} #r{1 − x} dx`. أوجد خطأها.','≈ 0.0071',['|1.8927 − 1.8856|'],['0','≈ 0.071','≈ 0.0007']),
  Q('Which parameters treat `(1 + x)^{−0.3}`?','أي وسيطين يعالجان `(1 + x)^{−0.3}`؟','α = 0,   β = −0.3',[['The singular factor sits at x = −1.','العامل الشاذ عند x = −1.']],['α = −0.3,   β = 0','α = β = −0.3','α = 0.3,   β = 0']),
  Q('For `∫_0^1 t^{−1/2} g(t) dt`, which Jacobi weight appears after `t = (x + 1)/2`?','للتكامل `∫_0^1 t^{−1/2} g(t) dt` أي وزن لجاكوبي يظهر بعد `t = (x + 1)/2`؟','(1 + x)^{−1/2}:   α = 0,   β = −#f{1}{2}',['t^{−1/2} = #r{2}(1 + x)^{−1/2}'],['(1 − x)^{−1/2}:   α = −#f{1}{2},   β = 0','(1 − x^2)^{−1/2}','1']),
]);

export const MS503 = true;
