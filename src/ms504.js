/* MATH/COMP 504 — the course's road map (10 units × 10 lessons) and its lessons. The authoring markup is described in mscore.js. */
import { course, lesson, Q } from './mscore.js';

/* ---------------- 504: Mathematica ---------------- */
course('504','COMP 504','Mathematica','ماثيماتيكا (504 حسب)',`
# Unit 1 · First steps | الوحدة 1 · الخطوات الأولى
The notebook and your first calculations | الدفتر وحساباتك الأولى
Exact and approximate numbers | الأعداد المضبوطة والتقريبية
Variables and assignment: =, := and == | المتغيرات وأنواع الإسناد الثلاثة
Built-in functions and the syntax rules | الدوال الجاهزة وقواعد الكتابة
Defining your own functions | تعريف دوالك الخاصة
Getting help: ?, the documentation and error messages | المساعدة: ? والتوثيق ورسائل الخطأ
Algebra: Expand, Factor, Simplify | الجبر: Expand و Factor و Simplify
Solving equations: Solve, NSolve, FindRoot | حل المعادلات: Solve و NSolve و FindRoot
Replacement rules: /. and -> | قواعد الاستبدال: /. و ->
Organizing a notebook: cells, sections, comments | تنظيم الدفتر: الخلايا والأقسام والتعليقات
# Unit 2 · Lists | الوحدة 2 · القوائم
Lists and Table | القوائم و Table
Parts of a list: [[ ]], Span, Take, Drop | أجزاء القائمة: [[ ]] و Span و Take و Drop
Range, Length, Total and friends | Range و Length و Total وأخواتها
Map and Apply: /@ and @@ | Map و Apply: /@ و @@
Pure functions: # and & | الدوال الصرفة: # و &
Select, Cases and Position | Select و Cases و Position
Sorting, joining and transposing | الترتيب والضم والتبديل
Nested lists and matrices | القوائم المتداخلة والمصفوفات
Sum and Product | Sum و Product
Fold, Nest, NestList and FixedPoint | Fold و Nest و NestList و FixedPoint
# Unit 3 · Calculus | الوحدة 3 · التفاضل والتكامل
Limits | النهايات
Derivatives: D and ' | المشتقات: D و '
Integrals: Integrate | التكاملات: Integrate
Numerical integration: NIntegrate | التكامل العددي: NIntegrate
Series and power expansions | Series ومفكوكات القوى
Assumptions and Refine | الافتراضات و Refine
Special functions: Gamma, Beta, MittagLefflerE | الدوال الخاصة: Gamma و Beta و MittagLefflerE
Orthogonal polynomials: LegendreP, ChebyshevT, JacobiP | كثيرات الحدود المتعامدة: LegendreP و ChebyshevT و JacobiP
Checking orthogonality symbolically | التحقق من التعامد رمزياً
Verifying an identity: a workflow | التحقق من متطابقة: خطة عمل
# Unit 4 · Graphics | الوحدة 4 · الرسم
Plot and its options | Plot وخياراتها
Several curves, legends and styles | عدة منحنيات والمفاتيح والأنماط
ListPlot and ListLinePlot | ListPlot و ListLinePlot
Logarithmic plots for errors: ListLogPlot | الرسم اللوغاريتمي للأخطاء: ListLogPlot
Plot3D, ContourPlot and DensityPlot | Plot3D و ContourPlot و DensityPlot
Parametric plots | الرسوم الوسيطية
Combining graphics: Show, GraphicsRow, Grid | دمج الرسوم: Show و GraphicsRow و Grid
Manipulate: interactive figures | Manipulate: الأشكال التفاعلية
Tables of results: Grid and TableForm | جداول النتائج: Grid و TableForm
Exporting figures and data | تصدير الأشكال والبيانات
# Unit 5 · Programming | الوحدة 5 · البرمجة
Patterns: _, __, conditions | الأنماط: _ و __ والشروط
Functions with several definitions | الدوال متعددة التعريفات
If, Which, Switch and Piecewise | If و Which و Switch و Piecewise
Loops: Do, For, While, and why to avoid them | الحلقات: Do و For و While ولماذا نتجنبها
Module, Block and With | Module و Block و With
Memoization: f[n_] := f[n] = … | حفظ النتائج: f[n_] := f[n] = …
Recursion: Bonnet's recurrence for P_n | التكرار الذاتي: علاقة بونيه لـ P_n
Strings and formatted output | النصوص والإخراج المنسق
Debugging: Print, Echo, Trace | تتبع الأخطاء: Print و Echo و Trace
Writing clean code: naming and structure | كتابة كود نظيف: التسمية والبنية
# Unit 6 · Linear algebra | الوحدة 6 · الجبر الخطي
Vectors and matrices | المتجهات والمصفوفات
Dot, Transpose, Inverse, Det | Dot و Transpose و Inverse و Det
LinearSolve | حل الأنظمة الخطية بالأمر LinearSolve
Eigenvalues and Eigenvectors | Eigenvalues و Eigenvectors
Building a matrix from a formula: Table and Array | بناء مصفوفة من قانون: Table و Array
SparseArray and banded matrices | SparseArray والمصفوفات الشريطية
KroneckerProduct and vectorizing a matrix unknown | KroneckerProduct وتحويل مجهول مصفوفي إلى متجه
Norms and condition numbers | المعايير وأعداد الشرط
Exact, machine and arbitrary precision in linear algebra | الدقة المضبوطة والآلية والاختيارية في الجبر الخطي
CoefficientArrays: from equations to a matrix | CoefficientArrays: من المعادلات إلى مصفوفة
# Unit 7 · Differential equations | الوحدة 7 · المعادلات التفاضلية
DSolve for ordinary differential equations | DSolve للمعادلات التفاضلية العادية
NDSolve and InterpolatingFunction | NDSolve و InterpolatingFunction
Boundary-value problems | مسائل القيم الحدية
Systems of equations | نظم المعادلات
Partial differential equations with NDSolve | المعادلات الجزئية بـ NDSolve
The Laplace transform | تحويل لابلاس
CaputoD and FractionalD | CaputoD و FractionalD
Checking a manufactured pair (u, f) | التحقق من زوج مصنَّع (u, f)
Measuring the error: L∞ on a grid | قياس الخطأ: L∞ على شبكة
Convergence tables and plots | جداول التقارب ورسومه
# Unit 8 · Numerical methods | الوحدة 8 · الطرق العددية
Root finding with FindRoot | إيجاد الجذور بـ FindRoot
Interpolation | الاستكمال
Gauss–Legendre nodes and weights | عقد جاوس–ليجندر وأوزانها
The Golub–Welsch method | طريقة Golub–Welsch
Differentiation matrices | مصفوفات التفاضل
Finite differences for a boundary-value problem | الفروق المحدودة لمسألة قيم حدية
Collocation for a boundary-value problem | طريقة التجميع لمسألة قيم حدية
Galerkin with φ_k = P_k − P_{k+2} | جاليركن بالأساس φ_k = P_k − P_{k+2}
The Tau method | طريقة تاو
Precision control: WorkingPrecision and SetPrecision | التحكم في الدقة: WorkingPrecision و SetPrecision
# Unit 9 · The mapped Legendre code | الوحدة 9 · كود ليجندر المحوَّل
The pipeline of one notebook | مراحل الدفتر الواحد
The name key: n1, n2, n3, T1, T2, al1, bt1 | مفتاح الأسماء: n1 و n2 و n3 و T1 و T2 و al1 و bt1
The basis functions and their coefficients E_{n,r} | الدوال الأساسية ومعاملاتها E_{n,r}
Coding Theorem 3.1: the matrix D^{(2)} | برمجة النظرية 3.1: المصفوفة D^{(2)}
Coding Theorem 3.2: the matrix χ_{−μ}^λ | برمجة النظرية 3.2: المصفوفة χ_{−μ}^λ
Projecting the function h | إسقاط الدالة h
Collocation points and assembling the residual | نقاط التجميع وتركيب الباقي
Replacing FindRoot by one linear solve | استبدال FindRoot بحل خطي واحد
Where the time goes: Timing and AbsoluteTiming | أين يذهب الوقت: Timing و AbsoluteTiming
Dead code and defects: reading someone else's notebook | الكود الميت والعيوب: قراءة دفتر كتبه غيرك
# Unit 10 · Mastery | الوحدة 10 · الاحتراف
Vectorization and Listable functions | المعالجة المتجهية والدوال Listable
Compile and packed arrays | Compile والمصفوفات المحزومة
Parallel computation | الحساب المتوازي
Writing a package | كتابة حزمة
Unit tests: VerificationTest | اختبارات الوحدة: VerificationTest
One solver for many examples: generalizing notebooks | محرك واحد لأمثلة كثيرة: تعميم الدفاتر
Automating the function h for any problem | أتمتة الدالة h لأي مسألة
Exporting results to LaTeX and to other programs | تصدير النتائج إلى LaTeX وإلى برامج أخرى
Reproducing the tables of a research paper | إعادة إنتاج جداول بحث علمي
Capstone project | مشروع ختامي
`);

lesson('504',1,[
  ['Mathematica works in a notebook made of cells. You type an input, press Shift+Enter, and the result appears below it, labelled ``In[1]`` and ``Out[1]``.',
   'يعمل Mathematica في دفتر مكوّن من خلايا. تكتب المدخل وتضغط Shift+Enter فتظهر النتيجة تحته، ويُرقمان ``In[1]`` و ``Out[1]``.'],
  '$ 2 + 3*4\n(* Out: 14 *)',
  ['Things to know from the first minute: ``*`` or a space means multiplication, ``^`` is a power, ``%`` is the last result, a semicolon ``;`` at the end hides the output, and ``(* ... *)`` is a comment.',
   'ما تحتاجه من الدقيقة الأولى: ``*`` أو المسافة تعني الضرب، و ``^`` الأس، و ``%`` آخر نتيجة، والفاصلة المنقوطة ``;`` في النهاية تخفي المخرج، و ``(* ... *)`` تعليق.'],
  ['Mathematica keeps results exact whenever it can: fractions stay fractions.','ويحافظ Mathematica على النتائج مضبوطة ما أمكن: الكسور تبقى كسوراً.'],
],[
  Q('What is the output of ``2 + 3*4``, and then of ``%^2``?','ما مخرج ``2 + 3*4`` ثم مخرج ``%^2``؟','$ 14 then 196',
    [['Multiplication comes before addition:','الضرب قبل الجمع:'], '2 + 12 = 14', ['``%`` is the last output, 14:','``%`` هو آخر مخرج أي 14:'], '14^2 = 196'],['$ 20 then 400','$ 14 then 28','$ 14 then 14^2']),
  Q('What is the output of ``2 3``  (a space between the numbers)?','ما مخرج ``2 3`` (مسافة بين العددين)؟','$ 6',
    [['A space means multiplication, exactly like ``2*3``.','المسافة تعني الضرب تماماً مثل ``2*3``.']],['$ 23','$ 5','$ {2, 3}']),
  Q('What is the output of ``1/3 + 1/6``?','ما مخرج ``1/3 + 1/6``؟','$ 1/2',
    ['#f{1}{3} + #f{1}{6} = #f{2}{6} + #f{1}{6} = #f{1}{2}', ['The result is an exact fraction, not 0.5.','النتيجة كسر مضبوط وليست 0.5.']],['$ 0.5','$ 0.333333','$ 2/9']),
  Q('What does ``x = 2^10;`` display?','ماذا يعرض ``x = 2^10;``؟',['Nothing: the semicolon hides the output (x is still set to 1024)','لا شيء: الفاصلة المنقوطة تخفي المخرج (وتبقى قيمة x تساوي 1024)'],
    [['The assignment is done; only the display is suppressed. Typing ``x`` afterwards gives 1024.','الإسناد تم، والإخفاء للعرض فقط. وكتابة ``x`` بعدها تعطي 1024.']],['$ 1024','$ 20','$ x']),
]);

lesson('504',2,[
  ['Mathematica has two kinds of numbers. Exact numbers (integers, fractions, ``Pi``, ``Sqrt[2]``) are never rounded. Approximate numbers contain a decimal point and carry about 16 digits.',
   'في Mathematica نوعان من الأعداد. المضبوطة (الصحيحة والكسور و ``Pi`` و ``Sqrt[2]``) لا تُقرَّب أبداً. والتقريبية تحتوي فاصلة عشرية وتحمل نحو 16 رقماً.'],
  '$ 1/3 + 1/6        (* 1/2 *)\n1/3. + 1/6       (* 0.5 *)\nN[Pi, 10]        (* 3.141592654 *)',
  ['``N[expr]`` converts to an approximate number and ``N[expr, k]`` gives k digits. One decimal point anywhere makes the whole result approximate.',
   '``N[expr]`` تحوّل إلى عدد تقريبي و ``N[expr, k]`` تعطي k رقماً. ووجود فاصلة عشرية واحدة في أي مكان يجعل النتيجة كلها تقريبية.'],
  ['In spectral computations this matters: exact arithmetic is slow but has no rounding error, and it is the way to check a formula such as Theorem 3.2 before running it in machine numbers.',
   'وهذا مهم في الحسابات الطيفية: الحساب المضبوط بطيء لكنه بلا خطأ تقريب، وبه نتحقق من قانون مثل النظرية 3.2 قبل تشغيله بأعداد الآلة.'],
],[
  Q('What is the output of ``Sqrt[8]``, and of ``Sqrt[8.]``?','ما مخرج ``Sqrt[8]`` وما مخرج ``Sqrt[8.]``؟','$ 2 Sqrt[2] and 2.82843',
    [['Exact input gives the simplified exact root `2#r{2}`; the decimal point in ``8.`` gives a number.','المدخل المضبوط يعطي الجذر المبسط `2#r{2}`، والفاصلة في ``8.`` تعطي عدداً.']],['$ 2.82843 and 2.82843','$ Sqrt[8] and Sqrt[8.]','$ 4 and 4.']),
  Q('What is the output of ``N[1/3]``?','ما مخرج ``N[1/3]``؟','$ 0.333333',
    [['``N`` shows 6 digits by default, although about 16 are stored.','``N`` تعرض 6 أرقام افتراضياً مع أن المخزَّن نحو 16.']],['$ 1/3','$ 0.3','$ 0.33']),
  Q('What is the output of ``1/2 + 0.5``?','ما مخرج ``1/2 + 0.5``؟','$ 1.',
    [['One approximate number makes the result approximate; the dot in ``1.`` shows it.','عدد تقريبي واحد يجعل النتيجة تقريبية، والنقطة في ``1.`` تدل على ذلك.']],['$ 1','$ 2/2','$ 1.0000']),
  Q('Write an input that gives `Γ(5/2)` exactly, and one that gives it to 5 digits.','اكتب مدخلاً يعطي `Γ(5/2)` مضبوطاً وآخر يعطيه بخمسة أرقام.','$ Gamma[5/2] and N[Gamma[5/2], 5]',
    ['$ Gamma[5/2]        (* 3 Sqrt[Pi]/4 *)\nN[Gamma[5/2], 5]  (* 1.3293 *)', ['`Γ(5/2) = 3#r{π}/4 ≈ 1.3293` is the number that appears in the hand example of Theorem 3.2.','`Γ(5/2) = 3#r{π}/4 ≈ 1.3293` هو العدد الذي يظهر في المثال اليدوي للنظرية 3.2.']],
    ['$ gamma(5/2) and N(gamma(5/2), 5)','$ Gamma(2.5) and Gamma(2.5, 5)','$ Gamma[2.5] and Gamma[2.5]']),
]);

lesson('504',3,[
  ['Three symbols look alike and mean different things:','ثلاثة رموز متشابهة ومعانيها مختلفة:'],
  '$ x = 5      (* immediate assignment: evaluate now, store the value *)\ny := x^2   (* delayed assignment: evaluate each time y is used *)\nx == 5     (* a test: True or False *)',
  ['A variable keeps its value until you clear it, even in other cells. Forgotten values are the most common cause of strange results, so clear before reusing a name:',
   'المتغير يحتفظ بقيمته حتى تمسحها، حتى في الخلايا الأخرى. والقيم المنسية أشهر أسباب النتائج الغريبة، فامسح قبل إعادة استخدام الاسم:'],
  '$ Clear[x]',
  ['Names are case-sensitive, and your own names should start with a small letter, because every built-in name starts with a capital.','والأسماء حساسة لحالة الحرف، ويحسن أن تبدأ أسماؤك بحرف صغير لأن كل الأسماء الجاهزة تبدأ بحرف كبير.'],
],[
  Q('What is the output of the last line?','ما مخرج السطر الأخير؟','$ 5',
    [['``=`` evaluates the right side at once: b is stored as the number 5, so changing a later has no effect.','``=`` تحسب الطرف الأيمن فوراً: تُخزَّن b عدداً هو 5 فتغيير a بعدها لا يؤثر.']],['$ 12','$ a + 2','$ 10'],'a = 3; b = a + 2; a = 10;\nb'),
  Q('What is the output of the last line now, with ``:=``?','ما مخرج السطر الأخير الآن مع ``:=``؟','$ 12',
    [['``:=`` stores the rule `a + 2` and evaluates it when b is used; at that moment a is 10.','``:=`` تخزن القاعدة `a + 2` وتحسبها عند استخدام b، وحينها a تساوي 10.']],['$ 5','$ a + 2','$ 10'],'a = 3; b := a + 2; a = 10;\nb'),
  Q('What is the output of the last line?','ما مخرج السطر الأخير؟','$ 1 + x^2',
    [['After ``Clear[x]`` the name x has no value, so the expression stays symbolic.','بعد ``Clear[x]`` لا قيمة للاسم x فيبقى المقدار رمزياً.']],['$ 26','$ 1','$ Null'],'x = 5; Clear[x];\nx^2 + 1'),
  Q('What is the output of the last line?','ما مخرج السطر الأخير؟','$ True',
    [['``==`` compares; it does not assign. Here `3 + 1 = 4`, so the test is True.','``==`` تقارن ولا تُسند. وهنا `3 + 1 = 4` فالاختبار صحيح.']],['$ 4','$ False','$ y == 4'],'y = 3;\ny + 1 == 4'),
]);

lesson('504',4,[
  ['Mathematica has several thousand built-in functions, and they all obey the same three rules: the name starts with a capital letter, the arguments are inside square brackets, and constants are ``Pi``, ``E``, ``I``, ``Infinity``.',
   'في Mathematica آلاف الدوال الجاهزة، وكلها تتبع ثلاث قواعد: الاسم يبدأ بحرف كبير، والمتغيرات بين قوسين مربعين، والثوابت ``Pi`` و ``E`` و ``I`` و ``Infinity``.'],
  '$ Sin[Pi/6]         (* 1/2 *)\nLog[E^3]          (* 3 *)\nBinomial[5, 2]    (* 10 *)\nGamma[1/2]        (* Sqrt[Pi] *)',
  ['Round brackets ``( )`` only group, square brackets ``[ ]`` call a function, braces ``{ }`` make a list, and double brackets ``[[ ]]`` take a part of a list. Mixing them is the commonest beginner error.',
   'الأقواس المستديرة ``( )`` للتجميع فقط، والمربعة ``[ ]`` لاستدعاء دالة، والمعقوفة ``{ }`` للقوائم، والمزدوجة ``[[ ]]`` لأخذ جزء من قائمة. والخلط بينها أشهر أخطاء المبتدئ.'],
  ['The functions of this programme are all built in: ``LegendreP[n, x]``, ``ChebyshevT[n, x]``, ``JacobiP[n, a, b, x]``, ``Gamma[z]``, ``Beta[p, q]``, ``MittagLefflerE[a, z]``.',
   'ودوال هذا البرنامج كلها جاهزة: ``LegendreP[n, x]`` و ``ChebyshevT[n, x]`` و ``JacobiP[n, a, b, x]`` و ``Gamma[z]`` و ``Beta[p, q]`` و ``MittagLefflerE[a, z]``.'],
],[
  Q('What is the output of ``Log[10, 1000]``?','ما مخرج ``Log[10, 1000]``؟','$ 3',
    [['``Log[b, x]`` is the logarithm to base b; ``Log[x]`` alone is the natural logarithm.','``Log[b, x]`` لوغاريتم للأساس b، و ``Log[x]`` وحدها اللوغاريتم الطبيعي.'], '10^3 = 1000'],['$ 100','$ 6.90776','$ Log[10, 1000]']),
  Q('What is the output of ``LegendreP[2, x]``?','ما مخرج ``LegendreP[2, x]``؟','$ 1/2 (-1 + 3 x^2)',
    ['P_2(x) = #f{3x^2 − 1}{2}', ['Mathematica orders terms by increasing power, so the constant comes first.','يرتب Mathematica الحدود تصاعدياً حسب القوة فيأتي الثابت أولاً.']],['$ 3 x^2 - 1','$ 1/2 (1 + 3 x^2)','$ x^2']),
  Q('Why does ``sin(pi)`` not give 0? Write the correct input.','لماذا لا يعطي ``sin(pi)`` الصفر؟ اكتب المدخل الصحيح.','$ Sin[Pi]',
    [['``sin`` and ``pi`` in small letters are unknown symbols, and round brackets mean multiplication: the input is read as the product of two symbols.','``sin`` و ``pi`` بحروف صغيرة رمزان غير معروفين، والأقواس المستديرة تعني الضرب: فيُقرأ المدخل حاصل ضرب رمزين.'], '$ Sin[Pi]   (* 0 *)'],['$ Sin(Pi)','$ sin[pi]','$ Sin{Pi}']),
  Q('What is the output of ``Expand[(x + 1)^2]`` and of ``Factor[x^2 - 1]``?','ما مخرج ``Expand[(x + 1)^2]`` وما مخرج ``Factor[x^2 - 1]``؟','$ 1 + 2 x + x^2 and (-1 + x) (1 + x)',
    ['(x + 1)^2 = 1 + 2x + x^2', 'x^2 − 1 = (x − 1)(x + 1)'],['$ x^2 + 1 and (x - 1)^2','$ 1 + 2 x + x^2 and (x - 1)^2','$ 1 + x^2 and (-1 + x) (1 + x)']),
]);

lesson('504',5,[
  ['You define a function with an underscore after each argument and ``:=``:','تعرّف الدالة بشرطة سفلية بعد كل متغير ومع ``:=``:'],
  '$ f[x_] := x^2 + 1\nf[3]          (* 10 *)\nf[a + b]      (* 1 + (a + b)^2 *)',
  ['``x_`` is a pattern that means «anything, call it x». Without the underscore, ``f[x] := …`` defines f only for the literal symbol x. With ``:=`` the right side is evaluated at each call, with the actual argument.',
   '``x_`` نمط معناه «أي شيء، وسمِّه x». ودون الشرطة السفلية ``f[x] := …`` تعرّف f للرمز x نفسه فقط. ومع ``:=`` يُحسب الطرف الأيمن عند كل استدعاء بالقيمة الفعلية.'],
  ['A short function can be written without a name, as a pure function: ``#`` is the argument and ``&`` ends it. ``/@`` applies a function to every element of a list.',
   'والدالة القصيرة تُكتب دون اسم، دالةً صرفة: ``#`` هو المتغير و ``&`` تنهيها. و ``/@`` تطبق دالة على كل عنصر في قائمة.'],
  '$ (#^2 &)[4]            (* 16 *)\nf /@ {1, 2, 3}        (* {2, 5, 10} *)',
],[
  Q('What is the output of the last line?','ما مخرج السطر الأخير؟','$ 10',
    ['g(2, 5) = 2·5 = 10', ['A space between x and y is multiplication.','المسافة بين x و y ضرب.']],['$ 7','$ 25','$ g[2, 5]'],'g[x_, y_] := x y\ng[2, 5]'),
  Q('What is the output of the last line?','ما مخرج السطر الأخير؟','$ h[3]',
    [['There is no underscore: the definition applies only to the symbol x, so ``h[3]`` matches no rule and returns unevaluated.','لا توجد شرطة سفلية: التعريف خاص بالرمز x، فلا قاعدة تطابق ``h[3]`` ويعود كما هو.']],['$ 9','$ x^2','$ 3^2'],'h[x] := x^2\nh[3]'),
  Q('What is the output of ``(#^2 + 1 &) /@ {0, 1, 2}``?','ما مخرج ``(#^2 + 1 &) /@ {0, 1, 2}``؟','$ {1, 2, 5}',
    [['The pure function `x ↦ x^2 + 1` is applied to each element:','الدالة الصرفة `x ↦ x^2 + 1` تُطبق على كل عنصر:'], '0^2 + 1 = 1,   1^2 + 1 = 2,   2^2 + 1 = 5'],['$ {0, 1, 4}','$ {1, 2, 3}','$ 8']),
  Q('Define the shifted Legendre polynomial `P_n^*(t) = P_n(2t − 1)` as a function ``ps[n, t]`` and give ``ps[1, t]``.','عرّف كثيرة ليجندر المزاحة `P_n^*(t) = P_n(2t − 1)` دالةً ``ps[n, t]`` واذكر ``ps[1, t]``.','$ ps[n_, t_] := LegendreP[n, 2 t - 1]',
    ['$ ps[n_, t_] := LegendreP[n, 2 t - 1]\nps[1, t]     (* -1 + 2 t *)', 'P_1^*(t) = 2t − 1'],['$ ps[n, t] := LegendreP[n, 2 t - 1]','$ ps[n_, t_] = legendreP(n, 2 t - 1)','$ ps(n_, t_) := LegendreP[n, 2 t - 1]']),
]);

export const MS504 = true;
