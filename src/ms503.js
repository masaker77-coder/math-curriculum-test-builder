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

export const MS503 = true;
