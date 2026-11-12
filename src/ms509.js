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

export const MS509 = true;
