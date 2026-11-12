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

export const MS502 = true;
