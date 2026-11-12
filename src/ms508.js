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
  Q('Is `^CD^{α}y = t^2 y + sin t` linear?','هل `^CD^{α}y = t^2 y + sin t` خطية؟',['Yes: y appears to the first power, with a variable coefficient','نعم: y تظهر بالقوة الأولى بمعامل متغير'],[['The source sin t does not affect linearity.','المصدر sin t لا يؤثر في الخطية.']],[['No: it has `t^2`','لا: فيها `t^2`'],['No: it has sin t','لا: فيها sin t']]),
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
  ['It is the classic test of numerical methods for multi-term equations. With A = B = C = 1, f = 1 + t, `ψ_0 = ψ_1 = 1` the exact solution is `y = 1 + t`, since `y″ = 0` and `^CD^{3/2}(1 + t) = 0`.','وهي الاختبار الكلاسيكي للطرق العددية للمعادلات متعددة الحدود. ومع A = B = C = 1 و f = 1 + t و `ψ_0 = ψ_1 = 1` يكون الحل المضبوط `y = 1 + t` لأن `y″ = 0` و `^CD^{3/2}(1 + t) = 0`.'],
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
  Q('When does `^CD^{α}^CD^{β}y = ^CD^{α+β}y` hold (α + β ≤ 1)?','متى تصح `^CD^{α}^CD^{β}y = ^CD^{α+β}y` (α + β ≤ 1)؟',['When y is smooth enough that no singular term appears, for example `y ∈ C^1`','حين تكون y ملساء بما يكفي فلا يظهر حد شاذ، مثل `y ∈ C^1`'],[['It fails for `t^{1/2}`.','تفشل لـ `t^{1/2}`.']],[['Always','دائماً'],['Never','أبداً']]),
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

/* ---- 508 · Unit 5 (lessons 41–50): stability;  Unit 6 (lessons 51–60): time-stepping methods ---- */
lesson('508',41,[
  ['Matignon’s theorem: the linear system `^CD^{α}X = AX` (0 < α ≤ 1) is asymptotically stable if and only if every eigenvalue λ of A satisfies','نظرية ماتينيون: النظام الخطي `^CD^{α}X = AX` (0 < α ≤ 1) مستقر تقاربياً إذا وفقط إذا حققت كل قيمة ذاتية λ للمصفوفة A'],
  '|arg λ| > #f{απ}{2}',
  ['For α = 1 this is the classical condition Re λ < 0. For α < 1 the stable sector is larger: eigenvalues with positive real part can still be stable. The solutions then decay like `t^{−α}`, not exponentially.','وعند α = 1 هذا هو الشرط الكلاسيكي Re λ < 0. وعند α < 1 يكون القطاع المستقر أوسع: فقيم ذاتية جزؤها الحقيقي موجب قد تبقى مستقرة. والحلول حينها تتناقص مثل `t^{−α}` لا أسياً.'],
],[
  Q('Is λ = i stable for α = 1/2?','هل λ = i مستقرة عند α = 1/2؟',['Yes: `|arg i| = π/2 > π/4`','نعم: `|arg i| = π/2 > π/4`'],['#f{απ}{2} = #f{π}{4}'],[['No','لا'],['Only for t < 1','فقط عند t < 1']]),
  Q('For which α is λ = 1 + i stable?','لأي α تكون λ = 1 + i مستقرة؟','α < #f{1}{2}',['arg(1 + i) = #f{π}{4} > #f{απ}{2}'],['α < 1','α > #f{1}{2}',['never','أبداً']]),
  Q('Reduce the condition to α = 1.','اختصر الشرط إلى α = 1.','Re λ < 0',['|arg λ| > #f{π}{2}'],['Re λ > 0','|λ| < 1','Im λ = 0']),
  Q('Is `A = #m{1, −2 ;; 2, 1}` stable for α = 0.6?','هل `A = #m{1, −2 ;; 2, 1}` مستقرة عند α = 0.6؟',['Yes: `λ = 1 ± 2i`, `|arg λ| ≈ 1.107 > 0.6·π/2 ≈ 0.942`','نعم: `λ = 1 ± 2i` و `|arg λ| ≈ 1.107 > 0.6·π/2 ≈ 0.942`'],['tan^{−1} 2 ≈ 1.107'],[['No: Re λ > 0','لا: Re λ > 0'],['It cannot be decided','لا يمكن الحكم']]),
]);

lesson('508',42,[
  ['Mittag-Leffler stability is the fractional analogue of exponential stability: the solution satisfies','استقرار ميتاج–ليفلر هو النظير الكسري للاستقرار الأسي: يحقق الحل'],
  '‖x(t)‖ ≤ [m(x_0) E_{α}(−λt^{α})]^{b},     λ > 0,   b > 0,   m(0) = 0',
  ['It implies asymptotic stability with the algebraic rate `t^{−αb}`. Linear systems that satisfy Matignon’s condition are Mittag-Leffler stable.','وهو يقتضي الاستقرار التقاربي بالمعدل الجبري `t^{−αb}`. والنظم الخطية التي تحقق شرط ماتينيون مستقرة بمعنى ميتاج–ليفلر.'],
],[
  Q('With b = 1, what decay rate does Mittag-Leffler stability give for large t?','مع b = 1 أي معدل تناقص يعطيه استقرار ميتاج–ليفلر لـ t الكبيرة؟','~ t^{−α}',['E_{α}(−λt^{α}) ~ #f{t^{−α}}{λΓ(1 − α)}'],['~ e^{−λt}','~ t^{−1}','~ e^{−t^{α}}']),
  Q('Reduce Mittag-Leffler stability to α = 1.','اختصر استقرار ميتاج–ليفلر إلى α = 1.',['Exponential stability: `‖x‖ ≤ [m(x_0)e^{−λt}]^{b}`','الاستقرار الأسي: `‖x‖ ≤ [m(x_0)e^{−λt}]^{b}`'],['E_1(−λt) = e^{−λt}'],[['Lyapunov stability only','استقرار ليابونوف فقط'],['No stability','لا استقرار']]),
  Q('Why is `m(0) = 0` required?','لماذا يُشترط `m(0) = 0`؟',['So that the zero initial value gives the zero solution','حتى تعطي القيمة الابتدائية الصفرية الحل الصفري'],[['The bound then shrinks with `‖x_0‖`.','فيصغر الحد مع `‖x_0‖`.']],[['For convergence of E_α','لتقارب E_α'],['It is not','ليس شرطاً']]),
  Q('Which is faster for large t: Mittag-Leffler decay or exponential decay?','أيهما أسرع لـ t الكبيرة: تناقص ميتاج–ليفلر أم التناقص الأسي؟',['Exponential decay','التناقص الأسي'],[['`t^{−α}` decays more slowly than any `e^{−ct}`.','`t^{−α}` يتناقص أبطأ من أي `e^{−ct}`.']],[['Mittag-Leffler decay','تناقص ميتاج–ليفلر'],['They are the same','متماثلان']]),
]);

lesson('508',43,[
  ['Lyapunov’s method extends to Caputo derivatives with the inequality (for differentiable x, 0 < α ≤ 1)','طريقة ليابونوف تمتد إلى مشتقات كابوتو بالمتباينة (لـ x قابلة للاشتقاق، 0 < α ≤ 1)'],
  '#f{1}{2} ^CD^{α}x^2(t) ≤ x(t) ^CD^{α}x(t)',
  ['So with `V = x^2`: if `x ^CD^{α}x ≤ −λx^2` then `^CD^{α}V ≤ −2λV`, and comparison gives `V ≤ V(0)E_{α}(−2λt^{α})`, Mittag-Leffler stability. No product rule holds for fractional derivatives, which is why inequalities of this kind are needed.','فمع `V = x^2`: إذا كان `x ^CD^{α}x ≤ −λx^2` فإن `^CD^{α}V ≤ −2λV`، والمقارنة تعطي `V ≤ V(0)E_{α}(−2λt^{α})` أي استقرار ميتاج–ليفلر. ولا تصح قاعدة الضرب للمشتقات الكسرية، ولهذا نحتاج متباينات من هذا النوع.'],
],[
  Q('For `^CD^{α}x = −x − x^3`, bound `x ^CD^{α}x`.','لـ `^CD^{α}x = −x − x^3` قدّر `x ^CD^{α}x`.','x ^CD^{α}x = −x^2 − x^4 ≤ −x^2',[['So λ = 1.','فيكون λ = 1.']],['x ^CD^{α}x ≥ 0','x ^CD^{α}x = x^2','x ^CD^{α}x = −x^3']),
  Q('What bound does this give for `x(t)^2`?','أي حد يعطيه هذا لـ `x(t)^2`؟','x(t)^2 ≤ x_0^2 E_{α}(−2t^{α})',['^CD^{α}V ≤ −2V'],['x(t)^2 ≤ x_0^2 e^{−2t}','x(t)^2 ≤ x_0^2','x(t)^2 ≤ E_{α}(−t^{α})']),
  Q('Why can’t one write `^CD^{α}(x^2) = 2x ^CD^{α}x`?','لماذا لا يمكن كتابة `^CD^{α}(x^2) = 2x ^CD^{α}x`؟',['The product (chain) rule does not hold for fractional derivatives','قاعدة الضرب (السلسلة) لا تصح للمشتقات الكسرية'],[['Only the inequality above holds.','تصح المتباينة أعلاه فقط.']],[['It can','يمكن'],['Because x is not smooth','لأن x ليست ملساء']]),
  Q('Check the inequality for `x = t` with α = 1/2 at t = 1.','تحقق من المتباينة لـ `x = t` مع α = 1/2 عند t = 1.','#f{1}{2}·#f{8}{3#r{π}} ≈ 0.752  ≤  1·#f{2}{#r{π}} ≈ 1.128',['^CD^{1/2}t^2 = #f{8}{3#r{π}}t^{3/2},   ^CD^{1/2}t = #f{2}{#r{π}}t^{1/2}'],['0.752 ≥ 1.128','1 ≤ 1','0 ≤ 0']),
]);

lesson('508',44,[
  ['The long-time behaviour of the relaxation solution follows from the asymptotic expansion of the Mittag-Leffler function:','السلوك طويل المدى لحل الاسترخاء يأتي من المفكوك التقاربي لدالة ميتاج–ليفلر:'],
  'E_{α}(−z) = Σ_{k=1}^{K} #f{(−1)^{k+1}}{Γ(1 − kα)} z^{−k} + O(z^{−K−1}),     z → ∞',
  ['The leading term `z^{−1}/Γ(1 − α)` gives the algebraic decay. It is the tool for evaluating `E_{α}` at large arguments, where the power series fails (Lesson 38).','والحد الأول `z^{−1}/Γ(1 − α)` يعطي التناقص الجبري. وهو الأداة لحساب `E_{α}` عند المتغيرات الكبيرة حيث تفشل متسلسلة القوى (الدرس 38).'],
],[
  Q('Approximate `E_{1/2}(−10)` by the leading term.','قرّب `E_{1/2}(−10)` بالحد الأول.','#f{1}{10#r{π}} ≈ 0.05642',['#f{z^{−1}}{Γ(1/2)},   z = 10'],['≈ 0.1','≈ e^{−10}','≈ 0.5']),
  Q('The exact value is `e^{100}erfc(10) ≈ 0.05614`. What is the relative error of the leading term?','القيمة المضبوطة `e^{100}erfc(10) ≈ 0.05614`. ما الخطأ النسبي للحد الأول؟','≈ 0.5 %',['#f{0.05642 − 0.05614}{0.05614}'],['≈ 5 %','≈ 0.05 %','≈ 50 %']),
  Q('Why does the leading term vanish for α = 1?','لماذا ينعدم الحد الأول عند α = 1؟','#f{1}{Γ(0)} = 0',[['Every term has `1/Γ(1 − k)` = 0: the decay of `e^{−z}` is faster than any power.','كل حد فيه `1/Γ(1 − k)` = 0: تناقص `e^{−z}` أسرع من أي قوة.']],['Γ(0) = 1','#f{1}{Γ(0)} = 1','Γ(1) = 0']),
  Q('Where should the asymptotic expansion be used instead of the power series?','أين يجب استخدام المفكوك التقاربي بدل متسلسلة القوى؟',['For large arguments z, where the series suffers cancellation','للمتغيرات z الكبيرة حيث تعاني المتسلسلة من الإلغاء'],[['Good codes switch between the two.','الأكواد الجيدة تنتقل بين الاثنين.']],[['For small z','لـ z الصغيرة'],['Never','أبداً']]),
]);

lesson('508',45,[
  ['For a nonlinear system `^CD^{α}x = f(x)` an equilibrium x* satisfies `f(x*) = 0`. It is locally asymptotically stable if the eigenvalues of the Jacobian `J = f′(x*)` satisfy Matignon’s condition:','للنظام غير الخطي `^CD^{α}x = f(x)` تحقق نقطة الاتزان x* الشرط `f(x*) = 0`. وتكون مستقرة تقاربياً محلياً إذا حققت القيم الذاتية للجاكوبي `J = f′(x*)` شرط ماتينيون:'],
  '|arg λ(J)| > #f{απ}{2}',
  ['Unlike ordinary equations, a fractional system cannot have non-constant periodic solutions, and equilibria with Re λ > 0 can be stable for small α.','وبخلاف المعادلات العادية لا يمكن أن يكون للنظام الكسري حلول دورية غير ثابتة، ونقاط الاتزان مع Re λ > 0 قد تكون مستقرة لـ α الصغيرة.'],
],[
  Q('Find the equilibria of `^CD^{α}x = x(1 − x)`.','أوجد نقاط اتزان `^CD^{α}x = x(1 − x)`.','x* = 0,   x* = 1',['x(1 − x) = 0'],[['x* = 1 only','x* = 1 فقط'],'x* = −1, 1','x* = #f{1}{2}']),
  Q('Which of them is stable?','أيها مستقرة؟','x* = 1',['f′(1) = 1 − 2 = −1,   f′(0) = 1'],['x* = 0',['both','كلاهما'],['neither','لا شيء منهما']]),
  Q('For a real eigenvalue λ < 0, is the equilibrium stable for every α ∈ (0, 1]?','لقيمة ذاتية حقيقية λ < 0 هل تكون نقطة الاتزان مستقرة لكل α ∈ (0, 1]؟',['Yes: `|arg λ| = π > απ/2`','نعم: `|arg λ| = π > απ/2`'],[['The sector condition always holds on the negative axis.','شرط القطاع يتحقق دائماً على المحور السالب.']],[['Only for α < 1/2','فقط عند α < 1/2'],['No','لا']]),
  Q('Can a fractional system have a non-constant periodic solution?','هل يمكن أن يكون للنظام الكسري حل دوري غير ثابت؟',['No: the memory of the Caputo derivative excludes exact periodicity','لا: ذاكرة مشتقة كابوتو تمنع الدورية الدقيقة'],[['Solutions may still oscillate and decay.','قد تتذبذب الحلول وتتناقص مع ذلك.']],[['Yes, always','نعم دائماً'],['Only for α < 1','فقط عند α < 1']]),
]);

lesson('508',46,[
  ['A fractional SIR model replaces the time derivatives by Caputo derivatives of order α:','النموذج الكسري SIR يستبدل المشتقات الزمنية بمشتقات كابوتو من الرتبة α:'],
  '^CD^{α}S = −β^{α}SI,     ^CD^{α}I = β^{α}SI − γ^{α}I,     ^CD^{α}R = γ^{α}I',
  ['The rates are raised to the power α so that both sides have units of `time^{−α}`. The sum `S + I + R` is conserved, the basic reproduction number is still `R_0 = β/γ`, and the memory slows the epidemic’s rise and fall.','والمعدلات مرفوعة للأس α حتى يكون للطرفين وحدات `time^{−α}`. والمجموع `S + I + R` محفوظ، ورقم التكاثر الأساسي يبقى `R_0 = β/γ`، والذاكرة تبطئ صعود الوباء وهبوطه.'],
],[
  Q('Show that `S + I + R` is constant.','أثبت أن `S + I + R` ثابت.','^CD^{α}(S + I + R) = 0',['−β^{α}SI + β^{α}SI − γ^{α}I + γ^{α}I = 0'],['^CD^{α}(S + I + R) = −γ^{α}I','S + I + R = e^{−t}','S + I + R = 1 + t']),
  Q('Why are the rates written as `β^{α}` and `γ^{α}`?','لماذا تُكتب المعدلات `β^{α}` و `γ^{α}`؟',['So that the units match: `^CD^{α}` has units of `time^{−α}`','حتى تتطابق الوحدات: `^CD^{α}` وحدتها `time^{−α}`'],[['β itself has units of `time^{−1}`.','و β نفسها وحدتها `time^{−1}`.']],[['To make the model nonlinear','لجعل النموذج غير خطي'],['By convention only','اصطلاحاً فقط']]),
  Q('Give `R_0` for β = 0.3, γ = 0.1.','أعط `R_0` عند β = 0.3 و γ = 0.1.','3',['#f{β}{γ}'],['0.03','#f{1}{3}','0.2']),
  Q('When does I grow at the start (S ≈ 1)?','متى تنمو I في البداية (S ≈ 1)؟','β > γ  (R_0 > 1)',['β^{α} − γ^{α} > 0'],['β < γ',['always','دائماً'],['never','أبداً']]),
]);

lesson('508',47,[
  ['Fractional versions of chaotic systems (Lorenz, Chen, Rössler) can stay chaotic for orders below 1. A necessary condition for chaos with commensurate order α is that some unstable saddle-focus eigenvalue λ violates Matignon’s condition:','النسخ الكسرية من النظم الفوضوية (لورنز وتشن ورسلر) قد تبقى فوضوية لرتب أقل من 1. وشرط لازم للفوضى برتبة متساوية α أن تخالف قيمة ذاتية غير مستقرة من نوع سرج–بؤرة λ شرط ماتينيون:'],
  'α > #f{2}{π} tan^{−1}#f{|Im λ|}{Re λ}',
  ['Below this threshold every equilibrium is stable and chaos cannot occur. Numerical studies of such systems need long times and therefore cheap memory treatment (Lesson 60).','وتحت هذه العتبة تكون كل نقاط الاتزان مستقرة ولا يمكن أن تحدث الفوضى. والدراسات العددية لهذه النظم تحتاج أزمنة طويلة فتحتاج معالجة رخيصة للذاكرة (الدرس 60).'],
],[
  Q('Compute the threshold for λ = 1 + 2i.','احسب العتبة لـ λ = 1 + 2i.','α > 0.705',['#f{2}{π}tan^{−1} 2 = #f{2}{π}·1.107'],['α > 0.5','α > 0.352','α > 1']),
  Q('Below the threshold, what happens to that equilibrium?','تحت العتبة ماذا يحدث لنقطة الاتزان تلك؟',['It becomes stable: `|arg λ| > απ/2`','تصبح مستقرة: `|arg λ| > απ/2`'],[['So no chaos near it.','فلا فوضى قربها.']],[['It becomes unstable','تصبح غير مستقرة'],['Nothing changes','لا يتغير شيء']]),
  Q('Is the condition sufficient for chaos?','هل الشرط كافٍ للفوضى؟',['No, only necessary','لا، لازم فقط'],[['Chaos must be confirmed by simulation, for example Lyapunov exponents.','يجب تأكيد الفوضى بالمحاكاة مثل أسس ليابونوف.']],[['Yes','نعم'],['It is neither','ليس هذا ولا ذاك']]),
  Q('Why do long simulations of fractional systems cost so much?','لماذا تكلف المحاكاة الطويلة للنظم الكسرية كثيراً؟',['Every step uses the whole history: `O(N^2)` work for N steps','كل خطوة تستخدم التاريخ كله: عمل `O(N^2)` لـ N خطوة'],[['Fast methods reduce this.','الطرق السريعة تقلل ذلك.']],[['Because α < 1','لأن α < 1'],['They do not','لا تكلف']]),
]);

lesson('508',48,[
  ['A delay fractional equation `^CD^{α}y(t) = f(t, y(t), y(t − τ))` needs a history function `y(t) = φ(t)` on `[−τ, 0]`. The method of steps solves it interval by interval; on the first interval the delayed term is known and the equation has no delay:','المعادلة الكسرية ذات التأخير `^CD^{α}y(t) = f(t, y(t), y(t − τ))` تحتاج دالة تاريخ `y(t) = φ(t)` على `[−τ, 0]`. وطريقة الخطوات تحلها مجالاً مجالاً، وعلى المجال الأول يكون الحد المتأخر معلوماً فلا تأخير في المعادلة:'],
  '0 ≤ t ≤ τ:     ^CD^{α}y = f(t, y, φ(t − τ))',
  ['Delays can destabilize systems that are stable without delay; the stability region depends on α, τ and the coefficients. Note that the Caputo memory starts at t = 0, so the history enters only through the delayed term.','والتأخيرات قد تُخل باستقرار نظم مستقرة دونه، ومنطقة الاستقرار تعتمد على α و τ والمعاملات. ولاحظ أن ذاكرة كابوتو تبدأ عند t = 0 فيدخل التاريخ عبر الحد المتأخر فقط.'],
],[
  Q('Solve `^CD^{α}y = −y(t − 1)`, `φ ≡ 1`, on [0, 1].','حل `^CD^{α}y = −y(t − 1)` مع `φ ≡ 1` على [0, 1].','y = 1 − #f{t^{α}}{Γ(α + 1)}',['^CD^{α}y = −1,   y(0) = 1'],['y = E_{α}(−t^{α})','y = 1','y = 1 − t^{α}']),
  Q('What is `y(1)` for α = 1/2?','ما `y(1)` عند α = 1/2؟','1 − #f{2}{#r{π}} ≈ −0.128',['Γ(#f{3}{2}) = #f{#r{π}}{2}'],['≈ 0.4276','≈ 0','≈ 0.5']),
  Q('What data does a delay equation need besides y(0)?','أي معطيات تحتاجها معادلة التأخير غير y(0)؟',['The history `φ(t)` on `[−τ, 0]`','التاريخ `φ(t)` على `[−τ, 0]`'],[['An initial function, not just a value.','دالة ابتدائية لا قيمة فقط.']],[['y′(0)','y′(0)'],['Nothing','لا شيء']]),
  Q('Why does the method of steps work?','لماذا تعمل طريقة الخطوات؟',['On each interval of length τ the delayed term is already known','على كل مجال طوله τ يكون الحد المتأخر معلوماً مسبقاً'],[['So each step is an equation without delay.','فكل خطوة معادلة دون تأخير.']],[['Because τ is small','لأن τ صغير'],['It does not','لا تعمل']]),
]);

lesson('508',49,[
  ['A boundary-value problem with `1 < α ≤ 2`: `^CD^{α}y = f`, `y(0) = 0`, `y(1) = 0`. Integrate and fix the free constant from the right boundary:','مسألة القيم الحدية مع `1 < α ≤ 2`: `^CD^{α}y = f` و `y(0) = 0` و `y(1) = 0`. كامل وحدد الثابت الحر من الحد الأيمن:'],
  'y = D^{−α}f + c t,     c = −(D^{−α}f)(1)',
  ['For f = −1 and α = 3/2: `y = (t − t^{3/2})/Γ(5/2)`. Fractional Sturm–Liouville problems, `−^{RL}D_{1−}^{α/2}(p ^CD_{0+}^{α/2}y) + qy = λwy`, combine a left and a right derivative and have real eigenvalues and orthogonal eigenfunctions (Course 503, Lesson 93).','ولـ f = −1 و α = 3/2: `y = (t − t^{3/2})/Γ(5/2)`. ومسائل شتورم–ليوفيل الكسرية `−^{RL}D_{1−}^{α/2}(p ^CD_{0+}^{α/2}y) + qy = λwy` تجمع مشتقة يسرى وأخرى يمنى ولها قيم ذاتية حقيقية ودوال ذاتية متعامدة (المقرر 503، الدرس 93).'],
],[
  Q('Check `y = (t − t^{3/2})/Γ(5/2)` at t = 1.','تحقق من `y = (t − t^{3/2})/Γ(5/2)` عند t = 1.','y(1) = 0',['1 − 1 = 0'],['y(1) = 1','y(1) = #f{1}{Γ(5/2)}','y(1) = −1']),
  Q('Compute `y(1/4)`.','احسب `y(1/4)`.','≈ 0.0940',['#f{0.25 − 0.125}{1.3293}'],['≈ 0.125','≈ 0.25','≈ 0.0470']),
  Q('Why does the term ct not change the equation?','لماذا لا يغيّر الحد ct المعادلة؟','^CD^{3/2}t = 0',['#f{d^2}{dt^2}t = 0'],['^CD^{3/2}t = 1','^CD^{3/2}t = t^{−1/2}','^CD^{3/2}t = #f{1}{Γ(1/2)}']),
  Q('Verify `^CD^{3/2}y = −1` for that y.','تحقق من `^CD^{3/2}y = −1` لتلك y.','−#f{1}{Γ(5/2)}^CD^{3/2}t^{3/2} = −#f{Γ(5/2)}{Γ(5/2)Γ(1)} = −1',['^CD^{3/2}t^{3/2} = #f{Γ(5/2)}{Γ(1)}'],['+1','0','−#f{1}{Γ(5/2)}']),
]);

lesson('508',50,[
  ['Worked problems for Unit 5: Matignon’s sector, asymptotics, equilibria and models.','مسائل محلولة للوحدة 5: قطاع ماتينيون والسلوك التقاربي ونقاط الاتزان والنماذج.'],
  '|arg λ| > #f{απ}{2},     E_{α}(−z) ≈ #f{1}{zΓ(1 − α)}',
],[
  Q('Is `A = #m{0, 1 ;; −1, 0}` stable for α = 0.9?','هل `A = #m{0, 1 ;; −1, 0}` مستقرة عند α = 0.9؟',['Yes: `λ = ±i`, `π/2 > 0.45π`','نعم: `λ = ±i` و `π/2 > 0.45π`'],[['For α = 1 the solutions only rotate.','عند α = 1 تدور الحلول فقط.']],[['No','لا'],['Only for α = 1','فقط عند α = 1']]),
  Q('Find the largest α for which `λ = 1 + i#r{3}` is stable.','أوجد أكبر α تكون عندها `λ = 1 + i#r{3}` مستقرة.','α < #f{2}{3}',['arg λ = #f{π}{3} > #f{απ}{2}'],['α < #f{1}{3}','α < 1','α < #f{1}{2}']),
  Q('Estimate `E_{0.8}(−100)`.','قدّر `E_{0.8}(−100)`.','#f{1}{100Γ(0.2)} ≈ 0.0022',['Γ(0.2) ≈ 4.591'],['≈ e^{−100}','≈ 0.01','≈ 0.22']),
  Q('For `^CD^{α}x = −x + x^2`, which equilibrium is stable?','لـ `^CD^{α}x = −x + x^2` أي نقطة اتزان مستقرة؟','x* = 0',['f′(0) = −1,   f′(1) = 1'],['x* = 1',['both','كلاهما'],['neither','لا شيء منهما']]),
]);

lesson('508',51,[
  ['The fractional Euler (rectangle) method approximates the Volterra form with f frozen on each subinterval. On a uniform mesh `t_n = nh`:','طريقة أويلر الكسرية (المستطيل) تقرّب صيغة فولتيرا مع تثبيت f على كل مجال جزئي. وعلى شبكة منتظمة `t_n = nh`:'],
  'y_{n+1} = ψ_0 + #f{h^{α}}{Γ(α + 1)} Σ_{j=0}^{n} b_{n,j} f(t_j, y_j),     b_{n,j} = (n + 1 − j)^{α} − (n − j)^{α}',
  ['The weights come from integrating the kernel exactly over each subinterval. The method is explicit and of order 1 for smooth f; for the non-smooth solutions of fractional equations its observed order at fixed t is also about 1 (for `^CD^{1/2}y = −y`: errors 2.0, 1.0, 0.50, 0.25 × `10^{−3}` for N = 40, …, 320).','والأوزان تأتي من تكامل النواة بالضبط على كل مجال جزئي. والطريقة صريحة ومن الرتبة 1 للدوال f الملساء، ولحلول المعادلات الكسرية غير الملساء تكون رتبتها الملاحظة عند t ثابتة نحو 1 أيضاً (لـ `^CD^{1/2}y = −y`: الأخطاء 2.0 و 1.0 و 0.50 و 0.25 × `10^{−3}` لـ N = 40 حتى 320).'],
],[
  Q('Write the first step `y_1`.','اكتب الخطوة الأولى `y_1`.','y_1 = ψ_0 + #f{h^{α}}{Γ(α + 1)} f(t_0, ψ_0)',['n = 0:   b_{0,0} = 1'],['y_1 = ψ_0 + h f(t_0, ψ_0)','y_1 = ψ_0 + h^{α} f(t_0, ψ_0)','y_1 = #f{h^{α}}{Γ(α)} f(t_0, ψ_0)']),
  Q('Compute `b_{1,0}` and `b_{1,1}` for α = 1/2.','احسب `b_{1,0}` و `b_{1,1}` عند α = 1/2.','#r{2} − 1 ≈ 0.414,   1',['b_{1,0} = 2^{1/2} − 1^{1/2},   b_{1,1} = 1^{1/2} − 0'],['1,   1','0.5,   0.5','#r{2},   1']),
  Q('What is the observed order from the errors above?','ما الرتبة الملاحظة من الأخطاء أعلاه؟','≈ 1',['#f{2.0}{1.0} = 2 = 2^1'],['≈ 2','≈ 0.5','≈ 1.5']),
  Q('Reduce the method to α = 1.','اختصر الطريقة إلى α = 1.','y_{n+1} = ψ_0 + h Σ_{j=0}^{n} f(t_j, y_j)',[['`b_{n,j} = 1`: explicit Euler in sum form.','`b_{n,j} = 1`: أويلر الصريحة بصيغة المجموع.']],['y_{n+1} = y_n + h^2 f_n','y_{n+1} = h f_n','y_{n+1} = ψ_0']),
]);

lesson('508',52,[
  ['The Grünwald–Letnikov formula generalizes backward differences:','صيغة جرونفالد–ليتنيكوف تعمم الفروق الخلفية:'],
  'D^{α}y(t_n) ≈ h^{−α} Σ_{j=0}^{n} w_j y_{n−j},     w_j = (−1)^j C(α, j),     w_0 = 1,   w_j = (1 − #f{α + 1}{j}) w_{j−1}',
  ['It approximates the Riemann–Liouville derivative with order 1; for Caputo subtract the initial value: apply it to `y − y(0)`. The recurrence for the weights is cheap and stable.','وهي تقرّب مشتقة ريمان–ليوفيل بالرتبة 1، ولكابوتو اطرح القيمة الابتدائية: طبّقها على `y − y(0)`. وعلاقة التكرار للأوزان رخيصة ومستقرة.'],
],[
  Q('Compute `w_1, w_2, w_3` for α = 1/2.','احسب `w_1, w_2, w_3` عند α = 1/2.','−0.5,   −0.125,   −0.0625',['w_1 = (1 − 1.5)·1,   w_2 = (1 − 0.75)(−0.5),   w_3 = (1 − 0.5)(−0.125)'],['0.5,   0.125,   0.0625','−0.5,   0.25,   −0.125','−1,   0.5,   −0.25']),
  Q('What are the weights for α = 1?','ما الأوزان عند α = 1؟','1,   −1,   0,   0, …',['C(1, j) = 0  (j ≥ 2)'],['1,   1,   1, …','1,   −1,   1,   −1, …','1,   −0.5,   0, …']),
  Q('How is GL turned into a Caputo approximation?','كيف تتحول GL إلى تقريب لكابوتو؟','D^{α}(y − y(0))',['^CD^{α}y = ^{RL}D^{α}(y − y(0))'],['D^{α}y + y(0)','D^{α}y·y(0)','D^{−α}y']),
  Q('What is the order of the GL approximation for smooth functions?','ما رتبة تقريب GL للدوال الملساء؟','1',[['Shifted or weighted versions reach order 2.','النسخ المزاحة أو الموزونة تبلغ الرتبة 2.']],['2','α','2 − α']),
]);

lesson('508',53,[
  ['The L1 scheme approximates y by a piecewise linear function and integrates the Caputo kernel exactly:','مخطط L1 يقرّب y بدالة خطية مجزأة ويكامل نواة كابوتو بالضبط:'],
  '^CD^{α}y(t_n) ≈ #f{h^{−α}}{Γ(2 − α)} Σ_{k=0}^{n−1} b_k (y_{n−k} − y_{n−k−1}),     b_k = (k + 1)^{1−α} − k^{1−α}',
  ['For smooth y it has order `2 − α`. For `^CD^{1/2}y = −y` (solution `E_{1/2}(−t^{1/2})`, singular at 0) the observed order at t = 1 on a uniform mesh drops to about 1: errors 1.83, 0.90, 0.44, 0.22 × `10^{−3}` for N = 40, …, 320.','وللدوال الملساء y رتبته `2 − α`. ولـ `^CD^{1/2}y = −y` (الحل `E_{1/2}(−t^{1/2})` الشاذ عند 0) تنخفض الرتبة الملاحظة عند t = 1 على شبكة منتظمة إلى نحو 1: الأخطاء 1.83 و 0.90 و 0.44 و 0.22 × `10^{−3}` لـ N = 40 حتى 320.'],
],[
  Q('Compute `b_0, b_1, b_2` for α = 1/2.','احسب `b_0, b_1, b_2` عند α = 1/2.','1,   0.414,   0.318',['b_k = #r{k + 1} − #r{k}'],['1,   0.5,   0.333','1,   1,   1','0.5,   0.25,   0.125']),
  Q('What is the order of L1 for smooth solutions with α = 0.3?','ما رتبة L1 للحلول الملساء مع α = 0.3؟','1.7',['2 − α'],['0.3','2','1']),
  Q('What order is observed for `E_{1/2}(−t^{1/2})` on a uniform mesh?','أي رتبة تُلاحظ لـ `E_{1/2}(−t^{1/2})` على شبكة منتظمة؟','≈ 1',['#f{1.83}{0.90} ≈ 2'],['1.5','0.5','2']),
  Q('Why does the order drop?','لماذا تنخفض الرتبة؟',['The solution is not smooth at t = 0, so the linear interpolation is poor on the first intervals','الحل ليس أملس عند t = 0 فيكون الاستكمال الخطي سيئاً على المجالات الأولى'],[['Graded meshes (Lesson 58) fix this.','الشبكات المتدرجة (الدرس 58) تعالج ذلك.']],[['Rounding error','خطأ التقريب'],['The weights are wrong','الأوزان خاطئة']]),
]);

lesson('508',54,[
  ['The Adams–Bashforth–Moulton method of Diethelm, Ford and Freed: an explicit fractional Euler predictor, then a trapezoidal corrector on the Volterra form:','طريقة آدامز–باشفورث–مولتون لديتلم وفورد وفريد: متنبئ أويلر كسري صريح ثم مصحح شبه منحرف على صيغة فولتيرا:'],
  'y_{n+1}^{P} = ψ_0 + #f{h^{α}}{Γ(α + 1)} Σ_{j=0}^{n} b_{n,j}f_j',
  'y_{n+1} = ψ_0 + #f{h^{α}}{Γ(α + 2)}(f(t_{n+1}, y_{n+1}^{P}) + Σ_{j=0}^{n} a_{j,n+1}f_j)',
  ['Its order is `min(2, 1 + α)` for smooth solutions, lower for the usual non-smooth ones. It is the standard general-purpose method, implemented for example in Garrappa’s ``fde12`` for MATLAB.','ورتبتها `min(2, 1 + α)` للحلول الملساء وأقل للحلول غير الملساء المعتادة. وهي الطريقة القياسية العامة، ومطبقة مثلاً في ``fde12`` لـ Garrappa في MATLAB.'],
],[
  Q('What is the order of ABM for smooth solutions with α = 0.5?','ما رتبة ABM للحلول الملساء مع α = 0.5؟','1.5',['min(2, 1 + 0.5)'],['2','0.5','1']),
  Q('And with α = 1.5?','ومع α = 1.5؟','2',['min(2, 2.5)'],['2.5','1.5','1']),
  Q('What role does the predictor play?','ما دور المتنبئ؟',['It supplies `y_{n+1}` to evaluate f in the implicit corrector without solving an equation','يوفر `y_{n+1}` لحساب f في المصحح الضمني دون حل معادلة'],[['One predictor and one corrector per step.','متنبئ ومصحح واحد لكل خطوة.']],[['It gives the final answer','يعطي الجواب النهائي'],['It halves the step','ينصّف الخطوة']]),
  Q('Reduce the corrector to α = 1 with one step.','اختصر المصحح إلى α = 1 بخطوة واحدة.','y_1 = ψ_0 + #f{h}{2}(f_0 + f(t_1, y_1^{P}))',[['Heun’s method.','طريقة هيون.']],['y_1 = ψ_0 + hf_0','y_1 = ψ_0 + h f(t_1, y_1^{P})','y_1 = ψ_0 + #f{h}{6}(f_0 + 4f_1 + f_2)']),
]);

lesson('508',55,[
  ['Product integration methods approximate only the smooth part f of the Volterra integrand by a polynomial on each subinterval and integrate it exactly against the singular kernel:','طرق التكامل الضربي تقرّب الجزء الأملس f فقط من مكامل فولتيرا بكثيرة حدود على كل مجال جزئي وتكاملها بالضبط مع النواة الشاذة:'],
  '∫_{t_j}^{t_{j+1}} (t_n − s)^{α−1} f(s) ds ≈ ∫_{t_j}^{t_{j+1}} (t_n − s)^{α−1} p_j(s) ds',
  ['Constant `p_j` gives the fractional Euler method, linear `p_j` the trapezoidal (ABM) corrector, quadratic `p_j` higher orders. The kernel integrals are explicit powers, so the weights are exact.','و `p_j` الثابتة تعطي طريقة أويلر الكسرية، والخطية مصحح شبه المنحرف (ABM)، والتربيعية رتباً أعلى. وتكاملات النواة قوى صريحة فتكون الأوزان مضبوطة.'],
],[
  Q('Compute `∫_0^h (h − s)^{α−1} ds`.','احسب `∫_0^h (h − s)^{α−1} ds`.','#f{h^{α}}{α}',['[−#f{(h − s)^{α}}{α}]_0^h'],['h^{α}','#f{h^{α−1}}{α − 1}','h']),
  Q('Which product integration rule gives the fractional Euler method?','أي قاعدة تكامل ضربي تعطي طريقة أويلر الكسرية؟',['A constant `p_j = f(t_j, y_j)` on each subinterval','`p_j = f(t_j, y_j)` ثابتة على كل مجال جزئي'],[['The rectangle rule.','قاعدة المستطيل.']],[['A linear `p_j`','`p_j` خطية'],['A spline','شريحة']]),
  Q('Why integrate the kernel exactly instead of using Gauss quadrature on the whole integrand?','لماذا تُكامل النواة بالضبط بدل تربيع جاوس على المكامل كله؟',['The kernel is singular at s = t; ordinary rules would converge slowly','النواة شاذة عند s = t، والقواعد العادية تتقارب ببطء'],[['Only the smooth factor is approximated.','العامل الأملس وحده يُقرَّب.']],[['It is faster','أسرع'],['Gauss is not allowed','جاوس غير مسموح']]),
  Q('What does a linear `p_j` give?','ماذا تعطي `p_j` الخطية؟',['The trapezoidal corrector of the ABM method','مصحح شبه المنحرف في طريقة ABM'],[['Order up to `1 + α` for smooth f.','رتبة حتى `1 + α` للدوال f الملساء.']],[['The fractional Euler method','طريقة أويلر الكسرية'],['The L1 scheme','مخطط L1']]),
]);

lesson('508',56,[
  ['Lubich’s fractional linear multistep methods take the generating polynomial of a classical method and raise it to the power α. From BDF1 (backward Euler) one gets the GL weights:','طرق لوبيش الخطية الكسرية متعددة الخطوات تأخذ كثيرة الحدود المولدة لطريقة كلاسيكية وترفعها للأس α. ومن BDF1 (أويلر الخلفي) نحصل على أوزان GL:'],
  '(1 − ζ)^{α} = Σ_j w_j ζ^j,     BDF2:   (#f{3}{2} − 2ζ + #f{1}{2}ζ^2)^{α}',
  ['The order of the classical method carries over for smooth solutions. Starting weights (a few extra terms near t = 0) correct the loss of order caused by the non-smooth terms `t^{kα}`.','ورتبة الطريقة الكلاسيكية تنتقل للحلول الملساء. وأوزان البدء (بضعة حدود إضافية قرب t = 0) تصحح فقدان الرتبة الناتج عن الحدود غير الملساء `t^{kα}`.'],
],[
  Q('Expand `(1 − ζ)^{1/2}` to second order.','انشر `(1 − ζ)^{1/2}` حتى الرتبة الثانية.','1 − #f{1}{2}ζ − #f{1}{8}ζ^2',[['The GL weights of Lesson 52.','أوزان GL في الدرس 52.']],['1 + #f{1}{2}ζ + #f{1}{8}ζ^2','1 − ζ + ζ^2','1 − #f{1}{2}ζ + #f{1}{8}ζ^2']),
  Q('Which classical method generates the GL weights?','أي طريقة كلاسيكية تولّد أوزان GL؟',['BDF1 (backward Euler)','BDF1 (أويلر الخلفي)'],['1 − ζ'],['BDF2',['the trapezoidal rule','قاعدة شبه المنحرف'],['Runge–Kutta 4','رونج–كوتا 4']]),
  Q('What order does the BDF2-based method reach for smooth solutions?','أي رتبة تبلغها الطريقة المبنية على BDF2 للحلول الملساء؟','2',[['The order of BDF2 carries over.','رتبة BDF2 تنتقل.']],['1','α','2 − α']),
  Q('What are starting weights for?','لماذا أوزان البدء؟',['To integrate the non-smooth terms `t^{kα}` near t = 0 exactly and restore the order','لتكامل الحدود غير الملساء `t^{kα}` قرب t = 0 بالضبط واستعادة الرتبة'],[['A few extra weights for the first points.','بضعة أوزان إضافية للنقاط الأولى.']],[['To start the iteration','لبدء التكرار'],['They are not needed','لا حاجة لها']]),
]);

lesson('508',57,[
  ['The classical orders assume smooth solutions. Since the solution typically behaves like `ψ_0 + ct^{α}`, the error of most schemes on a uniform mesh is limited near t = 0, and the global rate drops. For L1 on a uniform mesh:','الرتب الكلاسيكية تفترض حلولاً ملساء. ولأن الحل يسلك عادة مثل `ψ_0 + ct^{α}` يكون خطأ معظم المخططات على شبكة منتظمة محدوداً قرب t = 0 فتنخفض الرتبة الكلية. ولـ L1 على شبكة منتظمة:'],
  'max_{n}|y(t_n) − y_n| ~ N^{−α},     |y(T) − y_N| ~ N^{−1}     (y ~ t^{α},   h = #f{T}{N})',
  ['The maximum error sits near t = 0; at a fixed time the rate is better. This is why the reported order of a method must be checked on a problem with the true singular behaviour, not only on smooth manufactured solutions such as `t^2`.','وأكبر خطأ يقع قرب t = 0، وعند زمن ثابت يكون المعدل أفضل. ولهذا يجب فحص الرتبة المعلنة لطريقة على مسألة بالسلوك الشاذ الحقيقي، لا على حلول مصنّعة ملساء فقط مثل `t^2`.'],
],[
  Q('For α = 0.3, what maximum-error rate does uniform L1 give near t = 0?','عند α = 0.3 أي معدل لأكبر خطأ يعطيه L1 المنتظم قرب t = 0؟','~ N^{−0.3}',['N^{−α}'],['~ N^{−1.7}','~ N^{−1}','~ N^{−2}']),
  Q('Why is `y = t^2` a poor test of an L1 code?','لماذا يكون `y = t^2` اختباراً سيئاً لكود L1؟',['It is smooth, so it shows the order `2 − α` that real solutions do not have','ملساء فتُظهر الرتبة `2 − α` التي لا تملكها الحلول الحقيقية'],[['Add a test with `t^{α}` behaviour.','أضف اختباراً بسلوك `t^{α}`.']],[['It is too hard','صعبة جداً'],['It is not a solution','ليست حلاً']]),
  Q('Which test solution shows the true behaviour?','أي حل اختبار يُظهر السلوك الحقيقي؟','y = E_{α}(−t^{α})',[['It contains `t^{α}`, `t^{2α}`, …','يحتوي `t^{α}` و `t^{2α}` و …']],['y = t^2','y = 1 + t','y = sin t']),
  Q('The reported L1 errors at t = 1 for `E_{1/2}(−t^{1/2})` halve when N doubles. What is the order?','أخطاء L1 المعلنة عند t = 1 لـ `E_{1/2}(−t^{1/2})` تنتصف عند مضاعفة N. ما الرتبة؟','1',['2^1 = 2'],['1.5','0.5','2']),
]);

lesson('508',58,[
  ['A graded mesh clusters the points near t = 0, where the solution is singular. With the exponent below, L1 recovers its full order 2 − α:','الشبكة المتدرجة تكثّف النقاط قرب t = 0 حيث الحل شاذ. ومع الأس أدناه يستعيد L1 رتبته الكاملة 2 − α:'],
  't_j = T (#f{j}{N})^{r},     r = #f{2 − α}{α}   ⇒   O(N^{α−2})',
  ['For `^CD^{1/2}y = −y` with r = 3 the L1 errors at t = 1 become 6.5, 2.3, 0.81, 0.29 × `10^{−4}` for N = 40, …, 320: order 1.5 = 2 − α, against 1 on the uniform mesh. Correction terms (starting weights) are an alternative that keeps a uniform mesh.','ولـ `^CD^{1/2}y = −y` مع r = 3 تصبح أخطاء L1 عند t = 1 هي 6.5 و 2.3 و 0.81 و 0.29 × `10^{−4}` لـ N = 40 حتى 320: رتبة 1.5 = 2 − α مقابل 1 على الشبكة المنتظمة. وحدود التصحيح (أوزان البدء) بديل يحافظ على شبكة منتظمة.'],
],[
  Q('Compute the grading exponent r for α = 1/2.','احسب أس التدرج r عند α = 1/2.','3',['#f{2 − 0.5}{0.5}'],['2','1.5','4']),
  Q('Give the first mesh point `t_1` for N = 10, T = 1, r = 3.','أعط أول نقطة شبكة `t_1` عند N = 10 و T = 1 و r = 3.','0.001',['(#f{1}{10})^3'],['0.1','0.01','0.0001']),
  Q('What order does the graded mesh give in the experiment?','أي رتبة تعطيها الشبكة المتدرجة في التجربة؟','1.5',['#f{6.5}{2.3} ≈ 2.8 ≈ 2^{1.5}'],['1','2','0.5']),
  Q('What is the drawback of strong grading?','ما عيب التدرج القوي؟',['Very small first steps and large steps near T, which can hurt accuracy and conditioning there','خطوات أولى صغيرة جداً وخطوات كبيرة قرب T، وقد يضر ذلك بالدقة والشرط هناك'],[['The choice of r is a balance.','اختيار r موازنة.']],[['None','لا عيب'],['It changes the solution','يغيّر الحل']]),
]);

lesson('508',59,[
  ['Stability of a time-stepping method is studied on the test equation `^CD^{α}y = λy`. The method is stable for a given `z = h^{α}λ` if the numerical solution stays bounded; the set of such z is the stability region. The true solution decays when','يُدرس استقرار طريقة الخطو الزمني على معادلة الاختبار `^CD^{α}y = λy`. وتكون الطريقة مستقرة لـ `z = h^{α}λ` معطاة إذا بقي الحل العددي محدوداً، ومجموعة هذه القيم منطقة الاستقرار. والحل الحقيقي يتناقص عندما'],
  '^CD^{α}y = λy,     z = h^{α}λ,     |arg λ| > #f{απ}{2}',
  ['Explicit methods (fractional Euler, ABM predictor) have bounded regions, so stiff problems force small h. Implicit methods (implicit Euler, L1, BDF-based FLMM) are stable in the whole sector where the true solution decays.','والطرق الصريحة (أويلر الكسرية ومتنبئ ABM) لها مناطق محدودة فتفرض المسائل الجاسئة h صغيرة. والطرق الضمنية (أويلر الضمنية و L1 و FLMM المبنية على BDF) مستقرة في كامل القطاع الذي يتناقص فيه الحل الحقيقي.'],
],[
  Q('For `λ = −1000`, `α = 1/2` and `h = 10^{−4}`, compute z.','لـ `λ = −1000` و `α = 1/2` و `h = 10^{−4}` احسب z.','−10',['10^{−2}·(−1000)'],['−0.1','−1000','−10^{−4}']),
  Q('Which kind of method suits a stiff fractional problem?','أي نوع من الطرق يناسب مسألة كسرية جاسئة؟',['Implicit','ضمنية'],[['Its stability region covers the decaying sector.','منطقة استقرارها تغطي القطاع المتناقص.']],[['Explicit','صريحة'],['Neither works','لا يصلح أي منهما']]),
  Q('Why does the variable z contain `h^{α}` and not h?','لماذا يحتوي المتغير z على `h^{α}` لا h؟',['The fractional derivative scales like `h^{−α}` under time scaling','المشتقة الكسرية تتحجم مثل `h^{−α}` عند تحجيم الزمن'],['^CD^{α}y ≈ h^{−α}Σ w_j y_{n−j}'],[['By convention','اصطلاحاً'],['Because α < 1','لأن α < 1']]),
  Q('Is the L1 scheme implicit or explicit for `^CD^{α}y = f(t, y)`?','هل مخطط L1 ضمني أم صريح لـ `^CD^{α}y = f(t, y)`؟',['Implicit: `y_n` appears on both sides','ضمني: `y_n` تظهر في الطرفين'],['^CD^{α}y(t_n) ≈ … + c y_n = f(t_n, y_n)'],[['Explicit','صريح'],['Neither','ليس هذا ولا ذاك']]),
]);

lesson('508',60,[
  ['Every step of a direct scheme uses the whole history: N steps cost `O(N^2)` operations and `O(N)` memory. Fast methods compress the memory by approximating the kernel with a sum of exponentials:','كل خطوة في مخطط مباشر تستخدم التاريخ كله: N خطوة تكلف `O(N^2)` عملية و `O(N)` ذاكرة. والطرق السريعة تضغط الذاكرة بتقريب النواة بمجموع أسيات:'],
  't^{α−1} ≈ Σ_{l=1}^{L} ω_l e^{−s_l t},     O(N^2)  →  O(N L),     L ~ log N',
  ['Each exponential term is updated recursively in O(1), so long simulations become feasible. Other options: FFT-based evaluation of the convolution (`O(N log^2 N)`) and the short-memory principle (cut the history, at the price of accuracy).','وكل حد أسي يُحدَّث تكرارياً بتكلفة O(1) فتصبح المحاكاة الطويلة ممكنة. ومن الخيارات الأخرى حساب الالتفاف بـ FFT (`O(N log^2 N)`) ومبدأ الذاكرة القصيرة (قص التاريخ على حساب الدقة).'],
],[
  Q('How many operations does a direct scheme need for `N = 10^5` steps?','كم عملية يحتاجها مخطط مباشر لـ `N = 10^5` خطوة؟','≈ 5 × 10^9',['#f{N^2}{2}'],['≈ 10^5','≈ 10^{11}','≈ 10^6']),
  Q('With a sum of L = 40 exponentials, about how many?','مع مجموع من L = 40 أسية كم تقريباً؟','≈ 4 × 10^6',['N L'],['≈ 5 × 10^9','≈ 40','≈ 10^5']),
  Q('Why can each exponential term be updated in O(1)?','لماذا يمكن تحديث كل حد أسي بتكلفة O(1)؟',['`e^{−s(t + h)} = e^{−sh}e^{−st}`: the history integral of an exponential satisfies a one-step recursion','`e^{−s(t + h)} = e^{−sh}e^{−st}`: تكامل التاريخ لأسية يحقق علاقة تكرار بخطوة واحدة'],[['Memory becomes a few numbers per term.','تصبح الذاكرة بضعة أعداد لكل حد.']],[['Because L is small','لأن L صغير'],['It cannot','لا يمكن']]),
  Q('What is the drawback of the short-memory principle?','ما عيب مبدأ الذاكرة القصيرة؟',['It neglects the old history, which the algebraic tail makes important','يهمل التاريخ القديم الذي يجعله الذيل الجبري مهماً'],[['The error does not vanish as h → 0.','الخطأ لا ينعدم عندما h → 0.']],[['It is slow','بطيء'],['None','لا عيب']]),
]);

/* ---- 508 · Unit 7 (lessons 61–70): spectral methods for initial-value problems ---- */
lesson('508',61,[
  ['Spectral methods expand the solution in orthogonal polynomials and converge exponentially for smooth functions. But the solution of a fractional equation contains `t^{α}`, and a polynomial in t represents `t^{1/2}` badly near 0. The maximum error of the Legendre expansion of `t^{1/2}` on [0, 1]:','الطرق الطيفية تنشر الحل بكثيرات حدود متعامدة وتتقارب أسياً للدوال الملساء. لكن حل المعادلة الكسرية يحتوي `t^{α}`، وكثيرة الحدود في t تمثل `t^{1/2}` تمثيلاً سيئاً قرب 0. أكبر خطأ لمفكوك ليجندر لـ `t^{1/2}` على [0, 1]:'],
  'M = 4, 8, 16:     0.101,   0.056,   0.029     (~ M^{−1})',
  ['The error halves when M doubles and sits at t = 0. For `^CD^{1/2}y + y = 0` the spectral solution in t has errors 1.3, 0.41, `0.11 × 10^{−2}` at t = 1 for M = 4, 8, 16: only algebraic convergence.','والخطأ ينتصف عند مضاعفة M ويقع عند t = 0. ولـ `^CD^{1/2}y + y = 0` تكون أخطاء الحل الطيفي في t عند t = 1 هي 1.3 و 0.41 و `0.11 × 10^{−2}` لـ M = 4 و 8 و 16: تقارب جبري فقط.'],
],[
  Q('What rate do the errors 0.101, 0.056, 0.029 show?','أي معدل تُظهره الأخطاء 0.101 و 0.056 و 0.029؟','~ M^{−1}',['#f{0.101}{0.056} ≈ 1.8 ≈ 2'],['~ e^{−M}','~ M^{−2}','~ M^{−1/2}']),
  Q('Where is the error of the expansion of `t^{1/2}` largest?','أين يكون خطأ مفكوك `t^{1/2}` أكبر؟','t = 0',[['The derivative of `t^{1/2}` is infinite there.','مشتقة `t^{1/2}` لانهائية هناك.']],['t = 1','t = #f{1}{2}',['everywhere equally','في كل مكان بالتساوي']]),
  Q('How many correct digits does doubling M give for an error ~ `M^{−1}`?','كم رقماً صحيحاً تعطيه مضاعفة M لخطأ ~ `M^{−1}`؟','log_{10} 2 ≈ 0.3',[['Ten times more work for one digit.','عشرة أضعاف العمل لرقم واحد.']],['1','2','M']),
  Q('Which function would a Legendre expansion in t represent with exponential accuracy?','أي دالة يمثلها مفكوك ليجندر في t بدقة أسية؟','e^{−t}',[['It is analytic on [0, 1].','تحليلية على [0, 1].']],['t^{1/2}','E_{1/2}(−t^{1/2})','t^{0.3}']),
]);

lesson('508',62,[
  ['The cure is a change of variable. With `u = t^{λ}` the powers `t^{kλ}` become ordinary powers `u^k`, and a solution of the form `Σ a_k t^{kλ}` becomes a smooth function of u:','العلاج تغيير المتغير. مع `u = t^{λ}` تصبح القوى `t^{kλ}` قوى عادية `u^k`، والحل من الصورة `Σ a_k t^{kλ}` يصبح دالة ملساء في u:'],
  'E_{1/2}(−t^{1/2}) = 1 − 1.1284 u + u^2 − 0.7523 u^3 + #f{1}{2}u^4 − …,     u = t^{1/2}',
  ['Fractional integrals keep this structure when `μ/λ` is a whole number: `D^{−μ} t^{kλ} = #f{Γ(kλ + 1)}{Γ(kλ + μ + 1)} u^{k+μ/λ}`. So the equation can be solved with polynomials in u.','والتكاملات الكسرية تحافظ على هذه البنية عندما يكون `μ/λ` عدداً صحيحاً: `D^{−μ} t^{kλ} = #f{Γ(kλ + 1)}{Γ(kλ + μ + 1)} u^{k+μ/λ}`. فيمكن حل المعادلة بكثيرات حدود في u.'],
],[
  Q('Write `t^{3/2}` in the variable `u = t^{1/2}`.','اكتب `t^{3/2}` بالمتغير `u = t^{1/2}`.','u^3',['(t^{1/2})^3'],['u^{3/2}','u^6','u^{1/3}']),
  Q('Compute `D^{−1/2} t^{1/2}` in terms of u.','احسب `D^{−1/2} t^{1/2}` بدلالة u.','#f{#r{π}}{4}·2u^2 = #f{#r{π}}{2}u^2 ≈ 0.8862 u^2',['#f{Γ(3/2)}{Γ(2)} t,   t = u^2'],['u','#f{u^2}{Γ(2)}','0.5642 u']),
  Q('Explain the coefficient 1.1284 in the expansion above.','فسّر المعامل 1.1284 في المفكوك أعلاه.','#f{1}{Γ(3/2)} = #f{2}{#r{π}}',['E_{1/2}(−u) = Σ #f{(−u)^k}{Γ(k/2 + 1)},   k = 1'],['#f{1}{Γ(1/2)}','#r{π}','#f{1}{2}']),
  Q('For λ = 1/2, which μ keeps `D^{−μ}u^k` a polynomial in u?','عند λ = 1/2 أي μ تُبقي `D^{−μ}u^k` كثيرة حدود في u؟',['Any multiple of 1/2: `μ/λ` must be a whole number','أي مضاعف لـ 1/2: يجب أن يكون `μ/λ` عدداً صحيحاً'],[['For example μ = 1/2, 1, 3/2, 2.','مثلاً μ = 1/2 و 1 و 3/2 و 2.']],[['Only μ = 1','فقط μ = 1'],['Any μ','أي μ']]),
]);

lesson('508',63,[
  ['The fractional Legendre functions are Legendre polynomials in u, shifted to [0, 1]. They are orthogonal with the weight `λt^{λ−1}`, which is just du, and the solution is expanded as in (2.10) of the paper:','دوال ليجندر الكسرية هي كثيرات ليجندر في u مزاحة إلى [0, 1]. وهي متعامدة بالوزن `λt^{λ−1}` الذي هو du نفسه، ويُنشر الحل كما في (2.10) في البحث:'],
  'L_j^{λ}(t) = P_j(2t^{λ} − 1),     y(t) ≈ Σ_{j=0}^{M} c_j L_j^{λ}(t),     c_j = (2j + 1)∫_0^1 y(t) L_j^{λ}(t) λt^{λ−1} dt',
  ['The first functions: `L_0 = 1`, `L_1 = 2u − 1`, `L_2 = 6u^2 − 6u + 1`. All of them equal 1 at t = 1 and `(−1)^j` at t = 0, which makes evaluating the expansion at the ends easy.','والدوال الأولى: `L_0 = 1` و `L_1 = 2u − 1` و `L_2 = 6u^2 − 6u + 1`. وكلها تساوي 1 عند t = 1 و `(−1)^j` عند t = 0، فيسهل حساب المفكوك عند الطرفين.'],
],[
  Q('Expand `t^{1/2}` with λ = 1/2.','انشر `t^{1/2}` مع λ = 1/2.','t^{1/2} = #f{1}{2}L_0 + #f{1}{2}L_1',['u = #f{1}{2} + #f{1}{2}(2u − 1)'],['t^{1/2} = L_1','t^{1/2} = L_0 + L_1','t^{1/2} = #f{1}{2}L_1']),
  Q('Expand `t` with λ = 1/2.','انشر `t` مع λ = 1/2.','t = #f{1}{3}L_0 + #f{1}{2}L_1 + #f{1}{6}L_2',['u^2 = #f{1}{3} + (u − #f{1}{2}) + (u^2 − u + #f{1}{6})'],['t = L_2','t = #f{1}{2}L_0 + #f{1}{2}L_2','t = #f{1}{6}L_0 + #f{1}{3}L_1 + #f{1}{2}L_2']),
  Q('If `y = Σ c_j L_j^{λ}`, what is y(1)?','إذا كانت `y = Σ c_j L_j^{λ}` فما y(1)؟','y(1) = Σ c_j',['L_j^{λ}(1) = P_j(1) = 1'],['y(1) = c_0','y(1) = Σ (−1)^j c_j','y(1) = 0']),
  Q('Compute `∫_0^1 L_1^{λ}(t)^2 λt^{λ−1} dt`.','احسب `∫_0^1 L_1^{λ}(t)^2 λt^{λ−1} dt`.','#f{1}{3}',['∫_0^1 (2u − 1)^2 du'],['1','#f{1}{2}','#f{λ}{3}']),
]);

lesson('508',64,[
  ['Choose λ so that every power in the problem is a whole multiple of it: the orders of the derivatives and the powers expected in the solution and the data:','اختر λ بحيث تكون كل قوة في المسألة مضاعفاً صحيحاً لها: رتب المشتقات والقوى المتوقعة في الحل والمعطيات:'],
  'λ = gcd(β_1, β_2, …)',
  ['For `^CD^{1/2}y + y = 0`, λ = 1/2. With orders 1/2 and 1/3, λ = 1/6. A small λ makes the basis fit but slows convergence at small M, so λ should be as large as the problem allows (Unit 9 measures this).','ولـ `^CD^{1/2}y + y = 0` تكون λ = 1/2. ومع الرتبتين 1/2 و 1/3 تكون λ = 1/6. والقيمة الصغيرة لـ λ تجعل الأساس مناسباً لكنها تبطئ التقارب عند M صغير، فيجب أن تكون λ أكبر ما تسمح به المسألة (الوحدة 9 تقيس ذلك).'],
],[
  Q('Find λ for orders 1/2 and 1/3.','أوجد λ للرتبتين 1/2 و 1/3.','#f{1}{6}',['gcd(#f{3}{6}, #f{2}{6})'],['#f{1}{2}','#f{1}{3}','#f{5}{6}']),
  Q('Find λ for the Bagley–Torvik equation `y″ + ^CD^{3/2}y + y = f`.','أوجد λ لمعادلة باغلي–تورفيك `y″ + ^CD^{3/2}y + y = f`.','#f{1}{2}',['gcd(2, #f{3}{2})'],['#f{3}{2}','1','#f{1}{4}']),
  Q('Find λ for orders 0.4 and 1.4 with data containing `t^3`.','أوجد λ للرتبتين 0.4 و 1.4 مع معطيات تحتوي `t^3`.','0.2',['gcd(0.4, 1.4, 3) = 0.2'],['0.4','1','0.1']),
  Q('Why not always take λ very small?','لماذا لا نأخذ λ صغيرة جداً دائماً؟',['A smaller λ needs more terms: it loses at small M','λ الأصغر تحتاج حدوداً أكثر: تخسر عند M صغير'],[['The basis then spans many powers the solution does not have.','فيغطي الأساس قوى كثيرة لا يملكها الحل.']],[['It changes the solution','يغيّر الحل'],['λ must be 1/2','يجب أن تكون λ = 1/2']]),
]);

lesson('508',65,[
  ['Theorem 3.2 turns the fractional integral of the basis into a matrix: `D^{−μ}𝔏_{M,λ} ≈ I_{(−μ)}𝔏_{M,λ}`. Row i contains the coefficients of `D^{−μ}L_i^{λ}`. For λ = μ = 1/2 and M = 2:','النظرية 3.2 تحوّل التكامل الكسري للأساس إلى مصفوفة: `D^{−μ}𝔏_{M,λ} ≈ I_{(−μ)}𝔏_{M,λ}`. والصف i يحتوي معاملات `D^{−μ}L_i^{λ}`. عند λ = μ = 1/2 و M = 2:'],
  'I_{(−1/2)} = #m{0.56419, 0.56419, 0 ;; 0.02663, 0.32204, 0.29541 ;; −0.07989, −0.06341, 0.24215}',
  ['Rows with `i + μ/λ ≤ M` are exact, here rows 0 and 1; the last row is truncated. In double precision the explicit double sum for the entries cancels badly: `|E_{i,k}|` reaches `6.5 × 10^7` at M = 12, so the entries should be computed in higher precision or by stable quadrature.','والصفوف التي تحقق `i + μ/λ ≤ M` مضبوطة، وهي هنا الصفان 0 و 1، والصف الأخير مقطوع. وفي الدقة المضاعفة يعاني المجموع المزدوج الصريح للعناصر من إلغاء شديد: `|E_{i,k}|` تبلغ `6.5 × 10^7` عند M = 12، فيجب حساب العناصر بدقة أعلى أو بتربيع مستقر.'],
],[
  Q('Check row 0: expand `D^{−1/2}1`.','تحقق من الصف 0: انشر `D^{−1/2}1`.','#f{u}{Γ(3/2)} = 0.56419(L_0 + L_1)',['D^{−1/2}1 = #f{t^{1/2}}{Γ(3/2)},   u = #f{1}{2}(L_0 + L_1)'],['L_0 + L_1','0.56419 L_0','#f{u}{Γ(1/2)}']),
  Q('Why is the entry in row 0, column 2 zero?','لماذا العنصر في الصف 0 والعمود 2 صفر؟',['`D^{−1/2}1` is of degree 1 in u, so it has no `L_2` part','`D^{−1/2}1` من الدرجة 1 في u فلا جزء له في `L_2`'],[['Exact rows contain only the needed degrees.','الصفوف المضبوطة تحتوي الدرجات اللازمة فقط.']],[['By rounding','بالتقريب'],['Because `L_2(1) = 0`','لأن `L_2(1) = 0`']]),
  Q('Which rows of `I_{(−1/2)}` are exact for M = 5 and λ = 1/2?','أي صفوف `I_{(−1/2)}` مضبوطة عند M = 5 و λ = 1/2؟','i = 0, 1, 2, 3, 4',['i + 1 ≤ 5'],['i = 0, …, 5',['i = 0 only','i = 0 فقط'],'i = 0, 1, 2']),
  Q('Use row 0 to compute `(D^{−1/2}1)(1)`.','استخدم الصف 0 لحساب `(D^{−1/2}1)(1)`.','0.56419 + 0.56419 = 1.12838 = #f{1}{Γ(3/2)}',[['Every `L_j` equals 1 at t = 1.','كل `L_j` تساوي 1 عند t = 1.']],['0.56419','0.88623','1']),
]);

lesson('508',66,[
  ['For `^CD^{α}y + y = 0`, `y(0) = 1`, the integrated form is `y + D^{−α}y = 1`. Insert `y = c^T𝔏` and use Theorem 3.2:','لـ `^CD^{α}y + y = 0` مع `y(0) = 1` تكون الصيغة التكاملية `y + D^{−α}y = 1`. عوّض `y = c^T𝔏` واستخدم النظرية 3.2:'],
  'c^T(I + I_{(−α)})𝔏 = e_0^T𝔏     ⇒     (I + I_{(−α)}^T)c = e_0',
  ['For α = λ = 1/2 the error at t = 1 is `5.8 × 10^{−2}`, `1.2 × 10^{−2}`, `2.8 × 10^{−4}`, `5.7 × 10^{−8}`, `2.4 × 10^{−16}` for M = 1, 2, 4, 8, 16. The initial value is not imposed exactly: y(0) = 0.919, 0.985, 0.9997 for M = 1, 2, 4, and it converges with the rest of the solution.','وعند α = λ = 1/2 يكون الخطأ عند t = 1 هو `5.8 × 10^{−2}` و `1.2 × 10^{−2}` و `2.8 × 10^{−4}` و `5.7 × 10^{−8}` و `2.4 × 10^{−16}` لـ M = 1 و 2 و 4 و 8 و 16. والقيمة الابتدائية لا تُفرض بالضبط: y(0) = 0.919 و 0.985 و 0.9997 لـ M = 1 و 2 و 4، وهي تتقارب مع بقية الحل.'],
],[
  Q('With M = 1, `I + I_{(−1/2)}^T = #m{1.56419, 0.02663 ;; 0.56419, 1.32204}`. Solve for c.','مع M = 1 تكون `I + I_{(−1/2)}^T = #m{1.56419, 0.02663 ;; 0.56419, 1.32204}`. أوجد c.','c ≈ (0.6440, −0.2748)',['c_1 = −0.42676c_0,   1.55283c_0 = 1'],['c ≈ (1, 0)','c ≈ (0.6440, 0.2748)','c ≈ (0.5642, 0.5642)']),
  Q('Evaluate this approximation at t = 1 and give its error.','احسب هذا التقريب عند t = 1 وأعط خطأه.','0.3692,   |0.3692 − 0.4276| ≈ 0.058',['y(1) = c_0 + c_1,   E_{1/2}(−1) = 0.4276'],['0.9188,   0.49','0.4276,   0','0.6440,   0.22']),
  Q('Evaluate it at t = 0.','احسبه عند t = 0.','0.9188',['y(0) = c_0 − c_1'],['1','0.3692','0.6440']),
  Q('How many correct digits does each term add between M = 8 and M = 16?','كم رقماً صحيحاً يضيف كل حد بين M = 8 و M = 16؟','≈ 1',['#f{log_{10}(5.7 × 10^{−8}) − log_{10}(2.4 × 10^{−16})}{8} ≈ #f{8.4}{8}'],['≈ 0.3','≈ 2','≈ 8']),
]);

lesson('508',67,[
  ['A multi-term equation is integrated with the highest order. For Bagley–Torvik, `y″ + ^CD^{3/2}y + y = 1 + t`, `y(0) = y′(0) = 1` (exact solution `1 + t`), apply `D^{−2}`:','المعادلة متعددة الحدود تُكامل بأعلى رتبة. ولمعادلة باغلي–تورفيك `y″ + ^CD^{3/2}y + y = 1 + t` مع `y(0) = y′(0) = 1` (الحل المضبوط `1 + t`) طبّق `D^{−2}`:'],
  'y + D^{−1/2}y + D^{−2}y = 1 + t + D^{−1/2}(1 + t) + #f{t^2}{2} + #f{t^3}{6}',
  ['Each operator becomes a matrix, `(I + I_{(−1/2)}^T + I_{(−2)}^T)c = h`, with λ = 1/2. Since `1 + t = 1 + u^2` lies in the space, the computed coefficients for M = 2 are exactly `(4/3, 1/2, 1/6)`: the projected equation is satisfied by the exact solution.','وكل مؤثر يصبح مصفوفة `(I + I_{(−1/2)}^T + I_{(−2)}^T)c = h` مع λ = 1/2. ولأن `1 + t = 1 + u^2` في الفضاء تكون المعاملات المحسوبة عند M = 2 هي بالضبط `(4/3, 1/2, 1/6)`: المعادلة المُسقطة يحققها الحل المضبوط.'],
],[
  Q('What does `D^{−2}y″` give?','ماذا يعطي `D^{−2}y″`؟','y − 1 − t',['y − y(0) − y′(0)t'],['y','y − 1','y″']),
  Q('What does `D^{−2} ^CD^{3/2}y` give?','ماذا يعطي `D^{−2} ^CD^{3/2}y`؟','D^{−1/2}(y − 1 − t)',['D^{−1/2}D^{−3/2} ^CD^{3/2}y'],['D^{−1/2}y','y − 1 − t','D^{−7/2}y']),
  Q('Check the integrated form with `y = 1 + t`.','تحقق من الصيغة التكاملية مع `y = 1 + t`.','D^{−2}(1 + t) = #f{t^2}{2} + #f{t^3}{6}',[['The other terms cancel against the left-hand side.','بقية الحدود تُلغى مع الطرف الأيسر.']],['D^{−2}(1 + t) = t^2','D^{−2}(1 + t) = 0','D^{−2}(1 + t) = #f{t^2}{2}']),
  Q('Why are the coefficients `(4/3, 1/2, 1/6)`?','لماذا المعاملات `(4/3, 1/2, 1/6)`؟','1 + u^2 = (1 + #f{1}{3})L_0 + #f{1}{2}L_1 + #f{1}{6}L_2',['u^2 = #f{1}{3}L_0 + #f{1}{2}L_1 + #f{1}{6}L_2'],['1 + u^2 = L_0 + L_2','1 + u^2 = #f{4}{3}L_0 + L_1','1 + u^2 = 2L_0']),
]);

lesson('508',68,[
  ['Instead of projecting, collocation forces the residual of the integrated equation to vanish at M + 1 points: the roots of `L_{M+1}^{λ}`, which are Legendre points mapped by `t = u^{1/λ}`:','بدل الإسقاط يُجبر التجميع باقي المعادلة التكاملية على الانعدام عند M + 1 نقطة: جذور `L_{M+1}^{λ}`، وهي نقاط ليجندر المحوّلة بـ `t = u^{1/λ}`:'],
  'M = 1,   λ = #f{1}{2}:     u = #f{3 ∓ #r{3}}{6} = 0.2113, 0.7887,     t = u^2 = 0.0447, 0.6220',
  ['The mapped points cluster near t = 0, where the solution varies fastest. For a linear equation the residual `c^T(I + I_{(−α)})𝔏 − 1` is a polynomial of degree M in u; vanishing at M + 1 points makes it zero, so collocation gives exactly the tau solution of Lesson 66.','والنقاط المحوّلة تتكثف قرب t = 0 حيث يتغير الحل أسرع. وللمعادلة الخطية يكون الباقي `c^T(I + I_{(−α)})𝔏 − 1` كثيرة حدود من الدرجة M في u، وانعدامه عند M + 1 نقطة يجعله صفراً، فيعطي التجميع حل الدرس 66 نفسه.'],
],[
  Q('Find the mapped points for M = 2, λ = 1/2.','أوجد النقاط المحوّلة عند M = 2 و λ = 1/2.','t = 0.0127,   0.25,   0.7873',['u = #f{1}{2} ∓ #f{1}{2}#r{#f{3}{5}},   #f{1}{2};     t = u^2'],['t = 0.1127,   0.5,   0.8873','t = 0,   0.5,   1','t = 0.25,   0.5,   0.75']),
  Q('With λ = 1/4, where does the point u = 1/2 go?','مع λ = 1/4 إلى أين تذهب النقطة u = 1/2؟','t = #f{1}{16}',['t = u^4'],['t = #f{1}{2}','t = #f{1}{4}','t = #f{1}{8}']),
  Q('Why does collocation give the same solution as the tau system for a linear problem?','لماذا يعطي التجميع حل نظام تاو نفسه للمسألة الخطية؟',['The residual is a polynomial of degree M in u with M + 1 roots, so it is zero','الباقي كثيرة حدود من الدرجة M في u لها M + 1 جذراً فهو صفر'],[['Both then solve the same equations.','فكلاهما يحل المعادلات نفسها.']],[['By chance','مصادفة'],['It does not','لا يعطيه']]),
  Q('What is the advantage of collocation over projection?','ما ميزة التجميع على الإسقاط؟',['No integrals of the data are needed, and nonlinear terms are evaluated at points','لا تلزم تكاملات للمعطيات، والحدود غير الخطية تُحسب عند نقاط'],[['This is why it is used for nonlinear equations (Lesson 69).','ولهذا يُستخدم للمعادلات غير الخطية (الدرس 69).']],[['It is always more accurate','أدق دائماً'],['It needs fewer unknowns','يحتاج مجاهيل أقل']]),
]);

lesson('508',69,[
  ['For a nonlinear equation such as `^CD^{1/2}y = −y^2`, `y(0) = 1`, the integrated form `y = 1 − D^{−1/2}(y^2)` is collocated at the mapped points. `y^2` is taken from its values at the points, and the nonlinear system is solved by Newton’s method:','للمعادلة غير الخطية مثل `^CD^{1/2}y = −y^2` مع `y(0) = 1` تُجمَّع الصيغة التكاملية `y = 1 − D^{−1/2}(y^2)` عند النقاط المحوّلة. وتؤخذ `y^2` من قيمها عند النقاط، ويُحل النظام غير الخطي بطريقة نيوتن:'],
  'F(c) = V c − 1 + V I_{(−1/2)}^T V^{−1}(V c)^2 = 0,     V_{rj} = L_j^{λ}(t_r)',
  ['Newton converges in about six iterations from `c = e_0`. The value `y(1) = 0.563521` agrees with a graded L1 computation; the spectral errors are `1.7 × 10^{−2}`, `1.6 × 10^{−3}`, `1.3 × 10^{−5}`, `1.1 × 10^{−7}`, `8.3 × 10^{−10}` for M = 2, 4, 8, 12, 16.','ونيوتن يتقارب في نحو ست تكرارات بدءاً من `c = e_0`. والقيمة `y(1) = 0.563521` تتفق مع حساب L1 على شبكة متدرجة، والأخطاء الطيفية `1.7 × 10^{−2}` و `1.6 × 10^{−3}` و `1.3 × 10^{−5}` و `1.1 × 10^{−7}` و `8.3 × 10^{−10}` لـ M = 2 و 4 و 8 و 12 و 16.'],
],[
  Q('Write the integrated form of `^CD^{α}y = −y^2`, `y(0) = 1`.','اكتب الصيغة التكاملية لـ `^CD^{α}y = −y^2` مع `y(0) = 1`.','y = 1 − D^{−α}(y^2)',['D^{−α} ^CD^{α}y = y − 1'],['y = 1 + D^{−α}y','y = −D^{α}(y^2)','y = 1 − y^2']),
  Q('What starting guess does `c = e_0` represent?','أي تخمين ابتدائي يمثله `c = e_0`؟','y ≡ 1',['L_0 = 1'],['y ≡ 0','y = t','y = e^{−t}']),
  Q('How fast do the errors fall from M = 8 to M = 16?','بأي سرعة تتناقص الأخطاء من M = 8 إلى M = 16؟',['About 0.5 digit per term, at a constant rate: exponential convergence','نحو 0.5 رقم لكل حد بمعدل ثابت: تقارب أسي'],['#f{log_{10}(1.3 × 10^{−5}) − log_{10}(8.3 × 10^{−10})}{8} ≈ #f{4.2}{8}'],[['About 4 digits per term','نحو 4 أرقام لكل حد'],['Algebraically','جبرياً']]),
  Q('Why is a graded L1 computation a good independent check?','لماذا يكون حساب L1 على شبكة متدرجة فحصاً مستقلاً جيداً؟',['It uses a different discretisation, so agreement is unlikely to be a shared error','يستخدم تقطيعاً مختلفاً فيبعد أن يكون الاتفاق خطأ مشتركاً'],[['Its error for N = 640 is about `6 × 10^{−6}`.','خطؤه عند N = 640 نحو `6 × 10^{−6}`.']],[['It is exact','مضبوط'],['It is faster','أسرع']]),
]);

lesson('508',70,[
  ['Measure the error against an exact solution (or a reference of higher accuracy) on a fine set of points, and plot it against M on a semi-logarithmic scale. Geometric decay is a straight line there, algebraic decay a curve:','قِس الخطأ مقابل حل مضبوط (أو مرجع أدق) على مجموعة كثيفة من النقاط، وارسمه مقابل M بمقياس نصف لوغاريتمي. والتناقص الهندسي خط مستقيم فيه، والتناقص الجبري منحنى:'],
  'e_M = max_t |y(t) − y_M(t)|,     e_M ≈ Cρ^{−M},     e_M ≈ CM^{−p}',
  ['A straight line means the basis fits the solution: λ = 1/2 for `^CD^{1/2}y + y = 0` gains about one digit per term. A curve that flattens means a mismatch (λ = 1 gives 1.3, 0.41, `0.11 × 10^{−2}` at M = 4, 8, 16) or rounding: in double precision the explicit matrix formula stalls near `10^{−8}` beyond M ≈ 10.','الخط المستقيم يعني أن الأساس يناسب الحل: λ = 1/2 لـ `^CD^{1/2}y + y = 0` تكسب نحو رقم لكل حد. والمنحنى الذي يتسطح يعني عدم توافق (λ = 1 تعطي 1.3 و 0.41 و `0.11 × 10^{−2}` عند M = 4 و 8 و 16) أو خطأ تقريب: في الدقة المضاعفة تستقر الصيغة الصريحة للمصفوفة قرب `10^{−8}` بعد M ≈ 10.'],
],[
  Q('Estimate p from the λ = 1 errors `4.1 × 10^{−3}` and `1.1 × 10^{−3}` at M = 8, 16.','قدّر p من أخطاء λ = 1 وهي `4.1 × 10^{−3}` و `1.1 × 10^{−3}` عند M = 8 و 16.','p ≈ 1.9',['log_2 #f{4.1}{1.1} = log_2 3.7'],['p ≈ 1','p ≈ 3.7','p ≈ 0.5']),
  Q('Estimate ρ from `e_4 = 2.8 × 10^{−4}` and `e_8 = 5.7 × 10^{−8}`.','قدّر ρ من `e_4 = 2.8 × 10^{−4}` و `e_8 = 5.7 × 10^{−8}`.','ρ ≈ 8.4',['ρ^4 = #f{2.8 × 10^{−4}}{5.7 × 10^{−8}} ≈ 4900'],['ρ ≈ 4900','ρ ≈ 2','ρ ≈ 70']),
  Q('The error stops decreasing at `10^{−8}` in double precision but not in higher precision. What is the cause?','يتوقف الخطأ عن التناقص عند `10^{−8}` في الدقة المضاعفة لا في الدقة الأعلى. ما السبب؟',['Cancellation in the explicit formula for the matrix entries','الإلغاء في الصيغة الصريحة لعناصر المصفوفة'],[['The method itself still converges.','الطريقة نفسها ما زالت تتقارب.']],[['The solution is not smooth','الحل غير أملس'],['λ is wrong','λ خاطئة']]),
  Q('Why measure the error on many points, not only at t = 1?','لماذا يُقاس الخطأ على نقاط كثيرة لا عند t = 1 فقط؟',['The error can be much larger elsewhere, for example near t = 0','قد يكون الخطأ أكبر بكثير في مكان آخر، مثلاً قرب t = 0'],[['A single point can also hit a lucky zero of the error.','ونقطة واحدة قد تصادف صفراً محظوظاً للخطأ.']],[['t = 1 is always the worst','t = 1 الأسوأ دائماً'],['It is not needed','لا حاجة']]),
]);

/* ---- 508 · Unit 8 (lessons 71–80): fractional partial differential equations ---- */
lesson('508',71,[
  ['The time-fractional diffusion equation replaces `∂_t` by a Caputo derivative of order 0 < α ≤ 1. With zero boundary values on (0, 1) and `u(x, 0) = sin πx`:','معادلة الانتشار الكسرية الزمنية تستبدل `∂_t` بمشتقة كابوتو من الرتبة 0 < α ≤ 1. ومع قيم حدية صفرية على (0, 1) و `u(x, 0) = sin πx`:'],
  '^CD_t^{α}u = κ u_{xx}     ⇒     u(x, t) = E_{α}(−κπ^2t^{α}) sin πx',
  ['For κ = 1 at t = 1: `E_{1/2}(−π^2) = 0.0569` against `e^{−π^2} = 5.2 × 10^{−5}` for α = 1. The fractional solution falls faster at first (half of its value is lost by t = 0.0061, against 0.070) and then much more slowly, like `t^{−α}`. Particles spread sub-diffusively: the mean square displacement is `2κt^{α}/Γ(1 + α)`.','ولـ κ = 1 عند t = 1: `E_{1/2}(−π^2) = 0.0569` مقابل `e^{−π^2} = 5.2 × 10^{−5}` عند α = 1. والحل الكسري يهبط أسرع في البداية (يفقد نصف قيمته عند t = 0.0061 مقابل 0.070) ثم أبطأ بكثير مثل `t^{−α}`. والجسيمات تنتشر انتشاراً بطيئاً: متوسط مربع الإزاحة `2κt^{α}/Γ(1 + α)`.'],
],[
  Q('Reduce the solution to α = 1.','اختصر الحل إلى α = 1.','u = e^{−κπ^2t} sin πx',['E_1(z) = e^z'],['u = cos(πt) sin πx','u = sin πx','u = t sin πx']),
  Q('Estimate `E_{1/2}(−π^2)` from the leading asymptotic term.','قدّر `E_{1/2}(−π^2)` من الحد التقاربي الأول.','#f{1}{π^2#r{π}} ≈ 0.0572',['#f{1}{zΓ(1/2)},   z = π^2'],['≈ e^{−π^2}','≈ #f{1}{π^2}','≈ 0.5']),
  Q('Compute the mean square displacement at t = 1 for κ = 1, α = 1/2.','احسب متوسط مربع الإزاحة عند t = 1 لـ κ = 1 و α = 1/2.','#f{2}{Γ(3/2)} = #f{4}{#r{π}} ≈ 2.257',['#f{2κt^{α}}{Γ(1 + α)}'],['2','1','#f{2}{#r{π}}']),
  Q('Why is this called sub-diffusion?','لماذا يسمى هذا انتشاراً بطيئاً؟',['The mean square displacement grows like `t^{α}`, slower than the linear growth of ordinary diffusion','متوسط مربع الإزاحة ينمو مثل `t^{α}` أبطأ من النمو الخطي للانتشار العادي'],[['Particles are trapped for long random times.','الجسيمات تُحبس أزمنة عشوائية طويلة.']],[['It is slower at every time','أبطأ في كل الأزمنة'],['The solution is smaller','الحل أصغر']]),
]);

lesson('508',72,[
  ['For 1 < α < 2 the equation `^CD_t^{α}u = κu_{xx}` interpolates between diffusion and waves. It needs two initial conditions, `u(x, 0)` and `u_t(x, 0)`. With `u(x, 0) = sin πx` and `u_t(x, 0) = 0`:','عند 1 < α < 2 تتوسط المعادلة `^CD_t^{α}u = κu_{xx}` بين الانتشار والموجات. وتحتاج شرطين ابتدائيين `u(x, 0)` و `u_t(x, 0)`. ومع `u(x, 0) = sin πx` و `u_t(x, 0) = 0`:'],
  'u(x, t) = E_{α}(−κπ^2t^{α}) sin πx,     α = 2:   cos(π#r{κ}t) sin πx',
  ['For α = 1.5, κ = 1 the first zero comes at t = 0.358 (0.5 for the wave) and `E_{1.5}(−π^2) = −0.115`: a damped oscillation that decays like `t^{−α}`. An initial velocity `u_t(x, 0) = sin πx` adds the term `tE_{α,2}(−κπ^2t^{α}) sin πx`.','وعند α = 1.5 و κ = 1 يأتي أول صفر عند t = 0.358 (0.5 للموجة) و `E_{1.5}(−π^2) = −0.115`: تذبذب متخامد يتناقص مثل `t^{−α}`. والسرعة الابتدائية `u_t(x, 0) = sin πx` تضيف الحد `tE_{α,2}(−κπ^2t^{α}) sin πx`.'],
],[
  Q('Reduce `E_{2}(−π^2t^2)` to an elementary function.','اختصر `E_{2}(−π^2t^2)` إلى دالة أولية.','cos πt',['E_2(−z^2) = Σ #f{(−1)^kz^{2k}}{(2k)!}'],['e^{−πt}','cosh πt','sin πt']),
  Q('How many initial conditions does α = 1.5 need?','كم شرطاً ابتدائياً تحتاج α = 1.5؟','2',['⌈1.5⌉ = 2'],['1','3','0']),
  Q('Reduce the velocity term `tE_{α,2}(−π^2t^{α})` to α = 2.','اختصر حد السرعة `tE_{α,2}(−π^2t^{α})` إلى α = 2.','#f{sin πt}{π}',['tE_{2,2}(−π^2t^2) = t Σ #f{(−π^2t^2)^k}{(2k + 1)!}'],['cos πt','t cos πt','sin πt']),
  Q('Does the fractional wave keep its energy as the classical wave does?','هل تحافظ الموجة الكسرية على طاقتها كالموجة الكلاسيكية؟',['No: it is damped, and the amplitude decays like `t^{−α}`','لا: إنها متخامدة والسعة تتناقص مثل `t^{−α}`'],[['The memory acts as a damping.','الذاكرة تعمل مثل التخامد.']],[['Yes','نعم'],['Its energy grows','طاقتها تنمو']]),
]);

lesson('508',73,[
  ['Separation of variables works as for the heat equation. Each sine mode evolves by its own Mittag-Leffler function:','فصل المتغيرات يعمل كما في معادلة الحرارة. وكل نمط جيبي يتطور بدالة ميتاج–ليفلر خاصة به:'],
  'u = Σ_{n≥1} b_n E_{α}(−κ(nπ)^2t^{α}) sin nπx,     b_n = 2∫_0^1 u_0(x) sin nπx dx',
  ['For `u_0 = x(1 − x)`, `b_n = 8/(nπ)^3` for odd n and 0 for even n. The modes decay only algebraically: at t = 1, α = 1/2, mode 3 is still `E_{1/2}(−9π^2)/E_{1/2}(−π^2) = 0.0064/0.0569 ≈ 1/9` of mode 1, while for α = 1 the ratio is `e^{−8π^2} ≈ 10^{−34}`. There is no strong smoothing in time.','ولـ `u_0 = x(1 − x)` تكون `b_n = 8/(nπ)^3` لـ n الفردية و 0 للزوجية. والأنماط تتناقص جبرياً فقط: عند t = 1 و α = 1/2 يبقى النمط 3 نحو `E_{1/2}(−9π^2)/E_{1/2}(−π^2) = 0.0064/0.0569 ≈ 1/9` من النمط 1، بينما النسبة عند α = 1 هي `e^{−8π^2} ≈ 10^{−34}`. فلا تنعيم قوي في الزمن.'],
],[
  Q('Compute `b_1` for `u_0 = x(1 − x)`.','احسب `b_1` لـ `u_0 = x(1 − x)`.','#f{8}{π^3} ≈ 0.258',['b_n = #f{8}{(nπ)^3},   n = 1'],['#f{4}{π^3}','#f{8}{π^2}','#f{1}{4}']),
  Q('Why is `b_2 = 0`?','لماذا `b_2 = 0`؟',['`x(1 − x)` is symmetric about 1/2 and `sin 2πx` is antisymmetric','`x(1 − x)` متماثلة حول 1/2 و `sin 2πx` ضد متماثلة'],[['Their product integrates to zero.','تكامل حاصل ضربهما صفر.']],[['Because n is even','لأن n زوجي'],['It is not zero','ليست صفراً']]),
  Q('For large t, how does mode n compare with mode 1 when α < 1?','لـ t الكبيرة كيف يقارن النمط n بالنمط 1 عند α < 1؟','#f{E_{α}(−n^2π^2t^{α})}{E_{α}(−π^2t^{α})} → #f{1}{n^2}',['E_{α}(−z) ≈ #f{1}{zΓ(1 − α)}'],[['→ 0 exponentially','→ 0 أسياً'],'→ 1','→ n^2']),
  Q('Is recovering `u_0` from `u(·, T)` easier or harder than for the heat equation?','هل استرجاع `u_0` من `u(·, T)` أسهل أم أصعب منه لمعادلة الحرارة؟',['Easier: high modes are damped only by `1/n^2`, not exponentially','أسهل: الأنماط العليا تتخامد بـ `1/n^2` فقط لا أسياً'],[['Backward problems are only mildly ill-posed.','المسائل العكسية سيئة الطرح بدرجة خفيفة فقط.']],[['Harder','أصعب'],['Impossible in both cases','مستحيل في الحالتين']]),
]);

lesson('508',74,[
  ['On the whole line the fundamental solution is found by Laplace transform in t and Fourier transform in x. In the Laplace domain it is explicit:','على المستقيم كله يوجد الحل الأساسي بتحويل لابلاس في t وتحويل فورييه في x. وهو صريح في مجال لابلاس:'],
  'Ĝ(x, s) = #f{s^{α/2−1}}{2#r{κ}} e^{−|x|s^{α/2}/#r{κ}},     G(0, t) = #f{t^{−α/2}}{2#r{κ} Γ(1 − α/2)}',
  ['G depends on x only through the similarity variable `x/t^{α/2}` and is expressed by the M-Wright (Mainardi) function. Its peak at x = 0 has a cusp for α < 1, and its width grows like `t^{α/2}`.','و G تعتمد على x عبر متغير التشابه `x/t^{α/2}` فقط وتُعبَّر بدالة M-Wright (ماينردي). وقمتها عند x = 0 لها رأس حاد عند α < 1 وعرضها ينمو مثل `t^{α/2}`.'],
],[
  Q('Reduce `G(0, t)` to α = 1.','اختصر `G(0, t)` إلى α = 1.','#f{1}{2#r{πκt}}',['Γ(#f{1}{2}) = #r{π}'],['#f{1}{2#r{κt}}','#f{1}{#r{4πt}}·κ','#f{t^{−1}}{2}']),
  Q('Compute the constant in `G(0, t)` for α = 1/2, κ = 1.','احسب الثابت في `G(0, t)` عند α = 1/2 و κ = 1.','#f{1}{2Γ(3/4)} ≈ 0.408',['Γ(#f{3}{4}) ≈ 1.2254'],['≈ 0.282','≈ 0.5','≈ 0.886']),
  Q('How does the width of G grow for α = 1/2?','كيف ينمو عرض G عند α = 1/2؟','~ t^{1/4}',['t^{α/2}'],['~ t^{1/2}','~ t','~ t^{1/8}']),
  Q('Check: for α = 1, `Ĝ(x, s)` is the Laplace transform of which function?','تحقق: عند α = 1 يكون `Ĝ(x, s)` تحويل لابلاس لأي دالة؟','#f{1}{2#r{πκt}} e^{−x^2/(4κt)}',['ℒ{#f{e^{−x^2/(4κt)}}{#r{πκt}}} = #f{e^{−|x|#r{s/κ}}}{#r{κs}}'],['e^{−|x|t}','#f{1}{2} e^{−|x|}','δ(x)']),
]);

lesson('508',75,[
  ['The paper treats a general multi-term problem on `[0, γ] × [0, 1]` that contains the equations of Lessons 71–72 as special cases:','يعالج البحث مسألة عامة متعددة الحدود على `[0, γ] × [0, 1]` تحتوي معادلات الدرسين 71–72 حالاتٍ خاصة:'],
  '^CD^{μ_s} y + Σ_{i=1}^{s−1} a_i ^CD^{μ_i} y + Σ_{i=1}^{s} b_i ^CD^{ν_i} y + c y = d Δy + e Δ ^CD^{η} y + f Δ ^CD^{υ} y + g',
  '1 < μ_1 < … < μ_s < 2,     0 < ν_i ≤ 1,     0 < η ≤ 1,     1 < υ ≤ 2',
  ['The highest order `μ_s` decides the number of initial conditions (two) and the integration operator `D^{−μ_s}` used in Unit 9. For the integrated form to contain only integrals, every order on the right must satisfy `υ ≤ μ_s`.','وأعلى رتبة `μ_s` تحدد عدد الشروط الابتدائية (اثنان) ومؤثر التكامل `D^{−μ_s}` المستخدم في الوحدة 9. ولكي لا تحتوي الصيغة التكاملية إلا تكاملات يجب أن تحقق كل رتبة في الطرف الأيمن `υ ≤ μ_s`.'],
],[
  Q('Which choice of parameters gives `^CD^{1.5}y = Δy + g`?','أي اختيار للوسائط يعطي `^CD^{1.5}y = Δy + g`؟','s = 1,   μ_1 = 1.5,   b_1 = c = e = f = 0,   d = 1',[['Only the top derivative and ordinary diffusion remain.','تبقى المشتقة العليا والانتشار العادي فقط.']],['s = 2,   d = 0','μ_1 = 1.5,   d = 0','c = 1,   d = 1']),
  Q('With `μ_s = 1.8`, which value of υ is not allowed: 1.5 or 1.9?','مع `μ_s = 1.8` أي قيمة لـ υ غير مسموحة: 1.5 أم 1.9؟','υ = 1.9',['υ ≤ μ_s'],['υ = 1.5',['both','كلاهما'],['neither','لا شيء منهما']]),
  Q('Why is the time domain `[0, 1]` no loss of generality?','لماذا لا يفقد مجال الزمن `[0, 1]` العمومية؟',['Scaling `t = Tτ` turns `[0, T]` into `[0, 1]`, multiplying each term by a power of T','التحجيم `t = Tτ` يحوّل `[0, T]` إلى `[0, 1]` ويضرب كل حد في قوة من T'],['^CD_t^{β} = T^{−β} ^CD_τ^{β}'],[['Solutions end at t = 1','الحلول تنتهي عند t = 1'],['It is a loss','إنه فقد']]),
  Q('How many orders does the problem have for s = 2?','كم رتبة في المسألة عند s = 2؟','6:   μ_1, μ_2, ν_1, ν_2, η, υ',[['The values of λ must fit all of them.','يجب أن تناسب λ جميعها.']],['4','2','3']),
]);

lesson('508',76,[
  ['Each term has a physical role:','لكل حد دور فيزيائي:'],
  '^CD^{μ_i}y:  1 < μ_i < 2,     ^CD^{ν_i}y:  0 < ν_i ≤ 1,     cy,     dΔy,     eΔ ^CD^{η}y,     fΔ ^CD^{υ}y',
  ['Orders in (1, 2) give inertia with memory (damped waves), orders in (0, 1] friction or sub-diffusion, `cy` reaction or a restoring force, `dΔy` ordinary diffusion, and the e and f terms viscoelastic diffusion: the flux depends on the history of the gradient, as in fractional Kelvin–Voigt or second-grade fluid models.','الرتب في (1, 2) تعطي قصوراً بذاكرة (موجات متخامدة)، والرتب في (0, 1] احتكاكاً أو انتشاراً بطيئاً، و `cy` تفاعلاً أو قوة إرجاع، و `dΔy` انتشاراً عادياً، وحدّا e و f انتشاراً لزجاً مرناً: التدفق يعتمد على تاريخ التدرج كما في نماذج كلفن–فويغت الكسرية أو موائع الدرجة الثانية.'],
],[
  Q('Which classical equation is `y_{tt} + 2by_t + cy = dy_{xx}`?','أي معادلة كلاسيكية هي `y_{tt} + 2by_t + cy = dy_{xx}`؟',['The telegraph equation','معادلة البرق'],[['Its fractional version has orders μ and ν instead of 2 and 1.','نسختها الكسرية لها الرتبتان μ و ν بدل 2 و 1.']],[['The heat equation','معادلة الحرارة'],['Laplace’s equation','معادلة لابلاس']]),
  Q('Which term models a viscoelastic stress that depends on the history of the strain rate?','أي حد يمثل إجهاداً لزجاً مرناً يعتمد على تاريخ معدل الانفعال؟','eΔ ^CD^{η}y',[['The derivative acts on Δy: the flux has memory.','المشتقة تعمل على Δy: للتدفق ذاكرة.']],['cy','dΔy','^CD^{μ_s}y']),
  Q('What does a term `cy` with c > 0 do in a diffusion setting?','ماذا يفعل الحد `cy` مع c > 0 في سياق الانتشار؟',['It removes material (decay or reaction)','يزيل مادة (تحلل أو تفاعل)'],[['On the left-hand side with c > 0 it is a sink.','في الطرف الأيسر مع c > 0 هو مصرف.']],[['It adds material','يضيف مادة'],['Nothing','لا شيء']]),
  Q('In the limit `μ_s → 2` with all `a_i = b_i = e = f = 0`, what equation remains?','في النهاية `μ_s → 2` مع كل `a_i = b_i = e = f = 0` أي معادلة تبقى؟','y_{tt} + cy = dΔy + g',[['The Klein–Gordon type wave equation.','معادلة موجة من نوع كلاين–غوردن.']],['y_t = dΔy','Δy = 0','y_{tt} = 0']),
]);

lesson('508',77,[
  ['Two initial conditions and two boundary conditions complete the problem:','شرطان ابتدائيان وشرطان حديان يكملان المسألة:'],
  'y(x, 0) = ψ_0(x),     ∂_t y(x, 0) = ψ_1(x),     y(0, t) = φ_0(t),     y(γ, t) = φ_1(t)',
  ['The data must agree at the corners: `φ_0(0) = ψ_0(0)`, `φ_1(0) = ψ_0(γ)`, and for the velocities `φ_0′(0) = ψ_1(0)`, `φ_1′(0) = ψ_1(γ)`. Test problems are manufactured: choose y, then compute g and the data from it. For Example 1 of the paper, `y = t^3x^2(1 − x)^2e^x` with γ = 1, all four data functions vanish.','ويجب أن تتفق المعطيات عند الأركان: `φ_0(0) = ψ_0(0)` و `φ_1(0) = ψ_0(γ)`، وللسرعات `φ_0′(0) = ψ_1(0)` و `φ_1′(0) = ψ_1(γ)`. ومسائل الاختبار تُصنَّع: اختر y ثم احسب منها g والمعطيات. وللمثال 1 في البحث `y = t^3x^2(1 − x)^2e^x` مع γ = 1 تنعدم دوال المعطيات الأربع.'],
],[
  Q('For `y = t^2 sin πx` on [0, 1], give the four data functions.','لـ `y = t^2 sin πx` على [0, 1] أعط دوال المعطيات الأربع.','ψ_0 = ψ_1 = 0,   φ_0 = φ_1 = 0',['y(x, 0) = 0,   ∂_ty(x, 0) = 2t sin πx|_{t=0} = 0,   sin 0 = sin π = 0'],['ψ_0 = sin πx,   ψ_1 = 0','φ_0 = t^2,   φ_1 = t^2','ψ_1 = 2 sin πx']),
  Q('Manufacture g for `^CD^{1.5}y = Δy + g` with `y = t^2 sin πx`.','صنّع g لـ `^CD^{1.5}y = Δy + g` مع `y = t^2 sin πx`.','g = (#f{2}{Γ(3/2)}t^{1/2} + π^2t^2) sin πx',['^CD^{1.5}t^2 = #f{Γ(3)}{Γ(3/2)}t^{1/2},   Δy = −π^2t^2 sin πx'],['g = (2t^{1/2} − π^2t^2) sin πx','g = π^2t^2 sin πx','g = #f{2}{Γ(3/2)}t^{1/2} sin πx']),
  Q('For Example 2, `y = t^{3.9} sin x` on [0, γ], give `φ_1(t)`.','للمثال 2 `y = t^{3.9} sin x` على [0, γ] أعط `φ_1(t)`.','φ_1(t) = t^{3.9} sin γ',['y(γ, t)'],['φ_1 = 0','φ_1 = t^{3.9}','φ_1 = sin γ']),
  Q('Why must `φ_0(0) = ψ_0(0)`?','لماذا يجب أن يكون `φ_0(0) = ψ_0(0)`؟',['Both give the value of y at the corner (0, 0)','كلاهما يعطي قيمة y عند الركن (0, 0)'],[['Otherwise the solution is discontinuous there.','وإلا كان الحل غير متصل هناك.']],[['By convention','اصطلاحاً'],['It is not needed','لا حاجة']]),
]);

lesson('508',78,[
  ['Space-fractional equations replace the Laplacian by a fractional power. They model Lévy flights: jumps with heavy-tailed lengths. With the spectral definition on (0, 1) and zero boundary values:','المعادلات الكسرية المكانية تستبدل اللابلاسي بقوة كسرية. وهي تنمذج طيران ليفي: قفزات بأطوال ذات ذيول ثقيلة. ومع التعريف الطيفي على (0, 1) وقيم حدية صفرية:'],
  'u_t = −(−Δ)^{β/2}u,     (−Δ)^{β/2} sin nπx = (nπ)^{β} sin nπx,     u = Σ b_n e^{−(nπ)^{β}t} sin nπx',
  ['On the whole line the operator has the Fourier symbol `|ξ|^{β}` (the Riesz derivative), and the fundamental solution decays like `|x|^{−1−β}` instead of a Gaussian. The operator is nonlocal: different definitions on a bounded domain (spectral, integral) give different solutions.','وعلى المستقيم كله للمؤثر الرمز `|ξ|^{β}` في فورييه (مشتقة ريس)، والحل الأساسي يتناقص مثل `|x|^{−1−β}` بدل التوزيع الجاوسي. والمؤثر غير محلي: التعريفات المختلفة على مجال محدود (الطيفي والتكاملي) تعطي حلولاً مختلفة.'],
],[
  Q('Give the decay rate of mode 1 for β = 1.5.','أعط معدل تناقص النمط 1 عند β = 1.5.','π^{1.5} ≈ 5.57',['(nπ)^{β},   n = 1'],['π^2 ≈ 9.87','π ≈ 3.14','1.5π']),
  Q('Reduce the operator to β = 2.','اختصر المؤثر إلى β = 2.','−Δ',['(nπ)^2 sin nπx = −#f{d^2}{dx^2} sin nπx'],['Δ','(−Δ)^{1/2}','I']),
  Q('How does the fundamental solution decay for β = 1.5?','كيف يتناقص الحل الأساسي عند β = 1.5؟','~ |x|^{−2.5}',['|x|^{−1−β}'],['~ e^{−x^2}','~ |x|^{−1.5}','~ e^{−|x|}']),
  Q('Why do the spectral and integral definitions differ on (0, 1)?','لماذا يختلف التعريفان الطيفي والتكاملي على (0, 1)؟',['The operator is nonlocal, so how the outside of the domain is treated matters','المؤثر غير محلي فطريقة معالجة خارج المجال تؤثر'],[['For β = 2 they coincide.','عند β = 2 يتطابقان.']],[['They do not differ','لا يختلفان'],['Because β < 2','لأن β < 2']]),
]);

lesson('508',79,[
  ['A maximum principle holds for time-fractional diffusion (Luchko). Its key is a property of the Caputo derivative at a maximum: if f attains its maximum on [0, T] at `t_0 > 0`, then','يصح مبدأ القيمة العظمى للانتشار الكسري الزمني (لوتشكو). ومفتاحه خاصية لمشتقة كابوتو عند القيمة العظمى: إذا بلغت f قيمتها العظمى على [0, T] عند `t_0 > 0` فإن'],
  '^CD^{α}f(t_0) ≥ 0     (0 < α < 1)',
  ['Consequence: if `^CD_t^{α}u − u_{xx} ≤ 0`, then u is at most the largest of its initial and boundary values. This gives uniqueness and the stability bound `‖u(t)‖ ≤ ‖u_0‖ + #f{t^{α}}{Γ(1 + α)}‖F‖` for a source F. Unlike the integer case, the derivative at a maximum is not zero.','والنتيجة: إذا كان `^CD_t^{α}u − u_{xx} ≤ 0` فإن u لا تتجاوز أكبر قيمها الابتدائية والحدية. وهذا يعطي الوحدانية وحد الاستقرار `‖u(t)‖ ≤ ‖u_0‖ + #f{t^{α}}{Γ(1 + α)}‖F‖` لمصدر F. وبخلاف الحالة الصحيحة لا تساوي المشتقة صفراً عند القيمة العظمى.'],
],[
  Q('Compute `^CD^{1/2}f` at the maximum t = 1/2 of `f = t(1 − t)`.','احسب `^CD^{1/2}f` عند القيمة العظمى t = 1/2 لـ `f = t(1 − t)`.','#f{2}{#r{π}}(t^{1/2} − #f{4}{3}t^{3/2}) ≈ 0.266',['^CD^{1/2}t = #f{2}{#r{π}}t^{1/2},   ^CD^{1/2}t^2 = #f{8}{3#r{π}}t^{3/2}'],['0','−0.266','0.5']),
  Q('What is `f′(1/2)` for the same f?','ما `f′(1/2)` للدالة f نفسها؟','0',['1 − 2t'],['0.266','1','−1']),
  Q('Why is `^CD^{α}f(t_0)` positive although f is at its maximum?','لماذا تكون `^CD^{α}f(t_0)` موجبة مع أن f عند قيمتها العظمى؟',['It averages the whole history, during which f was rising','إنها تأخذ متوسط التاريخ كله الذي كانت f فيه صاعدة'],[['`^CD^{α}f(t_0)` weights `f′(s)` on `[0, t_0]` by `(t_0 − s)^{−α}`.','`^CD^{α}f(t_0)` تزن `f′(s)` على `[0, t_0]` بـ `(t_0 − s)^{−α}`.']],[['Rounding','التقريب'],['f is not smooth','f ليست ملساء']]),
  Q('Bound `‖u(1)‖` for `‖u_0‖ = 1`, `‖F‖ = 2`, α = 1/2.','قدّر `‖u(1)‖` لـ `‖u_0‖ = 1` و `‖F‖ = 2` و α = 1/2.','1 + #f{2}{Γ(3/2)} ≈ 3.26',['‖u_0‖ + #f{t^{α}}{Γ(1 + α)}‖F‖'],['3','1','5']),
]);

lesson('508',80,[
  ['Worked problems for Unit 8: modes, Mittag-Leffler decay, data and the maximum principle.','مسائل محلولة للوحدة 8: الأنماط وتناقص ميتاج–ليفلر والمعطيات ومبدأ القيمة العظمى.'],
  'u = Σ b_n E_{α}(−κ(nπ)^2t^{α}) sin nπx,     E_{α}(−z) ≈ #f{1}{zΓ(1 − α)}',
],[
  Q('Solve `^CD_t^{1/2}u = u_{xx}`, `u(x, 0) = 3 sin 2πx`, zero boundary values.','حل `^CD_t^{1/2}u = u_{xx}` مع `u(x, 0) = 3 sin 2πx` وقيم حدية صفرية.','u = 3E_{1/2}(−4π^2t^{1/2}) sin 2πx',['n = 2:   (2π)^2 = 4π^2'],['u = 3e^{−4π^2t} sin 2πx','u = 3E_{1/2}(−2πt^{1/2}) sin 2πx','u = 3 sin 2πx']),
  Q('Estimate the amplitude of that solution at t = 100.','قدّر سعة ذلك الحل عند t = 100.','#f{3}{4π^2·10·#r{π}} ≈ 0.0043',['E_{1/2}(−z) ≈ #f{1}{z#r{π}},   z = 4π^2·10'],['≈ 0','≈ 3','≈ 0.43']),
  Q('Which data does `^CD_t^{1.3}u = u_{xx}` need?','أي معطيات تحتاجها `^CD_t^{1.3}u = u_{xx}`؟',['`u(x, 0)`, `u_t(x, 0)` and two boundary values','`u(x, 0)` و `u_t(x, 0)` وقيمتان حديتان'],[['The order exceeds 1.','الرتبة تتجاوز 1.']],[['`u(x, 0)` only','`u(x, 0)` فقط'],['Two boundary values only','قيمتان حديتان فقط']]),
  Q('If `^CD_t^{α}u = u_{xx}`, `0 ≤ u_0 ≤ 1` and zero boundary values, what bounds hold for u?','إذا كان `^CD_t^{α}u = u_{xx}` و `0 ≤ u_0 ≤ 1` وقيم حدية صفرية، فأي حدود تصح لـ u؟','0 ≤ u ≤ 1',[['The maximum principle applied to u and to −u.','مبدأ القيمة العظمى مطبقاً على u وعلى −u.']],['u ≤ 2','−1 ≤ u ≤ 0','u ≤ e^{t}']),
]);

export const MS508 = true;
