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
    ['t = 0 only','t = 1 only','t = #f{1}{2}']),
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

export const MS501 = true;
