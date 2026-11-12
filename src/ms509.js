/* MATH/COMP 509 — the course's road map (10 units × 10 lessons) and its lessons. The authoring markup is described in mscore.js. */
import { course, lesson, Q } from './mscore.js';

/* ---------------- 509: Wavelet analysis ---------------- */
course('509','MATH 509','Wavelet Analysis','تحليل المويجات (509 ريض)',`
# Unit 1 · From zero: the idea and the tools | الوحدة 1 · من الصفر: الفكرة والأدوات
Why wavelets? Averages and details | لماذا المويجات؟ المتوسطات والتفاصيل
Vector spaces and bases | الفضاءات المتجهية والأسس
Inner products, norms and the space L² | الضرب الداخلي والمعايير والفضاء L²
Orthonormal bases, projections and Parseval's identity | الأسس المتعامدة المعيارية والإسقاط ومتطابقة بارسيفال
Fourier series: a review | متسلسلات فورييه: مراجعة
The Fourier transform | تحويل فورييه
Convolution | الالتفاف
What Fourier analysis cannot see: time localization | ما لا يراه تحليل فورييه: التموضع الزمني
The windowed Fourier transform | تحويل فورييه ذو النافذة
The uncertainty principle and time–frequency boxes | مبدأ الارتياب وصناديق الزمن–التردد
# Unit 2 · The Haar wavelet | الوحدة 2 · مويجة هار
The Haar scaling function φ | دالة التقييس لهار φ
The Haar wavelet ψ | مويجة هار ψ
Dilation and translation: ψ_{j,k}(t) = 2^{j/2} ψ(2^j t − k) | التمديد والإزاحة: ψ_{j,k}(t) = 2^{j/2} ψ(2^j t − k)
Orthonormality of the Haar system | تعامد نظام هار
The spaces V_j of piecewise constants | الفضاءات V_j للدوال الثابتة قطعياً
The detail spaces W_j | فضاءات التفاصيل W_j
The decomposition V_{j+1} = V_j ⊕ W_j | التحليل V_{j+1} = V_j ⊕ W_j
The Haar transform of a signal | تحويل هار لإشارة
Reconstruction | إعادة البناء
Haar series of a function and its error | متسلسلة هار لدالة وخطؤها
# Unit 3 · The continuous wavelet transform | الوحدة 3 · التحويل المويجي المتصل
Mother wavelets and the admissibility condition | المويجات الأم وشرط القبول
Definition of the continuous transform | تعريف التحويل المتصل
Scale and frequency | المقياس والتردد
The Mexican hat and Morlet wavelets | مويجتا القبعة المكسيكية ومورليه
The inversion formula | صيغة العكس
Energy conservation | حفظ الطاقة
Scalograms | مخططات المقياس
Detecting singularities | كشف نقاط الانفراد
Discretizing the transform: frames | تقطيع التحويل: الإطارات
Worked problems | مسائل محلولة
# Unit 4 · Multiresolution analysis | الوحدة 4 · التحليل متعدد التمييز
The axioms of a multiresolution analysis | مسلّمات التحليل متعدد التمييز
The scaling function and the two-scale equation | دالة التقييس ومعادلة المقياسين
The filter coefficients h_k | معاملات المرشح h_k
The wavelet equation and the coefficients g_k | معادلة المويجة والمعاملات g_k
Orthogonality conditions on the filter | شروط التعامد على المرشح
The Fourier side: the symbol m_0(ξ) | جانب فورييه: الرمز m_0(ξ)
Constructing ψ from φ | بناء ψ من φ
The Shannon wavelet | مويجة شانون
The Meyer wavelet | مويجة ماير
The cascade algorithm | خوارزمية الشلال
# Unit 5 · The discrete wavelet transform | الوحدة 5 · التحويل المويجي المتقطع
Mallat's algorithm: decomposition | خوارزمية مالات: التحليل
Mallat's algorithm: reconstruction | خوارزمية مالات: إعادة البناء
Filters, downsampling and upsampling | المرشحات وإنقاص العينات وزيادتها
Two-channel filter banks | بنوك المرشحات ثنائية القناة
Perfect reconstruction | إعادة البناء التامة
Boundary handling | معالجة الحدود
The matrix of the transform | مصفوفة التحويل
Cost: an O(N) algorithm | الكلفة: خوارزمية O(N)
The transform in MATLAB and Python | التحويل في MATLAB و Python
Worked problems | مسائل محلولة
# Unit 6 · Wavelet families | الوحدة 6 · عائلات المويجات
Vanishing moments | العزوم المنعدمة
Daubechies wavelets: the construction | مويجات دوبيشي: البناء
The D4 filter | المرشح D4
Regularity and support | الانتظام والحامل
Symlets and Coiflets | Symlets و Coiflets
Biorthogonal wavelets | المويجات ثنائية التعامد
Spline wavelets | مويجات الشرائح
Wavelets on an interval | المويجات على مجال محدود
Multiwavelets | المويجات المتعددة
Choosing a wavelet for a task | اختيار مويجة لمهمة
# Unit 7 · Approximation theory | الوحدة 7 · نظرية التقريب
Approximation order and vanishing moments | رتبة التقريب والعزوم المنعدمة
Decay of wavelet coefficients | تناقص معاملات المويجات
Smoothness and coefficient size | الملاسة وحجم المعاملات
Linear approximation | التقريب الخطي
Nonlinear approximation: keeping the largest coefficients | التقريب غير الخطي: الاحتفاظ بأكبر المعاملات
Sparsity | التفرق (sparsity)
Sobolev and Besov spaces | فضاءات سوبوليف وبيسوف
Comparison with Fourier and polynomial approximation | المقارنة بتقريب فورييه وكثيرات الحدود
Wavelet packets | حزم المويجات
The lifting scheme | مخطط الرفع
# Unit 8 · Two dimensions and applications | الوحدة 8 · البعدان والتطبيقات
Tensor-product wavelets | مويجات الضرب التنسوري
The two-dimensional transform | التحويل في بعدين
Image compression | ضغط الصور
Thresholding: hard and soft | العتبة: القاسية واللينة
Denoising a signal | إزالة الضجيج من إشارة
Edge detection | كشف الحواف
Time series and trends | السلاسل الزمنية والاتجاهات
Wavelets in numerical linear algebra | المويجات في الجبر الخطي العددي
Matrix compression of integral operators | ضغط مصفوفات المؤثرات التكاملية
Worked problems | مسائل محلولة
# Unit 9 · Wavelet methods for equations | الوحدة 9 · طرق المويجات للمعادلات
Haar wavelets on [0, 1] as a basis | مويجات هار على [0, 1] أساساً
The Haar operational matrix of integration | المصفوفة التشغيلية للتكامل لهار
Solving ordinary differential equations with Haar wavelets | حل المعادلات التفاضلية العادية بمويجات هار
Legendre wavelets | مويجات ليجندر
Chebyshev wavelets | مويجات تشيبيشيف
Operational matrices of fractional integration D^{−μ} | المصفوفات التشغيلية للتكامل الكسري D^{−μ}
Fractional differential equations with wavelets | المعادلات التفاضلية الكسرية بالمويجات
Integral equations with wavelets | المعادلات التكاملية بالمويجات
Wavelet–Galerkin and wavelet collocation methods | طرق جاليركن والتجميع بالمويجات
Comparison with the mapped Legendre spectral method | المقارنة بطريقة ليجندر الطيفية المحوَّلة
# Unit 10 · Advanced topics and research | الوحدة 10 · موضوعات متقدمة وبحث
Adaptive wavelet methods for PDEs | طرق المويجات التكيفية للمعادلات الجزئية
Second-generation wavelets | مويجات الجيل الثاني
Curvelets and shearlets | Curvelets و Shearlets
Wavelets and fractals | المويجات والكسيريات
Wavelets in statistics | المويجات في الإحصاء
Fractional wavelet transforms | التحويلات المويجية الكسرية
Error analysis of wavelet methods | تحليل الخطأ لطرق المويجات
Implementing wavelet methods in Mathematica, MATLAB and Python | تنفيذ طرق المويجات في Mathematica و MATLAB و Python
Reading and reproducing a research paper | قراءة بحث علمي وإعادة إنتاجه
Capstone project | مشروع ختامي
`);

lesson('509',1,[
  ['The whole idea of wavelets is in one small step. Replace two neighbouring values a and b by their average and their half-difference:',
   'فكرة المويجات كلها في خطوة صغيرة واحدة. استبدل بقيمتين متجاورتين a و b متوسطهما ونصف فرقهما:'],
  's = #f{a + b}{2},   d = #f{a − b}{2}   ⇔   a = s + d,   b = s − d',
  ['Nothing is lost: a and b come back exactly. The average s is a coarse view of the signal, and the detail d records what the coarse view misses. Where the signal is smooth the details are small, and small numbers can be dropped (compression) or cleaned (denoising).',
   'لا يضيع شيء: a و b تعودان تماماً. والمتوسط s نظرة خشنة للإشارة، والتفصيل d يسجل ما تفوّته النظرة الخشنة. وحيث تكون الإشارة ملساء تصغر التفاصيل، والأعداد الصغيرة تُحذف (ضغط) أو تُنظَّف (إزالة ضجيج).'],
  ['Repeating the step on the averages gives a view of the signal at every scale. Unlike a sine wave, which lives on the whole line, each detail belongs to one place and one scale. Wavelets are the functions behind this:',
   'وتكرار الخطوة على المتوسطات يعطي نظرة للإشارة عند كل مقياس. وبخلاف الموجة الجيبية الممتدة على الخط كله، كل تفصيل ينتمي إلى موضع واحد ومقياس واحد. والمويجات هي الدوال التي وراء ذلك:'],
  'ψ_{j,k}(t) = 2^{j/2} ψ(2^j t − k)',
],[
  Q('Find the average and the detail of the pair `(6, 2)`, then recover the pair.','أوجد المتوسط والتفصيل للزوج `(6, 2)` ثم استرجع الزوج.','s = 4,   d = 2',
    ['s = #f{6 + 2}{2} = 4,   d = #f{6 − 2}{2} = 2', 'a = s + d = 6,   b = s − d = 2'],['s = 4,   d = 4','s = 8,   d = 4','s = 4,   d = −2']),
  Q('Apply one level of the transform to the signal `(4, 6, 10, 12)`.','طبّق مستوى واحداً من التحويل على الإشارة `(4, 6, 10, 12)`.','s = (5, 11),   d = (−1, −1)',
    ['(4, 6):   s = 5,   d = −1', '(10, 12):   s = 11,   d = −1', ['The details are small because the signal changes slowly inside each pair.','التفاصيل صغيرة لأن الإشارة تتغير ببطء داخل كل زوج.']],['s = (5, 11),   d = (1, 1)','s = (10, 22),   d = (−2, −2)','s = (5, 8),   d = (−1, −2)']),
  Q('Apply a second level to the averages `(5, 11)` and write the full transform of `(4, 6, 10, 12)`.','طبّق مستوى ثانياً على المتوسطين `(5, 11)` واكتب التحويل الكامل للإشارة `(4, 6, 10, 12)`.','(8, −3, −1, −1)',
    ['(5, 11):   s = 8,   d = −3', ['Overall average 8, one coarse detail −3, two fine details −1, −1: four numbers for four numbers.','المتوسط الكلي 8 وتفصيل خشن −3 وتفصيلان دقيقان −1 و −1: أربعة أعداد مقابل أربعة أعداد.']],['(8, 3, 1, 1)','(16, −6, −1, −1)','(8, −3, 5, 11)']),
  Q('A signal has the transform `(5, 1, 0, 2)` (overall average, coarse detail, two fine details). Recover the signal.','إشارة تحويلها `(5, 1, 0, 2)` (المتوسط الكلي، تفصيل خشن، تفصيلان دقيقان). استرجع الإشارة.','(6, 6, 6, 2)',
    [['`5 ± 1` gives the averages `(6, 4)`.','`5 ± 1` تعطي المتوسطين `(6, 4)`.'], '6 ± 0  →  (6, 6),   4 ± 2  →  (6, 2)', ['A zero detail means the two values are equal.','التفصيل الصفري يعني تساوي القيمتين.']],['(6, 6, 2, 6)','(6, 4, 6, 2)','(5, 5, 7, 3)']),
]);

lesson('509',2,[
  ['A signal with n values is a vector in `ℝ^n`, and a function is a vector in a space of functions. A basis is a set of vectors such that every vector can be written in exactly one way as a combination of them:',
   'الإشارة ذات n قيمة متجه في `ℝ^n`، والدالة متجه في فضاء دوال. والأساس مجموعة متجهات يُكتب بها كل متجه بطريقة وحيدة تركيباً خطياً:'],
  'v = c_1 e_1 + c_2 e_2 + ⋯ + c_n e_n',
  ['The numbers `c_i` are the coordinates of v in that basis. Changing the basis does not change the vector, only its coordinates, and a good basis is one in which most coordinates of the signals we care about are small.',
   'والأعداد `c_i` إحداثيات v في ذلك الأساس. وتغيير الأساس لا يغيّر المتجه بل إحداثياته، والأساس الجيد ما تكون فيه أغلب إحداثيات الإشارات التي تهمنا صغيرة.'],
  ['The average–detail step of lesson 1 is exactly a change of basis in `ℝ^2`, from `(1, 0), (0, 1)` to `(1, 1), (1, −1)`.','وخطوة المتوسط والتفصيل في الدرس 1 هي تماماً تغيير أساس في `ℝ^2` من `(1, 0), (0, 1)` إلى `(1, 1), (1, −1)`.'],
],[
  Q('Is `{(1, 1), (1, −1)}` a basis of `ℝ^2`?','هل `{(1, 1), (1, −1)}` أساس للفضاء `ℝ^2`؟',['Yes','نعم'],
    ['det[1 1; 1 −1] = −1 − 1 = −2 ≠ 0', ['Two independent vectors in a space of dimension 2 form a basis.','متجهان مستقلان في فضاء بعده 2 يكوّنان أساساً.']],[['No','لا']]),
  Q('Find the coordinates of `(4, 6)` in the basis `(1, 1), (1, −1)`.','أوجد إحداثيات `(4, 6)` في الأساس `(1, 1), (1, −1)`.','(5, −1)',
    ['c_1 + c_2 = 4,   c_1 − c_2 = 6', 'c_1 = 5,   c_2 = −1', ['These are the average and the detail of the pair (4, 6).','وهما المتوسط والتفصيل للزوج (4, 6).']],['(5, 1)','(10, −2)','(4, 6)']),
  Q('What is the dimension of the space of polynomials of degree at most 2, and give a basis.','ما بُعد فضاء كثيرات الحدود التي درجتها لا تزيد على 2؟ واذكر أساساً له.',['3; a basis is `1, t, t^2`','3، وأساسه `1, t, t^2`'],
    [['`a_0 + a_1 t + a_2 t^2` has 3 free coefficients.','`a_0 + a_1 t + a_2 t^2` فيها 3 معاملات حرة.']],[['2; a basis is `t, t^2`','2، وأساسه `t, t^2`'],['3; a basis is `t, t^2, t^3`','3، وأساسه `t, t^2, t^3`'],['4; a basis is `1, t, t^2, t^3`','4، وأساسه `1, t, t^2, t^3`']]),
  Q('Write `(3, 3, 7, 1)` as a combination of `(1,1,1,1)`, `(1,1,−1,−1)`, `(1,−1,0,0)`, `(0,0,1,−1)`.','اكتب `(3, 3, 7, 1)` تركيباً من `(1,1,1,1)` و `(1,1,−1,−1)` و `(1,−1,0,0)` و `(0,0,1,−1)`.','c = (3.5, −0.5, 0, 3)',
    [['Pairs: (3, 3) has average 3 and detail 0; (7, 1) has average 4 and detail 3.','الأزواج: (3, 3) متوسطه 3 وتفصيله 0، و (7, 1) متوسطه 4 وتفصيله 3.'], ['Averages (3, 4): average 3.5 and detail −0.5.','المتوسطان (3, 4): متوسطهما 3.5 وتفصيلهما −0.5.'], '3.5 − 0.5 + 0 = 3,   3.5 + 0.5 + 3 = 7,   3.5 + 0.5 − 3 = 1'],['c = (3.5, 0.5, 0, 3)','c = (3.5, −0.5, 3, 0)','c = (7, −1, 0, 6)']),
]);

lesson('509',3,[
  ['To measure sizes and angles of functions we need an inner product. For real functions on an interval I,','لقياس أحجام الدوال والزوايا بينها نحتاج ضرباً داخلياً. فللدوال الحقيقية على مجال I،'],
  '⟨f, g⟩ = ∫_I f(t) g(t) dt,   ‖f‖ = #r{⟨f, f⟩}',
  ['`L^2(I)` is the space of functions with finite norm, that is, finite energy `∫_I f^2 dt < ∞`. It is the natural home of signals, and all of wavelet theory takes place in `L^2(ℝ)`.',
   '`L^2(I)` فضاء الدوال ذات المعيار المنتهي أي الطاقة المنتهية `∫_I f^2 dt < ∞`. وهو الموطن الطبيعي للإشارات، ونظرية المويجات كلها تجري في `L^2(ℝ)`.'],
  ['Two functions are orthogonal when `⟨f, g⟩ = 0`, and the Cauchy–Schwarz inequality `|⟨f, g⟩| ≤ ‖f‖ ‖g‖` always holds.','والدالتان متعامدتان إذا كان `⟨f, g⟩ = 0`، ومتباينة كوشي–شفارتز `|⟨f, g⟩| ≤ ‖f‖ ‖g‖` صحيحة دائماً.'],
],[
  Q('Compute `⟨t, t^2⟩` on [0, 1].','احسب `⟨t, t^2⟩` على [0, 1].','#f{1}{4}',['∫_0^1 t^3 dt = #f{1}{4}'],['#f{1}{3}','#f{1}{5}','#f{1}{2}']),
  Q('Is `f(t) = 1/t` in `L^2[1, ∞)`? If so, find its norm.','هل `f(t) = 1/t` تنتمي إلى `L^2[1, ∞)`؟ وإن كانت فأوجد معيارها.',['Yes, `‖f‖ = 1`','نعم، و `‖f‖ = 1`'],
    ['∫_1^∞ #f{1}{t^2} dt = [−#f{1}{t}]_1^∞ = 1', '‖f‖ = #r{1} = 1'],[['No, the integral diverges','لا، التكامل متباعد'],['Yes, `‖f‖ = 2`','نعم، و `‖f‖ = 2`'],['Yes, `‖f‖ = 1/2`','نعم، و `‖f‖ = 1/2`']]),
  Q('Is `f(t) = 1/#r{t}` in `L^2(0, 1]`?','هل `f(t) = 1/#r{t}` تنتمي إلى `L^2(0, 1]`؟',['No','لا'],
    ['∫_0^1 #f{1}{t} dt = [ln t]_0^1 = ∞', ['The energy is infinite, although the function itself is integrable.','الطاقة لانهائية مع أن الدالة نفسها قابلة للتكامل.']],[['Yes, `‖f‖ = 2`','نعم، و `‖f‖ = 2`'],['Yes, `‖f‖ = #r{2}`','نعم، و `‖f‖ = #r{2}`']]),
  Q('Compute the norm of `f(t) = e^{−|t|}` in `L^2(ℝ)`.','احسب معيار `f(t) = e^{−|t|}` في `L^2(ℝ)`.','‖f‖ = 1',['∫_{−∞}^{∞} e^{−2|t|} dt = 2∫_0^∞ e^{−2t} dt = 2·#f{1}{2} = 1', '‖f‖ = 1'],['‖f‖ = 2','‖f‖ = #r{2}','‖f‖ = #f{1}{2}']),
]);

lesson('509',4,[
  ['A basis `e_1, e_2, …` is orthonormal when its vectors are mutually orthogonal and each has norm 1: `⟨e_i, e_j⟩ = δ_{ij}`. Then the coordinates need no system of equations; each one is an inner product:',
   'الأساس `e_1, e_2, …` متعامد معياري إذا تعامدت متجهاته وكان معيار كل منها 1: `⟨e_i, e_j⟩ = δ_{ij}`. وحينها لا تحتاج الإحداثيات نظام معادلات، فكل منها ضرب داخلي:'],
  'f = Σ_k c_k e_k,   c_k = ⟨f, e_k⟩',
  ['Keeping only some of the terms gives the orthogonal projection, which is the best approximation of f from those terms. Parseval’s identity says the energy is preserved:',
   'والاحتفاظ ببعض الحدود فقط يعطي الإسقاط العمودي، وهو أفضل تقريب لـ f بتلك الحدود. ومتطابقة بارسيفال تقول إن الطاقة محفوظة:'],
  '‖f‖^2 = Σ_k c_k^2',
  ['So the error of dropping coefficients is exactly the energy of the dropped coefficients. Every orthonormal wavelet basis uses this fact for compression.','فخطأ حذف معاملات يساوي تماماً طاقة المعاملات المحذوفة. وكل أساس مويجي متعامد معياري يستخدم هذه الحقيقة في الضغط.'],
],[
  Q('Normalize the vectors `(1, 1)` and `(1, −1)`.','اجعل المتجهين `(1, 1)` و `(1, −1)` معياريين.','e_1 = #f{1}{#r{2}}(1, 1),   e_2 = #f{1}{#r{2}}(1, −1)',
    ['‖(1, 1)‖ = #r{1 + 1} = #r{2}', ['Divide each vector by its norm. This factor `1/#r{2}` is the origin of the `2^{j/2}` in the wavelet formula.','نقسم كل متجه على معياره. وهذا العامل `1/#r{2}` أصل `2^{j/2}` في صيغة المويجة.']],['e_1 = #f{1}{2}(1, 1),   e_2 = #f{1}{2}(1, −1)','e_1 = (1, 1),   e_2 = (1, −1)','e_1 = #r{2}(1, 1),   e_2 = #r{2}(1, −1)']),
  Q('Expand `v = (4, 6)` in the orthonormal basis `e_1, e_2` above and check Parseval’s identity.','اكتب `v = (4, 6)` في الأساس المتعامد المعياري `e_1, e_2` أعلاه وتحقق من متطابقة بارسيفال.','c_1 = 5#r{2},   c_2 = −#r{2}',
    ['c_1 = ⟨v, e_1⟩ = #f{4 + 6}{#r{2}} = 5#r{2}', 'c_2 = ⟨v, e_2⟩ = #f{4 − 6}{#r{2}} = −#r{2}', 'c_1^2 + c_2^2 = 50 + 2 = 52 = 4^2 + 6^2'],['c_1 = 5,   c_2 = −1','c_1 = 10,   c_2 = −2','c_1 = 5#r{2},   c_2 = #r{2}']),
  Q('Project `f(t) = t` on [0, 1] onto the constant function `e = 1`.','أسقط `f(t) = t` على [0, 1] على الدالة الثابتة `e = 1`.','c = #f{1}{2}',
    ['‖e‖^2 = ∫_0^1 1 dt = 1', 'c = ⟨t, 1⟩ = ∫_0^1 t dt = #f{1}{2}', ['The best constant approximation of a function is its average.','أفضل تقريب ثابت لدالة هو متوسطها.']],['c = 1','c = #f{1}{3}','c = #f{1}{4}']),
  Q('Find the squared error `‖t − 1/2‖^2` of that projection, using Parseval’s idea.','أوجد مربع الخطأ `‖t − 1/2‖^2` لذلك الإسقاط بفكرة بارسيفال.','#f{1}{12}',
    ['‖t‖^2 = ∫_0^1 t^2 dt = #f{1}{3}', '‖f‖^2 − c^2 = #f{1}{3} − #f{1}{4} = #f{1}{12}'],['#f{1}{6}','#f{1}{4}','#f{1}{3}']),
]);

lesson('509',5,[
  ['A function on `(−π, π)` can be written as a sum of sines and cosines, which are orthogonal on that interval:','الدالة على `(−π, π)` تُكتب مجموع جيوب وجيوب تمام، وهي متعامدة على ذلك المجال:'],
  'f(t) = #f{a_0}{2} + Σ_{n=1}^{∞} (a_n cos nt + b_n sin nt)',
  'a_n = #f{1}{π}∫_{−π}^{π} f(t) cos nt dt,   b_n = #f{1}{π}∫_{−π}^{π} f(t) sin nt dt',
  ['Each coefficient measures how much of the frequency n the function contains. An even function has only cosine terms and an odd function only sine terms. The smoother f is, the faster its coefficients decay.',
   'وكل معامل يقيس مقدار التردد n في الدالة. والدالة الزوجية لها حدود جيب التمام فقط والفردية حدود الجيب فقط. وكلما كانت f أملس تناقصت معاملاتها أسرع.'],
  ['The weakness that leads to wavelets: every sine extends over the whole interval, so one jump in f disturbs all the coefficients, and they decay only like `1/n`.',
   'ونقطة الضعف التي تقود إلى المويجات: كل جيب يمتد على المجال كله، فقفزة واحدة في f تؤثر في كل المعاملات فلا تتناقص إلا مثل `1/n`.'],
],[
  Q('Find the Fourier coefficients of `f(t) = t` on `(−π, π)`.','أوجد معاملات فورييه للدالة `f(t) = t` على `(−π, π)`.','a_n = 0,   b_n = #f{2(−1)^{n+1}}{n}',
    [['f is odd, so `a_n = 0`.','f فردية فيكون `a_n = 0`.'], 'b_n = #f{2}{π}∫_0^π t sin nt dt = #f{2}{π}[−#f{t cos nt}{n}]_0^π', '= −#f{2 cos nπ}{n} = #f{2(−1)^{n+1}}{n}'],['a_n = 0,   b_n = #f{2}{n}','a_n = #f{2(−1)^n}{n},   b_n = 0','a_n = 0,   b_n = #f{(−1)^{n+1}}{n}']),
  Q('Find `a_0` and `a_n` for `f(t) = t^2` on `(−π, π)`.','أوجد `a_0` و `a_n` للدالة `f(t) = t^2` على `(−π, π)`.','a_0 = #f{2π^2}{3},   a_n = #f{4(−1)^n}{n^2}',
    ['a_0 = #f{1}{π}∫_{−π}^{π} t^2 dt = #f{2π^2}{3}', ['Two integrations by parts give','وبالتجزئة مرتين نحصل على'], 'a_n = #f{4 cos nπ}{n^2} = #f{4(−1)^n}{n^2}', ['`t^2` is continuous at the ends, so its coefficients decay like `1/n^2`, faster than those of t.','`t^2` متصلة عند الطرفين فمعاملاتها تتناقص مثل `1/n^2` أي أسرع من معاملات t.']],['a_0 = #f{π^2}{3},   a_n = #f{4(−1)^n}{n^2}','a_0 = #f{2π^2}{3},   a_n = #f{2(−1)^n}{n^2}','a_0 = #f{2π^2}{3},   a_n = #f{4(−1)^n}{n}']),
  Q('The square wave `f = 1` on `(0, π)`, `f = −1` on `(−π, 0)`: find `b_n`.','الموجة المربعة `f = 1` على `(0, π)` و `f = −1` على `(−π, 0)`: أوجد `b_n`.',['`b_n = #f{4}{nπ}` for odd n, and `b_n = 0` for even n','`b_n = #f{4}{nπ}` إذا كان n فردياً، و `b_n = 0` إذا كان زوجياً'],
    ['b_n = #f{2}{π}∫_0^π sin nt dt = #f{2}{nπ}(1 − cos nπ)', ['`1 − cos nπ` is 2 for odd n and 0 for even n. The slow decay `1/n` comes from the jump at t = 0.','`1 − cos nπ` تساوي 2 إذا كان n فردياً و 0 إذا كان زوجياً. والتناقص البطيء `1/n` سببه القفزة عند t = 0.']],[['`b_n = #f{2}{nπ}` for odd n, and `b_n = 0` for even n','`b_n = #f{2}{nπ}` إذا كان n فردياً، و `b_n = 0` إذا كان زوجياً'],['`b_n = #f{4}{nπ}` for every n','`b_n = #f{4}{nπ}` لكل n'],['`b_n = #f{4}{n^2 π}` for odd n, and `b_n = 0` for even n','`b_n = #f{4}{n^2 π}` إذا كان n فردياً، و `b_n = 0` إذا كان زوجياً']]),
  Q('Which decays faster, the coefficients of `t` or of `t^2` on `(−π, π)`, and why?','أيهما أسرع تناقصاً: معاملات `t` أم معاملات `t^2` على `(−π, π)`؟ ولماذا؟',['Those of `t^2`: like `1/n^2` against `1/n`','معاملات `t^2`: مثل `1/n^2` مقابل `1/n`'],
    [['The periodic extension of t jumps at `±π`, while that of `t^2` is continuous there (only its derivative jumps). Each extra degree of smoothness gains one power of `1/n`.','الامتداد الدوري لـ t يقفز عند `±π`، أما امتداد `t^2` فمتصل هناك (مشتقته فقط تقفز). وكل درجة ملاسة إضافية تكسب قوة من `1/n`.']],[['Those of `t`: like `1/n^2` against `1/n`','معاملات `t`: مثل `1/n^2` مقابل `1/n`'],['They decay at the same rate','تتناقصان بالمعدل نفسه']]),
]);

/* ---- 509 · Unit 1 (lessons 6–10) and Unit 2 (lessons 11–20): Fourier tools and the Haar wavelet ---- */
lesson('509',6,[
  ['On the whole line the Fourier series becomes an integral. The Fourier transform measures how much of each angular frequency ω the function contains:','على المستقيم كله تصبح متسلسلة فورييه تكاملاً. وتحويل فورييه يقيس مقدار كل تردد زاوي ω في الدالة:'],
  'f̂(ω) = ∫_{−∞}^{∞} f(t) e^{−iωt} dt,     f(t) = #f{1}{2π}∫_{−∞}^{∞} f̂(ω) e^{iωt} dω',
  ['Two rules are used all the time: a shift multiplies by a phase, `f(t − a) → e^{−iaω}f̂(ω)`, and a stretch squeezes the transform, `f(t/s) → s f̂(sω)` for s > 0. Plancherel’s identity keeps the energy: `∫|f̂|^2 dω = 2π∫|f|^2 dt`.','وقاعدتان تُستخدمان دائماً: الإزاحة تضرب في طور `f(t − a) → e^{−iaω}f̂(ω)`، والتمديد يضغط التحويل `f(t/s) → s f̂(sω)` لـ s > 0. ومتطابقة بلانشيريل تحفظ الطاقة: `∫|f̂|^2 dω = 2π∫|f|^2 dt`.'],
],[
  Q('Compute the transform of the box `f = 1` on `[−1/2, 1/2]`.','احسب تحويل الصندوق `f = 1` على `[−1/2, 1/2]`.','f̂(ω) = #f{2 sin(ω/2)}{ω}',['∫_{−1/2}^{1/2} e^{−iωt} dt = #f{e^{−iω/2} − e^{iω/2}}{−iω}'],['f̂(ω) = #f{sin ω}{ω}','f̂(ω) = e^{−iω/2}','f̂(ω) = #f{2}{1 + ω^2}']),
  Q('Compute the transform of `f = e^{−|t|}`.','احسب تحويل `f = e^{−|t|}`.','f̂(ω) = #f{2}{1 + ω^2}',['∫_0^∞ e^{−(1+iω)t}dt + ∫_0^∞ e^{−(1−iω)t}dt = #f{1}{1 + iω} + #f{1}{1 − iω}'],['f̂(ω) = #f{1}{1 + ω^2}','f̂(ω) = e^{−|ω|}','f̂(ω) = #f{2}{1 − ω^2}']),
  Q('Check Plancherel’s identity for `e^{−|t|}`.','تحقق من متطابقة بلانشيريل لـ `e^{−|t|}`.','∫#f{4}{(1 + ω^2)^2}dω = 2π = 2π·1',['∫_{−∞}^{∞}#f{dω}{(1 + ω^2)^2} = #f{π}{2},   ∫e^{−2|t|}dt = 1'],['4π = 2π','π = π','2 = 2π']),
  Q('Use the stretch rule to find the transform of `e^{−2|t|}`.','استخدم قاعدة التمديد لإيجاد تحويل `e^{−2|t|}`.','#f{4}{4 + ω^2}',['s = #f{1}{2}:   #f{1}{2}·#f{2}{1 + ω^2/4}'],['#f{2}{1 + 4ω^2}','#f{4}{1 + ω^2}','#f{1}{4 + ω^2}']),
]);

lesson('509',7,[
  ['Convolution slides one function across another and averages. Its key property is that the Fourier transform turns it into a product; for sequences it is a sum:','الالتفاف يزلق دالة فوق أخرى ويأخذ المتوسط. وخاصيته الأساسية أن تحويل فورييه يحوله إلى ضرب، وللمتتاليات هو مجموع:'],
  '(f * g)(t) = ∫ f(s) g(t − s) ds,     (f * g)^∧ = f̂ ĝ,     (x * h)_n = Σ_k x_k h_{n−k}',
  ['Every filter is a convolution. The Haar averaging step is a convolution with `(1/2, 1/2)` followed by keeping every second value: `(4, 6, 10, 12) * (1/2, 1/2) = (2, 5, 8, 11, 6)`, and the kept values 5, 11 are the averages of Lesson 1.','كل مرشح التفاف. وخطوة المتوسط في هار التفاف مع `(1/2, 1/2)` يتبعه الاحتفاظ بقيمة من كل قيمتين: `(4, 6, 10, 12) * (1/2, 1/2) = (2, 5, 8, 11, 6)`، والقيمتان المحتفظ بهما 5 و 11 هما متوسطا الدرس 1.'],
],[
  Q('Compute `(1, 2, 3) * (1, 1)`.','احسب `(1, 2, 3) * (1, 1)`.','(1, 3, 5, 3)',['(1,   1 + 2,   2 + 3,   3)'],['(1, 2, 3)','(2, 4, 6)','(1, 3, 5)']),
  Q('Compute `(1, 1) * (1, −1)`.','احسب `(1, 1) * (1, −1)`.','(1, 0, −1)',['(1·1,   1·(−1) + 1·1,   1·(−1))'],['(1, −1)','(0, 0)','(1, 2, 1)']),
  Q('Convolve the box `1_{[−1/2, 1/2]}` with itself.','التف الصندوق `1_{[−1/2, 1/2]}` مع نفسه.','max(1 − |t|, 0)',[['The value at t is the length of the overlap of `[−1/2, 1/2]` and `[t − 1/2, t + 1/2]`.','القيمة عند t هي طول تقاطع `[−1/2, 1/2]` و `[t − 1/2, t + 1/2]`.']],['1_{[−1, 1]}','e^{−|t|}','max(1 − t^2, 0)']),
  Q('Which values of `(2, 5, 8, 11, 6)` give the Haar averages of `(4, 6, 10, 12)`?','أي قيم `(2, 5, 8, 11, 6)` تعطي متوسطات هار لـ `(4, 6, 10, 12)`؟',['The second and fourth: 5 and 11','الثانية والرابعة: 5 و 11'],[['Keeping every second value is downsampling.','الاحتفاظ بقيمة من كل قيمتين هو إنقاص العينات.']],[['The first and third: 2 and 8','الأولى والثالثة: 2 و 8'],['All five','الخمس كلها']]),
]);

lesson('509',8,[
  ['The magnitude `|f̂(ω)|` says which frequencies are present, but not when. A spike at time a has a transform of magnitude 1 at every frequency; its position is hidden in the phase:','المقدار `|f̂(ω)|` يقول أي الترددات موجودة لكن لا يقول متى. ونبضة عند الزمن a تحويلها مقداره 1 عند كل تردد، وموضعها مخفي في الطور:'],
  'δ(t − a)  →  e^{−iaω},     |e^{−iaω}| = 1;     DFT:   (0, 0, 1, 0)  →  (1, −1, 1, −1)',
  ['So a short event spreads over all Fourier coefficients, and a signal and its time-reversed version have the same magnitude spectrum. For music, speech or a fault in a machine we need to know when each frequency occurs: a time–frequency description.','فالحدث القصير ينتشر على كل معاملات فورييه، والإشارة ونسختها المعكوسة زمنياً لهما طيف المقدار نفسه. وللموسيقى أو الكلام أو عطل في آلة نحتاج معرفة متى يقع كل تردد: وصف زمني–ترددي.'],
],[
  Q('Compute the DFT `X_k = Σ_n x_n e^{−2πikn/4}` of `(0, 0, 1, 0)`.','احسب DFT `X_k = Σ_n x_n e^{−2πikn/4}` لـ `(0, 0, 1, 0)`.','(1, −1, 1, −1)',['X_k = e^{−πik} = (−1)^k'],['(0, 0, 1, 0)','(1, 1, 1, 1)','(1, i, −1, −i)']),
  Q('How does `|f̂|` change when f is delayed by 5?','كيف يتغير `|f̂|` عند تأخير f بمقدار 5؟',['It does not change: only the phase `e^{−5iω}` is added','لا يتغير: يُضاف الطور `e^{−5iω}` فقط'],['|e^{−5iω}f̂(ω)| = |f̂(ω)|'],[['It shifts by 5','ينزاح بمقدار 5'],['It is multiplied by 5','يُضرب في 5']]),
  Q('For real f, compare `|f̂|` for `f(t)` and `f(−t)`.','لـ f حقيقية قارن `|f̂|` لـ `f(t)` و `f(−t)`.',['They are equal','متساويان'],['f(−t) → f̂(−ω),   |f̂(−ω)| = |f̂(ω)|'],[['One is the reverse of the other','أحدهما عكس الآخر'],['They are unrelated','لا علاقة بينهما']]),
  Q('Why is the magnitude spectrum not enough to describe a melody?','لماذا لا يكفي طيف المقدار لوصف لحن؟',['It shows which notes occur but not in which order','يُظهر أي النغمات موجودة لا ترتيبها'],[['The order lives in the phases, mixed over all frequencies.','الترتيب يعيش في الأطوار ممزوجاً على كل الترددات.']],[['It is not accurate','ليس دقيقاً'],['It is enough','يكفي']]),
]);

lesson('509',9,[
  ['The windowed (short-time) Fourier transform looks at the signal through a window w centred at τ, then takes the transform:','تحويل فورييه ذو النافذة (قصير المدى) ينظر إلى الإشارة عبر نافذة w مركزها τ ثم يأخذ التحويل:'],
  'Sf(τ, ω) = ∫ f(t) w(t − τ) e^{−iωt} dt',
  ['With a Gaussian window this is the Gabor transform, and `|Sf|^2` is the spectrogram. The window has one fixed width T for all frequencies: frequencies closer than about `2π/T` cannot be separated, and events closer than about T in time cannot be separated.','ومع نافذة جاوسية هذا تحويل جابور، و `|Sf|^2` المخطط الطيفي. وللنافذة عرض ثابت T لكل الترددات: الترددات الأقرب من نحو `2π/T` لا يمكن فصلها، والأحداث الأقرب من نحو T زمنياً لا يمكن فصلها.'],
],[
  Q('Compute `Sf(τ, ω)` for `f = 1` and the box window `1_{[−T/2, T/2]}`.','احسب `Sf(τ, ω)` لـ `f = 1` والنافذة الصندوقية `1_{[−T/2, T/2]}`.','e^{−iωτ}#f{2 sin(ωT/2)}{ω}',['∫_{τ−T/2}^{τ+T/2} e^{−iωt} dt'],['#f{2 sin(ωT/2)}{ω}','T e^{−iωτ}','2πδ(ω)']),
  Q('What is `|Sf(τ, 0)|` in that case?','ما `|Sf(τ, 0)|` في تلك الحالة؟','T',['#f{2 sin(ωT/2)}{ω} → T,   ω → 0'],['1','2π','#f{T}{2}']),
  Q('Two tones are 2 Hz apart. About how long must the window be to separate them?','نغمتان بينهما 2 هرتز. كم يجب أن يكون طول النافذة تقريباً لفصلهما؟',['At least about 0.5 s','نحو 0.5 ثانية على الأقل'],['Δf ≈ #f{1}{T}'],[['About 0.05 s','نحو 0.05 ثانية'],['Any length','أي طول']]),
  Q('A signal has clicks 0.01 s apart and tones 2 Hz apart. Can one window resolve both?','إشارة فيها نقرات بينها 0.01 ثانية ونغمات بينها 2 هرتز. هل تفصل نافذة واحدة الاثنين؟',['No: the clicks need T ≲ 0.01 s, the tones T ≳ 0.5 s','لا: النقرات تحتاج T ≲ 0.01 ثانية والنغمات T ≳ 0.5 ثانية'],[['Wavelets adapt the window to the frequency.','المويجات تكيّف النافذة مع التردد.']],[['Yes, with T = 0.1 s','نعم مع T = 0.1 ثانية'],['Yes, always','نعم دائماً']]),
]);

lesson('509',10,[
  ['Define the spreads of f in time and in frequency by','عرّف انتشار f في الزمن وفي التردد بـ'],
  'Δt^2 = #f{∫t^2|f|^2 dt}{∫|f|^2 dt},     Δω^2 = #f{∫ω^2|f̂|^2 dω}{∫|f̂|^2 dω},     Δt·Δω ≥ #f{1}{2}',
  ['Equality holds exactly for Gaussians (centred at 0). Each window or wavelet occupies a time–frequency box of sides Δt and Δω. The windowed transform uses boxes of one shape; a wavelet at scale a has sides aΔt and Δω/a: narrow in time at high frequency, wide at low frequency, always with the same area.','والمساواة تتحقق بالضبط للدوال الجاوسية (المتمركزة عند 0). وكل نافذة أو مويجة تشغل صندوقاً زمنياً–ترددياً ضلعاه Δt و Δω. والتحويل ذو النافذة يستخدم صناديق بشكل واحد، والمويجة عند المقياس a لها الضلعان aΔt و Δω/a: ضيقة زمنياً عند التردد العالي وعريضة عند المنخفض، بالمساحة نفسها دائماً.'],
],[
  Q('Compute Δt for `f = e^{−t^2/2}`.','احسب Δt لـ `f = e^{−t^2/2}`.','#f{1}{#r{2}}',['#f{∫t^2e^{−t^2}dt}{∫e^{−t^2}dt} = #f{#r{π}/2}{#r{π}} = #f{1}{2}'],['1','#f{1}{2}','#r{2}']),
  Q('What is Δt·Δω for `e^{−t^2/2}`?','ما Δt·Δω لـ `e^{−t^2/2}`؟','#f{1}{2}',['f̂ = #r{2π}e^{−ω^2/2}:   Δω = #f{1}{#r{2}}'],['1','#f{1}{4}','2']),
  Q('How do Δt and Δω change for `f(t/a)`?','كيف يتغير Δt و Δω لـ `f(t/a)`؟','Δt → aΔt,     Δω → #f{Δω}{a}',[['The product stays the same.','الضرب يبقى نفسه.']],['Δt → aΔt,   Δω → aΔω','Δt → #f{Δt}{a},   Δω → aΔω','Δt → Δt,   Δω → Δω']),
  Q('The Haar wavelet has `|ψ̂(ω)| = 4 sin^2(ω/4)/|ω|`. Is its Δω finite?','مويجة هار لها `|ψ̂(ω)| = 4 sin^2(ω/4)/|ω|`. هل Δω لها منتهٍ؟',['No: `ω^2|ψ̂|^2 = 16 sin^4(ω/4)` does not decay, so the integral diverges','لا: `ω^2|ψ̂|^2 = 16 sin^4(ω/4)` لا يتناقص فيتباعد التكامل'],[['The jumps of the Haar wavelet spread it in frequency.','قفزات مويجة هار تنشرها في التردد.']],[['Yes','نعم'],['It is zero','صفر']]),
]);

lesson('509',11,[
  ['The Haar scaling function is the indicator of the unit interval. Its scaled and shifted copies are indicators of dyadic intervals, normalized to have norm 1:','دالة التقييس لهار هي دالة مؤشر لمجال الوحدة. ونسخها المقيسة والمزاحة دوال مؤشر لمجالات ثنائية، مُعايرة ليكون معيارها 1:'],
  'φ(t) = 1_{[0, 1)}(t),     φ_{j,k}(t) = 2^{j/2}φ(2^jt − k) = 2^{j/2}   ⇔   t ∈ [k2^{−j}, (k + 1)2^{−j})',
  ['φ satisfies the two-scale equation `φ(t) = φ(2t) + φ(2t − 1)`: the unit interval is the union of its two halves. The inner product `⟨f, φ_{j,k}⟩` equals `2^{−j/2}` times the average of f on the interval.','و φ تحقق معادلة المقياسين `φ(t) = φ(2t) + φ(2t − 1)`: مجال الوحدة اتحاد نصفيه. والضرب الداخلي `⟨f, φ_{j,k}⟩` يساوي `2^{−j/2}` مضروباً في متوسط f على المجال.'],
],[
  Q('Give the support and the value of `φ_{2,1}`.','أعط حامل `φ_{2,1}` وقيمتها.','[#f{1}{4}, #f{1}{2}):   φ_{2,1} = 2',['2^{2/2} = 2,   k2^{−j} = #f{1}{4}'],['[#f{1}{2}, 1):   φ_{2,1} = 2','[#f{1}{4}, #f{1}{2}):   φ_{2,1} = 1','[0, #f{1}{4}):   φ_{2,1} = 4']),
  Q('Check that `‖φ_{2,1}‖ = 1`.','تحقق أن `‖φ_{2,1}‖ = 1`.','2^2·#f{1}{4} = 1',['‖φ_{2,1}‖^2 = ∫_{1/4}^{1/2} 4 dt'],['2·#f{1}{4} = #f{1}{2}','4','#f{1}{4}']),
  Q('Compute `⟨t^2, φ_{1,1}⟩`.','احسب `⟨t^2, φ_{1,1}⟩`.','#r{2}·#f{7}{24} ≈ 0.4125',['#r{2}∫_{1/2}^{1} t^2 dt = #r{2}·#f{1 − 1/8}{3}'],['#f{7}{24}','#f{1}{3}','#r{2}·#f{1}{3}']),
  Q('Write `φ_{0,0}` in terms of `φ_{1,0}` and `φ_{1,1}`.','اكتب `φ_{0,0}` بدلالة `φ_{1,0}` و `φ_{1,1}`.','φ_{0,0} = #f{1}{#r{2}}(φ_{1,0} + φ_{1,1})',['φ(2t) = #f{φ_{1,0}}{#r{2}}'],['φ_{0,0} = φ_{1,0} + φ_{1,1}','φ_{0,0} = #r{2}(φ_{1,0} + φ_{1,1})','φ_{0,0} = #f{1}{2}(φ_{1,0} + φ_{1,1})']),
]);

lesson('509',12,[
  ['The Haar wavelet is the difference of the two halves of φ: +1 on the left half, −1 on the right half:','مويجة هار هي فرق نصفي φ: ‎+1 على النصف الأيسر و ‎−1 على الأيمن:'],
  'ψ(t) = φ(2t) − φ(2t − 1) = { 1,  0 ≤ t < #f{1}{2};   −1,  #f{1}{2} ≤ t < 1 }',
  ['It has mean zero, `∫ψ = 0`, and norm 1. One vanishing moment means it ignores constants; the coefficient `⟨f, ψ⟩` measures how much f changes across t = 1/2. For `f = t`, `⟨t, ψ⟩ = −1/4`.','ومتوسطها صفر `∫ψ = 0` ومعيارها 1. وعزم منعدم واحد يعني أنها تتجاهل الثوابت، والمعامل `⟨f, ψ⟩` يقيس تغير f عبر t = 1/2. ولـ `f = t` يكون `⟨t, ψ⟩ = −1/4`.'],
],[
  Q('Compute `⟨t, ψ⟩`.','احسب `⟨t, ψ⟩`.','−#f{1}{4}',['∫_0^{1/2} t dt − ∫_{1/2}^1 t dt = #f{1}{8} − #f{3}{8}'],['#f{1}{4}','0','#f{1}{2}']),
  Q('Compute `⟨5, ψ⟩` and explain.','احسب `⟨5, ψ⟩` وفسّر.',['0: ψ has mean zero, so it ignores constants','0: متوسط ψ صفر فتتجاهل الثوابت'],['5∫ψ = 5(#f{1}{2} − #f{1}{2})'],['5','#f{5}{2}']),
  Q('Compute `⟨t^2, ψ⟩`.','احسب `⟨t^2, ψ⟩`.','−#f{1}{4}',['#f{1}{24} − #f{7}{24} = −#f{6}{24}'],['#f{1}{4}','−#f{1}{3}','0']),
  Q('Does ψ have a second vanishing moment, `∫tψ = 0`?','هل لـ ψ عزم منعدم ثانٍ `∫tψ = 0`؟',['No: `∫tψ = −1/4`','لا: `∫tψ = −1/4`'],[['Wavelets with more vanishing moments (Unit 6) ignore lines and higher polynomials too.','المويجات ذات العزوم المنعدمة الأكثر (الوحدة 6) تتجاهل الخطوط وكثيرات الحدود الأعلى أيضاً.']],[['Yes','نعم'],['Only on [0, 1/2]','فقط على [0, 1/2]']]),
]);

lesson('509',13,[
  ['All Haar wavelets come from ψ by dilation (scale `2^{−j}`) and translation (position `k2^{−j}`). The factor `2^{j/2}` keeps the norm equal to 1:','كل مويجات هار تأتي من ψ بالتمديد (المقياس `2^{−j}`) والإزاحة (الموضع `k2^{−j}`). والعامل `2^{j/2}` يُبقي المعيار 1:'],
  'ψ_{j,k}(t) = 2^{j/2}ψ(2^jt − k) = ±2^{j/2}   ⇔   t ∈ [#f{k}{2^j}, #f{k + 1}{2^j})',
  ['Large j means fine scale and high frequency; k says where. On [0, 1) level j has `2^j` wavelets, `k = 0, …, 2^j − 1`. To find which wavelet of level j contains t, take `k = ⌊2^jt⌋`.','و j الكبير يعني مقياساً دقيقاً وتردداً عالياً، و k يقول أين. وعلى [0, 1) في المستوى j عدد `2^j` من المويجات `k = 0, …, 2^j − 1`. ولمعرفة أي مويجة من المستوى j تحتوي t خذ `k = ⌊2^jt⌋`.'],
],[
  Q('Give the support of `ψ_{3,5}` and its value on the left half.','أعط حامل `ψ_{3,5}` وقيمتها على النصف الأيسر.','[#f{5}{8}, #f{3}{4}),     2^{3/2} ≈ 2.828',['#f{5}{8} ≤ t < #f{6}{8}'],['[#f{5}{3}, 2),   2^{3/2}','[#f{5}{8}, #f{3}{4}),   8','[#f{3}{8}, #f{5}{8}),   2^{3/2}']),
  Q('Evaluate `ψ_{2,k}(0.3)` for the k that contains 0.3.','احسب `ψ_{2,k}(0.3)` لقيمة k التي تحتوي 0.3.','k = 1,   ψ_{2,1}(0.3) = 2',['⌊4·0.3⌋ = 1,   4·0.3 − 1 = 0.2 < #f{1}{2}'],['k = 1,   ψ_{2,1}(0.3) = −2','k = 0,   ψ_{2,0}(0.3) = 2','k = 1,   ψ_{2,1}(0.3) = 1']),
  Q('How many Haar wavelets of levels 0 to 3 live on [0, 1)?','كم مويجة هار من المستويات 0 إلى 3 تعيش على [0, 1)؟','15',['1 + 2 + 4 + 8'],['8','16','4']),
  Q('Check `‖ψ_{j,k}‖ = 1`.','تحقق أن `‖ψ_{j,k}‖ = 1`.','2^j·2^{−j} = 1',['‖ψ_{j,k}‖^2 = (2^{j/2})^2·2^{−j}'],['2^{j/2}','2^{−j}','2^j']),
]);

lesson('509',14,[
  ['The Haar wavelets form an orthonormal system:','مويجات هار تكوّن نظاماً متعامداً معيارياً:'],
  '⟨ψ_{j,k}, ψ_{j′,k′}⟩ = δ_{jj′}δ_{kk′},     ⟨φ, ψ_{j,k}⟩ = 0   (j ≥ 0)',
  ['Two reasons: at the same level the supports do not overlap; at different levels the coarser function is constant on the support of the finer one, and the finer one has mean zero. Together with φ they form an orthonormal basis of `L^2[0, 1]`.','وسببان: في المستوى نفسه لا تتداخل الحوامل، وفي مستويين مختلفين تكون الدالة الأخشن ثابتة على حامل الأدق والأدق متوسطها صفر. ومع φ تكوّن أساساً متعامداً معيارياً لـ `L^2[0, 1]`.'],
],[
  Q('Compute `⟨ψ_{0,0}, ψ_{1,0}⟩`.','احسب `⟨ψ_{0,0}, ψ_{1,0}⟩`.','0',['ψ_{0,0} = 1 on [0, #f{1}{2}),   ∫ψ_{1,0} = 0'],['1','#f{1}{2}','−1']),
  Q('Compute `⟨ψ_{2,1}, ψ_{2,2}⟩`.','احسب `⟨ψ_{2,1}, ψ_{2,2}⟩`.',['0: the supports `[1/4, 1/2)` and `[1/2, 3/4)` are disjoint','0: الحاملان `[1/4, 1/2)` و `[1/2, 3/4)` منفصلان'],[['Same level, different positions.','المستوى نفسه ومواضع مختلفة.']],[['1','1'],['−1','−1']]),
  Q('Why is `⟨ψ_{1,1}, ψ_{3,6}⟩ = 0`?','لماذا `⟨ψ_{1,1}, ψ_{3,6}⟩ = 0`؟',['On `[3/4, 7/8)` the coarse wavelet `ψ_{1,1}` is constant and `ψ_{3,6}` has mean zero','على `[3/4, 7/8)` تكون المويجة الخشنة `ψ_{1,1}` ثابتة و `ψ_{3,6}` متوسطها صفر'],[['`ψ_{1,1} = −#r{2}` there.','`ψ_{1,1} = −#r{2}` هناك.']],[['The supports are disjoint','الحاملان منفصلان'],['It is not zero','ليس صفراً']]),
  Q('How many functions does `{φ} ∪ {ψ_{j,k} : j < J}` contain on [0, 1)?','كم دالة تحتوي `{φ} ∪ {ψ_{j,k} : j < J}` على [0, 1)؟','2^J',['1 + (1 + 2 + ⋯ + 2^{J−1}) = 1 + (2^J − 1)'],['2^J − 1','J + 1','2^{J+1}']),
]);

lesson('509',15,[
  ['`V_j` is the space of functions that are constant on every dyadic interval of length `2^{−j}`. The spaces are nested, `V_0 ⊂ V_1 ⊂ V_2 ⊂ ⋯`, and on [0, 1) `dim V_j = 2^j`. The orthogonal projection onto `V_j` replaces f by its average on each interval:','`V_j` فضاء الدوال الثابتة على كل مجال ثنائي طوله `2^{−j}`. والفضاءات متداخلة `V_0 ⊂ V_1 ⊂ V_2 ⊂ ⋯`، وعلى [0, 1) يكون `dim V_j = 2^j`. والإسقاط العمودي على `V_j` يستبدل بـ f متوسطها على كل مجال:'],
  'P_jf = Σ_k ⟨f, φ_{j,k}⟩φ_{j,k},     ‖t − P_jt‖^2 = #f{4^{−j}}{12}',
  ['For `f = t`: on an interval of length h the best constant is the midpoint value and the squared error is `h^3/12`; there are `1/h` intervals, so the total is `h^2/12` with `h = 2^{−j}`. The error halves with each level.','ولـ `f = t`: على مجال طوله h يكون أفضل ثابت هو قيمة المنتصف ومربع الخطأ `h^3/12`، وعدد المجالات `1/h` فيكون المجموع `h^2/12` مع `h = 2^{−j}`. والخطأ ينتصف مع كل مستوى.'],
],[
  Q('Write `P_1t` on [0, 1).','اكتب `P_1t` على [0, 1).','P_1t = #f{1}{4}·1_{[0,1/2)} + #f{3}{4}·1_{[1/2,1)}',['2∫_0^{1/2} t dt = #f{1}{4},   2∫_{1/2}^1 t dt = #f{3}{4}'],['P_1t = #f{1}{2}','P_1t = #f{1}{2}·1_{[0,1/2)} + 1_{[1/2,1)}','P_1t = t']),
  Q('Compute `‖t − P_2t‖`.','احسب `‖t − P_2t‖`.','#f{1}{4#r{12}} ≈ 0.0722',['#r{#f{4^{−2}}{12}}'],['#f{1}{48}','#f{1}{#r{12}}','#f{1}{16}']),
  Q('What is `dim V_3` on [0, 1)?','ما `dim V_3` على [0, 1)؟','8',['2^3'],['3','6','9']),
  Q('Is `f = 1_{[0, 1/3)}` in some `V_j`?','هل `f = 1_{[0, 1/3)}` في أحد الفضاءات `V_j`؟',['No: 1/3 is not a dyadic number `k/2^j`','لا: 1/3 ليست عدداً ثنائياً `k/2^j`'],[['But `P_jf → f` in `L^2` as j grows.','لكن `P_jf → f` في `L^2` مع نمو j.']],[['Yes, in `V_2`','نعم في `V_2`'],['Yes, in every `V_j`','نعم في كل `V_j`']]),
]);

lesson('509',16,[
  ['`W_j` is the orthogonal complement of `V_j` inside `V_{j+1}`: what level j + 1 sees and level j misses. It is spanned by the wavelets `ψ_{j,k}`, and the detail of f at level j is','`W_j` المتمم العمودي لـ `V_j` داخل `V_{j+1}`: ما يراه المستوى j + 1 ويفوّته المستوى j. وتولده المويجات `ψ_{j,k}`، وتفصيل f في المستوى j هو'],
  'Q_jf = P_{j+1}f − P_jf = Σ_k ⟨f, ψ_{j,k}⟩ψ_{j,k}',
  ['For `f = t`: `Q_0t = P_1t − P_0t` is `−1/4` on the left half and `+1/4` on the right half, which is `−(1/4)ψ`, in agreement with `⟨t, ψ⟩ = −1/4`.','ولـ `f = t`: `Q_0t = P_1t − P_0t` يساوي `−1/4` على النصف الأيسر و `+1/4` على الأيمن، أي `−(1/4)ψ`، متفقاً مع `⟨t, ψ⟩ = −1/4`.'],
],[
  Q('Compute `Q_0t`.','احسب `Q_0t`.','−#f{1}{4}ψ',['P_1t − #f{1}{2}:   #f{1}{4} − #f{1}{2},   #f{3}{4} − #f{1}{2}'],['#f{1}{4}ψ','−#f{1}{2}ψ','0']),
  Q('Compute `⟨t, ψ_{1,0}⟩`.','احسب `⟨t, ψ_{1,0}⟩`.','−#f{2^{−3/2}}{4} ≈ −0.0884',['⟨t, ψ_{j,k}⟩ = −#f{2^{−3j/2}}{4}'],['−#f{1}{4}','−#f{1}{8}','#f{2^{−3/2}}{4}']),
  Q('What is `dim W_j` on [0, 1)?','ما `dim W_j` على [0, 1)؟','2^j',['dim V_{j+1} − dim V_j = 2^{j+1} − 2^j'],['2^{j+1}','j','2^j − 1']),
  Q('Is a function in `W_2` also in `V_3`?','هل الدالة في `W_2` موجودة أيضاً في `V_3`؟',['Yes: `W_2 ⊂ V_3`, its functions are constant on intervals of length 1/8','نعم: `W_2 ⊂ V_3` ودوالها ثابتة على مجالات طولها 1/8'],[['But it is orthogonal to `V_2`.','لكنها عمودية على `V_2`.']],[['No','لا'],['Only if it is zero','فقط إن كانت صفراً']]),
]);

lesson('509',17,[
  ['Repeating `V_{j+1} = V_j ⊕ W_j` splits a fine space into a coarse part and all the details between:','تكرار `V_{j+1} = V_j ⊕ W_j` يقسم فضاءً دقيقاً إلى جزء خشن وكل التفاصيل بينهما:'],
  'V_J = V_0 ⊕ W_0 ⊕ W_1 ⊕ ⋯ ⊕ W_{J−1},     P_Jf = P_0f + Σ_{j<J} Q_jf',
  ['So every f is its overall average plus details at every scale. The dimensions add up: `2^J = 1 + 1 + 2 + ⋯ + 2^{J−1}`. Because the pieces are orthogonal, energies add too: `‖P_Jf‖^2 = ‖P_0f‖^2 + Σ ‖Q_jf‖^2`.','فكل f متوسطها الكلي زائد تفاصيل عند كل مقياس. والأبعاد تتجمع: `2^J = 1 + 1 + 2 + ⋯ + 2^{J−1}`. ولأن الأجزاء متعامدة تتجمع الطاقات أيضاً: `‖P_Jf‖^2 = ‖P_0f‖^2 + Σ ‖Q_jf‖^2`.'],
],[
  Q('Write `V_3` as a direct sum.','اكتب `V_3` مجموعاً مباشراً.','V_3 = V_0 ⊕ W_0 ⊕ W_1 ⊕ W_2',['V_3 = V_2 ⊕ W_2 = V_1 ⊕ W_1 ⊕ W_2 = …'],['V_3 = W_0 ⊕ W_1 ⊕ W_2','V_3 = V_0 ⊕ V_1 ⊕ V_2','V_3 = V_2 ⊕ W_3']),
  Q('Check the dimensions for J = 3.','تحقق من الأبعاد عند J = 3.','8 = 1 + 1 + 2 + 4',[['`dim V_0 = 1`, `dim W_j = 2^j`.','`dim V_0 = 1` و `dim W_j = 2^j`.']],['8 = 1 + 2 + 4','8 = 2 + 2 + 4','9 = 1 + 2 + 2 + 4']),
  Q('For `f = t`, compute `‖Q_jt‖^2`.','لـ `f = t` احسب `‖Q_jt‖^2`.','#f{4^{−j}}{16}',['2^j·(#f{2^{−3j/2}}{4})^2 = #f{2^{−2j}}{16}'],['#f{4^{−j}}{12}','#f{2^{−j}}{16}','#f{1}{16}']),
  Q('Check `‖t‖^2` with `‖P_0t‖^2 = 1/4` and the details.','تحقق من `‖t‖^2` باستخدام `‖P_0t‖^2 = 1/4` والتفاصيل.','#f{1}{4} + #f{1}{16}·#f{1}{1 − 1/4} = #f{1}{4} + #f{1}{12} = #f{1}{3}',['Σ_{j≥0}#f{4^{−j}}{16} = #f{1}{12}'],['#f{1}{4}','#f{1}{2}','#f{5}{16}']),
]);

lesson('509',18,[
  ['The orthonormal Haar transform of a signal of length `2^J` repeats the normalized step on the averages:','تحويل هار المتعامد المعياري لإشارة طولها `2^J` يكرر الخطوة المُعايرة على المتوسطات:'],
  's = #f{a + b}{#r{2}},     d = #f{a − b}{#r{2}};     (4, 6, 10, 12)  →  (16, −6, −#r{2}, −#r{2})',
  ['The factor `1/#r{2}` makes the step orthogonal, so energy is kept: `16^2 + 6^2 + 2 + 2 = 296 = 4^2 + 6^2 + 10^2 + 12^2`. The unnormalized version of Lesson 1 gives `(8, −3, −1, −1)`: the same information with different scaling of each level.','والعامل `1/#r{2}` يجعل الخطوة متعامدة فتُحفظ الطاقة: `16^2 + 6^2 + 2 + 2 = 296 = 4^2 + 6^2 + 10^2 + 12^2`. والنسخة غير المعايرة في الدرس 1 تعطي `(8, −3, −1, −1)`: المعلومات نفسها بتحجيم مختلف لكل مستوى.'],
],[
  Q('Apply one normalized step to `(3, 1)`.','طبّق خطوة معايرة واحدة على `(3, 1)`.','s = 2#r{2},   d = #r{2}',['#f{3 + 1}{#r{2}},   #f{3 − 1}{#r{2}}'],['s = 2,   d = 1','s = 4,   d = 2','s = #r{2},   d = 2#r{2}']),
  Q('Compute the full normalized transform of `(2, 2, 2, 2)`.','احسب التحويل المعاير الكامل لـ `(2, 2, 2, 2)`.','(4, 0, 0, 0)',['s_1 = (2#r{2}, 2#r{2}),   s_2 = #f{4#r{2}}{#r{2}} = 4'],['(2, 0, 0, 0)','(8, 0, 0, 0)','(2, 2, 2, 2)']),
  Q('Check the energy for `(2, 2, 2, 2)`.','تحقق من الطاقة لـ `(2, 2, 2, 2)`.','4^2 = 16 = 4·2^2',[['Parseval for an orthogonal transform.','بارسيفال لتحويل متعامد.']],['2^2 = 4','8^2 = 64','16 = 8']),
  Q('How are the normalized coarse coefficient 16 and the Lesson 1 average 8 related for `(4, 6, 10, 12)`?','كيف يرتبط المعامل الخشن المعاير 16 والمتوسط 8 في الدرس 1 لـ `(4, 6, 10, 12)`؟','16 = 8·(#r{2})^2',[['Each of the two levels uses `1/#r{2}` instead of `1/2`, a factor `#r{2}` per level.','كل من المستويين يستخدم `1/#r{2}` بدل `1/2`، أي عامل `#r{2}` لكل مستوى.']],['16 = 2·8','16 = 8 + 8','16 = 8·#r{2}']),
]);

lesson('509',19,[
  ['Reconstruction runs the steps backward, from the coarsest level to the finest:','إعادة البناء تشغّل الخطوات عكسياً من المستوى الأخشن إلى الأدق:'],
  'a = #f{s + d}{#r{2}},     b = #f{s − d}{#r{2}};     (10, 2, 0, 0)  →  (6, 6, 4, 4)',
  ['Zero details mean equal neighbours. Compression sets small details to zero before reconstructing; because the transform is orthogonal, the squared error equals the energy of the dropped coefficients.','والتفاصيل الصفرية تعني جيراناً متساوين. والضغط يجعل التفاصيل الصغيرة صفراً قبل إعادة البناء، ولأن التحويل متعامد يساوي مربع الخطأ طاقة المعاملات المحذوفة.'],
],[
  Q('Reconstruct the pair from `s = 2#r{2}`, `d = #r{2}`.','أعد بناء الزوج من `s = 2#r{2}` و `d = #r{2}`.','(3, 1)',['#f{2#r{2} + #r{2}}{#r{2}} = 3,   #f{2#r{2} − #r{2}}{#r{2}} = 1'],['(1, 3)','(3#r{2}, #r{2})','(2, 1)']),
  Q('Reconstruct `(10, 2, 0, 0)` and check the energy.','أعد بناء `(10, 2, 0, 0)` وتحقق من الطاقة.','(6, 6, 4, 4):   36 + 36 + 16 + 16 = 104 = 100 + 4',['s_1 = (6#r{2}, 4#r{2}),   d_1 = (0, 0)'],['(12, 8, 0, 0)','(6, 4, 6, 4)','(5, 5, 5, 5)']),
  Q('The transform of a signal is `(16, −6, −#r{2}, −#r{2})`. Drop the two fine details. What is the squared error?','تحويل إشارة `(16, −6, −#r{2}, −#r{2})`. احذف التفصيلين الدقيقين. ما مربع الخطأ؟','4',['(#r{2})^2 + (#r{2})^2'],['2','8','36']),
  Q('Reconstruct `(16, −6, 0, 0)`.','أعد بناء `(16, −6, 0, 0)`.','(5, 5, 11, 11)',['#f{16 ± (−6)}{#r{2}} = (5#r{2}, 11#r{2})'],['(4, 6, 10, 12)','(8, 8, 8, 8)','(11, 11, 5, 5)']),
]);

lesson('509',20,[
  ['A function on [0, 1] has the Haar series `f = c_0φ + Σ_{j,k} d_{j,k}ψ_{j,k}`. Its coefficients show its smoothness:','الدالة على [0, 1] لها متسلسلة هار `f = c_0φ + Σ_{j,k} d_{j,k}ψ_{j,k}`. ومعاملاتها تُظهر ملاستها:'],
  'f = t:   d_{j,k} = −#f{2^{−3j/2}}{4},     ‖t − P_Jt‖ = #f{2^{−J}}{#r{12}}',
  ['For a smooth function the details at level j shrink like `2^{−3j/2}`. At a jump the coefficient of the one wavelet that straddles the jump shrinks only like `2^{−j/2}`, and all others are small. So large coefficients point to singularities, the idea behind compression and edge detection.','وللدالة الملساء تتقلص التفاصيل في المستوى j مثل `2^{−3j/2}`. وعند القفزة يتقلص معامل المويجة الوحيدة التي تعبر القفزة مثل `2^{−j/2}` فقط وكل البقية صغيرة. فالمعاملات الكبيرة تشير إلى نقاط الانفراد، وهي الفكرة وراء الضغط وكشف الحواف.'],
],[
  Q('Compute `d_{2,3}` for `f = t`.','احسب `d_{2,3}` لـ `f = t`.','−#f{1}{32}',['−#f{2^{−3}}{4}'],['−#f{1}{16}','−#f{1}{8}','#f{1}{32}']),
  Q('How many levels J make `‖t − P_Jt‖ < 0.01`?','كم مستوى J يجعل `‖t − P_Jt‖ < 0.01`؟','J = 5',['#f{2^{−J}}{#r{12}} < 0.01   ⇔   2^J > 28.9'],['J = 4','J = 7','J = 10']),
  Q('For `f = 1_{[1/3, 1)}`, how big is `|d_{j,k}|` for the wavelet that contains 1/3?','لـ `f = 1_{[1/3, 1)}` كم حجم `|d_{j,k}|` للمويجة التي تحتوي 1/3؟','~ 2^{−j/2}',[['Only a fraction of the support sees each value, so `|d| ≤ 2^{j/2}·2^{−j}`.','جزء من الحامل فقط يرى كل قيمة فيكون `|d| ≤ 2^{j/2}·2^{−j}`.']],['~ 2^{−3j/2}','= 0','~ 2^{j/2}']),
  Q('For that step function, how many wavelets per level have non-zero coefficients?','لتلك الدالة الدرجية كم مويجة في كل مستوى معاملها غير صفري؟','1',[['Only the one whose support contains 1/3; f is constant on all the others.','فقط التي يحتوي حاملها 1/3، و f ثابتة على كل البقية.']],['2^j','0','2']),
]);

export const MS509 = true;
