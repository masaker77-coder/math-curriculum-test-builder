/* MATH/COMP 508 — the course's road map (10 units × 10 lessons) and its lessons. The authoring markup is described in mscore.js. */
import { course, lesson, Q } from './mscore.js';

/* ---------------- 508: Fractional differential equations ---------------- */
course('508','MATH 508','Fractional Differential Equations','المعادلات التفاضلية الكسرية (508 ريض)',`
# Unit 1 · From zero: the problem and the integrated form | الوحدة 1 · من الصفر: المسألة والصيغة التكاملية
What is a fractional differential equation? Orders and conditions | ما المعادلة التفاضلية الكسرية؟ الرتب والشروط
Caputo derivatives of polynomials and manufactured solutions | مشتقات كابوتو لكثيرات الحدود والحلول المصنَّعة
Lemma 2.1: how the integral cancels the derivative | التمهيدية 2.1: كيف يلغي التكامل المشتقة
The integrated form of an initial-value problem | الصيغة التكاملية لمسألة قيمة ابتدائية
Solving D^α y = −y: the Mittag-Leffler function | حل D^α y = −y: دالة ميتاج–ليفلر
The equation D^α y = λy and the fractional exponential | المعادلة D^α y = λy والأسية الكسرية
Non-homogeneous linear equations | المعادلات الخطية غير المتجانسة
Why solutions are not smooth at t = 0 | لماذا الحلول غير ملساء عند t = 0
Classification: linear, nonlinear, multi-term, partial | التصنيف: خطية وغير خطية ومتعددة الحدود وجزئية
Checking a pair (u, f) at a sample point | التحقق من زوج (u, f) عند نقطة عينة
# Unit 2 · Theory | الوحدة 2 · النظرية
Equivalence with a Volterra integral equation | التكافؤ مع معادلة فولتيرا التكاملية
Existence and uniqueness: the Lipschitz condition | الوجود والوحدانية: شرط ليبشتز
Picard iteration | تكرار بيكار
Continuous dependence on the data | الاعتماد المتصل على المعطيات
Dependence on the order | الاعتماد على الرتبة
Regularity: the expansion in powers t^{kα} | الانتظام: المفكوك بالقوى t^{kα}
Gronwall-type inequalities | متباينات من نوع جرونوال
Comparison principles | مبادئ المقارنة
Equations of Riemann–Liouville type | المعادلات من نوع ريمان–ليوفيل
Worked problems | مسائل محلولة
# Unit 3 · Linear equations in closed form | الوحدة 3 · المعادلات الخطية بصيغة مغلقة
The Laplace transform method | طريقة تحويل لابلاس
Single-term equations with a source | المعادلات وحيدة الحد مع مصدر
The fractional relaxation equation | معادلة الاسترخاء الكسرية
The fractional oscillation equation, 1 < α < 2 | معادلة الاهتزاز الكسرية، 1 < α < 2
Multi-term equations | المعادلات متعددة الحدود
The Bagley–Torvik equation | معادلة باجلي–تورفيك
Green's functions | دوال جرين
Sequential fractional equations | المعادلات الكسرية المتتابعة
Systems of linear equations and the matrix Mittag-Leffler function | النظم الخطية ودالة ميتاج–ليفلر المصفوفية
Worked problems | مسائل محلولة
# Unit 4 · Series and semi-analytic methods | الوحدة 4 · طرق المتسلسلات وشبه التحليلية
Power series in t^α | متسلسلات القوى في t^α
The Adomian decomposition method | طريقة تحليل أدوميان
The variational iteration method | طريقة التكرار التغايري
The homotopy perturbation method | طريقة اضطراب الهوموتوبي
The homotopy analysis method | طريقة تحليل الهوموتوبي
The differential transform method | طريقة التحويل التفاضلي
The residual power series method | طريقة متسلسلة القوى للباقي
Convergence of these series and their limits | تقارب هذه المتسلسلات وحدودها
Comparison with a spectral solution | المقارنة بحل طيفي
Worked problems | مسائل محلولة
# Unit 5 · Stability and qualitative behaviour | الوحدة 5 · الاستقرار والسلوك النوعي
Stability of linear systems: Matignon's theorem | استقرار النظم الخطية: نظرية ماتينيون
Mittag-Leffler stability | استقرار ميتاج–ليفلر
Lyapunov methods | طرق ليابونوف
Asymptotic behaviour: algebraic decay | السلوك التقاربي: التناقص الجبري
Equilibria of nonlinear systems | نقاط الاتزان للنظم غير الخطية
Fractional models of epidemics | النماذج الكسرية للأوبئة
Fractional chaotic systems | النظم الكسرية الفوضوية
Delay fractional equations | المعادلات الكسرية ذات التأخير
Boundary-value problems and fractional Sturm–Liouville problems | مسائل القيم الحدية ومسائل شتورم–ليوفيل الكسرية
Worked problems | مسائل محلولة
# Unit 6 · Time-stepping methods | الوحدة 6 · طرق الخطو الزمني
The fractional Euler method | طريقة أويلر الكسرية
The Grünwald–Letnikov scheme | مخطط جرونفالد–ليتنيكوف
The L1 scheme | مخطط L1
The Adams–Bashforth–Moulton predictor–corrector method | طريقة آدامز–باشفورث–مولتون (المتنبئ–المصحح)
Product integration methods | طرق التكامل الضربي
Fractional linear multistep methods | الطرق الخطية متعددة الخطوات الكسرية
Order of accuracy for non-smooth solutions | رتبة الدقة للحلول غير الملساء
Graded meshes and correction terms | الشبكات المتدرجة وحدود التصحيح
Stability regions | مناطق الاستقرار
Memory cost and fast methods | كلفة الذاكرة والطرق السريعة
# Unit 7 · Spectral methods for initial-value problems | الوحدة 7 · الطرق الطيفية لمسائل القيمة الابتدائية
Why polynomials struggle near t = 0 | لماذا تتعثر كثيرات الحدود قرب t = 0
The change of variable u = t^λ | تغيير المتغير u = t^λ
Fractional Legendre functions and expansion (2.10) | دوال ليجندر الكسرية والمفكوك (2.10)
Choosing λ = gcd(β_1, β_2, …) | اختيار λ = gcd(β_1, β_2, …)
The fractional integration matrix I_{(−μ)} (Theorem 3.2) | مصفوفة التكامل الكسري I_{(−μ)} (النظرية 3.2)
The linear system (I + I_{(−α)}^T) c = e_0 | النظام الخطي (I + I_{(−α)}^T) c = e_0
Multi-term equations in integrated form | المعادلات متعددة الحدود بالصيغة التكاملية
Collocation at the mapped points | التجميع عند النقاط المحولة
Nonlinear equations | المعادلات غير الخطية
Measuring the error and the convergence rate | قياس الخطأ ومعدل التقارب
# Unit 8 · Fractional partial differential equations | الوحدة 8 · المعادلات التفاضلية الجزئية الكسرية
The time-fractional diffusion equation | معادلة الانتشار الكسرية الزمنية
The time-fractional wave equation | معادلة الموجة الكسرية الزمنية
Separation of variables | فصل المتغيرات
Fundamental solutions | الحلول الأساسية
The multi-term problem of the paper and its orders μ_i, ν_i, η, υ | المسألة متعددة الحدود في البحث ورتبها μ_i و ν_i و η و υ
The physical meaning of each term | المعنى الفيزيائي لكل حد
Initial and boundary data: ψ_0, ψ_1, φ_0, φ_1 | المعطيات الابتدائية والحدية: ψ_0 و ψ_1 و φ_0 و φ_1
Space-fractional equations | المعادلات الكسرية المكانية
Maximum principles | مبادئ القيمة العظمى
Worked problems | مسائل محلولة
# Unit 9 · The mapped Legendre method | الوحدة 9 · طريقة ليجندر المحوَّلة
The integrated form: applying D^{−μ_s} | الصيغة التكاملية: تطبيق D^{−μ_s}
The function h: signs and initial values | الدالة h: الإشارات والقيم الابتدائية
The space–time approximation y_{N,M} | التقريب الفضائي الزمني y_{N,M}
Theorem 3.1 in space and Theorem 3.2 in time | النظرية 3.1 في المكان والنظرية 3.2 في الزمن
The residual ℜ in matrix form | الباقي ℜ بالصيغة المصفوفية
Collocation points and counting equations | نقاط التجميع وعدّ المعادلات
Example 1 of the paper | المثال 1 في البحث
Example 2 of the paper | المثال 2 في البحث
Two space dimensions: Example 3 | بعدان مكانيان: المثال 3
The effect of λ and of the orders on the error | أثر λ والرتب في الخطأ
# Unit 10 · Advanced topics and research | الوحدة 10 · موضوعات متقدمة وبحث
Finite differences for fractional PDEs | الفروق المحدودة للمعادلات الجزئية الكسرية
Finite elements for fractional PDEs | العناصر المحدودة للمعادلات الجزئية الكسرية
Nonlinear fractional PDEs | المعادلات الجزئية الكسرية غير الخطية
Variable-order and distributed-order equations | المعادلات متغيرة الرتبة وموزعة الرتبة
Fractional integro-differential equations | المعادلات التكاملية التفاضلية الكسرية
Fractional optimal control | التحكم الأمثل الكسري
Stochastic fractional equations | المعادلات الكسرية العشوائية
Inverse problems: identifying the order | المسائل العكسية: تحديد الرتبة
Reading and reproducing a research paper | قراءة بحث علمي وإعادة إنتاجه
Capstone project | مشروع ختامي
`);

lesson('508',1,[
  ['A fractional differential equation contains a derivative of non-integer order. In this course the derivative is the Caputo derivative `^CD^{ζ}`, and the simplest example is',
   'المعادلة التفاضلية الكسرية تحتوي مشتقة برتبة غير صحيحة. والمشتقة في هذا المقرر مشتقة كابوتو `^CD^{ζ}`، وأبسط مثال'],
  '^CD^{α} y(t) = −y(t),   y(0) = 1,   0 < α ≤ 1',
  ['The number of initial conditions is `⌈ζ⌉` for the highest order ζ: one condition `y(0) = ψ_0` if all orders are in (0, 1], and two conditions `y(0) = ψ_0`, `y′(0) = ψ_1` if the top order is in (1, 2).',
   'وعدد الشروط الابتدائية `⌈ζ⌉` لأعلى رتبة ζ: شرط واحد `y(0) = ψ_0` إذا كانت كل الرتب في (0, 1]، وشرطان `y(0) = ψ_0` و `y′(0) = ψ_1` إذا كانت أعلى رتبة في (1, 2).'],
  ['Each order has a physical meaning: orders in (0, 1) describe slow diffusion (sub-diffusion), and orders in (1, 2) describe wave-like behaviour with damping. The equation remembers its past, so its solution near `t = 0` behaves like a non-integer power of t.',
   'ولكل رتبة معنى فيزيائي: الرتب في (0, 1) تصف انتشاراً بطيئاً (تحت الانتشار)، والرتب في (1, 2) تصف سلوكاً موجياً مع تخامد. والمعادلة تتذكر ماضيها، فحلها قرب `t = 0` يتصرف مثل قوة غير صحيحة لـ t.'],
],[
  Q('How many initial conditions does `^CD^{1.5} y + y = 0` need, and which ones?','كم شرطاً ابتدائياً تحتاج `^CD^{1.5} y + y = 0` وما هي؟',['Two: `y(0)` and `y′(0)`','شرطان: `y(0)` و `y′(0)`'],
    ['⌈1.5⌉ = 2'],[['One: `y(0)`','شرط واحد: `y(0)`'],['Two: `y(0)` and `y(1)`','شرطان: `y(0)` و `y(1)`'],['Three: `y(0)`, `y′(0)`, `y″(0)`','ثلاثة: `y(0)` و `y′(0)` و `y″(0)`']]),
  Q('Verify that `y = t` satisfies `^CD^{1/2} y = 2#r{t/π}`, `y(0) = 0`.','تحقق أن `y = t` تحقق `^CD^{1/2} y = 2#r{t/π}` و `y(0) = 0`.',['Verified','تحقق المطلوب'],
    ['^CD^{1/2} t = #f{Γ(2)}{Γ(#f{3}{2})} t^{1/2} = #f{2}{#r{π}} t^{1/2}', 'y(0) = 0']),
  Q('In `^CD^{1.6} y + 2 ^CD^{0.4} y + y = g`, name the top order `μ_s`, the lower order `ν_1`, and the number of initial conditions.','في `^CD^{1.6} y + 2 ^CD^{0.4} y + y = g` سمِّ أعلى رتبة `μ_s` والرتبة الدنيا `ν_1` وعدد الشروط الابتدائية.','μ_s = 1.6,   ν_1 = 0.4,   2',
    [['The top order lies in (1, 2), so two conditions `ψ_0`, `ψ_1` are needed. The term with `ν_1` is a sub-diffusion term and `y` itself is a reaction term.','أعلى رتبة تقع في (1, 2) فنحتاج شرطين `ψ_0` و `ψ_1`. والحد ذو `ν_1` حد تحت انتشار و `y` نفسها حد تفاعل.']],['μ_s = 0.4,   ν_1 = 1.6,   1','μ_s = 1.6,   ν_1 = 0.4,   1','μ_s = 2,   ν_1 = 1,   2']),
  Q('Which behaviour does the term `^CD^{0.7} y` describe, and which does `^CD^{1.7} y` describe?','أي سلوك يصفه الحد `^CD^{0.7} y` وأي سلوك يصفه `^CD^{1.7} y`؟',['Sub-diffusion; damped wave-like behaviour','تحت الانتشار؛ سلوك موجي مع تخامد'],
    [['Order in (0, 1): slow diffusion. Order in (1, 2): between diffusion and waves.','الرتبة في (0, 1): انتشار بطيء. والرتبة في (1, 2): بين الانتشار والموجة.']],[['Damped wave-like behaviour; sub-diffusion','سلوك موجي مع تخامد؛ تحت الانتشار'],['Both describe ordinary diffusion','كلاهما يصف انتشاراً عادياً'],['Absorption; ordinary diffusion','امتصاص؛ انتشار عادي']]),
]);

lesson('508',2,[
  ['To test any numerical method we need problems with a known solution. We choose the solution y first, compute its Caputo derivatives with the power law, and so «manufacture» the right side:',
   'لاختبار أي طريقة عددية نحتاج مسائل حلها معلوم. نختار الحل y أولاً ونحسب مشتقاته بقانون القوى فـ«نصنع» الطرف الأيمن:'],
  '^CD^{ζ} t^p = #f{Γ(p + 1)}{Γ(p − ζ + 1)} t^{p−ζ}  (p > ⌈ζ⌉ − 1),   ^CD^{ζ} t^i = 0  (i = 0, …, ⌈ζ⌉ − 1)',
  ['The derivative is linear, so a polynomial is differentiated term by term, and the terms of degree below `⌈ζ⌉` simply vanish.',
   'والمشتقة خطية فتُشتق كثيرة الحدود حداً حداً، والحدود التي درجتها أقل من `⌈ζ⌉` تنعدم.'],
  ['Every example of the paper is built this way: a pair `(u, f)`. Before trusting any result, check the pair independently at a sample point: the residual must be zero.',
   'وكل مثال في البحث مبني هكذا: زوج `(u, f)`. وقبل الوثوق بأي نتيجة تحقق من الزوج باستقلال عند نقطة عينة: يجب أن يكون الباقي صفراً.'],
],[
  Q('Compute `^CD^{1/2}(3t^2 − 2t + 5)`.','احسب `^CD^{1/2}(3t^2 − 2t + 5)`.','#f{8 t^{3/2} − 4 t^{1/2}}{#r{π}}',
    ['^CD^{1/2} t^2 = #f{8 t^{3/2}}{3#r{π}},   ^CD^{1/2} t = #f{2 t^{1/2}}{#r{π}},   ^CD^{1/2} 5 = 0', '3·#f{8 t^{3/2}}{3#r{π}} − 2·#f{2 t^{1/2}}{#r{π}} = #f{8 t^{3/2} − 4 t^{1/2}}{#r{π}}'],['#f{8 t^{3/2} − 2 t^{1/2}}{#r{π}}','#f{8 t^{3/2} − 4 t^{1/2}}{#r{π}} + 5','#f{4 t^{3/2} − 4 t^{1/2}}{#r{π}}']),
  Q('Compute `^CD^{1/2} t^3`.','احسب `^CD^{1/2} t^3`.','#f{16 t^{5/2}}{5#r{π}}',
    ['Γ(4) = 6,   Γ(#f{7}{2}) = #f{15#r{π}}{8}', '#f{6}{15#r{π}/8} t^{5/2} = #f{48}{15#r{π}} t^{5/2} = #f{16 t^{5/2}}{5#r{π}}'],['#f{8 t^{5/2}}{5#r{π}}','#f{16 t^{3/2}}{5#r{π}}','#f{6 t^{5/2}}{#r{π}}']),
  Q('Compute `^CD^{3/2}(t^3 + t)`.','احسب `^CD^{3/2}(t^3 + t)`.','#f{8 t^{3/2}}{#r{π}}',
    [['`^CD^{3/2} t = 0`, because the degree 1 is less than `⌈ζ⌉ = 2`.','`^CD^{3/2} t = 0` لأن الدرجة 1 أقل من `⌈ζ⌉ = 2`.'], '^CD^{3/2} t^3 = #f{Γ(4)}{Γ(#f{5}{2})} t^{3/2} = #f{6}{3#r{π}/4} t^{3/2} = #f{8 t^{3/2}}{#r{π}}'],['#f{8 t^{3/2}}{#r{π}} + #f{2}{#r{πt}}','#f{4 t^{3/2}}{#r{π}}','#f{8 t^{1/2}}{#r{π}}']),
  Q('Manufacture the right side g so that `y = t^2` solves `^CD^{1/2} y + y = g`, and give the initial condition.','اصنع الطرف الأيمن g بحيث تكون `y = t^2` حلاً للمعادلة `^CD^{1/2} y + y = g` واذكر الشرط الابتدائي.','g = #f{8 t^{3/2}}{3#r{π}} + t^2,   y(0) = 0',
    ['^CD^{1/2} t^2 = #f{8 t^{3/2}}{3#r{π}}', 'g = #f{8 t^{3/2}}{3#r{π}} + t^2', ['Sample check at t = 1: `g(1) = 8/(3#r{π}) + 1 ≈ 2.5045`.','تحقق عند t = 1: `g(1) = 8/(3#r{π}) + 1 ≈ 2.5045`.']],['g = #f{4 t^{3/2}}{3#r{π}} + t^2,   y(0) = 0','g = #f{8 t^{3/2}}{3#r{π}},   y(0) = 0','g = 2t + t^2,   y(0) = 0']),
]);

lesson('508',3,[
  ['Lemma 2.1 is the key to everything that follows. The fractional integral cancels the Caputo derivative of the same order and leaves the initial values:',
   'التمهيدية 2.1 مفتاح كل ما يأتي. التكامل الكسري يلغي مشتقة كابوتو من الرتبة نفسها ويترك القيم الابتدائية:'],
  'D^{−ζ} ^CD^{ζ} y(t) = y(t) − Σ_{i=0}^{⌈ζ⌉−1} y^{(i)}(0) #f{t^i}{i!}',
  ['For an order in (0, 1] one value is subtracted, `y(0)`. For an order in (1, 2) two terms are subtracted, `y(0) + t y′(0)`. It is the fractional form of the fundamental theorem of calculus, `∫_0^t y′ dz = y(t) − y(0)`.',
   'لرتبة في (0, 1] تُطرح قيمة واحدة `y(0)`. ولرتبة في (1, 2) يُطرح حدان `y(0) + t y′(0)`. وهي الصورة الكسرية للنظرية الأساسية في التفاضل والتكامل `∫_0^t y′ dz = y(t) − y(0)`.'],
  ['This is how initial conditions enter the method: not as separate equations, but inside the right-hand side.','وهكذا تدخل الشروط الابتدائية في الطريقة: لا معادلاتٍ مستقلة بل داخل الطرف الأيمن.'],
],[
  Q('Verify the lemma for `y = t^2 + 1` and `ζ = 1/2`.','تحقق من التمهيدية للدالة `y = t^2 + 1` والرتبة `ζ = 1/2`.','D^{−1/2} ^CD^{1/2} y = t^2 = y − y(0)',
    ['^CD^{1/2}(t^2 + 1) = #f{8 t^{3/2}}{3#r{π}}', 'D^{−1/2} t^{3/2} = #f{Γ(#f{5}{2})}{Γ(3)} t^2 = #f{3#r{π}}{8} t^2', '#f{8}{3#r{π}}·#f{3#r{π}}{8} t^2 = t^2 = y − 1']),
  Q('Verify the lemma for `y = t^2 + 3t + 1` and `ζ = 3/2`.','تحقق من التمهيدية للدالة `y = t^2 + 3t + 1` والرتبة `ζ = 3/2`.','D^{−3/2} ^CD^{3/2} y = t^2 = y − 1 − 3t',
    ['^CD^{3/2} y = D^{−1/2} 2 = #f{4 t^{1/2}}{#r{π}}', 'D^{−3/2} t^{1/2} = #f{Γ(#f{3}{2})}{Γ(3)} t^2 = #f{#r{π}}{4} t^2', '#f{4}{#r{π}}·#f{#r{π}}{4} t^2 = t^2', 'y − y(0) − t y′(0) = t^2 + 3t + 1 − 1 − 3t = t^2']),
  Q('What does `D^{−0.8} ^CD^{0.8} y` equal if `y(0) = 5`?','ماذا يساوي `D^{−0.8} ^CD^{0.8} y` إذا كان `y(0) = 5`؟','y(t) − 5',['⌈0.8⌉ = 1', ['One term is subtracted: `y(0)·t^0/0! = 5`.','يُطرح حد واحد: `y(0)·t^0/0! = 5`.']],['y(t)','y(t) − 5t','y(t) − 5 − t y′(0)']),
  Q('What does `D^{−1.4} ^CD^{1.4} y` equal if `y(0) = ψ_0` and `y′(0) = ψ_1`?','ماذا يساوي `D^{−1.4} ^CD^{1.4} y` إذا كان `y(0) = ψ_0` و `y′(0) = ψ_1`؟','y(t) − ψ_0 − t ψ_1',['⌈1.4⌉ = 2', ['Two terms are subtracted: `ψ_0 + t ψ_1`.','يُطرح حدان: `ψ_0 + t ψ_1`.']],['y(t) − ψ_0','y(t) − ψ_0 − ψ_1','y(t) − ψ_0 − #f{t^2}{2} ψ_1']),
]);

lesson('508',4,[
  ['Instead of approximating a fractional derivative, apply the integral `D^{−α}` to both sides of the equation and use Lemma 2.1. For `^CD^{α} y + c y = g`, `y(0) = ψ_0`, `0 < α ≤ 1`:',
   'بدلاً من تقريب مشتقة كسرية نطبق التكامل `D^{−α}` على طرفي المعادلة ونستخدم التمهيدية 2.1. فللمسألة `^CD^{α} y + c y = g` و `y(0) = ψ_0` و `0 < α ≤ 1`:'],
  'y(t) + c D^{−α} y(t) = D^{−α} g(t) + ψ_0',
  ['This integrated form has three benefits: the top derivative disappears and leaves y itself; the initial condition is already inside the right side; and only integral operators remain, which are numerically more stable than derivatives.',
   'ولهذه الصيغة التكاملية ثلاث فوائد: تختفي أعلى مشتقة ويبقى y نفسه؛ والشرط الابتدائي داخل الطرف الأيمن مسبقاً؛ ولا يبقى إلا مؤثرات تكاملية وهي أكثر استقراراً عددياً من المشتقات.'],
  ['With several terms, apply `D^{−μ_s}` for the top order `μ_s` and split it as `D^{−μ_s} = D^{−(μ_s−α)} D^{−α}`. Each term `^CD^{α} y` becomes an integral of order `μ_s − α` minus its initial values.',
   'ومع عدة حدود نطبق `D^{−μ_s}` لأعلى رتبة `μ_s` ونفككه `D^{−μ_s} = D^{−(μ_s−α)} D^{−α}`. فكل حد `^CD^{α} y` يصبح تكاملاً بالرتبة `μ_s − α` مطروحاً منه قيمه الابتدائية.'],
],[
  Q('Write the integrated form of `^CD^{α} y = −y`, `y(0) = 1`.','اكتب الصيغة التكاملية للمسألة `^CD^{α} y = −y` و `y(0) = 1`.','y(t) = 1 − D^{−α} y(t)',
    ['D^{−α} ^CD^{α} y = −D^{−α} y', 'y − y(0) = −D^{−α} y  ⇒  y = 1 − D^{−α} y'],['y(t) = 1 + D^{−α} y(t)','y(t) = −D^{−α} y(t)','y(t) = 1 − ^CD^{α} y(t)']),
  Q('Solve `^CD^{1/2} y = t`, `y(0) = 2`.','حل `^CD^{1/2} y = t` و `y(0) = 2`.','y = 2 + #f{4 t^{3/2}}{3#r{π}}',
    ['y − 2 = D^{−1/2} t', 'D^{−1/2} t = #f{Γ(2)}{Γ(#f{5}{2})} t^{3/2} = #f{4 t^{3/2}}{3#r{π}}', ['The solution contains `t^{3/2}`: it is not smooth at t = 0 although the data are polynomials.','الحل يحتوي `t^{3/2}`: ليس أملس عند t = 0 مع أن المعطيات كثيرات حدود.']],['y = 2 + #f{2 t^{3/2}}{3#r{π}}','y = #f{4 t^{3/2}}{3#r{π}}','y = 2 + #f{t^2}{2}']),
  Q('Solve `^CD^{3/2} y = 1`, `y(0) = 1`, `y′(0) = 0`.','حل `^CD^{3/2} y = 1` و `y(0) = 1` و `y′(0) = 0`.','y = 1 + #f{t^{3/2}}{Γ(5/2)}',
    ['y − ψ_0 − t ψ_1 = D^{−3/2} 1', 'y = 1 + #f{t^{3/2}}{Γ(#f{5}{2})} = 1 + #f{4 t^{3/2}}{3#r{π}}'],['y = 1 + #f{t^{3/2}}{Γ(3/2)}','y = 1 + t + #f{t^{3/2}}{Γ(5/2)}','y = #f{t^{3/2}}{Γ(5/2)}']),
  Q('Apply `D^{−3/2}` to the term `b ^CD^{1/2} y` with `y(0) = ψ_0`.','طبّق `D^{−3/2}` على الحد `b ^CD^{1/2} y` مع `y(0) = ψ_0`.','b D^{−1} y − b ψ_0 t',
    ['D^{−3/2} = D^{−1} D^{−1/2}', 'D^{−1/2} ^CD^{1/2} y = y − ψ_0', 'D^{−1}(y − ψ_0) = D^{−1} y − ψ_0 t', ['Moved to the right side this is the term `b ψ_0 t^{μ_s−ν}/Γ(μ_s − ν + 1)` of the function h, with `μ_s − ν = 1`.','وبنقله إلى الطرف الأيمن يصبح الحد `b ψ_0 t^{μ_s−ν}/Γ(μ_s − ν + 1)` في الدالة h مع `μ_s − ν = 1`.']],['b D^{−1} y','b D^{−1} y − b ψ_0','b D^{−2} y − b ψ_0 t']),
]);

lesson('508',5,[
  ['The integrated form `y = 1 − D^{−α} y` can be solved by repeated substitution (Picard iteration), starting from `y_0 = 1`. Each step integrates a power with the power law and adds one term:',
   'الصيغة التكاملية `y = 1 − D^{−α} y` تُحل بالتعويض المتكرر (تكرار بيكار) بدءاً من `y_0 = 1`. وكل خطوة تكامل قوة بقانون القوى وتضيف حداً واحداً:'],
  'y_1 = 1 − #f{t^{α}}{Γ(α + 1)},   y_2 = 1 − #f{t^{α}}{Γ(α + 1)} + #f{t^{2α}}{Γ(2α + 1)},  …',
  ['The limit is the Mittag-Leffler function, the fractional replacement of the exponential:','والنهاية دالة ميتاج–ليفلر، وهي بديل الدالة الأسية في الحالة الكسرية:'],
  'y(t) = E_α(−t^{α}) = Σ_{k=0}^{∞} #f{(−1)^k t^{kα}}{Γ(kα + 1)}',
  ['The solution is a series in `t^{α}`, not in t. This is the reason for choosing `λ = α` in the fractional Legendre functions: then the solution is a smooth function of `u = t^{λ}`.',
   'والحل متسلسلة في `t^{α}` لا في t. وهذا سبب اختيار `λ = α` في دوال ليجندر الكسرية: فحينها يكون الحل دالة ملساء في `u = t^{λ}`.'],
],[
  Q('Carry out the first Picard step for `y = 1 − D^{−α} y` from `y_0 = 1`.','نفّذ الخطوة الأولى من تكرار بيكار للمعادلة `y = 1 − D^{−α} y` بدءاً من `y_0 = 1`.','y_1 = 1 − #f{t^{α}}{Γ(α + 1)}',
    ['D^{−α} 1 = #f{Γ(1)}{Γ(α + 1)} t^{α}', 'y_1 = 1 − D^{−α} y_0 = 1 − #f{t^{α}}{Γ(α + 1)}'],['y_1 = 1 − t^{α}','y_1 = 1 − #f{t^{α}}{Γ(α)}','y_1 = 1 + #f{t^{α}}{Γ(α + 1)}']),
  Q('Show that for `α = 1` the solution `E_α(−t^{α})` is `e^{−t}`.','أثبت أن الحل `E_α(−t^{α})` عند `α = 1` هو `e^{−t}`.','E_1(−t) = e^{−t}',
    ['E_1(−t) = Σ_{k=0}^{∞} #f{(−1)^k t^k}{Γ(k + 1)} = Σ_{k=0}^{∞} #f{(−t)^k}{k!} = e^{−t}', ['And `y′ = −y`, `y(0) = 1` indeed has the solution `e^{−t}`.','والمسألة `y′ = −y` و `y(0) = 1` حلها `e^{−t}` فعلاً.']]),
  Q('Write the first three terms of the solution for `α = 1/2`.','اكتب الحدود الثلاثة الأولى للحل عند `α = 1/2`.','1 − #f{2}{#r{π}} t^{1/2} + t',
    ['Γ(#f{3}{2}) = #f{#r{π}}{2},   Γ(2) = 1', '1 − #f{t^{1/2}}{Γ(#f{3}{2})} + #f{t}{Γ(2)} = 1 − #f{2}{#r{π}} t^{1/2} + t', ['The term `t^{1/2}` has an infinite derivative at t = 0.','والحد `t^{1/2}` مشتقته لانهائية عند t = 0.']],['1 − t^{1/2} + t','1 − #f{2}{#r{π}} t^{1/2} + #f{t}{2}','1 − #f{#r{π}}{2} t^{1/2} + t']),
  Q('Verify term by term that `^CD^{α}` maps the term of index k of the series to minus the term of index `k − 1`.','تحقق حداً بحد أن `^CD^{α}` تحوّل الحد ذا الدليل k في المتسلسلة إلى سالب الحد ذي الدليل `k − 1`.','^CD^{α} #f{t^{kα}}{Γ(kα + 1)} = #f{t^{(k−1)α}}{Γ((k − 1)α + 1)}',
    ['^CD^{α} t^{kα} = #f{Γ(kα + 1)}{Γ(kα − α + 1)} t^{kα−α}', ['Dividing by `Γ(kα + 1)` and including the sign `(−1)^k = −(−1)^{k−1}` gives `^CD^{α} y = −y`.','وبالقسمة على `Γ(kα + 1)` وإدخال الإشارة `(−1)^k = −(−1)^{k−1}` نحصل على `^CD^{α} y = −y`.']]),
]);

/* ---- 508 · Unit 1 (lessons 6–10) and Unit 2 (lessons 11–20) ---- */
lesson('508',6,[
  ['The equation `^CD^{α}y = λy`, `y(0) = ψ_0` (0 < α ≤ 1) has the solution','المعادلة `^CD^{α}y = λy` مع `y(0) = ψ_0` (0 < α ≤ 1) حلها'],
  'y(t) = ψ_0 E_{α}(λt^{α}) = ψ_0 Σ_{k=0}^{∞} #f{λ^k t^{kα}}{Γ(kα + 1)}',
  ['`E_{α}(λt^{α})` is the fractional exponential: for α = 1 it is `e^{λt}`. For λ > 0 it grows like `e^{λ^{1/α}t}/α`; for λ < 0 it decays, but only algebraically, like `t^{−α}/(|λ|Γ(1 − α))`, a long memory that the exponential does not have.','و `E_{α}(λt^{α})` هي الأسية الكسرية: عند α = 1 تساوي `e^{λt}`. وعند λ > 0 تنمو مثل `e^{λ^{1/α}t}/α`، وعند λ < 0 تتناقص لكن جبرياً فقط مثل `t^{−α}/(|λ|Γ(1 − α))`، وهي ذاكرة طويلة لا تملكها الأسية.'],
],[
  Q('Solve `^CD^{1/2}y = y`, `y(0) = 1`, and give `y(1)`.','حل `^CD^{1/2}y = y` مع `y(0) = 1` وأعط `y(1)`.','y(1) = E_{1/2}(1) = e(1 + erf 1) ≈ 5.0090',['E_{1/2}(z) = e^{z^2} erfc(−z),   z = 1'],['e ≈ 2.7183','E_{1/2}(−1) ≈ 0.4276','≈ 1.5']),
  Q('Write the solution of `^CD^{α}y = −2y`, `y(0) = 3`.','اكتب حل `^CD^{α}y = −2y` مع `y(0) = 3`.','y = 3E_{α}(−2t^{α})',['ψ_0 = 3,   λ = −2'],['y = 3e^{−2t}','y = E_{α}(−2t^{α}) + 3','y = 3E_{α}(−2t)']),
  Q('For α = 1/2, λ = −1, which decays faster for large t, `E_{1/2}(−t^{1/2})` or `e^{−t}`?','عند α = 1/2 و λ = −1 أيهما يتناقص أسرع لـ t كبيرة: `E_{1/2}(−t^{1/2})` أم `e^{−t}`؟',['`e^{−t}`: the Mittag-Leffler function decays only like `t^{−1/2}/Γ(1/2)`','`e^{−t}`: دالة ميتاج–ليفلر تتناقص فقط مثل `t^{−1/2}/Γ(1/2)`'],['E_{α}(−t^{α}) ~ #f{t^{−α}}{Γ(1 − α)}'],[['Both the same','الاثنتان متماثلتان'],['`E_{1/2}(−t^{1/2})`','`E_{1/2}(−t^{1/2})`']]),
  Q('Write the first three terms of `E_{α}(λt^{α})`.','اكتب الحدود الثلاثة الأولى لـ `E_{α}(λt^{α})`.','1 + #f{λt^{α}}{Γ(α + 1)} + #f{λ^2 t^{2α}}{Γ(2α + 1)}',['k = 0, 1, 2'],['1 + λt^{α} + λ^2 t^{2α}','1 + #f{λt}{Γ(α + 1)} + #f{λ^2 t^2}{Γ(2α + 1)}','1 + #f{λt^{α}}{α!} + #f{λ^2 t^{2α}}{(2α)!}']),
]);

lesson('508',7,[
  ['For the linear equation `^CD^{α}y = λy + g(t)`, `y(0) = ψ_0`, the solution is the homogeneous part plus a convolution with the two-parameter Mittag-Leffler function:','للمعادلة الخطية `^CD^{α}y = λy + g(t)` مع `y(0) = ψ_0` يكون الحل الجزء المتجانس مضافاً إليه التفاف مع دالة ميتاج–ليفلر ذات الوسيطين:'],
  'y(t) = ψ_0 E_{α}(λt^{α}) + ∫_0^t (t − s)^{α−1} E_{α,α}(λ(t − s)^{α}) g(s) ds',
  ['Here `E_{α,β}(z) = Σ z^k/Γ(αk + β)`. For λ = 0 the kernel is `(t − s)^{α−1}/Γ(α)` and the formula reduces to `y = ψ_0 + D^{−α}g`. A constant source can often be handled by shifting y by the steady state.','وهنا `E_{α,β}(z) = Σ z^k/Γ(αk + β)`. وعند λ = 0 تكون النواة `(t − s)^{α−1}/Γ(α)` وتؤول الصيغة إلى `y = ψ_0 + D^{−α}g`. والمصدر الثابت يُعالج غالباً بإزاحة y بالحالة المستقرة.'],
],[
  Q('Solve `^CD^{α}y = 1 − y`, `y(0) = 0`.','حل `^CD^{α}y = 1 − y` مع `y(0) = 0`.','y = 1 − E_{α}(−t^{α})',['z = 1 − y:   ^CD^{α}z = −z,   z(0) = 1'],['y = E_{α}(−t^{α})','y = 1 + E_{α}(−t^{α})','y = 1 − e^{−t}']),
  Q('Give `y(1)` for that solution with α = 1/2.','أعط `y(1)` لذلك الحل عند α = 1/2.','≈ 0.5724',['1 − E_{1/2}(−1) = 1 − 0.427584'],['≈ 0.4276','≈ 0.6321','≈ 1']),
  Q('Reduce `E_{α,α}(0·z)` and the kernel for λ = 0.','اختصر `E_{α,α}(0·z)` والنواة عند λ = 0.','E_{α,α}(0) = #f{1}{Γ(α)}',['k = 0:   #f{1}{Γ(α)}',['The kernel becomes `(t − s)^{α−1}/Γ(α)`, the Riemann–Liouville integral.','فتصبح النواة `(t − s)^{α−1}/Γ(α)`، تكامل ريمان–ليوفيل.']],['E_{α,α}(0) = 1','E_{α,α}(0) = 0','E_{α,α}(0) = Γ(α)']),
  Q('Solve `^CD^{1/2}y = 2`, `y(0) = 1`.','حل `^CD^{1/2}y = 2` مع `y(0) = 1`.','y = 1 + #f{4#r{t}}{#r{π}}',['y = 1 + 2D^{−1/2}1 = 1 + #f{2t^{1/2}}{Γ(3/2)}'],['y = 1 + 2#r{t}','y = 1 + #f{2#r{t}}{#r{π}}','y = 1 + 2t']),
]);

lesson('508',8,[
  ['Even with smooth data the solution of a fractional equation is usually not smooth at t = 0. For `^CD^{α}y = −y`, `y(0) = 1`:','حتى مع معطيات ملساء لا يكون حل المعادلة الكسرية أملس عادة عند t = 0. فلـ `^CD^{α}y = −y` مع `y(0) = 1`:'],
  'y = 1 − #f{t^{α}}{Γ(α + 1)} + …,     y′(t) ≈ −#f{t^{α−1}}{Γ(α)} → −∞   (t → 0)',
  ['The derivative is infinite at the start, so polynomials in t converge only algebraically. This is the main difficulty of numerical methods for fractional equations, and the reason for graded meshes (Unit 6) and for the variable `s = t^{λ}` (Unit 7).','فالمشتقة لانهائية عند البداية فتتقارب كثيرات الحدود في t جبرياً فقط. وهذه الصعوبة الرئيسة للطرق العددية للمعادلات الكسرية، وسبب الشبكات المتدرجة (الوحدة 6) والمتغير `s = t^{λ}` (الوحدة 7).'],
],[
  Q('For α = 1/2, how does `y′(t)` behave near 0?','عند α = 1/2 كيف تسلك `y′(t)` قرب 0؟','y′(t) ≈ −#f{1}{#r{πt}}',['−#f{t^{−1/2}}{Γ(1/2)}'],['y′(t) ≈ −1','y′(t) ≈ −#f{1}{2}#r{t}','y′(0) = 0']),
  Q('Which power appears first in the solution of `^CD^{α}y = g` with smooth g and `y(0) = ψ_0`?','أي قوة تظهر أولاً في حل `^CD^{α}y = g` مع g ملساء و `y(0) = ψ_0`؟','t^{α}',['D^{−α}g(0) = #f{g(0)t^{α}}{Γ(α + 1)}'],['t','t^2','t^{1−α}']),
  Q('What convergence rate do Legendre polynomials in t give for `#r{t}` on [0, 1]?','أي معدل تقارب تعطيه كثيرات ليجندر في t للدالة `#r{t}` على [0, 1]؟',['Algebraic, like a negative power of N, not exponential','جبري مثل قوة سالبة لـ N لا أسي'],[['An end singularity of order 1/2.','انفراد طرفي من الرتبة 1/2.']],[['Exponential','أسي'],['None: it diverges','لا شيء: يتباعد']]),
  Q('In which variable is `y = E_{1/2}(−t^{1/2})` smooth?','في أي متغير تكون `y = E_{1/2}(−t^{1/2})` ملساء؟','s = t^{1/2}',['y = E_{1/2}(−s) = Σ #f{(−s)^k}{Γ(k/2 + 1)}'],['t','t^2','log t']),
]);

lesson('508',9,[
  ['Fractional equations are classified like ordinary ones:','تُصنَّف المعادلات الكسرية كالعادية:'],
  ['Linear: `^CD^{α}y = a(t)y + g`; nonlinear: `^CD^{α}y = f(t, y)`; multi-term: `Σ_i a_i ^CD^{α_i}y = g`; partial: `^CD_t^{α}u = u_{xx} + g`.','خطية: `^CD^{α}y = a(t)y + g`، وغير خطية: `^CD^{α}y = f(t, y)`، ومتعددة الحدود: `Σ_i a_i ^CD^{α_i}y = g`، وجزئية: `^CD_t^{α}u = u_{xx} + g`.'],
  ['The number of initial conditions is set by the highest order: `⌈α_max⌉` values `y(0), y′(0), …`. Orders between 1 and 2 give wave-like (oscillation) equations, orders below 1 relaxation or sub-diffusion.','وعدد الشروط الابتدائية تحدده أعلى رتبة: `⌈α_max⌉` قيمة `y(0) و y′(0) و …`. والرتب بين 1 و 2 تعطي معادلات موجية (اهتزازية)، والرتب الأقل من 1 استرخاء أو انتشاراً بطيئاً.'],
],[
  Q('How many initial conditions does `^CD^{1.8}y + ^CD^{0.5}y + y = g` need?','كم شرطاً ابتدائياً تحتاج `^CD^{1.8}y + ^CD^{0.5}y + y = g`؟','2',['⌈1.8⌉ = 2:   y(0),  y′(0)'],['1','3','0']),
  Q('Is `^CD^{α}y = t^2 y + sin t` linear?','هل `^CD^{α}y = t^2 y + sin t` خطية؟',['Yes: y appears to the first power, with a variable coefficient','نعم: y تظهر بالقوة الأولى بمعامل متغير'],[['The source sin t does not affect linearity.','المصدر sin t لا يؤثر في الخطية.']],[['No: it has t^2','لا: فيها t^2'],['No: it has sin t','لا: فيها sin t']]),
  Q('Classify `^CD_t^{0.7}u = u_{xx} − u^3`.','صنّف `^CD_t^{0.7}u = u_{xx} − u^3`.',['A nonlinear time-fractional partial differential equation','معادلة تفاضلية جزئية كسرية زمنية غير خطية'],[['Sub-diffusion with a cubic reaction.','انتشار بطيء مع تفاعل تكعيبي.']],[['A linear ordinary equation','معادلة عادية خطية'],['A multi-term ordinary equation','معادلة عادية متعددة الحدود']]),
  Q('What behaviour does an order between 1 and 2 describe?','أي سلوك تصفه رتبة بين 1 و 2؟',['Damped oscillation, between relaxation (α = 1) and waves (α = 2)','اهتزاز متخامد بين الاسترخاء (α = 1) والموجات (α = 2)'],[['The fractional oscillation equation of Unit 3.','معادلة الاهتزاز الكسرية في الوحدة 3.']],[['Pure diffusion','انتشار خالص'],['Exponential growth','نمو أسي']]),
]);

lesson('508',10,[
  ['A manufactured test problem is checked at one sample point before any solver is run. For `^CD^{1/2}u + u = f` with `u = t^2`:','مسألة الاختبار المصنّعة تُفحص عند نقطة عينة واحدة قبل تشغيل أي حلّال. فلـ `^CD^{1/2}u + u = f` مع `u = t^2`:'],
  'f(t) = #f{Γ(3)}{Γ(5/2)} t^{3/2} + t^2 = #f{8}{3#r{π}} t^{3/2} + t^2',
  ['Evaluate both sides at, say, t = 1 with independent tools (the power rule and a quadrature of the Caputo integral). A wrong source term is the most common reason why a correct solver seems not to converge.','واحسب الطرفين عند t = 1 مثلاً بأدوات مستقلة (قاعدة القوة وتربيع لتكامل كابوتو). والحد المصدري الخاطئ أشهر سبب لظهور حلّال صحيح كأنه لا يتقارب.'],
],[
  Q('Compute `f(1)`.','احسب `f(1)`.','#f{8}{3#r{π}} + 1 ≈ 2.5045',['#f{8}{3·1.7725} = 1.5045'],['#f{8}{3#r{π}} ≈ 1.5045','2','3']),
  Q('Compute `^CD^{1/2}t^2` at t = 1 directly from the definition `(1/Γ(1/2))∫_0^1 (1 − s)^{−1/2}·2s ds`.','احسب `^CD^{1/2}t^2` عند t = 1 مباشرة من التعريف `(1/Γ(1/2))∫_0^1 (1 − s)^{−1/2}·2s ds`.','#f{8}{3#r{π}}',['∫_0^1 (1 − s)^{−1/2} 2s ds = 2B(2, #f{1}{2}) = 2·#f{4}{3}','#f{8/3}{#r{π}}'],['#f{4}{3#r{π}}','#f{2}{#r{π}}','#f{8}{3}']),
  Q('Write f for `^CD^{α}u = −u + f` with `u = t^{α} + 1`.','اكتب f لـ `^CD^{α}u = −u + f` مع `u = t^{α} + 1`.','f = Γ(α + 1) + t^{α} + 1',['^CD^{α}t^{α} = Γ(α + 1),   ^CD^{α}1 = 0'],['f = Γ(α + 1)','f = t^{α} + 1','f = Γ(α + 1) − t^{α} − 1']),
  Q('Why check f by an independent method?','لماذا نتحقق من f بطريقة مستقلة؟',['A wrong f makes a correct solver look wrong; two methods only agree if f is right','الـ f الخاطئة تجعل الحلّال الصحيح يبدو خاطئاً، والطريقتان لا تتفقان إلا إذا كانت f صحيحة'],[['For example the power rule against quadrature.','مثل قاعدة القوة مقابل التربيع.']],[['To save time','لتوفير الوقت'],['It is not needed','لا حاجة']]),
]);

lesson('508',11,[
  ['The initial-value problem `^CD^{α}y = f(t, y)`, `y(0) = ψ_0` (0 < α ≤ 1) is equivalent to the Volterra integral equation','مسألة القيمة الابتدائية `^CD^{α}y = f(t, y)` مع `y(0) = ψ_0` (0 < α ≤ 1) تكافئ معادلة فولتيرا التكاملية'],
  'y(t) = ψ_0 + #f{1}{Γ(α)} ∫_0^t (t − s)^{α−1} f(s, y(s)) ds',
  ['Apply `D^{−α}` and Lemma 2.1 to go one way, `^CD^{α}` to go back. The kernel `(t − s)^{α−1}` is weakly singular; for `1 < α < 2` the term `tψ_1` is added. Theory and many numerical methods work with this form.','نطبق `D^{−α}` والتمهيدية 2.1 للاتجاه الأول و `^CD^{α}` للعودة. والنواة `(t − s)^{α−1}` شاذة ضعيفاً، وعند `1 < α < 2` يُضاف الحد `tψ_1`. والنظرية وكثير من الطرق العددية تعمل بهذه الصيغة.'],
],[
  Q('Write the Volterra form for `^CD^{α}y = −y^2`, `y(0) = 1`.','اكتب صيغة فولتيرا لـ `^CD^{α}y = −y^2` مع `y(0) = 1`.','y(t) = 1 − #f{1}{Γ(α)}∫_0^t (t − s)^{α−1} y(s)^2 ds',['f(s, y) = −y^2'],['y(t) = 1 + #f{1}{Γ(α)}∫_0^t (t − s)^{α−1} y(s)^2 ds','y(t) = 1 − ∫_0^t y(s)^2 ds','y(t) = −#f{1}{Γ(α)}∫_0^t (t − s)^{α} y(s)^2 ds']),
  Q('What extra term appears for `1 < α < 2` with `y(0) = ψ_0`, `y′(0) = ψ_1`?','أي حد إضافي يظهر عند `1 < α < 2` مع `y(0) = ψ_0` و `y′(0) = ψ_1`؟','tψ_1',['D^{−α}^CD^{α}y = y − ψ_0 − tψ_1'],['ψ_1','t^{α}ψ_1','#f{ψ_1}{Γ(α)}']),
  Q('Why is the kernel called weakly singular?','لماذا تسمى النواة شاذة ضعيفاً؟',['`(t − s)^{α−1}` is infinite at s = t but integrable, since α − 1 > −1','`(t − s)^{α−1}` لانهائية عند s = t لكنها قابلة للتكامل لأن α − 1 > −1'],['∫_0^t (t − s)^{α−1} ds = #f{t^{α}}{α}'],[['It is bounded','محدودة'],['It is not integrable','غير قابلة للتكامل']]),
  Q('Compute `(1/Γ(1/2))∫_0^1 (1 − s)^{−1/2} ds`.','احسب `(1/Γ(1/2))∫_0^1 (1 − s)^{−1/2} ds`.','#f{2}{#r{π}} ≈ 1.1284',['#f{2}{Γ(1/2)}'],['2','#f{1}{#r{π}}','1']),
]);

lesson('508',12,[
  ['If f is continuous and Lipschitz in y, `|f(t, y) − f(t, z)| ≤ L|y − z|`, the problem `^CD^{α}y = f(t, y)`, `y(0) = ψ_0` has a unique continuous solution on [0, T] for every T. The proof uses the Volterra form and a contraction in a weighted norm.','إذا كانت f متصلة وتحقق شرط ليبشتز في y أي `|f(t, y) − f(t, z)| ≤ L|y − z|` فإن للمسألة `^CD^{α}y = f(t, y)` مع `y(0) = ψ_0` حلاً متصلاً وحيداً على [0, T] لكل T. والبرهان يستخدم صيغة فولتيرا وانكماشاً في معيار موزون.'],
  '|f(t, y) − f(t, z)| ≤ L|y − z|',
  ['Without the Lipschitz condition solutions can fail to be unique, as for ordinary equations: `^CD^{α}y = y^{1/2}`, `y(0) = 0` has the zero solution and a non-trivial one.','ودون شرط ليبشتز قد لا يكون الحل وحيداً كما في المعادلات العادية: `^CD^{α}y = y^{1/2}` مع `y(0) = 0` لها الحل الصفري وحل غير بديهي.'],
],[
  Q('Find a Lipschitz constant of `f(t, y) = −y + sin y`.','أوجد ثابت ليبشتز لـ `f(t, y) = −y + sin y`.','L = 2',['|∂_y f| = |−1 + cos y| ≤ 2'],['L = 1','L = 0','L = π']),
  Q('Is `f(t, y) = y^2` Lipschitz on all of ℝ?','هل `f(t, y) = y^2` تحقق شرط ليبشتز على ℝ كلها؟',['No, only on bounded sets; solutions exist locally and may blow up','لا، على المجموعات المحدودة فقط، والحلول موجودة محلياً وقد تنفجر'],['|y^2 − z^2| = |y + z||y − z|'],[['Yes, with L = 2','نعم مع L = 2'],['Yes, with L = 1','نعم مع L = 1']]),
  Q('Give the non-trivial solution of `^CD^{α}y = y^{1/2}`, `y(0) = 0`, in the form `y = ct^{2α}`.','أعط الحل غير البديهي لـ `^CD^{α}y = y^{1/2}` مع `y(0) = 0` بالصورة `y = ct^{2α}`.','c = (#f{Γ(α + 1)}{Γ(2α + 1)})^2',['c#f{Γ(2α + 1)}{Γ(α + 1)}t^{α} = c^{1/2}t^{α}'],['c = #f{Γ(α + 1)}{Γ(2α + 1)}','c = 1','c = Γ(α + 1)^2']),
  Q('What does non-uniqueness of that problem show?','ماذا يبيّن عدم وحدانية تلك المسألة؟',['The Lipschitz condition cannot simply be dropped: `y^{1/2}` is not Lipschitz at y = 0','لا يمكن حذف شرط ليبشتز ببساطة: `y^{1/2}` لا تحقق شرط ليبشتز عند y = 0'],[['Its derivative is infinite there.','مشتقتها لانهائية هناك.']],[['Fractional equations never have unique solutions','المعادلات الكسرية ليس لها حل وحيد أبداً'],['The theorem is wrong','المبرهنة خاطئة']]),
]);

lesson('508',13,[
  ['Picard iteration on the Volterra form, `y_{k+1} = ψ_0 + D^{−α}f(·, y_k)`, converges for Lipschitz f. The error after k steps is bounded by','تكرار بيكار على صيغة فولتيرا `y_{k+1} = ψ_0 + D^{−α}f(·, y_k)` يتقارب لـ f التي تحقق شرط ليبشتز. والخطأ بعد k خطوة محدود بـ'],
  '|y − y_k| ≤ C #f{(LT^{α})^k}{Γ(kα + 1)}',
  ['The Gamma function in the denominator beats any power, so the iteration always converges, but for large `LT^{α}` many steps are needed. For linear f the iterates are exactly the partial sums of the Mittag-Leffler series.','ودالة جاما في المقام تغلب أي قوة فيتقارب التكرار دائماً، لكن لـ `LT^{α}` كبيرة نحتاج خطوات كثيرة. وللدالة f الخطية تكون التكرارات هي المجاميع الجزئية لمتسلسلة ميتاج–ليفلر بالضبط.'],
],[
  Q('Evaluate the bound factor `(LT^{α})^k/Γ(kα + 1)` for L = T = 1, α = 1/2, k = 5.','احسب عامل الحد `(LT^{α})^k/Γ(kα + 1)` عند L = T = 1 و α = 1/2 و k = 5.','#f{1}{Γ(3.5)} ≈ 0.301',['Γ(3.5) = #f{15#r{π}}{8} ≈ 3.323'],['#f{1}{5!} ≈ 0.0083','1','#f{1}{Γ(5)} ≈ 0.042']),
  Q('Carry out the second Picard step for `y = 1 + D^{−α}y`.','نفّذ الخطوة الثانية من بيكار لـ `y = 1 + D^{−α}y`.','y_2 = 1 + #f{t^{α}}{Γ(α + 1)} + #f{t^{2α}}{Γ(2α + 1)}',['y_1 = 1 + #f{t^{α}}{Γ(α + 1)},   D^{−α}t^{α} = #f{Γ(α + 1)}{Γ(2α + 1)}t^{2α}'],['y_2 = 1 + t^{α} + t^{2α}','y_2 = 1 + #f{t^{α}}{Γ(α)} + #f{t^{2α}}{Γ(2α)}','y_2 = 1 − #f{t^{α}}{Γ(α + 1)} + #f{t^{2α}}{Γ(2α + 1)}']),
  Q('Why does Picard iteration converge on every interval, unlike for ordinary equations where a small interval is often assumed?','لماذا يتقارب تكرار بيكار على كل مجال، بخلاف المعادلات العادية التي يُفترض فيها غالباً مجال صغير؟',['`(LT^{α})^k/Γ(kα + 1) → 0` for every T','`(LT^{α})^k/Γ(kα + 1) → 0` لكل T'],[['For α = 1 this is `(LT)^k/k!`, as for ordinary equations with the sharper estimate.','عند α = 1 هذا `(LT)^k/k!` كما في المعادلات العادية بالتقدير الأدق.']],[['Because α < 1','لأن α < 1'],['It does not converge','لا يتقارب']]),
  Q('For which f are the Picard iterates exactly partial sums of `E_{α}`?','لأي f تكون تكرارات بيكار هي المجاميع الجزئية لـ `E_{α}` بالضبط؟','f(t, y) = λy',[['Each step adds one term `λ^k t^{kα}/Γ(kα + 1)`.','كل خطوة تضيف حداً `λ^k t^{kα}/Γ(kα + 1)`.']],['f(t, y) = y^2','f(t, y) = t','f(t, y) = sin y']),
]);

lesson('508',14,[
  ['Solutions depend continuously on the initial value and on f. For two solutions with data `ψ_0`, `ψ̃_0` and the same Lipschitz f:','الحلول تعتمد اعتماداً متصلاً على القيمة الابتدائية وعلى f. ولحلين بمعطيين `ψ_0` و `ψ̃_0` و f نفسها التي تحقق شرط ليبشتز:'],
  '|y(t) − ỹ(t)| ≤ |ψ_0 − ψ̃_0| E_{α}(Lt^{α})',
  ['The factor `E_{α}(Lt^{α})` replaces `e^{Lt}` of the classical estimate. A perturbation `ε` of f adds a term `ε t^{α}E_{α,α+1}(Lt^{α})`. Well-posedness is what makes numerical approximation meaningful.','والعامل `E_{α}(Lt^{α})` يحل محل `e^{Lt}` في التقدير الكلاسيكي. واضطراب `ε` في f يضيف حداً `ε t^{α}E_{α,α+1}(Lt^{α})`. والطرح الجيد هو ما يجعل التقريب العددي ذا معنى.'],
],[
  Q('Bound `|y(1) − ỹ(1)|` for `|ψ_0 − ψ̃_0| = 10^{−3}`, L = 1, α = 1/2.','قدّر `|y(1) − ỹ(1)|` لـ `|ψ_0 − ψ̃_0| = 10^{−3}` و L = 1 و α = 1/2.','≈ 5.0 × 10^{−3}',['10^{−3}·E_{1/2}(1) = 10^{−3}·5.009'],['10^{−3}','≈ 2.7 × 10^{−3}','≈ 0.43 × 10^{−3}']),
  Q('Which function replaces `e^{Lt}` in the estimate?','أي دالة تحل محل `e^{Lt}` في التقدير؟','E_{α}(Lt^{α})',[['It reduces to `e^{Lt}` for α = 1.','وتؤول إلى `e^{Lt}` عند α = 1.']],['e^{Lt^{α}}','t^{α}','E_{α}(−Lt^{α})']),
  Q('For the linear problem `^CD^{α}y = −y`, what is the exact difference of two solutions?','للمسألة الخطية `^CD^{α}y = −y` ما الفرق المضبوط بين حلين؟','(ψ_0 − ψ̃_0)E_{α}(−t^{α})',[['Here the difference decays, better than the general bound.','هنا يتناقص الفرق، أفضل من الحد العام.']],['(ψ_0 − ψ̃_0)E_{α}(t^{α})','ψ_0 − ψ̃_0','0']),
  Q('What does well-posedness give a numerical method?','ماذا يعطي الطرح الجيد للطريقة العددية؟',['Small errors in data and rounding cause only small errors in the solution','الأخطاء الصغيرة في المعطيات والتقريب لا تسبب إلا أخطاء صغيرة في الحل'],[['Otherwise no computed result could be trusted.','وإلا لا يمكن الثقة بأي نتيجة محسوبة.']],[['Exact results','نتائج مضبوطة'],['Faster solvers','حلّالات أسرع']]),
]);

lesson('508',15,[
  ['The solution depends continuously on the order α as well. For `^CD^{α}y = −y`, `y(0) = 1` the values at t = 1:','ويعتمد الحل اعتماداً متصلاً على الرتبة α أيضاً. فلـ `^CD^{α}y = −y` مع `y(0) = 1` القيم عند t = 1:'],
  'α = 0.5:  0.4276,     α = 0.7:  0.3996,     α = 0.9:  0.3761,     α = 1:  e^{−1} = 0.3679',
  ['This continuity is what allows the order to be identified from data (Unit 10): a measured curve determines α by fitting. Near t = 0 smaller α decays faster, for large t it decays more slowly.','وهذا الاتصال ما يسمح بتحديد الرتبة من البيانات (الوحدة 10): المنحنى المقاس يحدد α بالملاءمة. وقرب t = 0 تتناقص الحالة ذات α الأصغر أسرع، ولـ t الكبيرة أبطأ.'],
],[
  Q('Which order gives the largest `y(1)` among the values above?','أي رتبة تعطي أكبر `y(1)` بين القيم أعلاه؟','α = 0.5',['0.4276 > 0.3996 > 0.3761 > 0.3679'],['α = 1','α = 0.9','α = 0.7']),
  Q('Estimate `dy(1)/dα` between α = 0.9 and α = 1.','قدّر `dy(1)/dα` بين α = 0.9 و α = 1.','≈ −0.082',['#f{0.3679 − 0.3761}{0.1}'],['≈ 0.082','≈ −0.82','≈ 0']),
  Q('Near t = 0, which decays faster, α = 0.5 or α = 1?','قرب t = 0 أيهما يتناقص أسرع: α = 0.5 أم α = 1؟','α = 0.5',[['`1 − t^{1/2}/Γ(3/2)` against `1 − t`: for small t, `t^{1/2} ≫ t`.','`1 − t^{1/2}/Γ(3/2)` مقابل `1 − t`: لـ t صغيرة يكون `t^{1/2} ≫ t`.']],['α = 1',['Both the same','الاثنتان متماثلتان'],['Neither decays','لا يتناقص أي منهما']]),
  Q('Why does continuous dependence on α matter for applications?','لماذا يهم الاعتماد المتصل على α للتطبيقات؟',['The order can then be estimated from measured data by fitting','فيمكن تقدير الرتبة من البيانات المقاسة بالملاءمة'],[['An inverse problem.','مسألة عكسية.']],[['It makes α an integer','يجعل α عدداً صحيحاً'],['It does not matter','لا يهم']]),
]);

lesson('508',16,[
  ['For smooth f the solution of `^CD^{α}y = f(t, y)` has an expansion in mixed powers:','للدوال الملساء f يكون لحل `^CD^{α}y = f(t, y)` مفكوك بقوى مختلطة:'],
  'y(t) = Σ_{j,k ≥ 0} c_{jk} t^{j + kα}',
  ['For the multi-term problems of the paper the exponents are combinations of the orders and their differences, `β_1, β_2, …`. All of them are multiples of `λ = gcd(β_1, β_2, …)`, which is why `s = t^{λ}` turns the solution into a smooth (even polynomial) function.','ولمسائل البحث متعددة الحدود تكون الأسس تركيبات من الرتب وفروقها `β_1, β_2, …`، وكلها مضاعفات لـ `λ = gcd(β_1, β_2, …)`، ولهذا يحوّل `s = t^{λ}` الحل إلى دالة ملساء (بل كثيرة حدود أحياناً).'],
],[
  Q('List the first exponents `j + kα` for α = 1/2.','اذكر أول الأسس `j + kα` عند α = 1/2.','0, #f{1}{2}, 1, #f{3}{2}, 2, …',[['All multiples of 1/2.','كلها مضاعفات لـ 1/2.']],['0, 1, 2, 3, …','0, #f{1}{2}, #f{1}{4}, …','#f{1}{2}, #f{3}{2}, #f{5}{2}, …']),
  Q('Which λ makes every `t^{j + kα}` with α = 2/3 a power of `s = t^{λ}`?','أي λ تجعل كل `t^{j + kα}` مع α = 2/3 قوة لـ `s = t^{λ}`؟','λ = #f{1}{3}',['gcd(1, #f{2}{3})'],['λ = #f{2}{3}','λ = 1','λ = #f{1}{6}']),
  Q('For α = 0.6, is `t^{0.6}` a polynomial in `s = t^{0.2}`?','عند α = 0.6 هل `t^{0.6}` كثيرة حدود في `s = t^{0.2}`؟',['Yes: `t^{0.6} = s^3`','نعم: `t^{0.6} = s^3`'],['0.6 = 3·0.2'],[['No','لا'],['Only for t > 1','فقط عند t > 1']]),
  Q('Why is `λ = gcd` the natural choice rather than a smaller common divisor?','لماذا λ = gcd الاختيار الطبيعي بدل قاسم مشترك أصغر؟',['A smaller λ also works but raises the degrees in s and the number of terms needed','λ الأصغر تصلح أيضاً لكنها ترفع الدرجات في s وعدد الحدود اللازمة'],['λ = #f{1}{4}:   t^{1/2} = s^2'],[['A smaller λ fails','λ الأصغر تفشل'],['gcd is required by the theory','gcd تشترطه النظرية']]),
]);

lesson('508',17,[
  ['The fractional Gronwall inequality: if `u ≥ 0` is continuous and `u(t) ≤ a + b D^{−α}u(t)` with constants a, b ≥ 0, then','متباينة جرونوال الكسرية: إذا كانت `u ≥ 0` متصلة و `u(t) ≤ a + b D^{−α}u(t)` مع ثابتين a, b ≥ 0 فإن'],
  'u(t) ≤ a E_{α}(bt^{α})',
  ['It is the main tool for stability and error estimates: write the error equation in Volterra form, bound f by its Lipschitz constant, and apply Gronwall. For α = 1 it is the classical `u ≤ ae^{bt}`.','وهي الأداة الرئيسة لتقديرات الاستقرار والخطأ: اكتب معادلة الخطأ بصيغة فولتيرا وحدّ f بثابت ليبشتز ثم طبّق جرونوال. وعند α = 1 هي `u ≤ ae^{bt}` الكلاسيكية.'],
],[
  Q('Apply Gronwall to `u ≤ 0.01 + 2D^{−1/2}u` and bound u(1).','طبّق جرونوال على `u ≤ 0.01 + 2D^{−1/2}u`. قدّر u(1).','u(1) ≤ 0.01E_{1/2}(2) ≈ 1.09',['E_{1/2}(2) = e^4 erfc(−2) ≈ 108.94'],['u(1) ≤ 0.01e^2 ≈ 0.074','u(1) ≤ 0.01','u(1) ≤ 0.02']),
  Q('What does the inequality give for a = 0?','ماذا تعطي المتباينة عند a = 0؟','u ≡ 0',['u ≤ 0·E_{α}(bt^{α})'],['u ≤ b','u ≤ E_{α}(bt^{α})',['Nothing','لا شيء']]),
  Q('Reduce Gronwall to α = 1.','اختصر جرونوال إلى α = 1.','u(t) ≤ ae^{bt}',['E_1(bt) = e^{bt}'],['u(t) ≤ a + bt','u(t) ≤ ae^{b}','u(t) ≤ abt']),
  Q('How is Gronwall used to prove uniqueness?','كيف تُستخدم جرونوال لإثبات الوحدانية؟',['The difference of two solutions satisfies `|e| ≤ L D^{−α}|e|`, so a = 0 gives e ≡ 0','الفرق بين حلين يحقق `|e| ≤ L D^{−α}|e|` فإن a = 0 يعطي e ≡ 0'],[['Same initial value, same f.','القيمة الابتدائية نفسها و f نفسها.']],[['By Picard iteration only','بتكرار بيكار فقط'],['It is not used','لا تُستخدم']]),
]);

lesson('508',18,[
  ['Comparison principle: for `0 < α ≤ 1`, if `^CD^{α}u ≥ ^CD^{α}v` on (0, T] and `u(0) ≥ v(0)`, then `u ≥ v`. More generally, sub- and super-solutions of `^CD^{α}y = f(t, y)` bound the solution when f is Lipschitz:','مبدأ المقارنة: عند `0 < α ≤ 1` إذا كان `^CD^{α}u ≥ ^CD^{α}v` على (0, T] و `u(0) ≥ v(0)` فإن `u ≥ v`. وعموماً تحدّ الحلول الدنيا والعليا لـ `^CD^{α}y = f(t, y)` الحل حين تحقق f شرط ليبشتز:'],
  '^CD^{α}v ≤ f(t, v),   v(0) ≤ ψ_0   ⇒   v ≤ y',
  ['Comparison gives positivity and bounds without solving: for example a population model with `f ≥ 0` at y = 0 keeps y ≥ 0.','والمقارنة تعطي الموجبية والحدود دون حل: فمثلاً نموذج سكاني فيه `f ≥ 0` عند y = 0 يبقي y ≥ 0.'],
],[
  Q('With `^CD^{α}y = 1 − y`, `y(0) = 0`, show `0 ≤ y ≤ 1` by comparison.','مع `^CD^{α}y = 1 − y` و `y(0) = 0` أثبت `0 ≤ y ≤ 1` بالمقارنة.',['v = 0 is a sub-solution and w = 1 a super-solution','v = 0 حل أدنى و w = 1 حل أعلى'],['^CD^{α}0 = 0 ≤ 1 − 0,   ^CD^{α}1 = 0 ≥ 1 − 1'],[['By the Gronwall inequality only','بمتباينة جرونوال فقط'],['It is false','خاطئ']]),
  Q('Check against the exact solution: is `1 − E_{1/2}(−1)` in [0, 1]?','تحقق مقابل الحل المضبوط: هل `1 − E_{1/2}(−1)` في [0, 1]؟',['Yes: it is about 0.5724','نعم: نحو 0.5724'],['1 − 0.4276'],[['No','لا'],['It equals 1','تساوي 1']]),
  Q('What does comparison say for `^CD^{α}u ≥ 0`, `u(0) ≥ 0`?','ماذا تقول المقارنة لـ `^CD^{α}u ≥ 0` و `u(0) ≥ 0`؟','u ≥ 0',['v = 0'],['u ≤ 0','u = 0',['Nothing','لا شيء']]),
  Q('For a logistic model `^CD^{α}y = y(1 − y)`, `y(0) = 0.2`, which bounds follow?','لنموذج لوجستي `^CD^{α}y = y(1 − y)` مع `y(0) = 0.2` أي الحدود تنتج؟','0 ≤ y ≤ 1',[['0 and 1 are equilibria, hence sub- and super-solutions.','0 و 1 نقطتا اتزان فهما حلان أدنى وأعلى.']],['y ≥ 1','y ≤ 0.2','0.2 ≤ y ≤ 2']),
]);

lesson('508',19,[
  ['With the Riemann–Liouville derivative the problem changes: `^{RL}D^{α}y = f`, with an initial condition on `D^{α−1}y` (for 0 < α < 1, the limit of `t^{1−α}y`):','مع مشتقة ريمان–ليوفيل تتغير المسألة: `^{RL}D^{α}y = f` بشرط ابتدائي على `D^{α−1}y` (عند 0 < α < 1، نهاية `t^{1−α}y`):'],
  '^{RL}D^{α}y = ^CD^{α}y + #f{y(0)}{Γ(1 − α)} t^{−α},     ^{RL}D^{1/2}1 = #f{t^{−1/2}}{#r{π}}',
  ['The RL derivative of a constant is not zero, and RL solutions are typically singular at t = 0 (like `t^{α−1}`). Caputo’s form accepts the physical initial values `y(0), y′(0)`, which is why it is used in the paper.','مشتقة ريمان–ليوفيل للثابت ليست صفراً، وحلول ريمان–ليوفيل شاذة عادة عند t = 0 (مثل `t^{α−1}`). وصيغة كابوتو تقبل القيم الابتدائية الفيزيائية `y(0) و y′(0)`، ولهذا تُستخدم في البحث.'],
],[
  Q('Compute `^{RL}D^{1/2}1`.','احسب `^{RL}D^{1/2}1`.','#f{1}{#r{πt}}',['#f{t^{−1/2}}{Γ(1/2)}'],['0','#f{2#r{t}}{#r{π}}','1']),
  Q('Solve `^{RL}D^{α}y = 0` for 0 < α < 1.','حل `^{RL}D^{α}y = 0` عند 0 < α < 1.','y = ct^{α−1}',['^{RL}D^{α}t^{α−1} = 0'],['y = c','y = ct^{α}','y = 0']),
  Q('Relate the two derivatives of `y = 1 + t`.','اربط المشتقتين لـ `y = 1 + t`.','^{RL}D^{α}y = ^CD^{α}y + #f{t^{−α}}{Γ(1 − α)}',['y(0) = 1'],['^{RL}D^{α}y = ^CD^{α}y','^{RL}D^{α}y = ^CD^{α}y + t^{−α}','^{RL}D^{α}y = ^CD^{α}y − #f{t^{α}}{Γ(1 + α)}']),
  Q('Why does the paper use Caputo derivatives?','لماذا يستخدم البحث مشتقات كابوتو؟',['They take the ordinary initial values `ψ_0`, `ψ_1`, which have a physical meaning','تأخذ القيم الابتدائية العادية `ψ_0` و `ψ_1` ذات المعنى الفيزيائي'],[['And Lemma 2.1 gives a clean integrated form.','والتمهيدية 2.1 تعطي صيغة تكاملية نظيفة.']],[['They are easier to compute','أسهل حساباً'],['RL derivatives do not exist','مشتقات ريمان–ليوفيل غير موجودة']]),
]);

lesson('508',20,[
  ['Worked problems combining Units 1 and 2: power rules, integrated forms, Mittag-Leffler solutions and the basic estimates.','مسائل محلولة تجمع الوحدتين 1 و 2: قواعد القوة والصيغ التكاملية وحلول ميتاج–ليفلر والتقديرات الأساسية.'],
  '^CD^{α}t^{β} = #f{Γ(β + 1)}{Γ(β + 1 − α)} t^{β−α},     y = ψ_0 E_{α}(λt^{α}),     |e| ≤ aE_{α}(Lt^{α})',
],[
  Q('Solve `^CD^{1/2}y = −y + 1`, `y(0) = 2`.','حل `^CD^{1/2}y = −y + 1` مع `y(0) = 2`.','y = 1 + E_{1/2}(−t^{1/2})',['z = y − 1:   ^CD^{1/2}z = −z,   z(0) = 1'],['y = 2E_{1/2}(−t^{1/2})','y = 1 − E_{1/2}(−t^{1/2})','y = 2 + E_{1/2}(−t^{1/2})']),
  Q('Compute `^CD^{3/2}t^3`.','احسب `^CD^{3/2}t^3`.','#f{8}{#r{π}} t^{3/2}',['#f{Γ(4)}{Γ(5/2)} = #f{6}{3#r{π}/4} = #f{8}{#r{π}}'],['#f{16}{#r{π}} t^{3/2}','#f{6}{#r{π}} t^{3/2}','#f{4}{#r{π}} t^{3/2}']),
  Q('Write the integrated form of `^CD^{1.5}y + y = 0`, `y(0) = 1`, `y′(0) = 0`.','اكتب الصيغة التكاملية لـ `^CD^{1.5}y + y = 0` مع `y(0) = 1` و `y′(0) = 0`.','y = 1 − D^{−1.5}y',['D^{−1.5}^CD^{1.5}y = y − 1 − 0·t'],['y = 1 + D^{−1.5}y','y = 1 + t − D^{−1.5}y','y = −D^{1.5}y']),
  Q('Give the solution of that problem.','أعط حل تلك المسألة.','y = E_{1.5}(−t^{1.5})',[['Damped oscillation between relaxation and waves.','اهتزاز متخامد بين الاسترخاء والموجات.']],['y = cos(t^{1.5})','y = e^{−t^{1.5}}','y = E_{1.5}(−t)']),
]);

/* ---- 508 · Unit 3 (lessons 21–30): linear equations in closed form;  Unit 4 (lessons 31–40): series and semi-analytic methods ---- */
lesson('508',21,[
  ['The Laplace transform turns a linear fractional equation into an algebraic one. For `n − 1 < α ≤ n`:','تحويل لابلاس يحوّل المعادلة الكسرية الخطية إلى معادلة جبرية. عند `n − 1 < α ≤ n`:'],
  'ℒ{^CD^{α}y} = s^{α}Y − Σ_{k=0}^{n−1} s^{α−k−1}y^{(k)}(0),     ℒ{t^{β}} = #f{Γ(β + 1)}{s^{β+1}},     ℒ{t^{β−1}E_{α,β}(λt^{α})} = #f{s^{α−β}}{s^{α} − λ}',
  ['Solve for Y, split into terms of the last form, and invert. The Mittag-Leffler functions play the role that exponentials play for ordinary equations.','حلّ لـ Y وجزّئه إلى حدود من الصورة الأخيرة ثم اعكس. ودوال ميتاج–ليفلر تؤدي الدور الذي تؤديه الأسيات للمعادلات العادية.'],
],[
  Q('Transform `^CD^{1/2}y = −y`, `y(0) = 1`, and solve for Y.','حوّل `^CD^{1/2}y = −y` مع `y(0) = 1` وحل لـ Y.','Y = #f{s^{−1/2}}{s^{1/2} + 1}',['s^{1/2}Y − s^{−1/2} = −Y'],['Y = #f{1}{s^{1/2} + 1}','Y = #f{s^{1/2}}{s + 1}','Y = #f{1}{s + 1}']),
  Q('Invert `Y = s^{α−1}/(s^{α} + 1)`.','اعكس `Y = s^{α−1}/(s^{α} + 1)`.','y = E_{α}(−t^{α})',['β = 1,   λ = −1'],['y = e^{−t}','y = E_{α}(−t)','y = t^{α−1}']),
  Q('Compute `ℒ{t^{1/2}}`.','احسب `ℒ{t^{1/2}}`.','#f{#r{π}}{2s^{3/2}}',['#f{Γ(3/2)}{s^{3/2}}'],['#f{1}{s^{3/2}}','#f{#r{π}}{s^{1/2}}','#f{2}{s^{3/2}}']),
  Q('How many initial values appear in `ℒ{^CD^{1.5}y}`?','كم قيمة ابتدائية تظهر في `ℒ{^CD^{1.5}y}`؟','2',['n = 2:   s^{0.5}y(0) + s^{−0.5}y′(0)'],['1','3','0']),
]);

lesson('508',22,[
  ['A single-term equation with a source, `^CD^{α}y = g`, needs no Mittag-Leffler function: `y = ψ_0 + D^{−α}g`. For powers the integral is explicit:','المعادلة وحيدة الحد مع مصدر `^CD^{α}y = g` لا تحتاج دالة ميتاج–ليفلر: `y = ψ_0 + D^{−α}g`. وللقوى يكون التكامل صريحاً:'],
  '^CD^{α}y = t^{β}   ⇒   y = ψ_0 + #f{Γ(β + 1)}{Γ(β + α + 1)} t^{β+α}',
  ['With a term λy the solution becomes a convolution with `t^{α−1}E_{α,α}(λt^{α})` (Lesson 27). Manufactured test problems are often built this way: choose y, compute g.','ومع حد λy يصبح الحل التفافاً مع `t^{α−1}E_{α,α}(λt^{α})` (الدرس 27). ومسائل الاختبار المصنّعة تُبنى غالباً بهذه الطريقة: اختر y واحسب g.'],
],[
  Q('Solve `^CD^{1/2}y = t`, `y(0) = 0`.','حل `^CD^{1/2}y = t` مع `y(0) = 0`.','y = #f{t^{3/2}}{Γ(5/2)} = #f{4t^{3/2}}{3#r{π}}',['#f{Γ(2)}{Γ(5/2)}t^{3/2}'],['y = #f{t^{3/2}}{Γ(3/2)}','y = #f{t^2}{2}','y = t^{1/2}']),
  Q('Solve `^CD^{0.8}y = 1`, `y(0) = 3`.','حل `^CD^{0.8}y = 1` مع `y(0) = 3`.','y = 3 + #f{t^{0.8}}{Γ(1.8)}',['D^{−0.8}1 = #f{t^{0.8}}{Γ(1.8)}'],['y = 3 + t^{0.8}','y = 3t^{0.8}','y = 3 + #f{t}{Γ(1.8)}']),
  Q('Which g gives the exact solution `y = t^2` for `^CD^{1/2}y = g`, `y(0) = 0`?','أي g تعطي الحل المضبوط `y = t^2` لـ `^CD^{1/2}y = g` مع `y(0) = 0`؟','g = #f{8}{3#r{π}} t^{3/2}',['#f{Γ(3)}{Γ(5/2)}t^{3/2}'],['g = 2t','g = #f{4}{3#r{π}} t^{3/2}','g = t^{3/2}']),
  Q('Evaluate `4/(3#r{π})`.','احسب `4/(3#r{π})`.','≈ 0.7523',['#f{1}{Γ(5/2)}'],['≈ 1.3293','≈ 0.5642','≈ 2.2568']),
]);

lesson('508',23,[
  ['The fractional relaxation equation `^CD^{α}y = −λy`, `y(0) = 1` has the solution `E_{α}(−λt^{α})`. Compared with `e^{−λt}` it decays faster at first and much more slowly later:','معادلة الاسترخاء الكسرية `^CD^{α}y = −λy` مع `y(0) = 1` حلها `E_{α}(−λt^{α})`. ومقارنة بـ `e^{−λt}` تتناقص أسرع أولاً وأبطأ بكثير لاحقاً:'],
  'E_{α}(−λt^{α}) ≈ 1 − #f{λt^{α}}{Γ(α + 1)}  (t → 0),     E_{α}(−λt^{α}) ≈ #f{t^{−α}}{λΓ(1 − α)}  (t → ∞)',
  ['This algebraic tail describes materials and processes with memory, such as viscoelastic relaxation and anomalous diffusion. For α = 1/2, `E_{1/2}(−t^{1/2}) = e^{t}erfc(#r{t})`.','وهذا الذيل الجبري يصف المواد والعمليات ذات الذاكرة مثل الاسترخاء اللزج المرن والانتشار الشاذ. وعند α = 1/2 يكون `E_{1/2}(−t^{1/2}) = e^{t}erfc(#r{t})`.'],
],[
  Q('Find the half-life (y = 1/2) for α = 1/2, λ = 1.','أوجد عمر النصف (y = 1/2) عند α = 1/2 و λ = 1.','t ≈ 0.591',['e^{t}erfc(#r{t}) = #f{1}{2}'],['t = ln 2 ≈ 0.693','t ≈ 0.25','t ≈ 1.39']),
  Q('Compare with α = 1.','قارن مع α = 1.','t = ln 2 ≈ 0.693',['e^{−t} = #f{1}{2}'],['t ≈ 0.591','t = 1','t ≈ 0.5']),
  Q('Give the large-t behaviour for α = 1/2, λ = 1.','أعط السلوك عند t الكبيرة لـ α = 1/2 و λ = 1.','#f{1}{#r{πt}}',['#f{t^{−1/2}}{Γ(1/2)}'],['e^{−t}','#f{1}{t}','e^{−#r{t}}']),
  Q('Why is the half-life shorter for α = 1/2, although the tail is much longer?','لماذا يكون عمر النصف أقصر عند α = 1/2 مع أن الذيل أطول بكثير؟',['The initial decay `t^{1/2}` is much faster than `t` for small t','التناقص الابتدائي `t^{1/2}` أسرع بكثير من `t` لـ t صغيرة'],[['Then the memory slows the decay down.','ثم تبطئ الذاكرة التناقص.']],[['It is not shorter','ليس أقصر'],['Because Γ(1/2) is large','لأن Γ(1/2) كبيرة']]),
]);

lesson('508',24,[
  ['For `1 < α < 2` the equation `^CD^{α}y = −y`, `y(0) = 1`, `y′(0) = 0` describes damped oscillation between relaxation (α = 1) and the harmonic oscillator (α = 2):','عند `1 < α < 2` تصف المعادلة `^CD^{α}y = −y` مع `y(0) = 1` و `y′(0) = 0` اهتزازاً متخامداً بين الاسترخاء (α = 1) والمذبذب التوافقي (α = 2):'],
  'y = E_{α}(−t^{α}),     E_2(−t^2) = cos t',
  ['The solution has finitely many zeros and then decays algebraically. With `y′(0) = ψ_1` the term `ψ_1 t E_{α,2}(−t^{α})` is added.','والحل له عدد منته من الأصفار ثم يتناقص جبرياً. ومع `y′(0) = ψ_1` يُضاف الحد `ψ_1 t E_{α,2}(−t^{α})`.'],
],[
  Q('What is `E_2(−t^2)`?','ما `E_2(−t^2)`؟','cos t',['Σ #f{(−1)^k t^{2k}}{(2k)!}'],['e^{−t^2}','cosh t','sin t']),
  Q('Where is the first zero of `E_{1.8}(−t^{1.8})`?','أين أول صفر لـ `E_{1.8}(−t^{1.8})`؟','t ≈ 1.560',[['Slightly earlier than the zero `π/2 ≈ 1.571` of the cosine.','قبل صفر جيب التمام `π/2 ≈ 1.571` بقليل.']],['t = #f{π}{2} ≈ 1.571','t ≈ 1','t ≈ 3.14']),
  Q('Compare `E_{1.8}(−1)` with `cos 1`.','قارن `E_{1.8}(−1)` بـ `cos 1`.','0.4742  <  0.5403',[['Damping lowers the amplitude.','التخامد يخفض السعة.']],['0.4742  >  0.5403',['They are equal','متساويتان'],'0.3679  <  0.5403']),
  Q('How many initial conditions does the oscillation equation need?','كم شرطاً ابتدائياً تحتاج معادلة الاهتزاز؟','2',['⌈α⌉ = 2,   1 < α < 2'],['1','3','0']),
]);

lesson('508',25,[
  ['Multi-term equations `Σ a_i ^CD^{α_i}y = g` are transformed term by term. A useful check: functions annihilated by every term solve the homogeneous equation. For `y′ + ^CD^{1/2}y = 0`, `y(0) = 1`:','المعادلات متعددة الحدود `Σ a_i ^CD^{α_i}y = g` تُحوّل حداً حداً. وفحص مفيد: الدوال التي تعدمها كل الحدود تحل المعادلة المتجانسة. فلـ `y′ + ^CD^{1/2}y = 0` مع `y(0) = 1`:'],
  'sY − 1 + s^{1/2}Y − s^{−1/2} = 0   ⇒   Y = #f{1 + s^{−1/2}}{s + s^{1/2}} = #f{1}{s}   ⇒   y = 1',
  ['Indeed the Caputo derivatives of a constant vanish. In general the transform is a rational function of `s^{λ}` with λ the gcd of the orders, and partial fractions give sums of Mittag-Leffler functions.','وبالفعل تنعدم مشتقات كابوتو للثابت. وعموماً يكون التحويل دالة كسرية في `s^{λ}` حيث λ القاسم المشترك الأكبر للرتب، والكسور الجزئية تعطي مجاميع من دوال ميتاج–ليفلر.'],
],[
  Q('Why is `y = 1` the solution of `y′ + ^CD^{1/2}y = 0`, `y(0) = 1`?','لماذا يكون `y = 1` حل `y′ + ^CD^{1/2}y = 0` مع `y(0) = 1`؟',['Both terms vanish for a constant, and the initial value matches','الحدان ينعدمان للثابت والقيمة الابتدائية مطابقة'],['^CD^{1/2}1 = 0,   (1)′ = 0'],[['By coincidence','مصادفة'],['It is not','ليس حلاً']]),
  Q('Solve `y′ + ^CD^{1/2}y = 1`, `y(0) = 0`, for Y.','حل `y′ + ^CD^{1/2}y = 1` مع `y(0) = 0` لـ Y.','Y = #f{1}{s(s + s^{1/2})}',['(s + s^{1/2})Y = #f{1}{s}'],['Y = #f{1}{s + s^{1/2}}','Y = #f{1}{s^2}','Y = #f{s^{1/2}}{s + 1}']),
  Q('Which variable makes the transform of `^CD^{0.6}y + ^CD^{0.3}y + y` a polynomial?','أي متغير يجعل تحويل `^CD^{0.6}y + ^CD^{0.3}y + y` كثيرة حدود؟','σ = s^{0.3}',['s^{0.6} + s^{0.3} + 1 = σ^2 + σ + 1'],['σ = s','σ = s^{0.6}','σ = s^{0.1}']),
  Q('What does a partial-fraction term `1/(σ − r)`, `σ = s^{λ}`, give after inversion?','ماذا يعطي حد الكسور الجزئية `1/(σ − r)` حيث `σ = s^{λ}` بعد العكس؟','t^{λ−1}E_{λ,λ}(rt^{λ})',['ℒ{t^{β−1}E_{α,β}(λt^{α})} = #f{s^{α−β}}{s^{α} − λ},   α = β = λ'],['e^{rt}','E_{λ}(rt)','t^{λ}']),
]);

lesson('508',26,[
  ['The Bagley–Torvik equation models a plate moving in a viscous fluid:','معادلة باجلي–تورفيك تنمذج صفيحة تتحرك في مائع لزج:'],
  'A y″ + B ^CD^{3/2}y + C y = f(t),     y(0) = ψ_0,   y′(0) = ψ_1',
  ['It is the classic test of numerical methods for multi-term equations. With A = B = C = 1, f = 1 + t, ψ_0 = ψ_1 = 1 the exact solution is `y = 1 + t`, since `y″ = 0` and `^CD^{3/2}(1 + t) = 0`.','وهي الاختبار الكلاسيكي للطرق العددية للمعادلات متعددة الحدود. ومع A = B = C = 1 و f = 1 + t و ψ_0 = ψ_1 = 1 يكون الحل المضبوط `y = 1 + t` لأن `y″ = 0` و `^CD^{3/2}(1 + t) = 0`.'],
],[
  Q('Check `y = 1 + t` for `y″ + ^CD^{3/2}y + y = 1 + t`.','تحقق من `y = 1 + t` لـ `y″ + ^CD^{3/2}y + y = 1 + t`.','0 + 0 + (1 + t) = 1 + t',[['`^CD^{3/2}` of a linear function is 0.','`^CD^{3/2}` لدالة خطية صفر.']],['0 + 1 + (1 + t)','1 + 0 + (1 + t)','0 + #f{t^{−1/2}}{Γ(1/2)} + (1 + t)']),
  Q('Why is `^CD^{3/2}(1 + t) = 0`?','لماذا يكون `^CD^{3/2}(1 + t) = 0`؟',['The Caputo derivative of order 3/2 differentiates twice first, and `(1 + t)″ = 0`','مشتقة كابوتو من الرتبة 3/2 تشتق مرتين أولاً و `(1 + t)″ = 0`'],['^CD^{3/2}y = D^{−1/2}y″'],[['Because 3/2 > 1','لأن 3/2 > 1'],['It is not zero','ليست صفراً']]),
  Q('Which λ would a spectral method use for the Bagley–Torvik equation with a general f?','أي λ تستخدمها طريقة طيفية لمعادلة باجلي–تورفيك مع f عامة؟','λ = #f{1}{2}',['gcd(2, #f{3}{2}) = #f{1}{2}'],['λ = 1','λ = #f{3}{2}','λ = #f{1}{4}']),
  Q('Write the integrated form with `D^{−2}`.','اكتب الصيغة التكاملية مع `D^{−2}`.','y − ψ_0 − tψ_1 + D^{−1/2}(y − ψ_0 − tψ_1) + D^{−2}y = D^{−2}f',['A = B = C = 1'],['y + D^{−1/2}y + D^{−2}y = D^{−2}f','y + D^{3/2}y + y = f','y − ψ_0 + D^{−1/2}y = D^{−2}f']),
]);

lesson('508',27,[
  ['The Green’s function of `^CD^{α}y − λy = g` (0 < α ≤ 1) is `G(t) = t^{α−1}E_{α,α}(λt^{α})`, so','دالة جرين لـ `^CD^{α}y − λy = g` (0 < α ≤ 1) هي `G(t) = t^{α−1}E_{α,α}(λt^{α})` فيكون'],
  'y(t) = ψ_0E_{α}(λt^{α}) + ∫_0^t G(t − s) g(s) ds',
  ['G is the response to an impulse; its Laplace transform is `1/(s^{α} − λ)`. For λ = 0 it is the Riemann–Liouville kernel `t^{α−1}/Γ(α)`.','و G هي الاستجابة لدفعة، وتحويل لابلاس لها `1/(s^{α} − λ)`. وعند λ = 0 هي نواة ريمان–ليوفيل `t^{α−1}/Γ(α)`.'],
],[
  Q('What is the Laplace transform of G?','ما تحويل لابلاس لـ G؟','#f{1}{s^{α} − λ}',['α = β:   #f{s^{0}}{s^{α} − λ}'],['#f{s^{α−1}}{s^{α} − λ}','#f{1}{s − λ}','#f{s^{α}}{s^{α} − λ}']),
  Q('Reduce G to λ = 0.','اختصر G إلى λ = 0.','#f{t^{α−1}}{Γ(α)}',['E_{α,α}(0) = #f{1}{Γ(α)}'],['t^{α−1}','#f{t^{α}}{Γ(α + 1)}','1']),
  Q('Evaluate `G(1)` for α = 1/2, λ = −1.','احسب `G(1)` عند α = 1/2 و λ = −1.','E_{1/2,1/2}(−1) ≈ 0.1366',['1^{−1/2}E_{1/2,1/2}(−1)'],['≈ 0.4276','≈ 0.5642','≈ 1']),
  Q('Reduce G to α = 1.','اختصر G إلى α = 1.','e^{λt}',['E_{1,1}(λt) = e^{λt}'],['t e^{λt}','1','E_1(λ)']),
]);

lesson('508',28,[
  ['A sequential fractional derivative applies several derivatives in turn, such as `^CD^{1/2}(^CD^{1/2}y)`. It equals `y′` only if the inner result has no singular part at 0:','المشتقة الكسرية المتتابعة تطبق عدة مشتقات متتالية مثل `^CD^{1/2}(^CD^{1/2}y)`، وتساوي `y′` فقط إذا لم يكن للنتيجة الداخلية جزء شاذ عند 0:'],
  'y = t:   ^CD^{1/2}t = #f{2#r{t}}{#r{π}},   ^CD^{1/2}#f{2#r{t}}{#r{π}} = 1 = y′',
  ['But for `y = t^{1/2}`: `^CD^{1/2}t^{1/2} = Γ(3/2)` is constant, the second derivative gives 0, while `y′ = t^{−1/2}/2`. Equations written with sequential derivatives therefore need their own initial conditions.','لكن لـ `y = t^{1/2}`: تكون `^CD^{1/2}t^{1/2} = Γ(3/2)` ثابتاً، والمشتقة الثانية تعطي 0، بينما `y′ = t^{−1/2}/2`. ولهذا تحتاج المعادلات المكتوبة بمشتقات متتابعة شروطها الابتدائية الخاصة.'],
],[
  Q('Compute `^CD^{1/2}t^{1/2}`.','احسب `^CD^{1/2}t^{1/2}`.','Γ(#f{3}{2}) = #f{#r{π}}{2}',['#f{Γ(3/2)}{Γ(1)}t^{0}'],['0','#f{1}{2}t^{−1/2}','1']),
  Q('Is `^CD^{1/2}^CD^{1/2}t^{1/2}` equal to `(t^{1/2})′`?','هل `^CD^{1/2}^CD^{1/2}t^{1/2}` تساوي `(t^{1/2})′`؟',['No: it is 0, while the derivative is `t^{−1/2}/2`','لا: هي 0 بينما المشتقة `t^{−1/2}/2`'],[['The Caputo derivative of a constant vanishes.','مشتقة كابوتو للثابت تنعدم.']],[['Yes','نعم'],['Only at t = 1','فقط عند t = 1']]),
  Q('Check `^CD^{1/2}(2#r{t}/#r{π}) = 1`.','تحقق من `^CD^{1/2}(2#r{t}/#r{π}) = 1`.','#f{2}{#r{π}}·#f{Γ(3/2)}{Γ(1)} = 1',['Γ(3/2) = #f{#r{π}}{2}'],['#f{2}{#r{π}}·Γ(3/2) = #f{1}{2}','#f{2}{#r{π}}','0']),
  Q('When does `^CD^{α}^CD^{β}y = ^CD^{α+β}y` hold (α + β ≤ 1)?','متى تصح `^CD^{α}^CD^{β}y = ^CD^{α+β}y` (α + β ≤ 1)؟',['When y is smooth enough that no singular term appears, for example y ∈ C^1','حين تكون y ملساء بما يكفي فلا يظهر حد شاذ، مثل y ∈ C^1'],[['It fails for `t^{1/2}`.','تفشل لـ `t^{1/2}`.']],[['Always','دائماً'],['Never','أبداً']]),
]);

lesson('508',29,[
  ['A linear system `^CD^{α}Y = AY`, `Y(0) = Y_0`, has the solution `Y = E_{α}(At^{α})Y_0`, with the matrix Mittag-Leffler function `E_{α}(At^{α}) = Σ A^k t^{kα}/Γ(kα + 1)`. For diagonalizable `A = VΛV^{−1}`:','النظام الخطي `^CD^{α}Y = AY` مع `Y(0) = Y_0` حله `Y = E_{α}(At^{α})Y_0` بدالة ميتاج–ليفلر المصفوفية `E_{α}(At^{α}) = Σ A^k t^{kα}/Γ(kα + 1)`. وللمصفوفة القابلة للتقطير `A = VΛV^{−1}`:'],
  'E_{α}(At^{α}) = V diag(E_{α}(λ_it^{α})) V^{−1}',
  ['Each eigenvalue gives its own Mittag-Leffler mode. Stability is decided by the eigenvalues in a sector of the complex plane (Matignon’s theorem, Unit 5).','وكل قيمة ذاتية تعطي نمطها من ميتاج–ليفلر. والاستقرار تحدده القيم الذاتية في قطاع من المستوى المركب (نظرية ماتينيون، الوحدة 5).'],
],[
  Q('Solve `^CD^{α}Y = diag(−1, −2)Y`, `Y(0) = (1, 1)`.','حل `^CD^{α}Y = diag(−1, −2)Y` مع `Y(0) = (1, 1)`.','Y = (E_{α}(−t^{α}),  E_{α}(−2t^{α}))',[['Two decoupled equations.','معادلتان منفصلتان.']],['Y = (e^{−t},  e^{−2t})','Y = (E_{α}(−t),  E_{α}(−2t))','Y = E_{α}(−3t^{α})(1, 1)']),
  Q('What is `E_1(At)`?','ما `E_1(At)`؟','e^{At}',['Σ #f{A^k t^k}{k!}'],['A e^{t}','I + At','E_1(A)t']),
  Q('For α = 1, `A = #m{0, 1 ;; −1, 0}`, what is `E_1(At)`?','عند α = 1 و `A = #m{0, 1 ;; −1, 0}` ما `E_1(At)`؟','#m{cos t, sin t ;; −sin t, cos t}',['e^{At}:   A^2 = −I'],['#m{cos t, −sin t ;; sin t, cos t}','#m{e^{t}, 0 ;; 0, e^{−t}}','I + At']),
  Q('Which part of A decides how each mode behaves?','أي جزء من A يحدد سلوك كل نمط؟',['Its eigenvalues `λ_i`, through `E_{α}(λ_it^{α})`','قيمها الذاتية `λ_i` عبر `E_{α}(λ_it^{α})`'],[['The eigenvectors only mix the modes.','المتجهات الذاتية تخلط الأنماط فقط.']],[['Its trace only','أثرها فقط'],['Its determinant only','محددها فقط']]),
]);

lesson('508',30,[
  ['Worked problems for Unit 3: Laplace transforms, relaxation and oscillation, multi-term equations and Green’s functions.','مسائل محلولة للوحدة 3: تحويلات لابلاس والاسترخاء والاهتزاز والمعادلات متعددة الحدود ودوال جرين.'],
  'ℒ{t^{β−1}E_{α,β}(λt^{α})} = #f{s^{α−β}}{s^{α} − λ}',
],[
  Q('Solve `^CD^{α}y = −y + t^{α}`, `y(0) = 0`, by the Laplace transform.','حل `^CD^{α}y = −y + t^{α}` مع `y(0) = 0` بتحويل لابلاس.','y = Γ(α + 1)t^{2α}E_{α,2α+1}(−t^{α})',['Y = #f{Γ(α + 1)}{s^{α+1}(s^{α} + 1)} = Γ(α + 1)#f{s^{α−(2α+1)}}{s^{α} + 1}'],['y = t^{α}E_{α}(−t^{α})','y = Γ(α + 1)E_{α}(−t^{α})','y = #f{t^{2α}}{Γ(2α + 1)}']),
  Q('Check the first term of that solution for small t.','تحقق من الحد الأول لذلك الحل لـ t صغيرة.','#f{Γ(α + 1)}{Γ(2α + 1)}t^{2α}',['y ≈ D^{−α}t^{α}'],['t^{2α}','Γ(α + 1)t^{2α}','#f{t^{α}}{Γ(α + 1)}']),
  Q('Solve `y″ + ^CD^{3/2}y + y = 1`, `y(0) = 1`, `y′(0) = 0`.','حل `y″ + ^CD^{3/2}y + y = 1` مع `y(0) = 1` و `y′(0) = 0`.','y = 1',['0 + 0 + 1 = 1'],['y = 1 + t','y = cos t','y = E_{3/2}(−t^{3/2})']),
  Q('What transform does `^CD^{1/2}y + y = 0`, `y(0) = 2` have?','ما تحويل `^CD^{1/2}y + y = 0` مع `y(0) = 2`؟','Y = #f{2s^{−1/2}}{s^{1/2} + 1}',['s^{1/2}Y − 2s^{−1/2} + Y = 0'],['Y = #f{2}{s^{1/2} + 1}','Y = #f{s^{−1/2}}{s^{1/2} + 2}','Y = #f{2}{s + 1}']),
]);

lesson('508',31,[
  ['For linear equations with polynomial or power data, the solution can be sought as a power series in `t^{α}`. For `^CD^{α}y = λy`:','للمعادلات الخطية ذات المعطيات من كثيرات الحدود أو القوى يمكن البحث عن الحل متسلسلة قوى في `t^{α}`. فلـ `^CD^{α}y = λy`:'],
  'y = Σ c_k t^{kα},     c_{k+1} = λ c_k #f{Γ(kα + 1)}{Γ((k + 1)α + 1)}',
  ['Substituting and matching powers gives a recurrence for the coefficients, here giving `c_k = ψ_0λ^k/Γ(kα + 1)`, the Mittag-Leffler series. For mixed powers use `t^{j+kα}` or the variable `s = t^{λ}`.','والتعويض ومطابقة القوى يعطيان علاقة تكرار للمعاملات، وهنا `c_k = ψ_0λ^k/Γ(kα + 1)` أي متسلسلة ميتاج–ليفلر. وللقوى المختلطة استخدم `t^{j+kα}` أو المتغير `s = t^{λ}`.'],
],[
  Q('Compute `c_1` and `c_2` for α = 1/2, λ = −1, `c_0 = 1`.','احسب `c_1` و `c_2` عند α = 1/2 و λ = −1 و `c_0 = 1`.','c_1 = −#f{2}{#r{π}},   c_2 = 1',['c_1 = −#f{Γ(1)}{Γ(3/2)},   c_2 = −c_1#f{Γ(3/2)}{Γ(2)}'],['c_1 = −1,   c_2 = 1','c_1 = −#f{2}{#r{π}},   c_2 = #f{1}{2}','c_1 = #f{2}{#r{π}},   c_2 = 1']),
  Q('Why match the powers `t^{kα}` and not `t^k`?','لماذا نطابق القوى `t^{kα}` لا `t^k`؟',['`^CD^{α}` lowers each power by α, so the solution lives in powers of `t^{α}`','`^CD^{α}` تخفض كل قوة بـ α فيعيش الحل في قوى `t^{α}`'],['^CD^{α}t^{kα} ∝ t^{(k−1)α}'],[['For convenience only','للتسهيل فقط'],['Because t < 1','لأن t < 1']]),
  Q('Which basis suits `^CD^{1/2}y = −y + t`?','أي أساس يناسب `^CD^{1/2}y = −y + t`؟','t^{k/2},   k = 0, 1, 2, …',[['`t = (t^{1/2})^2` fits the same powers.','`t = (t^{1/2})^2` تناسب القوى نفسها.']],['t^k','t^{k/3}','e^{−kt}']),
  Q('Reduce the recurrence to α = 1.','اختصر علاقة التكرار إلى α = 1.','c_{k+1} = #f{λc_k}{k + 1}',['#f{Γ(k + 1)}{Γ(k + 2)} = #f{1}{k + 1}'],['c_{k+1} = λc_k','c_{k+1} = #f{c_k}{λ(k + 1)}','c_{k+1} = (k + 1)λc_k']),
]);

lesson('508',32,[
  ['The Adomian decomposition method writes `y = Σ y_n` and splits a nonlinear term into Adomian polynomials `N(y) = Σ A_n`. For `y = ψ_0 + D^{−α}(Ly + N(y))`:','طريقة تحليل أدوميان تكتب `y = Σ y_n` وتجزئ الحد غير الخطي إلى كثيرات أدوميان `N(y) = Σ A_n`. فلـ `y = ψ_0 + D^{−α}(Ly + N(y))`:'],
  'y_0 = ψ_0,     y_{n+1} = D^{−α}(Ly_n + A_n),     A_0 = N(y_0),   A_1 = N′(y_0)y_1,   A_2 = N′(y_0)y_2 + #f{1}{2}N″(y_0)y_1^2',
  ['For linear problems ADM reproduces the Picard series. For nonlinear ones it gives a series that converges near t = 0, often slowly further out.','وللمسائل الخطية تعيد ADM متسلسلة بيكار، ولغير الخطية تعطي متسلسلة تتقارب قرب t = 0 وغالباً ببطء بعيداً عنه.'],
],[
  Q('For `N(y) = y^2`, compute `A_0` and `A_1`.','لـ `N(y) = y^2` احسب `A_0` و `A_1`.','A_0 = y_0^2,   A_1 = 2y_0y_1',['N′(y) = 2y'],['A_0 = y_0,   A_1 = y_1^2','A_0 = 2y_0,   A_1 = 2y_1','A_0 = y_0^2,   A_1 = y_1^2']),
  Q('For `^CD^{α}y = −y^2`, `y(0) = 1`, compute `y_1`.','لـ `^CD^{α}y = −y^2` مع `y(0) = 1` احسب `y_1`.','y_1 = −#f{t^{α}}{Γ(α + 1)}',['y_1 = D^{−α}(−A_0) = −D^{−α}1'],['y_1 = −t^{α}','y_1 = #f{t^{α}}{Γ(α + 1)}','y_1 = −#f{t^{2α}}{Γ(2α + 1)}']),
  Q('Compute `y_2` for the same problem.','احسب `y_2` للمسألة نفسها.','y_2 = #f{2t^{2α}}{Γ(2α + 1)}',['A_1 = 2y_0y_1 = −#f{2t^{α}}{Γ(α + 1)},   y_2 = −D^{−α}A_1'],['y_2 = #f{t^{2α}}{Γ(2α + 1)}','y_2 = −#f{2t^{2α}}{Γ(2α + 1)}','y_2 = #f{2t^{α}}{Γ(α + 1)}']),
  Q('Check against α = 1, where `y = 1/(1 + t) = 1 − t + t^2 − …`.','تحقق مقابل α = 1 حيث `y = 1/(1 + t) = 1 − t + t^2 − …`.','y_0 + y_1 + y_2 = 1 − t + t^2',['#f{2t^2}{Γ(3)} = t^2'],['1 − t + 2t^2','1 − t + #f{t^2}{2}','1 + t + t^2']),
]);

lesson('508',33,[
  ['The variational iteration method builds a correction functional with a Lagrange multiplier. For fractional equations a common form is','طريقة التكرار التغايري تبني دالة تصحيح بمضاعف لاغرانج. وللمعادلات الكسرية صيغة شائعة هي'],
  'y_{n+1}(t) = y_n(t) − D^{−α}[^CD^{α}y_n − f(·, y_n)](t)',
  ['With this choice of multiplier the iteration is exactly Picard iteration on the integrated form, written as a correction: each step removes the residual of the previous approximation. Its convergence follows from Unit 2.','ومع هذا الاختيار للمضاعف يكون التكرار هو تكرار بيكار على الصيغة التكاملية مكتوباً تصحيحاً: كل خطوة تزيل باقي التقريب السابق. وتقاربه ينتج من الوحدة 2.'],
],[
  Q('Show that the correction step equals `y_{n+1} = ψ_0 + D^{−α}f(·, y_n)`.','بيّن أن خطوة التصحيح تساوي `y_{n+1} = ψ_0 + D^{−α}f(·, y_n)`.','y_n − (y_n − ψ_0) + D^{−α}f = ψ_0 + D^{−α}f',['D^{−α}^CD^{α}y_n = y_n − ψ_0'],['y_{n+1} = y_n + D^{−α}f','y_{n+1} = D^{−α}f','y_{n+1} = ψ_0 − D^{−α}f']),
  Q('For `^CD^{α}y = −y`, `y_0 = 1`, what is `y_1`?','لـ `^CD^{α}y = −y` مع `y_0 = 1` ما `y_1`؟','1 − #f{t^{α}}{Γ(α + 1)}',['y_1 = 1 + D^{−α}(−1)'],['1 − t^{α}','1 + #f{t^{α}}{Γ(α + 1)}','e^{−t}']),
  Q('What does each VIM step remove?','ماذا تزيل كل خطوة VIM؟',['The residual `^CD^{α}y_n − f(·, y_n)` of the previous approximation, integrated','باقي التقريب السابق `^CD^{α}y_n − f(·, y_n)` بعد تكامله'],[['A residual-driven correction.','تصحيح يقوده الباقي.']],[['Nothing','لا شيء'],['The initial value','القيمة الابتدائية']]),
  Q('Why is convergence of this VIM form guaranteed for Lipschitz f?','لماذا يُضمن تقارب صيغة VIM هذه لـ f التي تحقق شرط ليبشتز؟',['It is Picard iteration, whose error is bounded by `(LT^{α})^k/Γ(kα + 1)`','هي تكرار بيكار وخطؤه محدود بـ `(LT^{α})^k/Γ(kα + 1)`'],[['Lesson 13.','الدرس 13.']],[['Because the multiplier is optimal','لأن المضاعف أمثل'],['It is not','ليس مضموناً']]),
]);

lesson('508',34,[
  ['The homotopy perturbation method embeds the problem in a family with a parameter p ∈ [0, 1] and expands in powers of p:','طريقة اضطراب الهوموتوبي تضمّن المسألة في عائلة بوسيط p ∈ [0, 1] وتنشر بقوى p:'],
  '^CD^{α}v = p f(t, v),   v = v_0 + pv_1 + p^2v_2 + …,   y = v|_{p=1}',
  ['Collecting equal powers of p gives `^CD^{α}v_0 = 0`, `^CD^{α}v_1 = f`-terms of order 0, and so on: the same terms as ADM. The method is a reorganization of the series, not a new source of accuracy.','وجمع القوى المتساوية لـ p يعطي `^CD^{α}v_0 = 0` و `^CD^{α}v_1` = حدود f من الرتبة 0 وهكذا: الحدود نفسها كما في ADM. فالطريقة إعادة ترتيب للمتسلسلة لا مصدر جديد للدقة.'],
],[
  Q('For `^CD^{α}v = −pv`, `v(0) = 1`, what equation does `v_1` satisfy?','لـ `^CD^{α}v = −pv` مع `v(0) = 1` أي معادلة تحققها `v_1`؟','^CD^{α}v_1 = −v_0,   v_1(0) = 0',['p^1:   ^CD^{α}v_1 = −v_0'],['^CD^{α}v_1 = −v_1','^CD^{α}v_1 = 0','v_1 = −v_0']),
  Q('Solve for `v_1` with `v_0 = 1`.','حل لـ `v_1` مع `v_0 = 1`.','v_1 = −#f{t^{α}}{Γ(α + 1)}',['v_1 = −D^{−α}1'],['v_1 = −t^{α}','v_1 = 1','v_1 = #f{t^{α}}{Γ(α + 1)}']),
  Q('Which other method gives the same terms here?','أي طريقة أخرى تعطي الحدود نفسها هنا؟',['ADM, and Picard iteration','ADM وتكرار بيكار'],[['For linear problems all these series coincide.','للمسائل الخطية تتطابق كل هذه المتسلسلات.']],[['Finite differences','الفروق المحدودة'],['The L1 scheme','مخطط L1'],['Galerkin','جاليركن']]),
  Q('What value of p recovers the original equation?','أي قيمة لـ p تعيد المعادلة الأصلية؟','p = 1',['^CD^{α}v = f(t, v)'],['p = 0','p = #f{1}{2}','p = α']),
]);

lesson('508',35,[
  ['The homotopy analysis method adds a convergence-control parameter ħ to the deformation equations. The m-th order equation for linear operator `ℒ = ^CD^{α}` reads','طريقة تحليل الهوموتوبي تضيف وسيط تحكم في التقارب ħ إلى معادلات التشوه. ومعادلة الرتبة m لمؤثر خطي `ℒ = ^CD^{α}` هي'],
  'ℒ[y_m − χ_m y_{m−1}] = ħ R_m(y_0, …, y_{m−1}),     χ_1 = 0,   χ_m = 1 (m ≥ 2)',
  ['With ħ = −1 HAM reduces to HPM. Other values of ħ change the series and can enlarge the region of convergence; ħ is chosen by minimizing the residual or from an «ħ-curve».','ومع ħ = −1 تؤول HAM إلى HPM. والقيم الأخرى لـ ħ تغيّر المتسلسلة وقد توسّع منطقة التقارب، وتُختار ħ بتصغير الباقي أو من «منحنى ħ».'],
],[
  Q('Which ħ reduces HAM to HPM?','أي ħ تؤول بـ HAM إلى HPM؟','ħ = −1',[['The standard choice in many papers.','الاختيار المعتاد في بحوث كثيرة.']],['ħ = 0','ħ = 1','ħ = α']),
  Q('What does ħ = 0 give?','ماذا تعطي ħ = 0؟',['No correction: every `y_m` (m ≥ 1) is zero and y stays `y_0`','لا تصحيح: كل `y_m` (m ≥ 1) صفر وتبقى y هي `y_0`'],['ℒ[y_1] = 0,   y_1(0) = 0'],[['The exact solution','الحل المضبوط'],['HPM','HPM']]),
  Q('How is ħ usually chosen?','كيف تُختار ħ عادة؟',['From the flat part of an ħ-curve or by minimizing a residual norm','من الجزء المستوي في منحنى ħ أو بتصغير معيار الباقي'],[['It is a numerical tuning parameter.','وسيط ضبط عددي.']],[['ħ = Planck’s constant','ħ ثابت بلانك'],['Always ħ = 1','دائماً ħ = 1']]),
  Q('What is the main advantage of HAM over HPM?','ما الميزة الرئيسة لـ HAM على HPM؟',['The extra parameter can extend the interval where the series converges','الوسيط الإضافي قد يمد المجال الذي تتقارب فيه المتسلسلة'],[['At the cost of choosing ħ.','على حساب اختيار ħ.']],[['It gives exact solutions','يعطي حلولاً مضبوطة'],['It needs no series','لا يحتاج متسلسلة']]),
]);

lesson('508',36,[
  ['The fractional differential transform method represents y by coefficients of powers `t^{k/q}` (with α = p/q). For `^CD^{α}y = λy` written in powers of `t^{α}`:','طريقة التحويل التفاضلي الكسري تمثل y بمعاملات القوى `t^{k/q}` (مع α = p/q). ولـ `^CD^{α}y = λy` مكتوبة بقوى `t^{α}`:'],
  'Y(k + 1) = #f{Γ(kα + 1)}{Γ((k + 1)α + 1)} λY(k),     y = Σ Y(k)t^{kα}',
  ['Products of functions become convolutions of their coefficient sequences, so nonlinear terms such as `y^2` are handled by `Σ_m Y(m)Y(k − m)`. The method is the power-series method of Lesson 31 with a systematic notation.','وضروب الدوال تصبح التفافات لمتتاليات معاملاتها، فتُعالج الحدود غير الخطية مثل `y^2` بـ `Σ_m Y(m)Y(k − m)`. والطريقة هي طريقة متسلسلة القوى في الدرس 31 بتدوين منهجي.'],
],[
  Q('What is the transform of `y^2` at index k?','ما تحويل `y^2` عند الدليل k؟','Σ_{m=0}^{k} Y(m)Y(k − m)',[['The Cauchy product of the coefficients.','ضرب كوشي للمعاملات.']],['Y(k)^2','2Y(k)','Y(2k)']),
  Q('With Y(0) = 1, λ = −1, α = 1/2, compute Y(1).','مع Y(0) = 1 و λ = −1 و α = 1/2 احسب Y(1).','−#f{2}{#r{π}}',['−#f{Γ(1)}{Γ(3/2)}'],['−1','#f{2}{#r{π}}','−#f{#r{π}}{2}']),
  Q('For `^CD^{α}y = −y^2`, `Y(0) = 1`, compute Y(1).','لـ `^CD^{α}y = −y^2` مع `Y(0) = 1` احسب Y(1).','−#f{1}{Γ(α + 1)}',['Y(1) = −#f{Γ(1)}{Γ(α + 1)}Y(0)^2'],['−1','−Γ(α + 1)','1']),
  Q('Which earlier method is DTM equivalent to?','لأي طريقة سابقة تكافئ DTM؟',['The power-series method in `t^{α}`, with products as convolutions','طريقة متسلسلة القوى في `t^{α}` مع الضروب التفافاتٍ'],[['Lesson 31.','الدرس 31.']],[['Finite differences','الفروق المحدودة'],['The L1 scheme','مخطط L1']]),
]);

lesson('508',37,[
  ['The residual power series method writes `y = Σ c_k t^{kα}/Γ(kα + 1)`, forms the residual of the k-th truncation, and fixes `c_k` by requiring `^CD^{(k−1)α}` of the residual to vanish at t = 0:','طريقة متسلسلة القوى للباقي تكتب `y = Σ c_k t^{kα}/Γ(kα + 1)` وتكوّن باقي القطع k وتحدد `c_k` باشتراط انعدام `^CD^{(k−1)α}` للباقي عند t = 0:'],
  'Res_k(t) = ^CD^{α}y_k − f(t, y_k),     ^CD^{(k−1)α}Res_k(0) = 0',
  ['For linear problems it gives the same coefficients as the power-series method. Its appeal is that the conditions are local algebraic equations, which also work for nonlinear f.','وللمسائل الخطية تعطي المعاملات نفسها كطريقة متسلسلة القوى. وميزتها أن الشروط معادلات جبرية محلية تصلح لـ f غير الخطية أيضاً.'],
],[
  Q('For `^CD^{α}y = −y`, `c_0 = 1`, the condition `Res_1(0) = 0` gives which `c_1`?','لـ `^CD^{α}y = −y` مع `c_0 = 1` أي `c_1` يعطيها الشرط `Res_1(0) = 0`؟','c_1 = −1',['Res_1(0) = c_1 + c_0'],['c_1 = 1','c_1 = −Γ(α + 1)','c_1 = 0']),
  Q('With that normalization, what is `y_1`?','بهذا التطبيع ما `y_1`؟','1 − #f{t^{α}}{Γ(α + 1)}',['c_1 = −1'],['1 − t^{α}','1 + #f{t^{α}}{Γ(α + 1)}','e^{−t^{α}}']),
  Q('What are all `c_k` for this problem?','ما كل `c_k` لهذه المسألة؟','c_k = (−1)^k',[['Then y is the Mittag-Leffler series.','فتكون y متسلسلة ميتاج–ليفلر.']],['c_k = #f{(−1)^k}{k!}','c_k = 1','c_k = (−1)^kΓ(kα + 1)']),
  Q('Why normalize by `Γ(kα + 1)` in the ansatz?','لماذا التطبيع بـ `Γ(kα + 1)` في الفرضية؟',['Then `^CD^{α}` simply shifts the coefficients: `^CD^{α}#f{t^{kα}}{Γ(kα + 1)} = #f{t^{(k−1)α}}{Γ((k − 1)α + 1)}`','فتنقل `^CD^{α}` المعاملات ببساطة'],[['Like `t^k/k!` for ordinary derivatives.','مثل `t^k/k!` للمشتقات العادية.']],[['For convergence','للتقارب'],['It is required','إلزامي']]),
]);

lesson('508',38,[
  ['These series methods converge, but their usefulness is limited: for large `|λ|t^{α}` the partial sums have huge terms of alternating sign, and in floating point the cancellation destroys the result:','هذه الطرق التسلسلية تتقارب لكن فائدتها محدودة: لـ `|λ|t^{α}` كبيرة تحتوي المجاميع الجزئية حدوداً ضخمة متناوبة الإشارة، وفي الأعداد العشرية يدمر الإلغاء النتيجة:'],
  'Σ_{k=0}^{119} #f{(−20)^k}{k!} ≈ 1.48 × 10^{−9},     e^{−20} ≈ 2.06 × 10^{−9}',
  ['The sum on the left is computed in double precision. The largest term is about `20^{20}/20! ≈ 4 × 10^{7}`, so about 16 − 7 = 9 digits are lost before the result is formed. For nonlinear problems the series may also converge only on a finite interval. Hence they are tools for small t and for checking, not for long-time computation.','والمجموع في اليسار محسوب بالدقة المزدوجة. فأكبر حد نحو `20^{20}/20! ≈ 4 × 10^{7}` فيضيع نحو 16 − 7 = 9 أرقام قبل تكوين النتيجة. ولغير الخطية قد تتقارب المتسلسلة على مجال منته فقط. ولهذا هي أدوات لـ t الصغيرة وللفحص لا للحساب طويل المدى.'],
],[
  Q('About how many correct digits does the double-precision series keep for `e^{−20}` in relative terms?','كم رقماً صحيحاً تقريباً تحتفظ به المتسلسلة بالدقة المزدوجة لـ `e^{−20}` نسبياً؟','≈ 0',[['The result is wrong already in the first digit: 1.48 instead of 2.06.','النتيجة خاطئة من الرقم الأول: 1.48 بدل 2.06.']],['≈ 16','≈ 9','≈ 7']),
  Q('Estimate the largest term `20^{20}/20!`.','قدّر أكبر حد `20^{20}/20!`.','≈ 4.3 × 10^{7}',['#f{1.05 × 10^{26}}{2.43 × 10^{18}}'],['≈ 1','≈ 10^{20}','≈ 2 × 10^{−9}']),
  Q('How can the series still be used for large t?','كيف يمكن استخدام المتسلسلة لـ t الكبيرة مع ذلك؟',['With high-precision arithmetic, or by switching to asymptotic formulas or numerical methods','بحساب عالي الدقة، أو بالانتقال إلى صيغ تقاربية أو طرق عددية'],[['mpmath at 40 digits handles this example.','mpmath بـ 40 رقماً تعالج هذا المثال.']],[['By adding more terms','بإضافة حدود أكثر'],['It cannot be','لا يمكن']]),
  Q('Why are series methods good for checking codes?','لماذا تصلح الطرق التسلسلية لفحص الأكواد؟',['Near t = 0 they give accurate values with known structure','قرب t = 0 تعطي قيماً دقيقة ذات بنية معروفة'],[['Compare a solver with a few series terms at small t.','قارن حلّالاً ببضعة حدود من المتسلسلة عند t صغيرة.']],[['They are always exact','مضبوطة دائماً'],['They are fast for large t','سريعة لـ t الكبيرة']]),
]);

lesson('508',39,[
  ['Compared with a spectral solution in the fractional Legendre basis (Unit 7), a truncated series in `t^{α}` is a Taylor expansion at t = 0: very accurate near 0 and poor far away. The spectral approximation is a best approximation on the whole interval [0, T].','مقارنة بحل طيفي في أساس ليجندر الكسري (الوحدة 7) تكون المتسلسلة المقطوعة في `t^{α}` مفكوك تايلور عند t = 0: دقيقة جداً قرب 0 وسيئة بعيداً عنه. أما التقريب الطيفي فأفضل تقريب على المجال [0, T] كله.'],
  'y ≈ Σ_{k≤M} c_k s^k,   s = t^{α}',
  ['Both use the same powers `s = t^{α}`; the difference is the choice of coefficients (Taylor versus orthogonal projection or collocation). With 9 terms for `E_{1/2}(−t^{1/2})` on [0, 1] the spectral error is about `10^{−8}`, while the Taylor error at t = 1 is about `10^{−2}`.','وكلاهما يستخدم القوى نفسها `s = t^{α}`، والفرق في اختيار المعاملات (تايلور مقابل الإسقاط المتعامد أو التجميع). ومع 9 حدود لـ `E_{1/2}(−t^{1/2})` على [0, 1] يكون الخطأ الطيفي نحو `10^{−8}` بينما خطأ تايلور عند t = 1 نحو `10^{−2}`.'],
],[
  Q('Estimate the Taylor error at t = 1 after the term `k = 8` of `E_{1/2}(−t^{1/2})`.','قدّر خطأ تايلور عند t = 1 بعد الحد `k = 8` لـ `E_{1/2}(−t^{1/2})`.','≲ #f{1}{Γ(11/2)} ≈ 0.019',['k = 9:   #f{1}{Γ(9/2 + 1)}'],['≈ 10^{−8}','≈ 0','≈ 1']),
  Q('Where is a truncated series most accurate?','أين تكون المتسلسلة المقطوعة أدق؟','t → 0',[['It is an expansion at t = 0.','مفكوك عند t = 0.']],['t = T',['In the middle','في الوسط'],['Everywhere equally','في كل مكان بالتساوي']]),
  Q('What do the two methods share?','ماذا تشترك فيه الطريقتان؟',['The same powers `s = t^{α}`; only the coefficients differ','القوى نفسها `s = t^{α}`، والمعاملات وحدها تختلف'],[['Taylor coefficients versus projection or collocation.','معاملات تايلور مقابل الإسقاط أو التجميع.']],[['Nothing','لا شيء'],['The same coefficients','المعاملات نفسها']]),
  Q('Which approach suits a long interval [0, 10]?','أي نهج يناسب مجالاً طويلاً [0, 10]؟',['The spectral (or time-stepping) method, not a single Taylor series','الطريقة الطيفية (أو الخطو الزمني) لا متسلسلة تايلور واحدة'],[['The series suffers cancellation and slow convergence there.','المتسلسلة تعاني الإلغاء والتقارب البطيء هناك.']],[['A Taylor series with 10 terms','متسلسلة تايلور بـ 10 حدود'],['ADM only','ADM فقط']]),
]);

lesson('508',40,[
  ['Worked problems for Unit 4: power series, Adomian polynomials, HPM and HAM, DTM and their limits.','مسائل محلولة للوحدة 4: متسلسلات القوى وكثيرات أدوميان و HPM و HAM و DTM وحدودها.'],
  'y = Σ_k c_k t^{kα},     A_n = #f{1}{n!}#f{d^n}{dp^n}N(Σ_i p^iy_i)|_{p=0}',
],[
  Q('For `N(y) = y^3` compute `A_1`.','لـ `N(y) = y^3` احسب `A_1`.','A_1 = 3y_0^2y_1',['N′(y_0)y_1'],['A_1 = y_1^3','A_1 = 3y_0y_1^2','A_1 = y_0^3']),
  Q('Solve `^CD^{1/2}y = 1 + t^{1/2}`, `y(0) = 0`, exactly.','حل `^CD^{1/2}y = 1 + t^{1/2}` مع `y(0) = 0` بالضبط.','y = #f{2t^{1/2}}{#r{π}} + #f{#r{π}}{4}t',['D^{−1/2}1 = #f{t^{1/2}}{Γ(3/2)},   D^{−1/2}t^{1/2} = #f{Γ(3/2)}{Γ(2)}t'],['y = t^{1/2} + t','y = #f{2t^{1/2}}{#r{π}} + t','y = #f{t^{1/2}}{#r{π}} + #f{t}{2}']),
  Q('For `^CD^{α}y = −y`, which method gives a different series from the others: ADM, HPM, VIM, RPSM?','لـ `^CD^{α}y = −y` أي طريقة تعطي متسلسلة مختلفة عن الأخرى: ADM أو HPM أو VIM أو RPSM؟',['None: for this linear problem they all give the Mittag-Leffler series','لا شيء: لهذه المسألة الخطية كلها تعطي متسلسلة ميتاج–ليفلر'],[['Only HAM with ħ ≠ −1 differs.','فقط HAM مع ħ ≠ −1 تختلف.']],[['ADM gives a different series','ADM تعطي متسلسلة مختلفة'],['RPSM gives a different series','RPSM تعطي متسلسلة مختلفة']]),
  Q('Why do series methods appear in so many papers despite their limits?','لماذا تظهر الطرق التسلسلية في بحوث كثيرة رغم حدودها؟',['They give closed-form approximations with little computation','تعطي تقريبات بصيغة مغلقة بقليل من الحساب'],[['But they should be compared with a reliable numerical solution.','لكن يجب مقارنتها بحل عددي موثوق.']],[['They are always more accurate','دائماً أدق'],['They need no theory','لا تحتاج نظرية']]),
]);

export const MS508 = true;
