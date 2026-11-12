/* MATH/COMP 501 — the course's road map (10 units × 10 lessons) and its lessons. The authoring markup is described in mscore.js. */
import { course, lesson, Q } from './mscore.js';

/* ---------------- 501: Spectral methods ---------------- */
course('501','MATH 501','Spectral Methods for Differential Equations','الطرق الطيفية لحل المعادلات التفاضلية (501 ريض)',`
# Unit 1 · The idea and the Legendre polynomials | الوحدة 1 · الفكرة وكثيرات حدود ليجندر
What is a spectral method? Weighted residuals | ما الطريقة الطيفية؟ البواقي الموزونة
Legendre polynomials: Bonnet's recurrence | كثيرات حدود ليجندر: علاقة التكرار (بونيه)
Rodrigues' formula | صيغة رودريغز
Legendre's differential equation and its Sturm–Liouville form | معادلة ليجندر التفاضلية وصيغة شتورم–ليوفيل
Orthogonality and the norm | التعامد والمعيار
The generating function | الدالة المولدة
The explicit formula and numerical stability | الصيغة الصريحة والاستقرار العددي
Parity and special values | التماثل والقيم الخاصة
Bounds and behaviour of P_n | الحدود وسلوك P_n
Zeros and interlacing | الجذور وتشابكها
# Unit 2 · Properties and shifted forms | الوحدة 2 · الخواص والصيغ المزاحة
Derivative relations of Legendre polynomials | علاقات المشتقات لكثيرات حدود ليجندر
The Christoffel–Darboux formula | صيغة كريستوفل–داربو
Moving to the interval [0,T] | الانتقال إلى المجال [0,T]
Shifted Legendre polynomials P_n*(t) | كثيرات حدود ليجندر المزاحة P_n*(t)
Shifted Legendre on [0,γ]: the analytic form of L_i^γ(x) | ليجندر المزاحة على [0,γ]: الصيغة التحليلية لـ L_i^γ(x)
Function spaces, inner products and norms | فضاءات الدوال والضرب الداخلي والمعايير
Fractional Legendre functions L_n^λ(t) = P_n(2t^λ − 1) | دوال ليجندر الكسرية L_n^λ(t) = P_n(2t^λ − 1)
The coefficients E_{n,r} and the weight λt^{λ−1} | المعاملات E_{n,r} والوزن λt^{λ−1}
The Sturm–Liouville problem of the fractional functions | مسألة شتورم–ليوفيل للدوال الكسرية
Why fractional powers? Non-smooth solutions | لماذا القوى الكسرية؟ الحلول غير الملساء
# Unit 3 · Series expansions | الوحدة 3 · المتسلسلات
Projection coefficients c_n | معاملات الإسقاط c_n
Best approximation in the L² norm | أفضل تقريب في معيار L²
Parseval's identity and the truncation error | متطابقة بارسيفال وخطأ القطع
Closed-form expansions: powers of x | مفكوكات مغلقة: قوى x
Expansions of |x|, sign(x) and e^{ax} | مفكوكات |x| و sign(x) و e^{ax}
How fast coefficients decay: analytic functions | سرعة تناقص المعاملات: الدوال التحليلية
Algebraic decay and end singularities | التناقص الجبري وانفراد الطرف
Error and the Gibbs phenomenon | الخطأ وظاهرة جيبس
Expansion (2.10) in the fractional functions | المفكوك (2.10) بالدوال الكسرية
Choosing λ for a real solution: λ = gcd(β_1, β_2, …) | اختيار λ لحل حقيقي: λ = gcd(β_1, β_2, …)
# Unit 4 · Numerical quadrature | الوحدة 4 · التكامل العددي
From points to integrals: quadrature rules | من النقاط إلى التكامل: قواعد التربيع
Weights from the Lagrange functions | الأوزان من دوال لاجرانج
The Gauss–Legendre rule | قاعدة جاوس–ليجندر
Degree of exactness 2n − 1 | درجة الدقة 2n − 1
The error law of Gauss quadrature | قانون الخطأ لتربيع جاوس
The Gauss–Lobatto rule | قاعدة جاوس–لوباتو
The Gauss–Radau rule | قاعدة جاوس–رادو
The Golub–Welsch method and the Jacobi matrix | طريقة Golub–Welsch ومصفوفة جاكوبي
Mapped nodes t_i = s_i^{1/λ} and the weighted rule | العقد المحولة t_i = s_i^{1/λ} والقاعدة الموزونة
Comparing the rules | مقارنة القواعد
# Unit 5 · Interpolation and differentiation matrices | الوحدة 5 · الاستكمال ومصفوفات التفاضل
Lagrange functions and the interpolating polynomial | دوال لاجرانج وكثيرة حدود الاستكمال
The interpolation error law | قانون خطأ الاستكمال
The barycentric formula | الصيغة الباريسنترية
Barycentric weights on Gauss and Lobatto points | الأوزان الباريسنترية على نقاط جاوس ولوباتو
The Lebesgue constant | ثابت ليبيغ
The Runge phenomenon and the choice of points | ظاهرة رونج واختيار النقاط
The differentiation matrix D_{ij} = ℓ_j′(x_i) | مصفوفة التفاضل D_{ij} = ℓ_j′(x_i)
Higher derivatives and the growth of ‖D‖ | المشتقات العليا ونمو ‖D‖
Between values and coefficients: the matrix V | بين القيم والمعاملات: المصفوفة V
Aliasing in discrete coefficients | التداخل (aliasing) في المعاملات المتقطعة
# Unit 6 · Chebyshev and Jacobi bases | الوحدة 6 · أساسا تشيبيشيف وجاكوبي
Chebyshev polynomials: the cosine definition | كثيرات حدود تشيبيشيف: التعريف بجيب التمام
Chebyshev recurrence, differential equation and explicit formula | تشيبيشيف: التكرار والمعادلة التفاضلية والصيغة الصريحة
Chebyshev orthogonality and the second kind | تعامد تشيبيشيف والنوع الثاني
Zeros, extrema and the minimax property | الجذور والقيم القصوى وخاصية أصغر قيمة عظمى
The Gauss–Chebyshev rule and Clenshaw's algorithm | قاعدة جاوس–تشيبيشيف وخوارزمية كلينشو
The Chebyshev series compared with Legendre | متسلسلة تشيبيشيف ومقارنتها بليجندر
Shifted and fractional Chebyshev functions | دوال تشيبيشيف المزاحة والكسرية
Jacobi polynomials as the general family | كثيرات حدود جاكوبي بوصفها العائلة العامة
The Gauss–Jacobi rule | قاعدة جاوس–جاكوبي
Fractional Jacobi functions J_n^λ(t) | دوال جاكوبي الكسرية J_n^λ(t)
# Unit 7 · Operational matrices | الوحدة 7 · المصفوفات التشغيلية
The first-derivative matrix D^{(1)} on [0,γ] | مصفوفة المشتقة الأولى D^{(1)} على [0,γ]
Theorem 3.1: the second-derivative matrix D^{(2)} | النظرية 3.1: مصفوفة المشتقة الثانية D^{(2)}
Proof of Theorem 3.1 from P_r″ on [−1,1] | إثبات النظرية 3.1 من P_r″ على [−1,1]
Relations: D^{(2)} = (D^{(1)})², nilpotency | علاقات: D^{(2)} = (D^{(1)})² وانعدام القوى
The integration matrix J | مصفوفة التكامل J
Fractional integration of the basis, term by term | التكامل الكسري للأساس حداً بحد
Projecting t^{kλ+μ} onto the basis: the numbers c_{k,j} | إسقاط t^{kλ+μ} على الأساس: الأعداد c_{k,j}
Theorem 3.2: the fractional integration matrix χ_{−μ}^λ(i,j) | النظرية 3.2: مصفوفة التكامل الكسري χ_{−μ}^λ(i,j)
A hand example of Theorem 3.2 and the matched case μ/λ ∈ ℕ | مثال يدوي للنظرية 3.2 وحالة التوافق μ/λ ∈ ℕ
The product matrix and Adams' linearization formula | مصفوفة الضرب وصيغة آدامز للخطية
# Unit 8 · The three classical methods | الوحدة 8 · الطرق الثلاث الكلاسيكية
The Galerkin method: formulation | طريقة جاليركن: الصياغة
The basis φ_k = P_k − P_{k+2} | الأساس φ_k = P_k − P_{k+2}
The diagonal stiffness matrix (4k + 6)δ_{jk} | مصفوفة الجساءة القطرية (4k + 6)δ_{jk}
The Tau method: formulation and boundary rows | طريقة تاو: الصياغة وصفوف الشروط الحدية
The exact problem a Tau approximation solves | المسألة المضبوطة التي يحلها تقريب تاو
The collocation method at interior points | طريقة التجميع عند النقاط الداخلية
Variable coefficients and nonlinear terms in collocation | المعاملات المتغيرة والحدود غير الخطية في التجميع
Condition numbers of the three methods | أعداد الشرط للطرق الثلاث
Comparing Galerkin, Tau and collocation | مقارنة جاليركن وتاو والتجميع
A complete fractional problem: D^α y = −y, y(0) = 1 | مسألة كسرية كاملة: D^α y = −y و y(0) = 1
# Unit 9 · The mapped Legendre method for fractional PDEs | الوحدة 9 · طريقة ليجندر المحوَّلة للمعادلات الجزئية الكسرية
The multi-term time-fractional problem and its conditions | المسألة الكسرية الزمنية متعددة الحدود وشروطها
The integrated form: applying D^{−μ_s} | الصيغة التكاملية: تطبيق D^{−μ_s}
Reading the function h: where initial values enter | قراءة الدالة h: أين تدخل القيم الابتدائية
The space–time approximation y_{N,M} and the matrix 𝒴 | التقريب الفضائي الزمني y_{N,M} والمصفوفة 𝒴
From operators to matrix products | من المؤثرات إلى ضرب المصفوفات
The residual ℜ and the algebraic system | الباقي ℜ والنظام الجبري
Collocation points and counting equations | نقاط التجميع وعدّ المعادلات
Solving the linear system directly | حل النظام الخطي مباشرة
Two space dimensions | البعدان المكانيان
Reproducing the paper's tables | إعادة إنتاج جداول البحث
# Unit 10 · Analysis, practice and research | الوحدة 10 · التحليل والتطبيق والبحث
The effect of λ on accuracy | أثر λ في الدقة
Error estimates for analytic solutions: ρ^{−N} | تقديرات الخطأ للحلول التحليلية: ρ^{−N}
Truncation in Theorem 3.2 and how to remove it | القطع في النظرية 3.2 وكيف يُزال
Time-dependent problems: method of lines | المسائل الزمنية: طريقة الخطوط
Nonlinear problems and Newton's iteration | المسائل غير الخطية وتكرار نيوتن
Problems on unbounded domains and mapped bases | المسائل على مجالات غير محدودة والأسس المحوَّلة
Checking a manufactured solution (u, f) | التحقق من حل مصنَّع (u, f)
Implementing the method in Mathematica, MATLAB and Python | تنفيذ الطريقة في Mathematica و MATLAB و Python
Reading and reproducing a research paper | قراءة بحث علمي وإعادة إنتاجه
Capstone project | مشروع ختامي
`);

lesson('501',1,[
  ['A spectral method writes the unknown solution as a finite sum of smooth functions defined on the whole interval (global basis functions):',
   'الطريقة الطيفية تكتب الحل المجهول مجموعاً منتهياً من دوال ملساء معرّفة على المجال كله (دوال أساسية شاملة):'],
  'u_N = Σ_k a_k φ_k,   R_N = 𝓛u_N − f',
  ['Substituting `u_N` in the equation `𝓛u = f` leaves the residual `R_N`. We cannot make it zero everywhere, so we make it zero «on average» against test functions `ψ_j`:',
   'بالتعويض عن `u_N` في المعادلة `𝓛u = f` يبقى الباقي `R_N`. لا نستطيع جعله صفراً في كل مكان، فنجعله صفراً «في المتوسط» مع دوال اختبار `ψ_j`:'],
  '∫_{−1}^{1} R_N ψ_j dx = 0,   j = 0, 1, …',
  ['The three classical methods differ only in the test functions: `ψ_j = φ_j` (Galerkin), `ψ_j = P_j` (Tau, with the boundary conditions as extra equations), `ψ_j = δ(x − x_j)` (collocation: `R_N(x_j) = 0`). For a smooth solution the error falls like `ρ^{−N}`, faster than any power of `1/N`.',
   'الطرق الثلاث الكلاسيكية تختلف في دوال الاختبار فقط: `ψ_j = φ_j` (جاليركن)، `ψ_j = P_j` (تاو، والشروط الحدية معادلات إضافية)، `ψ_j = δ(x − x_j)` (التجميع: `R_N(x_j) = 0`). وإذا كان الحل أملس تناقص الخطأ مثل `ρ^{−N}` أي أسرع من أي قوة لـ `1/N`.'],
],[
  Q('Solve `u′ + u = 0`, `u(0) = 1` on [0, 1] approximately with `u_1 = 1 + ax` by collocation at `x = 1/2`.',
    'حل `u′ + u = 0` و `u(0) = 1` على [0, 1] تقريبياً باستخدام `u_1 = 1 + ax` بطريقة التجميع عند `x = 1/2`.',
    'a = −#f{2}{3}',
    [['The trial function already satisfies `u(0) = 1`. Residual:','دالة التجربة تحقق `u(0) = 1` مسبقاً. الباقي:'], 'R_1 = u_1′ + u_1 = a + 1 + ax',
     ['Collocation: `R_1(1/2) = 0`:','التجميع: `R_1(1/2) = 0`:'], 'a + 1 + #f{a}{2} = 0  ⇒  a = −#f{2}{3}',
     ['So `u_1 = 1 − 2x/3`, and `u_1(1) = 0.3333` while the exact value is `e^{−1} = 0.3679`.','إذن `u_1 = 1 − 2x/3` و `u_1(1) = 0.3333` والقيمة المضبوطة `e^{−1} = 0.3679`.']],
    ['a = −#f{3}{5}','a = −1','a = −#f{1}{2}']),
  Q('Solve the same problem `u′ + u = 0`, `u(0) = 1` with `u_1 = 1 + ax` by the Galerkin method (test function `ψ = x`).',
    'حل المسألة نفسها `u′ + u = 0` و `u(0) = 1` باستخدام `u_1 = 1 + ax` بطريقة جاليركن (دالة الاختبار `ψ = x`).',
    'a = −#f{3}{5}',
    ['R_1 = a + 1 + ax', ['Galerkin: the residual is orthogonal to the basis function `x`:','جاليركن: الباقي عمودي على الدالة الأساسية `x`:'],
     '∫_0^1 (a + 1 + ax)·x dx = #f{a + 1}{2} + #f{a}{3} = 0', '#f{5a}{6} = −#f{1}{2}  ⇒  a = −#f{3}{5}',
     ['`u_1(1) = 0.4`: a different test function gives a different (here slightly less accurate at x = 1) approximation.','`u_1(1) = 0.4`: دالة اختبار مختلفة تعطي تقريباً مختلفاً.']],
    ['a = −#f{2}{3}','a = −#f{5}{6}','a = −#f{1}{2}']),
  Q('For `−u″ = 1`, `u(0) = u(1) = 0` take `u_1 = a·x(1 − x)`. Find `a` so that the residual vanishes.',
    'للمسألة `−u″ = 1` و `u(0) = u(1) = 0` خذ `u_1 = a·x(1 − x)`. أوجد `a` بحيث ينعدم الباقي.',
    'a = #f{1}{2}',
    ['u_1″ = −2a  ⇒  R_1 = −u_1″ − 1 = 2a − 1', ['The residual is a constant, so every method (Galerkin, Tau, collocation) gives the same equation `2a − 1 = 0`.','الباقي ثابت، فكل الطرق (جاليركن وتاو والتجميع) تعطي المعادلة نفسها `2a − 1 = 0`.'],
     ['`u_1 = x(1 − x)/2` is the exact solution: when the solution lies in the space of the basis, a spectral method finds it exactly.','`u_1 = x(1 − x)/2` هو الحل المضبوط: إذا وقع الحل داخل فضاء الأساس وجدته الطريقة الطيفية تماماً.']],
    ['a = 1','a = 2','a = #f{1}{4}']),
  Q('For `−u″ = x`, `u(0) = u(1) = 0` and `u_1 = a·x(1 − x)`, find `a` by the Galerkin method.',
    'للمسألة `−u″ = x` و `u(0) = u(1) = 0` مع `u_1 = a·x(1 − x)` أوجد `a` بطريقة جاليركن.',
    'a = #f{1}{4}',
    ['R_1 = 2a − x', '∫_0^1 (2a − x)·x(1 − x) dx = 2a·#f{1}{6} − (#f{1}{3} − #f{1}{4}) = #f{a}{3} − #f{1}{12} = 0', 'a = #f{1}{4}',
     ['Check at the midpoint: `u_1(1/2) = 1/16`, and the exact solution `u = (x − x^3)/6` also gives `1/16`.','تحقق عند المنتصف: `u_1(1/2) = 1/16` والحل المضبوط `u = (x − x^3)/6` يعطي `1/16` أيضاً.']],
    ['a = #f{1}{2}','a = #f{1}{6}','a = #f{1}{12}']),
]);

lesson('501',2,[
  ['The Legendre polynomials `P_n(x)` are the basis of this course. The fastest and most stable way to compute them is Bonnet’s three-term recurrence:',
   'كثيرات حدود ليجندر `P_n(x)` هي أساس هذا المقرر. وأسرع طريقة لحسابها وأكثرها استقراراً علاقة التكرار الثلاثية (بونيه):'],
  '(n + 1) P_{n+1}(x) = (2n + 1) x P_n(x) − n P_{n−1}(x),   P_0 = 1,   P_1 = x',
  ['Each step uses the two previous polynomials. The first ones are:','كل خطوة تستخدم كثيرتي الحدود السابقتين. وأولها:'],
  'P_2 = #f{3x^2 − 1}{2},   P_3 = #f{5x^3 − 3x}{2},   P_4 = #f{35x^4 − 30x^2 + 3}{8}',
  ['`P_n` has degree n, contains only even powers when n is even and only odd powers when n is odd, and `P_n(1) = 1`.',
   '`P_n` درجتها n، وتحتوي القوى الزوجية فقط إذا كان n زوجياً والفردية فقط إذا كان فردياً، و `P_n(1) = 1`.'],
],[
  Q('Use Bonnet’s recurrence to find `P_2(x)`.','استخدم علاقة التكرار لإيجاد `P_2(x)`.','P_2 = #f{3x^2 − 1}{2}',
    [['Put n = 1:','نضع n = 1:'], '2 P_2 = 3x·P_1 − 1·P_0 = 3x^2 − 1', 'P_2 = #f{3x^2 − 1}{2}'],
    ['P_2 = 3x^2 − 1','P_2 = #f{3x^2 + 1}{2}','P_2 = #f{x^2 − 1}{2}']),
  Q('Use the recurrence to find `P_3(x)` from `P_1` and `P_2`.','استخدم علاقة التكرار لإيجاد `P_3(x)` من `P_1` و `P_2`.','P_3 = #f{5x^3 − 3x}{2}',
    [['Put n = 2:','نضع n = 2:'], '3 P_3 = 5x·#f{3x^2 − 1}{2} − 2x = #f{15x^3 − 9x}{2}', 'P_3 = #f{5x^3 − 3x}{2}'],
    ['P_3 = #f{5x^3 − x}{2}','P_3 = #f{3x^3 − 5x}{2}','P_3 = 5x^3 − 3x']),
  Q('Compute `P_3(0.5)` numerically with the recurrence, without the explicit polynomial.','احسب `P_3(0.5)` عددياً بعلاقة التكرار دون الصيغة الصريحة.','−0.4375',
    ['P_0 = 1,   P_1 = 0.5', 'P_2 = #f{3(0.5)(0.5) − 1}{2} = −0.125', 'P_3 = #f{5(0.5)(−0.125) − 2(0.5)}{3} = #f{−1.3125}{3} = −0.4375',
     ['This is how a program evaluates `P_n(x)`: numbers only, no powers of x, so it stays accurate for large n.','هكذا يحسب البرنامج `P_n(x)`: أعداد فقط دون قوى x، فيبقى دقيقاً عند n كبير.']],
    ['0.4375','−0.125','−0.3125']),
  Q('Use the recurrence to show that `P_n(1) = 1` for every n.','استخدم علاقة التكرار لإثبات أن `P_n(1) = 1` لكل n.',['Proved by induction','ثبت بالاستقراء'],
    ['P_0(1) = 1,   P_1(1) = 1', ['Assume `P_n(1) = P_{n−1}(1) = 1` and put x = 1:','نفرض `P_n(1) = P_{n−1}(1) = 1` ونضع x = 1:'],
     '(n + 1) P_{n+1}(1) = (2n + 1) − n = n + 1  ⇒  P_{n+1}(1) = 1']),
]);

lesson('501',3,[
  ['Rodrigues’ formula gives `P_n` in one line, as an n-th derivative:','صيغة رودريغز تعطي `P_n` في سطر واحد على صورة مشتقة من الرتبة n:'],
  'P_n(x) = #f{1}{2^n n!} #f{d^n}{dx^n} (x^2 − 1)^n',
  ['It is rarely used to compute, but it is the tool for proofs: integrating by parts n times moves the n derivatives onto the other factor, and the boundary terms vanish because `(x^2 − 1)^n` has zeros of order n at ±1. This proves that `P_n` is orthogonal to every polynomial of lower degree.',
   'قلّما تُستخدم للحساب، لكنها أداة البراهين: التكامل بالتجزئة n مرة ينقل المشتقات إلى العامل الآخر، وتنعدم الحدود الطرفية لأن للدالة `(x^2 − 1)^n` أصفاراً من الرتبة n عند ±1. وبهذا يثبت أن `P_n` عمودية على كل كثيرة حدود أقل درجة.'],
  ['From the formula, the leading coefficient of `P_n` is','ومن الصيغة يكون المعامل الرئيس لـ `P_n`'],
  'k_n = #f{(2n)!}{2^n (n!)^2}',
],[
  Q('Use Rodrigues’ formula to find `P_2(x)`.','استخدم صيغة رودريغز لإيجاد `P_2(x)`.','P_2 = #f{3x^2 − 1}{2}',
    ['(x^2 − 1)^2 = x^4 − 2x^2 + 1', '#f{d^2}{dx^2}(x^4 − 2x^2 + 1) = 12x^2 − 4', 'P_2 = #f{1}{2^2·2!}(12x^2 − 4) = #f{3x^2 − 1}{2}'],
    ['P_2 = 12x^2 − 4','P_2 = #f{3x^2 − 1}{4}','P_2 = #f{x^2 − 1}{2}']),
  Q('Find the leading coefficient of `P_4(x)`.','أوجد المعامل الرئيس لـ `P_4(x)`.','k_4 = #f{35}{8}',
    ['k_4 = #f{8!}{2^4 (4!)^2} = #f{40320}{16·576} = #f{35}{8}', ['This agrees with `P_4 = (35x^4 − 30x^2 + 3)/8`.','وهذا يطابق `P_4 = (35x^4 − 30x^2 + 3)/8`.']],
    ['k_4 = #f{35}{4}','k_4 = #f{63}{8}','k_4 = #f{5}{2}']),
  Q('Use Rodrigues’ formula and integration by parts to show `∫_{−1}^{1} x·P_2(x) dx = 0`… then state the general rule.','استخدم صيغة رودريغز والتكامل بالتجزئة لإثبات أن `∫_{−1}^{1} x·P_2(x) dx = 0` ثم اذكر القاعدة العامة.',
    '∫_{−1}^{1} x^m P_n dx = 0,   m < n',
    ['∫_{−1}^{1} x·#f{1}{8}#f{d^2}{dx^2}(x^2 − 1)^2 dx', ['Integrate by parts twice; the boundary terms vanish at ±1:','نكامل بالتجزئة مرتين، والحدود الطرفية تنعدم عند ±1:'],
     '= #f{1}{8}∫_{−1}^{1} #f{d^2 x}{dx^2}·(x^2 − 1)^2 dx = 0', ['because the second derivative of x is zero. In general n integrations by parts differentiate `x^m` n times, which gives zero when m < n.','لأن المشتقة الثانية لـ x تساوي صفراً. وعموماً التجزئة n مرة تشتق `x^m` n مرة فتعطي صفراً إذا كان m < n.']]),
  Q('Evaluate `∫_{−1}^{1} x^2 P_2(x) dx`.','احسب `∫_{−1}^{1} x^2 P_2(x) dx`.','#f{4}{15}',
    ['∫_{−1}^{1} x^2·#f{3x^2 − 1}{2} dx = #f{1}{2}(3·#f{2}{5} − #f{2}{3})', '= #f{1}{2}·#f{8}{15} = #f{4}{15}',
     ['Not zero: orthogonality holds only against powers lower than n.','ليس صفراً: التعامد يتحقق مع القوى الأقل من n فقط.']],
    ['0','#f{2}{5}','#f{8}{15}']),
]);

lesson('501',4,[
  ['`P_n` is the polynomial solution of Legendre’s differential equation:','`P_n` هي الحل كثير الحدود لمعادلة ليجندر التفاضلية:'],
  '(1 − x^2) y″ − 2x y′ + n(n + 1) y = 0',
  ['The same equation in Sturm–Liouville form is','والمعادلة نفسها في صيغة شتورم–ليوفيل هي'],
  '#f{d}{dx}[(1 − x^2) y′] + n(n + 1) y = 0',
  ['So `P_n` is an eigenfunction with eigenvalue `n(n + 1)`. The factor `1 − x^2` vanishes at both ends, and this is why the Legendre polynomials are orthogonal on [−1, 1] without any boundary condition, and why spectral expansions in them converge so fast.',
   'إذن `P_n` دالة ذاتية قيمتها الذاتية `n(n + 1)`. والعامل `1 − x^2` ينعدم عند الطرفين، ولهذا تتعامد كثيرات حدود ليجندر على [−1, 1] دون أي شرط حدي، ولهذا يتقارب المفكوك الطيفي بها بسرعة.'],
],[
  Q('Verify that `P_2 = (3x^2 − 1)/2` satisfies Legendre’s equation with n = 2.','تحقق أن `P_2 = (3x^2 − 1)/2` تحقق معادلة ليجندر عند n = 2.',['Verified: the left side is 0','تحقق: الطرف الأيسر يساوي 0'],
    ['y′ = 3x,   y″ = 3,   n(n + 1) = 6', '(1 − x^2)·3 − 2x·3x + 6·#f{3x^2 − 1}{2}', '= 3 − 3x^2 − 6x^2 + 9x^2 − 3 = 0']),
  Q('For which n is `y = x^3 − (3/5)x` a solution of Legendre’s equation?','لأي قيمة n تكون `y = x^3 − (3/5)x` حلاً لمعادلة ليجندر؟','n = 3',
    ['y = #f{2}{5}·#f{5x^3 − 3x}{2} = #f{2}{5} P_3(x)', ['The equation is linear and homogeneous, so a constant multiple of `P_3` is also a solution, with `n(n + 1) = 12`.','المعادلة خطية متجانسة، فمضاعف `P_3` حل أيضاً، و `n(n + 1) = 12`.']],
    ['n = 2','n = 4','n = 12']),
  Q('Use the differential equation to find `P_n′(1)`.','استخدم المعادلة التفاضلية لإيجاد `P_n′(1)`.','P_n′(1) = #f{n(n + 1)}{2}',
    [['Put x = 1; the term with `y″` disappears:','نضع x = 1 فيختفي حد `y″`:'], '−2 P_n′(1) + n(n + 1) P_n(1) = 0', ['Since `P_n(1) = 1`:','وبما أن `P_n(1) = 1`:'], 'P_n′(1) = #f{n(n + 1)}{2}'],
    ['P_n′(1) = n(n + 1)','P_n′(1) = n^2','P_n′(1) = #f{n}{2}']),
  Q('Write the eigenvalue of `P_5` and the equation it satisfies in Sturm–Liouville form.','اكتب القيمة الذاتية لـ `P_5` والمعادلة التي تحققها في صيغة شتورم–ليوفيل.','#f{d}{dx}[(1 − x^2) y′] + 30 y = 0',
    ['n(n + 1) = 5·6 = 30', '#f{d}{dx}[(1 − x^2) P_5′] + 30 P_5 = 0'],
    ['#f{d}{dx}[(1 − x^2) y′] + 25 y = 0','#f{d}{dx}[(1 − x^2) y′] + 20 y = 0','#f{d}{dx}[(1 − x^2) y′] + 5 y = 0']),
]);

lesson('501',5,[
  ['The Legendre polynomials are orthogonal on [−1, 1] with weight 1:','كثيرات حدود ليجندر متعامدة على [−1, 1] بوزن 1:'],
  '∫_{−1}^{1} P_m(x) P_n(x) dx = #f{2}{2n + 1} δ_{mn}',
  ['Two different Legendre polynomials integrate to zero, and the «norm squared» of `P_n` is `2/(2n + 1)`. This one law gives the coefficients of any expansion `f = Σ c_n P_n` without solving a system:',
   'تكامل حاصل ضرب كثيرتين مختلفتين يساوي صفراً، و«مربع المعيار» لـ `P_n` هو `2/(2n + 1)`. وهذا القانون وحده يعطي معاملات أي مفكوك `f = Σ c_n P_n` دون حل نظام:'],
  'c_n = #f{2n + 1}{2} ∫_{−1}^{1} f(x) P_n(x) dx',
  ['Orthogonality is what turns the matrices of spectral methods into diagonal or sparse matrices.','والتعامد هو ما يجعل مصفوفات الطرق الطيفية قطرية أو قليلة العناصر.'],
],[
  Q('Compute `∫_{−1}^{1} [P_2(x)]^2 dx` directly and compare with the law.','احسب `∫_{−1}^{1} [P_2(x)]^2 dx` مباشرة وقارن بالقانون.','#f{2}{5}',
    ['∫_{−1}^{1} #f{(3x^2 − 1)^2}{4} dx = #f{1}{4}∫_{−1}^{1}(9x^4 − 6x^2 + 1) dx', '= #f{1}{4}(#f{18}{5} − 4 + 2) = #f{1}{4}·#f{8}{5} = #f{2}{5}', ['The law gives `2/(2·2 + 1) = 2/5`.','والقانون يعطي `2/(2·2 + 1) = 2/5`.']],
    ['#f{2}{3}','#f{4}{5}','#f{1}{5}']),
  Q('Expand `f(x) = x^2` in Legendre polynomials.','اكتب `f(x) = x^2` بدلالة كثيرات حدود ليجندر.','x^2 = #f{1}{3} P_0 + #f{2}{3} P_2',
    ['c_0 = #f{1}{2}∫_{−1}^{1} x^2 dx = #f{1}{3}', ['`c_1 = 0`, because the integrand is odd.','`c_1 = 0` لأن الدالة المكامَلة فردية.'], 'c_2 = #f{5}{2}∫_{−1}^{1} x^2 P_2 dx = #f{5}{2}·#f{4}{15} = #f{2}{3}',
     ['Check: `1/3 + (2/3)(3x^2 − 1)/2 = x^2`.','تحقق: `1/3 + (2/3)(3x^2 − 1)/2 = x^2`.']],
    ['x^2 = #f{2}{3} P_0 + #f{1}{3} P_2','x^2 = #f{1}{3} P_0 + #f{2}{5} P_2','x^2 = P_0 + #f{2}{3} P_2']),
  Q('Evaluate `∫_{−1}^{1} (P_0 + 2P_1)^2 dx` using orthogonality only.','احسب `∫_{−1}^{1} (P_0 + 2P_1)^2 dx` باستخدام التعامد فقط.','#f{14}{3}',
    [['The cross term vanishes, so the squares add (Pythagoras):','الحد المشترك ينعدم فتُجمع المربعات (فيثاغورس):'], '1^2·#f{2}{1} + 2^2·#f{2}{3} = 2 + #f{8}{3} = #f{14}{3}'],
    ['#f{10}{3}','5','#f{8}{3}']),
  Q('Without integrating, find `∫_{−1}^{1} P_3(x)(x^2 + 1) dx`.','دون إجراء التكامل أوجد `∫_{−1}^{1} P_3(x)(x^2 + 1) dx`.','0',
    [['`x^2 + 1` has degree 2 < 3, so it is a combination of `P_0` and `P_2`, each orthogonal to `P_3`.','`x^2 + 1` درجتها 2 < 3 فهي تركيب من `P_0` و `P_2` وكل منهما عمودية على `P_3`.']],
    ['#f{2}{7}','#f{8}{3}','#f{2}{3}']),
]);

export const MS501 = true;
