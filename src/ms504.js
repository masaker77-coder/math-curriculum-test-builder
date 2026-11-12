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
  '$ Table[Integrate[LegendreP[m, x] LegendreP[n, x], {x, -1, 1}], {m, 0, 2}, {n, 0, 2}]\n(* {{2, 0, 0}, {0, 2/3, 0}, {0, 0, 2/5}} *)',
  ['For other families include the weight in the integrand, and for shifted or fractional families change the interval and the weight together.','وللعائلات الأخرى أدخل الوزن في التكامل، وللعائلات المزاحة أو الكسرية غيّر المجال والوزن معاً.'],
],[
  Q('What is the output of ``Integrate[ChebyshevT[1, x]^2/Sqrt[1 - x^2], {x, -1, 1}]``?','ما مخرج ``Integrate[ChebyshevT[1, x]^2/Sqrt[1 - x^2], {x, -1, 1}]``؟','$ Pi/2',['∫ #f{x^2}{#r{1 − x^2}} dx = #f{π}{2}'],['$ Pi','$ 2/3','$ 0']),
  Q('What is the output of ``Integrate[LegendreP[1, 2 t - 1]^2, {t, 0, 1}]``?','ما مخرج ``Integrate[LegendreP[1, 2 t - 1]^2, {t, 0, 1}]``؟','$ 1/3',['#f{1}{2n + 1}'],['$ 2/3','$ 1','$ 1/2']),
  Q('Which integral checks that `P_0^{(1,0)}` and `P_1^{(1,0)}` are orthogonal?','أي تكامل يتحقق من تعامد `P_0^{(1,0)}` و `P_1^{(1,0)}`؟','$ Integrate[(1 - x) JacobiP[0, 1, 0, x] JacobiP[1, 1, 0, x], {x, -1, 1}]',[['The weight `(1 − x)^1 (1 + x)^0` must be in the integrand; the result is 0.','الوزن `(1 − x)^1 (1 + x)^0` يجب أن يكون في التكامل، والنتيجة 0.']],['$ Integrate[JacobiP[0, 1, 0, x] JacobiP[1, 1, 0, x], {x, -1, 1}]','$ Integrate[(1 + x) JacobiP[0, 1, 0, x] JacobiP[1, 1, 0, x], {x, -1, 1}]','$ Integrate[(1 - x) JacobiP[1, 1, 0, x], {x, 0, 1}]']),
  Q('Check the orthogonality of `L_0^{λ}` and `L_1^{λ}` with weight `λt^{λ−1}` for λ = 1/2.','تحقق من تعامد `L_0^{λ}` و `L_1^{λ}` بالوزن `λt^{λ−1}` عند λ = 1/2.','$ Integrate[(1/2) t^(-1/2) LegendreP[1, 2 Sqrt[t] - 1], {t, 0, 1}]   (* 0 *)',['s = #r{t}:   ∫_0^1 (2s − 1) ds = 0'],['$ Integrate[LegendreP[1, 2 Sqrt[t] - 1], {t, 0, 1}]   (* 0 *)','$ Integrate[(1/2) t^(1/2) LegendreP[1, 2 Sqrt[t] - 1], {t, 0, 1}]','$ Integrate[(1/2) t^(-1/2) LegendreP[1, 2 t - 1], {t, -1, 1}]']),
]);

lesson('504',30,[
  ['A reliable way to check an identity: (1) write both sides as expressions; (2) for numeric n compute ``Expand[lhs - rhs]`` in a Table; (3) for symbolic parameters try ``FullSimplify`` with assumptions; (4) always add a numerical spot check at random points.','طريقة موثوقة للتحقق من متطابقة: (1) اكتب الطرفين مقدارين، (2) لـ n عددي احسب ``Expand[lhs - rhs]`` في Table، (3) للوسائط الرمزية جرّب ``FullSimplify`` مع الافتراضات، (4) أضف دائماً فحصاً عددياً عند نقاط عشوائية.'],
  '$ Table[Expand[(n + 1) LegendreP[n + 1, x] - (2 n + 1) x LegendreP[n, x] + n LegendreP[n - 1, x]], {n, 1, 5}]\n(* {0, 0, 0, 0, 0} *)',
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
  '$ Grid[{{"N", "error"}, {4, 1.2*^-3}, {8, 2.1*^-6}}, Frame -> All]\nTableForm[{{4, 1.2*^-3}, {8, 2.1*^-6}}, TableHeadings -> {None, {"N", "error"}}]',
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

export const MS504 = true;
