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

/* ---- 504 · Unit 1 (lessons 6–10) and Unit 2 (lessons 11–20) ---- */
lesson('504',6,[
  ['``?Name`` shows the short description of a built-in function, and the documentation (F1 on a selected name) gives examples you can copy. Every name is documented, so this is the fastest way to learn a new command.','``?Name`` يعرض الوصف المختصر لدالة جاهزة، والتوثيق (F1 على الاسم المحدد) يعطي أمثلة يمكن نسخها. وكل اسم موثق، فهذه أسرع طريقة لتعلّم أمر جديد.'],
  '$ ?NIntegrate\nSin[1, 2]\n(* Sin::argx: Sin called with 2 arguments; 1 argument is expected. *)',
  ['A message has the form ``Symbol::tag`` and explains what went wrong; the input is then usually returned unevaluated. Read the first message first: later ones are often consequences of it.','والرسالة على الصورة ``Symbol::tag`` وتشرح ما حدث، ثم يُعاد المدخل غالباً دون حساب. اقرأ أول رسالة أولاً، فما بعدها غالباً نتيجة لها.'],
],[
  Q('What does ``Sin[1, 2]`` return after its message?','ماذا يعيد ``Sin[1, 2]`` بعد رسالته؟','$ Sin[1, 2]',[['Sin takes one argument, so it cannot evaluate and returns the input unchanged.','تأخذ Sin متغيراً واحداً فلا تستطيع الحساب وتعيد المدخل كما هو.']],['$ 0.841471','$ $Failed','$ Sin[1]']),
  Q('What does ``1/0`` return?','ماذا يعيد ``1/0``؟','$ ComplexInfinity',[['With the message ``Power::infy``: infinite expression encountered.','مع الرسالة ``Power::infy``: ظهر مقدار لانهائي.']],['$ Infinity','$ 0','$ Indeterminate']),
  Q('Which input shows the description of ``JacobiP``?','أي مدخل يعرض وصف ``JacobiP``؟','$ ?JacobiP',[['``?`` followed by the name, alone in a cell.','``?`` يليها الاسم وحدها في خلية.']],['$ help(JacobiP)','$ JacobiP?','$ Help[JacobiP]']),
  Q('What is returned, and why?','ماذا يُعاد ولماذا؟',['The input itself, with the message ``Thread::tdlen``: lists of unequal length cannot be added','المدخل نفسه مع الرسالة ``Thread::tdlen``: لا يمكن جمع قائمتين مختلفتي الطول'],[['Lists are added element by element, so they must have the same length.','القوائم تُجمع عنصراً عنصراً فيجب أن يتساوى طولاها.']],['$ {2, 4, 3}','$ {2, 4}'],'{1, 2} + {1, 2, 3}'),
]);

lesson('504',7,[
  ['The three basic algebra commands:','أوامر الجبر الأساسية الثلاثة:'],
  '$ Expand[(x - 1) (x + 2)]     (* -2 + x + x^2 *)\nFactor[x^2 - 3 x + 2]       (* (-2 + x) (-1 + x) *)\nSimplify[Sin[x]^2 + Cos[x]^2] (* 1 *)',
  ['Related commands: ``Together`` combines fractions, ``Apart`` splits into partial fractions, ``FullSimplify`` tries harder (and slower). ``Simplify`` only uses transformations valid for all complex values; give assumptions as a second argument, for example ``Simplify[Sqrt[x^2], x > 0]`` gives ``x``.','ومن الأوامر القريبة: ``Together`` تجمع الكسور، و ``Apart`` تفصلها كسوراً جزئية، و ``FullSimplify`` تحاول أكثر (وأبطأ). و ``Simplify`` لا تستخدم إلا تحويلات صحيحة لكل القيم المركبة، فأعطِ الافتراضات متغيراً ثانياً، فمثلاً ``Simplify[Sqrt[x^2], x > 0]`` تعطي ``x``.'],
],[
  Q('What is the output of ``Expand[(1 + x)^3]``?','ما مخرج ``Expand[(1 + x)^3]``؟','$ 1 + 3 x + 3 x^2 + x^3',['(1 + x)^3 = 1 + 3x + 3x^2 + x^3',['Terms appear by increasing power.','تظهر الحدود تصاعدياً حسب القوة.']],['$ x^3 + 1','$ (1 + x)^3','$ 1 + x + x^2 + x^3']),
  Q('What is the output of ``Simplify[Sqrt[x^2]]``?','ما مخرج ``Simplify[Sqrt[x^2]]``؟','$ Sqrt[x^2]',[['`#r{x^2} = |x|` only for real x, and equals x only for x ≥ 0; without assumptions nothing is simplified.','`#r{x^2} = |x|` فقط لـ x حقيقية وتساوي x فقط عندما x ≥ 0، ودون افتراضات لا يُبسَّط شيء.']],['$ x','$ Abs[x]','$ -x']),
  Q('What is the output of ``Together[1/x + 1/(x + 1)]``?','ما مخرج ``Together[1/x + 1/(x + 1)]``؟','$ (1 + 2 x)/(x (1 + x))',['#f{1}{x} + #f{1}{x + 1} = #f{(x + 1) + x}{x(x + 1)}'],['$ 2/(2 x + 1)','$ (2 + x)/(x (1 + x))','$ 1/(x (1 + x))']),
  Q('What is the output of ``Apart[1/(x^2 - 1)]``?','ما مخرج ``Apart[1/(x^2 - 1)]``؟','$ 1/(2 (-1 + x)) - 1/(2 (1 + x))',['#f{1}{x^2 − 1} = #f{1}{2}(#f{1}{x − 1} − #f{1}{x + 1})'],['$ 1/(-1 + x) - 1/(1 + x)','$ 1/((-1 + x) (1 + x))','$ 1/(2 (-1 + x)) + 1/(2 (1 + x))']),
]);

lesson('504',8,[
  ['``Solve`` finds exact solutions, ``NSolve`` numerical solutions of polynomial systems, and ``FindRoot`` one root near a starting value. Equations use ``==``, and the answers are lists of rules:','``Solve`` تجد الحلول المضبوطة، و ``NSolve`` الحلول العددية لأنظمة كثيرات الحدود، و ``FindRoot`` جذراً واحداً قرب قيمة ابتدائية. والمعادلات تستخدم ``==`` والأجوبة قوائم قواعد:'],
  '$ Solve[x^2 - 5 x + 6 == 0, x]      (* {{x -> 2}, {x -> 3}} *)\nNSolve[x^3 - 2 == 0, x, Reals]     (* {{x -> 1.25992}} *)\nFindRoot[Cos[x] == x, {x, 1}]      (* {x -> 0.739085} *)',
  ['``FindRoot`` works for any smooth equation, not only polynomials, but it returns one root and depends on the starting value.','``FindRoot`` تعمل لأي معادلة ملساء لا لكثيرات الحدود فقط، لكنها تعيد جذراً واحداً وتعتمد على القيمة الابتدائية.'],
],[
  Q('What is the output of ``Solve[{x + y == 3, x - y == 1}, {x, y}]``?','ما مخرج ``Solve[{x + y == 3, x - y == 1}, {x, y}]``؟','$ {{x -> 2, y -> 1}}',['2x = 4  ⇒  x = 2,   y = 1'],['$ {x -> 2, y -> 1}','$ {{x -> 1, y -> 2}}','$ {2, 1}']),
  Q('What is the output of ``Solve[LegendreP[2, x] == 0, x]``?','ما مخرج ``Solve[LegendreP[2, x] == 0, x]``؟','$ {{x -> -(1/Sqrt[3])}, {x -> 1/Sqrt[3]}}',['#f{3x^2 − 1}{2} = 0  ⇒  x = ±#f{1}{#r{3}}'],['$ {{x -> -0.57735}, {x -> 0.57735}}','$ {x -> 1/Sqrt[3]}','$ {{x -> -1/3}, {x -> 1/3}}']),
  Q('What goes wrong in ``Solve[x = 1 + x/2, x]``?','ما الخطأ في ``Solve[x = 1 + x/2, x]``؟',['``=`` is an assignment, not an equation: it tries to give x a value defined by x itself','``=`` إسناد لا معادلة: تحاول إعطاء x قيمة معرّفة بـ x نفسها'],[['Equations always use ``==``: ``Solve[x == 1 + x/2, x]`` gives ``{{x -> 2}}``.','المعادلات تستخدم ``==`` دائماً: ``Solve[x == 1 + x/2, x]`` تعطي ``{{x -> 2}}``.']],[['Solve needs ``=``','Solve تحتاج ``=``'],['Both fail','كلاهما يفشل']]),
  Q('Which command finds the root of `e^{−x} = x` near 0.5?','أي أمر يجد جذر `e^{−x} = x` قرب 0.5؟','$ FindRoot[Exp[-x] == x, {x, 0.5}]',[['It is not a polynomial, so Solve and NSolve are not the right tools; the root is 0.567143.','ليست كثيرة حدود فليست Solve و NSolve الأداة المناسبة، والجذر 0.567143.']],['$ NSolve[Exp[-x] == x, x]','$ FindRoot[Exp[-x] = x, {x, 0.5}]','$ Solve[Exp[-x], x, 0.5]']),
]);

lesson('504',9,[
  ['A rule ``a -> b`` says «replace a by b», and ``expr /. rule`` applies it once everywhere in expr. The results of Solve are rules, so ``/.`` is how you use them:','القاعدة ``a -> b`` تعني «استبدل a بـ b»، و ``expr /. rule`` تطبقها مرة واحدة في كل expr. ونتائج Solve قواعد، فـ ``/.`` هي طريقة استخدامها:'],
  '$ x^2 + 1 /. x -> 3                (* 10 *)\nx /. Solve[x^2 == 4, x]            (* {-2, 2} *)\nf[y] /. f[t_] -> t^2              (* y^2 *)',
  ['With ``->`` the right side is evaluated once, when the rule is made; with ``:>`` it is evaluated each time the rule is used. Rules do not change any variable: x keeps no value afterwards.','ومع ``->`` يُحسب الطرف الأيمن مرة واحدة عند إنشاء القاعدة، ومع ``:>`` يُحسب عند كل استخدام. والقواعد لا تغيّر أي متغير: لا تبقى لـ x قيمة بعدها.'],
],[
  Q('What is the output of ``x + y /. {x -> 1, y -> 2}``?','ما مخرج ``x + y /. {x -> 1, y -> 2}``؟','$ 3',['1 + 2'],['$ x + 2','$ {3}','$ 1 + y']),
  Q('What is the output of ``x^2 /. x -> y /. y -> 2``?','ما مخرج ``x^2 /. x -> y /. y -> 2``؟','$ 4',[['``/.`` groups from the left: first `x^2 → y^2`, then `y^2 → 4`.','``/.`` تتجمع من اليسار: أولاً `x^2 → y^2` ثم `y^2 → 4`.']],['$ y^2','$ x^2','$ 2']),
  Q('What is the output of ``{x, x} /. x -> RandomInteger[100]``?','ما مخرج ``{x, x} /. x -> RandomInteger[100]``؟',['Two equal integers: the right side is evaluated once','عددان صحيحان متساويان: الطرف الأيمن يُحسب مرة واحدة'],[['With ``:>`` the two numbers would usually differ.','ومع ``:>`` يختلف العددان عادة.']],[['Two different integers','عددان مختلفان'],['``{x, x}``','``{x, x}``']]),
  Q('Find `P_2(0.5)` from ``LegendreP[2, x]`` with a rule.','أوجد `P_2(0.5)` من ``LegendreP[2, x]`` بقاعدة.','$ LegendreP[2, x] /. x -> 0.5   (* -0.125 *)',['#f{3(0.25) − 1}{2} = −0.125'],['$ LegendreP[2, x] = 0.5','$ LegendreP[2, x] /. 0.5','$ LegendreP[2, x] -> 0.5']),
]);

lesson('504',10,[
  ['A good notebook reads like a short report: a title, sections, text cells that explain, and input cells that run from top to bottom without errors. Put definitions near the top and start with a clean state:','الدفتر الجيد يُقرأ كتقرير قصير: عنوان وأقسام وخلايا نصية تشرح وخلايا مدخلات تعمل من الأعلى إلى الأسفل دون أخطاء. ضع التعريفات قرب البداية وابدأ بحالة نظيفة:'],
  '$ ClearAll["Global`*"]   (* remove all your own definitions *)\n(* Parameters *)\nn = 8; mu = 1/2;',
  ['Choose cell styles from the Format menu (Title, Section, Text, Input). Use Evaluation ▸ Evaluate Notebook to check that the whole file runs in order, and ``Quit[]`` to restart the kernel when results look inconsistent.','اختر أنماط الخلايا من قائمة Format (Title و Section و Text و Input). واستخدم Evaluation ▸ Evaluate Notebook للتأكد أن الملف كله يعمل بالترتيب، و ``Quit[]`` لإعادة تشغيل النواة حين تبدو النتائج متناقضة.'],
],[
  Q('Which input removes all your own definitions at once?','أي مدخل يمسح كل تعريفاتك دفعة واحدة؟','$ ClearAll["Global`*"]',[['Your names live in the context ``Global``; the pattern matches all of them.','أسماؤك تعيش في السياق ``Global`` والنمط يطابقها كلها.']],['$ Clear[]','$ Clear[All]','$ Delete["Global"]']),
  Q('How do you write a comment in an input cell?','كيف تكتب تعليقاً في خلية مدخلات؟','$ (* a comment *)',[['Comments can span several lines and are ignored when the cell runs.','يمكن أن يمتد التعليق عدة أسطر ويُتجاهل عند التشغيل.']],['$ # a comment','$ // a comment','$ % a comment']),
  Q('What does ``Quit[]`` do?','ماذا يفعل ``Quit[]``؟',['It stops the kernel: every variable and definition is lost, the notebook text stays','يوقف النواة: تضيع كل المتغيرات والتعريفات ويبقى نص الدفتر'],[['The next evaluation starts a fresh kernel.','والحساب التالي يبدأ نواة جديدة.']],[['It closes and deletes the notebook','يغلق الدفتر ويحذفه'],['It clears the last output only','يمسح آخر مخرج فقط']]),
  Q('Why should a notebook be checked with Evaluate Notebook before it is shared?','لماذا يجب فحص الدفتر بالأمر Evaluate Notebook قبل مشاركته؟',['Cells evaluated out of order can hide errors; running from top to bottom shows whether the file really works','الخلايا المحسوبة بغير ترتيبها قد تخفي أخطاء، والتشغيل من الأعلى إلى الأسفل يُظهر هل يعمل الملف فعلاً'],[['A value defined in a deleted cell may still be in memory.','قيمة عُرّفت في خلية محذوفة قد تبقى في الذاكرة.']],[['To make it faster','لتسريعه'],['It is not needed','ليس ضرورياً']]),
]);

lesson('504',11,[
  ['A list is written with braces and can hold anything. ``Table`` builds a list from a formula and an iterator ``{i, min, max, step}``:','القائمة تُكتب بين قوسين معقوفين ويمكن أن تحوي أي شيء. و ``Table`` تبني قائمة من قانون ومُكرِّر ``{i, min, max, step}``:'],
  '$ Table[i^2, {i, 1, 5}]            (* {1, 4, 9, 16, 25} *)\nTable[k, {k, 0, 1, 1/4}]          (* {0, 1/4, 1/2, 3/4, 1} *)\nTable[i + j, {i, 2}, {j, 2}]       (* {{2, 3}, {3, 4}} *)',
  ['``{i, n}`` means i = 1, …, n. Two iterators give a nested list (a matrix), the first iterator giving the rows.','و ``{i, n}`` تعني i = 1, …, n. ومُكرِّران يعطيان قائمة متداخلة (مصفوفة)، والمكرِّر الأول يعطي الصفوف.'],
],[
  Q('What is the output of ``Table[LegendreP[n, 1], {n, 0, 3}]``?','ما مخرج ``Table[LegendreP[n, 1], {n, 0, 3}]``؟','$ {1, 1, 1, 1}',['P_n(1) = 1'],['$ {0, 1, 2, 3}','$ {1, -1, 1, -1}','$ 1']),
  Q('What is the output of ``Table[2^k, {k, 0, 4}]``?','ما مخرج ``Table[2^k, {k, 0, 4}]``؟','$ {1, 2, 4, 8, 16}',['2^0, …, 2^4'],['$ {2, 4, 8, 16}','$ {0, 2, 4, 6, 8}','$ {1, 2, 4, 8}']),
  Q('What is the output of ``Table[i j, {i, 2}, {j, 3}]``?','ما مخرج ``Table[i j, {i, 2}, {j, 3}]``؟','$ {{1, 2, 3}, {2, 4, 6}}',[['Two rows (i = 1, 2), three columns (j = 1, 2, 3).','صفان (i = 1, 2) وثلاثة أعمدة (j = 1, 2, 3).']],['$ {{1, 2}, {2, 4}, {3, 6}}','$ {1, 2, 3, 2, 4, 6}','$ {{1, 2, 3}}']),
  Q('Write the Gauss–Chebyshev nodes `cos((2k − 1)π/(2n))`, k = 1, …, n, for n = 4 with Table.','اكتب عقد جاوس–تشيبيشيف `cos((2k − 1)π/(2n))` حيث k = 1, …, n عند n = 4 باستخدام Table.','$ Table[Cos[(2 k - 1) Pi/8], {k, 1, 4}]',[['2n = 8; add ``N`` to see numbers.','2n = 8، وأضف ``N`` لرؤية الأعداد.']],['$ Table[Cos[(2 k - 1) Pi/8], k, 1, 4]','$ Table(cos((2 k - 1) pi/8), {k, 1, 4})','$ Table[Cos[(2 k - 1) Pi/4], {k, 1, 8}]']),
]);

lesson('504',12,[
  ['Double brackets take parts of a list; negative positions count from the end, and ``;;`` gives a span:','الأقواس المزدوجة تأخذ أجزاء القائمة، والمواضع السالبة تُعد من النهاية، و ``;;`` تعطي مدى:'],
  '$ v = {10, 20, 30, 40, 50};\nv[[2]]          (* 20 *)\nv[[-1]]         (* 50 *)\nv[[2 ;; 4]]     (* {20, 30, 40} *)\nTake[v, 2]      (* {10, 20} *)\nDrop[v, 2]      (* {30, 40, 50} *)',
  ['For a matrix ``m[[i, j]]`` is one entry, ``m[[i]]`` a row and ``m[[All, j]]`` a column. Parts are numbered from 1, not from 0.','وللمصفوفة ``m[[i, j]]`` عنصر واحد، و ``m[[i]]`` صف، و ``m[[All, j]]`` عمود. والترقيم يبدأ من 1 لا من 0.'],
],[
  Q('What is the output of ``v[[1 ;; -1 ;; 2]]`` for the list above?','ما مخرج ``v[[1 ;; -1 ;; 2]]`` للقائمة أعلاه؟','$ {10, 30, 50}',[['From the first to the last, in steps of 2.','من الأول إلى الأخير بخطوة 2.']],['$ {20, 40}','$ {10, 20}','$ {10, 50}']),
  Q('What is the output of ``Take[v, -2]``?','ما مخرج ``Take[v, -2]``؟','$ {40, 50}',[['A negative count takes from the end.','العدد السالب يأخذ من النهاية.']],['$ {10, 20}','$ {10, 20, 30}','$ 40']),
  Q('With ``m = {{1, 2}, {3, 4}}``, what is ``m[[All, 2]]``?','مع ``m = {{1, 2}, {3, 4}}`` ما ``m[[All, 2]]``؟','$ {2, 4}',[['The second column.','العمود الثاني.']],['$ {3, 4}','$ 4','$ {1, 3}']),
  Q('What is the output of ``v[[0]]``?','ما مخرج ``v[[0]]``؟','$ List',[['Part 0 is the head of the expression; for a list it is ``List``. The first element is ``v[[1]]``.','الجزء 0 هو رأس المقدار وللقائمة هو ``List``. والعنصر الأول ``v[[1]]``.']],['$ 10','$ 0','$ {}']),
]);

lesson('504',13,[
  ['Common list functions:','دوال القوائم الشائعة:'],
  '$ Range[5]              (* {1, 2, 3, 4, 5} *)\nRange[0, 10, 5]       (* {0, 5, 10} *)\nLength[{a, b, c}]     (* 3 *)\nTotal[Range[100]]     (* 5050 *)\nMax[{3, 7, 2}]        (* 7 *)\nMean[{1, 2, 3, 6}]    (* 3 *)',
  ['``Accumulate`` gives running sums and ``Differences`` successive differences; both are useful for checking sequences and convergence tables.','و ``Accumulate`` تعطي المجاميع التراكمية و ``Differences`` الفروق المتتالية، وكلاهما مفيد لفحص المتتاليات وجداول التقارب.'],
],[
  Q('What is the output of ``Length[Range[3, 9]]``?','ما مخرج ``Length[Range[3, 9]]``؟','$ 7',['9 − 3 + 1'],['$ 6','$ 9','$ 3']),
  Q('What is the output of ``Accumulate[{1, 2, 3, 4}]``?','ما مخرج ``Accumulate[{1, 2, 3, 4}]``؟','$ {1, 3, 6, 10}',[['Running sums.','مجاميع تراكمية.']],['$ 10','$ {1, 2, 6, 24}','$ {1, 1, 1}']),
  Q('What is the output of ``Differences[{1, 4, 9, 16}]``?','ما مخرج ``Differences[{1, 4, 9, 16}]``؟','$ {3, 5, 7}',[['Successive differences of the squares.','الفروق المتتالية للمربعات.']],['$ {1, 4, 9}','$ {2, 2}','$ 15']),
  Q('Compute the sum of the Gauss–Legendre weights for n = 5 if ``w`` holds them.','احسب مجموع أوزان جاوس–ليجندر عند n = 5 إذا كانت ``w`` تحويها.','$ Total[w]   (* 2. *)',['∫_{−1}^{1} 1 dx = 2'],['$ Length[w]   (* 5 *)','$ Max[w]','$ Sum[w]']),
]);

lesson('504',14,[
  ['``Map`` applies a function to each element, ``Apply`` replaces the head of a list by a function:','``Map`` تطبق دالة على كل عنصر، و ``Apply`` تستبدل رأس القائمة بدالة:'],
  '$ f /@ {a, b, c}        (* {f[a], f[b], f[c]} *)\nPlus @@ {1, 2, 3}      (* 6 *)\nf @@@ {{1, 2}, {3, 4}} (* {f[1, 2], f[3, 4]} *)',
  ['``/@`` is short for ``Map``, ``@@`` for ``Apply`` and ``@@@`` applies at the first level. Many functions are already Listable, so ``Sin[{0, Pi/2}]`` works without Map.','و ``/@`` اختصار ``Map``، و ``@@`` اختصار ``Apply``، و ``@@@`` تطبّق في المستوى الأول. وكثير من الدوال Listable أصلاً فيعمل ``Sin[{0, Pi/2}]`` دون Map.'],
],[
  Q('What is the output of ``Times @@ {2, 3, 4}``?','ما مخرج ``Times @@ {2, 3, 4}``؟','$ 24',['2·3·4'],['$ 9','$ {2, 3, 4}','$ Times[{2, 3, 4}]']),
  Q('What is the output of ``f /@ {{1, 2}, {3}}``?','ما مخرج ``f /@ {{1, 2}, {3}}``؟','$ {f[{1, 2}], f[{3}]}',[['Map works on the first level: each sublist is one element.','Map تعمل على المستوى الأول: كل قائمة فرعية عنصر واحد.']],['$ {{f[1], f[2]}, {f[3]}}','$ {f[1, 2], f[3]}','$ f[{{1, 2}, {3}}]']),
  Q('What is the output of ``Sin[{0, Pi/6, Pi/2}]``?','ما مخرج ``Sin[{0, Pi/6, Pi/2}]``؟','$ {0, 1/2, 1}',[['Sin is Listable.','Sin دالة Listable.']],['$ Sin[{0, Pi/6, Pi/2}]','$ {0, 0.5, 1}','$ 3/2']),
  Q('What is the output of ``Plus @@@ {{1, 2}, {3, 4}}``?','ما مخرج ``Plus @@@ {{1, 2}, {3, 4}}``؟','$ {3, 7}',['1 + 2,   3 + 4'],['$ 10','$ {4, 6}','$ {{3}, {7}}']),
]);

lesson('504',15,[
  ['A pure function has no name: ``#`` is its argument (``#1``, ``#2`` for several) and ``&`` ends it. ``Function[x, body]`` is the same with a named variable:','الدالة الصرفة لا اسم لها: ``#`` متغيرها (``#1`` و ``#2`` لعدة متغيرات) و ``&`` تنهيها. و ``Function[x, body]`` هي نفسها بمتغير مسمّى:'],
  '$ (#^2 &)[5]              (* 25 *)\n(#1 #2 &)[3, 4]          (* 12 *)\nFunction[x, x + 1] /@ {1, 2}   (* {2, 3} *)',
  ['Pure functions are the natural arguments of Map, Select, Table-free code and of Nest and Fold. Brackets matter: ``(# + 1 &)`` must be grouped before it is applied.','والدوال الصرفة متغيرات طبيعية لـ Map و Select وللكود الخالي من الحلقات ولـ Nest و Fold. والأقواس مهمة: يجب تجميع ``(# + 1 &)`` قبل تطبيقها.'],
],[
  Q('What is the output of ``(# + 1 &) /@ {1, 2, 3}``?','ما مخرج ``(# + 1 &) /@ {1, 2, 3}``؟','$ {2, 3, 4}',['x ↦ x + 1'],['$ {1, 2, 3, 1}','$ 7','$ {1, 2, 3}']),
  Q('What is the output of ``(#2 - #1 &)[10, 3]``?','ما مخرج ``(#2 - #1 &)[10, 3]``؟','$ -7',['3 − 10'],['$ 7','$ 13','$ -13']),
  Q('What is the output of ``(Total[#]/Length[#] &)[{2, 4, 9}]``?','ما مخرج ``(Total[#]/Length[#] &)[{2, 4, 9}]``؟','$ 5',['#f{15}{3}'],['$ 15','$ 15/3','$ 3']),
  Q('Write a pure function for the weight `(1 − x)^a (1 + x)^b` with a = 1, b = 0 and apply it to 0.5.','اكتب دالة صرفة للوزن `(1 − x)^a (1 + x)^b` مع a = 1 و b = 0 وطبّقها على 0.5.','$ ((1 - #)^1 (1 + #)^0 &)[0.5]   (* 0.5 *)',['(1 − 0.5)·1'],['$ ((1 - x)^1 (1 + x)^0 &)[0.5]','$ (1 - #)(1 + #) & [0.5]','$ Function[(1 - #)][0.5]']),
]);

lesson('504',16,[
  ['``Select`` keeps the elements that pass a test, ``Cases`` the elements that match a pattern, and ``Position`` gives where they are:','``Select`` تبقي العناصر التي تجتاز اختباراً، و ``Cases`` العناصر التي تطابق نمطاً، و ``Position`` تعطي مواضعها:'],
  '$ Select[Range[10], PrimeQ]          (* {2, 3, 5, 7} *)\nSelect[{1, -2, 3, -4}, # > 0 &]     (* {1, 3} *)\nCases[{1, a, 2.5, b}, _Symbol]      (* {a, b} *)\nPosition[{a, b, a}, a]              (* {{1}, {3}} *)',
  ['``Count`` counts the matches. Tests end in Q by convention: ``EvenQ``, ``PrimeQ``, ``NumberQ``, ``MatrixQ``.','و ``Count`` تعدّ المطابقات. ودوال الاختبار تنتهي بـ Q اصطلاحاً: ``EvenQ`` و ``PrimeQ`` و ``NumberQ`` و ``MatrixQ``.'],
],[
  Q('What is the output of ``Select[Range[10], EvenQ]``?','ما مخرج ``Select[Range[10], EvenQ]``؟','$ {2, 4, 6, 8, 10}',[['The even numbers from 1 to 10.','الأعداد الزوجية من 1 إلى 10.']],['$ {1, 3, 5, 7, 9}','$ 5','$ {True, False}']),
  Q('What is the output of ``Cases[{1, a, 2.5, b}, _Integer]``?','ما مخرج ``Cases[{1, a, 2.5, b}, _Integer]``؟','$ {1}',[['2.5 is a Real, not an Integer.','2.5 عدد Real وليس Integer.']],['$ {1, 2.5}','$ {a, b}','$ 1']),
  Q('What is the output of ``Count[{1, 2, 1, 1, 3}, 1]``?','ما مخرج ``Count[{1, 2, 1, 1, 3}, 1]``؟','$ 3',[['Three elements equal 1.','ثلاثة عناصر تساوي 1.']],['$ 1','$ {1, 3, 4}','$ 5']),
  Q('Keep the Gauss nodes ``x`` that lie in `[0, 1]`.','أبقِ عقد جاوس ``x`` الواقعة في `[0, 1]`.','$ Select[x, 0 <= # <= 1 &]',[['A pure test with a double inequality.','اختبار صرف بمتباينة مزدوجة.']],['$ Cases[x, 0 <= # <= 1]','$ Select[x, 0 <= x <= 1]','$ Position[x, 0 <= # <= 1 &]']),
]);

lesson('504',17,[
  ['Reordering and combining lists:','إعادة ترتيب القوائم ودمجها:'],
  '$ Sort[{3, 1, 2}]              (* {1, 2, 3} *)\nReverse[{1, 2, 3}]           (* {3, 2, 1} *)\nJoin[{1, 2}, {3}]            (* {1, 2, 3} *)\nTranspose[{{1, 2}, {3, 4}}]  (* {{1, 3}, {2, 4}} *)\nFlatten[{{1, 2}, {3, {4}}}]  (* {1, 2, 3, 4} *)',
  ['``Union`` sorts and removes duplicates, ``SortBy`` sorts by the value of a function, and ``Append`` adds an element at the end (it returns a new list; the old one is unchanged).','و ``Union`` ترتب وتحذف المكرر، و ``SortBy`` ترتب حسب قيمة دالة، و ``Append`` تضيف عنصراً في النهاية (وتعيد قائمة جديدة دون تغيير القديمة).'],
],[
  Q('What is the output of ``Union[{3, 1, 3, 2}]``?','ما مخرج ``Union[{3, 1, 3, 2}]``؟','$ {1, 2, 3}',[['Sorted, without duplicates.','مرتبة ودون تكرار.']],['$ {3, 1, 2}','$ {1, 2, 3, 3}','$ 3']),
  Q('What is the output of ``SortBy[{-3, 1, -2}, Abs]``?','ما مخرج ``SortBy[{-3, 1, -2}, Abs]``؟','$ {1, -2, -3}',[['Sorted by absolute value: 1, 2, 3.','مرتبة حسب القيمة المطلقة: 1 و 2 و 3.']],['$ {-3, -2, 1}','$ {1, 2, 3}','$ {-2, 1, -3}']),
  Q('What is the output of ``Transpose[{{1, 2, 3}, {4, 5, 6}}]``?','ما مخرج ``Transpose[{{1, 2, 3}, {4, 5, 6}}]``؟','$ {{1, 4}, {2, 5}, {3, 6}}',[['A 2 × 3 matrix becomes 3 × 2.','المصفوفة 2 × 3 تصبح 3 × 2.']],['$ {{4, 5, 6}, {1, 2, 3}}','$ {1, 4, 2, 5, 3, 6}','$ {{3, 2, 1}, {6, 5, 4}}']),
  Q('What is the output of the last line?','ما مخرج السطر الأخير؟','$ {1, 2}',[['``Append`` returns a new list; use ``AppendTo[v, 3]`` to change v.','``Append`` تعيد قائمة جديدة، فاستخدم ``AppendTo[v, 3]`` لتغيير v.']],['$ {1, 2, 3}','$ 3','$ {3, 1, 2}'],'v = {1, 2}; Append[v, 3];\nv'),
]);

lesson('504',18,[
  ['A matrix is a list of rows. The dot ``.`` is the matrix product, while ``*`` multiplies element by element:','المصفوفة قائمة صفوف. والنقطة ``.`` ضرب مصفوفي، بينما ``*`` تضرب عنصراً بعنصر:'],
  '$ m = {{1, 2}, {3, 4}};\nm . m          (* {{7, 10}, {15, 22}} *)\nm * m          (* {{1, 4}, {9, 16}} *)\nMatrixForm[m]  (* display only *)',
  ['``Dimensions`` gives the shape, ``IdentityMatrix[n]`` the identity and ``Tr`` the trace. Use ``MatrixForm`` only for display: its result cannot be used in further computations.','و ``Dimensions`` تعطي الشكل، و ``IdentityMatrix[n]`` المحايدة، و ``Tr`` الأثر. واستخدم ``MatrixForm`` للعرض فقط لأن نتيجتها لا تصلح لحسابات لاحقة.'],
],[
  Q('What is the output of ``Dimensions[{{1, 2, 3}, {4, 5, 6}}]``?','ما مخرج ``Dimensions[{{1, 2, 3}, {4, 5, 6}}]``؟','$ {2, 3}',[['2 rows, 3 columns.','صفان وثلاثة أعمدة.']],['$ {3, 2}','$ 6','$ 2']),
  Q('What is the output of ``Tr[{{1, 2}, {3, 4}}]``?','ما مخرج ``Tr[{{1, 2}, {3, 4}}]``؟','$ 5',['1 + 4'],['$ 10','$ -2','$ {1, 4}']),
  Q('What is the output of ``{{1, 2}, {3, 4}} . {1, 1}``?','ما مخرج ``{{1, 2}, {3, 4}} . {1, 1}``؟','$ {3, 7}',['(1 + 2,   3 + 4)'],['$ {4, 6}','$ {{1, 2}, {3, 4}}','$ 10']),
  Q('Why does ``(MatrixForm[m]) . m`` not give a matrix product?','لماذا لا يعطي ``(MatrixForm[m]) . m`` ضرباً مصفوفياً؟',['MatrixForm wraps the matrix for display, so Dot does not see a list','MatrixForm تغلّف المصفوفة للعرض فلا ترى Dot قائمة'],[['Write ``m . m // MatrixForm`` instead.','واكتب بدلاً منه ``m . m // MatrixForm``.']],[['The dot needs ``*``','النقطة تحتاج ``*``'],['It does work','بل يعمل']]),
]);

lesson('504',19,[
  ['``Sum`` and ``Product`` take an iterator like Table. With symbolic limits or infinity they return closed forms:','``Sum`` و ``Product`` تأخذان مُكرِّراً مثل Table. ومع حدود رمزية أو لانهائية تعيدان صيغاً مغلقة:'],
  '$ Sum[k, {k, 1, 10}]                 (* 55 *)\nSum[1/2^k, {k, 0, Infinity}]        (* 2 *)\nSum[k^2, {k, 1, n}]                 (* 1/6 n (1 + n) (1 + 2 n) *)\nProduct[k, {k, 1, 5}]               (* 120 *)',
  ['For a long numerical sum it is faster to build a list and use ``Total``; for a slowly convergent infinite sum use ``NSum``.','ولمجموع عددي طويل الأسرع بناء قائمة واستخدام ``Total``، ولمجموع لانهائي بطيء التقارب استخدم ``NSum``.'],
],[
  Q('What is the output of ``Sum[1/k^2, {k, 1, Infinity}]``?','ما مخرج ``Sum[1/k^2, {k, 1, Infinity}]``؟','$ Pi^2/6',['Σ #f{1}{k^2} = #f{π^2}{6}'],['$ 1.64493','$ Infinity','$ Pi/6']),
  Q('What is the output of ``Sum[x^k/k!, {k, 0, Infinity}]``?','ما مخرج ``Sum[x^k/k!, {k, 0, Infinity}]``؟','$ E^x',[['The exponential series.','متسلسلة الأسية.']],['$ Exp[x] - 1','$ 1/(1 - x)','$ Infinity']),
  Q('What is the output of ``Product[2 k - 1, {k, 1, 4}]``?','ما مخرج ``Product[2 k - 1, {k, 1, 4}]``؟','$ 105',['1·3·5·7'],['$ 16','$ 24','$ 945']),
  Q('Compute `Σ_{j=0}^{3} (2j + 1)`.','احسب `Σ_{j=0}^{3} (2j + 1)`.','$ Sum[2 j + 1, {j, 0, 3}]   (* 16 *)',['1 + 3 + 5 + 7 = 16'],['$ Sum[2 j + 1, {j, 1, 3}]   (* 15 *)','$ Sum[2 j + 1, j, 0, 3]','$ Total[2 j + 1, {j, 0, 3}]']),
]);

lesson('504',20,[
  ['``Nest`` repeats a function, ``NestList`` keeps every step, ``Fold`` feeds the elements of a list one by one, and ``FixedPoint`` repeats until nothing changes:','``Nest`` تكرر دالة، و ``NestList`` تحفظ كل خطوة، و ``Fold`` تغذّي عناصر قائمة واحداً بعد آخر، و ``FixedPoint`` تكرر حتى لا يتغير شيء:'],
  '$ Nest[f, x, 3]                     (* f[f[f[x]]] *)\nNestList[2 # &, 1, 4]              (* {1, 2, 4, 8, 16} *)\nFold[f, x, {a, b}]                 (* f[f[x, a], b] *)\nFixedPoint[Cos, 1.]                (* 0.739085 *)',
  ['Iterations of a numerical method, such as Newton’s method, are written naturally with NestList; recurrences that consume coefficients, such as Horner’s scheme, with Fold.','وتكرارات الطرق العددية مثل طريقة نيوتن تُكتب طبيعياً بـ NestList، وعلاقات التكرار التي تستهلك معاملات مثل طريقة هورنر بـ Fold.'],
],[
  Q('What is the output of ``NestList[(# + 2/#)/2 &, 1., 3]``?','ما مخرج ``NestList[(# + 2/#)/2 &, 1., 3]``؟','$ {1., 1.5, 1.41667, 1.41422}',['#f{1 + 2}{2} = 1.5,   #f{1.5 + 1.3333}{2} = 1.41667',['Newton’s method for `#r{2}`.','طريقة نيوتن لـ `#r{2}`.']],['$ {1.5, 1.41667, 1.41422}','$ 1.41422','$ {1., 2., 4., 8.}']),
  Q('What is the output of ``FoldList[Plus, 0, {1, 2, 3}]``?','ما مخرج ``FoldList[Plus, 0, {1, 2, 3}]``؟','$ {0, 1, 3, 6}',[['Every intermediate result, starting from 0.','كل نتيجة وسيطة بدءاً من 0.']],['$ 6','$ {1, 3, 6}','$ {0, 1, 2, 3}']),
  Q('What is the output of ``Fold[#1 x + #2 &, 0, {1, 2, 3}]``?','ما مخرج ``Fold[#1 x + #2 &, 0, {1, 2, 3}]``؟','$ 3 + x (2 + x)',['0 → 1 → x + 2 → (x + 2)x + 3',['Horner’s scheme for `x^2 + 2x + 3`.','طريقة هورنر لـ `x^2 + 2x + 3`.']],['$ 1 + 2 x + 3 x^2','$ 6','$ x^2 + 2 x + 3 x']),
  Q('What is the output of ``Nest[#^2 &, 2, 3]``?','ما مخرج ``Nest[#^2 &, 2, 3]``؟','$ 256',['2 → 4 → 16 → 256'],['$ 8','$ 64','$ 16']),
]);

/* ---- 504 · Unit 3 (lessons 21–30): calculus;  Unit 4 (lessons 31–40): graphics ---- */
lesson('504',21,[
  ['``Limit[expr, x -> a]`` computes limits exactly, including limits at infinity. One-sided limits use the option ``Direction``:','``Limit[expr, x -> a]`` تحسب النهايات بالضبط بما فيها النهايات عند اللانهاية. والنهايات من جهة واحدة تستخدم الخيار ``Direction``:'],
  '$ Limit[Sin[x]/x, x -> 0]                       (* 1 *)\nLimit[(1 + 1/n)^n, n -> Infinity]              (* E *)\nLimit[1/x, x -> 0, Direction -> "FromAbove"]   (* Infinity *)',
  ['``"FromAbove"`` means x > a (from the right) and ``"FromBelow"`` means x < a. If the two one-sided limits differ, the two-sided limit is reported as ``Indeterminate``.','و ``"FromAbove"`` تعني x > a (من اليمين) و ``"FromBelow"`` تعني x < a. وإذا اختلفت النهايتان من الجهتين أُعلنت النهاية ``Indeterminate``.'],
],[
  Q('What is the output of ``Limit[(x^2 - 1)/(x - 1), x -> 1]``?','ما مخرج ``Limit[(x^2 - 1)/(x - 1), x -> 1]``؟','$ 2',['#f{x^2 − 1}{x − 1} = x + 1 → 2'],['$ 0','$ Indeterminate','$ 1']),
  Q('What is the output of ``Limit[x Log[x], x -> 0]``?','ما مخرج ``Limit[x Log[x], x -> 0]``؟','$ 0',[['x tends to 0 faster than `log x` tends to −∞.','x تؤول إلى 0 أسرع من أيلولة `log x` إلى −∞.']],['$ -Infinity','$ 1','$ Indeterminate']),
  Q('What is the output of ``Limit[1/x, x -> 0, Direction -> "FromBelow"]``?','ما مخرج ``Limit[1/x, x -> 0, Direction -> "FromBelow"]``؟','$ -Infinity',[['x < 0, so `1/x` is large and negative.','x < 0 فتكون `1/x` كبيرة وسالبة.']],['$ Infinity','$ 0','$ Indeterminate']),
  Q('Write the limit `lim_{n→∞} Γ(n + 1/2)/(#r{n} Γ(n))`.','اكتب النهاية `lim_{n→∞} Γ(n + 1/2)/(#r{n} Γ(n))`.','$ Limit[Gamma[n + 1/2]/(Sqrt[n] Gamma[n]), n -> Infinity]   (* 1 *)',['#f{Γ(n + 1/2)}{Γ(n)} ~ n^{1/2}'],['$ Limit[Gamma[n + 1/2]/(Sqrt[n] Gamma[n]), n = Infinity]','$ limit(gamma(n + 1/2)/(sqrt(n) gamma(n)), n -> Infinity)','$ Limit[Gamma[n + 1/2]/(Sqrt[n] Gamma[n])]']),
]);

lesson('504',22,[
  ['``D[f, x]`` differentiates with respect to x, ``D[f, {x, k}]`` k times, and ``D[f, x, y]`` gives a mixed derivative. For a defined function the prime also works:','``D[f, x]`` تشتق بالنسبة إلى x، و ``D[f, {x, k}]`` k مرة، و ``D[f, x, y]`` تعطي مشتقة مختلطة. وللدالة المعرّفة تعمل الشرطة أيضاً:'],
  '$ D[x^3, x]               (* 3 x^2 *)\nD[Sin[x], {x, 2}]        (* -Sin[x] *)\nf[x_] := x^4;  f\'[x]      (* 4 x^3 *)',
  ['Symbols other than x are treated as constants. ``D`` knows the special functions of the course, for example the derivative of ``LegendreP[n, x]`` for symbolic n.','وتُعامل الرموز الأخرى غير x كثوابت. و ``D`` تعرف الدوال الخاصة في المقرر، فمثلاً مشتقة ``LegendreP[n, x]`` لـ n رمزي.'],
],[
  Q('What is the output of ``D[x^2 y, x, y]``?','ما مخرج ``D[x^2 y, x, y]``؟','$ 2 x',['∂_x(x^2 y) = 2xy,   ∂_y(2xy) = 2x'],['$ 2 x y','$ x^2','$ 2']),
  Q('What is the output of ``D[LegendreP[2, x], x]``?','ما مخرج ``D[LegendreP[2, x], x]``؟','$ 3 x',['#f{d}{dx}#f{3x^2 − 1}{2} = 3x'],['$ 6 x','$ 1/2 (3 x)','$ 3 x^2']),
  Q('What is the output of ``D[Exp[a x], {x, 3}]``?','ما مخرج ``D[Exp[a x], {x, 3}]``؟','$ a^3 E^(a x)',['(e^{ax})‴ = a^3 e^{ax}'],['$ 3 a E^(a x)','$ E^(a x)','$ a E^(3 a x)']),
  Q('What is the output of ``D[LegendreP[3, 2 t - 1], t]`` evaluated at t = 1?','ما مخرج ``D[LegendreP[3, 2 t - 1], t]`` عند t = 1؟','$ 12',['2P_3′(1) = 2·#f{3·4}{2}',['`P_n′(1) = n(n + 1)/2`, and the chain rule gives the factor 2.','`P_n′(1) = n(n + 1)/2` وقاعدة السلسلة تعطي العامل 2.']],['$ 6','$ 2','$ 24']),
]);

lesson('504',23,[
  ['``Integrate[f, x]`` gives an antiderivative (without + C) and ``Integrate[f, {x, a, b}]`` a definite integral, both exactly:','``Integrate[f, x]`` تعطي دالة أصلية (دون + C) و ``Integrate[f, {x, a, b}]`` تكاملاً محدداً، وكلاهما مضبوط:'],
  '$ Integrate[x^2, x]                              (* x^3/3 *)\nIntegrate[x^2, {x, 0, 1}]                       (* 1/3 *)\nIntegrate[LegendreP[2, x]^2, {x, -1, 1}]        (* 2/5 *)\nIntegrate[Exp[-x^2], {x, -Infinity, Infinity}]  (* Sqrt[Pi] *)',
  ['Exact integration can be slow or fail for complicated integrands; then it returns the integral unevaluated, and ``NIntegrate`` (next lesson) is the tool.','والتكامل المضبوط قد يكون بطيئاً أو يفشل للدوال المعقدة، فيعيد التكامل دون حساب، وعندها ``NIntegrate`` (الدرس التالي) هي الأداة.'],
],[
  Q('What is the output of ``Integrate[t^(1/2), {t, 0, 1}]``?','ما مخرج ``Integrate[t^(1/2), {t, 0, 1}]``؟','$ 2/3',['∫_0^1 t^{1/2} dt = #f{1}{3/2}'],['$ 1/2','$ 3/2','$ 0.666667']),
  Q('What is the output of ``Integrate[1/x, x]``?','ما مخرج ``Integrate[1/x, x]``؟','$ Log[x]',[['Without the constant and without the absolute value.','دون الثابت ودون القيمة المطلقة.']],['$ Log[Abs[x]] + C','$ -1/x^2','$ 1/x']),
  Q('Write the norm `∫_{−1}^{1} P_3(x)^2 dx` and give its value.','اكتب المعيار `∫_{−1}^{1} P_3(x)^2 dx` وأعط قيمته.','$ Integrate[LegendreP[3, x]^2, {x, -1, 1}]   (* 2/7 *)',['#f{2}{2n + 1} = #f{2}{7}'],['$ Integrate[LegendreP[3, x]^2, x, -1, 1]   (* 2/7 *)','$ Integrate[LegendreP[3, x]^2, {x, -1, 1}]   (* 2/5 *)','$ Integral[LegendreP[3, x]^2, {x, -1, 1}]']),
  Q('What is the output of ``Integrate[(1 - x) x, {x, -1, 1}]``?','ما مخرج ``Integrate[(1 - x) x, {x, -1, 1}]``؟','$ -2/3',['∫(x − x^2) dx = 0 − #f{2}{3}',['The weighted mean of x for α = 1, β = 0 (Course 503).','المتوسط الموزون لـ x عند α = 1 و β = 0 (المقرر 503).']],['$ 2/3','$ 0','$ -1/3']),
]);

lesson('504',24,[
  ['``NIntegrate`` computes definite integrals numerically with adaptive rules. It handles integrable end singularities and infinite intervals:','``NIntegrate`` تحسب التكاملات المحددة عددياً بقواعد تكيفية، وتتعامل مع الانفرادات الطرفية القابلة للتكامل والمجالات اللانهائية:'],
  '$ NIntegrate[Exp[-x^2], {x, 0, 1}]      (* 0.746824 *)\nNIntegrate[1/Sqrt[x], {x, 0, 1}]       (* 2. *)\nNIntegrate[Exp[-x], {x, 0, Infinity}]  (* 1. *)',
  ['Options: ``WorkingPrecision -> 30`` computes with 30 digits, ``PrecisionGoal`` and ``AccuracyGoal`` set the target. A singular point inside the interval should be listed: ``{x, 0, 1/2, 1}``.','الخيارات: ``WorkingPrecision -> 30`` تحسب بـ 30 رقماً، و ``PrecisionGoal`` و ``AccuracyGoal`` تحددان الهدف. والنقطة الشاذة داخل المجال يجب ذكرها: ``{x, 0, 1/2, 1}``.'],
],[
  Q('What is the output of ``NIntegrate[Sin[x]/x, {x, 0, Pi}]``?','ما مخرج ``NIntegrate[Sin[x]/x, {x, 0, Pi}]``؟','$ 1.85194',['Si(π) = 1.851937…'],['$ 2.','$ 1.5708','$ 0.']),
  Q('Why does ``NIntegrate[1/Sqrt[x], {x, 0, 1}]`` work although the integrand is infinite at 0?','لماذا تعمل ``NIntegrate[1/Sqrt[x], {x, 0, 1}]`` مع أن الدالة لانهائية عند 0؟',['The singularity is integrable, and the adaptive rule never evaluates at the end point','الانفراد قابل للتكامل والقاعدة التكيفية لا تحسب عند الطرف أبداً'],['∫_0^1 x^{−1/2} dx = 2'],[['It does not work','لا تعمل'],['Because it uses exact arithmetic','لأنها تستخدم الحساب المضبوط']]),
  Q('Write `∫_0^1 |x − 1/2| dx` with the kink listed.','اكتب `∫_0^1 |x − 1/2| dx` مع ذكر نقطة الانكسار.','$ NIntegrate[Abs[x - 1/2], {x, 0, 1/2, 1}]   (* 0.25 *)',['2·#f{1}{2}·#f{1}{2}·#f{1}{2} = #f{1}{4}'],['$ NIntegrate[Abs[x - 1/2], {x, 0, 1}, 1/2]','$ NIntegrate[Abs[x - 1/2], {x, 1/2}]','$ Integrate[Abs[x - 1/2], {x, 0, 1/2, 1}]']),
  Q('Which option computes the integral with 25 digits?','أي خيار يحسب التكامل بـ 25 رقماً؟','$ WorkingPrecision -> 25',[['Machine numbers have about 16 digits.','أعداد الآلة نحو 16 رقماً.']],['$ Digits -> 25','$ N -> 25','$ Precision = 25']),
]);

lesson('504',25,[
  ['``Series[f, {x, a, n}]`` gives the Taylor (or Laurent, Puiseux) expansion to order n with an ``O`` term; ``Normal`` removes the O term:','``Series[f, {x, a, n}]`` تعطي مفكوك تايلور (أو لوران أو بوازو) حتى الرتبة n مع حد ``O``، و ``Normal`` تحذف حد O:'],
  '$ Series[Exp[x], {x, 0, 3}]         (* 1 + x + x^2/2 + x^3/6 + O[x]^4 *)\nNormal[Series[Exp[x], {x, 0, 3}]]  (* 1 + x + x^2/2 + x^3/6 *)\nSeriesCoefficient[1/(1 - x), {x, 0, 5}]   (* 1 *)',
  ['Series also expands special functions, for example `Γ(1 + x) = 1 − γx + …`, which appears in the small-μ behaviour of fractional operators.','و Series تنشر الدوال الخاصة أيضاً، مثل `Γ(1 + x) = 1 − γx + …` التي تظهر في سلوك المؤثرات الكسرية عند μ صغيرة.'],
],[
  Q('What is the output of ``Series[Sin[x]/x, {x, 0, 4}]``?','ما مخرج ``Series[Sin[x]/x, {x, 0, 4}]``؟','$ 1 - x^2/6 + x^4/120 + O[x]^5',['#f{sin x}{x} = 1 − #f{x^2}{3!} + #f{x^4}{5!} − …'],['$ x - x^3/6 + O[x]^5','$ 1 - x^2/2 + x^4/24 + O[x]^5','$ 1 + O[x]^5']),
  Q('What is the output of ``Series[Gamma[1 + x], {x, 0, 1}]``?','ما مخرج ``Series[Gamma[1 + x], {x, 0, 1}]``؟','$ 1 - EulerGamma x + O[x]^2',['Γ′(1) = −γ'],['$ 1 + x + O[x]^2','$ 1 + EulerGamma x + O[x]^2','$ 1 + O[x]^2']),
  Q('What is the output of ``SeriesCoefficient[Exp[2 x], {x, 0, 3}]``?','ما مخرج ``SeriesCoefficient[Exp[2 x], {x, 0, 3}]``؟','$ 4/3',['#f{2^3}{3!} = #f{8}{6}'],['$ 8','$ 1/6','$ 2/3']),
  Q('Why is ``Normal`` needed before plotting a series?','لماذا نحتاج ``Normal`` قبل رسم متسلسلة؟',['The ``O`` term makes it a SeriesData object, not an ordinary expression','حد ``O`` يجعلها كائن SeriesData لا مقداراً عادياً'],[['``Normal`` turns it into a polynomial.','``Normal`` تحولها إلى كثيرة حدود.']],[['To make it exact','لجعلها مضبوطة'],['It is not needed','لا حاجة إليها']]),
]);

lesson('504',26,[
  ['Many results hold only for some parameter values. Give assumptions to Simplify, Refine and Integrate:','كثير من النتائج تصح لبعض قيم الوسائط فقط. أعطِ الافتراضات لـ Simplify و Refine و Integrate:'],
  '$ Refine[Sqrt[x^2], x > 0]                              (* x *)\nIntegrate[x^n, {x, 0, 1}, Assumptions -> n > -1]       (* 1/(1 + n) *)\nRefine[Sin[n Pi], Element[n, Integers]]                (* 0 *)',
  ['Without assumptions Integrate returns a ``ConditionalExpression`` that states the condition. ``Assuming[cond, expr]`` applies the condition to every command inside expr.','ودون افتراضات تعيد Integrate الكائن ``ConditionalExpression`` الذي يذكر الشرط. و ``Assuming[cond, expr]`` تطبّق الشرط على كل أمر داخل expr.'],
],[
  Q('What is the output of ``Integrate[x^n, {x, 0, 1}]`` with no assumption?','ما مخرج ``Integrate[x^n, {x, 0, 1}]`` دون افتراض؟','$ ConditionalExpression[1/(1 + n), Re[n] > -1]',[['The integral converges only for Re n > −1.','التكامل يتقارب فقط عندما Re n > −1.']],['$ 1/(1 + n)','$ Infinity','$ x^(n + 1)/(n + 1)']),
  Q('What is the output of ``Simplify[Abs[x], x < 0]``?','ما مخرج ``Simplify[Abs[x], x < 0]``؟','$ -x',['|x| = −x  (x < 0)'],['$ x','$ Abs[x]','$ 0']),
  Q('What is the output of ``Refine[Cos[n Pi], Element[n, Integers]]``?','ما مخرج ``Refine[Cos[n Pi], Element[n, Integers]]``؟','$ (-1)^n',['cos(nπ) = (−1)^n'],['$ 1','$ 0','$ Cos[n Pi]']),
  Q('Compute `∫_0^1 t^{μ}(1 − t) dt` for 0 < μ < 1.','احسب `∫_0^1 t^{μ}(1 − t) dt` عندما 0 < μ < 1.','$ Integrate[t^mu (1 - t), {t, 0, 1}, Assumptions -> 0 < mu < 1]',['B(μ + 1, 2) = #f{1}{(μ + 1)(μ + 2)}'],['$ Integrate[t^mu (1 - t), {t, 0, 1}, 0 < mu < 1]','$ Integrate[t^mu (1 - t), {t, 0, 1}] /. 0 < mu < 1','$ Refine[t^mu (1 - t), 0 < mu < 1]']),
]);

lesson('504',27,[
  ['The special functions of fractional calculus are built in:','الدوال الخاصة في التفاضل الكسري جاهزة:'],
  '$ Gamma[5]                 (* 24 *)\nGamma[1/2]               (* Sqrt[Pi] *)\nBeta[2, 3]               (* 1/12 *)\nN[MittagLefflerE[1, 2]]  (* 7.38906 *)',
  ['``Gamma[z]`` is `Γ(z)`, ``Beta[p, q]`` is `B(p, q) = Γ(p)Γ(q)/Γ(p + q)`, and ``MittagLefflerE[a, z]`` (or ``MittagLefflerE[a, b, z]``) is `E_a(z)`, with `E_1(z) = e^z`. ``Pochhammer[a, n]`` is `(a)_n = Γ(a + n)/Γ(a)`.','و ``Gamma[z]`` هي `Γ(z)`، و ``Beta[p, q]`` هي `B(p, q) = Γ(p)Γ(q)/Γ(p + q)`، و ``MittagLefflerE[a, z]`` (أو ``MittagLefflerE[a, b, z]``) هي `E_a(z)` مع `E_1(z) = e^z`. و ``Pochhammer[a, n]`` هي `(a)_n = Γ(a + n)/Γ(a)`.'],
],[
  Q('What is the output of ``Gamma[5/2]``?','ما مخرج ``Gamma[5/2]``؟','$ (3 Sqrt[Pi])/4',['Γ(#f{5}{2}) = #f{3}{2}·#f{1}{2}#r{π}'],['$ 3/4','$ Sqrt[Pi]/2','$ 1.32934 Pi']),
  Q('What is the output of ``N[MittagLefflerE[1/2, -1]]``?','ما مخرج ``N[MittagLefflerE[1/2, -1]]``؟','$ 0.427584',['E_{1/2}(−1) = e·erfc(1)'],['$ 0.367879','$ 2.71828','$ 0.5']),
  Q('What is the output of ``Pochhammer[1/2, 2]``?','ما مخرج ``Pochhammer[1/2, 2]``؟','$ 3/4',['#f{1}{2}·#f{3}{2}'],['$ 1/4','$ 1','$ 3/2']),
  Q('Write `Γ(k + 1)/Γ(k + 1 − μ)` for k = 1, μ = 1/2 and give its value.','اكتب `Γ(k + 1)/Γ(k + 1 − μ)` عند k = 1 و μ = 1/2 وأعط قيمته.','$ Gamma[2]/Gamma[3/2]   (* 2/Sqrt[Pi] *)',['#f{1}{#r{π}/2}'],['$ Gamma[2]/Gamma[1/2]   (* 1/Sqrt[Pi] *)','$ Gamma[1]/Gamma[3/2]','$ Beta[2, 3/2]']),
]);

lesson('504',28,[
  ['The classical orthogonal polynomials are built in and return explicit polynomials for numeric n:','كثيرات الحدود المتعامدة الكلاسيكية جاهزة وتعيد كثيرات حدود صريحة عندما يكون n عددياً:'],
  '$ LegendreP[3, x]       (* 1/2 (-3 x + 5 x^3) *)\nChebyshevT[3, x]       (* -3 x + 4 x^3 *)\nJacobiP[1, 1, 0, x]    (* 1/2 (1 + 3 x) *)\nLaguerreL[2, x]        (* 1/2 (2 - 4 x + x^2) *)',
  ['The argument order of ``JacobiP[n, a, b, x]`` is n, α, β, x. For the shifted versions substitute `2t − 1`; for the fractional versions substitute `2t^{λ} − 1`.','وترتيب متغيرات ``JacobiP[n, a, b, x]`` هو n ثم α ثم β ثم x. وللصيغ المزاحة عوّض `2t − 1`، وللصيغ الكسرية عوّض `2t^{λ} − 1`.'],
],[
  Q('What is the output of ``HermiteH[2, x]``?','ما مخرج ``HermiteH[2, x]``؟','$ -2 + 4 x^2',['H_2(x) = 4x^2 − 2'],['$ x^2 - 1','$ 4 x^2','$ 2 - 4 x^2']),
  Q('What is the output of ``Expand[LegendreP[2, 2 t - 1]]``?','ما مخرج ``Expand[LegendreP[2, 2 t - 1]]``؟','$ 1 - 6 t + 6 t^2',['P_2^*(t) = 6t^2 − 6t + 1'],['$ -1 + 6 t^2','$ 1 + 6 t + 6 t^2','$ 3 t^2 - 1']),
  Q('What is the output of ``Simplify[JacobiP[3, 0, 0, x] - LegendreP[3, x]]``?','ما مخرج ``Simplify[JacobiP[3, 0, 0, x] - LegendreP[3, x]]``؟','$ 0',['P_n^{(0,0)} = P_n'],['$ x^3','$ 1/2','$ JacobiP[3, 0, 0, x]']),
  Q('Write the fractional Legendre function `L_2^{λ}(t) = P_2(2t^{λ} − 1)` with λ = 1/2.','اكتب دالة ليجندر الكسرية `L_2^{λ}(t) = P_2(2t^{λ} − 1)` مع λ = 1/2.','$ LegendreP[2, 2 Sqrt[t] - 1]',[['Expanded: `1 − 6#r{t} + 6t`.','بعد النشر: `1 − 6#r{t} + 6t`.']],['$ LegendreP[2, 2 t - 1]^(1/2)','$ LegendreP[2, Sqrt[2 t - 1]]','$ LegendreP[1/2, 2 t - 1]']),
]);

lesson('504',29,[
  ['Orthogonality is checked by computing a table of inner products. The result should be a diagonal matrix with the norms on the diagonal:','يُتحقق من التعامد بحساب جدول الضروب الداخلية، ويجب أن تكون النتيجة مصفوفة قطرية والمعايير على قطرها:'],
  '$ Table[Integrate[LegendreP[m, x] LegendreP[n, x], {x, -1, 1}],\n  {m, 0, 2}, {n, 0, 2}]\n(* {{2, 0, 0}, {0, 2/3, 0}, {0, 0, 2/5}} *)',
  ['For other families include the weight in the integrand, and for shifted or fractional families change the interval and the weight together.','وللعائلات الأخرى أدخل الوزن في التكامل، وللعائلات المزاحة أو الكسرية غيّر المجال والوزن معاً.'],
],[
  Q('What is the output of ``Integrate[ChebyshevT[1, x]^2/Sqrt[1 - x^2], {x, -1, 1}]``?','ما مخرج ``Integrate[ChebyshevT[1, x]^2/Sqrt[1 - x^2], {x, -1, 1}]``؟','$ Pi/2',['∫ #f{x^2}{#r{1 − x^2}} dx = #f{π}{2}'],['$ Pi','$ 2/3','$ 0']),
  Q('What is the output of ``Integrate[LegendreP[1, 2 t - 1]^2, {t, 0, 1}]``?','ما مخرج ``Integrate[LegendreP[1, 2 t - 1]^2, {t, 0, 1}]``؟','$ 1/3',['#f{1}{2n + 1}'],['$ 2/3','$ 1','$ 1/2']),
  Q('Which integral checks that `P_0^{(1,0)}` and `P_1^{(1,0)}` are orthogonal?','أي تكامل يتحقق من تعامد `P_0^{(1,0)}` و `P_1^{(1,0)}`؟','$ Integrate[(1 - x) JacobiP[0, 1, 0, x] JacobiP[1, 1, 0, x], {x, -1, 1}]',[['The weight `(1 − x)^1 (1 + x)^0` must be in the integrand; the result is 0.','الوزن `(1 − x)^1 (1 + x)^0` يجب أن يكون في التكامل، والنتيجة 0.']],['$ Integrate[JacobiP[0, 1, 0, x] JacobiP[1, 1, 0, x], {x, -1, 1}]','$ Integrate[(1 + x) JacobiP[0, 1, 0, x] JacobiP[1, 1, 0, x], {x, -1, 1}]','$ Integrate[(1 - x) JacobiP[1, 1, 0, x], {x, 0, 1}]']),
  Q('Check the orthogonality of `L_0^{λ}` and `L_1^{λ}` with weight `λt^{λ−1}` for λ = 1/2.','تحقق من تعامد `L_0^{λ}` و `L_1^{λ}` بالوزن `λt^{λ−1}` عند λ = 1/2.','$ Integrate[(1/2) t^(-1/2) LegendreP[1, 2 Sqrt[t] - 1], {t, 0, 1}]   (* 0 *)',['s = #r{t}:   ∫_0^1 (2s − 1) ds = 0'],['$ Integrate[LegendreP[1, 2 Sqrt[t] - 1], {t, 0, 1}]   (* 0 *)','$ Integrate[(1/2) t^(1/2) LegendreP[1, 2 Sqrt[t] - 1], {t, 0, 1}]','$ Integrate[(1/2) t^(-1/2) LegendreP[1, 2 t - 1], {t, -1, 1}]']),
]);

lesson('504',30,[
  ['A reliable way to check an identity: (1) write both sides as expressions; (2) for numeric n compute ``Expand[lhs - rhs]`` in a Table; (3) for symbolic parameters try ``FullSimplify`` with assumptions; (4) always add a numerical spot check at random points.','طريقة موثوقة للتحقق من متطابقة: (1) اكتب الطرفين مقدارين، (2) لـ n عددي احسب ``Expand[lhs - rhs]`` في Table، (3) للوسائط الرمزية جرّب ``FullSimplify`` مع الافتراضات، (4) أضف دائماً فحصاً عددياً عند نقاط عشوائية.'],
  '$ Table[Expand[(n + 1) LegendreP[n + 1, x] - (2 n + 1) x LegendreP[n, x]\n    + n LegendreP[n - 1, x]], {n, 1, 5}]\n(* {0, 0, 0, 0, 0} *)',
  ['A numerical check gives a tiny number such as `10^{−16}` instead of 0; compare with a tolerance, not with ``==``.','والفحص العددي يعطي عدداً صغيراً جداً مثل `10^{−16}` بدل 0، فقارن بسماحية لا بـ ``==``.'],
],[
  Q('Why is ``Expand`` needed in the table?','لماذا نحتاج ``Expand`` في الجدول؟',['Without it the difference stays as an unexpanded sum of products and is not shown as 0','دونها يبقى الفرق مجموع ضروب غير منشور ولا يظهر صفراً'],[['Mathematica does not expand products automatically.','لا ينشر Mathematica الضروب تلقائياً.']],[['To make the computation exact','لجعل الحساب مضبوطاً'],['It is not needed','لا حاجة إليها']]),
  Q('Write a numerical spot check of Bonnet’s formula for n = 7 at a random point.','اكتب فحصاً عددياً لصيغة بونيه عند n = 7 في نقطة عشوائية.','$ 8 LegendreP[8, x] - 15 x LegendreP[7, x] + 7 LegendreP[6, x] /. x -> RandomReal[{-1, 1}]',['(n + 1) = 8,   2n + 1 = 15,   n = 7'],['$ 7 LegendreP[8, x] - 15 x LegendreP[7, x] + 7 LegendreP[6, x] /. x -> RandomReal[]','$ 8 LegendreP[8, x] - 15 x LegendreP[7, x] + 7 LegendreP[6, x] == 0','$ 8 LegendreP[8, x] - 14 x LegendreP[7, x] + 7 LegendreP[6, x] /. x -> RandomReal[{-1, 1}]']),
  Q('The spot check gives ``1.11022*10^-16``. Is the identity wrong?','الفحص العددي يعطي ``1.11022*10^-16``. هل المتطابقة خاطئة؟',['No: this is rounding error of machine numbers','لا: هذا خطأ تقريب لأعداد الآلة'],[['About one unit in the 16th digit.','قرابة وحدة في الرقم السادس عشر.']],[['Yes','نعم'],['Only for n = 7','فقط عند n = 7']]),
  Q('Check `P_n′(1) = n(n + 1)/2` for n = 1, …, 6.','تحقق من `P_n′(1) = n(n + 1)/2` عند n = 1, …, 6.','$ Table[(D[LegendreP[n, x], x] /. x -> 1) - n (n + 1)/2, {n, 1, 6}]',[['The result should be a list of six zeros.','يجب أن تكون النتيجة قائمة من ستة أصفار.']],['$ Table[D[LegendreP[n, 1], x] - n (n + 1)/2, {n, 1, 6}]','$ Table[LegendreP\'[n, 1] == n (n + 1)/2, n, 1, 6]','$ Sum[(D[LegendreP[n, x], x] /. x -> 1) - n (n + 1)/2, {n, 1, 6}]']),
]);

lesson('504',31,[
  ['``Plot[f, {x, a, b}]`` draws a function. Options are written as rules after the iterator:','``Plot[f, {x, a, b}]`` ترسم دالة، والخيارات تُكتب قواعد بعد المُكرِّر:'],
  '$ Plot[LegendreP[4, x], {x, -1, 1},\n  PlotRange -> {-1, 1}, AxesLabel -> {"x", "P4"},\n  PlotLabel -> "Legendre P4", Frame -> True]',
  ['Useful options: ``PlotRange`` (the visible y range, or ``All``), ``AxesLabel`` or ``FrameLabel``, ``PlotStyle`` (colour, thickness, dashing), ``PlotPoints`` and ``MaxRecursion`` (sampling), ``ImageSize``.','خيارات مفيدة: ``PlotRange`` (مدى y الظاهر أو ``All``)، و ``AxesLabel`` أو ``FrameLabel``، و ``PlotStyle`` (اللون والسمك والتقطيع)، و ``PlotPoints`` و ``MaxRecursion`` (أخذ العينات)، و ``ImageSize``.'],
],[
  Q('Which option makes the whole curve visible when Plot cuts off its peaks?','أي خيار يُظهر المنحنى كله حين تقطع Plot قممه؟','$ PlotRange -> All',[['By default Plot may clip extreme values.','افتراضياً قد تقص Plot القيم المتطرفة.']],['$ PlotRange -> Full','$ AxesLabel -> All','$ ImageSize -> All']),
  Q('Which option draws a thick red curve?','أي خيار يرسم منحنى أحمر سميكاً؟','$ PlotStyle -> {Red, Thick}',[['Directives are combined in a list.','التوجيهات تُجمع في قائمة.']],['$ Color -> Red','$ PlotStyle = Red + Thick','$ Style -> {Red, Thick}']),
  Q('Why does ``Plot[f[x], {x, 0, 1}]`` show an empty frame?','لماذا تُظهر ``Plot[f[x], {x, 0, 1}]`` إطاراً فارغاً؟',['f has no definition, so the values are not numbers','f غير معرّفة فالقيم ليست أعداداً'],[['Plot draws only points where the expression evaluates to a real number.','Plot ترسم فقط النقاط التي يصبح فيها المقدار عدداً حقيقياً.']],[['The interval is too small','المجال صغير جداً'],['Plot needs ``N``','Plot تحتاج ``N``']]),
  Q('Which option labels the axes of a framed plot?','أي خيار يسمّي محاور رسم بإطار؟','$ FrameLabel -> {"t", "error"}',[['With ``Frame -> True`` the labels go on the frame.','مع ``Frame -> True`` توضع التسميات على الإطار.']],['$ AxesLabel -> Frame','$ Label -> {"t", "error"}','$ PlotLabel -> {"t", "error"}']),
]);

lesson('504',32,[
  ['A list of functions gives several curves. ``PlotLegends`` adds a legend and ``PlotStyle`` can give each curve its own style:','قائمة دوال تعطي عدة منحنيات. و ``PlotLegends`` تضيف مفتاحاً و ``PlotStyle`` تعطي كل منحنى نمطه:'],
  '$ Plot[Evaluate[Table[LegendreP[n, x], {n, 0, 4}]], {x, -1, 1},\n  PlotLegends -> "Expressions"]\nPlot[{Sin[x], Cos[x]}, {x, 0, 2 Pi}, PlotStyle -> {Blue, Dashed}]',
  ['``Evaluate`` makes Plot build the list first, so it knows that there are five separate curves and colours them differently.','و ``Evaluate`` تجعل Plot تبني القائمة أولاً فتعرف أن هناك خمسة منحنيات منفصلة وتلونها بألوان مختلفة.'],
],[
  Q('How many curves does the first input draw?','كم منحنى يرسم المدخل الأول؟','5',['n = 0, 1, 2, 3, 4'],['4','1','6']),
  Q('What happens without ``Evaluate`` around the Table?','ماذا يحدث دون ``Evaluate`` حول Table؟',['The curves are drawn but may all get the same colour, because Plot does not see a list in advance','تُرسم المنحنيات لكن قد تأخذ كلها اللون نفسه لأن Plot لا ترى القائمة مسبقاً'],[['Plot holds its first argument unevaluated.','Plot تبقي متغيرها الأول دون حساب.']],[['Nothing is drawn','لا يُرسم شيء'],['An error message','رسالة خطأ']]),
  Q('Which legend option shows the formulas themselves?','أي خيار للمفتاح يعرض الصيغ نفسها؟','$ PlotLegends -> "Expressions"',[['Or give your own names: ``PlotLegends -> {"P0", "P1"}``.','أو أعطِ أسماءك: ``PlotLegends -> {"P0", "P1"}``.']],['$ PlotLegends -> True','$ Legend -> "Formulas"','$ PlotLabel -> "Expressions"']),
  Q('Plot the exact solution `e^{−t}` and the approximation `1 − 2t/3` together on [0, 1].','ارسم الحل المضبوط `e^{−t}` والتقريب `1 − 2t/3` معاً على [0, 1].','$ Plot[{Exp[-t], 1 - 2 t/3}, {t, 0, 1}]',[['A list of two expressions.','قائمة من مقدارين.']],['$ Plot[Exp[-t], 1 - 2 t/3, {t, 0, 1}]','$ Plot[Exp[-t] + 1 - 2 t/3, {t, 0, 1}]','$ Plot[{Exp[-t], 1 - 2 t/3}, t, 0, 1]']),
]);

lesson('504',33,[
  ['``ListPlot`` draws data points and ``ListLinePlot`` joins them. A plain list is plotted against 1, 2, 3, …; a list of pairs gives the coordinates:','``ListPlot`` ترسم نقاط البيانات و ``ListLinePlot`` تصلها. والقائمة البسيطة تُرسم مقابل 1, 2, 3, …، وقائمة الأزواج تعطي الإحداثيات:'],
  '$ ListPlot[{1, 4, 9, 16}]\nListLinePlot[{{0, 1}, {0.5, 0.6}, {1, 0.37}}]\nListPlot[data, Joined -> True, PlotMarkers -> Automatic]',
  ['To compare data with an exact curve use ``Show[Plot[…], ListPlot[…]]`` (Lesson 37).','ولمقارنة البيانات بمنحنى مضبوط استخدم ``Show[Plot[…], ListPlot[…]]`` (الدرس 37).'],
],[
  Q('At which x values does ``ListPlot[{5, 7, 9}]`` put its points?','عند أي قيم x تضع ``ListPlot[{5, 7, 9}]`` نقاطها؟','$ 1, 2, 3',[['A plain list is plotted against its positions.','القائمة البسيطة تُرسم مقابل مواضعها.']],['$ 5, 7, 9','$ 0, 1, 2','$ 0, 0.5, 1']),
  Q('Build the pairs `(x_i, f(x_i))` for nodes ``x`` and a function ``f``.','ابنِ الأزواج `(x_i, f(x_i))` للعقد ``x`` والدالة ``f``.','$ Transpose[{x, f /@ x}]',[['Or ``{#, f[#]} & /@ x``.','أو ``{#, f[#]} & /@ x``.']],['$ {x, f /@ x}','$ Join[x, f /@ x]','$ Table[x, f[x]]']),
  Q('Which option joins the points of ListPlot with lines?','أي خيار يصل نقاط ListPlot بخطوط؟','$ Joined -> True',[['``ListLinePlot`` does the same by default.','``ListLinePlot`` تفعل الشيء نفسه افتراضياً.']],['$ Lines -> True','$ PlotStyle -> Joined','$ Connect -> All']),
  Q('What does ``ListPlot[Table[{k, LegendreP[3, k/4]}, {k, -4, 4}]]`` show?','ماذا تعرض ``ListPlot[Table[{k, LegendreP[3, k/4]}, {k, -4, 4}]]``؟',['Nine points of `P_3(k/4)`, plotted against k from −4 to 4','تسع نقاط من `P_3(k/4)` مرسومة مقابل k من −4 إلى 4'],[['The x coordinate is k, not k/4.','الإحداثي x هو k لا k/4.']],[['A continuous curve','منحنى متصل'],['Four points','أربع نقاط']]),
]);

lesson('504',34,[
  ['Errors are shown on logarithmic scales. ``ListLogPlot`` uses a logarithmic y axis, ``ListLogLogPlot`` logarithmic axes in both directions:','تُعرض الأخطاء على مقاييس لوغاريتمية. ``ListLogPlot`` تستخدم محور y لوغاريتمياً، و ``ListLogLogPlot`` محورين لوغاريتميين:'],
  '$ errs = {{4, 1.2*^-3}, {8, 1.1*^-6}, {12, 1.3*^-9}, {16, 1.2*^-12}};\nListLogPlot[errs, Joined -> True]',
  ['A spectral rate `e_N ~ ρ^{−N}` is a straight line on ``ListLogPlot``; an algebraic rate `e_N ~ N^{−p}` is a straight line of slope −p on ``ListLogLogPlot``. ``1.2*^-3`` is Mathematica’s notation for `1.2 × 10^{−3}`.','المعدل الطيفي `e_N ~ ρ^{−N}` خط مستقيم في ``ListLogPlot``، والمعدل الجبري `e_N ~ N^{−p}` خط مستقيم ميله −p في ``ListLogLogPlot``. و ``1.2*^-3`` طريقة Mathematica لكتابة `1.2 × 10^{−3}`.'],
],[
  Q('Which plot makes `e_N = N^{−4}` a straight line?','أي رسم يجعل `e_N = N^{−4}` خطاً مستقيماً؟','$ ListLogLogPlot',['log e_N = −4 log N'],['$ ListLogPlot','$ ListPlot','$ ListLinePlot']),
  Q('What is the slope of that line?','ما ميل ذلك الخط؟','−4',['log e = −4 log N'],['4','−#f{1}{4}','−1']),
  Q('How do you write `3 × 10^{−8}` in Mathematica input?','كيف تكتب `3 × 10^{−8}` في مدخل Mathematica؟','$ 3*^-8',[['Or ``3 10^-8``, which is exact.','أو ``3 10^-8`` وهي مضبوطة.']],['$ 3e-8','$ 3E-8','$ 3^-8']),
  Q('In the data above the error falls by about `10^{−3}` every 4 steps of N. What is ρ?','في البيانات أعلاه يصغر الخطأ بعامل `10^{−3}` تقريباً كل 4 خطوات في N. ما ρ؟','≈ 5.6',['ρ^4 ≈ 10^3  ⇒  ρ ≈ 10^{0.75}'],['≈ 1000','≈ 3','≈ 10']),
]);

lesson('504',35,[
  ['Functions of two variables:','دوال المتغيرين:'],
  '$ Plot3D[Sin[Pi x] Exp[-y], {x, 0, 1}, {y, 0, 1}]\nContourPlot[x^2 + y^2, {x, -1, 1}, {y, -1, 1}]\nDensityPlot[Sin[Pi x] Sin[Pi y], {x, 0, 1}, {y, 0, 1}]',
  ['With an equation, ``ContourPlot[f == g, …]`` draws the curve where the two sides are equal. These plots show solutions `u(x, t)` of the time-fractional equations of the programme.','ومع معادلة ترسم ``ContourPlot[f == g, …]`` المنحنى الذي يتساوى عنده الطرفان. وهذه الرسوم تعرض حلول `u(x, t)` للمعادلات الكسرية الزمنية في البرنامج.'],
],[
  Q('Which input draws the circle `x^2 + y^2 = 1`?','أي مدخل يرسم الدائرة `x^2 + y^2 = 1`؟','$ ContourPlot[x^2 + y^2 == 1, {x, -1, 1}, {y, -1, 1}]',[['An equation with ``==``.','معادلة بـ ``==``.']],['$ Plot[x^2 + y^2 == 1, {x, -1, 1}]','$ ContourPlot[x^2 + y^2 = 1, {x, -1, 1}, {y, -1, 1}]','$ Plot3D[x^2 + y^2 == 1, {x, -1, 1}, {y, -1, 1}]']),
  Q('How many iterators does Plot3D need?','كم مُكرِّراً تحتاج Plot3D؟','2',[['One for each horizontal variable.','واحد لكل متغير أفقي.']],['1','3','0']),
  Q('Plot `u(x, t) = t^{1/2} sin(πx)` on [0, 1] × [0, 1] as a surface.','ارسم `u(x, t) = t^{1/2} sin(πx)` على [0, 1] × [0, 1] سطحاً.','$ Plot3D[Sqrt[t] Sin[Pi x], {x, 0, 1}, {t, 0, 1}]',[['x and t are just the two variables.','x و t هما المتغيران فقط.']],['$ Plot[Sqrt[t] Sin[Pi x], {x, 0, 1}, {t, 0, 1}]','$ Plot3D[Sqrt[t] Sin[Pi x], {x, t, 0, 1}]','$ ContourPlot[Sqrt[t] Sin[Pi x] == 0, {x, 0, 1}]']),
  Q('What does ``DensityPlot`` show?','ماذا تعرض ``DensityPlot``؟',['The values as colours on the plane','القيم ألواناً على المستوى'],[['Light and dark regions instead of height.','مناطق فاتحة وداكنة بدل الارتفاع.']],[['A surface','سطحاً'],['Level curves only','منحنيات المستوى فقط']]),
]);

lesson('504',36,[
  ['A curve given by `(x(t), y(t))` is drawn with ``ParametricPlot``; a curve `r(θ)` with ``PolarPlot``:','المنحنى المعطى بـ `(x(t), y(t))` يُرسم بـ ``ParametricPlot``، والمنحنى `r(θ)` بـ ``PolarPlot``:'],
  '$ ParametricPlot[{Cos[t], Sin[t]}, {t, 0, 2 Pi}]     (* the unit circle *)\nPolarPlot[1 + Cos[t], {t, 0, 2 Pi}]                (* a cardioid *)\nParametricPlot3D[{Cos[t], Sin[t], t}, {t, 0, 4 Pi}]  (* a helix *)',
  ['Bézier curves (Course 502) are parametric plots of the Bernstein form `Σ b_i B_{i,n}(t)`.','ومنحنيات بيزييه (المقرر 502) رسوم وسيطية لصيغة بيرنشتاين `Σ b_i B_{i,n}(t)`.'],
],[
  Q('What does ``ParametricPlot[{Cos[t], 2 Sin[t]}, {t, 0, 2 Pi}]`` draw?','ماذا ترسم ``ParametricPlot[{Cos[t], 2 Sin[t]}, {t, 0, 2 Pi}]``؟',['An ellipse with semi-axes 1 (in x) and 2 (in y)','قطعاً ناقصاً نصفا محوريه 1 (في x) و 2 (في y)'],['x^2 + #f{y^2}{4} = 1'],[['A circle of radius 2','دائرة نصف قطرها 2'],['A line segment','قطعة مستقيمة']]),
  Q('Draw the quadratic Bézier curve with control points (0, 0), (1, 2), (2, 0).','ارسم منحنى بيزييه التربيعي بنقاط التحكم (0, 0) و (1, 2) و (2, 0).','$ ParametricPlot[(1 - t)^2 {0, 0} + 2 t (1 - t) {1, 2} + t^2 {2, 0}, {t, 0, 1}]',['B_{0,2} = (1 − t)^2,   B_{1,2} = 2t(1 − t),   B_{2,2} = t^2'],['$ Plot[(1 - t)^2 {0, 0} + 2 t (1 - t) {1, 2} + t^2 {2, 0}, {t, 0, 1}]','$ ParametricPlot[{0, 0} + {1, 2} + {2, 0}, {t, 0, 1}]','$ ListPlot[{{0, 0}, {1, 2}, {2, 0}}]']),
  Q('What is the largest r of the cardioid ``1 + Cos[t]``?','ما أكبر r للقلبية ``1 + Cos[t]``؟','2',['t = 0:   1 + 1'],['1','0','π']),
  Q('Which command draws a curve in space?','أي أمر يرسم منحنى في الفضاء؟','$ ParametricPlot3D',[['It takes a list of three coordinates.','يأخذ قائمة من ثلاثة إحداثيات.']],['$ Plot3D','$ ParametricPlot','$ ContourPlot3D']),
]);

lesson('504',37,[
  ['Graphics can be combined and arranged:','يمكن دمج الرسوم وترتيبها:'],
  '$ p1 = Plot[Exp[-t], {t, 0, 1}];\np2 = ListPlot[{{0, 1}, {0.5, 0.6}, {1, 0.37}}];\nShow[p1, p2]                 (* both in one picture *)\nGraphicsRow[{p1, p2}]        (* side by side *)\nGraphicsGrid[{{p1, p2}, {p2, p1}}]',
  ['``Show`` takes its options, such as ``PlotRange``, from the first graphic; give them explicitly in Show if the later graphics fall outside.','وتأخذ ``Show`` خياراتها مثل ``PlotRange`` من الرسم الأول، فأعطها صراحة في Show إذا خرجت الرسوم اللاحقة عنه.'],
],[
  Q('Which command overlays an exact curve and computed points?','أي أمر يركّب منحنى مضبوطاً ونقاطاً محسوبة؟','$ Show[Plot[...], ListPlot[...]]',[['Show puts graphics into one coordinate system.','Show تضع الرسوم في نظام إحداثيات واحد.']],['$ GraphicsRow[{Plot[...], ListPlot[...]}]','$ Plot[...] + ListPlot[...]','$ Join[Plot[...], ListPlot[...]]']),
  Q('Some points of p2 are not visible in ``Show[p1, p2]``. Why?','بعض نقاط p2 لا تظهر في ``Show[p1, p2]``. لماذا؟',['Show uses the PlotRange of p1','Show تستخدم PlotRange الخاص بـ p1'],[['Write ``Show[p1, p2, PlotRange -> All]``.','اكتب ``Show[p1, p2, PlotRange -> All]``.']],[['ListPlot cannot be combined','لا يمكن دمج ListPlot'],['The points are wrong','النقاط خاطئة']]),
  Q('How do you arrange four plots in a 2 × 2 array?','كيف ترتب أربعة رسوم في مصفوفة 2 × 2؟','$ GraphicsGrid[{{a, b}, {c, d}}]',[['A nested list: rows of graphics.','قائمة متداخلة: صفوف من الرسوم.']],['$ GraphicsRow[{a, b, c, d}]','$ Show[a, b, c, d]','$ Grid[a, b, c, d]']),
  Q('What does the semicolon after ``p1 = Plot[…];`` do?','ماذا تفعل الفاصلة المنقوطة بعد ``p1 = Plot[…];``؟',['It stores the plot without displaying it','تخزن الرسم دون عرضه'],[['It is displayed later by Show.','ويُعرض لاحقاً بـ Show.']],[['It deletes the plot','تحذف الرسم'],['Nothing','لا شيء']]),
]);

lesson('504',38,[
  ['``Manipulate`` turns any expression into an interactive figure with sliders:','``Manipulate`` تحول أي مقدار إلى شكل تفاعلي بمنزلقات:'],
  '$ Manipulate[Plot[LegendreP[n, x], {x, -1, 1}, PlotRange -> {-1, 1}],\n  {{n, 2}, 0, 8, 1}]\nManipulate[Plot[MittagLefflerE[a, -t^a], {t, 0, 5}], {a, 0.1, 1}]',
  ['``{{n, 2}, 0, 8, 1}`` means: start at 2, range 0 to 8, step 1. Fix ``PlotRange`` so the axes do not jump while the slider moves.','و ``{{n, 2}, 0, 8, 1}`` تعني: ابدأ بـ 2، والمدى من 0 إلى 8، والخطوة 1. وثبّت ``PlotRange`` حتى لا تقفز المحاور مع حركة المنزلق.'],
],[
  Q('How do you restrict the slider n to integers from 0 to 6?','كيف تقيّد المنزلق n بالأعداد الصحيحة من 0 إلى 6؟','$ {n, 0, 6, 1}',[['The fourth entry is the step.','العنصر الرابع هو الخطوة.']],['$ {n, 0, 6}','$ {n, Integers, 0, 6}','$ {n, 1, 6, 0}']),
  Q('What is the initial value in ``{{mu, 0.5}, 0.1, 0.9}``?','ما القيمة الابتدائية في ``{{mu, 0.5}, 0.1, 0.9}``؟','0.5',[['The inner pair is the name and its start value.','الزوج الداخلي هو الاسم وقيمته الابتدائية.']],['0.1','0.9','0']),
  Q('Why fix ``PlotRange`` inside Manipulate?','لماذا نثبت ``PlotRange`` داخل Manipulate؟',['So the scale stays the same while the parameter changes','حتى يبقى المقياس ثابتاً مع تغير الوسيط'],[['Otherwise each frame chooses its own range.','وإلا يختار كل إطار مداه.']],[['It is required','إلزامي'],['To make it faster','لتسريعه']]),
  Q('Which slider explores the order μ of `t^{μ}/Γ(μ + 1)` between 0.1 and 1?','أي منزلق يستكشف الرتبة μ في `t^{μ}/Γ(μ + 1)` بين 0.1 و 1؟','$ Manipulate[Plot[t^mu/Gamma[mu + 1], {t, 0, 1}], {mu, 0.1, 1}]',[['A continuous slider: no step.','منزلق متصل دون خطوة.']],['$ Manipulate[Plot[t^mu/Gamma[mu + 1], {t, 0, 1}], {mu, 0.1, 1, 1}]','$ Plot[t^mu/Gamma[mu + 1], {t, 0, 1}, {mu, 0.1, 1}]','$ Manipulate[t^mu/Gamma[mu + 1], {t, 0, 1}]']),
]);

lesson('504',39,[
  ['Results are presented as tables. ``Grid`` gives full control over the layout, ``TableForm`` a quick view:','تُعرض النتائج جداول. ``Grid`` تعطي تحكماً كاملاً في التخطيط، و ``TableForm`` عرضاً سريعاً:'],
  '$ Grid[{{"N", "error"}, {4, 1.2*^-3}, {8, 2.1*^-6}}, Frame -> All]\nTableForm[{{4, 1.2*^-3}, {8, 2.1*^-6}},\n  TableHeadings -> {None, {"N", "error"}}]',
  ['Numbers are formatted with ``ScientificForm[x, k]`` and ``NumberForm[x, k]``. Like MatrixForm, these wrappers are for display only.','وتُنسَّق الأعداد بـ ``ScientificForm[x, k]`` و ``NumberForm[x, k]``. ومثل MatrixForm فهذه الأغلفة للعرض فقط.'],
],[
  Q('What is the display of ``NumberForm[N[Pi], 4]``?','ما عرض ``NumberForm[N[Pi], 4]``؟','$ 3.142',[['Four significant digits.','أربعة أرقام معنوية.']],['$ 3.1416','$ 3.14','$ 3.1415']),
  Q('Which option draws all the lines of a Grid?','أي خيار يرسم كل خطوط Grid؟','$ Frame -> All',[['``Frame -> True`` draws only the outer border.','``Frame -> True`` ترسم الحدود الخارجية فقط.']],['$ Lines -> All','$ Borders -> True','$ Dividers -> None']),
  Q('Build the rows `{N, e_N}` for N = 4, 8, 12 from a function ``err[N]``.','ابنِ الصفوف `{N, e_N}` لـ N = 4, 8, 12 من دالة ``err[N]``.','$ Table[{n, err[n]}, {n, 4, 12, 4}]',[['Then put a header row in front and pass it to Grid.','ثم ضع صف العناوين في الأول ومررها إلى Grid.']],['$ Table[{n, err[n]}, {n, 4, 12}]','$ {Range[4, 12, 4], err}','$ Table[n, err[n], {n, 4, 12, 4}]']),
  Q('Why should ``ScientificForm`` not be used before a computation?','لماذا لا تُستخدم ``ScientificForm`` قبل الحساب؟',['It wraps the number for display, so later arithmetic does not work on it as a number','تغلّف العدد للعرض فلا يعمل الحساب اللاحق عليه كعدد'],[['Apply it only to the final table.','طبّقها على الجدول النهائي فقط.']],[['It rounds the number permanently','تقرّب العدد نهائياً'],['It is slow','بطيئة']]),
]);

lesson('504',40,[
  ['``Export`` writes figures and data to files; the format is taken from the extension. ``Import`` reads them back:','``Export`` تكتب الأشكال والبيانات في ملفات، والصيغة تؤخذ من الامتداد. و ``Import`` تقرؤها:'],
  '$ SetDirectory[NotebookDirectory[]];\nExport["fig.pdf", p1]\nExport["errors.csv", errs]\nImport["errors.csv"]      (* the list of rows *)',
  ['Vector formats (PDF, EPS, SVG) are best for papers; PNG for slides and the web. Setting the directory to the notebook’s folder keeps all files of a project together.','والصيغ المتجهية (PDF و EPS و SVG) أفضل للبحوث، و PNG للعروض والويب. وتعيين المجلد إلى مجلد الدفتر يبقي ملفات المشروع معاً.'],
],[
  Q('Export the graphic ``p`` as a PNG file.','صدّر الرسم ``p`` ملف PNG.','$ Export["fig.png", p]',[['The extension chooses the format.','الامتداد يختار الصيغة.']],['$ Export[p, "fig.png"]','$ Save["fig.png", p]','$ p >> "fig.png"']),
  Q('Where is a file saved if no directory is set?','أين يُحفظ الملف إذا لم يُعيَّن مجلد؟',['In the current directory given by ``Directory[]``','في المجلد الحالي الذي تعطيه ``Directory[]``'],[['Often the home directory, not the notebook’s folder.','وغالباً المجلد الرئيس لا مجلد الدفتر.']],[['Next to the notebook, always','بجانب الدفتر دائماً'],['Nowhere','لا يُحفظ']]),
  Q('Which format is best for a figure in a journal paper?','أي صيغة أفضل لشكل في بحث بمجلة؟','$ PDF',[['A vector format stays sharp at any size.','الصيغة المتجهية تبقى حادة بأي حجم.']],['$ JPG','$ GIF','$ BMP']),
  Q('What does ``Import["errors.csv"]`` return for a file with two columns and three rows?','ماذا تعيد ``Import["errors.csv"]`` لملف من عمودين وثلاثة صفوف؟',['A list of three rows, each a list of two entries','قائمة من ثلاثة صفوف كل منها قائمة من عنصرين'],[['A 3 × 2 nested list.','قائمة متداخلة 3 × 2.']],[['A single string','نصاً واحداً'],['A 2 × 3 list','قائمة 2 × 3']]),
]);

/* ---- 504 · Unit 5 (lessons 41–50): programming;  Unit 6 (lessons 51–60): linear algebra ---- */
lesson('504',41,[
  ['Patterns describe the shape of an expression. ``_`` matches any single expression, ``__`` one or more, ``x_h`` anything with head h, ``x_?test`` anything that passes a test and ``x_ /; cond`` anything that satisfies a condition:','الأنماط تصف شكل المقدار. ``_`` تطابق أي مقدار واحد، و ``__`` واحداً أو أكثر، و ``x_h`` أي شيء رأسه h، و ``x_?test`` أي شيء يجتاز اختباراً، و ``x_ /; cond`` أي شيء يحقق شرطاً:'],
  '$ MatchQ[3, _Integer]            (* True *)\nMatchQ[3.5, _Integer]          (* False *)\nCases[{1, -2, 3}, _?Negative]  (* {-2} *)\nx^2 /. x^n_ -> n               (* 2 *)',
  ['Patterns are the basis of function definitions: ``f[x_] := …`` is a rule for every expression that matches ``f[_]``.','والأنماط أساس تعريف الدوال: ``f[x_] := …`` قاعدة لكل مقدار يطابق ``f[_]``.'],
],[
  Q('What is the output of the last line?','ما مخرج السطر الأخير؟','$ 3',[['``x__`` matches the whole sequence a, b, c, and ``{x}`` makes a list of it.','``x__`` تطابق المتتالية a و b و c كلها، و ``{x}`` تجعلها قائمة.']],['$ 1','$ g[a, b, c]','$ {a, b, c}'],'g[x__] := Length[{x}]\ng[a, b, c]'),
  Q('What is the output of the last line?','ما مخرج السطر الأخير؟','$ h[2.5]',[['2.5 has head Real, so the Integer rule does not apply.','رأس 2.5 هو Real فلا تنطبق قاعدة Integer.']],['$ 6.25','$ 2.5','$ $Failed'],'h[n_Integer] := n^2\nh[2.5]'),
  Q('What is the output of ``Cases[{1, 2.5, -3, 4}, x_ /; x > 2]``?','ما مخرج ``Cases[{1, 2.5, -3, 4}, x_ /; x > 2]``؟','$ {2.5, 4}',[['The condition keeps the elements greater than 2.','الشرط يبقي العناصر الأكبر من 2.']],['$ {4}','$ {1, 2.5, 4}','$ {2.5, -3, 4}']),
  Q('Write a pattern for a positive integer n.','اكتب نمطاً لعدد صحيح موجب n.','$ n_Integer?Positive',[['Head Integer and the test Positive.','الرأس Integer والاختبار Positive.']],['$ n_Positive','$ n_Integer > 0','$ Integer[n_?Positive]']),
]);

lesson('504',42,[
  ['A function can have several definitions; Mathematica uses the most specific one that matches. This is how recurrences and special cases are written:','يمكن أن يكون للدالة عدة تعريفات، ويستخدم Mathematica أكثرها تحديداً مما يطابق. وهكذا تُكتب علاقات التكرار والحالات الخاصة:'],
  '$ fact[0] = 1;\nfact[n_Integer?Positive] := n fact[n - 1]\nfact[5]        (* 120 *)',
  ['``?fact`` lists all its definitions. An argument that matches no rule is returned unevaluated, which is safer than a wrong answer.','و ``?fact`` تعرض كل تعريفاتها. والمتغير الذي لا يطابق أي قاعدة يُعاد دون حساب، وهذا أسلم من جواب خاطئ.'],
],[
  Q('What is the output of ``fact[-1]``?','ما مخرج ``fact[-1]``؟','$ fact[-1]',[['−1 is neither 0 nor a positive integer, so no rule matches.','−1 ليس 0 ولا عدداً صحيحاً موجباً فلا قاعدة تطابق.']],['$ 1','$ 0','$ -1']),
  Q('What is the output of the last line?','ما مخرج السطر الأخير؟','$ sgn[0]',[['Neither condition holds at 0.','لا يتحقق أي من الشرطين عند 0.']],['$ 0','$ 1','$ -1'],'sgn[x_ /; x > 0] := 1;  sgn[x_ /; x < 0] := -1;\nsgn[0]'),
  Q('Why is ``fact[0] = 1`` written with ``=`` and the general rule with ``:=``?','لماذا يُكتب ``fact[0] = 1`` بـ ``=`` والقاعدة العامة بـ ``:=``؟',['The special value is a constant; the general rule must be evaluated anew for each n','القيمة الخاصة ثابت، والقاعدة العامة يجب أن تُحسب من جديد لكل n'],[['With ``=`` the right side would be evaluated once, with the symbol n.','ومع ``=`` يُحسب الطرف الأيمن مرة واحدة بالرمز n.']],[['There is no difference','لا فرق'],['``=`` is faster','``=`` أسرع']]),
  Q('Define `P_0 = 1`, `P_1 = x` as special rules of a function ``p[n, x]``.','عرّف `P_0 = 1` و `P_1 = x` قاعدتين خاصتين للدالة ``p[n, x]``.','$ p[0, x_] := 1;  p[1, x_] := x',[['The first argument is a literal number, the second a pattern.','المتغير الأول عدد حرفي والثاني نمط.']],['$ p[0, x] := 1;  p[1, x] := x','$ p[n_ = 0, x_] := 1','$ p[0_, x_] := 1;  p[1_, x_] := x']),
]);

lesson('504',43,[
  ['Choices:','الاختيارات:'],
  '$ If[x > 0, 1, -1]\nWhich[x < 0, -1, x == 0, 0, True, 1]\nSwitch[k, 1, "one", 2, "two", _, "other"]\nPiecewise[{{x^2, x < 0}, {x, x >= 0}}]',
  ['``If`` needs a condition that evaluates to True or False; with a symbolic x it stays unevaluated. For mathematical functions defined by cases prefer ``Piecewise``: it can be differentiated, integrated and plotted.','``If`` تحتاج شرطاً يصبح True أو False، ومع x رمزية تبقى دون حساب. وللدوال الرياضية المعرّفة بحالات فضّل ``Piecewise`` لأنها تُشتق وتُكامل وتُرسم.'],
],[
  Q('What is the output of ``If[x > 0, 1, -1]`` when x has no value?','ما مخرج ``If[x > 0, 1, -1]`` حين لا قيمة لـ x؟','$ If[x > 0, 1, -1]',[['`x > 0` cannot be decided, so If waits.','`x > 0` لا يمكن الحكم عليه فتنتظر If.']],['$ 1','$ -1','$ False']),
  Q('What is the output of ``Integrate[Piecewise[{{1, x < 1/2}}, 0], {x, 0, 1}]``?','ما مخرج ``Integrate[Piecewise[{{1, x < 1/2}}, 0], {x, 0, 1}]``؟','$ 1/2',[['The function is 1 on [0, 1/2) and 0 after.','الدالة 1 على [0, 1/2) و 0 بعدها.']],['$ 1','$ 0','$ Piecewise[...]']),
  Q('What is the output of ``Switch[2, 1, "a", 2, "b", _, "c"]``?','ما مخرج ``Switch[2, 1, "a", 2, "b", _, "c"]``؟','$ b',[['The first matching pattern is 2. Strings are shown without quotes.','أول نمط مطابق هو 2. والنصوص تُعرض دون علامات تنصيص.']],['$ a','$ c','$ 2']),
  Q('What is the output of ``Which[3 < 2, "x", 3 == 3, "y", True, "z"]``?','ما مخرج ``Which[3 < 2, "x", 3 == 3, "y", True, "z"]``؟','$ y',[['The first true condition is `3 == 3`.','أول شرط صحيح `3 == 3`.']],['$ x','$ z','$ True']),
]);

lesson('504',44,[
  ['Procedural loops exist, but they are rarely the best choice in Mathematica:','الحلقات الإجرائية موجودة لكنها نادراً ما تكون الخيار الأفضل في Mathematica:'],
  '$ s = 0;  Do[s += k, {k, 1, 10}];  s     (* 55 *)\nFor[i = 1, i <= 3, i++, Print[i]]\nWhile[x > 1, x = x/2]',
  ['The functional forms ``Table``, ``Sum``, ``Map`` and ``Total`` are shorter, clearer and usually faster. Building a list with ``AppendTo`` inside a loop is especially slow, because the list is copied at every step.','والصيغ الدالية ``Table`` و ``Sum`` و ``Map`` و ``Total`` أقصر وأوضح وأسرع عادة. وبناء قائمة بـ ``AppendTo`` داخل حلقة بطيء جداً لأن القائمة تُنسخ عند كل خطوة.'],
],[
  Q('Rewrite ``v = {}; For[i = 1, i <= 5, i++, AppendTo[v, i^2]]`` in one line.','أعد كتابة ``v = {}; For[i = 1, i <= 5, i++, AppendTo[v, i^2]]`` في سطر واحد.','$ v = Table[i^2, {i, 5}]',[['Same result `{1, 4, 9, 16, 25}`, no copying.','النتيجة نفسها `{1, 4, 9, 16, 25}` دون نسخ.']],['$ v = Do[i^2, {i, 5}]','$ v = For[i^2, {i, 5}]','$ v = Append[i^2, {i, 5}]']),
  Q('What does ``Do[k^2, {k, 3}]`` return?','ماذا تعيد ``Do[k^2, {k, 3}]``؟','$ Null',[['Do returns nothing; use Table to collect values.','Do لا تعيد شيئاً، فاستخدم Table لجمع القيم.']],['$ {1, 4, 9}','$ 9','$ 14']),
  Q('What is the value of x after the last line?','ما قيمة x بعد السطر الأخير؟','$ 5/8',['5 → #f{5}{2} → #f{5}{4} → #f{5}{8}'],['$ 5/4','$ 0','$ 1'],'x = 5;\nWhile[x > 1, x = x/2];  x'),
  Q('Why is ``AppendTo`` in a loop of n steps slow?','لماذا تكون ``AppendTo`` في حلقة من n خطوة بطيئة؟',['Each step copies the whole list, so the total cost grows like `n^2`','كل خطوة تنسخ القائمة كلها فتنمو التكلفة الكلية مثل `n^2`'],['1 + 2 + … + n ≈ #f{n^2}{2}'],[['Because Print is slow','لأن Print بطيئة'],['It is not slow','ليست بطيئة']]),
]);

lesson('504',45,[
  ['Local variables keep functions from interfering with each other:','المتغيرات المحلية تمنع الدوال من التداخل:'],
  '$ Module[{x = 2}, x^2]     (* new local variables *)\nBlock[{x = 2}, f[]]       (* temporary values of global names *)\nWith[{n = 3}, Range[n]]   (* local constants *)',
  ['``Module`` creates fresh symbols that nothing outside can see. ``Block`` temporarily changes the value of an existing name, so functions called inside see the new value. ``With`` inserts constants into the body.','``Module`` تنشئ رموزاً جديدة لا يراها شيء في الخارج. و ``Block`` تغيّر مؤقتاً قيمة اسم موجود فترى الدوال المستدعاة داخلها القيمة الجديدة. و ``With`` تدرج ثوابت في الجسم.'],
],[
  Q('What are the two outputs?','ما المخرجان؟','$ 4 and 5',[['The local x of Module is a different symbol; the global x is still 5.','x المحلية في Module رمز مختلف، و x العامة ما زالت 5.']],['$ 4 and 2','$ 25 and 5','$ 4 and 4'],'x = 5;\nModule[{x = 2}, x^2]\nx'),
  Q('What is the output of the last line?','ما مخرج السطر الأخير؟','$ 2',[['Block changes the value of the global x while f runs.','Block تغيّر قيمة x العامة أثناء تشغيل f.']],['$ 5','$ x','$ f[]'],'x = 5;  f[] := x;\nBlock[{x = 2}, f[]]'),
  Q('What is the output of the last line?','ما مخرج السطر الأخير؟','$ 5',[['The local x of Module is not the x inside f.','x المحلية في Module ليست x داخل f.']],['$ 2','$ x$123','$ f[]'],'x = 5;  f[] := x;\nModule[{x = 2}, f[]]'),
  Q('What is the output of ``With[{n = 3}, Table[k^2, {k, n}]]``?','ما مخرج ``With[{n = 3}, Table[k^2, {k, n}]]``؟','$ {1, 4, 9}',[['n is replaced by 3 in the body.','n تُستبدل بـ 3 في الجسم.']],['$ 9','$ {1, 2, 3}','$ {k^2}']),
]);

lesson('504',46,[
  ['A function that remembers its values: the definition ``f[n_] := f[n] = …`` stores each result as a new rule the first time it is computed:','دالة تتذكر قيمها: التعريف ``f[n_] := f[n] = …`` يخزن كل نتيجة قاعدةً جديدة أول مرة تُحسب:'],
  '$ fib[0] = 0;  fib[1] = 1;\nfib[n_] := fib[n] = fib[n - 1] + fib[n - 2]\nfib[30]        (* 832040, instantly *)',
  ['Without memoization the number of calls grows like `φ^n` (φ ≈ 1.618); with it, each value is computed once. The same trick makes recurrences for orthogonal polynomials fast.','ودون حفظ النتائج ينمو عدد الاستدعاءات مثل `φ^n` (φ ≈ 1.618)، ومعه تُحسب كل قيمة مرة واحدة. والحيلة نفسها تسرّع علاقات التكرار لكثيرات الحدود المتعامدة.'],
],[
  Q('What is the output of ``fib[10]``?','ما مخرج ``fib[10]``؟','$ 55',['0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55'],['$ 89','$ 34','$ 10']),
  Q('After ``fib[5]``, which new rules exist?','بعد ``fib[5]`` ما القواعد الجديدة الموجودة؟',['``fib[2]`` up to ``fib[5]``','من ``fib[2]`` حتى ``fib[5]``'],[['Each computed value is stored.','كل قيمة محسوبة تُخزن.']],[['Only ``fib[5]``','``fib[5]`` فقط'],['None','لا شيء']]),
  Q('About how many calls does the plain recursive fib need for n = 30?','كم استدعاءً تقريباً تحتاج fib التكرارية العادية عند n = 30؟','≈ 2.7 × 10^6',['2F_{31} − 1 = 2 692 537'],['30','≈ 900','≈ 10^{30}']),
  Q('What is the risk of memoization?','ما خطر حفظ النتائج؟',['Stored values use memory and are not updated if the definition changes; clear them with ``Clear[fib]``','القيم المخزنة تستهلك الذاكرة ولا تتحدث إذا تغيّر التعريف، فامسحها بـ ``Clear[fib]``'],[['Old results can silently survive an edit.','قد تبقى نتائج قديمة بعد تعديل دون أن تُلاحظ.']],[['It gives wrong numbers','يعطي أعداداً خاطئة'],['None','لا خطر']]),
]);

lesson('504',47,[
  ['Bonnet’s recurrence `nP_n = (2n − 1)xP_{n−1} − (n − 1)P_{n−2}` becomes a memoized definition:','علاقة بونيه `nP_n = (2n − 1)xP_{n−1} − (n − 1)P_{n−2}` تصبح تعريفاً بحفظ النتائج:'],
  '$ p[0] = 1;  p[1] = x;\np[n_Integer?Positive] := p[n] =\n  Expand[((2 n - 1) x p[n - 1] - (n - 1) p[n - 2])/n]\np[4] == Expand[LegendreP[4, x]]     (* True *)',
  ['``Expand`` keeps each stored polynomial small; without it the expressions grow as nested products. Deep recursion is limited by ``$RecursionLimit`` (1024 by default), but with memoization you can build up from small n.','و ``Expand`` تبقي كل كثيرة مخزنة صغيرة، ودونها تكبر المقادير ضروباً متداخلة. والتكرار العميق محدود بـ ``$RecursionLimit`` (1024 افتراضياً)، لكن مع حفظ النتائج يمكن البناء تصاعدياً من n صغير.'],
],[
  Q('What is the output of ``p[5] /. x -> 1``?','ما مخرج ``p[5] /. x -> 1``؟','$ 1',['P_n(1) = 1'],['$ 5','$ 0','$ 1/5']),
  Q('What is the output of ``p[3] /. x -> 0``?','ما مخرج ``p[3] /. x -> 0``؟','$ 0',[['`P_3` is odd.','`P_3` فردية.']],['$ 1','$ -3/2','$ 5/2']),
  Q('What is the coefficient of `x^2` in ``p[2]``?','ما معامل `x^2` في ``p[2]``؟','$ 3/2',['P_2 = #f{3x^2 − 1}{2}'],['$ 3','$ -1/2','$ 1/2']),
  Q('Why does ``p[2000]`` fail when called first, but work after ``Do[p[k], {k, 2000}]``?','لماذا يفشل ``p[2000]`` إذا استُدعي أولاً ويعمل بعد ``Do[p[k], {k, 2000}]``؟',['Called first it needs a recursion depth beyond ``$RecursionLimit``; building up stores every lower value first','عند استدعائه أولاً يحتاج عمق تكرار أكبر من ``$RecursionLimit``، والبناء التصاعدي يخزن كل القيم الأدنى أولاً'],[['Each call then needs only two stored values.','فيحتاج كل استدعاء بعدها قيمتين مخزنتين فقط.']],[['Because Do is faster','لأن Do أسرع'],['It never works','لا يعمل أبداً']]),
]);

lesson('504',48,[
  ['Strings are written in double quotes. ``<>`` joins strings and ``ToString`` turns numbers into strings:','النصوص تُكتب بين علامتي تنصيص مزدوجتين. و ``<>`` تضم النصوص و ``ToString`` تحول الأعداد إلى نصوص:'],
  '$ "N = " <> ToString[8]               (* N = 8 *)\nStringLength["Legendre"]            (* 8 *)\nStringReplace["n1 n2", "n" -> "N"]  (* N1 N2 *)\nPrint["error = ", ScientificForm[1.2*^-6]]',
  ['``Print`` takes several arguments and prints them together. Output cells show strings without quotes; ``InputForm`` shows them with quotes.','و ``Print`` تأخذ عدة متغيرات وتطبعها معاً. وخلايا المخرجات تعرض النصوص دون علامات تنصيص، و ``InputForm`` تعرضها بها.'],
],[
  Q('What is the output of ``"a" <> "b" <> "c"``?','ما مخرج ``"a" <> "b" <> "c"``؟','$ abc',[['Concatenation.','ضم.']],['$ a b c','$ {a, b, c}','$ a<>b<>c']),
  Q('What is the output of ``ToExpression["1 + 2"]``?','ما مخرج ``ToExpression["1 + 2"]``؟','$ 3',[['The string is read and evaluated as input.','يُقرأ النص ويُحسب كمدخل.']],['$ 1 + 2','$ "3"','$ 12']),
  Q('Why does ``"N = " <> 8`` fail?','لماذا يفشل ``"N = " <> 8``؟',['``<>`` joins only strings; 8 must be converted with ToString','``<>`` تضم النصوص فقط، فيجب تحويل 8 بـ ToString'],[['A message ``StringJoin::string`` appears.','تظهر الرسالة ``StringJoin::string``.']],[['8 is too large','8 كبير جداً'],['It does not fail','لا يفشل']]),
  Q('Build the file names ``"fig1.pdf"``, …, ``"fig3.pdf"``.','ابنِ أسماء الملفات ``"fig1.pdf"`` حتى ``"fig3.pdf"``.','$ Table["fig" <> ToString[k] <> ".pdf", {k, 3}]',[['A list of three strings.','قائمة من ثلاثة نصوص.']],['$ Table["fig" <> k <> ".pdf", {k, 3}]','$ "fig" <> Range[3] <> ".pdf"','$ Table["figk.pdf", {k, 3}]']),
]);

lesson('504',49,[
  ['When a result is wrong, look inside the computation:','حين تكون النتيجة خاطئة انظر داخل الحساب:'],
  '$ Echo[x^2, "x^2 = "]          (* prints and returns its argument *)\nPrint["step ", k]\nTrace[f[3]]                   (* every evaluation step *)\nMonitor[Do[…, {k, 1000}], k]  (* shows k while running *)',
  ['``Echo`` can be put inside an expression without changing it, which makes it the most convenient probe. Test small cases whose answer you know, and change one thing at a time.','و ``Echo`` يمكن وضعها داخل مقدار دون تغييره، فهي أنسب أداة فحص. واختبر حالات صغيرة تعرف جوابها، وغيّر شيئاً واحداً كل مرة.'],
],[
  Q('What is the output of ``Echo[3] + 1``?','ما مخرج ``Echo[3] + 1``؟',['It prints 3 and returns 4','يطبع 3 ويعيد 4'],[['Echo returns its argument.','Echo تعيد متغيرها.']],['$ 3','$ Null + 1']),
  Q('What is the output of ``Print[3] + 1``?','ما مخرج ``Print[3] + 1``؟',['It prints 3 and returns ``1 + Null``','يطبع 3 ويعيد ``1 + Null``'],[['Print returns Null, so it cannot be used inside a computation.','Print تعيد Null فلا تصلح داخل حساب.']],['$ 4','$ 3']),
  Q('Which command shows a loop variable while a long loop runs?','أي أمر يعرض متغير الحلقة أثناء تشغيل حلقة طويلة؟','$ Monitor',[['The display disappears when the loop ends.','يختفي العرض عند انتهاء الحلقة.']],['$ Trace','$ Echo','$ Timing']),
  Q('A function returns a wrong matrix for n = 50. What should you test first?','دالة تعيد مصفوفة خاطئة عند n = 50. ماذا تختبر أولاً؟',['The smallest n, such as 1 or 2, where the matrix can be checked by hand','أصغر n مثل 1 أو 2 حيث يمكن فحص المصفوفة يدوياً'],[['Most errors are visible in small cases.','معظم الأخطاء تظهر في الحالات الصغيرة.']],[['n = 100','n = 100'],['Run it again','تشغيله مرة أخرى']]),
]);

lesson('504',50,[
  ['Clean code is code that someone else, or you in six months, can read and trust:','الكود النظيف هو كود يستطيع غيرك أو أنت بعد ستة أشهر قراءته والثقة به:'],
  '$ (* Parameters *)\nnSpace = 8; mTime = 4; mu = 1/2;\n(* Basis *)\nbasis[i_, t_] := LegendreP[i, 2 t - 1]\n(* Assembly and solution *)\n…',
  ['Rules: names that say what they hold (start with a small letter); parameters in one place at the top; one function for one task; no hidden global state; comments that explain why, not what; and the notebook runs from top to bottom.','القواعد: أسماء تدل على ما تحمله (تبدأ بحرف صغير)، والوسائط في مكان واحد في الأعلى، ودالة واحدة لمهمة واحدة، ولا حالة عامة مخفية، وتعليقات تشرح لماذا لا ماذا، والدفتر يعمل من الأعلى إلى الأسفل.'],
],[
  Q('Which name is better for the number of collocation points in time?','أي اسم أفضل لعدد نقاط التجميع في الزمن؟','$ nTime',[['Descriptive and starting with a small letter.','وصفي ويبدأ بحرف صغير.']],['$ N','$ T2','$ X']),
  Q('Why should your names not start with a capital letter?','لماذا لا يجب أن تبدأ أسماؤك بحرف كبير؟',['Built-in names start with capitals, so you may clash with one (``N``, ``D``, ``C``, ``E``, ``I`` are taken)','الأسماء الجاهزة تبدأ بحروف كبيرة فقد تتصادم معها (``N`` و ``D`` و ``C`` و ``E`` و ``I`` محجوزة)'],[['``N = 8`` gives an error: N is protected.','``N = 8`` تعطي خطأ لأن N محمية.']],[['It is slower','أبطأ'],['There is no reason','لا سبب']]),
  Q('What is a good comment for ``mTime = 4``?','ما التعليق الجيد لـ ``mTime = 4``؟',['Why 4: for example, the solution has degree 3 in s, so 4 functions are exact','لماذا 4: مثلاً الحل من الدرجة 3 في s فتكفي 4 دوال بالضبط'],[['Explain the choice, not the assignment.','اشرح الاختيار لا الإسناد.']],[['Set mTime to 4','عيّن mTime بـ 4'],['No comment is needed','لا حاجة لتعليق']]),
  Q('A function uses a variable defined in another cell. What is the problem?','دالة تستخدم متغيراً معرّفاً في خلية أخرى. ما المشكلة؟',['Hidden global state: the result depends on what was evaluated before','حالة عامة مخفية: النتيجة تعتمد على ما حُسب قبلها'],[['Pass it as an argument or define it at the top.','مرّره متغيراً أو عرّفه في الأعلى.']],[['It is slower','أبطأ'],['There is no problem','لا مشكلة']]),
]);

lesson('504',51,[
  ['Vectors are lists and matrices are lists of rows. Basic constructors and operations:','المتجهات قوائم والمصفوفات قوائم صفوف. والمنشئات والعمليات الأساسية:'],
  '$ {1, 2} . {3, 4}                 (* 11 *)\nNorm[{3, 4}]                     (* 5 *)\nCross[{1, 0, 0}, {0, 1, 0}]      (* {0, 0, 1} *)\nDiagonalMatrix[{1, 2}]           (* {{1, 0}, {0, 2}} *)\nConstantArray[0, {2, 3}]         (* {{0, 0, 0}, {0, 0, 0}} *)',
  ['There is no separate row or column vector: ``m . v`` treats v as a column and ``v . m`` as a row.','ولا يوجد متجه صفي أو عمودي منفصل: ``m . v`` تعامل v عموداً و ``v . m`` صفاً.'],
],[
  Q('What is the output of ``{1, 2, 3} . {4, 5, 6}``?','ما مخرج ``{1, 2, 3} . {4, 5, 6}``؟','$ 32',['4 + 10 + 18'],['$ {4, 10, 18}','$ 15','$ 21']),
  Q('What is the output of ``{1, 1} . {{1, 2}, {3, 4}}``?','ما مخرج ``{1, 1} . {{1, 2}, {3, 4}}``؟','$ {4, 6}',[['v as a row: column sums.','v صفاً: مجاميع الأعمدة.']],['$ {3, 7}','$ 10','$ {{1, 2}, {3, 4}}']),
  Q('What is the output of ``Norm[{1, 2, 2}]``?','ما مخرج ``Norm[{1, 2, 2}]``؟','$ 3',['#r{1 + 4 + 4}'],['$ 5','$ 9','$ Sqrt[5]']),
  Q('Build the 3 × 3 identity matrix.','ابنِ المصفوفة المحايدة 3 × 3.','$ IdentityMatrix[3]',[['Or ``DiagonalMatrix[{1, 1, 1}]``.','أو ``DiagonalMatrix[{1, 1, 1}]``.']],['$ Identity[3]','$ ConstantArray[1, {3, 3}]','$ Eye[3]']),
]);

lesson('504',52,[
  ['Products, transposes, inverses and determinants:','الضروب والمنقولات والمعكوسات والمحددات:'],
  '$ m = {{1, 2}, {3, 4}};\nDet[m]          (* -2 *)\nInverse[m]      (* {{-2, 1}, {3/2, -1/2}} *)\nm . Inverse[m]  (* {{1, 0}, {0, 1}} *)',
  ['A singular matrix gives the message ``Inverse::sing``. In numerical work avoid ``Inverse`` for solving systems: ``LinearSolve`` is faster and more accurate.','والمصفوفة الشاذة تعطي الرسالة ``Inverse::sing``. وفي العمل العددي تجنّب ``Inverse`` لحل الأنظمة لأن ``LinearSolve`` أسرع وأدق.'],
],[
  Q('What is the output of ``Det[{{2, 1}, {1, 2}}]``?','ما مخرج ``Det[{{2, 1}, {1, 2}}]``؟','$ 3',['4 − 1'],['$ 5','$ 4','$ 0']),
  Q('What is the output of ``Inverse[{{2, 0}, {0, 4}}]``?','ما مخرج ``Inverse[{{2, 0}, {0, 4}}]``؟','$ {{1/2, 0}, {0, 1/4}}',[['Invert each diagonal entry.','اقلب كل عنصر قطري.']],['$ {{2, 0}, {0, 4}}','$ {{-2, 0}, {0, -4}}','$ {{4, 0}, {0, 2}}']),
  Q('What happens with ``Inverse[{{1, 1}, {1, 1}}]``?','ماذا يحدث مع ``Inverse[{{1, 1}, {1, 1}}]``؟',['The message ``Inverse::sing`` and the input returned: the matrix is singular','الرسالة ``Inverse::sing`` ويُعاد المدخل: المصفوفة شاذة'],['det = 1 − 1 = 0'],[['``{{1, 1}, {1, 1}}``','``{{1, 1}, {1, 1}}`` نفسها'],['A matrix of Infinity','مصفوفة من Infinity']]),
  Q('What is the output of ``Transpose[{{1, 2}, {3, 4}}] . {1, 0}``?','ما مخرج ``Transpose[{{1, 2}, {3, 4}}] . {1, 0}``؟','$ {1, 2}',[['The transpose has rows (1, 3) and (2, 4).','المنقولة صفاها (1, 3) و (2, 4).']],['$ {1, 3}','$ {3, 4}','$ {2, 4}']),
]);

lesson('504',53,[
  ['``LinearSolve[m, b]`` solves `m·x = b`. ``LinearSolve[m]`` factors m once and returns a function that solves for any right-hand side:','``LinearSolve[m, b]`` تحل `m·x = b`. و ``LinearSolve[m]`` تحلل m مرة واحدة وتعيد دالة تحل لأي طرف أيمن:'],
  '$ LinearSolve[{{2, 1}, {1, 3}}, {3, 5}]   (* {4/5, 7/5} *)\nsolve = LinearSolve[mat];\nsolve[b1];  solve[b2];                  (* no new factorization *)',
  ['Reusing the factorization matters when the same matrix is used for many time steps or many right-hand sides.','وإعادة استخدام التحليل مهمة حين تُستخدم المصفوفة نفسها لخطوات زمنية كثيرة أو أطراف يمنى كثيرة.'],
],[
  Q('Check the solution `{4/5, 7/5}` of the example.','تحقق من الحل `{4/5, 7/5}` في المثال.','2·#f{4}{5} + #f{7}{5} = 3,   #f{4}{5} + 3·#f{7}{5} = 5',['#f{8 + 7}{5} = 3,   #f{4 + 21}{5} = 5'],['2·#f{4}{5} + #f{7}{5} = 5,   #f{4}{5} + 3·#f{7}{5} = 3','#f{4}{5} + #f{7}{5} = 3','2·#f{4}{5} = 3']),
  Q('What is the output of ``LinearSolve[{{1, 0}, {0, 2}}, {3, 4}]``?','ما مخرج ``LinearSolve[{{1, 0}, {0, 2}}, {3, 4}]``؟','$ {3, 2}',['x = 3,   2y = 4'],['$ {3, 8}','$ {3/1, 4/2, 0}','$ {1, 2}']),
  Q('Why is ``LinearSolve[m, b]`` preferred to ``Inverse[m] . b``?','لماذا تُفضَّل ``LinearSolve[m, b]`` على ``Inverse[m] . b``؟',['It does less work and has smaller rounding errors','تعمل أقل ولها أخطاء تقريب أصغر'],[['Forming the inverse costs about three times more and loses accuracy for ill-conditioned matrices.','تكوين المعكوس يكلف نحو ثلاثة أضعاف ويفقد الدقة للمصفوفات سيئة الشرط.']],[['They are identical','متطابقتان'],['Inverse is exact','Inverse مضبوطة']]),
  Q('A 1000 × 1000 system is solved for 500 time steps with the same matrix. What should the code do?','نظام 1000 × 1000 يُحل لـ 500 خطوة زمنية بالمصفوفة نفسها. ماذا يجب أن يفعل الكود؟','$ solve = LinearSolve[mat];  then solve[b] at each step',[['One factorization instead of 500.','تحليل واحد بدل 500.']],['$ LinearSolve[mat, b] at each step','$ Inverse[mat] . b at each step','$ NSolve at each step']),
]);

lesson('504',54,[
  ['Eigenvalues and eigenvectors:','القيم والمتجهات الذاتية:'],
  '$ Eigenvalues[{{2, 1}, {1, 2}}]    (* {3, 1} *)\nEigenvectors[{{2, 1}, {1, 2}}]   (* {{1, 1}, {-1, 1}} *)\nEigensystem[m]                   (* {values, vectors} *)',
  ['Eigenvalues are sorted by decreasing absolute value; the vectors are not normalized for exact input. For numeric matrices use machine numbers (``N[m]``) to get fast LAPACK routines.','وتُرتب القيم الذاتية تنازلياً حسب القيمة المطلقة، والمتجهات غير مطبّعة للمدخلات المضبوطة. وللمصفوفات العددية استخدم أعداد الآلة (``N[m]``) لتحصل على إجراءات LAPACK السريعة.'],
],[
  Q('What is the output of ``Eigenvalues[{{3, 0}, {0, -5}}]``?','ما مخرج ``Eigenvalues[{{3, 0}, {0, -5}}]``؟','$ {-5, 3}',[['Sorted by absolute value: 5 before 3.','مرتبة حسب القيمة المطلقة: 5 قبل 3.']],['$ {3, -5}','$ {-5}','$ {5, 3}']),
  Q('Check that `(1, 1)` is an eigenvector of `#m{2, 1 ;; 1, 2}`.','تحقق من أن `(1, 1)` متجه ذاتي لـ `#m{2, 1 ;; 1, 2}`.','(3, 3) = 3(1, 1)',['#m{2, 1 ;; 1, 2}(1, 1)^T = (3, 3)^T'],['(2, 2) = 2(1, 1)','(1, 1) = 1(1, 1)','(3, 1)']),
  Q('The eigenvalues of the Jacobi matrix `#m{0, 1/#r{3} ;; 1/#r{3}, 0}` are the Gauss–Legendre nodes for n = 2. What are they?','القيم الذاتية لمصفوفة جاكوبي `#m{0, 1/#r{3} ;; 1/#r{3}, 0}` هي عقد جاوس–ليجندر عند n = 2. ما هي؟','±#f{1}{#r{3}} ≈ ±0.57735',['λ^2 = #f{1}{3}'],['±#f{1}{3}','0, 1','±1']),
  Q('What does ``Eigensystem`` return?','ماذا تعيد ``Eigensystem``؟',['A pair: the list of eigenvalues and the list of eigenvectors','زوجاً: قائمة القيم الذاتية وقائمة المتجهات الذاتية'],[['``{vals, vecs} = Eigensystem[m]``.','``{vals, vecs} = Eigensystem[m]``.']],[['Only the eigenvalues','القيم الذاتية فقط'],['The determinant','المحدد']]),
]);

lesson('504',55,[
  ['Matrices defined by a formula are built with ``Table`` or ``Array``:','المصفوفات المعرّفة بقانون تُبنى بـ ``Table`` أو ``Array``:'],
  '$ Table[1/(i + j - 1), {i, 3}, {j, 3}]   (* the Hilbert matrix *)\nArray[f, {2, 2}]     (* {{f[1, 1], f[1, 2]}, {f[2, 1], f[2, 2]}} *)\nTable[If[j < i && OddQ[i - j], 2 (2 j - 1), 0], {i, 4}, {j, 4}]',
  ['The last line is the shifted Legendre derivative matrix (Course 503, Lesson 71) with indices shifted by one, because Mathematica counts from 1: entry `(i, j)` corresponds to `(n, k) = (i − 1, j − 1)`.','والسطر الأخير مصفوفة مشتقة ليجندر المزاحة (المقرر 503، الدرس 71) مع إزاحة الأدلة بواحد لأن Mathematica يعد من 1: العنصر `(i, j)` يقابل `(n, k) = (i − 1, j − 1)`.'],
],[
  Q('What is the output of ``Array[#1 + #2 &, {2, 2}]``?','ما مخرج ``Array[#1 + #2 &, {2, 2}]``؟','$ {{2, 3}, {3, 4}}',['i + j'],['$ {{0, 1}, {1, 2}}','$ {{1, 2}, {2, 3}}','$ {2, 3, 3, 4}']),
  Q('What is the output?','ما المخرج؟','$ {{2, -1, 0}, {-1, 2, -1}, {0, -1, 2}}',[['The second-difference matrix.','مصفوفة الفروق الثانية.']],['$ {{2, 1, 0}, {1, 2, 1}, {0, 1, 2}}','$ {{-1, 2, -1}}','$ {{2, 0, 0}, {0, 2, 0}, {0, 0, 2}}'],'Table[Which[i == j, 2, Abs[i - j] == 1, -1, True, 0], {i, 3}, {j, 3}]'),
  Q('What is row 3 of the derivative matrix built in the overview?','ما الصف 3 من مصفوفة المشتقة المبنية في الشرح؟','$ {0, 6, 0, 0}',['(n, k) = (2, 1):   2(2·1 + 1) = 6'],['$ {2, 0, 0, 0}','$ {0, 2, 0, 0}','$ {2, 6, 0, 0}']),
  Q('Why does the formula use `2(2j − 1)` instead of `2(2k + 1)`?','لماذا تستخدم الصيغة `2(2j − 1)` بدل `2(2k + 1)`؟',['Because `k = j − 1` when lists are numbered from 1','لأن `k = j − 1` حين تُرقّم القوائم من 1'],['2(2(j − 1) + 1) = 2(2j − 1)'],[['It is a different matrix','مصفوفة مختلفة'],['By mistake','خطأً']]),
]);

lesson('504',56,[
  ['``SparseArray`` stores only the nonzero entries. Banded matrices are built with ``Band``:','``SparseArray`` تخزن العناصر غير الصفرية فقط. والمصفوفات الشريطية تُبنى بـ ``Band``:'],
  '$ a = SparseArray[{Band[{1, 1}] -> 2, Band[{1, 2}] -> -1,\n   Band[{2, 1}] -> -1}, {4, 4}];\nNormal[a]     (* the full matrix *)\nLinearSolve[a, b]',
  ['Sparse matrices work with Dot, LinearSolve and Eigenvalues like ordinary ones, but save memory and time for large banded systems, such as Galerkin matrices with the basis `P_k − P_{k+2}`.','والمصفوفات القليلة العناصر تعمل مع Dot و LinearSolve و Eigenvalues كالعادية، لكنها توفر الذاكرة والوقت للأنظمة الشريطية الكبيرة مثل مصفوفات جاليركن بالأساس `P_k − P_{k+2}`.'],
],[
  Q('How many nonzero entries does the 4 × 4 matrix a have?','كم عنصراً غير صفري في المصفوفة a ذات 4 × 4؟','10',['4 + 3 + 3'],['16','4','12']),
  Q('What is the output of ``Normal[SparseArray[{{1, 2} -> 5}, {2, 2}]]``?','ما مخرج ``Normal[SparseArray[{{1, 2} -> 5}, {2, 2}]]``؟','$ {{0, 5}, {0, 0}}',[['Entry (1, 2) is 5, the rest zero.','العنصر (1, 2) يساوي 5 والباقي أصفار.']],['$ {{5, 0}, {0, 0}}','$ {{0, 0}, {5, 0}}','$ {5}']),
  Q('About how much memory does a dense 10 000 × 10 000 matrix of machine numbers need?','كم ذاكرة تقريباً تحتاج مصفوفة كثيفة 10 000 × 10 000 من أعداد الآلة؟','≈ 800 MB',[['`10^8` entries of 8 bytes each.','`10^8` عنصر حجم كل منها 8 بايت.']],['≈ 80 KB','≈ 8 GB','≈ 80 MB']),
  Q('And a tridiagonal one stored as SparseArray?','وثلاثية القطر مخزنة SparseArray؟',['About `3 × 10^4` entries: well under 1 MB','نحو `3 × 10^4` عنصر: أقل كثيراً من 1 MB'],['3·10^4 − 2'],['≈ 800 MB','≈ 100 MB',['About `10^8` entries','نحو `10^8` عنصر']]),
]);

lesson('504',57,[
  ['``KroneckerProduct[a, b]`` builds the block matrix `(a_{ij} b)`. Together with column stacking it turns a matrix equation into an ordinary linear system:','``KroneckerProduct[a, b]`` تبني المصفوفة الكتلية `(a_{ij} b)`. ومع رصّ الأعمدة تحوّل معادلة مصفوفية إلى نظام خطي عادي:'],
  '$ vec[y_] := Flatten[Transpose[y]]        (* stack the columns *)\nvec[a . y . b] == KroneckerProduct[Transpose[b], a] . vec[y]   (* True *)',
  ['This is how the unknown matrix `𝒴` of the mapped Legendre method becomes a vector. ``Flatten[y]`` alone stacks the rows, which corresponds to the other order of the factors.','وهكذا يصبح المجهول المصفوفي `𝒴` في طريقة ليجندر المحوّلة متجهاً. و ``Flatten[y]`` وحدها ترص الصفوف، وهذا يقابل الترتيب الآخر للعاملين.'],
],[
  Q('What is the output of ``Flatten[Transpose[{{1, 2}, {3, 4}}]]``?','ما مخرج ``Flatten[Transpose[{{1, 2}, {3, 4}}]]``؟','$ {1, 3, 2, 4}',[['Column by column.','عموداً بعد عمود.']],['$ {1, 2, 3, 4}','$ {4, 3, 2, 1}','$ {{1, 3}, {2, 4}}']),
  Q('What are the dimensions of ``KroneckerProduct`` of a 3 × 3 and a 4 × 4 matrix?','ما أبعاد ``KroneckerProduct`` لمصفوفة 3 × 3 وأخرى 4 × 4؟','$ {12, 12}',['3·4 = 12'],['$ {7, 7}','$ {3, 4}','$ {9, 16}']),
  Q('What is ``KroneckerProduct[{{1, 0}, {0, 2}}, {{1, 1}}]``?','ما ``KroneckerProduct[{{1, 0}, {0, 2}}, {{1, 1}}]``؟','$ {{1, 1, 0, 0}, {0, 0, 2, 2}}',[['Each entry of the first matrix multiplies the block (1, 1).','كل عنصر في المصفوفة الأولى يضرب الكتلة (1, 1).']],['$ {{1, 0, 1, 0}, {0, 2, 0, 2}}','$ {{1, 1}, {0, 0}, {2, 2}}','$ {{2, 2, 0, 0}, {0, 0, 1, 1}}']),
  Q('For a time-fractional problem with 9 space and 5 time unknowns per direction, what is the size of the Kronecker system?','لمسألة كسرية زمنية بـ 9 مجاهيل مكانية و 5 زمنية في كل اتجاه، ما حجم نظام كرونيكر؟','45 × 45',['9·5 = 45'],['14 × 14','9 × 5','81 × 25']),
]);

lesson('504',58,[
  ['Norms of vectors and matrices, and the condition number:','معايير المتجهات والمصفوفات وعدد الشرط:'],
  '$ Norm[{1, -2, 2}]               (* 3:  the 2-norm *)\nNorm[{1, -2, 2}, Infinity]     (* 2 *)\nNorm[{1, -2, 2}, 1]            (* 5 *)\nsv = SingularValueList[N[m]];\nMax[sv]/Min[sv]      (* the 2-norm condition number *)',
  ['``Norm[m]`` of a matrix is its largest singular value. The condition number `κ = σ_{max}/σ_{min}` estimates how many digits a linear solve loses: about `log_{10} κ`.','و ``Norm[m]`` لمصفوفة هي أكبر قيمة منفردة لها. وعدد الشرط `κ = σ_{max}/σ_{min}` يقدّر عدد الأرقام التي يفقدها الحل الخطي: نحو `log_{10} κ`.'],
],[
  Q('What is the output of ``Norm[{3, -4}, Infinity]``?','ما مخرج ``Norm[{3, -4}, Infinity]``؟','$ 4',['max(|3|, |−4|)'],['$ 5','$ 7','$ -4']),
  Q('What is the condition number of ``{{1, 0}, {0, 10^-6}}``?','ما عدد شرط ``{{1, 0}, {0, 10^-6}}``؟','10^6',['#f{1}{10^{−6}}'],['10^{−6}','1','10^{12}']),
  Q('About how many digits are lost when solving with that matrix in machine precision?','كم رقماً يُفقد تقريباً عند الحل بتلك المصفوفة بدقة الآلة؟','≈ 6',['log_{10} 10^6'],['≈ 16','≈ 1','≈ 12']),
  Q('What is ``Norm[{{2, 0}, {0, -3}}]``?','ما ``Norm[{{2, 0}, {0, -3}}]``؟','$ 3',[['The largest singular value: `|−3|`.','أكبر قيمة منفردة: `|−3|`.']],['$ 2','$ 5','$ Sqrt[13]']),
]);

lesson('504',59,[
  ['Mathematica has three kinds of arithmetic: exact (infinite precision), machine (about 16 digits, fast) and arbitrary precision (any number of digits, slower):','في Mathematica ثلاثة أنواع من الحساب: المضبوط (دقة لانهائية)، والآلي (نحو 16 رقماً وسريع)، والدقة الاختيارية (أي عدد من الأرقام وأبطأ):'],
  '$ Precision[1/3]          (* Infinity *)\nPrecision[1.5]          (* MachinePrecision *)\nPrecision[N[Pi, 30]]    (* 30. *)\n$MachinePrecision       (* 15.9546 *)',
  ['Ill-conditioned systems, such as the Hilbert matrix or high-order collocation matrices, can lose all machine digits; then solve exactly, or with ``N[m, 40]``, to see which digits are real. Mathematica warns with ``LinearSolve::luc``.','والأنظمة سيئة الشرط مثل مصفوفة هيلبرت أو مصفوفات التجميع عالية الرتبة قد تفقد كل أرقام الآلة، فحلّها مضبوطة أو بـ ``N[m, 40]`` لترى أي الأرقام حقيقي. ويحذر Mathematica بالرسالة ``LinearSolve::luc``.'],
],[
  Q('What is the output of ``Precision[2/7]``?','ما مخرج ``Precision[2/7]``؟','$ Infinity',[['An exact rational number.','عدد كسري مضبوط.']],['$ MachinePrecision','$ 16','$ 0']),
  Q('What is the precision of ``N[Sqrt[2], 50]``?','ما دقة ``N[Sqrt[2], 50]``؟','$ 50.',[['An arbitrary-precision number with 50 digits.','عدد بدقة اختيارية من 50 رقماً.']],['$ MachinePrecision','$ Infinity','$ 16.']),
  Q('The condition number of ``HilbertMatrix[12]`` is about `1.7 × 10^{16}`. What happens in machine precision?','عدد شرط ``HilbertMatrix[12]`` نحو `1.7 × 10^{16}`. ماذا يحدث بدقة الآلة؟',['All digits can be lost; Mathematica warns with ``LinearSolve::luc``','قد تضيع كل الأرقام، ويحذر Mathematica بالرسالة ``LinearSolve::luc``'],['log_{10}(1.7 × 10^{16}) ≈ 16'],[['Nothing: it is exact','لا شيء: مضبوطة'],['The solve is faster','الحل أسرع']]),
  Q('How do you solve the same system with 40 digits?','كيف تحل النظام نفسه بـ 40 رقماً؟','$ LinearSolve[N[HilbertMatrix[12], 40], N[b, 40]]',[['About 24 correct digits remain.','يبقى نحو 24 رقماً صحيحاً.']],['$ LinearSolve[HilbertMatrix[12], b, 40]','$ N[LinearSolve[HilbertMatrix[12], b]], 40','$ LinearSolve[HilbertMatrix[12], b, Precision -> 40]']),
]);

lesson('504',60,[
  ['``CoefficientArrays`` turns linear equations into a matrix and a vector. For equations written as `b + A·x = 0`:','``CoefficientArrays`` تحوّل المعادلات الخطية إلى مصفوفة ومتجه. للمعادلات المكتوبة `b + A·x = 0`:'],
  '$ {b, a} = Normal[CoefficientArrays[{x + 2 y == 3, 3 x - y == 1}, {x, y}]]\n(* {{-3, -1}, {{1, 2}, {3, -1}}} *)\nLinearSolve[a, -b]     (* {5/7, 8/7} *)',
  ['This is the key to replacing FindRoot or Solve on a large linear collocation system: generate the equations symbolically, extract the arrays once, and call one LinearSolve.','وهذا مفتاح استبدال FindRoot أو Solve في نظام تجميع خطي كبير: ولّد المعادلات رمزياً، واستخرج المصفوفات مرة واحدة، واستدعِ LinearSolve واحدة.'],
],[
  Q('What is b for the equations above?','ما b للمعادلات أعلاه؟','$ {-3, -1}',[['Each equation is moved to the form `lhs − rhs = 0`; the constants are −3 and −1.','كل معادلة تُنقل إلى الصورة `lhs − rhs = 0`، والثوابت −3 و −1.']],['$ {3, 1}','$ {1, 2}','$ {0, 0}']),
  Q('Check the solution `x = 5/7`, `y = 8/7`.','تحقق من الحل `x = 5/7` و `y = 8/7`.','#f{5}{7} + #f{16}{7} = 3,   #f{15}{7} − #f{8}{7} = 1',['#f{21}{7} = 3,   #f{7}{7} = 1'],['#f{5}{7} + #f{8}{7} = 3,   #f{15}{7} − #f{8}{7} = 1','#f{5}{7} + #f{16}{7} = 1','#f{13}{7} = 3']),
  Q('Why is ``LinearSolve[a, -b]`` with a minus sign?','لماذا تأتي ``LinearSolve[a, -b]`` بإشارة سالبة؟','A·x = −b',['b + A·x = 0'],['A·x = b','A·b = x','x = −A·b']),
  Q('Why is this faster than ``FindRoot`` on 400 linear equations?','لماذا يكون هذا أسرع من ``FindRoot`` على 400 معادلة خطية؟',['One direct solve, with no Newton iterations and no numerical Jacobian','حل مباشر واحد دون تكرارات نيوتن ودون جاكوبي عددي'],[['FindRoot treats the system as nonlinear.','FindRoot تعامل النظام على أنه غير خطي.']],[['FindRoot is exact','FindRoot مضبوطة'],['It is not faster','ليس أسرع']]),
]);

/* ---- 504 · Unit 7 (lessons 61–70): differential equations;  Unit 8 (lessons 71–80): numerical methods ---- */
lesson('504',61,[
  ['``DSolve`` solves differential equations exactly. Derivatives are written ``y\'[x]``, ``y\'\'[x]``, and initial conditions are added to the list of equations:','``DSolve`` تحل المعادلات التفاضلية بالضبط. وتُكتب المشتقات ``y\'[x]`` و ``y\'\'[x]``، وتُضاف الشروط الابتدائية إلى قائمة المعادلات:'],
  '$ DSolve[y\'[x] == y[x], y[x], x]                  (* {{y[x] -> E^x C[1]}} *)\nDSolve[{y\'[x] == -y[x], y[0] == 1}, y[x], x]     (* {{y[x] -> E^-x}} *)\nDSolve[y\'\'[x] + y[x] == 0, y[x], x]\n(* {{y[x] -> C[1] Cos[x] + C[2] Sin[x]}} *)',
  ['``C[1]``, ``C[2]`` are the free constants. Asking for ``y`` instead of ``y[x]`` returns a pure function, which can be substituted into derivatives and conditions to check the answer.','و ``C[1]`` و ``C[2]`` الثوابت الحرة. وطلب ``y`` بدل ``y[x]`` يعيد دالة صرفة يمكن تعويضها في المشتقات والشروط للتحقق من الجواب.'],
],[
  Q('What is the output of ``DSolve[{y\'[x] == 2 x, y[0] == 1}, y[x], x]``?','ما مخرج ``DSolve[{y\'[x] == 2 x, y[0] == 1}, y[x], x]``؟','$ {{y[x] -> 1 + x^2}}',['y = x^2 + C,   y(0) = 1'],['$ {{y[x] -> x^2}}','$ {{y[x] -> 2 x + 1}}','$ {{y[x] -> x^2 + C[1]}}']),
  Q('How many free constants does the general solution of a third-order equation contain?','كم ثابتاً حراً في الحل العام لمعادلة من الرتبة الثالثة؟','3',[['``C[1]``, ``C[2]``, ``C[3]``.','``C[1]`` و ``C[2]`` و ``C[3]``.']],['1','2','0']),
  Q('What is the output of the last line?','ما مخرج السطر الأخير؟','$ {True}',[['The pure-function solution is substituted into the equation.','حل الدالة الصرفة يُعوَّض في المعادلة.']],['$ {y\'\'[x] + y[x] == 0}','$ True','$ {0}'],'sol = DSolve[y\'\'[x] + y[x] == 0, y, x];\ny\'\'[x] + y[x] == 0 /. sol'),
  Q('Solve `y′ = −2ty`, `y(0) = 1`.','حل `y′ = −2ty` مع `y(0) = 1`.','$ DSolve[{y\'[t] == -2 t y[t], y[0] == 1}, y[t], t]   (* {{y[t] -> E^-t^2}} *)',['y = e^{−t^2}'],['$ DSolve[y\'[t] == -2 t y[t], y[0] == 1, y[t], t]','$ DSolve[{y\'[t] = -2 t y[t], y[0] = 1}, y[t], t]','$ Solve[{y\'[t] == -2 t y[t], y[0] == 1}, y[t], t]']),
]);

lesson('504',62,[
  ['``NDSolve`` integrates numerically and returns an ``InterpolatingFunction``, a numerical function that can be evaluated, differentiated and plotted:','``NDSolve`` تكامل عددياً وتعيد ``InterpolatingFunction``، أي دالة عددية يمكن حسابها واشتقاقها ورسمها:'],
  '$ sol = NDSolve[{y\'[t] == -y[t]^2, y[0] == 1}, y, {t, 0, 5}];\ny[2] /. sol                          (* {0.333333} *)\nPlot[Evaluate[y[t] /. sol], {t, 0, 5}]',
  ['The result is a list of solutions, so values come in a list; use ``First`` to take the number. The method and step size are chosen automatically to meet the default precision goals.','والنتيجة قائمة حلول فتأتي القيم في قائمة، فاستخدم ``First`` لأخذ العدد. وتُختار الطريقة وطول الخطوة تلقائياً لتحقيق أهداف الدقة الافتراضية.'],
],[
  Q('The exact solution is `1/(1 + t)`. What is ``First[y[4] /. sol]``?','الحل المضبوط `1/(1 + t)`. ما ``First[y[4] /. sol]``؟','$ 0.2',['#f{1}{1 + 4}'],['$ 0.25','$ 4.','$ {0.2}']),
  Q('Why does ``y[2] /. sol`` give ``{0.333333}`` with braces?','لماذا يعطي ``y[2] /. sol`` القيمة ``{0.333333}`` بين قوسين؟',['NDSolve returns a list of solutions, and the rule is applied for each','NDSolve تعيد قائمة حلول وتُطبّق القاعدة لكل منها'],[['Use ``First`` or define ``ys = y /. First[sol]``.','استخدم ``First`` أو عرّف ``ys = y /. First[sol]``.']],[['Because the value is approximate','لأن القيمة تقريبية'],['It is an error','خطأ']]),
  Q('How do you get the maximal error on [0, 5]?','كيف تحصل على أكبر خطأ على [0, 5]؟','$ ys = y /. First[sol];  NMaxValue[{Abs[ys[t] - 1/(1 + t)], 0 <= t <= 5}, t]',[['Or sample on a fine grid with Table and Max.','أو خذ عينات على شبكة دقيقة بـ Table و Max.']],['$ Max[ys - 1/(1 + t)]','$ Abs[sol - 1/(1 + t)]','$ NMaxValue[sol, t]']),
  Q('What is ``ys\'[0]`` for the solution above?','ما ``ys\'[0]`` للحل أعلاه؟','$ -1.',['y′(0) = −y(0)^2'],['$ 1.','$ 0.','$ -2.']),
]);

lesson('504',63,[
  ['Boundary-value problems are written like initial-value problems, with conditions at two points:','مسائل القيم الحدية تُكتب مثل مسائل القيم الابتدائية مع شروط عند نقطتين:'],
  '$ sol = DSolve[{y\'\'[x] == -2, y[0] == 0, y[1] == 0}, y[x], x];\ny[x] /. First[sol] // Expand        (* x - x^2 *)\nNDSolve[{y\'\'[x] + y[x] == 0, y[0] == 0, y[1] == 1}, y, {x, 0, 1}]',
  ['NDSolve uses shooting or finite-difference methods for linear boundary-value problems. These solutions are the reference values against which spectral methods are tested.','وتستخدم NDSolve طرق الإطلاق أو الفروق المحدودة لمسائل القيم الحدية الخطية. وهذه الحلول هي القيم المرجعية التي تُختبر عليها الطرق الطيفية.'],
],[
  Q('What is ``y[1/2]`` for the first problem?','ما ``y[1/2]`` للمسألة الأولى؟','$ 1/4',['#f{1}{2} − #f{1}{4}'],['$ 1/2','$ 0','$ -1/4']),
  Q('The exact solution of the second problem is `sin x/sin 1`. What is `y(0.5)`?','الحل المضبوط للمسألة الثانية `sin x/sin 1`. ما `y(0.5)`؟','0.569747',['#f{0.479426}{0.841471}'],['0.5','0.479426','0.841471']),
  Q('Write the problem `u″ = 6x`, `u(−1) = u(1) = 0` for DSolve.','اكتب المسألة `u″ = 6x` مع `u(−1) = u(1) = 0` لـ DSolve.','$ DSolve[{u\'\'[x] == 6 x, u[-1] == 0, u[1] == 0}, u[x], x]',['u = x^3 − x'],['$ DSolve[{u\'\'[x] == 6 x, u[0] == 0, u[1] == 0}, u[x], x]','$ DSolve[u\'\'[x] == 6 x, {u[-1], u[1]} == 0, x]','$ NDSolve[{u\'\'[x] == 6 x}, u, {x, -1, 1}]']),
  Q('What happens with `y″ + π^2 y = 0`, `y(0) = 0`, `y(1) = 1`?','ماذا يحدث مع `y″ + π^2 y = 0` و `y(0) = 0` و `y(1) = 1`؟',['No solution: `sin(πx)` vanishes at both ends, so DSolve returns ``{}``','لا حل: `sin(πx)` تنعدم عند الطرفين فتعيد DSolve القائمة ``{}``'],['y = C sin(πx),   y(1) = 0 ≠ 1'],[['A unique solution','حل وحيد'],['Infinitely many solutions','عدد لانهائي من الحلول']]),
]);

lesson('504',64,[
  ['Systems are lists of equations and lists of unknowns:','الأنظمة قوائم معادلات وقوائم مجاهيل:'],
  '$ DSolve[{x\'[t] == y[t], y\'[t] == -x[t], x[0] == 1, y[0] == 0},\n  {x[t], y[t]}, t]\n(* {{x[t] -> Cos[t], y[t] -> -Sin[t]}} *)\nMatrixExp[{{0, 1}, {-1, 0}} t]   (* {{Cos[t], Sin[t]}, {-Sin[t], Cos[t]}} *)',
  ['A linear system `X′ = AX` has the solution `X = e^{At}X(0)`, which ``MatrixExp`` computes exactly. Nonlinear systems, such as predator–prey models, are solved with NDSolve.','والنظام الخطي `X′ = AX` حله `X = e^{At}X(0)` التي تحسبها ``MatrixExp`` بالضبط. والأنظمة غير الخطية مثل نماذج المفترس والفريسة تُحل بـ NDSolve.'],
],[
  Q('For the system above, what is `x(π)`?','للنظام أعلاه ما `x(π)`؟','−1',['cos π'],['1','0','π']),
  Q('What is ``MatrixExp[{{1, 0}, {0, 2}} t]``?','ما ``MatrixExp[{{1, 0}, {0, 2}} t]``؟','$ {{E^t, 0}, {0, E^(2 t)}}',[['For a diagonal matrix take the exponential of each entry.','للمصفوفة القطرية خذ أسية كل عنصر.']],['$ {{E, 0}, {0, E^2}} t','$ {{1, 0}, {0, 2}} E^t','$ {{t, 0}, {0, 2 t}}']),
  Q('Write `x′ = −x + y`, `y′ = −y` with `x(0) = 0`, `y(0) = 1` for DSolve.','اكتب `x′ = −x + y` و `y′ = −y` مع `x(0) = 0` و `y(0) = 1` لـ DSolve.','$ DSolve[{x\'[t] == -x[t] + y[t], y\'[t] == -y[t], x[0] == 0, y[0] == 1}, {x[t], y[t]}, t]',['y = e^{−t},   x = te^{−t}'],['$ DSolve[{x\'[t] == -x[t] + y[t], y\'[t] == -y[t]}, {x[0] == 0, y[0] == 1}, t]','$ DSolve[{x\'[t] = -x[t] + y[t], y\'[t] = -y[t]}, {x, y}, t]','$ DSolve[{x\'[t] == -x[t] + y[t], y\'[t] == -y[t], x[0] == 0, y[0] == 1}, x[t], t]']),
  Q('What is `x(1)` for that system?','ما `x(1)` لذلك النظام؟','e^{−1} ≈ 0.3679',['x = te^{−t}'],['0','1','e ≈ 2.718']),
]);

lesson('504',65,[
  ['NDSolve also solves time-dependent partial differential equations by the method of lines: space is discretized, and the resulting system of ordinary equations is integrated in time:','و NDSolve تحل المعادلات التفاضلية الجزئية الزمنية بطريقة الخطوط: يُقطَّع المكان ثم يُكامل نظام المعادلات العادية الناتج في الزمن:'],
  '$ sol = NDSolve[{D[u[x, t], t] == D[u[x, t], x, x],\n   u[x, 0] == Sin[Pi x], u[0, t] == 0, u[1, t] == 0},\n  u, {x, 0, 1}, {t, 0, 1}];\nu[0.5, 0.1] /. First[sol]        (* ≈ 0.3727 *)',
  ['The initial and boundary conditions must agree at the corners; otherwise NDSolve warns with ``NDSolve::ibcinc``. NDSolve does not handle fractional time derivatives, which is one reason for writing your own spectral solver.','ويجب أن تتفق الشروط الابتدائية والحدية عند الأركان، وإلا تحذّر NDSolve بالرسالة ``NDSolve::ibcinc``. ولا تتعامل NDSolve مع المشتقات الزمنية الكسرية، وهذا أحد أسباب كتابة حلّال طيفي خاص.'],
],[
  Q('The exact solution is `e^{−π^2 t} sin(πx)`. What is `u(0.5, 0.1)`?','الحل المضبوط `e^{−π^2 t} sin(πx)`. ما `u(0.5, 0.1)`؟','≈ 0.3727',['e^{−0.98696}'],['≈ 0.9870','≈ 0.5','≈ 0.1']),
  Q('Why is ``u[x, 0] == Sin[Pi x]`` consistent with the boundary conditions?','لماذا يتسق ``u[x, 0] == Sin[Pi x]`` مع الشروط الحدية؟',['`sin 0 = sin π = 0`, the boundary values at t = 0','`sin 0 = sin π = 0` وهما القيمتان الحديتان عند t = 0'],[['The corners agree.','الأركان متفقة.']],[['Because sin is smooth','لأن sin ملساء'],['It is not consistent','ليس متسقاً']]),
  Q('Which initial condition would trigger ``NDSolve::ibcinc`` with `u(0, t) = u(1, t) = 0`?','أي شرط ابتدائي يسبب ``NDSolve::ibcinc`` مع `u(0, t) = u(1, t) = 0`؟','u(x, 0) = 1',['u(0, 0) = 1 ≠ 0'],['u(x, 0) = x(1 − x)','u(x, 0) = sin(2πx)','u(x, 0) = 0']),
  Q('Can NDSolve solve `D_t^{1/2}u = u_{xx}` directly?','هل تستطيع NDSolve حل `D_t^{1/2}u = u_{xx}` مباشرة؟',['No: it integrates ordinary time derivatives only, so a fractional time derivative needs your own method','لا: تكامل المشتقات الزمنية العادية فقط، فالمشتقة الزمنية الكسرية تحتاج طريقة خاصة'],[['For example the mapped Legendre method of Unit 9.','مثل طريقة ليجندر المحوّلة في الوحدة 9.']],[['Yes, always','نعم دائماً'],['Only for x in [0, 1]','فقط لـ x في [0, 1]']]),
]);

lesson('504',66,[
  ['The Laplace transform turns derivatives into multiplication by s:','تحويل لابلاس يحوّل الاشتقاق إلى ضرب في s:'],
  '$ LaplaceTransform[t^2, t, s]               (* 2/s^3 *)\nLaplaceTransform[Exp[-a t], t, s]           (* 1/(a + s) *)\nLaplaceTransform[t^(1/2), t, s]             (* Sqrt[Pi]/(2 s^(3/2)) *)\nInverseLaplaceTransform[1/(s^2 + 1), s, t]  (* Sin[t] *)',
  ['For the Caputo derivative `ℒ{D^{α}y} = s^{α}Y − s^{α−1}y(0)` (0 < α ≤ 1). This gives exact solutions of linear fractional equations in terms of Mittag-Leffler functions, for example `ℒ{E_{α}(−t^{α})} = s^{α−1}/(s^{α} + 1)`.','ولمشتقة كابوتو `ℒ{D^{α}y} = s^{α}Y − s^{α−1}y(0)` (0 < α ≤ 1). وهذا يعطي حلولاً مضبوطة للمعادلات الكسرية الخطية بدلالة دوال ميتاج–ليفلر، فمثلاً `ℒ{E_{α}(−t^{α})} = s^{α−1}/(s^{α} + 1)`.'],
],[
  Q('What is ``LaplaceTransform[t^3, t, s]``?','ما ``LaplaceTransform[t^3, t, s]``؟','$ 6/s^4',['#f{3!}{s^4}'],['$ 3/s^4','$ 6/s^3','$ 1/s^4']),
  Q('What is ``InverseLaplaceTransform[1/(s + 2), s, t]``?','ما ``InverseLaplaceTransform[1/(s + 2), s, t]``؟','$ E^(-2 t)',['ℒ{e^{−2t}} = #f{1}{s + 2}'],['$ E^(2 t)','$ 1/(t + 2)','$ Sin[2 t]']),
  Q('Transform `D^{1/2}y = −y`, `y(0) = 1`, and solve for Y.','حوّل `D^{1/2}y = −y` مع `y(0) = 1` وحل لـ Y.','Y = #f{s^{−1/2}}{s^{1/2} + 1}',['s^{1/2}Y − s^{−1/2} = −Y'],['Y = #f{1}{s^{1/2} + 1}','Y = #f{s^{1/2}}{s + 1}','Y = #f{1}{s + 1}']),
  Q('Which function is that Y the transform of?','Y تلك تحويل أي دالة؟','E_{1/2}(−t^{1/2})',['#f{s^{α−1}}{s^{α} + 1},   α = #f{1}{2}'],['e^{−t}','E_{1/2}(−t)','t^{1/2}']),
]);

lesson('504',67,[
  ['Recent versions of Mathematica (13.1 and later) have fractional derivatives built in: ``CaputoD[f, {x, α}]`` is the Caputo derivative and ``FractionalD[f, {x, α}]`` the Riemann–Liouville derivative; a negative order gives the fractional integral:','الإصدارات الحديثة من Mathematica (13.1 وما بعدها) فيها المشتقات الكسرية جاهزة: ``CaputoD[f, {x, α}]`` مشتقة كابوتو و ``FractionalD[f, {x, α}]`` مشتقة ريمان–ليوفيل، والرتبة السالبة تعطي التكامل الكسري:'],
  '$ CaputoD[x^2, {x, 1/2}]          (* (8 x^(3/2))/(3 Sqrt[Pi]) *)\nCaputoD[1, {x, 1/2}]            (* 0 *)\nFractionalD[1, {x, 1/2}]        (* 1/(Sqrt[Pi] Sqrt[x]) *)\nFractionalD[x, {x, -1/2}]       (* (4 x^(3/2))/(3 Sqrt[Pi]) *)',
  ['Both are based at 0. In older versions use the power rule `D^{α}t^k = Γ(k + 1)/Γ(k + 1 − α)·t^{k−α}` directly.','وكلاهما بدايته 0. وفي الإصدارات الأقدم استخدم قاعدة القوة `D^{α}t^k = Γ(k + 1)/Γ(k + 1 − α)·t^{k−α}` مباشرة.'],
],[
  Q('Why is ``CaputoD[1, {x, 1/2}]`` zero but ``FractionalD[1, {x, 1/2}]`` not?','لماذا يكون ``CaputoD[1, {x, 1/2}]`` صفراً و ``FractionalD[1, {x, 1/2}]`` ليس كذلك؟',['Caputo differentiates first, and the derivative of a constant is 0','كابوتو يشتق أولاً ومشتقة الثابت صفر'],['D_{RL}^{1/2}1 = #f{x^{−1/2}}{Γ(1/2)}'],[['They are equal','متساويتان'],['Because 1 is exact','لأن 1 مضبوط']]),
  Q('Compute ``CaputoD[x, {x, 1/2}]``.','احسب ``CaputoD[x, {x, 1/2}]``.','$ (2 Sqrt[x])/Sqrt[Pi]',['#f{Γ(2)}{Γ(3/2)}x^{1/2} = #f{2}{#r{π}}x^{1/2}'],['$ Sqrt[x]/Sqrt[Pi]','$ 2 Sqrt[x]','$ x^(1/2)/Gamma[1/2]']),
  Q('Write the fractional integral of order 3/2 of `t^2`.','اكتب التكامل الكسري من الرتبة 3/2 لـ `t^2`.','$ FractionalD[t^2, {t, -3/2}]',['#f{Γ(3)}{Γ(9/2)}t^{7/2}'],['$ CaputoD[t^2, {t, 3/2}]','$ FractionalD[t^2, {t, 3/2}]','$ Integrate[t^2, {t, 3/2}]']),
  Q('In an older version without CaputoD, write the Caputo derivative of order α of `t^k` (k ≥ 1).','في إصدار أقدم دون CaputoD اكتب مشتقة كابوتو من الرتبة α لـ `t^k` (k ≥ 1).','$ Gamma[k + 1]/Gamma[k + 1 - alpha] t^(k - alpha)',[['The power rule.','قاعدة القوة.']],['$ Gamma[k + 1]/Gamma[k - alpha] t^(k - alpha)','$ Gamma[k]/Gamma[k + 1 - alpha] t^(k + alpha)','$ k!/(k - alpha)! t^k']),
]);

lesson('504',68,[
  ['A manufactured solution tests a solver: choose u, compute the matching f exactly, and check the pair before using it:','الحل المُصنَّع يختبر الحلّال: اختر u واحسب f المقابلة بالضبط وتحقق من الزوج قبل استخدامه:'],
  '$ u = t^(3/2) Sin[Pi x];\nf = Simplify[CaputoD[u, {t, 1/2}] - D[u, {x, 2}]]\nSimplify[CaputoD[u, {t, 1/2}] - D[u, {x, 2}] - f]     (* 0 *)\n{u /. t -> 0, u /. x -> 0, u /. x -> 1}               (* {0, 0, 0} *)',
  ['Also check the initial and boundary data that the problem will use. A wrong f is the commonest reason why a correct solver seems not to converge.','وتحقق أيضاً من البيانات الابتدائية والحدية التي ستستخدمها المسألة. والـ f الخاطئة أشهر سبب لظهور حلّال صحيح كأنه لا يتقارب.'],
],[
  Q('Compute `D_t^{1/2} t^{3/2}`.','احسب `D_t^{1/2} t^{3/2}`.','#f{3#r{π}}{4} t',['#f{Γ(5/2)}{Γ(2)} t'],['#f{#r{π}}{2} t','#f{3}{4} t','#f{4}{3#r{π}} t']),
  Q('Write f for `D_t^{1/2}u − u_{xx}` with `u = t^{3/2} sin(πx)`.','اكتب f لـ `D_t^{1/2}u − u_{xx}` مع `u = t^{3/2} sin(πx)`.','f = (#f{3#r{π}}{4} t + π^2 t^{3/2}) sin(πx)',['−u_{xx} = π^2 t^{3/2} sin(πx)'],['f = (#f{3#r{π}}{4} t − π^2 t^{3/2}) sin(πx)','f = #f{3#r{π}}{4} t sin(πx)','f = π^2 t^{3/2} sin(πx)']),
  Q('Which λ makes this u polynomial in time?','أي λ تجعل u هذه كثيرة حدود في الزمن؟','λ = #f{1}{2}',['t^{3/2} = s^3,   s = t^{1/2}'],['λ = #f{3}{2}','λ = 1','λ = #f{1}{4}']),
  Q('What does a nonzero result of the second Simplify mean?','ماذا تعني نتيجة غير صفرية لـ Simplify الثانية؟',['f does not match u: the test problem itself is wrong','f لا تطابق u: مسألة الاختبار نفسها خاطئة'],[['Fix f before testing the solver.','أصلح f قبل اختبار الحلّال.']],[['The solver is wrong','الحلّال خاطئ'],['Nothing','لا شيء']]),
]);

lesson('504',69,[
  ['The maximum error is measured on a grid that includes the boundary:','يُقاس أكبر خطأ على شبكة تتضمن الحدود:'],
  '$ grid = Range[0, 1, 1/10];\nerr = Max[Table[Abs[uN[x, t] - uExact[x, t]], {x, grid}, {t, grid}]]\nrel = err/Max[Table[Abs[uExact[x, t]], {x, grid}, {t, grid}]]',
  ['Use exact grid points (``1/10``, not ``0.1``) so that they are reproducible, and evaluate the numerical solution with machine numbers (``N``) for speed. A grid finer than the polynomial degree is needed to see the error between the collocation points.','استخدم نقاط شبكة مضبوطة (``1/10`` لا ``0.1``) حتى تكون قابلة للتكرار، واحسب الحل العددي بأعداد الآلة (``N``) للسرعة. ونحتاج شبكة أدق من درجة كثيرة الحدود لرؤية الخطأ بين نقاط التجميع.'],
],[
  Q('How many points does the grid above contain in (x, t)?','كم نقطة تحوي الشبكة أعلاه في (x, t)؟','121',['11·11'],['100','110','21']),
  Q('Why measure the error at points other than the collocation points?','لماذا نقيس الخطأ عند نقاط غير نقاط التجميع؟',['At the collocation points the residual is zero by construction, which can hide the error elsewhere','عند نقاط التجميع الباقي صفر بالبناء وقد يخفي ذلك الخطأ في مكان آخر'],[['Use a grid finer than the polynomial degree.','استخدم شبكة أدق من درجة كثيرة الحدود.']],[['To make it faster','لتسريعه'],['There is no reason','لا سبب']]),
  Q('`max |u − u_N| = 2 × 10^{−6}` and `max |u| = 0.5`. What is the relative error?','`max |u − u_N| = 2 × 10^{−6}` و `max |u| = 0.5`. ما الخطأ النسبي؟','4 × 10^{−6}',['#f{2 × 10^{−6}}{0.5}'],['10^{−6}','2 × 10^{−6}','4 × 10^{−5}']),
  Q('Write the L∞ error on a 1-D grid ``xs`` with ``Max`` and ``Abs``.','اكتب خطأ L∞ على شبكة أحادية ``xs`` بـ ``Max`` و ``Abs``.','$ Max[Abs[uN /@ xs - uExact /@ xs]]',[['Both functions are mapped over the grid.','الدالتان تُطبقان على الشبكة.']],['$ Max[uN - uExact]','$ Abs[Max[uN /@ xs] - Max[uExact /@ xs]]','$ Norm[uN - uExact, Infinity]']),
]);

lesson('504',70,[
  ['A convergence table lists the error for increasing N with the observed order:','جدول التقارب يعرض الخطأ لقيم N متزايدة مع الرتبة الملاحظة:'],
  '$ data = Table[{n, err[n]}, {n, {4, 8, 16, 32}}];\nrows = Table[{data[[k, 1]], data[[k, 2]],\n   Log[data[[k - 1, 2]]/data[[k, 2]]]/\n   Log[data[[k, 1]]/data[[k - 1, 1]]]}, {k, 2, 4}];\nGrid[Prepend[rows, {"N", "error", "order"}], Frame -> All]',
  ['For spectral methods the order keeps growing with N; then show the error on ``ListLogPlot`` against N, where a straight line confirms exponential convergence.','وللطرق الطيفية تستمر الرتبة في الكبر مع N، فاعرض الخطأ في ``ListLogPlot`` مقابل N حيث يؤكد الخط المستقيم التقارب الأسي.'],
],[
  Q('Errors `10^{−3}` at N = 8 and `6.25 × 10^{−5}` at N = 16. What is the order?','الأخطاء `10^{−3}` عند N = 8 و `6.25 × 10^{−5}` عند N = 16. ما الرتبة؟','4',['#f{log 16}{log 2}'],['16','2','8']),
  Q('The orders in a table are 3.1, 5.8, 9.4, 14.2. What kind of convergence is this?','الرتب في جدول هي 3.1 و 5.8 و 9.4 و 14.2. أي نوع من التقارب هذا؟',['Spectral (exponential): the order keeps increasing','طيفي (أسي): الرتبة تستمر في الزيادة'],[['An algebraic rate gives a constant order.','المعدل الجبري يعطي رتبة ثابتة.']],[['Algebraic of order 3','جبري من الرتبة 3'],['Divergence','تباعد']]),
  Q('What does ``Prepend[rows, {"N", "error", "order"}]`` do?','ماذا تفعل ``Prepend[rows, {"N", "error", "order"}]``؟',['It puts the header row in front of the rows','تضع صف العناوين أمام الصفوف'],[['``Append`` would put it at the end.','``Append`` تضعه في النهاية.']],[['It sorts the rows','ترتب الصفوف'],['It deletes the first row','تحذف الصف الأول']]),
  Q('The error stops decreasing at about `10^{−14}`. Why?','الخطأ يتوقف عن التناقص عند نحو `10^{−14}`. لماذا؟',['Rounding error of machine numbers, amplified by the condition number','خطأ تقريب أعداد الآلة مضخماً بعدد الشرط'],[['More precision (``WorkingPrecision``) would move the floor down.','دقة أعلى (``WorkingPrecision``) تخفض هذا الحد.']],[['The method is wrong','الطريقة خاطئة'],['N is too small','N صغير جداً']]),
]);

lesson('504',71,[
  ['``FindRoot`` uses Newton’s method from one starting value, or a secant-type method from two. It also solves systems:','``FindRoot`` تستخدم طريقة نيوتن من قيمة ابتدائية واحدة أو طريقة من نوع القاطع من قيمتين، وتحل الأنظمة أيضاً:'],
  '$ FindRoot[x^3 - 2 x - 5, {x, 2}]                       (* {x -> 2.09455} *)\nFindRoot[x^3 - 2 x - 5, {x, 2, 3}]                    (* secant start *)\nFindRoot[{x^2 + y^2 == 1, x == y}, {{x, 1}, {y, 0}}]\n(* {x -> 0.707107, y -> 0.707107} *)',
  ['Good starting values matter: for the zeros of `P_n` use the Chebyshev approximations `cos((4k − 1)π/(4n + 2))`.','والقيم الابتدائية الجيدة مهمة: لجذور `P_n` استخدم تقريبات تشيبيشيف `cos((4k − 1)π/(4n + 2))`.'],
],[
  Q('Find the largest zero of `P_4` starting from 0.9.','أوجد أكبر جذر لـ `P_4` بدءاً من 0.9.','$ FindRoot[LegendreP[4, x], {x, 0.9}]   (* {x -> 0.861136} *)',[['The Gauss–Legendre node for n = 4.','عقدة جاوس–ليجندر عند n = 4.']],['$ FindRoot[LegendreP[4, x], {x, 0.9}]   (* {x -> 0.339981} *)','$ Solve[LegendreP[4, x], {x, 0.9}]','$ FindRoot[LegendreP[4, 0.9], x]']),
  Q('Compute the Chebyshev starting value for k = 1, n = 4.','احسب القيمة الابتدائية لتشيبيشيف عند k = 1 و n = 4.','cos(#f{π}{6}) ≈ 0.866',['#f{(4 − 1)π}{18} = #f{π}{6}'],['cos(#f{π}{18}) ≈ 0.985','cos(#f{π}{4}) ≈ 0.707','0.9']),
  Q('What does FindRoot return if Newton’s method fails to converge?','ماذا تعيد FindRoot إذا لم تتقارب طريقة نيوتن؟',['The last iterate, with a message such as ``FindRoot::lstol``','آخر تقريب مع رسالة مثل ``FindRoot::lstol``'],[['Always read the messages and check the residual.','اقرأ الرسائل دائماً وتحقق من الباقي.']],[['The exact root','الجذر المضبوط'],['Nothing','لا شيء']]),
  Q('Check a FindRoot answer ``r``.','تحقق من جواب FindRoot ``r``.','$ x^3 - 2 x - 5 /. r',[['The residual should be close to zero.','يجب أن يكون الباقي قريباً من الصفر.']],['$ r == 0','$ FindRoot[r]','$ N[r]']),
]);

lesson('504',72,[
  ['``InterpolatingPolynomial`` gives the polynomial through given points in Newton’s nested form; ``Interpolation`` gives a piecewise (cubic by default) interpolating function:','``InterpolatingPolynomial`` تعطي كثيرة الحدود المارة بنقاط معطاة بصيغة نيوتن المتداخلة، و ``Interpolation`` تعطي دالة استكمال مجزأة (تكعيبية افتراضياً):'],
  '$ p = InterpolatingPolynomial[{{0, 1}, {1, 3}, {2, 7}}, x]\n(* 1 + x (1 + x) *)\nExpand[p]   (* 1 + x + x^2 *)\nf = Interpolation[{{0, 1}, {1, 3}, {2, 7}, {3, 13}}];  f[1.5]',
  ['High-degree interpolation at equally spaced points oscillates (Runge’s phenomenon); at Chebyshev or Legendre points it converges for smooth functions.','والاستكمال عالي الدرجة عند نقاط متساوية التباعد يتذبذب (ظاهرة رونغه)، وعند نقاط تشيبيشيف أو ليجندر يتقارب للدوال الملساء.'],
],[
  Q('What is ``p /. x -> 3``?','ما ``p /. x -> 3``؟','$ 13',['1 + 3·4'],['$ 7','$ 10','$ 9']),
  Q('What is ``InterpolatingPolynomial[{{0, 0}, {1, 1}}, x]``?','ما ``InterpolatingPolynomial[{{0, 0}, {1, 1}}, x]``؟','$ x',[['The line through (0, 0) and (1, 1).','الخط المار بـ (0, 0) و (1, 1).']],['$ 1 + x','$ x^2','$ 1']),
  Q('Interpolate `1/(1 + 25x^2)` at 11 equally spaced points on [−1, 1]. What happens near ±1?','استكمل `1/(1 + 25x^2)` عند 11 نقطة متساوية التباعد على [−1, 1]. ماذا يحدث قرب ±1؟',['Large oscillations: Runge’s phenomenon','تذبذبات كبيرة: ظاهرة رونغه'],[['Use Chebyshev points instead.','استخدم نقاط تشيبيشيف بدلاً منها.']],[['Very small errors','أخطاء صغيرة جداً'],['The interpolant is 0','كثيرة الاستكمال صفر']]),
  Q('Which option makes ``Interpolation`` piecewise linear?','أي خيار يجعل ``Interpolation`` خطية مجزأة؟','$ InterpolationOrder -> 1',[['The default is 3.','الافتراضي 3.']],['$ Method -> "Linear"','$ Order -> 1','$ PolynomialDegree -> 1']),
]);

lesson('504',73,[
  ['The Gauss–Legendre nodes are the zeros of `P_n` and the weights are `w_i = 2/((1 − x_i^2)P_n′(x_i)^2)`:','عقد جاوس–ليجندر جذور `P_n` والأوزان `w_i = 2/((1 − x_i^2)P_n′(x_i)^2)`:'],
  '$ gauss[n_] := Module[{x = Sort[x /. NSolve[LegendreP[n, x] == 0, x]]},\n  {x, 2/((1 - x^2) (D[LegendreP[n, y], y] /. y -> x)^2)}]\n{xs, ws} = gauss[3]\n(* nodes:   -0.774597, 0., 0.774597 *)\n(* weights: 0.555556, 0.888889, 0.555556 *)\nws . Exp[xs]            (* ≈ 2.35034 *)',
  ['Arithmetic on lists is Listable, so the weight formula works on the whole vector of nodes at once. The rule `Σ w_i f(x_i)` is exact for polynomials of degree ≤ 2n − 1.','والحساب على القوائم Listable فتعمل صيغة الأوزان على متجه العقد كله دفعة واحدة. والقاعدة `Σ w_i f(x_i)` مضبوطة لكثيرات الحدود ذات الدرجة ≤ 2n − 1.'],
],[
  Q('What are the exact weights for n = 3?','ما الأوزان المضبوطة عند n = 3؟','#f{5}{9},  #f{8}{9},  #f{5}{9}',[['They sum to 2.','مجموعها 2.']],['#f{1}{3},  #f{4}{3},  #f{1}{3}','#f{2}{3},  #f{2}{3},  #f{2}{3}','1,  1,  1']),
  Q('Compute `∫_{−1}^{1} x^4 dx` with the 3-point rule.','احسب `∫_{−1}^{1} x^4 dx` بقاعدة النقاط الثلاث.','#f{2}{5}',['2·#f{5}{9}·#f{9}{25} = #f{2}{5}',['Exact, since 4 ≤ 2·3 − 1.','مضبوط لأن 4 ≤ 2·3 − 1.']],['#f{2}{9}','#f{1}{5}','#f{18}{25}']),
  Q('What does ``ws . Exp[xs]`` approximate?','ماذا تقرّب ``ws . Exp[xs]``؟','∫_{−1}^{1} e^x dx = e − e^{−1} ≈ 2.35040',[['The 3-point value 2.35034 has an error of about `6 × 10^{−5}`.','قيمة النقاط الثلاث 2.35034 خطؤها نحو `6 × 10^{−5}`.']],['e ≈ 2.71828','2','1']),
  Q('Why use ``Sort`` on the NSolve results?','لماذا نستخدم ``Sort`` على نتائج NSolve؟',['NSolve does not promise an order, and the nodes should be increasing','NSolve لا تضمن ترتيباً ويجب أن تكون العقد تصاعدية'],[['Matrices built later depend on the order.','المصفوفات المبنية لاحقاً تعتمد على الترتيب.']],[['To make them exact','لجعلها مضبوطة'],['It is not needed','لا حاجة']]),
]);

lesson('504',74,[
  ['The Golub–Welsch method gets nodes and weights from the eigenvalues and eigenvectors of the symmetric tridiagonal Jacobi matrix. For Legendre the off-diagonal entries are `β_k = k/#r{4k^2 − 1}`:','طريقة Golub–Welsch تحصل على العقد والأوزان من القيم والمتجهات الذاتية لمصفوفة جاكوبي المتماثلة ثلاثية القطر. ولليجندر عناصر القطرين الجانبيين `β_k = k/#r{4k^2 − 1}`:'],
  '$ gw[n_] := Module[{b, j, vals, vecs},\n  b = Table[k/Sqrt[4 k^2 - 1.], {k, n - 1}];\n  j = SparseArray[{Band[{1, 2}] -> b, Band[{2, 1}] -> b}, {n, n}];\n  {vals, vecs} = Eigensystem[Normal[j]];\n  Transpose[Sort[Transpose[{vals, 2 vecs[[All, 1]]^2}]]]]',
  ['The weights are 2 times the squared first components of the normalized eigenvectors. This is stable for large n, unlike root-finding with the explicit polynomial.','والأوزان ضعف مربعات المركبات الأولى للمتجهات الذاتية المطبّعة. وهذا مستقر لـ n كبير بخلاف إيجاد الجذور بكثيرة الحدود الصريحة.'],
],[
  Q('Compute `β_1`.','احسب `β_1`.','#f{1}{#r{3}}',['#f{1}{#r{4 − 1}}'],['#f{1}{3}','#f{1}{2}','1']),
  Q('For n = 2, what are the eigenvalues of `#m{0, β_1 ;; β_1, 0}`?','عند n = 2 ما القيم الذاتية لـ `#m{0, β_1 ;; β_1, 0}`؟','±#f{1}{#r{3}}',['λ^2 = β_1^2'],['0, β_1','±#f{1}{3}','±1']),
  Q('Why does the code use ``4 k^2 - 1.`` with a decimal point?','لماذا يستخدم الكود ``4 k^2 - 1.`` بفاصلة عشرية؟',['To make the matrix numeric, so Eigensystem uses fast machine routines','لجعل المصفوفة عددية فتستخدم Eigensystem الإجراءات الآلية السريعة'],[['Exact input would ask for exact algebraic eigenvalues.','المدخل المضبوط يطلب قيماً ذاتية جبرية مضبوطة.']],[['It is a typo','خطأ مطبعي'],['To make it exact','لجعلها مضبوطة']]),
  Q('Why is the pair list transposed, sorted and transposed back?','لماذا تُقلب قائمة الأزواج وتُرتب ثم تُقلب ثانية؟',['To sort the nodes and keep each weight with its node','لترتيب العقد مع إبقاء كل وزن مع عقدته'],[['Sort orders pairs by their first element.','Sort ترتب الأزواج حسب عنصرها الأول.']],[['To normalize the weights','لتطبيع الأوزان'],['To make it faster','لتسريعه']]),
]);

lesson('504',75,[
  ['The differentiation matrix at nodes ``xs`` uses the barycentric weights `λ_j = 1/Π_{k≠j}(x_j − x_k)`:','مصفوفة التفاضل عند العقد ``xs`` تستخدم الأوزان الباريسنترية `λ_j = 1/Π_{k≠j}(x_j − x_k)`:'],
  '$ diffMat[xs_] := Module[{n = Length[xs], lam, d},\n  lam = Table[1/Product[If[k == j, 1, xs[[j]] - xs[[k]]], {k, n}], {j, n}];\n  d = Table[If[i == j, 0, (lam[[j]]/lam[[i]])/(xs[[i]] - xs[[j]])],\n    {i, n}, {j, n}];\n  d - DiagonalMatrix[Total[d, {2}]]]',
  ['``Total[d, {2}]`` gives the row sums, and subtracting them on the diagonal makes every row sum to zero. The matrix is exact for polynomials of degree < n.','و ``Total[d, {2}]`` تعطي مجاميع الصفوف، وطرحها على القطر يجعل مجموع كل صف صفراً. والمصفوفة مضبوطة لكثيرات الحدود ذات الدرجة < n.'],
],[
  Q('What is ``diffMat[{-1, 1}]``?','ما ``diffMat[{-1, 1}]``؟','$ {{-1/2, 1/2}, {-1/2, 1/2}}',['#f{u_1 − u_0}{2}'],['$ {{1/2, -1/2}, {1/2, -1/2}}','$ {{-1, 1}, {-1, 1}}','$ {{0, 1/2}, {-1/2, 0}}']),
  Q('With ``d = diffMat[{-1, 0, 1}]``, what is ``d . {1, 0, 1}``?','مع ``d = diffMat[{-1, 0, 1}]`` ما ``d . {1, 0, 1}``؟','$ {-2, 0, 2}',[['The values of `x^2` at the nodes; the result is `2x` there.','قيم `x^2` عند العقد، والنتيجة `2x` هناك.']],['$ {1, 0, 1}','$ {2, 0, 2}','$ {-1, 0, 1}']),
  Q('Write the first row of ``diffMat[{-1, 0, 1}]``.','اكتب الصف الأول من ``diffMat[{-1, 0, 1}]``.','$ {-3/2, 2, -1/2}',['ℓ_0′(−1) = −#f{3}{2},   ℓ_1′(−1) = 2,   ℓ_2′(−1) = −#f{1}{2}'],['$ {-1/2, 0, 1/2}','$ {1, -2, 1}','$ {-3/2, 2, 1/2}']),
  Q('What does ``Total[d, {2}]`` compute?','ماذا تحسب ``Total[d, {2}]``؟',['The sum of each row','مجموع كل صف'],[['Level 2 sums across the columns of each row.','المستوى 2 يجمع عبر أعمدة كل صف.']],[['The total of all entries','مجموع كل العناصر'],['The sum of each column','مجموع كل عمود']]),
]);

lesson('504',76,[
  ['Finite differences for `−u″ = f`, `u(0) = u(1) = 0` with n interior points, `h = 1/(n + 1)`:','الفروق المحدودة لـ `−u″ = f` مع `u(0) = u(1) = 0` و n نقطة داخلية و `h = 1/(n + 1)`:'],
  '$ fd[n_, f_] := Module[{h = 1/(n + 1), a, xs},\n  xs = h Range[n];\n  a = SparseArray[{Band[{1, 1}] -> 2, Band[{1, 2}] -> -1,\n     Band[{2, 1}] -> -1}, {n, n}]/h^2;\n  {xs, LinearSolve[a, f /@ xs]}]',
  ['The error is `O(h^2)`: halving h divides it by about 4. Quadratic solutions are reproduced exactly at the grid points, because the second difference of a quadratic is exact.','والخطأ `O(h^2)`: تنصيف h يقسمه على نحو 4. والحلول التربيعية تُعاد بالضبط عند نقاط الشبكة لأن الفرق الثاني لكثيرة تربيعية مضبوط.'],
],[
  Q('With n = 3 and `f = 2`, what is `u(1/2)`?','مع n = 3 و `f = 2` ما `u(1/2)`؟','#f{1}{4}',['u = x(1 − x),   #f{1}{2}·#f{1}{2}',['Exact, the solution is quadratic.','مضبوط لأن الحل تربيعي.']],['#f{1}{2}','#f{3}{16}','#f{1}{8}']),
  Q('What is h for n = 9?','ما h عند n = 9؟','#f{1}{10}',['#f{1}{n + 1}'],['#f{1}{9}','#f{1}{8}','9']),
  Q('The error for n = 9 is `4 × 10^{−4}`. Estimate it for n = 19.','الخطأ عند n = 9 هو `4 × 10^{−4}`. قدّره عند n = 19.','≈ 10^{−4}',[['Halving h divides the error by `2^2 = 4`.','تنصيف h يقسم الخطأ على `2^2 = 4`.']],['≈ 2 × 10^{−4}','≈ 10^{−8}','≈ 4 × 10^{−5}']),
  Q('Why is the matrix divided by `h^2`?','لماذا تُقسم المصفوفة على `h^2`؟',['It is the second difference quotient: `−u″ ≈ (−u_{i−1} + 2u_i − u_{i+1})/h^2`','هو خارج قسمة الفرق الثاني: `−u″ ≈ (−u_{i−1} + 2u_i − u_{i+1})/h^2`'],[['The matrix holds only the pattern (−1, 2, −1).','المصفوفة تحمل النمط (−1, 2, −1) فقط.']],[['To normalize it','لتطبيعها'],['It is not needed','لا حاجة']]),
]);

lesson('504',77,[
  ['Collocation for `u″ = f`, `u(±1) = 0`: square the differentiation matrix, impose the equation at interior nodes and replace the first and last rows by the boundary conditions:','التجميع لـ `u″ = f` مع `u(±1) = 0`: ربّع مصفوفة التفاضل، وافرض المعادلة عند العقد الداخلية، واستبدل الصفين الأول والأخير بالشروط الحدية:'],
  '$ xs = N[-Cos[Pi Range[0, n]/n]];   (* Chebyshev–Lobatto points *)\nd2 = diffMat[xs] . diffMat[xs];\na = d2;  a[[1]] = UnitVector[n + 1, 1];  a[[-1]] = UnitVector[n + 1, n + 1];\nrhs = f /@ xs;  rhs[[{1, -1}]] = 0;\nu = LinearSolve[a, rhs]',
  ['For smooth f the error decreases exponentially with n, until rounding error from the `n^4` conditioning takes over.','وللدوال الملساء f يتناقص الخطأ أسياً مع n حتى يغلب خطأ التقريب الناتج عن الشرط `n^4`.'],
],[
  Q('With nodes `{−1, 0, 1}` and `f = 2`, what is `u(0)`?','مع العقد `{−1, 0, 1}` و `f = 2` ما `u(0)`؟','−1',['u_0 − 2u_1 + u_2 = 2,   u_0 = u_2 = 0',['Exact: `u = x^2 − 1`.','مضبوط: `u = x^2 − 1`.']],['1','0','−2']),
  Q('What does ``UnitVector[4, 1]`` give?','ماذا تعطي ``UnitVector[4, 1]``؟','$ {1, 0, 0, 0}',[['It replaces the first equation by `u_1 = 0`.','تستبدل المعادلة الأولى بـ `u_1 = 0`.']],['$ {0, 0, 0, 1}','$ {1, 1, 1, 1}','$ 1']),
  Q('What is the middle row of `D^2` for the nodes `{−1, 0, 1}`?','ما الصف الأوسط من `D^2` للعقد `{−1, 0, 1}`؟','$ {1, -2, 1}',[['For three points `u″` is the second difference with h = 1.','لثلاث نقاط `u″` هي الفرق الثاني مع h = 1.']],['$ {-1, 2, -1}','$ {1, 0, -1}','$ {0, 1, 0}']),
  Q('About how does the condition number of `D^2` grow with n?','كيف ينمو عدد شرط `D^2` تقريباً مع n؟','~ n^4',[['Each differentiation contributes `n^2`.','كل اشتقاق يساهم بـ `n^2`.']],['~ n^2','~ n','~ 2^n']),
]);

lesson('504',78,[
  ['Galerkin with the basis `φ_k = P_k − P_{k+2}` for `−u″ = f`, `u(±1) = 0`: the stiffness matrix is diagonal, `⟨φ_j′, φ_k′⟩ = (4k + 6)δ_{jk}`:','جاليركن بالأساس `φ_k = P_k − P_{k+2}` لـ `−u″ = f` مع `u(±1) = 0`: مصفوفة الجساءة قطرية `⟨φ_j′, φ_k′⟩ = (4k + 6)δ_{jk}`:'],
  '$ phi[k_, x_] := LegendreP[k, x] - LegendreP[k + 2, x]\nc = Table[Integrate[f[x] phi[k, x], {x, -1, 1}]/(4 k + 6), {k, 0, n}];\nuN[x_] = c . Table[phi[k, x], {k, 0, n}]',
  ['Here ``uN[x_] = …`` with a single ``=`` evaluates the sum once and stores the polynomial, which is then fast to evaluate. For a general f use NIntegrate or Gauss quadrature for the right-hand side.','وهنا ``uN[x_] = …`` بـ ``=`` واحدة تحسب المجموع مرة وتخزن كثيرة الحدود فيكون حسابها سريعاً. ولـ f عامة استخدم NIntegrate أو تربيع جاوس للطرف الأيمن.'],
],[
  Q('With `f = 1`, compute `c_0`.','مع `f = 1` احسب `c_0`.','#f{1}{3}',['∫_{−1}^{1}(1 − P_2) dx = 2','#f{2}{6}'],['#f{2}{3}','1','#f{1}{6}']),
  Q('Which function is `c_0 φ_0` for `f = 1`?','ما الدالة `c_0 φ_0` عند `f = 1`؟','#f{1 − x^2}{2}',['#f{1}{3}(1 − #f{3x^2 − 1}{2}) = #f{1}{3}·#f{3}{2}(1 − x^2)',['Exact: `−u″ = 1`.','مضبوط: `−u″ = 1`.']],['1 − x^2','#f{1 − x^2}{3}','#f{x^2}{2}']),
  Q('Why is ``uN[x_] = …`` written with ``=`` here?','لماذا كُتب ``uN[x_] = …`` بـ ``=`` هنا؟',['To compute the polynomial once instead of at every call','لحساب كثيرة الحدود مرة واحدة بدل حسابها عند كل استدعاء'],[['With ``:=`` the Table and dot product would be redone each time.','مع ``:=`` يُعاد Table والضرب النقطي كل مرة.']],[['It is a typo','خطأ مطبعي'],['To make it exact','لجعلها مضبوطة']]),
  Q('What is the stiffness entry for k = 2?','ما عنصر الجساءة عند k = 2؟','14',['4·2 + 6'],['10','6','8']),
]);

lesson('504',79,[
  ['The tau method for `u′ + u = 0`, `u(0) = 1` on [0, 1] in shifted Legendre polynomials, written directly with Integrate and Solve:','طريقة تاو لـ `u′ + u = 0` مع `u(0) = 1` على [0, 1] بكثيرات ليجندر المزاحة، مكتوبة مباشرة بـ Integrate و Solve:'],
  '$ n = 2;  ps[k_, t_] := LegendreP[k, 2 t - 1];\nu[t_] = Sum[c[k] ps[k, t], {k, 0, n}];\neqs = Append[Table[Integrate[(u\'[t] + u[t]) ps[k, t], {t, 0, 1}] == 0,\n    {k, 0, n - 1}], u[0] == 1];\nsol = Solve[eqs, Table[c[k], {k, 0, n}]];\nu[1] /. First[sol]          (* 7/19 *)',
  ['Exact arithmetic gives the rational answer 7/19 ≈ 0.36842; the error against `e^{−1}` is about `5 × 10^{−4}`. For large n replace Solve by CoefficientArrays and LinearSolve (Lesson 60).','والحساب المضبوط يعطي الجواب الكسري 7/19 ≈ 0.36842، وخطؤه مقابل `e^{−1}` نحو `5 × 10^{−4}`. ولـ n كبير استبدل Solve بـ CoefficientArrays و LinearSolve (الدرس 60).'],
],[
  Q('How many equations does ``eqs`` contain for n = 2?','كم معادلة في ``eqs`` عند n = 2؟','3',[['n residual equations and one condition.','n معادلة باقٍ وشرط واحد.']],['2','4','1']),
  Q('With n = 1 the same code gives ``u[1]`` equal to what?','مع n = 1 يعطي الكود نفسه ``u[1]`` مساوياً لماذا؟','$ 1/3',['c_0 = #f{2}{3},   c_1 = −#f{1}{3}'],['$ 7/19','$ 1/2','$ 0']),
  Q('What does ``Append[…, u[0] == 1]`` add?','ماذا تضيف ``Append[…, u[0] == 1]``؟',['The initial condition as the last equation','الشرط الابتدائي معادلةً أخيرة'],[['The tau method drops the last residual equation and uses the condition instead.','طريقة تاو تحذف آخر معادلة باقٍ وتستخدم الشرط بدلها.']],[['Another residual equation','معادلة باقٍ أخرى'],['Nothing','لا شيء']]),
  Q('Why does the code use ``c[k]`` instead of ``ck``?','لماذا يستخدم الكود ``c[k]`` بدل ``ck``؟',['Indexed unknowns can be built with Table for any n','المجاهيل المفهرسة تُبنى بـ Table لأي n'],['$ Table[c[k], {k, 0, n}]'],[['``ck`` is reserved','``ck`` محجوز'],['It is faster','أسرع']]),
]);

lesson('504',80,[
  ['Precision is a property of each number. ``N[x, k]`` asks for k digits of an exact x, while ``SetPrecision[x, k]`` forces a number to have k digits, padding a machine number with the binary digits it really has:','الدقة خاصية لكل عدد. ``N[x, k]`` تطلب k رقماً لعدد مضبوط x، بينما ``SetPrecision[x, k]`` تجبر العدد على k رقماً، فتكمل عدد الآلة بالأرقام الثنائية التي يحملها فعلاً:'],
  '$ N[1/10, 30]               (* 0.100000000000000000000000000000 *)\nN[0.1, 30]                 (* 0.1  (still machine precision) *)\nSetPrecision[0.1, 30]      (* 0.100000000000000005551115123126 *)\nNIntegrate[f, {x, 0, 1}, WorkingPrecision -> 30]',
  ['Start high-precision computations from exact input. ``WorkingPrecision`` is available in NIntegrate, NDSolve, FindRoot and NSolve.','ابدأ حسابات الدقة العالية من مدخل مضبوط. و ``WorkingPrecision`` متاحة في NIntegrate و NDSolve و FindRoot و NSolve.'],
],[
  Q('What is ``Precision[N[0.1, 30]]``?','ما ``Precision[N[0.1, 30]]``؟','$ MachinePrecision',[['N cannot add digits to a machine number.','N لا تستطيع إضافة أرقام لعدد آلي.']],['$ 30.','$ Infinity','$ 16.']),
  Q('Why does ``SetPrecision[0.1, 30]`` show digits ``…5551…``?','لماذا تُظهر ``SetPrecision[0.1, 30]`` الأرقام ``…5551…``؟',['0.1 has no exact binary representation; these are the digits of the stored binary number','العدد 0.1 لا تمثيل ثنائياً مضبوطاً له، وهذه أرقام العدد الثنائي المخزن'],[['Use exact ``1/10`` to get zeros.','استخدم ``1/10`` المضبوط للحصول على أصفار.']],[['A bug','خلل'],['Rounding by SetPrecision','تقريب من SetPrecision']]),
  Q('How do you compute `#r{2}` to 50 digits?','كيف تحسب `#r{2}` بـ 50 رقماً؟','$ N[Sqrt[2], 50]',[['Exact input, then N with 50 digits.','مدخل مضبوط ثم N بـ 50 رقماً.']],['$ N[Sqrt[2.], 50]','$ SetPrecision[Sqrt[2.], 50]','$ Sqrt[N[2], 50]']),
  Q('Which option makes FindRoot work with 40 digits?','أي خيار يجعل FindRoot تعمل بـ 40 رقماً؟','$ WorkingPrecision -> 40',[['Give the starting value exactly too, for example 9/10.','وأعطِ القيمة الابتدائية مضبوطة أيضاً، مثل 9/10.']],['$ Precision -> 40','$ Digits -> 40','$ N -> 40']),
]);

/* ---- 504 · Unit 9 (lessons 81–90): the mapped Legendre code;  Unit 10 (lessons 91–100): mastery ---- */
lesson('504',81,[
  ['A notebook for the mapped Legendre method (Course 501) follows the same pipeline for every example:','دفتر طريقة ليجندر المحوّلة (المقرر 501) يتبع المراحل نفسها لكل مثال:'],
  '$ (* 1 *) parameters: N, M, λ, γ, orders, coefficients\n(* 2 *) data: exact solution, g, ψ0, ψ1, φ0, φ1\n(* 3 *) the function h of the integrated form\n(* 4 *) basis functions and the numbers E[n, r]\n(* 5 *) matrices: D2 (Theorem 3.1), I (Theorem 3.2)\n(* 6 *) unknown matrix Y and the residual R\n(* 7 *) collocation points and equations\n(* 8 *) solve, (* 9 *) error and timing',
  ['The initial conditions enter only through h; the boundary conditions give `2(M + 1)` equations and the residual `(N − 1)(M + 1)`, together `(N + 1)(M + 1)`, the number of unknowns.','والشروط الابتدائية تدخل عبر h فقط، والشروط الحدية تعطي `2(M + 1)` معادلة والباقي `(N − 1)(M + 1)`، ومجموعهما `(N + 1)(M + 1)` وهو عدد المجاهيل.'],
],[
  Q('Where do the initial conditions `ψ_0`, `ψ_1` enter?','أين يدخل الشرطان الابتدائيان `ψ_0` و `ψ_1`؟',['Only in the function h of the integrated form','فقط في الدالة h للصيغة التكاملية'],[['Lemma 2.1 leaves the initial values on the right-hand side.','اللمة 2.1 تترك القيم الابتدائية في الطرف الأيمن.']],[['As extra collocation equations','معادلات تجميع إضافية'],['In the matrix D2','في المصفوفة D2']]),
  Q('How many unknowns are there for N = 8, M = 8?','كم مجهولاً عند N = 8 و M = 8؟','81',['(N + 1)(M + 1) = 9·9'],['64','72','90']),
  Q('How many residual equations are there for N = 8, M = 8?','كم معادلة باقٍ عند N = 8 و M = 8؟','63',['(N − 1)(M + 1) = 7·9'],['81','18','64']),
  Q('Which stage should be checked first when a notebook gives large errors?','أي مرحلة يجب فحصها أولاً حين يعطي الدفتر أخطاء كبيرة؟',['The data and h: check that the exact solution satisfies the problem with the computed g and h','البيانات و h: تحقق أن الحل المضبوط يحقق المسألة مع g و h المحسوبتين'],[['A wrong source term makes a correct solver look wrong (Lesson 68).','مصدر خاطئ يجعل الحلّال الصحيح يبدو خاطئاً (الدرس 68).']],[['The plotting code','كود الرسم'],['The timing','التوقيت']]),
]);

lesson('504',82,[
  ['A notebook is readable only with a fixed name key, written at the top. This course uses:','الدفتر لا يُقرأ إلا بمفتاح أسماء ثابت مكتوب في أعلاه. ويستخدم هذا المقرر:'],
  '$ n1, n2   (* space degrees N1, N2 (n2 only in 2-D) *)\nn3       (* time degree M *)\nT1       (* the matrix of Theorem 3.1, D2 *)\nT2       (* the matrix of Theorem 3.2, I(-mu) *)\nal1, bt1 (* Jacobi parameters of the basis; 0, 0 for Legendre *)',
  ['Short names are fine if the key is there; without it, ``n1`` and ``n3`` are easy to swap. When you receive a notebook with other meanings, write its key first, before changing anything.','والأسماء القصيرة مقبولة إذا وُجد المفتاح، ودونه يسهل الخلط بين ``n1`` و ``n3``. وحين تستلم دفتراً بمعانٍ أخرى اكتب مفتاحه أولاً قبل تغيير أي شيء.'],
],[
  Q('In the 1-D problem with N = 10, M = 6, which values do ``n1`` and ``n3`` take?','في المسألة الأحادية مع N = 10 و M = 6 ما قيمتا ``n1`` و ``n3``؟','$ n1 = 10;  n3 = 6;',[['n1 is the space degree, n3 the time degree.','n1 درجة المكان و n3 درجة الزمن.']],['$ n1 = 6;  n3 = 10;','$ n1 = 10;  n2 = 6;','$ n1 = n3 = 16;']),
  Q('What are ``al1`` and ``bt1`` for the paper’s method?','ما ``al1`` و ``bt1`` لطريقة البحث؟','$ al1 = 0;  bt1 = 0;',[['Legendre is Jacobi with α = β = 0 (Course 503).','ليجندر هي جاكوبي مع α = β = 0 (المقرر 503).']],['$ al1 = 1;  bt1 = 1;','$ al1 = mu;  bt1 = lam;','$ al1 = -1/2;  bt1 = -1/2;']),
  Q('How many unknowns does the 2-D problem with ``n1 = n2 = 6`` and ``n3 = 4`` have?','كم مجهولاً للمسألة الثنائية مع ``n1 = n2 = 6`` و ``n3 = 4``؟','245',['(N_1 + 1)(N_2 + 1)(M + 1) = 7·7·5'],['144','196','175']),
  Q('Why write the key before editing someone else’s notebook?','لماذا تكتب المفتاح قبل تعديل دفتر غيرك؟',['So that every change is made with the right meaning of each name','حتى يتم كل تغيير بالمعنى الصحيح لكل اسم'],[['Swapping two degrees silently changes the problem.','تبديل درجتين يغيّر المسألة دون أن يُلاحظ.']],[['To make it run faster','لتسريعه'],['It is not needed','لا حاجة']]),
]);

lesson('504',83,[
  ['The fractional Legendre functions are built from the numbers `E_{n,r} = (−1)^{n−r}(n + r)!/((n − r)!(r!)^2)`:','دوال ليجندر الكسرية تُبنى من الأعداد `E_{n,r} = (−1)^{n−r}(n + r)!/((n − r)!(r!)^2)`:'],
  '$ cE[n_, r_] := (-1)^(n - r) (n + r)!/((n - r)! (r!)^2)\nfL[k_, t_] := Sum[cE[k, r] t^(r lam), {r, 0, k}]\nls[i_, x_] := Sum[(-1)^(i - p) (i + p)!/((i - p)! (p!)^2 gam^p) x^p,\n  {p, 0, i}]',
  ['The name ``E`` cannot be used: it is Euler’s number and is protected, so the code calls the coefficients ``cE``. ``ls`` is the shifted Legendre polynomial `L_i^{γ}` on `[0, γ]`.','ولا يمكن استخدام الاسم ``E`` لأنه عدد أويلر ومحمي، فيسمي الكود المعاملات ``cE``. و ``ls`` هي كثيرة ليجندر المزاحة `L_i^{γ}` على `[0, γ]`.'],
],[
  Q('What is ``cE[2, 1]``?','ما ``cE[2, 1]``؟','$ -6',['(−1)^1 #f{3!}{1!·1}',['`P_2^*(t) = 6t^2 − 6t + 1`.','`P_2^*(t) = 6t^2 − 6t + 1`.']],['$ 6','$ -3','$ 1']),
  Q('What happens with ``E[n_, r_] := …``?','ماذا يحدث مع ``E[n_, r_] := …``؟',['An error: the symbol E is protected','خطأ: الرمز E محمي'],[['The message is ``SetDelayed::write``.','والرسالة ``SetDelayed::write``.']],[['It works','يعمل'],['It redefines Euler’s number','يعيد تعريف عدد أويلر']]),
  Q('With ``lam = 1/2``, what is ``fL[1, t]``?','مع ``lam = 1/2`` ما ``fL[1, t]``؟','$ -1 + 2 Sqrt[t]',['cE(1, 0) = −1,   cE(1, 1) = 2'],['$ -1 + 2 t','$ 2 Sqrt[t]','$ 1 - 2 Sqrt[t]']),
  Q('Check the orthogonality of ``fL[1, t]`` and ``fL[2, t]`` for λ = 1/2.','تحقق من تعامد ``fL[1, t]`` و ``fL[2, t]`` عند λ = 1/2.','$ Integrate[lam t^(lam - 1) fL[1, t] fL[2, t], {t, 0, 1}]   (* 0 *)',[['The weight `λt^{λ−1}` is part of the integrand.','الوزن `λt^{λ−1}` جزء من التكامل.']],['$ Integrate[fL[1, t] fL[2, t], {t, 0, 1}]   (* 0 *)','$ Integrate[lam t^(lam - 1) fL[1, t] fL[2, t], {t, -1, 1}]','$ Integrate[fL[1, t] fL[2, t], {t, 0, lam}]']),
]);

lesson('504',84,[
  ['Theorem 3.1 in code. With `r = j + 2s`, the entry `(4/γ^2)s(2j + 1)(2j + 2s + 1)` simplifies to `(4/γ^2)·((r − j)/2)(2j + 1)(r + j + 1)`:','النظرية 3.1 بالكود. مع `r = j + 2s` يُختصر العنصر `(4/γ^2)s(2j + 1)(2j + 2s + 1)` إلى `(4/γ^2)·((r − j)/2)(2j + 1)(r + j + 1)`:'],
  '$ d2[r_, j_] := If[r > j && EvenQ[r - j],\n  4/gam^2 (r - j)/2 (2 j + 1) (r + j + 1), 0]\nT1 = Table[d2[r, j], {r, 0, n1}, {j, 0, n1}];\n(* check against direct differentiation *)\nTable[Expand[D[ls[r, x], {x, 2}]\n   - Sum[T1[[r + 1, j + 1]] ls[j, x], {j, 0, n1}]], {r, 0, n1}]',
  ['Indices r, j start at 0 in the formula and at 1 in Mathematica lists, hence ``T1[[r + 1, j + 1]]``. The check must give a list of zeros.','والدليلان r و j يبدآن من 0 في الصيغة ومن 1 في قوائم Mathematica، ولهذا ``T1[[r + 1, j + 1]]``. ويجب أن يعطي الفحص قائمة أصفار.'],
],[
  Q('With ``gam = 1``, what is ``d2[2, 0]``?','مع ``gam = 1`` ما ``d2[2, 0]``؟','$ 12',['4·1·1·3'],['$ 6','$ 24','$ 0']),
  Q('With ``gam = 2``, what is ``d2[4, 2]``?','مع ``gam = 2`` ما ``d2[4, 2]``؟','$ 35',['#f{4}{4}·1·5·7'],['$ 140','$ 70','$ 0']),
  Q('What is ``d2[3, 0]``?','ما ``d2[3, 0]``؟','$ 0',[['r − j = 3 is odd.','r − j = 3 فردي.']],['$ 4','$ 18','$ 36']),
  Q('Check that `2j + 2s + 1 = r + j + 1` when `r = j + 2s`.','تحقق أن `2j + 2s + 1 = r + j + 1` عندما `r = j + 2s`.','2j + 2s + 1 = j + (j + 2s) + 1',[['Replace `j + 2s` by r.','استبدل `j + 2s` بـ r.']],['2j + 2s + 1 = r + 2j + 1','2j + 2s + 1 = 2r + 1','2j + 2s + 1 = r − j + 1']),
]);

lesson('504',85,[
  ['Theorem 3.2 in code: the fractional integration matrix for the fractional Legendre basis,','النظرية 3.2 بالكود: مصفوفة التكامل الكسري لأساس ليجندر الكسري،'],
  '$ chi[i_, j_] := Sum[cE[i, k] cE[j, s] (2 j + 1) Gamma[k lam + 1]/\n    (Gamma[k lam + mu + 1] (1 + k + s + mu/lam)), {k, 0, i}, {s, 0, j}]\nT2 = N[Table[chi[i, j], {i, 0, n3}, {j, 0, n3}]];',
  ['The hand example of the guide, M = 1, λ = 1/2, μ = 3/2, is the first test: it must give `#m{0.18806, 0.33851 ;; −0.01082, 0.01598}`. For integer μ/λ and large enough M the matrix is exact; otherwise every row carries a truncation error.','والمثال اليدوي في الدليل، M = 1 و λ = 1/2 و μ = 3/2، هو أول اختبار: يجب أن يعطي `#m{0.18806, 0.33851 ;; −0.01082, 0.01598}`. وعندما μ/λ عدد صحيح و M كبير بما يكفي تكون المصفوفة مضبوطة، وإلا يحمل كل صف خطأ قطع.'],
],[
  Q('Compute ``chi[0, 0]`` for λ = 1/2, μ = 3/2.','احسب ``chi[0, 0]`` عند λ = 1/2 و μ = 3/2.','#f{1}{4Γ(5/2)} ≈ 0.18806',['#f{Γ(1)}{Γ(5/2)(1 + 3)}'],['#f{1}{Γ(5/2)} ≈ 0.7523','#f{1}{4} = 0.25','#f{1}{3Γ(5/2)} ≈ 0.2508']),
  Q('Compute ``chi[0, 1]`` for the same values.','احسب ``chi[0, 1]`` للقيم نفسها.','#f{3(−1/4 + 2/5)}{Γ(5/2)} ≈ 0.33851',['(2·1 + 1)(#f{cE(1, 0)}{4} + #f{cE(1, 1)}{5})/Γ(#f{5}{2})'],['#f{3(1/4 + 2/5)}{Γ(5/2)} ≈ 1.4669','#f{−1/4 + 2/5}{Γ(5/2)} ≈ 0.1128','0']),
  Q('Why is ``N`` applied to the table?','لماذا تُطبَّق ``N`` على الجدول؟',['Exact Gamma values with fractional arguments make large symbolic sums that are slow to use later','قيم Gamma المضبوطة بمتغيرات كسرية تكوّن مجاميع رمزية كبيرة بطيئة الاستخدام لاحقاً'],[['For verification keep exact values, for solving use numbers.','للتحقق أبقِ القيم مضبوطة وللحل استخدم الأعداد.']],[['It is required by Gamma','Gamma تتطلبه'],['To make it exact','لجعلها مضبوطة']]),
  Q('When is ``T2`` exact, with no truncation error?','متى تكون ``T2`` مضبوطة دون خطأ قطع؟',['When μ/λ is an integer and M is large enough','عندما يكون μ/λ عدداً صحيحاً و M كبيراً بما يكفي'],[['Then `t^{kλ+μ}` is again a power of `s = t^{λ}` inside the space.','فتكون `t^{kλ+μ}` قوة لـ `s = t^{λ}` داخل الفضاء.']],[['Always','دائماً'],['Never','أبداً']]),
]);

lesson('504',86,[
  ['The known function h of the integrated form is projected onto the tensor basis:','الدالة المعلومة h للصيغة التكاملية تُسقط على الأساس التنسوري:'],
  '$ hMat = Table[(2 k + 1) (2 i + 1)/gam *\n   NIntegrate[lam t^(lam - 1) h[x, t] fL[k, t] ls[i, x],\n     {t, 0, 1}, {x, 0, gam}],\n   {k, 0, n3}, {i, 0, n1}];',
  ['The factors come from the norms `1/(2k + 1)` in time and `γ/(2i + 1)` in space. Projecting h is consistent with the expansion of the residual; evaluating h directly at the collocation points is a different scheme, and the guide found it about 14 times less accurate at N = 12.','والعوامل تأتي من المعيارين `1/(2k + 1)` في الزمن و `γ/(2i + 1)` في المكان. وإسقاط h يتسق مع مفكوك الباقي، أما حساب h مباشرة عند نقاط التجميع فطريقة مختلفة، ووجد الدليل أنها أقل دقة بنحو 14 مرة عند N = 12.'],
],[
  Q('Where does the factor `(2i + 1)/γ` come from?','من أين يأتي العامل `(2i + 1)/γ`؟',['From the norm `∫_0^{γ} (L_i^{γ})^2 dx = γ/(2i + 1)`','من المعيار `∫_0^{γ} (L_i^{γ})^2 dx = γ/(2i + 1)`'],[['Dividing by the norm gives the coefficient.','القسمة على المعيار تعطي المعامل.']],[['From the weight `λt^{λ−1}`','من الوزن `λt^{λ−1}`'],['From Theorem 3.1','من النظرية 3.1']]),
  Q('Errors `3.55 × 10^{−11}` (h at the points) and `2.50 × 10^{−12}` (h projected) at N = 12. What is the ratio?','الأخطاء `3.55 × 10^{−11}` (h عند النقاط) و `2.50 × 10^{−12}` (h مسقطة) عند N = 12. ما النسبة؟','≈ 14',['#f{3.55}{0.25}'],['≈ 1.4','≈ 140','≈ 10']),
  Q('What is the size of ``hMat`` for ``n1 = 8``, ``n3 = 6``?','ما حجم ``hMat`` عند ``n1 = 8`` و ``n3 = 6``؟','7 × 9',['(M + 1) × (N + 1)'],['9 × 7','8 × 6','63 × 1']),
  Q('Why can Gauss quadrature replace NIntegrate here?','لماذا يمكن لتربيع جاوس أن يحل محل NIntegrate هنا؟',['h is smooth in `s = t^{λ}` and x, so a mapped Gauss rule in both variables is accurate and much faster','h ملساء في `s = t^{λ}` و x فقاعدة جاوس المحوّلة في المتغيرين دقيقة وأسرع بكثير'],[['One table of nodes and weights for all entries.','جدول واحد من العقد والأوزان لكل العناصر.']],[['NIntegrate is wrong','NIntegrate خاطئة'],['It cannot','لا يمكن']]),
]);

lesson('504',87,[
  ['Collocation points: in time the roots of `L_{M+1}^{λ}`, in space the interior roots of `L_{N−1}^{γ}`, both obtained from Legendre roots z on `[−1, 1]`:','نقاط التجميع: في الزمن جذور `L_{M+1}^{λ}`، وفي المكان الجذور الداخلية لـ `L_{N−1}^{γ}`، وكلاهما من جذور ليجندر z على `[−1, 1]`:'],
  '$ z[n_] := Sort[x /. NSolve[LegendreP[n, x] == 0, x]]\ntk = ((z[n3 + 1] + 1)/2)^(1/lam);     (* M + 1 time points *)\nxi = gam (z[n1 - 1] + 1)/2;          (* N - 1 space points *)',
  ['The residual matrix is evaluated at every pair `(t_k, x_i)`, and the boundary conditions are imposed at every `t_k` at x = 0 and x = γ.','ويُحسب الباقي عند كل زوج `(t_k, x_i)`، وتُفرض الشروط الحدية عند كل `t_k` في x = 0 و x = γ.'],
],[
  Q('With λ = 1/2, map the Legendre root z = 0 to t.','مع λ = 1/2 حوّل جذر ليجندر z = 0 إلى t.','t = #f{1}{4}',['(#f{0 + 1}{2})^2'],['t = #f{1}{2}','t = 0','t = #f{1}{#r{2}}']),
  Q('With γ = π, map z = 0 to x.','مع γ = π حوّل z = 0 إلى x.','x = #f{π}{2}',['π·#f{1}{2}'],['x = π','x = 0','x = #f{π}{4}']),
  Q('How many collocation equations are there at one time point `t_k`?','كم معادلة تجميع عند نقطة زمنية واحدة `t_k`؟','N + 1',['(N − 1) + 2'],['N − 1','M + 1','2']),
  Q('Why do smaller λ push the time points toward t = 0?','لماذا تدفع λ الأصغر نقاط الزمن نحو t = 0؟',['`t = s^{1/λ}` with `s ∈ (0, 1)`, and a larger power makes s smaller','`t = s^{1/λ}` مع `s ∈ (0, 1)`، والقوة الأكبر تصغّر s'],[['Exactly where the solution is singular.','تماماً حيث الحل شاذ.']],[['Because λ is negative','لأن λ سالبة'],['They move toward t = 1','تتحرك نحو t = 1']]),
]);

lesson('504',88,[
  ['Every equation is linear in the unknown coefficients, so one direct solve replaces FindRoot:','كل معادلة خطية في المعاملات المجهولة، فيحل حل مباشر واحد محل FindRoot:'],
  '$ vars = Flatten[Table[y[k, i], {k, 0, n3}, {i, 0, n1}]];\n{b, a} = Normal[CoefficientArrays[eqs, vars]];\nsol = LinearSolve[a, -b];',
  ['Measurements in the guide showed that FindRoot itself was not the main cost: most of the time went into substituting the symbolic residual at the points. The fastest form builds the numeric matrices directly: basis values at the points times the operational matrices, assembled with Kronecker products.','وأظهرت قياسات الدليل أن FindRoot نفسها لم تكن التكلفة الكبرى: معظم الوقت ذهب في تعويض الباقي الرمزي عند النقاط. والصيغة الأسرع تبني المصفوفات العددية مباشرة: قيم الأساس عند النقاط مضروبة في المصفوفات التشغيلية ومجمعة بضروب كرونيكر.'],
],[
  Q('Why is a linear solve enough?','لماذا يكفي حل خطي؟',['The problem is linear in y, and every operator acts linearly on the coefficient matrix','المسألة خطية في y وكل مؤثر يعمل خطياً على مصفوفة المعاملات'],[['The paper’s “iteration method” is not needed.','لا حاجة إلى «الطريقة التكرارية» في البحث.']],[['Because N is small','لأن N صغير'],['It is not enough','لا يكفي']]),
  Q('How many entries does ``vars`` have for ``n1 = 10``, ``n3 = 10``?','كم عنصراً في ``vars`` عند ``n1 = 10`` و ``n3 = 10``؟','121',['11·11'],['100','110','20']),
  Q('Where did the guide find most of the time going?','أين وجد الدليل أن معظم الوقت يذهب؟',['Substituting the symbolic residual at the collocation points','تعويض الباقي الرمزي عند نقاط التجميع'],[['Not FindRoot itself.','لا FindRoot نفسها.']],[['FindRoot','FindRoot'],['Plotting','الرسم']]),
  Q('What is the matrix form of `vec(A𝒴B)` used to assemble the system directly?','ما الصيغة المصفوفية لـ `vec(A𝒴B)` المستخدمة لتجميع النظام مباشرة؟','(B^T ⊗ A) vec(𝒴)',[['Lesson 57.','الدرس 57.']],['(A ⊗ B) vec(𝒴)','(A^T ⊗ B^T) vec(𝒴)','(B ⊗ A) vec(𝒴)']),
]);

lesson('504',89,[
  ['Measure before optimizing:','قِس قبل أن تحسّن:'],
  '$ AbsoluteTiming[LinearSolve[a, -b];]   (* {seconds, Null} *)\nTiming[expr]                         (* CPU time of the kernel *)\nTimeUsed[]                           (* CPU time since the kernel started *)',
  ['``AbsoluteTiming`` is the wall-clock time and the right measure for a user. ``TimeUsed[]`` is cumulative for the whole session, so it is not the time of one computation: this mistake once made a notebook that runs in 0.3 s look like 72 s.','و ``AbsoluteTiming`` هي زمن الساعة الفعلي وهي المقياس الصحيح للمستخدم. و ``TimeUsed[]`` تراكمية للجلسة كلها فليست زمن حساب واحد: وهذا الخطأ جعل مرة دفتراً يعمل في 0.3 ثانية يبدو كأنه يستغرق 72 ثانية.'],
],[
  Q('What does ``AbsoluteTiming[expr]`` return?','ماذا تعيد ``AbsoluteTiming[expr]``؟','$ {seconds, result}',[['A pair: the elapsed time and the value of expr.','زوج: الزمن المنقضي وقيمة expr.']],['$ seconds','$ result','$ {result, seconds}']),
  Q('Why put a semicolon inside ``AbsoluteTiming[…;]``?','لماذا توضع فاصلة منقوطة داخل ``AbsoluteTiming[…;]``؟',['To time the computation without displaying a large result','لقياس الحساب دون عرض نتيجة كبيرة'],[['The second entry is then Null.','يصبح العنصر الثاني Null.']],[['To make it faster','لتسريعه'],['It is required','إلزامية']]),
  Q('Which measure reported 72 s for a notebook that runs in 0.3 s?','أي مقياس أعطى 72 ثانية لدفتر يعمل في 0.3 ثانية؟','$ TimeUsed[]',[['It is the total CPU time of the session.','وهو مجموع زمن المعالج للجلسة.']],['$ AbsoluteTiming','$ Timing','$ SessionTime[] - SessionTime[]']),
  Q('Time only the assembly stage of a notebook.','قِس زمن مرحلة التجميع فقط في دفتر.','$ AbsoluteTiming[eqs = …;]',[['Wrap just that stage, not the whole notebook.','غلّف تلك المرحلة فقط لا الدفتر كله.']],['$ TimeUsed[]','$ AbsoluteTiming[Quit[]]','$ Timing[Print[eqs]]']),
]);

lesson('504',90,[
  ['Reading someone else’s notebook: (1) ``Quit[]`` and run it from the top; (2) write its name key; (3) mark dead code, definitions that nothing uses; (4) look for hidden state and hand-derived formulas such as h; (5) compare one result with the paper; (6) list defects before fixing any.','قراءة دفتر كتبه غيرك: (1) ``Quit[]`` وشغّله من الأعلى، (2) اكتب مفتاح أسمائه، (3) علّم الكود الميت أي التعريفات التي لا يستخدمها شيء، (4) ابحث عن الحالة المخفية والصيغ المشتقة يدوياً مثل h، (5) قارن نتيجة واحدة بالبحث، (6) دوّن العيوب قبل إصلاح أي منها.'],
  '$ Names["Global`*"]          (* every symbol the notebook created *)\n(* rerun of the paper’s Example 1, N = M = 10: *)\n(* notebook 2.5865*10^-9, Table 1 2.59*10^-9 *)',
  ['A matching rerun confirms that the notebook reproduces the paper; only then are changes safe. Fix one defect at a time and rerun the comparison after each.','وإعادة التشغيل المطابقة تؤكد أن الدفتر يعيد إنتاج البحث، وعندها فقط تكون التغييرات آمنة. أصلح عيباً واحداً كل مرة وأعد المقارنة بعد كل إصلاح.'],
],[
  Q('What is dead code?','ما الكود الميت؟',['Definitions or cells whose results are never used','تعريفات أو خلايا لا تُستخدم نتائجها أبداً'],[['It can be removed without changing any output.','يمكن حذفه دون تغيير أي مخرج.']],[['Code with an error','كود فيه خطأ'],['Comments','التعليقات']]),
  Q('Why run the notebook after ``Quit[]`` first?','لماذا تشغّل الدفتر بعد ``Quit[]`` أولاً؟',['To make sure it works without values left from earlier sessions','للتأكد أنه يعمل دون قيم متبقية من جلسات سابقة'],[['Hidden state shows up as errors.','الحالة المخفية تظهر أخطاءً.']],[['To make it faster','لتسريعه'],['It is not needed','لا حاجة']]),
  Q('The notebook gives `2.5865 × 10^{−9}` and Table 1 gives `2.59 × 10^{−9}`. What does this show?','الدفتر يعطي `2.5865 × 10^{−9}` والجدول 1 يعطي `2.59 × 10^{−9}`. ماذا يبيّن هذا؟',['The notebook reproduces the published result','الدفتر يعيد إنتاج النتيجة المنشورة'],[['The table rounds to three digits.','الجدول يقرّب إلى ثلاثة أرقام.']],[['The paper is wrong','البحث خاطئ'],['Nothing','لا شيء']]),
  Q('Why list all defects before fixing any?','لماذا تدوّن كل العيوب قبل إصلاح أي منها؟',['Some defects interact; a list shows which to fix first and keeps the original behaviour documented','بعض العيوب يتداخل، والقائمة تبيّن ما يُصلح أولاً وتوثق السلوك الأصلي'],[['Then fix one at a time and rerun.','ثم أصلح واحداً كل مرة وأعد التشغيل.']],[['To save time','لتوفير الوقت'],['It is not useful','لا فائدة']]),
]);

lesson('504',91,[
  ['Most built-in mathematical functions are Listable: they act on each element of a list automatically, which is much faster than an explicit loop:','معظم الدوال الرياضية الجاهزة Listable: تعمل على كل عنصر في القائمة تلقائياً، وهذا أسرع بكثير من حلقة صريحة:'],
  '$ Sin[Range[0., 1., 0.25]]          (* one call, five values *)\n{1, 2, 3}^2                        (* {1, 4, 9} *)\nSetAttributes[f, Listable]\nMemberQ[Attributes[Sin], Listable]  (* True *)',
  ['Write formulas so that they work on whole vectors: nodes, weights and basis values become arrays, and the matrices of the method are products of arrays.','اكتب الصيغ بحيث تعمل على متجهات كاملة: العقد والأوزان وقيم الأساس تصبح مصفوفات، ومصفوفات الطريقة ضروب مصفوفات.'],
],[
  Q('What is the output of ``{1, 2, 3} + 10``?','ما مخرج ``{1, 2, 3} + 10``؟','$ {11, 12, 13}',[['Plus is Listable: 10 is added to each element.','Plus دالة Listable: يُضاف 10 لكل عنصر.']],['$ {1, 2, 3, 10}','$ 16','$ {11, 2, 3}']),
  Q('Evaluate the basis value matrix `B_{ij} = P_j(x_i)` for nodes ``xs`` and degrees 0, …, n in one line.','احسب مصفوفة قيم الأساس `B_{ij} = P_j(x_i)` للعقد ``xs`` والدرجات 0, …, n في سطر واحد.','$ Transpose[Table[LegendreP[j, xs], {j, 0, n}]]',[['``LegendreP[j, xs]`` is a whole column.','``LegendreP[j, xs]`` عمود كامل.']],['$ Table[LegendreP[j, xs], {j, 0, n}, {i, n}]','$ LegendreP[Range[n], xs]','$ Do[LegendreP[j, xs], {j, 0, n}]']),
  Q('What does ``SetAttributes[f, Listable]`` do?','ماذا تفعل ``SetAttributes[f, Listable]``؟',['It makes ``f[{a, b}]`` give ``{f[a], f[b]}``','تجعل ``f[{a, b}]`` تعطي ``{f[a], f[b]}``'],[['f is threaded over lists.','تُوزَّع f على القوائم.']],[['It makes f faster','تسرّع f'],['It protects f','تحمي f']]),
  Q('What is the output of ``{1, 2} {3, 4}``?','ما مخرج ``{1, 2} {3, 4}``؟','$ {3, 8}',[['A space is Times, which is Listable: element by element.','المسافة Times وهي Listable: عنصراً بعنصر.']],['$ 11','$ {{3, 4}, {6, 8}}','$ {1, 2, 3, 4}']),
]);

lesson('504',92,[
  ['Packed arrays store machine numbers compactly, and ``Compile`` turns numerical code into fast compiled code:','المصفوفات المحزومة تخزن أعداد الآلة بإحكام، و ``Compile`` تحوّل الكود العددي إلى كود مترجم سريع:'],
  '$ cf = Compile[{{x, _Real}}, x^2 + Sin[x]];\ncf[1.]                                   (* 1.84147 *)\nDeveloper`PackedArrayQ[Range[10.^6]]     (* True *)\nDeveloper`PackedArrayQ[{1, 2.5, 1/3}]    (* False *)',
  ['A list is packed only if all its entries are machine numbers of one type; one exact entry unpacks it and slows every later operation. Compile is useful for loops that cannot be vectorized, for example a recurrence evaluated at many points.','والقائمة تكون محزومة فقط إذا كانت كل عناصرها أعداد آلة من نوع واحد، وعنصر مضبوط واحد يفك حزمها ويبطئ كل عملية لاحقة. و Compile مفيدة للحلقات التي لا يمكن تحويلها إلى معالجة متجهية، مثل علاقة تكرار تُحسب عند نقاط كثيرة.'],
],[
  Q('What is ``cf[0.]``?','ما ``cf[0.]``؟','$ 0.',['0^2 + sin 0'],['$ 1.','$ cf[0.]','$ Null']),
  Q('Why is ``{1, 2.5, 1/3}`` not packed?','لماذا ``{1, 2.5, 1/3}`` غير محزومة؟',['It mixes an integer, a real and an exact fraction','تخلط عدداً صحيحاً وعدداً حقيقياً وكسراً مضبوطاً'],[['``N[{1, 2.5, 1/3}]`` is packed.','``N[{1, 2.5, 1/3}]`` محزومة.']],[['It is too short','قصيرة جداً'],['It is packed','بل محزومة']]),
  Q('What does the specification ``{{x, _Real}}`` tell Compile?','ماذا تخبر المواصفة ``{{x, _Real}}`` الدالة Compile؟',['The argument x is a machine real number','المتغير x عدد حقيقي آلي'],[['Compiled code needs the types in advance.','الكود المترجم يحتاج الأنواع مسبقاً.']],[['x is a list','x قائمة'],['x is exact','x مضبوط']]),
  Q('Write a compiled Bonnet recurrence that returns `P_n(x)` for machine x.','اكتب علاقة بونيه مترجمة تعيد `P_n(x)` لـ x آلي.','$ Compile[{{n, _Integer}, {x, _Real}}, Module[{p0 = 1., p1 = x, p2}, Do[p2 = ((2 k - 1) x p1 - (k - 1) p0)/k; p0 = p1; p1 = p2, {k, 2, n}]; If[n == 0, 1., p1]]]',[['A loop that cannot be vectorized in n.','حلقة لا يمكن تحويلها إلى متجهية في n.']],['$ Compile[{n, x}, LegendreP[n, x]]','$ Compile[{{n, _Real}}, Do[…]]','$ Compile[LegendreP]']),
]);

lesson('504',93,[
  ['Independent computations run in parallel on several kernels:','الحسابات المستقلة تعمل بالتوازي على عدة نوى:'],
  '$ LaunchKernels[];\nerrs = ParallelTable[{n, solveError[n]}, {n, 4, 16, 2}];\nParallelMap[f, list]',
  ['Parallelism helps when the tasks are independent and each takes long enough, such as one solve per N in a convergence table. In recent versions definitions are distributed to the subkernels automatically; otherwise use ``DistributeDefinitions``.','والتوازي يفيد حين تكون المهام مستقلة وتستغرق كل منها وقتاً كافياً، مثل حل واحد لكل N في جدول تقارب. وفي الإصدارات الحديثة توزَّع التعريفات على النوى الفرعية تلقائياً، وإلا فاستخدم ``DistributeDefinitions``.'],
],[
  Q('What is the ideal speed-up with 4 kernels?','ما التسريع المثالي مع 4 نوى؟','4',[['The real speed-up is smaller because of communication.','التسريع الفعلي أصغر بسبب الاتصال.']],['2','16','1']),
  Q('Why does ``ParallelTable[i^2, {i, 10}]`` run slower than ``Table``?','لماذا تعمل ``ParallelTable[i^2, {i, 10}]`` أبطأ من ``Table``؟',['Each task is tiny, so sending it costs more than computing it','كل مهمة صغيرة جداً فإرسالها يكلف أكثر من حسابها'],[['Parallelize long, independent tasks.','وزّع المهام الطويلة المستقلة.']],[['ParallelTable is wrong','ParallelTable خاطئة'],['It does not','لا تعمل أبطأ']]),
  Q('Which part of a convergence study is naturally parallel?','أي جزء من دراسة التقارب متوازٍ بطبيعته؟',['The solves for different N','الحلول لقيم N المختلفة'],[['They do not depend on each other.','لا يعتمد بعضها على بعض.']],[['One LinearSolve','LinearSolve واحدة'],['Plotting the table','رسم الجدول']]),
  Q('When is ``DistributeDefinitions[f]`` needed?','متى نحتاج ``DistributeDefinitions[f]``؟',['When subkernels do not receive the definition of f automatically','حين لا تستقبل النوى الفرعية تعريف f تلقائياً'],[['For example with ParallelEvaluate in older versions.','مثلاً مع ParallelEvaluate في إصدارات أقدم.']],[['Always before Table','دائماً قبل Table'],['Never','أبداً']]),
]);

lesson('504',94,[
  ['A package collects the functions of a project in one ``.wl`` file with a public interface:','الحزمة تجمع دوال مشروع في ملف ``.wl`` واحد بواجهة عامة:'],
  '$ BeginPackage["MappedLegendre`"];\nsolve::usage = "solve[problem, n, m, lam] returns the coefficient matrix.";\nBegin["`Private`"];\n  cE[n_, r_] := (-1)^(n - r) (n + r)!/((n - r)! (r!)^2);\n  solve[p_, n_, m_, lam_] := …;\nEnd[];\nEndPackage[];',
  ['Only the symbols mentioned before ``Begin`` (here ``solve``) are public; helpers such as ``cE`` stay private and cannot clash with the user’s names. Load the package with ``Get["MappedLegendre.wl"]``.','والرموز المذكورة قبل ``Begin`` فقط (هنا ``solve``) عامة، والمساعدة مثل ``cE`` تبقى خاصة ولا تتصادم مع أسماء المستخدم. وتُحمَّل الحزمة بـ ``Get["MappedLegendre.wl"]``.'],
],[
  Q('What does ``solve::usage`` provide?','ماذا يوفّر ``solve::usage``؟',['The text shown by ``?solve``','النص الذي يعرضه ``?solve``'],[['It documents the public function.','يوثّق الدالة العامة.']],[['A test','اختباراً'],['A default value','قيمة افتراضية']]),
  Q('Is ``cE`` visible to the user after loading?','هل ``cE`` مرئية للمستخدم بعد التحميل؟',['No: it is defined in the private context','لا: معرّفة في السياق الخاص'],[['Only ``solve`` is exported.','``solve`` وحدها مُصدَّرة.']],[['Yes','نعم'],['Only after Quit','فقط بعد Quit']]),
  Q('How is the package loaded?','كيف تُحمَّل الحزمة؟','$ Get["MappedLegendre.wl"]',[['Or ``Needs`` with the context name if it is on the path.','أو ``Needs`` باسم السياق إذا كانت على المسار.']],['$ Import["MappedLegendre"]','$ Load[MappedLegendre]','$ Begin["MappedLegendre.wl"]']),
  Q('What is the main advantage of a package over copying cells between notebooks?','ما الميزة الأساسية للحزمة على نسخ الخلايا بين الدفاتر؟',['One tested copy of the code, used by every example','نسخة واحدة مختبرة من الكود تستخدمها كل الأمثلة'],[['A fix in the package fixes every notebook.','إصلاح في الحزمة يصلح كل الدفاتر.']],[['It runs faster','تعمل أسرع'],['It needs no tests','لا تحتاج اختبارات']]),
]);

lesson('504',95,[
  ['``VerificationTest[input, expected]`` checks one fact and ``TestReport`` runs a list of tests:','``VerificationTest[input, expected]`` تتحقق من حقيقة واحدة و ``TestReport`` تشغّل قائمة اختبارات:'],
  '$ VerificationTest[cE[2, 1], -6]\nVerificationTest[d2[2, 0] /. gam -> 1, 12]\nVerificationTest[N[chi[0, 0]], 0.18806,\n  SameTest -> (Abs[#1 - #2] < 10^-5 &)]\nTestReport[{…}]          (* number of successes and failures *)',
  ['Numerical tests need a tolerance through ``SameTest``. Good tests are small, known by hand, and cover each formula of the method: coefficients, matrices, the hand example and one full solve.','والاختبارات العددية تحتاج سماحية عبر ``SameTest``. والاختبارات الجيدة صغيرة ومعروفة يدوياً وتغطي كل صيغة في الطريقة: المعاملات والمصفوفات والمثال اليدوي وحلاً كاملاً واحداً.'],
],[
  Q('Write a test that `P_3(1) = 1`.','اكتب اختباراً أن `P_3(1) = 1`.','$ VerificationTest[LegendreP[3, 1], 1]',[['An exact comparison is fine for exact values.','المقارنة المضبوطة مناسبة للقيم المضبوطة.']],['$ VerificationTest[LegendreP[3, 1] == 1]','$ Test[LegendreP[3, 1], 1]','$ Assert[LegendreP[3, 1] = 1]']),
  Q('Why does ``VerificationTest[0.1 + 0.2, 0.3]`` need care?','لماذا يحتاج ``VerificationTest[0.1 + 0.2, 0.3]`` إلى عناية؟',['Rounding makes the two machine numbers differ slightly; use a tolerance','التقريب يجعل العددين الآليين مختلفين قليلاً، فاستخدم سماحية'],['0.1 + 0.2 = 0.30000000000000004'],[['It always fails','يفشل دائماً'],['It is exact','مضبوط']]),
  Q('Which test checks the Theorem 3.2 hand example?','أي اختبار يتحقق من المثال اليدوي للنظرية 3.2؟','$ VerificationTest[N[chi[0, 1]], 0.33851, SameTest -> (Abs[#1 - #2] < 10^-5 &)]',[['λ = 1/2, μ = 3/2.','λ = 1/2 و μ = 3/2.']],['$ VerificationTest[chi[0, 1], 0.33851]','$ VerificationTest[N[chi[0, 1]] == 0.33851]','$ TestReport[chi[0, 1]]']),
  Q('What does ``TestReport`` give?','ماذا تعطي ``TestReport``؟',['A summary object with the numbers of passed and failed tests','كائن ملخص بأعداد الاختبارات الناجحة والفاشلة'],[['Each failure can be inspected.','يمكن فحص كل فشل.']],[['Only True or False','True أو False فقط'],['The fastest test','أسرع اختبار']]),
]);

lesson('504',96,[
  ['Separate the problem from the method: describe each example as data in an Association and write one solver for all of them:','افصل المسألة عن الطريقة: صِف كل مثال بيانات في Association واكتب حلّالاً واحداً لها كلها:'],
  '$ ex1 = <|"exact" -> Function[{x, t}, t^3 x^2 (1 - x)^2 Exp[x]],\n   "orders" -> {1.9}, "gam" -> 1, "lam" -> 1/2|>;\nex1["gam"]           (* 1 *)\nsolve[ex1, 10, 10]',
  ['Adding an example then means writing its data, not copying a notebook. The data also documents the problem in one place.','فيصبح إضافة مثال كتابة بياناته لا نسخ دفتر، والبيانات توثق المسألة في مكان واحد.'],
],[
  Q('What is ``ex1["lam"]``?','ما ``ex1["lam"]``؟','$ 1/2',[['A key lookup in the Association.','بحث بمفتاح في Association.']],['$ "lam"','$ lam','$ Missing["KeyAbsent", "lam"]']),
  Q('What is ``ex1["mu"]``?','ما ``ex1["mu"]``؟','$ Missing["KeyAbsent", "mu"]',[['The key does not exist.','المفتاح غير موجود.']],['$ 0','$ Null','$ 1.9']),
  Q('Evaluate the exact solution of ``ex1`` at `(x, t) = (1/2, 1)`.','احسب الحل المضبوط لـ ``ex1`` عند `(x, t) = (1/2, 1)`.','$ ex1["exact"][1/2, 1]   (* Sqrt[E]/16 *)',['1·#f{1}{4}·#f{1}{4}·e^{1/2}'],['$ ex1["exact"][1, 1/2]','$ ex1[exact][1/2, 1]','$ ex1["exact"] /. {x -> 1/2, t -> 1}']),
  Q('What should change in the code when a new example is added?','ماذا يجب أن يتغير في الكود عند إضافة مثال جديد؟',['Only a new data Association; the solver stays the same','Association بيانات جديدة فقط، والحلّال يبقى كما هو'],[['If the solver must change, the problem class has grown.','إذا وجب تغيير الحلّال فقد اتسع صنف المسائل.']],[['A new copy of the solver','نسخة جديدة من الحلّال'],['The tests are deleted','تُحذف الاختبارات']]),
]);

lesson('504',97,[
  ['The function h can be generated automatically from Lemma 2.1. Integrating by the top order `μ_s`, a Caputo term `D^{α}y` contributes `D^{−(μ_s−α)}y` minus initial values:','يمكن توليد الدالة h آلياً من اللمة 2.1. بالتكامل بأعلى رتبة `μ_s` يساهم حد كابوتو `D^{α}y` بـ `D^{−(μ_s−α)}y` مطروحاً منه قيم ابتدائية:'],
  '$ init[al_, ms_] := If[al <= 1,\n   psi0 t^(ms - al)/Gamma[ms - al + 1],\n   psi0 t^(ms - al)/Gamma[ms - al + 1]\n     + psi1 t^(1 + ms - al)/Gamma[ms - al + 2]]',
  ['An order in (0, 1] removes `ψ_0`, an order in (1, 2) removes `ψ_0` and `tψ_1`; the top term gives `ψ_0 + tψ_1`. Moving a left-hand term to the right flips its sign. Each notebook used to derive h by hand, which is where many errors come from.','الرتبة في (0, 1] تزيل `ψ_0`، والرتبة في (1, 2) تزيل `ψ_0` و `tψ_1`، والحد الأعلى يعطي `ψ_0 + tψ_1`. ونقل حد من الطرف الأيسر إلى الأيمن يقلب إشارته. وكان كل دفتر يشتق h يدوياً، ومن هنا يأتي كثير من الأخطاء.'],
],[
  Q('What is ``init[1/2, 3/2]``?','ما ``init[1/2, 3/2]``؟','$ psi0 t',['#f{ψ_0 t^{1}}{Γ(2)}'],['$ psi0 t^(1/2)/Gamma[3/2]','$ psi0 + t psi1','$ psi1 t']),
  Q('What does the top term `D^{μ_s}y` with `1 < μ_s < 2` contribute to h?','ماذا يساهم الحد الأعلى `D^{μ_s}y` مع `1 < μ_s < 2` في h؟','ψ_0 + tψ_1',['y − ψ_0 − tψ_1'],['ψ_0','tψ_1','0']),
  Q('What does `cD^{−μ_s}y` (the term c·y) contribute?','ماذا يساهم الحد `cD^{−μ_s}y` (أي الحد c·y)؟','0',[['No derivative, so no initial values.','لا مشتقة فلا قيم ابتدائية.']],['cψ_0','cψ_0 t^{μ_s}','c']),
  Q('Check the formula with a test case before using it.','تحقق من الصيغة بحالة اختبار قبل استخدامها.',['Take an exact y, compute g, build h automatically and check that the integrated equation has zero residual','خذ y مضبوطة واحسب g وابنِ h آلياً وتحقق أن باقي المعادلة التكاملية صفر'],[['The guide checked all seven terms of h this way.','الدليل تحقق من حدود h السبعة بهذه الطريقة.']],[['Compare with the plot','قارن بالرسم'],['No check is needed','لا حاجة لتحقق']]),
]);

lesson('504',98,[
  ['Results go into papers as LaTeX and into other programs as data:','النتائج تدخل البحوث بصيغة LaTeX وتدخل البرامج الأخرى بيانات:'],
  '$ TeXForm[x^2/2]                 (* \\frac{x^2}{2} *)\nTeXForm[Sqrt[x]]               (* \\sqrt{x} *)\nExport["table.tex", tbl, "TeX"]\nCForm[x^2]                     (* Power(x,2) *)\nExport["errors.csv", errs]',
  ['For an error table, format the numbers first (for example with ``ScientificForm``) and export the Grid; for MATLAB or Python export plain numbers as CSV.','ولجدول الأخطاء نسّق الأعداد أولاً (مثلاً بـ ``ScientificForm``) وصدّر Grid، ولـ MATLAB أو Python صدّر الأعداد مجردة بصيغة CSV.'],
],[
  Q('What is ``TeXForm[Pi^2/6]``?','ما ``TeXForm[Pi^2/6]``؟','$ \\frac{\\pi ^2}{6}',[['Mathematica writes `π` as ``\\pi``.','يكتب Mathematica `π` بالصورة ``\\pi``.']],['$ Pi^2/6','$ \\frac{Pi^2}{6}','$ \\pi^2/6']),
  Q('Which form gives C code for an expression?','أي صيغة تعطي كود C لمقدار؟','$ CForm',[['``FortranForm`` gives Fortran.','``FortranForm`` تعطي Fortran.']],['$ TeXForm','$ InputForm','$ CCode']),
  Q('Which format should be used to pass an error table to Python?','أي صيغة تُستخدم لنقل جدول أخطاء إلى Python؟','$ CSV',[['``numpy.loadtxt`` reads it directly.','``numpy.loadtxt`` تقرؤها مباشرة.']],['$ TeX','$ PDF','$ PNG']),
  Q('Why format numbers before exporting a table to LaTeX?','لماذا تُنسَّق الأعداد قبل تصدير جدول إلى LaTeX؟',['Machine numbers would appear with all their digits or in Mathematica’s own notation','أعداد الآلة تظهر بكل أرقامها أو بطريقة Mathematica الخاصة'],[['Choose the digits the paper should show.','اختر الأرقام التي يجب أن يعرضها البحث.']],[['LaTeX cannot read numbers','LaTeX لا تقرأ الأعداد'],['It is not needed','لا حاجة']]),
]);

lesson('504',99,[
  ['Reproducing a table: run the method with the paper’s parameters and compare digit by digit. For Example 1 of the paper (exact solution `t^3x^2(1 − x)^2e^x`, ν = 1.9, λ = 1/2):','إعادة إنتاج جدول: شغّل الطريقة بوسائط البحث وقارن رقماً برقم. للمثال 1 في البحث (الحل المضبوط `t^3x^2(1 − x)^2e^x` و ν = 1.9 و λ = 1/2):'],
  'N = M = 10:   2.5865 × 10^{−9}  ≈  2.59 × 10^{−9}',
  ['The left value is a rerun of the notebook, the right one is Table 1 of the paper. A difference in the last printed digit is rounding; a factor of 10 or more points to a different scheme or a defect. Record the parameters, the version and the timing with every reproduced number.','القيمة اليسرى إعادة تشغيل للدفتر واليمنى من الجدول 1 في البحث. والاختلاف في آخر رقم مطبوع تقريب، أما عامل 10 أو أكثر فيدل على طريقة مختلفة أو عيب. وسجّل الوسائط والإصدار والتوقيت مع كل عدد مُعاد إنتاجه.'],
],[
  Q('Why is the time part of Example 1 exact for M ≥ 6 with λ = 1/2?','لماذا يكون الجزء الزمني في المثال 1 مضبوطاً عند M ≥ 6 مع λ = 1/2؟','t^3 = s^6',['s = t^{1/2}'],['t^3 = s^3','t^3 = s^{3/2}','t^3 = s^{12}']),
  Q('So which part limits the accuracy in Example 1?','إذن أي جزء يحد الدقة في المثال 1؟',['The space approximation of `x^2(1 − x)^2e^x`','التقريب المكاني لـ `x^2(1 − x)^2e^x`'],[['The time part is exact.','الجزء الزمني مضبوط.']],[['The time part','الجزء الزمني'],['Nothing','لا شيء']]),
  Q('Your code gives `2.00 × 10^{−9}` against the paper’s `2.59 × 10^{−9}`. Is this a reproduction?','كودك يعطي `2.00 × 10^{−9}` مقابل `2.59 × 10^{−9}` في البحث. هل هذه إعادة إنتاج؟',['Not exactly: same order of magnitude, but a different number points to a different detail of the scheme','ليست بالضبط: الرتبة نفسها لكن العدد المختلف يدل على تفصيل مختلف في الطريقة'],[['For example h evaluated at the points instead of projected.','مثل حساب h عند النقاط بدل إسقاطها.']],[['Yes, exactly','نعم بالضبط'],['No, the method is wrong','لا، الطريقة خاطئة']]),
  Q('What should be recorded with every reproduced number?','ماذا يجب أن يُسجَّل مع كل عدد مُعاد إنتاجه؟',['The parameters (N, M, λ, orders), the software version and the timing','الوسائط (N و M و λ والرتب) وإصدار البرنامج والتوقيت'],[['So that anyone can rerun it.','حتى يستطيع أي أحد إعادته.']],[['Only the number','العدد فقط'],['The date','التاريخ']]),
]);

lesson('504',100,[
  ['Capstone project: turn the notebooks into a tested package. Requirements: (1) a package ``MappedLegendre`` with ``solve``, ``h`` generated automatically, and the matrices T1 and T2; (2) a test file with the hand example, Theorem 3.1 checks and a full solve; (3) the three examples of the paper as data; (4) a convergence table with timing, exported to LaTeX; (5) a short report on λ.','المشروع الختامي: حوّل الدفاتر إلى حزمة مختبرة. المتطلبات: (1) حزمة ``MappedLegendre`` فيها ``solve`` و h مولّدة آلياً والمصفوفتان T1 و T2، (2) ملف اختبارات فيه المثال اليدوي وفحوص النظرية 3.1 وحل كامل، (3) أمثلة البحث الثلاثة بيانات، (4) جدول تقارب مع التوقيت مصدَّر إلى LaTeX، (5) تقرير قصير عن λ.'],
  'y = t^{1+ν_1+ν_2} sin x,     ν_1 + ν_2 = 2.9   ⇒   y = t^{3.9} sin x',
  ['This is Example 2 of the paper, the real test: `t^{3.9}` is not a polynomial in `t^{1/2}`. Study which λ makes the time part exact and how the error depends on λ and M.','وهذا هو المثال 2 في البحث، الاختبار الحقيقي: `t^{3.9}` ليست كثيرة حدود في `t^{1/2}`. ادرس أي λ يجعل الجزء الزمني مضبوطاً وكيف يعتمد الخطأ على λ و M.'],
],[
  Q('Which λ ≤ 1 makes `t^{3.9}` equal to `s^4`?','أي λ ≤ 1 تجعل `t^{3.9}` تساوي `s^4`؟','λ = 0.975',['#f{3.9}{4}'],['λ = 0.5','λ = 0.39','λ = 1']),
  Q('With λ = 1/2, what is `t^{3.9}` in s?','مع λ = 1/2 ما `t^{3.9}` بدلالة s؟','s^{7.8}',['#f{3.9}{0.5} = 7.8'],['s^{7}','s^{8}','s^{1.95}']),
  Q('Why is `s^{7.8}` a problem?','لماذا تمثل `s^{7.8}` مشكلة؟',['It is not a polynomial, so the time error decays only algebraically','ليست كثيرة حدود فيتناقص خطأ الزمن جبرياً فقط'],[['The other powers in h must also be considered when choosing λ.','ويجب مراعاة القوى الأخرى في h عند اختيار λ.']],[['It is too large','كبيرة جداً'],['It is not a problem','ليست مشكلة']]),
  Q('Which item of the project protects every later change?','أي بند في المشروع يحمي كل تغيير لاحق؟',['The test file','ملف الاختبارات'],[['Every change is checked against known results.','كل تغيير يُفحص مقابل نتائج معروفة.']],[['The LaTeX table','جدول LaTeX'],['The timing','التوقيت']]),
]);

export const MS504 = true;
