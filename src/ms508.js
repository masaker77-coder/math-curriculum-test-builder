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

export const MS508 = true;
