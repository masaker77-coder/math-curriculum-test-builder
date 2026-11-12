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

/* ---- 509 · Unit 3 (lessons 21–30): the continuous wavelet transform ---- */
lesson('509',21,[
  ['A mother wavelet is a function ψ with finite energy and mean zero: a small wave. For real ψ the admissibility constant must be finite:','المويجة الأم دالة ψ طاقتها منتهية ومتوسطها صفر: موجة صغيرة. وللدالة الحقيقية ψ يجب أن يكون ثابت القبول منتهياً:'],
  'C_{ψ} = ∫_0^∞ #f{|ψ̂(ω)|^2}{ω} dω < ∞     ⇒     ψ̂(0) = ∫ψ(t) dt = 0',
  ['The Haar wavelet, the Mexican hat `(1 − t^2)e^{−t^2/2}` and the derivative of a Gaussian are admissible; a Gaussian itself is not, because its mean is not zero. For the Mexican hat `ψ̂(ω) = #r{2π}ω^2e^{−ω^2/2}` and `C_{ψ} = π`.','ومويجة هار والقبعة المكسيكية `(1 − t^2)e^{−t^2/2}` ومشتقة الدالة الجاوسية مقبولة، أما الجاوسية نفسها فلا لأن متوسطها ليس صفراً. وللقبعة المكسيكية `ψ̂(ω) = #r{2π}ω^2e^{−ω^2/2}` و `C_{ψ} = π`.'],
],[
  Q('Check that the Mexican hat has mean zero.','تحقق أن متوسط القبعة المكسيكية صفر.','∫(1 − t^2)e^{−t^2/2}dt = #r{2π} − #r{2π} = 0',['∫t^2e^{−t^2/2}dt = #r{2π}'],['∫(1 − t^2)e^{−t^2/2}dt = #r{2π}','∫(1 − t^2)e^{−t^2/2}dt = 1','∫(1 − t^2)e^{−t^2/2}dt = −#r{2π}']),
  Q('Is `e^{−t^2}` an admissible wavelet?','هل `e^{−t^2}` مويجة مقبولة؟',['No: its mean `#r{π}` is not zero, so `C_{ψ}` diverges at ω = 0','لا: متوسطها `#r{π}` ليس صفراً فيتباعد `C_{ψ}` عند ω = 0'],[['`|ψ̂(ω)|^2/ω` behaves like `π/ω` near 0.','`|ψ̂(ω)|^2/ω` يسلك مثل `π/ω` قرب 0.']],[['Yes','نعم'],['Only for t > 0','فقط عند t > 0']]),
  Q('Compute `C_{ψ}` for the Mexican hat.','احسب `C_{ψ}` للقبعة المكسيكية.','π',['∫_0^∞ #f{2πω^4e^{−ω^2}}{ω}dω = 2π∫_0^∞ ω^3e^{−ω^2}dω = 2π·#f{1}{2}'],['2π','#r{π}','1']),
  Q('Show that `ψ = −te^{−t^2/2}` has `ψ̂(0) = 0`.','بيّن أن `ψ = −te^{−t^2/2}` تحقق `ψ̂(0) = 0`.','∫−te^{−t^2/2}dt = 0',[['The integrand is odd.','المكامل فردي.']],['∫−te^{−t^2/2}dt = −1','∫−te^{−t^2/2}dt = #r{2π}','ψ̂(0) = 1']),
]);

lesson('509',22,[
  ['The continuous wavelet transform compares f with the wavelet stretched by a > 0 and moved to b. For a real wavelet ψ:','التحويل المويجي المتصل يقارن f بالمويجة الممددة بـ a > 0 والمزاحة إلى b. ولمويجة حقيقية ψ:'],
  'Wf(a, b) = ⟨f, ψ_{a,b}⟩ = #f{1}{#r{a}}∫ f(t) ψ(#f{t − b}{a}) dt',
  ['The factor `1/#r{a}` keeps `‖ψ_{a,b}‖ = ‖ψ‖`. Constants give zero, and the discrete Haar coefficients are samples of the transform: `⟨f, ψ_{j,k}⟩ = Wf(2^{−j}, k2^{−j})`.','والعامل `1/#r{a}` يُبقي `‖ψ_{a,b}‖ = ‖ψ‖`. والثوابت تعطي صفراً، ومعاملات هار المتقطعة عينات من التحويل: `⟨f, ψ_{j,k}⟩ = Wf(2^{−j}, k2^{−j})`.'],
],[
  Q('Compute Wf for the constant f = 3.','احسب Wf للدالة الثابتة f = 3.','0',['3#r{a}∫ψ(u) du = 0'],['3','3#r{a}','#f{3}{#r{a}}']),
  Q('Compute `Wf(a, 0)` for `f = |t|` with the Mexican hat.','احسب `Wf(a, 0)` لـ `f = |t|` مع القبعة المكسيكية.','−2a^{3/2}',['t = au:   a^{3/2}∫|u|(1 − u^2)e^{−u^2/2}du = a^{3/2}(2 − 4)'],['2a^{3/2}','−2a^{1/2}','−2a']),
  Q('Which a and b give `⟨f, ψ_{3,5}⟩` for the Haar wavelet?','أي a و b يعطيان `⟨f, ψ_{3,5}⟩` لمويجة هار؟','a = #f{1}{8},   b = #f{5}{8}',['a = 2^{−j},   b = k2^{−j}'],['a = 8,   b = 5','a = 3,   b = 5','a = #f{1}{8},   b = 5']),
  Q('Compute `Wf(a, b)` for `f = δ(t − t_0)`.','احسب `Wf(a, b)` لـ `f = δ(t − t_0)`.','#f{1}{#r{a}}ψ(#f{t_0 − b}{a})',[['The transform of a spike is the wavelet itself, centred at the spike.','تحويل النبضة هو المويجة نفسها متمركزة عند النبضة.']],['ψ(t_0)','#r{a}ψ(b)','0']),
]);

lesson('509',23,[
  ['Scale is inverse frequency. If `|ψ̂|` peaks at `ω_c`, then `ψ_{a,b}` responds most to the frequency `ω_c/a`. For the Mexican hat `ω_c = #r{2}`; for the Morlet wavelet `ω_c ≈ ω_0`:','المقياس عكس التردد. إذا بلغ `|ψ̂|` قمته عند `ω_c` فإن `ψ_{a,b}` تستجيب أكثر للتردد `ω_c/a`. وللقبعة المكسيكية `ω_c = #r{2}`، ولمويجة مورليه `ω_c ≈ ω_0`:'],
  'ω ≈ #f{ω_c}{a},     f_{Hz} = #f{ω_c}{2πa}',
  ['Small scales are high frequencies, large scales low frequencies. Each octave (a doubled) has the same number of scales in a log-spaced grid, which matches how we hear and how many natural signals behave.','والمقاييس الصغيرة ترددات عالية والكبيرة ترددات منخفضة. ولكل أوكتاف (مضاعفة a) العدد نفسه من المقاييس في شبكة لوغاريتمية، وهذا يوافق طريقة سمعنا وسلوك كثير من الإشارات الطبيعية.'],
],[
  Q('Find the peak of `|ψ̂(ω)| = #r{2π}ω^2e^{−ω^2/2}`.','أوجد قمة `|ψ̂(ω)| = #r{2π}ω^2e^{−ω^2/2}`.','ω_c = #r{2}',['#f{d}{dω}(ω^2e^{−ω^2/2}) = (2ω − ω^3)e^{−ω^2/2} = 0'],['ω_c = 1','ω_c = 2','ω_c = 0']),
  Q('At which scale does the Mexican hat match ω = 10 best?','عند أي مقياس تطابق القبعة المكسيكية ω = 10 أفضل؟','a = #f{#r{2}}{10} ≈ 0.141',['a = #f{ω_c}{ω}'],['a = 10','a = 0.1','a = 1.41']),
  Q('A Morlet wavelet with `ω_0 = 6` is used at a = 0.01 s. About which frequency in Hz does it see?','مويجة مورليه مع `ω_0 = 6` تُستخدم عند a = 0.01 ثانية. أي تردد بالهرتز تراه تقريباً؟','≈ 95 Hz',['#f{6}{2π·0.01}'],['≈ 600 Hz','≈ 6 Hz','≈ 16 Hz']),
  Q('How many scales per octave does `a = 2^{m/8}`, m = 0, 1, …, give?','كم مقياساً لكل أوكتاف تعطيه `a = 2^{m/8}` مع m = 0, 1, …؟','8',['2^{(m+8)/8} = 2·2^{m/8}'],['1','16','2']),
]);

lesson('509',24,[
  ['Two wavelets are used most in practice. The Mexican hat is real and symmetric; the Morlet wavelet is complex, a Gaussian-windowed complex exponential:','مويجتان تُستخدمان أكثر في التطبيق. القبعة المكسيكية حقيقية ومتماثلة، ومويجة مورليه مركبة، أسية مركبة بنافذة جاوسية:'],
  'ψ_{MH}(t) = −#f{d^2}{dt^2}e^{−t^2/2} = (1 − t^2)e^{−t^2/2},     ψ_{M}(t) = e^{iω_0t}e^{−t^2/2},     ψ̂_{M}(ω) = #r{2π}e^{−(ω−ω_0)^2/2}',
  ['The Morlet wavelet has mean `#r{2π}e^{−ω_0^2/2}`, about `9.3 × 10^{−6}` for `ω_0 = 5`: not exactly zero, but small enough in practice (or corrected by subtracting a Gaussian). Its modulus `|Wf|` gives the local amplitude and its argument the local phase.','ومتوسط مويجة مورليه `#r{2π}e^{−ω_0^2/2}` أي نحو `9.3 × 10^{−6}` عند `ω_0 = 5`: ليس صفراً بالضبط لكنه صغير بما يكفي في التطبيق (أو يُصحح بطرح دالة جاوسية). ومقياسها `|Wf|` يعطي السعة المحلية وزاويتها الطور المحلي.'],
],[
  Q('Check `−#f{d^2}{dt^2}e^{−t^2/2} = (1 − t^2)e^{−t^2/2}`.','تحقق من `−#f{d^2}{dt^2}e^{−t^2/2} = (1 − t^2)e^{−t^2/2}`.','#f{d^2}{dt^2}e^{−t^2/2} = (t^2 − 1)e^{−t^2/2}',['#f{d}{dt}e^{−t^2/2} = −te^{−t^2/2}'],['#f{d^2}{dt^2}e^{−t^2/2} = t^2e^{−t^2/2}','#f{d^2}{dt^2}e^{−t^2/2} = −e^{−t^2/2}','#f{d^2}{dt^2}e^{−t^2/2} = (1 + t^2)e^{−t^2/2}']),
  Q('Compute the Morlet mean `ψ̂_M(0)` for `ω_0 = 5`.','احسب متوسط مورليه `ψ̂_M(0)` عند `ω_0 = 5`.','#r{2π}e^{−12.5} ≈ 9.3 × 10^{−6}',['ψ̂_M(0) = #r{2π}e^{−ω_0^2/2}'],['0','#r{2π}','e^{−5}']),
  Q('Why is the Mexican hat called a second-derivative wavelet?','لماذا تسمى القبعة المكسيكية مويجة المشتقة الثانية؟',['`Wf` with it equals a scaled second derivative of f smoothed by a Gaussian','`Wf` بها يساوي مشتقة ثانية مُحجّمة لـ f منعّمة بدالة جاوسية'],[['So it responds to curvature and has two vanishing moments.','فتستجيب للانحناء ولها عزمان منعدمان.']],[['It has two peaks','لها قمتان'],['It is the second Hermite polynomial','هي كثيرة حدود هيرميت الثانية']]),
  Q('Which wavelet gives the phase of an oscillation: Morlet or Mexican hat?','أي مويجة تعطي طور تذبذب: مورليه أم القبعة المكسيكية؟',['Morlet: it is complex, so `arg Wf` is the local phase','مورليه: مركبة فيكون `arg Wf` هو الطور المحلي'],[['A real wavelet gives an oscillating transform instead.','المويجة الحقيقية تعطي تحويلاً متذبذباً بدلاً من ذلك.']],[['Mexican hat','القبعة المكسيكية'],['Both equally','كلاهما بالتساوي']]),
]);

lesson('509',25,[
  ['When `C_{ψ}` is finite, f is recovered from its transform by superposing all the wavelets with weights `Wf(a, b)`:','عندما يكون `C_{ψ}` منتهياً تُسترجع f من تحويلها بتراكب كل المويجات بالأوزان `Wf(a, b)`:'],
  'f(t) = #f{1}{C_{ψ}}∫_0^∞∫_{−∞}^{∞} Wf(a, b) ψ_{a,b}(t) db #f{da}{a^2}',
  ['The measure `db da/a^2` treats all scales alike. The transform is redundant: a function of one variable becomes a function of two, so many different functions of (a, b) are not transforms of anything, and a sampled version (Lesson 29) is enough for reconstruction.','والمقياس `db da/a^2` يعامل كل المقاييس بالتساوي. والتحويل فائض: دالة متغير واحد تصبح دالة متغيرين، فدوال كثيرة في (a, b) ليست تحويلاً لأي دالة، ونسخة معاينة (الدرس 29) تكفي لإعادة البناء.'],
],[
  Q('Which constant appears in the inversion formula for the Mexican hat?','أي ثابت يظهر في صيغة العكس للقبعة المكسيكية؟','#f{1}{C_{ψ}} = #f{1}{π}',[['From Lesson 21.','من الدرس 21.']],['#f{1}{2π}','1','#f{1}{#r{π}}']),
  Q('Why is admissibility needed for the inversion?','لماذا يلزم القبول للعكس؟',['Otherwise `C_{ψ}` is infinite and the normalisation fails','وإلا كان `C_{ψ}` لانهائياً فتفشل المعايرة'],[['The low frequencies would be counted infinitely often.','تُعد الترددات المنخفضة مرات لانهائية.']],[['For speed','للسرعة'],['It is not','ليس لازماً']]),
  Q('Why is `db da/a^2` the natural measure?','لماذا يكون `db da/a^2` المقياس الطبيعي؟',['It is invariant under the change `(a, b) → (sa, sb)`','لا يتغير تحت التحويل `(a, b) → (sa, sb)`'],['#f{d(sb) d(sa)}{(sa)^2} = #f{db da}{a^2}'],[['It is the Lebesgue measure','إنه مقياس لوبيغ'],['By convention only','اصطلاحاً فقط']]),
  Q('Is every function `F(a, b)` the wavelet transform of some f?','هل كل دالة `F(a, b)` هي التحويل المويجي لدالة ما f؟',['No: the transform is redundant, and transforms satisfy a reproducing relation','لا: التحويل فائض والتحويلات تحقق علاقة استنساخ'],[['Nearby values are strongly correlated.','القيم المتجاورة مترابطة بقوة.']],[['Yes','نعم'],['Only if F is positive','فقط إذا كانت F موجبة']]),
]);

lesson('509',26,[
  ['The transform keeps energy, up to the admissibility constant:','التحويل يحفظ الطاقة حتى ثابت القبول:'],
  '∫_0^∞∫_{−∞}^{∞} |Wf(a, b)|^2 db #f{da}{a^2} = C_{ψ}‖f‖^2',
  ['So `|Wf(a, b)|^2/(C_{ψ}a^2)` is an energy density on the time–scale plane. For `f = e^{−t^2/2}` and the Mexican hat the left side is `π·#r{π} = π^{3/2} ≈ 5.568`, which was checked by numerical integration.','فيكون `|Wf(a, b)|^2/(C_{ψ}a^2)` كثافة طاقة على مستوى الزمن–المقياس. ولـ `f = e^{−t^2/2}` والقبعة المكسيكية يكون الطرف الأيسر `π·#r{π} = π^{3/2} ≈ 5.568`، وقد تُحقق منه بالتكامل العددي.'],
],[
  Q('Compute `‖e^{−t^2/2}‖^2`.','احسب `‖e^{−t^2/2}‖^2`.','#r{π}',['∫e^{−t^2}dt'],['#r{2π}','1','π']),
  Q('What is the total scalogram energy for `e^{−t^2/2}` with the Mexican hat?','ما الطاقة الكلية لمخطط المقياس لـ `e^{−t^2/2}` مع القبعة المكسيكية؟','π^{3/2} ≈ 5.568',['C_{ψ}‖f‖^2 = π#r{π}'],['#r{π} ≈ 1.772','π ≈ 3.142','2π^{3/2}']),
  Q('If f is doubled, how does the left side change?','إذا ضوعفت f كيف يتغير الطرف الأيسر؟','×4',['W(2f) = 2Wf'],['×2','×1','×8']),
  Q('Where does the identity come from?','من أين تأتي المتطابقة؟',['Plancherel in b at each scale, then the integral of `|ψ̂(aω)|^2/a` over a gives `C_{ψ}`','بلانشيريل في b عند كل مقياس، ثم تكامل `|ψ̂(aω)|^2/a` على a يعطي `C_{ψ}`'],['∫|Wf|^2db = #f{a}{2π}∫|f̂(ω)|^2|ψ̂(aω)|^2dω'],[['From the inversion formula only','من صيغة العكس فقط'],['It is an assumption','افتراض']]),
]);

lesson('509',27,[
  ['The scalogram `|Wf(a, b)|^2` is the picture of the transform, with b across and log a (or frequency) up. For a pure tone `f = sin ωt` and the Mexican hat:','مخطط المقياس `|Wf(a, b)|^2` صورة التحويل، b أفقياً و log a (أو التردد) رأسياً. ولنغمة نقية `f = sin ωt` والقبعة المكسيكية:'],
  'Wf(a, b) = #r{a} ψ̂(aω) sin ωb,     max_a #r{a}ψ̂(aω)   at   a = #f{#r{5/2}}{ω}',
  ['The ridge of the scalogram traces the frequency over time. Because of the `#r{a}` factor the ridge sits at `#r{5/2}/ω`, not at `#r{2}/ω`: a reminder to calibrate scale against frequency for the normalisation used. For a chirp `sin(t^2)` the ridge follows the instantaneous frequency 2t.','وحافة مخطط المقياس ترسم التردد عبر الزمن. وبسبب العامل `#r{a}` تقع الحافة عند `#r{5/2}/ω` لا عند `#r{2}/ω`: تذكير بمعايرة المقياس مقابل التردد للمعايرة المستخدمة. ولنغمة متصاعدة `sin(t^2)` تتبع الحافة التردد اللحظي 2t.'],
],[
  Q('Find the ridge scale for `sin 10t`.','أوجد مقياس الحافة لـ `sin 10t`.','a = #f{#r{2.5}}{10} ≈ 0.158',['#f{d}{da}(a^{5/2}e^{−a^2ω^2/2}) = 0   ⇒   a^2ω^2 = #f{5}{2}'],['a ≈ 0.141','a = 0.1','a = 10']),
  Q('What is the instantaneous frequency of `sin(t^2)` at t = 3?','ما التردد اللحظي لـ `sin(t^2)` عند t = 3؟','6',['#f{d}{dt}t^2 = 2t'],['9','3','18']),
  Q('Why does `|Wf|` for `sin ωt` oscillate in b?','لماذا يتذبذب `|Wf|` لـ `sin ωt` في b؟',['The Mexican hat is real, so the transform follows the oscillation `sin ωb`','القبعة المكسيكية حقيقية فيتبع التحويل التذبذب `sin ωb`'],[['A complex Morlet wavelet gives a smooth modulus instead.','مويجة مورليه المركبة تعطي مقياساً أملس بدلاً من ذلك.']],[['Because of noise','بسبب الضجيج'],['It does not','لا يتذبذب']]),
  Q('How does the scalogram show a click at time `t_0`?','كيف يُظهر مخطط المقياس نقرة عند الزمن `t_0`؟',['As a cone of large values narrowing toward `b = t_0` at small scales','مخروطاً من القيم الكبيرة يضيق نحو `b = t_0` عند المقاييس الصغيرة'],[['The cone of influence has width proportional to a.','مخروط التأثير عرضه يتناسب مع a.']],[['As a horizontal line','خطاً أفقياً'],['It does not show it','لا يُظهرها']]),
]);

lesson('509',28,[
  ['The decay of the transform at small scales measures smoothness. If f has Hölder exponent α at `t_0` and ψ has more than α vanishing moments, then near `t_0`:','تناقص التحويل عند المقاييس الصغيرة يقيس الملاسة. إذا كان لـ f أس هولدر α عند `t_0` وكان لـ ψ أكثر من α عزوم منعدمة فقرب `t_0`:'],
  '|Wf(a, b)| ≤ C a^{α+1/2},     log|Wf| ≈ (α + #f{1}{2}) log a + const',
  ['The slope on a log–log plot gives α. Examples: `|t|` (α = 1) gives `−2a^{3/2}` with the Mexican hat; a jump (α = 0) gives `a^{1/2}`; a spike δ (α = −1) gives `a^{−1/2}`. The maxima of `|Wf|` lines pointing to `t_0` locate the singularity.','والميل على رسم لوغاريتمي مزدوج يعطي α. أمثلة: `|t|` (α = 1) تعطي `−2a^{3/2}` مع القبعة المكسيكية، والقفزة (α = 0) تعطي `a^{1/2}`، والنبضة δ (α = −1) تعطي `a^{−1/2}`. وخطوط القيم العظمى لـ `|Wf|` المتجهة إلى `t_0` تحدد موضع الانفراد.'],
],[
  Q('With the Haar wavelet and the step `H(t)`, compute `Wf(a, −a/2)`.','مع مويجة هار والدالة الدرجية `H(t)` احسب `Wf(a, −a/2)`.','−#f{#r{a}}{2}',['#f{1}{#r{a}}∫_0^{a/2}(−1)dt'],['#f{#r{a}}{2}','−#f{a}{2}','0']),
  Q('`|Wf|` is `0.002` at a = 0.01 and `0.016` at a = 0.04. Find α.','`|Wf|` يساوي `0.002` عند a = 0.01 و `0.016` عند a = 0.04. أوجد α.','α = 1',['4^{α+1/2} = 8   ⇒   α + #f{1}{2} = #f{3}{2}'],['α = 1.5','α = 0.5','α = 2']),
  Q('What slope does `f = |t|^{0.3}` give at `t_0 = 0`?','أي ميل تعطيه `f = |t|^{0.3}` عند `t_0 = 0`؟','0.8',['α + #f{1}{2}'],['0.3','1.3','−0.2']),
  Q('Why must ψ have enough vanishing moments?','لماذا يجب أن يكون لـ ψ عزوم منعدمة كافية؟',['So that the smooth (polynomial) part of f near `t_0` gives no contribution that hides the singularity','حتى لا يعطي الجزء الأملس (كثير الحدود) من f قرب `t_0` مساهمة تخفي الانفراد'],[['Haar sees only α < 1.','هار ترى α < 1 فقط.']],[['For admissibility only','للقبول فقط'],['They need not','لا حاجة']]),
]);

lesson('509',29,[
  ['To compute with the transform we sample it on a grid `a = a_0^{−j}`, `b = kb_0a_0^{−j}`. The sampled wavelets form a frame when there are bounds `0 < A ≤ B` with','للحساب بالتحويل نعاينه على شبكة `a = a_0^{−j}` و `b = kb_0a_0^{−j}`. والمويجات المعاينة تكوّن إطاراً عندما توجد حدود `0 < A ≤ B` مع'],
  'A‖f‖^2 ≤ Σ_{j,k}|⟨f, ψ_{j,k}⟩|^2 ≤ B‖f‖^2',
  ['A frame allows stable reconstruction. If A = B the frame is tight and reconstruction is as simple as for an orthonormal basis, `f = A^{−1}Σ⟨f, ψ_{j,k}⟩ψ_{j,k}`. An orthonormal basis is the tight frame with A = B = 1 and no redundancy; dyadic sampling `a_0 = 2`, `b_0 = 1` of the Haar wavelet gives one.','والإطار يسمح بإعادة بناء مستقرة. وإذا كان A = B فالإطار مشدود وإعادة البناء بسيطة كما لأساس متعامد معياري `f = A^{−1}Σ⟨f, ψ_{j,k}⟩ψ_{j,k}`. والأساس المتعامد المعياري إطار مشدود مع A = B = 1 ودون فائض، والمعاينة الثنائية `a_0 = 2` و `b_0 = 1` لمويجة هار تعطي واحداً.'],
],[
  Q('Three unit vectors in `ℝ^2` at 120° apart: compute `Σ_k|⟨x, e_k⟩|^2` for `x = (1, 0)`, `e_k` at angles 90°, 210°, 330°.','ثلاثة متجهات وحدة في `ℝ^2` بينها 120°: احسب `Σ_k|⟨x, e_k⟩|^2` لـ `x = (1, 0)` و `e_k` عند الزوايا 90° و 210° و 330°.','#f{3}{2}',['0^2 + (#f{−#r{3}}{2})^2 + (#f{#r{3}}{2})^2'],['1','3','#f{1}{2}']),
  Q('Is that frame tight? Give A.','هل ذلك الإطار مشدود؟ أعط A.',['Yes, `A = B = 3/2`','نعم `A = B = 3/2`'],[['The sum is `(3/2)‖x‖^2` for every x.','المجموع `(3/2)‖x‖^2` لكل x.']],[['No','لا'],['Yes, A = 1','نعم A = 1']]),
  Q('Reconstruct x from its frame coefficients `c_k = ⟨x, e_k⟩` in that tight frame.','أعد بناء x من معاملات الإطار `c_k = ⟨x, e_k⟩` في ذلك الإطار المشدود.','x = #f{2}{3}Σ_k c_ke_k',['x = A^{−1}Σ⟨x, e_k⟩e_k'],['x = Σ_k c_ke_k','x = #f{3}{2}Σ_k c_ke_k','x = #f{1}{3}Σ_k c_ke_k']),
  Q('What is the redundancy of that frame?','ما فائض ذلك الإطار؟','#f{3}{2}',[['Three vectors in a space of dimension 2.','ثلاثة متجهات في فضاء بعده 2.']],['1','2','3']),
]);

lesson('509',30,[
  ['Worked problems for Unit 3: admissibility, scales and singularities.','مسائل محلولة للوحدة 3: القبول والمقاييس ونقاط الانفراد.'],
  'Wf(a, b) = #f{1}{#r{a}}∫ f(t)ψ(#f{t − b}{a})dt,     ω ≈ #f{ω_c}{a},     |Wf| ~ a^{α+1/2}',
],[
  Q('Compute `Wf(a, 0)` for `f = t^2` with the Mexican hat.','احسب `Wf(a, 0)` لـ `f = t^2` مع القبعة المكسيكية.','−2#r{2π}a^{5/2}',['a^{5/2}∫u^2(1 − u^2)e^{−u^2/2}du = a^{5/2}(#r{2π} − 3#r{2π})'],['0','#r{2π}a^{5/2}','−2a^{3/2}']),
  Q('Compute `Wf(a, b)` for `f = t` with the Mexican hat.','احسب `Wf(a, b)` لـ `f = t` مع القبعة المكسيكية.','0',[['Lines are killed: the Mexican hat has two vanishing moments.','الخطوط تُلغى: للقبعة المكسيكية عزمان منعدمان.']],['b#r{a}','a^{3/2}','#r{2π}']),
  Q('A signal at 50 Hz is analysed with the Mexican hat. Which scale (in seconds) matches it?','إشارة بتردد 50 هرتز تُحلل بالقبعة المكسيكية. أي مقياس (بالثواني) يطابقها؟','a = #f{#r{2}}{2π·50} ≈ 0.0045',['a = #f{ω_c}{2πf}'],['a = 0.02','a = 50','a ≈ 0.28']),
  Q('`|Wf|` grows like `a^{−1/2}` as a → 0 near `t_0`. What is f like there?','`|Wf|` ينمو مثل `a^{−1/2}` عندما a → 0 قرب `t_0`. كيف تكون f هناك؟',['It has a spike (like δ), α = −1','فيها نبضة (مثل δ) و α = −1'],['α + #f{1}{2} = −#f{1}{2}'],[['A jump','قفزة'],['It is smooth','ملساء']]),
]);

/* ---- 509 · Unit 4 (lessons 31–40): multiresolution analysis ---- */
lesson('509',31,[
  ['A multiresolution analysis (MRA) is a ladder of closed subspaces of `L^2(ℝ)` with five properties: the spaces are nested, their union is dense in `L^2`, their intersection is zero, doubling the variable moves one level up, and the shifts `φ(t − k)` are an orthonormal basis of `V_0`:','التحليل متعدد التمييز سلّم من الفضاءات الجزئية المغلقة في `L^2(ℝ)` بخمس خصائص: الفضاءات متداخلة، واتحادها كثيف في `L^2`، وتقاطعها صفر، ومضاعفة المتغير تنقل مستوى للأعلى، والإزاحات `φ(t − k)` أساس متعامد معياري لـ `V_0`:'],
  '⋯ ⊂ V_{−1} ⊂ V_0 ⊂ V_1 ⊂ ⋯,     ∩V_j = {0},     f(t) ∈ V_j ⇔ f(2t) ∈ V_{j+1},     ⟨φ(t − k), φ(t − l)⟩ = δ_{kl}',
  ['Haar is the first example: `V_j` are the piecewise constants of Unit 2. Every MRA produces a wavelet ψ whose shifts and dilations are an orthonormal basis of `L^2(ℝ)`, so constructing wavelets reduces to constructing scaling functions φ.','وهار أول مثال: `V_j` هي الدوال الثابتة قطعياً في الوحدة 2. وكل تحليل متعدد التمييز ينتج مويجة ψ تكون إزاحاتها وتمديداتها أساساً متعامداً معيارياً لـ `L^2(ℝ)`، فيؤول بناء المويجات إلى بناء دوال تقييس φ.'],
],[
  Q('If `f(t) = 1_{[0, 1)}(t)` is in `V_0`, which function is in `V_2`?','إذا كانت `f(t) = 1_{[0, 1)}(t)` في `V_0` فأي دالة في `V_2`؟','f(4t) = 1_{[0, 1/4)}(t)',['f(t) ∈ V_0 ⇔ f(2^jt) ∈ V_j'],['f(t/4)','f(2t)','f(t − 2)']),
  Q('For Haar, is `{φ(t − k)}` orthonormal?','لهار هل `{φ(t − k)}` متعامدة معيارياً؟',['Yes: the unit intervals `[k, k + 1)` are disjoint and each has length 1','نعم: مجالات الوحدة `[k, k + 1)` منفصلة وطول كل منها 1'],[['This is the last axiom.','هذه آخر مسلّمة.']],[['No','لا'],['Only for k ≥ 0','فقط عند k ≥ 0']]),
  Q('What does `∩V_j = {0}` mean for Haar?','ماذا يعني `∩V_j = {0}` لهار؟',['A function constant on ever longer intervals and of finite energy must be zero','الدالة الثابتة على مجالات تزداد طولاً بلا حد وطاقتها منتهية يجب أن تكون صفراً'],[['`V_{−j}` contains functions constant on intervals of length `2^j`.','`V_{−j}` يحتوي دوالاً ثابتة على مجالات طولها `2^j`.']],[['The spaces `V_j` are disjoint','الفضاءات `V_j` منفصلة'],['Nothing','لا شيء']]),
  Q('For the Shannon MRA, `V_j` are the functions whose transform vanishes outside which band?','لتحليل شانون متعدد التمييز، `V_j` هي الدوال التي ينعدم تحويلها خارج أي نطاق؟','|ω| ≤ 2^jπ',[['Doubling the resolution doubles the bandwidth.','مضاعفة التمييز تضاعف عرض النطاق.']],['|ω| ≤ π','|ω| ≤ 2^j','|ω| ≤ jπ']),
]);

lesson('509',32,[
  ['Since `V_0 ⊂ V_1`, φ is a combination of the half-scale functions `#r{2}φ(2t − k)`. This is the two-scale (refinement) equation:','لأن `V_0 ⊂ V_1` تكون φ تركيباً من دوال نصف المقياس `#r{2}φ(2t − k)`. وهذه معادلة المقياسين (معادلة التنقيح):'],
  'φ(t) = #r{2} Σ_k h_k φ(2t − k),     h_k = ⟨φ, φ_{1,k}⟩,     Σ_k h_k = #r{2}',
  ['Integrating both sides gives `Σh_k = #r{2}` when `∫φ ≠ 0`. Haar has `h = (1/#r{2}, 1/#r{2})`. The hat function on [0, 2] satisfies `φ(t) = #f{1}{2}φ(2t) + φ(2t − 1) + #f{1}{2}φ(2t − 2)`, an MRA of piecewise linear functions (its shifts are not orthogonal, but form a stable basis).','وتكامل الطرفين يعطي `Σh_k = #r{2}` عندما `∫φ ≠ 0`. ولهار `h = (1/#r{2}, 1/#r{2})`. ودالة القبعة على [0, 2] تحقق `φ(t) = #f{1}{2}φ(2t) + φ(2t − 1) + #f{1}{2}φ(2t − 2)`، وهو تحليل للدوال الخطية قطعياً (إزاحاتها غير متعامدة لكنها أساس مستقر).'],
],[
  Q('Derive `Σh_k = #r{2}` from the two-scale equation.','استنتج `Σh_k = #r{2}` من معادلة المقياسين.','∫φ = #r{2}Σh_k·#f{1}{2}∫φ',['∫φ(2t − k)dt = #f{1}{2}∫φ'],['∫φ = Σh_k∫φ','∫φ = #r{2}Σh_k∫φ','∫φ = 2Σh_k∫φ']),
  Q('Give the coefficients `h_k` of the hat function.','أعط المعاملات `h_k` لدالة القبعة.','h = (#f{1}{2#r{2}}, #f{1}{#r{2}}, #f{1}{2#r{2}})',['#r{2}h = (#f{1}{2}, 1, #f{1}{2})'],['h = (#f{1}{2}, 1, #f{1}{2})','h = (1, 2, 1)','h = (#f{1}{#r{2}}, #f{1}{#r{2}})']),
  Q('Check `Σh_k = #r{2}` for the hat function.','تحقق من `Σh_k = #r{2}` لدالة القبعة.','#f{1}{2#r{2}} + #f{1}{#r{2}} + #f{1}{2#r{2}} = #f{2}{#r{2}} = #r{2}',[['Consistent with ∫φ = 1.','متسق مع ∫φ = 1.']],['= 2','= 1','= #f{1}{#r{2}}']),
  Q('Check the two-scale equation of the hat function at t = 1.','تحقق من معادلة المقياسين لدالة القبعة عند t = 1.','φ(1) = #f{1}{2}φ(2) + φ(1) + #f{1}{2}φ(0) = 0 + 1 + 0 = 1',['φ(0) = φ(2) = 0,   φ(1) = 1'],['φ(1) = #f{1}{2}','φ(1) = 2','φ(1) = 0']),
]);

lesson('509',33,[
  ['Orthonormality of `{φ(t − k)}` forces conditions on the filter. The Daubechies filter D4 (four coefficients) satisfies all of them:','تعامد `{φ(t − k)}` المعياري يفرض شروطاً على المرشح. ومرشح دوبيشي D4 (أربعة معاملات) يحققها كلها:'],
  'Σh_k = #r{2},     Σh_k^2 = 1,     Σ_k h_kh_{k+2m} = δ_{m0};     D4:   h = #f{(1 + #r{3},  3 + #r{3},  3 − #r{3},  1 − #r{3})}{4#r{2}}',
  ['Numerically `h = (0.48296, 0.83652, 0.22414, −0.12941)`. For four coefficients the shifted condition is the single equation `h_0h_2 + h_1h_3 = 0`. These quadratic conditions plus vanishing moments (Unit 6) determine D4 up to reflection.','وعددياً `h = (0.48296, 0.83652, 0.22414, −0.12941)`. ولأربعة معاملات يكون شرط الإزاحة معادلة واحدة `h_0h_2 + h_1h_3 = 0`. وهذه الشروط التربيعية مع العزوم المنعدمة (الوحدة 6) تحدد D4 حتى الانعكاس.'],
],[
  Q('Check `Σh_k^2 = 1` for Haar.','تحقق من `Σh_k^2 = 1` لهار.','#f{1}{2} + #f{1}{2} = 1',['h = (#f{1}{#r{2}}, #f{1}{#r{2}})'],['#f{1}{#r{2}} + #f{1}{#r{2}} = #r{2}','1 + 1 = 2','#f{1}{4} + #f{1}{4} = #f{1}{2}']),
  Q('Check `h_0h_2 + h_1h_3 = 0` for D4.','تحقق من `h_0h_2 + h_1h_3 = 0` لـ D4.','(1 + #r{3})(3 − #r{3}) + (3 + #r{3})(1 − #r{3}) = 2#r{3} − 2#r{3} = 0',['(1 + #r{3})(3 − #r{3}) = 2#r{3},   (3 + #r{3})(1 − #r{3}) = −2#r{3}'],['= 4','= 2#r{3}','= −1']),
  Q('Check `Σh_k = #r{2}` for D4.','تحقق من `Σh_k = #r{2}` لـ D4.','#f{8}{4#r{2}} = #r{2}',['(1 + #r{3}) + (3 + #r{3}) + (3 − #r{3}) + (1 − #r{3}) = 8'],['#f{8}{4} = 2','#f{4}{4#r{2}}','1']),
  Q('Why must the number of coefficients be even for an orthonormal compactly supported φ?','لماذا يجب أن يكون عدد المعاملات زوجياً لـ φ متعامدة معيارياً ذات حامل محدود؟',['If `h_0, …, h_{N−1}` with N − 1 even, the shift m = (N − 1)/2 gives `h_0h_{N−1} = 0`, a contradiction','إذا كانت `h_0, …, h_{N−1}` مع N − 1 زوجي فالإزاحة m = (N − 1)/2 تعطي `h_0h_{N−1} = 0` وهذا تناقض'],[['The end coefficients are non-zero by definition.','المعاملات الطرفية غير صفرية بالتعريف.']],[['By convention','اصطلاحاً'],['It need not be','لا يلزم']]),
]);

lesson('509',34,[
  ['The wavelet is built from the same half-scale functions, with the alternating flip of the filter:','تُبنى المويجة من دوال نصف المقياس نفسها مع القلب المتناوب للمرشح:'],
  'ψ(t) = #r{2}Σ_k g_kφ(2t − k),     g_k = (−1)^k h_{N−1−k}',
  ['For Haar, `g = (1/#r{2}, −1/#r{2})` gives `ψ = φ(2t) − φ(2t − 1)`. For D4, `g = (h_3, −h_2, h_1, −h_0) = (−0.12941, −0.22414, 0.83652, −0.48296)`. Then `Σg_k = 0`, the discrete form of `∫ψ = 0`.','ولهار `g = (1/#r{2}, −1/#r{2})` تعطي `ψ = φ(2t) − φ(2t − 1)`. ولـ D4 `g = (h_3, −h_2, h_1, −h_0) = (−0.12941, −0.22414, 0.83652, −0.48296)`. ثم `Σg_k = 0` وهو الصورة المتقطعة لـ `∫ψ = 0`.'],
],[
  Q('Compute g from `h = (1/#r{2}, 1/#r{2})`.','احسب g من `h = (1/#r{2}, 1/#r{2})`.','g = (#f{1}{#r{2}}, −#f{1}{#r{2}})',['g_0 = h_1,   g_1 = −h_0'],['g = (#f{1}{#r{2}}, #f{1}{#r{2}})','g = (−#f{1}{#r{2}}, −#f{1}{#r{2}})','g = (1, −1)']),
  Q('Check `Σg_k = 0` for D4.','تحقق من `Σg_k = 0` لـ D4.','h_3 − h_2 + h_1 − h_0 = #f{(1 − #r{3}) − (3 − #r{3}) + (3 + #r{3}) − (1 + #r{3})}{4#r{2}} = 0',[['Equivalent to `m_0(π) = 0`.','يكافئ `m_0(π) = 0`.']],['= #r{2}','= 1','= −#r{2}']),
  Q('Check `Σ_k k g_k = 0` for D4.','تحقق من `Σ_k k g_k = 0` لـ D4.','−h_2 + 2h_1 − 3h_0 = #f{−(3 − #r{3}) + 2(3 + #r{3}) − 3(1 + #r{3})}{4#r{2}} = 0',[['D4 has two vanishing moments.','لـ D4 عزمان منعدمان.']],['= 1','= #r{3}','= −#r{2}']),
  Q('Why does the flip make ψ orthogonal to φ?','لماذا يجعل القلب ψ عمودية على φ؟',['`Σ_k h_kg_{k+2m} = 0` for all m: the terms cancel in pairs','`Σ_k h_kg_{k+2m} = 0` لكل m: الحدود تُلغى أزواجاً'],[['For m = 0 and D4: `h_0h_3 − h_1h_2 + h_2h_1 − h_3h_0 = 0`.','عند m = 0 ولـ D4: `h_0h_3 − h_1h_2 + h_2h_1 − h_3h_0 = 0`.']],[['By symmetry of φ','بتماثل φ'],['It does not','لا يجعلها']]),
]);

lesson('509',35,[
  ['All orthogonality relations of the MRA are equations on the two filters:','كل علاقات التعامد في التحليل متعدد التمييز معادلات على المرشحين:'],
  'Σ_kh_kh_{k+2m} = δ_{m0},     Σ_kg_kg_{k+2m} = δ_{m0},     Σ_kh_kg_{k+2m} = 0',
  ['They say that the matrix built from the even shifts of h and g is orthogonal. This is exactly why one level of the discrete transform (Unit 5) is an orthogonal matrix and keeps energy.','وهي تقول إن المصفوفة المبنية من الإزاحات الزوجية لـ h و g متعامدة. وهذا بالضبط سبب أن مستوى واحداً من التحويل المتقطع (الوحدة 5) مصفوفة متعامدة تحفظ الطاقة.'],
],[
  Q('Check `Σg_k^2 = 1` for D4.','تحقق من `Σg_k^2 = 1` لـ D4.',['It equals `Σh_k^2 = 1`: the flip only permutes and changes signs','يساوي `Σh_k^2 = 1`: القلب يبدّل ويغير الإشارات فقط'],[['Squares ignore signs.','المربعات تتجاهل الإشارات.']],[['It equals 2','يساوي 2'],['It equals 0','يساوي 0']]),
  Q('Check `Σh_kg_k = 0` for Haar.','تحقق من `Σh_kg_k = 0` لهار.','#f{1}{2} − #f{1}{2} = 0',['h_0g_0 + h_1g_1 = #f{1}{#r{2}}·#f{1}{#r{2}} + #f{1}{#r{2}}·(−#f{1}{#r{2}})'],['1','#f{1}{2}','−1']),
  Q('For a filter of length 6, how many equations `Σh_kh_{k+2m} = δ_{m0}` are there with m ≥ 0?','لمرشح طوله 6 كم معادلة `Σh_kh_{k+2m} = δ_{m0}` مع m ≥ 0؟','3:   m = 0, 1, 2',[['m = 3 would need `h_6`.','m = 3 تحتاج `h_6`.']],['6','2','1']),
  Q('Why does an orthogonal transform keep energy?','لماذا يحفظ التحويل المتعامد الطاقة؟','‖Wx‖^2 = x^TW^TWx = ‖x‖^2',['W^TW = I'],['‖Wx‖ = 2‖x‖','‖Wx‖^2 = ‖x‖','W = W^T']),
]);

lesson('509',36,[
  ['On the Fourier side the filter becomes a trigonometric polynomial, the symbol, and the two-scale equation becomes a product:','في جانب فورييه يصبح المرشح كثيرة حدود مثلثية هي الرمز، وتصبح معادلة المقياسين ضرباً:'],
  'm_0(ξ) = #f{1}{#r{2}}Σ_kh_ke^{−ikξ},     φ̂(ξ) = m_0(#f{ξ}{2})φ̂(#f{ξ}{2}),     |m_0(ξ)|^2 + |m_0(ξ + π)|^2 = 1',
  ['`m_0(0) = 1` (from `Σh_k = #r{2}`) and `m_0(π) = 0`: a low-pass filter. Iterating the product gives `φ̂(ξ) = Π_{j≥1}m_0(ξ/2^j)φ̂(0)`. For Haar, `m_0 = (1 + e^{−iξ})/2` and `|m_0|^2 = cos^2(ξ/2)`.','و `m_0(0) = 1` (من `Σh_k = #r{2}`) و `m_0(π) = 0`: مرشح تمرير منخفض. وتكرار الضرب يعطي `φ̂(ξ) = Π_{j≥1}m_0(ξ/2^j)φ̂(0)`. ولهار `m_0 = (1 + e^{−iξ})/2` و `|m_0|^2 = cos^2(ξ/2)`.'],
],[
  Q('Compute `|m_0(ξ)|^2` for Haar.','احسب `|m_0(ξ)|^2` لهار.','cos^2#f{ξ}{2}',['|1 + e^{−iξ}|^2 = 2 + 2cos ξ = 4cos^2#f{ξ}{2}'],['sin^2#f{ξ}{2}','1','cos^2ξ']),
  Q('Check `|m_0(ξ)|^2 + |m_0(ξ + π)|^2 = 1` for Haar.','تحقق من `|m_0(ξ)|^2 + |m_0(ξ + π)|^2 = 1` لهار.','cos^2#f{ξ}{2} + sin^2#f{ξ}{2} = 1',['cos^2#f{ξ + π}{2} = sin^2#f{ξ}{2}'],['cos^2ξ + sin^2ξ = 1','2cos^2#f{ξ}{2} = 1','cos ξ + sin ξ = 1']),
  Q('Compute `m_0(π)` for Haar.','احسب `m_0(π)` لهار.','0',['#f{1 + e^{−iπ}}{2} = #f{1 − 1}{2}'],['1','#f{1}{2}','−1']),
  Q('Use the infinite product to find `φ̂` for Haar.','استخدم الضرب اللانهائي لإيجاد `φ̂` لهار.','e^{−iξ/2}#f{sin(ξ/2)}{ξ/2}',['Π_{j≥1}cos#f{ξ}{2^{j+1}}·e^{−iξ/2^{j+1}} = e^{−iξ/2}#f{sin(ξ/2)}{ξ/2}'],['#f{sin ξ}{ξ}','e^{−iξ}','1']),
]);

lesson('509',37,[
  ['ψ follows from φ through the high-pass symbol, defined from `m_0` by a shift of π and a phase:','تنتج ψ من φ عبر رمز التمرير العالي المعرّف من `m_0` بإزاحة π وطور:'],
  'ψ̂(ξ) = m_1(#f{ξ}{2})φ̂(#f{ξ}{2}),     |m_1(ξ)| = |m_0(ξ + π)|',
  ['`m_1(0) = 0` makes `ψ̂(0) = 0`, so ψ has mean zero, and `|m_1|` is large where `|m_0|` is small: the two filters split the frequencies between them. In coefficients this is the alternating flip `g_k = (−1)^kh_{N−1−k}` of Lesson 34.','و `m_1(0) = 0` يجعل `ψ̂(0) = 0` فيكون متوسط ψ صفراً، و `|m_1|` كبير حيث `|m_0|` صغير: المرشحان يقتسمان الترددات. وبالمعاملات هذا هو القلب المتناوب `g_k = (−1)^kh_{N−1−k}` في الدرس 34.'],
],[
  Q('Compute `|m_1(ξ)|^2` for Haar.','احسب `|m_1(ξ)|^2` لهار.','sin^2#f{ξ}{2}',['|m_0(ξ + π)|^2 = cos^2#f{ξ + π}{2}'],['cos^2#f{ξ}{2}','1','0']),
  Q('Why is ψ a high-pass function?','لماذا ψ دالة تمرير عالٍ؟',['`m_1(0) = 0` and `|m_1(π)| = 1`: low frequencies are removed','`m_1(0) = 0` و `|m_1(π)| = 1`: الترددات المنخفضة تُزال'],[['ψ̂ is small near ξ = 0.','`ψ̂` صغيرة قرب ξ = 0.']],[['Because ψ oscillates fast','لأن ψ تتذبذب بسرعة'],['It is low-pass','إنها تمرير منخفض']]),
  Q('Compute `|m_0(ξ)|^2 + |m_1(ξ)|^2` for Haar.','احسب `|m_0(ξ)|^2 + |m_1(ξ)|^2` لهار.','1',['cos^2#f{ξ}{2} + sin^2#f{ξ}{2}'],['2','0','cos ξ']),
  Q('Build g for the filter `h = (h_0, h_1, h_2, h_3, h_4, h_5)`.','ابنِ g للمرشح `h = (h_0, h_1, h_2, h_3, h_4, h_5)`.','g = (h_5, −h_4, h_3, −h_2, h_1, −h_0)',['g_k = (−1)^kh_{5−k}'],['g = (h_0, −h_1, h_2, −h_3, h_4, −h_5)','g = (−h_5, h_4, −h_3, h_2, −h_1, h_0)','g = (h_5, h_4, h_3, h_2, h_1, h_0)']),
]);

lesson('509',38,[
  ['The Shannon MRA is the opposite of Haar: perfect in frequency, poor in time. Its scaling function and filter are','تحليل شانون متعدد التمييز عكس هار: مثالي في التردد وضعيف في الزمن. ودالة التقييس والمرشح'],
  'φ(t) = #f{sin πt}{πt},     φ̂ = 1_{[−π, π]},     h_0 = #f{1}{#r{2}},   h_k = #f{#r{2} sin(πk/2)}{πk}',
  ['The wavelet has `ψ̂` equal to 1 (up to a phase) on `π ≤ |ξ| ≤ 2π`: an ideal band-pass filter. But φ and ψ decay only like `1/t`, so the filters are infinite and decay slowly: `h_1 = 0.4502`, `h_3 = −0.1501`, `h_5 = 0.0900`, and all even `h_k` (k ≠ 0) vanish.','والمويجة `ψ̂` لها تساوي 1 (حتى طور) على `π ≤ |ξ| ≤ 2π`: مرشح تمرير نطاقي مثالي. لكن φ و ψ تتناقصان مثل `1/t` فقط فتكون المرشحات لانهائية بطيئة التناقص: `h_1 = 0.4502` و `h_3 = −0.1501` و `h_5 = 0.0900`، وكل `h_k` الزوجية (k ≠ 0) منعدمة.'],
],[
  Q('Compute `h_1` for Shannon.','احسب `h_1` لشانون.','#f{#r{2}}{π} ≈ 0.4502',['#f{#r{2} sin(π/2)}{π}'],['#f{1}{π}','#f{1}{#r{2}}','0']),
  Q('Why is `h_2 = 0`?','لماذا `h_2 = 0`؟','sin π = 0',['h_2 = #f{#r{2} sin π}{2π}'],['sin π = 1','h_2 = h_1','π = 0']),
  Q('Where is `ψ̂` of the Shannon wavelet supported?','أين يتركز حامل `ψ̂` لمويجة شانون؟','π ≤ |ξ| ≤ 2π',[['`V_1 = V_0 ⊕ W_0` splits `|ξ| ≤ 2π` into `|ξ| ≤ π` and the rest.','`V_1 = V_0 ⊕ W_0` يقسم `|ξ| ≤ 2π` إلى `|ξ| ≤ π` والباقي.']],['|ξ| ≤ π','|ξ| ≥ 2π','0 ≤ ξ ≤ π']),
  Q('What is the drawback of the Shannon wavelet?','ما عيب مويجة شانون؟',['It decays only like `1/t`: poor time localization and infinite filters','تتناقص مثل `1/t` فقط: تموضع زمني ضعيف ومرشحات لانهائية'],[['The uncertainty principle at work.','مبدأ الارتياب يعمل.']],[['It is not orthogonal','غير متعامدة'],['It has jumps','فيها قفزات']]),
]);

lesson('509',39,[
  ['Meyer smoothed the Shannon construction: `φ̂` is smooth, equal to 1 for `|ξ| ≤ 2π/3`, decreasing smoothly to 0 at `|ξ| = 4π/3`, and with `|φ̂(ξ)|^2 + |φ̂(ξ − 2π)|^2 = 1` on the transition:','ماير نعّم بناء شانون: `φ̂` ملساء تساوي 1 عند `|ξ| ≤ 2π/3` وتتناقص بنعومة إلى 0 عند `|ξ| = 4π/3`، مع `|φ̂(ξ)|^2 + |φ̂(ξ − 2π)|^2 = 1` على منطقة الانتقال:'],
  'φ̂(ξ) = 1   (|ξ| ≤ #f{2π}{3}),     φ̂(ξ) = 0   (|ξ| ≥ #f{4π}{3}),     ψ̂(ξ) = 0   (|ξ| ∉ [#f{2π}{3}, #f{8π}{3}])',
  ['Because the transforms are smooth, φ and ψ decay faster than any power of t, and ψ is infinitely differentiable. The price: no compact support, so the filters are still infinite (but decay fast).','ولأن التحويلات ملساء تتناقص φ و ψ أسرع من أي قوة لـ t، و ψ قابلة للاشتقاق لانهائياً. والثمن: لا حامل محدود فتبقى المرشحات لانهائية (لكنها سريعة التناقص).'],
],[
  Q('What is `φ̂(0.5)` for the Meyer scaling function?','ما `φ̂(0.5)` لدالة التقييس لماير؟','1',['0.5 < #f{2π}{3} ≈ 2.09'],['0','#f{1}{2}','#f{1}{#r{2}}']),
  Q('Check `|φ̂(ξ)|^2 + |φ̂(ξ − 2π)|^2 = 1` at ξ = π.','تحقق من `|φ̂(ξ)|^2 + |φ̂(ξ − 2π)|^2 = 1` عند ξ = π.','2|φ̂(π)|^2 = 1   ⇒   |φ̂(π)| = #f{1}{#r{2}}',['|φ̂(−π)| = |φ̂(π)|'],['|φ̂(π)| = 1','|φ̂(π)| = 0','|φ̂(π)| = #f{1}{2}']),
  Q('Why does φ decay fast in time?','لماذا تتناقص φ بسرعة في الزمن؟',['`φ̂` is smooth: smoothness in frequency means decay in time','`φ̂` ملساء: الملاسة في التردد تعني التناقص في الزمن'],[['The dual of Lesson 5: smooth functions have fast-decaying Fourier coefficients.','عكس الدرس 5: الدوال الملساء لها معاملات فورييه سريعة التناقص.']],[['φ has compact support','لـ φ حامل محدود'],['It does not','لا تتناقص']]),
  Q('Compare Meyer and Shannon wavelets.','قارن مويجتي ماير وشانون.',['Both are band-limited; Meyer’s smooth cut-off gives fast decay in time, Shannon’s sharp cut-off only `1/t`','كلاهما محدود النطاق؛ القطع الأملس لماير يعطي تناقصاً سريعاً في الزمن، والقطع الحاد لشانون `1/t` فقط'],[['Neither has compact support.','لا حامل محدود لأي منهما.']],[['They are the same','متماثلتان'],['Shannon decays faster','شانون تتناقص أسرع']]),
]);

lesson('509',40,[
  ['φ is usually not known in closed form. The cascade algorithm computes it from the filter by iterating the two-scale equation, starting from the box:','دالة φ عادة لا تُعرف بصيغة مغلقة. وخوارزمية الشلال تحسبها من المرشح بتكرار معادلة المقياسين بدءاً من الصندوق:'],
  'φ^{(n+1)}(t) = #r{2}Σ_kh_kφ^{(n)}(2t − k),     φ^{(0)} = 1_{[0, 1)}',
  ['Exact values at the integers come from an eigenvector: for D4, `φ(1) = (1 + #r{3})/2 = 1.366`, `φ(2) = (1 − #r{3})/2 = −0.366`. Then the equation gives the half-integers, `φ(1/2) = (2 + #r{3})/4 = 0.933`, `φ(3/2) = 0`, `φ(5/2) = (2 − #r{3})/4 = 0.067`, and so on at every dyadic point.','والقيم المضبوطة عند الأعداد الصحيحة تأتي من متجه ذاتي: لـ D4 `φ(1) = (1 + #r{3})/2 = 1.366` و `φ(2) = (1 − #r{3})/2 = −0.366`. ثم تعطي المعادلة أنصاف الأعداد `φ(1/2) = (2 + #r{3})/4 = 0.933` و `φ(3/2) = 0` و `φ(5/2) = (2 − #r{3})/4 = 0.067`، وهكذا عند كل نقطة ثنائية.'],
],[
  Q('Write the equations for `φ(1)`, `φ(2)` of D4 (support [0, 3]).','اكتب معادلتي `φ(1)` و `φ(2)` لـ D4 (الحامل [0, 3]).','φ(1) = #r{2}(h_1φ(1) + h_0φ(2)),     φ(2) = #r{2}(h_3φ(1) + h_2φ(2))',['φ(n) = #r{2}Σ_kh_kφ(2n − k),   φ(0) = φ(3) = 0'],['φ(1) = h_0φ(1),   φ(2) = h_1φ(2)','φ(1) = #r{2}h_0,   φ(2) = #r{2}h_1','φ(1) + φ(2) = 0']),
  Q('Check `φ(1) + φ(2) = 1` for the D4 values.','تحقق من `φ(1) + φ(2) = 1` لقيم D4.','#f{1 + #r{3}}{2} + #f{1 − #r{3}}{2} = 1',[['The integer values of an MRA scaling function sum to 1.','قيم دالة التقييس عند الأعداد الصحيحة مجموعها 1.']],['= #r{3}','= 0','= 2']),
  Q('Compute `φ(1/2)` for D4.','احسب `φ(1/2)` لـ D4.','#r{2}h_0φ(1) = #f{2 + #r{3}}{4} ≈ 0.933',['#r{2}·#f{1 + #r{3}}{4#r{2}}·#f{1 + #r{3}}{2} = #f{(1 + #r{3})^2}{8}'],['#f{1 + #r{3}}{2}','0.5','#r{2}h_0']),
  Q('What does the cascade algorithm start from, and what does each step do?','من أين تبدأ خوارزمية الشلال وماذا تفعل كل خطوة؟',['From the box; each step applies the two-scale equation once, halving the resolution of the picture','من الصندوق؛ وكل خطوة تطبق معادلة المقياسين مرة فتنصّف تمييز الصورة'],[['It converges for D4 and most filters used in practice.','تتقارب لـ D4 ولمعظم المرشحات المستخدمة.']],[['From φ itself','من φ نفسها'],['From ψ','من ψ']]),
]);

/* ---- 509 · Unit 5 (lessons 41–50): the discrete wavelet transform ---- */
lesson('509',41,[
  ['Mallat’s algorithm computes the wavelet coefficients from samples without ever evaluating φ or ψ. One level filters the approximation `a_{j+1}` with h and g and keeps every second output:','خوارزمية مالات تحسب معاملات المويجات من العينات دون حساب φ أو ψ أبداً. والمستوى الواحد يرشّح التقريب `a_{j+1}` بـ h و g ويحتفظ بقيمة من كل قيمتين:'],
  'a_j[k] = Σ_n h_{n−2k} a_{j+1}[n],     d_j[k] = Σ_n g_{n−2k} a_{j+1}[n]',
  ['Repeating on `a_j` gives all levels. For Haar and `(2, 4, 6, 8)`: `a = (4.243, 9.899)`, `d = (−1.414, −1.414)`. A filter with p vanishing moments gives zero interior details for polynomials of degree below p: D4 kills constants and lines.','وتكرار ذلك على `a_j` يعطي كل المستويات. ولهار و `(2, 4, 6, 8)`: `a = (4.243, 9.899)` و `d = (−1.414, −1.414)`. والمرشح ذو p عزوم منعدمة يعطي تفاصيل داخلية صفرية لكثيرات الحدود ذات الدرجة الأقل من p: D4 يلغي الثوابت والخطوط.'],
],[
  Q('Compute one Haar level of `(2, 4, 6, 8)`.','احسب مستوى هار واحداً لـ `(2, 4, 6, 8)`.','a = (3#r{2}, 7#r{2}),   d = (−#r{2}, −#r{2})',['a = #f{2 + 4}{#r{2}}, #f{6 + 8}{#r{2}},   d = #f{2 − 4}{#r{2}}, #f{6 − 8}{#r{2}}'],['a = (3, 7),   d = (−1, −1)','a = (6, 14),   d = (−2, −2)','a = (3#r{2}, 7#r{2}),   d = (#r{2}, #r{2})']),
  Q('Apply one D4 level to the constant signal `(1, 1, …, 1)` (periodic).','طبّق مستوى D4 واحداً على الإشارة الثابتة `(1, 1, …, 1)` (دورية).','a_k = #r{2},   d_k = 0',['Σh_k = #r{2},   Σg_k = 0'],['a_k = 1,   d_k = 0','a_k = #r{2},   d_k = #r{2}','a_k = 2,   d_k = 1']),
  Q('For `x_n = n^2`, the interior D4 details are all equal. Compute their value `Σ_kk^2g_k`.','لـ `x_n = n^2` تكون تفاصيل D4 الداخلية متساوية. احسب قيمتها `Σ_kk^2g_k`.','−h_2 + 4h_1 − 9h_0 = −#r{3/2} ≈ −1.225',['g = (h_3, −h_2, h_1, −h_0)'],['0','1.225','−0.5']),
  Q('How many coefficients does a full Haar transform of a signal of length 8 have?','كم معاملاً للتحويل الكامل بهار لإشارة طولها 8؟','8:   1 + 1 + 2 + 4',[['As many numbers as samples.','عدد يساوي عدد العينات.']],['15','4','16']),
]);

lesson('509',42,[
  ['Reconstruction upsamples the coarse and detail coefficients and filters them with the same filters, then adds:','إعادة البناء تزيد عينات المعاملات الخشنة والتفصيلية وترشّحها بالمرشحات نفسها ثم تجمع:'],
  'a_{j+1}[n] = Σ_k h_{n−2k}a_j[k] + Σ_k g_{n−2k}d_j[k]',
  ['For an orthogonal wavelet the synthesis matrix is the transpose of the analysis matrix, so the same numbers h, g serve both directions. Exact reconstruction holds to rounding error, about `10^{−15}` in double precision.','وللمويجة المتعامدة تكون مصفوفة التركيب منقول مصفوفة التحليل، فتخدم الأعداد نفسها h و g الاتجاهين. وإعادة البناء مضبوطة حتى خطأ التقريب، نحو `10^{−15}` في الدقة المضاعفة.'],
],[
  Q('Reconstruct from the Haar coefficients `a = (3#r{2}, 7#r{2})`, `d = (−#r{2}, −#r{2})`.','أعد البناء من معاملات هار `a = (3#r{2}, 7#r{2})` و `d = (−#r{2}, −#r{2})`.','(2, 4, 6, 8)',['x_{2k} = #f{a_k + d_k}{#r{2}},   x_{2k+1} = #f{a_k − d_k}{#r{2}}'],['(4, 2, 8, 6)','(3, 3, 7, 7)','(1, 3, 5, 7)']),
  Q('Reconstruct from `a = (3#r{2}, 7#r{2})` with the details set to zero.','أعد البناء من `a = (3#r{2}, 7#r{2})` مع جعل التفاصيل صفراً.','(3, 3, 7, 7)',['#f{3#r{2}}{#r{2}} = 3,   #f{7#r{2}}{#r{2}} = 7'],['(2, 4, 6, 8)','(3#r{2}, 3#r{2}, 7#r{2}, 7#r{2})','(6, 6, 14, 14)']),
  Q('What is the squared error of the reconstruction without details?','ما مربع خطأ إعادة البناء دون التفاصيل؟','4',['‖d‖^2 = 2 + 2'],['2','0','8']),
  Q('Why can the same filters be used for synthesis?','لماذا يمكن استخدام المرشحات نفسها للتركيب؟',['The analysis matrix W is orthogonal, so its inverse is `W^T`','مصفوفة التحليل W متعامدة فمعكوسها `W^T`'],[['Biorthogonal wavelets (Unit 6) use different synthesis filters.','المويجات ثنائية التعامد (الوحدة 6) تستخدم مرشحات تركيب مختلفة.']],[['By symmetry of h','بتماثل h'],['They cannot','لا يمكن']]),
]);

lesson('509',43,[
  ['Two operations change the sampling rate. Downsampling keeps the even samples; upsampling inserts zeros:','عمليتان تغيّران معدل المعاينة. إنقاص العينات يحتفظ بالعينات الزوجية، وزيادتها تُدخل أصفاراً:'],
  '(↓2 x)[k] = x[2k],     (↑2 x)[2k] = x[k],   (↑2 x)[2k + 1] = 0',
  ['`↓2` after `↑2` is the identity, but `↑2` after `↓2` loses the odd samples. On the frequency side, downsampling folds the frequencies above π/2 onto the lower ones (aliasing); the filters of a wavelet bank are designed so that these aliases cancel in reconstruction.','و `↓2` بعد `↑2` هو المطابقة، لكن `↑2` بعد `↓2` يفقد العينات الفردية. وفي جانب التردد يطوي إنقاص العينات الترددات فوق π/2 على المنخفضة (تداخل)، ومرشحات بنك المويجات مصممة لتلغي هذه التداخلات في إعادة البناء.'],
],[
  Q('Compute `↓2 (1, 2, 3, 4, 5, 6)`.','احسب `↓2 (1, 2, 3, 4, 5, 6)`.','(1, 3, 5)',['x[0], x[2], x[4]'],['(2, 4, 6)','(1, 2, 3)','(1, 0, 3, 0, 5, 0)']),
  Q('Compute `↑2 (1, 2, 3)`.','احسب `↑2 (1, 2, 3)`.','(1, 0, 2, 0, 3, 0)',[['Zeros at the odd positions.','أصفار في المواضع الفردية.']],['(1, 1, 2, 2, 3, 3)','(0, 1, 0, 2, 0, 3)','(1, 3)']),
  Q('Compute `↑2 ↓2 (1, 2, 3, 4, 5, 6)`.','احسب `↑2 ↓2 (1, 2, 3, 4, 5, 6)`.','(1, 0, 3, 0, 5, 0)',['↓2:   (1, 3, 5)'],['(1, 2, 3, 4, 5, 6)','(1, 1, 3, 3, 5, 5)','(2, 0, 4, 0, 6, 0)']),
  Q('The signal `(1, −1, 1, −1, …)` has frequency π. What does `↓2` give?','الإشارة `(1, −1, 1, −1, …)` ترددها π. ماذا يعطي `↓2`؟',['`(1, 1, 1, …)`: frequency π appears as frequency 0 (aliasing)','`(1, 1, 1, …)`: التردد π يظهر تردداً 0 (تداخل)'],[['This is why a low-pass filter comes before downsampling.','ولهذا يأتي مرشح تمرير منخفض قبل إنقاص العينات.']],[['`(−1, −1, …)`','`(−1, −1, …)`'],['`(0, 0, …)`','`(0, 0, …)`']]),
]);

lesson('509',44,[
  ['A two-channel filter bank splits a signal into a low band and a high band and puts it back together. With z-transforms `H(z) = Σ_kh_kz^{−k}`:','بنك المرشحات ثنائي القناة يقسم الإشارة إلى نطاق منخفض ونطاق عالٍ ثم يعيد تجميعها. ومع تحويلات z `H(z) = Σ_kh_kz^{−k}`:'],
  'x  →  (H_0, H_1)  →  ↓2  →  ↑2  →  (F_0, F_1)  →  x̂',
  ['For Haar, `H_0(z) = (1 + z^{−1})/#r{2}` and `H_1(z) = (1 − z^{−1})/#r{2}`. On the unit circle `|H_0(e^{iω})| = #r{2}|cos(ω/2)|`: it passes low frequencies and blocks ω = π, while `|H_1|` does the opposite.','ولهار `H_0(z) = (1 + z^{−1})/#r{2}` و `H_1(z) = (1 − z^{−1})/#r{2}`. وعلى دائرة الوحدة `|H_0(e^{iω})| = #r{2}|cos(ω/2)|`: يمرّر الترددات المنخفضة ويحجب ω = π، و `|H_1|` يفعل العكس.'],
],[
  Q('Compute `|H_0(e^{iω})|` at ω = 0 and ω = π for Haar.','احسب `|H_0(e^{iω})|` عند ω = 0 و ω = π لهار.','#r{2},   0',['#f{|1 + e^{−iω}|}{#r{2}}'],['1,   1','0,   #r{2}','2,   0']),
  Q('Compute `|H_1(e^{iω})|^2` for Haar.','احسب `|H_1(e^{iω})|^2` لهار.','2sin^2#f{ω}{2}',['#f{|1 − e^{−iω}|^2}{2} = #f{2 − 2cos ω}{2}'],['2cos^2#f{ω}{2}','1','sin^2ω']),
  Q('Check `|H_0|^2 + |H_1|^2` for Haar.','تحقق من `|H_0|^2 + |H_1|^2` لهار.','2',['2cos^2#f{ω}{2} + 2sin^2#f{ω}{2}'],['1','0','4']),
  Q('Write `H_0(z)` for D4.','اكتب `H_0(z)` لـ D4.','h_0 + h_1z^{−1} + h_2z^{−2} + h_3z^{−3}',['H(z) = Σ_kh_kz^{−k}'],['h_0 + h_1z + h_2z^2 + h_3z^3','h_0z^{−3} + h_3','(1 + z^{−1})^4']),
]);

lesson('509',45,[
  ['The bank reconstructs perfectly (up to a delay l) when there is no distortion and the aliasing cancels:','يعيد البنك البناء تاماً (حتى تأخير l) عندما لا يوجد تشويه ويُلغى التداخل:'],
  'F_0(z)H_0(z) + F_1(z)H_1(z) = 2z^{−l},     F_0(z)H_0(−z) + F_1(z)H_1(−z) = 0',
  ['For Haar take `F_0 = (1 + z^{−1})/#r{2}` and `F_1 = −(1 − z^{−1})/#r{2}`: the first sum is `2z^{−1}` and the second is 0. Orthogonal wavelets satisfy both with `F_k(z) = z^{−(N−1)}H_k(z^{−1})`; biorthogonal ones relax the condition that F and H be related this way.','ولهار خذ `F_0 = (1 + z^{−1})/#r{2}` و `F_1 = −(1 − z^{−1})/#r{2}`: المجموع الأول `2z^{−1}` والثاني 0. والمويجات المتعامدة تحققهما مع `F_k(z) = z^{−(N−1)}H_k(z^{−1})`، والمويجات ثنائية التعامد ترخي شرط ارتباط F و H بهذه الطريقة.'],
],[
  Q('Compute `F_0H_0 + F_1H_1` for the Haar bank above.','احسب `F_0H_0 + F_1H_1` لبنك هار أعلاه.','2z^{−1}',['#f{(1 + z^{−1})^2 − (1 − z^{−1})^2}{2} = #f{4z^{−1}}{2}'],['2','0','1 + z^{−2}']),
  Q('Compute `F_0(z)H_0(−z) + F_1(z)H_1(−z)` for that bank.','احسب `F_0(z)H_0(−z) + F_1(z)H_1(−z)` لذلك البنك.','0',['#f{(1 + z^{−1})(1 − z^{−1}) − (1 − z^{−1})(1 + z^{−1})}{2}'],['2z^{−1}','1','z^{−2}']),
  Q('What delay does the Haar bank introduce?','أي تأخير يُدخله بنك هار؟','l = 1',['2z^{−l} = 2z^{−1}'],['l = 0','l = 2','l = 4']),
  Q('What would a non-zero alias term cause?','ماذا يسبب حد تداخل غير صفري؟',['A mirrored copy of the spectrum (frequency `π − ω`) in the output','نسخة معكوسة من الطيف (التردد `π − ω`) في الخرج'],[['It comes from `X(−z)`.','يأتي من `X(−z)`.']],[['A delay','تأخيراً'],['Nothing','لا شيء']]),
]);

lesson('509',46,[
  ['A finite signal needs values beyond its ends for filters longer than 2. Three common choices: periodic extension (wrap around), symmetric extension (mirror), and zero padding:','الإشارة المنتهية تحتاج قيماً بعد طرفيها للمرشحات الأطول من 2. وثلاثة خيارات شائعة: الامتداد الدوري (الالتفاف) والامتداد المتماثل (المرآة) والحشو بالأصفار:'],
  'x = (1, 2, 3, 4):     …3, 4 | 1, 2, 3, 4 | 1, 2…   ;   …2, 1 | 1, 2, 3, 4 | 4, 3…   ;   …0, 0 | 1, 2, 3, 4 | 0, 0…',
  ['Periodization keeps the number of coefficients (N/2 per level) but creates an artificial jump between the ends; the symmetric mode avoids the jump but returns `⌊(N + L − 1)/2⌋` coefficients for a filter of length L, for example 5 instead of 4 for N = 8 and D4. Boundary wavelets (Lesson 58) solve the problem properly.','والتدوير يحافظ على عدد المعاملات (N/2 لكل مستوى) لكنه يخلق قفزة اصطناعية بين الطرفين، والوضع المتماثل يتجنب القفزة لكنه يعيد `⌊(N + L − 1)/2⌋` معاملاً لمرشح طوله L، مثلاً 5 بدل 4 عند N = 8 و D4. ومويجات الحدود (الدرس 58) تحل المسألة حلاً صحيحاً.'],
],[
  Q('With periodization, why does the linear signal `0, 1, …, 7` give large D4 details at the ends?','مع التدوير لماذا تعطي الإشارة الخطية `0, 1, …, 7` تفاصيل D4 كبيرة عند الطرفين؟',['The wrap-around joins 7 to 0: an artificial jump','الالتفاف يصل 7 بـ 0: قفزة اصطناعية'],[['pywt gives `(−1.035, 0, 0, 3.864)`.','تعطي pywt القيم `(−1.035, 0, 0, 3.864)`.']],[['Rounding','التقريب'],['D4 does not kill lines','D4 لا يلغي الخطوط']]),
  Q('How many approximation coefficients does the symmetric mode give for N = 8, L = 4?','كم معامل تقريب يعطيه الوضع المتماثل عند N = 8 و L = 4؟','5',['⌊#f{8 + 4 − 1}{2}⌋'],['4','8','6']),
  Q('Extend `(1, 2, 3, 4)` symmetrically by two values on each side.','مدّد `(1, 2, 3, 4)` تماثلياً بقيمتين من كل جهة.','(2, 1, 1, 2, 3, 4, 4, 3)',[['Mirror including the end sample.','مرآة تشمل عينة الطرف.']],['(3, 4, 1, 2, 3, 4, 1, 2)','(0, 0, 1, 2, 3, 4, 0, 0)','(1, 1, 1, 2, 3, 4, 4, 4)']),
  Q('Which extension keeps the transform orthogonal with exactly N coefficients?','أي امتداد يحافظ على تعامد التحويل بعدد N من المعاملات بالضبط؟',['Periodization','التدوير'],[['The transform is then an orthogonal N × N matrix.','يكون التحويل حينها مصفوفة متعامدة N × N.']],[['Zero padding','الحشو بالأصفار'],['Symmetric extension','الامتداد المتماثل']]),
]);

lesson('509',47,[
  ['With periodization one level of the transform is an N × N orthogonal matrix: N/2 rows of h shifted by 2, then N/2 rows of g. For Haar and N = 4:','مع التدوير يكون مستوى واحد من التحويل مصفوفة متعامدة N × N: N/2 صفاً من h مزاحة بخطوتين ثم N/2 صفاً من g. ولهار و N = 4:'],
  'W_1 = #f{1}{#r{2}}#m{1, 1, 0, 0 ;; 0, 0, 1, 1 ;; 1, −1, 0, 0 ;; 0, 0, 1, −1},     W_1W_1^T = I',
  ['The full transform is a product of such matrices acting on the shrinking approximation part. For Haar and N = 4 the rows of the full matrix are `(1, 1, 1, 1)/2`, `(1, 1, −1, −1)/2`, `(1, −1, 0, 0)/#r{2}`, `(0, 0, 1, −1)/#r{2}`: the discrete Haar basis.','والتحويل الكامل ضرب مثل هذه المصفوفات تعمل على جزء التقريب المتقلص. ولهار و N = 4 تكون صفوف المصفوفة الكاملة `(1, 1, 1, 1)/2` و `(1, 1, −1, −1)/2` و `(1, −1, 0, 0)/#r{2}` و `(0, 0, 1, −1)/#r{2}`: أساس هار المتقطع.'],
],[
  Q('Compute `W_1(4, 6, 10, 12)^T`.','احسب `W_1(4, 6, 10, 12)^T`.','(5#r{2}, 11#r{2}, −#r{2}, −#r{2})',['#f{1}{#r{2}}(10, 22, −2, −2)'],['(10, 22, −2, −2)','(5, 11, −1, −1)','(5#r{2}, 11#r{2}, #r{2}, #r{2})']),
  Q('Check that rows 1 and 3 of `W_1` are orthogonal.','تحقق أن الصفين 1 و 3 من `W_1` متعامدان.','#f{1}{2}(1·1 + 1·(−1)) = 0',[['Same support, h against g.','الحامل نفسه، h مقابل g.']],['= 1','= #f{1}{2}','= −1']),
  Q('Apply the full 4-point Haar matrix to `(4, 6, 10, 12)`.','طبّق مصفوفة هار الكاملة ذات النقاط الأربع على `(4, 6, 10, 12)`.','(16, −6, −#r{2}, −#r{2})',['#f{32}{2},   #f{10 − 22}{2},   #f{−2}{#r{2}},   #f{−2}{#r{2}}'],['(8, −3, −1, −1)','(32, −12, −2, −2)','(16, 6, #r{2}, #r{2})']),
  Q('Why is a matrix not used to compute the transform in practice?','لماذا لا تُستخدم المصفوفة لحساب التحويل عملياً؟',['Multiplying by a dense N × N matrix costs `O(N^2)`; the filters cost `O(N)`','الضرب في مصفوفة كثيفة N × N يكلف `O(N^2)`، والمرشحات تكلف `O(N)`'],[['The matrix is sparse and structured.','المصفوفة متفرقة ومنظمة.']],[['It is not orthogonal','غير متعامدة'],['It is not invertible','غير قابلة للعكس']]),
]);

lesson('509',48,[
  ['The cost of the fast transform is linear in N. A level with n inputs makes n/2 low-pass and n/2 high-pass outputs, each needing L multiplications, so `nL` in total; the levels halve:','كلفة التحويل السريع خطية في N. والمستوى ذو n مدخلاً ينتج n/2 خرجاً منخفضاً و n/2 عالياً، يحتاج كل منها L ضرباً، فالمجموع `nL`، والمستويات تتنصف:'],
  'NL(1 + #f{1}{2} + #f{1}{4} + ⋯) < 2NL',
  ['For N = 1024 and D4 (L = 4) that is fewer than 8192 multiplications, against about `10^6` for a dense matrix and about 5120 complex multiplications for an FFT of the same size. Reconstruction costs the same.','ولـ N = 1024 و D4 (L = 4) يكون ذلك أقل من 8192 ضرباً، مقابل نحو `10^6` لمصفوفة كثيفة ونحو 5120 ضرباً مركباً لـ FFT بالحجم نفسه. وإعادة البناء تكلف القدر نفسه.'],
],[
  Q('Bound the number of multiplications for N = 4096 with D4.','قدّر حد عدد عمليات الضرب لـ N = 4096 مع D4.','< 32768',['2NL = 2·4096·4'],['< 4096','< 16777216','< 8192']),
  Q('How many multiplications does a dense 1024 × 1024 matrix–vector product need?','كم عملية ضرب يحتاجها ضرب مصفوفة كثيفة 1024 × 1024 في متجه؟','1048576',['1024^2'],['8192','10240','2048']),
  Q('How many levels can a signal of length 1024 have with Haar?','كم مستوى يمكن أن يكون لإشارة طولها 1024 مع هار؟','10',['1024 = 2^{10}'],['1024','512','5']),
  Q('With a filter of length 8 instead of 4, how does the cost change?','مع مرشح طوله 8 بدل 4 كيف تتغير الكلفة؟',['It doubles: the cost is proportional to L','تتضاعف: الكلفة تتناسب مع L'],['2NL'],[['It stays the same','تبقى نفسها'],['It is multiplied by 4','تُضرب في 4']]),
]);

lesson('509',49,[
  ['In Python the package PyWavelets (``import pywt``) provides ``dwt``, ``idwt``, ``wavedec`` and ``waverec``; in MATLAB the Wavelet Toolbox has ``dwt``, ``idwt``, ``wavedec`` and ``waverec`` with the same meaning. A multilevel transform returns the list `[a_J, d_J, …, d_1]`, coarsest first:','في بايثون توفر حزمة PyWavelets (``import pywt``) الدوال ``dwt`` و ``idwt`` و ``wavedec`` و ``waverec``، وفي MATLAB توفر Wavelet Toolbox الدوال ``dwt`` و ``idwt`` و ``wavedec`` و ``waverec`` بالمعنى نفسه. والتحويل متعدد المستويات يعيد القائمة `[a_J, d_J, …, d_1]` الأخشن أولاً:'],
  '$ c = pywt.wavedec(x, \'db2\', mode=\'periodization\', level=2)   # [a2, d2, d1]\nx = pywt.waverec(c, \'db2\', mode=\'periodization\')',
  ['In MATLAB, ``[c, l] = wavedec(x, 2, \'db2\')`` stacks the coefficients in c and their lengths in l. The boundary mode must be the same in both directions. ``pywt.wavelist()`` lists the families, and ``pywt.Wavelet(\'db2\').dec_lo`` gives the filter.','وفي MATLAB تجمع ``[c, l] = wavedec(x, 2, \'db2\')`` المعاملات في c وأطوالها في l. ويجب أن يكون وضع الحدود نفسه في الاتجاهين. و ``pywt.wavelist()`` تعرض العائلات، و ``pywt.Wavelet(\'db2\').dec_lo`` تعطي المرشح.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [4.243 9.899] [-1.414 -1.414]',[['One Haar level of `(2, 4, 6, 8)`.','مستوى هار واحد لـ `(2, 4, 6, 8)`.']],['$ [3. 7.] [-1. -1.]','$ [6 14] [-2 -2]','$ [4.243 9.899] [1.414 1.414]'],'import pywt\ncA, cD = pywt.dwt([2, 4, 6, 8], \'haar\')\nprint(cA.round(3), cD.round(3))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [4, 4, 8]',[['Periodization halves the length at each level: 16 → 8 → 4.','التدوير ينصّف الطول عند كل مستوى: 16 → 8 → 4.']],['$ [8, 4, 4]','$ [4, 8, 16]','$ [5, 5, 9]'],'import numpy as np\nimport pywt\nc = pywt.wavedec(np.arange(16.0), \'db2\', mode=\'periodization\', level=2)\nprint([len(a) for a in c])'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [16.    -6.    -1.414 -1.414] 296.0',[['The full Haar transform keeps the energy `4^2 + 6^2 + 10^2 + 12^2 = 296`.','تحويل هار الكامل يحفظ الطاقة `4^2 + 6^2 + 10^2 + 12^2 = 296`.']],['$ [8. -3. -1. -1.] 75.0','$ [16. -6. -1.414 -1.414] 148.0','$ [16. 6. 1.414 1.414] 296.0'],'import numpy as np\nimport pywt\nx = np.array([4.0, 6, 10, 12])\nc = np.concatenate(pywt.wavedec(x, \'haar\'))\nprint(c.round(3), (c**2).sum().round(6))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['Perfect reconstruction with the same mode.','إعادة بناء تامة بالوضع نفسه.']],['$ False','$ [1. 2. 3. 4. 5. 6. 7. 8.]','$ 8'],'import numpy as np\nimport pywt\nx = np.array([1.0, 2, 3, 4, 5, 6, 7, 8])\nc = pywt.wavedec(x, \'db2\', mode=\'periodization\')\nprint(np.allclose(pywt.waverec(c, \'db2\', mode=\'periodization\'), x))'),
]);

lesson('509',50,[
  ['Worked problems for Unit 5: filtering, downsampling, energy and cost.','مسائل محلولة للوحدة 5: الترشيح وإنقاص العينات والطاقة والكلفة.'],
  'a_j[k] = Σ_nh_{n−2k}a_{j+1}[n],     d_j[k] = Σ_ng_{n−2k}a_{j+1}[n],     ‖a_{j+1}‖^2 = ‖a_j‖^2 + ‖d_j‖^2',
],[
  Q('Compute the full Haar transform of `(1, 2, 3, 4, 5, 6, 7, 8)`: give `a_0` and `d_0`.','احسب تحويل هار الكامل لـ `(1, 2, 3, 4, 5, 6, 7, 8)`: أعط `a_0` و `d_0`.','a_0 = 9#r{2} ≈ 12.728,   d_0 = −4#r{2} ≈ −5.657',['a_0 = #f{36}{2#r{2}},   d_0 = #f{10 − 26}{2#r{2}}'],['a_0 = 4.5,   d_0 = −2','a_0 = 36,   d_0 = −16','a_0 = 9#r{2},   d_0 = 4#r{2}']),
  Q('For the same signal, what are the finest details `d_2`?','للإشارة نفسها ما التفاصيل الأدق `d_2`؟','(−#f{1}{#r{2}}, −#f{1}{#r{2}}, −#f{1}{#r{2}}, −#f{1}{#r{2}})',['#f{1 − 2}{#r{2}}, …'],['(−1, −1, −1, −1)','(0, 0, 0, 0)','(−2, −2)']),
  Q('Check the energy split for `(2, 4, 6, 8)`: `‖x‖^2 = ‖a‖^2 + ‖d‖^2`.','تحقق من تقسيم الطاقة لـ `(2, 4, 6, 8)`: `‖x‖^2 = ‖a‖^2 + ‖d‖^2`.','120 = (18 + 98) + (2 + 2)',['a = (3#r{2}, 7#r{2}),   d = (−#r{2}, −#r{2})'],['120 = 116','120 = 60 + 60','100 = 96 + 4']),
  Q('Why is D4 better than Haar for compressing a smooth signal?','لماذا يكون D4 أفضل من هار لضغط إشارة ملساء؟',['D4 has two vanishing moments, so details of locally linear parts vanish; Haar only kills constants','لـ D4 عزمان منعدمان فتنعدم تفاصيل الأجزاء الخطية محلياً، وهار يلغي الثوابت فقط'],[['More small coefficients can be dropped.','يمكن حذف معاملات صغيرة أكثر.']],[['D4 is shorter','D4 أقصر'],['D4 is symmetric','D4 متماثل']]),
]);

/* ---- 509 · Unit 6 (lessons 51–60): wavelet families ---- */
lesson('509',51,[
  ['ψ has p vanishing moments when it is orthogonal to all polynomials of degree below p. In terms of the high-pass filter, or of the symbol:','لـ ψ عدد p من العزوم المنعدمة إذا كانت عمودية على كل كثيرات الحدود ذات الدرجة الأقل من p. وبدلالة مرشح التمرير العالي أو الرمز:'],
  '∫t^mψ(t) dt = 0  (m < p)     ⇔     Σ_k k^mg_k = 0     ⇔     m_0(ξ) = (#f{1 + e^{−iξ}}{2})^pL(ξ)',
  ['Then the details of a locally polynomial signal of degree below p vanish, and the coefficients of a smooth function decay like `2^{−j(p+1/2)}`. Haar has p = 1, D4 has p = 2, and the Daubechies filter with 2p coefficients has p.','وحينها تنعدم تفاصيل الإشارة التي هي كثيرة حدود محلياً بدرجة أقل من p، وتتناقص معاملات الدالة الملساء مثل `2^{−j(p+1/2)}`. لهار p = 1 ولـ D4 p = 2، ولمرشح دوبيشي ذي 2p معاملاً p.'],
],[
  Q('How many vanishing moments does Haar have, and why not two?','كم عزماً منعدماً لهار، ولماذا ليس اثنين؟',['One: `∫ψ = 0` but `∫tψ = −1/4`','واحد: `∫ψ = 0` لكن `∫tψ = −1/4`'],[['Lesson 12.','الدرس 12.']],[['Two','اثنان'],['None','لا شيء']]),
  Q('Which polynomials give zero interior details with the 6-coefficient Daubechies filter D6?','أي كثيرات حدود تعطي تفاصيل داخلية صفرية مع مرشح دوبيشي D6 ذي المعاملات الستة؟',['All polynomials of degree at most 2','كل كثيرات الحدود ذات الدرجة 2 على الأكثر'],[['D6 has p = 3; pywt gives zero interior details for `n^2`.','لـ D6 p = 3، و pywt تعطي تفاصيل داخلية صفرية لـ `n^2`.']],[['Only constants','الثوابت فقط'],['Degree at most 3','الدرجة 3 على الأكثر']]),
  Q('How fast do the details of a smooth function decay with D4?','بأي سرعة تتناقص تفاصيل دالة ملساء مع D4؟','~ 2^{−5j/2}',['2^{−j(p+1/2)},   p = 2'],['~ 2^{−3j/2}','~ 2^{−2j}','~ 2^{−j/2}']),
  Q('Check `Σ_kg_k = 0` and `Σ_k kg_k ≠ 0` for Haar.','تحقق من `Σ_kg_k = 0` و `Σ_k kg_k ≠ 0` لهار.','#f{1}{#r{2}} − #f{1}{#r{2}} = 0,     0 − #f{1}{#r{2}} ≠ 0',['g = (#f{1}{#r{2}}, −#f{1}{#r{2}})'],['#r{2},   0','0,   0','1,   −1']),
]);

lesson('509',52,[
  ['Daubechies found the shortest orthogonal filters with p vanishing moments. Write `y = sin^2(ξ/2)`; then','وجدت دوبيشي أقصر المرشحات المتعامدة ذات p عزوم منعدمة. اكتب `y = sin^2(ξ/2)`، فيكون'],
  '|m_0(ξ)|^2 = (1 − y)^pP(y),     P(y) = Σ_{k=0}^{p−1} C(p − 1 + k, k)y^k,     (1 − y)^pP(y) + y^pP(1 − y) = 1',
  ['The last identity is the orthogonality condition of Lesson 36. Spectral factorisation then takes a “square root” of `|m_0|^2` to get `m_0` and the 2p filter coefficients. For p = 2, `P(y) = 1 + 2y`, which gives D4.','والمتطابقة الأخيرة شرط التعامد في الدرس 36. ثم يأخذ التحليل الطيفي «جذراً تربيعياً» لـ `|m_0|^2` لنحصل على `m_0` والمعاملات 2p للمرشح. وعند p = 2 تكون `P(y) = 1 + 2y` وهذا يعطي D4.'],
],[
  Q('Compute P(y) for p = 3.','احسب P(y) عند p = 3.','1 + 3y + 6y^2',['C(2, 0) + C(3, 1)y + C(4, 2)y^2'],['1 + 2y + 3y^2','1 + 3y + 3y^2','1 + 2y']),
  Q('Check the identity for p = 2 at y = 1/2.','تحقق من المتطابقة عند p = 2 و y = 1/2.','#f{1}{4}·2 + #f{1}{4}·2 = 1',['P(#f{1}{2}) = 1 + 1 = 2'],['#f{1}{4} + #f{1}{4} = #f{1}{2}','2 + 2 = 4','#f{1}{2}·2 = 1']),
  Q('Compute `|m_0(π/2)|^2` for D4.','احسب `|m_0(π/2)|^2` لـ D4.','#f{1}{2}',['y = #f{1}{2}:   (#f{1}{2})^2(1 + 2·#f{1}{2})'],['1','#f{1}{4}','0']),
  Q('Check the identity for p = 1 (Haar).','تحقق من المتطابقة عند p = 1 (هار).','(1 − y) + y = 1',['P ≡ 1'],['(1 − y)^2 + y^2 = 1','1 − y = 1','y = 1']),
]);

lesson('509',53,[
  ['The D4 filter in closed form, with its wavelet filter:','مرشح D4 بصيغة مغلقة مع مرشح مويجته:'],
  'h = #f{1}{4#r{2}}(1 + #r{3},  3 + #r{3},  3 − #r{3},  1 − #r{3}) ≈ (0.48296, 0.83652, 0.22414, −0.12941)',
  ['φ and ψ are supported on [0, 3], are continuous but not differentiable (Hölder exponent about 0.55), and are not symmetric. The values at the integers are `φ(1) = 1.366`, `φ(2) = −0.366` (Lesson 40). D4 is the default first choice when Haar is too crude.','و φ و ψ حاملهما [0, 3]، وهما متصلتان لكن غير قابلتين للاشتقاق (أس هولدر نحو 0.55)، وغير متماثلتين. والقيم عند الأعداد الصحيحة `φ(1) = 1.366` و `φ(2) = −0.366` (الدرس 40). و D4 الخيار الأول المعتاد عندما يكون هار خشناً جداً.'],
],[
  Q('Compute `h_0` of D4 to four digits.','احسب `h_0` لـ D4 بأربعة أرقام.','#f{1 + #r{3}}{4#r{2}} ≈ 0.4830',['#f{2.7321}{5.6569}'],['0.6830','0.3415','0.1294']),
  Q('What is the support of the D4 scaling function?','ما حامل دالة التقييس لـ D4؟','[0, 3]',['N − 1 = 4 − 1'],['[0, 4]','[0, 2]','[−1, 2]']),
  Q('Is D4 symmetric?','هل D4 متماثل؟',['No: `h_0 ≠ h_3`; no real orthogonal compactly supported wavelet except Haar is symmetric','لا: `h_0 ≠ h_3`؛ ولا مويجة حقيقية متعامدة ذات حامل محدود متماثلة غير هار'],[['Symmetry needs biorthogonal wavelets (Lesson 56).','التماثل يحتاج مويجات ثنائية التعامد (الدرس 56).']],[['Yes','نعم'],['Only φ is','φ فقط']]),
  Q('Check `Σh_k^2 = 1` for D4 in closed form.','تحقق من `Σh_k^2 = 1` لـ D4 بالصيغة المغلقة.','#f{(4 + 2#r{3}) + (12 + 6#r{3}) + (12 − 6#r{3}) + (4 − 2#r{3})}{32} = 1',['(1 + #r{3})^2 = 4 + 2#r{3},   (3 + #r{3})^2 = 12 + 6#r{3}'],['= #f{1}{2}','= 2','= #f{32}{16}']),
]);

lesson('509',54,[
  ['For the Daubechies family, more vanishing moments means longer support and more smoothness:','لعائلة دوبيشي يعني مزيد من العزوم المنعدمة حاملاً أطول وملاسة أكبر:'],
  'L = 2p,     [0, 2p − 1],     α_H ≈ 0.55,  1.09,  1.62   (p = 2, 3, 4)',
  ['For large p the smoothness grows only like 0.2p. Longer filters cost more and spread a singularity over more coefficients, so the choice of p is a trade-off: smooth signals favour large p, signals with many jumps favour small p.','ولـ p الكبيرة تنمو الملاسة مثل 0.2p فقط. والمرشحات الأطول تكلف أكثر وتنشر الانفراد على معاملات أكثر، فاختيار p موازنة: الإشارات الملساء تفضّل p كبيرة، والإشارات ذات القفزات الكثيرة تفضّل p صغيرة.'],
],[
  Q('Give the support length and the number of coefficients for p = 4 (db4).','أعط طول الحامل وعدد المعاملات عند p = 4 (db4).','[0, 7],   8',['2p − 1 = 7,   2p = 8'],['[0, 4],   4','[0, 8],   8','[0, 3],   4']),
  Q('Is the D6 scaling function (p = 3) differentiable?','هل دالة التقييس لـ D6 (p = 3) قابلة للاشتقاق؟',['Yes, once: its Hölder exponent is about 1.09 > 1','نعم مرة واحدة: أس هولدر لها نحو 1.09 > 1'],[['D4 (0.55) is only continuous.','D4 (0.55) متصلة فقط.']],[['No','لا'],['Twice','مرتين']]),
  Q('How many coefficients at one level does a jump affect with a filter of length L?','كم معاملاً في مستوى واحد تؤثر فيه قفزة مع مرشح طوله L؟','≈ #f{L}{2}',[['The filter moves by 2 between outputs.','المرشح يتحرك خطوتين بين المخرجات.']],['1','L','2L']),
  Q('About which p gives Hölder smoothness 2?','أي p تعطي ملاسة هولدر 2 تقريباً؟',['About p = 6: smoothness grows by only about 0.3 per extra vanishing moment after 1.62 at p = 4','نحو p = 6: الملاسة تزيد بنحو 0.3 فقط لكل عزم منعدم إضافي بعد 1.62 عند p = 4'],[['Smoothness grows slowly with p.','الملاسة تنمو ببطء مع p.']],[['p = 2','p = 2'],['p = 40','p = 40']]),
]);

lesson('509',55,[
  ['The factorisation of `|m_0|^2` has many square roots. Daubechies chose the minimum-phase one; other choices give other families. The parameters of symN (left) and coifN (right):','لتحليل `|m_0|^2` جذور تربيعية كثيرة. اختارت دوبيشي جذر الطور الأدنى، والاختيارات الأخرى تعطي عائلات أخرى. ووسائط symN (يساراً) و coifN (يميناً):'],
  'p = N,   L = 2N     ↔     p_{ψ} = 2N,   p_{φ} = 2N − 1,   L = 6N',
  ['Symlets are as close to symmetric as an orthogonal wavelet can be, which reduces phase distortion. Coiflets also give the scaling function vanishing moments, `∫t^mφ = 0` for 1 ≤ m < 2N, so that `⟨f, φ_{j,k}⟩ ≈ 2^{−j/2}f(k2^{−j})`: the coarse coefficients are almost samples.','والـ Symlets أقرب ما تكون إلى التماثل لمويجة متعامدة، وهذا يقلل تشويه الطور. والـ Coiflets تعطي دالة التقييس أيضاً عزوماً منعدمة `∫t^mφ = 0` لـ 1 ≤ m < 2N، فيكون `⟨f, φ_{j,k}⟩ ≈ 2^{−j/2}f(k2^{−j})`: المعاملات الخشنة تكاد تكون عينات.'],
],[
  Q('How many coefficients does coif1 have, and how many vanishing moments does its ψ have?','كم معاملاً لـ coif1، وكم عزماً منعدماً لـ ψ فيها؟','6,   2',['L = 6N,   p_{ψ} = 2N,   N = 1'],['2,   1','4,   2','6,   3']),
  Q('What does sym4 share with db4?','ماذا تشترك فيه sym4 مع db4؟',['The same length 8 and the same 4 vanishing moments','الطول نفسه 8 والعزوم المنعدمة الأربعة نفسها'],[['Only the phase (asymmetry) differs.','الطور (عدم التماثل) فقط يختلف.']],[['The same filter','المرشح نفسه'],['Nothing','لا شيء']]),
  Q('Why are the coarse coefficients of a coiflet almost samples?','لماذا تكاد المعاملات الخشنة لـ Coiflet تكون عينات؟',['φ has vanishing moments, so Taylor expansion of f around `k2^{−j}` leaves only `f(k2^{−j})`','لـ φ عزوم منعدمة فيُبقي نشر تايلور لـ f حول `k2^{−j}` الحد `f(k2^{−j})` فقط'],['⟨f, φ_{j,k}⟩ = 2^{−j/2}∫f(2^{−j}(u + k))φ(u)du'],[['φ is a delta','φ دالة دلتا'],['By chance','مصادفة']]),
  Q('Why does near symmetry matter in image processing?','لماذا يهم شبه التماثل في معالجة الصور؟',['Asymmetric filters shift features differently at different scales and create visible artefacts at edges','المرشحات غير المتماثلة تزيح الملامح بمقادير مختلفة عند مقاييس مختلفة وتولد تشوهات مرئية عند الحواف'],[['Linear phase keeps edges in place.','الطور الخطي يُبقي الحواف في مكانها.']],[['It reduces the cost','يقلل الكلفة'],['It does not matter','لا يهم']]),
]);

lesson('509',56,[
  ['Biorthogonal wavelets use two dual MRAs: analysis filters `h̃, g̃` and synthesis filters `h, g` with `⟨φ̃(t − k), φ(t − l)⟩ = δ_{kl}`. They allow symmetric, short, compactly supported filters. The LeGall 5/3 filters of lossless JPEG 2000:','المويجات ثنائية التعامد تستخدم تحليلين متعددي التمييز متقابلين: مرشحات تحليل `h̃, g̃` ومرشحات تركيب `h, g` مع `⟨φ̃(t − k), φ(t − l)⟩ = δ_{kl}`. وهي تسمح بمرشحات متماثلة قصيرة ذات حامل محدود. ومرشحا LeGall 5/3 في JPEG 2000 دون فقد:'],
  'h̃ = #r{2}(−#f{1}{8}, #f{1}{4}, #f{3}{4}, #f{1}{4}, −#f{1}{8}),     h = #f{1}{#r{2}}(#f{1}{2}, 1, #f{1}{2})',
  ['The synthesis scaling function is the hat function of Lesson 32. Perfect reconstruction holds, but the transform is not orthogonal, so Parseval is only approximate. The CDF 9/7 pair is used in lossy JPEG 2000.','ودالة التقييس للتركيب هي دالة القبعة في الدرس 32. وإعادة البناء التامة متحققة، لكن التحويل غير متعامد فتكون بارسيفال تقريبية فقط. والزوج CDF 9/7 يُستخدم في JPEG 2000 مع الفقد.'],
],[
  Q('Check `Σh̃_k = #r{2}` for the 5/3 analysis filter.','تحقق من `Σh̃_k = #r{2}` لمرشح التحليل 5/3.','#r{2}(−#f{1}{8} + #f{1}{4} + #f{3}{4} + #f{1}{4} − #f{1}{8}) = #r{2}',[['The bracket sums to 1.','القوس مجموعه 1.']],['= 1','= 2#r{2}','= #f{#r{2}}{2}']),
  Q('Is the 5/3 analysis filter symmetric?','هل مرشح التحليل 5/3 متماثل؟',['Yes: `h̃_k = h̃_{4−k}`','نعم: `h̃_k = h̃_{4−k}`'],[['Symmetric filters give linear phase.','المرشحات المتماثلة تعطي طوراً خطياً.']],[['No','لا'],['Only h is','h فقط']]),
  Q('Which scaling function does the synthesis filter `(1/2, 1, 1/2)/#r{2}` generate?','أي دالة تقييس يولدها مرشح التركيب `(1/2, 1, 1/2)/#r{2}`؟',['The hat function on [0, 2]','دالة القبعة على [0, 2]'],[['Lesson 32.','الدرس 32.']],[['The box','الصندوق'],['D4','D4']]),
  Q('Why is JPEG 2000 lossless with the 5/3 filters?','لماذا يكون JPEG 2000 دون فقد مع مرشحي 5/3؟',['Their lifting form (Lesson 70) maps integers to integers exactly','صيغة الرفع لهما (الدرس 70) تحوّل الأعداد الصحيحة إلى أعداد صحيحة بالضبط'],[['The coefficients are dyadic rationals.','المعاملات كسور ثنائية.']],[['They are orthogonal','متعامدان'],['They are long','طويلان']]),
]);

lesson('509',57,[
  ['B-splines give explicit wavelets. The B-spline of order m is the m-fold convolution of the box, a piecewise polynomial of degree m − 1 on [0, m]:','الشرائح B تعطي مويجات صريحة. والشريحة B من الرتبة m هي التفاف الصندوق m مرة، وهي كثيرة حدود قطعية من الدرجة m − 1 على [0, m]:'],
  'N_m(t) = Σ_k 2^{1−m}C(m, k)N_m(2t − k),     N̂_m(ξ) = (#f{1 − e^{−iξ}}{iξ})^m',
  ['m = 1 is the box, m = 2 the hat `(1/2, 1, 1/2)`, m = 4 the cubic spline `(1, 4, 6, 4, 1)/8`. Spline wavelets are smooth and have explicit formulas; orthogonal versions (Battle–Lemarié) have infinite support with exponential decay, semi-orthogonal and biorthogonal versions have compact support.','و m = 1 الصندوق و m = 2 القبعة `(1/2, 1, 1/2)` و m = 4 الشريحة التكعيبية `(1, 4, 6, 4, 1)/8`. ومويجات الشرائح ملساء ولها صيغ صريحة، والنسخ المتعامدة (باتل–لوماريه) حاملها لانهائي مع تناقص أسي، والنسخ شبه المتعامدة وثنائية التعامد حاملها محدود.'],
],[
  Q('Give the two-scale coefficients of the quadratic B-spline (m = 3).','أعط معاملات المقياسين للشريحة B التربيعية (m = 3).','#f{1}{4}(1, 3, 3, 1)',['2^{−2}C(3, k)'],['#f{1}{8}(1, 3, 3, 1)','#f{1}{2}(1, 2, 1)','(1, 3, 3, 1)']),
  Q('What is the support of `N_4`?','ما حامل `N_4`؟','[0, 4]',[['Convolving m boxes of length 1.','التفاف m صندوقاً طول كل منها 1.']],['[0, 3]','[−2, 2]','[0, 8]']),
  Q('Compute `N_2(1/2)` from the hat function.','احسب `N_2(1/2)` من دالة القبعة.','#f{1}{2}',['N_2(t) = t   (0 ≤ t ≤ 1)'],['1','#f{1}{4}','0']),
  Q('What is the drawback of the orthogonal spline wavelets?','ما عيب مويجات الشرائح المتعامدة؟',['Infinite support (with exponential decay), so the filters must be truncated','حامل لانهائي (مع تناقص أسي) فيجب قطع المرشحات'],[['Orthogonalising the shifts of `N_m` spreads them.','تعميد إزاحات `N_m` ينشرها.']],[['They are not smooth','ليست ملساء'],['They have no vanishing moments','لا عزوم منعدمة لها']]),
]);

lesson('509',58,[
  ['On a bounded interval the wavelets that cross the ends must be replaced. The Cohen–Daubechies–Vial construction keeps the interior Daubechies functions and adds p boundary functions at each end, built so that polynomials of degree below p are still reproduced:','على مجال محدود يجب استبدال المويجات التي تعبر الطرفين. وبناء كوهين–دوبيشي–فيال يُبقي دوال دوبيشي الداخلية ويضيف p دالة حدية عند كل طرف، مبنية بحيث تبقى كثيرات الحدود ذات الدرجة الأقل من p مُعاد إنتاجها:'],
  'dim V_j[0, 1] = 2^j = (2^j − 2p) + p + p',
  ['This removes the artificial details of periodization and symmetric extension (Lesson 46) and keeps the full approximation order up to the boundary. For Haar (p = 1) nothing changes, since Haar functions never cross dyadic interval ends.','وهذا يزيل التفاصيل الاصطناعية للتدوير والامتداد المتماثل (الدرس 46) ويحافظ على رتبة التقريب الكاملة حتى الحد. ولهار (p = 1) لا يتغير شيء لأن دوال هار لا تعبر أطراف المجالات الثنائية أبداً.'],
],[
  Q('How many interior functions does `V_5[0, 1]` have with p = 2?','كم دالة داخلية لـ `V_5[0, 1]` مع p = 2؟','28',['2^5 − 2·2'],['32','30','24']),
  Q('Which level j is the coarsest possible with p = 3?','ما أخشن مستوى j ممكن مع p = 3؟',['j = 3: `2^j ≥ 2p = 6` is needed','j = 3: يلزم `2^j ≥ 2p = 6`'],[['Otherwise the two boundaries overlap.','وإلا تداخل الحدان.']],[['j = 0','j = 0'],['j = 1','j = 1']]),
  Q('Why does periodization spoil the approximation of `f = t` near the ends?','لماذا يفسد التدوير تقريب `f = t` قرب الطرفين؟',['The periodic extension of t jumps from 1 to 0','الامتداد الدوري لـ t يقفز من 1 إلى 0'],[['Large details appear at the boundary.','تظهر تفاصيل كبيرة عند الحد.']],[['It does not','لا يفسده'],['Because t is odd','لأن t فردية']]),
  Q('Why does Haar need no boundary functions on [0, 1]?','لماذا لا تحتاج هار دوالاً حدية على [0, 1]؟',['Its supports are dyadic intervals inside [0, 1]','حواملها مجالات ثنائية داخل [0, 1]'],[['p = 1 and support length 1.','p = 1 وطول الحامل 1.']],[['It does need them','بل تحتاجها'],['Because it is symmetric','لأنها متماثلة']]),
]);

lesson('509',59,[
  ['Multiwavelets use several scaling functions `Φ = (φ_1, …, φ_r)^T` with a matrix two-scale equation `Φ(t) = #r{2}Σ_kH_kΦ(2t − k)`. They can be orthogonal, symmetric and short at the same time, which single wavelets cannot.','المويجات المتعددة تستخدم عدة دوال تقييس `Φ = (φ_1, …, φ_r)^T` بمعادلة مقياسين مصفوفية `Φ(t) = #r{2}Σ_kH_kΦ(2t − k)`. ويمكن أن تكون متعامدة ومتماثلة وقصيرة معاً، وهذا ما لا تستطيعه المويجات المفردة.'],
  'φ_i(t) = #r{2i + 1}P_i(2t − 1),     t ∈ [0, 1),     i = 0, 1, …, r − 1',
  ['Alpert’s multiwavelets use the Legendre polynomials on each dyadic interval: piecewise polynomials of degree below r, with r vanishing moments. They are the basis of the Legendre wavelets of Unit 9 and of fast methods for integral equations.','ومويجات ألبرت المتعددة تستخدم كثيرات ليجندر على كل مجال ثنائي: كثيرات حدود قطعية بدرجة أقل من r مع r عزوم منعدمة. وهي أساس مويجات ليجندر في الوحدة 9 وطرق سريعة للمعادلات التكاملية.'],
],[
  Q('Check `‖φ_1‖ = 1` for `φ_1 = #r{3}(2t − 1)` on [0, 1).','تحقق من `‖φ_1‖ = 1` لـ `φ_1 = #r{3}(2t − 1)` على [0, 1).','3∫_0^1(2t − 1)^2dt = 3·#f{1}{3} = 1',[['Lesson 63 of course 508.','الدرس 63 من المقرر 508.']],['3·#f{1}{2} = #f{3}{2}','#f{1}{3}','2']),
  Q('With r = 3, which polynomials are reproduced exactly on each dyadic interval?','مع r = 3 أي كثيرات حدود يُعاد إنتاجها بالضبط على كل مجال ثنائي؟',['All polynomials of degree at most 2','كل كثيرات الحدود ذات الدرجة 2 على الأكثر'],[['`φ_0, φ_1, φ_2` span them.','`φ_0, φ_1, φ_2` تولدها.']],[['Degree at most 3','الدرجة 3 على الأكثر'],['Only constants','الثوابت فقط']]),
  Q('How many functions per dyadic interval does an Alpert basis with r = 3 have at one level?','كم دالة لكل مجال ثنائي في أساس ألبرت مع r = 3 عند مستوى واحد؟','3',[['One for each degree 0, 1, 2.','واحدة لكل درجة 0 و 1 و 2.']],['1','6','2^3']),
  Q('What can multiwavelets combine that single compactly supported wavelets cannot?','ماذا تستطيع المويجات المتعددة أن تجمع مما لا تستطيعه المويجات المفردة ذات الحامل المحدود؟',['Orthogonality, symmetry and short support together','التعامد والتماثل والحامل القصير معاً'],[['Except Haar, a single one cannot (Lesson 53).','باستثناء هار لا تستطيع المويجة المفردة ذلك (الدرس 53).']],[['Infinite smoothness','ملاسة لانهائية'],['Nothing','لا شيء']]),
]);

lesson('509',60,[
  ['There is no best wavelet, only a best wavelet for a task. Three numbers drive the choice: the filter length, the decay of the details of smooth parts, and the cost:','لا توجد مويجة أفضل بإطلاق، بل أفضل مويجة لمهمة. وثلاثة أعداد تقود الاختيار: طول المرشح وتناقص تفاصيل الأجزاء الملساء والكلفة:'],
  'L = 2p,     |d_{j,k}| ~ 2^{−j(p+1/2)},     2NL',
  ['Haar suits piecewise constant signals and fast prototypes; db and sym wavelets with a few vanishing moments suit smooth signals and compression; biorthogonal symmetric filters suit images (JPEG 2000); complex Morlet wavelets suit continuous time–frequency analysis; Legendre or Chebyshev wavelets suit solving equations (Unit 9).','وهار يناسب الإشارات الثابتة قطعياً والنماذج السريعة، ومويجات db و sym بعزوم منعدمة قليلة تناسب الإشارات الملساء والضغط، والمرشحات ثنائية التعامد المتماثلة تناسب الصور (JPEG 2000)، ومويجات مورليه المركبة تناسب تحليل الزمن–التردد المتصل، ومويجات ليجندر أو تشيبيشيف تناسب حل المعادلات (الوحدة 9).'],
],[
  Q('Which wavelet would you choose to locate the switching times of a piecewise constant signal?','أي مويجة تختار لتحديد أزمنة تبدل إشارة ثابتة قطعياً؟',['Haar','هار'],[['One non-zero detail per jump per level, at the right place.','تفصيل غير صفري واحد لكل قفزة في كل مستوى في المكان الصحيح.']],[['Morlet','مورليه'],['db8','db8']]),
  Q('Which wavelet suits the analysis of a bird song in time and frequency?','أي مويجة تناسب تحليل تغريد طائر في الزمن والتردد؟',['A complex Morlet wavelet with the continuous transform','مويجة مورليه مركبة مع التحويل المتصل'],[['Its modulus gives a smooth scalogram.','مقياسها يعطي مخطط مقياس أملس.']],[['Haar','هار'],['bior2.2','bior2.2']]),
  Q('Why are symmetric biorthogonal filters used for images?','لماذا تُستخدم المرشحات ثنائية التعامد المتماثلة للصور؟',['Linear phase avoids shifts and artefacts at edges, and short filters keep edges sharp','الطور الخطي يتجنب الإزاحات والتشوهات عند الحواف، والمرشحات القصيرة تُبقي الحواف حادة'],[['JPEG 2000 uses 5/3 and 9/7.','يستخدم JPEG 2000 المرشحين 5/3 و 9/7.']],[['They are orthogonal','متعامدة'],['They are infinite','لانهائية']]),
  Q('For compressing a smooth temperature record, is db1 or db4 better?','لضغط سجل حرارة أملس أيهما أفضل db1 أم db4؟',['db4: four vanishing moments give many tiny details','db4: العزوم المنعدمة الأربعة تعطي تفاصيل صغيرة جداً كثيرة'],[['db1 is Haar.','db1 هو هار.']],[['db1','db1'],['They are equal','متساويان']]),
]);

export const MS509 = true;
