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

export const MS504 = true;
