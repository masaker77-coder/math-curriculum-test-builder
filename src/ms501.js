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

/* ---- 501 · Unit 1 (lessons 6–10): generating function, explicit formula, parity, bounds, zeros ---- */
lesson('501',6,[
  ['The generating function packs all the Legendre polynomials into one closed formula:','الدالة المولدة تجمع كثيرات حدود ليجندر كلها في صيغة مغلقة واحدة:'],
  'g(x, t) = #f{1}{#r{1 − 2xt + t^2}} = Σ_{n=0}^{∞} P_n(x) t^n,   |t| < 1',
  ['Expanding the left side in powers of t and reading the coefficient of `t^n` gives `P_n(x)`. Differentiating `g` with respect to t gives Bonnet’s recurrence, and with respect to x gives the derivative relations. In physics `g` is the potential of a unit charge, which is how Legendre met these polynomials.',
   'بنشر الطرف الأيسر بقوى t وقراءة معامل `t^n` نحصل على `P_n(x)`. واشتقاق `g` بالنسبة إلى t يعطي علاقة التكرار (بونيه)، وبالنسبة إلى x يعطي علاقات المشتقات. و `g` في الفيزياء هي جهد شحنة واحدة، ومن هنا التقى ليجندر بهذه الكثيرات.'],
  ['Special values come out at once: x = 1 gives `1/(1 − t) = Σ t^n`, so `P_n(1) = 1` for every n.','والقيم الخاصة تظهر مباشرة: x = 1 تعطي `1/(1 − t) = Σ t^n` إذن `P_n(1) = 1` لكل n.'],
],[
  Q('Expand `g(x, t) = (1 − 2xt + t^2)^{−1/2}` up to `t^2` and read `P_1` and `P_2`.','انشر `g(x, t) = (1 − 2xt + t^2)^{−1/2}` حتى `t^2` واقرأ `P_1` و `P_2`.',
    'P_1 = x,   P_2 = #f{3x^2 − 1}{2}',
    [['Put `u = 2xt − t^2` and use the binomial series:','نضع `u = 2xt − t^2` ونستخدم متسلسلة ذات الحدين:'], '(1 − u)^{−1/2} = 1 + #f{u}{2} + #f{3u^2}{8} + …',
     'g = 1 + #f{2xt − t^2}{2} + #f{3}{8}(4x^2 t^2) + O(t^3)', '= 1 + x·t + #f{3x^2 − 1}{2}·t^2 + O(t^3)'],
    ['P_1 = 2x,   P_2 = 3x^2 − 1','P_1 = x,   P_2 = #f{3x^2 + 1}{2}','P_1 = −x,   P_2 = #f{1 − 3x^2}{2}']),
  Q('Use the generating function at `x = −1` to find `P_n(−1)`.','استخدم الدالة المولدة عند `x = −1` لإيجاد `P_n(−1)`.','P_n(−1) = (−1)^n',
    ['g(−1, t) = #f{1}{#r{1 + 2t + t^2}} = #f{1}{1 + t}', '= 1 − t + t^2 − t^3 + … = Σ (−1)^n t^n', ['The coefficient of `t^n` is `(−1)^n`.','معامل `t^n` يساوي `(−1)^n`.']],
    ['P_n(−1) = 1','P_n(−1) = 0','P_n(−1) = (−1)^{n+1}']),
  Q('Use the generating function at `x = 0` to find `P_2(0)` and `P_4(0)`.','استخدم الدالة المولدة عند `x = 0` لإيجاد `P_2(0)` و `P_4(0)`.','P_2(0) = −#f{1}{2},   P_4(0) = #f{3}{8}',
    ['g(0, t) = (1 + t^2)^{−1/2} = 1 − #f{1}{2}t^2 + #f{3}{8}t^4 − …', ['Only even powers appear, so `P_n(0) = 0` for odd n; the coefficients of `t^2` and `t^4` are the answers.','تظهر القوى الزوجية فقط، إذن `P_n(0) = 0` عند n فردي، ومعاملا `t^2` و `t^4` هما الجواب.']],
    ['P_2(0) = #f{1}{2},   P_4(0) = −#f{3}{8}','P_2(0) = −#f{1}{2},   P_4(0) = #f{3}{4}','P_2(0) = −1,   P_4(0) = #f{3}{8}']),
  Q('Find the sum `Σ_{n=0}^{∞} P_n(1/2)·(1/2)^n`.','أوجد المجموع `Σ_{n=0}^{∞} P_n(1/2)·(1/2)^n`.','#f{2}{#r{3}} ≈ 1.1547',
    [['This is `g(1/2, 1/2)`:','هذا هو `g(1/2, 1/2)`:'], '1 − 2·#f{1}{2}·#f{1}{2} + #f{1}{4} = #f{3}{4}', 'g = #f{1}{#r{3/4}} = #f{2}{#r{3}} ≈ 1.1547',
     ['Check: the first four terms give `1 + 0.25 − 0.0313 − 0.0547 = 1.1641`, approaching 1.1547.','تحقق: الحدود الأربعة الأولى تعطي `1 + 0.25 − 0.0313 − 0.0547 = 1.1641` وتقترب من 1.1547.']],
    ['#f{1}{#r{3}} ≈ 0.5774','2','#r{3} ≈ 1.7321']),
]);

lesson('501',7,[
  ['Collecting the powers of x in Rodrigues’ formula gives the explicit formula:','بجمع قوى x في صيغة رودريغز نحصل على الصيغة الصريحة:'],
  'P_n(x) = #f{1}{2^n} Σ_{k=0}^{⌊n/2⌋} (−1)^k #f{(2n − 2k)!}{k! (n − k)! (n − 2k)!} x^{n−2k}',
  ['It is useful for exact work on small n, but it is a poor way to compute: the coefficients grow like `2^n` and alternate in sign, so near `x = ±1` large terms cancel and the rounding errors stay. For `P_40` the largest coefficient is about `3.5 × 10^{13}`, while `P_40(1) = 1`.',
   'هي مفيدة للحساب المضبوط عند n صغير، لكنها طريقة سيئة للحساب العددي: المعاملات تكبر مثل `2^n` وتتناوب إشاراتها، فقرب `x = ±1` تتلاشى حدود كبيرة وتبقى أخطاء التقريب. فأكبر معامل في `P_40` قرابة `3.5 × 10^{13}` مع أن `P_40(1) = 1`.'],
  ['This is why programs use Bonnet’s recurrence: it works with numbers of size at most 1 on `[−1, 1]` and is stable.','ولهذا تستخدم البرامج علاقة التكرار (بونيه): تعمل بأعداد لا يتجاوز حجمها 1 على `[−1, 1]` وهي مستقرة.'],
],[
  Q('Use the explicit formula to find `P_4(x)`.','استخدم الصيغة الصريحة لإيجاد `P_4(x)`.','P_4 = #f{35x^4 − 30x^2 + 3}{8}',
    ['k = 0:  #f{8!}{0!·4!·4!} = 70,   k = 1:  −#f{6!}{1!·3!·2!} = −60,   k = 2:  #f{4!}{2!·2!·0!} = 6',
     'P_4 = #f{70x^4 − 60x^2 + 6}{16} = #f{35x^4 − 30x^2 + 3}{8}'],
    ['P_4 = #f{35x^4 − 30x^2 + 3}{16}','P_4 = #f{35x^4 + 30x^2 + 3}{8}','P_4 = #f{70x^4 − 60x^2 + 6}{8}']),
  Q('Find the coefficient of `x^3` in `P_5(x)`.','أوجد معامل `x^3` في `P_5(x)`.','−#f{35}{4}',
    [['`x^3 = x^{5−2k}` with k = 1:','`x^3 = x^{5−2k}` عند k = 1:'], '#f{1}{2^5}·(−1)·#f{8!}{1!·4!·3!} = −#f{280}{32} = −#f{35}{4}',
     ['Indeed `P_5 = (63x^5 − 70x^3 + 15x)/8`.','وفعلاً `P_5 = (63x^5 − 70x^3 + 15x)/8`.']],
    ['#f{35}{4}','−#f{35}{8}','−70']),
  Q('The largest term of the power form of `P_40(1)` is about `3.5 × 10^{13}`. In double precision (about 16 significant digits), about how many correct digits are left in the computed `P_40(1)`?',
    'أكبر حد في الصيغة القوية لـ `P_40(1)` قرابة `3.5 × 10^{13}`. في الدقة المضاعفة (نحو 16 رقماً معنوياً) كم رقماً صحيحاً يبقى تقريباً في القيمة المحسوبة لـ `P_40(1)`؟',
    ['About 2','نحو رقمين'],
    [['Each term carries a rounding error of about `10^{−16}` of its size:','كل حد يحمل خطأ تقريب قدره نحو `10^{−16}` من حجمه:'], '3.5 × 10^{13} × 10^{−16} ≈ 3.5 × 10^{−3}',
     ['The answer is 1, so the error is in the third decimal: only about 2 digits are correct. The recurrence gives all 16.','والجواب 1 فالخطأ في المنزلة العشرية الثالثة: يصح رقمان تقريباً. أما علاقة التكرار فتعطي الأرقام الستة عشر كلها.']],
    [['About 16','نحو 16 رقماً'],['About 13','نحو 13 رقماً'],['About 8','نحو 8 أرقام']]),
  Q('Use the explicit formula to find `P_3(x)`.','استخدم الصيغة الصريحة لإيجاد `P_3(x)`.','P_3 = #f{5x^3 − 3x}{2}',
    ['k = 0:  #f{6!}{0!·3!·3!} = 20,   k = 1:  −#f{4!}{1!·2!·1!} = −12', 'P_3 = #f{20x^3 − 12x}{8} = #f{5x^3 − 3x}{2}'],
    ['P_3 = #f{5x^3 − 3x}{8}','P_3 = 20x^3 − 12x','P_3 = #f{5x^3 + 3x}{2}']),
]);

lesson('501',8,[
  ['`P_n` has the parity of n: even polynomials for even n, odd ones for odd n.','`P_n` له زوجية n: كثيرات زوجية عند n زوجي، وفردية عند n فردي.'],
  'P_n(−x) = (−1)^n P_n(x)',
  ['The values at the ends and at the centre are known in closed form:','وقيمها عند الطرفين والمركز معروفة بصيغة مغلقة:'],
  'P_n(1) = 1,   P_n(−1) = (−1)^n,   P_{2m}(0) = (−1)^m #f{(2m)!}{4^m (m!)^2},   P_{2m+1}(0) = 0',
  ['For the derivative, `P_n′(1) = n(n + 1)/2` and `P_n′(−x) = (−1)^{n+1} P_n′(x)`. Parity halves the work in spectral methods: an even function needs only even `P_n`.',
   'وللمشتقة `P_n′(1) = n(n + 1)/2` و `P_n′(−x) = (−1)^{n+1} P_n′(x)`. والزوجية تختصر العمل في الطرق الطيفية إلى النصف: الدالة الزوجية تحتاج `P_n` الزوجية فقط.'],
],[
  Q('Find `P_7(−1)` and `P_8(−1)`.','أوجد `P_7(−1)` و `P_8(−1)`.','P_7(−1) = −1,   P_8(−1) = 1',
    ['P_n(−1) = (−1)^n P_n(1) = (−1)^n', 'P_7(−1) = (−1)^7 = −1,   P_8(−1) = 1'],
    ['P_7(−1) = 1,   P_8(−1) = −1','P_7(−1) = −1,   P_8(−1) = −1','P_7(−1) = 0,   P_8(−1) = 1']),
  Q('Use the closed form to find `P_8(0)`.','استخدم الصيغة المغلقة لإيجاد `P_8(0)`.','#f{35}{128}',
    ['m = 4:   P_8(0) = (−1)^4 #f{8!}{4^4 (4!)^2} = #f{40320}{256·576}', '= #f{40320}{147456} = #f{35}{128} ≈ 0.2734'],
    ['−#f{35}{128}','#f{35}{64}','0']),
  Q('Find `P_5′(−1)`.','أوجد `P_5′(−1)`.','15',
    ['P_5′(1) = #f{5·6}{2} = 15', ['`P_5′` is even because `P_5` is odd:','`P_5′` زوجية لأن `P_5` فردية:'], 'P_5′(−1) = (−1)^{6}·15 = 15'],
    ['−15','30','−30']),
  Q('Without computing, find `∫_{−1}^{1} x^3 P_4(x) dx`.','دون حساب أوجد `∫_{−1}^{1} x^3 P_4(x) dx`.','0',
    [['`x^3` is odd and `P_4` is even, so the product is odd and its integral over a symmetric interval is 0.','`x^3` فردية و `P_4` زوجية فحاصل الضرب فردي وتكامله على مجال متماثل صفر.'],
     ['(Orthogonality gives 0 as well, since 3 < 4.)','(والتعامد يعطي 0 أيضاً لأن 3 < 4.)']],
    ['#f{2}{9}','#f{8}{35}','#f{2}{7}']),
]);

lesson('501',9,[
  ['On `[−1, 1]` the Legendre polynomials are bounded by their value at the ends:','على `[−1, 1]` كثيرات حدود ليجندر محدودة بقيمتها عند الطرفين:'],
  '|P_n(x)| ≤ 1,   |P_n′(x)| ≤ P_n′(1) = #f{n(n + 1)}{2},   −1 ≤ x ≤ 1',
  ['Inside the interval they are much smaller. Bernstein’s inequality with `x = cos θ` reads','وداخل المجال تكون أصغر بكثير. متباينة برنشتاين مع `x = cos θ` هي'],
  '|P_n(cos θ)| < #r{#f{2}{π n sin θ}},   0 < θ < π',
  ['So `P_n` decays like `1/#r{n}` in the middle and keeps size 1 only at the ends, while its derivative grows like `n^2` at the ends. Outside `[−1, 1]` the polynomials grow geometrically, like `(|x| + #r{x^2 − 1})^n`; this is why expansions converge inside an ellipse around the interval.',
   'إذن `P_n` تتناقص مثل `1/#r{n}` في الوسط ولا يبقى حجمها 1 إلا عند الطرفين، بينما تكبر مشتقتها مثل `n^2` عند الطرفين. وخارج `[−1, 1]` تكبر الكثيرات هندسياً مثل `(|x| + #r{x^2 − 1})^n`، ولهذا يتقارب المفكوك داخل قطع ناقص حول المجال.'],
],[
  Q('Find the largest and smallest values of `P_2(x)` on `[−1, 1]`.','أوجد أكبر قيمة وأصغر قيمة لـ `P_2(x)` على `[−1, 1]`.','max = 1,   min = −#f{1}{2}',
    ['P_2 = #f{3x^2 − 1}{2},   P_2′ = 3x = 0 ⇒ x = 0', 'P_2(0) = −#f{1}{2},   P_2(±1) = 1'],
    ['max = 1,   min = −1','max = #f{1}{2},   min = −#f{1}{2}','max = 1,   min = 0']),
  Q('Give the best bound for `|P_10′(x)|` on `[−1, 1]`.','أعط أفضل حد لـ `|P_10′(x)|` على `[−1, 1]`.','55',
    ['|P_n′(x)| ≤ P_n′(1) = #f{n(n + 1)}{2}', '#f{10·11}{2} = 55'],
    ['10','110','100']),
  Q('Use Bernstein’s inequality to bound `|P_100(0)|`.','استخدم متباينة برنشتاين لإيجاد حد لـ `|P_100(0)|`.','#r{#f{2}{100π}} ≈ 0.0798',
    ['x = 0 ⇒ θ = #f{π}{2},   sin θ = 1', '|P_100(0)| < #r{#f{2}{100π}} ≈ 0.0798',
     ['The exact value `100!/(2^{100}(50!)^2) ≈ 0.0796` is very close to the bound.','والقيمة المضبوطة `100!/(2^{100}(50!)^2) ≈ 0.0796` قريبة جداً من الحد.']],
    ['1','0.01','#r{#f{2}{π}} ≈ 0.7979']),
  Q('Use the recurrence to compute `P_3(2)`, a value outside `[−1, 1]`.','استخدم علاقة التكرار لحساب `P_3(2)` وهي قيمة خارج `[−1, 1]`.','17',
    ['P_0 = 1,   P_1 = 2', 'P_2 = #f{3·2·2 − 1}{2} = 5.5', 'P_3 = #f{5·2·5.5 − 2·2}{3} = #f{51}{3} = 17',
     ['Check with `(5x^3 − 3x)/2 = (40 − 6)/2 = 17`. Outside the interval the values grow fast.','تحقق: `(5x^3 − 3x)/2 = (40 − 6)/2 = 17`. وخارج المجال تكبر القيم بسرعة.']],
    ['1','5.5','34']),
]);

lesson('501',10,[
  ['`P_n` has exactly n zeros, all real, simple and inside `(−1, 1)`, placed symmetrically about 0. The zeros of `P_n` and `P_{n+1}` interlace: between two neighbouring zeros of `P_{n+1}` lies exactly one zero of `P_n`.',
   'لـ `P_n` عدد n من الجذور تماماً، كلها حقيقية بسيطة داخل `(−1, 1)` ومتماثلة حول 0. وجذور `P_n` و `P_{n+1}` متشابكة: بين كل جذرين متجاورين لـ `P_{n+1}` يقع جذر واحد تماماً لـ `P_n`.'],
  'P_2:  ±#f{1}{#r{3}},     P_3:  0, ±#r{#f{3}{5}}',
  ['The zeros cluster near the ends, and a good first guess for the k-th largest zero is','والجذور تتكاثف قرب الطرفين، وتخمين أولي جيد للجذر الذي ترتيبه k من الأكبر هو'],
  'x_k ≈ cos #f{(4k − 1)π}{4n + 2},   k = 1, …, n',
  ['These zeros are the nodes of the Gauss–Legendre rule (Unit 4); Newton’s method started from this guess finds them in a few steps.','هذه الجذور هي عقد قاعدة جاوس–ليجندر (الوحدة 4)، وطريقة نيوتن بدءاً من هذا التخمين تجدها في خطوات قليلة.'],
],[
  Q('Find the zeros of `P_2(x)`.','أوجد جذور `P_2(x)`.','x = ±#f{1}{#r{3}} ≈ ±0.5774',
    ['#f{3x^2 − 1}{2} = 0  ⇒  x^2 = #f{1}{3}', 'x = ±#f{1}{#r{3}} ≈ ±0.5774'],
    ['x = ±#f{1}{3}','x = ±#r{#f{3}{5}}','x = 0, ±1']),
  Q('Find the zeros of `P_3(x)`.','أوجد جذور `P_3(x)`.','x = 0,   x = ±#r{#f{3}{5}} ≈ ±0.7746',
    ['#f{5x^3 − 3x}{2} = #f{x(5x^2 − 3)}{2} = 0', 'x = 0   or   x^2 = #f{3}{5} ⇒ x = ±0.7746',
     ['They interlace with the zeros ±0.5774 of `P_2`: −0.7746 < −0.5774 < 0 < 0.5774 < 0.7746.','وهي متشابكة مع جذري `P_2` ±0.5774: −0.7746 < −0.5774 < 0 < 0.5774 < 0.7746.']],
    ['x = 0,   x = ±#f{3}{5}','x = ±#f{1}{#r{3}}','x = 0,   x = ±#r{#f{5}{3}}']),
  Q('Find the zeros of `P_4(x) = (35x^4 − 30x^2 + 3)/8`.','أوجد جذور `P_4(x) = (35x^4 − 30x^2 + 3)/8`.','x = ±0.3400,   x = ±0.8611',
    [['Put `y = x^2`:','نضع `y = x^2`:'], '35y^2 − 30y + 3 = 0  ⇒  y = #f{15 ± 2#r{30}}{35}', 'y = 0.1156  or  y = 0.7416', 'x = ±0.3400,   x = ±0.8611'],
    ['x = ±0.5774,   x = ±0.7746','x = ±0.1156,   x = ±0.7416','x = 0,   x = ±0.8611']),
  Q('Use `x_k ≈ cos((4k − 1)π/(4n + 2))` to estimate the largest zero of `P_4`, and compare with 0.8611.','استخدم `x_k ≈ cos((4k − 1)π/(4n + 2))` لتقدير أكبر جذر لـ `P_4` وقارنه بـ 0.8611.','x_1 ≈ cos #f{π}{6} ≈ 0.8660',
    ['n = 4,   k = 1:   #f{(4 − 1)π}{18} = #f{π}{6}', 'cos #f{π}{6} = 0.8660',
     ['The error is 0.005; one Newton step from 0.8660 gives the zero to four digits.','الخطأ 0.005، وخطوة نيوتن واحدة من 0.8660 تعطي الجذر بأربعة أرقام.']],
    ['x_1 ≈ cos #f{π}{9} ≈ 0.9397','x_1 ≈ cos #f{π}{4} ≈ 0.7071','x_1 ≈ cos #f{π}{3} = 0.5']),
]);

/* ---- 501 · Unit 2 (lessons 11–20): properties, shifted and fractional forms ---- */
lesson('501',11,[
  ['Three relations connect `P_n`, its neighbours and their derivatives. They are used to differentiate and integrate Legendre expansions without leaving the basis:','ثلاث علاقات تربط `P_n` بجيرانها ومشتقاتها، وتُستخدم لاشتقاق مفكوكات ليجندر وتكاملها دون الخروج من الأساس:'],
  '(2n + 1) P_n = P_{n+1}′ − P_{n−1}′',
  '(1 − x^2) P_n′ = n (P_{n−1} − x P_n)',
  'P_{n+1}′ = (n + 1) P_n + x P_n′',
  ['The first one integrates at once: `∫ P_n dx = (P_{n+1} − P_{n−1})/(2n + 1) + C`, which is the basis of the integration matrix (Unit 7).','والأولى تُكامل مباشرة: `∫ P_n dx = (P_{n+1} − P_{n−1})/(2n + 1) + C`، وهي أساس مصفوفة التكامل (الوحدة 7).'],
],[
  Q('Compute `P_3′ − P_1′` and write it as a multiple of `P_2`.','احسب `P_3′ − P_1′` واكتبها مضاعفاً لـ `P_2`.','P_3′ − P_1′ = 5 P_2',
    ['P_3′ = #f{15x^2 − 3}{2},   P_1′ = 1', 'P_3′ − P_1′ = #f{15x^2 − 5}{2} = 5·#f{3x^2 − 1}{2} = 5 P_2', ['This is `(2n + 1) P_n` with n = 2.','وهذا هو `(2n + 1) P_n` عند n = 2.']],
    ['P_3′ − P_1′ = 3 P_2','P_3′ − P_1′ = 2 P_2','P_3′ − P_1′ = 7 P_2']),
  Q('Use `∫ P_n dx = (P_{n+1} − P_{n−1})/(2n + 1)` to compute `∫_0^1 P_3(x) dx`.','استخدم `∫ P_n dx = (P_{n+1} − P_{n−1})/(2n + 1)` لحساب `∫_0^1 P_3(x) dx`.','−#f{1}{8}',
    ['∫_0^1 P_3 dx = #f{1}{7}[P_4 − P_2]_0^1', ['At 1 both are 1; at 0, `P_4(0) = 3/8` and `P_2(0) = −1/2`:','عند 1 كلاهما 1، وعند 0: `P_4(0) = 3/8` و `P_2(0) = −1/2`:'],
     '= #f{1}{7}[0 − (#f{3}{8} + #f{1}{2})] = −#f{1}{8}', ['Directly: `∫_0^1 (5x^3 − 3x)/2 dx = (5/4 − 3/2)/2 = −1/8`.','مباشرة: `∫_0^1 (5x^3 − 3x)/2 dx = (5/4 − 3/2)/2 = −1/8`.']],
    ['#f{1}{8}','0','−#f{1}{4}']),
  Q('Use `(1 − x^2) P_n′ = n(P_{n−1} − x P_n)` to find `P_3′(0.5)`, given `P_2(0.5) = −0.125` and `P_3(0.5) = −0.4375`.','استخدم `(1 − x^2) P_n′ = n(P_{n−1} − x P_n)` لإيجاد `P_3′(0.5)` علماً بأن `P_2(0.5) = −0.125` و `P_3(0.5) = −0.4375`.','0.375',
    ['0.75 P_3′ = 3(−0.125 − 0.5·(−0.4375)) = 3·0.09375 = 0.28125', 'P_3′(0.5) = #f{0.28125}{0.75} = 0.375',
     ['Check: `(15x^2 − 3)/2 = (3.75 − 3)/2 = 0.375`. A program gets derivatives this way, from values it already has.','تحقق: `(15x^2 − 3)/2 = (3.75 − 3)/2 = 0.375`. وهكذا يحسب البرنامج المشتقات من قيم لديه.']],
    ['0.28125','−0.375','1.5']),
  Q('Use `P_{n+1}′ = (n + 1)P_n + xP_n′` to find `P_3′(x)` from `P_2`.','استخدم `P_{n+1}′ = (n + 1)P_n + xP_n′` لإيجاد `P_3′(x)` من `P_2`.','P_3′ = #f{15x^2 − 3}{2}',
    ['n = 2:   P_3′ = 3P_2 + x·P_2′ = #f{9x^2 − 3}{2} + x·3x', '= #f{9x^2 − 3 + 6x^2}{2} = #f{15x^2 − 3}{2}'],
    ['P_3′ = #f{9x^2 − 3}{2}','P_3′ = 15x^2 − 3','P_3′ = #f{15x^2 + 3}{2}']),
]);

lesson('501',12,[
  ['The Christoffel–Darboux formula sums products of Legendre polynomials in closed form:','صيغة كريستوفل–داربو تجمع حواصل ضرب كثيرات ليجندر بصيغة مغلقة:'],
  'Σ_{k=0}^{n} (2k + 1) P_k(x) P_k(y) = (n + 1) #f{P_{n+1}(x) P_n(y) − P_n(x) P_{n+1}(y)}{x − y}',
  ['Letting `y → x` gives the confluent form:','وبجعل `y → x` نحصل على الصيغة المتطابقة:'],
  'Σ_{k=0}^{n} (2k + 1) P_k(x)^2 = (n + 1)[P_{n+1}′(x) P_n(x) − P_n′(x) P_{n+1}(x)]',
  ['The kernel below reproduces every polynomial p of degree ≤ n, and the formula also gives the Gauss weights `w_i`:','والنواة الآتية تعيد إنتاج كل كثيرة حدود p درجتها ≤ n، ومن الصيغة نحصل كذلك على أوزان جاوس `w_i`:'],
  'K_n(x, y) = Σ_{k=0}^{n} #f{2k + 1}{2} P_k(x) P_k(y),   ∫_{−1}^{1} K_n(x, y) p(y) dy = p(x)',
  'w_i = #f{2}{(1 − x_i^2) P_n′(x_i)^2}',
],[
  Q('Check the formula for n = 1 at `x = 1`, `y = 0`: compute both sides.','تحقق من الصيغة عند n = 1 و `x = 1` و `y = 0`: احسب الطرفين.','1',
    [['Left side:','الطرف الأيسر:'], '1·P_0(1)P_0(0) + 3·P_1(1)P_1(0) = 1 + 0 = 1', ['Right side:','الطرف الأيمن:'], '2·#f{P_2(1)P_1(0) − P_1(1)P_2(0)}{1 − 0} = 2(0 + #f{1}{2}) = 1'],
    ['2','0','#f{1}{2}']),
  Q('Use the confluent form at `x = 1` to find `Σ_{k=0}^{4} (2k + 1) P_k(1)^2`.','استخدم الصيغة المتطابقة عند `x = 1` لإيجاد `Σ_{k=0}^{4} (2k + 1) P_k(1)^2`.','25',
    [['With `P_k(1) = 1` the sum is `1 + 3 + 5 + 7 + 9`. The formula gives the same:','بما أن `P_k(1) = 1` فالمجموع `1 + 3 + 5 + 7 + 9`. والصيغة تعطي النتيجة نفسها:'],
     '(n + 1)[P_{n+1}′(1) − P_n′(1)] = 5[15 − 10] = 25'],
    ['16','30','36']),
  Q('With `K_1(x, y) = 1/2 + (3/2)xy`, compute `∫_{−1}^{1} K_1(0.5, y)(1 + y) dy`.','مع `K_1(x, y) = 1/2 + (3/2)xy` احسب `∫_{−1}^{1} K_1(0.5, y)(1 + y) dy`.','1.5',
    ['∫_{−1}^{1} (#f{1}{2} + 0.75y)(1 + y) dy = ∫_{−1}^{1} (#f{1}{2} + 1.25y + 0.75y^2) dy', '= 1 + 0 + 0.5 = 1.5',
     ['This is `1 + x` at `x = 0.5`: the kernel reproduces the linear polynomial.','وهذا `1 + x` عند `x = 0.5`: النواة تعيد إنتاج كثيرة الحدود الخطية.']],
    ['1','2','0.75']),
  Q('Use `w_i = 2/[(1 − x_i^2) P_2′(x_i)^2]` to find the Gauss weight at the node `x = 1/#r{3}`.','استخدم `w_i = 2/[(1 − x_i^2) P_2′(x_i)^2]` لإيجاد وزن جاوس عند العقدة `x = 1/#r{3}`.','1',
    ['P_2′ = 3x = #r{3},   1 − x^2 = #f{2}{3}', 'w = #f{2}{#f{2}{3}·3} = 1', ['Both weights of the two-point rule are 1, and they add up to `2 = ∫_{−1}^{1} dx`.','وزنا القاعدة ذات النقطتين يساويان 1 ومجموعهما `2 = ∫_{−1}^{1} dx`.']],
    ['2','#f{1}{2}','#f{2}{3}']),
]);

lesson('501',13,[
  ['Most problems live on a time interval `[0, T]`, while the classical polynomials live on `[−1, 1]`. The affine map joins them:','معظم المسائل على مجال زمني `[0, T]` بينما الكثيرات الكلاسيكية على `[−1, 1]`، والتحويل الخطي يربط بينهما:'],
  'x = #f{2t}{T} − 1,   t = #f{T(x + 1)}{2},   dx = #f{2}{T} dt',
  ['Derivatives and integrals pick up powers of `2/T`:','والمشتقات والتكاملات تكتسب قوى `2/T`:'],
  '#f{d}{dt} = #f{2}{T}·#f{d}{dx},   #f{d^2}{dt^2} = #f{4}{T^2}·#f{d^2}{dx^2},   ∫_0^T f dt = #f{T}{2}∫_{−1}^{1} f dx',
  ['Nodes and weights move the same way: a node `x_i` becomes `t_i = T(x_i + 1)/2` and a weight `w_i` becomes `T w_i/2`.','والعقد والأوزان تنتقل بالطريقة نفسها: العقدة `x_i` تصبح `t_i = T(x_i + 1)/2` والوزن `w_i` يصبح `T w_i/2`.'],
],[
  Q('Write `u″(t) = 1` on `[0, 4]` as an equation in x on `[−1, 1]`.','اكتب `u″(t) = 1` على `[0, 4]` معادلةً في x على `[−1, 1]`.','u_{xx} = 4',
    ['#f{d^2}{dt^2} = #f{4}{T^2}#f{d^2}{dx^2} = #f{4}{16}#f{d^2}{dx^2} = #f{1}{4}#f{d^2}{dx^2}', '#f{1}{4}u_{xx} = 1  ⇒  u_{xx} = 4'],
    ['u_{xx} = #f{1}{4}','u_{xx} = 1','u_{xx} = 16']),
  Q('Which point of `[−1, 1]` corresponds to `t = 1` on `[0, 4]`?','ما النقطة في `[−1, 1]` المقابلة لـ `t = 1` على `[0, 4]`؟','x = −0.5',
    ['x = #f{2·1}{4} − 1 = −0.5'], ['x = 0.25','x = 0.5','x = −0.25']),
  Q('Compute `∫_0^3 t^2 dt` by moving it to `[−1, 1]`.','احسب `∫_0^3 t^2 dt` بنقله إلى `[−1, 1]`.','9',
    ['t = #f{3(x + 1)}{2},   dt = #f{3}{2}dx', '∫_{−1}^{1} #f{9(x + 1)^2}{4}·#f{3}{2} dx = #f{27}{8}·∫_{−1}^{1}(x + 1)^2 dx = #f{27}{8}·#f{8}{3} = 9'],
    ['27','#f{27}{8}','3']),
  Q('Move the two Gauss nodes `±1/#r{3}` and their weights 1 to the interval `[0, 2]`.','انقل عقدتي جاوس `±1/#r{3}` ووزنيهما 1 إلى المجال `[0, 2]`.','t = 0.4226,  1.5774;   w = 1,  1',
    ['T = 2:   t = x + 1 = 1 ∓ 0.5774', 'w = #f{T}{2}·1 = 1', ['Check: `∫_0^2 t^2 dt = 8/3`, and `0.4226^2 + 1.5774^2 = 2.6667`.','تحقق: `∫_0^2 t^2 dt = 8/3` و `0.4226^2 + 1.5774^2 = 2.6667`.']],
    ['t = 0.2113,  0.7887;   w = 0.5,  0.5','t = −0.5774,  0.5774;   w = 2,  2','t = 0.4226,  1.5774;   w = 2,  2']),
]);

lesson('501',14,[
  ['The shifted Legendre polynomials are the Legendre polynomials moved to `[0, 1]`:','كثيرات ليجندر المزاحة هي كثيرات ليجندر منقولة إلى `[0, 1]`:'],
  'P_n^*(t) = P_n(2t − 1):   P_0^* = 1,   P_1^* = 2t − 1,   P_2^* = 6t^2 − 6t + 1,   P_3^* = 20t^3 − 30t^2 + 12t − 1',
  ['They satisfy the recurrence and the orthogonality relation','وتحقق علاقة التكرار والتعامد'],
  '(n + 1)P_{n+1}^* = (2n + 1)(2t − 1)P_n^* − nP_{n−1}^*',
  '∫_0^1 P_m^*(t) P_n^*(t) dt = #f{δ_{mn}}{2n + 1},   P_n^*(0) = (−1)^n,   P_n^*(1) = 1',
  ['Their coefficients are integers, which makes them convenient for exact hand work.','ومعاملاتها أعداد صحيحة، وهذا يجعلها مناسبة للحساب اليدوي المضبوط.'],
],[
  Q('Find `P_2^*(t)` from `P_2(x) = (3x^2 − 1)/2`.','أوجد `P_2^*(t)` من `P_2(x) = (3x^2 − 1)/2`.','P_2^* = 6t^2 − 6t + 1',
    ['P_2^* = #f{3(2t − 1)^2 − 1}{2} = #f{12t^2 − 12t + 2}{2}', '= 6t^2 − 6t + 1'],
    ['P_2^* = 6t^2 − 6t − 1','P_2^* = 3t^2 − 3t + 1','P_2^* = 6t^2 + 6t + 1']),
  Q('Compute `∫_0^1 [P_2^*(t)]^2 dt`.','احسب `∫_0^1 [P_2^*(t)]^2 dt`.','#f{1}{5}',
    [['By orthogonality the answer is `1/(2n + 1)` with n = 2.','من التعامد الجواب `1/(2n + 1)` عند n = 2.'], '#f{1}{2·2 + 1} = #f{1}{5}',
     ['It is half of `∫_{−1}^{1} P_2^2 dx = 2/5`, because the interval is half as long.','وهو نصف `∫_{−1}^{1} P_2^2 dx = 2/5` لأن طول المجال النصف.']],
    ['#f{2}{5}','#f{1}{3}','1']),
  Q('Write `t` in the shifted Legendre basis.','اكتب `t` بدلالة أساس ليجندر المزاح.','t = #f{1}{2}P_0^* + #f{1}{2}P_1^*',
    ['P_1^* = 2t − 1  ⇒  t = #f{P_1^* + 1}{2}', 't = #f{1}{2}P_0^* + #f{1}{2}P_1^*'],
    ['t = P_0^* + #f{1}{2}P_1^*','t = #f{1}{2}P_1^*','t = #f{1}{2}P_0^* − #f{1}{2}P_1^*']),
  Q('Use the recurrence to find `P_3^*(t)` from `P_1^*` and `P_2^*`.','استخدم علاقة التكرار لإيجاد `P_3^*(t)` من `P_1^*` و `P_2^*`.','P_3^* = 20t^3 − 30t^2 + 12t − 1',
    ['3P_3^* = 5(2t − 1)(6t^2 − 6t + 1) − 2(2t − 1)', '(2t − 1)(6t^2 − 6t + 1) = 12t^3 − 18t^2 + 8t − 1', '3P_3^* = 60t^3 − 90t^2 + 40t − 5 − 4t + 2 = 60t^3 − 90t^2 + 36t − 3', 'P_3^* = 20t^3 − 30t^2 + 12t − 1'],
    ['P_3^* = 20t^3 − 30t^2 + 12t + 1','P_3^* = 60t^3 − 90t^2 + 36t − 3','P_3^* = 20t^3 − 30t^2 + 8t − 1']),
]);

lesson('501',15,[
  ['For an interval `[0, γ]` the paper uses the shifted Legendre polynomials `L_i^{γ}(x) = P_i(2x/γ − 1)`, with the analytic form','للمجال `[0, γ]` يستخدم البحث كثيرات ليجندر المزاحة `L_i^{γ}(x) = P_i(2x/γ − 1)` بالصيغة التحليلية'],
  'L_i^{γ}(x) = Σ_{k=0}^{i} (−1)^{i+k} #f{(i + k)!}{(i − k)! (k!)^2 γ^k} x^k',
  '∫_0^{γ} L_i^{γ}(x) L_j^{γ}(x) dx = #f{γ}{2i + 1} δ_{ij},   L_i^{γ}(0) = (−1)^i,   L_i^{γ}(γ) = 1',
  ['With γ = 1 these are the `P_i^*`. The powers `x^k` make this form the starting point for the operational matrices of Unit 7.','وعند γ = 1 تكون هي `P_i^*`. والقوى `x^k` تجعل هذه الصيغة نقطة البداية للمصفوفات التشغيلية في الوحدة 7.'],
],[
  Q('Use the analytic form to find `L_2^{γ}(x)` for `γ = 2`.','استخدم الصيغة التحليلية لإيجاد `L_2^{γ}(x)` عند `γ = 2`.','L_2^{2}(x) = #f{3}{2}x^2 − 3x + 1',
    ['k = 0:  #f{2!}{2!·1·1} = 1,   k = 1:  −#f{3!}{1!·1·2} = −3,   k = 2:  #f{4!}{0!·4·4} = #f{3}{2}', ['Check: `P_2(x − 1) = (3x^2 − 6x + 2)/2`.','تحقق: `P_2(x − 1) = (3x^2 − 6x + 2)/2`.']],
    ['L_2^{2}(x) = 6x^2 − 6x + 1','L_2^{2}(x) = #f{3}{2}x^2 + 3x + 1','L_2^{2}(x) = 3x^2 − 3x + 1']),
  Q('Write `L_1^{γ}(x)` for `γ = 4`.','اكتب `L_1^{γ}(x)` عند `γ = 4`.','L_1^{4}(x) = #f{x}{2} − 1',
    ['L_1^{γ}(x) = #f{2x}{γ} − 1 = #f{2x}{4} − 1 = #f{x}{2} − 1'], ['L_1^{4}(x) = 2x − 1','L_1^{4}(x) = #f{x}{4} − 1','L_1^{4}(x) = 1 − #f{x}{2}']),
  Q('Compute `∫_0^3 [L_1^{3}(x)]^2 dx`.','احسب `∫_0^3 [L_1^{3}(x)]^2 dx`.','1',
    ['#f{γ}{2i + 1} = #f{3}{3} = 1', ['Directly: `∫_0^3 (2x/3 − 1)^2 dx`; with `s = 2x/3 − 1` it is `(3/2)∫_{−1}^{1} s^2 ds = 1`.','مباشرة: `∫_0^3 (2x/3 − 1)^2 dx`، ومع `s = 2x/3 − 1` يساوي `(3/2)∫_{−1}^{1} s^2 ds = 1`.']],
    ['3','#f{1}{3}','#f{2}{3}']),
  Q('Find `L_2^{γ}(γ/2)` for any γ.','أوجد `L_2^{γ}(γ/2)` لأي γ.','−#f{1}{2}',
    ['L_2^{γ}(#f{γ}{2}) = P_2(1 − 1) = P_2(0) = −#f{1}{2}', ['The midpoint of `[0, γ]` goes to the centre 0 of `[−1, 1]`.','منتصف `[0, γ]` ينتقل إلى المركز 0 في `[−1, 1]`.']],
    ['#f{1}{2}','0','1']),
]);

lesson('501',16,[
  ['Spectral methods measure functions in weighted `L^2` spaces. On `(a, b)` with a weight `w(x) > 0`:','تقيس الطرق الطيفية الدوال في فضاءات `L^2` الموزونة. على `(a, b)` مع وزن `w(x) > 0`:'],
  '⟨f, g⟩_w = ∫_a^b f(x) g(x) w(x) dx,   ‖f‖_w = #r{⟨f, f⟩_w}',
  ['Legendre uses `w = 1` on `(−1, 1)`, Chebyshev `w = (1 − x^2)^{−1/2}`, and the fractional functions `w = λt^{λ−1}` on `(0, 1)`. Two tools are used all the time: the Cauchy–Schwarz inequality `|⟨f, g⟩| ≤ ‖f‖ ‖g‖` and the Sobolev norm, which also measures the derivative:',
   'ليجندر يستخدم `w = 1` على `(−1, 1)`، وتشيبيشيف `w = (1 − x^2)^{−1/2}`، والدوال الكسرية `w = λt^{λ−1}` على `(0, 1)`. وأداتان تُستخدمان دائماً: متباينة كوشي–شفارتز `|⟨f, g⟩| ≤ ‖f‖ ‖g‖`، ومعيار سوبوليف الذي يقيس المشتقة أيضاً:'],
  '‖f‖_{H^1}^2 = ‖f‖^2 + ‖f′‖^2',
],[
  Q('Compute `‖x‖` in `L^2(−1, 1)`.','احسب `‖x‖` في `L^2(−1, 1)`.','#r{#f{2}{3}} ≈ 0.8165',
    ['‖x‖^2 = ∫_{−1}^{1} x^2 dx = #f{2}{3}', '‖x‖ = #r{2/3} ≈ 0.8165'], ['#f{2}{3}','1','#r{2} ≈ 1.4142']),
  Q('Compute `⟨1 + x, x⟩` in `L^2(−1, 1)`.','احسب `⟨1 + x, x⟩` في `L^2(−1, 1)`.','#f{2}{3}',
    ['∫_{−1}^{1} (x + x^2) dx = 0 + #f{2}{3}'], ['0','#f{4}{3}','2']),
  Q('Is `f(x) = x^{−1/2}` in `L^2(0, 1)`?','هل `f(x) = x^{−1/2}` تنتمي إلى `L^2(0, 1)`؟',['No','لا'],
    ['‖f‖^2 = ∫_0^1 x^{−1} dx = [ln x]_0^1 = ∞', ['But `x^{−1/4}` is in `L^2(0, 1)`: `∫_0^1 x^{−1/2} dx = 2`. The borderline exponent is `−1/2`.','لكن `x^{−1/4}` تنتمي: `∫_0^1 x^{−1/2} dx = 2`. والأس الحدّي هو `−1/2`.']],
    [['Yes','نعم']]),
  Q('Compute the `H^1(−1, 1)` norm of `f(x) = x`.','احسب معيار `H^1(−1, 1)` للدالة `f(x) = x`.','#r{#f{8}{3}} ≈ 1.6330',
    ['‖f‖^2 = #f{2}{3},   ‖f′‖^2 = ∫_{−1}^{1} 1 dx = 2', '‖f‖_{H^1} = #r{#f{2}{3} + 2} = #r{#f{8}{3}} ≈ 1.6330'],
    ['#r{#f{2}{3}} ≈ 0.8165','#f{8}{3}','#r{2} ≈ 1.4142']),
]);

lesson('501',17,[
  ['Replacing t by `t^{λ}` (0 < λ ≤ 1) in the shifted Legendre polynomials gives the fractional Legendre functions of the paper:','باستبدال t بـ `t^{λ}` (0 < λ ≤ 1) في كثيرات ليجندر المزاحة نحصل على دوال ليجندر الكسرية في البحث:'],
  'L_n^{λ}(t) = P_n(2t^{λ} − 1) = P_n^*(t^{λ}):   L_0^{λ} = 1,   L_1^{λ} = 2t^{λ} − 1,   L_2^{λ} = 6t^{2λ} − 6t^{λ} + 1',
  ['They are combinations of the powers `t^{λ}, t^{2λ}, …`, so they can represent functions like `#r{t}` exactly. Putting `s = t^{λ}`, `ds = λt^{λ−1} dt` turns orthogonality of `P_n^*` into','وهي تراكيب من القوى `t^{λ}, t^{2λ}, …` فتمثل دوال مثل `#r{t}` تمثيلاً مضبوطاً. وبوضع `s = t^{λ}` و `ds = λt^{λ−1} dt` يتحول تعامد `P_n^*` إلى'],
  '∫_0^1 L_m^{λ}(t) L_n^{λ}(t) λt^{λ−1} dt = #f{δ_{mn}}{2n + 1}',
],[
  Q('Compute `L_2^{1/2}(1/4)`.','احسب `L_2^{1/2}(1/4)`.','−#f{1}{2}',
    ['L_2^{1/2}(t) = 6t − 6t^{1/2} + 1', '6·#f{1}{4} − 6·#f{1}{2} + 1 = 1.5 − 3 + 1 = −0.5', ['Indeed `t^{λ} = 1/2` maps to `x = 0` and `P_2(0) = −1/2`.','وفعلاً `t^{λ} = 1/2` يقابل `x = 0` و `P_2(0) = −1/2`.']],
    ['#f{1}{2}','1','0']),
  Q('Find the zero of `L_1^{λ}(t)` for `λ = 1/2`.','أوجد جذر `L_1^{λ}(t)` عند `λ = 1/2`.','t = #f{1}{4}',
    ['2t^{1/2} − 1 = 0  ⇒  t^{1/2} = #f{1}{2}', 't = #f{1}{4}', ['In general the zero is `(1/2)^{1/λ}`: smaller λ pushes the zeros towards 0, where fractional solutions vary fastest.','وعموماً الجذر `(1/2)^{1/λ}`: كلما صغرت λ اقتربت الجذور من 0 حيث يتغير الحل الكسري أسرع.']],
    ['t = #f{1}{2}','t = #f{1}{#r{2}}','t = #f{1}{16}']),
  Q('Compute `∫_0^1 [L_1^{λ}(t)]^2 λt^{λ−1} dt`.','احسب `∫_0^1 [L_1^{λ}(t)]^2 λt^{λ−1} dt`.','#f{1}{3}',
    ['s = t^{λ}:   ∫_0^1 (2s − 1)^2 ds', '= #f{1}{2}·∫_{−1}^{1} u^2 du = #f{1}{3}', ['It does not depend on λ.','ولا يعتمد على λ.']],
    ['#f{2}{3}','#f{λ}{3}','1']),
  Q('Write `t^{2λ}` in the basis `L_0^{λ}, L_1^{λ}, L_2^{λ}`.','اكتب `t^{2λ}` بدلالة الأساس `L_0^{λ}, L_1^{λ}, L_2^{λ}`.','t^{2λ} = #f{1}{3}L_0^{λ} + #f{1}{2}L_1^{λ} + #f{1}{6}L_2^{λ}',
    ['s = t^{λ}:   L_2 = 6s^2 − 6s + 1  ⇒  s^2 = #f{L_2 + 6s − 1}{6}', 's = #f{L_0 + L_1}{2}  ⇒  s^2 = #f{L_2 + 3L_1 + 2L_0}{6}',
     ['Check at `s = 1`: `1/3 + 1/2 + 1/6 = 1`.','تحقق عند `s = 1`: `1/3 + 1/2 + 1/6 = 1`.']],
    ['t^{2λ} = #f{1}{2}L_0^{λ} + #f{1}{2}L_1^{λ}','t^{2λ} = #f{1}{6}L_0^{λ} + #f{1}{2}L_1^{λ} + #f{1}{3}L_2^{λ}','t^{2λ} = #f{1}{3}L_0^{λ} − #f{1}{2}L_1^{λ} + #f{1}{6}L_2^{λ}']),
]);

lesson('501',18,[
  ['In powers of t the fractional Legendre functions have the coefficients `E_{n,r}` of the paper:','بقوى t تكون معاملات دوال ليجندر الكسرية هي الأعداد `E_{n,r}` في البحث:'],
  'L_n^{λ}(t) = Σ_{r=0}^{n} E_{n,r} t^{rλ},   E_{n,r} = (−1)^{n−r} #f{(n + r)!}{(n − r)! (r!)^2}',
  ['They are the coefficients of `P_n^*`, independent of λ. The weight `λt^{λ−1}` is the Jacobian of `s = t^{λ}`; it turns every integral of powers into a simple fraction:','وهي معاملات `P_n^*` ولا تعتمد على λ. والوزن `λt^{λ−1}` هو جاكوبي التحويل `s = t^{λ}`، ويحوّل كل تكامل للقوى إلى كسر بسيط:'],
  '∫_0^1 t^{aλ}·λt^{λ−1} dt = #f{1}{a + 1}',
  ['Together, `E_{n,r}` and this rule give every inner product of the basis by finite sums: this is how the matrices of Unit 7 are built.','ومعاً تعطي `E_{n,r}` وهذه القاعدة كل ضرب داخلي للأساس بمجاميع منتهية، وهكذا تُبنى مصفوفات الوحدة 7.'],
],[
  Q('Compute `E_{3,0}, E_{3,1}, E_{3,2}, E_{3,3}`.','احسب `E_{3,0}, E_{3,1}, E_{3,2}, E_{3,3}`.','−1,  12,  −30,  20',
    ['E_{3,0} = −#f{3!}{3!·1} = −1,   E_{3,1} = #f{4!}{2!·1} = 12', 'E_{3,2} = −#f{5!}{1!·4} = −30,   E_{3,3} = #f{6!}{0!·36} = 20', ['So `L_3^{λ} = 20t^{3λ} − 30t^{2λ} + 12t^{λ} − 1`.','إذن `L_3^{λ} = 20t^{3λ} − 30t^{2λ} + 12t^{λ} − 1`.']],
    ['1,  −12,  30,  −20','−1,  6,  −15,  20','−1,  12,  −30,  10']),
  Q('Compute `E_{4,4}`, the leading coefficient of `L_4^{λ}`.','احسب `E_{4,4}` المعامل الرئيس لـ `L_4^{λ}`.','70',
    ['E_{4,4} = #f{8!}{0!·(4!)^2} = #f{40320}{576} = 70'], ['35','#f{35}{8}','140']),
  Q('Compute `∫_0^1 t^{2λ}·λt^{λ−1} dt`.','احسب `∫_0^1 t^{2λ}·λt^{λ−1} dt`.','#f{1}{3}',
    ['∫_0^1 λt^{3λ−1} dt = λ·#f{1}{3λ} = #f{1}{3}', ['With `s = t^{λ}` it is `∫_0^1 s^2 ds = 1/3`.','ومع `s = t^{λ}` يساوي `∫_0^1 s^2 ds = 1/3`.']],
    ['#f{1}{2λ + 1}','#f{λ}{3}','#f{1}{2}']),
  Q('Find `L_n^{λ}(0)` from the numbers `E_{n,r}`.','أوجد `L_n^{λ}(0)` من الأعداد `E_{n,r}`.','L_n^{λ}(0) = (−1)^n',
    [['At t = 0 only the term r = 0 survives:','عند t = 0 لا يبقى إلا الحد r = 0:'], 'L_n^{λ}(0) = E_{n,0} = (−1)^n #f{n!}{n!} = (−1)^n'],
    ['L_n^{λ}(0) = 1','L_n^{λ}(0) = 0','L_n^{λ}(0) = (−1)^{n+1}']),
]);

lesson('501',19,[
  ['Under `s = t^{λ}` the Sturm–Liouville equation of `P_n^*`, `d/ds[s(1 − s) y′] + n(n + 1)y = 0`, becomes an equation in t:','بالتحويل `s = t^{λ}` تصبح معادلة شتورم–ليوفيل لـ `P_n^*`، وهي `d/ds[s(1 − s) y′] + n(n + 1)y = 0`، معادلة في t:'],
  '#f{d}{dt}[t(1 − t^{λ}) y′] + Λ_n t^{λ−1} y = 0,   Λ_n = λ^2 n(n + 1)',
  ['So `L_n^{λ}` are the eigenfunctions of a singular Sturm–Liouville problem. The coefficient `p(t) = t(1 − t^{λ})` vanishes at both ends, which is why the functions are orthogonal with the weight `λt^{λ−1}` without boundary conditions, exactly as for Legendre.',
   'إذن `L_n^{λ}` دوال ذاتية لمسألة شتورم–ليوفيل شاذة. والمعامل `p(t) = t(1 − t^{λ})` ينعدم عند الطرفين، ولهذا تتعامد الدوال بالوزن `λt^{λ−1}` دون شروط حدية، تماماً كما في ليجندر.'],
],[
  Q('What does the equation become for `λ = 1`?','إلامَ تؤول المعادلة عند `λ = 1`؟','#f{d}{dt}[t(1 − t) y′] + n(n + 1) y = 0',
    ['λ = 1:   t(1 − t^{λ}) = t(1 − t),   t^{λ−1} = 1,   Λ_n = n(n + 1)', ['This is the equation of the shifted Legendre polynomials `P_n^*`.','وهي معادلة كثيرات ليجندر المزاحة `P_n^*`.']],
    ['#f{d}{dt}[(1 − t^2) y′] + n(n + 1) y = 0','#f{d}{dt}[t y′] + n(n + 1) y = 0','#f{d}{dt}[t(1 − t) y′] + n^2 y = 0']),
  Q('Verify that `y = L_1^{λ} = 2t^{λ} − 1` satisfies the equation with n = 1.','تحقق أن `y = L_1^{λ} = 2t^{λ} − 1` تحقق المعادلة عند n = 1.',['Verified: the left side is 0','تحقق: الطرف الأيسر صفر'],
    ['y′ = 2λt^{λ−1},   t(1 − t^{λ})y′ = 2λ(t^{λ} − t^{2λ})', '#f{d}{dt}[…] = 2λ^2 t^{λ−1}(1 − 2t^{λ})', 'Λ_1 t^{λ−1} y = 2λ^2 t^{λ−1}(2t^{λ} − 1)', ['The two terms cancel.','الحدان يتلاشيان.']]),
  Q('Find `Λ_2` for `λ = 1/2`.','أوجد `Λ_2` عند `λ = 1/2`.','#f{3}{2}',
    ['Λ_2 = λ^2·2·3 = #f{1}{4}·6 = #f{3}{2}'], ['6','3','#f{1}{2}']),
  Q('At which points does `p(t) = t(1 − t^{λ})` vanish on `[0, 1]`?','عند أي نقاط ينعدم `p(t) = t(1 − t^{λ})` على `[0, 1]`؟','t = 0,   t = 1',
    ['t = 0   or   t^{λ} = 1 ⇒ t = 1', ['Because `p` vanishes at both ends, the boundary terms in Green’s formula drop out and the eigenfunctions are orthogonal.','ولأن `p` ينعدم عند الطرفين تسقط الحدود الطرفية في صيغة جرين فتتعامد الدوال الذاتية.']],
    [['Only at `t = 0`','عند `t = 0` فقط'],['Only at `t = 1`','عند `t = 1` فقط'],'t = #f{1}{2}']),
]);

lesson('501',20,[
  ['Solutions of fractional equations are rarely smooth at t = 0. For example, the Caputo problem `^CD^{1/2} y = 1`, `y(0) = 0` has the solution','حلول المعادلات الكسرية نادراً ما تكون ملساء عند t = 0. فمثلاً مسألة كابوتو `^CD^{1/2} y = 1` و `y(0) = 0` حلها'],
  'y(t) = #f{t^{1/2}}{Γ(3/2)} = 2#r{#f{t}{π}}',
  ['which has an infinite derivative at 0. Polynomials approximate `#r{t}` only slowly (the error falls like a power of `1/N`), but with `λ = 1/2` it is exact with two terms: `#r{t} = (L_0^{1/2} + L_1^{1/2})/2`. When a solution is a sum of powers `t^{β_1}, t^{β_2}, …`, choosing λ as their greatest common divisor restores spectral (exponential) accuracy.',
   'ولها مشتقة لا نهائية عند 0. والكثيرات تقرّب `#r{t}` ببطء (يتناقص الخطأ مثل قوة لـ `1/N`)، لكنها مضبوطة بحدين عند `λ = 1/2`: `#r{t} = (L_0^{1/2} + L_1^{1/2})/2`. وإذا كان الحل مجموع قوى `t^{β_1}, t^{β_2}, …` فإن اختيار λ القاسم المشترك الأكبر لها يعيد الدقة الطيفية (الأسية).'],
],[
  Q('Write `#r{t}` in the basis with `λ = 1/2`.','اكتب `#r{t}` بدلالة الأساس عند `λ = 1/2`.','#r{t} = #f{1}{2}L_0^{1/2} + #f{1}{2}L_1^{1/2}',
    ['L_1^{1/2} = 2t^{1/2} − 1  ⇒  t^{1/2} = #f{L_1^{1/2} + 1}{2}'],
    ['#r{t} = L_1^{1/2}','#r{t} = #f{1}{2}L_1^{1/2}','#r{t} = L_0^{1/2} + #f{1}{2}L_1^{1/2}']),
  Q('Solve `^CD^{1/2} y = 1`, `y(0) = 0`.','حل `^CD^{1/2} y = 1` و `y(0) = 0`.','y = #f{t^{1/2}}{Γ(3/2)} ≈ 1.1284 #r{t}',
    ['y = D^{−1/2} 1 = #f{t^{1/2}}{Γ(3/2)}', 'Γ(#f{3}{2}) = #f{#r{π}}{2}  ⇒  y = #f{2#r{t}}{#r{π}} ≈ 1.1284#r{t}'],
    ['y = t^{1/2}','y = #f{t^{1/2}}{Γ(1/2)} ≈ 0.5642 #r{t}','y = t']),
  Q('Which λ makes `y = t^{3/4} + t^{1/2}` a finite combination of `L_n^{λ}`?','أي قيمة لـ λ تجعل `y = t^{3/4} + t^{1/2}` تركيباً منتهياً من `L_n^{λ}`؟','λ = #f{1}{4}',
    [['Both exponents must be multiples of λ: `3/4 = 3λ`, `1/2 = 2λ`.','يجب أن يكون الأسّان مضاعفين لـ λ: `3/4 = 3λ` و `1/2 = 2λ`.'], 'λ = gcd(#f{3}{4}, #f{1}{2}) = #f{1}{4}', ['Then y is a polynomial of degree 3 in `s = t^{1/4}` and needs only `L_0, …, L_3`.','فتكون y كثيرة حدود من الدرجة 3 في `s = t^{1/4}` وتحتاج `L_0, …, L_3` فقط.']],
    ['λ = #f{1}{2}','λ = #f{3}{4}','λ = 1']),
  Q('Find the best constant approximation of `#r{t}` in `L^2(0, 1)` and its error.','أوجد أفضل تقريب ثابت لـ `#r{t}` في `L^2(0, 1)` وخطأه.','c = #f{2}{3},   ‖#r{t} − c‖ = #f{1}{#r{18}} ≈ 0.2357',
    ['c = ∫_0^1 #r{t} dt = #f{2}{3}', '‖#r{t} − c‖^2 = ∫_0^1 t dt − c^2 = #f{1}{2} − #f{4}{9} = #f{1}{18}',
     ['With `λ = 1/2` two functions give error 0, while polynomials need many terms for a small error.','ومع `λ = 1/2` تعطي دالتان خطأً صفراً، بينما تحتاج الكثيرات حدوداً كثيرة لخطأ صغير.']],
    ['c = #f{1}{2},   ‖#r{t} − c‖ = #f{1}{#r{12}} ≈ 0.2887','c = #f{2}{3},   ‖#r{t} − c‖ = #f{1}{18}','c = 1,   ‖#r{t} − c‖ = #f{1}{#r{2}} ≈ 0.7071']),
]);

/* ---- 501 · Unit 3 (lessons 21–30): series expansions ---- */
lesson('501',21,[
  ['A function on `[−1, 1]` is expanded as `f = Σ c_n P_n`. Multiplying by `P_m` and integrating, orthogonality keeps one term only, so each coefficient is an integral:','الدالة على `[−1, 1]` تُنشر على صورة `f = Σ c_n P_n`. وبالضرب في `P_m` والتكامل لا يبقى بسبب التعامد إلا حد واحد، فكل معامل تكامل:'],
  'c_n = #f{2n + 1}{2} ∫_{−1}^{1} f(x) P_n(x) dx',
  ['These are the projection coefficients: `c_n P_n` is the orthogonal projection of f on the direction `P_n`. Parity saves work: an even f has `c_n = 0` for odd n, an odd f for even n.',
   'وهذه معاملات الإسقاط: `c_n P_n` هو الإسقاط العمودي لـ f على الاتجاه `P_n`. والزوجية توفّر العمل: الدالة الزوجية معاملاتها الفردية أصفار، والفردية معاملاتها الزوجية أصفار.'],
],[
  Q('Find the first two coefficients `c_0`, `c_1` of `e^x`.','أوجد المعاملين الأولين `c_0` و `c_1` للدالة `e^x`.','c_0 = sinh 1 ≈ 1.1752,   c_1 = #f{3}{e} ≈ 1.1036',
    ['c_0 = #f{1}{2}∫_{−1}^{1} e^x dx = #f{e − e^{−1}}{2} = sinh 1', 'c_1 = #f{3}{2}∫_{−1}^{1} x e^x dx = #f{3}{2}[(x − 1)e^x]_{−1}^{1} = #f{3}{2}·#f{2}{e} = #f{3}{e}'],
    ['c_0 = e − 1 ≈ 1.7183,   c_1 = #f{3}{e} ≈ 1.1036','c_0 = sinh 1 ≈ 1.1752,   c_1 = #f{1}{e} ≈ 0.3679','c_0 = cosh 1 ≈ 1.5431,   c_1 = #f{3}{e} ≈ 1.1036']),
  Q('Find `c_2` for `f(x) = |x|`.','أوجد `c_2` للدالة `f(x) = |x|`.','c_2 = #f{5}{8}',
    ['c_2 = #f{5}{2}∫_{−1}^{1} |x| P_2 dx = 5∫_0^1 x·#f{3x^2 − 1}{2} dx', '= #f{5}{2}(#f{3}{4} − #f{1}{2}) = #f{5}{8}'],
    ['c_2 = #f{5}{4}','c_2 = #f{1}{8}','c_2 = 0']),
  Q('Without integrating, find the coefficients of `f(x) = x^3 − x` with odd index above 3 and with even index.','دون تكامل أوجد معاملات `f(x) = x^3 − x` ذات الدليل الفردي الأكبر من 3 وذات الدليل الزوجي.','c_n = 0',
    [['f is odd, so all even coefficients vanish; f has degree 3, so `c_n = 0` for n > 3 by orthogonality.','f فردية فكل المعاملات الزوجية أصفار، ودرجتها 3 فمن التعامد `c_n = 0` عند n > 3.']],
    ['c_n = #f{2}{2n + 1}','c_n = 1','c_n = (−1)^n']),
  Q('Find `c_3` for `f(x) = x^3`.','أوجد `c_3` للدالة `f(x) = x^3`.','c_3 = #f{2}{5}',
    ['c_3 = #f{7}{2}∫_{−1}^{1} x^3·#f{5x^3 − 3x}{2} dx = #f{7}{4}(5·#f{2}{7} − 3·#f{2}{5})', '= #f{7}{4}·#f{50 − 42}{35} = #f{7}{4}·#f{8}{35} = #f{2}{5}',
     ['Also `c_3 = 1/k_3 = 2/5`, the reciprocal of the leading coefficient 5/2 of `P_3`.','وأيضاً `c_3 = 1/k_3 = 2/5` مقلوب المعامل الرئيس 5/2 لـ `P_3`.']],
    ['c_3 = #f{3}{5}','c_3 = #f{5}{2}','c_3 = #f{2}{7}']),
]);

lesson('501',22,[
  ['Among all polynomials p of degree ≤ N, the truncated series `S_N f = Σ_{n=0}^{N} c_n P_n` is the closest to f in the `L^2` norm:','من بين كل كثيرات الحدود p التي درجتها ≤ N يكون المجموع المقطوع `S_N f = Σ_{n=0}^{N} c_n P_n` الأقرب إلى f في معيار `L^2`:'],
  '‖f − S_N f‖ ≤ ‖f − p‖,   ‖f − S_N f‖^2 = ‖f‖^2 − Σ_{n=0}^{N} c_n^2 #f{2}{2n + 1}',
  ['The reason is geometric: the error `f − S_N f` is orthogonal to every `P_k` with k ≤ N, so by Pythagoras any other p only adds to it. This is the Galerkin idea in its simplest form: make the error orthogonal to the space.',
   'والسبب هندسي: الخطأ `f − S_N f` عمودي على كل `P_k` حيث k ≤ N، فبنظرية فيثاغورس أي p آخر يزيده. وهذه فكرة جاليركن في أبسط صورها: اجعل الخطأ عمودياً على الفضاء.'],
],[
  Q('Find the best linear approximation of `x^2` on `[−1, 1]` and its `L^2` error.','أوجد أفضل تقريب خطي لـ `x^2` على `[−1, 1]` وخطأه في `L^2`.','p = #f{1}{3},   ‖x^2 − p‖ = #r{#f{8}{45}} ≈ 0.4216',
    ['c_0 = #f{1}{3},   c_1 = 0', '‖x^2‖^2 = #f{2}{5},   ‖x^2 − p‖^2 = #f{2}{5} − #f{1}{9}·2 = #f{8}{45}'],
    ['p = x,   ‖x^2 − p‖ = #r{#f{8}{45}} ≈ 0.4216','p = #f{1}{2},   ‖x^2 − p‖ = #f{8}{45}','p = #f{1}{3},   ‖x^2 − p‖ = 0']),
  Q('Write the best linear approximation of `e^x` on `[−1, 1]` and evaluate it at x = 1.','اكتب أفضل تقريب خطي لـ `e^x` على `[−1, 1]` واحسبه عند x = 1.','1.1752 + 1.1036x;   2.2788',
    ['S_1 = c_0 + c_1 x = sinh 1 + #f{3}{e} x', 'S_1(1) = 1.1752 + 1.1036 = 2.2788', ['It is not the Taylor line `1 + x` (2 at x = 1): it is best on average over the whole interval, not at one point.','وهو ليس خط تايلور `1 + x` (2 عند x = 1): إنه الأفضل في المتوسط على المجال كله لا عند نقطة واحدة.']],
    ['1 + x;   2','1.5431 + 1.1752x;   2.7183','1.1752 + 0.3679x;   1.5431']),
  Q('Find the best constant approximation of `x^3 + x` on `[−1, 1]`.','أوجد أفضل تقريب ثابت لـ `x^3 + x` على `[−1, 1]`.','0',
    ['c_0 = #f{1}{2}∫_{−1}^{1}(x^3 + x) dx = 0', ['The function is odd, so its mean is 0.','الدالة فردية فمتوسطها 0.']],
    ['1','#f{1}{2}','2']),
  Q('The error of `S_N f` is orthogonal to which functions?','الخطأ `f − S_N f` عمودي على أي الدوال؟',['To every polynomial of degree ≤ N','على كل كثيرة حدود درجتها ≤ N'],
    ['⟨f − S_N f, P_k⟩ = #f{2}{2k + 1}(c_k − c_k) = 0,   k ≤ N', ['Every polynomial of degree ≤ N is a combination of `P_0, …, P_N`.','كل كثيرة حدود درجتها ≤ N تركيب من `P_0, …, P_N`.']],
    [['Only to `P_{N+1}`','على `P_{N+1}` فقط'],['To f itself','على f نفسها'],['To nothing in general','لا شيء في العموم']]),
]);

lesson('501',23,[
  ['Pythagoras over all the orthogonal directions gives Parseval’s identity:','بتطبيق فيثاغورس على كل الاتجاهات المتعامدة نحصل على متطابقة بارسيفال:'],
  '‖f‖^2 = ∫_{−1}^{1} f^2 dx = Σ_{n=0}^{∞} c_n^2 #f{2}{2n + 1}',
  ['The truncation error is the part of this sum that the series leaves out:','وخطأ القطع هو الجزء من هذا المجموع الذي يتركه المفكوك:'],
  '‖f − S_N f‖^2 = Σ_{n=N+1}^{∞} c_n^2 #f{2}{2n + 1}',
  ['So the speed at which the coefficients decay decides the accuracy: fast decay means few terms are enough.','إذن سرعة تناقص المعاملات هي التي تحدد الدقة: التناقص السريع يعني أن حدوداً قليلة تكفي.'],
],[
  Q('Check Parseval’s identity for `f = x^2 = (1/3)P_0 + (2/3)P_2`.','تحقق من متطابقة بارسيفال للدالة `f = x^2 = (1/3)P_0 + (2/3)P_2`.','#f{2}{5}',
    ['Σ c_n^2 #f{2}{2n + 1} = #f{1}{9}·2 + #f{4}{9}·#f{2}{5} = #f{10}{45} + #f{8}{45} = #f{2}{5}', '∫_{−1}^{1} x^4 dx = #f{2}{5}'],
    ['#f{5}{9}','#f{2}{9}','#f{4}{9}']),
  Q('Compute `‖P_0 + P_1 + P_2‖^2` on `[−1, 1]`.','احسب `‖P_0 + P_1 + P_2‖^2` على `[−1, 1]`.','#f{46}{15}',
    ['2 + #f{2}{3} + #f{2}{5} = #f{30 + 10 + 6}{15} = #f{46}{15}'], ['3','#f{46}{5}','#f{16}{15}']),
  Q('For `f = x^3 = (3/5)P_1 + (2/5)P_3`, find the `L^2` error of `S_2 f`.','للدالة `f = x^3 = (3/5)P_1 + (2/5)P_3` أوجد خطأ `S_2 f` في `L^2`.','#r{#f{8}{175}} ≈ 0.2138',
    [['`S_2 f` drops only the term n = 3:','`S_2 f` يحذف الحد n = 3 فقط:'], '‖f − S_2 f‖^2 = #f{4}{25}·#f{2}{7} = #f{8}{175}', '‖f − S_2 f‖ ≈ 0.2138'],
    ['#f{8}{175}','#f{2}{5}','0']),
  Q('A function has `‖f‖^2 = 1`, and its first N + 1 coefficients give `Σ_{n≤N} c_n^2·2/(2n + 1) = 0.99`. Find `‖f − S_N f‖`.','دالة فيها `‖f‖^2 = 1` ومعاملاتها الأولى تعطي `Σ_{n≤N} c_n^2·2/(2n + 1) = 0.99`. أوجد `‖f − S_N f‖`.','0.1',
    ['‖f − S_N f‖^2 = 1 − 0.99 = 0.01', '‖f − S_N f‖ = 0.1'], ['0.01','0.99','0.9']),
]);

lesson('501',24,[
  ['Powers of x have finite Legendre expansions, found by solving for the top power step by step:','قوى x لها مفكوكات ليجندر منتهية، نجدها بحل القوة العليا خطوة خطوة:'],
  'x^2 = #f{1}{3}P_0 + #f{2}{3}P_2,   x^3 = #f{3}{5}P_1 + #f{2}{5}P_3,   x^4 = #f{1}{5}P_0 + #f{4}{7}P_2 + #f{8}{35}P_4',
  ['Two checks are always available: at x = 1 the coefficients add up to 1 (because `P_n(1) = 1`), and the coefficient of `P_0` is the mean value of the power, `1/(m + 1)` for even m.',
   'ويوجد دائماً تحققان: عند x = 1 مجموع المعاملات 1 (لأن `P_n(1) = 1`)، ومعامل `P_0` هو متوسط القوة، أي `1/(m + 1)` عند m زوجي.'],
],[
  Q('Expand `x^4` in Legendre polynomials.','اكتب `x^4` بدلالة كثيرات ليجندر.','x^4 = #f{1}{5}P_0 + #f{4}{7}P_2 + #f{8}{35}P_4',
    ['P_4 = #f{35x^4 − 30x^2 + 3}{8}  ⇒  x^4 = #f{8}{35}P_4 + #f{6}{7}x^2 − #f{3}{35}', '#f{6}{7}x^2 = #f{6}{7}(#f{1}{3}P_0 + #f{2}{3}P_2) = #f{2}{7}P_0 + #f{4}{7}P_2', '#f{2}{7} − #f{3}{35} = #f{7}{35} = #f{1}{5}',
     ['Check at x = 1: `1/5 + 4/7 + 8/35 = 1`.','تحقق عند x = 1: `1/5 + 4/7 + 8/35 = 1`.']],
    ['x^4 = #f{1}{5}P_0 + #f{2}{7}P_2 + #f{8}{35}P_4','x^4 = #f{1}{3}P_0 + #f{4}{7}P_2 + #f{8}{35}P_4','x^4 = #f{1}{5}P_0 + #f{4}{7}P_2 + #f{2}{5}P_4']),
  Q('Find the coefficient of `P_0` in the expansion of `x^6`.','أوجد معامل `P_0` في مفكوك `x^6`.','#f{1}{7}',
    ['c_0 = #f{1}{2}∫_{−1}^{1} x^6 dx = #f{1}{2}·#f{2}{7} = #f{1}{7}'], ['#f{1}{6}','#f{2}{7}','#f{6}{7}']),
  Q('Expand `1 + x + x^2` in Legendre polynomials.','اكتب `1 + x + x^2` بدلالة كثيرات ليجندر.','#f{4}{3}P_0 + P_1 + #f{2}{3}P_2',
    ['1 + x + x^2 = P_0 + P_1 + #f{1}{3}P_0 + #f{2}{3}P_2', '= #f{4}{3}P_0 + P_1 + #f{2}{3}P_2', ['Check at x = 1: `4/3 + 1 + 2/3 = 3`.','تحقق عند x = 1: `4/3 + 1 + 2/3 = 3`.']],
    ['P_0 + P_1 + P_2','#f{4}{3}P_0 + P_1 + #f{1}{3}P_2','#f{1}{3}P_0 + P_1 + #f{2}{3}P_2']),
  Q('Find the coefficient of `P_5` in the expansion of `x^5`.','أوجد معامل `P_5` في مفكوك `x^5`.','#f{8}{63}',
    [['Only `P_5` contains `x^5`, with leading coefficient `k_5 = 10!/(2^5(5!)^2) = 63/8`.','وحدها `P_5` تحتوي `x^5` بمعامل رئيس `k_5 = 10!/(2^5(5!)^2) = 63/8`.'], 'c_5 = #f{1}{k_5} = #f{8}{63}'],
    ['#f{63}{8}','#f{1}{6}','#f{8}{35}']),
]);

lesson('501',25,[
  ['Three standard examples show how the smoothness of f appears in its coefficients:','ثلاثة أمثلة معيارية تبيّن كيف تظهر نعومة f في معاملاتها:'],
  'sign(x) = #f{3}{2}P_1 − #f{7}{8}P_3 + #f{11}{16}P_5 − …',
  '|x| = #f{1}{2}P_0 + #f{5}{8}P_2 − #f{3}{16}P_4 + #f{13}{128}P_6 − …',
  ['The jump of `sign(x)` makes its coefficients fall like `n^{−1/2}`; the kink of `|x|` gives `n^{−3/2}`. For the smooth `e^{ax}` the coefficients `c_n = (2n + 1) i_n(a)` (modified spherical Bessel functions) fall faster than any power, with `c_0 = sinh(a)/a`.',
   'قفزة `sign(x)` تجعل معاملاتها تتناقص مثل `n^{−1/2}`، وانكسار `|x|` يعطي `n^{−3/2}`. أما الدالة الملساء `e^{ax}` فمعاملاتها `c_n = (2n + 1) i_n(a)` (دوال بسل الكروية المعدلة) تتناقص أسرع من أي قوة، و `c_0 = sinh(a)/a`.'],
],[
  Q('Find `c_3` in the expansion of `sign(x)`.','أوجد `c_3` في مفكوك `sign(x)`.','−#f{7}{8}',
    ['c_3 = #f{7}{2}·2∫_0^1 #f{5x^3 − 3x}{2} dx = #f{7}{2}(#f{5}{4} − #f{3}{2})', '= #f{7}{2}·(−#f{1}{4}) = −#f{7}{8}'],
    ['#f{7}{8}','−#f{7}{4}','#f{3}{2}']),
  Q('Find `c_4` in the expansion of `|x|`.','أوجد `c_4` في مفكوك `|x|`.','−#f{3}{16}',
    ['c_4 = 9∫_0^1 x·#f{35x^4 − 30x^2 + 3}{8} dx = #f{9}{8}(#f{35}{6} − #f{30}{4} + #f{3}{2})', '= #f{9}{8}·(−#f{1}{6}) = −#f{3}{16}'],
    ['#f{3}{16}','−#f{3}{8}','#f{5}{8}']),
  Q('Find `c_0` for `e^{2x}`.','أوجد `c_0` للدالة `e^{2x}`.','#f{sinh 2}{2} ≈ 1.8134',
    ['c_0 = #f{1}{2}∫_{−1}^{1} e^{2x} dx = #f{e^2 − e^{−2}}{4} = #f{sinh 2}{2}', '≈ #f{3.6269}{2} = 1.8134'],
    ['sinh 2 ≈ 3.6269','#f{e^2 − 1}{2} ≈ 3.1945','#f{cosh 2}{2} ≈ 1.8811']),
  Q('Evaluate the partial sum `S_4` of `|x|` at x = 0 and compare with `|0| = 0`.','احسب المجموع الجزئي `S_4` لـ `|x|` عند x = 0 وقارنه بـ `|0| = 0`.','S_4(0) = #f{15}{128} ≈ 0.1172',
    ['S_4(0) = #f{1}{2} + #f{5}{8}·(−#f{1}{2}) − #f{3}{16}·#f{3}{8}', '= #f{64 − 40 − 9}{128} = #f{15}{128} ≈ 0.1172',
     ['At the kink the series converges slowly: the error is still 0.12 after five terms.','عند نقطة الانكسار يتقارب المفكوك ببطء: الخطأ ما زال 0.12 بعد خمسة حدود.']],
    ['S_4(0) = 0','S_4(0) = #f{1}{2}','S_4(0) = #f{3}{16}']),
]);

lesson('501',26,[
  ['If f is analytic on `[−1, 1]`, its coefficients fall geometrically. The rate is set by the largest Bernstein ellipse (foci ±1, semi-axes summing to ρ) inside which f stays analytic:','إذا كانت f تحليلية على `[−1, 1]` فإن معاملاتها تتناقص هندسياً. ويحدد المعدلَ أكبرُ قطع ناقص لبرنشتاين (بؤرتاه ±1 ومجموع نصفي محوريه ρ) تبقى f داخله تحليلية:'],
  '|c_n| ≤ C ρ^{−n},   ρ = |z_0 + #r{z_0^2 − 1}|',
  ['Here `z_0` is the nearest singularity of f in the complex plane, with the square root chosen so that ρ > 1. A singularity close to the interval (ρ near 1) means slow convergence; an entire function such as `e^x` converges faster than any `ρ^{−n}`. To reach an accuracy ε we need about `N ≈ log(1/ε)/log ρ` terms.',
   'و `z_0` أقرب نقطة شاذة لـ f في المستوى المركب، والجذر يُختار بحيث ρ > 1. فالنقطة الشاذة القريبة من المجال (ρ قريبة من 1) تعني تقارباً بطيئاً، والدالة الصحيحة مثل `e^x` تتقارب أسرع من أي `ρ^{−n}`. وللوصول إلى دقة ε نحتاج نحو `N ≈ log(1/ε)/log ρ` حداً.'],
],[
  Q('Find ρ for `f(x) = 1/(x − 2)`.','أوجد ρ للدالة `f(x) = 1/(x − 2)`.','ρ = 2 + #r{3} ≈ 3.7321',
    ['z_0 = 2:   ρ = 2 + #r{4 − 1} = 2 + #r{3} ≈ 3.7321'], ['ρ = 2','ρ = #r{3} ≈ 1.7321','ρ = 2 − #r{3} ≈ 0.2679']),
  Q('About how many terms give `10^{−10}` accuracy for `1/(x − 2)`?','كم حداً تقريباً يعطي دقة `10^{−10}` للدالة `1/(x − 2)`؟','N ≈ 18',
    ['N ≈ #f{log 10^{10}}{log 3.7321} = #f{10}{0.572} ≈ 17.5', ['So about 18 terms.','أي نحو 18 حداً.']],
    ['N ≈ 10','N ≈ 35','N ≈ 100']),
  Q('Find ρ for Runge’s function `1/(1 + 25x^2)`, whose singularities are `z_0 = ±i/5`.','أوجد ρ لدالة رونج `1/(1 + 25x^2)` ونقطتاها الشاذتان `z_0 = ±i/5`.','ρ = 0.2 + #r{1.04} ≈ 1.2198',
    ['|z_0 + #r{z_0^2 − 1}| = |#f{i}{5} + #r{−1.04}| = 0.2 + 1.0198', 'ρ ≈ 1.2198', ['ρ is close to 1, so about `10/log_{10} 1.22 ≈ 116` terms are needed for 10 digits.','ρ قريبة من 1، فنحتاج نحو `10/log_{10} 1.22 ≈ 116` حداً لعشرة أرقام.']],
    ['ρ = 5','ρ = 1.04','ρ = 1.2']),
  Q('Find ρ when the nearest singularity is the real point `z_0 = 1.25`.','أوجد ρ إذا كانت أقرب نقطة شاذة هي النقطة الحقيقية `z_0 = 1.25`.','ρ = 2',
    ['ρ = 1.25 + #r{1.5625 − 1} = 1.25 + 0.75 = 2', ['Each new coefficient is about half the previous one.','كل معامل جديد نحو نصف السابق.']],
    ['ρ = 1.25','ρ = 0.75','ρ = 2.5']),
]);

lesson('501',27,[
  ['When f is not smooth, the coefficients fall only like a power of n, and the place of the singularity matters:','إذا لم تكن f ملساء تتناقص المعاملات مثل قوة لـ n فقط، ومكان النقطة الشاذة مهم:'],
  ['Interior singularity `|x − x_0|^{α}`: `c_n ~ n^{−α−1/2}`.   End singularity `(1 + x)^{α}`: `c_n ~ n^{−2α−1}`.','نقطة شاذة داخلية `|x − x_0|^{α}`: `c_n ~ n^{−α−1/2}`.   ونقطة شاذة عند الطرف `(1 + x)^{α}`: `c_n ~ n^{−2α−1}`.'],
  ['An end singularity is felt only half as strongly, because the Legendre polynomials crowd their oscillations near ±1. This is exactly the situation of fractional problems: the solution behaves like `t^{α}` at t = 0, an end of `[0, T]`. Algebraic decay means slow convergence; the cure is a basis with the same powers, `L_n^{λ}`.',
   'والنقطة الشاذة عند الطرف أثرها أخف، لأن تذبذبات كثيرات ليجندر تتزاحم قرب ±1. وهذا تماماً وضع المسائل الكسرية: الحل يسلك مثل `t^{α}` عند t = 0 وهو طرف `[0, T]`. والتناقص الجبري يعني تقارباً بطيئاً، وعلاجه أساس فيه القوى نفسها `L_n^{λ}`.'],
],[
  Q('At what rate do the Legendre coefficients of `|x|^{1/2}` decay?','بأي معدل تتناقص معاملات ليجندر للدالة `|x|^{1/2}`؟','c_n ~ n^{−1}',
    [['An interior singularity with `α = 1/2`:','نقطة شاذة داخلية مع `α = 1/2`:'], 'n^{−α−1/2} = n^{−1}'], ['c_n ~ n^{−2}','c_n ~ n^{−1/2}','c_n ~ ρ^{−n}']),
  Q('At what rate do the Legendre coefficients of `#r{1 + x}` decay?','بأي معدل تتناقص معاملات ليجندر للدالة `#r{1 + x}`؟','c_n ~ n^{−2}',
    [['An end singularity with `α = 1/2`:','نقطة شاذة عند الطرف مع `α = 1/2`:'], 'n^{−2α−1} = n^{−2}', ['Faster than `|x|^{1/2}`, although both have a square-root singularity.','أسرع من `|x|^{1/2}` مع أن لكليهما نقطة شاذة جذرية.']],
    ['c_n ~ n^{−1}','c_n ~ n^{−3/2}','c_n ~ ρ^{−n}']),
  Q('The coefficients of `|x|` satisfy `|c_n| ≈ C n^{−3/2}`. If `|c_20| ≈ 0.0173`, estimate `|c_80|`.','معاملات `|x|` تحقق `|c_n| ≈ C n^{−3/2}`. إذا كان `|c_20| ≈ 0.0173` فقدّر `|c_80|`.','|c_80| ≈ 0.0022',
    ['|c_80| ≈ 0.0173·(#f{20}{80})^{3/2} = 0.0173·#f{1}{8} ≈ 0.0022', ['Four times as many terms gain less than one digit.','أربعة أضعاف الحدود لا تكسب رقماً واحداً كاملاً.']],
    ['|c_80| ≈ 0.0043','|c_80| ≈ 0.0011','|c_80| ≈ 10^{−8}']),
  Q('A solution behaves like `t^{1/2}` near t = 0 on `[0, 1]`. With polynomials, how do its Legendre coefficients decay, and what basis removes the problem?','حل يسلك مثل `t^{1/2}` قرب t = 0 على `[0, 1]`. كيف تتناقص معاملاته بالكثيرات، وأي أساس يزيل المشكلة؟',
    ['Like `n^{−2}`; use `L_n^{λ}` with `λ = 1/2`','مثل `n^{−2}`؛ ونستخدم `L_n^{λ}` مع `λ = 1/2`'],
    ['t = #f{x + 1}{2}:   t^{1/2} = #f{(1 + x)^{1/2}}{#r{2}}', ['An end singularity with `α = 1/2`:','نقطة شاذة عند الطرف مع `α = 1/2`:'], 'n^{−2α−1} = n^{−2}', ['In the basis `L_n^{1/2}` it is exact with two functions.','وفي الأساس `L_n^{1/2}` يكون مضبوطاً بدالتين.']],
    [['Like `ρ^{−n}`; no change is needed','مثل `ρ^{−n}`؛ ولا حاجة إلى تغيير'],['Like `n^{−1}`; use Chebyshev polynomials','مثل `n^{−1}`؛ ونستخدم كثيرات تشيبيشيف']]),
]);

lesson('501',28,[
  ['For a function with a jump the partial sums overshoot near the jump, and the overshoot does not shrink as N grows: this is the Gibbs phenomenon. For `sign(x)` the partial sums reach about 1.18 near 0+, an overshoot of about 9% of the jump 2.',
   'في الدالة ذات القفزة تتجاوز المجاميع الجزئية القيمة قرب القفزة، ولا يصغر هذا التجاوز بزيادة N: وهذه ظاهرة جيبس. ففي `sign(x)` تصل المجاميع الجزئية إلى نحو 1.18 قرب +0، أي تجاوز قدره نحو 9% من القفزة 2.'],
  'S_3 sign(x) = #f{45x − 35x^3}{16}',
  ['Away from the jump the error does fall, but only like `N^{−1/2}`, and the overshoot region narrows like `1/N`. A spectral method keeps its speed only if discontinuities are avoided (split the domain at the jump) or filtered.',
   'وبعيداً عن القفزة يتناقص الخطأ لكن مثل `N^{−1/2}` فقط، وتضيق منطقة التجاوز مثل `1/N`. ولا تحتفظ الطريقة الطيفية بسرعتها إلا بتجنب الانقطاعات (تقسيم المجال عند القفزة) أو بالترشيح.'],
],[
  Q('Find the largest value of `S_3 sign(x) = (45x − 35x^3)/16` on `[0, 1]`.','أوجد أكبر قيمة لـ `S_3 sign(x) = (45x − 35x^3)/16` على `[0, 1]`.',['About 1.2276, at `x = #r{3/7} ≈ 0.6547`','نحو 1.2276 عند `x = #r{3/7} ≈ 0.6547`'],
    ['#f{d}{dx}:  45 − 105x^2 = 0  ⇒  x = #r{#f{3}{7}} ≈ 0.6547', 'S_3 = #f{45(0.6547) − 35(0.2806)}{16} ≈ 1.2276'],
    [['1, at `x = 1`','1 عند `x = 1`'],['About 1.18, at `x = 0.5`','نحو 1.18 عند `x = 0.5`'],['1.5, at `x = 1`','1.5 عند `x = 1`']]),
  Q('Find the error of `S_3 sign(x)` at x = 0.5.','أوجد خطأ `S_3 sign(x)` عند x = 0.5.','≈ 0.1328',
    ['S_3(0.5) = #f{22.5 − 4.375}{16} = 1.1328', '|1.1328 − 1| = 0.1328'], ['≈ 0.0328','0','≈ 0.2276']),
  Q('As N grows, what happens to the largest value of `S_N sign(x)` near the jump?','بزيادة N ماذا يحدث لأكبر قيمة لـ `S_N sign(x)` قرب القفزة؟',['It tends to about 1.18, not to 1','تقترب من نحو 1.18 لا من 1'],
    ['N = 21, 51, 101:   max S_N ≈ 1.181, 1.181, 1.185', ['The overshoot stays; only its location moves closer to 0.','يبقى التجاوز، وإنما يقترب موضعه من 0.']],
    [['It tends to 1','تقترب من 1'],['It grows without bound','تكبر بلا حد'],['It tends to 1.5','تقترب من 1.5']]),
  Q('`u` has a jump at x = 0.3 inside `[−1, 1]`. How should a spectral method treat it?','الدالة `u` لها قفزة عند x = 0.3 داخل `[−1, 1]`. كيف تعالجها الطريقة الطيفية؟',['Split the domain at 0.3 and expand on each part','نقسم المجال عند 0.3 وننشر على كل جزء'],
    [['On `[−1, 0.3]` and `[0.3, 1]` the function is smooth, so each piece converges spectrally (a multidomain method).','على `[−1, 0.3]` و `[0.3, 1]` الدالة ملساء، فكل جزء يتقارب طيفياً (طريقة المجالات المتعددة).']],
    [['Use more terms on the whole interval','نستخدم حدوداً أكثر على المجال كله'],['Ignore it: the error goes to zero everywhere','نتجاهلها: الخطأ يؤول إلى الصفر في كل مكان']]),
]);

lesson('501',29,[
  ['On `[0, 1]` the paper expands the solution in the fractional Legendre functions, its expansion (2.10):','على `[0, 1]` ينشر البحث الحل بدوال ليجندر الكسرية، وهذا مفكوكه (2.10):'],
  'y(t) ≈ Σ_{n=0}^{M} a_n L_n^{λ}(t),   a_n = (2n + 1) ∫_0^1 y(t) L_n^{λ}(t) λt^{λ−1} dt',
  ['The factor `2n + 1` is the reciprocal of `‖L_n^{λ}‖^2 = 1/(2n + 1)`. With `s = t^{λ}` every coefficient becomes an ordinary shifted-Legendre coefficient of `y(s^{1/λ})`, so all the tools of this unit apply.',
   'والعامل `2n + 1` مقلوب `‖L_n^{λ}‖^2 = 1/(2n + 1)`. ومع `s = t^{λ}` يصبح كل معامل معاملاً عادياً لكثيرات ليجندر المزاحة للدالة `y(s^{1/λ})`، فتنطبق كل أدوات هذه الوحدة.'],
],[
  Q('For `y = t^{1/2}` and `λ = 1/2`, find `a_0`.','للدالة `y = t^{1/2}` مع `λ = 1/2` أوجد `a_0`.','a_0 = #f{1}{2}',
    ['s = t^{1/2}:   a_0 = ∫_0^1 s ds = #f{1}{2}'], ['a_0 = 1','a_0 = #f{2}{3}','a_0 = #f{1}{3}']),
  Q('For `y = t` and `λ = 1/2`, find `a_1`.','للدالة `y = t` مع `λ = 1/2` أوجد `a_1`.','a_1 = #f{1}{2}',
    ['y = s^2:   a_1 = 3∫_0^1 s^2(2s − 1) ds = 3(#f{1}{2} − #f{1}{3}) = #f{1}{2}', ['Indeed `t = (1/3)L_0 + (1/2)L_1 + (1/6)L_2` with `λ = 1/2`.','وفعلاً `t = (1/3)L_0 + (1/2)L_1 + (1/6)L_2` عند `λ = 1/2`.']],
    ['a_1 = #f{1}{3}','a_1 = #f{1}{6}','a_1 = 1']),
  Q('For `y = e^t` and `λ = 1`, find `a_0`.','للدالة `y = e^t` مع `λ = 1` أوجد `a_0`.','a_0 = e − 1 ≈ 1.7183',
    ['a_0 = ∫_0^1 e^t dt = e − 1'], ['a_0 = e ≈ 2.7183','a_0 = 1','a_0 = #f{e − 1}{2} ≈ 0.8591']),
  Q('For `y = t^{3/2}` and `λ = 1/2`, how many terms does the expansion have?','للدالة `y = t^{3/2}` مع `λ = 1/2` كم حداً في المفكوك؟',['Four: `L_0, …, L_3`','أربعة: `L_0, …, L_3`'],
    ['t^{3/2} = s^3,   s = t^{1/2}', ['A cubic in s needs `L_0^{λ}, …, L_3^{λ}`, and the coefficients with n > 3 vanish.','كثيرة حدود تكعيبية في s تحتاج `L_0^{λ}, …, L_3^{λ}` والمعاملات بعد n = 3 أصفار.']],
    [['Infinitely many','عدد لا نهائي'],['Two: `L_0, L_1`','اثنان: `L_0, L_1`'],['Three: `L_0, L_1, L_2`','ثلاثة: `L_0, L_1, L_2`']]),
]);

lesson('501',30,[
  ['If the exact solution is a sum of powers `t^{β_1}, t^{β_2}, …` (plus integer powers), the paper takes λ as their greatest common divisor:','إذا كان الحل المضبوط مجموع قوى `t^{β_1}, t^{β_2}, …` (مع قوى صحيحة) يأخذ البحث λ القاسم المشترك الأكبر لها:'],
  'λ = gcd(β_1, β_2, …),   β_k = m_k λ,   y = Σ_k b_k s^{m_k},   s = t^{λ}',
  ['Then y is a polynomial in s, its expansion in `L_n^{λ}` is finite, and the method can give the exact solution up to rounding. When the powers are not known in advance, the singular behaviour of the equation (for example `t^{α}` for an equation of order α) suggests λ.',
   'فتكون y كثيرة حدود في s، ومفكوكها بـ `L_n^{λ}` منتهياً، ويمكن أن تعطي الطريقة الحل المضبوط حتى أخطاء التقريب. وإذا لم تُعرف القوى مسبقاً فإن السلوك الشاذ للمعادلة (مثل `t^{α}` لمعادلة من الرتبة α) يقترح λ.'],
],[
  Q('Choose λ for `y = t^{1/3} + t^{1/2}`.','اختر λ للدالة `y = t^{1/3} + t^{1/2}`.','λ = #f{1}{6}',
    ['#f{1}{3} = #f{2}{6},   #f{1}{2} = #f{3}{6}', 'λ = gcd(#f{1}{3}, #f{1}{2}) = #f{1}{6}'], ['λ = #f{1}{3}','λ = #f{1}{2}','λ = #f{5}{6}']),
  Q('Choose λ for `y = 1 + t^{0.4} + t^{1.2}`, and give the degree in s.','اختر λ للدالة `y = 1 + t^{0.4} + t^{1.2}` واذكر الدرجة في s.',['`λ = 0.4`, degree 3','`λ = 0.4` والدرجة 3'],
    ['0.4 = 1·0.4,   1.2 = 3·0.4', 'y = 1 + s + s^3,   s = t^{0.4}'],
    [['`λ = 0.2`, degree 6','`λ = 0.2` والدرجة 6'],['`λ = 1.2`, degree 1','`λ = 1.2` والدرجة 1'],['`λ = 0.4`, degree 2','`λ = 0.4` والدرجة 2']]),
  Q('Choose λ for `y = t^{1/2} + t + t^{3/2}`.','اختر λ للدالة `y = t^{1/2} + t + t^{3/2}`.','λ = #f{1}{2}',
    ['#f{1}{2} = 1·#f{1}{2},   1 = 2·#f{1}{2},   #f{3}{2} = 3·#f{1}{2}', 'y = s + s^2 + s^3,   s = t^{1/2}'],
    ['λ = 1','λ = #f{3}{2}','λ = #f{1}{4}']),
  Q('Why is `λ = 1/4` also correct for `y = t^{1/2} + t`, and why is `λ = 1/2` better?','لماذا تصلح `λ = 1/4` أيضاً للدالة `y = t^{1/2} + t`، ولماذا `λ = 1/2` أفضل؟',['Both divide the powers; 1/2 needs a lower degree (2 instead of 4)','كلتاهما تقسم القوى؛ و 1/2 تحتاج درجة أقل (2 بدل 4)'],
    ['λ = #f{1}{4}:  y = s^2 + s^4,     λ = #f{1}{2}:  y = s + s^2', ['The greatest common divisor gives the smallest system.','القاسم المشترك الأكبر يعطي أصغر نظام.']],
    [['Only `λ = 1/4` works','لا تصلح إلا `λ = 1/4`'],['They give the same degree','تعطيان الدرجة نفسها']]),
]);

/* ---- 501 · Unit 4 (lessons 31–40): numerical quadrature ---- */
lesson('501',31,[
  ['A quadrature rule replaces an integral by a weighted sum of values at chosen nodes:','قاعدة التربيع تستبدل بالتكامل مجموعاً موزوناً لقيم عند عقد مختارة:'],
  '∫_{−1}^{1} f(x) dx ≈ Σ_{i=1}^{n} w_i f(x_i)',
  ['The degree of exactness is the largest d such that the rule is exact for every polynomial of degree ≤ d. Exactness for `1, x, …, x^d` gives linear equations for the weights; in particular `Σ w_i = 2`, the length of the interval. Simpson’s rule on `[−1, 1]` is `(f(−1) + 4f(0) + f(1))/3`, exact up to degree 3.',
   'ودرجة الدقة هي أكبر d بحيث تكون القاعدة مضبوطة لكل كثيرة حدود درجتها ≤ d. والضبط للقوى `1, x, …, x^d` يعطي معادلات خطية للأوزان، ومنها `Σ w_i = 2` وهو طول المجال. وقاعدة سمبسون على `[−1, 1]` هي `(f(−1) + 4f(0) + f(1))/3` ومضبوطة حتى الدرجة 3.'],
],[
  Q('Find the weights of the rule with nodes −1, 0, 1 that is exact for `1, x, x^2`.','أوجد أوزان القاعدة ذات العقد −1 و 0 و 1 المضبوطة للقوى `1, x, x^2`.','w = #f{1}{3},  #f{4}{3},  #f{1}{3}',
    ['1:  w_1 + w_2 + w_3 = 2,     x:  −w_1 + w_3 = 0,     x^2:  w_1 + w_3 = #f{2}{3}', 'w_1 = w_3 = #f{1}{3},   w_2 = 2 − #f{2}{3} = #f{4}{3}', ['This is Simpson’s rule.','وهذه قاعدة سمبسون.']],
    ['w = #f{1}{2},  1,  #f{1}{2}','w = #f{2}{3},  #f{2}{3},  #f{2}{3}','w = #f{1}{6},  #f{2}{3},  #f{1}{6}']),
  Q('Apply Simpson’s rule to `∫_{−1}^{1} x^4 dx` and find the error.','طبّق قاعدة سمبسون على `∫_{−1}^{1} x^4 dx` وأوجد الخطأ.','#f{4}{15}',
    [['The rule gives `(1 + 0 + 1)/3 = 2/3`, and the exact value is `2/5`:','القاعدة تعطي `(1 + 0 + 1)/3 = 2/3` والقيمة المضبوطة `2/5`:'], '#f{2}{3} − #f{2}{5} = #f{4}{15}', ['So the degree of exactness of Simpson’s rule is exactly 3.','إذن درجة دقة سمبسون 3 تماماً.']],
    ['0','#f{8}{45}','#f{14}{15}']),
  Q('Apply the midpoint rule `2f(0)` to `∫_{−1}^{1} x^2 dx` and find the error.','طبّق قاعدة نقطة المنتصف `2f(0)` على `∫_{−1}^{1} x^2 dx` وأوجد الخطأ.','#f{2}{3}',
    [['The rule gives `2·0^2 = 0`, and the exact value is `2/3`.','القاعدة تعطي `2·0^2 = 0` والقيمة المضبوطة `2/3`.'], ['The midpoint rule is exact for degree 1 only.','قاعدة المنتصف مضبوطة للدرجة 1 فقط.']],
    ['0','#f{4}{3}','#f{1}{3}']),
  Q('What is the sum of the weights of any rule on `[0, 5]` that is exact for constants?','ما مجموع أوزان أي قاعدة على `[0, 5]` مضبوطة للثوابت؟','5',
    ['f = 1:   Σ w_i = ∫_0^5 1 dt = 5'], ['2','1','10']),
]);

lesson('501',32,[
  ['Interpolating f at the nodes by `p = Σ f(x_i) ℓ_i(x)` and integrating p gives an interpolatory rule, whose weights are the integrals of the Lagrange functions:','باستكمال f عند العقد بـ `p = Σ f(x_i) ℓ_i(x)` ثم تكامل p نحصل على قاعدة استكمالية، أوزانها تكاملات دوال لاجرانج:'],
  'w_i = ∫_{−1}^{1} ℓ_i(x) dx,   ℓ_i(x) = Π_{j≠i} #f{x − x_j}{x_i − x_j}',
  ['Any n distinct nodes give a rule exact for degree n − 1. The art of quadrature is choosing the nodes so that the rule is exact for much more; Gauss’s choice doubles the degree.','أي n عقدة مختلفة تعطي قاعدة مضبوطة للدرجة n − 1، وفن التربيع في اختيار العقد لتكون القاعدة مضبوطة لأكثر من ذلك بكثير، واختيار جاوس يضاعف الدرجة.'],
],[
  Q('Find the weights for the nodes 0 and 1 on `[−1, 1]`.','أوجد الأوزان للعقدتين 0 و 1 على `[−1, 1]`.','w_0 = 2,   w_1 = 0',
    ['ℓ_0 = #f{x − 1}{0 − 1} = 1 − x,   ∫_{−1}^{1}(1 − x) dx = 2', 'ℓ_1 = #f{x − 0}{1 − 0} = x,   ∫_{−1}^{1} x dx = 0', ['The rule is `2f(0)`: the node at 1 gets no weight.','القاعدة هي `2f(0)`: العقدة عند 1 لا وزن لها.']],
    ['w_0 = 1,   w_1 = 1','w_0 = #f{3}{2},   w_1 = #f{1}{2}','w_0 = 0,   w_1 = 2']),
  Q('Find the weights for the nodes −1, 1/3, 1.','أوجد الأوزان للعقد −1 و 1/3 و 1.','w = #f{1}{2},  #f{3}{2},  0',
    ['ℓ_{−1} = #f{(x − 1/3)(x − 1)}{8/3}  ⇒  w = #f{4/3}{8/3} = #f{1}{2}', 'ℓ_{1/3} = #f{(x + 1)(x − 1)}{−8/9}  ⇒  w = #f{−4/3}{−8/9} = #f{3}{2}', 'ℓ_1 = #f{(x + 1)(x − 1/3)}{4/3}  ⇒  w = #f{0}{4/3} = 0',
     ['This is the two-point Gauss–Radau rule (Lesson 37).','وهذه قاعدة جاوس–رادو ذات النقطتين (الدرس 37).']],
    ['w = #f{1}{3},  #f{4}{3},  #f{1}{3}','w = #f{2}{3},  #f{2}{3},  #f{2}{3}','w = #f{1}{2},  1,  #f{1}{2}']),
  Q('By symmetry, find the weights for the nodes `±1/2`.','بالتماثل أوجد الأوزان للعقدتين `±1/2`.','w = 1,  1',
    [['The nodes are symmetric, so the weights are equal, and they add up to 2.','العقد متماثلة فالأوزان متساوية ومجموعها 2.'], 'w_1 = w_2 = 1'],
    ['w = #f{1}{2},  #f{1}{2}','w = 2,  2','w = #f{2}{3},  #f{4}{3}']),
  Q('What degree of exactness is guaranteed for an interpolatory rule with 6 distinct nodes?','ما درجة الدقة المضمونة لقاعدة استكمالية بست عقد مختلفة؟','5',
    [['The interpolating polynomial of degree ≤ 5 is exact for every f of degree ≤ 5.','كثيرة الاستكمال من الدرجة ≤ 5 تطابق كل f درجتها ≤ 5.'], 'n − 1 = 5'],
    ['6','11','3']),
]);

lesson('501',33,[
  ['Gauss–Legendre takes the n zeros of `P_n` as nodes, with the weights from Lesson 12:','قاعدة جاوس–ليجندر تأخذ جذور `P_n` الـ n عقداً، بالأوزان من الدرس 12:'],
  'x_i:  P_n(x_i) = 0,   w_i = #f{2}{(1 − x_i^2) P_n′(x_i)^2}',
  'n = 2:  ±#f{1}{#r{3}};  1, 1          n = 3:  0, ±#r{#f{3}{5}};  #f{8}{9}, #f{5}{9}, #f{5}{9}',
  ['All weights are positive, so the rule is stable, and the error falls spectrally for smooth f.','وكل الأوزان موجبة فالقاعدة مستقرة، والخطأ يتناقص طيفياً للدوال الملساء.'],
],[
  Q('Compute the three-point weight at the node x = 0.','احسب وزن القاعدة ذات النقاط الثلاث عند العقدة x = 0.','#f{8}{9}',
    ['P_3′ = #f{15x^2 − 3}{2}  ⇒  P_3′(0) = −#f{3}{2}', 'w = #f{2}{(1 − 0)·#f{9}{4}} = #f{8}{9}'], ['#f{5}{9}','#f{4}{3}','1']),
  Q('Compute the three-point weight at `x = #r{3/5}`.','احسب وزن القاعدة ذات النقاط الثلاث عند `x = #r{3/5}`.','#f{5}{9}',
    ['P_3′(#r{0.6}) = #f{15·0.6 − 3}{2} = 3,   1 − x^2 = 0.4', 'w = #f{2}{0.4·9} = #f{5}{9}', ['Check: `8/9 + 2·5/9 = 2`.','تحقق: `8/9 + 2·5/9 = 2`.']],
    ['#f{8}{9}','#f{1}{3}','#f{2}{9}']),
  Q('Apply the two-point Gauss rule to `∫_{−1}^{1} e^x dx`.','طبّق قاعدة جاوس ذات النقطتين على `∫_{−1}^{1} e^x dx`.','≈ 2.3427',
    ['e^{0.5774} + e^{−0.5774} = 1.7813 + 0.5614 = 2.3427', ['Exact: `e − e^{−1} = 2.3504`; the error 0.0077 comes from two values only.','المضبوط: `e − e^{−1} = 2.3504`، والخطأ 0.0077 من قيمتين فقط.']],
    ['≈ 2.3504','≈ 3.0862','≈ 2.0000']),
  Q('Apply the three-point Gauss rule to `∫_{−1}^{1} x^4 dx`.','طبّق قاعدة جاوس ذات النقاط الثلاث على `∫_{−1}^{1} x^4 dx`.','#f{2}{5}',
    ['#f{8}{9}·0 + #f{5}{9}·0.36 + #f{5}{9}·0.36 = #f{3.6}{9} = 0.4', ['Exact, as degree 4 ≤ 2·3 − 1 = 5.','مضبوطة لأن الدرجة 4 ≤ 2·3 − 1 = 5.']],
    ['#f{2}{9}','#f{2}{3}','#f{4}{9}']),
]);

lesson('501',34,[
  ['The n-point Gauss rule is exact for every polynomial of degree ≤ 2n − 1, and no n-point rule can do better.','قاعدة جاوس ذات n نقطة مضبوطة لكل كثيرة حدود درجتها ≤ 2n − 1، ولا توجد قاعدة بـ n نقطة أفضل منها.'],
  'deg p ≤ 2n − 1:   p = q P_n + r,   deg q, deg r ≤ n − 1',
  ['Proof: `∫ q P_n dx = 0` by orthogonality, and the rule also gives 0 for it because `P_n(x_i) = 0`; the remainder r is integrated exactly because the rule is interpolatory. For the limit, `f = Π (x − x_i)^2` has degree 2n and a positive integral, but the rule gives 0.',
   'البرهان: `∫ q P_n dx = 0` من التعامد، والقاعدة تعطيه 0 أيضاً لأن `P_n(x_i) = 0`، والباقي r يُكامل بدقة لأن القاعدة استكمالية. وللحد الأعلى: `f = Π (x − x_i)^2` درجتها 2n وتكاملها موجب، لكن القاعدة تعطيها 0.'],
],[
  Q('Up to which degree is the three-point Gauss rule exact?','حتى أي درجة تكون قاعدة جاوس ذات النقاط الثلاث مضبوطة؟','5',
    ['2n − 1 = 2·3 − 1 = 5'], ['3','6','2']),
  Q('Apply the two-point Gauss rule to `∫_{−1}^{1} x^4 dx`.','طبّق قاعدة جاوس ذات النقطتين على `∫_{−1}^{1} x^4 dx`.','#f{2}{9}',
    ['(#f{1}{#r{3}})^4 + (−#f{1}{#r{3}})^4 = #f{2}{9}', ['Exact is 2/5: degree 4 > 2·2 − 1 = 3.','المضبوط 2/5: الدرجة 4 > 2·2 − 1 = 3.']],
    ['#f{2}{5}','#f{1}{9}','#f{2}{3}']),
  Q('How many Gauss points are needed to integrate any polynomial of degree 9 exactly?','كم نقطة جاوس تلزم لتكامل أي كثيرة حدود من الدرجة 9 تكاملاً مضبوطاً؟','5',
    ['2n − 1 ≥ 9  ⇒  n ≥ 5'], ['9','10','4']),
  Q('For the two-point rule, compute the rule’s value and the exact value of `∫_{−1}^{1} (x^2 − 1/3)^2 dx`.','لقاعدة النقطتين احسب قيمة القاعدة والقيمة المضبوطة لـ `∫_{−1}^{1} (x^2 − 1/3)^2 dx`.',['The rule gives 0; the exact value is `8/45`','القاعدة تعطي 0 والقيمة المضبوطة `8/45`'],
    ['(x^2 − #f{1}{3})^2 = (x − x_1)^2(x − x_2)^2', ['It vanishes at both nodes, so the rule gives 0.','تنعدم عند العقدتين فالقاعدة تعطي 0.'], '∫_{−1}^{1}(x^4 − #f{2}{3}x^2 + #f{1}{9}) dx = #f{2}{5} − #f{4}{9} + #f{2}{9} = #f{8}{45}'],
    [['Both are `8/45`','كلتاهما `8/45`'],['Both are 0','كلتاهما 0'],['The rule gives `2/9`; the exact value is `8/45`','القاعدة تعطي `2/9` والقيمة المضبوطة `8/45`']]),
]);

lesson('501',35,[
  ['For a smooth f the error of the n-point Gauss rule on `[−1, 1]` is','للدالة الملساء يكون خطأ قاعدة جاوس ذات n نقطة على `[−1, 1]`'],
  'E_n(f) = #f{2^{2n+1} (n!)^4}{(2n + 1)[(2n)!]^3} f^{(2n)}(ξ),   −1 < ξ < 1',
  ['The constants fall extremely fast: 1/3 for n = 1, 1/135 for n = 2, 1/15750 for n = 3. On an interval `[a, b]` multiply by `((b − a)/2)^{2n+1}`. For analytic f the error falls like `ρ^{−2n}`, twice the rate of the Legendre coefficients.',
   'والثوابت تتناقص بسرعة كبيرة: 1/3 عند n = 1 و 1/135 عند n = 2 و 1/15750 عند n = 3. وعلى مجال `[a, b]` نضرب في `((b − a)/2)^{2n+1}`. وللدوال التحليلية يتناقص الخطأ مثل `ρ^{−2n}`، أي ضعف معدل معاملات ليجندر.'],
],[
  Q('Compute the error constant for n = 2.','احسب ثابت الخطأ عند n = 2.','#f{1}{135}',
    ['#f{2^5 (2!)^4}{5 (4!)^3} = #f{32·16}{5·13824} = #f{512}{69120} = #f{1}{135}'], ['#f{1}{3}','#f{1}{90}','#f{1}{15750}']),
  Q('Check the error law for n = 2 with `f = x^4`.','تحقق من قانون الخطأ عند n = 2 مع `f = x^4`.','#f{8}{45}',
    [['Exact value minus the rule:','القيمة المضبوطة ناقص القاعدة:'], '#f{2}{5} − #f{2}{9} = #f{8}{45}', ['The law with `f^{(4)} = 24`:','والقانون مع `f^{(4)} = 24`:'], '#f{24}{135} = #f{8}{45}'], ['#f{4}{15}','#f{2}{9}','0']),
  Q('Bound the error of the three-point Gauss rule for `∫_{−1}^{1} e^x dx`.','أوجد حداً لخطأ قاعدة جاوس ذات النقاط الثلاث لـ `∫_{−1}^{1} e^x dx`.','≤ #f{e}{15750} ≈ 1.7 × 10^{−4}',
    ['|E_3| ≤ #f{1}{15750} max |f^{(6)}| = #f{e}{15750} ≈ 1.73 × 10^{−4}', ['The true error is `6.5 × 10^{−5}`, within the bound.','والخطأ الحقيقي `6.5 × 10^{−5}` داخل الحد.']],
    ['≤ #f{e}{135} ≈ 0.020','≤ #f{1}{15750} ≈ 6.3 × 10^{−5}','= 0']),
  Q('The one-point Gauss rule (midpoint) is used on `[0, 0.2]`. What is its error constant there?','تُستخدم قاعدة جاوس ذات النقطة الواحدة (المنتصف) على `[0, 0.2]`. ما ثابت خطئها هناك؟','#f{1}{3}·0.1^3 = #f{1}{3000}',
    ['#f{1}{3}·(#f{b − a}{2})^{3} = #f{1}{3}·0.1^3 = #f{1}{3000}', ['This is the familiar `(b − a)^3 f″(ξ)/24`.','وهذا هو الحد المألوف `(b − a)^3 f″(ξ)/24`.']],
    ['#f{1}{3}·0.2^3 = #f{1}{375}','#f{1}{3}','#f{1}{24}']),
]);

lesson('501',36,[
  ['Gauss–Lobatto rules include both ends ±1 as nodes; the other n − 2 nodes are the zeros of `P_{n−1}′`:','قواعد جاوس–لوباتو تضم الطرفين ±1 عقدتين، والعقد الأخرى n − 2 هي جذور `P_{n−1}′`:'],
  'w_i = #f{2}{n(n − 1) P_{n−1}(x_i)^2},   w_{±1} = #f{2}{n(n − 1)}',
  ['Fixing two nodes costs two degrees: the rule is exact up to degree 2n − 3. Lobatto nodes are the natural collocation points when boundary values are imposed, since the ends are nodes. With n = 3 it is Simpson’s rule; with n = 4 the nodes are `±1, ±1/#r{5}` with weights `1/6, 5/6`.',
   'وتثبيت عقدتين يكلّف درجتين: القاعدة مضبوطة حتى الدرجة 2n − 3. وعقد لوباتو هي نقاط التجميع الطبيعية عند فرض قيم حدية لأن الطرفين عقدتان. وعند n = 3 هي قاعدة سمبسون، وعند n = 4 العقد `±1, ±1/#r{5}` بالأوزان `1/6, 5/6`.'],
],[
  Q('Compute the four-point Lobatto weight at `x = 1/#r{5}`.','احسب وزن لوباتو ذي النقاط الأربع عند `x = 1/#r{5}`.','#f{5}{6}',
    ['P_3(#f{1}{#r{5}}) = #f{1}{2}(#f{5}{5#r{5}} − #f{3}{#r{5}}) = −#f{1}{#r{5}}', 'w = #f{2}{12·#f{1}{5}} = #f{5}{6}'], ['#f{1}{6}','#f{2}{3}','#f{5}{12}']),
  Q('Up to which degree is the four-point Lobatto rule exact?','حتى أي درجة تكون قاعدة لوباتو ذات النقاط الأربع مضبوطة؟','5',
    ['2n − 3 = 5'], ['7','3','4']),
  Q('Find the end weight of the five-point Lobatto rule.','أوجد وزن الطرف في قاعدة لوباتو ذات النقاط الخمس.','#f{1}{10}',
    ['w_{±1} = #f{2}{5·4} = #f{1}{10}'], ['#f{1}{6}','#f{2}{5}','#f{1}{20}']),
  Q('Apply the four-point Lobatto rule to `∫_{−1}^{1} x^4 dx`.','طبّق قاعدة لوباتو ذات النقاط الأربع على `∫_{−1}^{1} x^4 dx`.','#f{2}{5}',
    ['2·#f{1}{6}·1 + 2·#f{5}{6}·#f{1}{25} = #f{1}{3} + #f{1}{15} = #f{2}{5}', ['Exact, since 4 ≤ 5.','مضبوطة لأن 4 ≤ 5.']],
    ['#f{2}{3}','#f{1}{3}','#f{7}{15}']),
]);

lesson('501',37,[
  ['Gauss–Radau rules fix one end, say −1, and choose the other n − 1 nodes optimally: they are the zeros of `(P_{n−1} + P_n)/(1 + x)`. Exactness drops by one, to degree 2n − 2, and the fixed end has the weight `2/n^2`.',
   'قواعد جاوس–رادو تثبت طرفاً واحداً، وليكن −1، وتختار العقد الأخرى n − 1 اختياراً أمثل: إنها جذور `(P_{n−1} + P_n)/(1 + x)`. وتنقص الدقة درجة واحدة إلى 2n − 2، ووزن الطرف الثابت `2/n^2`.'],
  'n = 2:   x = −1, #f{1}{3};   w = #f{1}{2}, #f{3}{2}',
  ['Radau points suit time-dependent and fractional problems: the initial point t = 0 is a node where the initial condition is imposed, while the final time is free.','نقاط رادو تناسب المسائل الزمنية والكسرية: النقطة الابتدائية t = 0 عقدة يُفرض عندها الشرط الابتدائي، والزمن النهائي حر.'],
],[
  Q('Check that the two-point Radau rule is exact for `x^2`.','تحقق أن قاعدة رادو ذات النقطتين مضبوطة لـ `x^2`.','#f{2}{3}',
    ['#f{1}{2}(−1)^2 + #f{3}{2}(#f{1}{3})^2 = #f{1}{2} + #f{1}{6} = #f{2}{3}', '∫_{−1}^{1} x^2 dx = #f{2}{3}'], ['#f{1}{2}','#f{5}{9}','1']),
  Q('Find the node of the two-point Radau rule from `(P_1 + P_2)/(1 + x) = 0`.','أوجد عقدة قاعدة رادو ذات النقطتين من `(P_1 + P_2)/(1 + x) = 0`.','x = #f{1}{3}',
    ['P_1 + P_2 = x + #f{3x^2 − 1}{2} = #f{3x^2 + 2x − 1}{2} = #f{(3x − 1)(x + 1)}{2}', '#f{3x − 1}{2} = 0  ⇒  x = #f{1}{3}'], ['x = −#f{1}{3}','x = #f{1}{#r{3}}','x = #f{1}{2}']),
  Q('What is the weight of the fixed end in the three-point Radau rule?','ما وزن الطرف الثابت في قاعدة رادو ذات النقاط الثلاث؟','#f{2}{9}',
    ['w_{−1} = #f{2}{n^2} = #f{2}{9}'], ['#f{1}{3}','#f{2}{3}','#f{1}{9}']),
  Q('Up to which degree is the three-point Radau rule exact?','حتى أي درجة تكون قاعدة رادو ذات النقاط الثلاث مضبوطة؟','4',
    ['2n − 2 = 4'], ['5','3','6']),
]);

lesson('501',38,[
  ['Golub and Welsch showed that Gauss nodes and weights come from an eigenvalue problem. The three-term recurrence of the orthonormal polynomials is written as a symmetric tridiagonal (Jacobi) matrix; for Legendre:','بيّن جولب وويلش أن عقد جاوس وأوزانها تأتي من مسألة قيم ذاتية. فعلاقة التكرار الثلاثية للكثيرات المعيارية المتعامدة تُكتب مصفوفةً ثلاثية قطرية متماثلة (مصفوفة جاكوبي)، ولليجندر:'],
  'J_n = #m{0, β_1, ;; β_1, 0, ⋱ ;; , ⋱, 0},   β_k = #f{k}{#r{4k^2 − 1}},   k = 1, …, n − 1',
  ['The nodes are the eigenvalues of `J_n`, and the weights are `w_i = 2 v_{1i}^2`, where `v_{1i}` is the first component of the normalised eigenvector. This costs `O(n^2)` and is how libraries compute rules with hundreds of points.',
   'العقد هي القيم الذاتية لـ `J_n`، والأوزان `w_i = 2 v_{1i}^2` حيث `v_{1i}` المركبة الأولى للمتجه الذاتي المعياري. وتكلفتها `O(n^2)`، وبها تحسب المكتبات قواعد بمئات النقاط.'],
],[
  Q('Write `J_2` and find its eigenvalues.','اكتب `J_2` وأوجد قيمها الذاتية.','±#f{1}{#r{3}}',
    ['β_1 = #f{1}{#r{3}}:   J_2 = #m{0, 1/#r{3} ;; 1/#r{3}, 0}', 'λ^2 = #f{1}{3}  ⇒  λ = ±#f{1}{#r{3}}', ['These are the two Gauss nodes.','وهما عقدتا جاوس.']],
    ['±#f{1}{3}','±1','0, #f{1}{#r{3}}']),
  Q('Compute `β_2`.','احسب `β_2`.','#f{2}{#r{15}} ≈ 0.5164',
    ['β_2 = #f{2}{#r{16 − 1}} = #f{2}{#r{15}} ≈ 0.5164'], ['#f{2}{#r{3}}','#f{1}{#r{15}}','#f{1}{2}']),
  Q('The normalised eigenvectors of `J_2` are `(1, ±1)/#r{2}`. Find the weights.','المتجهات الذاتية المعيارية لـ `J_2` هي `(1, ±1)/#r{2}`. أوجد الأوزان.','w = 1,  1',
    ['w_i = 2v_{1i}^2 = 2·#f{1}{2} = 1'], ['w = #f{1}{2},  #f{1}{2}','w = 2,  2','w = #f{1}{#r{2}},  #f{1}{#r{2}}']),
  Q('Find the eigenvalues of `J_3` from `β_1 = 1/#r{3}` and `β_2 = 2/#r{15}`.','أوجد القيم الذاتية لـ `J_3` من `β_1 = 1/#r{3}` و `β_2 = 2/#r{15}`.','0,  ±#r{#f{3}{5}}',
    ['det(J_3 − λI) = −λ(λ^2 − β_1^2 − β_2^2) = 0', 'β_1^2 + β_2^2 = #f{1}{3} + #f{4}{15} = #f{9}{15} = #f{3}{5}', 'λ = 0,  ±#r{0.6} ≈ ±0.7746'],
    ['0,  ±#f{3}{5}','±#f{1}{#r{3}},  0','0,  ±#r{#f{1}{3}}']),
]);

lesson('501',39,[
  ['Integrals with the weight of the fractional basis become ordinary integrals after `s = t^{λ}`:','التكاملات بوزن الأساس الكسري تصبح تكاملات عادية بعد `s = t^{λ}`:'],
  '∫_0^1 f(t) λt^{λ−1} dt = ∫_0^1 f(s^{1/λ}) ds ≈ Σ_i w_i^* f(t_i),   t_i = (s_i)^{1/λ}',
  ['Here `s_i`, `w_i^*` is a Gauss rule on `[0, 1]` (nodes `(x_i + 1)/2`, weights `w_i/2`). The mapped nodes `t_i` crowd towards t = 0, where fractional solutions change fastest, and the rule is exact whenever `f(s^{1/λ})` is a polynomial in s of degree ≤ 2n − 1.',
   'و `s_i` و `w_i^*` قاعدة جاوس على `[0, 1]` (العقد `(x_i + 1)/2` والأوزان `w_i/2`). والعقد المحوّلة `t_i` تتكاثف نحو t = 0 حيث يتغير الحل الكسري أسرع، والقاعدة مضبوطة متى كانت `f(s^{1/λ})` كثيرة حدود في s درجتها ≤ 2n − 1.'],
],[
  Q('Find the two-point mapped nodes for `λ = 1/2`.','أوجد العقدتين المحوّلتين لقاعدة النقطتين عند `λ = 1/2`.','t = 0.0447,  0.6220',
    ['s = #f{1 ∓ 1/#r{3}}{2} = 0.2113,  0.7887', 't = s^2 = 0.0447,  0.6220', ['The first node moved much closer to 0.','العقدة الأولى اقتربت كثيراً من 0.']],
    ['t = 0.2113,  0.7887','t = 0.4597,  0.8881','t = 0.0447,  0.7887']),
  Q('Use these nodes (weights 1/2 each) to compute `∫_0^1 #r{t} dt`.','استخدم هاتين العقدتين (وزن كل منهما 1/2) لحساب `∫_0^1 #r{t} dt`.','#f{2}{3}',
    [['Write `#r{t} = f(t)·(1/2)t^{−1/2}` with `f = 2t`:','نكتب `#r{t} = f(t)·(1/2)t^{−1/2}` مع `f = 2t`:'], '#f{1}{2}·2(0.0447) + #f{1}{2}·2(0.6220) = 0.6667', ['Exact, because `f = 2s^2` is a polynomial of degree 2 in s.','مضبوطة لأن `f = 2s^2` كثيرة حدود درجتها 2 في s.']],
    ['0.5','0.6220','0.7071']),
  Q('Compute `∫_0^1 t^{1/2}·(1/2)t^{−1/2} dt` by the rule.','احسب `∫_0^1 t^{1/2}·(1/2)t^{−1/2} dt` بالقاعدة.','#f{1}{2}',
    ['f = t^{1/2} = s:   #f{1}{2}(0.2113 + 0.7887) = #f{1}{2}', ['The exact value is `∫_0^1 s ds = 1/2`.','والقيمة المضبوطة `∫_0^1 s ds = 1/2`.']],
    ['#f{2}{3}','1','0.3333']),
  Q('An ordinary two-point Gauss rule on `[0, 1]` is used for `∫_0^1 #r{t} dt`. Find the result and its error.','تُستخدم قاعدة جاوس العادية ذات النقطتين على `[0, 1]` لحساب `∫_0^1 #r{t} dt`. أوجد النتيجة وخطأها.',['`≈ 0.6739`, with an error of `≈ 0.0072`','`≈ 0.6739` بخطأ `≈ 0.0072`'],
    ['#f{1}{2}(#r{0.2113} + #r{0.7887}) = #f{1}{2}(0.4597 + 0.8881) = 0.6739', ['Error ≈ 0.0072: the singular derivative at 0 spoils the plain rule, while the mapped rule was exact.','الخطأ ≈ 0.0072: المشتقة الشاذة عند 0 تفسد القاعدة العادية، بينما القاعدة المحوّلة مضبوطة.']],
    [['`0.6667`, with no error','`0.6667` دون خطأ'],['`≈ 0.5`, with an error of `≈ 0.1667`','`≈ 0.5` بخطأ `≈ 0.1667`'],['`≈ 0.7071`, with an error of `≈ 0.0404`','`≈ 0.7071` بخطأ `≈ 0.0404`']]),
]);

lesson('501',40,[
  ['With n nodes the three Gaussian families trade exactness for fixed end points:','مع n عقدة تتبادل العائلات الثلاث لجاوس الدقةَ مقابلَ تثبيت الأطراف:'],
  ['Gauss: `2n − 1`.   Radau (one end fixed): `2n − 2`.   Lobatto (both ends fixed): `2n − 3`.','جاوس: `2n − 1`.   رادو (طرف واحد ثابت): `2n − 2`.   لوباتو (الطرفان ثابتان): `2n − 3`.'],
  ['All have positive weights and converge spectrally. Choose Gauss for plain integrals, Radau when an initial value sits at one end, and Lobatto when boundary values are given at both ends. Simpson’s rule is the three-point Lobatto rule, which is why it is so much less accurate than three-point Gauss.',
   'وكلها أوزانها موجبة وتتقارب طيفياً. نختار جاوس للتكاملات العادية، ورادو عند وجود قيمة ابتدائية عند طرف، ولوباتو عند إعطاء قيم حدية عند الطرفين. وقاعدة سمبسون هي لوباتو ذات النقاط الثلاث، ولهذا هي أقل دقة بكثير من جاوس ذات النقاط الثلاث.'],
],[
  Q('Give the degree of exactness of the five-point Gauss, Radau and Lobatto rules.','أعط درجة دقة قواعد جاوس ورادو ولوباتو ذات النقاط الخمس.','9,  8,  7',
    ['2n − 1 = 9,   2n − 2 = 8,   2n − 3 = 7'], ['5,  5,  5','10,  9,  8','9,  7,  5']),
  Q('Which family should be used for collocation of `u″ = f` with `u(−1) = a`, `u(1) = b`?','أي العائلات تُستخدم لتجميع `u″ = f` مع `u(−1) = a` و `u(1) = b`؟',['Gauss–Lobatto','جاوس–لوباتو'],
    [['Both ends are nodes, so both boundary conditions can be imposed there.','الطرفان عقدتان فيُفرض الشرطان الحديان عندهما.']],
    [['Gauss–Legendre','جاوس–ليجندر'],['Gauss–Radau','جاوس–رادو']]),
  Q('Which family suits an initial value problem `y′ = f(t, y)`, `y(0) = y_0` on `[0, T]`?','أي العائلات تناسب مسألة القيمة الابتدائية `y′ = f(t, y)` و `y(0) = y_0` على `[0, T]`؟',['Gauss–Radau, with the node at t = 0','جاوس–رادو بعقدة عند t = 0'],
    [['Only the initial end is fixed; the rest of the nodes stay free and optimal.','يثبت الطرف الابتدائي فقط، والعقد الأخرى حرة ومثلى.']],
    [['Gauss–Lobatto','جاوس–لوباتو'],['Equally spaced points','نقاط متساوية التباعد']]),
  Q('Compare three-point Gauss (2.350337) and Simpson (2.362054) for `∫_{−1}^{1} e^x dx = 2.350402`.','قارن جاوس ذات النقاط الثلاث (2.350337) وسمبسون (2.362054) لـ `∫_{−1}^{1} e^x dx = 2.350402`.','6.5 × 10^{−5}  vs  1.2 × 10^{−2}',
    ['|2.350402 − 2.350337| = 6.5 × 10^{−5}', '|2.350402 − 2.362054| = 1.17 × 10^{−2}', ['Same number of values, about 180 times more accurate.','عدد القيم نفسه ودقة أكبر بنحو 180 مرة.']],
    ['1.2 × 10^{−2}  vs  6.5 × 10^{−5}',['The errors are equal','الخطآن متساويان'],'6.5 × 10^{−3}  vs  1.2 × 10^{−4}']),
]);

/* ---- 501 · Unit 5 (lessons 41–50): interpolation and differentiation matrices ---- */
lesson('501',41,[
  ['Given values `f_j = f(x_j)` at n + 1 distinct nodes, there is exactly one polynomial of degree ≤ n through them. In Lagrange form it is','إذا أُعطيت القيم `f_j = f(x_j)` عند n + 1 عقدة مختلفة فهناك كثيرة حدود وحيدة درجتها ≤ n تمر بها، وصيغتها عند لاجرانج'],
  'p(x) = Σ_{j=0}^{n} f_j ℓ_j(x),   ℓ_j(x) = Π_{k≠j} #f{x − x_k}{x_j − x_k},   ℓ_j(x_i) = δ_{ij}',
  ['Each Lagrange function is 1 at its own node and 0 at the others, and together they add up to 1. A collocation method stores a function by its nodal values `u_j`, and every operation is done on the interpolating polynomial.',
   'كل دالة لاجرانج تساوي 1 عند عقدتها و 0 عند غيرها، ومجموعها 1. وطريقة التجميع تخزّن الدالة بقيمها العقدية `u_j`، وكل عملية تُجرى على كثيرة الاستكمال.'],
],[
  Q('Find the three Lagrange functions for the nodes −1, 0, 1.','أوجد دوال لاجرانج الثلاث للعقد −1 و 0 و 1.','ℓ_{−1} = #f{x(x − 1)}{2},   ℓ_0 = 1 − x^2,   ℓ_1 = #f{x(x + 1)}{2}',
    ['ℓ_{−1} = #f{(x − 0)(x − 1)}{(−1)(−2)},   ℓ_0 = #f{(x + 1)(x − 1)}{(1)(−1)},   ℓ_1 = #f{(x + 1)x}{(2)(1)}'],
    ['ℓ_{−1} = #f{x(x + 1)}{2},   ℓ_0 = 1 − x^2,   ℓ_1 = #f{x(x − 1)}{2}','ℓ_{−1} = x(x − 1),   ℓ_0 = x^2 − 1,   ℓ_1 = x(x + 1)','ℓ_{−1} = #f{1 − x}{2},   ℓ_0 = 1 − x^2,   ℓ_1 = #f{1 + x}{2}']),
  Q('Interpolate `e^x` at −1, 0, 1 and evaluate the polynomial at x = 0.5.','استكمل `e^x` عند −1 و 0 و 1 واحسب كثيرة الحدود عند x = 0.5.','p(0.5) ≈ 1.7234',
    ['ℓ_{−1}(0.5) = −0.125,   ℓ_0(0.5) = 0.75,   ℓ_1(0.5) = 0.375', 'p(0.5) = −0.125·0.3679 + 0.75·1 + 0.375·2.7183 ≈ 1.7234', ['The exact value is `e^{0.5} = 1.6487`.','والقيمة المضبوطة `e^{0.5} = 1.6487`.']],
    ['p(0.5) ≈ 1.6487','p(0.5) ≈ 1.3591','p(0.5) ≈ 2.0000']),
  Q('Interpolate `x^3` at the nodes −1, 0, 1.','استكمل `x^3` عند العقد −1 و 0 و 1.','p(x) = x',
    ['f_j = −1, 0, 1', 'p = −ℓ_{−1} + ℓ_1 = #f{x(x + 1) − x(x − 1)}{2} = x', ['`x^3 − x` vanishes at all three nodes, so the interpolant cannot see it.','`x^3 − x` تنعدم عند العقد الثلاث فلا يراها الاستكمال.']],
    ['p(x) = x^3','p(x) = x^2','p(x) = 0']),
  Q('Compute `ℓ_{−1}(x) + ℓ_0(x) + ℓ_1(x)` for the nodes −1, 0, 1.','احسب `ℓ_{−1}(x) + ℓ_0(x) + ℓ_1(x)` للعقد −1 و 0 و 1.','1',
    ['#f{x^2 − x}{2} + 1 − x^2 + #f{x^2 + x}{2} = 1', ['It interpolates `f = 1` exactly.','فهو يستكمل `f = 1` بدقة.']],
    ['x','0','3']),
]);

lesson('501',42,[
  ['The error of interpolation at n + 1 nodes is','خطأ الاستكمال عند n + 1 عقدة هو'],
  'f(x) − p(x) = #f{f^{(n+1)}(ξ)}{(n + 1)!} ω(x),   ω(x) = Π_{j=0}^{n} (x − x_j)',
  ['Two factors decide the error: the smoothness of f, through `f^{(n+1)}`, and the placement of the nodes, through the node polynomial ω. For three equally spaced nodes on `[−1, 1]`, `max|ω| = 2/(3#r{3}) ≈ 0.385`; for the three Chebyshev points it drops to 1/4, the smallest possible.',
   'عاملان يحددان الخطأ: نعومة f من خلال `f^{(n+1)}`، وتوزيع العقد من خلال كثيرة العقد ω. فلثلاث عقد متساوية التباعد على `[−1, 1]` يكون `max|ω| = 2/(3#r{3}) ≈ 0.385`، ولنقاط تشيبيشيف الثلاث ينخفض إلى 1/4 وهو أصغر ما يمكن.'],
],[
  Q('Bound the error of interpolating `e^x` at −1, 0, 1 at the point x = 0.5.','أوجد حداً لخطأ استكمال `e^x` عند −1 و 0 و 1 عند النقطة x = 0.5.','≤ #f{e·0.375}{6} ≈ 0.1699',
    ['|ω(0.5)| = |1.5·0.5·(−0.5)| = 0.375,   |f‴| ≤ e', '|f − p| ≤ #f{e}{3!}·0.375 ≈ 0.1699', ['The actual error is `1.7234 − 1.6487 = 0.0747`.','والخطأ الفعلي `1.7234 − 1.6487 = 0.0747`.']],
    ['≤ 0.0747','≤ #f{0.375}{6} ≈ 0.0625','≤ e·0.375 ≈ 1.0194']),
  Q('Find `max |ω(x)|` on `[−1, 1]` for the nodes −1, 0, 1.','أوجد `max |ω(x)|` على `[−1, 1]` للعقد −1 و 0 و 1.','#f{2}{3#r{3}} ≈ 0.3849',
    ['ω = x^3 − x,   ω′ = 3x^2 − 1 = 0  ⇒  x = #f{1}{#r{3}}', '|ω(#f{1}{#r{3}})| = #f{1}{#r{3}} − #f{1}{3#r{3}} = #f{2}{3#r{3}}'],
    ['#f{1}{4}','1','#f{1}{#r{3}} ≈ 0.5774']),
  Q('Interpolate `x^2 + 1` at three nodes. What is the error?','استكمل `x^2 + 1` عند ثلاث عقد. ما الخطأ؟','0',
    ['f‴ = 0  ⇒  f − p = 0', ['A polynomial of degree ≤ n is reproduced exactly by n + 1 nodes.','كثيرة الحدود التي درجتها ≤ n تُستعاد بدقة من n + 1 عقدة.']],
    ['#f{1}{3}','ω(x)','#f{2}{3#r{3}}']),
  Q('For `f = x^3` and the nodes −1, 0, 1, write `f − p` exactly.','للدالة `f = x^3` والعقد −1 و 0 و 1 اكتب `f − p` بدقة.','f − p = x^3 − x',
    ['#f{f‴}{3!} = #f{6}{6} = 1  ⇒  f − p = ω(x) = x^3 − x', ['This agrees with `p = x` from the previous lesson.','وهذا يطابق `p = x` من الدرس السابق.']],
    ['f − p = 0','f − p = x^3','f − p = 6(x^3 − x)']),
]);

lesson('501',43,[
  ['The barycentric formula evaluates the interpolating polynomial stably in `O(n)` operations per point, once the weights are known:','الصيغة الباريسنترية تحسب كثيرة الاستكمال حساباً مستقراً بـ `O(n)` عملية لكل نقطة بعد معرفة الأوزان:'],
  'p(x) = #f{Σ_j #f{λ_j}{x − x_j} f_j}{Σ_j #f{λ_j}{x − x_j}},   λ_j = #f{1}{Π_{k≠j}(x_j − x_k)}',
  ['It comes from dividing the Lagrange form by the same formula for `f = 1`. Multiplying all `λ_j` by a common constant does not change p, so the weights can be scaled freely. At a node itself one simply returns `f_j`.',
   'وتأتي من قسمة صيغة لاجرانج على الصيغة نفسها للدالة `f = 1`. وضرب كل `λ_j` في ثابت مشترك لا يغير p، فيمكن تحجيم الأوزان بحرية. وعند العقدة نفسها نعيد `f_j` مباشرة.'],
],[
  Q('Compute the barycentric weights for the nodes −1, 0, 1.','احسب الأوزان الباريسنترية للعقد −1 و 0 و 1.','λ = #f{1}{2},  −1,  #f{1}{2}',
    ['λ_{−1} = #f{1}{(−1 − 0)(−1 − 1)} = #f{1}{2},   λ_0 = #f{1}{(0 + 1)(0 − 1)} = −1,   λ_1 = #f{1}{(2)(1)} = #f{1}{2}'],
    ['λ = 1,  −2,  1','λ = #f{1}{2},  1,  #f{1}{2}','λ = −#f{1}{2},  1,  −#f{1}{2}']),
  Q('Use the barycentric formula to evaluate the interpolant of `e^x` at −1, 0, 1 at x = 0.5.','استخدم الصيغة الباريسنترية لحساب استكمال `e^x` عند −1 و 0 و 1 عند x = 0.5.','≈ 1.7234',
    ['#f{λ_j}{x − x_j} = #f{0.5}{1.5}, #f{−1}{0.5}, #f{0.5}{−0.5} = #f{1}{3}, −2, −1', ['Numerator and denominator:','البسط والمقام:'], '#f{#f{1}{3}·0.3679 − 2·1 − 1·2.7183}{#f{1}{3} − 2 − 1} = #f{−4.5957}{−2.6667} ≈ 1.7234',
     ['The same value as the Lagrange form.','القيمة نفسها التي أعطتها صيغة لاجرانج.']],
    ['≈ 1.6487','≈ 4.5957','≈ −1.7234']),
  Q('The weights `1/2, −1, 1/2` are replaced by `1, −2, 1`. How does p change?','استُبدلت بالأوزان `1/2, −1, 1/2` الأوزانُ `1, −2, 1`. كيف تتغير p؟',['It does not change','لا تتغير'],
    [['The common factor 2 cancels between numerator and denominator.','العامل المشترك 2 يختصر بين البسط والمقام.']],
    [['It doubles','تتضاعف'],['It is halved','تنصف'],['It changes sign','تتغير إشارتها']]),
  Q('How many operations does the barycentric formula need for one new point when there are n + 1 nodes?','كم عملية تحتاج الصيغة الباريسنترية لنقطة جديدة واحدة عند وجود n + 1 عقدة؟','O(n)',
    [['The weights are computed once (`O(n^2)`); after that each evaluation is two sums of n + 1 terms.','الأوزان تُحسب مرة واحدة (`O(n^2)`) وبعدها كل حساب مجموعان من n + 1 حداً.']],
    ['O(n^2)','O(n^3)','O(1)']),
]);

lesson('501',44,[
  ['For the standard point sets the barycentric weights are known in closed form (up to a common factor):','لمجموعات النقاط المعيارية تُعرف الأوزان الباريسنترية بصيغة مغلقة (مع عامل مشترك):'],
  ['Chebyshev points `x_j = cos(jπ/n)`:','نقاط تشيبيشيف `x_j = cos(jπ/n)`:'],
  'λ_j = (−1)^j δ_j,   δ_0 = δ_n = #f{1}{2},   δ_j = 1   (0 < j < n)',
  ['Gauss–Legendre points, and Gauss–Lobatto points:','نقاط جاوس–ليجندر، ونقاط جاوس–لوباتو:'],
  'λ_j = (−1)^j #r{(1 − x_j^2) w_j},     λ_j = (−1)^j #r{w_j}',
  ['Here `w_j` are the quadrature weights. So the same nodes give quadrature, interpolation and differentiation at almost no extra cost.','و `w_j` أوزان التربيع. إذن العقد نفسها تعطي التربيع والاستكمال والاشتقاق دون تكلفة تُذكر.'],
],[
  Q('Use `λ_j = (−1)^j #r{w_j}` with the Lobatto weights `1/3, 4/3, 1/3` at −1, 0, 1, and compare with Lesson 43.','استخدم `λ_j = (−1)^j #r{w_j}` مع أوزان لوباتو `1/3, 4/3, 1/3` عند −1 و 0 و 1، وقارن بالدرس 43.','λ ∝ #f{1}{2},  −1,  #f{1}{2}',
    ['#r{#f{1}{3}}, −#r{#f{4}{3}}, #r{#f{1}{3}} = 0.5774, −1.1547, 0.5774', ['Dividing by 1.1547 gives `1/2, −1, 1/2`: the same weights up to a factor.','بالقسمة على 1.1547 نحصل على `1/2, −1, 1/2`: الأوزان نفسها مع عامل.']],
    ['λ ∝ #f{1}{3},  #f{4}{3},  #f{1}{3}','λ ∝ 1,  1,  1','λ ∝ 1,  −2,  −1']),
  Q('Write the barycentric weights for the five Chebyshev points `cos(jπ/4)`, j = 0, …, 4.','اكتب الأوزان الباريسنترية لنقاط تشيبيشيف الخمس `cos(jπ/4)` حيث j = 0, …, 4.','λ = #f{1}{2},  −1,  1,  −1,  #f{1}{2}',
    ['λ_j = (−1)^j δ_j,   δ_0 = δ_4 = #f{1}{2}'],
    ['λ = 1,  −1,  1,  −1,  1','λ = #f{1}{2},  1,  1,  1,  #f{1}{2}','λ = #f{1}{2},  −1,  1,  −1,  −#f{1}{2}']),
  Q('Compute the Gauss–Legendre barycentric weights for the two nodes `±1/#r{3}` (weights 1).','احسب الأوزان الباريسنترية لجاوس–ليجندر للعقدتين `±1/#r{3}` (وزناهما 1).','λ ∝ 1,  −1',
    ['#r{(1 − #f{1}{3})·1} = #r{#f{2}{3}} ≈ 0.8165', 'λ = 0.8165,  −0.8165', ['Directly: `1/(x_0 − x_1) = −#r{3}/2` and `#r{3}/2`, the same ratio.','مباشرة: `1/(x_0 − x_1) = −#r{3}/2` و `#r{3}/2` بالنسبة نفسها.']],
    ['λ ∝ 1,  1','λ ∝ 1,  −2','λ ∝ #f{2}{3},  #f{2}{3}']),
  Q('Why do the barycentric weights alternate in sign?','لماذا تتناوب إشارات الأوزان الباريسنترية؟',['`λ_j` has the sign of `Π_{k≠j}(x_j − x_k)`, which flips from one node to the next','إشارة `λ_j` هي إشارة `Π_{k≠j}(x_j − x_k)` وهي تنقلب من عقدة إلى التالية'],
    [['Moving to the next node changes the sign of exactly one factor `(x_j − x_k)`.','الانتقال إلى العقدة التالية يغيّر إشارة عامل واحد فقط `(x_j − x_k)`.']],
    [['Because the quadrature weights alternate','لأن أوزان التربيع تتناوب'],['They do not; it depends on f','لا تتناوب، فذلك يعتمد على f']]),
]);

lesson('501',45,[
  ['The Lebesgue constant measures how much interpolation can amplify errors:','ثابت ليبيغ يقيس مقدار تضخيم الاستكمال للأخطاء:'],
  'Λ_n = max_{−1≤x≤1} Σ_j |ℓ_j(x)|,   ‖f − p‖_∞ ≤ (1 + Λ_n) ‖f − p^*‖_∞',
  ['Here `p^*` is the best polynomial approximation of the same degree, so interpolation is nearly optimal when `Λ_n` is small. For Chebyshev or Legendre points `Λ_n` grows only like `(2/π) log n`; for equally spaced points it grows like `2^n`: about 30 for n = 10 and about 11 000 for n = 20.',
   'و `p^*` أفضل تقريب كثير حدود بالدرجة نفسها، فيكون الاستكمال قريباً من الأمثل إذا كان `Λ_n` صغيراً. ولنقاط تشيبيشيف أو ليجندر ينمو `Λ_n` مثل `(2/π) log n` فقط، أما للنقاط متساوية التباعد فينمو مثل `2^n`: نحو 30 عند n = 10 ونحو 11 000 عند n = 20.'],
],[
  Q('Find the Lebesgue constant for the nodes −1, 0, 1.','أوجد ثابت ليبيغ للعقد −1 و 0 و 1.','Λ_2 = #f{5}{4}',
    ['0 ≤ x ≤ 1:   Σ|ℓ_j| = #f{x(1 − x)}{2} + (1 − x^2) + #f{x(x + 1)}{2} = 1 + x − x^2', ['The maximum is at x = 1/2:','القيمة العظمى عند x = 1/2:'], '1 + #f{1}{2} − #f{1}{4} = #f{5}{4}'],
    ['Λ_2 = 1','Λ_2 = #f{3}{2}','Λ_2 = 2']),
  Q('The best approximation of degree 20 has error `10^{−6}` and Chebyshev points give `Λ_20 ≈ 2.87`. Bound the interpolation error.','أفضل تقريب من الدرجة 20 خطؤه `10^{−6}` ونقاط تشيبيشيف تعطي `Λ_20 ≈ 2.87`. أوجد حداً لخطأ الاستكمال.','≤ 3.87 × 10^{−6}',
    ['(1 + Λ_20)·10^{−6} = 3.87 × 10^{−6}'], ['≤ 2.87 × 10^{−6}','≤ 10^{−6}','≤ 1.1 × 10^{−2}']),
  Q('Repeat with 21 equally spaced points, where `Λ_20 ≈ 1.1 × 10^4`.','أعد الحساب بـ 21 نقطة متساوية التباعد حيث `Λ_20 ≈ 1.1 × 10^4`.','≤ 1.1 × 10^{−2}',
    ['(1 + 1.1 × 10^4)·10^{−6} ≈ 1.1 × 10^{−2}', ['The same degree loses four digits just because of the node placement.','الدرجة نفسها تخسر أربعة أرقام بسبب توزيع العقد فقط.']],
    ['≤ 3.87 × 10^{−6}','≤ 10^{−6}','≤ 1.1 × 10^{−6}']),
  Q('Why does the Lebesgue constant also measure sensitivity to rounding errors in the data?','لماذا يقيس ثابت ليبيغ أيضاً الحساسية لأخطاء التقريب في البيانات؟',['A change δ in every value changes p by at most `Λ_n δ`','تغيّر قدره δ في كل قيمة يغيّر p بما لا يزيد عن `Λ_n δ`'],
    ['|Σ_j δ_j ℓ_j(x)| ≤ max|δ_j|·Σ_j |ℓ_j(x)| ≤ Λ_n max|δ_j|'],
    [['It does not; it measures only smoothness','لا يقيسها، فهو يقيس النعومة فقط'],['Because `Λ_n` is always 1','لأن `Λ_n` يساوي 1 دائماً']]),
]);

lesson('501',46,[
  ['Runge’s example `f(x) = 1/(1 + 25x^2)` is smooth, yet interpolation at equally spaced points diverges near the ends as n grows. With n = 10 the maximum error is about 1.9, and with n = 20 about 60.',
   'مثال رونج `f(x) = 1/(1 + 25x^2)` دالة ملساء، ومع ذلك يتباعد استكمالها بنقاط متساوية التباعد قرب الطرفين بزيادة n. فعند n = 10 أكبر خطأ نحو 1.9، وعند n = 20 نحو 60.'],
  ['At the Chebyshev points `x_j = cos(jπ/n)` the maximum error is only 0.13 for n = 10 and 0.018 for n = 20.','وعند نقاط تشيبيشيف `x_j = cos(jπ/n)` أكبر خطأ 0.13 فقط عند n = 10 و 0.018 عند n = 20.'],
  ['Points that cluster near the ends with density `1/(π#r{1 − x^2})` — Chebyshev, Legendre–Gauss and Lobatto points — remove the phenomenon: for them interpolation converges for every analytic f. This is why spectral methods never use equally spaced points.',
   'والنقاط التي تتكاثف قرب الطرفين بكثافة `1/(π#r{1 − x^2})`، مثل نقاط تشيبيشيف وجاوس–ليجندر ولوباتو، تزيل الظاهرة: معها يتقارب الاستكمال لكل دالة تحليلية. ولهذا لا تستخدم الطرق الطيفية النقاط متساوية التباعد أبداً.'],
],[
  Q('Write the five Chebyshev points `cos(jπ/4)`.','اكتب نقاط تشيبيشيف الخمس `cos(jπ/4)`.','1,  0.7071,  0,  −0.7071,  −1',
    ['cos 0 = 1,   cos #f{π}{4} = 0.7071,   cos #f{π}{2} = 0', ['and the negatives by symmetry.','والسالبة بالتماثل.']],
    ['1,  0.5,  0,  −0.5,  −1','0.9511,  0.5878,  0,  −0.5878,  −0.9511','1,  0.8660,  0,  −0.8660,  −1']),
  Q('With n = 10, equally spaced interpolation of Runge’s function has error 1.9 and Chebyshev interpolation 0.13. By what factor is Chebyshev better?','عند n = 10 خطأ الاستكمال المتساوي التباعد لدالة رونج 1.9 وخطأ تشيبيشيف 0.13. بأي عامل يكون تشيبيشيف أفضل؟','≈ 15',
    ['#f{1.9}{0.13} ≈ 15', ['At n = 20 the factor is `60/0.018 ≈ 3300`: one method diverges while the other converges.','وعند n = 20 العامل `60/0.018 ≈ 3300`: طريقة تتباعد والأخرى تتقارب.']],
    ['≈ 1.5','≈ 150','≈ 0.07']),
  Q('Runge’s function is analytic on `[−1, 1]`. Why do Chebyshev interpolants converge only like `1.22^{−n}`?','دالة رونج تحليلية على `[−1, 1]`. لماذا تتقارب استكمالات تشيبيشيف مثل `1.22^{−n}` فقط؟',['Its poles `±i/5` are close to the interval: ρ ≈ 1.22','قطباها `±i/5` قريبان من المجال: ρ ≈ 1.22'],
    ['ρ = 0.2 + #r{1.04} ≈ 1.22', ['The same ρ as for its Legendre coefficients (Lesson 26).','وهي ρ نفسها لمعاملات ليجندر (الدرس 26).']],
    [['Because the points are badly placed','لأن النقاط سيئة التوزيع'],['Because the function has a jump','لأن للدالة قفزة']]),
  Q('Which point sets avoid the Runge phenomenon?','أي مجموعات النقاط تتجنب ظاهرة رونج؟',['Chebyshev, Gauss–Legendre and Gauss–Lobatto points','نقاط تشيبيشيف وجاوس–ليجندر وجاوس–لوباتو'],
    [['All of them cluster near ±1 like `1/#r{1 − x^2}`, which keeps the Lebesgue constant logarithmic.','كلها تتكاثف قرب ±1 مثل `1/#r{1 − x^2}`، فيبقى ثابت ليبيغ لوغاريتمياً.']],
    [['Equally spaced points with more nodes','نقاط متساوية التباعد بعقد أكثر'],['Random points','نقاط عشوائية']]),
]);

lesson('501',47,[
  ['Differentiating the interpolant gives the derivative at the nodes as a matrix–vector product:','باشتقاق كثيرة الاستكمال نحصل على المشتقة عند العقد على صورة ضرب مصفوفة في متجه:'],
  'u′(x_i) ≈ Σ_j D_{ij} u_j,   D_{ij} = ℓ_j′(x_i)',
  ['With the barycentric weights, `D_{ij} = (λ_j/λ_i)/(x_i − x_j)` for i ≠ j, and `D_{ii} = −Σ_{j≠i} D_{ij}`, because the derivative of a constant is zero (every row sums to 0). For the nodes −1, 0, 1:',
   'ومع الأوزان الباريسنترية `D_{ij} = (λ_j/λ_i)/(x_i − x_j)` عند i ≠ j، و `D_{ii} = −Σ_{j≠i} D_{ij}` لأن مشتقة الثابت صفر (مجموع كل صف 0). وللعقد −1 و 0 و 1:'],
  'D = #m{−3/2, 2, −1/2 ;; −1/2, 0, 1/2 ;; 1/2, −2, 3/2}',
],[
  Q('Find the middle row of D for the nodes −1, 0, 1.','أوجد الصف الأوسط في D للعقد −1 و 0 و 1.','−#f{1}{2},  0,  #f{1}{2}',
    ['ℓ_{−1}′ = #f{2x − 1}{2},   ℓ_0′ = −2x,   ℓ_1′ = #f{2x + 1}{2}', 'x = 0:   −#f{1}{2},  0,  #f{1}{2}', ['This is the central difference `(u_1 − u_{−1})/2`.','وهذا هو الفرق المركزي `(u_1 − u_{−1})/2`.']],
    ['−1,  0,  1','#f{1}{2},  0,  −#f{1}{2}','−#f{3}{2},  2,  −#f{1}{2}']),
  Q('Apply D to the values of `u = x^2` at −1, 0, 1.','طبّق D على قيم `u = x^2` عند −1 و 0 و 1.','Du = (−2,  0,  2)',
    ['u = (1, 0, 1)', 'Du = (−#f{3}{2} − #f{1}{2},  −#f{1}{2} + #f{1}{2},  #f{1}{2} + #f{3}{2}) = (−2, 0, 2)', ['These are the values of `u′ = 2x`: exact, since u is in the space.','وهي قيم `u′ = 2x`: مضبوطة لأن u داخل الفضاء.']],
    ['Du = (2,  0,  2)','Du = (−1,  0,  1)','Du = (0,  0,  0)']),
  Q('Use `D_{ij} = (λ_j/λ_i)/(x_i − x_j)` with `λ = (1/2, −1, 1/2)` to compute `D_{−1,0}` (row x = −1, column x = 0).','استخدم `D_{ij} = (λ_j/λ_i)/(x_i − x_j)` مع `λ = (1/2, −1, 1/2)` لحساب `D_{−1,0}` (صف x = −1 وعمود x = 0).','2',
    ['#f{λ_0/λ_{−1}}{x_{−1} − x_0} = #f{−1/(1/2)}{−1 − 0} = #f{−2}{−1} = 2'], ['−2','#f{1}{2}','−#f{1}{2}']),
  Q('Why does every row of a differentiation matrix sum to 0?','لماذا مجموع كل صف في مصفوفة التفاضل صفر؟',['Because D applied to the constant vector gives the derivative of 1, which is 0','لأن تطبيق D على المتجه الثابت يعطي مشتقة 1 وهي 0'],
    ['D·(1, 1, …, 1)^T = (Σ_j D_{ij})_i = 0', ['This is used to compute the diagonal accurately: `D_{ii} = −Σ_{j≠i} D_{ij}`.','وتُستخدم لحساب القطر بدقة: `D_{ii} = −Σ_{j≠i} D_{ij}`.']],
    [['Because D is symmetric','لأن D متماثلة'],['Because the nodes are symmetric','لأن العقد متماثلة']]),
]);

lesson('501',48,[
  ['The matrix of the second derivative is `D^{(2)} = D^2`, and in general `D^{(k)} = D^k`, because differentiating the interpolant twice is the same as differentiating it once and interpolating again (the derivative of a polynomial of degree n is in the space).',
   'مصفوفة المشتقة الثانية `D^{(2)} = D^2`، وعموماً `D^{(k)} = D^k`، لأن اشتقاق الاستكمال مرتين يساوي اشتقاقه مرة ثم الاستكمال من جديد (مشتقة كثيرة حدود درجتها n داخل الفضاء).'],
  ['For Chebyshev or Legendre points the norms grow fast:','ولنقاط تشيبيشيف أو ليجندر تنمو المعايير بسرعة:'],
  '‖D‖ ~ n^2,   ‖D^{(k)}‖ ~ n^{2k}',
  ['The growth comes from the crowded points near ±1, where the spacing is about `1/n^2`. It makes collocation systems ill-conditioned and forces small time steps in explicit methods: for `u_t = u_{xx}` the step must shrink like `n^{−4}`.',
   'وهذا النمو سببه تزاحم النقاط قرب ±1 حيث التباعد نحو `1/n^2`، وهو يجعل أنظمة التجميع رديئة الشرط ويفرض خطوات زمنية صغيرة في الطرق الصريحة: ففي `u_t = u_{xx}` يجب أن تصغر الخطوة مثل `n^{−4}`.'],
],[
  Q('Compute `D^2` for the nodes −1, 0, 1.','احسب `D^2` للعقد −1 و 0 و 1.','D^2 = #m{1, −2, 1 ;; 1, −2, 1 ;; 1, −2, 1}',
    ['(D^2)_{11} = (−#f{3}{2})^2 + 2(−#f{1}{2}) + (−#f{1}{2})(#f{1}{2}) = 1', ['All rows are equal: the second derivative of a quadratic is a constant, `u_{−1} − 2u_0 + u_1`.','الصفوف كلها متساوية: المشتقة الثانية لكثيرة حدود تربيعية ثابت `u_{−1} − 2u_0 + u_1`.']],
    ['D^2 = #m{1, −2, 1 ;; 0, 0, 0 ;; 1, −2, 1}','D^2 = #m{−2, 1, 0 ;; 1, −2, 1 ;; 0, 1, −2}','D^2 = #m{2, −4, 2 ;; 2, −4, 2 ;; 2, −4, 2}']),
  Q('If n is doubled, by about what factor does `‖D^{(2)}‖` grow?','إذا ضوعف n فبأي عامل تقريباً يكبر `‖D^{(2)}‖`؟','16',
    ['‖D^{(2)}‖ ~ n^4  ⇒  2^4 = 16'], ['4','2','8']),
  Q('Apply `D^2` to the values of `u = x^2` at −1, 0, 1.','طبّق `D^2` على قيم `u = x^2` عند −1 و 0 و 1.','D^2 u = (2,  2,  2)',
    ['u = (1, 0, 1):   1 − 0 + 1 = 2', ['The same in every row.','والنتيجة نفسها في كل صف.'], ['`u″ = 2` exactly.','`u″ = 2` بدقة.']],
    ['D^2 u = (0,  0,  0)','D^2 u = (−2,  0,  2)','D^2 u = (1,  −2,  1)']),
  Q('The explicit Euler step for `u_t = u_{xx}` is stable for Δt about `1/‖D^2‖`. With n = 16 a step of `10^{−4}` is stable. Estimate the stable step for n = 32.','خطوة أويلر الصريحة لـ `u_t = u_{xx}` مستقرة عندما Δt نحو `1/‖D^2‖`. عند n = 16 الخطوة `10^{−4}` مستقرة. قدّر الخطوة المستقرة عند n = 32.','≈ 6.25 × 10^{−6}',
    ['Δt ~ n^{−4}:   10^{−4}·(#f{16}{32})^4 = #f{10^{−4}}{16} = 6.25 × 10^{−6}', ['This is why implicit time stepping is used with spectral differentiation.','ولهذا تُستخدم الخطوات الضمنية مع الاشتقاق الطيفي.']],
    ['≈ 2.5 × 10^{−5}','≈ 5 × 10^{−5}','≈ 10^{−4}']),
]);

lesson('501',49,[
  ['A function of degree ≤ n can be stored by its values `u_i` at n + 1 nodes or by its Legendre coefficients `a_j`. The matrix `V_{ij} = P_j(x_i)` passes from one to the other:','الدالة التي درجتها ≤ n يمكن تخزينها بقيمها `u_i` عند n + 1 عقدة أو بمعاملات ليجندر `a_j`، والمصفوفة `V_{ij} = P_j(x_i)` تنقل بينهما:'],
  'u = V a,   a = V^{−1} u',
  ['At Gauss points the inverse is explicit: by exact quadrature `a_j = #f{2j + 1}{2} Σ_i w_i u_i P_j(x_i)`. Values are convenient for nonlinear terms (multiply pointwise); coefficients are convenient for derivatives, integrals and for reading the decay, which estimates the error.',
   'وعند نقاط جاوس يكون المعكوس صريحاً، فبالتربيع المضبوط `a_j = #f{2j + 1}{2} Σ_i w_i u_i P_j(x_i)`. والقيم مناسبة للحدود غير الخطية (الضرب نقطة بنقطة)، والمعاملات مناسبة للمشتقات والتكاملات ولقراءة التناقص الذي يقدّر الخطأ.'],
],[
  Q('Write V for the nodes `±1/#r{3}` and the basis `P_0, P_1`.','اكتب V للعقدتين `±1/#r{3}` والأساس `P_0` و `P_1`.','V = #m{1, −0.5774 ;; 1, 0.5774}',
    ['V_{ij} = P_j(x_i):   P_0 = 1,   P_1(x_i) = x_i'], ['V = #m{1, 0.5774 ;; 1, −0.5774}','V = #m{0.5774, 1 ;; −0.5774, 1}','V = #m{1, 0 ;; 0, 1}']),
  Q('Find the coefficients of the function whose values at `−1/#r{3}`, `1/#r{3}` are 1 and 3.','أوجد معاملات الدالة التي قيمتاها عند `−1/#r{3}` و `1/#r{3}` هما 1 و 3.','a_0 = 2,   a_1 = #r{3} ≈ 1.7321',
    ['a_0 + a_1(−0.5774) = 1,   a_0 + a_1(0.5774) = 3', 'a_0 = 2,   a_1 = #f{2}{2·0.5774} = #r{3}'],
    ['a_0 = 2,   a_1 = 1','a_0 = 1,   a_1 = 3','a_0 = 4,   a_1 = #r{3}']),
  Q('Recompute `a_1` with the quadrature formula `a_j = ((2j + 1)/2) Σ_i w_i u_i P_j(x_i)`.','أعد حساب `a_1` بصيغة التربيع `a_j = ((2j + 1)/2) Σ_i w_i u_i P_j(x_i)`.','#r{3} ≈ 1.7321',
    ['a_1 = #f{3}{2}(1·1·(−0.5774) + 1·3·0.5774) = #f{3}{2}·1.1547 = 1.7321'], ['1.1547','0.5774','3']),
  Q('After a computation the coefficients are `a_0 = 1`, `a_5 = 10^{−3}`, `a_10 = 10^{−6}`. Estimate the size of `a_15`.','بعد حساب كانت المعاملات `a_0 = 1` و `a_5 = 10^{−3}` و `a_10 = 10^{−6}`. قدّر حجم `a_15`.','≈ 10^{−9}',
    [['Each five steps divide the coefficient by 1000: geometric decay with ρ = `1000^{1/5} ≈ 4`.','كل خمس خطوات تقسم المعامل على 1000: تناقص هندسي مع ρ = `1000^{1/5} ≈ 4`.'], 'a_15 ≈ 10^{−6}·10^{−3} = 10^{−9}', ['The last coefficients are an estimate of the truncation error.','والمعاملات الأخيرة تقدير لخطأ القطع.']],
    ['≈ 10^{−7}','≈ 10^{−12}','≈ 10^{−6}']),
]);

lesson('501',50,[
  ['Discrete coefficients computed from n Gauss points are exact only for functions of degree ≤ n − 1. Higher polynomials are not lost: they are folded onto lower ones (aliasing). At the Gauss points `P_n = 0`, and by the recurrence','المعاملات المتقطعة المحسوبة من n نقطة جاوس مضبوطة فقط للدوال التي درجتها ≤ n − 1. والكثيرات الأعلى لا تضيع بل تُطوى على الأدنى (التداخل aliasing). فعند نقاط جاوس `P_n = 0`، ومن علاقة التكرار'],
  'P_{n+1}(x_i) = −#f{n}{n + 1} P_{n−1}(x_i)',
  ['So the discrete transform sees `P_n` as 0 and `P_{n+1}` as `−(n/(n + 1)) P_{n−1}`. Aliasing matters in nonlinear terms: the product of two functions of degree N has degree 2N, and is computed without aliasing only with about 3N/2 points (the 3/2 rule).',
   'إذن يرى التحويل المتقطع `P_n` صفراً و `P_{n+1}` على أنها `−(n/(n + 1)) P_{n−1}`. والتداخل مهم في الحدود غير الخطية: حاصل ضرب دالتين درجة كل منهما N درجته 2N، ولا يُحسب دون تداخل إلا بنحو 3N/2 نقطة (قاعدة 3/2).'],
],[
  Q('With 2 Gauss points, which discrete coefficients does `P_3` produce?','مع نقطتي جاوس، ما المعاملات المتقطعة التي تنتجها `P_3`؟','a_0 = 0,   a_1 = −#f{2}{3}',
    ['n = 2:   P_3(x_i) = −#f{2}{3} P_1(x_i)', ['Check at `1/#r{3}`: `P_3 = −2/(3#r{3}) = −0.3849` and `−(2/3)(0.5774) = −0.3849`.','تحقق عند `1/#r{3}`: `P_3 = −2/(3#r{3}) = −0.3849` و `−(2/3)(0.5774) = −0.3849`.']],
    ['a_0 = 0,   a_1 = 0','a_0 = 0,   a_1 = 1','a_0 = −#f{2}{3},   a_1 = 0']),
  Q('With 2 Gauss points, what are the discrete coefficients of `P_2`?','مع نقطتي جاوس، ما المعاملات المتقطعة لـ `P_2`؟','a_0 = 0,   a_1 = 0',
    [['The Gauss points are the zeros of `P_2`, so its values there are all 0.','نقاط جاوس هي جذور `P_2` فقيمها هناك أصفار.']],
    ['a_0 = 1,   a_1 = 0','a_0 = #f{1}{3},   a_1 = 0','a_0 = 0,   a_1 = #f{2}{3}']),
  Q('How many points avoid aliasing in `u^2` when u has degree N = 20?','كم نقطة تمنع التداخل في `u^2` إذا كانت درجة u هي N = 20؟','30',
    ['#f{3N}{2} = 30', ['With 30 Gauss points the coefficients up to degree 20 of the degree-40 product are computed without aliasing.','مع 30 نقطة جاوس تُحسب معاملات حاصل الضرب (درجته 40) حتى الدرجة 20 دون تداخل.']],
    ['20','40','21']),
  Q('With 3 Gauss points, `P_4` aliases onto which polynomial?','مع ثلاث نقاط جاوس، على أي كثيرة حدود تُطوى `P_4`؟','−#f{3}{4} P_2',
    ['n = 3:   P_4(x_i) = −#f{3}{4} P_2(x_i)', ['Check at 0: `P_4(0) = 3/8` and `−(3/4)·(−1/2) = 3/8`.','تحقق عند 0: `P_4(0) = 3/8` و `−(3/4)·(−1/2) = 3/8`.']],
    ['0','−#f{4}{3} P_2','#f{3}{4} P_2']),
]);

/* ---- 501 · Unit 6 (lessons 51–60): Chebyshev and Jacobi bases ---- */
lesson('501',51,[
  ['The Chebyshev polynomials are cosines in disguise. With `x = cos θ`:','كثيرات حدود تشيبيشيف جيوب تمام متنكرة. مع `x = cos θ`:'],
  'T_n(cos θ) = cos nθ:   T_0 = 1,   T_1 = x,   T_2 = 2x^2 − 1,   T_3 = 4x^3 − 3x',
  ['Everything about `T_n` follows from trigonometry: `|T_n(x)| ≤ 1` on `[−1, 1]`, `T_n(1) = 1`, `T_n(−1) = (−1)^n`, and `T_n` equioscillates n + 1 times between −1 and 1. A Chebyshev expansion of f is a cosine series of `f(cos θ)`, which is why the FFT can be used.',
   'وكل خواص `T_n` تأتي من حساب المثلثات: `|T_n(x)| ≤ 1` على `[−1, 1]` و `T_n(1) = 1` و `T_n(−1) = (−1)^n`، و `T_n` تتذبذب بالتساوي n + 1 مرة بين −1 و 1. ومفكوك تشيبيشيف للدالة f متسلسلة جيوب تمام للدالة `f(cos θ)`، ولهذا يمكن استخدام FFT.'],
],[
  Q('Use `cos 2θ = 2cos^2 θ − 1` to find `T_2(x)`.','استخدم `cos 2θ = 2cos^2 θ − 1` لإيجاد `T_2(x)`.','T_2 = 2x^2 − 1',
    ['T_2(cos θ) = cos 2θ = 2cos^2 θ − 1', 'x = cos θ  ⇒  T_2 = 2x^2 − 1'], ['T_2 = x^2 − 1','T_2 = 2x^2 + 1','T_2 = #f{3x^2 − 1}{2}']),
  Q('Compute `T_3(0.5)` with the cosine definition.','احسب `T_3(0.5)` بتعريف جيب التمام.','−1',
    ['0.5 = cos #f{π}{3}  ⇒  T_3(0.5) = cos π = −1', ['Check: `4(0.125) − 3(0.5) = −1`.','تحقق: `4(0.125) − 3(0.5) = −1`.']], ['1','0','−0.5']),
  Q('Find `T_4(x)` from `cos 4θ = 2cos^2 2θ − 1`.','أوجد `T_4(x)` من `cos 4θ = 2cos^2 2θ − 1`.','T_4 = 8x^4 − 8x^2 + 1',
    ['T_4 = 2T_2^2 − 1 = 2(2x^2 − 1)^2 − 1', '= 2(4x^4 − 4x^2 + 1) − 1 = 8x^4 − 8x^2 + 1'],
    ['T_4 = 8x^4 − 8x^2 − 1','T_4 = 4x^4 − 4x^2 + 1','T_4 = 8x^4 − 4x^2 + 1']),
  Q('Find `T_7(−1)` and `T_8(0)`.','أوجد `T_7(−1)` و `T_8(0)`.','T_7(−1) = −1,   T_8(0) = 1',
    ['−1 = cos π:   T_7(−1) = cos 7π = −1', '0 = cos #f{π}{2}:   T_8(0) = cos 4π = 1'],
    ['T_7(−1) = 1,   T_8(0) = 1','T_7(−1) = −1,   T_8(0) = 0','T_7(−1) = −1,   T_8(0) = −1']),
]);

lesson('501',52,[
  ['From `cos(n + 1)θ + cos(n − 1)θ = 2cos θ cos nθ` comes the recurrence, and from `d^2/dθ^2 cos nθ = −n^2 cos nθ` the differential equation:','من `cos(n + 1)θ + cos(n − 1)θ = 2cos θ cos nθ` تأتي علاقة التكرار، ومن `d^2/dθ^2 cos nθ = −n^2 cos nθ` تأتي المعادلة التفاضلية:'],
  'T_{n+1} = 2x T_n − T_{n−1},     (1 − x^2) y″ − x y′ + n^2 y = 0',
  ['The leading coefficient of `T_n` is `2^{n−1}` (n ≥ 1), and the explicit formula is','والمعامل الرئيس لـ `T_n` هو `2^{n−1}` (n ≥ 1)، والصيغة الصريحة هي'],
  'T_n(x) = #f{n}{2} Σ_{k=0}^{⌊n/2⌋} (−1)^k #f{(n − k − 1)!}{k! (n − 2k)!} (2x)^{n−2k}',
],[
  Q('Use the recurrence to find `T_3` from `T_1` and `T_2`.','استخدم علاقة التكرار لإيجاد `T_3` من `T_1` و `T_2`.','T_3 = 4x^3 − 3x',
    ['T_3 = 2x(2x^2 − 1) − x = 4x^3 − 2x − x = 4x^3 − 3x'], ['T_3 = 4x^3 − x','T_3 = 2x^3 − 3x','T_3 = 4x^3 + 3x']),
  Q('Verify that `T_2 = 2x^2 − 1` satisfies `(1 − x^2)y″ − xy′ + 4y = 0`.','تحقق أن `T_2 = 2x^2 − 1` تحقق `(1 − x^2)y″ − xy′ + 4y = 0`.',['Verified: the left side is 0','تحقق: الطرف الأيسر صفر'],
    ['y′ = 4x,   y″ = 4', '(1 − x^2)·4 − x·4x + 4(2x^2 − 1) = 4 − 4x^2 − 4x^2 + 8x^2 − 4 = 0']),
  Q('Compute `T_5(0.5)` with the recurrence.','احسب `T_5(0.5)` بعلاقة التكرار.','0.5',
    ['T_0 = 1,   T_1 = 0.5,   T_2 = −0.5,   T_3 = −1', 'T_4 = 2(0.5)(−1) − (−0.5) = −0.5,   T_5 = 2(0.5)(−0.5) − (−1) = 0.5', ['Check: `cos(5π/3) = 0.5`.','تحقق: `cos(5π/3) = 0.5`.']],
    ['−0.5','1','−1']),
  Q('Find the leading coefficient of `T_6`.','أوجد المعامل الرئيس لـ `T_6`.','32',
    ['2^{n−1} = 2^5 = 32', ['Each recurrence step doubles it.','كل خطوة تكرار تضاعفه.']], ['64','16','6']),
]);

lesson('501',53,[
  ['The Chebyshev polynomials are orthogonal with the weight `w(x) = (1 − x^2)^{−1/2}`:','كثيرات تشيبيشيف متعامدة بالوزن `w(x) = (1 − x^2)^{−1/2}`:'],
  '∫_{−1}^{1} #f{T_m(x) T_n(x)}{#r{1 − x^2}} dx = π (m = n = 0),   #f{π}{2} (m = n ≥ 1),   0 (m ≠ n)',
  ['With `x = cos θ` this is just the orthogonality of cosines on `[0, π]`. The polynomials of the second kind are `U_n(cos θ) = sin((n + 1)θ)/sin θ`; they are orthogonal with the weight `#r{1 − x^2}` and give the derivatives: `T_n′ = n U_{n−1}`.',
   'ومع `x = cos θ` يصبح هذا تعامد جيوب التمام على `[0, π]`. وكثيرات النوع الثاني `U_n(cos θ) = sin((n + 1)θ)/sin θ` متعامدة بالوزن `#r{1 − x^2}` وتعطي المشتقات: `T_n′ = n U_{n−1}`.'],
],[
  Q('Compute `∫_{−1}^{1} T_2(x)^2 / #r{1 − x^2} dx`.','احسب `∫_{−1}^{1} T_2(x)^2 / #r{1 − x^2} dx`.','#f{π}{2}',
    ['x = cos θ,   #f{dx}{#r{1 − x^2}} = −dθ', '∫_0^{π} cos^2 2θ dθ = #f{π}{2}'], ['π','#f{2}{5}','#f{π}{4}']),
  Q('Compute `∫_{−1}^{1} T_1(x) / #r{1 − x^2} dx`.','احسب `∫_{−1}^{1} T_1(x) / #r{1 − x^2} dx`.','0',
    ['∫_0^{π} cos θ dθ = [sin θ]_0^{π} = 0', ['This is `⟨T_1, T_0⟩_w = 0`.','وهذا هو `⟨T_1, T_0⟩_w = 0`.']], ['π','#f{π}{2}','2']),
  Q('Find `U_2(x)` from `sin 3θ = 3sin θ − 4sin^3 θ`.','أوجد `U_2(x)` من `sin 3θ = 3sin θ − 4sin^3 θ`.','U_2 = 4x^2 − 1',
    ['U_2 = #f{sin 3θ}{sin θ} = 3 − 4sin^2 θ = 3 − 4(1 − x^2) = 4x^2 − 1'], ['U_2 = 2x^2 − 1','U_2 = 4x^2 + 1','U_2 = 3 − 4x^2']),
  Q('Check `T_3′ = 3U_2`.','تحقق من `T_3′ = 3U_2`.','12x^2 − 3',
    ['T_3′ = #f{d}{dx}(4x^3 − 3x) = 12x^2 − 3', '3U_2 = 3(4x^2 − 1) = 12x^2 − 3'], ['12x^2 − 1','4x^2 − 1','12x^2 + 3']),
]);

lesson('501',54,[
  ['`T_n` has its zeros and extrema at explicit points:','لـ `T_n` جذور وقيم قصوى عند نقاط صريحة:'],
  ['Zeros, and extrema:','الجذور، والقيم القصوى:'],
  'x_k = cos #f{(2k − 1)π}{2n}  (k = 1, …, n),     x_k = cos #f{kπ}{n}  (k = 0, …, n)',
  ['Minimax property: among all monic polynomials of degree n, `2^{1−n} T_n` has the smallest maximum on `[−1, 1]`, equal to `2^{1−n}`. That is why the zeros of `T_{n+1}` are the best interpolation nodes for the factor ω, and the extrema are the Chebyshev (Lobatto-type) points used in practice.',
   'خاصية أصغر قيمة عظمى: من بين كل كثيرات الحدود الواحدية من الدرجة n تكون `2^{1−n} T_n` صاحبة أصغر قيمة عظمى على `[−1, 1]` وهي `2^{1−n}`. ولهذا جذور `T_{n+1}` أفضل عقد استكمال للعامل ω، والقيم القصوى هي نقاط تشيبيشيف (من نوع لوباتو) المستخدمة عملياً.'],
],[
  Q('Find the zeros of `T_3`.','أوجد جذور `T_3`.','x = 0,   ±#f{#r{3}}{2} ≈ ±0.8660',
    ['cos #f{π}{6} = #f{#r{3}}{2},   cos #f{π}{2} = 0,   cos #f{5π}{6} = −#f{#r{3}}{2}', ['Check: `4x^3 − 3x = x(4x^2 − 3)`.','تحقق: `4x^3 − 3x = x(4x^2 − 3)`.']],
    ['x = 0,   ±#r{#f{3}{5}}','x = ±#f{1}{2},   0','x = 0,   ±1']),
  Q('What is the smallest possible maximum of `|x^3 + bx^2 + cx + d|` on `[−1, 1]`?','ما أصغر قيمة عظمى ممكنة لـ `|x^3 + bx^2 + cx + d|` على `[−1, 1]`؟','#f{1}{4}',
    ['2^{1−3} = #f{1}{4}', ['It is attained by `T_3/4 = x^3 − (3/4)x`.','وتتحقق عند `T_3/4 = x^3 − (3/4)x`.']], ['1','#f{1}{2}','#f{2}{3#r{3}}']),
  Q('Find the best approximation of `x^3` by a polynomial of degree ≤ 2 on `[−1, 1]` (maximum norm), and its error.','أوجد أفضل تقريب لـ `x^3` بكثيرة حدود درجتها ≤ 2 على `[−1, 1]` (بمعيار القيمة العظمى) وخطأه.','p = #f{3}{4}x,   max|x^3 − p| = #f{1}{4}',
    [['`x^3 − p` must be the monic cubic of least maximum:','يجب أن تكون `x^3 − p` الكثيرة التكعيبية الواحدية ذات أصغر قيمة عظمى:'], 'x^3 − p = #f{T_3}{4}', 'p = x^3 − (x^3 − #f{3}{4}x) = #f{3}{4}x'],
    ['p = x,   max|x^3 − p| = #f{2}{3#r{3}}','p = 0,   max|x^3 − p| = 1','p = #f{3}{5}x,   max|x^3 − p| = #f{2}{5}']),
  Q('List the extrema points of `T_4` on `[−1, 1]`.','اذكر نقاط القيم القصوى لـ `T_4` على `[−1, 1]`.','±1,  ±0.7071,  0',
    ['cos #f{kπ}{4},   k = 0, …, 4', ['At these points `T_4 = ±1` with alternating signs.','عند هذه النقاط `T_4 = ±1` بإشارات متناوبة.']],
    ['±0.9239,  ±0.3827','±1,  ±0.5,  0','±0.8611,  ±0.3400']),
]);

lesson('501',55,[
  ['The Gauss–Chebyshev rule has equal weights and explicit nodes:','قاعدة جاوس–تشيبيشيف أوزانها متساوية وعقدها صريحة:'],
  '∫_{−1}^{1} #f{f(x)}{#r{1 − x^2}} dx ≈ #f{π}{n} Σ_{k=1}^{n} f(x_k),   x_k = cos #f{(2k − 1)π}{2n}',
  ['It is exact for degree ≤ 2n − 1. To evaluate a Chebyshev sum `S = Σ_{k=0}^{n} c_k T_k(x)` stably, Clenshaw’s algorithm runs the recurrence backwards:','وهي مضبوطة للدرجة ≤ 2n − 1. ولحساب مجموع تشيبيشيف `S = Σ_{k=0}^{n} c_k T_k(x)` بثبات تُشغّل خوارزمية كلينشو علاقة التكرار إلى الخلف:'],
  'b_{n+1} = b_{n+2} = 0,   b_k = c_k + 2x b_{k+1} − b_{k+2},   S = c_0 + x b_1 − b_2',
],[
  Q('Apply the two-point Gauss–Chebyshev rule to `∫_{−1}^{1} x^2/#r{1 − x^2} dx`.','طبّق قاعدة جاوس–تشيبيشيف ذات النقطتين على `∫_{−1}^{1} x^2/#r{1 − x^2} dx`.','#f{π}{2}',
    ['x_k = ±#f{#r{2}}{2},   x_k^2 = #f{1}{2}', '#f{π}{2}(#f{1}{2} + #f{1}{2}) = #f{π}{2}', ['Exact: `∫_0^{π} cos^2 θ dθ = π/2`.','مضبوطة: `∫_0^{π} cos^2 θ dθ = π/2`.']],
    ['π','#f{π}{4}','#f{2}{3}']),
  Q('Use Clenshaw’s algorithm to evaluate `S = 1 + 2T_1 + 3T_2` at x = 0.5.','استخدم خوارزمية كلينشو لحساب `S = 1 + 2T_1 + 3T_2` عند x = 0.5.','0.5',
    ['b_3 = b_4 = 0,   b_2 = 3,   b_1 = 2 + 2(0.5)(3) − 0 = 5', 'S = 1 + 0.5·5 − 3 = 0.5', ['Directly: `1 + 1 + 3(−0.5) = 0.5`.','مباشرة: `1 + 1 + 3(−0.5) = 0.5`.']],
    ['3.5','−0.5','2']),
  Q('Up to which degree is the five-point Gauss–Chebyshev rule exact?','حتى أي درجة تكون قاعدة جاوس–تشيبيشيف ذات النقاط الخمس مضبوطة؟','9',
    ['2n − 1 = 9'], ['5','10','4']),
  Q('Compute `∫_{−1}^{1} T_4(x)/#r{1 − x^2} dx` with the three-point rule.','احسب `∫_{−1}^{1} T_4(x)/#r{1 − x^2} dx` بقاعدة النقاط الثلاث.','0',
    ['x_k = cos #f{π}{6}, cos #f{π}{2}, cos #f{5π}{6}', 'T_4(x_k) = cos #f{2π}{3}, cos 2π, cos #f{10π}{3} = −#f{1}{2}, 1, −#f{1}{2}', '#f{π}{3}(−#f{1}{2} + 1 − #f{1}{2}) = 0'],
    ['π','#f{π}{3}','−#f{π}{3}']),
]);

lesson('501',56,[
  ['The Chebyshev series of f is','متسلسلة تشيبيشيف للدالة f هي'],
  'f = Σ′ a_k T_k,   a_k = #f{2}{π} ∫_{−1}^{1} #f{f(x) T_k(x)}{#r{1 − x^2}} dx',
  ['(the prime halves the first term). For analytic f it converges at the same geometric rate `ρ^{−n}` as the Legendre series. Its advantage is speed: the coefficients from n values cost `O(n log n)` by the fast cosine transform. Legendre’s advantage is the weight 1, which keeps Galerkin matrices simple; in the paper, the fractional Legendre basis is used for this reason.',
   '(الشرطة تعني تنصيف الحد الأول). وللدوال التحليلية تتقارب بالمعدل الهندسي نفسه `ρ^{−n}` الذي لمتسلسلة ليجندر. وميزتها السرعة: المعاملات من n قيمة تكلف `O(n log n)` بتحويل جيب التمام السريع. وميزة ليجندر الوزن 1 الذي يبقي مصفوفات جاليركن بسيطة، ولهذا يستخدم البحث أساس ليجندر الكسري.'],
],[
  Q('Write `x^2` in Chebyshev polynomials.','اكتب `x^2` بدلالة كثيرات تشيبيشيف.','x^2 = #f{1}{2}T_0 + #f{1}{2}T_2',
    ['T_2 = 2x^2 − 1  ⇒  x^2 = #f{T_2 + 1}{2}'], ['x^2 = #f{1}{3}T_0 + #f{2}{3}T_2','x^2 = T_2','x^2 = #f{1}{2}T_2']),
  Q('Write `x^3` in Chebyshev polynomials.','اكتب `x^3` بدلالة كثيرات تشيبيشيف.','x^3 = #f{3}{4}T_1 + #f{1}{4}T_3',
    ['T_3 = 4x^3 − 3x  ⇒  x^3 = #f{T_3 + 3x}{4} = #f{3}{4}T_1 + #f{1}{4}T_3'], ['x^3 = #f{3}{5}T_1 + #f{2}{5}T_3','x^3 = #f{1}{4}T_1 + #f{3}{4}T_3','x^3 = #f{1}{4}T_3']),
  Q('The Chebyshev coefficients of `e^x` are `a_k = 2I_k(1)`. Compute `a_0/2` and `a_1` with `I_0(1) = 1.2661`, `I_1(1) = 0.5652`.','معاملات تشيبيشيف لـ `e^x` هي `a_k = 2I_k(1)`. احسب `a_0/2` و `a_1` علماً بأن `I_0(1) = 1.2661` و `I_1(1) = 0.5652`.','a_0/2 = 1.2661,   a_1 = 1.1303',
    ['#f{a_0}{2} = I_0(1) = 1.2661,   a_1 = 2I_1(1) = 1.1303', ['Compare the Legendre coefficients `1.1752` and `1.1036`: similar size, similar decay.','قارن بمعاملات ليجندر `1.1752` و `1.1036`: حجم متقارب وتناقص متقارب.']],
    ['a_0/2 = 1.1752,   a_1 = 1.1036','a_0/2 = 2.5321,   a_1 = 0.5652','a_0/2 = 1.2661,   a_1 = 0.5652']),
  Q('About how many operations does the fast transform need for the coefficients of 1024 values, compared with a direct sum?','كم عملية تقريباً يحتاج التحويل السريع لمعاملات 1024 قيمة، مقارنة بالجمع المباشر؟','≈ 10^4  vs  ≈ 10^6',
    ['n log_2 n = 1024·10 ≈ 10^4,   n^2 ≈ 10^6'], ['≈ 10^6  vs  ≈ 10^4','≈ 10^3  vs  ≈ 10^3','≈ 10^9  vs  ≈ 10^6']),
]);

lesson('501',57,[
  ['As for Legendre, the Chebyshev polynomials are moved to `[0, 1]` and then to fractional powers:','كما في ليجندر تُنقل كثيرات تشيبيشيف إلى `[0, 1]` ثم إلى القوى الكسرية:'],
  'T_n^*(t) = T_n(2t − 1),     T_n^{λ}(t) = T_n(2t^{λ} − 1)',
  ['`T_1^* = 2t − 1`, `T_2^* = 8t^2 − 8t + 1`. The weight becomes `(t − t^2)^{−1/2}` on `[0, 1]`, and for the fractional functions `λt^{λ−1}(t^{λ} − t^{2λ})^{−1/2}`. Fractional Chebyshev functions are a common alternative to the fractional Legendre basis; the choice changes the weights, not the idea.',
   '`T_1^* = 2t − 1` و `T_2^* = 8t^2 − 8t + 1`. ويصبح الوزن `(t − t^2)^{−1/2}` على `[0, 1]`، وللدوال الكسرية `λt^{λ−1}(t^{λ} − t^{2λ})^{−1/2}`. ودوال تشيبيشيف الكسرية بديل شائع لأساس ليجندر الكسري، والاختيار يغيّر الأوزان لا الفكرة.'],
],[
  Q('Find `T_2^*(t)`.','أوجد `T_2^*(t)`.','T_2^* = 8t^2 − 8t + 1',
    ['T_2^* = 2(2t − 1)^2 − 1 = 2(4t^2 − 4t + 1) − 1 = 8t^2 − 8t + 1'], ['T_2^* = 6t^2 − 6t + 1','T_2^* = 8t^2 − 8t − 1','T_2^* = 4t^2 − 4t + 1']),
  Q('Write `T_2^{1/2}(t)`.','اكتب `T_2^{1/2}(t)`.','T_2^{1/2} = 8t − 8#r{t} + 1',
    ['T_2^* (s) = 8s^2 − 8s + 1,   s = t^{1/2}'], ['T_2^{1/2} = 6t − 6#r{t} + 1','T_2^{1/2} = 8t^2 − 8t + 1','T_2^{1/2} = 8#r{t} − 8t + 1']),
  Q('Find the zero of `T_1^{λ}(t)` for `λ = 1/3`.','أوجد جذر `T_1^{λ}(t)` عند `λ = 1/3`.','t = #f{1}{8}',
    ['2t^{1/3} − 1 = 0  ⇒  t^{1/3} = #f{1}{2}  ⇒  t = #f{1}{8}'], ['t = #f{1}{2}','t = #f{1}{6}','t = #f{1}{27}']),
  Q('Compute `∫_0^1 T_1^*(t)^2 (t − t^2)^{−1/2} dt`.','احسب `∫_0^1 T_1^*(t)^2 (t − t^2)^{−1/2} dt`.','#f{π}{2}',
    ['x = 2t − 1:   t − t^2 = #f{1 − x^2}{4},   dt = #f{dx}{2}', '∫_{−1}^{1} x^2 #f{2}{#r{1 − x^2}}·#f{dx}{2} = ∫_{−1}^{1} #f{x^2}{#r{1 − x^2}} dx = #f{π}{2}'],
    ['π','#f{π}{4}','#f{1}{3}']),
]);

lesson('501',58,[
  ['The Jacobi polynomials `P_n^{(α,β)}` (α, β > −1) are orthogonal on `[−1, 1]` with the weight `(1 − x)^{α}(1 + x)^{β}`. They contain the earlier families as special cases:','كثيرات جاكوبي `P_n^{(α,β)}` (α, β > −1) متعامدة على `[−1, 1]` بالوزن `(1 − x)^{α}(1 + x)^{β}`، وتضم العائلات السابقة حالات خاصة:'],
  ['`α = β = 0`: Legendre.   `α = β = −1/2`: Chebyshev (up to a constant factor).','`α = β = 0`: ليجندر.   `α = β = −1/2`: تشيبيشيف (مع عامل ثابت).'],
  'P_1^{(α,β)}(x) = (α + 1) + (α + β + 2)#f{x − 1}{2},   P_n^{(α,β)}(1) = #f{(α + 1)_n}{n!}',
  ['Weights with powers of `1 ± x` match solutions with end singularities, and the symmetry `P_n^{(α,β)}(−x) = (−1)^n P_n^{(β,α)}(x)` swaps the two ends. Course 503 studies them in depth.',
   'والأوزان بقوى `1 ± x` تناسب الحلول ذات الانفرادات عند الأطراف، والتماثل `P_n^{(α,β)}(−x) = (−1)^n P_n^{(β,α)}(x)` يبادل بين الطرفين. ويدرسها المقرر 503 بالتفصيل.'],
],[
  Q('Find `P_1^{(1,1)}(x)`.','أوجد `P_1^{(1,1)}(x)`.','P_1^{(1,1)} = 2x',
    ['(1 + 1) + (1 + 1 + 2)#f{x − 1}{2} = 2 + 2(x − 1) = 2x'], ['P_1^{(1,1)} = x','P_1^{(1,1)} = 4x − 2','P_1^{(1,1)} = 2x + 2']),
  Q('Find `P_3^{(1,0)}(1)`.','أوجد `P_3^{(1,0)}(1)`.','4',
    ['#f{(α + 1)_3}{3!} = #f{2·3·4}{6} = 4'], ['1','3','6']),
  Q('Find `P_1^{(0,1)}(x)` and its zero.','أوجد `P_1^{(0,1)}(x)` وجذرها.','P_1^{(0,1)} = #f{3x − 1}{2},   x = #f{1}{3}',
    ['1 + 3·#f{x − 1}{2} = #f{3x − 1}{2}', 'x = #f{1}{3}'], ['P_1^{(0,1)} = #f{3x + 1}{2},   x = −#f{1}{3}','P_1^{(0,1)} = x,   x = 0','P_1^{(0,1)} = 3x − 1,   x = #f{1}{3}']),
  Q('Use the symmetry relation to find `P_1^{(1,0)}(x)` from `P_1^{(0,1)}(x) = (3x − 1)/2`.','استخدم علاقة التماثل لإيجاد `P_1^{(1,0)}(x)` من `P_1^{(0,1)}(x) = (3x − 1)/2`.','P_1^{(1,0)} = #f{3x + 1}{2}',
    ['P_1^{(1,0)}(x) = −P_1^{(0,1)}(−x) = −#f{−3x − 1}{2} = #f{3x + 1}{2}', ['Check with the formula: `2 + 3(x − 1)/2 = (3x + 1)/2`.','تحقق بالصيغة: `2 + 3(x − 1)/2 = (3x + 1)/2`.']],
    ['P_1^{(1,0)} = #f{3x − 1}{2}','P_1^{(1,0)} = #f{1 − 3x}{2}','P_1^{(1,0)} = 3x + 1']),
]);

lesson('501',59,[
  ['Gauss–Jacobi quadrature integrates the weight exactly and only f numerically:','تربيع جاوس–جاكوبي يكامل الوزن بدقة و f وحدها عددياً:'],
  '∫_{−1}^{1} (1 − x)^{α}(1 + x)^{β} f(x) dx ≈ Σ_i w_i f(x_i),   P_n^{(α,β)}(x_i) = 0',
  ['It is exact for f of degree ≤ 2n − 1, even when the weight is singular at an end. The one-point rule has the node `x_1 = (β − α)/(α + β + 2)` and the weight equal to the integral of the weight function:','وهي مضبوطة للدوال f التي درجتها ≤ 2n − 1 حتى إذا كان الوزن شاذاً عند طرف. وقاعدة النقطة الواحدة عقدتها `x_1 = (β − α)/(α + β + 2)` ووزنها تكامل دالة الوزن:'],
  'w_1 = ∫_{−1}^{1} (1 − x)^{α}(1 + x)^{β} dx = #f{2^{α+β+1} Γ(α + 1) Γ(β + 1)}{Γ(α + β + 2)}',
],[
  Q('Find the one-point Gauss–Jacobi rule for `α = 0`, `β = 1`.','أوجد قاعدة جاوس–جاكوبي ذات النقطة الواحدة عند `α = 0` و `β = 1`.','x_1 = #f{1}{3},   w_1 = 2',
    ['x_1 = #f{1 − 0}{0 + 1 + 2} = #f{1}{3}', 'w_1 = #f{2^2·Γ(1)Γ(2)}{Γ(3)} = #f{4}{2} = 2', ['Check: `∫(1 + x)x dx = 2/3 = 2·(1/3)`.','تحقق: `∫(1 + x)x dx = 2/3 = 2·(1/3)`.']],
    ['x_1 = −#f{1}{3},   w_1 = 2','x_1 = 0,   w_1 = 2','x_1 = #f{1}{3},   w_1 = 1']),
  Q('Find the one-point rule for `α = −1/2`, `β = 0`.','أوجد قاعدة النقطة الواحدة عند `α = −1/2` و `β = 0`.','x_1 = #f{1}{3},   w_1 = 2#r{2} ≈ 2.8284',
    ['x_1 = #f{0 + 1/2}{3/2} = #f{1}{3}', 'w_1 = ∫_{−1}^{1} (1 − x)^{−1/2} dx = [−2#r{1 − x}]_{−1}^{1} = 2#r{2}'],
    ['x_1 = −#f{1}{3},   w_1 = 2#r{2} ≈ 2.8284','x_1 = #f{1}{3},   w_1 = 2','x_1 = 0,   w_1 = π']),
  Q('Use the rule of the previous question to approximate `∫_{−1}^{1} x/#r{1 − x} dx`.','استخدم قاعدة السؤال السابق لتقريب `∫_{−1}^{1} x/#r{1 − x} dx`.','#f{2#r{2}}{3} ≈ 0.9428',
    ['w_1 f(x_1) = 2#r{2}·#f{1}{3}', ['Exact, since f = x has degree 1 = 2n − 1. A plain Gauss rule would struggle with the infinite weight at x = 1.','مضبوطة لأن f = x درجتها 1 = 2n − 1. والقاعدة العادية تتعثر مع الوزن اللانهائي عند x = 1.']],
    ['2#r{2} ≈ 2.8284','0','#f{#r{2}}{3} ≈ 0.4714']),
  Q('Which weight should be used to integrate `∫_0^1 t^{−1/2} g(t) dt` on `[−1, 1]` after `t = (x + 1)/2`?','أي وزن يُستخدم لتكامل `∫_0^1 t^{−1/2} g(t) dt` على `[−1, 1]` بعد `t = (x + 1)/2`؟','(1 + x)^{−1/2}:   α = 0,   β = −#f{1}{2}',
    ['t^{−1/2} = #r{2}(1 + x)^{−1/2},   dt = #f{dx}{2}', ['The singular factor sits at x = −1, so β = −1/2 and α = 0.','العامل الشاذ عند x = −1 إذن β = −1/2 و α = 0.']],
    ['(1 − x)^{−1/2}:   α = −#f{1}{2},   β = 0','1:   α = β = 0','(1 − x^2)^{−1/2}:   α = β = −#f{1}{2}']),
]);

lesson('501',60,[
  ['Combining the Jacobi weight with the map `s = t^{λ}` gives the fractional Jacobi functions:','بجمع وزن جاكوبي مع التحويل `s = t^{λ}` نحصل على دوال جاكوبي الكسرية:'],
  'J_n^{λ}(t) = P_n^{(α,β)}(2t^{λ} − 1),   w(t) = (1 − t^{λ})^{α} t^{λβ}·λt^{λ−1}',
  ['They are orthogonal on `[0, 1]` with this weight. With α = β = 0 they are the fractional Legendre functions `L_n^{λ}`; with λ = 1 they are shifted Jacobi polynomials. The extra parameters let the basis match both the power behaviour `t^{λ}` and a weight that absorbs known singular factors of the problem.',
   'وهي متعامدة على `[0, 1]` بهذا الوزن. وعند α = β = 0 تكون دوال ليجندر الكسرية `L_n^{λ}`، وعند λ = 1 تكون كثيرات جاكوبي المزاحة. والمعاملات الإضافية تسمح للأساس بمطابقة سلوك القوى `t^{λ}` وبوزن يمتص العوامل الشاذة المعروفة في المسألة.'],
],[
  Q('Write `J_1^{λ}(t)` for `α = 0`, `β = 1`.','اكتب `J_1^{λ}(t)` عند `α = 0` و `β = 1`.','J_1^{λ} = 3t^{λ} − 2',
    ['P_1^{(0,1)}(x) = #f{3x − 1}{2},   x = 2t^{λ} − 1', '#f{3(2t^{λ} − 1) − 1}{2} = 3t^{λ} − 2'], ['J_1^{λ} = 3t^{λ} − 1','J_1^{λ} = 2t^{λ} − 1','J_1^{λ} = 6t^{λ} − 4']),
  Q('Find the zero of that `J_1^{λ}` for `λ = 1/2`.','أوجد جذر `J_1^{λ}` السابقة عند `λ = 1/2`.','t = #f{4}{9}',
    ['3t^{1/2} = 2  ⇒  t^{1/2} = #f{2}{3}  ⇒  t = #f{4}{9}'], ['t = #f{2}{3}','t = #f{1}{4}','t = #f{9}{4}']),
  Q('What do `J_n^{λ}` and their weight become for α = β = 0?','إلامَ تؤول `J_n^{λ}` ووزنها عند α = β = 0؟',['The fractional Legendre functions `L_n^{λ}`, with weight `λt^{λ−1}`','دوال ليجندر الكسرية `L_n^{λ}` بالوزن `λt^{λ−1}`'],
    ['P_n^{(0,0)} = P_n,   (1 − t^{λ})^0 t^0 = 1'],
    [['Chebyshev functions','دوال تشيبيشيف'],['Shifted Jacobi polynomials with weight 1','كثيرات جاكوبي المزاحة بالوزن 1']]),
  Q('Compute `∫_0^1 w(t) dt` for `α = 0`, `β = 1`.','احسب `∫_0^1 w(t) dt` عند `α = 0` و `β = 1`.','#f{1}{2}',
    ['s = t^{λ}:   ∫_0^1 s ds = #f{1}{2}', ['The answer does not depend on λ.','ولا يعتمد الجواب على λ.']], ['1','#f{λ}{2}','2']),
]);

/* ---- 501 · Unit 7 (lessons 61–70): operational matrices ---- */
lesson('501',61,[
  ['An operational matrix does calculus on the coefficients. Collect the space basis in the vector `𝔏_N^{γ}(x) = [L_0^{γ}, …, L_N^{γ}]^T`; then the derivative of each basis function is a combination of lower ones:','المصفوفة التشغيلية تُجري التفاضل والتكامل على المعاملات. نجمع الأساس المكاني في المتجه `𝔏_N^{γ}(x) = [L_0^{γ}, …, L_N^{γ}]^T`، فتكون مشتقة كل دالة أساس تركيباً من الأدنى منها:'],
  '#f{d}{dx} 𝔏_N^{γ}(x) = D^{(1)} 𝔏_N^{γ}(x),   #f{d}{dx} L_r^{γ} = #f{2}{γ} Σ_{j<r, r−j odd} (2j + 1) L_j^{γ}',
  ['The rule comes from `P_r′ = Σ (2j + 1)P_j` over j = r − 1, r − 3, …, with the factor 2/γ of the map `z = 2x/γ − 1`. If `y = a^T 𝔏`, then `y′ = a^T D^{(1)} 𝔏`: differentiation is one matrix product.',
   'والقاعدة تأتي من `P_r′ = Σ (2j + 1)P_j` على j = r − 1, r − 3, … مع العامل 2/γ من التحويل `z = 2x/γ − 1`. وإذا كانت `y = a^T 𝔏` فإن `y′ = a^T D^{(1)} 𝔏`: الاشتقاق ضرب مصفوفة واحد.'],
],[
  Q('Write `D^{(1)}` for N = 2 and γ = 1.','اكتب `D^{(1)}` عند N = 2 و γ = 1.','D^{(1)} = #m{0, 0, 0 ;; 2, 0, 0 ;; 0, 6, 0}',
    ['#f{d}{dx}L_1 = 2·1·L_0,   #f{d}{dx}L_2 = 2·3·L_1', ['Check: `L_2 = 6x^2 − 6x + 1` gives `12x − 6 = 6(2x − 1)`.','تحقق: `L_2 = 6x^2 − 6x + 1` تعطي `12x − 6 = 6(2x − 1)`.']],
    ['D^{(1)} = #m{0, 2, 0 ;; 0, 0, 6 ;; 0, 0, 0}','D^{(1)} = #m{0, 0, 0 ;; 1, 0, 0 ;; 0, 3, 0}','D^{(1)} = #m{0, 0, 0 ;; 2, 0, 0 ;; 2, 6, 0}']),
  Q('Find the row of `D^{(1)}` for `L_3^{γ}` with γ = 2.','أوجد صف `D^{(1)}` الخاص بـ `L_3^{γ}` عند γ = 2.','d_{3,0} = 1,   d_{3,1} = 0,   d_{3,2} = 5',
    ['#f{2}{γ}[(2·2 + 1)L_2 + (2·0 + 1)L_0] = 5L_2 + L_0', ['Check: both sides equal `7.5x^2 − 15x + 6`.','تحقق: الطرفان يساويان `7.5x^2 − 15x + 6`.']],
    ['d_{3,0} = 2,   d_{3,1} = 0,   d_{3,2} = 10','d_{3,0} = 1,   d_{3,1} = 3,   d_{3,2} = 5','d_{3,0} = 0,   d_{3,1} = 0,   d_{3,2} = 5']),
  Q('Find `d/dx L_1^{γ}`.','أوجد `d/dx L_1^{γ}`.','#f{2}{γ}',
    ['L_1^{γ} = #f{2x}{γ} − 1  ⇒  #f{d}{dx}L_1^{γ} = #f{2}{γ}L_0^{γ}'], ['2','#f{1}{γ}','#f{γ}{2}']),
  Q('For `y = L_0 + L_1 + L_2` (γ = 1), use `a^T D^{(1)}` to find the coefficients of `y′`.','للدالة `y = L_0 + L_1 + L_2` (γ = 1) استخدم `a^T D^{(1)}` لإيجاد معاملات `y′`.','y′ = 2L_0 + 6L_1',
    ['a^T = (1, 1, 1):   a^T D^{(1)} = (0 + 2 + 0,  0 + 0 + 6,  0) = (2, 6, 0)', ['Check: `y = 6x^2 − 4x + 1`, `y′ = 12x − 4 = 2 + 6(2x − 1)`.','تحقق: `y = 6x^2 − 4x + 1` و `y′ = 12x − 4 = 2 + 6(2x − 1)`.']],
    ['y′ = 2L_1 + 6L_2','y′ = 8L_0','y′ = 2L_0 + 6L_1 + 6L_2']),
]);

lesson('501',62,[
  ['Theorem 3.1 of the paper gives the second-derivative matrix directly:','النظرية 3.1 في البحث تعطي مصفوفة المشتقة الثانية مباشرة:'],
  '#f{d^2}{dx^2} 𝔏_N^{γ}(x) = D^{(2)} 𝔏_N^{γ}(x),   d_{r,j} = #f{4}{γ^2} s (2j + 1)(2j + 2s + 1),   r = j + 2s,   s ≥ 1',
  ['All other entries are 0: only even gaps r − j appear, and the matrix is strictly lower triangular. A remark for the paper: s may run only while `r = j + 2s ≤ N`.','وكل العناصر الأخرى أصفار: لا تظهر إلا الفروق الزوجية r − j، والمصفوفة مثلثية سفلية تماماً. وملاحظة على البحث: يجري s ما دام `r = j + 2s ≤ N`.'],
],[
  Q('Compute `d_{2,0}` for γ = 1 and check it.','احسب `d_{2,0}` عند γ = 1 وتحقق منه.','d_{2,0} = 12',
    ['r = 2,  j = 0,  s = 1:   4·1·1·3 = 12', ['Check: `(6x^2 − 6x + 1)″ = 12 = 12L_0`.','تحقق: `(6x^2 − 6x + 1)″ = 12 = 12L_0`.']], ['d_{2,0} = 6','d_{2,0} = 3','d_{2,0} = 24']),
  Q('Compute `d_{3,1}` for γ = 1.','احسب `d_{3,1}` عند γ = 1.','d_{3,1} = 60',
    ['r = 3,  j = 1,  s = 1:   4·1·3·5 = 60', ['Check: `L_3″ = 120x − 60 = 60(2x − 1)`.','تحقق: `L_3″ = 120x − 60 = 60(2x − 1)`.']], ['d_{3,1} = 15','d_{3,1} = 30','d_{3,1} = 120']),
  Q('Find the row of `D^{(2)}` for `L_4` with γ = 1.','أوجد صف `D^{(2)}` الخاص بـ `L_4` عند γ = 1.','d_{4,0} = 40,   d_{4,2} = 140',
    ['j = 0, s = 2:   4·2·1·5 = 40', 'j = 2, s = 1:   4·1·5·7 = 140', ['Check: `140L_2 + 40 = 840x^2 − 840x + 180 = L_4″`.','تحقق: `140L_2 + 40 = 840x^2 − 840x + 180 = L_4″`.']],
    ['d_{4,0} = 20,   d_{4,2} = 70','d_{4,0} = 40,   d_{4,2} = 70','d_{4,1} = 40,   d_{4,3} = 140']),
  Q('By what factor do all entries of `D^{(2)}` change when γ = π instead of γ = 1?','بأي عامل تتغير كل عناصر `D^{(2)}` عندما γ = π بدل γ = 1؟','#f{1}{π^2} ≈ 0.1013',
    ['#f{4/π^2}{4/1} = #f{1}{π^2}'], ['#f{1}{π} ≈ 0.3183','π^2 ≈ 9.8696','#f{4}{π^2} ≈ 0.4053']),
]);

lesson('501',63,[
  ['The proof starts from the classical formula on `[−1, 1]`:','يبدأ البرهان من الصيغة الكلاسيكية على `[−1, 1]`:'],
  'P_r″(z) = Σ_{j ≤ r−2, 2 | (r−j)} (j + #f{1}{2})[r(r + 1) − j(j + 1)] P_j(z)',
  ['The sum runs over the j below r − 1 for which r − j is even.','والمجموع على قيم j الأقل من r − 1 التي يكون عندها r − j زوجياً.'],
  ['With r = j + 2s the bracket factorises: `r(r + 1) − j(j + 1) = (r − j)(r + j + 1) = 2s(2j + 2s + 1)`, so the coefficient is `s(2j + 1)(2j + 2s + 1)`. Finally `z = 2x/γ − 1` gives `d^2/dx^2 = (2/γ)^2 d^2/dz^2`, which brings the factor `4/γ^2`.',
   'ومع r = j + 2s يتحلل القوس: `r(r + 1) − j(j + 1) = (r − j)(r + j + 1) = 2s(2j + 2s + 1)` فيصبح المعامل `s(2j + 1)(2j + 2s + 1)`. وأخيراً `z = 2x/γ − 1` يعطي `d^2/dx^2 = (2/γ)^2 d^2/dz^2` ومنه العامل `4/γ^2`.'],
],[
  Q('Check `r(r + 1) − j(j + 1) = 2s(2j + 2s + 1)` for r = 4, j = 2.','تحقق من `r(r + 1) − j(j + 1) = 2s(2j + 2s + 1)` عند r = 4 و j = 2.','14',
    ['20 − 6 = 14', 's = 1:   2·1·(4 + 2 + 1) = 14'], ['12','7','28']),
  Q('Use the formula to find `P_3″(z)`.','استخدم الصيغة لإيجاد `P_3″(z)`.','P_3″ = 15P_1 = 15z',
    ['j = 1:   (1 + #f{1}{2})(12 − 2) = 15', ['Check: `P_3 = (5z^3 − 3z)/2` gives `P_3″ = 15z`.','تحقق: `P_3 = (5z^3 − 3z)/2` تعطي `P_3″ = 15z`.']],
    ['P_3″ = 10P_1','P_3″ = 15P_1 + 3P_0','P_3″ = 30P_1']),
  Q('Why do only even gaps r − j appear?','لماذا لا تظهر إلا الفروق الزوجية r − j؟',['`P_r″` has the parity of r, so it contains only `P_j` with the same parity','`P_r″` لها زوجية r فلا تحتوي إلا `P_j` بالزوجية نفسها'],
    [['Differentiating twice keeps parity, and an even (odd) polynomial has only even (odd) Legendre components.','الاشتقاق مرتين يحفظ الزوجية، والكثيرة الزوجية (الفردية) لا مركبات لها إلا ليجندر الزوجية (الفردية).']],
    [['Because the matrix is triangular','لأن المصفوفة مثلثية'],['Because γ is even','لأن γ زوجية']]),
  Q('Compute the coefficient `s(2j + 1)(2j + 2s + 1)` for r = 5, j = 1 before the factor `4/γ^2`.','احسب المعامل `s(2j + 1)(2j + 2s + 1)` عند r = 5 و j = 1 قبل العامل `4/γ^2`.','42',
    ['s = 2:   2·3·7 = 42', ['Check with the bracket: `(1 + 1/2)(30 − 2) = 42`.','وللتحقق من القوس مباشرة: `(1 + 1/2)(30 − 2) = 42`.']],
    ['63','21','84']),
]);

lesson('501',64,[
  ['The two derivative matrices are linked: differentiating twice is differentiating once, twice.','مصفوفتا المشتقة مرتبطتان: الاشتقاق مرتين هو الاشتقاق مرة واحدة مرتين.'],
  'D^{(2)} = (D^{(1)})^2,   (D^{(1)})^{N+1} = 0',
  ['`D^{(1)}` is strictly lower triangular, so it is nilpotent: each power pushes the entries one more diagonal down, and after N + 1 products nothing is left (the (N + 1)-th derivative of a polynomial of degree N is 0). All its eigenvalues are 0, so the matrix cannot be inverted: integration needs a boundary condition.',
   '`D^{(1)}` مثلثية سفلية تماماً فهي معدومة القوى: كل قوة تدفع العناصر قطراً إلى الأسفل، وبعد N + 1 ضرب لا يبقى شيء (المشتقة ذات الرتبة N + 1 لكثيرة حدود من الدرجة N صفر). وكل قيمها الذاتية أصفار فلا تقبل الانعكاس: التكامل يحتاج شرطاً حدياً.'],
],[
  Q('Compute `(D^{(1)})^2` for N = 2, γ = 1 and compare with `D^{(2)}`.','احسب `(D^{(1)})^2` عند N = 2 و γ = 1 وقارنها بـ `D^{(2)}`.','#m{0, 0, 0 ;; 0, 0, 0 ;; 12, 0, 0}',
    ['#m{0, 0, 0 ;; 2, 0, 0 ;; 0, 6, 0}^2 = #m{0, 0, 0 ;; 0, 0, 0 ;; 6·2, 0, 0}', ['The only entry is `d_{2,0} = 12`, as Theorem 3.1 gives.','العنصر الوحيد `d_{2,0} = 12` كما تعطي النظرية 3.1.']],
    ['#m{0, 0, 0 ;; 4, 0, 0 ;; 0, 36, 0}','#m{0, 0, 0 ;; 0, 0, 0 ;; 0, 12, 0}','#m{0, 0, 0 ;; 2, 0, 0 ;; 12, 6, 0}']),
  Q('For N = 3, what is the smallest k with `(D^{(1)})^k = 0`?','عند N = 3 ما أصغر k بحيث `(D^{(1)})^k = 0`؟','4',
    ['k = N + 1 = 4', ['The third derivative of `L_3` is a non-zero constant, the fourth is 0.','المشتقة الثالثة لـ `L_3` ثابت غير صفري، والرابعة صفر.']], ['3','2','5']),
  Q('What are the eigenvalues of `D^{(1)}`?','ما القيم الذاتية لـ `D^{(1)}`؟','0',
    [['A triangular matrix has its diagonal as eigenvalues, and the diagonal of `D^{(1)}` is zero.','القيم الذاتية للمصفوفة المثلثية هي قطرها، وقطر `D^{(1)}` صفري.']], ['1, 2, …, N','#f{2}{γ}','2j + 1']),
  Q('Why can `u″ = f` not be solved by inverting `D^{(2)}`?','لماذا لا يمكن حل `u″ = f` بعكس `D^{(2)}`؟',['`D^{(2)}` is singular; the two boundary conditions must replace two equations','`D^{(2)}` منفردة، ويجب أن يحل الشرطان الحديان محل معادلتين'],
    [['Constants and linear functions have zero second derivative: `D^{(2)}` has a two-dimensional kernel.','الثوابت والدوال الخطية مشتقتها الثانية صفر: نواة `D^{(2)}` ثنائية البعد.']],
    [['Because it is too large','لأنها كبيرة جداً'],['It can; `D^{(2)}` is always invertible','يمكن ذلك، فـ `D^{(2)}` قابلة للعكس دائماً']]),
]);

lesson('501',65,[
  ['Integration also acts on coefficients. On `[0, γ]`, from `∫ P_r = (P_{r+1} − P_{r−1})/(2r + 1)`:','والتكامل أيضاً يعمل على المعاملات. على `[0, γ]` ومن `∫ P_r = (P_{r+1} − P_{r−1})/(2r + 1)`:'],
  '∫_0^x L_r^{γ} dx = #f{γ}{2(2r + 1)}(L_{r+1}^{γ} − L_{r−1}^{γ})  (r ≥ 1),     ∫_0^x L_0^{γ} dx = #f{γ}{2}(L_0^{γ} + L_1^{γ})',
  ['The lower limit 0 is built in, because `L_{r+1}(0) = L_{r−1}(0)`. The integration matrix J is tridiagonal, with one catch: the last row needs `L_{N+1}`, which is outside the space and is dropped. This truncation is mild for ordinary integrals, and it is the same kind of truncation that Theorem 3.2 makes for fractional ones.',
   'والحد الأدنى 0 مدمج لأن `L_{r+1}(0) = L_{r−1}(0)`. ومصفوفة التكامل J ثلاثية القطر، مع ملاحظة: الصف الأخير يحتاج `L_{N+1}` الواقعة خارج الفضاء فتُحذف. وهذا القطع خفيف للتكاملات العادية، وهو من نوع القطع نفسه الذي تجريه النظرية 3.2 للتكاملات الكسرية.'],
],[
  Q('Write `∫_0^x L_0 dx` in the basis for γ = 1.','اكتب `∫_0^x L_0 dx` بدلالة الأساس عند γ = 1.','x = #f{1}{2}L_0 + #f{1}{2}L_1',
    ['∫_0^x 1 dx = x = #f{1 + (2x − 1)}{2}'], ['x = L_1','x = #f{1}{2}L_1','x = L_0 + #f{1}{2}L_1']),
  Q('Write `∫_0^x L_1 dx` in the basis for γ = 1.','اكتب `∫_0^x L_1 dx` بدلالة الأساس عند γ = 1.','#f{1}{6}(L_2 − L_0)',
    ['#f{1}{2·3}(L_2 − L_0)', ['Check: `∫_0^x (2s − 1) ds = x^2 − x` and `(6x^2 − 6x + 1 − 1)/6 = x^2 − x`.','تحقق: `∫_0^x (2s − 1) ds = x^2 − x` و `(6x^2 − 6x + 1 − 1)/6 = x^2 − x`.']],
    ['#f{1}{3}(L_2 − L_0)','#f{1}{6}(L_2 + L_0)','#f{1}{2}(L_2 − L_0)']),
  Q('For N = 2, which term of `∫_0^x L_2 dx` is lost in the matrix J?','عند N = 2 أي حد من `∫_0^x L_2 dx` يضيع في المصفوفة J؟','#f{1}{10}L_3',
    ['∫_0^x L_2 = #f{1}{10}(L_3 − L_1)', ['`L_3` is outside the space of degree 2, so J keeps only `−L_1/10`.','`L_3` خارج فضاء الدرجة 2، فلا تبقي J إلا `−L_1/10`.']],
    ['−#f{1}{10}L_1','#f{1}{6}L_2',['Nothing is lost','لا يضيع شيء']]),
  Q('How does the integration matrix change from γ = 1 to γ = 3?','كيف تتغير مصفوفة التكامل من γ = 1 إلى γ = 3؟',['All entries are multiplied by 3','كل العناصر تُضرب في 3'],
    ['#f{γ}{2(2r + 1)}', ['Integration scales with the length of the interval, the opposite of differentiation.','التكامل يتناسب مع طول المجال، عكس الاشتقاق.']],
    [['They are divided by 3','تُقسم على 3'],['They are divided by 9','تُقسم على 9'],['They do not change','لا تتغير']]),
]);

lesson('501',66,[
  ['The fractional integral of a basis function is computed exactly, power by power (step 1 of Theorem 3.2):','التكامل الكسري لدالة الأساس يُحسب بدقة قوةً قوة (الخطوة 1 في النظرية 3.2):'],
  'D^{−μ} L_i^{λ}(t) = Σ_{k=0}^{i} E_{i,k} #f{Γ(kλ + 1)}{Γ(kλ + μ + 1)} t^{kλ+μ}',
  ['It follows from the power law `D^{−μ} t^p = Γ(p + 1)/Γ(p + μ + 1)·t^{p+μ}`. The result is no longer in the space: the powers `t^{kλ+μ}` are multiples of λ only when `μ/λ` is a whole number. Writing them back in the basis is step 2.',
   'وهي تأتي من قانون القوى `D^{−μ} t^p = Γ(p + 1)/Γ(p + μ + 1)·t^{p+μ}`. والنتيجة لم تعد داخل الفضاء: القوى `t^{kλ+μ}` مضاعفات لـ λ فقط إذا كان `μ/λ` عدداً صحيحاً. وإعادة كتابتها بالأساس هي الخطوة 2.'],
],[
  Q('Compute `D^{−1/2} 1`.','احسب `D^{−1/2} 1`.','#f{t^{1/2}}{Γ(3/2)} ≈ 1.1284 #r{t}',
    ['p = 0:   #f{Γ(1)}{Γ(3/2)} t^{1/2} = #f{2}{#r{π}} t^{1/2}'], ['#f{t^{1/2}}{Γ(1/2)} ≈ 0.5642 #r{t}','t^{1/2}','2#r{t}']),
  Q('Compute `D^{−1/2} L_1^{1/2}(t)`, where `L_1^{1/2} = 2t^{1/2} − 1`.','احسب `D^{−1/2} L_1^{1/2}(t)` حيث `L_1^{1/2} = 2t^{1/2} − 1`.','#r{π}t − #f{2}{#r{π}}t^{1/2} ≈ 1.7725t − 1.1284#r{t}',
    ['D^{−1/2} t^{1/2} = #f{Γ(3/2)}{Γ(2)} t = #f{#r{π}}{2} t', '2·#f{#r{π}}{2} t − #f{t^{1/2}}{Γ(3/2)} = #r{π}t − #f{2}{#r{π}}t^{1/2}'],
    ['#f{#r{π}}{2}t − #f{2}{#r{π}}t^{1/2}','#r{π}t − t^{1/2}','2t − #r{t}']),
  Q('Compute `D^{−1} L_1^{1/2}(t)`, an ordinary integral.','احسب `D^{−1} L_1^{1/2}(t)` وهو تكامل عادي.','#f{4}{3}t^{3/2} − t',
    ['∫_0^t (2s^{1/2} − 1) ds = #f{4}{3}t^{3/2} − t', ['With the power law: `2Γ(3/2)/Γ(5/2) = 2/(3/2) = 4/3`.','وبقانون القوى: `2Γ(3/2)/Γ(5/2) = 2/(3/2) = 4/3`.']],
    ['#f{2}{3}t^{3/2} − t','#f{4}{3}t^{3/2}','t^{3/2} − t']),
  Q('For `λ = 1/2`, which of `μ = 1`, `μ = 0.9` keeps `D^{−μ} L_i^{λ}` inside the span of the powers `t^{kλ}`?','عند `λ = 1/2` أيّ القيمتين `μ = 1` و `μ = 0.9` تُبقي `D^{−μ} L_i^{λ}` داخل امتداد القوى `t^{kλ}`؟','μ = 1',
    ['μ/λ = 2 ∈ ℕ:   t^{kλ+μ} = t^{(k+2)λ}', ['With μ = 0.9, `μ/λ = 1.8` and `t^{kλ+0.9}` is not a power of `t^{1/2}`.','ومع μ = 0.9 يكون `μ/λ = 1.8` و `t^{kλ+0.9}` ليست قوة لـ `t^{1/2}`.']],
    ['μ = 0.9',['Both','كلتاهما'],['Neither','ولا واحدة']]),
]);

lesson('501',67,[
  ['Step 2 of Theorem 3.2 projects each power produced by the integral onto the basis. The coefficients are explicit, because the integrand is again a power:','الخطوة 2 في النظرية 3.2 تُسقط كل قوة ناتجة عن التكامل على الأساس. والمعاملات صريحة لأن الدالة المكامَلة قوة أيضاً:'],
  't^{kλ+μ} ≈ Σ_{j=0}^{M} c_{k,j} L_j^{λ}(t),   c_{k,j} = (2j + 1) Σ_{s=0}^{j} #f{E_{j,s}}{1 + k + s + μ/λ}',
  ['This is the only approximation in the theorem: the sum over j is cut at M. In the hand example of the paper, λ = 1/2 and μ = 3/2, so `μ/λ = 3` and `t^{3/2} = u^3` with `u = t^{1/2}`; its projections are `1/4` on `L_0` and `9/20` on `L_1`.',
   'وهذا التقريب الوحيد في النظرية: المجموع على j يُقطع عند M. وفي المثال اليدوي في البحث λ = 1/2 و μ = 3/2، فيكون `μ/λ = 3` و `t^{3/2} = u^3` مع `u = t^{1/2}`، وإسقاطاتها `1/4` على `L_0` و `9/20` على `L_1`.'],
],[
  Q('Compute `c_{0,1}` for λ = 1/2, μ = 3/2.','احسب `c_{0,1}` عند λ = 1/2 و μ = 3/2.','#f{9}{20}',
    ['μ/λ = 3:   c_{0,1} = 3(#f{E_{1,0}}{4} + #f{E_{1,1}}{5}) = 3(−#f{1}{4} + #f{2}{5})', '= 3·#f{3}{20} = #f{9}{20}'], ['#f{1}{4}','#f{3}{20}','#f{9}{10}']),
  Q('Compute `c_{1,0}` for λ = 1/2, μ = 3/2.','احسب `c_{1,0}` عند λ = 1/2 و μ = 3/2.','#f{1}{5}',
    ['c_{1,0} = #f{E_{0,0}}{1 + 1 + 0 + 3} = #f{1}{5}', ['It is the mean value of `u^4` on `[0, 1]`.','وهو متوسط `u^4` على `[0, 1]`.']], ['#f{1}{4}','#f{1}{6}','#f{2}{5}']),
  Q('Compute `c_{0,2}` for λ = 1/2, μ = 3/2.','احسب `c_{0,2}` عند λ = 1/2 و μ = 3/2.','#f{1}{4}',
    ['c_{0,2} = 5(#f{1}{4} − #f{6}{5} + #f{6}{6}) = 5·0.05 = #f{1}{4}', ['Indeed `u^3 = (1/4)L_0 + (9/20)L_1 + (1/4)L_2 + (1/20)L_3`, whose coefficients add up to 1.','وفعلاً `u^3 = (1/4)L_0 + (9/20)L_1 + (1/4)L_2 + (1/20)L_3` ومجموع معاملاتها 1.']],
    ['#f{1}{20}','#f{9}{20}','0']),
  Q('Why is no numerical quadrature needed for `c_{k,j}`?','لماذا لا يلزم تكامل عددي لحساب `c_{k,j}`؟',['The integrand is a sum of powers of t, integrated by `∫_0^1 λt^{a−1} dt = λ/a`','الدالة المكامَلة مجموع قوى لـ t، وتكاملها بالقاعدة `∫_0^1 λt^{a−1} dt = λ/a`'],
    ['∫_0^1 λt^{λ−1} t^{kλ+μ} t^{sλ} dt = #f{λ}{λ(1 + k + s) + μ} = #f{1}{1 + k + s + μ/λ}'],
    [['Because `c_{k,j}` are tabulated','لأن `c_{k,j}` مجدولة'],['Because the integral is always 1','لأن التكامل يساوي 1 دائماً']]),
]);

lesson('501',68,[
  ['Step 3 combines the two steps into the matrix of the fractional integral:','الخطوة 3 تجمع الخطوتين في مصفوفة التكامل الكسري:'],
  'D^{−μ} 𝔏_{M,λ}(t) ≃ I_{(−μ)} 𝔏_{M,λ}(t),   χ_{−μ}^{λ}(i, j) = Σ_{k=0}^{i} E_{i,k} #f{Γ(kλ + 1)}{Γ(kλ + μ + 1)} c_{k,j}',
  ['The relation is an approximation (the paper prints “=”), because each `c_{k,j}` was cut at M. For the paper’s hand example, M = 1, λ = 1/2 and μ = 3/2 give `I_{(−3/2)} ≈ (0.18806, 0.33851; −0.01082, 0.01598)`. The simplest check is the ordinary integral, λ = 1 and μ = 1.',
   'والعلاقة تقريب (يطبع البحث «=») لأن كل `c_{k,j}` قُطع عند M. وفي المثال اليدوي في البحث تعطي M = 1 و λ = 1/2 و μ = 3/2 المصفوفة `I_{(−3/2)} ≈ (0.18806, 0.33851; −0.01082, 0.01598)`. وأبسط تحقق هو التكامل العادي λ = 1 و μ = 1.'],
],[
  Q('For λ = 1, μ = 1 and M = 1, compute the first row `χ(0, 0)`, `χ(0, 1)`.','عند λ = 1 و μ = 1 و M = 1 احسب الصف الأول `χ(0, 0)` و `χ(0, 1)`.','χ(0, 0) = #f{1}{2},   χ(0, 1) = #f{1}{2}',
    ['μ/λ = 1:   c_{0,0} = #f{1}{2},   c_{0,1} = 3(−#f{1}{2} + #f{2}{3}) = #f{1}{2}', '#f{Γ(1)}{Γ(2)} = 1', ['So `∫_0^t L_0 = t = (L_0 + L_1)/2`, exactly as in Lesson 65.','إذن `∫_0^t L_0 = t = (L_0 + L_1)/2` كما في الدرس 65 تماماً.']],
    ['χ(0, 0) = 1,   χ(0, 1) = 0','χ(0, 0) = #f{1}{2},   χ(0, 1) = #f{1}{6}','χ(0, 0) = #f{1}{3},   χ(0, 1) = #f{1}{2}']),
  Q('For λ = 1, μ = 1 and M = 1, compute the second row `χ(1, 0)`, `χ(1, 1)`.','عند λ = 1 و μ = 1 و M = 1 احسب الصف الثاني `χ(1, 0)` و `χ(1, 1)`.','χ(1, 0) = −#f{1}{6},   χ(1, 1) = 0',
    ['c_{1,0} = #f{1}{3},   c_{1,1} = 3(−#f{1}{3} + #f{2}{4}) = #f{1}{2},   #f{Γ(2)}{Γ(3)} = #f{1}{2}', 'χ(1, 0) = −#f{1}{2} + 2·#f{1}{2}·#f{1}{3} = −#f{1}{6},   χ(1, 1) = −#f{1}{2} + 2·#f{1}{2}·#f{1}{2} = 0',
     ['The exact integral is `(L_2 − L_0)/6`; with M = 1 the term `L_2/6` is cut.','التكامل المضبوط `(L_2 − L_0)/6`، ومع M = 1 يُقطع الحد `L_2/6`.']],
    ['χ(1, 0) = #f{1}{6},   χ(1, 1) = 0','χ(1, 0) = −#f{1}{6},   χ(1, 1) = #f{1}{6}','χ(1, 0) = −#f{1}{2},   χ(1, 1) = #f{1}{2}']),
  Q('For λ = 1 and μ = 2, compute `χ(0, 0)` and interpret it.','عند λ = 1 و μ = 2 احسب `χ(0, 0)` وفسّره.','#f{1}{6}',
    ['μ/λ = 2:   c_{0,0} = #f{1}{3},   #f{Γ(1)}{Γ(3)} = #f{1}{2}', 'χ(0, 0) = #f{1}{6}', ['`D^{−2} 1 = t^2/2`, whose mean on `[0, 1]` is `1/6`.','`D^{−2} 1 = t^2/2` ومتوسطها على `[0, 1]` هو `1/6`.']],
    ['#f{1}{3}','#f{1}{2}','#f{1}{4}']),
  Q('Use the paper’s matrix to integrate `y = 3L_0^{1/2}` to order 3/2.','استخدم مصفوفة البحث لتكامل `y = 3L_0^{1/2}` من الرتبة 3/2.','D^{−3/2} y ≈ 0.5642 L_0 + 1.0155 L_1',
    ['(3, 0)·I_{(−3/2)} = 3·(0.18806, 0.33851) = (0.56418, 1.01553)', ['With `u = t^{1/2}` the exact result is `3u^3/Γ(5/2)`; the matrix keeps its first two components.','ومع `u = t^{1/2}` النتيجة المضبوطة `3u^3/Γ(5/2)`، والمصفوفة تحتفظ بمركبتيها الأوليين.']],
    ['D^{−3/2} y ≈ 0.1881 L_0 + 0.3385 L_1','D^{−3/2} y ≈ 3L_0 + 3L_1','D^{−3/2} y ≈ 0.5642 L_0 − 0.0325 L_1']),
]);

lesson('501',69,[
  ['When `q = μ/λ` is a whole number, `D^{−μ} L_i^{λ}` is a polynomial of degree i + q in `u = t^{λ}`, and its expansion stops by itself. So row i of `I_{(−μ)}` is exact whenever','إذا كان `q = μ/λ` عدداً صحيحاً كانت `D^{−μ} L_i^{λ}` كثيرة حدود من الدرجة i + q في `u = t^{λ}`، فيتوقف مفكوكها من تلقاء نفسه. إذن الصف i من `I_{(−μ)}` مضبوط متى كان'],
  'i + #f{μ}{λ} ≤ M',
  ['This is the matched case. Otherwise every row is truncated, but the error falls fast with M. The independent checks of the code-enhancement project found, for the integral of `L_2^{λ}` at t = 0.37: error 0 for μ = 3/2, λ = 1/2, and errors `8.0 × 10^{−6}, 8.5 × 10^{−10}` at M = 6, 12 for μ = 19/10, λ = 1/2.',
   'وهذه حالة التوافق. وإلا فكل الصفوف مقطوعة، لكن الخطأ يتناقص بسرعة مع M. ووجدت فحوص مشروع تحسين الكود المستقلة لتكامل `L_2^{λ}` عند t = 0.37: خطأ 0 عند μ = 3/2 و λ = 1/2، وأخطاء `8.0 × 10^{−6}` و `8.5 × 10^{−10}` عند M = 6 و 12 مع μ = 19/10 و λ = 1/2.'],
],[
  Q('For λ = 1/2, μ = 1 and M = 4, which rows of `I_{(−μ)}` are exact?','عند λ = 1/2 و μ = 1 و M = 4 أي صفوف `I_{(−μ)}` مضبوطة؟','i = 0, 1, 2',
    ['q = #f{1}{1/2} = 2:   i + 2 ≤ 4  ⇒  i ≤ 2'], ['i = 0, 1, 2, 3, 4','i = 0, 1',['None','لا شيء']]),
  Q('For λ = 1/3, μ = 2/3 and M = 3, which rows are exact?','عند λ = 1/3 و μ = 2/3 و M = 3 أي الصفوف مضبوطة؟','i = 0, 1',
    ['q = 2:   i ≤ 3 − 2 = 1'], ['i = 0, 1, 2','i = 0','i = 0, 1, 2, 3']),
  Q('For λ = 1/2 and μ = 0.9, which rows are exact for M = 10?','عند λ = 1/2 و μ = 0.9 أي الصفوف مضبوطة عند M = 10؟',['None: `μ/λ = 1.8` is not a whole number','لا شيء: `μ/λ = 1.8` ليس عدداً صحيحاً'],
    [['`t^{kλ+0.9}` is never a polynomial in `t^{1/2}`, so every projection is cut at M.','`t^{kλ+0.9}` ليست كثيرة حدود في `t^{1/2}` أبداً، فكل إسقاط مقطوع عند M.']],
    [['Rows 0 to 8','الصفوف من 0 إلى 8'],['All rows','كل الصفوف']]),
  Q('A problem has μ = 1.9. Which λ ≤ 1 makes the matrix exact in its first rows?','مسألة فيها μ = 1.9. أي λ ≤ 1 تجعل المصفوفة مضبوطة في صفوفها الأولى؟',['`λ = 1.9/q` with q a whole number, for example `λ = 0.1`','`λ = 1.9/q` حيث q عدد صحيح، مثل `λ = 0.1`'],
    ['#f{1.9}{λ} ∈ ℕ:   λ = 0.95, 0.475, …, 0.1, …', ['A small λ needs a large M before rows become exact: with λ = 1/10, q = 19 and only rows i ≤ M − 19 are exact. The choice of λ is a trade-off.','و λ الصغيرة تحتاج M كبيرة قبل أن تنضبط الصفوف: مع λ = 1/10 يكون q = 19 ولا تنضبط إلا الصفوف i ≤ M − 19. فاختيار λ موازنة.']],
    ['λ = 0.5','λ = 0.3','λ = 1']),
]);

lesson('501',70,[
  ['Nonlinear and variable-coefficient terms need products of basis functions. For Legendre polynomials the product is again a finite Legendre sum (Adams’ linearization formula):','الحدود غير الخطية وذات المعاملات المتغيرة تحتاج حواصل ضرب دوال الأساس. ولكثيرات ليجندر يكون حاصل الضرب مجموعاً منتهياً منها (صيغة آدامز للخطية):'],
  'P_m P_n = Σ_{k=0}^{min(m,n)} #f{2m + 2n − 4k + 1}{2m + 2n − 2k + 1}·#f{a_k a_{m−k} a_{n−k}}{a_{m+n−k}} P_{m+n−2k},   a_r = #f{(2r)!}{2^r (r!)^2}',
  ['The simplest case is multiplication by x, a tridiagonal matrix: `x P_n = [(n + 1)P_{n+1} + n P_{n−1}]/(2n + 1)`. Products of two expansions raise the degree, which is where aliasing (Lesson 50) enters.',
   'وأبسط حالة الضرب في x وهي مصفوفة ثلاثية القطر: `x P_n = [(n + 1)P_{n+1} + n P_{n−1}]/(2n + 1)`. وضرب مفكوكين يرفع الدرجة، ومن هنا يدخل التداخل (الدرس 50).'],
],[
  Q('Expand `P_1 P_2` in Legendre polynomials.','انشر `P_1 P_2` بدلالة كثيرات ليجندر.','P_1 P_2 = #f{2}{5}P_1 + #f{3}{5}P_3',
    ['P_1 P_2 = #f{3x^3 − x}{2} = #f{3}{2}(#f{3}{5}P_1 + #f{2}{5}P_3) − #f{1}{2}P_1', '= (#f{9}{10} − #f{1}{2})P_1 + #f{3}{5}P_3 = #f{2}{5}P_1 + #f{3}{5}P_3'],
    ['P_1 P_2 = #f{3}{5}P_1 + #f{2}{5}P_3','P_1 P_2 = P_3','P_1 P_2 = #f{2}{5}P_1 + #f{3}{5}P_2']),
  Q('Expand `P_2^2` in Legendre polynomials.','انشر `P_2^2` بدلالة كثيرات ليجندر.','P_2^2 = #f{1}{5}P_0 + #f{2}{7}P_2 + #f{18}{35}P_4',
    ['k = 0:  #f{9}{9}·#f{a_0 a_2 a_2}{a_4} = #f{(3/2)^2}{35/8} = #f{18}{35}', 'k = 1:  #f{5}{7}·#f{a_1 a_1 a_1}{a_3} = #f{5}{7}·#f{1}{5/2} = #f{2}{7},   k = 2:  #f{1}{5}', ['Check at x = 1: `1/5 + 2/7 + 18/35 = 1`.','تحقق عند x = 1: `1/5 + 2/7 + 18/35 = 1`.']],
    ['P_2^2 = #f{1}{5}P_0 + #f{4}{7}P_2 + #f{8}{35}P_4','P_2^2 = P_4','P_2^2 = #f{2}{5}P_0 + #f{2}{7}P_2 + #f{11}{35}P_4']),
  Q('Use `x P_n = [(n + 1)P_{n+1} + nP_{n−1}]/(2n + 1)` to expand `x P_2`.','استخدم `x P_n = [(n + 1)P_{n+1} + nP_{n−1}]/(2n + 1)` لنشر `x P_2`.','x P_2 = #f{3}{5}P_3 + #f{2}{5}P_1',
    ['n = 2:   #f{3P_3 + 2P_1}{5}', ['The same as `P_1 P_2`, since `P_1 = x`.','وهو نفسه `P_1 P_2` لأن `P_1 = x`.']],
    ['x P_2 = #f{2}{5}P_3 + #f{3}{5}P_1','x P_2 = P_3','x P_2 = #f{3}{5}P_3 − #f{2}{5}P_1']),
  Q('What is the degree of `u^2` when `u = Σ_{n=0}^{N} c_n P_n`, and how many Legendre terms does it need?','ما درجة `u^2` إذا كانت `u = Σ_{n=0}^{N} c_n P_n`، وكم حداً من ليجندر تحتاج؟',['Degree 2N, so 2N + 1 terms','الدرجة 2N، أي 2N + 1 حداً'],
    [['Each product `P_m P_n` reaches `P_{m+n}`, so `u^2` reaches `P_{2N}`.','كل حاصل ضرب `P_m P_n` يصل إلى `P_{m+n}`، فتصل `u^2` إلى `P_{2N}`.'], ['A method that keeps N + 1 terms must truncate, or use enough points to avoid aliasing.','والطريقة التي تحتفظ بـ N + 1 حداً يجب أن تقطع أو تستخدم نقاطاً كافية لمنع التداخل.']],
    [['Degree N, so N + 1 terms','الدرجة N، أي N + 1 حداً'],['Degree `N^2`, so `N^2 + 1` terms','الدرجة `N^2`، أي `N^2 + 1` حداً'],['Degree 2N, but N + 1 terms','الدرجة 2N لكن N + 1 حداً']]),
]);

/* ---- 501 · Unit 8 (lessons 71–80): the three classical methods ---- */
lesson('501',71,[
  ['The Galerkin method looks for `u_N` in a space `V_N` of functions that satisfy the boundary conditions, and makes the residual orthogonal to every function of the space. For `−u″ = f`, `u(±1) = 0`, integrating by parts gives the weak form:',
   'طريقة جاليركن تبحث عن `u_N` في فضاء `V_N` من دوال تحقق الشروط الحدية، وتجعل الباقي عمودياً على كل دالة في الفضاء. ولـ `−u″ = f` و `u(±1) = 0` يعطي التكامل بالتجزئة الصيغة الضعيفة:'],
  '(u_N′, φ_j′) = (f, φ_j),   j = 0, …, N − 2,   u_N = Σ_k a_k φ_k',
  ['In matrix form `A a = b` with the stiffness matrix `A_{jk} = (φ_k′, φ_j′)`, symmetric and positive definite, and the load vector `b_j = (f, φ_j)`. The error is orthogonal to the space in the energy product: the approximation is the best one in that norm.',
   'وبصيغة المصفوفات `A a = b` حيث مصفوفة الجساءة `A_{jk} = (φ_k′, φ_j′)` متماثلة موجبة التعريف، ومتجه الحمل `b_j = (f, φ_j)`. والخطأ عمودي على الفضاء في ضرب الطاقة، فالتقريب هو الأفضل في ذلك المعيار.'],
],[
  Q('Solve `−u″ = 1`, `u(±1) = 0` by Galerkin with one function `φ = 1 − x^2`.','حل `−u″ = 1` و `u(±1) = 0` بطريقة جاليركن بدالة واحدة `φ = 1 − x^2`.','u = #f{1 − x^2}{2}',
    ['A = ∫_{−1}^{1} (−2x)^2 dx = #f{8}{3},   b = ∫_{−1}^{1} (1 − x^2) dx = #f{4}{3}', 'a = #f{b}{A} = #f{1}{2}', ['It is the exact solution, because the solution lies in the space.','وهو الحل المضبوط لأن الحل يقع في الفضاء.']],
    ['u = 1 − x^2','u = #f{1 − x^2}{4}','u = #f{1 − x^2}{3}']),
  Q('Repeat for `−u″ = x^2` and compare `u_N(0)` with the exact `u(0) = 1/12`.','أعد الحل لـ `−u″ = x^2` وقارن `u_N(0)` بالقيمة المضبوطة `u(0) = 1/12`.','u_N = #f{1 − x^2}{10};   u_N(0) = 0.1',
    ['b = ∫_{−1}^{1} x^2(1 − x^2) dx = #f{2}{3} − #f{2}{5} = #f{4}{15}', 'a = #f{4/15}{8/3} = #f{1}{10}', ['The exact solution is `(1 − x^4)/12`, so `u(0) = 0.0833`: one function gives the right size.','الحل المضبوط `(1 − x^4)/12` فيكون `u(0) = 0.0833`: دالة واحدة تعطي الحجم الصحيح.']],
    ['u_N = #f{1 − x^2}{12};   u_N(0) = 0.0833','u_N = #f{1 − x^2}{6};   u_N(0) = 0.1667','u_N = #f{1 − x^2}{15};   u_N(0) = 0.0667']),
  Q('Why is the Galerkin stiffness matrix for `−u″` symmetric?','لماذا مصفوفة الجساءة في جاليركن لـ `−u″` متماثلة؟',['Because `A_{jk} = (φ_k′, φ_j′) = (φ_j′, φ_k′) = A_{kj}`','لأن `A_{jk} = (φ_k′, φ_j′) = (φ_j′, φ_k′) = A_{kj}`'],
    [['The same functions are used as trial and test functions, and the weak form is symmetric in them.','الدوال نفسها تُستخدم دوال تجربة واختبار، والصيغة الضعيفة متماثلة فيها.']],
    [['Because the nodes are symmetric','لأن العقد متماثلة'],['It is not symmetric in general','ليست متماثلة في العموم']]),
  Q('What does Galerkin orthogonality say about the error `e = u − u_N` for `−u″ = f`?','ماذا تقول متعامدة جاليركن عن الخطأ `e = u − u_N` في `−u″ = f`؟','(e′, φ_j′) = 0,   φ_j ∈ V_N',
    ['(u′, φ_j′) = (f, φ_j) = (u_N′, φ_j′)  ⇒  (e′, φ_j′) = 0', ['So `u_N` is the best approximation of u in the energy norm `‖v′‖`.','إذن `u_N` أفضل تقريب لـ u في معيار الطاقة `‖v′‖`.']],
    ['e = 0','(e, 1) = 0','e(0) = 0']),
]);

lesson('501',72,[
  ['A clever basis makes the Galerkin matrices sparse. Shen’s basis combines two Legendre polynomials so that both boundary conditions hold automatically:','الأساس الذكي يجعل مصفوفات جاليركن قليلة العناصر. أساس شين يجمع كثيرتي ليجندر بحيث يتحقق الشرطان الحديان تلقائياً:'],
  'φ_k = P_k − P_{k+2},   φ_k(1) = 1 − 1 = 0,   φ_k(−1) = (−1)^k − (−1)^{k+2} = 0',
  ['Its derivative is a single Legendre polynomial, from `P_{k+2}′ − P_k′ = (2k + 3)P_{k+1}`:','ومشتقته كثيرة ليجندر واحدة، من `P_{k+2}′ − P_k′ = (2k + 3)P_{k+1}`:'],
  'φ_k′ = −(2k + 3) P_{k+1}',
],[
  Q('Write `φ_0 = P_0 − P_2` explicitly.','اكتب `φ_0 = P_0 − P_2` صراحة.','φ_0 = #f{3}{2}(1 − x^2)',
    ['1 − #f{3x^2 − 1}{2} = #f{3 − 3x^2}{2}'], ['φ_0 = 1 − x^2','φ_0 = #f{3}{2}(1 + x^2)','φ_0 = #f{1}{2}(1 − x^2)']),
  Q('Write `φ_1 = P_1 − P_3` explicitly.','اكتب `φ_1 = P_1 − P_3` صراحة.','φ_1 = #f{5}{2}(x − x^3)',
    ['x − #f{5x^3 − 3x}{2} = #f{5x − 5x^3}{2}'], ['φ_1 = x − x^3','φ_1 = #f{5}{2}(x^3 − x)','φ_1 = #f{3}{2}(x − x^3)']),
  Q('Check `φ_1′ = −5P_2`.','تحقق من `φ_1′ = −5P_2`.','φ_1′ = #f{5 − 15x^2}{2}',
    ['#f{d}{dx}·#f{5}{2}(x − x^3) = #f{5}{2}(1 − 3x^2)', '−5P_2 = −5·#f{3x^2 − 1}{2} = #f{5 − 15x^2}{2}'],
    ['φ_1′ = #f{15x^2 − 5}{2}','φ_1′ = 5 − 15x^2','φ_1′ = −5x']),
  Q('How many functions `φ_k` span the polynomials of degree ≤ N that vanish at ±1?','كم دالة `φ_k` تولّد كثيرات الحدود ذات الدرجة ≤ N التي تنعدم عند ±1؟','N − 1',
    ['φ_0, …, φ_{N−2}', ['Polynomials of degree ≤ N form a space of dimension N + 1, and the two conditions remove 2.','كثيرات الحدود ذات الدرجة ≤ N فضاء بُعده N + 1، والشرطان يحذفان 2.']],
    ['N + 1','N','N − 2']),
]);

lesson('501',73,[
  ['With Shen’s basis the stiffness matrix of `−u″` is diagonal:','مع أساس شين تكون مصفوفة الجساءة لـ `−u″` قطرية:'],
  '(φ_k′, φ_j′) = (2k + 3)(2j + 3)(P_{k+1}, P_{j+1}) = (4k + 6) δ_{jk}',
  ['So the system is solved by division: `a_k = b_k/(4k + 6)`. The load is `b_k = (f, φ_k) = (f, P_k) − (f, P_{k+2})`, which comes from the Legendre coefficients of f. The method costs `O(N)` once the coefficients of f are known.',
   'فيُحل النظام بالقسمة: `a_k = b_k/(4k + 6)`. والحمل `b_k = (f, φ_k) = (f, P_k) − (f, P_{k+2})` يأتي من معاملات ليجندر لـ f. وتكلفة الطريقة `O(N)` بعد معرفة معاملات f.'],
],[
  Q('Find `A_00` and `A_11`.','أوجد `A_00` و `A_11`.','A_00 = 6,   A_11 = 10',
    ['4k + 6:   k = 0 → 6,   k = 1 → 10', ['Directly: `∫ (3P_1)^2 = 9·2/3 = 6`.','مباشرة: `∫ (3P_1)^2 = 9·2/3 = 6`.']], ['A_00 = 3,   A_11 = 5','A_00 = 2,   A_11 = #f{2}{3}','A_00 = 6,   A_11 = 6']),
  Q('Solve `−u″ = 1`, `u(±1) = 0` with Shen’s basis.','حل `−u″ = 1` و `u(±1) = 0` بأساس شين.','u = #f{1}{3}φ_0 = #f{1 − x^2}{2}',
    ['b_k = (1, P_k − P_{k+2}) = 2δ_{k0}', 'a_0 = #f{2}{6} = #f{1}{3},   a_k = 0 (k ≥ 1)', 'u = #f{1}{3}·#f{3}{2}(1 − x^2) = #f{1 − x^2}{2}'],
    ['u = #f{1}{6}φ_0','u = 2φ_0','u = #f{1}{3}φ_0 + #f{1}{3}φ_1']),
  Q('Solve `−u″ = x`, `u(±1) = 0` with Shen’s basis.','حل `−u″ = x` و `u(±1) = 0` بأساس شين.','u = #f{1}{15}φ_1 = #f{x − x^3}{6}',
    ['b_1 = (x, P_1 − P_3) = #f{2}{3},   b_k = 0  (k ≠ 1)', 'a_1 = #f{2/3}{10} = #f{1}{15}', 'u = #f{1}{15}·#f{5}{2}(x − x^3) = #f{x − x^3}{6}', ['This is the exact solution.','وهذا هو الحل المضبوط.']],
    ['u = #f{1}{10}φ_1','u = #f{2}{3}φ_1','u = #f{1}{15}φ_0']),
  Q('Find the condition number of the stiffness matrix for N = 10 (k = 0, …, 8).','أوجد عدد الشرط لمصفوفة الجساءة عند N = 10 (k = 0, …, 8).','#f{38}{6} ≈ 6.33',
    ['κ = #f{max(4k + 6)}{min(4k + 6)} = #f{4·8 + 6}{6} = #f{38}{6}', ['It grows only like N, far better than collocation.','ينمو مثل N فقط، وهذا أفضل بكثير من التجميع.']],
    ['10','#f{46}{6} ≈ 7.67','10^4']),
]);

lesson('501',74,[
  ['The Tau method expands `u_N = Σ_{k=0}^{N} a_k P_k` without building the boundary conditions into the basis. It requires the residual to be orthogonal to the first N − 1 polynomials and adds the boundary conditions as rows:','طريقة تاو تنشر `u_N = Σ_{k=0}^{N} a_k P_k` دون إدخال الشروط الحدية في الأساس. وتشترط تعامد الباقي مع أول N − 1 كثيرة حدود، وتضيف الشروط الحدية صفوفاً:'],
  '(𝓛u_N − f, P_j) = 0,   j = 0, …, N − 2;     Σ_k a_k = u(1),   Σ_k (−1)^k a_k = u(−1)',
  ['That is N + 1 equations for N + 1 coefficients. The boundary rows use `P_k(±1) = (±1)^k`. Tau is natural when the operator acts simply on coefficients, for example constant-coefficient equations with the operational matrices.',
   'وهذه N + 1 معادلة لـ N + 1 معاملاً. وصفوف الحدود تستخدم `P_k(±1) = (±1)^k`. وطريقة تاو طبيعية حين يعمل المؤثر ببساطة على المعاملات، مثل المعادلات ثابتة المعاملات مع المصفوفات التشغيلية.'],
],[
  Q('Solve `−u″ = 1`, `u(±1) = 0` by the Tau method with N = 2.','حل `−u″ = 1` و `u(±1) = 0` بطريقة تاو عند N = 2.','u = #f{1}{3} − #f{1}{3}P_2 = #f{1 − x^2}{2}',
    ['u_N″ = 3a_2:   (−3a_2 − 1, P_0) = 0  ⇒  a_2 = −#f{1}{3}', 'a_0 + a_1 + a_2 = 0,   a_0 − a_1 + a_2 = 0  ⇒  a_1 = 0,   a_0 = #f{1}{3}'],
    ['u = #f{1}{3} + #f{1}{3}P_2','u = −#f{1}{3}P_2','u = #f{1}{2} − #f{1}{2}P_2']),
  Q('Write the boundary rows for `u(1) = 2`, `u(−1) = 0` with N = 1, and solve them.','اكتب صفوف الحدود للشرطين `u(1) = 2` و `u(−1) = 0` عند N = 1 وحلّها.','a_0 = 1,   a_1 = 1:   u = 1 + x',
    ['a_0 + a_1 = 2,   a_0 − a_1 = 0', 'a_0 = a_1 = 1'], ['a_0 = 2,   a_1 = 0','a_0 = 1,   a_1 = −1','a_0 = 0,   a_1 = 2']),
  Q('For a second-order problem with N = 10, how many residual equations and boundary rows does Tau use?','لمسألة من الرتبة الثانية عند N = 10، كم معادلة باقٍ وكم صف حدود تستخدم تاو؟','9 + 2 = 11',
    [['Residual equations for `j = 0, …, N − 2`: 9 of them; and 2 boundary rows.','معادلات الباقي لـ `j = 0, …, N − 2` وعددها 9، وصفّا حدود.'], ['Together they match the 11 coefficients `a_0, …, a_10`.','ومعاً تطابق المعاملات الأحد عشر `a_0, …, a_10`.']],
    ['11 + 2 = 13','10 + 1 = 11','8 + 2 = 10']),
  Q('In the Tau method, which coefficients of the residual are not forced to vanish?','في طريقة تاو، أي معاملات الباقي لا يُفرض انعدامها؟',['The coefficients of `P_{N−1}` and `P_N`','معاملا `P_{N−1}` و `P_N`'],
    [['Only the projections on `P_0, …, P_{N−2}` are set to 0; the last two are free, and the boundary rows take their place.','لا يُجعل صفراً إلا الإسقاطات على `P_0, …, P_{N−2}`، والأخيرتان حرتان وتحل محلهما صفوف الحدود.']],
    [['The coefficients of `P_0` and `P_1`','معاملا `P_0` و `P_1`'],['All of them vanish','كلها تنعدم'],['The coefficients of `P_N` and `P_{N+1}`','معاملا `P_N` و `P_{N+1}`']]),
]);

lesson('501',75,[
  ['Lanczos’ view of the Tau method: the approximation `u_N` is the exact solution of a slightly perturbed problem,','نظرة لانتشوس إلى طريقة تاو: التقريب `u_N` هو الحل المضبوط لمسألة مضطربة قليلاً،'],
  '𝓛u_N = f + τ_{N−1} P_{N−1} + τ_N P_N',
  ['The added terms are small multiples of high-degree polynomials, so the error depends on the size of the τ’s. On `[0, 1]` the same idea uses the shifted polynomials. For `y′ − y = 0`, `y(0) = 1` with a polynomial of degree N, one tau term `τ P_N^*(t)` is enough.',
   'والحدود المضافة مضاعفات صغيرة لكثيرات عالية الدرجة، فيعتمد الخطأ على حجم τ. وعلى `[0, 1]` تستخدم الفكرة نفسها الكثيرات المزاحة. ولـ `y′ − y = 0` و `y(0) = 1` بكثيرة حدود من الدرجة N يكفي حد تاو واحد `τ P_N^*(t)`.'],
],[
  Q('For `y′ − y = 0`, `y(0) = 1`, put `y_1 = 1 + at` and require `y_1′ − y_1 = τ P_1^*(t)`. Find a and τ.','للمسألة `y′ − y = 0` و `y(0) = 1` ضع `y_1 = 1 + at` واشترط `y_1′ − y_1 = τ P_1^*(t)`. أوجد a و τ.','a = 2,   τ = −1',
    ['a − 1 − at = τ(2t − 1)', 't:  −a = 2τ,     1:  a − 1 = −τ  ⇒  a = 2,   τ = −1'],
    ['a = 1,   τ = 0','a = 2,   τ = 1','a = #f{1}{2},   τ = −#f{1}{4}']),
  Q('With `y_1 = 1 + 2t`, compare `y_1(1)` with e.','مع `y_1 = 1 + 2t` قارن `y_1(1)` بالعدد e.','y_1(1) = 3,   |3 − e| ≈ 0.28',
    ['y_1(1) = 3,   e ≈ 2.7183'], ['y_1(1) = 2,   |2 − e| ≈ 0.72','y_1(1) = e','y_1(1) = 3,   |3 − e| ≈ 0.03']),
  Q('Repeat with `y_2 = 1 + at + bt^2` and `y_2′ − y_2 = τ P_2^*(t)`, `P_2^* = 6t^2 − 6t + 1`. Find `y_2(1)`.','أعد الحل مع `y_2 = 1 + at + bt^2` و `y_2′ − y_2 = τ P_2^*(t)` حيث `P_2^* = 6t^2 − 6t + 1`. أوجد `y_2(1)`.','y_2(1) = #f{19}{7} ≈ 2.7143',
    ['t^2:  −b = 6τ,     t:  2b − a = −6τ = b  ⇒  a = b,     1:  a − 1 = τ', '−a = 6(a − 1)  ⇒  a = b = #f{6}{7},   τ = −#f{1}{7}', 'y_2(1) = 1 + #f{12}{7} = #f{19}{7}',
     ['The error is now 0.004: the tau term fell from 1 to 1/7.','الخطأ الآن 0.004: حد تاو انخفض من 1 إلى 1/7.']],
    ['y_2(1) = #f{5}{2} = 2.5','y_2(1) = 3','y_2(1) = #f{8}{3} ≈ 2.6667']),
  Q('For `−u″ = 1`, `u(±1) = 0` with N = 2, what are the tau terms?','للمسألة `−u″ = 1` و `u(±1) = 0` عند N = 2 ما حدود تاو؟','τ_1 = τ_2 = 0',
    [['The Tau solution `(1 − x^2)/2` is exact, so the equation holds without any perturbation.','حل تاو `(1 − x^2)/2` مضبوط فتتحقق المعادلة دون أي اضطراب.']],
    ['τ_1 = 0,   τ_2 = 1','τ_1 = 1,   τ_2 = 0','τ_1 = τ_2 = −#f{1}{3}']),
]);

lesson('501',76,[
  ['Collocation (pseudo-spectral) asks the residual to vanish exactly at chosen points, usually the interior Gauss–Lobatto points, and imposes the boundary conditions at the ends:','التجميع (الطريقة شبه الطيفية) يطلب انعدام الباقي تماماً عند نقاط مختارة، عادةً نقاط جاوس–لوباتو الداخلية، ويفرض الشروط الحدية عند الطرفين:'],
  '𝓛u_N(x_i) = f(x_i),   i = 1, …, N − 1;     u_N(x_0) = u(−1),   u_N(x_N) = u(1)',
  ['With the differentiation matrices of Unit 5 this is simply `D^{(2)} u = f` at the interior rows, with the first and last rows replaced by the boundary conditions. It needs only values of f, never integrals.',
   'ومع مصفوفات التفاضل في الوحدة 5 يصبح ببساطة `D^{(2)} u = f` في الصفوف الداخلية، مع استبدال الصفين الأول والأخير بالشروط الحدية. ولا يحتاج إلا قيم f دون أي تكاملات.'],
],[
  Q('Solve `u″ = 2`, `u(±1) = 0` by collocation at x = 0 with `u_N = a(1 − x^2)`.','حل `u″ = 2` و `u(±1) = 0` بالتجميع عند x = 0 مع `u_N = a(1 − x^2)`.','u_N = x^2 − 1',
    ['u_N″ = −2a = 2  ⇒  a = −1'], ['u_N = 1 − x^2','u_N = 2(x^2 − 1)','u_N = #f{x^2 − 1}{2}']),
  Q('Solve `u″ = 6x`, `u(±1) = 0` by collocation at `x = ±1/2` with `u_N = (1 − x^2)(a + bx)`.','حل `u″ = 6x` و `u(±1) = 0` بالتجميع عند `x = ±1/2` مع `u_N = (1 − x^2)(a + bx)`.','a = 0,   b = −1:   u_N = x^3 − x',
    ['u_N″ = −2a − 6bx', 'x = #f{1}{2}:  −2a − 3b = 3,     x = −#f{1}{2}:  −2a + 3b = −3', 'a = 0,   b = −1', ['This is the exact solution.','وهذا هو الحل المضبوط.']],
    ['a = 0,   b = 1:   u_N = x − x^3','a = 1,   b = 0:   u_N = 1 − x^2','a = −1,   b = −1']),
  Q('Use the three-point matrices (nodes −1, 0, 1) to solve `u″ − u = 0`, `u(±1) = 1`. Compare with `1/cosh 1`.','استخدم مصفوفات النقاط الثلاث (العقد −1 و 0 و 1) لحل `u″ − u = 0` و `u(±1) = 1`. قارن بـ `1/cosh 1`.','u(0) = #f{2}{3} ≈ 0.6667',
    ['(D^{(2)} u)_0 = u_{−1} − 2u_0 + u_1 = 2 − 2u_0', '2 − 2u_0 − u_0 = 0  ⇒  u_0 = #f{2}{3}', ['Exact: `cosh 0/cosh 1 = 0.6481`. More points converge quickly.','المضبوط: `cosh 0/cosh 1 = 0.6481`، والنقاط الأكثر تتقارب بسرعة.']],
    ['u(0) = 1','u(0) = #f{1}{2}','u(0) = 0.6481']),
  Q('With N = 8, how many collocation equations and boundary equations are there for a second-order problem?','عند N = 8 كم معادلة تجميع وكم معادلة حدية لمسألة من الرتبة الثانية؟','7 + 2 = 9',
    [['The interior points `x_1, …, x_7` and the two ends.','النقاط الداخلية `x_1, …, x_7` والطرفان.'], ['They match the 9 nodal values.','وتطابق القيم العقدية التسع.']],
    ['9 + 2 = 11','8 + 2 = 10','6 + 2 = 8']),
]);

lesson('501',77,[
  ['Collocation handles variable coefficients and nonlinear terms point by point. On nodal values a coefficient `a(x)` becomes a diagonal matrix, and a nonlinear term is evaluated pointwise:','التجميع يعالج المعاملات المتغيرة والحدود غير الخطية نقطةً نقطة. فعلى القيم العقدية يصبح المعامل `a(x)` مصفوفة قطرية، والحد غير الخطي يُحسب نقطةً نقطة:'],
  'a(x)u″ + b(x)u  →  diag(a(x_i)) D^{(2)} u + diag(b(x_i)) u,     u^2  →  (u_i^2)',
  ['A nonlinear system `F(u) = 0` is solved by Newton’s method; for `u″ = g(u)` the Jacobian is `D^{(2)} − diag(g′(u_i))`. Galerkin and Tau would need the integrals of such terms, which is why collocation is the method of choice for them.',
   'ويُحل النظام غير الخطي `F(u) = 0` بطريقة نيوتن، ولـ `u″ = g(u)` يكون جاكوبي النظام `D^{(2)} − diag(g′(u_i))`. أما جاليركن وتاو فيحتاجان تكاملات هذه الحدود، ولهذا يُفضَّل التجميع معها.'],
],[
  Q('Write the collocation equation of `u″ + xu = 1` at an interior node `x_i`.','اكتب معادلة التجميع لـ `u″ + xu = 1` عند عقدة داخلية `x_i`.','Σ_j D^{(2)}_{ij} u_j + x_i u_i = 1',
    [['The second derivative becomes a row of `D^{(2)}`; the coefficient x is just its value at the node.','المشتقة الثانية صف من `D^{(2)}` والمعامل x قيمته عند العقدة.']],
    ['Σ_j D^{(2)}_{ij} u_j + Σ_j x_j u_j = 1','Σ_j D^{(2)}_{ij} x_j u_j = 1','D^{(2)}_{ii} u_i + x_i u_i = 1']),
  Q('Write the Newton Jacobian for the collocation system of `u″ = u^2`.','اكتب جاكوبي نيوتن لنظام التجميع لـ `u″ = u^2`.','J = D^{(2)} − 2 diag(u_i)',
    ['F(u) = D^{(2)} u − (u_i^2)', '#f{∂F_i}{∂u_j} = D^{(2)}_{ij} − 2u_i δ_{ij}'], ['J = D^{(2)} − diag(u_i^2)','J = D^{(2)} − 2u','J = D^{(2)}']),
  Q('With the nodes −1, 0, 1 and `u(±1) = 0`, solve `u″ + (1 + x^2) = 0`.','مع العقد −1 و 0 و 1 و `u(±1) = 0` حل `u″ + (1 + x^2) = 0`.','u(0) = #f{1}{2}',
    ['(D^{(2)}u)_0 + 1 = 0  ⇒  −2u_0 + 1 = 0', 'u_0 = #f{1}{2}', ['The exact value is `u(0) = 7/12 ≈ 0.583`; three points give a first estimate.','القيمة المضبوطة `u(0) = 7/12 ≈ 0.583`، وثلاث نقاط تعطي تقديراً أولياً.']],
    ['u(0) = 1','u(0) = #f{7}{12}','u(0) = −#f{1}{2}']),
  Q('Why is a variable coefficient harder for Galerkin than for collocation?','لماذا يصعب المعامل المتغير على جاليركن أكثر من التجميع؟',['Galerkin needs the integrals `(a φ_k′, φ_j′)`, which fill the matrix; collocation only multiplies by `a(x_i)`','جاليركن يحتاج التكاملات `(a φ_k′, φ_j′)` التي تملأ المصفوفة، أما التجميع فيضرب في `a(x_i)` فقط'],
    [['The diagonal structure of Shen’s basis is lost as soon as `a(x)` is not constant.','تضيع البنية القطرية لأساس شين بمجرد أن يكون `a(x)` غير ثابت.']],
    [['It is not harder','ليس أصعب'],['Because collocation uses fewer points','لأن التجميع يستخدم نقاطاً أقل']]),
]);

lesson('501',78,[
  ['Spectral accuracy is useless if the linear system loses the digits. The condition numbers for `−u″` grow very differently:','الدقة الطيفية لا تنفع إذا أضاع النظام الخطي الأرقام. وأعداد الشرط لـ `−u″` تنمو بطرق مختلفة جداً:'],
  ['Galerkin with Shen’s basis: `κ ~ N`.   Tau: `κ ~ N^4`.   Collocation: `κ ~ N^4`.','جاليركن مع أساس شين: `κ ~ N`.   تاو: `κ ~ N^4`.   التجميع: `κ ~ N^4`.'],
  ['In double precision about `log_{10} κ` digits are lost. With N = 100, collocation has `κ ≈ 10^8` and keeps about 8 digits, while Galerkin keeps almost all. Preconditioning (for example by a finite-difference matrix) or a well-chosen basis restores the accuracy.',
   'وفي الدقة المضاعفة يضيع نحو `log_{10} κ` رقماً. فعند N = 100 يكون للتجميع `κ ≈ 10^8` فيبقى نحو 8 أرقام، بينما يحتفظ جاليركن بأغلبها. والتكييف المسبق (مثلاً بمصفوفة فروق منتهية) أو الأساس المختار جيداً يعيد الدقة.'],
],[
  Q('Compute the Galerkin condition number `(4N − 2)/6` for N = 10.','احسب عدد الشرط في جاليركن `(4N − 2)/6` عند N = 10.','#f{38}{6} ≈ 6.33',
    ['#f{4·10 − 2}{6} = #f{38}{6}'], ['#f{46}{6} ≈ 7.67','10^4','10']),
  Q('By what factor does the collocation condition number grow when N is doubled?','بأي عامل يكبر عدد شرط التجميع عند مضاعفة N؟','16',
    ['κ ~ N^4  ⇒  2^4 = 16'], ['2','4','8']),
  Q('A system has `κ = 10^{10}`. About how many correct digits remain in double precision?','نظام فيه `κ = 10^{10}`. كم رقماً صحيحاً يبقى تقريباً في الدقة المضاعفة؟','≈ 6',
    ['16 − log_{10} κ = 16 − 10 = 6'], ['≈ 10','≈ 16','≈ 1']),
  Q('Why is the Galerkin matrix with Shen’s basis so well conditioned?','لماذا مصفوفة جاليركن مع أساس شين جيدة الشرط إلى هذا الحد؟',['It is diagonal with entries 4k + 6, so `κ` is the ratio of the largest to the smallest entry','لأنها قطرية بعناصر 4k + 6، فـ `κ` نسبة أكبر عنصر إلى أصغرها'],
    ['κ = #f{4(N − 2) + 6}{6} = #f{4N − 2}{6}'],
    [['Because N is small','لأن N صغير'],['Because the nodes are equally spaced','لأن العقد متساوية التباعد']]),
]);

lesson('501',79,[
  ['All three methods converge at the same spectral rate for smooth problems; they differ in cost, structure and convenience:','الطرق الثلاث تتقارب بالمعدل الطيفي نفسه للمسائل الملساء، وتختلف في التكلفة والبنية والسهولة:'],
  ['Galerkin: symmetric, often sparse or diagonal, best conditioned, but needs integrals. Tau: works on coefficients, simple for constant coefficients and operational matrices. Collocation: needs only point values, the easiest for variable coefficients and nonlinear terms, but its matrices are dense and ill-conditioned.',
   'جاليركن: متماثلة وغالباً قليلة العناصر أو قطرية وأفضل شرطاً، لكنها تحتاج تكاملات. تاو: تعمل على المعاملات وبسيطة للمعاملات الثابتة والمصفوفات التشغيلية. التجميع: يحتاج قيم النقاط فقط وهو الأسهل للمعاملات المتغيرة والحدود غير الخطية، لكن مصفوفاته ممتلئة ورديئة الشرط.'],
  ['The paper combines them: operational matrices (a Tau-like treatment of the operators) with collocation at the roots of the basis functions.','والبحث يجمع بينها: مصفوفات تشغيلية (معالجة شبيهة بتاو للمؤثرات) مع التجميع عند جذور الدوال الأساسية.'],
],[
  Q('Which method suits `u″ = e^u` best?','أي الطرق أنسب لـ `u″ = e^u`؟',['Collocation','التجميع'],
    [['The nonlinear term is evaluated at the nodes, and Newton’s method needs only `diag(e^{u_i})`.','الحد غير الخطي يُحسب عند العقد، ونيوتن يحتاج `diag(e^{u_i})` فقط.']],
    [['Galerkin','جاليركن'],['Tau','تاو']]),
  Q('Which method gives a diagonal matrix for `−u″ = f`?','أي الطرق تعطي مصفوفة قطرية لـ `−u″ = f`؟',['Galerkin with Shen’s basis','جاليركن مع أساس شين'],
    ['(φ_k′, φ_j′) = (4k + 6)δ_{jk}'], [['Collocation at Lobatto points','التجميع عند نقاط لوباتو'],['Tau with Legendre polynomials','تاو مع كثيرات ليجندر']]),
  Q('For `−u″ = 1`, `u(±1) = 0` with N = 2, which methods give the exact solution?','للمسألة `−u″ = 1` و `u(±1) = 0` عند N = 2، أي الطرق تعطي الحل المضبوط؟',['All three','الثلاث كلها'],
    [['The exact solution `(1 − x^2)/2` lies in the space, and each method reproduces any solution in its space.','الحل المضبوط `(1 − x^2)/2` يقع في الفضاء، وكل طريقة تعيد إنتاج أي حل في فضائها.']],
    [['Only Galerkin','جاليركن فقط'],['Only collocation','التجميع فقط']]),
  Q('Which ingredient of the paper’s method is Tau-like and which is collocation?','أي مكوّن في طريقة البحث شبيه بتاو وأيها تجميع؟',['The operational matrices act on the coefficient matrix 𝒴 (Tau-like); the residual is set to zero at the roots of the basis (collocation)','المصفوفات التشغيلية تعمل على مصفوفة المعاملات 𝒴 (شبيه بتاو)، والباقي يُجعل صفراً عند جذور الأساس (تجميع)'],
    [['Operators become matrix products on 𝒴; the equations come from points.','المؤثرات تصبح ضرب مصفوفات على 𝒴، والمعادلات تأتي من النقاط.']],
    [['Both are Galerkin','كلاهما جاليركن'],['Neither: it is a finite-difference method','لا هذا ولا ذاك: إنها طريقة فروق منتهية']]),
]);

lesson('501',80,[
  ['A complete small example on `[0, 1]`: the relaxation equation','مثال صغير كامل على `[0, 1]`: معادلة الاسترخاء'],
  '^CD^{α} y = −y,   y(0) = 1,   y(t) = E_{α}(−t^{α}) = Σ_{k≥0} #f{(−t^{α})^k}{Γ(kα + 1)}',
  ['Its solution is a series in powers of `t^{α}`, so λ = α is the natural choice. Lemma 2.1 gives the integrated form `y = 1 − D^{−α} y`. With `y = a^T 𝔏_{M,λ}` and `D^{−α} y ≈ a^T I_{(−α)} 𝔏`, matching coefficients gives the linear system','وحلها متسلسلة بقوى `t^{α}`، فالاختيار الطبيعي λ = α. واللمة 2.1 تعطي الصيغة التكاملية `y = 1 − D^{−α} y`. ومع `y = a^T 𝔏_{M,λ}` و `D^{−α} y ≈ a^T I_{(−α)} 𝔏` نحصل بمطابقة المعاملات على النظام الخطي'],
  '(I + I_{(−α)})^T a = e_0',
  ['For α = λ = 1/2 the method gives `y(1) ≈ 0.3692` with M = 1, `0.42786` with M = 4 and `0.4275836` with M = 8, against the exact `e·erfc(1) = 0.4275836`.','وعند α = λ = 1/2 تعطي الطريقة `y(1) ≈ 0.3692` مع M = 1، و `0.42786` مع M = 4، و `0.4275836` مع M = 8، والقيمة المضبوطة `e·erfc(1) = 0.4275836`.'],
],[
  Q('Apply Lemma 2.1 to write `^CD^{1/2} y = −y`, `y(0) = 1` in integrated form.','طبّق اللمة 2.1 لكتابة `^CD^{1/2} y = −y` و `y(0) = 1` بالصيغة التكاملية.','y = 1 − D^{−1/2} y',
    ['D^{−1/2} ^CD^{1/2} y = y − y(0)', 'y − 1 = −D^{−1/2} y'], ['y = 1 + D^{−1/2} y','y = −D^{−1/2} y','y = 1 − D^{1/2} y']),
  Q('Why is λ = α the right choice for this problem?','لماذا λ = α هو الاختيار الصحيح لهذه المسألة؟',['The exact solution is a power series in `t^{α}`','الحل المضبوط متسلسلة قوى في `t^{α}`'],
    ['E_{α}(−t^{α}) = 1 − #f{t^{α}}{Γ(α + 1)} + #f{t^{2α}}{Γ(2α + 1)} − …', ['So y is smooth (analytic) in `s = t^{α}`, and the expansion converges geometrically.','فتكون y ملساء (تحليلية) في `s = t^{α}` ويتقارب المفكوك هندسياً.']],
    [['Because α is small','لأن α صغيرة'],['Any λ gives the same accuracy','أي λ تعطي الدقة نفسها']]),
  Q('For λ = μ = 1/2 and M = 1, `I_{(−1/2)} ≈ #m{0.56419, 0.56419 ;; 0.02663, 0.32204}`. Solve `(I + I_{(−1/2)})^T a = e_0`.','عند λ = μ = 1/2 و M = 1 تكون `I_{(−1/2)} ≈ #m{0.56419, 0.56419 ;; 0.02663, 0.32204}`. حل `(I + I_{(−1/2)})^T a = e_0`.','a_0 ≈ 0.6440,   a_1 ≈ −0.2748',
    ['1.56419 a_0 + 0.02663 a_1 = 1,   0.56419 a_0 + 1.32204 a_1 = 0', 'a_1 = −0.42676 a_0  ⇒  a_0(1.56419 − 0.01136) = 1', 'a_0 ≈ 0.6440,   a_1 ≈ −0.2748'],
    ['a_0 ≈ 0.6393,   a_1 ≈ 0','a_0 ≈ 0.5642,   a_1 ≈ −0.5642','a_0 ≈ 0.6440,   a_1 ≈ 0.2748']),
  Q('With these coefficients, find `y(1) = a_0 + a_1` and its error.','مع هذين المعاملين أوجد `y(1) = a_0 + a_1` وخطأه.','y(1) ≈ 0.3692,   |y(1) − 0.4276| ≈ 0.058',
    ['L_k^{λ}(1) = 1:   y(1) = 0.6440 − 0.2748 = 0.3692', '|0.4276 − 0.3692| ≈ 0.058', ['With M = 8 the error drops to about `10^{−8}`.','ومع M = 8 ينخفض الخطأ إلى نحو `10^{−8}`.']],
    ['y(1) ≈ 0.9188,   |y(1) − 0.4276| ≈ 0.49','y(1) ≈ 0.4276','y(1) ≈ 0.6440,   |y(1) − 0.4276| ≈ 0.22']),
]);

export const MS501 = true;
