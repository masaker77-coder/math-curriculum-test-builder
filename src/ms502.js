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

/* ---- 502 · Unit 1 (lessons 6–10) and Unit 2 (lessons 11–20): the basis and its algebra ---- */
lesson('502',6,[
  ['Each `B_{i,n}` is a single hump on [0, 1]. It has a zero of multiplicity i at x = 0 and of multiplicity n − i at x = 1, and in between it rises to one maximum and falls again:','كل `B_{i,n}` حدبة واحدة على [0, 1]. لها جذر تكراره i عند x = 0 وجذر تكراره n − i عند x = 1، وبينهما ترتفع إلى قيمة عظمى واحدة ثم تنخفض:'],
  'B_{i,n}′(x) = 0  ⇒  x = #f{i}{n}',
  ['The two end functions `B_{0,n} = (1 − x)^n` and `B_{n,n} = x^n` are monotone and equal 1 at one end. As n grows the humps become narrower and lower: each function «controls» mainly the region near `x = i/n`. This is why the coefficient `c_i` of a Bernstein expansion acts on the shape near `i/n`.',
   'ودالتا الطرفين `B_{0,n} = (1 − x)^n` و `B_{n,n} = x^n` مطّردتان وتساويان 1 عند أحد الطرفين. وكلما كبرت n صارت الحدبات أضيق وأخفض: كل دالة «تتحكم» أساساً في المنطقة قرب `x = i/n`. ولهذا يؤثر المعامل `c_i` في مفكوك بيرنشتاين على الشكل قرب `i/n`.'],
],[
  Q('Find the maximum value of `B_{1,3}(x) = 3x(1 − x)^2` on [0, 1].','أوجد القيمة العظمى لـ `B_{1,3}(x) = 3x(1 − x)^2` على [0, 1].','#f{4}{9}',
    ['B_{1,3}′ = 3(1 − x)^2 − 6x(1 − x) = 3(1 − x)(1 − 3x) = 0  ⇒  x = #f{1}{3}', 'B_{1,3}(#f{1}{3}) = 3·#f{1}{3}·#f{4}{9} = #f{4}{9}'],
    ['#f{1}{3}','#f{3}{8}','#f{8}{27}']),
  Q('Find the maximum value of `B_{2,4}(x) = 6x^2(1 − x)^2`.','أوجد القيمة العظمى لـ `B_{2,4}(x) = 6x^2(1 − x)^2`.','#f{3}{8}',
    ['x = #f{i}{n} = #f{2}{4} = #f{1}{2}', 'B_{2,4}(#f{1}{2}) = 6·#f{1}{4}·#f{1}{4} = #f{3}{8}'], ['#f{1}{2}','#f{3}{4}','#f{1}{16}']),
  Q('What is the multiplicity of the root x = 0 of `B_{3,5}`?','ما تكرار الجذر x = 0 للدالة `B_{3,5}`؟','3',
    ['B_{3,5} = 10x^3(1 − x)^2', ['The factor `x^3` gives a triple root at 0, and `(1 − x)^2` a double root at 1.','العامل `x^3` يعطي جذراً ثلاثياً عند 0، و `(1 − x)^2` جذراً مزدوجاً عند 1.']], ['2','5','1']),
  Q('Which basis function of degree 5 is largest near x = 0.6?','أي دالة أساسية من الدرجة 5 هي الأكبر قرب x = 0.6؟','B_{3,5}',
    ['#f{i}{n} = 0.6  ⇒  i = 3'], ['B_{0,5}','B_{5,5}','B_{2,5}']),
]);

lesson('502',7,[
  ['Two properties make the Bernstein basis special:','خاصيتان تجعلان أساس بيرنشتاين مميزاً:'],
  'B_{i,n}(x) ≥ 0  on  [0, 1],     Σ_{i=0}^{n} B_{i,n}(x) = 1',
  ['The second one is the binomial theorem for `(x + (1 − x))^n`. Together they say that, at each x, the numbers `B_{i,n}(x)` are weights of a weighted average. Hence `p = Σ c_i B_{i,n}` always lies between the smallest and the largest coefficient: `min c_i ≤ p(x) ≤ max c_i`. Outside [0, 1] some basis functions become negative and this is lost.',
   'والثانية هي نظرية ذات الحدين للمقدار `(x + (1 − x))^n`. ومعاً تقولان إن الأعداد `B_{i,n}(x)` عند كل x أوزان لمتوسط موزون. فتقع `p = Σ c_i B_{i,n}` دائماً بين أصغر معامل وأكبرها: `min c_i ≤ p(x) ≤ max c_i`. وخارج [0, 1] تصبح بعض الدوال سالبة فتضيع هذه الخاصية.'],
],[
  Q('Compute the three basis values of degree 2 at x = 0.3 and their sum.','احسب قيم الأساس الثلاث من الدرجة 2 عند x = 0.3 ومجموعها.','0.49,  0.42,  0.09;   sum 1',
    ['(0.7)^2 = 0.49,   2(0.3)(0.7) = 0.42,   (0.3)^2 = 0.09', '0.49 + 0.42 + 0.09 = 1'], ['0.49,  0.21,  0.09;   sum 0.79','0.7,  0.42,  0.3;   sum 1.42','0.09,  0.42,  0.49;   sum 1']),
  Q('Compute `B_{1,2}(2)`.','احسب `B_{1,2}(2)`.','−4',
    ['B_{1,2}(2) = 2·2·(1 − 2) = −4', ['Outside [0, 1] the basis is no longer non-negative.','خارج [0, 1] لا يبقى الأساس غير سالب.']], ['4','0','−2']),
  Q('`p = 4B_{0,3} − B_{1,3} + 2B_{2,3} + 6B_{3,3}`. Between which bounds does p stay on [0, 1]?','`p = 4B_{0,3} − B_{1,3} + 2B_{2,3} + 6B_{3,3}`. بين أي حدين تبقى p على [0, 1]؟','−1 ≤ p(x) ≤ 6',
    ['min c_i = −1,   max c_i = 6'], ['4 ≤ p(x) ≤ 6','0 ≤ p(x) ≤ 6','−1 ≤ p(x) ≤ 11']),
  Q('Compute `Σ_{i=0}^{7} B_{i,7}(0.37)`.','احسب `Σ_{i=0}^{7} B_{i,7}(0.37)`.','1',
    ['Σ_i B_{i,n}(x) = (x + 1 − x)^n = 1'], ['0.37','7','2^7']),
]);

lesson('502',8,[
  ['Replacing x by `1 − x` reverses the basis:','استبدال x بـ `1 − x` يعكس الأساس:'],
  'B_{i,n}(x) = B_{n−i,n}(1 − x)',
  ['because `C(n, i) = C(n, n − i)` and the powers of x and `1 − x` swap. So the graph of `B_{n−i,n}` is the mirror image of `B_{i,n}` in the line x = 1/2. For a polynomial, `p(1 − x)` has the coefficients of p in reverse order.',
   'لأن `C(n, i) = C(n, n − i)` وتتبادل قوى x و `1 − x`. فمنحنى `B_{n−i,n}` صورة مرآة لمنحنى `B_{i,n}` حول المستقيم x = 1/2. وكثيرة الحدود `p(1 − x)` معاملاتها معاملات p بترتيب معكوس.'],
],[
  Q('Check the symmetry: compute `B_{1,3}(0.2)` and `B_{2,3}(0.8)`.','تحقق من التماثل: احسب `B_{1,3}(0.2)` و `B_{2,3}(0.8)`.','0.384  =  0.384',
    ['B_{1,3}(0.2) = 3·0.2·0.64 = 0.384', 'B_{2,3}(0.8) = 3·0.64·0.2 = 0.384'], ['0.384  ≠  0.096','0.096  =  0.096','0.512  =  0.512']),
  Q('`p = B_{0,2} + 4B_{1,2} + 9B_{2,2}`. Write `q(x) = p(1 − x)` in the same basis.','`p = B_{0,2} + 4B_{1,2} + 9B_{2,2}`. اكتب `q(x) = p(1 − x)` في الأساس نفسه.','q = 9B_{0,2} + 4B_{1,2} + B_{2,2}',
    ['B_{i,2}(1 − x) = B_{2−i,2}(x)', ['The coefficients are reversed.','المعاملات معكوسة.']], ['q = B_{0,2} + 4B_{1,2} + 9B_{2,2}','q = −B_{0,2} − 4B_{1,2} − 9B_{2,2}','q = 9B_{0,2} − 4B_{1,2} + B_{2,2}']),
  Q('Which basis function of degree 4 is symmetric about x = 1/2?','أي دالة أساسية من الدرجة 4 متماثلة حول x = 1/2؟','B_{2,4}',
    ['i = n − i  ⇒  i = 2'], ['B_{0,4}','B_{1,4}','B_{4,4}']),
  Q('If p has coefficients `(c_0, …, c_n)` and `p(x) = p(1 − x)` for all x, what must hold?','إذا كانت معاملات p هي `(c_0, …, c_n)` وكان `p(x) = p(1 − x)` لكل x فماذا يجب أن يتحقق؟','c_i = c_{n−i}',
    [['`p(1 − x)` has the reversed coefficients, and the coefficients in a basis are unique.','`p(1 − x)` معاملاتها معكوسة، والمعاملات في الأساس وحيدة.']], ['c_i = −c_{n−i}','c_i = 0','c_0 = c_1']),
]);

lesson('502',9,[
  ['At the ends only one basis function is non-zero:','عند الطرفين لا تكون إلا دالة أساسية واحدة غير صفرية:'],
  'B_{i,n}(0) = δ_{i0},   B_{i,n}(1) = δ_{in},   p(0) = c_0,   p(1) = c_n',
  ['Inside, `B_{i,n}` reaches its maximum at `x = i/n`, with the value','وفي الداخل تبلغ `B_{i,n}` قيمتها العظمى عند `x = i/n` وقيمتها'],
  'B_{i,n}(#f{i}{n}) = C(n, i) #f{i^i (n − i)^{n−i}}{n^n}',
],[
  Q('`p = 3B_{0,4} + B_{1,4} − 2B_{2,4} + 5B_{3,4} + 7B_{4,4}`. Find p(0) and p(1).','`p = 3B_{0,4} + B_{1,4} − 2B_{2,4} + 5B_{3,4} + 7B_{4,4}`. أوجد p(0) و p(1).','p(0) = 3,   p(1) = 7',
    ['p(0) = c_0,   p(1) = c_n'], ['p(0) = 7,   p(1) = 3','p(0) = 0,   p(1) = 0','p(0) = 3,   p(1) = 14']),
  Q('Find the maximum value of `B_{2,3}`.','أوجد القيمة العظمى لـ `B_{2,3}`.','#f{4}{9}',
    ['x = #f{2}{3}:   3·#f{4}{9}·#f{1}{3} = #f{4}{9}', ['By symmetry it equals the maximum of `B_{1,3}`.','وبالتماثل تساوي القيمة العظمى لـ `B_{1,3}`.']], ['#f{2}{3}','#f{8}{27}','#f{1}{3}']),
  Q('Use the formula to find the maximum of `B_{1,4}`.','استخدم الصيغة لإيجاد القيمة العظمى لـ `B_{1,4}`.','#f{27}{64}',
    ['C(4, 1)·#f{1^1·3^3}{4^4} = 4·#f{27}{256} = #f{27}{64}'], ['#f{27}{256}','#f{1}{4}','#f{3}{8}']),
  Q('Find `B_{0,n}′(0)` and `B_{1,n}′(0)`.','أوجد `B_{0,n}′(0)` و `B_{1,n}′(0)`.','B_{0,n}′(0) = −n,   B_{1,n}′(0) = n',
    ['B_{0,n} = (1 − x)^n  ⇒  B_{0,n}′(0) = −n', 'B_{1,n} = nx(1 − x)^{n−1}  ⇒  B_{1,n}′(0) = n', ['So `p′(0) = n(c_1 − c_0)`: the slope at an end depends on two coefficients only.','إذن `p′(0) = n(c_1 − c_0)`: الميل عند الطرف يعتمد على معاملين فقط.']],
    ['B_{0,n}′(0) = 0,   B_{1,n}′(0) = 1','B_{0,n}′(0) = −1,   B_{1,n}′(0) = 1','B_{0,n}′(0) = n,   B_{1,n}′(0) = −n']),
]);

lesson('502',10,[
  ['On a general interval `[a, b]` the basis is obtained through `u = (x − a)/(b − a)`:','على مجال عام `[a, b]` نحصل على الأساس عبر `u = (x − a)/(b − a)`:'],
  'B_{i,n}^{[a,b]}(x) = C(n, i) #f{(x − a)^i (b − x)^{n−i}}{(b − a)^n}',
  ['All the properties carry over: non-negativity and partition of unity on `[a, b]`, end values `p(a) = c_0`, `p(b) = c_n`, maxima at `x = a + (i/n)(b − a)`. Derivatives pick up the factor `1/(b − a)`.',
   'وتنتقل كل الخواص: عدم السالبية وتجزئة الواحد على `[a, b]`، والقيم الطرفية `p(a) = c_0` و `p(b) = c_n`، والقيم العظمى عند `x = a + (i/n)(b − a)`. والمشتقات تكتسب العامل `1/(b − a)`.'],
],[
  Q('Compute `B_{1,2}^{[0,2]}(1)`.','احسب `B_{1,2}^{[0,2]}(1)`.','#f{1}{2}',
    ['2·#f{(1 − 0)(2 − 1)}{2^2} = #f{2}{4} = #f{1}{2}'], ['1','2','#f{1}{4}']),
  Q('Write the degree-1 basis on `[1, 3]`.','اكتب أساس الدرجة 1 على `[1, 3]`.','#f{3 − x}{2},   #f{x − 1}{2}',
    ['B_{0,1} = #f{b − x}{b − a},   B_{1,1} = #f{x − a}{b − a}'], ['3 − x,   x − 1','#f{x − 1}{2},   #f{3 − x}{2}','1 − x,   x']),
  Q('Where is the maximum of `B_{1,3}` on `[2, 5]`?','أين القيمة العظمى لـ `B_{1,3}` على `[2, 5]`؟','x = 3',
    ['x = a + #f{i}{n}(b − a) = 2 + #f{1}{3}·3 = 3'], ['x = #f{1}{3}','x = 2.5','x = 4']),
  Q('`p = 1·B_{0,2} + 3B_{1,2} + 2B_{2,2}` on `[0, 4]`. Find `p′(0)`.','`p = 1·B_{0,2} + 3B_{1,2} + 2B_{2,2}` على `[0, 4]`. أوجد `p′(0)`.','1',
    ['p′(a) = #f{n}{b − a}(c_1 − c_0) = #f{2}{4}(3 − 1) = 1'], ['4','2','#f{1}{2}']),
]);

lesson('502',11,[
  ['Pascal’s rule for `C(n, i)` gives the recurrence of the basis, which builds degree n from degree n − 1:','قاعدة باسكال للعدد `C(n, i)` تعطي علاقة تكرار الأساس، التي تبني الدرجة n من الدرجة n − 1:'],
  'B_{i,n}(x) = (1 − x) B_{i,n−1}(x) + x B_{i−1,n−1}(x)',
  ['(with `B_{−1,n−1} = B_{n,n−1} = 0`). Applied to the coefficients instead of the basis, the same rule gives de Casteljau’s algorithm: repeated linear interpolation `c_i^{(r)} = (1 − x)c_i^{(r−1)} + x c_{i+1}^{(r−1)}`, which evaluates `p(x)` stably using only convex combinations.',
   '(مع `B_{−1,n−1} = B_{n,n−1} = 0`). وبتطبيق القاعدة نفسها على المعاملات بدل الأساس نحصل على خوارزمية دي كاستلجو: استكمال خطي متكرر `c_i^{(r)} = (1 − x)c_i^{(r−1)} + x c_{i+1}^{(r−1)}`، يحسب `p(x)` بثبات بتراكيب محدبة فقط.'],
],[
  Q('Build `B_{1,2}` from `B_{1,1} = x` and `B_{0,1} = 1 − x`.','ابنِ `B_{1,2}` من `B_{1,1} = x` و `B_{0,1} = 1 − x`.','B_{1,2} = 2x(1 − x)',
    ['B_{1,2} = (1 − x)B_{1,1} + xB_{0,1} = (1 − x)x + x(1 − x)'], ['B_{1,2} = x(1 − x)','B_{1,2} = x^2','B_{1,2} = (1 − x)^2']),
  Q('Use de Casteljau’s algorithm to evaluate `p = 1·B_{0,2} + 3B_{1,2} + 2B_{2,2}` at x = 0.5.','استخدم خوارزمية دي كاستلجو لحساب `p = 1·B_{0,2} + 3B_{1,2} + 2B_{2,2}` عند x = 0.5.','2.25',
    ['r = 1:   0.5·1 + 0.5·3 = 2,   0.5·3 + 0.5·2 = 2.5', 'r = 2:   0.5·2 + 0.5·2.5 = 2.25', ['Check: `0.25 + 3·0.5 + 2·0.25 = 2.25`.','تحقق: `0.25 + 3·0.5 + 2·0.25 = 2.25`.']],
    ['2','2.5','3']),
  Q('Evaluate `p = 0·B_{0,3} + 3B_{1,3} + 3B_{2,3} + 0·B_{3,3}` at x = 1/3 with de Casteljau.','احسب `p = 0·B_{0,3} + 3B_{1,3} + 3B_{2,3} + 0·B_{3,3}` عند x = 1/3 بدي كاستلجو.','2',
    ['r = 1:   (1, 3, 2)', 'r = 2:   (#f{5}{3}, #f{8}{3})', 'r = 3:   #f{2}{3}·#f{5}{3} + #f{1}{3}·#f{8}{3} = #f{18}{9} = 2', ['Directly: `3B_{1,3} + 3B_{2,3} = 9x(1 − x) = 9·(1/3)(2/3) = 2`.','مباشرة: `3B_{1,3} + 3B_{2,3} = 9x(1 − x) = 9·(1/3)(2/3) = 2`.']],
    ['#f{4}{3}','#f{8}{3}','3']),
  Q('Why is de Casteljau’s algorithm numerically stable on [0, 1]?','لماذا تكون خوارزمية دي كاستلجو مستقرة عددياً على [0, 1]؟',['Every step is a convex combination `(1 − x)a + xb` with weights in [0, 1], so errors are not amplified','كل خطوة تركيب محدب `(1 − x)a + xb` بأوزان في [0, 1]، فلا تتضخم الأخطاء'],
    [['Values stay between the smallest and largest coefficient at every stage.','القيم تبقى بين أصغر المعاملات وأكبرها في كل مرحلة.']],
    [['Because it uses powers of x','لأنها تستخدم قوى x'],['It is not stable','ليست مستقرة']]),
]);

lesson('502',12,[
  ['Every polynomial of degree n is also of degree n + 1. Degree elevation rewrites it in the larger basis; the new coefficients are convex combinations of the old ones:','كل كثيرة حدود من الدرجة n هي أيضاً من الدرجة n + 1. ورفع الدرجة يعيد كتابتها في الأساس الأكبر، والمعاملات الجديدة تراكيب محدبة من القديمة:'],
  'c_i^{*} = #f{i}{n + 1} c_{i−1} + (1 − #f{i}{n + 1}) c_i,   i = 0, …, n + 1',
  ['It comes from `B_{i,n} = ((n + 1 − i)/(n + 1)) B_{i,n+1} + ((i + 1)/(n + 1)) B_{i+1,n+1}`. The end coefficients do not change, and repeated elevation makes the coefficients converge to the graph of p.','وهي تأتي من `B_{i,n} = ((n + 1 − i)/(n + 1)) B_{i,n+1} + ((i + 1)/(n + 1)) B_{i+1,n+1}`. ومعاملا الطرفين لا يتغيران، والرفع المتكرر يجعل المعاملات تقترب من منحنى p.'],
],[
  Q('Elevate `p = B_{0,1} + 3B_{1,1}` to degree 2.','ارفع `p = B_{0,1} + 3B_{1,1}` إلى الدرجة 2.','c^* = (1,  2,  3)',
    ['c_0^* = 1,   c_1^* = #f{1}{2}·1 + #f{1}{2}·3 = 2,   c_2^* = 3', ['Check: `(1 − x)^2 + 4x(1 − x) + 3x^2 = 1 + 2x = p`.','تحقق: `(1 − x)^2 + 4x(1 − x) + 3x^2 = 1 + 2x = p`.']],
    ['c^* = (1,  3,  3)','c^* = (1,  1.5,  3)','c^* = (1,  2,  2)']),
  Q('Write `B_{0,1} = 1 − x` in the basis of degree 2.','اكتب `B_{0,1} = 1 − x` في أساس الدرجة 2.','1·B_{0,2} + #f{1}{2}·B_{1,2} + 0·B_{2,2}',
    ['c = (1, 0):   c^* = (1,  #f{1}{2}·1 + #f{1}{2}·0,  0)'], ['1·B_{0,2} + 1·B_{1,2} + 0·B_{2,2}','1·B_{0,2} + 0·B_{1,2} + 0·B_{2,2}','#f{1}{2}·B_{0,2} + #f{1}{2}·B_{1,2}']),
  Q('Elevate the coefficients `(0, 3, 0)` of degree 2 to degree 3.','ارفع المعاملات `(0, 3, 0)` من الدرجة 2 إلى الدرجة 3.','(0,  2,  2,  0)',
    ['c_1^* = #f{1}{3}·0 + #f{2}{3}·3 = 2,   c_2^* = #f{2}{3}·3 + #f{1}{3}·0 = 2'], ['(0,  3,  3,  0)','(0,  1,  1,  0)','(0,  1.5,  1.5,  0)']),
  Q('After degree elevation, which coefficients are certainly unchanged?','بعد رفع الدرجة، أي المعاملات لا تتغير يقيناً؟','c_0^* = c_0,   c_{n+1}^* = c_n',
    [['The end values `p(0)` and `p(1)` are the same polynomial values.','قيمتا الطرفين `p(0)` و `p(1)` هما قيمتا كثيرة الحدود نفسها.']], ['c_1^* = c_1','c_i^* = c_i','c_0^* = 0']),
]);

lesson('502',13,[
  ['The derivative of a basis polynomial is a difference of two basis polynomials of one degree less:','مشتقة كثيرة الحدود الأساسية فرق بين كثيرتي حدود أساسيتين من درجة أقل بواحد:'],
  'B_{i,n}′(x) = n[B_{i−1,n−1}(x) − B_{i,n−1}(x)]',
  ['So the derivative of `p = Σ c_i B_{i,n}` is again in Bernstein form, with coefficients n times the forward differences:','إذن مشتقة `p = Σ c_i B_{i,n}` في صيغة بيرنشتاين أيضاً، بمعاملات هي n مضروبة في الفروق الأمامية:'],
  'p′(x) = n Σ_{i=0}^{n−1} (c_{i+1} − c_i) B_{i,n−1}(x)',
],[
  Q('Differentiate `B_{1,2}` with the rule.','اشتق `B_{1,2}` بالقاعدة.','B_{1,2}′ = 2 − 4x',
    ['2[B_{0,1} − B_{1,1}] = 2[(1 − x) − x] = 2 − 4x'], ['B_{1,2}′ = 2x','B_{1,2}′ = 4x − 2','B_{1,2}′ = 2(1 − x)']),
  Q('Find `p′` for `p = 0·B_{0,2} + 1·B_{1,2} + 4B_{2,2}`, and `p′(0)`, `p′(1)`.','أوجد `p′` للدالة `p = 0·B_{0,2} + 1·B_{1,2} + 4B_{2,2}` و `p′(0)` و `p′(1)`.','p′ = 2B_{0,1} + 6B_{1,1};   p′(0) = 2,   p′(1) = 6',
    ['n(c_1 − c_0) = 2,   n(c_2 − c_1) = 6', ['Check: `p = 2x(1 − x) + 4x^2 = 2x + 2x^2`, `p′ = 2 + 4x`.','تحقق: `p = 2x(1 − x) + 4x^2 = 2x + 2x^2` و `p′ = 2 + 4x`.']],
    ['p′ = B_{0,1} + 3B_{1,1};   p′(0) = 1,   p′(1) = 3','p′ = 2B_{0,1} + 6B_{1,1};   p′(0) = 6,   p′(1) = 2','p′ = 4B_{0,1};   p′(0) = 4,   p′(1) = 4']),
  Q('If all coefficients of p increase, `c_0 ≤ c_1 ≤ … ≤ c_n`, what can be said about p on [0, 1]?','إذا كانت كل معاملات p متزايدة `c_0 ≤ c_1 ≤ … ≤ c_n` فماذا يقال عن p على [0, 1]؟',['p is non-decreasing','p غير متناقصة'],
    ['p′ = n Σ (c_{i+1} − c_i) B_{i,n−1} ≥ 0', ['A sum of non-negative terms with non-negative weights.','مجموع حدود غير سالبة بأوزان غير سالبة.']],
    [['p is constant','p ثابتة'],['Nothing','لا شيء']]),
  Q('Find `p′(1/2)` for `p = 1·B_{0,3} + 2B_{1,3} + 4B_{2,3} + 8B_{3,3}`.','أوجد `p′(1/2)` للدالة `p = 1·B_{0,3} + 2B_{1,3} + 4B_{2,3} + 8B_{3,3}`.','#f{27}{4}',
    ['p′ = 3[1·B_{0,2} + 2B_{1,2} + 4B_{2,2}]', 'x = #f{1}{2}:   3[#f{1}{4} + 2·#f{1}{2} + 4·#f{1}{4}] = 3·#f{9}{4} = #f{27}{4}', ['In fact `p = (1 + x)^3`, and `3(1.5)^2 = 6.75`.','وفي الحقيقة `p = (1 + x)^3` و `3(1.5)^2 = 6.75`.']],
    ['#f{9}{4}','7','3']),
]);

lesson('502',14,[
  ['Repeating the derivative rule k times gives the k-th derivative through the forward differences of the coefficients:','بتكرار قاعدة المشتقة k مرة نحصل على المشتقة ذات الرتبة k عبر الفروق الأمامية للمعاملات:'],
  'p^{(k)}(x) = #f{n!}{(n − k)!} Σ_{i=0}^{n−k} Δ^k c_i B_{i,n−k}(x),   Δc_i = c_{i+1} − c_i',
  ['For example `Δ^2 c_i = c_{i+2} − 2c_{i+1} + c_i`. At the ends only the first or last differences matter: `p^{(k)}(0) = n!/(n − k)!·Δ^k c_0`. If all second differences are non-negative, p is convex.',
   'فمثلاً `Δ^2 c_i = c_{i+2} − 2c_{i+1} + c_i`. وعند الطرفين لا يهم إلا الفرق الأول أو الأخير: `p^{(k)}(0) = n!/(n − k)!·Δ^k c_0`. وإذا كانت كل الفروق الثانية غير سالبة كانت p محدبة.'],
],[
  Q('Find `p″` for `p = 0·B_{0,2} + 1·B_{1,2} + 4B_{2,2}`.','أوجد `p″` للدالة `p = 0·B_{0,2} + 1·B_{1,2} + 4B_{2,2}`.','p″ = 4',
    ['Δ^2 c_0 = 4 − 2 + 0 = 2', 'p″ = 2·1·2 = 4', ['Check: `p = 2x + 2x^2`.','تحقق: `p = 2x + 2x^2`.']], ['p″ = 2','p″ = 8','p″ = 0']),
  Q('Find the second differences of `c = (1, 0, 0, 1)`. Is `p = Σ c_i B_{i,3}` convex?','أوجد الفروق الثانية للمعاملات `c = (1, 0, 0, 1)`. هل `p = Σ c_i B_{i,3}` محدبة؟',['`Δ^2 c = (1, 1)`; yes, p is convex','`Δ^2 c = (1, 1)`، ونعم p محدبة'],
    ['Δc = (−1, 0, 1),   Δ^2 c = (1, 1)', 'p″ = 6(B_{0,1} + B_{1,1}) = 6 > 0'],
    [['`Δ^2 c = (−1, 1)`; no','`Δ^2 c = (−1, 1)`، ولا'],['`Δ^2 c = (1, 1)`; no, it is concave','`Δ^2 c = (1, 1)`، ولا، إنها مقعرة']]),
  Q('Find `p″(0)` for `p = 2B_{0,4} + B_{1,4} + 3B_{2,4} + 0·B_{3,4} + 5B_{4,4}`.','أوجد `p″(0)` للدالة `p = 2B_{0,4} + B_{1,4} + 3B_{2,4} + 0·B_{3,4} + 5B_{4,4}`.','36',
    ['p″(0) = #f{4!}{2!} Δ^2 c_0 = 12(3 − 2 + 2) = 36'], ['12','3','24']),
  Q('Find `p‴` for `p = Σ_{i=0}^{3} i^3 B_{i,3}`, i.e. `c = (0, 1, 8, 27)`.','أوجد `p‴` للدالة `p = Σ_{i=0}^{3} i^3 B_{i,3}` أي `c = (0, 1, 8, 27)`.','p‴ = 36',
    ['Δc = (1, 7, 19),   Δ^2 c = (6, 12),   Δ^3 c = 6', 'p‴ = 3!·6 = 36'], ['p‴ = 6','p‴ = 27','p‴ = 0']),
]);

lesson('502',15,[
  ['Every basis polynomial of degree n has the same integral:','لكل كثيرات الحدود الأساسية من الدرجة n التكامل نفسه:'],
  '∫_0^1 B_{i,n}(x) dx = #f{1}{n + 1},     ∫_0^1 p(x) dx = #f{c_0 + c_1 + ⋯ + c_n}{n + 1}',
  ['So the integral of p is the mean of its coefficients. The indefinite integral stays in Bernstein form, one degree higher:','إذن تكامل p هو متوسط معاملاتها. والتكامل غير المحدد يبقى في صيغة بيرنشتاين بدرجة أعلى بواحد:'],
  '∫_0^x B_{i,n}(s) ds = #f{1}{n + 1} Σ_{j=i+1}^{n+1} B_{j,n+1}(x)',
],[
  Q('Compute `∫_0^1 B_{2,5}(x) dx`.','احسب `∫_0^1 B_{2,5}(x) dx`.','#f{1}{6}',['#f{1}{n + 1} = #f{1}{6}'],['#f{1}{5}','#f{10}{6}','#f{2}{5}']),
  Q('Compute `∫_0^1 p dx` for `p = 1·B_{0,2} + 2B_{1,2} + 3B_{2,2}`.','احسب `∫_0^1 p dx` للدالة `p = 1·B_{0,2} + 2B_{1,2} + 3B_{2,2}`.','2',
    ['#f{1 + 2 + 3}{3} = 2', ['Indeed `p = 1 + 2x` and `∫_0^1 (1 + 2x) dx = 2`.','وفعلاً `p = 1 + 2x` و `∫_0^1 (1 + 2x) dx = 2`.']], ['6','3','1']),
  Q('Write `∫_0^x B_{0,1}(s) ds` in the basis of degree 2.','اكتب `∫_0^x B_{0,1}(s) ds` في أساس الدرجة 2.','#f{1}{2}(B_{1,2} + B_{2,2})',
    ['#f{1}{2} Σ_{j=1}^{2} B_{j,2}', ['Check: `∫_0^x (1 − s) ds = x − x^2/2 = (2x(1 − x) + x^2)/2`.','تحقق: `∫_0^x (1 − s) ds = x − x^2/2 = (2x(1 − x) + x^2)/2`.']],
    ['#f{1}{2}(B_{0,2} + B_{1,2})','B_{1,2} + B_{2,2}','#f{1}{2}B_{2,2}']),
  Q('Find the coefficients of `q(x) = ∫_0^x p(s) ds` for `p = 2B_{0,1} + 4B_{1,1}`.','أوجد معاملات `q(x) = ∫_0^x p(s) ds` للدالة `p = 2B_{0,1} + 4B_{1,1}`.','(0,  1,  3)',
    ['q_j = #f{1}{n + 1}(c_0 + ⋯ + c_{j−1}):   0,   #f{2}{2},   #f{2 + 4}{2}', ['Check: `q = 2x + x^2` and `0·(1 − x)^2 + 1·2x(1 − x) + 3x^2 = 2x + x^2`.','تحقق: `q = 2x + x^2` و `0·(1 − x)^2 + 1·2x(1 − x) + 3x^2 = 2x + x^2`.']],
    ['(0,  2,  6)','(1,  3,  0)','(0,  1,  2)']),
]);

lesson('502',16,[
  ['The product of two Bernstein basis polynomials is a single basis polynomial of the summed degree, times a constant:','حاصل ضرب كثيرتي حدود بيرنشتاين أساسيتين كثيرة حدود أساسية واحدة من مجموع الدرجتين مضروبة في ثابت:'],
  'B_{i,m}(x) B_{j,n}(x) = #f{C(m, i) C(n, j)}{C(m + n, i + j)} B_{i+j,m+n}(x)',
  ['This makes products, squares and variable coefficients easy in the Bernstein basis: the coefficients of `pq` are explicit sums of products of the coefficients of p and q. It is the basis of the product operational matrix (Unit 7).','وهذا يجعل الضرب والتربيع والمعاملات المتغيرة سهلة في أساس بيرنشتاين: معاملات `pq` مجاميع صريحة لحواصل ضرب معاملات p و q. وعليه تقوم المصفوفة التشغيلية للضرب (الوحدة 7).'],
],[
  Q('Write `B_{0,1}·B_{1,1}` as a multiple of one basis polynomial.','اكتب `B_{0,1}·B_{1,1}` مضاعفاً لكثيرة حدود أساسية واحدة.','#f{1}{2} B_{1,2}',
    ['#f{C(1, 0) C(1, 1)}{C(2, 1)} = #f{1}{2}', ['Check: `x(1 − x) = (1/2)·2x(1 − x)`.','تحقق: `x(1 − x) = (1/2)·2x(1 − x)`.']], ['B_{1,2}','2B_{1,2}','#f{1}{2}B_{2,2}']),
  Q('Write `B_{1,2}·B_{1,1}` as a multiple of one basis polynomial.','اكتب `B_{1,2}·B_{1,1}` مضاعفاً لكثيرة حدود أساسية واحدة.','#f{2}{3} B_{2,3}',
    ['#f{C(2, 1) C(1, 1)}{C(3, 2)} = #f{2}{3}', ['Check: `2x(1 − x)·x = (2/3)·3x^2(1 − x)`.','تحقق: `2x(1 − x)·x = (2/3)·3x^2(1 − x)`.']], ['#f{3}{2} B_{2,3}','B_{2,3}','2B_{2,3}']),
  Q('Compute `(B_{1,2})^2` in the basis of degree 4.','احسب `(B_{1,2})^2` في أساس الدرجة 4.','#f{2}{3} B_{2,4}',
    ['#f{C(2, 1)^2}{C(4, 2)} = #f{4}{6} = #f{2}{3}', ['Check: `4x^2(1 − x)^2 = (2/3)·6x^2(1 − x)^2`.','تحقق: `4x^2(1 − x)^2 = (2/3)·6x^2(1 − x)^2`.']], ['#f{4}{6} B_{1,4}','4B_{2,4}','#f{1}{6} B_{2,4}']),
  Q('Find the coefficients of `x·p(x)` in degree 2 for `p = B_{0,1} + 3B_{1,1}`.','أوجد معاملات `x·p(x)` في الدرجة 2 للدالة `p = B_{0,1} + 3B_{1,1}`.','(0,  #f{1}{2},  3)',
    ['x = B_{1,1}:   B_{1,1}B_{0,1} = #f{1}{2}B_{1,2},   B_{1,1}B_{1,1} = B_{2,2}', 'x p = #f{1}{2}B_{1,2} + 3B_{2,2}', ['Check: `x(1 + 2x) = x + 2x^2` and `(1/2)·2x(1 − x) + 3x^2 = x + 2x^2`.','تحقق: `x(1 + 2x) = x + 2x^2` و `(1/2)·2x(1 − x) + 3x^2 = x + 2x^2`.']],
    ['(0,  1,  3)','(1,  #f{1}{2},  3)','(0,  #f{3}{2},  3)']),
]);

lesson('502',17,[
  ['Expanding `(1 − x)^{n−i}` by the binomial theorem gives each basis polynomial in powers of x:','بفك `(1 − x)^{n−i}` بنظرية ذات الحدين نحصل على كل كثيرة أساسية بقوى x:'],
  'B_{i,n}(x) = Σ_{k=i}^{n} (−1)^{k−i} C(n, k) C(k, i) x^k',
  ['So a Bernstein polynomial has the power coefficients `a_k = Σ_{i≤k} (−1)^{k−i} C(n, k) C(k, i) c_i`. The matrix of this map is lower triangular.','إذن معاملات القوى لكثيرة حدود بيرنشتاين هي `a_k = Σ_{i≤k} (−1)^{k−i} C(n, k) C(k, i) c_i`، ومصفوفة هذا التحويل مثلثية سفلية.'],
],[
  Q('Write `B_{1,3}` in powers of x.','اكتب `B_{1,3}` بقوى x.','B_{1,3} = 3x − 6x^2 + 3x^3',
    ['k = 1:  C(3,1)C(1,1) = 3,   k = 2:  −C(3,2)C(2,1) = −6,   k = 3:  C(3,3)C(3,1) = 3'], ['B_{1,3} = 3x − 3x^2 + x^3','B_{1,3} = 3x + 6x^2 + 3x^3','B_{1,3} = x − 2x^2 + x^3']),
  Q('Write `p = 1·B_{0,2} + 1·B_{1,2} + 1·B_{2,2}` in powers of x.','اكتب `p = 1·B_{0,2} + 1·B_{1,2} + 1·B_{2,2}` بقوى x.','p = 1',
    [['Partition of unity: all coefficients equal 1.','تجزئة الواحد: كل المعاملات تساوي 1.']], ['p = 1 + 2x + x^2','p = 3','p = 1 + x + x^2']),
  Q('Write `p = 0·B_{0,2} + 1·B_{1,2} + 4B_{2,2}` in powers of x.','اكتب `p = 0·B_{0,2} + 1·B_{1,2} + 4B_{2,2}` بقوى x.','p = 2x + 2x^2',
    ['B_{1,2} = 2x − 2x^2,   B_{2,2} = x^2', 'p = 2x − 2x^2 + 4x^2 = 2x + 2x^2'], ['p = x + 4x^2','p = 2x + 4x^2','p = 2x − 2x^2']),
  Q('Find the leading power coefficient `a_n` in terms of the Bernstein coefficients for n = 2.','أوجد معامل القوة العليا `a_n` بدلالة معاملات بيرنشتاين عند n = 2.','a_2 = c_0 − 2c_1 + c_2',
    ['a_2 = C(2,2)[C(2,0)c_0 − C(2,1)c_1 + C(2,2)c_2]', ['It is `Δ^2 c_0`: the leading coefficient is an n-th difference.','وهو `Δ^2 c_0`: المعامل الرئيس فرق من الرتبة n.']],
    ['a_2 = c_2','a_2 = c_0 + c_1 + c_2','a_2 = c_2 − c_0']),
]);

lesson('502',18,[
  ['The converse direction: every power of x has explicit Bernstein coefficients:','والاتجاه العكسي: لكل قوة من x معاملات بيرنشتاين صريحة:'],
  'x^k = Σ_{i=k}^{n} #f{C(i, k)}{C(n, k)} B_{i,n}(x),   k ≤ n',
  ['In particular `1 = Σ B_{i,n}` and `x = Σ (i/n) B_{i,n}`: the coefficients of x are the equally spaced points `i/n`. A polynomial `p = Σ a_k x^k` has the Bernstein coefficients `c_i = Σ_{k≤i} (C(i, k)/C(n, k)) a_k`.',
   'وبالخصوص `1 = Σ B_{i,n}` و `x = Σ (i/n) B_{i,n}`: معاملات x هي النقاط متساوية التباعد `i/n`. وكثيرة الحدود `p = Σ a_k x^k` معاملاتها في بيرنشتاين `c_i = Σ_{k≤i} (C(i, k)/C(n, k)) a_k`.'],
],[
  Q('Write `x` in the Bernstein basis of degree 3.','اكتب `x` في أساس بيرنشتاين من الدرجة 3.','c = (0,  #f{1}{3},  #f{2}{3},  1)',
    ['c_i = #f{C(i, 1)}{C(3, 1)} = #f{i}{3}'], ['c = (0,  1,  2,  3)','c = (0,  #f{1}{3},  #f{1}{3},  1)','c = (1,  #f{2}{3},  #f{1}{3},  0)']),
  Q('Write `x^2` in the Bernstein basis of degree 3.','اكتب `x^2` في أساس بيرنشتاين من الدرجة 3.','c = (0,  0,  #f{1}{3},  1)',
    ['c_i = #f{C(i, 2)}{C(3, 2)} = #f{C(i, 2)}{3}', ['Check: `(1/3)·3x^2(1 − x) + x^3 = x^2`.','تحقق: `(1/3)·3x^2(1 − x) + x^3 = x^2`.']], ['c = (0,  0,  1,  1)','c = (0,  #f{1}{9},  #f{4}{9},  1)','c = (0,  0,  #f{2}{3},  1)']),
  Q('Write `p = 1 + 2x` in the Bernstein basis of degree 2.','اكتب `p = 1 + 2x` في أساس بيرنشتاين من الدرجة 2.','c = (1,  2,  3)',
    ['c_i = 1 + 2·#f{i}{2} = 1 + i'], ['c = (1,  3,  3)','c = (1,  1,  2)','c = (1,  2,  2)']),
  Q('Write `x^2` in the Bernstein basis of degree 4 and evaluate the coefficients.','اكتب `x^2` في أساس بيرنشتاين من الدرجة 4 واحسب المعاملات.','c = (0,  0,  #f{1}{6},  #f{1}{2},  1)',
    ['c_i = #f{C(i, 2)}{C(4, 2)} = #f{C(i, 2)}{6}:   0, 0, #f{1}{6}, #f{3}{6}, #f{6}{6}', ['The coefficients lie above the curve `x^2` at `i/4` (`1/16, 1/4, 9/16`), as for any convex function.','المعاملات تقع فوق منحنى `x^2` عند `i/4` (`1/16, 1/4, 9/16`)، كما لأي دالة محدبة.']],
    ['c = (0,  #f{1}{16},  #f{1}{4},  #f{9}{16},  1)','c = (0,  0,  #f{1}{2},  #f{1}{2},  1)','c = (0,  #f{1}{6},  #f{1}{3},  #f{1}{2},  1)']),
]);

lesson('502',19,[
  ['The maps between the power and the Bernstein coefficients are triangular matrices. For n = 2, with `a = Mc`:','التحويلات بين معاملات القوى ومعاملات بيرنشتاين مصفوفات مثلثية. وعند n = 2 مع `a = Mc`:'],
  'M = #m{1, 0, 0 ;; −2, 2, 0 ;; 1, −2, 1},     M^{−1} = #m{1, 0, 0 ;; 1, 1/2, 0 ;; 1, 1, 1}',
  ['Their condition number grows exponentially: `κ_∞ = 12, 48, 480, 1.7 × 10^5, 1.3 × 10^{10}` for n = 2, 3, 5, 10, 20. Converting a high-degree polynomial to the power form loses many digits, so Bernstein computations should stay in the Bernstein form (de Casteljau, differences, products).',
   'وعدد الشرط ينمو أسياً: `κ_∞ = 12, 48, 480, 1.7 × 10^5, 1.3 × 10^{10}` عند n = 2, 3, 5, 10, 20. فتحويل كثيرة حدود عالية الدرجة إلى صيغة القوى يضيع أرقاماً كثيرة، ولهذا يجب أن تبقى حسابات بيرنشتاين في صيغة بيرنشتاين (دي كاستلجو والفروق والضرب).'],
],[
  Q('Use `M^{−1}` to convert `p = 3 − 4x + x^2` to Bernstein coefficients.','استخدم `M^{−1}` لتحويل `p = 3 − 4x + x^2` إلى معاملات بيرنشتاين.','c = (3,  1,  0)',
    ['c_0 = a_0 = 3,   c_1 = a_0 + #f{a_1}{2} = 1,   c_2 = a_0 + a_1 + a_2 = 0', ['Check the end values: `p(0) = 3`, `p(1) = 0`.','تحقق من قيمتي الطرفين: `p(0) = 3` و `p(1) = 0`.']],
    ['c = (3,  −4,  1)','c = (3,  −1,  0)','c = (3,  1,  1)']),
  Q('Compute `‖M‖_∞` and `‖M^{−1}‖_∞` for n = 2.','احسب `‖M‖_∞` و `‖M^{−1}‖_∞` عند n = 2.','‖M‖_∞ = 4,   ‖M^{−1}‖_∞ = 3',
    [['The absolute row sums of M are 1, 4, 4, and those of `M^{−1}` are 1, 1.5, 3.','مجاميع القيم المطلقة لصفوف M هي 1 و 4 و 4، ولصفوف `M^{−1}` هي 1 و 1.5 و 3.'], 'κ_∞ = 4·3 = 12'],
    ['‖M‖_∞ = 1,   ‖M^{−1}‖_∞ = 1','‖M‖_∞ = 4,   ‖M^{−1}‖_∞ = 1','‖M‖_∞ = 2,   ‖M^{−1}‖_∞ = 3']),
  Q('With `κ ≈ 1.3 × 10^{10}` for n = 20, about how many digits survive a conversion in double precision?','مع `κ ≈ 1.3 × 10^{10}` عند n = 20، كم رقماً يبقى تقريباً بعد التحويل في الدقة المضاعفة؟','≈ 6',
    ['16 − log_{10}(1.3 × 10^{10}) ≈ 16 − 10 = 6'], ['≈ 16','≈ 10','≈ 1']),
  Q('Write M for n = 1.','اكتب M عند n = 1.','M = #m{1, 0 ;; −1, 1}',
    ['p = c_0(1 − x) + c_1 x = c_0 + (c_1 − c_0)x'], ['M = #m{1, 0 ;; 1, 1}','M = #m{1, −1 ;; 0, 1}','M = #m{0, 1 ;; 1, 0}']),
]);

lesson('502',20,[
  ['The n + 1 polynomials `B_{0,n}, …, B_{n,n}` are linearly independent, so they form a basis of `Π_n`. Proof: the matrix M that expresses them in the power basis is triangular with diagonal entries `C(n, i) ≠ 0`, so it is invertible. Equivalently, `Σ c_i B_{i,n} = 0` forces `c_0 = p(0) = 0`; dividing by x and repeating forces every coefficient to vanish.',
   'كثيرات الحدود `B_{0,n}, …, B_{n,n}` وعددها n + 1 مستقلة خطياً، فهي أساس للفضاء `Π_n`. البرهان: المصفوفة M التي تعبّر عنها بأساس القوى مثلثية وعناصر قطرها `C(n, i) ≠ 0` فهي قابلة للعكس. أو بصورة مكافئة: `Σ c_i B_{i,n} = 0` يفرض `c_0 = p(0) = 0`، وبالقسمة على x والتكرار تنعدم كل المعاملات.'],
  'dim Π_n = n + 1,   p ∈ Π_n  ⇒  p = Σ_{i=0}^{n} c_i B_{i,n}',
  ['Uniqueness of the coefficients is what makes statements like «`p(0) = c_0`» and «reversed coefficients» meaningful.','ووحدانية المعاملات هي ما يجعل عبارات مثل «`p(0) = c_0`» و«المعاملات المعكوسة» ذات معنى.'],
],[
  Q('How many Bernstein polynomials are needed for a basis of `Π_5`?','كم كثيرة حدود بيرنشتاين يلزم لأساس الفضاء `Π_5`؟','6',['n + 1 = 6'],['5','7','32']),
  Q('Is `{B_{0,2}, B_{2,2}}` a basis of `Π_2`?','هل `{B_{0,2}, B_{2,2}}` أساس للفضاء `Π_2`؟',['No: two functions cannot span a space of dimension 3','لا: دالتان لا تولّدان فضاءً بعده 3'],
    [['For example `B_{1,2}` is not a combination of `(1 − x)^2` and `x^2`.','فمثلاً `B_{1,2}` ليست تركيباً من `(1 − x)^2` و `x^2`.']],
    [['Yes','نعم'],['Yes, on [0, 1] only','نعم، على [0, 1] فقط']]),
  Q('What are the diagonal entries of the matrix that writes `B_{i,3}` in powers of x?','ما عناصر قطر المصفوفة التي تكتب `B_{i,3}` بقوى x؟','1,  3,  3,  1',
    ['B_{i,n} = C(n, i) x^i + …', ['They are `C(3, i)`, all non-zero, so the matrix is invertible.','وهي `C(3, i)` وكلها غير صفرية، فالمصفوفة قابلة للعكس.']],
    ['1,  1,  1,  1','0,  1,  2,  3','1,  −3,  3,  −1']),
  Q('Suppose `Σ_{i=0}^{2} c_i B_{i,2}(x) = 0` for all x. Show `c_0 = c_1 = c_2 = 0`.','افرض أن `Σ_{i=0}^{2} c_i B_{i,2}(x) = 0` لكل x. أثبت أن `c_0 = c_1 = c_2 = 0`.',['Shown','ثبت'],
    ['x = 0:  c_0 = 0,     x = 1:  c_2 = 0', ['Then `c_1·2x(1 − x) = 0` for all x, so `c_1 = 0`.','ثم `c_1·2x(1 − x) = 0` لكل x فيكون `c_1 = 0`.']]),
]);

/* ---- 502 · Unit 3 (lessons 21–30): the Bernstein operator ---- */
lesson('502',21,[
  ['Bernstein’s idea: use the values of f at the equally spaced points `i/n` as coefficients:','فكرة بيرنشتاين: استخدم قيم f عند النقاط متساوية التباعد `i/n` معاملاتٍ:'],
  '(B_n f)(x) = Σ_{i=0}^{n} f(#f{i}{n}) B_{i,n}(x)',
  ['This is a polynomial of degree n built from n + 1 samples, but it is not an interpolant: in general `B_n f(i/n) ≠ f(i/n)` except at the two ends. It is a smoothed version of f, a weighted average of its values with weights concentrated near x.',
   'وهذه كثيرة حدود من الدرجة n مبنية من n + 1 عينة، لكنها ليست استكمالاً: عموماً `B_n f(i/n) ≠ f(i/n)` إلا عند الطرفين. إنها نسخة منعّمة من f، متوسط موزون لقيمها بأوزان مركّزة قرب x.'],
],[
  Q('Find `B_1 f`.','أوجد `B_1 f`.','B_1 f = f(0)(1 − x) + f(1)x',
    ['n = 1:   f(0)B_{0,1} + f(1)B_{1,1}', ['It is the straight line through the two end values.','وهو المستقيم المار بقيمتي الطرفين.']], ['B_1 f = f(x)','B_1 f = f(#f{1}{2})','B_1 f = f(0) + f(1)x']),
  Q('Compute `B_2 f` for `f(x) = x^2`.','احسب `B_2 f` للدالة `f(x) = x^2`.','B_2 f = #f{x + x^2}{2}',
    ['f(0) = 0,   f(#f{1}{2}) = #f{1}{4},   f(1) = 1', '#f{1}{4}·2x(1 − x) + x^2 = #f{x}{2} + #f{x^2}{2}'], ['B_2 f = x^2','B_2 f = #f{x^2}{2}','B_2 f = x']),
  Q('Compute `B_2 f(1/2)` for `f(x) = |x − 1/2|` and compare with `f(1/2) = 0`.','احسب `B_2 f(1/2)` للدالة `f(x) = |x − 1/2|` وقارن بـ `f(1/2) = 0`.','#f{1}{4}',
    ['f(0) = #f{1}{2},   f(#f{1}{2}) = 0,   f(1) = #f{1}{2}', '#f{1}{2}·#f{1}{4} + 0 + #f{1}{2}·#f{1}{4} = #f{1}{4}', ['The corner is smoothed out.','الزاوية تُنعَّم.']],
    ['0','#f{1}{2}','#f{1}{8}']),
  Q('Is `B_n f(1/2) = f(1/2)` in general?','هل `B_n f(1/2) = f(1/2)` في العموم؟',['No: `B_n f` interpolates f only at x = 0 and x = 1','لا: `B_n f` تستكمل f عند x = 0 و x = 1 فقط'],
    [['The previous example gave 1/4 instead of 0.','المثال السابق أعطى 1/4 بدل 0.']],
    [['Yes, always','نعم دائماً'],['Yes, for even n','نعم عند n زوجي']]),
]);

lesson('502',22,[
  ['The three test functions behave simply under `B_n`:','الدوال الاختبارية الثلاث تسلك ببساطة تحت `B_n`:'],
  'B_n 1 = 1,   B_n x = x,   B_n x^2 = x^2 + #f{x(1 − x)}{n}',
  ['The first is the partition of unity, the second `Σ (i/n) B_{i,n} = x`. The third shows the error: `B_n x^2 − x^2 = x(1 − x)/n`, at most `1/(4n)`. Equivalently `Σ_i (i/n − x)^2 B_{i,n}(x) = x(1 − x)/n`, the variance of a binomial proportion.',
   'الأولى تجزئة الواحد، والثانية `Σ (i/n) B_{i,n} = x`. والثالثة تبيّن الخطأ: `B_n x^2 − x^2 = x(1 − x)/n` وأكبره `1/(4n)`. وبصورة مكافئة `Σ_i (i/n − x)^2 B_{i,n}(x) = x(1 − x)/n`، وهو تباين النسبة في التوزيع ذي الحدين.'],
],[
  Q('Compute `B_10 x^2` at x = 0.5.','احسب `B_10 x^2` عند x = 0.5.','0.275',
    ['0.25 + #f{0.5·0.5}{10} = 0.25 + 0.025'], ['0.25','0.3','0.2525']),
  Q('Find the largest error `max |B_n x^2 − x^2|` on [0, 1].','أوجد أكبر خطأ `max |B_n x^2 − x^2|` على [0, 1].','#f{1}{4n}',
    ['#f{x(1 − x)}{n} ≤ #f{1}{4n}', ['The maximum is at x = 1/2.','القيمة العظمى عند x = 1/2.']], ['#f{1}{n}','#f{1}{2n}','#f{1}{n^2}']),
  Q('How large must n be for `|B_n x^2 − x^2| ≤ 0.001`?','كم يجب أن يكون n لكي `|B_n x^2 − x^2| ≤ 0.001`؟','n ≥ 250',
    ['#f{1}{4n} ≤ 0.001  ⇒  n ≥ 250'], ['n ≥ 1000','n ≥ 32','n ≥ 25']),
  Q('Compute `Σ_{i=0}^{4} (i/4 − 1/2)^2 B_{i,4}(1/2)`.','احسب `Σ_{i=0}^{4} (i/4 − 1/2)^2 B_{i,4}(1/2)`.','#f{1}{16}',
    ['#f{x(1 − x)}{n} = #f{1/4}{4} = #f{1}{16}'], ['#f{1}{4}','0','#f{1}{8}']),
]);

lesson('502',23,[
  ['`B_n` is a linear and positive operator:','`B_n` مؤثر خطي وإيجابي:'],
  'B_n(αf + βg) = α B_n f + β B_n g,     f ≥ 0  ⇒  B_n f ≥ 0',
  ['Positivity has strong consequences: `f ≤ g ⇒ B_n f ≤ B_n g`, `|B_n f| ≤ B_n|f|`, and `‖B_n f‖_∞ ≤ ‖f‖_∞`, so the operator norm is exactly 1. These are exactly the properties used in the convergence proofs. Note that `B_n` is not a projection: applying it twice changes the result.',
   'وللإيجابية نتائج قوية: `f ≤ g ⇒ B_n f ≤ B_n g` و `|B_n f| ≤ B_n|f|` و `‖B_n f‖_∞ ≤ ‖f‖_∞`، فمعيار المؤثر يساوي 1 تماماً. وهذه هي الخواص المستخدمة في براهين التقارب. ولاحظ أن `B_n` ليس إسقاطاً: تطبيقه مرتين يغير النتيجة.'],
],[
  Q('Compute `B_n(3 + 2x − x^2)`.','احسب `B_n(3 + 2x − x^2)`.','3 + 2x − x^2 − #f{x(1 − x)}{n}',
    ['3B_n 1 + 2B_n x − B_n x^2 = 3 + 2x − x^2 − #f{x(1 − x)}{n}'], ['3 + 2x − x^2','3 + 2x − x^2 + #f{x(1 − x)}{n}','3 + 2x']),
  Q('If `0 ≤ f ≤ 1` on [0, 1], what is known about `B_n f`?','إذا كانت `0 ≤ f ≤ 1` على [0, 1] فماذا يُعرف عن `B_n f`؟','0 ≤ B_n f ≤ 1',
    ['B_n 0 = 0 ≤ B_n f ≤ B_n 1 = 1'], ['B_n f = f','B_n f ≥ 1','−1 ≤ B_n f ≤ 2']),
  Q('What is the operator norm of `B_n` on `C[0, 1]` with the maximum norm?','ما معيار المؤثر `B_n` على `C[0, 1]` بمعيار القيمة العظمى؟','1',
    ['|B_n f| ≤ ‖f‖_∞ Σ B_{i,n} = ‖f‖_∞,   B_n 1 = 1'], ['n','n + 1','2^n']),
  Q('Show that `B_n` is not a projection by computing `B_n(B_n x^2)`.','أثبت أن `B_n` ليس إسقاطاً بحساب `B_n(B_n x^2)`.','x^2 + x(1 − x)(#f{2}{n} − #f{1}{n^2})',
    ['B_n(x^2 + #f{x − x^2}{n}) = x^2 + #f{x(1 − x)}{n} + #f{1}{n}(x − x^2 − #f{x(1 − x)}{n})', ['This differs from `B_n x^2`, so `B_n^2 ≠ B_n`.','وهذا يختلف عن `B_n x^2` إذن `B_n^2 ≠ B_n`.']],
    ['x^2 + #f{x(1 − x)}{n}','x^2','x^2 + #f{2x(1 − x)}{n}']),
]);

lesson('502',24,[
  ['How fast `B_n f` converges depends on how fast f can change. The modulus of continuity measures this:','سرعة تقارب `B_n f` تعتمد على سرعة تغير f، ويقيسها مقياس الاتصال:'],
  'ω(f, δ) = sup_{|x − y| ≤ δ} |f(x) − f(y)|',
  ['A function on a closed interval is uniformly continuous exactly when `ω(f, δ) → 0` as `δ → 0`. For a Lipschitz function with constant L, `ω(f, δ) ≤ Lδ`; for `#r{x}` it is `#r{δ}`, which is slower.','والدالة على مجال مغلق متصلة بانتظام تماماً عندما `ω(f, δ) → 0` بشرط `δ → 0`. وللدالة التي تحقق شرط ليبشيتز بالثابت L يكون `ω(f, δ) ≤ Lδ`، وللدالة `#r{x}` هو `#r{δ}` وهو أبطأ.'],
],[
  Q('Find `ω(x^2, δ)` on [0, 1].','أوجد `ω(x^2, δ)` على [0, 1].','2δ − δ^2',
    ['|x^2 − y^2| = |x − y|·|x + y|', ['The largest change over a step δ is at the right end: `1 − (1 − δ)^2 = 2δ − δ^2`.','أكبر تغير على خطوة δ عند الطرف الأيمن: `1 − (1 − δ)^2 = 2δ − δ^2`.']],
    ['δ^2','2δ','δ']),
  Q('Find `ω(#r{x}, δ)` on [0, 1].','أوجد `ω(#r{x}, δ)` على [0, 1].','#r{δ}',
    [['The largest change is at the left end: `#r{δ} − #r{0}`.','أكبر تغير عند الطرف الأيسر: `#r{δ} − #r{0}`.']], ['δ','#f{δ}{2}','2#r{δ}']),
  Q('Find `ω(|x − 1/2|, δ)`.','أوجد `ω(|x − 1/2|, δ)`.','δ',
    [['The function is Lipschitz with L = 1, and its slope is ±1 on each side.','الدالة تحقق ليبشيتز مع L = 1، وميلها ±1 على كل جانب.']], ['2δ','#f{δ}{2}','δ^2']),
  Q('`f(x) = sin x` on [0, 1]. Give a bound for `ω(f, δ)`.','`f(x) = sin x` على [0, 1]. أعط حداً لـ `ω(f, δ)`.','ω ≤ δ',
    ['|sin x − sin y| ≤ max|cos|·|x − y| ≤ |x − y|'], ['ω ≤ δ^2','ω ≤ #r{δ}','ω ≤ sin δ^2']),
]);

lesson('502',25,[
  ['Weierstrass’ approximation theorem (1885): every continuous function on a closed interval `[a, b]` can be approximated uniformly, as closely as we like, by polynomials:','نظرية فايرشتراس للتقريب (1885): كل دالة متصلة على مجال مغلق `[a, b]` يمكن تقريبها بانتظام وبأي دقة نريد بكثيرات حدود:'],
  'f ∈ C[a, b],  ε > 0   ⇒   ∃ p:   max_{a≤x≤b} |f(x) − p(x)| < ε',
  ['The theorem says nothing about the degree needed, and it needs both continuity and a closed bounded interval. It is the foundation of every polynomial method in this programme: it guarantees that the spaces `Π_n` are big enough.','والنظرية لا تقول شيئاً عن الدرجة اللازمة، وتحتاج الاتصال ومجالاً مغلقاً محدوداً معاً. وهي أساس كل طريقة بكثيرات الحدود في هذا البرنامج: تضمن أن الفضاءات `Π_n` كبيرة بما يكفي.'],
],[
  Q('Does a polynomial exist within 0.01 of `|x − 1/2|` on [0, 1]?','هل توجد كثيرة حدود على بعد 0.01 من `|x − 1/2|` على [0, 1]؟',['Yes','نعم'],
    [['The function is continuous on a closed interval; the corner only affects the degree needed.','الدالة متصلة على مجال مغلق، والزاوية تؤثر في الدرجة اللازمة فقط.']], [['No, because of the corner','لا، بسبب الزاوية']]),
  Q('Can `1/x` be approximated uniformly by polynomials on `(0, 1]`?','هل يمكن تقريب `1/x` بانتظام بكثيرات حدود على `(0, 1]`؟',['No: it is unbounded, while every polynomial is bounded there','لا: إنها غير محدودة، بينما كل كثيرة حدود محدودة هناك'],
    [['The theorem needs a closed bounded interval and a continuous function on it.','النظرية تحتاج مجالاً مغلقاً محدوداً ودالة متصلة عليه.']], [['Yes','نعم']]),
  Q('A function has a jump at x = 1/2. Can polynomials approximate it uniformly on [0, 1]?','دالة لها قفزة عند x = 1/2. هل تقرّبها كثيرات الحدود بانتظام على [0, 1]؟',['No: a uniform limit of continuous functions is continuous','لا: النهاية المنتظمة لدوال متصلة دالة متصلة'],
    [['Polynomials can approach it in the `L^2` sense, but not uniformly.','يمكن أن تقترب منها الكثيرات بمعنى `L^2` لكن ليس بانتظام.']], [['Yes','نعم']]),
  Q('Which proof of the theorem gives an explicit sequence of polynomials?','أي برهان للنظرية يعطي متتالية صريحة من كثيرات الحدود؟',['Bernstein’s proof: `B_n f → f` uniformly','برهان بيرنشتاين: `B_n f → f` بانتظام'],
    [['The polynomials `B_n f` need only the values `f(i/n)`.','الكثيرات `B_n f` لا تحتاج إلا القيم `f(i/n)`.']], [['None: the theorem is purely existential','لا يوجد: النظرية وجودية فقط']]),
]);

lesson('502',26,[
  ['Bernstein’s proof (1912) is short. Since `Σ B_{i,n} = 1`:','برهان بيرنشتاين (1912) قصير. بما أن `Σ B_{i,n} = 1`:'],
  '|B_n f(x) − f(x)| ≤ Σ_i |f(#f{i}{n}) − f(x)| B_{i,n}(x)',
  ['Split the sum. For `|i/n − x| < δ` the terms are below ε by uniform continuity. For the far terms use `|f(i/n) − f(x)| ≤ 2M` (M = max|f|) and Chebyshev’s inequality with the variance `x(1 − x)/n`:','نقسم المجموع. عند `|i/n − x| < δ` تكون الحدود أقل من ε بالاتصال المنتظم. وللحدود البعيدة نستخدم `|f(i/n) − f(x)| ≤ 2M` (حيث M = max|f|) ومتباينة تشيبيشيف مع التباين `x(1 − x)/n`:'],
  'Σ_{|i/n − x| ≥ δ} B_{i,n}(x) ≤ #f{x(1 − x)}{n δ^2} ≤ #f{1}{4n δ^2}',
  ['So `|B_n f − f| ≤ ε + 2M/(4nδ^2)`, which is below 2ε for n large: uniform convergence.','إذن `|B_n f − f| ≤ ε + 2M/(4nδ^2)`، وهو أقل من 2ε عند n كبير: تقارب منتظم.'],
],[
  Q('With M = 1, δ = 0.1 and n = 1000, bound the far part `2M/(4nδ^2)`.','مع M = 1 و δ = 0.1 و n = 1000 أوجد حد الجزء البعيد `2M/(4nδ^2)`.','0.05',
    ['#f{2}{4·1000·0.01} = #f{2}{40} = 0.05'], ['0.005','0.5','0.0005']),
  Q('With M = 1 and δ = 0.1, how large must n be for the far part to be ≤ 0.01?','مع M = 1 و δ = 0.1 كم يجب أن تكون n ليكون الجزء البعيد ≤ 0.01؟','n ≥ 5000',
    ['#f{2}{4n·0.01} ≤ 0.01  ⇒  n ≥ #f{2}{0.0004} = 5000'], ['n ≥ 500','n ≥ 50000','n ≥ 100']),
  Q('Which identity gives the bound `Σ_{|i/n − x| ≥ δ} B_{i,n} ≤ x(1 − x)/(nδ^2)`?','أي متطابقة تعطي الحد `Σ_{|i/n − x| ≥ δ} B_{i,n} ≤ x(1 − x)/(nδ^2)`؟','Σ_i (#f{i}{n} − x)^2 B_{i,n}(x) = #f{x(1 − x)}{n}',
    [['In the far terms `(i/n − x)^2/δ^2 ≥ 1`, so they are bounded by the whole weighted sum divided by `δ^2`.','في الحدود البعيدة `(i/n − x)^2/δ^2 ≥ 1` فتُحد بالمجموع الموزون كله مقسوماً على `δ^2`.']],
    ['Σ_i B_{i,n}(x) = 1','Σ_i #f{i}{n} B_{i,n}(x) = x','B_{i,n}(x) ≤ 1']),
  Q('What is the probabilistic meaning of the proof?','ما المعنى الاحتمالي للبرهان؟',['The law of large numbers: the proportion `S_n/n` of a binomial variable concentrates near x','قانون الأعداد الكبيرة: النسبة `S_n/n` لمتغير ذي الحدين تتركز قرب x'],
    ['B_n f(x) = E[f(S_n/n)],   S_n ~ Bin(n, x)'], [['The central limit theorem for sums of uniform variables','نظرية النهاية المركزية لمجاميع متغيرات منتظمة']]),
]);

lesson('502',27,[
  ['Korovkin’s theorem explains why the three test functions are enough. If `L_n` are linear positive operators on `C[a, b]` and','نظرية كوروفكين تفسر لماذا تكفي الدوال الاختبارية الثلاث. إذا كانت `L_n` مؤثرات خطية إيجابية على `C[a, b]` وكان'],
  'L_n 1 → 1,   L_n x → x,   L_n x^2 → x^2',
  ['(all three uniformly on `[a, b]`),','(الثلاث بانتظام على `[a, b]`)،'],
  ['then `L_n f → f` uniformly for every continuous f. For Bernstein operators this gives Weierstrass’ theorem at once, since `B_n x^2 = x^2 + x(1 − x)/n`. The same check is used for every positive operator in Unit 10 (Kantorovich, Durrmeyer, Szász, …).',
   'فإن `L_n f → f` بانتظام لكل دالة متصلة f. ولمؤثرات بيرنشتاين يعطي هذا نظرية فايرشتراس مباشرة لأن `B_n x^2 = x^2 + x(1 − x)/n`. ويُستخدم التحقق نفسه لكل مؤثر إيجابي في الوحدة 10 (كانتوروفيتش ودورماير وساس …).'],
],[
  Q('Which three functions must be checked in Korovkin’s theorem?','ما الدوال الثلاث التي يجب التحقق منها في نظرية كوروفكين؟','1,   x,   x^2',
    [['Convergence on these three test functions implies convergence for every continuous f.','التقارب على هذه الدوال الثلاث يقتضي التقارب لكل دالة متصلة f.']], ['1,   x,   x^3','x,   x^2,   x^3','sin x,   cos x,   1']),
  Q('An operator satisfies `L_n 1 = 1`, `L_n x = x`, `L_n x^2 = x^2 + 1/#r{n}`. Does `L_n f → f`, provided it is positive?','مؤثر يحقق `L_n 1 = 1` و `L_n x = x` و `L_n x^2 = x^2 + 1/#r{n}`. هل `L_n f → f` بشرط أن يكون إيجابياً؟',['Yes','نعم'],
    ['#f{1}{#r{n}} → 0'], [['No','لا']]),
  Q('Can Korovkin’s theorem be applied to Lagrange interpolation at equally spaced points?','هل تنطبق نظرية كوروفكين على استكمال لاجرانج بنقاط متساوية التباعد؟',['No: the interpolation operator is not positive (its Lagrange functions take negative values)','لا: مؤثر الاستكمال ليس إيجابياً (دوال لاجرانج تأخذ قيماً سالبة)'],
    [['Indeed it reproduces 1, x, x² exactly but still diverges for Runge’s function.','وهو فعلاً يعيد 1 و x و x² بدقة لكنه يتباعد مع دالة رونج.']], [['Yes','نعم']]),
  Q('Check the three Korovkin conditions for `B_n`.','تحقق من شروط كوروفكين الثلاثة لـ `B_n`.',['All hold: `1 → 1`, `x → x` exactly, and `x^2 + x(1 − x)/n → x^2`','كلها تتحقق: `1 → 1` و `x → x` بدقة، و `x^2 + x(1 − x)/n → x^2`'],
    ['‖B_n x^2 − x^2‖_∞ = #f{1}{4n} → 0']),
]);

lesson('502',28,[
  ['A quantitative version of Bernstein’s theorem (Popoviciu):','صيغة كمية لنظرية بيرنشتاين (بوبوفيتشيو):'],
  '‖B_n f − f‖_∞ ≤ #f{3}{2} ω(f, #f{1}{#r{n}})',
  ['For a Lipschitz function the error is at most `(3/2)L/#r{n}`; for `#r{x}` it is `O(n^{−1/4})`. To halve the bound for a Lipschitz function, n must be multiplied by 4.','وللدالة التي تحقق ليبشيتز يكون الخطأ على الأكثر `(3/2)L/#r{n}`، وللدالة `#r{x}` يكون `O(n^{−1/4})`. ولتنصيف الحد لدالة ليبشيتز يجب ضرب n في 4.'],
],[
  Q('Bound `‖B_100 f − f‖` for a Lipschitz f with L = 1.','أوجد حداً لـ `‖B_100 f − f‖` لدالة ليبشيتز مع L = 1.','0.15',
    ['#f{3}{2}·#f{1}{#r{100}} = 0.15'], ['0.015','0.01','1.5']),
  Q('Bound `‖B_n f − f‖` for `f = #r{x}` with `n = 10^4`.','أوجد حداً لـ `‖B_n f − f‖` للدالة `f = #r{x}` عند `n = 10^4`.','0.15',
    ['ω(#r{x}, δ) = #r{δ}:   #f{3}{2}·(10^{−2})^{1/2} = #f{3}{2}·0.1'], ['0.0015','0.015','1.5 × 10^{−4}']),
  Q('By what factor must n grow to halve the bound for a Lipschitz function?','بأي عامل يجب أن تكبر n لتنصيف الحد لدالة ليبشيتز؟','4',
    ['#f{1}{#r{4n}} = #f{1}{2}·#f{1}{#r{n}}'], ['2','8','16']),
  Q('For `f = x^2` compare the true error `1/(4n)` with Popoviciu’s bound at n = 100.','للدالة `f = x^2` قارن الخطأ الحقيقي `1/(4n)` بحد بوبوفيتشيو عند n = 100.','0.0025  vs  ≈ 0.29',
    ['#f{1}{400} = 0.0025', '#f{3}{2}ω(x^2, 0.1) = 1.5(0.2 − 0.01) = 0.285', ['The bound is general; for smooth functions Voronovskaya’s theorem is sharper.','الحد عام، وللدوال الملساء نظرية فورونوفسكايا أدق.']],
    ['0.0025  vs  0.0025','0.025  vs  ≈ 0.29','0.29  vs  0.0025']),
]);

lesson('502',29,[
  ['For smooth f the error of `B_n f` has an exact leading term (Voronovskaya, 1932):','للدالة الملساء f للخطأ في `B_n f` حد رئيس مضبوط (فورونوفسكايا 1932):'],
  'lim_{n→∞} n[B_n f(x) − f(x)] = #f{x(1 − x)}{2} f″(x)',
  ['So `B_n f − f ≈ x(1 − x) f″(x)/(2n)`: the error is of order exactly `1/n` wherever `f″ ≠ 0`, positive where f is convex and negative where it is concave. For `f = x^2` it is exact: `x(1 − x)/n`.','إذن `B_n f − f ≈ x(1 − x) f″(x)/(2n)`: الخطأ من الرتبة `1/n` تماماً أينما `f″ ≠ 0`، موجب حيث f محدبة وسالب حيث مقعرة. وللدالة `f = x^2` هو مضبوط: `x(1 − x)/n`.'],
],[
  Q('Estimate `B_100 e^x − e^x` at x = 0.5.','قدّر `B_100 e^x − e^x` عند x = 0.5.','≈ 0.00206',
    ['#f{0.25·e^{0.5}}{2·100} = #f{0.25·1.6487}{200} ≈ 0.00206', ['The exact difference is 0.002062.','والفرق المضبوط 0.002062.']], ['≈ 0.0206','≈ 0.00412','≈ 0.0103']),
  Q('Estimate `B_100 sin(πx)` at x = 1/2.','قدّر `B_100 sin(πx)` عند x = 1/2.','≈ 0.98766',
    ['f″ = −π^2 sin(πx):   1 + #f{0.25·(−π^2)}{200} ≈ 1 − 0.01234', ['The exact value is 0.98774.','والقيمة المضبوطة 0.98774.']], ['≈ 1','≈ 1.01234','≈ 0.9'] ),
  Q('Use Voronovskaya’s formula for `f = x^2`.','استخدم صيغة فورونوفسكايا للدالة `f = x^2`.','#f{x(1 − x)}{2}·2 = x(1 − x)',
    ['f″ = 2:   n(B_n x^2 − x^2) = x(1 − x)', ['It agrees exactly with `B_n x^2 = x^2 + x(1 − x)/n`.','وتطابق تماماً `B_n x^2 = x^2 + x(1 − x)/n`.']], ['0','2x(1 − x)','x^2']),
  Q('For which f does `n[B_n f − f] → 0` at every x?','لأي دوال f يكون `n[B_n f − f] → 0` عند كل x؟',['For linear functions, where `f″ = 0`','للدوال الخطية حيث `f″ = 0`'],
    [['And indeed `B_n` reproduces linear functions exactly.','وفعلاً `B_n` تعيد الدوال الخطية بدقة.']], [['For all smooth functions','لكل الدوال الملساء'],['For convex functions','للدوال المحدبة']]),
]);

lesson('502',30,[
  ['Bernstein approximation is slow, and it cannot be made faster: if `‖B_n f − f‖ = o(1/n)`, then f is linear (saturation). Even for `f = x^2`, an error of `10^{−6}` needs n = 250 000, while Chebyshev interpolation reproduces `x^2` exactly with three points.',
   'التقريب ببيرنشتاين بطيء ولا يمكن تسريعه: إذا كان `‖B_n f − f‖ = o(1/n)` فإن f خطية (التشبع). وحتى للدالة `f = x^2` يحتاج خطأ `10^{−6}` إلى n = 250 000، بينما يعيد استكمال تشيبيشيف `x^2` بدقة بثلاث نقاط.'],
  '‖B_n f − f‖_∞ = o(#f{1}{n})   ⇒   f(x) = a + bx',
  ['So Bernstein polynomials are used for their shape properties, their stability and their simple operational matrices, not for fast approximation. In spectral methods (Units 7–9) the Bernstein basis spans the same space `Π_n` as Legendre or Chebyshev, so the approximation from the space is just as good: only the operator `B_n` is slow.',
   'إذن تُستخدم كثيرات بيرنشتاين لخواص الشكل والاستقرار وبساطة المصفوفات التشغيلية، لا للتقريب السريع. وفي الطرق الطيفية (الوحدات 7–9) يولّد أساس بيرنشتاين الفضاء نفسه `Π_n` الذي يولّده ليجندر أو تشيبيشيف، فالتقريب من الفضاء جيد بالقدر نفسه: المؤثر `B_n` وحده هو البطيء.'],
],[
  Q('How large must n be for `‖B_n x^2 − x^2‖ ≤ 10^{−6}`?','كم يجب أن تكون n لكي `‖B_n x^2 − x^2‖ ≤ 10^{−6}`؟','n = 250 000',
    ['#f{1}{4n} = 10^{−6}  ⇒  n = 250 000'], ['n = 1000','n = 10^6','n = 500']),
  Q('What does the saturation theorem say?','ماذا تقول نظرية التشبع؟',['If `‖B_n f − f‖ = o(1/n)` then f is linear','إذا كان `‖B_n f − f‖ = o(1/n)` فإن f خطية'],
    [['No non-linear function is approximated faster than `1/n` by `B_n`.','لا تُقرَّب أي دالة غير خطية أسرع من `1/n` بـ `B_n`.']], [['`B_n f` converges geometrically for analytic f','`B_n f` يتقارب هندسياً للدوال التحليلية'],['`B_n f = f` for polynomials','`B_n f = f` لكثيرات الحدود']]),
  Q('Is the best approximation from `Π_n` worse in the Bernstein basis than in the Legendre basis?','هل أفضل تقريب من `Π_n` أسوأ في أساس بيرنشتاين منه في أساس ليجندر؟',['No: both bases span the same space, so the best approximation is the same','لا: الأساسان يولّدان الفضاء نفسه، فأفضل تقريب واحد'],
    [['Only the particular operator `B_n f` is slow; least squares or collocation in the Bernstein basis converge spectrally.','المؤثر الخاص `B_n f` وحده البطيء، أما المربعات الصغرى أو التجميع بأساس بيرنشتاين فتتقارب طيفياً.']],
    [['Yes, always','نعم دائماً'],['Yes, by a factor `2^n`','نعم، بعامل `2^n`']]),
  Q('For `f = e^x`, compare the errors of `B_10 f` and of the degree-10 Chebyshev interpolant.','للدالة `f = e^x` قارن خطأ `B_10 f` وخطأ استكمال تشيبيشيف من الدرجة 10.','≈ 2 × 10^{−2}  vs  ≈ 2 × 10^{−14}',
    [['Bernstein, by Voronovskaya:','بيرنشتاين بحسب فورونوفسكايا:'], '#f{x(1 − x) e^x}{2·10} ≈ 0.02', ['Chebyshev interpolation on [0, 1] with 11 points reaches `2.3 × 10^{−14}` (measured): twelve more digits from the same number of values.','واستكمال تشيبيشيف على [0, 1] بإحدى عشرة نقطة يصل إلى `2.3 × 10^{−14}` (مقيس): اثنا عشر رقماً إضافياً من العدد نفسه من القيم.']],
    ['≈ 2 × 10^{−14}  vs  ≈ 2 × 10^{−2}','≈ 2 × 10^{−2}  vs  ≈ 2 × 10^{−2}','≈ 10^{−3}  vs  ≈ 10^{−6}']),
]);

/* ---- 502 · Unit 4 (lessons 31–40): shape preservation ---- */
lesson('502',31,[
  ['`B_n f` agrees with f at both ends, and its end slopes are difference quotients of f:','`B_n f` تطابق f عند الطرفين، وميلاها عند الطرفين خوارج قسمة فروق لـ f:'],
  '(B_n f)(0) = f(0),   (B_n f)(1) = f(1),   (B_n f)′(0) = n[f(#f{1}{n}) − f(0)],   (B_n f)′(1) = n[f(1) − f(1 − #f{1}{n})]',
  ['As n grows the end slopes tend to `f′(0)` and `f′(1)`. This end-point behaviour is what makes Bernstein (Bézier) curves easy to control: the first and last coefficients fix the ends, the next ones fix the tangents.','وبزيادة n يقترب الميلان من `f′(0)` و `f′(1)`. وهذا السلوك عند الطرفين هو ما يجعل منحنيات بيرنشتاين (بيزييه) سهلة التحكم: المعاملان الأول والأخير يثبّتان الطرفين، والتاليان يثبّتان المماسين.'],
],[
  Q('Compute `(B_4 f)′(0)` for `f = x^2`.','احسب `(B_4 f)′(0)` للدالة `f = x^2`.','#f{1}{4}',
    ['4[f(#f{1}{4}) − f(0)] = 4·#f{1}{16}'], ['0','#f{1}{2}','1']),
  Q('Compute `(B_2 f)′(0)` for `f = sin(πx)` and compare with `f′(0) = π`.','احسب `(B_2 f)′(0)` للدالة `f = sin(πx)` وقارن بـ `f′(0) = π`.','2',
    ['2[sin(#f{π}{2}) − sin 0] = 2', ['With n = 100: `100 sin(0.01π) ≈ 3.1411`, close to π.','ومع n = 100: `100 sin(0.01π) ≈ 3.1411` قريب من π.']], ['π','1','0']),
  Q('Compute `(B_3 f)′(1)` for `f = x^3`.','احسب `(B_3 f)′(1)` للدالة `f = x^3`.','#f{19}{9}',
    ['3[1 − (#f{2}{3})^3] = 3·#f{19}{27} = #f{19}{9}', ['The exact slope is 3.','والميل المضبوط 3.']], ['3','#f{1}{9}','#f{8}{9}']),
  Q('Does `B_n f(1/2) = f(1/2)` hold for `f = x^2`?','هل `B_n f(1/2) = f(1/2)` للدالة `f = x^2`؟',['No: `B_n f(1/2) = 1/4 + 1/(4n)`','لا: `B_n f(1/2) = 1/4 + 1/(4n)`'],
    ['x^2 + #f{x(1 − x)}{n} = #f{1}{4} + #f{1}{4n}'], [['Yes','نعم']]),
]);

lesson('502',32,[
  ['If f is non-decreasing on [0, 1], so is `B_n f`. The reason is the derivative formula:','إذا كانت f غير متناقصة على [0, 1] فكذلك `B_n f`. والسبب صيغة المشتقة:'],
  '(B_n f)′(x) = n Σ_{i=0}^{n−1} [f(#f{i + 1}{n}) − f(#f{i}{n})] B_{i,n−1}(x)',
  ['All differences are ≥ 0 and all basis functions are ≥ 0, so the derivative is ≥ 0. Interpolation does not have this property: an interpolant of monotone data can oscillate.','كل الفروق ≥ 0 وكل الدوال الأساسية ≥ 0 فالمشتقة ≥ 0. والاستكمال لا يملك هذه الخاصية: استكمال بيانات مطّردة قد يتذبذب.'],
],[
  Q('Find the derivative coefficients of `B_2 f` for `f = #r{x}`.','أوجد معاملات مشتقة `B_2 f` للدالة `f = #r{x}`.','(1.4142,  0.5858)',
    ['f(0), f(#f{1}{2}), f(1) = 0, 0.7071, 1', '2(0.7071 − 0),   2(1 − 0.7071)'], ['(0.7071,  0.2929)','(1.4142,  −0.5858)','(0,  1)']),
  Q('Is `B_2 #r{x}` increasing on [0, 1]?','هل `B_2 #r{x}` متزايدة على [0, 1]؟',['Yes: both derivative coefficients are positive','نعم: معاملا المشتقة موجبان'],
    ['(B_2 f)′ = 1.4142 B_{0,1} + 0.5858 B_{1,1} > 0'], [['No','لا']]),
  Q('Compute `B_1 f` for `f = (x − 1/2)^2`. What does it show?','احسب `B_1 f` للدالة `f = (x − 1/2)^2`. ماذا يبيّن؟','B_1 f = #f{1}{4}',
    ['f(0)(1 − x) + f(1)x = #f{1}{4}(1 − x) + #f{1}{4}x', ['A non-monotone f can give a monotone (here constant) `B_n f`: the converse of the theorem is false.','الدالة غير المطّردة قد تعطي `B_n f` مطّردة (ثابتة هنا): عكس النظرية غير صحيح.']],
    ['B_1 f = (x − #f{1}{2})^2','B_1 f = x','B_1 f = 0']),
  Q('If f is non-increasing, what can be said about `B_n f`?','إذا كانت f غير متزايدة فماذا يقال عن `B_n f`؟',['`B_n f` is non-increasing','`B_n f` غير متزايدة'],
    [['All differences are ≤ 0, so the derivative is ≤ 0.','كل الفروق ≤ 0 فالمشتقة ≤ 0.']], [['`B_n f` is increasing','`B_n f` متزايدة'],['Nothing','لا شيء']]),
]);

lesson('502',33,[
  ['Convexity is preserved too. The second derivative is built from second differences:','والتحدب محفوظ أيضاً. المشتقة الثانية مبنية من الفروق الثانية:'],
  '(B_n f)″(x) = n(n − 1) Σ_{i=0}^{n−2} Δ^2 f(#f{i}{n}) B_{i,n−2}(x)',
  ['If f is convex, all second differences are ≥ 0, so `B_n f` is convex. Moreover `B_n f ≥ f` for convex f (Jensen’s inequality for the binomial weights), and `B_n f ≤ f` for concave f.','إذا كانت f محدبة فكل الفروق الثانية ≥ 0 فتكون `B_n f` محدبة. وفوق ذلك `B_n f ≥ f` للدالة المحدبة (متباينة ينسن للأوزان ذات الحدين)، و `B_n f ≤ f` للمقعرة.'],
],[
  Q('Check `B_n f ≥ f` for `f = x^2`.','تحقق من `B_n f ≥ f` للدالة `f = x^2`.','B_n f − f = #f{x(1 − x)}{n} ≥ 0',
    [['On [0, 1] both x and 1 − x are ≥ 0.','على [0, 1] كل من x و 1 − x غير سالب.']], ['B_n f − f = 0','B_n f − f = −#f{x(1 − x)}{n}','B_n f − f = #f{x^2}{n}']),
  Q('Compute the second difference of `f = |x − 1/2|` at the nodes of degree 2.','احسب الفرق الثاني للدالة `f = |x − 1/2|` عند عقد الدرجة 2.','Δ^2 f(0) = 1',
    ['f(0) − 2f(#f{1}{2}) + f(1) = #f{1}{2} − 0 + #f{1}{2} = 1', ['So `(B_2 f)″ = 2·1 = 2 > 0`: convex, as f is.','إذن `(B_2 f)″ = 2·1 = 2 > 0`: محدبة كما f.']], ['Δ^2 f(0) = 0','Δ^2 f(0) = −1','Δ^2 f(0) = #f{1}{2}']),
  Q('Compare `B_2 #r{x}` with `#r{x}` at x = 1/4.','قارن `B_2 #r{x}` بـ `#r{x}` عند x = 1/4.','0.3277 < 0.5',
    ['B_2 #r{x}(#f{1}{4}) = 0.7071·2·#f{1}{4}·#f{3}{4} + #f{1}{16} = 0.2652 + 0.0625', ['`#r{x}` is concave, so `B_n f ≤ f`.','`#r{x}` مقعرة فيكون `B_n f ≤ f`.']], ['0.3277 > 0.5','0.5 = 0.5','0.7071 > 0.5']),
  Q('A polynomial has Bernstein coefficients `(4, 1, 0, 1, 4)`. Is it convex?','كثيرة حدود معاملاتها في بيرنشتاين `(4, 1, 0, 1, 4)`. هل هي محدبة؟',['Yes: the second differences `(2, 2, 2)` are positive','نعم: الفروق الثانية `(2, 2, 2)` موجبة'],
    ['Δc = (−3, −1, 1, 3),   Δ^2 c = (2, 2, 2)'], [['No','لا'],['Only on [0, 1/2]','على [0, 1/2] فقط']]),
]);

lesson('502',34,[
  ['The Bernstein form is variation diminishing: a polynomial cannot oscillate more than its coefficients. Precisely, the number of zeros of `p = Σ c_i B_{i,n}` in `(0, 1)` is at most the number of sign changes in `(c_0, …, c_n)`:','صيغة بيرنشتاين تنقص التغير: كثيرة الحدود لا تتذبذب أكثر من معاملاتها. وبدقة: عدد جذور `p = Σ c_i B_{i,n}` في `(0, 1)` لا يزيد على عدد تغيرات الإشارة في `(c_0, …, c_n)`:'],
  'Z_{(0,1)}(p) ≤ S^{−}(c_0, c_1, …, c_n)',
  ['(it is Descartes’ rule of signs after the change `y = x/(1 − x)`). Applied to `f − ℓ` for any straight line ℓ, it says that `B_n f` crosses any line at most as often as f does.','(وهي قاعدة ديكارت للإشارات بعد التحويل `y = x/(1 − x)`). وبتطبيقها على `f − ℓ` لأي مستقيم ℓ نجد أن `B_n f` تقطع أي مستقيم بعدد مرات لا يزيد على ما تقطعه f.'],
],[
  Q('At most how many zeros in `(0, 1)` does `p` with coefficients `(1, −2, 3, −1)` have?','على الأكثر كم جذراً في `(0, 1)` لكثيرة الحدود p ذات المعاملات `(1, −2, 3, −1)`؟','3',
    ['+,  −,  +,  −', ['Three sign changes.','ثلاثة تغيرات في الإشارة.']], ['4','2','1']),
  Q('Does `p` with coefficients `(2, 1, 1, 3)` have a zero in `(0, 1)`?','هل لكثيرة الحدود p ذات المعاملات `(2, 1, 1, 3)` جذر في `(0, 1)`؟',['No: there are no sign changes','لا: لا توجد تغيرات في الإشارة'],
    [['Also `p ≥ min c_i = 1 > 0`.','وأيضاً `p ≥ min c_i = 1 > 0`.']], [['Yes, one','نعم، جذر واحد'],['Yes, three','نعم، ثلاثة']]),
  Q('Count the sign changes of `(1, −1, −1, 1)` and find the zeros of `p = Σ c_i B_{i,3}`.','عدّ تغيرات الإشارة في `(1, −1, −1, 1)` وأوجد جذور `p = Σ c_i B_{i,3}`.','x = #f{3 ∓ #r{3}}{6}',
    ['p = (1 − x)^3 − 3x(1 − x)^2 − 3x^2(1 − x) + x^3 = 1 − 6x + 6x^2', 'x = #f{3 ∓ #r{3}}{6} = 0.2113,  0.7887', ['Two sign changes and exactly two zeros: the bound is attained.','تغيران في الإشارة وجذران تماماً: الحد يتحقق.']],
    ['x = #f{1}{2}','x = #f{1}{3},  #f{2}{3}','x = 0,  1']),
  Q('How many times can `B_n f` cross the line `y = 0.5` if f crosses it once?','كم مرة يمكن أن تقطع `B_n f` المستقيم `y = 0.5` إذا قطعته f مرة واحدة؟',['At most once','مرة واحدة على الأكثر'],
    [['Apply the rule to `f − 0.5`: its samples `f(i/n) − 0.5` change sign at most once.','نطبّق القاعدة على `f − 0.5`: عيناتها `f(i/n) − 0.5` تغير إشارتها مرة واحدة على الأكثر.']], [['At most n times','n مرة على الأكثر'],['Twice','مرتين']]),
]);

lesson('502',35,[
  ['For a curve `P(t) = Σ P_i B_{i,n}(t)` with control points `P_i`, the curve lies in the convex hull of the control points, because each point of the curve is a weighted average with non-negative weights summing to 1. For a function graph the control points are `(i/n, c_i)`.',
   'للمنحنى `P(t) = Σ P_i B_{i,n}(t)` بنقاط تحكم `P_i` يقع المنحنى داخل الغلاف المحدب لنقاط التحكم، لأن كل نقطة منه متوسط موزون بأوزان غير سالبة مجموعها 1. ولمنحنى الدالة تكون نقاط التحكم `(i/n, c_i)`.'],
  'min_i c_i ≤ p(x) ≤ max_i c_i',
  ['The hull gives cheap bounds (used to find intersections or zeros by subdivision), but they can be pessimistic: the curve usually stays well inside.','والغلاف يعطي حدوداً رخيصة (تُستخدم لإيجاد التقاطعات أو الجذور بالتقسيم)، لكنها قد تكون متشائمة: المنحنى يبقى عادةً بعيداً داخلها.'],
],[
  Q('For `c = (0, 4, 0)`, compare the hull bound with the true maximum of p.','للمعاملات `c = (0, 4, 0)` قارن حد الغلاف بالقيمة العظمى الحقيقية لـ p.','4  vs  2',
    ['p = 4·2x(1 − x) = 8x(1 − x),   max = p(#f{1}{2}) = 2', ['The bound is twice too large.','الحد أكبر مرتين.']], ['4  vs  4','2  vs  2','4  vs  1']),
  Q('A quadratic Bézier curve has control points (0, 0), (1, 2), (2, 0). Find its highest point.','منحنى بيزييه تربيعي نقاط تحكمه (0, 0) و (1, 2) و (2, 0). أوجد أعلى نقطة فيه.','(1, 1)',
    ['x(t) = 2t,   y(t) = 2·2t(1 − t) = 4t(1 − t)', 't = #f{1}{2}:   (1, 1)'], ['(1, 2)','(1, 0.5)','(2, 0)']),
  Q('Bound `p = Σ c_i B_{i,3}` on [0, 1] for `c = (1, 3, 2, 5)`.','أوجد حدين لـ `p = Σ c_i B_{i,3}` على [0, 1] للمعاملات `c = (1, 3, 2, 5)`.','1 ≤ p(x) ≤ 5',
    ['min c_i = 1,   max c_i = 5'], ['2 ≤ p(x) ≤ 3','1 ≤ p(x) ≤ 11','0 ≤ p(x) ≤ 5']),
  Q('Is every point of the convex hull reached by the curve?','هل يصل المنحنى إلى كل نقطة في الغلاف المحدب؟',['No: the curve lies inside the hull but is only a curve','لا: المنحنى داخل الغلاف لكنه منحنى فقط'],
    [['It touches the hull only at the end control points (and along edges in degenerate cases).','يلمس الغلاف عند نقطتي التحكم الطرفيتين فقط (وعلى الأضلاع في الحالات المنحلة).']], [['Yes','نعم']]),
]);

lesson('502',36,[
  ['Bernstein polynomials approximate derivatives too (simultaneous approximation): if `f ∈ C^k[0, 1]` then `(B_n f)^{(k)} → f^{(k)}` uniformly. For example','كثيرات بيرنشتاين تقرّب المشتقات أيضاً (التقريب الآني): إذا كانت `f ∈ C^k[0, 1]` فإن `(B_n f)^{(k)} → f^{(k)}` بانتظام. فمثلاً'],
  '(B_n x^2)′ = 2x + #f{1 − 2x}{n},     (B_n x^2)″ = 2 − #f{2}{n}',
  ['This is unusual: interpolants generally approximate derivatives worse than values. The price is again the slow rate `O(1/n)`.','وهذا غير معتاد: الاستكمالات عموماً تقرّب المشتقات أسوأ من القيم. والثمن مرة أخرى المعدل البطيء `O(1/n)`.'],
],[
  Q('Compute `(B_n x^2)′(0)`.','احسب `(B_n x^2)′(0)`.','#f{1}{n}',
    ['2·0 + #f{1 − 0}{n}'], ['0','#f{2}{n}','2']),
  Q('Compute `(B_10 x^2)″`.','احسب `(B_10 x^2)″`.','1.8',
    ['2 − #f{2}{10} = 1.8'], ['2','0.2','1.98']),
  Q('Compute `(B_3 x^3)′(0)`.','احسب `(B_3 x^3)′(0)`.','#f{1}{9}',
    ['3[f(#f{1}{3}) − f(0)] = 3·#f{1}{27}'], ['0','#f{1}{3}','#f{1}{27}']),
  Q('If `f ∈ C^1[0, 1]`, what happens to `max |(B_n f)′ − f′|` as n → ∞?','إذا كانت `f ∈ C^1[0, 1]` فماذا يحدث لـ `max |(B_n f)′ − f′|` عندما n → ∞؟','→ 0',
    [['`(B_n f)′` is n times the differences of f, which are mean values of `f′`, averaged by the basis of degree n − 1.','`(B_n f)′` هي n مضروبة في فروق f، وهي قيم متوسطة لـ `f′` تُوزَن بأساس الدرجة n − 1.']], ['→ ∞','→ 1','→ f′(0)']),
]);

lesson('502',37,[
  ['What happens if `B_n` is applied again and again for a fixed n? For `f = x^2`:','ماذا يحدث إذا طُبّق `B_n` مراراً مع n ثابتة؟ للدالة `f = x^2`:'],
  'B_n^m x^2 = x^2 + x(1 − x)[1 − (1 − #f{1}{n})^m]   →   x   (m → ∞)',
  ['In general `B_n^m f → B_1 f = f(0)(1 − x) + f(1)x`, the chord through the end values (Kelisky and Rivlin): each iteration smooths a little more, until only the straight line through the fixed ends is left.','وعموماً `B_n^m f → B_1 f = f(0)(1 − x) + f(1)x`، الوتر المار بقيمتي الطرفين (كليسكي وريفلين): كل تكرار ينعّم أكثر قليلاً حتى لا يبقى إلا المستقيم المار بالطرفين الثابتين.'],
],[
  Q('Compute `B_2^2 x^2` at x = 1/2.','احسب `B_2^2 x^2` عند x = 1/2.','0.4375',
    ['#f{1}{4} + #f{1}{4}[1 − (#f{1}{2})^2] = 0.25 + 0.1875'], ['0.375','0.25','0.5']),
  Q('What is `lim_{m→∞} B_n^m x^2`?','ما `lim_{m→∞} B_n^m x^2`؟','x',
    ['(1 − #f{1}{n})^m → 0  ⇒  x^2 + x(1 − x) = x'], ['x^2','0','#f{1}{2}']),
  Q('What is `lim_{m→∞} B_n^m f` for `f = sin(πx)`?','ما `lim_{m→∞} B_n^m f` للدالة `f = sin(πx)`؟','0',
    ['B_1 f = f(0)(1 − x) + f(1)x = 0'], ['sin(πx)','x','1']),
  Q('Compute `B_2 x^2`, then apply `B_2` to it, using node values.','احسب `B_2 x^2` ثم طبّق عليها `B_2` باستخدام القيم العقدية.','B_2^2 x^2 = #f{3x + x^2}{4}',
    ['g = B_2 x^2 = #f{x + x^2}{2}:   g(0) = 0,   g(#f{1}{2}) = #f{3}{8},   g(1) = 1', 'B_2 g = #f{3}{8}·2x(1 − x) + x^2 = #f{3x}{4} + #f{x^2}{4}', ['At x = 1/2: `3/8 + 1/16 = 0.4375`.','عند x = 1/2: `3/8 + 1/16 = 0.4375`.']],
    ['B_2^2 x^2 = #f{x + x^2}{2}','B_2^2 x^2 = x','B_2^2 x^2 = #f{x + 3x^2}{4}']),
]);

lesson('502',38,[
  ['`B_n` maps `Π_n` into itself, and on `Π_n` it has the eigenvalues','`B_n` يحوّل `Π_n` إلى نفسه، وقيمه الذاتية على `Π_n`'],
  'λ_k = #f{n!}{(n − k)! n^k} = (1 − #f{1}{n})(1 − #f{2}{n}) ⋯ (1 − #f{k − 1}{n}),   k = 0, …, n',
  ['with an eigenfunction of degree exactly k. So `λ_0 = λ_1 = 1` (constants and lines are reproduced), `λ_2 = 1 − 1/n` with eigenfunction `x(1 − x)`, and the others are smaller. Since `λ_k^m → 0` for k ≥ 2, the iterates keep only the linear part: this proves the limit of the previous lesson.',
   'ولكل منها دالة ذاتية درجتها k تماماً. إذن `λ_0 = λ_1 = 1` (الثوابت والمستقيمات تُستعاد)، و `λ_2 = 1 − 1/n` بدالة ذاتية `x(1 − x)`، والبقية أصغر. وبما أن `λ_k^m → 0` عند k ≥ 2 فإن التكرارات لا تُبقي إلا الجزء الخطي: وهذا برهان نهاية الدرس السابق.'],
],[
  Q('Find `λ_2` for n = 4.','أوجد `λ_2` عند n = 4.','#f{3}{4}',['1 − #f{1}{4}'],['#f{1}{4}','1','#f{1}{2}']),
  Q('Find `λ_3` for n = 3.','أوجد `λ_3` عند n = 3.','#f{2}{9}',['#f{3!}{0!·3^3} = #f{6}{27}'],['#f{1}{3}','#f{2}{3}','1']),
  Q('Check that `x(1 − x)` is an eigenfunction of `B_n` with eigenvalue `1 − 1/n`.','تحقق أن `x(1 − x)` دالة ذاتية لـ `B_n` بالقيمة الذاتية `1 − 1/n`.',['Verified: `B_n(x − x^2) = (1 − 1/n)(x − x^2)`','تحقق: `B_n(x − x^2) = (1 − 1/n)(x − x^2)`'],
    ['B_n x − B_n x^2 = x − x^2 − #f{x(1 − x)}{n}'], [['We get `B_n(x − x^2) = x − x^2`','نجد `B_n(x − x^2) = x − x^2`']]),
  Q('Find `λ_4` for n = 4.','أوجد `λ_4` عند n = 4.','#f{3}{32}',['#f{4!}{0!·4^4} = #f{24}{256}'],['#f{1}{4}','#f{3}{8}','#f{1}{256}']),
]);

lesson('502',39,[
  ['Bernstein polynomials are expectations. If `S_n` counts the successes in n independent trials with success probability x, then `P(S_n = i) = B_{i,n}(x)` and','كثيرات بيرنشتاين توقعات. إذا كان `S_n` عدد النجاحات في n محاولة مستقلة احتمال النجاح في كل منها x، فإن `P(S_n = i) = B_{i,n}(x)` و'],
  '(B_n f)(x) = E[f(#f{S_n}{n})],   E[#f{S_n}{n}] = x,   Var(#f{S_n}{n}) = #f{x(1 − x)}{n}',
  ['The identities `B_n x = x` and `B_n x^2 = x^2 + x(1 − x)/n` are just the mean and the second moment of a binomial proportion, and Bernstein’s proof is the weak law of large numbers.','والمتطابقتان `B_n x = x` و `B_n x^2 = x^2 + x(1 − x)/n` هما متوسط نسبة ذي الحدين وعزمها الثاني، وبرهان بيرنشتاين هو قانون الأعداد الكبيرة الضعيف.'],
],[
  Q('With x = 0.4, find `P(S_3 = 2)`.','مع x = 0.4 أوجد `P(S_3 = 2)`.','0.288',['B_{2,3}(0.4) = 3·0.16·0.6'],['0.096','0.432','0.16']),
  Q('Find the variance of `S_100/100` at x = 0.5.','أوجد تباين `S_100/100` عند x = 0.5.','0.0025',['#f{0.5·0.5}{100}'],['0.25','0.05','0.025']),
  Q('Find `P(S_4 = 4)` at x = 1/2.','أوجد `P(S_4 = 4)` عند x = 1/2.','#f{1}{16}',['B_{4,4}(#f{1}{2}) = (#f{1}{2})^4'],['#f{1}{4}','#f{4}{16}','#f{6}{16}']),
  Q('Express `B_n x^2` as a moment of `S_n/n`.','عبّر عن `B_n x^2` بوصفه عزماً لـ `S_n/n`.','E[(#f{S_n}{n})^2] = x^2 + #f{x(1 − x)}{n}',
    ['E[Y^2] = Var(Y) + (E Y)^2'], ['E[#f{S_n}{n}] = x','Var(#f{S_n}{n}) = x^2','E[S_n^2] = nx']),
]);

lesson('502',40,[
  ['Three case studies show the typical behaviour of `B_n f`:','ثلاث دراسات حالة تبيّن السلوك المعتاد لـ `B_n f`:'],
  ['A kink, `|x − 1/2|`: the error at the corner is about `#r{1/(2πn)}` (0.1875 for n = 4, 0.0398 for n = 100), i.e. `O(n^{−1/2})`. Smooth functions, `e^x` and `sin(πx)`: the error follows Voronovskaya, `O(1/n)` (for example `B_100 sin(πx)(1/2) = 0.98774`). Monotone or convex data: the shape is kept exactly.',
   'زاوية `|x − 1/2|`: الخطأ عند الزاوية نحو `#r{1/(2πn)}` (0.1875 عند n = 4 و 0.0398 عند n = 100) أي `O(n^{−1/2})`. الدوال الملساء `e^x` و `sin(πx)`: الخطأ يتبع فورونوفسكايا `O(1/n)` (مثلاً `B_100 sin(πx)(1/2) = 0.98774`). والبيانات المطّردة أو المحدبة: يُحفظ الشكل تماماً.'],
  ['The lesson: choose `B_n f` when shape matters more than accuracy (design, monotone data, probability), and least squares or collocation in the Bernstein basis when accuracy matters.','والدرس: اختر `B_n f` حين يكون الشكل أهم من الدقة (التصميم والبيانات المطّردة والاحتمالات)، والمربعات الصغرى أو التجميع بأساس بيرنشتاين حين تكون الدقة أهم.'],
],[
  Q('Compute `B_4 f(1/2)` for `f = |x − 1/2|`.','احسب `B_4 f(1/2)` للدالة `f = |x − 1/2|`.','#f{3}{16} = 0.1875',
    ['f(#f{i}{4}) = #f{1}{2}, #f{1}{4}, 0, #f{1}{4}, #f{1}{2},   B_{i,4}(#f{1}{2}) = #f{1}{16}, #f{4}{16}, #f{6}{16}, #f{4}{16}, #f{1}{16}', '#f{1}{16}(#f{1}{2} + 1 + 0 + 1 + #f{1}{2}) = #f{3}{16}'],
    ['0','#f{1}{4}','#f{1}{8}']),
  Q('How large must n be for `|B_n e^x − e^x| ≤ 10^{−3}` at x = 0.5, by Voronovskaya?','كم يجب أن تكون n لكي `|B_n e^x − e^x| ≤ 10^{−3}` عند x = 0.5 بحسب فورونوفسكايا؟','n ≈ 206',
    ['#f{0.25·e^{0.5}}{2n} ≤ 10^{−3}  ⇒  n ≥ #f{0.4122}{0.002} ≈ 206'], ['n ≈ 21','n ≈ 2061','n ≈ 412']),
  Q('Estimate the corner error of `B_n |x − 1/2|` for n = 400.','قدّر خطأ الزاوية لـ `B_n |x − 1/2|` عند n = 400.','≈ 0.020',
    ['#r{#f{1}{2π·400}} ≈ #r{0.000398} ≈ 0.020', ['Four times more terms only halve the error at a kink.','أربعة أضعاف الحدود تنصّف الخطأ فقط عند الزاوية.']], ['≈ 0.0025','≈ 0.0398','≈ 0.0001']),
  Q('Which method suits monotone data where overshoot is not allowed?','أي طريقة تناسب بيانات مطّردة لا يُسمح فيها بالتجاوز؟',['`B_n f` (it preserves monotonicity and stays within the data range)','`B_n f` (تحفظ الاطراد وتبقى ضمن مدى البيانات)'],
    [['Interpolation can overshoot; the Bernstein operator cannot.','الاستكمال قد يتجاوز، أما مؤثر بيرنشتاين فلا.']], [['High-degree interpolation at equally spaced points','الاستكمال عالي الدرجة بنقاط متساوية التباعد'],['Least squares with many terms','المربعات الصغرى بحدود كثيرة']]),
]);

/* ---- 502 · Unit 5 (lessons 41–50): Bézier curves ---- */
lesson('502',41,[
  ['A Bézier curve uses points of the plane (or space) as Bernstein coefficients, the control points:','منحنى بيزييه يستخدم نقاطاً في المستوى (أو الفضاء) معاملاتٍ لبيرنشتاين، وهي نقاط التحكم:'],
  'P(t) = Σ_{i=0}^{n} P_i B_{i,n}(t),   0 ≤ t ≤ 1,   P(0) = P_0,   P(1) = P_n',
  ['The curve starts at the first control point, ends at the last, and is pulled towards the others without passing through them. Moving one control point changes the whole curve smoothly, most strongly near `t = i/n`. Fonts, car bodies and graphics software are built this way.',
   'يبدأ المنحنى عند أول نقطة تحكم وينتهي عند آخرها، وينجذب نحو البقية دون أن يمر بها. وتحريك نقطة تحكم واحدة يغير المنحنى كله بنعومة، وبأشد قوة قرب `t = i/n`. وهكذا تُبنى الخطوط الطباعية وهياكل السيارات وبرامج الرسوم.'],
],[
  Q('For control points (0, 0), (1, 2), (2, 0), find `P(1/2)`.','لنقاط التحكم (0, 0) و (1, 2) و (2, 0) أوجد `P(1/2)`.','(1, 1)',
    ['B_{i,2}(#f{1}{2}) = #f{1}{4}, #f{1}{2}, #f{1}{4}', '#f{1}{4}(0, 0) + #f{1}{2}(1, 2) + #f{1}{4}(2, 0) = (1, 1)'], ['(1, 2)','(1, 0.5)','(0.5, 1)']),
  Q('For control points (0, 0), (1, 1), (2, 1), (3, 0), find `P(1/2)`.','لنقاط التحكم (0, 0) و (1, 1) و (2, 1) و (3, 0) أوجد `P(1/2)`.','(1.5, 0.75)',
    ['B_{i,3}(#f{1}{2}) = #f{1}{8}, #f{3}{8}, #f{3}{8}, #f{1}{8}', 'x = #f{0 + 3 + 6 + 3}{8} = 1.5,   y = #f{0 + 3 + 3 + 0}{8} = 0.75'], ['(1.5, 1)','(1.5, 0.5)','(1, 0.75)']),
  Q('Where does a Bézier curve with control points `P_0, …, P_5` start and end?','أين يبدأ منحنى بيزييه بنقاط التحكم `P_0, …, P_5` وأين ينتهي؟','P(0) = P_0,   P(1) = P_5',
    ['B_{i,n}(0) = δ_{i0},   B_{i,n}(1) = δ_{in}'], ['P(0) = P_1,   P(1) = P_4','P(0) = P_5,   P(1) = P_0','P(0) = 0,   P(1) = 0']),
  Q('What is a Bézier curve of degree 1?','ما منحنى بيزييه من الدرجة 1؟',['The straight segment from `P_0` to `P_1`','القطعة المستقيمة من `P_0` إلى `P_1`'],
    ['P(t) = (1 − t)P_0 + tP_1'], [['A parabola','قطع مكافئ'],['A circle','دائرة']]),
]);

lesson('502',42,[
  ['De Casteljau’s algorithm evaluates `P(t)` by repeated linear interpolation of the control points:','خوارزمية دي كاستلجو تحسب `P(t)` باستكمال خطي متكرر لنقاط التحكم:'],
  'P_i^{(0)} = P_i,   P_i^{(r)} = (1 − t) P_i^{(r−1)} + t P_{i+1}^{(r−1)},   P(t) = P_0^{(n)}',
  ['Geometrically: divide each leg of the control polygon in the ratio t : (1 − t), join the new points, and repeat until one point is left. It costs `O(n^2)` operations, uses only convex combinations, and is the standard stable way to evaluate Bézier curves.',
   'هندسياً: نقسم كل ضلع من مضلع التحكم بنسبة t : (1 − t)، ونصل النقاط الجديدة، ونكرر حتى تبقى نقطة واحدة. وتكلفتها `O(n^2)` عملية، ولا تستخدم إلا تراكيب محدبة، وهي الطريقة المستقرة المعيارية لحساب منحنيات بيزييه.'],
],[
  Q('Use de Casteljau at t = 1/4 for the control points (0, 0), (1, 2), (2, 0).','استخدم دي كاستلجو عند t = 1/4 لنقاط التحكم (0, 0) و (1, 2) و (2, 0).','(0.5, 0.75)',
    ['r = 1:   (0.25, 0.5),   (1.25, 1.5)', 'r = 2:   0.75(0.25, 0.5) + 0.25(1.25, 1.5) = (0.5, 0.75)', ['Check: `x = 2t`, `y = 4t(1 − t) = 0.75`.','تحقق: `x = 2t` و `y = 4t(1 − t) = 0.75`.']],
    ['(0.5, 1)','(0.25, 0.5)','(0.5, 0.5)']),
  Q('Use de Casteljau at t = 1/2 for (0, 0), (1, 1), (2, 1), (3, 0).','استخدم دي كاستلجو عند t = 1/2 للنقاط (0, 0) و (1, 1) و (2, 1) و (3, 0).','(1.5, 0.75)',
    ['r = 1:   (0.5, 0.5),   (1.5, 1),   (2.5, 0.5)', 'r = 2:   (1, 0.75),   (2, 0.75)', 'r = 3:   (1.5, 0.75)'], ['(1.5, 1)','(1, 0.75)','(2, 0.75)']),
  Q('How many linear interpolations does de Casteljau need for degree n?','كم استكمالاً خطياً تحتاج خوارزمية دي كاستلجو للدرجة n؟','#f{n(n + 1)}{2}',
    ['n + (n − 1) + ⋯ + 1 = #f{n(n + 1)}{2}'], ['n','n^2','2^n']),
  Q('Why can de Casteljau’s algorithm never produce a point outside the convex hull of the control points?','لماذا لا تنتج خوارزمية دي كاستلجو نقطة خارج الغلاف المحدب لنقاط التحكم؟',['Every intermediate point is a convex combination of control points','كل نقطة وسطية تركيب محدب لنقاط التحكم'],
    [['Convex combinations of points of a convex set stay in the set.','التراكيب المحدبة لنقاط مجموعة محدبة تبقى فيها.']], [['Because t is rational','لأن t نسبي'],['It can','يمكن أن تنتج']]),
]);

lesson('502',43,[
  ['The intermediate points of de Casteljau’s algorithm at a parameter t contain more than `P(t)`: they are the control points of the two pieces of the curve.','النقاط الوسطية في خوارزمية دي كاستلجو عند المعامل t تحتوي أكثر من `P(t)`: إنها نقاط التحكم لجزأي المنحنى.'],
  ['Left piece, then right piece:','الجزء الأيسر، ثم الجزء الأيمن:'],
  'P_0^{(0)}, P_0^{(1)}, …, P_0^{(n)}     and     P_0^{(n)}, P_1^{(n−1)}, …, P_n^{(0)}',
  ['Repeated subdivision makes the control polygons converge quickly to the curve. This is used to draw curves, to find intersections (discard pieces whose hulls do not meet) and to find roots of polynomials in Bernstein form.','والتقسيم المتكرر يجعل مضلعات التحكم تقترب بسرعة من المنحنى. ويُستخدم هذا لرسم المنحنيات، ولإيجاد التقاطعات (نستبعد الأجزاء التي لا تلتقي أغلفتها)، ولإيجاد جذور كثيرات الحدود في صيغة بيرنشتاين.'],
],[
  Q('Subdivide the curve with control points (0, 0), (1, 2), (2, 0) at t = 1/2. Give the left control polygon.','قسّم المنحنى ذا نقاط التحكم (0, 0) و (1, 2) و (2, 0) عند t = 1/2. أعط مضلع التحكم الأيسر.','(0, 0),  (0.5, 1),  (1, 1)',
    ['r = 1:   (0.5, 1),   (1.5, 1);     r = 2:   (1, 1)'], ['(0, 0),  (1, 2),  (1, 1)','(0, 0),  (0.5, 1),  (1, 2)','(0, 0),  (1, 1),  (2, 0)']),
  Q('Give the right control polygon of the same subdivision.','أعط مضلع التحكم الأيمن للتقسيم نفسه.','(1, 1),  (1.5, 1),  (2, 0)',
    [['It runs along the last points of each level.','يسير على آخر نقاط كل مستوى.']], ['(1, 1),  (2, 0),  (1.5, 1)','(1, 2),  (1.5, 1),  (2, 0)','(1, 1),  (1, 2),  (2, 0)']),
  Q('After subdividing at t = 1/2, which point is shared by the two pieces?','بعد التقسيم عند t = 1/2 أي نقطة يشترك فيها الجزآن؟','P(1/2)',
    ['P_0^{(n)} = P(#f{1}{2})'], ['P_0','P_n','P_1']),
  Q('Why is subdivision useful to find a root of `p = Σ c_i B_{i,n}` in [0, 1]?','لماذا يفيد التقسيم في إيجاد جذر `p = Σ c_i B_{i,n}` في [0, 1]؟',['A piece whose coefficients all have one sign has no root and can be discarded','الجزء الذي معاملاته كلها بإشارة واحدة لا جذر فيه فيُستبعد'],
    [['Repeating on the remaining pieces localizes the root quickly (Bézier clipping).','والتكرار على الأجزاء الباقية يحدد الجذر بسرعة (قص بيزييه).']], [['It gives the exact root in one step','يعطي الجذر المضبوط في خطوة واحدة']]),
]);

lesson('502',44,[
  ['Derivatives of a Bézier curve are again Bézier curves, with the differences of the control points:','مشتقات منحنى بيزييه منحنيات بيزييه أيضاً، بفروق نقاط التحكم:'],
  'P′(t) = n Σ_{i=0}^{n−1} (P_{i+1} − P_i) B_{i,n−1}(t),   P′(0) = n(P_1 − P_0),   P′(1) = n(P_n − P_{n−1})',
  ['So the first leg of the control polygon gives the tangent at the start, and the last leg the tangent at the end. The second derivative at the start is `n(n − 1)(P_2 − 2P_1 + P_0)`.','إذن الضلع الأول لمضلع التحكم يعطي المماس عند البداية، والأخير المماس عند النهاية. والمشتقة الثانية عند البداية `n(n − 1)(P_2 − 2P_1 + P_0)`.'],
],[
  Q('Find `P′(0)` for the control points (0, 0), (1, 2), (2, 0).','أوجد `P′(0)` لنقاط التحكم (0, 0) و (1, 2) و (2, 0).','(2, 4)',
    ['2[(1, 2) − (0, 0)]'], ['(1, 2)','(2, 0)','(4, 2)']),
  Q('Find `P′(1/2)` for the same curve.','أوجد `P′(1/2)` للمنحنى نفسه.','(2, 0)',
    ['2[#f{1}{2}(1, 2) + #f{1}{2}(1, −2)] = (2, 0)', ['The tangent at the top is horizontal.','المماس عند القمة أفقي.']], ['(0, 0)','(2, 4)','(1, 0)']),
  Q('Find `P′(0)` for the cubic with control points (0, 0), (1, 1), (2, 1), (3, 0).','أوجد `P′(0)` للمنحنى التكعيبي ذي نقاط التحكم (0, 0) و (1, 1) و (2, 1) و (3, 0).','(3, 3)',
    ['3[(1, 1) − (0, 0)]'], ['(1, 1)','(3, 0)','(6, 6)']),
  Q('Find `P″(0)` for the same cubic.','أوجد `P″(0)` للمنحنى التكعيبي نفسه.','(0, −6)',
    ['6[(2, 1) − 2(1, 1) + (0, 0)] = 6(0, −1)'], ['(0, 6)','(6, 0)','(0, −3)']),
]);

lesson('502',45,[
  ['Degree elevation adds a control point without changing the curve:','رفع الدرجة يضيف نقطة تحكم دون تغيير المنحنى:'],
  'P_i^{*} = #f{i}{n + 1} P_{i−1} + (1 − #f{i}{n + 1}) P_i,   i = 0, …, n + 1',
  ['It gives more freedom for later editing and is needed to join curves of different degrees. Degree reduction is the reverse: it is exact only if the curve really has the lower degree; otherwise one chooses the closest curve of lower degree (least squares), and the end points are usually kept.','وهو يعطي حرية أكبر للتعديل لاحقاً، ويلزم لوصل منحنيات بدرجات مختلفة. وخفض الدرجة هو العكس: لا يكون مضبوطاً إلا إذا كانت درجة المنحنى فعلاً أقل، وإلا نختار أقرب منحنى بدرجة أقل (المربعات الصغرى) مع الإبقاء على الطرفين عادةً.'],
],[
  Q('Elevate the quadratic (0, 0), (1, 2), (2, 0) to degree 3.','ارفع المنحنى التربيعي (0, 0) و (1, 2) و (2, 0) إلى الدرجة 3.','(0, 0),  (#f{2}{3}, #f{4}{3}),  (#f{4}{3}, #f{4}{3}),  (2, 0)',
    ['P_1^* = #f{1}{3}(0, 0) + #f{2}{3}(1, 2)', 'P_2^* = #f{2}{3}(1, 2) + #f{1}{3}(2, 0)'],
    ['(0, 0),  (1, 2),  (1, 2),  (2, 0)','(0, 0),  (#f{1}{3}, #f{2}{3}),  (#f{2}{3}, #f{4}{3}),  (2, 0)','(0, 0),  (1, 1),  (1, 1),  (2, 0)']),
  Q('After elevating a curve of degree 4 twice, how many control points are there?','بعد رفع منحنى من الدرجة 4 مرتين كم نقطة تحكم يوجد؟','7',['4 + 2 + 1 = 7'],['6','5','9']),
  Q('Can the cubic (0, 0), (1, 3), (2, 3), (3, 0) be reduced exactly to degree 2?','هل يمكن خفض المنحنى التكعيبي (0, 0) و (1, 3) و (2, 3) و (3, 0) بدقة إلى الدرجة 2؟',['Yes: it is the elevation of (0, 0), (1.5, 4.5), (3, 0)','نعم: إنه رفع للمنحنى (0, 0) و (1.5, 4.5) و (3, 0)'],
    ['#f{1}{3}(0, 0) + #f{2}{3}(1.5, 4.5) = (1, 3),   #f{2}{3}(1.5, 4.5) + #f{1}{3}(3, 0) = (2, 3)'], [['No','لا']]),
  Q('Which control points never change in degree elevation?','أي نقاط التحكم لا تتغير أبداً في رفع الدرجة؟','P_0^* = P_0,   P_{n+1}^* = P_n',
    [['The curve keeps its end points.','المنحنى يحتفظ بطرفيه.']], ['P_1^* = P_1','P_i^* = P_i','P_0^* = (0, 0)']),
]);

lesson('502',46,[
  ['Complex shapes are made by joining Bézier pieces. If one piece ends at `P_n` and the next starts at `Q_0`:','الأشكال المعقدة تُصنع بوصل قطع بيزييه. إذا انتهت قطعة عند `P_n` وبدأت التالية عند `Q_0`:'],
  'C^0:  Q_0 = P_n,     C^1:  Q_1 − Q_0 = P_n − P_{n−1}',
  ['and, for two cubics, C² continuity also needs `Q_2 = P_1 − 4P_2 + 4P_3`','وللمنحنيين التكعيبيين يحتاج الاتصال C² أيضاً `Q_2 = P_1 − 4P_2 + 4P_3`'],
  ['(for pieces of the same degree and equal parameter intervals). C¹ means the three points `P_{n−1}`, `P_n = Q_0`, `Q_1` are collinear and equally spaced; only collinearity gives the weaker geometric continuity G¹.','(للقطع ذات الدرجة نفسها ومجالات المعامل المتساوية). C¹ تعني أن النقاط الثلاث `P_{n−1}` و `P_n = Q_0` و `Q_1` على استقامة واحدة ومتساوية التباعد، والاستقامة وحدها تعطي الاتصال الهندسي الأضعف G¹.'],
],[
  Q('A quadratic ends with `P_1 = (1, 2)`, `P_2 = (2, 0)`. Find `Q_1` of the next quadratic for C¹ continuity.','منحنى تربيعي ينتهي بـ `P_1 = (1, 2)` و `P_2 = (2, 0)`. أوجد `Q_1` للمنحنى التربيعي التالي من أجل اتصال C¹.','Q_1 = (3, −2)',
    ['Q_1 = Q_0 + (P_2 − P_1) = (2, 0) + (1, −2)'], ['Q_1 = (1, 2)','Q_1 = (3, 2)','Q_1 = (2, −2)']),
  Q('For cubics with `P_1 = (1, 1)`, `P_2 = (2, 1)`, `P_3 = (3, 0)`, find `Q_1` and `Q_2` for C² continuity.','للمنحنيات التكعيبية مع `P_1 = (1, 1)` و `P_2 = (2, 1)` و `P_3 = (3, 0)` أوجد `Q_1` و `Q_2` من أجل اتصال C².','Q_1 = (4, −1),   Q_2 = (5, −3)',
    ['Q_1 = 2P_3 − P_2 = (4, −1)', 'Q_2 = P_1 − 4P_2 + 4P_3 = (1, 1) − (8, 4) + (12, 0) = (5, −3)'], ['Q_1 = (4, −1),   Q_2 = (5, −1)','Q_1 = (4, 1),   Q_2 = (5, 3)','Q_1 = (3, 0),   Q_2 = (4, −1)']),
  Q('`P_{n−1} = (0, 0)`, `P_n = (1, 1)`, `Q_1 = (3, 3)`. Is the joint C¹, G¹, or neither?','`P_{n−1} = (0, 0)` و `P_n = (1, 1)` و `Q_1 = (3, 3)`. هل الوصلة C¹ أم G¹ أم لا هذا ولا ذاك؟',['G¹ only: collinear, but `Q_1 − Q_0 = (2, 2) ≠ (1, 1)`','G¹ فقط: على استقامة واحدة لكن `Q_1 − Q_0 = (2, 2) ≠ (1, 1)`'],
    [['Same direction, different length.','الاتجاه نفسه والطول مختلف.']], [['C¹','C¹'],['Neither','لا هذا ولا ذاك']]),
  Q('Why are cubic pieces the usual choice in design?','لماذا القطع التكعيبية هي الاختيار المعتاد في التصميم؟',['They are the lowest degree that allows C² joints with free control points','لأنها أدنى درجة تسمح بوصلات C² مع نقاط تحكم حرة'],
    [['Each cubic has 4 control points: 3 are fixed by C² at a joint, one stays free for shaping.','لكل منحنى تكعيبي 4 نقاط تحكم: 3 تثبتها شروط C² عند الوصلة، وتبقى واحدة حرة للتشكيل.']], [['They pass through all control points','لأنها تمر بكل نقاط التحكم']]),
]);

lesson('502',47,[
  ['Polynomial curves cannot draw a circle exactly. Rational Bézier curves can, by giving each control point a weight `w_i > 0`:','المنحنيات كثيرة الحدود لا ترسم الدائرة بدقة، أما منحنيات بيزييه الكسرية فترسمها بإعطاء كل نقطة تحكم وزناً `w_i > 0`:'],
  'P(t) = #f{Σ_i w_i P_i B_{i,n}(t)}{Σ_i w_i B_{i,n}(t)}',
  ['With all weights equal it is an ordinary Bézier curve; a larger weight pulls the curve towards its point. The quadratic with control points (1, 0), (1, 1), (0, 1) and weights `1, #r{2}/2, 1` is exactly a quarter of the unit circle. Every conic section is a rational quadratic Bézier curve.','ومع أوزان متساوية يكون منحنى بيزييه عادياً، والوزن الأكبر يجذب المنحنى نحو نقطته. والمنحنى التربيعي ذو نقاط التحكم (1, 0) و (1, 1) و (0, 1) والأوزان `1, #r{2}/2, 1` هو ربع دائرة الوحدة تماماً. وكل قطع مخروطي منحنى بيزييه تربيعي كسري.'],
],[
  Q('Compute `P(1/2)` for the quarter circle above.','احسب `P(1/2)` لربع الدائرة السابق.','(0.7071, 0.7071)',
    [['Numerator:','البسط:'], '#f{1}{4}(1, 0) + #f{#r{2}}{2}·#f{1}{2}(1, 1) + #f{1}{4}(0, 1) = (0.6036, 0.6036)', ['Denominator:','المقام:'], '#f{1}{4} + 0.3536 + #f{1}{4} = 0.8536', ['The ratio `(0.7071, 0.7071)` lies on the unit circle.','النسبة `(0.7071, 0.7071)` تقع على دائرة الوحدة.']],
    ['(0.75, 0.75)','(0.5, 0.5)','(1, 1)']),
  Q('With all weights equal to 1, what is the rational curve?','إذا كانت كل الأوزان 1 فما المنحنى الكسري؟',['The ordinary Bézier curve','منحنى بيزييه العادي'],
    ['Σ w_i B_{i,n} = 1'], [['A circle','دائرة'],['A straight line','مستقيم']]),
  Q('If the middle weight of a rational quadratic is increased, what happens to the curve?','إذا زاد الوزن الأوسط لمنحنى تربيعي كسري فماذا يحدث للمنحنى؟',['It moves towards the middle control point','يقترب من نقطة التحكم الوسطى'],
    [['In the limit `w_1 → ∞` the curve becomes the control polygon.','وفي النهاية `w_1 → ∞` يصبح المنحنى مضلع التحكم.']], [['It moves away from it','يبتعد عنها'],['Nothing changes','لا شيء يتغير']]),
  Q('Check that `P(1/2)` of the quarter circle has distance 1 from the origin.','تحقق أن `P(1/2)` لربع الدائرة يبعد 1 عن الأصل.','1',
    ['#r{0.7071^2 + 0.7071^2} = #r{1} = 1'], ['0.7071','#r{2}','0.5']),
]);

lesson('502',48,[
  ['A tensor-product Bézier surface uses a grid of control points and the product of two bases:','سطح بيزييه بالضرب التنسوري يستخدم شبكة من نقاط التحكم وضرب أساسين:'],
  'S(u, v) = Σ_{i=0}^{m} Σ_{j=0}^{n} P_{ij} B_{i,m}(u) B_{j,n}(v),   0 ≤ u, v ≤ 1',
  ['It has `(m + 1)(n + 1)` control points, passes through the four corner points, and its four boundary curves are the Bézier curves of the edge rows and columns. All curve algorithms (de Casteljau, derivatives, elevation) work row by row and then column by column.','وله `(m + 1)(n + 1)` نقطة تحكم، ويمر بنقاط الأركان الأربع، ومنحنياته الحدية الأربعة هي منحنيات بيزييه لصفوف الحواف وأعمدتها. وكل خوارزميات المنحنيات (دي كاستلجو والمشتقات والرفع) تعمل صفاً صفاً ثم عموداً عموداً.'],
],[
  Q('A bilinear patch has `P_{00} = (0, 0, 0)`, `P_{10} = (1, 0, 0)`, `P_{01} = (0, 1, 0)`, `P_{11} = (1, 1, 1)`. Find `S(1/2, 1/2)`.','رقعة ثنائية الخطية فيها `P_{00} = (0, 0, 0)` و `P_{10} = (1, 0, 0)` و `P_{01} = (0, 1, 0)` و `P_{11} = (1, 1, 1)`. أوجد `S(1/2, 1/2)`.','(0.5, 0.5, 0.25)',
    ['#f{1}{4}[P_{00} + P_{10} + P_{01} + P_{11}] = #f{1}{4}(2, 2, 1)'], ['(0.5, 0.5, 0.5)','(0.5, 0.5, 0)','(1, 1, 1)']),
  Q('How many control points has a bicubic patch?','كم نقطة تحكم لرقعة ثنائية التكعيب؟','16',['(3 + 1)(3 + 1)'],['9','12','64']),
  Q('What is `S(0, 0)`?','ما `S(0, 0)`؟','P_{00}',['B_{i,m}(0) B_{j,n}(0) = δ_{i0} δ_{j0}'],['P_{mn}','0','P_{0n}']),
  Q('What is the boundary curve `S(u, 0)`?','ما المنحنى الحدي `S(u, 0)`؟',['The Bézier curve of the control points `P_{00}, P_{10}, …, P_{m0}`','منحنى بيزييه لنقاط التحكم `P_{00}, P_{10}, …, P_{m0}`'],
    ['B_{j,n}(0) = δ_{j0}  ⇒  S(u, 0) = Σ_i P_{i0} B_{i,m}(u)'], [['A straight line','مستقيم'],['The Bézier curve of `P_{00}, …, P_{0n}`','منحنى بيزييه للنقاط `P_{00}, …, P_{0n}`']]),
]);

lesson('502',49,[
  ['On a triangle, points are described by barycentric coordinates `(u, v, w)` with `u + v + w = 1`, and the Bernstein polynomials of degree n are','على المثلث توصف النقاط بالإحداثيات المركزية `(u, v, w)` حيث `u + v + w = 1`، وكثيرات حدود بيرنشتاين من الدرجة n هي'],
  'B_{ijk}^{n}(u, v, w) = #f{n!}{i! j! k!} u^i v^j w^k,   i + j + k = n',
  ['There are `(n + 1)(n + 2)/2` of them, they are non-negative on the triangle and add up to 1 by the trinomial theorem. They are the basis of triangular Bézier patches and of high-order finite elements on triangles.','وعددها `(n + 1)(n + 2)/2`، وهي غير سالبة على المثلث ومجموعها 1 بنظرية ذات الحدود الثلاثة. وهي أساس رقع بيزييه المثلثية والعناصر المنتهية عالية الرتبة على المثلثات.'],
],[
  Q('How many triangular Bernstein polynomials of degree 2 are there?','كم كثيرة حدود بيرنشتاين مثلثية من الدرجة 2 يوجد؟','6',['#f{3·4}{2} = 6'],['3','9','4']),
  Q('Evaluate `B_{110}^2` at the centroid.','احسب `B_{110}^2` عند مركز الثقل.','#f{2}{9}',['#f{2!}{1!1!0!}·#f{1}{3}·#f{1}{3} = #f{2}{9}'],['#f{1}{9}','#f{1}{3}','#f{4}{9}']),
  Q('What is `Σ_{i+j+k=n} B_{ijk}^n(u, v, w)`?','ما `Σ_{i+j+k=n} B_{ijk}^n(u, v, w)`؟','1',['(u + v + w)^n = 1'],['n','3^n','#f{(n + 1)(n + 2)}{2}']),
  Q('What is `B_{200}^2` at the vertex `u = 1`?','ما `B_{200}^2` عند الرأس `u = 1`؟','1',['u = 1,   v = w = 0:   u^2 = 1'],['0','#f{1}{2}','2']),
]);

lesson('502',50,[
  ['A single Bézier curve has global control: every control point affects the whole curve, and long curves need high degree. B-splines fix this: they are piecewise polynomials of degree p joined with `C^{p−1}` smoothness at knots, with basis functions that are non-negative, sum to 1, and are non-zero only on p + 1 knot intervals (local control).',
   'منحنى بيزييه الواحد تحكّمه شامل: كل نقطة تحكم تؤثر في المنحنى كله، والمنحنيات الطويلة تحتاج درجة عالية. والشرائح B تعالج ذلك: كثيرات حدود قطعية من الدرجة p موصولة باتصال `C^{p−1}` عند العقد، ودوالها الأساسية غير سالبة ومجموعها 1 ولا تكون غير صفرية إلا على p + 1 مجالاً بين العقد (تحكم محلي).'],
  ['A Bézier curve of degree p is the B-spline with knots `0, …, 0, 1, …, 1` (each repeated p + 1 times). Converting a B-spline to Bézier pieces (knot insertion) lets all the Bézier tools be used piece by piece.','ومنحنى بيزييه من الدرجة p هو الشريحة B ذات العقد `0, …, 0, 1, …, 1` (كل منها مكررة p + 1 مرة). وتحويل الشريحة B إلى قطع بيزييه (إدراج العقد) يسمح باستخدام كل أدوات بيزييه قطعةً قطعة.'],
],[
  Q('How many knot intervals does one cubic B-spline basis function cover?','كم مجالاً بين العقد تغطي دالة أساسية واحدة لشريحة B تكعيبية؟','4',['p + 1 = 4'],['3','2','1']),
  Q('Moving one control point of a cubic B-spline changes how many curve segments?','تحريك نقطة تحكم واحدة لشريحة B تكعيبية يغير كم قطعة من المنحنى؟','4',
    [['Exactly the segments where its basis function is non-zero.','تماماً القطع التي تكون فيها دالته الأساسية غير صفرية.']], ['1','2','8']),
  Q('Which smoothness do cubic B-splines have at simple knots?','ما نعومة الشرائح B التكعيبية عند العقد البسيطة؟','C^2',['C^{p−1} = C^2'],['C^1','C^3','C^0']),
  Q('Which knot vector turns the B-spline of degree 2 into a Bézier curve?','أي متجه عقد يجعل الشريحة B من الدرجة 2 منحنى بيزييه؟','(0, 0, 0, 1, 1, 1)',
    [['Each end knot repeated p + 1 = 3 times, no interior knots.','كل عقدة طرفية مكررة p + 1 = 3 مرات، دون عقد داخلية.']], ['(0, 1, 2, 3)','(0, 0, 1, 1)','(0, 0.5, 1)']),
]);

/* ---- 502 · Unit 6 (lessons 51–60): inner products and orthogonality ---- */
lesson('502',51,[
  ['Products of basis polynomials integrate in closed form, because the product is again one basis polynomial (Lesson 16) and every basis polynomial of degree 2n integrates to `1/(2n + 1)`:','حواصل ضرب كثيرات الأساس تُكامل بصيغة مغلقة، لأن حاصل الضرب كثيرة أساسية واحدة (الدرس 16) وكل كثيرة أساسية من الدرجة 2n تكاملها `1/(2n + 1)`:'],
  '⟨B_{i,n}, B_{j,n}⟩ = ∫_0^1 B_{i,n} B_{j,n} dx = #f{C(n, i) C(n, j)}{(2n + 1) C(2n, i + j)}',
  ['All these inner products are positive: Bernstein polynomials are never orthogonal to each other. That is the price of non-negativity.','وكل هذه الضروب الداخلية موجبة: كثيرات بيرنشتاين لا تتعامد أبداً. وهذا ثمن عدم السالبية.'],
],[
  Q('Compute `⟨B_{0,1}, B_{1,1}⟩`.','احسب `⟨B_{0,1}, B_{1,1}⟩`.','#f{1}{6}',['#f{1·1}{3·C(2, 1)} = #f{1}{6}', ['Directly: `∫_0^1 x(1 − x) dx = 1/6`.','مباشرة: `∫_0^1 x(1 − x) dx = 1/6`.']],['#f{1}{3}','0','#f{1}{12}']),
  Q('Compute `‖B_{1,2}‖^2`.','احسب `‖B_{1,2}‖^2`.','#f{2}{15}',['#f{C(2, 1)^2}{5·C(4, 2)} = #f{4}{30}'],['#f{1}{5}','#f{4}{15}','#f{1}{30}']),
  Q('Compute `⟨B_{0,2}, B_{2,2}⟩`.','احسب `⟨B_{0,2}, B_{2,2}⟩`.','#f{1}{30}',['#f{1·1}{5·C(4, 2)} = #f{1}{30}', ['Directly: `∫_0^1 x^2(1 − x)^2 dx = 1/30`.','مباشرة: `∫_0^1 x^2(1 − x)^2 dx = 1/30`.']],['0','#f{1}{5}','#f{1}{15}']),
  Q('Compute `‖B_{0,1}‖^2`.','احسب `‖B_{0,1}‖^2`.','#f{1}{3}',['∫_0^1 (1 − x)^2 dx = #f{1}{3}'],['#f{1}{2}','#f{1}{6}','1']),
]);

lesson('502',52,[
  ['The Gram matrix `G_{ij} = ⟨B_{i,n}, B_{j,n}⟩` collects all the inner products. For n = 1:','مصفوفة جرام `G_{ij} = ⟨B_{i,n}, B_{j,n}⟩` تجمع كل الضروب الداخلية. وعند n = 1:'],
  'G = #m{1/3, 1/6 ;; 1/6, 1/3},     G^{−1} = #m{4, −2 ;; −2, 4}',
  ['G is symmetric and positive definite, every row sums to `1/(n + 1)` (since `Σ_j B_{j,n} = 1`), and its inverse has alternating signs. G becomes ill-conditioned quickly as n grows, which is why least squares is better done through an orthogonal basis.','و G متماثلة موجبة التعريف، ومجموع كل صف `1/(n + 1)` (لأن `Σ_j B_{j,n} = 1`)، ومعكوسها بإشارات متناوبة. وتصبح G رديئة الشرط بسرعة بزيادة n، ولهذا يُفضَّل إجراء المربعات الصغرى عبر أساس متعامد.'],
],[
  Q('Compute `G^{−1}` for n = 1.','احسب `G^{−1}` عند n = 1.','G^{−1} = #m{4, −2 ;; −2, 4}',
    ['det G = #f{1}{9} − #f{1}{36} = #f{1}{12}', 'G^{−1} = 12·#m{1/3, −1/6 ;; −1/6, 1/3}'], ['G^{−1} = #m{3, 6 ;; 6, 3}','G^{−1} = #m{4, 2 ;; 2, 4}','G^{−1} = #m{1/4, −1/2 ;; −1/2, 1/4}']),
  Q('What is the sum of each row of G for n = 4?','ما مجموع كل صف في G عند n = 4؟','#f{1}{5}',['Σ_j ⟨B_i, B_j⟩ = ⟨B_i, 1⟩ = #f{1}{n + 1}'],['1','#f{1}{4}','#f{1}{9}']),
  Q('Write G for n = 2 (first row only).','اكتب G عند n = 2 (الصف الأول فقط).','#f{1}{5},   #f{1}{10},   #f{1}{30}',
    ['#f{1}{5}·#f{C(2, 0)C(2, j)}{C(4, j)}:   #f{1}{5}·1,   #f{1}{5}·#f{2}{4},   #f{1}{5}·#f{1}{6}', ['Check: `1/5 + 1/10 + 1/30 = 1/3 = 1/(n + 1)`.','تحقق: `1/5 + 1/10 + 1/30 = 1/3 = 1/(n + 1)`.']],
    ['#f{1}{5},   #f{1}{5},   #f{1}{5}','#f{1}{3},   #f{1}{6},   #f{1}{12}','#f{1}{5},   #f{2}{15},   #f{1}{30}']),
  Q('Why is G positive definite?','لماذا G موجبة التعريف؟',['`c^T G c = ‖Σ c_i B_{i,n}‖^2 > 0` for c ≠ 0, because the basis is independent','`c^T G c = ‖Σ c_i B_{i,n}‖^2 > 0` عند c ≠ 0 لأن الأساس مستقل'],
    [['A Gram matrix of independent functions is always positive definite.','مصفوفة جرام لدوال مستقلة موجبة التعريف دائماً.']], [['Because its entries are positive','لأن عناصرها موجبة'],['Because it is diagonal','لأنها قطرية']]),
]);

lesson('502',53,[
  ['The dual basis `D_0, …, D_n` of `Π_n` is defined by biorthogonality with the Bernstein basis:','الأساس الثنوي `D_0, …, D_n` للفضاء `Π_n` يُعرَّف بالتعامد الثنائي مع أساس بيرنشتاين:'],
  '⟨D_i, B_{j,n}⟩ = δ_{ij},   D_i = Σ_j (G^{−1})_{ij} B_{j,n}',
  ['With it, the least-squares coefficients are simply inner products: `c_i = ⟨f, D_i⟩`. For n = 1, `D_0 = 4 − 6x` and `D_1 = 6x − 2`. Dual bases are the starting point of the dual operational matrices (Unit 7).','وبه تصبح معاملات المربعات الصغرى ضروباً داخلية بسيطة: `c_i = ⟨f, D_i⟩`. وعند n = 1 يكون `D_0 = 4 − 6x` و `D_1 = 6x − 2`. والأسس الثنوية نقطة بداية المصفوفات التشغيلية الثنوية (الوحدة 7).'],
],[
  Q('Find `D_0` for n = 1.','أوجد `D_0` عند n = 1.','D_0 = 4 − 6x',['D_0 = 4B_{0,1} − 2B_{1,1} = 4(1 − x) − 2x'],['D_0 = 1 − x','D_0 = 4 − 2x','D_0 = 6x − 2']),
  Q('Check `⟨D_0, B_{0,1}⟩ = 1` and `⟨D_0, B_{1,1}⟩ = 0`.','تحقق من `⟨D_0, B_{0,1}⟩ = 1` و `⟨D_0, B_{1,1}⟩ = 0`.',['Verified: 1 and 0','تحقق: 1 و 0'],
    ['∫_0^1 (4 − 6x)(1 − x) dx = 4 − 5 + 2 = 1', '∫_0^1 (4 − 6x)x dx = 2 − 2 = 0']),
  Q('Use the dual basis to find the best linear approximation of `x^2` on [0, 1].','استخدم الأساس الثنوي لإيجاد أفضل تقريب خطي لـ `x^2` على [0, 1].','x − #f{1}{6}',
    ['c_0 = ∫ x^2(4 − 6x) dx = #f{4}{3} − #f{3}{2} = −#f{1}{6}', 'c_1 = ∫ x^2(6x − 2) dx = #f{3}{2} − #f{2}{3} = #f{5}{6}', '−#f{1}{6}(1 − x) + #f{5}{6}x = x − #f{1}{6}'],
    ['x','x − #f{1}{3}','#f{1}{3}']),
  Q('How many dual functions are there for n = 3?','كم دالة ثنوية عند n = 3؟','4',['dim Π_3 = 4'],['3','6','8']),
]);

lesson('502',54,[
  ['The best approximation of f in `Π_n` (least squares on [0, 1]) solves the normal equations in the Bernstein basis:','أفضل تقريب لـ f في `Π_n` (المربعات الصغرى على [0, 1]) يحل المعادلات العادية في أساس بيرنشتاين:'],
  'G c = b,   b_i = ⟨f, B_{i,n}⟩ = ∫_0^1 f B_{i,n} dx',
  ['This is the same polynomial as the truncated shifted-Legendre series: only its coordinates differ. Because G is ill-conditioned for large n, it is better to compute the Legendre coefficients and convert (Lesson 56), or to use the orthonormal Bernstein basis (Lesson 55).','وهي كثيرة الحدود نفسها التي يعطيها المجموع المقطوع لمتسلسلة ليجندر المزاحة، والإحداثيات فقط مختلفة. ولأن G رديئة الشرط عند n كبير فالأفضل حساب معاملات ليجندر ثم التحويل (الدرس 56)، أو استخدام أساس بيرنشتاين المتعامد المعياري (الدرس 55).'],
],[
  Q('For `f = x^2` and n = 1, compute b.','للدالة `f = x^2` عند n = 1 احسب b.','b = (#f{1}{12},  #f{1}{4})',['b_0 = ∫ x^2(1 − x) dx = #f{1}{3} − #f{1}{4},   b_1 = ∫ x^3 dx'],['b = (#f{1}{3},  #f{1}{4})','b = (#f{1}{4},  #f{1}{12})','b = (0,  1)']),
  Q('Solve `Gc = b` for that case.','حل `Gc = b` لتلك الحالة.','c = (−#f{1}{6},  #f{5}{6})',['c = G^{−1}b = (4·#f{1}{12} − 2·#f{1}{4},  −2·#f{1}{12} + 4·#f{1}{4})'],['c = (0,  1)','c = (#f{1}{6},  #f{5}{6})','c = (−#f{1}{3},  #f{2}{3})']),
  Q('Find the `L^2` error of that approximation.','أوجد خطأ ذلك التقريب في `L^2`.','#f{1}{#r{180}} ≈ 0.0745',
    ['x^2 − (x − #f{1}{6}) = #f{P_2^*(x)}{6}', '‖·‖^2 = #f{1}{36}·#f{1}{5} = #f{1}{180}'], ['#f{1}{180}','#f{1}{6}','0']),
  Q('Why is solving `Gc = b` directly avoided for n = 20?','لماذا يُتجنب حل `Gc = b` مباشرة عند n = 20؟',['G is badly conditioned, so many digits would be lost','G رديئة الشرط جداً فتضيع أرقام كثيرة'],
    [['The basis functions overlap strongly; their Gram matrix is nearly singular.','الدوال الأساسية متداخلة بقوة، فمصفوفة جرام قريبة من المنفردة.']], [['G is singular for n > 10','G منفردة عند n > 10'],['It is not avoided','لا يُتجنب']]),
]);

lesson('502',55,[
  ['Gram–Schmidt applied to the Bernstein basis (in the order `B_{n,n}, B_{n−1,n}, …`) gives orthonormal Bernstein polynomials, which keep a Bernstein-like structure:','بتطبيق جرام–شميت على أساس بيرنشتاين (بالترتيب `B_{n,n}, B_{n−1,n}, …`) نحصل على كثيرات بيرنشتاين المتعامدة المعيارية، التي تحتفظ ببنية شبيهة ببيرنشتاين:'],
  'φ_{j,n}(x) = #r{2(n − j) + 1} (1 − x)^{n−j} Σ_{k=0}^{j} (−1)^k C(2n + 1 − k, j − k) C(j, k) x^{j−k}',
  ['For n = 1: `φ_{0,1} = #r{3}(1 − x)` and `φ_{1,1} = 3x − 1`. Their Gram matrix is the identity, so least-squares coefficients are plain inner products and stay well conditioned.','وعند n = 1: `φ_{0,1} = #r{3}(1 − x)` و `φ_{1,1} = 3x − 1`. ومصفوفة جرام لها مصفوفة الوحدة، فمعاملات المربعات الصغرى ضروب داخلية بسيطة وتبقى جيدة الشرط.'],
],[
  Q('Check `‖φ_{0,1}‖ = 1`.','تحقق من `‖φ_{0,1}‖ = 1`.','1',['∫_0^1 3(1 − x)^2 dx = 3·#f{1}{3}'],['#r{3}','#f{1}{3}','3']),
  Q('Check `‖φ_{1,1}‖ = 1` and `⟨φ_{0,1}, φ_{1,1}⟩ = 0`.','تحقق من `‖φ_{1,1}‖ = 1` و `⟨φ_{0,1}, φ_{1,1}⟩ = 0`.',['Verified: 1 and 0','تحقق: 1 و 0'],
    ['∫_0^1 (3x − 1)^2 dx = 3 − 3 + 1 = 1', '#r{3}∫_0^1 (1 − x)(3x − 1) dx = #r{3}(2 − 1 − 1) = 0']),
  Q('Find the coefficients of `f = x` in the basis `φ_{0,1}, φ_{1,1}`.','أوجد معاملات `f = x` في الأساس `φ_{0,1}` و `φ_{1,1}`.','#f{#r{3}}{6},   #f{1}{2}',
    ['⟨x, φ_{0,1}⟩ = #r{3}∫_0^1 x(1 − x) dx = #f{#r{3}}{6}', '⟨x, φ_{1,1}⟩ = ∫_0^1 x(3x − 1) dx = #f{1}{2}', ['Check: `(#r{3}/6)·#r{3}(1 − x) + (1/2)(3x − 1) = x`.','تحقق: `(#r{3}/6)·#r{3}(1 − x) + (1/2)(3x − 1) = x`.']],
    ['0,   1','#f{1}{2},   #f{1}{2}','#f{#r{3}}{3},   #f{1}{2}']),
  Q('Use the formula to find `φ_{1,1}`.','استخدم الصيغة لإيجاد `φ_{1,1}`.','φ_{1,1} = 3x − 1',
    ['j = 1:   #r{1}·(1 − x)^0[C(3, 1)x − C(2, 0)C(1, 1)] = 3x − 1'], ['φ_{1,1} = 2x − 1','φ_{1,1} = #r{3}x','φ_{1,1} = 3x + 1']),
]);

lesson('502',56,[
  ['The shifted Legendre polynomials have very simple Bernstein coefficients:','لكثيرات ليجندر المزاحة معاملات بيرنشتاين بسيطة جداً:'],
  'P_n^*(x) = Σ_{i=0}^{n} (−1)^{n−i} C(n, i) B_{i,n}(x)',
  ['So converting a Legendre expansion to Bernstein form (or back) needs only binomial coefficients and degree elevation. The coefficients `±C(n, i)` alternate in sign n times, the maximum allowed by the variation-diminishing property: indeed `P_n^*` has n zeros in (0, 1).','إذن تحويل مفكوك ليجندر إلى صيغة بيرنشتاين (أو العكس) لا يحتاج إلا المعاملات ذات الحدين ورفع الدرجة. والمعاملات `±C(n, i)` تتناوب إشاراتها n مرة، وهو الحد الأقصى الذي تسمح به خاصية إنقاص التغير: وفعلاً لـ `P_n^*` عدد n من الجذور في (0, 1).'],
],[
  Q('Write `P_1^*` in the Bernstein basis.','اكتب `P_1^*` في أساس بيرنشتاين.','P_1^* = −B_{0,1} + B_{1,1}',['−(1 − x) + x = 2x − 1'],['P_1^* = B_{0,1} − B_{1,1}','P_1^* = B_{0,1} + B_{1,1}','P_1^* = 2B_{1,1}']),
  Q('Check `P_2^* = B_{0,2} − 2B_{1,2} + B_{2,2}`.','تحقق من `P_2^* = B_{0,2} − 2B_{1,2} + B_{2,2}`.','6x^2 − 6x + 1',
    ['(1 − x)^2 − 4x(1 − x) + x^2 = 1 − 2x + x^2 − 4x + 4x^2 + x^2'], ['6x^2 − 6x − 1','2x^2 − 2x + 1','x^2 − 4x + 1']),
  Q('Give the Bernstein coefficients of `P_3^*`.','أعط معاملات بيرنشتاين لـ `P_3^*`.','(−1,  3,  −3,  1)',['(−1)^{3−i} C(3, i)'],['(1,  −3,  3,  −1)','(1,  3,  3,  1)','(−1,  1,  −1,  1)']),
  Q('With `e^x ≈ 1.71828 P_0^* + 0.84515 P_1^* + 0.13986 P_2^*`, find the Bernstein coefficients of degree 2.','مع `e^x ≈ 1.71828 P_0^* + 0.84515 P_1^* + 0.13986 P_2^*` أوجد معاملات بيرنشتاين من الدرجة 2.','(1.0130,  1.4386,  2.7033)',
    ['P_0^* → (1, 1, 1),   P_1^* → (−1, 0, 1),   P_2^* → (1, −2, 1)', 'c = (1.71828 − 0.84515 + 0.13986,  1.71828 − 0.27972,  1.71828 + 0.84515 + 0.13986)', ['The end coefficients are close to `e^0 = 1` and `e^1 = 2.718`.','معاملا الطرفين قريبان من `e^0 = 1` و `e^1 = 2.718`.']],
    ['(1,  1.6487,  2.7183)','(1.7183,  0.8452,  0.1399)','(0.7337,  1.7183,  2.7033)']),
]);

lesson('502',57,[
  ['Jacobi polynomials on [0, 1] also have explicit Bernstein coefficients:','لكثيرات جاكوبي على [0, 1] أيضاً معاملات بيرنشتاين صريحة:'],
  'P_n^{(α,β)}(2x − 1) = Σ_{i=0}^{n} (−1)^{n−i} #f{C(n + α, i) C(n + β, n − i)}{C(n, i)} B_{i,n}(x)',
  ['They are orthogonal on [0, 1] with the weight `(1 − x)^{α} x^{β}`. With α = β = 0 the formula gives back the Legendre coefficients `(−1)^{n−i} C(n, i)`. Jacobi weights are useful when the solution has known end behaviour, and Course 503 studies them in full.','وهي متعامدة على [0, 1] بالوزن `(1 − x)^{α} x^{β}`. ومع α = β = 0 تعيد الصيغة معاملات ليجندر `(−1)^{n−i} C(n, i)`. وأوزان جاكوبي مفيدة حين يكون سلوك الحل عند الطرفين معروفاً، ويدرسها المقرر 503 كاملة.'],
],[
  Q('Find the Bernstein coefficients of `P_1^{(0,1)}(2x − 1)`.','أوجد معاملات بيرنشتاين لـ `P_1^{(0,1)}(2x − 1)`.','(−2,  1)',
    ['i = 0:  −#f{C(1, 0)C(2, 1)}{1} = −2,   i = 1:  #f{C(1, 1)C(2, 0)}{1} = 1', ['So `−2(1 − x) + x = 3x − 2`, as in Course 501.','إذن `−2(1 − x) + x = 3x − 2` كما في المقرر 501.']],
    ['(−1,  1)','(2,  −1)','(−2,  3)']),
  Q('Find the Bernstein coefficients of `P_1^{(1,0)}(2x − 1)`.','أوجد معاملات بيرنشتاين لـ `P_1^{(1,0)}(2x − 1)`.','(−1,  2)',
    ['i = 0:  −C(2, 0)C(1, 1) = −1,   i = 1:  C(2, 1)C(1, 0) = 2', ['So `−(1 − x) + 2x = 3x − 1`.','إذن `−(1 − x) + 2x = 3x − 1`.']], ['(−2,  1)','(1,  −2)','(−1,  1)']),
  Q('What does the formula give for α = β = 0?','ماذا تعطي الصيغة عند α = β = 0؟','(−1)^{n−i} C(n, i)',
    ['#f{C(n, i) C(n, n − i)}{C(n, i)} = C(n, i)', ['These are the coefficients of `P_n^*`.','وهي معاملات `P_n^*`.']], ['C(n, i)','(−1)^i','1']),
  Q('With which weight are `P_n^{(α,β)}(2x − 1)` orthogonal on [0, 1]?','بأي وزن تتعامد `P_n^{(α,β)}(2x − 1)` على [0, 1]؟','(1 − x)^{α} x^{β}',
    ['x = #f{1 + s}{2}:   (1 − s)^{α}(1 + s)^{β} ∝ (1 − x)^{α} x^{β}'], ['x^{α}(1 − x)^{β}','1','(1 − x^2)^{α}']),
]);

lesson('502',58,[
  ['A practical recipe for expanding f in the Bernstein basis of degree n: compute the shifted-Legendre coefficients `a_k = (2k + 1)∫_0^1 f P_k^* dx` (stably, by Gauss quadrature), convert them to Bernstein coefficients (Lesson 56 plus degree elevation), and estimate the error from the first neglected coefficient:',
   'وصفة عملية لنشر f في أساس بيرنشتاين من الدرجة n: نحسب معاملات ليجندر المزاحة `a_k = (2k + 1)∫_0^1 f P_k^* dx` (بثبات بتربيع جاوس)، ثم نحوّلها إلى معاملات بيرنشتاين (الدرس 56 مع رفع الدرجة)، ونقدّر الخطأ من أول معامل مُهمَل:'],
  '‖f − p_n‖ ≈ #f{|a_{n+1}|}{#r{2n + 3}}',
  ['For `e^x`: `a_0, …, a_4 = 1.71828, 0.84515, 0.13986, 0.01393, 0.00099`; with n = 2 the estimate `0.01393/#r{7} = 0.00527` agrees with the true error 0.00528.','وللدالة `e^x`: `a_0, …, a_4 = 1.71828, 0.84515, 0.13986, 0.01393, 0.00099`، ومع n = 2 يتفق التقدير `0.01393/#r{7} = 0.00527` مع الخطأ الحقيقي 0.00528.'],
],[
  Q('Compute `a_0` for `f = e^x`.','احسب `a_0` للدالة `f = e^x`.','e − 1 ≈ 1.71828',['a_0 = ∫_0^1 e^x dx'],['e ≈ 2.71828','1','#f{e − 1}{2} ≈ 0.85914']),
  Q('Compute `a_1` for `f = e^x`.','احسب `a_1` للدالة `f = e^x`.','3(3 − e) ≈ 0.84515',['3∫_0^1 e^x(2x − 1) dx = 3[(2x − 3)e^x]_0^1 = 3(−e + 3)'],['3(e − 1) ≈ 5.15485','3 − e ≈ 0.28172','e − 2 ≈ 0.71828']),
  Q('Estimate the `L^2` error of the degree-3 approximation of `e^x`.','قدّر خطأ تقريب الدرجة 3 للدالة `e^x` في `L^2`.','≈ #f{0.00099}{3} ≈ 3.3 × 10^{−4}',['#f{|a_4|}{#r{9}} = #f{0.00099}{3}'],['≈ 0.00099','≈ 0.0053','≈ 10^{−6}']),
  Q('The coefficients drop by about a factor of 10 per degree. About which n gives an error of `10^{−8}`?','المعاملات تنقسم على نحو 10 لكل درجة. أي n تقريباً يعطي خطأ `10^{−8}`؟','n ≈ 7',
    ['a_4 ≈ 10^{−3}  ⇒  a_k ≈ 10^{1−k}', 'a_{n+1} ≈ 10^{−8}  ⇒  n + 1 ≈ 9'], ['n ≈ 3','n ≈ 20','n ≈ 50']),
]);

lesson('502',59,[
  ['Replacing x by `t^{λ}` gives fractional-order Bernstein functions, suited to solutions with powers `t^{λ}, t^{2λ}, …`:','باستبدال x بـ `t^{λ}` نحصل على دوال بيرنشتاين ذات الرتبة الكسرية، المناسبة للحلول ذات القوى `t^{λ}, t^{2λ}, …`:'],
  'B_{i,n}^{λ}(t) = B_{i,n}(t^{λ}) = C(n, i) t^{iλ} (1 − t^{λ})^{n−i}',
  ['All properties carry over through `s = t^{λ}`: non-negativity, partition of unity, end values, and `∫_0^1 B_{i,n}^{λ} λt^{λ−1} dt = 1/(n + 1)`. For example `#r{t}` is exactly `B_{1,1}^{1/2}`.','وتنتقل كل الخواص عبر `s = t^{λ}`: عدم السالبية وتجزئة الواحد والقيم الطرفية و `∫_0^1 B_{i,n}^{λ} λt^{λ−1} dt = 1/(n + 1)`. فمثلاً `#r{t}` هي `B_{1,1}^{1/2}` تماماً.'],
],[
  Q('Write `B_{1,2}^{1/2}(t)`.','اكتب `B_{1,2}^{1/2}(t)`.','2#r{t} − 2t',['2t^{1/2}(1 − t^{1/2})'],['2t − 2t^2','#r{t}(1 − t)','2#r{t} + 2t']),
  Q('Where is the maximum of `B_{1,2}^{1/2}` and what is its value?','أين القيمة العظمى لـ `B_{1,2}^{1/2}` وما قيمتها؟','t = #f{1}{4},   #f{1}{2}',['s = t^{1/2} = #f{1}{2}  ⇒  t = #f{1}{4},   2·#f{1}{2}·#f{1}{2}'],['t = #f{1}{2},   #f{1}{2}','t = #f{1}{4},   #f{1}{4}','t = #f{1}{2},   #f{1}{4}']),
  Q('Compute `∫_0^1 B_{2,3}^{λ}(t) λt^{λ−1} dt`.','احسب `∫_0^1 B_{2,3}^{λ}(t) λt^{λ−1} dt`.','#f{1}{4}',['s = t^{λ}:   ∫_0^1 B_{2,3}(s) ds = #f{1}{4}'],['#f{λ}{4}','#f{1}{3}','#f{3}{4}']),
  Q('Write `t^{1/2} + t` in the fractional Bernstein basis with λ = 1/2 and n = 2.','اكتب `t^{1/2} + t` في أساس بيرنشتاين الكسري مع λ = 1/2 و n = 2.','c = (0,  #f{1}{2},  2)',
    ['s + s^2:   s → (0, #f{1}{2}, 1),   s^2 → (0, 0, 1)'], ['c = (0,  1,  2)','c = (0,  #f{1}{2},  1)','c = (1,  #f{1}{2},  2)']),
]);

lesson('502',60,[
  ['The Bernstein form is the best-conditioned polynomial form on [0, 1] among bases of non-negative functions (Farouki and Rajan). The condition number of evaluating p at x is','صيغة بيرنشتاين هي أفضل صيغ كثيرات الحدود شرطاً على [0, 1] بين أسس الدوال غير السالبة (فاروقي وراجان). وعدد شرط حساب p عند x هو'],
  ['in the Bernstein form, and in the power form:','في صيغة بيرنشتاين، وفي صيغة القوى:'],
  'cond(p, x) = #f{Σ_i |c_i| B_{i,n}(x)}{|p(x)|},     cond(p, x) = #f{Σ_k |a_k| x^k}{|p(x)|}',
  ['For `p = (x − 1/2)^{10}` at x = 0.6 the power form has condition about `2.6 × 10^{10}`, the Bernstein form about `9.8 × 10^6`: three more digits survive. Together with de Casteljau’s convex combinations this is why CAD systems and recent spectral solvers prefer the Bernstein form.',
   'وللدالة `p = (x − 1/2)^{10}` عند x = 0.6 يكون شرط صيغة القوى نحو `2.6 × 10^{10}` وشرط صيغة بيرنشتاين نحو `9.8 × 10^6`: يبقى ثلاثة أرقام إضافية. ومع التراكيب المحدبة في دي كاستلجو هذا سبب تفضيل أنظمة التصميم الهندسي وحلّالات الطرق الطيفية الحديثة لصيغة بيرنشتاين.'],
],[
  Q('For `p = (x − 1/2)^{10}`, compute the power-form condition number at x = 0.6.','للدالة `p = (x − 1/2)^{10}` احسب عدد شرط صيغة القوى عند x = 0.6.','≈ 2.6 × 10^{10}',
    ['Σ_k |a_k| x^k = (0.6 + 0.5)^{10} = 1.1^{10} ≈ 2.594,   p(0.6) = 10^{−10}', '#f{2.594}{10^{−10}} ≈ 2.6 × 10^{10}'], ['≈ 9.8 × 10^6','≈ 1','≈ 10^{−10}']),
  Q('Compute the Bernstein-form condition number for the same p and x.','احسب عدد شرط صيغة بيرنشتاين للدالة p نفسها عند x نفسها.','≈ 9.8 × 10^6',
    ['x − #f{1}{2} = −#f{1}{2}B_{0,1} + #f{1}{2}B_{1,1}  ⇒  |c_i| = 2^{−10}', '#f{2^{−10}}{10^{−10}} ≈ 9.8 × 10^6'], ['≈ 2.6 × 10^{10}','≈ 1024','≈ 10^{10}']),
  Q('About how many more correct digits does the Bernstein form keep in this example?','كم رقماً صحيحاً إضافياً تحتفظ به صيغة بيرنشتاين تقريباً في هذا المثال؟','≈ 3',['log_{10} #f{2.6 × 10^{10}}{9.8 × 10^6} ≈ log_{10} 2650 ≈ 3.4'],['≈ 10','≈ 7','0']),
  Q('Which evaluation algorithm keeps the advantage of the Bernstein form?','أي خوارزمية حساب تحافظ على ميزة صيغة بيرنشتاين؟',['De Casteljau’s algorithm','خوارزمية دي كاستلجو'],
    [['Converting to the power form first would throw the advantage away.','التحويل إلى صيغة القوى أولاً يضيّع الميزة.']], [['Horner’s rule after converting to powers','قاعدة هورنر بعد التحويل إلى القوى']]),
]);

/* ---- 502 · Unit 7 (lessons 61–70): operational matrices ---- */
lesson('502',61,[
  ['Collect the basis in the vector `Φ(x) = [B_{0,n}(x), …, B_{n,n}(x)]^T` and write a function as `y = c^T Φ`. An operational matrix turns an operation on y into a matrix acting on the coefficient vector c:','نجمع الأساس في المتجه `Φ(x) = [B_{0,n}(x), …, B_{n,n}(x)]^T` ونكتب الدالة `y = c^T Φ`. والمصفوفة التشغيلية تحوّل عملية على y إلى مصفوفة تعمل على متجه المعاملات c:'],
  '#f{d}{dx} Φ = D Φ,   ∫_0^x Φ ≈ J Φ,   D^{−μ} Φ ≈ I_{(−μ)} Φ   ⇒   y′ = c^T D Φ,   …',
  ['Then a differential or integral equation becomes an algebraic system for c. The same idea was used with Legendre polynomials in Course 501; the Bernstein matrices are built from the derivative, product and integral formulas of Units 2 and 6.','فتصبح المعادلة التفاضلية أو التكاملية نظاماً جبرياً في c. والفكرة نفسها استُخدمت مع كثيرات ليجندر في المقرر 501، ومصفوفات بيرنشتاين تُبنى من صيغ المشتقة والضرب والتكامل في الوحدتين 2 و 6.'],
],[
  Q('If `y = c^T Φ` and `y′ = c^T D Φ`, what are the coefficients of `y″`?','إذا كانت `y = c^T Φ` و `y′ = c^T D Φ` فما معاملات `y″`؟','c^T D^2',
    ['y″ = (c^T D)D Φ = c^T D^2 Φ'], ['c^T D','D^2 c','c^T D^T D']),
  Q('Which of D, J, `I_{(−μ)}` is exact (no truncation) in the Bernstein basis of degree n?','أي المصفوفات D و J و `I_{(−μ)}` مضبوطة (بلا قطع) في أساس بيرنشتاين من الدرجة n؟','D',
    [['The derivative of a polynomial of degree n has degree n − 1, which lies in `Π_n`; integrals raise the degree or leave the space.','مشتقة كثيرة حدود من الدرجة n درجتها n − 1 وهي داخل `Π_n`، أما التكاملات فترفع الدرجة أو تخرج من الفضاء.']], ['J','I_{(−μ)}',['All three','الثلاث']]),
  Q('What is the size of the operational matrices for n = 6?','ما حجم المصفوفات التشغيلية عند n = 6؟','7 × 7',['(n + 1) × (n + 1)'],['6 × 6','8 × 8','6 × 7']),
  Q('Write `y′ + 2y = 0` as an equation for the coefficients.','اكتب `y′ + 2y = 0` معادلةً في المعاملات.','c^T(D + 2I) = 0',
    ['c^T D Φ + 2c^T Φ = c^T(D + 2I)Φ = 0', ['Together with the initial condition this gives a linear system.','ومع الشرط الابتدائي يعطي نظاماً خطياً.']], ['(D + 2)c = 0','c^T D = 2c^T','D c + 2 = 0']),
]);

lesson('502',62,[
  ['The derivative rule `B_{i,n}′ = n(B_{i−1,n−1} − B_{i,n−1})` gives polynomials of degree n − 1; degree elevation writes them back in the basis of degree n. The result is the differentiation matrix D. For n = 1 and n = 2:','قاعدة المشتقة `B_{i,n}′ = n(B_{i−1,n−1} − B_{i,n−1})` تعطي كثيرات من الدرجة n − 1، ورفع الدرجة يعيد كتابتها في أساس الدرجة n. والنتيجة مصفوفة التفاضل D. وعند n = 1 و n = 2:'],
  'D_1 = #m{−1, −1 ;; 1, 1},     D_2 = #m{−2, −1, 0 ;; 2, 0, −2 ;; 0, 1, 2}',
  ['Row i holds the coefficients of `B_{i,n}′`. Every column sums to 0, because `Σ_i B_{i,n} = 1` has derivative 0. The matrix is exact and nilpotent: `D^{n+1} = 0`.','الصف i يحمل معاملات `B_{i,n}′`. ومجموع كل عمود 0 لأن مشتقة `Σ_i B_{i,n} = 1` صفر. والمصفوفة مضبوطة ومعدومة القوى: `D^{n+1} = 0`.'],
],[
  Q('Derive the first row of `D_2` (the coefficients of `B_{0,2}′`).','اشتق الصف الأول من `D_2` (معاملات `B_{0,2}′`).','(−2,  −1,  0)',
    ['B_{0,2}′ = −2B_{0,1}', 'B_{0,1} = B_{0,2} + #f{1}{2}B_{1,2}  ⇒  −2B_{0,2} − B_{1,2}'], ['(−2,  0,  0)','(−2,  2,  0)','(−1,  −1,  0)']),
  Q('Use `D_2` to differentiate `p = x^2 = B_{2,2}`.','استخدم `D_2` لاشتقاق `p = x^2 = B_{2,2}`.','(0,  1,  2)',
    ['c^T D = (0, 0, 1)·D_2 = (0, 1, 2)', ['This is the third row of `D_2`.','وهو الصف الثالث من `D_2`.'], ['These are the degree-2 coefficients of `2x` (the values 0, 1, 2 at 0, 1/2, 1).','وهي معاملات `2x` في الدرجة 2 (القيم 0 و 1 و 2 عند 0 و 1/2 و 1).']], ['(0,  0,  2)','(2,  1,  0)','(0,  2,  4)']),
  Q('Use `D_2` to differentiate `p = 1 = B_{0,2} + B_{1,2} + B_{2,2}`.','استخدم `D_2` لاشتقاق `p = 1 = B_{0,2} + B_{1,2} + B_{2,2}`.','(0,  0,  0)',
    ['(1, 1, 1)·D_2 = (0, 0, 0)', ['These are the column sums.','وهي مجاميع الأعمدة.']], ['(1,  1,  1)','(−2,  0,  2)','(0,  1,  0)']),
  Q('Compute `D_1^2`.','احسب `D_1^2`.','#m{0, 0 ;; 0, 0}',
    ['#m{−1, −1 ;; 1, 1}^2 = #m{1 − 1, 1 − 1 ;; −1 + 1, −1 + 1}', ['The second derivative of a line is 0.','المشتقة الثانية للمستقيم صفر.']], ['#m{2, 2 ;; −2, −2}','#m{1, 0 ;; 0, 1}','#m{−1, −1 ;; 1, 1}']),
]);

lesson('502',63,[
  ['Integration raises the degree by one:','التكامل يرفع الدرجة بواحد:'],
  '∫_0^x B_{i,n}(s) ds = #f{1}{n + 1} Σ_{j=i+1}^{n+1} B_{j,n+1}(x)',
  ['So the exact integration matrix is rectangular, `(n + 1) × (n + 2)`. To stay in `Π_n` the result must be projected back (least squares, Lesson 66) or the basis must be one degree larger than the unknown. The lower limit 0 is built in: every integral starts with coefficient 0.','فمصفوفة التكامل المضبوطة مستطيلة `(n + 1) × (n + 2)`. وللبقاء في `Π_n` يجب إسقاط النتيجة (المربعات الصغرى، الدرس 66) أو أخذ الأساس أعلى درجة من المجهول بواحد. والحد الأدنى 0 مدمج: كل تكامل يبدأ بمعامل 0.'],
],[
  Q('Write `∫_0^x B_{0,1}` in degree 2.','اكتب `∫_0^x B_{0,1}` في الدرجة 2.','(0,  #f{1}{2},  #f{1}{2})',['#f{1}{2}(B_{1,2} + B_{2,2})'],['(#f{1}{2},  #f{1}{2},  0)','(0,  1,  1)','(0,  0,  #f{1}{2})']),
  Q('Write `∫_0^x B_{1,1}` in degree 2.','اكتب `∫_0^x B_{1,1}` في الدرجة 2.','(0,  0,  #f{1}{2})',['#f{1}{2}B_{2,2} = #f{x^2}{2}'],['(0,  #f{1}{2},  #f{1}{2})','(0,  0,  1)','(#f{1}{2},  0,  0)']),
  Q('What is the size of the exact integration matrix for n = 4?','ما حجم مصفوفة التكامل المضبوطة عند n = 4؟','5 × 6',['(n + 1) × (n + 2)'],['5 × 5','4 × 5','6 × 6']),
  Q('Integrate `p = 2B_{0,1} + 4B_{1,1}` from 0 to x.','كامل `p = 2B_{0,1} + 4B_{1,1}` من 0 إلى x.','(0,  1,  3)',
    ['2·(0, #f{1}{2}, #f{1}{2}) + 4·(0, 0, #f{1}{2})'], ['(0,  2,  6)','(1,  3,  0)','(2,  3,  4)']),
]);

lesson('502',64,[
  ['Variable coefficients and nonlinear terms need products. A product of two Bernstein polynomials is again a Bernstein polynomial, of the summed degree:','المعاملات المتغيرة والحدود غير الخطية تحتاج حواصل ضرب. وحاصل ضرب كثيرتي بيرنشتاين كثيرة بيرنشتاين أيضاً من مجموع الدرجتين:'],
  'B_{k,m} B_{i,n} = #f{C(m, k) C(n, i)}{C(m + n, k + i)} B_{k+i,m+n}',
  ['So multiplication by a known function `a = Σ a_k B_{k,m}` is a matrix from degree n to degree m + n. In a method with a fixed degree the result is then reduced back (projection), which is the product operational matrix.','فالضرب في دالة معلومة `a = Σ a_k B_{k,m}` مصفوفة من الدرجة n إلى الدرجة m + n. وفي طريقة بدرجة ثابتة تُخفض النتيجة بعدها (بالإسقاط)، وهذه مصفوفة الضرب التشغيلية.'],
],[
  Q('Compute `x·B_{0,1}` in degree 2.','احسب `x·B_{0,1}` في الدرجة 2.','#f{1}{2}B_{1,2}',['B_{1,1}B_{0,1} = #f{1·1}{C(2, 1)}B_{1,2}'],['B_{1,2}','#f{1}{2}B_{0,2}','2B_{1,2}']),
  Q('Compute `x·B_{1,1}` in degree 2.','احسب `x·B_{1,1}` في الدرجة 2.','B_{2,2}',['B_{1,1}B_{1,1} = #f{1·1}{C(2, 2)}B_{2,2}'],['#f{1}{2}B_{2,2}','B_{1,2}','2B_{2,2}']),
  Q('Write the matrix of multiplication by x from degree 1 to degree 2 (row i: coefficients of `x·B_{i,1}`).','اكتب مصفوفة الضرب في x من الدرجة 1 إلى الدرجة 2 (الصف i: معاملات `x·B_{i,1}`).','#m{0, 1/2, 0 ;; 0, 0, 1}',
    ['x B_{0,1} = #f{1}{2}B_{1,2},   x B_{1,1} = B_{2,2}'], ['#m{1/2, 0, 0 ;; 0, 1, 0}','#m{0, 1, 0 ;; 0, 0, 1}','#m{0, 1/2 ;; 0, 1}']),
  Q('What is the degree of `y^2` when y has degree n?','ما درجة `y^2` إذا كانت درجة y هي n؟','2n',['B_{i,n}B_{j,n} ∈ Π_{2n}'],['n','n^2','n + 1']),
]);

lesson('502',65,[
  ['For fractional problems the Riemann–Liouville integral of each basis polynomial is computed exactly, term by term, by the power law:','للمسائل الكسرية يُحسب تكامل ريمان–ليوفيل لكل كثيرة أساسية بدقة حداً حداً بقانون القوى:'],
  'D^{−μ} B_{i,n}(t) = C(n, i) Σ_{k=0}^{n−i} (−1)^k C(n − i, k) #f{Γ(i + k + 1)}{Γ(i + k + μ + 1)} t^{i+k+μ}',
  ['It comes from expanding `(1 − t)^{n−i}` and applying `D^{−μ} t^p = Γ(p + 1)/Γ(p + μ + 1)·t^{p+μ}`. The powers `t^{i+k+μ}` are not polynomials unless μ is a whole number, which is the source of the truncation in the next lesson.','وهي تأتي من فك `(1 − t)^{n−i}` وتطبيق `D^{−μ} t^p = Γ(p + 1)/Γ(p + μ + 1)·t^{p+μ}`. والقوى `t^{i+k+μ}` ليست كثيرات حدود إلا إذا كانت μ عدداً صحيحاً، ومن هنا القطع في الدرس التالي.'],
],[
  Q('Compute `D^{−1/2} B_{0,1}`.','احسب `D^{−1/2} B_{0,1}`.','#f{t^{1/2}}{Γ(3/2)} − #f{t^{3/2}}{Γ(5/2)} ≈ 1.1284#r{t} − 0.7523t^{3/2}',
    ['B_{0,1} = 1 − t', 'D^{−1/2} 1 = #f{t^{1/2}}{Γ(3/2)},   D^{−1/2} t = #f{Γ(2)}{Γ(5/2)} t^{3/2}'], ['#r{t} − t^{3/2}','1.1284#r{t}','0.7523t^{3/2} − 1.1284#r{t}']),
  Q('Compute `D^{−1/2} B_{1,1}`.','احسب `D^{−1/2} B_{1,1}`.','#f{t^{3/2}}{Γ(5/2)} ≈ 0.7523t^{3/2}',['D^{−1/2} t = #f{Γ(2)}{Γ(5/2)}t^{3/2}'],['1.1284t^{3/2}','t^{3/2}','0.7523#r{t}']),
  Q('Compute `D^{−1} B_{1,1}`.','احسب `D^{−1} B_{1,1}`.','#f{t^2}{2}',['∫_0^t s ds'],['t^2','#f{t}{2}','t']),
  Q('For which μ is `D^{−μ} B_{i,n}` a polynomial?','لأي μ تكون `D^{−μ} B_{i,n}` كثيرة حدود؟',['When μ is a whole number','عندما تكون μ عدداً صحيحاً'],
    ['t^{i+k+μ}'], [['For every μ','لكل μ'],['Only for μ = 1/2','لـ μ = 1/2 فقط']]),
]);

lesson('502',66,[
  ['To keep the method in `Π_n`, each `D^{−μ} B_{i,n}` is replaced by its best approximation in `Π_n`, computed with the dual basis: the coefficients are `⟨D^{−μ} B_{i,n}, D_j⟩`. These rows form the operational matrix of (fractional) integration:','للإبقاء على الطريقة في `Π_n` تُستبدل كل `D^{−μ} B_{i,n}` بأفضل تقريب لها في `Π_n`، ويُحسب بالأساس الثنوي: المعاملات هي `⟨D^{−μ} B_{i,n}, D_j⟩`. وهذه الصفوف تكوّن المصفوفة التشغيلية للتكامل (الكسري):'],
  'D^{−μ} Φ ≈ I_{(−μ)} Φ,   I_{(−μ)}(i, j) = ⟨D^{−μ} B_{i,n}, D_j⟩',
  ['For n = 1 and μ = 1 (an ordinary integral) the matrix is `(1/12, 7/12; −1/12, 5/12)`. The approximation is the only error of the method in time, exactly as with Theorem 3.2 in the Legendre basis.','وعند n = 1 و μ = 1 (تكامل عادي) المصفوفة `(1/12, 7/12; −1/12, 5/12)`. والتقريب هو الخطأ الوحيد للطريقة في الزمن، تماماً كما في النظرية 3.2 بأساس ليجندر.'],
],[
  Q('With `D_0 = 4 − 6t`, `D_1 = 6t − 2`, compute the first row of `I_{(−1)}` for n = 1.','مع `D_0 = 4 − 6t` و `D_1 = 6t − 2` احسب الصف الأول من `I_{(−1)}` عند n = 1.','(#f{1}{12},  #f{7}{12})',
    ['D^{−1}B_{0,1} = t − #f{t^2}{2}', '∫_0^1 (t − #f{t^2}{2})(4 − 6t) dt = #f{1}{12},   ∫_0^1 (t − #f{t^2}{2})(6t − 2) dt = #f{7}{12}'],
    ['(0,  #f{1}{2})','(#f{1}{12},  #f{5}{12})','(#f{7}{12},  #f{1}{12})']),
  Q('Compute the second row of `I_{(−1)}` for n = 1.','احسب الصف الثاني من `I_{(−1)}` عند n = 1.','(−#f{1}{12},  #f{5}{12})',
    ['D^{−1}B_{1,1} = #f{t^2}{2}', '∫_0^1 #f{t^2}{2}(4 − 6t) dt = −#f{1}{12},   ∫_0^1 #f{t^2}{2}(6t − 2) dt = #f{5}{12}'],
    ['(0,  #f{1}{2})','(#f{1}{12},  #f{5}{12})','(−#f{1}{12},  #f{7}{12})']),
  Q('The exact integral `t − t^2/2` vanishes at t = 0, but the first row gives `1/12` there. Why?','التكامل المضبوط `t − t^2/2` ينعدم عند t = 0، لكن الصف الأول يعطي `1/12` هناك. لماذا؟',['The row is the least-squares line, not an interpolant: it trades the end value for a small average error','الصف هو خط المربعات الصغرى لا استكمال: يتنازل عن قيمة الطرف مقابل خطأ متوسط صغير'],
    [['With a larger n the projection error shrinks quickly.','ومع n أكبر يصغر خطأ الإسقاط بسرعة.']], [['A computing error','خطأ حسابي'],['The integral starts at t = 1','التكامل يبدأ عند t = 1']]),
  Q('Use `I_{(−1)}` to integrate `y = 1 = B_{0,1} + B_{1,1}`.','استخدم `I_{(−1)}` لتكامل `y = 1 = B_{0,1} + B_{1,1}`.','(0,  1)',
    ['(1, 1)·I_{(−1)} = (#f{1}{12} − #f{1}{12},  #f{7}{12} + #f{5}{12})', ['`(0, 1)` means `B_{1,1} = t`: exact, because `∫_0^t 1 = t` is in `Π_1`.','`(0, 1)` تعني `B_{1,1} = t`: مضبوط لأن `∫_0^t 1 = t` داخل `Π_1`.']],
    ['(1,  1)','(#f{1}{12},  #f{7}{12})','(#f{1}{2},  #f{1}{2})']),
]);

lesson('502',67,[
  ['The Caputo derivative of a basis polynomial is also explicit; the constant term disappears:','مشتقة كابوتو لكثيرة أساسية صريحة أيضاً، والحد الثابت يختفي:'],
  '^CD^{α} B_{i,n}(t) = C(n, i) Σ_{k: i+k≥1} (−1)^k C(n − i, k) #f{Γ(i + k + 1)}{Γ(i + k + 1 − α)} t^{i+k−α}',
  ['The result contains powers `t^{m−α}`, which are not polynomials. A Bernstein method either projects them (next lesson) or, better, works with the integrated form of Lemma 2.1, which only needs integrals.','والنتيجة تحتوي قوى `t^{m−α}` ليست كثيرات حدود. وطريقة بيرنشتاين إما أن تسقطها (الدرس التالي)، أو، وهو الأفضل، تعمل بالصيغة التكاملية من اللمة 2.1 التي لا تحتاج إلا التكاملات.'],
],[
  Q('Compute `^CD^{1/2} B_{1,1}`.','احسب `^CD^{1/2} B_{1,1}`.','#f{t^{1/2}}{Γ(3/2)} ≈ 1.1284#r{t}',['^CD^{1/2} t = #f{Γ(2)}{Γ(3/2)} t^{1/2}'],['0.7523t^{3/2}','#r{t}','0.5642#r{t}']),
  Q('Compute `^CD^{1/2} B_{0,1}`.','احسب `^CD^{1/2} B_{0,1}`.','−1.1284#r{t}',['^CD^{1/2}(1 − t) = 0 − 1.1284#r{t}'],['1.1284#r{t}','#f{1}{Γ(1/2)}t^{−1/2}','0']),
  Q('Compute `^CD^{1/2} B_{2,2}`.','احسب `^CD^{1/2} B_{2,2}`.','#f{Γ(3)}{Γ(5/2)} t^{3/2} ≈ 1.5045t^{3/2}',['B_{2,2} = t^2'],['2t^{3/2}','1.1284t^{3/2}','0.7523t^{3/2}']),
  Q('Why is `^CD^{α} Σ_i B_{i,n} = 0`?','لماذا `^CD^{α} Σ_i B_{i,n} = 0`؟',['The sum is the constant 1, and the Caputo derivative of a constant is 0','المجموع هو الثابت 1، ومشتقة كابوتو للثابت صفر'],
    ['Σ_i B_{i,n} = 1'], [['Because α < 1','لأن α < 1'],['It is not zero','ليس صفراً']]),
]);

lesson('502',68,[
  ['Projecting `^CD^{α} B_{i,n}` onto `Π_n` with the dual basis gives the operational matrix of fractional differentiation. For n = 1 and α = 1/2 it needs only the projection of `#r{t}`:','بإسقاط `^CD^{α} B_{i,n}` على `Π_n` بالأساس الثنوي نحصل على المصفوفة التشغيلية للتفاضل الكسري. وعند n = 1 و α = 1/2 لا تحتاج إلا إسقاط `#r{t}`:'],
  '#r{t} ≈ #f{4}{15} B_{0,1} + #f{16}{15} B_{1,1},     D^{(1/2)} ≈ 1.1284·#m{−4/15, −16/15 ;; 4/15, 16/15}',
  ['As for D, the columns sum to 0. For α = 1 the matrix becomes the exact D. Because `t^{m−α}` behaves badly near 0, this matrix converges slowly; the integrated form avoids it.','وكما في D مجموع الأعمدة 0. وعند α = 1 تصبح المصفوفة D المضبوطة. ولأن `t^{m−α}` تسلك سلوكاً سيئاً قرب 0 تتقارب هذه المصفوفة ببطء، والصيغة التكاملية تتجنبها.'],
],[
  Q('Project `#r{t}` onto `Π_1` with the dual basis.','أسقط `#r{t}` على `Π_1` بالأساس الثنوي.','(#f{4}{15},  #f{16}{15})',
    ['∫_0^1 #r{t}(4 − 6t) dt = #f{8}{3} − #f{12}{5} = #f{4}{15}', '∫_0^1 #r{t}(6t − 2) dt = #f{12}{5} − #f{4}{3} = #f{16}{15}'], ['(0,  1)','(#f{1}{3},  1)','(#f{16}{15},  #f{4}{15})']),
  Q('Write the second row of `D^{(1/2)}` for n = 1 numerically.','اكتب الصف الثاني من `D^{(1/2)}` عند n = 1 عددياً.','(0.3009,  1.2036)',['1.1284·(#f{4}{15}, #f{16}{15})'],['(−0.3009,  −1.2036)','(0.2667,  1.0667)','(1.1284,  1.1284)']),
  Q('Apply `D^{(1/2)}` to `y = 1`.','طبّق `D^{(1/2)}` على `y = 1`.','(0,  0)',['(1, 1)·D^{(1/2)} = (0, 0)', ['These are the column sums.','وهي مجاميع الأعمدة.']],['(1,  1)','(0.3009,  1.2036)','(1.1284,  1.1284)']),
  Q('Why do Bernstein methods for fractional equations usually prefer the integrated form?','لماذا تفضّل طرق بيرنشتاين للمعادلات الكسرية الصيغة التكاملية عادةً؟',['Fractional integrals of the basis are smoother than fractional derivatives, so their projections are more accurate','التكاملات الكسرية للأساس أنعم من المشتقات الكسرية، فتكون إسقاطاتها أدق'],
    [['`D^{−α}` produces `t^{m+α}`; `^CD^{α}` produces `t^{m−α}`, with an unbounded derivative near 0.','`D^{−α}` تنتج `t^{m+α}` بينما `^CD^{α}` تنتج `t^{m−α}` بمشتقة غير محدودة قرب 0.']], [['Because derivatives are not defined','لأن المشتقات غير معرّفة'],['There is no difference','لا فرق']]),
]);

lesson('502',69,[
  ['In practice the projections are computed with inner products against the basis and one solve with the Gram matrix. For any operator 𝓛:','عملياً تُحسب الإسقاطات بضروب داخلية مع الأساس وحل واحد بمصفوفة جرام. ولأي مؤثر 𝓛:'],
  'Q_{ij} = ⟨𝓛 B_{i,n}, B_{j,n}⟩,   M_{𝓛} = Q G^{−1}',
  ['since `⟨·, D_j⟩ = Σ_k ⟨·, B_k⟩ (G^{−1})_{kj}`. These are the dual operational matrices. All entries of Q are integrals of powers, available in closed form, so the only numerical step is the solve with G (which should be done through an orthogonal basis for large n).','لأن `⟨·, D_j⟩ = Σ_k ⟨·, B_k⟩ (G^{−1})_{kj}`. وهذه المصفوفات التشغيلية الثنوية. وكل عناصر Q تكاملات قوى بصيغ مغلقة، فالخطوة العددية الوحيدة الحل بمصفوفة G (ويُفضَّل إجراؤه عبر أساس متعامد عند n كبير).'],
],[
  Q('For 𝓛 = d/dx and n = 1, compute the first row of Q.','للمؤثر 𝓛 = d/dx عند n = 1 احسب الصف الأول من Q.','(−#f{1}{2},  −#f{1}{2})',
    ['B_{0,1}′ = −1:   ⟨−1, 1 − x⟩ = −#f{1}{2},   ⟨−1, x⟩ = −#f{1}{2}'], ['(−1,  −1)','(#f{1}{2},  #f{1}{2})','(−#f{1}{3},  −#f{1}{6})']),
  Q('Multiply that row by `G^{−1} = (4, −2; −2, 4)` and compare with `D_1`.','اضرب ذلك الصف في `G^{−1} = (4, −2; −2, 4)` وقارن بـ `D_1`.','(−1,  −1)',
    ['(−#f{1}{2}, −#f{1}{2})·#m{4, −2 ;; −2, 4} = (−2 + 1,  1 − 2)', ['It is the first row of `D_1`: the projection of an exact result returns it unchanged.','وهو الصف الأول من `D_1`: إسقاط نتيجة مضبوطة يعيدها كما هي.']],
    ['(−2,  −2)','(−#f{1}{2},  −#f{1}{2})','(1,  1)']),
  Q('Why are the entries of Q available in closed form?','لماذا تتوفر عناصر Q بصيغ مغلقة؟',['They are integrals of products of powers of t, e.g. `∫_0^1 t^a dt = 1/(a + 1)`','لأنها تكاملات حواصل ضرب قوى t، مثل `∫_0^1 t^a dt = 1/(a + 1)`'],
    [['Even for fractional operators the integrands are powers `t^{a}` with real a > −1.','وحتى للمؤثرات الكسرية تكون الدوال المكامَلة قوى `t^{a}` بأسس حقيقية a > −1.']], [['Because Q is diagonal','لأن Q قطرية'],['They are not','لا تتوفر']]),
  Q('Which step of building `M_𝓛` is numerically delicate for large n?','أي خطوة في بناء `M_𝓛` حساسة عددياً عند n كبير؟',['The solve with the Gram matrix G','الحل بمصفوفة جرام G'],
    [['G is ill-conditioned; using orthonormal Bernstein or Legendre coordinates avoids the problem.','G رديئة الشرط، واستخدام إحداثيات بيرنشتاين المتعامدة المعيارية أو ليجندر يتجنب المشكلة.']], [['Computing the integrals','حساب التكاملات'],['Multiplying matrices','ضرب المصفوفات']]),
]);

lesson('502',70,[
  ['A compact implementation in Python builds D by applying the derivative rule and then degree elevation:','تنفيذ مختصر في بايثون يبني D بتطبيق قاعدة المشتقة ثم رفع الدرجة:'],
  '$import numpy as np\n\ndef elevate(c):                      # degree m -> m + 1\n    m = len(c) - 1\n    return [c[0]] + [(i*c[i-1] + (m+1-i)*c[i])/(m+1)\n                     for i in range(1, m+1)] + [c[m]]\n\ndef bern_D(n):                       # row i: coefficients of B_{i,n}\'\n    rows = []\n    for i in range(n+1):\n        d = [0.0]*n                  # B_{i,n}\' in degree n - 1\n        if i > 0: d[i-1] += n\n        if i < n: d[i]   -= n\n        rows.append(elevate(d))\n    return np.array(rows)',
  ['The same few lines translate directly to MATLAB or Mathematica (``BernsteinBasis[n, i, x]`` gives the basis there). Always test a new matrix on functions with known results: the column sums of D must be 0, and `x^n = B_{n,n}` must give `n x^{n−1}`.','والسطور القليلة نفسها تُترجم مباشرة إلى MATLAB أو Mathematica (حيث يعطي ``BernsteinBasis[n, i, x]`` الأساس). واختبر دائماً أي مصفوفة جديدة على دوال معلومة النتائج: مجاميع أعمدة D يجب أن تكون 0، و `x^n = B_{n,n}` يجب أن تعطي `n x^{n−1}`.'],
],[
  Q('What does `bern_D(1)` return?','ماذا تعيد `bern_D(1)`؟','#m{−1, −1 ;; 1, 1}',
    [['For i = 0 the derivative in degree 0 is `[−1]`, and elevation gives `[−1, −1]`; for i = 1 it is `[1]`, giving `[1, 1]`.','عند i = 0 تكون المشتقة في الدرجة 0 هي `[−1]` والرفع يعطي `[−1, −1]`، وعند i = 1 هي `[1]` فتعطي `[1, 1]`.']], ['#m{−1, 1 ;; −1, 1}','#m{0, 0 ;; 1, 0}','#m{1, 1 ;; −1, −1}']),
  Q('Which NumPy test checks that every column of D sums to 0?','أي اختبار في NumPy يتحقق أن مجموع كل عمود في D صفر؟','$np.allclose(D.sum(axis=0), 0)',
    [['`axis=0` sums down the columns.','`axis=0` يجمع على الأعمدة.']], ['$np.allclose(D.sum(axis=1), 0)','$D.trace() == 0','$np.linalg.det(D) == 0']),
  Q('Which Mathematica function gives `B_{i,n}(x)`?','أي دالة في Mathematica تعطي `B_{i,n}(x)`؟','$BernsteinBasis[n, i, x]',
    [['It is built in, together with ``BezierCurve`` for drawing.','وهي مدمجة، ومعها ``BezierCurve`` للرسم.']], ['$Binomial[n, i]','$LegendreP[n, x]','$Bernstein[i, n]']),
  Q('Check `bern_D(2)` on `p = x^2 = B_{2,2}`: which row should equal `(0, 1, 2)`?','تحقق من `bern_D(2)` على `p = x^2 = B_{2,2}`: أي صف يجب أن يساوي `(0, 1, 2)`؟',['The last row (i = 2)','الصف الأخير (i = 2)'],
    ['(0, 0, 1)·D_2 = row 2 = (0, 1, 2)  ↔  2x'], [['The first row','الصف الأول'],['No row','لا صف']]),
]);

/* ---- 502 · Unit 8 (lessons 71–80): solving differential equations ---- */
lesson('502',71,[
  ['Write the unknown as `y_n = Σ_{i=0}^{n} c_i B_{i,n}(x)` and put it in the equation `𝓛y = f`. The residual `R = 𝓛y_n − f` cannot vanish everywhere, so we ask it to vanish in a weaker sense, exactly as in Course 501:','نكتب المجهول `y_n = Σ_{i=0}^{n} c_i B_{i,n}(x)` ونعوّضه في المعادلة `𝓛y = f`. والباقي `R = 𝓛y_n − f` لا يمكن أن ينعدم في كل مكان، فنطلب انعدامه بمعنى أضعف كما في المقرر 501 تماماً:'],
  ['Collocation: `R(x_k) = 0` at chosen points. Galerkin: `⟨R, B_{j,n}⟩ = 0` for the basis functions that satisfy the boundary conditions. Tau: R orthogonal to `Π_{n−m}`, plus m boundary or initial conditions.','التجميع: `R(x_k) = 0` عند نقاط مختارة. جاليركن: `⟨R, B_{j,n}⟩ = 0` لدوال الأساس التي تحقق الشروط الحدية. تاو: R عمودي على `Π_{n−m}` مع m شرطاً حدياً أو ابتدائياً.'],
  ['The Bernstein basis adds one convenience: boundary and initial values are just end coefficients, `y(0) = c_0` and `y(1) = c_n`.','ويضيف أساس بيرنشتاين ميزة: القيم الحدية والابتدائية هي معاملات الطرفين فقط، `y(0) = c_0` و `y(1) = c_n`.'],
],[
  Q('For `y′ = y`, `y(0) = 3`, which coefficient is known before solving?','للمسألة `y′ = y` و `y(0) = 3` أي معامل معلوم قبل الحل؟','c_0 = 3',['y(0) = c_0'],['c_n = 3','c_1 = 3','c_0 = 0']),
  Q('How many unknown coefficients remain for a first-order IVP with n = 5?','كم معاملاً مجهولاً يبقى لمسألة قيمة ابتدائية من الرتبة الأولى عند n = 5؟','5',['n + 1 − 1 = 5'],['6','4','10']),
  Q('For a second-order BVP with `y(0) = a`, `y(1) = b` and n = 6, how many coefficients must be found from the equation?','لمسألة قيم حدية من الرتبة الثانية مع `y(0) = a` و `y(1) = b` عند n = 6، كم معاملاً يُحدَّد من المعادلة؟','5',['c_0 = a,   c_6 = b', ['The coefficients `c_1, …, c_5` remain.','تبقى المعاملات `c_1, …, c_5`.']],['7','6','4']),
  Q('Which of the three methods needs no integrals?','أي الطرق الثلاث لا تحتاج تكاملات؟',['Collocation','التجميع'],[['Only point values of the residual are used.','لا تُستخدم إلا قيم الباقي عند النقاط.']],[['Galerkin','جاليركن'],['Tau','تاو']]),
]);

lesson('502',72,[
  ['Collocation for `y′ = y`, `y(0) = 1` on [0, 1] with n = 2. The initial condition fixes `c_0 = 1`; the two other coefficients come from the equation at two points, say x = 1/2 and x = 1. With `y′ = 2[(c_1 − c_0)B_{0,1} + (c_2 − c_1)B_{1,1}]`:',
   'التجميع للمسألة `y′ = y` و `y(0) = 1` على [0, 1] عند n = 2. الشرط الابتدائي يثبّت `c_0 = 1`، والمعاملان الآخران من المعادلة عند نقطتين، ولتكن x = 1/2 و x = 1. ومع `y′ = 2[(c_1 − c_0)B_{0,1} + (c_2 − c_1)B_{1,1}]`:'],
  'x = 1:   2(c_2 − c_1) = c_2,     x = #f{1}{2}:   c_2 − c_0 = #f{c_0 + 2c_1 + c_2}{4}',
  ['The solution is `c = (1, 5/4, 5/2)`, so `y(1) = 2.5` against e = 2.718: a quadratic is a rough approximation of `e^x`, but the error falls quickly with n.','والحل `c = (1, 5/4, 5/2)` فيكون `y(1) = 2.5` مقابل e = 2.718: كثيرة الحدود التربيعية تقريب خشن لـ `e^x` لكن الخطأ يتناقص بسرعة مع n.'],
],[
  Q('Solve the two collocation equations above.','حل معادلتي التجميع السابقتين.','c_1 = #f{5}{4},   c_2 = #f{5}{2}',
    ['x = 1:  c_2 = 2c_1', 'x = #f{1}{2}:  4c_2 − 4 = 1 + 2c_1 + c_2  ⇒  3c_2 − 2c_1 = 5', '6c_1 − 2c_1 = 5  ⇒  c_1 = #f{5}{4}'],
    ['c_1 = 1,   c_2 = 2','c_1 = #f{3}{2},   c_2 = 3','c_1 = #f{5}{4},   c_2 = #f{5}{4}']),
  Q('With `c = (1, 5/4, 5/2)`, compute `y(1/2)`.','مع `c = (1, 5/4, 5/2)` احسب `y(1/2)`.','#f{3}{2}',['#f{1}{4}(1 + 2·#f{5}{4} + #f{5}{2}) = #f{6}{4}'],['#f{5}{4}','1.6487','2']),
  Q('Write the derivative `y′(0)` in terms of the coefficients for n = 2.','اكتب المشتقة `y′(0)` بدلالة المعاملات عند n = 2.','y′(0) = 2(c_1 − c_0)',['n(c_1 − c_0)'],['y′(0) = c_1','y′(0) = 2c_1','y′(0) = c_1 − c_0']),
  Q('How many collocation points are needed for `y′ = y`, `y(0) = 1` with n = 6?','كم نقطة تجميع تلزم للمسألة `y′ = y` و `y(0) = 1` عند n = 6؟','6',['n + 1 − 1 = 6', ['One equation per unknown coefficient.','معادلة لكل معامل مجهول.']],['7','5','12']),
]);

lesson('502',73,[
  ['For a boundary-value problem the two end coefficients are given, and the interior ones come from the equation. For `−y″ = 1`, `y(0) = y(1) = 0` with n = 2:','لمسألة القيم الحدية يُعطى معاملا الطرفين، وتأتي المعاملات الداخلية من المعادلة. ولـ `−y″ = 1` و `y(0) = y(1) = 0` عند n = 2:'],
  'c_0 = c_2 = 0,   y″ = 2(c_0 − 2c_1 + c_2) = −4c_1 = −1   ⇒   c_1 = #f{1}{4}',
  ['so `y = (1/4)·2x(1 − x) = x(1 − x)/2`, the exact solution. For higher n, collocation at the interior Gauss or Chebyshev points gives spectral accuracy, since the space is the same `Π_n` as for Legendre.','إذن `y = (1/4)·2x(1 − x) = x(1 − x)/2` وهو الحل المضبوط. وعند n أعلى يعطي التجميع عند نقاط جاوس أو تشيبيشيف الداخلية دقة طيفية لأن الفضاء هو `Π_n` نفسه كما في ليجندر.'],
],[
  Q('Solve `y″ = 2`, `y(0) = 0`, `y(1) = 1` with n = 2.','حل `y″ = 2` و `y(0) = 0` و `y(1) = 1` عند n = 2.','c = (0,  0,  1):   y = x^2',
    ['c_0 = 0,   c_2 = 1', '2(c_0 − 2c_1 + c_2) = 2  ⇒  c_1 = 0'], ['c = (0,  #f{1}{2},  1):   y = x','c = (0,  1,  1)','c = (1,  0,  0)']),
  Q('Solve `y″ = 0`, `y(0) = 2`, `y(1) = 5` with n = 2.','حل `y″ = 0` و `y(0) = 2` و `y(1) = 5` عند n = 2.','c = (2,  #f{7}{2},  5)',
    ['c_0 − 2c_1 + c_2 = 0  ⇒  c_1 = #f{2 + 5}{2}', ['The straight line `2 + 3x`; its middle coefficient is the average of the ends.','المستقيم `2 + 3x`، ومعامله الأوسط متوسط الطرفين.']], ['c = (2,  0,  5)','c = (2,  3,  5)','c = (2,  5,  5)']),
  Q('For `−y″ = 1` with n = 2, which coefficient carries the solution?','للمسألة `−y″ = 1` عند n = 2 أي معامل يحمل الحل؟','c_1 = #f{1}{4}',['−4c_1 = −1'],['c_1 = #f{1}{2}','c_1 = 1','c_0 = #f{1}{4}']),
  Q('With n = 4 and Dirichlet conditions, how many collocation points are used?','عند n = 4 مع شروط ديريشليه كم نقطة تجميع تُستخدم؟','3',['n + 1 − 2 = 3'],['5','4','2']),
]);

lesson('502',74,[
  ['For Galerkin with homogeneous Dirichlet conditions the trial and test functions are the interior basis polynomials `B_{1,n}, …, B_{n−1,n}`, which vanish at both ends. For `−y″ = f`:','لطريقة جاليركن مع شروط ديريشليه المتجانسة تكون دوال التجربة والاختبار هي كثيرات الأساس الداخلية `B_{1,n}, …, B_{n−1,n}` التي تنعدم عند الطرفين. ولـ `−y″ = f`:'],
  'Σ_i c_i ⟨B_{i,n}′, B_{j,n}′⟩ = ⟨f, B_{j,n}⟩,   1 ≤ i, j ≤ n − 1',
  ['The stiffness matrix is symmetric, positive definite and fully explicit (products of Bernstein polynomials integrate in closed form), but it is not sparse or diagonal as with Shen’s Legendre basis.','ومصفوفة الجساءة متماثلة موجبة التعريف وصريحة تماماً (حواصل ضرب بيرنشتاين تُكامل بصيغ مغلقة)، لكنها ليست قليلة العناصر ولا قطرية كما مع أساس شين لليجندر.'],
],[
  Q('Compute `⟨B_{1,2}′, B_{1,2}′⟩`.','احسب `⟨B_{1,2}′, B_{1,2}′⟩`.','#f{4}{3}',['∫_0^1 (2 − 4x)^2 dx = 4 − 8 + #f{16}{3}'],['#f{2}{15}','4','#f{1}{3}']),
  Q('Solve `−y″ = 1`, `y(0) = y(1) = 0` by Galerkin with n = 2.','حل `−y″ = 1` و `y(0) = y(1) = 0` بجاليركن عند n = 2.','c_1 = #f{1}{4}',['⟨1, B_{1,2}⟩ = #f{1}{3}', 'c_1 = #f{1/3}{4/3} = #f{1}{4}', ['The same exact solution as collocation.','الحل المضبوط نفسه الذي أعطاه التجميع.']],['c_1 = #f{1}{2}','c_1 = #f{1}{3}','c_1 = 1']),
  Q('With n = 4, what is the size of the Galerkin system for a Dirichlet problem?','عند n = 4 ما حجم نظام جاليركن لمسألة ديريشليه؟','3 × 3',['B_{1,4}, B_{2,4}, B_{3,4}'],['5 × 5','4 × 4','2 × 2']),
  Q('Why do `B_{1,n}, …, B_{n−1,n}` satisfy `y(0) = y(1) = 0` automatically?','لماذا تحقق `B_{1,n}, …, B_{n−1,n}` الشرطين `y(0) = y(1) = 0` تلقائياً؟',['Each has the factors x and `1 − x`','لكل منها العاملان x و `1 − x`'],['B_{i,n}(0) = δ_{i0},   B_{i,n}(1) = δ_{in}'],[['Because they are orthogonal','لأنها متعامدة'],['They do not','لا تحققهما']]),
]);

lesson('502',75,[
  ['The Tau method with the operational matrix D: for `y′ + y = 0`, `y(0) = 1`, the residual is `R = c^T(D + I)Φ`. Tau asks R to be orthogonal to `Π_{n−1}` (n conditions) and adds `c_0 = 1`:','طريقة تاو بالمصفوفة التشغيلية D: للمسألة `y′ + y = 0` و `y(0) = 1` يكون الباقي `R = c^T(D + I)Φ`. وتطلب تاو تعامد R مع `Π_{n−1}` (n شرطاً) وتضيف `c_0 = 1`:'],
  '∫_0^1 R x^k dx = 0,   k = 0, …, n − 1,     c_0 = 1',
  ['The values of `y(1)` are `1/3`, `7/19 = 0.36842` and `71/193 = 0.367876` for n = 1, 2, 3, against `e^{−1} = 0.367879`: each degree adds about two digits.','وقيم `y(1)` هي `1/3` و `7/19 = 0.36842` و `71/193 = 0.367876` عند n = 1 و 2 و 3 مقابل `e^{−1} = 0.367879`: كل درجة تضيف نحو رقمين.'],
],[
  Q('Solve the Tau equations for n = 1.','حل معادلات تاو عند n = 1.','c = (1,  #f{1}{3})',
    ['R = c_1 B_{0,1} + (2c_1 − c_0)B_{1,1}', '∫_0^1 R dx = #f{c_1 + 2c_1 − c_0}{2} = 0  ⇒  c_1 = #f{c_0}{3}'], ['c = (1,  0)','c = (1,  #f{1}{2})','c = (1,  #f{2}{3})']),
  Q('For n = 2 the Tau solution is `c = (1, 10/19, 7/19)`. Find `y(1)` and its error.','عند n = 2 حل تاو هو `c = (1, 10/19, 7/19)`. أوجد `y(1)` وخطأه.','y(1) = #f{7}{19} ≈ 0.36842;   |y(1) − e^{−1}| ≈ 5.4 × 10^{−4}',
    ['y(1) = c_2 = #f{7}{19}', '|0.36842 − 0.36788| ≈ 5.4 × 10^{−4}'], ['y(1) = #f{10}{19};   |y(1) − e^{−1}| ≈ 0.16','y(1) = 1;   |y(1) − e^{−1}| ≈ 0.63','y(1) = #f{7}{19};   0']),
  Q('Write `c^T(D_1 + I)` for n = 1.','اكتب `c^T(D_1 + I)` عند n = 1.','(c_1,  2c_1 − c_0)',
    ['D_1 + I = #m{0, −1 ;; 1, 2}', '(c_0, c_1)·#m{0, −1 ;; 1, 2} = (c_1,  −c_0 + 2c_1)'], ['(c_0,  c_1)','(c_0 + c_1,  c_1)','(−c_0,  c_1)']),
  Q('How many Tau conditions plus initial conditions are there for a first-order IVP with n = 4?','كم شرط تاو وكم شرطاً ابتدائياً لمسألة قيمة ابتدائية من الرتبة الأولى عند n = 4؟','4 + 1 = 5',['k = 0, …, 3;   c_0 = y(0)'],['5 + 1 = 6','3 + 1 = 4','4 + 2 = 6']),
]);

lesson('502',76,[
  ['Boundary conditions of every type become conditions on the first or last few coefficients:','الشروط الحدية بكل أنواعها تصبح شروطاً على أول المعاملات أو آخرها:'],
  'y(0) = c_0,   y(1) = c_n,   y′(0) = n(c_1 − c_0),   y′(1) = n(c_n − c_{n−1})',
  ['A Robin condition `a y(1) + b y′(1) = g` becomes `a c_n + b n(c_n − c_{n−1}) = g`. These rows replace the last residual equations, and they never mix interior coefficients: one of the practical strengths of the Bernstein basis.','وشرط روبن `a y(1) + b y′(1) = g` يصبح `a c_n + b n(c_n − c_{n−1}) = g`. وهذه الصفوف تحل محل آخر معادلات الباقي، ولا تخلط أبداً المعاملات الداخلية: وهذه إحدى نقاط قوة أساس بيرنشتاين العملية.'],
],[
  Q('With n = 3, `y(0) = 1` and `y′(0) = 2`, find `c_0` and `c_1`.','عند n = 3 مع `y(0) = 1` و `y′(0) = 2` أوجد `c_0` و `c_1`.','c_0 = 1,   c_1 = #f{5}{3}',['3(c_1 − 1) = 2'],['c_0 = 1,   c_1 = 3','c_0 = 1,   c_1 = 2','c_0 = 2,   c_1 = 1']),
  Q('With n = 4, write the condition `y′(1) + y(1) = 0`.','عند n = 4 اكتب الشرط `y′(1) + y(1) = 0`.','5c_4 − 4c_3 = 0',['4(c_4 − c_3) + c_4 = 0'],['c_4 + c_3 = 0','4c_4 − c_3 = 0','c_4 = 0']),
  Q('With n = 5 and `y(1) = 4`, which coefficient is fixed?','عند n = 5 و `y(1) = 4` أي معامل يتحدد؟','c_5 = 4',['y(1) = c_n'],['c_4 = 4','c_0 = 4','c_1 = 4']),
  Q('With n = 2, `y(0) = 0` and `y′(0) = 0`, what is y if the equation forces `c_2 = 3`?','عند n = 2 مع `y(0) = 0` و `y′(0) = 0`، ما y إذا فرضت المعادلة `c_2 = 3`؟','y = 3x^2',['c_0 = 0,   c_1 = c_0 = 0,   c_2 = 3  ⇒  y = 3B_{2,2}'],['y = 3x','y = 3','y = 6x(1 − x)']),
]);

lesson('502',77,[
  ['Nonlinear terms are handled with the product formula and Newton’s method. For example, for `y = c_0 B_{0,1} + c_1 B_{1,1}`:','الحدود غير الخطية تعالَج بصيغة الضرب وطريقة نيوتن. فمثلاً للدالة `y = c_0 B_{0,1} + c_1 B_{1,1}`:'],
  'y^2 = c_0^2 B_{0,2} + c_0 c_1 B_{1,2} + c_1^2 B_{2,2}',
  ['With collocation the nonlinearity is even simpler: evaluate `y(x_k)^2`. For `y′ = −y^2`, `y(0) = 1` (exact `1/(1 + x)`), one-point collocation at x = 1/2 with `y = 1 + ax` gives the quadratic `a^2 + 8a + 4 = 0`, so `a = −4 + #r{12} ≈ −0.536` and `y(1) ≈ 0.464` against 0.5.',
   'ومع التجميع تكون اللاخطية أبسط: نحسب `y(x_k)^2`. وللمسألة `y′ = −y^2` و `y(0) = 1` (حلها المضبوط `1/(1 + x)`) يعطي التجميع بنقطة واحدة عند x = 1/2 مع `y = 1 + ax` المعادلة التربيعية `a^2 + 8a + 4 = 0` فيكون `a = −4 + #r{12} ≈ −0.536` و `y(1) ≈ 0.464` مقابل 0.5.'],
],[
  Q('Check the coefficients of `y^2` for `y = c_0 B_{0,1} + c_1 B_{1,1}`.','تحقق من معاملات `y^2` للدالة `y = c_0 B_{0,1} + c_1 B_{1,1}`.','(c_0^2,  c_0c_1,  c_1^2)',
    ['y^2 = c_0^2 B_{0,1}^2 + 2c_0c_1 B_{0,1}B_{1,1} + c_1^2 B_{1,1}^2', 'B_{0,1}B_{1,1} = #f{1}{2}B_{1,2}  ⇒  2c_0c_1·#f{1}{2} = c_0c_1'],
    ['(c_0^2,  2c_0c_1,  c_1^2)','(c_0,  c_0c_1,  c_1)','(c_0^2,  #f{1}{2}c_0c_1,  c_1^2)']),
  Q('Derive the collocation equation for `y′ = −y^2` at x = 1/2 with `y = 1 + ax`.','اشتق معادلة التجميع للمسألة `y′ = −y^2` عند x = 1/2 مع `y = 1 + ax`.','a^2 + 8a + 4 = 0',
    ['a = −(1 + #f{a}{2})^2 = −1 − a − #f{a^2}{4}', '#f{a^2}{4} + 2a + 1 = 0'], ['a^2 + 4a + 1 = 0','a^2 − 8a + 4 = 0','a + 1 = 0']),
  Q('Solve it and find `y(1)`.','حلّها وأوجد `y(1)`.','a = −4 + #r{12} ≈ −0.536;   y(1) ≈ 0.464',
    ['a = −4 ± #r{12}', ['The root near 0 is chosen, since y must decrease slowly from 1.','نختار الجذر القريب من 0 لأن y يجب أن تتناقص ببطء من 1.']], ['a = −4 − #r{12} ≈ −7.46;   y(1) ≈ −6.46','a = −0.5;   y(1) = 0.5','a = −1;   y(1) = 0']),
  Q('Write Newton’s linearization of `y^2` around a guess `y_0`.','اكتب خطية نيوتن للحد `y^2` حول تخمين `y_0`.','y^2 ≈ y_0^2 + 2y_0(y − y_0)',
    [['First-order Taylor expansion in the unknown.','مفكوك تايلور من الرتبة الأولى في المجهول.']], ['y^2 ≈ y_0^2','y^2 ≈ 2y_0 y','y^2 ≈ y_0 y']),
]);

lesson('502',78,[
  ['For a system of m equations each unknown has its own coefficient vector, and the operational matrices act block by block. For `y_1′ = y_2`, `y_2′ = −y_1`:','لنظام من m معادلة يكون لكل مجهول متجه معاملات خاص به، وتعمل المصفوفات التشغيلية كتلةً كتلة. وللنظام `y_1′ = y_2` و `y_2′ = −y_1`:'],
  'c_1^T D = c_2^T,     c_2^T D = −c_1^T',
  ['together with the initial values `y_1(0)`, `y_2(0)`.','مع القيمتين الابتدائيتين `y_1(0)` و `y_2(0)`.'],
  ['There are `m(n + 1)` unknowns, the initial values fix the first coefficient of each vector, and the coupled equations form one block system, conveniently written with Kronecker products as in Course 501.','ويوجد `m(n + 1)` مجهولاً، والقيم الابتدائية تثبّت أول معامل في كل متجه، والمعادلات المقترنة تكوّن نظاماً كتلياً واحداً يُكتب بسهولة بضرب كرونيكر كما في المقرر 501.'],
],[
  Q('How many unknowns does a system of 3 equations have with n = 5?','كم مجهولاً لنظام من 3 معادلات عند n = 5؟','18',['m(n + 1) = 3·6'],['15','6','216']),
  Q('For `y_1′ = y_2`, `y_2′ = −y_1` with `y_1(0) = 0`, `y_2(0) = 1`, which coefficients are fixed?','للنظام `y_1′ = y_2` و `y_2′ = −y_1` مع `y_1(0) = 0` و `y_2(0) = 1`، أي المعاملات تتحدد؟','c_{1,0} = 0,   c_{2,0} = 1',['y_k(0) = c_{k,0}'],['c_{1,n} = 0,   c_{2,n} = 1','c_{1,0} = 1,   c_{2,0} = 0','c_{1,1} = 0,   c_{2,1} = 1']),
  Q('With n = 1 and the system above, use `D_1` to write `c_1^T D_1 = c_2^T`.','عند n = 1 وللنظام السابق استخدم `D_1` لكتابة `c_1^T D_1 = c_2^T`.','(c_{1,1} − c_{1,0},  c_{1,1} − c_{1,0}) = (c_{2,0},  c_{2,1})',
    ['(a, b)·#m{−1, −1 ;; 1, 1} = (b − a,  b − a)'], ['(c_{1,0},  c_{1,1}) = (c_{2,0},  c_{2,1})','(c_{1,0} − c_{1,1},  0) = (c_{2,0},  c_{2,1})','(1,  1) = (c_{2,0},  c_{2,1})']),
  Q('What is the exact solution of the system?','ما الحل المضبوط للنظام؟','y_1 = sin x,   y_2 = cos x',['y_1″ = −y_1,   y_1(0) = 0,   y_1′(0) = 1'],['y_1 = cos x,   y_2 = sin x','y_1 = e^x,   y_2 = e^x','y_1 = x,   y_2 = 1']),
]);

lesson('502',79,[
  ['The Lane–Emden equation of astrophysics is singular at x = 0:','معادلة لين–إمدن في الفيزياء الفلكية منفردة عند x = 0:'],
  'y″ + #f{2}{x} y′ + y^m = 0,   y(0) = 1,   y′(0) = 0',
  ['Multiplying by x removes the singular coefficient: `x y″ + 2y′ + x y^m = 0`, which collocation or Tau handle directly. In the Bernstein basis the two conditions read `c_0 = 1` and `c_1 = c_0`. Exact solutions exist for m = 0 (`1 − x^2/6`), m = 1 (`sin x/x`) and m = 5.','والضرب في x يزيل المعامل المنفرد: `x y″ + 2y′ + x y^m = 0`، فتعالجها طريقة التجميع أو تاو مباشرة. وفي أساس بيرنشتاين يصبح الشرطان `c_0 = 1` و `c_1 = c_0`. وتوجد حلول مضبوطة عند m = 0 (`1 − x^2/6`) و m = 1 (`sin x/x`) و m = 5.'],
],[
  Q('Verify that `y = 1 − x^2/6` solves the case m = 0.','تحقق أن `y = 1 − x^2/6` تحل الحالة m = 0.',['Verified','تحقق'],
    ['y′ = −#f{x}{3},   y″ = −#f{1}{3}', '−#f{1}{3} + #f{2}{x}(−#f{x}{3}) + 1 = −#f{1}{3} − #f{2}{3} + 1 = 0']),
  Q('Evaluate the m = 1 solution at x = 1.','احسب حل الحالة m = 1 عند x = 1.','sin 1 ≈ 0.8415',['y(1) = #f{sin 1}{1}'],['1','0.5403','0']),
  Q('With n = 4, write the conditions `y(0) = 1`, `y′(0) = 0` in Bernstein coefficients.','عند n = 4 اكتب الشرطين `y(0) = 1` و `y′(0) = 0` بمعاملات بيرنشتاين.','c_0 = 1,   c_1 = 1',['y′(0) = 4(c_1 − c_0) = 0'],['c_0 = 1,   c_1 = 0','c_0 = 0,   c_1 = 1','c_0 = 1,   c_4 = 0']),
  Q('Why multiply the Lane–Emden equation by x before collocating?','لماذا نضرب معادلة لين–إمدن في x قبل التجميع؟',['To remove the coefficient `2/x`, which is infinite at x = 0','لإزالة المعامل `2/x` اللانهائي عند x = 0'],
    [['Collocation points near 0 would otherwise produce huge, badly scaled equations.','وإلا أنتجت نقاط التجميع القريبة من 0 معادلات ضخمة سيئة التحجيم.']], [['To make it linear','لجعلها خطية'],['It is not needed','لا حاجة إليه']]),
]);

lesson('502',80,[
  ['Without an exact solution the error is estimated from the computation itself. Three practical estimates:','دون حل مضبوط يُقدَّر الخطأ من الحساب نفسه. ثلاثة تقديرات عملية:'],
  ['(1) Compare `y_n` with `y_{2n}` (or `y_{n+2}`): for fast convergence `‖y − y_n‖ ≈ ‖y_{2n} − y_n‖`. (2) The residual `‖𝓛y_n − f‖` at many points. (3) The decay of the Legendre coefficients of `y_n` (convert from Bernstein): the last ones show how much is missing.',
   '(1) قارن `y_n` بـ `y_{2n}` (أو `y_{n+2}`): مع التقارب السريع `‖y − y_n‖ ≈ ‖y_{2n} − y_n‖`. (2) الباقي `‖𝓛y_n − f‖` عند نقاط كثيرة. (3) تناقص معاملات ليجندر لـ `y_n` (بالتحويل من بيرنشتاين): آخرها يبيّن مقدار ما ينقص.'],
  ['Stop when the estimate reaches the required tolerance, or when it stops decreasing (rounding level).','وتوقف عندما يبلغ التقدير الدقة المطلوبة، أو عندما يتوقف عن التناقص (مستوى التقريب).'],
],[
  Q('For `y′ + y = 0` the Tau values of `y(1)` are 0.33333, 0.36842, 0.367876 for n = 1, 2, 3. Estimate the error of the n = 2 value.','لـ `y′ + y = 0` قيم تاو لـ `y(1)` هي 0.33333 و 0.36842 و 0.367876 عند n = 1 و 2 و 3. قدّر خطأ قيمة n = 2.','≈ 5.4 × 10^{−4}',['|0.36842 − 0.367876| ≈ 5.4 × 10^{−4}', ['The true error is `0.36842 − 0.367879 = 5.4 × 10^{−4}`.','والخطأ الحقيقي `0.36842 − 0.367879 = 5.4 × 10^{−4}`.']],['≈ 0.035','≈ 3 × 10^{−6}','0']),
  Q('The residual of a computed solution is `10^{−3}` at n = 8 and `10^{−3}` at n = 16. What does that suggest?','باقي حل محسوب `10^{−3}` عند n = 8 و `10^{−3}` عند n = 16. ماذا يقترح ذلك؟',['An error in the set-up (equation, condition or matrix), not a lack of terms','خطأ في الإعداد (المعادلة أو الشرط أو المصفوفة) لا نقص في الحدود'],
    [['A correct spectral method would reduce the residual by many orders of magnitude.','الطريقة الطيفية الصحيحة تخفض الباقي بعدة مراتب.']], [['Convergence is complete','اكتمل التقارب'],['n is too large','n كبيرة جداً']]),
  Q('Legendre coefficients of a computed solution are `1, 10^{−2}, 10^{−4}, 10^{−6}`. Estimate the truncation error.','معاملات ليجندر لحل محسوب `1, 10^{−2}, 10^{−4}, 10^{−6}`. قدّر خطأ القطع.','≈ 10^{−8}',[['The next coefficient continues the geometric pattern.','المعامل التالي يتابع النمط الهندسي.']],['≈ 10^{−6}','≈ 10^{−4}','≈ 10^{−16}']),
  Q('When should the computation stop increasing n?','متى يجب التوقف عن زيادة n؟',['When the estimated error meets the tolerance, or stops decreasing','عندما يبلغ الخطأ المقدَّر الدقة المطلوبة أو يتوقف عن التناقص'],
    [['Beyond the rounding level more terms only add cost and conditioning problems.','بعد مستوى التقريب لا تضيف الحدود الإضافية إلا التكلفة ومشاكل الشرط.']], [['Never','أبداً'],['After n = 10 always','بعد n = 10 دائماً']]),
]);

export const MS502 = true;
