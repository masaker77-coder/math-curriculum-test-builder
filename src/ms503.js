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

/* ---- 503 · Unit 6 (lessons 51–60): series;  Unit 7 (lessons 61–70): shifted and fractional forms ---- */
lesson('503',51,[
  ['A function is expanded in Jacobi polynomials with coefficients given by weighted inner products:','تُنشر الدالة بكثيرات جاكوبي بمعاملات تعطيها الضروب الداخلية الموزونة:'],
  'f = Σ_{n=0}^{∞} c_n P_n^{(α,β)},   c_n = #f{⟨f, P_n⟩_w}{h_n} = #f{1}{h_n} ∫_{−1}^{1} (1 − x)^α(1 + x)^β f P_n dx',
  ['The coefficients depend on the weight: the same f has different expansions for different (α, β), each optimal in its own weighted norm.','والمعاملات تعتمد على الوزن: للدالة نفسها مفكوكات مختلفة لكل (α, β)، كل منها أمثل في معياره الموزون.'],
],[
  Q('For α = 1, β = 0, compute `c_0` of `f = x`.','عند α = 1 و β = 0 احسب `c_0` للدالة `f = x`.','−#f{1}{3}',['⟨x, 1⟩_w = ∫_{−1}^{1}(1 − x)x dx = −#f{2}{3},   h_0 = 2'],['0','#f{1}{3}','−#f{2}{3}']),
  Q('For α = 1, β = 0, compute `c_1` of `f = x` (h_1 = 1).','عند α = 1 و β = 0 احسب `c_1` للدالة `f = x` (h_1 = 1).','#f{2}{3}',['⟨x, P_1⟩_w = ∫_{−1}^{1}(1 − x)x#f{3x + 1}{2} dx = #f{2}{3}',['Check: `x = −1/3 + (2/3)P_1^{(1,0)}`.','تحقق: `x = −1/3 + (2/3)P_1^{(1,0)}`.']],['1','#f{1}{3}','#f{3}{2}']),
  Q('What is `c_0` of f = 1 in any Jacobi family?','ما `c_0` للدالة f = 1 في أي عائلة جاكوبي؟','1',['#f{⟨1, 1⟩_w}{h_0} = #f{h_0}{h_0}'],['h_0','0','2']),
  Q('For Legendre, `c_0` of `f = x` is 0. Why is it −1/3 for α = 1, β = 0?','لليجندر `c_0` للدالة `f = x` يساوي 0. لماذا هو −1/3 عند α = 1 و β = 0؟',['The weight `1 − x` favours negative x, so the weighted mean of x is negative','الوزن `1 − x` يرجّح قيم x السالبة فيكون المتوسط الموزون لـ x سالباً'],[['`c_0` is the weighted mean of f.','`c_0` هو المتوسط الموزون لـ f.']],[['A computing error','خطأ حسابي'],['Because x is odd','لأن x فردية']]),
]);

lesson('503',52,[
  ['The truncated series `S_N f = Σ_{n≤N} c_n P_n` is the best approximation of f in `Π_N` for the weighted norm:','المجموع المقطوع `S_N f = Σ_{n≤N} c_n P_n` أفضل تقريب لـ f في `Π_N` بالمعيار الموزون:'],
  '‖f − S_N f‖_w ≤ ‖f − p‖_w,   ‖f − S_N f‖_w^2 = ‖f‖_w^2 − Σ_{n≤N} c_n^2 h_n',
  ['Changing the weight changes which errors matter: a weight that vanishes at x = 1 tolerates larger errors there. This is useful when the solution is known to be less important, or singular, near an end.','وتغيير الوزن يغيّر الأخطاء المهمة: الوزن الذي ينعدم عند x = 1 يتسامح مع أخطاء أكبر هناك. وهذا مفيد حين يُعرف أن الحل أقل أهمية أو شاذ قرب طرف.'],
],[
  Q('Find the best constant approximation of x with the weight `1 − x`.','أوجد أفضل تقريب ثابت لـ x بالوزن `1 − x`.','−#f{1}{3}',['c_0 = −#f{1}{3}'],['0','#f{1}{3}','−1']),
  Q('Find its weighted error `‖x − c_0‖_w`.','أوجد خطأه الموزون `‖x − c_0‖_w`.','#f{2}{3}',['‖x‖_w^2 = ∫(1 − x)x^2 dx = #f{2}{3},   c_0^2 h_0 = #f{2}{9}','#f{2}{3} − #f{2}{9} = #f{4}{9}  ⇒  #f{2}{3}'],['#f{4}{9}','#r{#f{2}{3}}','0']),
  Q('With the Legendre weight, what is the best constant approximation of x?','بوزن ليجندر ما أفضل تقريب ثابت لـ x؟','0',['c_0 = #f{1}{2}∫_{−1}^{1} x dx = 0'],['−#f{1}{3}','#f{1}{2}','1']),
  Q('To which functions is the error `f − S_N f` orthogonal?','على أي الدوال يكون الخطأ `f − S_N f` عمودياً؟',['To every polynomial of degree ≤ N, in the weighted inner product','على كل كثيرة حدود درجتها ≤ N في الضرب الداخلي الموزون'],[['This is the weighted Pythagoras behind the error formula.','وهذا فيثاغورس الموزون وراء صيغة الخطأ.']],[['To f','على f'],['To nothing','لا شيء']]),
]);

lesson('503',53,[
  ['Parseval’s identity in the weighted space:','متطابقة بارسيفال في الفضاء الموزون:'],
  '‖f‖_w^2 = ∫_{−1}^{1} w f^2 dx = Σ_{n=0}^{∞} c_n^2 h_n',
  ['The truncation error is the tail of the sum, so the decay of `c_n^2 h_n` (not of `c_n` alone) decides the accuracy. Since `h_n` itself depends on α, β and n, compare normalized coefficients `c_n #r{h_n}` when judging convergence.','وخطأ القطع ذيل المجموع، فتناقص `c_n^2 h_n` (لا `c_n` وحدها) يحدد الدقة. ولأن `h_n` نفسها تعتمد على α و β و n نقارن المعاملات المطبّعة `c_n #r{h_n}` عند الحكم على التقارب.'],
],[
  Q('Check Parseval for `f = x` with α = 1, β = 0 (`c_0 = −1/3`, `c_1 = 2/3`, `h_0 = 2`, `h_1 = 1`).','تحقق من بارسيفال للدالة `f = x` مع α = 1 و β = 0 (`c_0 = −1/3` و `c_1 = 2/3` و `h_0 = 2` و `h_1 = 1`).','#f{2}{3}',['#f{1}{9}·2 + #f{4}{9}·1 = #f{6}{9}','∫_{−1}^{1}(1 − x)x^2 dx = #f{2}{3}'],['#f{4}{9}','#f{5}{9}','1']),
  Q('A function has `‖f‖_w^2 = 1` and `Σ_{n≤N} c_n^2 h_n = 0.9999`. Find `‖f − S_N f‖_w`.','دالة فيها `‖f‖_w^2 = 1` و `Σ_{n≤N} c_n^2 h_n = 0.9999`. أوجد `‖f − S_N f‖_w`.','0.01',['#r{1 − 0.9999} = #r{10^{−4}}'],['10^{−4}','0.9999','0.1']),
  Q('Why compare `c_n #r{h_n}` instead of `c_n`?','لماذا نقارن `c_n #r{h_n}` بدل `c_n`؟',['`h_n` varies with n, so only the normalized coefficients measure the contribution to the error','`h_n` تتغير مع n فلا تقيس المساهمة في الخطأ إلا المعاملات المطبّعة'],[['They are the coefficients in the orthonormal basis.','وهي المعاملات في الأساس المتعامد المعياري.']],[['There is no difference','لا فرق']]),
  Q('Compute `‖1‖_w^2` for α = β = 1.','احسب `‖1‖_w^2` عند α = β = 1.','#f{4}{3}',['h_0 = ∫_{−1}^{1}(1 − x^2) dx'],['2','#f{2}{3}','1']),
]);

lesson('503',54,[
  ['For analytic f the Jacobi coefficients decay geometrically, at the same rate ρ for every (α, β): ρ is set by the Bernstein ellipse of the nearest singularity, exactly as for Legendre (Course 501, Lesson 26). The parameters change only algebraic factors such as powers of n.',
   'للدوال التحليلية تتناقص معاملات جاكوبي هندسياً بالمعدل ρ نفسه لكل (α, β): وتحدد ρ قطعُ برنشتاين الناقص لأقرب نقطة شاذة تماماً كما لليجندر (المقرر 501، الدرس 26). والوسيطان لا يغيران إلا عوامل جبرية مثل قوى n.'],
  '|c_n #r{h_n}| ≤ C n^{s} ρ^{−n},   ρ = |z_0 + #r{z_0^2 − 1}|',
  ['So for smooth problems the choice of α, β matters for boundary conditions, conditioning and sparsity, not for the convergence rate.','فللمسائل الملساء يهم اختيار α و β للشروط الحدية والشرط وقلة العناصر، لا لمعدل التقارب.'],
],[
  Q('Find ρ for `f = 1/(x − 3)`.','أوجد ρ للدالة `f = 1/(x − 3)`.','3 + 2#r{2} ≈ 5.83',['3 + #r{9 − 1} = 3 + #r{8}'],['3','#r{8} ≈ 2.83','2']),
  Q('With ρ = 5.83, about how many terms give `10^{−10}`?','مع ρ = 5.83 كم حداً تقريباً يعطي `10^{−10}`؟','≈ 13',['#f{10}{log_{10} 5.83} = #f{10}{0.766} ≈ 13'],['≈ 10','≈ 58','≈ 6']),
  Q('Does changing (α, β) from (0, 0) to (1, 1) change ρ?','هل يغيّر تغيير (α, β) من (0, 0) إلى (1, 1) قيمة ρ؟',['No: ρ depends only on the singularities of f','لا: ρ تعتمد فقط على النقاط الشاذة لـ f'],[['Only factors like a power of n change.','لا تتغير إلا عوامل مثل قوة لـ n.']],[['Yes, it doubles','نعم، تتضاعف']]),
  Q('How do the coefficients of `e^x` decay?','كيف تتناقص معاملات `e^x`؟',['Faster than any `ρ^{−n}`: e^x is entire','أسرع من أي `ρ^{−n}`: e^x دالة صحيحة'],[['Roughly like `1/(2^n n!)`.','تقريباً مثل `1/(2^n n!)`.']],[['Like `n^{−2}`','مثل `n^{−2}`'],['They do not decay','لا تتناقص']]),
]);

lesson('503',55,[
  ['If f has an end singularity, a good choice of Jacobi weight absorbs it. For `f = #r{1 − x} g(x)` with smooth g, the functions `#r{1 − x} P_n^{(1,0)}(x)` are orthogonal in plain `L^2(−1, 1)`:','إذا كان لـ f انفراد طرفي فالاختيار الجيد لوزن جاكوبي يمتصه. فللدالة `f = #r{1 − x} g(x)` مع g ملساء تكون الدوال `#r{1 − x} P_n^{(1,0)}(x)` متعامدة في `L^2(−1, 1)` العادي:'],
  '∫_{−1}^{1} #r{1 − x} P_m^{(1,0)}·#r{1 − x} P_n^{(1,0)} dx = ∫_{−1}^{1} (1 − x) P_m^{(1,0)} P_n^{(1,0)} dx = h_n δ_{mn}',
  ['Expanding g instead of f restores spectral convergence. This is the idea behind the generalized Jacobi functions and the poly-fractonomials of Unit 10.','ونشر g بدل f يعيد التقارب الطيفي. وهذه الفكرة وراء دوال جاكوبي المعممة وكثيرات جاكوبي الكسرية في الوحدة 10.'],
],[
  Q('At what rate do the Legendre coefficients of `#r{1 − x}` decay?','بأي معدل تتناقص معاملات ليجندر للدالة `#r{1 − x}`؟','n^{−2}',[['An end singularity of order 1/2 (Course 501, Lesson 27).','انفراد طرفي من الرتبة 1/2 (المقرر 501، الدرس 27).']],['ρ^{−n}','n^{−1/2}','n^{−1}']),
  Q('Expand `#r{1 − x}(1 + x)` in the functions `#r{1 − x}P_n^{(1,0)}`.','انشر `#r{1 − x}(1 + x)` بالدوال `#r{1 − x}P_n^{(1,0)}`.','#f{2}{3}P_0^{(1,0)} + #f{2}{3}P_1^{(1,0)}',['g = 1 + x = c_0 + c_1#f{3x + 1}{2}','c_1 = #f{2}{3},   c_0 = 1 − #f{1}{3} = #f{2}{3}'],['P_0^{(1,0)} + P_1^{(1,0)}','#f{1}{3}P_0^{(1,0)} + #f{2}{3}P_1^{(1,0)}','2P_1^{(1,0)}']),
  Q('Why are the functions `#r{1 − x}P_n^{(1,0)}` orthogonal with weight 1?','لماذا تتعامد الدوال `#r{1 − x}P_n^{(1,0)}` بالوزن 1؟',['Their product contains `(1 − x)`, the Jacobi weight with α = 1','حاصل ضربها يحتوي `(1 − x)` وهو وزن جاكوبي مع α = 1'],[['The square roots combine into the weight.','الجذور التربيعية تتحد في الوزن.']],[['Because P_n are orthogonal with weight 1','لأن P_n متعامدة بالوزن 1'],['They are not','ليست متعامدة']]),
  Q('How fast does the expansion of `#r{1 − x} e^x` in `#r{1 − x}P_n^{(1,0)}` converge?','بأي سرعة يتقارب مفكوك `#r{1 − x} e^x` بالدوال `#r{1 − x}P_n^{(1,0)}`؟',['Spectrally, like the expansion of the smooth `e^x`','طيفياً مثل مفكوك الدالة الملساء `e^x`'],[['The singular factor is in the basis, not in the expanded function.','العامل الشاذ في الأساس لا في الدالة المنشورة.']],[['Like `n^{−2}`','مثل `n^{−2}`'],['It does not converge','لا يتقارب']]),
]);

lesson('503',56,[
  ['Discrete Jacobi coefficients use the Gauss–Jacobi rule in place of the integrals:','المعاملات المتقطعة لجاكوبي تستخدم قاعدة جاوس–جاكوبي بدل التكاملات:'],
  'c_k ≈ ĉ_k = #f{1}{h_k} Σ_{i=1}^{n} w_i f(x_i) P_k(x_i),   k = 0, …, n − 1',
  ['They are exact when `f P_k` has degree ≤ 2n − 1 for every k ≤ n − 1, that is for every f of degree ≤ n; otherwise higher terms alias onto lower ones (`P_n` is zero at the nodes). The values `f(x_i)` and the coefficients `ĉ_k` are two equivalent descriptions of the interpolant.','وتكون مضبوطة متى كانت درجة `f P_k` ≤ 2n − 1 لكل k ≤ n − 1، أي لكل f درجتها ≤ n، وإلا تُطوى الحدود العليا على الدنيا (`P_n` صفر عند العقد). والقيم `f(x_i)` والمعاملات `ĉ_k` وصفان متكافئان لكثيرة الاستكمال.'],
],[
  Q('With the one-point rule (α = 1, β = 0: node −1/3, weight 2), compute `ĉ_0` for `f = x`.','بقاعدة النقطة الواحدة (α = 1 و β = 0: العقدة −1/3 والوزن 2) احسب `ĉ_0` للدالة `f = x`.','−#f{1}{3}',['#f{1}{2}·2·(−#f{1}{3})·1',['Exact, as computed in Lesson 51.','مضبوط كما حُسب في الدرس 51.']],['0','#f{2}{3}','−#f{2}{3}']),
  Q('With the same rule, compute `ĉ_0` for `f = x^2` and compare with the exact `c_0 = 1/3`.','بالقاعدة نفسها احسب `ĉ_0` للدالة `f = x^2` وقارن بالقيمة المضبوطة `c_0 = 1/3`.','ĉ_0 = #f{1}{9},   c_0 = #f{1}{3}',['ĉ_0 = #f{1}{2}·2·#f{1}{9}','c_0 = #f{1}{2}∫_{−1}^{1}(1 − x)x^2 dx = #f{1}{3}',['Degree 2 > 2n − 1 = 1: the one-point rule is no longer exact.','الدرجة 2 > 2n − 1 = 1: قاعدة النقطة الواحدة لم تعد مضبوطة.']],['ĉ_0 = #f{1}{3},   c_0 = #f{1}{3}','ĉ_0 = #f{1}{9},   c_0 = #f{1}{9}','ĉ_0 = 0,   c_0 = #f{1}{3}']),
  Q('With n nodes, what does `P_n` contribute to the discrete coefficients?','مع n عقدة ماذا تساهم `P_n` في المعاملات المتقطعة؟','0',[['The nodes are the zeros of `P_n`, so all its values vanish.','العقد جذور `P_n` فكل قيمها أصفار.']],['1','h_n','P_n(1)']),
  Q('Up to which degree of f are the discrete coefficients exact with n nodes?','حتى أي درجة لـ f تكون المعاملات المتقطعة مضبوطة مع n عقدة؟','n',['k ≤ n − 1:   deg(f P_k) ≤ n + n − 1 = 2n − 1',['Lesson 51’s `f = x` with one node (n = 1) is exact; `x^2` is not.','الدالة `f = x` في الدرس 51 بعقدة واحدة (n = 1) مضبوطة، و `x^2` ليست كذلك.']],['2n − 1','n − 1','2n']),
]);

lesson('503',57,[
  ['Interpolation at the zeros of `P_n^{(α,β)}` is stable only for suitable parameters. With `γ = max(α, β)`, the Lebesgue constant grows like','الاستكمال عند جذور `P_n^{(α,β)}` مستقر فقط لوسائط مناسبة. ومع `γ = max(α, β)` ينمو ثابت ليبيغ مثل'],
  'Λ_n ~ log n   (γ ≤ −#f{1}{2}),     Λ_n ~ n^{γ+1/2}   (γ > −#f{1}{2})',
  ['So Chebyshev points (γ = −1/2) are optimal, Legendre points (γ = 0) still very good (`#r{n}` growth), and large parameters should be avoided for interpolation, even though they are fine for quadrature.','فنقاط تشيبيشيف (γ = −1/2) مثلى، ونقاط ليجندر (γ = 0) جيدة جداً أيضاً (نمو `#r{n}`)، ويجب تجنب الوسائط الكبيرة في الاستكمال مع أنها جيدة للتربيع.'],
],[
  Q('How does `Λ_n` grow at the Legendre–Gauss points?','كيف ينمو `Λ_n` عند نقاط ليجندر–جاوس؟','~ #r{n}',['γ = 0:   n^{1/2}'],['~ log n','~ n','~ 2^n']),
  Q('How does `Λ_n` grow for α = β = 2?','كيف ينمو `Λ_n` عند α = β = 2؟','~ n^{5/2}',['γ + #f{1}{2} = 2.5'],['~ n^2','~ log n','~ #r{n}']),
  Q('Which parameters give logarithmic growth?','أي الوسائط تعطي نمواً لوغاريتمياً؟',['α, β ≤ −1/2, for example Chebyshev','α, β ≤ −1/2، مثل تشيبيشيف'],[['These points cluster most strongly near ±1.','هذه النقاط تتكاثف بأقوى صورة قرب ±1.']],[['α = β = 1','α = β = 1'],['Any α, β','أي α و β']]),
  Q('Are large α, β bad for Gauss–Jacobi quadrature as well?','هل الوسائط الكبيرة α و β سيئة لتربيع جاوس–جاكوبي أيضاً؟',['No: the weights stay positive and the rule is exact to degree 2n − 1','لا: الأوزان تبقى موجبة والقاعدة مضبوطة حتى الدرجة 2n − 1'],[['Quadrature is stable for every α, β > −1; only interpolation suffers.','التربيع مستقر لكل α, β > −1، والاستكمال وحده يتأثر.']],[['Yes','نعم']]),
]);

lesson('503',58,[
  ['Differentiation matrices at Jacobi points are built exactly as in Course 501, from the barycentric weights `λ_j = 1/Π_{k≠j}(x_j − x_k)`:','مصفوفات التفاضل عند نقاط جاكوبي تُبنى كما في المقرر 501 من الأوزان الباريسنترية `λ_j = 1/Π_{k≠j}(x_j − x_k)`:'],
  'D_{ij} = #f{λ_j/λ_i}{x_i − x_j}  (i ≠ j),     D_{ii} = −Σ_{j≠i} D_{ij}',
  ['Every row sums to zero, the matrix is exact for polynomials of degree < n, and its norm grows like `n^2`. The choice of points (α, β) changes the conditioning but not the construction.','ومجموع كل صف صفر، والمصفوفة مضبوطة لكثيرات الحدود ذات الدرجة < n، ومعيارها ينمو مثل `n^2`. واختيار النقاط (α, β) يغيّر الشرط لا طريقة البناء.'],
],[
  Q('Build D for the nodes `x_0 = −1/#r{5}`, `x_1 = 1/#r{5}` (zeros of `P_2^{(1,1)}`).','ابنِ D للعقدتين `x_0 = −1/#r{5}` و `x_1 = 1/#r{5}` (جذري `P_2^{(1,1)}`).','D = #f{#r{5}}{2}#m{−1, 1 ;; −1, 1}',['ℓ_0′ = #f{1}{x_0 − x_1} = −#f{#r{5}}{2},   ℓ_1′ = #f{#r{5}}{2}',['For two points every row is the same difference quotient.','لنقطتين كل صف هو خارج قسمة الفروق نفسه.']],['D = #f{#r{5}}{2}#m{1, −1 ;; 1, −1}','D = #m{−1, 1 ;; −1, 1}','D = #r{5}#m{−1, 1 ;; −1, 1}']),
  Q('Apply that D to `u = x`.','طبّق D تلك على `u = x`.','(1,  1)',['#f{#r{5}}{2}(x_1 − x_0) = #f{#r{5}}{2}·#f{2}{#r{5}} = 1'],['(0,  0)','(#r{5},  #r{5})','(−1,  1)']),
  Q('Why must every row of D sum to 0?','لماذا يجب أن يكون مجموع كل صف في D صفراً؟',['The derivative of a constant is 0','مشتقة الثابت صفر'],['D·(1, …, 1)^T = 0'],[['Because D is antisymmetric','لأن D ضد متماثلة']]),
  Q('By what factor does `‖D‖` grow when n is doubled?','بأي عامل يكبر `‖D‖` عند مضاعفة n؟','≈ 4',['‖D‖ ~ n^2'],['≈ 2','≈ 8','≈ 16']),
]);

lesson('503',59,[
  ['Choosing (α, β) for a problem: (1) for boundary conditions use bases that vanish at the ends, such as `(1 − x^2)P_k^{(1,1)}`, whose derivatives are single Legendre polynomials:','اختيار (α, β) لمسألة: (1) للشروط الحدية نستخدم أسساً تنعدم عند الطرفين، مثل `(1 − x^2)P_k^{(1,1)}` التي مشتقاتها كثيرات ليجندر مفردة:'],
  '#f{d}{dx}[(1 − x^2) P_k^{(1,1)}] = −2(k + 1) P_{k+1}',
  ['(2) For end singularities choose the weight that absorbs them (Lesson 55). (3) For interpolation prefer α, β ≤ 0. (4) For fractional problems on [0, 1] the paper keeps α = β = 0 and moves the singularity into the map `t^{λ}`.','(2) للانفرادات الطرفية اختر الوزن الذي يمتصها (الدرس 55). (3) للاستكمال يُفضَّل α, β ≤ 0. (4) وللمسائل الكسرية على [0, 1] يبقي البحث α = β = 0 وينقل الانفراد إلى التحويل `t^{λ}`.'],
],[
  Q('Check the identity for k = 0.','تحقق من المتطابقة عند k = 0.','−2x',['#f{d}{dx}(1 − x^2) = −2x = −2·1·P_1'],['2x','−2','−x']),
  Q('Check the identity for k = 1.','تحقق من المتطابقة عند k = 1.','2 − 6x^2',['#f{d}{dx}[(1 − x^2)·2x] = 2 − 6x^2','−4P_2 = −4·#f{3x^2 − 1}{2} = 2 − 6x^2'],['6x^2 − 2','2x − 6x^3','−4x']),
  Q('Why do `(1 − x^2)P_k^{(1,1)}` give a diagonal stiffness matrix for `−u″`?','لماذا تعطي `(1 − x^2)P_k^{(1,1)}` مصفوفة جساءة قطرية لـ `−u″`؟',['Their derivatives are multiples of distinct Legendre polynomials, which are orthogonal','مشتقاتها مضاعفات لكثيرات ليجندر مختلفة وهي متعامدة'],['⟨φ_j′, φ_k′⟩ = 4(j + 1)(k + 1)⟨P_{j+1}, P_{k+1}⟩'],[['Because they are orthogonal themselves','لأنها متعامدة بنفسها']]),
  Q('A solution behaves like `(1 + x)^{1/2}` near x = −1. Which weight absorbs it?','حلٌّ يسلك مثل `(1 + x)^{1/2}` قرب x = −1. أي وزن يمتصه؟',['β = 1, with the functions `(1 + x)^{1/2}P_n^{(0,1)}`','β = 1 مع الدوال `(1 + x)^{1/2}P_n^{(0,1)}`'],['(1 + x)^{1/2}·(1 + x)^{1/2} = (1 + x)'],['α = 1','α = β = #f{1}{2}','β = −#f{1}{2}']),
]);

lesson('503',60,[
  ['Clenshaw’s algorithm evaluates a Jacobi series stably by running the recurrence backwards. If `P_{k+1} = (a_k x + b_k)P_k − c_k P_{k−1}` with `P_0 = 1`, `P_1 = a_0 x + b_0`, then','خوارزمية كلينشو تحسب متسلسلة جاكوبي بثبات بتشغيل علاقة التكرار إلى الخلف. إذا كان `P_{k+1} = (a_k x + b_k)P_k − c_k P_{k−1}` مع `P_0 = 1` و `P_1 = a_0 x + b_0` فإن'],
  'y_{N+1} = y_{N+2} = 0,   y_k = c_k^* + (a_k x + b_k) y_{k+1} − c_{k+1} y_{k+2},   S = Σ c_k^* P_k = y_0',
  ['(here `c_k^*` are the series coefficients). It costs `O(N)` per point and never forms the polynomials explicitly.','(و `c_k^*` معاملات المتسلسلة). وتكلفتها `O(N)` لكل نقطة ولا تكوّن الكثيرات صراحة أبداً.'],
],[
  Q('For Legendre, `a_k = (2k + 1)/(k + 1)`, `b_k = 0`, `c_k = k/(k + 1)`. Evaluate `S = 1 + 2P_1 + 3P_2` at x = 0.5.','لليجندر `a_k = (2k + 1)/(k + 1)` و `b_k = 0` و `c_k = k/(k + 1)`. احسب `S = 1 + 2P_1 + 3P_2` عند x = 0.5.','1.625',['y_2 = 3,   y_1 = 2 + #f{3}{2}·0.5·3 = 4.25','y_0 = 1 + 1·0.5·4.25 − #f{1}{2}·3 = 1.625',['Directly: `1 + 1 + 3(−0.125) = 1.625`.','مباشرة: `1 + 1 + 3(−0.125) = 1.625`.']],['2','1.25','4.25']),
  Q('What does Clenshaw cost for N terms at one point?','ما تكلفة كلينشو لـ N حداً عند نقطة واحدة؟','O(N)',[['One pass of the recurrence.','مرور واحد على علاقة التكرار.']],['O(N^2)','O(N log N)','O(1)']),
  Q('For Chebyshev, `a_0 = 1`, `a_k = 2` (k ≥ 1), `b_k = 0`, `c_k = 1`. Evaluate `S = 1 + 2T_1 + 3T_2` at x = 0.5.','لتشيبيشيف `a_0 = 1` و `a_k = 2` (k ≥ 1) و `b_k = 0` و `c_k = 1`. احسب `S = 1 + 2T_1 + 3T_2` عند x = 0.5.','0.5',['y_2 = 3,   y_1 = 2 + 2·0.5·3 = 5','y_0 = 1 + 1·0.5·5 − 1·3 = 0.5'],['3.5','2','−0.5']),
  Q('Why is Clenshaw preferred to summing `c_k P_k(x)` after computing each `P_k(x)`?','لماذا تُفضَّل كلينشو على جمع `c_k P_k(x)` بعد حساب كل `P_k(x)`؟',['Same cost but no storage of all `P_k`, and better error behaviour for decaying coefficients','التكلفة نفسها دون تخزين كل `P_k` وسلوك أفضل للخطأ مع المعاملات المتناقصة'],[['Both are `O(N)`; Clenshaw adds the small terms first.','كلاهما `O(N)`، وكلينشو تجمع الحدود الصغيرة أولاً.']],[['It is exact','لأنها مضبوطة']]),
]);

lesson('503',61,[
  ['On `[0, 1]` the shifted Jacobi polynomials and their weight are','على `[0, 1]` تكون كثيرات جاكوبي المزاحة ووزنها'],
  'P_n^{*(α,β)}(t) = P_n^{(α,β)}(2t − 1),     w^*(t) = (1 − t)^{α} t^{β}',
  ['The end t = 1 corresponds to x = 1 (parameter α) and t = 0 to x = −1 (parameter β), so `P_n^*(1) = C(n + α, n)` and `P_n^*(0) = (−1)^n C(n + β, n)`. For problems in time, β controls the behaviour at the initial point t = 0.','الطرف t = 1 يقابل x = 1 (الوسيط α) والطرف t = 0 يقابل x = −1 (الوسيط β)، فيكون `P_n^*(1) = C(n + α, n)` و `P_n^*(0) = (−1)^n C(n + β, n)`. وفي المسائل الزمنية يتحكم β في السلوك عند النقطة الابتدائية t = 0.'],
],[
  Q('Find `P_1^{*(1,0)}(t)`.','أوجد `P_1^{*(1,0)}(t)`.','3t − 1',['#f{3(2t − 1) + 1}{2}'],['3t − 2','2t − 1','3t + 1']),
  Q('Find `P_2^{*(0,1)}(0)`.','أوجد `P_2^{*(0,1)}(0)`.','3',['(−1)^2 C(3, 2)'],['−3','1','6']),
  Q('Which parameter controls the behaviour at t = 0?','أي وسيط يتحكم في السلوك عند t = 0؟','β',['t = 0  ↔  x = −1'],['α','α + β','λ']),
  Q('Write the weight on `[0, 1]` for α = 0, β = 1.','اكتب الوزن على `[0, 1]` عند α = 0 و β = 1.','w^* = t',['(1 − t)^0 t^1'],['w^* = 1 − t','w^* = t(1 − t)','w^* = 1']),
]);

lesson('503',62,[
  ['On a general interval `[0, γ]`:','على مجال عام `[0, γ]`:'],
  'P_n^{(α,β)}(#f{2t}{γ} − 1),     w = (γ − t)^{α} t^{β},     ‖P_n‖_w^2 = (#f{γ}{2})^{α+β+1} h_n',
  ['With α = β = 0 these are the polynomials `L_i^{γ}` of the paper (Course 501, Lesson 15), with norm `γ/(2i + 1)`. Derivatives pick up the factor `2/γ` per order.','ومع α = β = 0 تكون كثيرات `L_i^{γ}` في البحث (المقرر 501، الدرس 15) بالمعيار `γ/(2i + 1)`. والمشتقات تكتسب العامل `2/γ` لكل رتبة.'],
],[
  Q('Write `P_1^{(0,0)}(2t/γ − 1)` for γ = 2.','اكتب `P_1^{(0,0)}(2t/γ − 1)` عند γ = 2.','t − 1',['#f{2t}{2} − 1'],['2t − 1','#f{t}{2} − 1','t']),
  Q('Find the norm for α = β = 0, n = 2, γ = 3.','أوجد المعيار عند α = β = 0 و n = 2 و γ = 3.','#f{3}{5}',['#f{γ}{2}·#f{2}{2n + 1} = #f{γ}{5}'],['#f{2}{5}','3','#f{1}{5}']),
  Q('Find the norm for α = β = 1, n = 1, γ = 2.','أوجد المعيار عند α = β = 1 و n = 1 و γ = 2.','#f{16}{15}',['(#f{2}{2})^3·h_1 = h_1 = #f{16}{15}'],['#f{2}{15}','#f{32}{15}','#f{8}{15}']),
  Q('What factor does the first derivative pick up on `[0, γ]`?','ما العامل الذي تكتسبه المشتقة الأولى على `[0, γ]`؟','#f{2}{γ}',['x = #f{2t}{γ} − 1  ⇒  #f{dx}{dt} = #f{2}{γ}'],['#f{γ}{2}','γ','#f{4}{γ^2}']),
]);

lesson('503',63,[
  ['In powers of t the shifted Jacobi polynomials are','بقوى t تكون كثيرات جاكوبي المزاحة'],
  'P_n^{*(α,β)}(t) = Σ_{k=0}^{n} (−1)^{n−k} #f{Γ(n + β + 1) Γ(n + k + α + β + 1)}{Γ(k + β + 1) Γ(n + α + β + 1) (n − k)! k!} t^k',
  ['With α = β = 0 the coefficients are the numbers `E_{n,k}` of the paper. This power form is what makes the fractional integrals of the basis explicit (Unit 8), through `D^{−μ} t^k = Γ(k + 1)/Γ(k + μ + 1)·t^{k+μ}`.','ومع α = β = 0 تكون المعاملات هي الأعداد `E_{n,k}` في البحث. وهذه الصيغة القوية ما يجعل التكاملات الكسرية للأساس صريحة (الوحدة 8) عبر `D^{−μ} t^k = Γ(k + 1)/Γ(k + μ + 1)·t^{k+μ}`.'],
],[
  Q('Use the formula for n = 1, α = 1, β = 0.','استخدم الصيغة عند n = 1 و α = 1 و β = 0.','3t − 1',['k = 0:  −#f{Γ(2)Γ(3)}{Γ(1)Γ(3)} = −1,     k = 1:  #f{Γ(2)Γ(4)}{Γ(2)Γ(3)} = 3'],['3t + 1','2t − 1','−3t + 1']),
  Q('Reduce the coefficient to α = β = 0.','اختصر المعامل إلى α = β = 0.','(−1)^{n−k}#f{(n + k)!}{(n − k)!(k!)^2}',['#f{n!(n + k)!}{k! n! (n − k)! k!}'],['C(n, k)','(−1)^k C(n, k)','#f{(n + k)!}{n! k!}']),
  Q('Find the constant term of `P_2^{*(0,1)}(t)`.','أوجد الحد الثابت لـ `P_2^{*(0,1)}(t)`.','3',['k = 0:  (−1)^2#f{Γ(4)Γ(4)}{Γ(2)Γ(4)·2!·0!} = #f{6}{2}',['It equals `P_2^*(0) = C(3, 2)`.','ويساوي `P_2^*(0) = C(3, 2)`.']],['−3','1','6']),
  Q('Why is the power form useful for fractional calculus?','لماذا تفيد الصيغة القوية في التفاضل الكسري؟',['Fractional integrals and derivatives of powers are explicit','لأن التكاملات والمشتقات الكسرية للقوى صريحة'],['D^{−μ} t^k = #f{Γ(k + 1)}{Γ(k + μ + 1)} t^{k+μ}'],[['It is the most stable form for evaluation','لأنها أكثر الصيغ استقراراً للحساب']]),
]);

lesson('503',64,[
  ['Orthogonality carries over to `[0, 1]` with the norm scaled by `2^{−(α+β+1)}`:','التعامد ينتقل إلى `[0, 1]` مع تحجيم المعيار بـ `2^{−(α+β+1)}`:'],
  '∫_0^1 (1 − t)^{α} t^{β} P_m^* P_n^* dt = #f{h_n}{2^{α+β+1}} δ_{mn} = h_n^* δ_{mn}',
  ['The factor comes from `1 − x = 2(1 − t)`, `1 + x = 2t` and `dx = 2 dt`. For α = β = 0 it gives `1/(2n + 1)`, the norm of `P_n^*` in Course 501.','والعامل يأتي من `1 − x = 2(1 − t)` و `1 + x = 2t` و `dx = 2 dt`. وعند α = β = 0 يعطي `1/(2n + 1)` وهو معيار `P_n^*` في المقرر 501.'],
],[
  Q('Find `h_1^*` for α = β = 1.','أوجد `h_1^*` عند α = β = 1.','#f{2}{15}',['#f{16/15}{2^3}',['Directly: `∫_0^1 t(1 − t)·4(2t − 1)^2 dt = 2/15`.','مباشرة: `∫_0^1 t(1 − t)·4(2t − 1)^2 dt = 2/15`.']],['#f{16}{15}','#f{1}{15}','#f{4}{15}']),
  Q('Find `h_0^*` for α = 0, β = 1.','أوجد `h_0^*` عند α = 0 و β = 1.','#f{1}{2}',['∫_0^1 t dt'],['2','1','#f{1}{4}']),
  Q('Reduce `h_n^*` to α = β = 0.','اختصر `h_n^*` إلى α = β = 0.','#f{1}{2n + 1}',['#f{2/(2n + 1)}{2}'],['#f{2}{2n + 1}','1','#f{1}{n + 1}']),
  Q('Where does the factor `2^{α+β+1}` come from?','من أين يأتي العامل `2^{α+β+1}`؟',['From `1 − x = 2(1 − t)`, `1 + x = 2t` and `dx = 2dt`','من `1 − x = 2(1 − t)` و `1 + x = 2t` و `dx = 2dt`'],['(1 − x)^{α}(1 + x)^{β} dx = 2^{α+β+1}(1 − t)^{α}t^{β} dt'],[['From the leading coefficient','من المعامل الرئيس']]),
]);

lesson('503',65,[
  ['Replacing t by `t^{λ}` gives the fractional Jacobi functions:','باستبدال t بـ `t^{λ}` نحصل على دوال جاكوبي الكسرية:'],
  'J_n^{λ}(t) = P_n^{(α,β)}(2t^{λ} − 1) = P_n^{*(α,β)}(t^{λ}),   0 < λ ≤ 1',
  ['They combine the two tools of the programme: the map `s = t^{λ}` that matches fractional powers, and the Jacobi weight that matches end behaviour. With α = β = 0 they are the fractional Legendre functions `L_n^{λ}` of the paper.','وهي تجمع أداتي البرنامج: التحويل `s = t^{λ}` الذي يطابق القوى الكسرية، ووزن جاكوبي الذي يطابق السلوك عند الطرفين. ومع α = β = 0 تكون دوال ليجندر الكسرية `L_n^{λ}` في البحث.'],
],[
  Q('Write `J_1^{1/2}(t)` for α = 0, β = 1.','اكتب `J_1^{1/2}(t)` عند α = 0 و β = 1.','3#r{t} − 2',['P_1^{*(0,1)}(s) = 3s − 2,   s = #r{t}'],['3t − 2','2#r{t} − 1','3#r{t} − 1']),
  Q('Find its zero.','أوجد جذرها.','t = #f{4}{9}',['#r{t} = #f{2}{3}'],['t = #f{2}{3}','t = #f{1}{4}','t = #f{1}{9}']),
  Q('Write `J_1^{λ}(t)` for α = β = 0.','اكتب `J_1^{λ}(t)` عند α = β = 0.','2t^{λ} − 1',['P_1^*(s) = 2s − 1'],['3t^{λ} − 1','t^{λ}','2t − 1']),
  Q('Find `J_n^{λ}(1)`.','أوجد `J_n^{λ}(1)`.','C(n + α, n)',['t = 1  ⇒  s = 1  ⇒  x = 1'],['1','(−1)^n C(n + β, n)','0']),
]);

lesson('503',66,[
  ['With `s = t^{λ}`, `ds = λt^{λ−1} dt`, the orthogonality of `P_n^*` becomes','مع `s = t^{λ}` و `ds = λt^{λ−1} dt` يصبح تعامد `P_n^*`'],
  '∫_0^1 J_m^{λ} J_n^{λ} w^{λ} dt = h_n^* δ_{mn},     w^{λ}(t) = λ t^{λ−1}(1 − t^{λ})^{α} t^{λβ}',
  ['The weight is the Jacobi weight in s times the Jacobian of the map. For α = β = 0 it is the weight `λt^{λ−1}` of the paper.','والوزن هو وزن جاكوبي في s مضروباً في جاكوبي التحويل. وعند α = β = 0 هو الوزن `λt^{λ−1}` في البحث.'],
],[
  Q('Check `∫_0^1 J_0 J_1 w dt = 0` for α = 0, β = 1.','تحقق من `∫_0^1 J_0 J_1 w dt = 0` عند α = 0 و β = 1.','0',['∫_0^1 (3s − 2)s ds = 1 − 1'],['#f{1}{2}','1','#f{1}{12}']),
  Q('Compute `h_1^*` for α = 0, β = 1.','احسب `h_1^*` عند α = 0 و β = 1.','#f{1}{4}',['∫_0^1 (3s − 2)^2 s ds = #f{9}{4} − 4 + 2'],['#f{1}{2}','#f{1}{3}','1']),
  Q('Write `w^{λ}` for α = 0, β = 1, λ = 1/2.','اكتب `w^{λ}` عند α = 0 و β = 1 و λ = 1/2.','#f{1}{2}',['λt^{λ−1}·t^{λβ} = #f{1}{2}t^{−1/2}·t^{1/2}'],['#f{1}{2}t^{−1/2}','t^{1/2}','1']),
  Q('Reduce `w^{λ}` to α = β = 0.','اختصر `w^{λ}` إلى α = β = 0.','λt^{λ−1}',['(1 − t^{λ})^0 t^0 = 1'],['1','t^{λ}','λ']),
]);

lesson('503',67,[
  ['Quadrature for the fractional Jacobi weight maps a Gauss–Jacobi rule from x to t:','التربيع لوزن جاكوبي الكسري ينقل قاعدة جاوس–جاكوبي من x إلى t:'],
  't_i = (#f{x_i + 1}{2})^{1/λ},   w_i^* = #f{w_i}{2^{α+β+1}}:     ∫_0^1 w^{λ} f dt ≈ Σ_i w_i^* f(t_i)',
  ['The rule is exact when `f(s^{1/λ})` is a polynomial in s of degree ≤ 2n − 1. The mapped nodes are the roots of `J_n^{λ}` and serve as collocation points in time.','والقاعدة مضبوطة متى كانت `f(s^{1/λ})` كثيرة حدود في s درجتها ≤ 2n − 1. والعقد المحوّلة هي جذور `J_n^{λ}` وتصلح نقاط تجميع في الزمن.'],
],[
  Q('Find the one-point node in t for α = 0, β = 1, λ = 1/2.','أوجد عقدة النقطة الواحدة في t عند α = 0 و β = 1 و λ = 1/2.','t = #f{4}{9}',['x_1 = #f{1}{3}  ⇒  s = #f{2}{3}  ⇒  t = s^2'],['t = #f{2}{3}','t = #f{1}{3}','t = #f{1}{9}']),
  Q('Find its weight `w^*`.','أوجد وزنها `w^*`.','#f{1}{2}',['#f{2}{2^2}'],['2','1','#f{1}{4}']),
  Q('Use the rule to compute `∫_0^1 w^{λ} #r{t} dt` (α = 0, β = 1, λ = 1/2).','استخدم القاعدة لحساب `∫_0^1 w^{λ} #r{t} dt` (α = 0 و β = 1 و λ = 1/2).','#f{1}{3}',['#f{1}{2}·#r{#f{4}{9}} = #f{1}{2}·#f{2}{3}',['Exactly `∫_0^1 s·s ds = 1/3`.','وهو بالضبط `∫_0^1 s·s ds = 1/3`.']],['#f{1}{2}','#f{2}{3}','#f{1}{4}']),
  Q('When is the mapped rule exact?','متى تكون القاعدة المحوّلة مضبوطة؟',['When `f(s^{1/λ})` is a polynomial of degree ≤ 2n − 1 in s','عندما تكون `f(s^{1/λ})` كثيرة حدود درجتها ≤ 2n − 1 في s'],[['Smoothness is required in s, not in t.','النعومة مطلوبة في s لا في t.']],[['When f is smooth in t','عندما تكون f ملساء في t']]),
]);

lesson('503',68,[
  ['A function on [0, 1] is expanded in fractional Jacobi functions with','الدالة على [0, 1] تُنشر بدوال جاكوبي الكسرية بالمعاملات'],
  'f ≈ Σ_{n=0}^{M} c_n J_n^{λ},   c_n = #f{1}{h_n^*}∫_0^1 w^{λ} f J_n^{λ} dt',
  ['With `s = t^{λ}` every coefficient is an ordinary shifted-Jacobi coefficient of `f(s^{1/λ})`, so all tools of Units 5–6 apply, including discrete coefficients from the mapped rule.','ومع `s = t^{λ}` يكون كل معامل معاملاً عادياً لجاكوبي المزاحة للدالة `f(s^{1/λ})`، فتنطبق كل أدوات الوحدتين 5 و 6 بما فيها المعاملات المتقطعة من القاعدة المحوّلة.'],
],[
  Q('For `f = #r{t}`, α = 0, β = 1, λ = 1/2, find `c_0`.','للدالة `f = #r{t}` مع α = 0 و β = 1 و λ = 1/2 أوجد `c_0`.','#f{2}{3}',['#f{1}{1/2}∫_0^1 s·s ds = 2·#f{1}{3}'],['#f{1}{3}','1','#f{1}{2}']),
  Q('For the same f, find `c_1` (`h_1^* = 1/4`).','للدالة نفسها أوجد `c_1` (`h_1^* = 1/4`).','#f{1}{3}',['#f{1}{1/4}∫_0^1 s(3s − 2)s ds = 4(#f{3}{4} − #f{2}{3}) = 4·#f{1}{12}',['Check: `2/3 + (1/3)(3s − 2) = s`.','تحقق: `2/3 + (1/3)(3s − 2) = s`.']],['#f{1}{12}','#f{2}{3}','1']),
  Q('How many terms does the expansion of `#r{t}` need here?','كم حداً يحتاج مفكوك `#r{t}` هنا؟','2',[['`#r{t} = s` is a polynomial of degree 1 in s.','`#r{t} = s` كثيرة حدود من الدرجة 1 في s.']],['∞','1','3']),
  Q('Which quantity replaces the plain Jacobi norm `h_n` on [0, 1]?','أي كمية تحل محل معيار جاكوبي العادي `h_n` على [0, 1]؟','h_n^* = #f{h_n}{2^{α+β+1}}',[['Lesson 64.','الدرس 64.']],['h_n','2h_n','#f{h_n}{λ}']),
]);

lesson('503',69,[
  ['λ is chosen so that the solution becomes smooth in `s = t^{λ}`; α and β are chosen for the weight. If the solution contains `t^{β_1}, t^{β_2}, …`, take λ as their greatest common divisor (Course 501, Lesson 30); if it also vanishes at t = 0 like `t^{a}`, a weight with β > 0 (in s) can absorb part of that behaviour.',
   'تُختار λ بحيث يصبح الحل أملس في `s = t^{λ}`، ويُختار α و β للوزن. فإذا احتوى الحل `t^{β_1}, t^{β_2}, …` نأخذ λ القاسم المشترك الأكبر لها (المقرر 501، الدرس 30)، وإذا انعدم أيضاً عند t = 0 مثل `t^{a}` فالوزن مع β > 0 (في s) يمكن أن يمتص جزءاً من هذا السلوك.'],
  'y = t^{0.75} + t^{1.5}   ⇒   λ = gcd(0.75, 1.5) = 0.75',
],[
  Q('Choose λ for `y = t^{0.75} + t^{1.5}`.','اختر λ للدالة `y = t^{0.75} + t^{1.5}`.','λ = 0.75',['1.5 = 2·0.75'],['λ = 0.25','λ = 1.5','λ = 0.5']),
  Q('Choose λ for `y = t^{1/3} + t^{1/2}`.','اختر λ للدالة `y = t^{1/3} + t^{1/2}`.','λ = #f{1}{6}',['gcd(#f{2}{6}, #f{3}{6})'],['λ = #f{1}{3}','λ = #f{1}{2}','λ = #f{5}{6}']),
  Q('With λ = 0.75, what is the degree of `t^{0.75} + t^{1.5}` in s?','مع λ = 0.75 ما درجة `t^{0.75} + t^{1.5}` في s؟','2',['s + s^2'],['1','3','1.5']),
  Q('Why can a smaller λ still be correct but less efficient?','لماذا تكون λ الأصغر صحيحة مع ذلك لكنها أقل كفاءة؟',['Any common divisor works, but a smaller one raises the degree in s','أي قاسم مشترك يصلح، لكن الأصغر يرفع الدرجة في s'],['λ = 0.25:   s^3 + s^6'],[['It does not work','لا تصلح'],['It is always better','دائماً أفضل']]),
]);

lesson('503',70,[
  ['The paper of Courses 501 and 507 uses the simplest member of this family: α = β = 0, so `J_n^{λ} = L_n^{λ}`, the weight is `λt^{λ−1}`, the norm is `1/(2n + 1)`, and the power coefficients are the numbers `E_{n,r}`. All the general Jacobi formulas of this course reduce to the paper’s formulas in this case.',
   'البحث في المقررين 501 و 507 يستخدم أبسط عضو في هذه العائلة: α = β = 0، فتكون `J_n^{λ} = L_n^{λ}` والوزن `λt^{λ−1}` والمعيار `1/(2n + 1)` ومعاملات القوى الأعداد `E_{n,r}`. وكل صيغ جاكوبي العامة في هذا المقرر تؤول إلى صيغ البحث في هذه الحالة.'],
  'α = β = 0:   J_n^{λ} = L_n^{λ},   w^{λ} = λt^{λ−1},   h_n^* = #f{1}{2n + 1}',
],[
  Q('Reduce `h_n^*` to the paper’s case.','اختصر `h_n^*` إلى حالة البحث.','#f{1}{2n + 1}',['#f{2/(2n + 1)}{2^1}'],['#f{2}{2n + 1}','1','#f{λ}{2n + 1}']),
  Q('Reduce the analytic form of `P_n^*` to the paper’s coefficients.','اختصر الصيغة التحليلية لـ `P_n^*` إلى معاملات البحث.','E_{n,k} = (−1)^{n−k}#f{(n + k)!}{(n − k)!(k!)^2}',[['Lesson 63 with α = β = 0.','الدرس 63 مع α = β = 0.']],['C(n, k)','(−1)^k','#f{(n + k)!}{n!}']),
  Q('Reduce the weight `w^{λ}` to the paper’s case.','اختصر الوزن `w^{λ}` إلى حالة البحث.','λt^{λ−1}',['α = β = 0'],['1','t^{λ}','λ']),
  Q('Which generalization would let the paper’s method also absorb a known factor `t^{a}` of the solution?','أي تعميم يسمح لطريقة البحث أيضاً بامتصاص عامل معلوم `t^{a}` في الحل؟',['Using β > 0 (or generalized Jacobi functions) in time','استخدام β > 0 (أو دوال جاكوبي المعممة) في الزمن'],[['The weight `t^{λβ}` then matches the vanishing at t = 0.','فيطابق الوزن `t^{λβ}` الانعدام عند t = 0.']],[['A larger M','M أكبر'],['A smaller γ','γ أصغر']]),
]);

/* ---- 503 · Unit 8 (lessons 71–80): operational matrices ---- */
lesson('503',71,[
  ['Differentiating a shifted Jacobi polynomial raises both parameters by one:','اشتقاق كثيرة جاكوبي المزاحة يرفع الوسيطين كليهما بواحد:'],
  '#f{d}{dt} P_n^{*(α,β)}(t) = (n + α + β + 1) P_{n−1}^{*(α+1,β+1)}(t)',
  ['To stay in one family we write `Φ′ = DΦ` for the vector `Φ = (P_0^*, …, P_M^*)^T`. D is strictly lower triangular with entries `D_{nk} = ⟨P_n^{*′}, P_k^*⟩_w / h_k^*`. For shifted Legendre `D_{nk} = 2(2k + 1)` when `n − k` is odd and 0 otherwise; on `[0, γ]` every entry is divided by γ.','ولنبقى في عائلة واحدة نكتب `Φ′ = DΦ` للمتجه `Φ = (P_0^*, …, P_M^*)^T`. و D مثلثية سفلى تماماً عناصرها `D_{nk} = ⟨P_n^{*′}, P_k^*⟩_w / h_k^*`. ولليجندر المزاحة `D_{nk} = 2(2k + 1)` عندما يكون `n − k` فردياً و 0 فيما عدا ذلك، وعلى `[0, γ]` يُقسم كل عنصر على γ.'],
],[
  Q('Write D for shifted Legendre with M = 2.','اكتب D لليجندر المزاحة عند M = 2.','D = #m{0, 0, 0 ;; 2, 0, 0 ;; 0, 6, 0}',['P_1^{*′} = 2 = 2P_0^*,   P_2^{*′} = 12t − 6 = 6P_1^*'],['D = #m{0, 2, 0 ;; 0, 0, 6 ;; 0, 0, 0}','D = #m{0, 0, 0 ;; 2, 0, 0 ;; 2, 6, 0}','D = #m{0, 0, 0 ;; 1, 0, 0 ;; 0, 3, 0}']),
  Q('For α = β = 1, `P_1^* = 4t − 2` and `P_2^* = 15t^2 − 15t + 3`. Express `P_2^{*′}` in the same family.','عند α = β = 1 لدينا `P_1^* = 4t − 2` و `P_2^* = 15t^2 − 15t + 3`. عبّر عن `P_2^{*′}` في العائلة نفسها.','#f{15}{2}P_1^*',['30t − 15 = #f{15}{2}(4t − 2)'],['15P_1^*','30P_1^* − 15P_0^*','#f{15}{4}P_1^*']),
  Q('For shifted Legendre, find c in `P_2^{*′} = c P_1^{*(1,1)}`.','لليجندر المزاحة أوجد c في `P_2^{*′} = c P_1^{*(1,1)}`.','3',['n + α + β + 1 = 2 + 0 + 0 + 1','3(4t − 2) = 12t − 6'],['2','6','#f{3}{2}']),
  Q('Why is D strictly lower triangular?','لماذا تكون D مثلثية سفلى تماماً؟',['Differentiation lowers the degree, so `P_n^{*′}` uses only `P_0^*, …, P_{n−1}^*`','الاشتقاق يخفض الدرجة فتستخدم `P_n^{*′}` فقط `P_0^*, …, P_{n−1}^*`'],[['The diagonal is zero because `P_n^{*′}` has degree n − 1.','والقطر صفري لأن درجة `P_n^{*′}` هي n − 1.']],[['Because the weight is positive','لأن الوزن موجب'],['It is upper triangular','بل مثلثية عليا']]),
]);

lesson('503',72,[
  ['The second-derivative matrix is `D^{(2)} = D·D` for every (α, β). For Legendre on `[0, γ]` its entries are explicit (Theorem 3.1 of the paper): with `r = j + 2s`,','مصفوفة المشتقة الثانية `D^{(2)} = D·D` لكل (α, β). ولليجندر على `[0, γ]` عناصرها صريحة (النظرية 3.1 في البحث): مع `r = j + 2s`'],
  'd_{r,j} = #f{4}{γ^2} s(2j + 1)(2j + 2s + 1),     #f{d^2}{dt^2}P_n^{*(α,β)} = (n + α + β + 1)(n + α + β + 2) P_{n−2}^{*(α+2,β+2)}',
  ['The Jacobi version generalizes Theorem 3.1: the same projection that gives `d_{r,j}` for α = β = 0 gives the entries for any (α, β), and the product `D·D` reproduces them exactly.','والصيغة الجاكوبية تعمم النظرية 3.1: الإسقاط نفسه الذي يعطي `d_{r,j}` عند α = β = 0 يعطي العناصر لأي (α, β)، والضرب `D·D` يعيدها بالضبط.'],
],[
  Q('Compute `d_{2,0}` for γ = 1.','احسب `d_{2,0}` عند γ = 1.','12',['s = 1, j = 0:   4·1·1·3',['Directly: `P_2^{*″} = 12`.','مباشرة: `P_2^{*″} = 12`.']],['6','24','3']),
  Q('Compute `d_{3,1}` for γ = 2.','احسب `d_{3,1}` عند γ = 2.','15',['s = 1, j = 1:   #f{4}{4}·1·3·5'],['60','30','#f{15}{4}']),
  Q('For α = 0, β = 1 the rows of D are (3, 0, 0) for n = 1 and (4/3, 20/3, 0) for n = 2. Find `(D^2)_{2,0}`.','عند α = 0 و β = 1 صفّا D هما (3, 0, 0) لـ n = 1 و (4/3, 20/3, 0) لـ n = 2. أوجد `(D^2)_{2,0}`.','20',['#f{4}{3}·0 + #f{20}{3}·3 + 0',['Check: `P_2^* = 10t^2 − 12t + 3`, so `P_2^{*″} = 20`.','تحقق: `P_2^* = 10t^2 − 12t + 3` فيكون `P_2^{*″} = 20`.']],['#f{80}{9}','#f{4}{3}','10']),
  Q('Compute `d_{4,0}` for γ = 1.','احسب `d_{4,0}` عند γ = 1.','40',['s = 2, j = 0:   4·2·1·5'],['20','12','80']),
]);

lesson('503',73,[
  ['The integration matrix P satisfies `∫_0^t Φ ≈ PΦ`. For shifted Legendre it is tridiagonal:','مصفوفة التكامل P تحقق `∫_0^t Φ ≈ PΦ`. ولليجندر المزاحة هي ثلاثية القطر:'],
  '∫_0^t P_0^* = #f{P_0^* + P_1^*}{2},     ∫_0^t P_n^* = #f{P_{n+1}^* − P_{n−1}^*}{2(2n + 1)}   (n ≥ 1)',
  ['For other (α, β) the condition “the integral vanishes at t = 0” brings in entries in the first columns, so the matrix is no longer tridiagonal. In every case the last row needs `P_{M+1}^*`, which is dropped: this truncation is the only error.','ولوسائط (α, β) أخرى يُدخل شرط «انعدام التكامل عند t = 0» عناصر في الأعمدة الأولى فلا تبقى المصفوفة ثلاثية القطر. وفي كل الحالات يحتاج الصف الأخير إلى `P_{M+1}^*` الذي يُحذف، وهذا القطع هو الخطأ الوحيد.'],
],[
  Q('Find `∫_0^t P_1^*` for shifted Legendre.','أوجد `∫_0^t P_1^*` لليجندر المزاحة.','#f{P_2^* − P_0^*}{6}',['n = 1:   2(2·1 + 1) = 6',['Check: `t^2 − t = (6t^2 − 6t + 1 − 1)/6`.','تحقق: `t^2 − t = (6t^2 − 6t + 1 − 1)/6`.']],['#f{P_2^* − P_0^*}{2}','#f{P_2^* + P_0^*}{6}','#f{P_2^*}{6}']),
  Q('For α = 0, β = 1 (`P_1^* = 3t − 2`), expand `∫_0^t 1 = t`.','عند α = 0 و β = 1 (`P_1^* = 3t − 2`) انشر `∫_0^t 1 = t`.','#f{2}{3}P_0^* + #f{1}{3}P_1^*',['t = #f{(3t − 2) + 2}{3}'],['#f{1}{2}P_0^* + #f{1}{2}P_1^*','#f{1}{3}P_0^* + #f{2}{3}P_1^*','#f{1}{3}P_1^*']),
  Q('Write the row of P for `P_2^*` (shifted Legendre).','اكتب صف P الخاص بـ `P_2^*` (ليجندر المزاحة).','(0,  −#f{1}{10},  0,  #f{1}{10})',['#f{P_3^* − P_1^*}{10}'],['(0,  #f{1}{10},  0,  #f{1}{10})','(#f{1}{10},  0,  #f{1}{10},  0)','(0,  −#f{1}{6},  0,  #f{1}{6})']),
  Q('Where does the truncation error of P sit?','أين يقع خطأ القطع في P؟',['In the last row: the term `P_{M+1}^*` is dropped','في الصف الأخير: يُحذف الحد `P_{M+1}^*`'],[['All other rows are exact.','وكل الصفوف الأخرى مضبوطة.']],[['In the first row','في الصف الأول'],['On the diagonal','على القطر']]),
]);

lesson('503',74,[
  ['Using the power form (Lesson 63) and `D^{−μ}t^k = Γ(k + 1)/Γ(k + μ + 1)·t^{k+μ}`:','باستخدام الصيغة القوية (الدرس 63) و `D^{−μ}t^k = Γ(k + 1)/Γ(k + μ + 1)·t^{k+μ}`:'],
  'D^{−μ}P_n^{*(α,β)} = Σ_{k=0}^{n} a_{n,k} #f{Γ(k + 1)}{Γ(k + μ + 1)} t^{k+μ}',
  ['where `a_{n,k}` are the power coefficients. The result is `t^{μ}` times a polynomial, not a polynomial, so its expansion in `P_k^*` converges slowly; in the fractional basis with λ = μ (Unit 7) it is again a polynomial in `s = t^{λ}`.','و `a_{n,k}` معاملات القوى. والنتيجة `t^{μ}` مضروبة في كثيرة حدود وليست كثيرة حدود، فمفكوكها بـ `P_k^*` يتقارب ببطء، وفي الأساس الكسري مع λ = μ (الوحدة 7) تعود كثيرة حدود في `s = t^{λ}`.'],
],[
  Q('Compute `D^{−1/2}(3t − 2)` (`P_1^{*(0,1)}`).','احسب `D^{−1/2}(3t − 2)` (`P_1^{*(0,1)}`).','#f{4}{#r{π}}#r{t}(t − 1)',['3#f{Γ(2)}{Γ(5/2)}t^{3/2} − 2#f{Γ(1)}{Γ(3/2)}t^{1/2}','Γ(#f{5}{2}) = #f{3#r{π}}{4},   Γ(#f{3}{2}) = #f{#r{π}}{2}'],['#f{4}{#r{π}}#r{t}(t + 1)','#f{2}{#r{π}}#r{t}(3t − 2)','2t^{3/2} − 4t^{1/2}']),
  Q('Compute `D^{−1/2}1`.','احسب `D^{−1/2}1`.','#f{2#r{t}}{#r{π}}',['#f{t^{1/2}}{Γ(3/2)}'],['#r{t}','#f{#r{t}}{2#r{π}}','2#r{t}']),
  Q('Compute `D^{−1}P_1^{*(1,1)} = D^{−1}(4t − 2)`.','احسب `D^{−1}P_1^{*(1,1)} = D^{−1}(4t − 2)`.','2t^2 − 2t',['4#f{Γ(2)}{Γ(3)}t^2 − 2t'],['4t^2 − 2t','2t^2 − 2','t^2 − t']),
  Q('With λ = 1/2, what is `D^{−1/2}(3t − 2)` as a function of `s = #r{t}`?','مع λ = 1/2 ما `D^{−1/2}(3t − 2)` بدلالة `s = #r{t}`؟','#f{4}{#r{π}}(s^3 − s)',['#r{t}(t − 1) = s(s^2 − 1)',['A polynomial of degree 3 in s.','كثيرة حدود من الدرجة 3 في s.']],['#f{4}{#r{π}}(s^2 − s)','#f{4}{#r{π}}s','#f{4}{#r{π}}(s − 1)']),
]);

lesson('503',75,[
  ['Projecting `D^{−μ}P_k^*` back onto the family gives the fractional integration matrix, `D^{−μ}Φ ≈ I^{(μ)}Φ`:','إسقاط `D^{−μ}P_k^*` على العائلة نفسها يعطي مصفوفة التكامل الكسري `D^{−μ}Φ ≈ I^{(μ)}Φ`:'],
  'c_{k,j} = #f{1}{h_j^*} Σ_{r=0}^{k} Σ_{l=0}^{j} a_{k,r} a_{j,l} #f{Γ(r + 1)}{Γ(r + μ + 1)} B(r + μ + l + β + 1, α + 1)',
  ['The Beta function comes from `∫_0^1 (1 − t)^{α} t^{β} t^{r+μ+l} dt`. For α = β = 0 it becomes `1/(r + μ + l + 1)` and the formula is Theorem 3.2 of the paper; for μ = 1 it reproduces the integration matrix of Lesson 73.','ودالة بيتا تأتي من `∫_0^1 (1 − t)^{α} t^{β} t^{r+μ+l} dt`. وعند α = β = 0 تصبح `1/(r + μ + l + 1)` وتكون الصيغة هي النظرية 3.2 في البحث، وعند μ = 1 تعيد مصفوفة التكامل في الدرس 73.'],
],[
  Q('Compute `c_{0,0}` for Legendre with μ = 1/2.','احسب `c_{0,0}` لليجندر مع μ = 1/2.','#f{4}{3#r{π}} ≈ 0.7523',['c_{0,0} = #f{1}{Γ(μ + 1)(μ + 1)} = #f{1}{Γ(5/2)}'],['#f{2}{#r{π}} ≈ 1.128','#f{2}{3}','1']),
  Q('Reduce `B(r + μ + l + β + 1, α + 1)` to α = β = 0.','اختصر `B(r + μ + l + β + 1, α + 1)` إلى α = β = 0.','#f{1}{r + μ + l + 1}',['B(a, 1) = #f{1}{a}'],['r + μ + l + 1','#f{1}{(r + μ + l + 1)(r + μ + l + 2)}','1']),
  Q('Compute `c_{0,0}` for μ = 1, α = 0, β = 1 (`h_0^* = 1/2`).','احسب `c_{0,0}` عند μ = 1 و α = 0 و β = 1 (`h_0^* = 1/2`).','#f{2}{3}',['2·#f{Γ(1)}{Γ(2)}B(3, 1) = 2·#f{1}{3}',['It agrees with `t = (2/3)P_0^* + (1/3)P_1^*` in Lesson 73.','ويتفق مع `t = (2/3)P_0^* + (1/3)P_1^*` في الدرس 73.']],['#f{1}{3}','#f{1}{2}','1']),
  Q('Why is `I^{(μ)}` only approximate for non-integer μ?','لماذا تكون `I^{(μ)}` تقريبية فقط عند μ غير صحيح؟',['`D^{−μ}P_k^*` is not a polynomial, so its projection onto `P_0^*, …, P_M^*` is truncated','`D^{−μ}P_k^*` ليست كثيرة حدود فيُقطع إسقاطها على `P_0^*, …, P_M^*`'],[['Every row, not only the last, carries a truncation error.','كل صف، لا الأخير فقط، يحمل خطأ قطع.']],[['Because Γ is approximated','لأن Γ تُقرَّب'],['It is exact','بل مضبوطة']]),
]);

lesson('503',76,[
  ['The Caputo derivative of order ν kills the powers below `⌈ν⌉` and acts on the others by `D^{ν}t^k = Γ(k + 1)/Γ(k + 1 − ν)·t^{k−ν}`:','مشتقة كابوتو من الرتبة ν تُعدم القوى الأقل من `⌈ν⌉` وتؤثر في البقية بـ `D^{ν}t^k = Γ(k + 1)/Γ(k + 1 − ν)·t^{k−ν}`:'],
  'D^{ν}P_n^{*(α,β)} = Σ_{k=⌈ν⌉}^{n} a_{n,k} #f{Γ(k + 1)}{Γ(k + 1 − ν)} t^{k−ν}',
  ['So `D^{ν}P_n^* = 0` for `n < ⌈ν⌉`, and the other results are `t^{⌈ν⌉−ν}` times polynomials.','فيكون `D^{ν}P_n^* = 0` عندما `n < ⌈ν⌉`، والنتائج الأخرى `t^{⌈ν⌉−ν}` مضروبة في كثيرات حدود.'],
],[
  Q('Compute `D^{1/2}(3t − 2)`.','احسب `D^{1/2}(3t − 2)`.','#f{6}{#r{π}}#r{t}',['3#f{Γ(2)}{Γ(3/2)}t^{1/2} = #f{3}{#r{π}/2}#r{t}',['The constant −2 is killed.','الثابت −2 ينعدم.']],['#f{3}{#r{π}}#r{t}','#f{6}{#r{π}}#r{t} − 2','#f{4}{#r{π}}#r{t}']),
  Q('Compute `D^{3/2}P_1^*`.','احسب `D^{3/2}P_1^*`.','0',['1 < ⌈#f{3}{2}⌉ = 2'],['#f{1}{Γ(1/2)}t^{−1/2}','1','t^{−1/2}']),
  Q('Compute `D^{1/2}P_2^{*(0,0)} = D^{1/2}(6t^2 − 6t + 1)`.','احسب `D^{1/2}P_2^{*(0,0)} = D^{1/2}(6t^2 − 6t + 1)`.','#f{4}{#r{π}}#r{t}(4t − 3)',['6#f{Γ(3)}{Γ(5/2)}t^{3/2} = #f{16}{#r{π}}t^{3/2},   −6#f{Γ(2)}{Γ(3/2)}t^{1/2} = −#f{12}{#r{π}}t^{1/2}'],['#f{4}{#r{π}}#r{t}(4t − 3) + 1','#f{4}{#r{π}}#r{t}(3t − 4)','#f{12}{#r{π}}#r{t}(t − 1)']),
  Q('How many polynomials `P_n^*` are killed by `D^{ν}` with ν = 2.5?','كم كثيرة `P_n^*` تُعدمها `D^{ν}` مع ν = 2.5؟','3',['n < ⌈2.5⌉ = 3:   n = 0, 1, 2'],['2','1','0']),
]);

lesson('503',77,[
  ['Projecting `D^{ν}P_k^*` onto the family gives the fractional derivative matrix `D^{ν}Φ ≈ D^{(ν)}Φ` with','إسقاط `D^{ν}P_k^*` على العائلة يعطي مصفوفة المشتقة الكسرية `D^{ν}Φ ≈ D^{(ν)}Φ` بالعناصر'],
  'd_{k,j}^{(ν)} = #f{1}{h_j^*} Σ_{r=⌈ν⌉}^{k} Σ_{l=0}^{j} a_{k,r} a_{j,l} #f{Γ(r + 1)}{Γ(r + 1 − ν)} B(r − ν + l + β + 1, α + 1)',
  ['The first `⌈ν⌉` rows are zero. For integer ν the matrix equals `D^{ν}`, the power of the derivative matrix. In practice one often prefers the integrated form with `I^{(μ)}` (Unit 9), which avoids the singular behaviour of `D^{ν}P_k^*` at t = 0.','وأول `⌈ν⌉` صفاً أصفار. وعند ν صحيح تساوي المصفوفة `D^{ν}` أي قوة مصفوفة المشتقة. وعملياً تُفضَّل غالباً الصيغة التكاملية مع `I^{(μ)}` (الوحدة 9) لأنها تتجنب السلوك الشاذ لـ `D^{ν}P_k^*` عند t = 0.'],
],[
  Q('For Legendre and ν = 1/2, compute `d_{1,0}^{(ν)}` (`D^{1/2}P_1^* = 4#r{t}/#r{π}`).','لليجندر مع ν = 1/2 احسب `d_{1,0}^{(ν)}` (`D^{1/2}P_1^* = 4#r{t}/#r{π}`).','#f{8}{3#r{π}} ≈ 1.505',['∫_0^1 #f{4#r{t}}{#r{π}} dt = #f{4}{#r{π}}·#f{2}{3}'],['#f{4}{#r{π}} ≈ 2.257','2','#f{8}{5#r{π}} ≈ 0.903']),
  Q('For the same case compute `d_{1,1}^{(ν)}`.','للحالة نفسها احسب `d_{1,1}^{(ν)}`.','#f{8}{5#r{π}} ≈ 0.903',['3∫_0^1 #f{4#r{t}}{#r{π}}(2t − 1) dt = #f{12}{#r{π}}(#f{4}{5} − #f{2}{3})'],['#f{8}{3#r{π}} ≈ 1.505','0','#f{4}{5#r{π}} ≈ 0.451']),
  Q('How many zero rows does `D^{(ν)}` have for ν = 1.5?','كم صفاً صفرياً في `D^{(ν)}` عند ν = 1.5؟','2',['⌈1.5⌉ = 2'],['1','0','3']),
  Q('Which matrix is `D^{(1)}`?','ما المصفوفة `D^{(1)}`؟',['The ordinary derivative matrix D of Lesson 71','مصفوفة المشتقة العادية D في الدرس 71'],[['For integer ν the Caputo derivative is the ordinary one.','للرتبة الصحيحة مشتقة كابوتو هي المشتقة العادية.']],[['The identity','المصفوفة المحايدة'],['The integration matrix','مصفوفة التكامل']]),
]);

lesson('503',78,[
  ['Multiplication by t is tridiagonal in any Jacobi family, because of the three-term recurrence. For shifted Legendre:','الضرب في t ثلاثي القطر في أي عائلة جاكوبي بسبب علاقة التكرار الثلاثية. ولليجندر المزاحة:'],
  't P_n^* = #f{n + 1}{2(2n + 1)} P_{n+1}^* + #f{1}{2} P_n^* + #f{n}{2(2n + 1)} P_{n−1}^*',
  ['For a known coefficient `a(t) = Σ a_m P_m^*` the product matrix has entries `Σ_m a_m ⟨P_n^* P_m^*, P_j^*⟩_w / h_j^*`; if a has degree m, the matrix has bandwidth m on each side. It is used for equations with variable coefficients.','ولمعامل معلوم `a(t) = Σ a_m P_m^*` تكون عناصر مصفوفة الضرب `Σ_m a_m ⟨P_n^* P_m^*, P_j^*⟩_w / h_j^*`، وإذا كانت درجة a هي m فعرض نطاق المصفوفة m على كل جانب. وتُستخدم للمعادلات ذات المعاملات المتغيرة.'],
],[
  Q('Expand `t P_1^*` (shifted Legendre).','انشر `t P_1^*` (ليجندر المزاحة).','#f{1}{3}P_2^* + #f{1}{2}P_1^* + #f{1}{6}P_0^*',['n = 1:   #f{2}{6},  #f{1}{2},  #f{1}{6}',['Check: `2t^2 − t`.','تحقق: `2t^2 − t`.']],['#f{1}{2}P_2^* + #f{1}{2}P_0^*','#f{1}{3}P_2^* + #f{1}{6}P_0^*','#f{2}{3}P_2^* + #f{1}{3}P_0^*']),
  Q('Expand `t P_0^*`.','انشر `t P_0^*`.','#f{1}{2}P_1^* + #f{1}{2}P_0^*',['t = #f{2t − 1}{2} + #f{1}{2}'],['P_1^*','2P_1^* + P_0^*','#f{1}{2}P_1^*']),
  Q('What is the bandwidth of the product matrix for `a(t) = t^2`?','ما عرض نطاق مصفوفة الضرب لـ `a(t) = t^2`؟','2',[['Pentadiagonal: two diagonals on each side.','خماسية القطر: قطران على كل جانب.']],['1','0','4']),
  Q('Why is multiplication by t tridiagonal?','لماذا يكون الضرب في t ثلاثي القطر؟',['By the three-term recurrence, `t P_n^*` involves only `P_{n−1}^*`, `P_n^*`, `P_{n+1}^*`','بعلاقة التكرار الثلاثية لا تتضمن `t P_n^*` إلا `P_{n−1}^*` و `P_n^*` و `P_{n+1}^*`'],[['Orthogonality kills every other component.','التعامد يُعدم كل مركبة أخرى.']],[['Because t is positive','لأن t موجبة']]),
]);

lesson('503',79,[
  ['A basis that satisfies homogeneous Dirichlet conditions is built from three neighbours:','الأساس الذي يحقق شروط ديريشليه المتجانسة يُبنى من ثلاثة متجاورات:'],
  'φ_k = P_k + r_k P_{k+1} + q_k P_{k+2},     φ_k(1) = φ_k(−1) = 0',
  ['The two conditions use `P_n(1) = C(n + α, n)` and `P_n(−1) = (−1)^n C(n + β, n)`. For Legendre `φ_k = P_k − P_{k+2}`; for α = β the coefficient `r_k` vanishes by symmetry. The same coefficients work for the shifted basis on `[0, 1]` or `[0, L]`, since the end values do not change.','والشرطان يستخدمان `P_n(1) = C(n + α, n)` و `P_n(−1) = (−1)^n C(n + β, n)`. ولليجندر `φ_k = P_k − P_{k+2}`، وعند α = β ينعدم `r_k` بالتماثل. والمعاملات نفسها تصلح للأساس المزاح على `[0, 1]` أو `[0, L]` لأن القيم الطرفية لا تتغير.'],
],[
  Q('Find `q_k` for α = β = 1.','أوجد `q_k` عند α = β = 1.','−#f{k + 1}{k + 3}',['(k + 1) + q_k(k + 3) = 0'],['−1','−#f{k + 3}{k + 1}','#f{k + 1}{k + 3}']),
  Q('Write `φ_0` for α = β = 1 (`P_2^{(1,1)} = (15x^2 − 3)/4`).','اكتب `φ_0` عند α = β = 1 (`P_2^{(1,1)} = (15x^2 − 3)/4`).','#f{5}{4}(1 − x^2)',['φ_0 = 1 − #f{1}{3}·#f{15x^2 − 3}{4} = #f{5 − 5x^2}{4}'],['1 − x^2','#f{3}{4}(1 − x^2)','#f{5}{4}(1 + x^2)']),
  Q('Find `r_0` and `q_0` for α = 1, β = 0.','أوجد `r_0` و `q_0` عند α = 1 و β = 0.','r_0 = #f{2}{5},   q_0 = −#f{3}{5}',['x = 1:   1 + 2r_0 + 3q_0 = 0','x = −1:   1 − r_0 + q_0 = 0',['Then `φ_0 = (3/2)(1 − x^2)`.','وعندها `φ_0 = (3/2)(1 − x^2)`.']],['r_0 = 0,   q_0 = −1','r_0 = −#f{2}{5},   q_0 = −#f{3}{5}','r_0 = #f{3}{5},   q_0 = −#f{2}{5}']),
  Q('Why is `r_k = 0` when α = β?','لماذا يكون `r_k = 0` عندما α = β؟',['`P_k(−x) = (−1)^k P_k(x)`, so `P_k − c P_{k+2}` already vanishes at both ends','`P_k(−x) = (−1)^k P_k(x)` فتنعدم `P_k − c P_{k+2}` عند الطرفين معاً'],[['The two conditions become the same equation.','يصير الشرطان المعادلة نفسها.']],[['Because the weight is 1','لأن الوزن 1'],['It is not zero','ليس صفراً']]),
]);

lesson('503',80,[
  ['All matrices of this unit come from two ingredients: the power coefficients `a_{n,k}` and the norms `h_n^*`. In code the parameters α and β are usually called ``al1`` and ``bt1``:','كل مصفوفات هذه الوحدة تأتي من مكونين: معاملات القوى `a_{n,k}` والمعايير `h_n^*`. وفي الكود يُسمى الوسيطان α و β عادة ``al1`` و ``bt1``:'],
  '$from math import gamma\n\ndef coef(n, al1, bt1):\n    # power coefficients a_{n,k} of P_n^*\n    return [(-1)**(n - k) * gamma(n + bt1 + 1)\n            * gamma(n + k + al1 + bt1 + 1)\n            / (gamma(k + bt1 + 1)\n               * gamma(n + al1 + bt1 + 1)\n               * gamma(n - k + 1) * gamma(k + 1))\n            for k in range(n + 1)]\n\ndef hstar(n, al1, bt1):\n    return (gamma(n + al1 + 1) * gamma(n + bt1 + 1)\n            / ((2*n + al1 + bt1 + 1)\n               * gamma(n + al1 + bt1 + 1)\n               * gamma(n + 1)))',
  ['The fractional integration matrix of Lesson 75 is then a double sum with ``scipy.special.beta``:','ومصفوفة التكامل الكسري في الدرس 75 تصبح مجموعاً مزدوجاً باستخدام ``scipy.special.beta``:'],
  '$s = 0.0\nfor r, a in enumerate(coef(k, al1, bt1)):\n    for l, b in enumerate(coef(j, al1, bt1)):\n        s += (a * b * gamma(r + 1)\n              / gamma(r + mu + 1)\n              * B(r + mu + l + bt1 + 1, al1 + 1))\nC[k, j] = s / hstar(j, al1, bt1)',
],[
  Q('What does ``coef(1, 0, 1)`` return?','ماذا تعيد ``coef(1, 0, 1)``؟','$[-2.0, 3.0]',[['`P_1^{*(0,1)} = 3t − 2`.','`P_1^{*(0,1)} = 3t − 2`.']],['$[3.0, -2.0]','$[-1.0, 2.0]','$[2.0, -3.0]']),
  Q('What does ``hstar(1, 0, 1)`` return?','ماذا تعيد ``hstar(1, 0, 1)``؟','$0.25',[['`h_1^* = 1/4` (Lesson 66).','`h_1^* = 1/4` (الدرس 66).']],['$1.0','$0.5','$0.125']),
  Q('With M = 2, μ = 1, ``al1 = bt1 = 0``, what is the first row of C?','مع M = 2 و μ = 1 و ``al1 = bt1 = 0`` ما الصف الأول من C؟','(#f{1}{2},  #f{1}{2},  0)',['∫_0^t P_0^* = #f{P_0^* + P_1^*}{2}'],['(1,  0,  0)','(0,  #f{1}{2},  #f{1}{2})','(#f{1}{2},  0,  #f{1}{2})']),
  Q('Why does ``hstar(0, -0.5, -0.5)`` fail (Chebyshev)?','لماذا تفشل ``hstar(0, -0.5, -0.5)`` (تشيبيشيف)؟',['The denominator is `0·Γ(0)`; use `h_0^* = Γ(α + 1)Γ(β + 1)/Γ(α + β + 2)`, which gives π','المقام `0·Γ(0)`، فاستخدم `h_0^* = Γ(α + 1)Γ(β + 1)/Γ(α + β + 2)` التي تعطي π'],['(α + β + 1)Γ(α + β + 1) = Γ(α + β + 2)'],[['Because gamma cannot take negative numbers','لأن gamma لا تقبل الأعداد السالبة'],['It does not fail','لا تفشل']]),
]);

/* ---- 503 · Unit 9 (lessons 81–90): spectral methods with Jacobi polynomials ---- */
lesson('503',81,[
  ['In a Jacobi–Galerkin method the trial and test functions are the same basis and the residual is made orthogonal to it. For `−u″ = f`, `u(±1) = 0`, the basis `φ_k = (1 − x^2)P_k^{(1,1)}` gives a diagonal stiffness matrix:','في طريقة جاكوبي–جاليركن تكون دوال التجربة والاختبار الأساسَ نفسه ويُجعل الباقي عمودياً عليه. ولـ `−u″ = f` مع `u(±1) = 0` يعطي الأساس `φ_k = (1 − x^2)P_k^{(1,1)}` مصفوفة جساءة قطرية:'],
  '∫_{−1}^{1} φ_j′ φ_k′ dx = 4(k + 1)^2 #f{2}{2k + 3} δ_{jk},     c_k = #f{⟨f, φ_k⟩}{4(k + 1)^2·2/(2k + 3)}',
  ['So the solve costs `O(N)` once the right-hand side is known. The basis is proportional to `P_k − P_{k+2}`, Shen’s Legendre basis.','فتكلفة الحل `O(N)` متى عُرف الطرف الأيمن. والأساس متناسب مع `P_k − P_{k+2}` وهو أساس شين لليجندر.'],
],[
  Q('Find the stiffness entry for k = 0.','أوجد عنصر الجساءة عند k = 0.','#f{8}{3}',['4·1·#f{2}{3}',['Directly: `∫(−2x)^2 dx = 8/3`.','مباشرة: `∫(−2x)^2 dx = 8/3`.']],['#f{4}{3}','2','#f{16}{3}']),
  Q('Solve `−u″ = 2`, `u(±1) = 0` with the single function `φ_0 = 1 − x^2`.','حل `−u″ = 2` مع `u(±1) = 0` بالدالة الوحيدة `φ_0 = 1 − x^2`.','c_0 = 1,   u = 1 − x^2',['⟨2, φ_0⟩ = #f{8}{3}','c_0 = #f{8/3}{8/3}',['Exact: the solution is a polynomial in the space.','مضبوط: الحل كثيرة حدود في الفضاء.']],['c_0 = 2,   u = 2(1 − x^2)','c_0 = #f{1}{2},   u = #f{1 − x^2}{2}','c_0 = #f{3}{8},   u = #f{3}{8}(1 − x^2)']),
  Q('Find the stiffness entry for k = 1.','أوجد عنصر الجساءة عند k = 1.','#f{32}{5}',['4·4·#f{2}{5}'],['#f{8}{5}','#f{16}{5}','#f{72}{7}']),
  Q('Why does the Galerkin system decouple here?','لماذا ينفصل نظام جاليركن هنا؟',['`φ_k′ = −2(k + 1)P_{k+1}` and the Legendre polynomials are orthogonal','`φ_k′ = −2(k + 1)P_{k+1}` وكثيرات ليجندر متعامدة'],[['Lesson 59.','الدرس 59.']],[['Because f is constant','لأن f ثابتة'],['Because N is small','لأن N صغير']]),
]);

lesson('503',82,[
  ['A tau method expands u in the plain polynomials, makes the residual orthogonal to the first `N + 1 − m` of them, and uses the remaining m equations for the m boundary conditions. For `u′ + u = 0`, `u(0) = 1` on [0, 1] with shifted Legendre:','طريقة تاو تنشر u بالكثيرات العادية وتجعل الباقي عمودياً على أول `N + 1 − m` منها، وتستخدم المعادلات m الباقية للشروط الحدية m. فلـ `u′ + u = 0` مع `u(0) = 1` على [0, 1] بليجندر المزاحة:'],
  'u = Σ_{n=0}^{N} c_n P_n^*,     ⟨u′ + u, P_k^*⟩ = 0  (k < N),     Σ c_n P_n^*(0) = 1',
  ['The method is simple and works for any boundary condition, but the matrices are not sparse in general.','والطريقة بسيطة وتصلح لأي شرط حدي لكن مصفوفاتها ليست قليلة العناصر عموماً.'],
],[
  Q('Solve the tau system for N = 1.','حل نظام تاو عند N = 1.','c_0 = #f{2}{3},   c_1 = −#f{1}{3}',['u′ = 2c_1:   2c_1 + c_0 = 0','u(0) = c_0 − c_1 = 1'],['c_0 = #f{1}{3},   c_1 = −#f{2}{3}','c_0 = 1,   c_1 = −#f{1}{2}','c_0 = #f{2}{3},   c_1 = #f{1}{3}']),
  Q('Find `u(1)` for N = 1 and compare with `e^{−1} ≈ 0.3679`.','أوجد `u(1)` عند N = 1 وقارن بـ `e^{−1} ≈ 0.3679`.','#f{1}{3} ≈ 0.3333',['u(1) = c_0 + c_1'],['#f{2}{3}','1','0']),
  Q('For N = 2 the tau solution gives `u(1) = 7/19`. Find its error.','عند N = 2 يعطي حل تاو `u(1) = 7/19`. أوجد خطأه.','≈ 5.4 × 10^{−4}',['#f{7}{19} = 0.36842,   0.36842 − 0.36788'],['≈ 3.5 × 10^{−2}','≈ 5.4 × 10^{−2}','0']),
  Q('How many residual equations are used with N = 3 and one boundary condition?','كم معادلة باقٍ تُستخدم مع N = 3 وشرط حدي واحد؟','3',['N + 1 − m = 4 − 1'],['4','2','1']),
]);

lesson('503',83,[
  ['A collocation method imposes the equation at chosen points, usually Gauss–Jacobi or Gauss–Jacobi–Radau nodes, together with the boundary conditions. For `u′ + u = 0`, `u(0) = 1`, the one-parameter trial `u = 1 + bt` and one collocation point `t_1` give','طريقة التجميع تفرض المعادلة عند نقاط مختارة، عادة عقد جاوس–جاكوبي أو جاوس–جاكوبي–راداو، مع الشروط الحدية. ولـ `u′ + u = 0` مع `u(0) = 1` يعطي الحل التجريبي `u = 1 + bt` ونقطة تجميع واحدة `t_1`'],
  'b + 1 + b t_1 = 0   ⇒   b = −#f{1}{1 + t_1},     u(1) = #f{t_1}{1 + t_1}',
  ['The choice of (α, β) decides where the point lies, and so changes the answer. Collocation is the easiest method for nonlinear and variable-coefficient problems.','واختيار (α, β) يحدد موضع النقطة فيغيّر الجواب. والتجميع أسهل الطرق للمسائل غير الخطية وذات المعاملات المتغيرة.'],
],[
  Q('Use the Legendre point `t_1 = 1/2`. Find `u(1)`.','استخدم نقطة ليجندر `t_1 = 1/2`. أوجد `u(1)`.','#f{1}{3}',['#f{1/2}{3/2}'],['#f{1}{2}','#f{2}{3}','#f{1}{4}']),
  Q('Use the point of α = 1, β = 0 (`x = −1/3`, so `t_1 = 1/3`). Find `u(1)`.','استخدم نقطة α = 1 و β = 0 (`x = −1/3` أي `t_1 = 1/3`). أوجد `u(1)`.','#f{1}{4}',['#f{1/3}{4/3}'],['#f{1}{3}','#f{2}{5}','#f{3}{4}']),
  Q('Use the point of α = 0, β = 1 (`x = 1/3`, so `t_1 = 2/3`). Find `u(1)`.','استخدم نقطة α = 0 و β = 1 (`x = 1/3` أي `t_1 = 2/3`). أوجد `u(1)`.','#f{2}{5}',['#f{2/3}{5/3}'],['#f{1}{3}','#f{1}{4}','#f{3}{5}']),
  Q('Which method is usually easiest for a nonlinear term such as `u^2`?','أي طريقة عادةً أسهل لحد غير خطي مثل `u^2`؟',['Collocation: the term is just evaluated at the nodes','التجميع: يُحسب الحد عند العقد فقط'],[['Galerkin and tau need projections of `u^2`.','جاليركن وتاو تحتاجان إسقاطات `u^2`.']],[['Galerkin','جاليركن'],['Tau','تاو']]),
]);

lesson('503',84,[
  ['For two-point boundary-value problems the boundary-adapted basis of Lessons 59 and 79 removes the boundary equations. For `u″ = g`, `u(±1) = 0`:','لمسائل القيم الحدية ذات النقطتين يزيل الأساس المهيأ للحدود (الدرسان 59 و 79) المعادلات الحدية. فلـ `u″ = g` مع `u(±1) = 0`:'],
  'u = Σ_k c_k φ_k,   φ_k = (1 − x^2)P_k^{(1,1)},     −#f{8(k + 1)^2}{2k + 3} c_k = ⟨g, φ_k⟩',
  ['Non-homogeneous conditions are handled by subtracting a simple function that satisfies them, for example a straight line.','والشروط غير المتجانسة تُعالج بطرح دالة بسيطة تحققها، مثل خط مستقيم.'],
],[
  Q('Solve `u″ = 6x`, `u(±1) = 0`. Find `c_1`.','حل `u″ = 6x` مع `u(±1) = 0`. أوجد `c_1`.','−#f{1}{2}',['⟨6x, φ_1⟩ = ∫ 6x·2x(1 − x^2) dx = #f{16}{5}','−#f{32}{5}c_1 = #f{16}{5}',['Check: `u = x^3 − x = −(1/2)·2x(1 − x^2)`.','تحقق: `u = x^3 − x = −(1/2)·2x(1 − x^2)`.']],['#f{1}{2}','−1','−#f{1}{4}']),
  Q('For the same problem, what is `c_0`?','للمسألة نفسها ما `c_0`؟','0',['⟨6x, 1 − x^2⟩ = 0'],['−#f{1}{2}','1','#f{3}{8}']),
  Q('Which function removes the conditions `u(−1) = 1`, `u(1) = 3`?','أي دالة تزيل الشرطين `u(−1) = 1` و `u(1) = 3`؟','ℓ(x) = 2 + x',['ℓ(−1) = 1,   ℓ(1) = 3'],['ℓ(x) = 1 + 3x','ℓ(x) = 3 − x','ℓ(x) = 2x + 1']),
  Q('After writing `u = ℓ + v`, which equation does v solve when `u″ = g`?','بعد كتابة `u = ℓ + v` أي معادلة تحلها v عندما `u″ = g`؟','v″ = g,   v(±1) = 0',['ℓ″ = 0'],['v″ = g − ℓ,   v(±1) = 0','v″ = g,   v(±1) = ℓ(±1)','v″ = 0,   v(±1) = 0']),
]);

lesson('503',85,[
  ['A fractional equation `D^{ν}y = f(t, y)`, `0 < ν ≤ 1`, `y(0) = y_0`, is first written in integrated form:','المعادلة الكسرية `D^{ν}y = f(t, y)` مع `0 < ν ≤ 1` و `y(0) = y_0` تُكتب أولاً بالصيغة التكاملية:'],
  'y(t) = y_0 + D^{−ν} f(t, y)',
  ['This contains the initial condition, needs only the integration matrix `I^{(ν)}` of Lesson 75, and avoids the singular behaviour of the derivative at t = 0. With the fractional basis and λ = ν, the typical solution terms `t^{kν}` become polynomials in s.','وهذه الصيغة تحوي الشرط الابتدائي، ولا تحتاج إلا مصفوفة التكامل `I^{(ν)}` في الدرس 75، وتتجنب السلوك الشاذ للمشتقة عند t = 0. ومع الأساس الكسري و λ = ν تصبح حدود الحل النموذجية `t^{kν}` كثيرات حدود في s.'],
],[
  Q('Solve `D^{1/2}y = 1`, `y(0) = 2`.','حل `D^{1/2}y = 1` مع `y(0) = 2`.','y = 2 + #f{2#r{t}}{#r{π}}',['y = 2 + D^{−1/2}1 = 2 + #f{t^{1/2}}{Γ(3/2)}'],['y = 2 + #r{t}','y = 2 + #f{#r{t}}{#r{π}}','y = 2t + #f{2#r{t}}{#r{π}}']),
  Q('With λ = 1/2, what is the degree of that solution in s?','مع λ = 1/2 ما درجة ذلك الحل في s؟','1',['2 + #f{2}{#r{π}}s'],['2','0','#f{1}{2}']),
  Q('Write `D^{1/2}y + y = 0`, `y(0) = 1` in integrated form.','اكتب `D^{1/2}y + y = 0` مع `y(0) = 1` بالصيغة التكاملية.','y = 1 − D^{−1/2}y',['D^{−1/2}D^{1/2}y = y − y(0)'],['y = 1 + D^{−1/2}y','y = −D^{1/2}y','y = 1 − D^{1/2}y']),
  Q('Write the matrix equation for `y = c^TΦ` in that integrated form (`D^{−μ}Φ ≈ I^{(μ)}Φ`, `1 = e_0^TΦ`).','اكتب المعادلة المصفوفية لـ `y = c^TΦ` في تلك الصيغة التكاملية (`D^{−μ}Φ ≈ I^{(μ)}Φ` و `1 = e_0^TΦ`).','(I + (I^{(1/2)})^T) c = e_0',['c^TΦ = e_0^TΦ − c^T I^{(1/2)} Φ'],['(I − (I^{(1/2)})^T) c = e_0','(I + I^{(1/2)}) c = e_0','I^{(1/2)} c = e_0']),
]);

lesson('503',86,[
  ['Multi-term equations such as `y′ + D^{1/2}y = f` are integrated by the highest order. With `y(0) = 0`, applying `D^{−1}` gives','المعادلات متعددة الحدود مثل `y′ + D^{1/2}y = f` تُكامل بأعلى رتبة. ومع `y(0) = 0` يعطي تطبيق `D^{−1}`'],
  'y + D^{−1/2}y = D^{−1}f',
  ['The natural λ is the greatest common divisor of all orders and of the expected solution powers. An equation of highest order ν needs `⌈ν⌉` initial conditions.','و λ الطبيعية هي القاسم المشترك الأكبر لكل الرتب ولقوى الحل المتوقعة. والمعادلة التي أعلى رتبها ν تحتاج `⌈ν⌉` شرطاً ابتدائياً.'],
],[
  Q('Choose λ for `y′ + D^{1/2}y = f`.','اختر λ لـ `y′ + D^{1/2}y = f`.','λ = #f{1}{2}',['gcd(1, #f{1}{2})'],['λ = 1','λ = #f{1}{4}','λ = #f{3}{2}']),
  Q('How many initial conditions does `D^{3/2}y + y = f` need?','كم شرطاً ابتدائياً تحتاج `D^{3/2}y + y = f`؟','2',['⌈#f{3}{2}⌉ = 2:   y(0),  y′(0)'],['1','3','0']),
  Q('Write `D^{3/2}y + y = f` with `y(0) = y′(0) = 0` in integrated form.','اكتب `D^{3/2}y + y = f` مع `y(0) = y′(0) = 0` بالصيغة التكاملية.','y + D^{−3/2}y = D^{−3/2}f',['D^{−3/2}D^{3/2}y = y − y(0) − t y′(0) = y'],['y + D^{−1/2}y = D^{−1}f','y = D^{−3/2}f','y + D^{3/2}y = f']),
  Q('Choose λ for `D^{0.6}y + D^{0.9}y = f`.','اختر λ لـ `D^{0.6}y + D^{0.9}y = f`.','λ = 0.3',['gcd(0.6, 0.9)'],['λ = 0.6','λ = 0.9','λ = 0.15']),
]);

lesson('503',87,[
  ['For a time-fractional equation `D_t^{ν}u = u_{xx} + f` the solution is written as a double expansion, Jacobi (or Legendre) in x and fractional functions in t:','للمعادلة الكسرية الزمنية `D_t^{ν}u = u_{xx} + f` يُكتب الحل مفكوكاً مزدوجاً: جاكوبي (أو ليجندر) في x والدوال الكسرية في t:'],
  'u_{N,M}(x, t) = Σ_{i=0}^{N} Σ_{j=0}^{M} y_{ij} L_i(x) J_j^{λ}(t) = 𝔏^T 𝒴 𝔏',
  ['The unknowns `y_{ij}` are found from `(N − 1)(M + 1)` interior equations and `2(M + 1)` boundary equations; matrix identities such as `vec(A𝒴B) = (B^T ⊗ A) vec(𝒴)` turn them into one linear system.','وتُحسب المجاهيل `y_{ij}` من `(N − 1)(M + 1)` معادلة داخلية و `2(M + 1)` معادلة حدية، وتحوّلها متطابقات مثل `vec(A𝒴B) = (B^T ⊗ A) vec(𝒴)` إلى نظام خطي واحد.'],
],[
  Q('How many unknowns are there for N = 4, M = 3?','كم مجهولاً عند N = 4 و M = 3؟','20',['(N + 1)(M + 1) = 5·4'],['12','16','15']),
  Q('How many of the equations are interior equations for N = 4, M = 3?','كم من المعادلات معادلات داخلية عند N = 4 و M = 3؟','12',['(N − 1)(M + 1) = 3·4'],['8','20','15']),
  Q('Write `vec(A𝒴B)` as a matrix times `vec(𝒴)`.','اكتب `vec(A𝒴B)` بصورة مصفوفة مضروبة في `vec(𝒴)`.','(B^T ⊗ A) vec(𝒴)',[['Column-stacking `vec`.','`vec` برص الأعمدة.']],['(A ⊗ B) vec(𝒴)','(A^T ⊗ B) vec(𝒴)','(B ⊗ A^T) vec(𝒴)']),
  Q('Write the equation in integrated form in t, with `u(x, 0) = u_0(x)`.','اكتب المعادلة بالصيغة التكاملية في t مع `u(x, 0) = u_0(x)`.','u = u_0 + D_t^{−ν}(u_{xx} + f)',['D_t^{−ν}D_t^{ν}u = u − u_0'],['u = D_t^{ν}(u_{xx} + f)','u = u_0 + u_{xx} + f','u = u_0 − D_t^{−ν}(u_{xx} + f)']),
]);

lesson('503',88,[
  ['In two space dimensions the basis is a tensor product, and the discrete Laplacian is a sum of Kronecker products:','في بعدين مكانيين يكون الأساس ضرباً تنسورياً، والمؤثر اللابلاسي المتقطع مجموع ضروب كرونيكر:'],
  'u = Σ y_{ijk} φ_i(x) φ_j(y) J_k^{λ}(t),     Δ_h = D^{(2)} ⊗ I + I ⊗ D^{(2)}',
  ['The number of unknowns is `(N_x + 1)(N_y + 1)(M + 1)`, so dense solves become expensive quickly. Matrix diagonalization in space, or iterative solvers that use the Kronecker structure, keep the cost manageable.','وعدد المجاهيل `(N_x + 1)(N_y + 1)(M + 1)` فتصبح الحلول الكثيفة مكلفة بسرعة. والتقطير المصفوفي في المكان، أو الحلّالات التكرارية التي تستغل بنية كرونيكر، تبقي التكلفة معقولة.'],
],[
  Q('How many unknowns for `N_x = N_y = 10`, M = 5?','كم مجهولاً عند `N_x = N_y = 10` و M = 5؟','726',['11·11·6'],['600','121','66']),
  Q('What is the size of `D^{(2)} ⊗ I` when each factor is 11 × 11?','ما حجم `D^{(2)} ⊗ I` عندما يكون كل عامل 11 × 11؟','121 × 121',['11·11 = 121'],['22 × 22','11 × 11','1331 × 1331']),
  Q('About how many operations does a dense solve of the 726 × 726 system take?','كم عملية تقريباً يحتاج الحل الكثيف للنظام 726 × 726؟','≈ 2.6 × 10^8',['#f{2}{3}n^3 = #f{2}{3}·726^3 ≈ #f{2}{3}·3.83 × 10^8',['Gaussian elimination (LU).','الحذف الجاوسي (LU).']],['≈ 5 × 10^5','≈ 3.8 × 10^{10}','≈ 726']),
  Q('Why does doubling `N_x = N_y` multiply the dense cost by about 64?','لماذا تضاعف `N_x = N_y` يضرب تكلفة الحل الكثيف في 64 تقريباً؟',['The number of unknowns grows by 4 and the cost by `4^3`','عدد المجاهيل يكبر 4 مرات والتكلفة `4^3` مرة'],['n ∝ N^2,   n^3 ∝ N^6,   2^6 = 64'],[['Because the matrix is dense','لأن المصفوفة كثيفة'],['It multiplies by 4','بل تضرب في 4']]),
]);

lesson('503',89,[
  ['Volterra integral equations `y(t) = f(t) + ∫_0^t K(t, s) y(s) ds` fit the same framework: with `K = 1` the integral is the integration matrix, and a weakly singular kernel `(t − s)^{μ−1}/Γ(μ)` gives `D^{−μ}` and the matrix `I^{(μ)}`:','المعادلات التكاملية لفولتيرا `y(t) = f(t) + ∫_0^t K(t, s) y(s) ds` تدخل الإطار نفسه: مع `K = 1` يكون التكامل مصفوفة التكامل، والنواة الشاذة ضعيفاً `(t − s)^{μ−1}/Γ(μ)` تعطي `D^{−μ}` والمصفوفة `I^{(μ)}`:'],
  'y = c^TΦ:     c = f + P^T c     (K = 1)',
  ['Integro-differential equations are first integrated, so that all terms become integrals of y.','والمعادلات التكاملية التفاضلية تُكامل أولاً حتى تصير كل الحدود تكاملات لـ y.'],
],[
  Q('Solve `y = 1 + ∫_0^t y` with shifted Legendre, M = 1 (`P = #m{1/2, 1/2 ;; −1/6, 0}`). Find `c_0`.','حل `y = 1 + ∫_0^t y` بليجندر المزاحة مع M = 1 (`P = #m{1/2, 1/2 ;; −1/6, 0}`). أوجد `c_0`.','#f{12}{7}',['c_0 = 1 + #f{c_0}{2} − #f{c_1}{6},   c_1 = #f{c_0}{2}','c_0(1 − #f{1}{2} + #f{1}{12}) = 1'],['#f{6}{7}','2','#f{7}{12}']),
  Q('Find `c_1`.','أوجد `c_1`.','#f{6}{7}',['c_1 = #f{c_0}{2}'],['#f{12}{7}','#f{3}{7}','1']),
  Q('Compare `c_0` with the exact mean of `e^t` on [0, 1].','قارن `c_0` بالمتوسط المضبوط لـ `e^t` على [0, 1].','c_0 = 1.7143,   e − 1 = 1.7183',['#f{12}{7} = 1.71429,   ∫_0^1 e^t dt = e − 1'],['c_0 = 1.7143,   e = 2.7183','c_0 = 0.8571,   e − 1 = 1.7183','c_0 = 2.5714,   e − 1 = 1.7183']),
  Q('Which kernel turns the integral into `D^{−μ}y`?','أي نواة تحوّل التكامل إلى `D^{−μ}y`؟','K(t, s) = #f{(t − s)^{μ−1}}{Γ(μ)}',[['The Riemann–Liouville integral.','تكامل ريمان–ليوفيل.']],['K(t, s) = (t − s)^{μ}','K(t, s) = e^{−μ(t − s)}','K(t, s) = 1']),
]);

lesson('503',90,[
  ['Which (α, β) is best depends on the problem. For the one-point collocation of Lesson 83, `u′ + u = 0`, `u(0) = 1`, the three choices give','أي (α, β) أفضل يعتمد على المسألة. ففي تجميع النقطة الواحدة في الدرس 83 لـ `u′ + u = 0` مع `u(0) = 1` تعطي الخيارات الثلاثة'],
  '(0, 0):  #f{1}{3},     (1, 0):  #f{1}{4},     (0, 1):  #f{2}{5},     e^{−1} = 0.3679',
  ['General rules: use weights that match end singularities or boundary conditions; prefer α, β ≤ 0 for interpolation; use Legendre (α = β = 0) when nothing special is known, because its Galerkin matrices are the simplest. Always test with a manufactured solution.','قواعد عامة: استخدم أوزاناً تطابق الانفرادات الطرفية أو الشروط الحدية، وفضّل α, β ≤ 0 للاستكمال، واستخدم ليجندر (α = β = 0) حين لا يُعرف شيء خاص لأن مصفوفات جاليركن له أبسط. واختبر دائماً بحل مُصنَّع.'],
],[
  Q('Which of the three points gives the smallest error at t = 1?','أي النقاط الثلاث تعطي أصغر خطأ عند t = 1؟','(α, β) = (0, 1)',['|0.4 − 0.3679| = 0.032,   |0.3333 − 0.3679| = 0.035,   |0.25 − 0.3679| = 0.118'],['(α, β) = (0, 0)','(α, β) = (1, 0)','(α, β) = (1, 1)']),
  Q('Find the error of the (1, 0) point.','أوجد خطأ النقطة (1, 0).','≈ 0.118',['0.3679 − 0.25'],['≈ 0.032','≈ 0.035','≈ 0.25']),
  Q('What is a manufactured solution?','ما الحل المُصنَّع؟',['A chosen exact u; f is computed from it, so the error can be measured','u مضبوطة مختارة تُحسب منها f فيمكن قياس الخطأ'],[['It tests the code on a problem with a known answer.','يختبر الكود على مسألة جوابها معلوم.']],[['The numerical solution itself','الحل العددي نفسه'],['A solution found by a computer algebra system','حل يجده نظام جبر حاسوبي']]),
  Q('Which choice is the safe default when nothing special is known?','أي اختيار هو الافتراضي الآمن حين لا يُعرف شيء خاص؟','α = β = 0',[['Legendre: simplest matrices and good interpolation.','ليجندر: أبسط المصفوفات واستكمال جيد.']],['α = β = 2','α = 1,   β = 0','α = β = −0.9']),
]);

export const MS503 = true;
