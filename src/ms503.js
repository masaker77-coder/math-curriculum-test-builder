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

export const MS503 = true;
