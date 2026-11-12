/* MATH/COMP 502 — the course's road map (10 units × 10 lessons) and its lessons. The authoring markup is described in mscore.js. */
import { course, lesson, Q } from './mscore.js';

/* ---------------- 502: Bernstein functions ---------------- */
course('502','MATH 502','Bernstein Functions','دوال بيرنشتاين (502 ريض)',`
# Unit 1 · From zero: the Bernstein basis | الوحدة 1 · من الصفر: أساس بيرنشتاين
Factorials and binomial coefficients | المضروب والمعاملات ذات الحدين
The binomial theorem | نظرية ذات الحدين
Polynomial spaces and bases | فضاءات كثيرات الحدود والأسس
Definition of the Bernstein basis polynomials B_{i,n}(x) | تعريف كثيرات حدود بيرنشتاين الأساسية B_{i,n}(x)
First examples: degrees 1, 2 and 3 | أمثلة أولى: الدرجات 1 و 2 و 3
Graphs and shape of the basis functions | رسم الدوال الأساسية وشكلها
Non-negativity and the partition of unity | عدم السالبية وتجزئة الواحد
Symmetry B_{i,n}(x) = B_{n−i,n}(1 − x) | التماثل B_{i,n}(x) = B_{n−i,n}(1 − x)
End-point values and the maximum at x = i/n | القيم الطرفية والقيمة العظمى عند x = i/n
The Bernstein basis on a general interval [a, b] | أساس بيرنشتاين على مجال عام [a, b]
# Unit 2 · Algebra of the basis | الوحدة 2 · جبر الأساس
The recurrence relation (de Casteljau form) | علاقة التكرار (صيغة دي كاستلجو)
Degree elevation | رفع الدرجة
Derivatives of the basis polynomials | مشتقات كثيرات الحدود الأساسية
Higher derivatives and forward differences | المشتقات العليا والفروق الأمامية
Integrals of the basis polynomials | تكاملات كثيرات الحدود الأساسية
Product of two Bernstein polynomials | حاصل ضرب كثيرتي حدود بيرنشتاين
From Bernstein to the power basis | من أساس بيرنشتاين إلى أساس القوى
From the power basis to Bernstein | من أساس القوى إلى أساس بيرنشتاين
Conversion matrices and their conditioning | مصفوفات التحويل وحالتها العددية
Linear independence: the basis of Π_n | الاستقلال الخطي: أساس الفضاء Π_n
# Unit 3 · The Bernstein operator | الوحدة 3 · مؤثر بيرنشتاين
The Bernstein polynomial B_n f of a function | كثيرة حدود بيرنشتاين B_n f لدالة
B_n applied to 1, x and x² | تطبيق B_n على 1 و x و x²
Linearity and positivity of the operator | خطية المؤثر وإيجابيته
Uniform continuity and the modulus of continuity | الاتصال المنتظم ومقياس الاتصال
The Weierstrass approximation theorem | نظرية فايرشتراس للتقريب
Bernstein's proof of the Weierstrass theorem | برهان بيرنشتاين لنظرية فايرشتراس
Korovkin's theorem | نظرية كوروفكين
Rate of convergence and the modulus of continuity | معدل التقارب ومقياس الاتصال
Voronovskaya's theorem | نظرية فورونوفسكايا
Why convergence is slow: O(1/n) | لماذا التقارب بطيء: O(1/n)
# Unit 4 · Shape preservation | الوحدة 4 · حفظ الشكل
End-point interpolation | الاستكمال عند الطرفين
Monotonicity preservation | حفظ الاطراد
Convexity preservation | حفظ التحدب
The variation-diminishing property | خاصية إنقاص التغير
The convex-hull property | خاصية الغلاف المحدب
Derivatives of B_n f and simultaneous approximation | مشتقات B_n f والتقريب الآني
Iterates of the Bernstein operator | تكرارات مؤثر بيرنشتاين
Eigenvalues and eigenfunctions of B_n | القيم والدوال الذاتية لـ B_n
Bernstein polynomials and probability: the binomial distribution | بيرنشتاين والاحتمالات: التوزيع ذو الحدين
Worked case studies in approximation | دراسات حالة في التقريب
# Unit 5 · Bézier curves | الوحدة 5 · منحنيات بيزييه
Bézier curves and control points | منحنيات بيزييه ونقاط التحكم
The de Casteljau algorithm | خوارزمية دي كاستلجو
Subdivision of a Bézier curve | تقسيم منحنى بيزييه
Derivatives and tangents of Bézier curves | مشتقات منحنيات بيزييه ومماساتها
Degree elevation and reduction of curves | رفع درجة المنحنيات وخفضها
Joining curves: C¹ and C² continuity | وصل المنحنيات: الاتصال C¹ و C²
Rational Bézier curves | منحنيات بيزييه الكسرية
Tensor-product Bézier surfaces | سطوح بيزييه بالضرب التنسوري
Bernstein polynomials on triangles | كثيرات حدود بيرنشتاين على المثلثات
From Bézier to B-splines | من بيزييه إلى الشرائح B
# Unit 6 · Inner products and orthogonality | الوحدة 6 · الضرب الداخلي والتعامد
Inner products of Bernstein polynomials | الضرب الداخلي لكثيرات حدود بيرنشتاين
The Gram matrix and its inverse | مصفوفة جرام ومعكوسها
The dual Bernstein basis | أساس بيرنشتاين الثنوي
Least-squares approximation in the Bernstein basis | تقريب المربعات الصغرى بأساس بيرنشتاين
Orthonormal Bernstein polynomials | كثيرات حدود بيرنشتاين المتعامدة المعيارية
Relation to Legendre polynomials | العلاقة بكثيرات حدود ليجندر
Relation to Jacobi polynomials | العلاقة بكثيرات حدود جاكوبي
Expanding functions and estimating the error | فك الدوال وتقدير الخطأ
Fractional-order Bernstein functions B_{i,n}(t^λ) | دوال بيرنشتاين الكسرية B_{i,n}(t^λ)
Numerical stability of the Bernstein form | الاستقرار العددي لصيغة بيرنشتاين
# Unit 7 · Operational matrices | الوحدة 7 · المصفوفات التشغيلية
The idea of an operational matrix | فكرة المصفوفة التشغيلية
The operational matrix of differentiation | المصفوفة التشغيلية للتفاضل
The operational matrix of integration | المصفوفة التشغيلية للتكامل
The operational matrix of the product | المصفوفة التشغيلية للضرب
The Riemann–Liouville integral D^{−μ} of the basis | تكامل ريمان–ليوفيل D^{−μ} للأساس
The operational matrix of fractional integration | المصفوفة التشغيلية للتكامل الكسري
The Caputo derivative of the basis | مشتقة كابوتو للأساس
The operational matrix of fractional differentiation | المصفوفة التشغيلية للتفاضل الكسري
Dual operational matrices | المصفوفات التشغيلية الثنوية
Building the matrices in code | بناء المصفوفات بالكود
# Unit 8 · Solving differential equations | الوحدة 8 · حل المعادلات التفاضلية
Weighted residuals with a Bernstein basis | البواقي الموزونة بأساس بيرنشتاين
Collocation for initial-value problems | طريقة التجميع لمسائل القيمة الابتدائية
Collocation for boundary-value problems | طريقة التجميع لمسائل القيم الحدية
The Galerkin method with Bernstein polynomials | طريقة جاليركن بكثيرات حدود بيرنشتاين
The Tau method with operational matrices | طريقة تاو بالمصفوفات التشغيلية
Imposing boundary conditions through end coefficients | فرض الشروط الحدية عبر المعاملات الطرفية
Nonlinear problems | المسائل غير الخطية
Systems of differential equations | نظم المعادلات التفاضلية
Singular problems (Lane–Emden type) | المسائل المنفردة (نوع لين–إمدن)
Error estimation and convergence in practice | تقدير الخطأ والتقارب عملياً
# Unit 9 · Integral, fractional and partial equations | الوحدة 9 · المعادلات التكاملية والكسرية والجزئية
Fredholm integral equations | معادلات فريدهولم التكاملية
Volterra integral equations | معادلات فولتيرا التكاملية
Integro-differential equations | المعادلات التكاملية التفاضلية
Fractional differential equations: the integrated form | المعادلات التفاضلية الكسرية: الصيغة التكاملية
Multi-term fractional equations | المعادلات الكسرية متعددة الحدود
Bivariate Bernstein polynomials | كثيرات حدود بيرنشتاين في متغيرين
The heat equation with a Bernstein basis | معادلة الحرارة بأساس بيرنشتاين
Time-fractional diffusion equations | معادلات الانتشار الكسرية الزمنية
Optimal control problems | مسائل التحكم الأمثل
Comparison with Legendre and Chebyshev methods | المقارنة بطرق ليجندر وتشيبيشيف
# Unit 10 · Generalizations and research | الوحدة 10 · التعميمات والبحث
Bernstein–Kantorovich operators | مؤثرات بيرنشتاين–كانتوروفيتش
Bernstein–Durrmeyer operators | مؤثرات بيرنشتاين–دورماير
Szász–Mirakyan and Baskakov operators | مؤثرات ساس–ميراكيان وباسكاكوف
Bernstein–Stancu operators | مؤثرات بيرنشتاين–ستانكو
q-Bernstein polynomials | كثيرات حدود بيرنشتاين من النوع q
Bernstein functions in the sense of complete monotonicity | دوال بيرنشتاين بمعنى الاطراد التام
Bernstein's inequality for polynomials | متباينة بيرنشتاين لكثيرات الحدود
Implementing Bernstein methods in Mathematica, MATLAB and Python | تنفيذ طرق بيرنشتاين في Mathematica و MATLAB و Python
Reading and reproducing a research paper | قراءة بحث علمي وإعادة إنتاجه
Capstone project | مشروع ختامي
`);

lesson('502',1,[
  ['Everything in this course is built from one number, the binomial coefficient. The factorial is `n! = 1·2·3 ⋯ n` with `0! = 1`, and',
   'كل ما في هذا المقرر مبني على عدد واحد هو المعامل ذو الحدين. المضروب هو `n! = 1·2·3 ⋯ n` مع `0! = 1`، و'],
  'C(n, k) = #f{n!}{k! (n − k)!},   0 ≤ k ≤ n',
  ['`C(n, k)` counts the ways to choose k objects out of n. Three properties are used again and again:','`C(n, k)` يعدّ طرق اختيار k عنصراً من n. وثلاث خواص تُستخدم دائماً:'],
  'C(n, k) = C(n, n − k),   C(n, k) = C(n − 1, k − 1) + C(n − 1, k),   Σ_{k=0}^{n} C(n, k) = 2^n',
  ['The second one is Pascal’s rule; it becomes the recurrence of the Bernstein polynomials in Unit 2.','الثانية قاعدة باسكال، وستصبح علاقة التكرار لكثيرات حدود بيرنشتاين في الوحدة 2.'],
],[
  Q('Compute `C(5, 2)`.','احسب `C(5, 2)`.','10',['C(5, 2) = #f{5!}{2!·3!} = #f{120}{2·6} = 10'],['20','5','60']),
  Q('Compute `C(6, 3)` and `C(6, 4)`.','احسب `C(6, 3)` و `C(6, 4)`.','C(6, 3) = 20,   C(6, 4) = 15',
    ['C(6, 3) = #f{720}{6·6} = 20', 'C(6, 4) = C(6, 2) = #f{6·5}{2} = 15', ['Symmetry `C(n, k) = C(n, n − k)` saves work.','التماثل `C(n, k) = C(n, n − k)` يختصر الحساب.']],
    ['C(6, 3) = 18,   C(6, 4) = 15','C(6, 3) = 20,   C(6, 4) = 30','C(6, 3) = 120,   C(6, 4) = 360']),
  Q('Verify Pascal’s rule for `C(5, 2)`.','تحقق من قاعدة باسكال للعدد `C(5, 2)`.','C(4, 1) + C(4, 2) = 4 + 6 = 10',
    ['C(5, 2) = C(4, 1) + C(4, 2)', 'C(4, 1) = 4,   C(4, 2) = 6', '4 + 6 = 10 = C(5, 2)']),
  Q('Find `Σ_{k=0}^{4} C(4, k)`.','أوجد `Σ_{k=0}^{4} C(4, k)`.','16',['1 + 4 + 6 + 4 + 1 = 16 = 2^4'],['8','24','32']),
]);

lesson('502',2,[
  ['The binomial theorem expands a power of a sum:','نظرية ذات الحدين تفك قوة مجموع:'],
  '(a + b)^n = Σ_{k=0}^{n} C(n, k) a^k b^{n−k}',
  ['The Bernstein polynomials are born from one special choice: `a = x` and `b = 1 − x`. Since `a + b = 1`,','وكثيرات حدود بيرنشتاين تولد من اختيار خاص واحد: `a = x` و `b = 1 − x`. وبما أن `a + b = 1` فإن'],
  '1 = (x + (1 − x))^n = Σ_{k=0}^{n} C(n, k) x^k (1 − x)^{n−k}',
  ['Each term of this sum is one Bernstein basis polynomial, and the identity says that they always add up to 1 (the partition of unity).','كل حد في هذا المجموع كثيرة حدود بيرنشتاين أساسية، والمتطابقة تقول إن مجموعها يساوي 1 دائماً (تجزئة الواحد).'],
],[
  Q('Expand `(2x − 1)^3`.','فك `(2x − 1)^3`.','8x^3 − 12x^2 + 6x − 1',
    ['(2x)^3 + 3(2x)^2(−1) + 3(2x)(−1)^2 + (−1)^3', '= 8x^3 − 12x^2 + 6x − 1'],['8x^3 − 6x^2 + 6x − 1','8x^3 + 12x^2 + 6x + 1','2x^3 − 12x^2 + 6x − 1']),
  Q('Find the coefficient of `x^2` in `(1 + x)^6`.','أوجد معامل `x^2` في `(1 + x)^6`.','15',['C(6, 2) = #f{6·5}{2} = 15'],['6','20','30']),
  Q('Write the identity `1 = (x + (1 − x))^2` term by term.','اكتب المتطابقة `1 = (x + (1 − x))^2` حداً حداً.','1 = (1 − x)^2 + 2x(1 − x) + x^2',
    ['(1 − x)^2 + 2x(1 − x) + x^2', '= 1 − 2x + x^2 + 2x − 2x^2 + x^2 = 1', ['The three terms are the Bernstein basis of degree 2.','الحدود الثلاثة هي أساس بيرنشتاين من الدرجة 2.']]),
  Q('Show that `Σ_{k=0}^{2} k·C(2, k) x^k (1 − x)^{2−k} = 2x`.','أثبت أن `Σ_{k=0}^{2} k·C(2, k) x^k (1 − x)^{2−k} = 2x`.','2x',
    ['0·(1 − x)^2 + 1·2x(1 − x) + 2·x^2', '= 2x − 2x^2 + 2x^2 = 2x', ['In general the sum equals `nx`: this is why the Bernstein operator reproduces the function x (Unit 3).','وعموماً المجموع يساوي `nx`: ولهذا يعيد مؤثر بيرنشتاين الدالة x كما هي (الوحدة 3).']]),
]);

lesson('502',3,[
  ['`Π_n` is the space of all polynomials of degree at most n. It is a vector space of dimension `n + 1`: every polynomial in it is fixed by `n + 1` numbers.',
   '`Π_n` هو فضاء كل كثيرات الحدود التي درجتها لا تزيد على n. وهو فضاء متجهي بعده `n + 1`: كل كثيرة حدود فيه تتحدد بـ `n + 1` عدداً.'],
  ['A basis is a set of `n + 1` linearly independent polynomials. The usual one is the power basis `1, x, x^2, …, x^n`, but it is not the only one, and not always the best. The same polynomial has different coefficients in different bases:',
   'الأساس مجموعة من `n + 1` كثيرة حدود مستقلة خطياً. والمألوف أساس القوى `1, x, x^2, …, x^n` لكنه ليس الوحيد ولا الأفضل دائماً. وللكثيرة نفسها معاملات مختلفة في الأسس المختلفة:'],
  'p(x) = Σ_{k=0}^{n} a_k x^k = Σ_{i=0}^{n} c_i B_{i,n}(x)',
  ['The Bernstein coefficients `c_i` have a geometric meaning (they are «control points»), which the power coefficients `a_k` do not have.','ولمعاملات بيرنشتاين `c_i` معنى هندسي (هي «نقاط تحكم») لا تملكه معاملات القوى `a_k`.'],
],[
  Q('What is the dimension of `Π_3`, and what is its power basis?','ما بُعد `Π_3` وما أساس القوى له؟',['4; the basis is `1, x, x^2, x^3`','4، والأساس `1, x, x^2, x^3`'],
    ['dim Π_n = n + 1  ⇒  dim Π_3 = 4'],[['3; the basis is `x, x^2, x^3`','3، والأساس `x, x^2, x^3`'],['4; the basis is `x, x^2, x^3, x^4`','4، والأساس `x, x^2, x^3, x^4`'],['5; the basis is `1, x, x^2, x^3, x^4`','5، والأساس `1, x, x^2, x^3, x^4`']]),
  Q('Write `p(x) = 3 + 2x` in the basis `{1 − x, x}` of `Π_1`.','اكتب `p(x) = 3 + 2x` في الأساس `{1 − x, x}` للفضاء `Π_1`.','p = 3(1 − x) + 5x',
    ['c_0(1 − x) + c_1 x = c_0 + (c_1 − c_0)x', 'c_0 = 3,   c_1 − c_0 = 2  ⇒  c_1 = 5', ['Note `c_0 = p(0)` and `c_1 = p(1)`: the coefficients are the end values.','لاحظ أن `c_0 = p(0)` و `c_1 = p(1)`: المعاملان هما القيمتان الطرفيتان.']],
    ['p = 3(1 − x) + 2x','p = 5(1 − x) + 3x','p = 2(1 − x) + 3x']),
  Q('Write `x` in the basis `{(1 − x)^2, 2x(1 − x), x^2}`.','اكتب `x` في الأساس `{(1 − x)^2, 2x(1 − x), x^2}`.','x = 0·(1 − x)^2 + #f{1}{2}·2x(1 − x) + 1·x^2',
    ['x = x(1 − x) + x^2', '= #f{1}{2}·[2x(1 − x)] + 1·x^2', ['The coefficients `(0, 1/2, 1)` are equally spaced: the values of x at `0, 1/2, 1`.','المعاملات `(0, 1/2, 1)` متساوية التباعد: قيم x عند `0, 1/2, 1`.']]),
  Q('Are `1 − x` and `x` linearly independent?','هل `1 − x` و `x` مستقلتان خطياً؟',['Yes','نعم'],
    [['Suppose `c_0(1 − x) + c_1 x = 0` for all x.','نفرض أن `c_0(1 − x) + c_1 x = 0` لكل x.'], ['Put x = 0: `c_0 = 0`. Put x = 1: `c_1 = 0`. Only the zero combination vanishes.','نضع x = 0 فنجد `c_0 = 0`، ونضع x = 1 فنجد `c_1 = 0`. فالتركيب الصفري وحده ينعدم.']],[['No','لا']]),
]);

lesson('502',4,[
  ['The Bernstein basis polynomials of degree n on [0, 1] are','كثيرات حدود بيرنشتاين الأساسية من الدرجة n على [0, 1] هي'],
  'B_{i,n}(x) = C(n, i) x^i (1 − x)^{n−i},   i = 0, 1, …, n',
  ['There are `n + 1` of them, each of exact degree n. `B_{i,n}` has a zero of order i at x = 0 and of order `n − i` at x = 1, so',
   'عددها `n + 1` وكل منها درجتها n تماماً. وللدالة `B_{i,n}` صفر من الرتبة i عند x = 0 ومن الرتبة `n − i` عند x = 1، ولذلك'],
  'B_{i,n}(0) = δ_{i0},   B_{i,n}(1) = δ_{in}',
  ['Only the first is non-zero at the left end and only the last at the right end. By convention `B_{i,n} = 0` when `i < 0` or `i > n`.','الأولى وحدها لا تنعدم عند الطرف الأيسر والأخيرة وحدها عند الأيمن. واصطلاحاً `B_{i,n} = 0` إذا كان `i < 0` أو `i > n`.'],
],[
  Q('Write `B_{1,2}(x)` and `B_{0,3}(x)`.','اكتب `B_{1,2}(x)` و `B_{0,3}(x)`.','B_{1,2} = 2x(1 − x),   B_{0,3} = (1 − x)^3',
    ['B_{1,2} = C(2, 1) x (1 − x) = 2x(1 − x)', 'B_{0,3} = C(3, 0) x^0 (1 − x)^3 = (1 − x)^3'],['B_{1,2} = x(1 − x),   B_{0,3} = (1 − x)^3','B_{1,2} = 2x(1 − x),   B_{0,3} = 3(1 − x)^3','B_{1,2} = 2x^2(1 − x),   B_{0,3} = x^3']),
  Q('Evaluate `B_{2,3}(1/2)`.','احسب `B_{2,3}(1/2)`.','#f{3}{8}',['B_{2,3}(x) = 3x^2(1 − x)', '3·#f{1}{4}·#f{1}{2} = #f{3}{8}'],['#f{1}{8}','#f{3}{4}','#f{3}{16}']),
  Q('Evaluate `B_{2,4}(1/3)`.','احسب `B_{2,4}(1/3)`.','#f{8}{27}',['B_{2,4}(x) = 6x^2(1 − x)^2', '6·#f{1}{9}·#f{4}{9} = #f{24}{81} = #f{8}{27}'],['#f{4}{27}','#f{4}{81}','#f{2}{9}']),
  Q('List the four Bernstein basis polynomials of degree 3.','اكتب كثيرات حدود بيرنشتاين الأربع من الدرجة 3.','(1 − x)^3,   3x(1 − x)^2,   3x^2(1 − x),   x^3',
    ['C(3, i) = 1, 3, 3, 1', 'B_{0,3} = (1 − x)^3,   B_{1,3} = 3x(1 − x)^2', 'B_{2,3} = 3x^2(1 − x),   B_{3,3} = x^3']),
]);

lesson('502',5,[
  ['The first three families, which are used all the time:','العائلات الثلاث الأولى، وهي الأكثر استخداماً:'],
  'n = 1:   1 − x,   x',
  'n = 2:   (1 − x)^2,   2x(1 − x),   x^2',
  'n = 3:   (1 − x)^3,   3x(1 − x)^2,   3x^2(1 − x),   x^3',
  ['In every family the functions are non-negative on [0, 1] and add up to 1 at each x, so at a fixed x their values are «weights». A polynomial written as `p = Σ c_i B_{i,n}` is therefore a weighted average of its coefficients: its graph stays between the smallest and the largest `c_i`.',
   'في كل عائلة الدوال غير سالبة على [0, 1] ومجموعها 1 عند كل x، فقيمها عند x ثابتة «أوزان». ولذلك كثيرة الحدود `p = Σ c_i B_{i,n}` متوسط موزون لمعاملاتها: منحناها يبقى بين أصغر `c_i` وأكبرها.'],
],[
  Q('Evaluate the four basis polynomials of degree 3 at `x = 1/4` and check their sum.','احسب كثيرات الحدود الأربع من الدرجة 3 عند `x = 1/4` وتحقق من مجموعها.','#f{27}{64},   #f{27}{64},   #f{9}{64},   #f{1}{64}',
    ['B_{0,3} = (#f{3}{4})^3 = #f{27}{64}', 'B_{1,3} = 3·#f{1}{4}·#f{9}{16} = #f{27}{64}', 'B_{2,3} = 3·#f{1}{16}·#f{3}{4} = #f{9}{64},   B_{3,3} = #f{1}{64}', '#f{27 + 27 + 9 + 1}{64} = 1']),
  Q('Write `p(x) = 1 − x^2` in the Bernstein basis of degree 2.','اكتب `p(x) = 1 − x^2` في أساس بيرنشتاين من الدرجة 2.','p = 1·B_{0,2} + 1·B_{1,2} + 0·B_{2,2}',
    ['1 − x^2 = (1 − x)(1 + x) = (1 − x)[(1 − x) + 2x]', '= (1 − x)^2 + 2x(1 − x)', ['Coefficients `(1, 1, 0)`: note `c_0 = p(0) = 1` and `c_2 = p(1) = 0`.','المعاملات `(1, 1, 0)`: لاحظ `c_0 = p(0) = 1` و `c_2 = p(1) = 0`.']],
    ['p = 1·B_{0,2} + 0·B_{1,2} − 1·B_{2,2}','p = 1·B_{0,2} + #f{1}{2}·B_{1,2} + 0·B_{2,2}','p = 1·B_{0,2} + 2·B_{1,2} + 0·B_{2,2}']),
  Q('Where is the maximum of `B_{1,2}(x) = 2x(1 − x)` on [0, 1], and what is its value?','أين تقع القيمة العظمى للدالة `B_{1,2}(x) = 2x(1 − x)` على [0, 1] وما قيمتها؟','x = #f{1}{2},   B_{1,2} = #f{1}{2}',
    ['B_{1,2}′ = 2 − 4x = 0  ⇒  x = #f{1}{2}', 'B_{1,2}(#f{1}{2}) = 2·#f{1}{2}·#f{1}{2} = #f{1}{2}', ['In general `B_{i,n}` has its maximum at `x = i/n`.','وعموماً القيمة العظمى لـ `B_{i,n}` عند `x = i/n`.']],
    ['x = #f{1}{2},   B_{1,2} = 1','x = #f{1}{2},   B_{1,2} = #f{1}{4}','x = #f{1}{3},   B_{1,2} = #f{4}{9}']),
  Q('The polynomial `p = 2B_{0,2} + 5B_{1,2} + 3B_{2,2}`: between which two numbers does it stay on [0, 1], and what are `p(0)`, `p(1)`?','كثيرة الحدود `p = 2B_{0,2} + 5B_{1,2} + 3B_{2,2}`: بين أي عددين تبقى على [0, 1] وما قيمتا `p(0)` و `p(1)`؟','2 ≤ p(x) ≤ 5,   p(0) = 2,   p(1) = 3',
    [['A weighted average of 2, 5, 3 lies between the smallest and the largest.','المتوسط الموزون للأعداد 2 و 5 و 3 يقع بين أصغرها وأكبرها.'], 'p(0) = c_0 = 2,   p(1) = c_2 = 3'],
    ['2 ≤ p(x) ≤ 3,   p(0) = 2,   p(1) = 3','0 ≤ p(x) ≤ 10,   p(0) = 2,   p(1) = 5','2 ≤ p(x) ≤ 5,   p(0) = 5,   p(1) = 3']),
]);

export const MS502 = true;
