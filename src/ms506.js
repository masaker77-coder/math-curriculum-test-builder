/* MATH/COMP 506 — the course's road map (10 units × 10 lessons) and its lessons. The authoring markup is described in mscore.js. */
import { course, lesson, Q } from './mscore.js';

/* ---------------- 506: MATLAB ---------------- */
course('506','COMP 506','MATLAB','ماتلاب (506 حسب)',`
# Unit 1 · First steps | الوحدة 1 · الخطوات الأولى
The desktop and the Command Window | الواجهة ونافذة الأوامر
Arithmetic and the order of operations | العمليات الحسابية وترتيبها
Variables and the workspace | المتغيرات ومساحة العمل
Row vectors, the colon and linspace | المتجهات الصفية والنقطتان و linspace
Element-wise operations: .* ./ .^ | العمليات عنصراً بعنصر: .* و ./ و .^
Built-in mathematical functions | الدوال الرياضية الجاهزة
Getting help: help and doc | المساعدة: help و doc
Scripts and the Editor | الملفات النصية (scripts) والمحرر
Display and formats: disp, fprintf, format long | العرض والصيغ: disp و fprintf و format long
Reading error messages | قراءة رسائل الخطأ
# Unit 2 · Matrices | الوحدة 2 · المصفوفات
Creating matrices | إنشاء المصفوفات
Indexing: rows, columns and end | الفهرسة: الصفوف والأعمدة و end
zeros, ones, eye, diag | zeros و ones و eye و diag
Transpose and matrix multiplication | المدور وضرب المصفوفات
size, length, numel | size و length و numel
Concatenation and reshaping | الضم وتغيير الشكل
sum, prod, max, min, cumsum | sum و prod و max و min و cumsum
Logical indexing and find | الفهرسة المنطقية و find
Sorting and unique | الترتيب و unique
Matrices of matrices: kron and repmat | مصفوفات المصفوفات: kron و repmat
# Unit 3 · Programming | الوحدة 3 · البرمجة
if, elseif, else | if و elseif و else
for loops | حلقات for
while loops, break and continue | حلقات while و break و continue
Functions in files | الدوال في ملفات
Anonymous functions: @(x) | الدوال المجهولة: @(x)
Several outputs and optional inputs | المخرجات المتعددة والمدخلات الاختيارية
Vectorization instead of loops | المعالجة المتجهية بدل الحلقات
Preallocation | الحجز المسبق للذاكرة
Cell arrays and structures | مصفوفات الخلايا والهياكل
Debugging: breakpoints and the workspace | تتبع الأخطاء: نقاط التوقف ومساحة العمل
# Unit 4 · Graphics | الوحدة 4 · الرسم
plot and its options | plot وخياراتها
Several curves, legend and hold on | عدة منحنيات و legend و hold on
Labels, titles and fonts | العناوين والتسميات والخطوط
semilogy and loglog for errors | semilogy و loglog للأخطاء
subplot and tiledlayout | subplot و tiledlayout
surf, mesh and contour | surf و mesh و contour
spy and imagesc: looking at a matrix | spy و imagesc: معاينة مصفوفة
Tables of results with fprintf and table | جداول النتائج بـ fprintf و table
Exporting figures for a paper | تصدير الأشكال لبحث علمي
Convergence plots: the standard figure | رسوم التقارب: الشكل القياسي
# Unit 5 · Linear algebra | الوحدة 5 · الجبر الخطي
Solving Ax = b with the backslash | حل Ax = b بالشرطة المائلة العكسية
inv, det and why to avoid them | inv و det ولماذا نتجنبهما
LU, QR and Cholesky | LU و QR و Cholesky
Eigenvalues: eig | القيم الذاتية: eig
Norms and cond | المعايير و cond
Least squares and polyfit | المربعات الصغرى و polyfit
Sparse matrices | المصفوفات المتفرقة
Sylvester and Kronecker forms of a matrix equation | صيغتا سيلفستر وكرونكر لمعادلة مصفوفية
Floating-point numbers and eps | الأعداد العشرية العائمة و eps
Building a matrix from a formula | بناء مصفوفة من قانون
# Unit 6 · Calculus and special functions | الوحدة 6 · التفاضل والتكامل والدوال الخاصة
Numerical integration: integral | التكامل العددي: integral
trapz and cumtrapz | trapz و cumtrapz
Numerical differentiation: diff and gradient | التفاضل العددي: diff و gradient
Root finding: fzero and roots | إيجاد الجذور: fzero و roots
Polynomials: polyval, polyder, polyint, conv | كثيرات الحدود: polyval و polyder و polyint و conv
Interpolation: interp1 and spline | الاستكمال: interp1 و spline
gamma, beta and factorial | gamma و beta و factorial
Legendre polynomials by Bonnet's recurrence | كثيرات حدود ليجندر بعلاقة بونيه
Jacobi polynomials by the three-term recurrence | كثيرات حدود جاكوبي بعلاقة التكرار الثلاثية
The Mittag-Leffler function | دالة ميتاج–ليفلر
# Unit 7 · The Symbolic Math Toolbox | الوحدة 7 · صندوق الرياضيات الرمزية
syms and symbolic expressions | syms والمقادير الرمزية
simplify, expand, factor | simplify و expand و factor
diff and int | diff و int
solve and vpasolve | solve و vpasolve
taylor and limit | taylor و limit
legendreP, jacobiP, chebyshevT | legendreP و jacobiP و chebyshevT
vpa and digits: high precision | vpa و digits: الدقة العالية
dsolve | الحل الرمزي للمعادلات التفاضلية بالأمر dsolve
matlabFunction: from symbols to numbers | matlabFunction: من الرموز إلى الأعداد
Checking a formula exactly before coding it | التحقق من قانون بالضبط قبل برمجته
# Unit 8 · Differential equations | الوحدة 8 · المعادلات التفاضلية
ode45: the first initial-value problem | ode45: أول مسألة قيمة ابتدائية
Systems and higher-order equations | النظم والمعادلات من رتب أعلى
Stiff problems: ode15s | المسائل الجاسئة: ode15s
Options: tolerances and events | الخيارات: السماحيات والأحداث
Boundary-value problems: bvp4c | مسائل القيم الحدية: bvp4c
Finite differences for a boundary-value problem | الفروق المحدودة لمسألة قيم حدية
The heat equation by the method of lines | معادلة الحرارة بطريقة الخطوط
pdepe | حل المعادلات التفاضلية الجزئية بالأمر pdepe
Checking a manufactured pair (u, f) | التحقق من زوج مصنَّع (u, f)
Measuring the error: L∞ on a grid | قياس الخطأ: L∞ على شبكة
# Unit 9 · Spectral and fractional computing | الوحدة 9 · الحساب الطيفي والكسري
Gauss–Legendre nodes and weights (Golub–Welsch) | عقد جاوس–ليجندر وأوزانها (Golub–Welsch)
Differentiation matrices | مصفوفات التفاضل
Collocation for a boundary-value problem | طريقة التجميع لمسألة قيم حدية
Galerkin with φ_k = P_k − P_{k+2} | جاليركن بالأساس φ_k = P_k − P_{k+2}
The coefficients E_{n,r} of the fractional Legendre functions | المعاملات E_{n,r} لدوال ليجندر الكسرية
Coding Theorem 3.1: the matrix D^{(2)} | برمجة النظرية 3.1: المصفوفة D^{(2)}
Coding Theorem 3.2: the matrix χ_{−μ}^λ | برمجة النظرية 3.2: المصفوفة χ_{−μ}^λ
Solving D^α y = −y in integrated form | حل D^α y = −y بالصيغة التكاملية
A time-fractional diffusion problem | مسألة انتشار كسرية زمنية
The matrix equation for 𝒴 and its solution | المعادلة المصفوفية لـ 𝒴 وحلها
# Unit 10 · Mastery | الوحدة 10 · الاحتراف
Profiling: tic, toc and the Profiler | قياس الأداء: tic و toc و Profiler
Writing fast code | كتابة كود سريع
Organizing a project: folders, functions and paths | تنظيم المشروع: المجلدات والدوال والمسارات
Live Scripts | الملفات الحية (Live Scripts)
Unit tests | اختبارات الوحدة
Reading and writing data files | قراءة ملفات البيانات وكتابتها
Translating a Mathematica notebook into MATLAB | ترجمة دفتر Mathematica إلى MATLAB
GNU Octave as a free alternative | GNU Octave بديلاً مجانياً
Reproducing the tables of a research paper | إعادة إنتاج جداول بحث علمي
Capstone project | مشروع ختامي
`);

lesson('506',1,[
  ['MATLAB opens with a desktop of four parts: the Command Window (where you type), the Workspace (your variables), the Current Folder (your files) and the Editor (your programs).',
   'يفتح MATLAB على واجهة من أربعة أجزاء: نافذة الأوامر (حيث تكتب)، ومساحة العمل (متغيراتك)، والمجلد الحالي (ملفاتك)، والمحرر (برامجك).'],
  '$ >> 3 + 4*2\nans =\n    11',
  ['You type after the prompt ``>>`` and press Enter. If you do not name the result, MATLAB stores it in ``ans``. A semicolon at the end of a line hides the output; ``%`` starts a comment.',
   'تكتب بعد المحث ``>>`` وتضغط Enter. وإذا لم تسمِّ النتيجة خزّنها MATLAB في ``ans``. والفاصلة المنقوطة في آخر السطر تخفي المخرج، و ``%`` تبدأ تعليقاً.'],
  ['Three commands to tidy up: ``clc`` clears the window, ``clear`` deletes the variables, ``close all`` closes the figures. The up arrow recalls earlier commands.',
   'ثلاثة أوامر للترتيب: ``clc`` تمسح النافذة، و ``clear`` تحذف المتغيرات، و ``close all`` تغلق الأشكال. والسهم العلوي يستعيد الأوامر السابقة.'],
],[
  Q('What does ``3 + 4*2`` display?','ماذا يعرض ``3 + 4*2``؟','$ ans = 11',[['Multiplication first:','الضرب أولاً:'], '3 + 8 = 11', ['The unnamed result goes into ``ans``.','والنتيجة غير المسماة تذهب إلى ``ans``.']],['$ ans = 14','$ 11','$ ans = 3 + 4*2']),
  Q('After ``5*6`` what does ``ans + 1`` display?','بعد ``5*6`` ماذا يعرض ``ans + 1``؟','$ ans = 31',[['``ans`` holds 30, the last unnamed result; then it becomes 31.','``ans`` تحمل 30 وهي آخر نتيجة غير مسماة، ثم تصبح 31.']],['$ ans = 30','$ ans = 1','$ ans = 36']),
  Q('What does ``x = 7*3;`` display?','ماذا يعرض ``x = 7*3;``؟',['Nothing: the semicolon hides the output (x is 21 in the Workspace)','لا شيء: الفاصلة المنقوطة تخفي المخرج (و x تساوي 21 في مساحة العمل)'],
    [['The value is stored; only the display is suppressed. Typing ``x`` shows ``x = 21``.','القيمة تُخزَّن، والإخفاء للعرض فقط. وكتابة ``x`` تعرض ``x = 21``.']],['$ x = 21','$ ans = 21','$ 21']),
  Q('Which command deletes all variables, and which one only clears the Command Window?','أي أمر يحذف كل المتغيرات وأي أمر يمسح نافذة الأوامر فقط؟','$ clear and clc',
    [['``clear`` empties the Workspace; ``clc`` only wipes the text on screen and keeps the variables.','``clear`` تفرغ مساحة العمل، و ``clc`` تمسح النص على الشاشة فقط وتُبقي المتغيرات.']],['$ clc and clear','$ delete and clear','$ close all and clc']),
]);

lesson('506',2,[
  ['The arithmetic operators are ``+  -  *  /  ^``, and the order is: brackets, powers, then multiplication and division, then addition and subtraction. Operators of the same level are applied from left to right.',
   'العمليات الحسابية هي ``+  -  *  /  ^`` وترتيبها: الأقواس ثم الأسس ثم الضرب والقسمة ثم الجمع والطرح. والعمليات من المستوى نفسه تُطبق من اليسار إلى اليمين.'],
  '$ >> 10/4*2      % (10/4)*2 = 5\n>> -2^2        % -(2^2) = -4\n>> 2^3^2       % (2^3)^2 = 64',
  ['Two surprises: the minus sign is applied after the power, and repeated powers go from left to right (in mathematics `2^{3^2} = 512`). When in doubt, add brackets.',
   'مفاجأتان: إشارة السالب تُطبق بعد الأس، والأسس المتتالية من اليسار إلى اليمين (وفي الرياضيات `2^{3^2} = 512`). وعند الشك أضف أقواساً.'],
  ['MATLAB shows 4 decimals by default (``3.5000``) but computes with about 16 digits; ``format long`` shows them all. Useful functions: ``sqrt``, ``abs``, ``mod``, ``floor``, ``round``.',
   'يعرض MATLAB أربعة أرقام عشرية افتراضياً (``3.5000``) لكنه يحسب بنحو 16 رقماً، و ``format long`` تعرضها كلها. ودوال مفيدة: ``sqrt`` و ``abs`` و ``mod`` و ``floor`` و ``round``.'],
],[
  Q('What is the value of ``-2^2``?','ما قيمة ``-2^2``؟','$ -4',[['The power is done first, then the minus sign:','الأس أولاً ثم إشارة السالب:'], '−(2^2) = −4', ['Write ``(-2)^2`` to get 4.','اكتب ``(-2)^2`` لتحصل على 4.']],['$ 4','$ -2','$ 2']),
  Q('What is the value of ``2^3^2``?','ما قيمة ``2^3^2``؟','$ 64',['(2^3)^2 = 8^2 = 64', ['Left to right. Write ``2^(3^2)`` for 512.','من اليسار إلى اليمين. واكتب ``2^(3^2)`` للحصول على 512.']],['$ 512','$ 36','$ 12']),
  Q('What are ``mod(17, 5)`` and ``floor(7/2)``?','ما قيمتا ``mod(17, 5)`` و ``floor(7/2)``؟','$ 2 and 3',['17 = 3·5 + 2', '#f{7}{2} = 3.5  →  3'],['$ 3 and 3','$ 2 and 4','$ 3.4 and 3.5']),
  Q('What does ``7/2`` display, and what does it display after ``format long``?','ماذا يعرض ``7/2`` وماذا يعرض بعد ``format long``؟','$ 3.5000 and 3.500000000000000',
    [['The value is the same; only the number of digits shown changes (4 decimals, then 15).','القيمة نفسها، والمتغير عدد الأرقام المعروضة فقط (4 ثم 15 رقماً عشرياً).']],['$ 3 and 3.5','$ 3.5 and 3.5000','$ 3.5000 and 3.5000']),
]);

lesson('506',3,[
  ['A variable is created the moment you assign to it with ``=``. There is no declaration. The name must start with a letter, and it is case-sensitive: ``A`` and ``a`` are different variables.',
   'يُنشأ المتغير لحظة الإسناد إليه بـ ``=`` دون إعلان مسبق. ويجب أن يبدأ الاسم بحرف، وهو حساس لحالة الحرف: ``A`` و ``a`` متغيران مختلفان.'],
  '$ >> x = 5;\n>> y = x^2 + 1\ny =\n    26',
  ['The Workspace lists every variable; ``who`` and ``whos`` print the same list in the Command Window, and ``clear x`` deletes one variable.',
   'ومساحة العمل تسرد كل المتغيرات؛ و ``who`` و ``whos`` تطبعان القائمة نفسها في نافذة الأوامر، و ``clear x`` تحذف متغيراً واحداً.'],
  ['Some names are already taken: ``pi``, ``eps`` (the machine precision, about `2.2·10^{−16}`), ``Inf``, ``NaN``, and ``i``, ``j`` for `#r{−1}`. If you write ``i = 3`` you lose the imaginary unit, so in numerical work use ``1i`` for it and avoid ``i`` and ``j`` as loop counters.',
   'وبعض الأسماء محجوزة: ``pi`` و ``eps`` (دقة الآلة، نحو `2.2·10^{−16}`) و ``Inf`` و ``NaN`` و ``i`` و ``j`` للعدد `#r{−1}`. وإذا كتبت ``i = 3`` فقدت الوحدة التخيلية، فاستخدم ``1i`` لها وتجنب ``i`` و ``j`` عدّادين للحلقات.'],
],[
  Q('What does the last line display?','ماذا يعرض السطر الأخير؟','$ y = 26',['y = 5^2 + 1 = 26'],['$ y = 11','$ y = x^2 + 1','$ ans = 26'],'x = 5;\ny = x^2 + 1'),
  Q('What does the last line display?','ماذا يعرض السطر الأخير؟','$ b = 5',
    [['b was computed when a was 3 and stored as the number 5. Changing a afterwards does not change b.','حُسبت b حين كانت a تساوي 3 وخُزِّنت عدداً هو 5. وتغيير a بعدها لا يغيّر b.']],['$ b = 12','$ b = a + 2','$ b = 10'],'a = 3; b = a + 2; a = 10;\nb'),
  Q('What happens here?','ماذا يحدث هنا؟',['An error: ``Total`` and ``total`` are different names','خطأ: ``Total`` و ``total`` اسمان مختلفان'],
    [['MATLAB reports that the variable ``Total`` is not recognized, because names are case-sensitive.','يبلّغ MATLAB أن المتغير ``Total`` غير معرّف لأن الأسماء حساسة لحالة الحرف.']],['$ ans = 10','$ ans = 0','$ Total = 10'],'total = 10;\nTotal + 0'),
  Q('What is the approximate value of ``eps``, and what does ``1 + eps/2 == 1`` return?','ما القيمة التقريبية لـ ``eps`` وماذا يعيد ``1 + eps/2 == 1``؟','$ 2.2204e-16 and 1 (true)',
    [['``eps`` is the gap between 1 and the next larger number the machine can store. Half of it is lost when added to 1, so the test is true.','``eps`` هي الفجوة بين 1 وأقرب عدد أكبر منه تخزنه الآلة. ونصفها يضيع عند جمعه مع 1 فالاختبار صحيح.']],['$ 2.2204e-16 and 0 (false)','$ 1.0000e-10 and 1 (true)','$ 0 and 1 (true)']),
]);

lesson('506',4,[
  ['MATLAB means «matrix laboratory»: its basic object is the array. A row vector is written in square brackets with spaces or commas:',
   'MATLAB معناه «مختبر المصفوفات»: كائنه الأساسي المصفوفة. والمتجه الصفي يُكتب بين قوسين مربعين بمسافات أو فواصل:'],
  '$ >> v = [1 2 3]\n>> v(2)          % 2   (indices start at 1)\n>> v(end)        % 3\n>> v\'            % the column vector',
  ['Two tools create equally spaced vectors. The colon ``a:h:b`` uses a step h (``a:b`` means step 1), and ``linspace(a, b, n)`` uses a number of points n:',
   'وأداتان تصنعان متجهات متساوية التباعد. النقطتان ``a:h:b`` بخطوة h (و ``a:b`` بخطوة 1)، و ``linspace(a, b, n)`` بعدد نقاط n:'],
  '$ >> 0:0.25:1            % 0  0.25  0.5  0.75  1\n>> linspace(0, 1, 5)   % the same five points',
  ['Use the colon when you know the step and ``linspace`` when you know how many points you want, as for the grid on which an error is measured.',
   'استخدم النقطتين إذا عرفت الخطوة و ``linspace`` إذا عرفت عدد النقاط، كما في الشبكة التي يُقاس عليها الخطأ.'],
],[
  Q('What is ``v = 1:2:9``, and what is ``v(end)``?','ما قيمة ``v = 1:2:9`` وما قيمة ``v(end)``؟','$ [1 3 5 7 9] and 9',[['Start at 1, step 2, stop at 9. ``end`` is the last index.','نبدأ من 1 بخطوة 2 ونقف عند 9. و ``end`` الفهرس الأخير.']],['$ [1 2 9] and 9','$ [1 3 5 7] and 7','$ [1 3 5 7 9] and 5']),
  Q('What is ``linspace(0, 1, 5)``?','ما قيمة ``linspace(0, 1, 5)``؟','$ 0  0.25  0.5  0.75  1',['h = #f{1 − 0}{5 − 1} = 0.25', ['Five points make four intervals.','خمس نقاط تصنع أربع فترات.']],['$ 0  0.2  0.4  0.6  0.8','$ 0  0.2  0.4  0.6  0.8  1','$ 0  5  1']),
  Q('How many elements does ``0:0.1:1`` have?','كم عنصراً في ``0:0.1:1``؟','11',['#f{1 − 0}{0.1} + 1 = 11', ['Check with ``length(0:0.1:1)``.','تحقق بـ ``length(0:0.1:1)``.']],['10','9','12']),
  Q('What are ``sum(1:100)`` and ``x(2:3)`` for ``x = 2:2:10``?','ما قيمتا ``sum(1:100)`` و ``x(2:3)`` للمتجه ``x = 2:2:10``؟','$ 5050 and [4 6]',
    ['1 + 2 + ⋯ + 100 = #f{100·101}{2} = 5050', ['x is [2 4 6 8 10], and its 2nd and 3rd elements are 4 and 6.','x هو [2 4 6 8 10] وعنصراه الثاني والثالث 4 و 6.']],['$ 5050 and [2 4]','$ 100 and [4 6]','$ 5050 and [6 8]']),
]);

lesson('506',5,[
  ['In MATLAB ``*``, ``/`` and ``^`` are matrix operations. To act on each element separately, put a dot before the operator:',
   'في MATLAB العمليات ``*`` و ``/`` و ``^`` عمليات مصفوفية. وللعمل على كل عنصر بمفرده ضع نقطة قبل العامل:'],
  '$ >> [1 2 3].*[4 5 6]     % 4  10  18\n>> [1 2 3].^2           % 1   4   9\n>> [1 2 3]./[2 4 6]     % 0.5  0.5  0.5',
  ['Without the dot, ``[1 2 3]*[4 5 6]`` is an error, because the sizes do not agree for matrix multiplication, while ``[1 2 3]*[4 5 6]\'`` is the dot product 32. Addition and subtraction are always element-wise.',
   'ودون النقطة ``[1 2 3]*[4 5 6]`` خطأ لأن الأبعاد لا تتوافق لضرب المصفوفات، أما ``[1 2 3]*[4 5 6]\'`` فهو الضرب القياسي 32. والجمع والطرح عنصراً بعنصر دائماً.'],
  ['This is how a function is evaluated on a whole grid at once, with no loop:','وبهذا تُحسب دالة على شبكة كاملة دفعة واحدة دون حلقة:'],
  '$ >> x = linspace(0, 1, 101);\n>> y = x.^2 .* exp(-x);',
],[
  Q('What is ``[1 2 3].*[4 5 6]``, and what is ``[1 2 3]*[4 5 6]\'``?','ما قيمة ``[1 2 3].*[4 5 6]`` وما قيمة ``[1 2 3]*[4 5 6]\'``؟','$ [4 10 18] and 32',
    ['1·4,  2·5,  3·6  =  4,  10,  18', '4 + 10 + 18 = 32'],['$ 32 and [4 10 18]','$ [4 10 18] and [4 10 18]','$ [5 7 9] and 32']),
  Q('What is ``y`` here?','ما قيمة ``y`` هنا؟','$ [1 1.25 2]',['x = 0,  0.5,  1', 'y = x^2 + 1 = 1,  1.25,  2'],['$ [0 0.25 1]','$ [1 1.5 2]','$ Error'],'x = 0:0.5:1;\ny = x.^2 + 1'),
  Q('For ``A = [1 2; 3 4]`` what are ``A.^2`` and ``A^2``?','للمصفوفة ``A = [1 2; 3 4]`` ما قيمتا ``A.^2`` و ``A^2``؟','$ [1 4; 9 16] and [7 10; 15 22]',
    [['``A.^2`` squares each element; ``A^2`` is the matrix product `A·A`:','``A.^2`` تربّع كل عنصر، و ``A^2`` حاصل الضرب المصفوفي `A·A`:'], '1·1 + 2·3 = 7,   1·2 + 2·4 = 10', '3·1 + 4·3 = 15,   3·2 + 4·4 = 22'],
    ['$ [1 4; 9 16] and [1 4; 9 16]','$ [7 10; 15 22] and [1 4; 9 16]','$ [2 4; 6 8] and [7 10; 15 22]']),
  Q('Write one line that evaluates `f(x) = x/(1 + x^2)` on the vector x.','اكتب سطراً واحداً يحسب `f(x) = x/(1 + x^2)` على المتجه x.','$ f = x./(1 + x.^2);',
    [['Both the power and the division need a dot; the addition does not.','الأس والقسمة يحتاجان نقطة، أما الجمع فلا.']],['$ f = x/(1 + x^2);','$ f = x./(1 + x^2);','$ f = x/(1 + x.^2);']),
]);

/* ---- 506 · Unit 1 (lessons 6–10) and Unit 2 (lessons 11–20) ---- */
lesson('506',6,[
  ['MATLAB’s mathematical functions work on numbers and, element by element, on whole arrays:','دوال MATLAB الرياضية تعمل على الأعداد وعلى المصفوفات كاملة عنصراً بعنصر:'],
  '$ sqrt(2), exp(1), log(10), log10(1000), abs(-3)\nsin(pi/6), cos(0), atan(1)*4\nround(2.5), floor(-2.5), ceil(-2.5), fix(-2.5)\nmod(-7, 3), rem(-7, 3)',
  ['``log`` is the natural logarithm. ``sqrt`` of a negative number gives a complex result, not an error: ``sqrt(-4)`` is ``0 + 2i``. ``mod`` takes the sign of the divisor, ``rem`` the sign of the dividend.','و ``log`` اللوغاريتم الطبيعي. و ``sqrt`` لعدد سالب تعطي نتيجة مركبة لا خطأ: ``sqrt(-4)`` هي ``0 + 2i``. و ``mod`` تأخذ إشارة المقسوم عليه و ``rem`` إشارة المقسوم.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3 -3 -2 -2',['$ round(2.5) = 3,  floor(-2.5) = -3,  ceil(-2.5) = -2,  fix(-2.5) = -2'],['$ 2 -3 -2 -3','$ 3 -2 -3 -2','$ 3 -3 -3 -2'],'fprintf("%d %d %d %d\\n", round(2.5), floor(-2.5), ceil(-2.5), fix(-2.5))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2 -1',[['mod follows the divisor’s sign, rem the dividend’s.','mod تتبع إشارة المقسوم عليه و rem إشارة المقسوم.']],['$ -1 2','$ 2 2','$ -1 -1'],'fprintf("%d %d\\n", mod(-7, 3), rem(-7, 3))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0 2',[['`#r{−4} = 2i`: real part 0, imaginary part 2.','`#r{−4} = 2i`: الجزء الحقيقي 0 والتخيلي 2.']],['$ 0 -2','$ 2 0','$ -2 0'],'z = sqrt(-4);\nfprintf("%g %g\\n", real(z), imag(z))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3.141593 3.000000',[['`4 arctan 1 = π`; ``log10(1000)`` is 3.','`4 arctan 1 = π`، و ``log10(1000)`` تساوي 3.']],['$ 0.785398 3.000000','$ 3.141593 6.907755','$ 1.000000 3.000000'],'fprintf("%f %f\\n", 4*atan(1), log10(1000))'),
]);

lesson('506',7,[
  ['``help name`` prints the short help of a function in the Command Window; ``doc name`` opens the full documentation with examples; ``lookfor word`` searches the first help lines of all functions:','``help name`` تطبع المساعدة المختصرة لدالة في نافذة الأوامر، و ``doc name`` تفتح التوثيق الكامل مع الأمثلة، و ``lookfor word`` تبحث في أول أسطر المساعدة لكل الدوال:'],
  '$ >> help linspace\n>> doc integral\n>> lookfor legendre',
  ['The first comment lines of your own function file form its help text, so ``help myfun`` works for your functions too. Every documentation page ends with «See also» links to related functions.','وأسطر التعليق الأولى في ملف دالتك تكوّن نص مساعدتها، فتعمل ``help myfun`` لدوالك أيضاً. وكل صفحة توثيق تنتهي بروابط «See also» لدوال قريبة.'],
],[
  Q('Which command opens the full documentation page of ``ode45`` with examples?','أي أمر يفتح صفحة التوثيق الكاملة لـ ``ode45`` مع الأمثلة؟','$ doc ode45',[['``help ode45`` prints a shorter text in the Command Window.','``help ode45`` تطبع نصاً أقصر في نافذة الأوامر.']],['$ help ode45','$ ode45 ?','$ man ode45']),
  Q('You do not remember the name of the function for Legendre polynomials. What do you type?','لا تتذكر اسم دالة كثيرات ليجندر. ماذا تكتب؟','$ lookfor legendre',[['It searches the first help line of every function.','تبحث في أول سطر مساعدة لكل دالة.']],['$ help legendre*','$ find legendre','$ doc ?legendre']),
  Q('Where does ``help myfun`` take its text from?','من أين تأخذ ``help myfun`` نصها؟',['From the first block of comment lines in the file myfun.m','من أول مجموعة أسطر تعليق في الملف myfun.m'],[['Write a one-line summary first: ``lookfor`` searches it.','اكتب ملخصاً من سطر واحد أولاً: ``lookfor`` تبحث فيه.']],[['From the function name only','من اسم الدالة فقط'],['From the Internet','من الإنترنت']]),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 5',[['``numel`` counts all elements; its help text says so.','``numel`` تعد كل العناصر، ونص مساعدتها يقول ذلك.']],['$ 1','$ 2','$ 4'],'disp(numel(linspace(0, 1, 5)))'),
]);

lesson('506',8,[
  ['A script is a file ``name.m`` containing commands; typing its name (or pressing Run, F5) executes them in order, using and changing the variables of the Workspace:','الملف النصي (script) ملف ``name.m`` فيه أوامر، وكتابة اسمه (أو ضغط Run أو F5) تنفذها بالترتيب مستخدمة متغيرات مساحة العمل ومغيّرة لها:'],
  '$ % convergence_demo.m\nclear; clc;\nN = 8;                       % number of nodes\nx = cos(pi*(0:N)/N);         % Chebyshev points\nfprintf("%d points\\n", numel(x));',
  ['Section breaks ``%%`` split a script into cells that can be run one at a time (Ctrl+Enter). The file name must be a valid variable name: no spaces, no leading digit, and not the name of an existing function.','وفواصل الأقسام ``%%`` تقسم الملف إلى خلايا تُشغَّل واحدة واحدة (Ctrl+Enter). ويجب أن يكون اسم الملف اسم متغير صالحاً: دون مسافات ولا رقم في أوله، وليس اسم دالة موجودة.'],
],[
  Q('What does this script display?','ماذا يعرض هذا الملف؟','$ 9 points',[['`0:N` has N + 1 = 9 entries.','`0:N` فيها N + 1 = 9 عناصر.']],['$ 8 points','$ 10 points','$ N points'],'N = 8;\nx = cos(pi*(0:N)/N);\nfprintf("%d points\\n", numel(x));'),
  Q('Which file name is valid for a script?','أي اسم ملف صالح لملف نصي؟','$ heat_solver.m',[['Letters, digits and underscores, starting with a letter.','حروف وأرقام وشرطات سفلية تبدأ بحرف.']],['$ heat solver.m','$ 2heat.m','$ sin.m']),
  Q('What does ``%%`` do in a script?','ماذا تفعل ``%%`` في الملف النصي؟',['It starts a new section that can be run on its own','تبدأ قسماً جديداً يمكن تشغيله وحده'],[['Run a section with Ctrl+Enter.','شغّل القسم بـ Ctrl+Enter.']],[['It starts a comment block that is never shown','تبدأ كتلة تعليق لا تظهر أبداً'],['It ends the script','تنهي الملف']]),
  Q('Why can a script give different results on two runs?','لماذا قد يعطي ملف نصي نتائج مختلفة في تشغيلين؟',['It uses the Workspace, so variables left from earlier work can change it; start with ``clear``','يستخدم مساحة العمل فقد تغيّره متغيرات متبقية من عمل سابق، فابدأ بـ ``clear``'],[['Functions have their own workspace and do not have this problem.','الدوال لها مساحة عمل خاصة فلا تعاني هذه المشكلة.']],[['MATLAB is random','MATLAB عشوائي'],['It cannot','لا يمكن']]),
]);

lesson('506',9,[
  ['``disp`` shows a value without its name; ``fprintf`` prints formatted text; ``format long`` shows all digits:','``disp`` تعرض قيمة دون اسمها، و ``fprintf`` تطبع نصاً منسقاً، و ``format long`` تعرض كل الأرقام:'],
  '$ disp(pi)                        % 3.1416\nfprintf("%6.3f\\n", pi)           %  3.142\nfprintf("%.2e\\n", 0.000123)       % 1.23e-04\nfprintf("%d %d\\n", [1 2; 3 4])    % 1 3 / 2 4   (column by column!)\ns = sprintf("N = %d", 8);        % the same text as a string',
  ['``fprintf`` recycles its format for all values and reads matrices column by column, which surprises everyone once. ``%d`` integer, ``%f`` fixed, ``%e`` scientific, ``%g`` shortest; ``\\n`` ends the line.','و ``fprintf`` تعيد استخدام التنسيق لكل القيم وتقرأ المصفوفات عموداً عموداً، وهذا يفاجئ الجميع مرة. و ``%d`` عدد صحيح و ``%f`` ثابت و ``%e`` علمي و ``%g`` الأقصر، و ``\\n`` تنهي السطر.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1 3\n2 4',[['MATLAB stores and reads matrices column by column.','MATLAB يخزن المصفوفات ويقرؤها عموداً عموداً.']],['$ 1 2\n3 4','$ 1 2 3 4','$ 1 3 2 4'],'fprintf("%d %d\\n", [1 2; 3 4])'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3.142',[['Width 6, 3 decimals; leading spaces are not shown here.','عرض 6 وثلاثة أرقام عشرية، والمسافات البادئة غير ظاهرة هنا.']],['$ 3.14159','$ 3.1416','$ 3.1'],'fprintf("%6.3f\\n", pi)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.23e-04',[['Scientific format with 2 decimals.','الصيغة العلمية برقمين عشريين.']],['$ 0.000123','$ 1.2300e-04','$ 1.23E-4'],'fprintf("%.2e\\n", 0.000123)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ N = 8, error = 2.6e-09',[['sprintf returns the text; disp shows it.','sprintf تعيد النص و disp تعرضه.']],['$ N = %d, error = %.1e','$ N = 8, error = 2.5865e-09','$ 8 2.6e-09'],'s = sprintf("N = %d, error = %.1e", 8, 2.5865e-9);\ndisp(s)'),
]);

lesson('506',10,[
  ['Error messages name the problem and the line. The common ones:','رسائل الخطأ تسمّي المشكلة والسطر. والشائعة منها:'],
  '$ Index exceeds the number of array elements.        % v(5) with numel(v) = 4\nArrays have incompatible sizes for this operation.  % [1 2 3] + [1 2]\nUnrecognized function or variable \'nodes\'.  % a typo or missing value\nIncorrect dimensions for matrix multiplication.     % [1 2 3]*[4 5 6]',
  ['Click the line number in the message to jump to it in the Editor. ``try … catch`` handles expected failures: the code after ``catch`` runs instead of stopping.','واضغط رقم السطر في الرسالة للقفز إليه في المحرر. و ``try … catch`` تعالج الإخفاقات المتوقعة: يُنفَّذ الكود بعد ``catch`` بدل التوقف.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ caught',[['v has 4 elements, so v(5) fails and catch runs.','في v أربعة عناصر فيفشل v(5) ويُنفَّذ catch.']],['$ 0','$ 4','$ v(5)'],'v = [1 2 3 4];\ntry\n    x = v(5);\ncatch\n    disp("caught")\nend'),
  Q('Which message does ``[1 2 3]*[4 5 6]`` give?','أي رسالة يعطيها ``[1 2 3]*[4 5 6]``؟','$ Incorrect dimensions for matrix multiplication.',[['Use ``.*`` or transpose one factor.','استخدم ``.*`` أو انقل أحد العاملين.']],['$ Index exceeds the number of array elements.','$ Unrecognized function or variable.','$ Arrays have incompatible sizes.']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [4 10 18] 32',[['Element-wise product, and the dot product with a transpose.','الضرب عنصراً بعنصر، والضرب القياسي مع منقول.']],['$ 32 [4 10 18]','$ [4 10 18] [4 10 18]','$ Error'],'a = [1 2 3]; b = [4 5 6];\nfprintf("%s %d\\n", mat2str(a.*b), a*b\')'),
  Q('What usually causes ``Unrecognized function or variable``?','ما السبب المعتاد لـ ``Unrecognized function or variable``؟',['A typing mistake in a name, a variable not yet defined, or a function file not on the path','خطأ في كتابة اسم، أو متغير لم يُعرَّف بعد، أو ملف دالة ليس على المسار'],[['Check the spelling and the Current Folder.','افحص الكتابة والمجلد الحالي.']],[['A matrix that is too large','مصفوفة كبيرة جداً'],['Dividing by zero','القسمة على صفر']]),
]);

lesson('506',11,[
  ['A matrix is written row by row: spaces or commas separate entries, semicolons separate rows. Ready-made matrices help with testing:','تُكتب المصفوفة صفاً صفاً: المسافات أو الفواصل تفصل العناصر والفواصل المنقوطة تفصل الصفوف. والمصفوفات الجاهزة تساعد في الاختبار:'],
  '$ A = [1 2 3; 4 5 6]       % 2 × 3\nmagic(3)                  % [8 1 6; 3 5 7; 4 9 2]\nhilb(3)                   % Hilbert matrix, entries 1/(i + j - 1)\nrand(2), randn(2, 3)      % random matrices',
  ['``mat2str(A)`` writes a matrix as text in the bracket notation, which is convenient for printing small results and for tests.','و ``mat2str(A)`` تكتب المصفوفة نصاً بصيغة الأقواس، وهذا مناسب لطباعة النتائج الصغيرة وللاختبارات.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [8 1 6;3 5 7;4 9 2]',[['Rows, columns and diagonals of magic(3) all sum to 15.','صفوف magic(3) وأعمدتها وأقطارها كلها مجموعها 15.']],['$ [1 2 3;4 5 6;7 8 9]','$ [8 3 4;1 5 9;6 7 2]','$ [2 7 6;9 5 1;4 3 8]'],'disp(mat2str(magic(3)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 15 15',[['Column sums and row sums.','مجاميع الأعمدة ومجاميع الصفوف.']],['$ 45 45','$ 15 45','$ 3 3'],'M = magic(3);\nfprintf("%d %d\\n", sum(M(:, 1)), sum(M(2, :)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 0.5;0.5 0.333333333333333]',['#f{1}{i + j − 1}'],['$ [1 0.5;0.333333333333333 0.25]','$ [1 1;1 1]','$ [0.5 0.333333333333333;0.333333333333333 0.25]'],'disp(mat2str(hilb(2)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 2 3;4 5 6]',[['Commas and spaces both separate entries.','الفواصل والمسافات كلاهما يفصل العناصر.']],['$ [1 4;2 5;3 6]','$ [1 2 3 4 5 6]','$ Error'],'A = [1, 2, 3; 4 5 6];\ndisp(mat2str(A))'),
]);

lesson('506',12,[
  ['``A(i, j)`` is one entry, ``A(i, :)`` a row, ``A(:, j)`` a column, and ``end`` the last index. Indices start at 1. A single index counts down the columns (column-major order):','``A(i, j)`` عنصر واحد، و ``A(i, :)`` صف، و ``A(:, j)`` عمود، و ``end`` الفهرس الأخير. والفهارس تبدأ من 1. والفهرس الواحد يعد على الأعمدة نزولاً (ترتيب الأعمدة):'],
  '$ A = [1 2 3; 4 5 6];\nA(2, 3)        % 6\nA(:, 1)\'       % [1 4]\nA(end, :)      % [4 5 6]\nA(5)           % 3   (column-major: 1 4 2 5 3 6)\nA(:, 2) = []   % delete column 2',
  ['Assigning beyond the size grows the array and fills with zeros; deleting with ``[]`` shrinks it.','والإسناد خارج الحجم يكبّر المصفوفة ويملؤها أصفاراً، والحذف بـ ``[]`` يصغّرها.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3',[['Column-major order: 1, 4, 2, 5, 3, 6.','ترتيب الأعمدة: 1 و 4 و 2 و 5 و 3 و 6.']],['$ 5','$ 2','$ 6'],'A = [1 2 3; 4 5 6];\ndisp(A(5))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 3;4 6]',[['Column 2 is removed.','حُذف العمود 2.']],['$ [1 2;4 5]','$ [2;5]','$ [1 2 3]'],'A = [1 2 3; 4 5 6];\nA(:, 2) = [];\ndisp(mat2str(A))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 2 0 0 7]',[['The vector grows and the gap is filled with zeros.','يكبر المتجه وتُملأ الفجوة أصفاراً.']],['$ [1 2 7]','$ Error','$ [1 2 7 0 0]'],'v = [1 2];\nv(5) = 7;\ndisp(mat2str(v))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [6 5 4]',[['The last row, read backwards.','الصف الأخير مقروءاً بالعكس.']],['$ [4 5 6]','$ [3 2 1]','$ [6 3]'],'A = [1 2 3; 4 5 6];\ndisp(mat2str(A(end, end:-1:1)))'),
]);

lesson('506',13,[
  ['Constructors for common matrices:','منشئات المصفوفات الشائعة:'],
  '$ zeros(2, 3), ones(3, 1), eye(3)\ndiag([1 2 3])          % diagonal matrix\ndiag(A)                % the diagonal of A as a column\ndiag([1 1], 1)         % ones on the first superdiagonal\n% second differences:\nT = diag(2*ones(4, 1)) + diag(-ones(3, 1), 1) + diag(-ones(3, 1), -1);',
  ['``diag`` both builds diagonal matrices from vectors and extracts diagonals from matrices; the second argument chooses the diagonal (positive above, negative below).','و ``diag`` تبني مصفوفات قطرية من متجهات وتستخرج الأقطار من المصفوفات، والمتغير الثاني يختار القطر (موجب فوق وسالب تحت).'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [0 1 0;0 0 1;0 0 0]',[['Ones on the first superdiagonal.','آحاد على القطر العلوي الأول.']],['$ [0 0 0;1 0 0;0 1 0]','$ [1 0 0;0 1 0;0 0 1]','$ [0 1;0 0]'],'disp(mat2str(diag([1 1], 1)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [2 -1 0;-1 2 -1;0 -1 2]',[['The second-difference matrix for three points.','مصفوفة الفروق الثانية لثلاث نقاط.']],['$ [2 1 0;1 2 1;0 1 2]','$ [-1 2 -1]','$ [2 0 0;0 2 0;0 0 2]'],'n = 3;\nT = diag(2*ones(n, 1)) + diag(-ones(n-1, 1), 1) + diag(-ones(n-1, 1), -1);\ndisp(mat2str(T))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1;5;9]',[['diag of a matrix returns its diagonal as a column.','diag لمصفوفة تعيد قطرها عموداً.']],['$ [1 5 9]','$ [3;5;7]','$ [1 0 0;0 5 0;0 0 9]'],'A = [1 2 3; 4 5 6; 7 8 9];\ndisp(mat2str(diag(A)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2 3 6',[['A 2 × 3 matrix of zeros.','مصفوفة أصفار 2 × 3.']],['$ 3 2 6','$ 2 3 0','$ 6 1 6'],'Z = zeros(2, 3);\nfprintf("%d %d %d\\n", size(Z, 1), size(Z, 2), numel(Z))'),
]);

lesson('506',14,[
  ['``A\'`` is the transpose (conjugate for complex matrices; ``A.\'`` transposes without conjugating). ``*`` is the matrix product and needs matching inner dimensions:','``A\'`` المنقولة (مع الترافق للمصفوفات المركبة، و ``A.\'`` تنقل دون ترافق). و ``*`` الضرب المصفوفي ويحتاج تطابق البعدين الداخليين:'],
  '$ A = [1 2; 3 4];  B = [0 1; 1 0];\nA*B         % [2 1; 4 3]   (columns swapped)\nB*A         % [3 4; 1 2]   (rows swapped)\nA.*B        % [0 2; 3 0]\nu = [1; 2];  u\'*u, u*u\'    % 5 and the 2 × 2 outer product',
  ['Matrix multiplication is not commutative. A row times a column is a number (inner product), a column times a row a matrix (outer product).','والضرب المصفوفي غير تبديلي. والصف في العمود عدد (ضرب داخلي) والعمود في الصف مصفوفة (ضرب خارجي).'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [2 1;4 3] [3 4;1 2]',[['Right multiplication by B swaps columns, left multiplication swaps rows.','الضرب من اليمين في B يبدل الأعمدة ومن اليسار يبدل الصفوف.']],['$ [3 4;1 2] [2 1;4 3]','$ [0 2;3 0] [0 2;3 0]','$ [2 1;4 3] [2 1;4 3]'],'A = [1 2; 3 4]; B = [0 1; 1 0];\nfprintf("%s %s\\n", mat2str(A*B), mat2str(B*A))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 5 [1 2;2 4]',[['Inner product, then outer product.','الضرب الداخلي ثم الخارجي.']],['$ [1 2;2 4] 5','$ 5 5','$ [1;4] [1 2;2 4]'],'u = [1; 2];\nfprintf("%d %s\\n", u\'*u, mat2str(u*u\'))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -1 1',[['``\'`` conjugates: the imaginary part changes sign; ``.\'`` does not.','``\'`` ترافق فتتغير إشارة الجزء التخيلي، و ``.\'`` لا.']],['$ 1 1','$ -1 -1','$ 1 -1'],'z = [1+1i 2];\nzc = z\';  zt = z.\';\nfprintf("%g %g\\n", imag(zc(1)), imag(zt(1)))'),
  Q('What are the dimensions of ``A*B`` for A of size 3 × 2 and B of size 2 × 5?','ما أبعاد ``A*B`` لـ A حجمها 3 × 2 و B حجمها 2 × 5؟','3 × 5',[['Inner dimensions 2 and 2 agree; the outer ones remain.','البعدان الداخليان 2 و 2 متفقان ويبقى الخارجيان.']],['2 × 2','5 × 3','3 × 2']),
]);

lesson('506',15,[
  ['Sizes:','الأحجام:'],
  '$ A = zeros(2, 3);\nsize(A)          % [2 3]\n[m, n] = size(A) % m = 2, n = 3\nsize(A, 2)       % 3\nlength(A)        % 3   (the largest dimension)\nnumel(A)         % 6',
  ['``length`` is the largest dimension, which is only safe for vectors; for matrices use ``size`` with a dimension, and ``numel`` for the total count.','و ``length`` أكبر بعد، وهي آمنة للمتجهات فقط، فللمصفوفات استخدم ``size`` مع بعد، و ``numel`` للعدد الكلي.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [4 2] 4 8',[['size, then length (largest dimension), then numel.','size ثم length (أكبر بعد) ثم numel.']],['$ [2 4] 4 8','$ [4 2] 2 8','$ [4 2] 4 6'],'A = ones(4, 2);\nfprintf("%s %d %d\\n", mat2str(size(A)), length(A), numel(A))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3 5',[['Two outputs from size.','مخرجان من size.']],['$ 5 3','$ 15 1','$ 3 3'],'[m, n] = size(rand(3, 5));\nfprintf("%d %d\\n", m, n)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 5] [5 1]',[['A row vector and its transpose, a column.','متجه صفي ومنقوله العمود.']],['$ [5 1] [1 5]','$ [5] [5]','$ [1 5] [1 5]'],'v = linspace(0, 1, 5);\nfprintf("%s %s\\n", mat2str(size(v)), mat2str(size(v\')))'),
  Q('Why is ``length(A)`` risky for a matrix?','لماذا تكون ``length(A)`` خطرة لمصفوفة؟',['It returns the largest dimension, which may be the rows or the columns','تعيد أكبر بعد وقد يكون الصفوف أو الأعمدة'],[['Write ``size(A, 1)`` or ``size(A, 2)`` explicitly.','اكتب ``size(A, 1)`` أو ``size(A, 2)`` صراحة.']],[['It is slow','بطيئة'],['It counts the elements','تعد العناصر']]),
]);

lesson('506',16,[
  ['Square brackets concatenate: a space joins side by side, a semicolon stacks. ``reshape`` changes the shape, filling column by column:','الأقواس المربعة تضم: المسافة تضم جنباً إلى جنب والفاصلة المنقوطة ترص فوق بعض. و ``reshape`` تغيّر الشكل مالئة عموداً عموداً:'],
  '$ A = [1 2; 3 4];\n[A A]              % 2 × 4\n[A; A]             % 4 × 2\nreshape(1:6, 2, 3) % [1 3 5; 2 4 6]\nA(:)               % [1; 3; 2; 4]   (all entries as one column)',
  ['``A(:)`` is exactly `vec(A)`, the column stacking used with Kronecker products, so in MATLAB the identity `vec(AYB) = (B^T ⊗ A)vec(Y)` holds directly with ``kron(B.\', A)*Y(:)``.','و ``A(:)`` هي `vec(A)` بالضبط أي رص الأعمدة المستخدم مع ضروب كرونيكر، فتصح في MATLAB المتطابقة `vec(AYB) = (B^T ⊗ A)vec(Y)` مباشرة بـ ``kron(B.\', A)*Y(:)``.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 3 5;2 4 6]',[['Filled column by column.','تُملأ عموداً عموداً.']],['$ [1 2 3;4 5 6]','$ [1 4;2 5;3 6]','$ [1 2;3 4;5 6]'],'disp(mat2str(reshape(1:6, 2, 3)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1;3;2;4]',[['`vec(A)`: column 1, then column 2.','`vec(A)`: العمود 1 ثم العمود 2.']],['$ [1;2;3;4]','$ [1 2 3 4]','$ [1 3 2 4]'],'A = [1 2; 3 4];\ndisp(mat2str(A(:)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [2 4] [4 2]',[['Side by side, then stacked.','جنباً إلى جنب ثم مرصوصة.']],['$ [4 2] [2 4]','$ [2 2] [2 2]','$ [2 4] [2 4]'],'A = [1 2; 3 4];\nfprintf("%s %s\\n", mat2str(size([A A])), mat2str(size([A; A])))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['The Kronecker identity holds with ``Y(:)``.','متطابقة كرونيكر تصح مع ``Y(:)``.']],['$ 0','$ 16','$ Error'],'A = magic(3); B = [1 2 0; 0 1 3; 2 0 1]; Y = hilb(3);\nlhs = A*Y*B;\ndisp(norm(lhs(:) - kron(B.\', A)*Y(:)) < 1e-12)'),
]);

lesson('506',17,[
  ['Reductions work down the columns by default; a second argument chooses the dimension:','الاختزالات تعمل على الأعمدة نزولاً افتراضياً، ومتغير ثانٍ يختار البعد:'],
  '$ A = [1 2; 3 4];\nsum(A)          % [4 6]   column sums\nsum(A, 2)       % [3; 7]  row sums\nsum(A(:))       % 10\n[m, i] = max([3 7 2])   % m = 7, i = 2\ncumsum(1:4), prod(1:5)  % [1 3 6 10], 120',
  ['``max`` with two outputs also returns the position, useful for locating the largest error. ``mean``, ``min``, ``cumprod`` and ``diff`` follow the same rules.','و ``max`` بمخرجين تعيد الموضع أيضاً، وهذا مفيد لتحديد أكبر خطأ. و ``mean`` و ``min`` و ``cumprod`` و ``diff`` تتبع القواعد نفسها.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [4 6] [3;7] 10',[['Columns, rows, everything.','الأعمدة ثم الصفوف ثم الكل.']],['$ [3;7] [4 6] 10','$ 10 10 10','$ [4 6] [4 6] 10'],'A = [1 2; 3 4];\nfprintf("%s %s %d\\n", mat2str(sum(A)), mat2str(sum(A, 2)), sum(A(:)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.3 3',[['The largest absolute error and its index.','أكبر خطأ مطلق وفهرسه.']],['$ 3 0.3','$ 0.3 2','$ -0.2 2'],'err = [0.1 -0.2 0.3 -0.05];\n[m, i] = max(abs(err));\nfprintf("%g %d\\n", m, i)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 3 6 10] 120',[['Running sums of 1:4, and 5!.','المجاميع التراكمية لـ 1:4، و 5!.']],['$ 10 120','$ [1 2 6 24] 120','$ [1 3 6 10] 15'],'fprintf("%s %d\\n", mat2str(cumsum(1:4)), prod(1:5))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [3 5 7]',[['Successive differences of the squares.','الفروق المتتالية للمربعات.']],['$ [1 4 9 16]','$ [2 2]','$ 15'],'disp(mat2str(diff([1 4 9 16])))'),
]);

lesson('506',18,[
  ['A comparison gives a logical array; used as an index it selects elements. ``find`` returns the positions:','المقارنة تعطي مصفوفة منطقية، وعند استخدامها فهرساً تختار العناصر. و ``find`` تعيد المواضع:'],
  '$ v = [3 -1 4 -1 5];\nv > 0               % [1 0 1 0 1]\nv(v > 0)            % [3 4 5]\nfind(v < 0)         % [2 4]\nv(v < 0) = 0        % [3 0 4 0 5]\nany(v > 4), all(v >= 0), nnz(v)',
  ['Combine conditions with ``&``, ``|`` and ``~`` element by element. Logical indexing replaces most loops that test each element.','وادمج الشروط بـ ``&`` و ``|`` و ``~`` عنصراً بعنصر. والفهرسة المنطقية تستبدل معظم الحلقات التي تختبر كل عنصر.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [3 4 5] [2 4]',[['The positive values, and the positions of the negative ones.','القيم الموجبة ومواضع السالبة.']],['$ [1 3 5] [2 4]','$ [3 4 5] [-1 -1]','$ [2 4] [3 4 5]'],'v = [3 -1 4 -1 5];\nfprintf("%s %s\\n", mat2str(v(v > 0)), mat2str(find(v < 0)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [3 0 4 0 5]',[['Logical assignment replaces the negative entries.','الإسناد المنطقي يستبدل العناصر السالبة.']],['$ [3 4 5]','$ [0 -1 0 -1 0]','$ [3 -1 4 -1 5]'],'v = [3 -1 4 -1 5];\nv(v < 0) = 0;\ndisp(mat2str(v))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3',[['Interior points of [0, 1] among five equally spaced points.','النقاط الداخلية في [0, 1] من خمس نقاط متساوية التباعد.']],['$ 5','$ 2','$ 4'],'x = linspace(0, 1, 5);\ndisp(nnz(x > 0 & x < 1))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1 0',[['Some entries exceed 4, but not all are non-negative.','بعض العناصر يتجاوز 4 لكن ليست كلها غير سالبة.']],['$ 0 1','$ 1 1','$ 0 0'],'v = [3 -1 4 -1 5];\nfprintf("%d %d\\n", any(v > 4), all(v >= 0))'),
]);

lesson('506',19,[
  ['``sort`` returns the sorted values and, optionally, the permutation; ``unique`` removes duplicates and sorts:','``sort`` تعيد القيم مرتبة واختيارياً التبديل، و ``unique`` تحذف المكرر وترتب:'],
  '$ [s, idx] = sort([3 1 2])           % s = [1 2 3], idx = [2 3 1]\nsort([3 1 2], "descend")           % [3 2 1]\nunique([3 1 3 2])                  % [1 2 3]\n[x, k] = sort(x);  w = w(k);        % sort nodes and keep their weights',
  ['The index output keeps related arrays together, for example nodes and weights from an eigenvalue routine.','ومخرج الفهارس يبقي المصفوفات المترابطة معاً، مثل العقد والأوزان من إجراء القيم الذاتية.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 2 3] [2 3 1]',[['idx says where each sorted value came from.','idx يقول من أين جاءت كل قيمة مرتبة.']],['$ [1 2 3] [1 2 3]','$ [3 2 1] [1 3 2]','$ [1 2 3] [3 1 2]'],'[s, idx] = sort([3 1 2]);\nfprintf("%s %s\\n", mat2str(s), mat2str(idx))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 2 3]',[['Sorted, without duplicates.','مرتبة ودون تكرار.']],['$ [3 1 2]','$ [1 2 3 3]','$ [3 2 1]'],'disp(mat2str(unique([3 1 3 2])))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [-1 0 1] [0.5 2 0.5]',[['Sorting the nodes and applying the same permutation to the weights.','ترتيب العقد وتطبيق التبديل نفسه على الأوزان.']],['$ [-1 0 1] [2 0.5 0.5]','$ [1 -1 0] [0.5 0.5 2]','$ [-1 0 1] [0.5 0.5 2]'],'x = [1 -1 0]; w = [0.5 0.5 2];\n[x, k] = sort(x); w = w(k);\nfprintf("%s %s\\n", mat2str(x), mat2str(w))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [3 2 1]',[['Descending order.','ترتيب تنازلي.']],['$ [1 2 3]','$ [2 3 1]','$ [3 1 2]'],'disp(mat2str(sort([3 1 2], "descend")))'),
]);

lesson('506',20,[
  ['``kron(A, B)`` replaces each entry `a_{ij}` by the block `a_{ij}B`; ``repmat(A, m, n)`` tiles copies of A:','``kron(A, B)`` تستبدل كل عنصر `a_{ij}` بالكتلة `a_{ij}B`، و ``repmat(A, m, n)`` ترص نسخاً من A:'],
  '$ kron(eye(2), [1 2])      % [1 2 0 0; 0 0 1 2]\nkron([1 2], eye(2))       % [1 0 2 0; 0 1 0 2]\nrepmat([1 2], 2, 2)       % [1 2 1 2; 1 2 1 2]\nL = kron(eye(n), T) + kron(T, eye(n));   % 2-D Laplacian from a 1-D one',
  ['The 2-D Laplacian on a tensor grid is the classic use: with T the 1-D second-difference matrix, ``kron(I, T) + kron(T, I)`` acts on the column-stacked grid values.','والاستخدام الكلاسيكي هو اللابلاسي الثنائي على شبكة تنسورية: مع T مصفوفة الفروق الثانية الأحادية تعمل ``kron(I, T) + kron(T, I)`` على قيم الشبكة المرصوصة أعمدة.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 2 0 0;0 0 1 2]',[['Each entry of eye(2) multiplies the block [1 2].','كل عنصر في eye(2) يضرب الكتلة [1 2].']],['$ [1 0 2 0;0 1 0 2]','$ [1 2;1 2]','$ [1 2 1 2;1 2 1 2]'],'disp(mat2str(kron(eye(2), [1 2])))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 2 1 2;1 2 1 2]',[['Two by two copies.','نسختان في اثنتين.']],['$ [1 2;1 2]','$ [1 1 2 2;1 1 2 2]','$ [1 2 0 0;0 0 1 2]'],'disp(mat2str(repmat([1 2], 2, 2)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [9 9] 33',[['n = 3: 9 unknowns, and 9 + 6 + 6 + 6 + 6 nonzeros.','n = 3: تسعة مجاهيل و 9 + 6 + 6 + 6 + 6 عنصراً غير صفري.']],['$ [6 6] 33','$ [9 9] 81','$ [3 3] 7'],'n = 3;\nT = 2*eye(n) - diag(ones(n-1, 1), 1) - diag(ones(n-1, 1), -1);\nL = kron(eye(n), T) + kron(T, eye(n));\nfprintf("%s %d\\n", mat2str(size(L)), nnz(L))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [6 6]',[['Sizes multiply: (2·3) × (2·3).','الأحجام تُضرب: (2·3) × (2·3).']],['$ [5 5]','$ [2 3]','$ [4 9]'],'disp(mat2str(size(kron(ones(2), eye(3)))))'),
]);

/* ---- 506 · Unit 3 (lessons 21–30): programming;  Unit 4 (lessons 31–40): graphics ---- */
lesson('506',21,[
  ['``if`` runs a block when its condition is true; ``elseif`` and ``else`` give the other cases; every block ends with ``end``:','``if`` تنفذ كتلة حين يكون شرطها صحيحاً، و ``elseif`` و ``else`` تعطيان الحالات الأخرى، وكل كتلة تنتهي بـ ``end``:'],
  '$ if err < 1e-10\n    disp("converged")\nelseif err < 1e-6\n    disp("almost")\nelse\n    disp("not yet")\nend',
  ['Conditions use ``==  ~=  <  <=  >  >=`` and combine with ``&&`` (and), ``||`` (or), ``~`` (not). A condition on an array is true only if all its elements are nonzero, so write ``all(...)`` or ``any(...)`` explicitly.','والشروط تستخدم ``==  ~=  <  <=  >  >=`` وتتحد بـ ``&&`` (و) و ``||`` (أو) و ``~`` (ليس). والشرط على مصفوفة صحيح فقط إذا كانت كل عناصرها غير صفرية، فاكتب ``all(...)`` أو ``any(...)`` صراحة.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ almost',[['`10^{−8}` is not below `10^{−10}` but is below `10^{−6}`.','`10^{−8}` ليست أقل من `10^{−10}` لكنها أقل من `10^{−6}`.']],['$ converged','$ not yet','$ almost converged'],'err = 1e-8;\nif err < 1e-10\n    disp("converged")\nelseif err < 1e-6\n    disp("almost")\nelse\n    disp("not yet")\nend'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ no',[['The condition on an array needs all elements true; one is 0.','الشرط على مصفوفة يحتاج كل العناصر صحيحة، وأحدها 0.']],['$ yes','$ yes no','$ Error'],'v = [1 0 2];\nif v\n    disp("yes")\nelse\n    disp("no")\nend'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1 0',[['``~=`` means «not equal».','``~=`` تعني «لا يساوي».']],['$ 0 1','$ 1 1','$ 0 0'],'a = 3;\nfprintf("%d %d\\n", a ~= 2, a == 2)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ inside',[['Both parts of the ``&&`` are true.','جزءا ``&&`` صحيحان.']],['$ outside','$ 1','$ inside outside'],'t = 0.4;\nif t >= 0 && t <= 1\n    disp("inside")\nelse\n    disp("outside")\nend'),
]);

lesson('506',22,[
  ['``for`` runs a block once for each column of the array after ``=``; usually that array is a row vector such as ``1:n``:','``for`` تنفذ كتلة مرة لكل عمود في المصفوفة بعد ``=``، وغالباً تكون تلك المصفوفة متجهاً صفياً مثل ``1:n``:'],
  '$ s = 0;\nfor k = 1:10\n    s = s + k^2;\nend\ndisp(s)            % 385',
  ['Because the loop runs over columns, ``for c = A`` gives each column of A in turn, and a column vector gives one single pass. Avoid ``i`` and ``j`` as counters; they are the imaginary unit.','ولأن الحلقة تمر على الأعمدة فإن ``for c = A`` تعطي كل عمود من A تباعاً، والمتجه العمودي يعطي دورة واحدة فقط. وتجنب ``i`` و ``j`` عدّادين لأنهما الوحدة التخيلية.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 385',['Σ_{k=1}^{10} k^2 = #f{10·11·21}{6}'],['$ 55','$ 100','$ 285'],'s = 0;\nfor k = 1:10\n    s = s + k^2;\nend\ndisp(s)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 4 6',[['The loop variable is each column: [1; 3], then [2; 4].','متغير الحلقة هو كل عمود: [1; 3] ثم [2; 4].']],['$ 3 7','$ 1 2 3 4','$ 10'],'A = [1 2; 3 4];\nfor c = A\n    fprintf("%d ", sum(c));\nend\nfprintf("\\n")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['A column vector is one column: one pass, with the whole vector.','المتجه العمودي عمود واحد: دورة واحدة بالمتجه كله.']],['$ 3','$ 0','$ 6'],'n = 0;\nfor v = [1; 2; 3]\n    n = n + 1;\nend\ndisp(n)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 120',['5! = 120'],['$ 24','$ 15','$ 720'],'p = 1;\nfor k = 5:-1:1\n    p = p*k;\nend\ndisp(p)'),
]);

lesson('506',23,[
  ['``while`` repeats as long as its condition holds; ``break`` leaves the loop and ``continue`` skips to the next pass:','``while`` تكرر ما دام شرطها صحيحاً، و ``break`` تخرج من الحلقة و ``continue`` تقفز إلى الدورة التالية:'],
  '$ x = 1;  it = 0;\nwhile true\n    xn = (x + 2/x)/2;   it = it + 1;\n    if abs(xn - x) < 1e-12, break, end\n    x = xn;\nend\nfprintf("%.15f in %d steps\\n", xn, it)',
  ['Always bound an iteration that may not converge: ``while err > tol && it < maxit``.','وضع دائماً حداً لتكرار قد لا يتقارب: ``while err > tol && it < maxit``.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.414213562373095 in 6 steps',[['Five steps give all digits, the sixth confirms convergence.','خمس خطوات تعطي كل الأرقام والسادسة تؤكد التقارب.']],['$ 1.414213562373095 in 5 steps','$ 1.5 in 1 steps','$ 1.414213562373095 in 50 steps'],'x = 1;  it = 0;\nwhile true\n    xn = (x + 2/x)/2;   it = it + 1;\n    if abs(xn - x) < 1e-12, break, end\n    x = xn;\nend\nfprintf("%.15f in %d steps\\n", xn, it)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 7',[['`2^7 = 128` is the first power above 100.','`2^7 = 128` أول قوة فوق 100.']],['$ 6','$ 128','$ 100'],'n = 0;\nwhile 2^n <= 100\n    n = n + 1;\nend\ndisp(n)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1 3 5',[['``continue`` skips the even numbers.','``continue`` تتجاوز الأعداد الزوجية.']],['$ 2 4 6','$ 1 2 3 4 5 6','$ 1 3 5 7'],'for k = 1:6\n    if mod(k, 2) == 0, continue, end\n    fprintf("%d ", k);\nend\nfprintf("\\n")'),
  Q('Why add ``it < maxit`` to a while condition?','لماذا نضيف ``it < maxit`` إلى شرط while؟',['So that a non-converging iteration still stops','حتى يتوقف التكرار غير المتقارب مع ذلك'],[['Then check after the loop whether the tolerance was reached.','ثم افحص بعد الحلقة هل بُلغت السماحية.']],[['To make it faster','لتسريعه'],['It is required by MATLAB','يتطلبه MATLAB']]),
]);

lesson('506',24,[
  ['A function lives in its own file whose name matches the function, or at the end of a script as a local function:','الدالة تعيش في ملفها الخاص الذي يطابق اسمه اسمها، أو في آخر ملف نصي دالةً محلية:'],
  '$ % file legendre_p.m\nfunction P = legendre_p(n, x)\n%LEGENDRE_P  Values of P_0..P_n at the points x (one column per degree).\n    P = zeros(numel(x), n + 1);   P(:, 1) = 1;\n    if n > 0, P(:, 2) = x(:); end\n    for k = 1:n-1\n        P(:, k+2) = ((2*k + 1)*x(:).*P(:, k+1) - k*P(:, k))/(k + 1);\n    end\nend',
  ['A function has its own workspace: it sees only its inputs and returns only its outputs. The first comment block is its help text. MATLAB indices start at 1, so column k + 1 holds `P_k`.','وللدالة مساحة عمل خاصة: لا ترى إلا مدخلاتها ولا تعيد إلا مخرجاتها. وأول كتلة تعليق هي نص مساعدتها. وفهارس MATLAB تبدأ من 1 فالعمود k + 1 يحمل `P_k`.'],
],[
  Q('Which column of ``legendre_p(5, x)`` holds `P_3`?','أي عمود في ``legendre_p(5, x)`` يحمل `P_3`؟','4',[['Column k + 1 holds `P_k`.','العمود k + 1 يحمل `P_k`.']],['3','5','2']),
  Q('What size does ``legendre_p(4, linspace(-1, 1, 11))`` have?','ما حجم ``legendre_p(4, linspace(-1, 1, 11))``؟','11 × 5',[['One row per point, one column per degree 0..4.','صف لكل نقطة وعمود لكل درجة من 0 إلى 4.']],['5 × 11','11 × 4','4 × 11']),
  Q('Why does a variable set inside the function not appear in the Workspace?','لماذا لا يظهر في مساحة العمل متغير عُيّن داخل الدالة؟',['Functions have their own workspace that disappears when they return','للدوال مساحة عمل خاصة تختفي عند العودة'],[['Only the outputs come back.','لا يعود إلا المخرجات.']],[['Because of the semicolon','بسبب الفاصلة المنقوطة'],['It does appear','بل يظهر']]),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1 0.5 -0.125 -0.4375',[['The recurrence of the function, written inline at x = 0.5.','علاقة التكرار في الدالة مكتوبة مباشرة عند x = 0.5.']],['$ 1 0.5 0.125 0.4375','$ 0.5 -0.125 -0.4375','$ 1 0.5 -0.125 0.4375'],'x = 0.5;  n = 3;\nP = zeros(1, n + 1);  P(1) = 1;  P(2) = x;\nfor k = 1:n-1\n    P(k+2) = ((2*k + 1)*x*P(k+1) - k*P(k))/(k + 1);\nend\nfprintf("%g %g %g %g\\n", P)'),
]);

lesson('506',25,[
  ['An anonymous function is defined in one line with ``@`` and can be passed to other functions:','الدالة المجهولة تُعرَّف في سطر واحد بـ ``@`` ويمكن تمريرها لدوال أخرى:'],
  '$ f = @(x) x.^2 .* exp(-x);\nf(1)                         % 0.3679\nintegral(f, 0, 1)            % 0.1606\nw = @(x, a, b) (1 - x).^a .* (1 + x).^b;\nw(0.5, 1, 0)                 % 0.5',
  ['Variables used inside an anonymous function are copied when it is created: changing them afterwards has no effect. Use the dot operators so that the function works on vectors, as ``integral`` requires.','والمتغيرات المستخدمة داخل الدالة المجهولة تُنسخ عند إنشائها، فتغييرها بعد ذلك لا أثر له. واستخدم العمليات المنقطة لتعمل الدالة على المتجهات كما تتطلب ``integral``.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2',[['a was 2 when f was created; the copy is kept.','a كانت 2 عند إنشاء f، وتُحفظ النسخة.']],['$ 5','$ 1','$ Error'],'a = 2;\nf = @(x) a*x;\na = 5;\ndisp(f(1))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.160603',['∫_0^1 x^2 e^{−x} dx = 2 − #f{5}{e}'],['$ 0.367879','$ 0.333333','$ 0.264241'],'f = @(x) x.^2 .* exp(-x);\nfprintf("%.6f\\n", integral(f, 0, 1))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.5000',['(1 − 0.5)^1(1 + 0.5)^0',['``disp`` shows 4 decimals in the default format.','``disp`` تعرض 4 أرقام عشرية في الصيغة الافتراضية.']],['$ 0.7500','$ 1.5000','$ 0.2500'],'w = @(x, a, b) (1 - x).^a .* (1 + x).^b;\ndisp(w(0.5, 1, 0))'),
  Q('Why must ``f = @(x) x.^2`` use ``.^`` to work with ``integral``?','لماذا يجب أن تستخدم ``f = @(x) x.^2`` العامل ``.^`` لتعمل مع ``integral``؟',['integral calls f with a vector of points at once','integral تستدعي f بمتجه من النقاط دفعة واحدة'],[['``x^2`` of a row vector is an error.','``x^2`` لمتجه صفي خطأ.']],[['For speed only','للسرعة فقط'],['It does not matter','لا يهم']]),
]);

lesson('506',26,[
  ['A function can return several outputs and accept optional inputs; ``nargin`` counts the inputs given:','يمكن للدالة أن تعيد عدة مخرجات وأن تقبل مدخلات اختيارية، و ``nargin`` تعد المدخلات المعطاة:'],
  '$ function [x, w] = gauss_legendre(n, a, b)\n    if nargin < 2, a = -1; b = 1; end        % default interval\n    k = 1:n-1;  beta = k./sqrt(4*k.^2 - 1);\n    [V, D] = eig(diag(beta, 1) + diag(beta, -1));\n    [x, i] = sort(diag(D));  w = 2*V(1, i)\'.^2;\n    x = (b - a)/2*x + (a + b)/2;  w = (b - a)/2*w;\nend',
  ['The caller decides how many outputs it wants: ``x = gauss_legendre(5)`` takes only the nodes, ``[x, w] = …`` both. Built-in functions work the same way: ``[m, i] = max(v)``, ``[V, D] = eig(A)``.','والمستدعي يقرر كم مخرجاً يريد: ``x = gauss_legendre(5)`` تأخذ العقد فقط، و ``[x, w] = …`` الاثنين. والدوال الجاهزة تعمل بالطريقة نفسها: ``[m, i] = max(v)`` و ``[V, D] = eig(A)``.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.555556 0.888889 0.555556',[['The 3-point Gauss–Legendre weights from Golub–Welsch.','أوزان جاوس–ليجندر الثلاثة من Golub–Welsch.']],['$ 0.333333 1.333333 0.333333','$ 1 1 1','$ 0.666667 0.666667 0.666667'],'n = 3;  k = 1:n-1;  beta = k./sqrt(4*k.^2 - 1);\n[V, D] = eig(diag(beta, 1) + diag(beta, -1));\n[x, i] = sort(diag(D));  w = 2*V(1, i)\'.^2;\nfprintf("%.6f %.6f %.6f\\n", w)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.5 0.5',[['Mapping [−1, 1] to [0, 1] halves the weights of the 2-point rule.','نقل [−1, 1] إلى [0, 1] ينصّف أوزان قاعدة النقطتين.']],['$ 1 1','$ 0.25 0.75','$ 2 2'],'n = 2;  a = 0;  b = 1;  k = 1:n-1;  beta = k./sqrt(4*k.^2 - 1);\n[V, D] = eig(diag(beta, 1) + diag(beta, -1));\n[x, i] = sort(diag(D));  w = 2*V(1, i)\'.^2;\nw = (b - a)/2*w;\nfprintf("%g %g\\n", round(w*1e12)/1e12)'),
  Q('What does ``nargin < 2`` test in the function above?','ماذا يختبر ``nargin < 2`` في الدالة أعلاه؟',['Whether the interval was omitted, so that the default [−1, 1] is used','هل حُذف المجال فتُستخدم القيمة الافتراضية [−1, 1]'],[['``nargin`` is the number of inputs actually passed.','``nargin`` عدد المدخلات الممررة فعلاً.']],[['The number of outputs','عدد المخرجات'],['Whether n < 2','هل n < 2']]),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 7 2',[['The value and the position of the maximum.','القيمة وموضع الأكبر.']],['$ 2 7','$ 7 3','$ 3 7'],'[m, i] = max([3 7 2]);\nfprintf("%d %d\\n", m, i)'),
]);

lesson('506',27,[
  ['Vectorized code works on whole arrays instead of looping over elements. It is shorter and usually much faster:','الكود المتجهي يعمل على مصفوفات كاملة بدل المرور على العناصر، وهو أقصر وأسرع عادة بكثير:'],
  '$ % loop\ns = 0;  for k = 1:n, s = s + 1/k^2; end\n% vectorized\ns = sum(1./(1:n).^2);\n% Gauss rule\nI = w(:)\' * f(x(:));',
  ['Most built-in functions accept arrays; combine them with element-wise operators, logical indexing and ``sum``/``cumsum``/``diff``. Modern MATLAB also compiles loops efficiently, so vectorize for clarity first and for speed when profiling says so.','ومعظم الدوال الجاهزة تقبل المصفوفات، فادمجها مع العمليات المنقطة والفهرسة المنطقية و ``sum``/``cumsum``/``diff``. و MATLAB الحديث يترجم الحلقات بكفاءة أيضاً، فحوّل إلى متجهي للوضوح أولاً وللسرعة حين يقول قياس الأداء ذلك.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.643935',[['The partial sum of `Σ 1/k^2` up to 1000; the limit is `π^2/6 ≈ 1.644934`.','المجموع الجزئي لـ `Σ 1/k^2` حتى 1000، والنهاية `π^2/6 ≈ 1.644934`.']],['$ 1.644934','$ 1.000000','$ 0.693147'],'fprintf("%.6f\\n", sum(1./(1:1000).^2))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.666667',['∫_{−1}^{1} x^2 dx = #f{2}{3}'],['$ 0.333333','$ 2.000000','$ 1.154701'],'x = [-1; 1]/sqrt(3);  w = [1; 1];\nf = @(x) x.^2;\nfprintf("%.6f\\n", w\'*f(x))'),
  Q('Write the maximum error between vectors ``u`` and ``ue`` without a loop.','اكتب أكبر خطأ بين المتجهين ``u`` و ``ue`` دون حلقة.','$ max(abs(u - ue))',[['Every operation acts on the whole vector.','كل عملية تعمل على المتجه كاملاً.']],['$ max(u - ue)','$ abs(max(u) - max(ue))','$ for k = 1:n, max(abs(u(k))); end']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3',[['Count the entries above 0.5 with a logical sum.','عدّ العناصر الأكبر من 0.5 بمجموع منطقي.']],['$ 2','$ 5','$ 0.75'],'v = [0.2 0.7 0.9 0.4 0.6];\ndisp(sum(v > 0.5))'),
]);

lesson('506',28,[
  ['Growing an array inside a loop makes MATLAB reallocate and copy it many times. Allocate the final size first:','تكبير مصفوفة داخل حلقة يجعل MATLAB يعيد حجزها ونسخها مرات كثيرة. فاحجز الحجم النهائي أولاً:'],
  '$ % slow: grows at every step\ne = [];  for N = 4:4:40, e(end+1) = err(N); end\n% fast: preallocated\nNs = 4:4:40;  e = zeros(size(Ns));\nfor k = 1:numel(Ns), e(k) = err(Ns(k)); end',
  ['The Editor underlines growing arrays with a warning. Preallocate with ``zeros``, ``ones``, ``nan`` or ``cell``.','والمحرر يضع خطاً تحت المصفوفات المتنامية مع تحذير. احجز مسبقاً بـ ``zeros`` أو ``ones`` أو ``nan`` أو ``cell``.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 4 9 16 25]',[['The same result as the growing version, without reallocation.','النتيجة نفسها كالنسخة المتنامية دون إعادة حجز.']],['$ [1 2 3 4 5]','$ [0 0 0 0 0]','$ [1 4 9 16]'],'n = 5;  v = zeros(1, n);\nfor k = 1:n, v(k) = k^2; end\ndisp(mat2str(v))'),
  Q('About how many element copies does growing a vector to length n one element at a time make?','كم نسخ عنصر تقريباً يُجري تكبير متجه إلى الطول n عنصراً بعنصر؟','≈ #f{n^2}{2}',['1 + 2 + … + (n − 1)'],['≈ n','≈ n log n','≈ 2n']),
  Q('Why preallocate with ``nan`` rather than ``zeros`` for a table of errors?','لماذا يُحجز مسبقاً بـ ``nan`` بدل ``zeros`` لجدول أخطاء؟',['An entry that was never filled shows up as ``nan`` instead of a misleading 0','العنصر الذي لم يُملأ يظهر ``nan`` بدل صفر مضلل'],[['A zero error would look like a perfect result.','الخطأ الصفري يبدو نتيجة مثالية.']],[['nan is faster','nan أسرع'],['zeros cannot be used','لا يمكن استخدام zeros']]),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 2]',[['``size(Ns)`` gives a 1 × 2 shape for the preallocated vector.','``size(Ns)`` تعطي الشكل 1 × 2 للمتجه المحجوز.']],['$ [2 1]','$ [2]','$ [0 0]'],'Ns = [8 16];\ne = zeros(size(Ns));\ndisp(mat2str(size(e)))'),
]);

lesson('506',29,[
  ['A cell array holds values of different types and sizes; a structure holds named fields:','مصفوفة الخلايا تحمل قيماً مختلفة الأنواع والأحجام، والهيكل يحمل حقولاً مسماة:'],
  '$ c = {8, "Legendre", [0.5 1.9]};\nc{2}                     % the content: "Legendre"\nc(2)                     % a 1 × 1 cell containing it\np.N = 8;  p.lam = 0.5;  p.orders = [1.9];\nfieldnames(p), isfield(p, "lam")',
  ['Braces ``{}`` give the content of a cell, round brackets ``()`` a sub-array of cells. A structure is the natural way to pass the parameters of a problem to a solver.','والأقواس المعقوفة ``{}`` تعطي محتوى الخلية والمستديرة ``()`` جزءاً من مصفوفة الخلايا. والهيكل الطريقة الطبيعية لتمرير وسائط مسألة إلى حلّال.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ char cell',[['Braces give the content, round brackets a cell.','المعقوفة تعطي المحتوى والمستديرة خلية.']],['$ cell char','$ char char','$ cell cell'],'c = {8, \'Legendre\', [0.5 1.9]};\nfprintf("%s %s\\n", class(c{2}), class(c(2)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 8 0.5 1',[['Fields are read with a dot; isfield returns 1 (true).','الحقول تُقرأ بالنقطة، و isfield تعيد 1 (صحيح).']],['$ 8 0.5 0','$ N lam 1','$ Error'],'p.N = 8;  p.lam = 0.5;\nfprintf("%d %g %d\\n", p.N, p.lam, isfield(p, "lam"))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3',[['Three cells, whatever their contents.','ثلاث خلايا مهما كانت محتوياتها.']],['$ 4','$ 1','$ 11'],'c = {8, \'Legendre\', [0.5 1.9]};\ndisp(numel(c))'),
  Q('Why pass a structure ``p`` to a solver instead of eight separate inputs?','لماذا يُمرر هيكل ``p`` إلى حلّال بدل ثمانية مدخلات منفصلة؟',['Named fields cannot be passed in the wrong order, and new parameters do not change the call','الحقول المسماة لا تُمرر بترتيب خاطئ، والوسائط الجديدة لا تغيّر الاستدعاء'],[['``solve(p)`` stays the same for every example.','``solve(p)`` تبقى كما هي لكل مثال.']],[['It is faster','أسرع'],['MATLAB requires it','يتطلبه MATLAB']]),
]);

lesson('506',30,[
  ['The debugger stops a program inside its own workspace so you can inspect it:','المصحح يوقف البرنامج داخل مساحة عمله فتستطيع فحصه:'],
  '$ dbstop if error       % stop where the next error occurs\ndbstop in solver at 42  % a breakpoint (or click the line number)\n% at the K>> prompt: inspect variables, then\ndbstep, dbcont, dbquit',
  ['At a breakpoint the prompt becomes ``K>>`` and the Workspace shows the function’s variables. Test small cases first; most errors already appear for N = 2.','عند نقطة التوقف يصبح المحث ``K>>`` وتعرض مساحة العمل متغيرات الدالة. واختبر الحالات الصغيرة أولاً، فمعظم الأخطاء تظهر عند N = 2.'],
],[
  Q('Which command makes MATLAB stop at the line where an error occurs?','أي أمر يجعل MATLAB يتوقف عند السطر الذي يحدث فيه خطأ؟','$ dbstop if error',[['The workspace at that moment is then available.','فتتاح مساحة العمل في تلك اللحظة.']],['$ dbcont','$ keyboard off','$ error on']),
  Q('What does the prompt ``K>>`` mean?','ماذا يعني المحث ``K>>``؟',['MATLAB is paused in debug mode inside a function','MATLAB متوقف في وضع التصحيح داخل دالة'],[['``dbcont`` continues, ``dbquit`` leaves.','``dbcont`` تكمل و ``dbquit`` تخرج.']],[['An error occurred and MATLAB closed','حدث خطأ وأُغلق MATLAB'],['The kernel is busy','النواة مشغولة']]),
  Q('Which command executes only the next line while debugging?','أي أمر ينفذ السطر التالي فقط أثناء التصحيح؟','$ dbstep',[['``dbstep in`` enters a called function.','``dbstep in`` تدخل دالة مستدعاة.']],['$ dbcont','$ dbquit','$ dbstop']),
  Q('A solver gives a wrong matrix for N = 30. What is the first test?','حلّال يعطي مصفوفة خاطئة عند N = 30. ما أول اختبار؟',['Run N = 1 or 2 and compare with a hand computation','شغّل N = 1 أو 2 وقارن بحساب يدوي'],[['Small cases can be checked line by line.','الحالات الصغيرة تُفحص سطراً سطراً.']],[['Run N = 60','شغّل N = 60'],['Restart MATLAB','أعد تشغيل MATLAB']]),
]);

lesson('506',31,[
  ['``plot(x, y)`` joins the points `(x_k, y_k)`; a third argument gives colour, line style and marker:','``plot(x, y)`` تصل النقاط `(x_k, y_k)`، ومتغير ثالث يعطي اللون ونمط الخط والعلامة:'],
  '$ x = linspace(-1, 1, 200);\nplot(x, (3*x.^2 - 1)/2, "b-", "LineWidth", 1.5)\nhold on\nplot(x, (5*x.^3 - 3*x)/2, "r--")\ngrid on;  axis([-1 1 -1 1])',
  ['Name–value pairs set other properties: ``"LineWidth"``, ``"MarkerSize"``, ``"Color"``. ``axis([xmin xmax ymin ymax])`` fixes the visible region.','وأزواج الاسم والقيمة تحدد خصائص أخرى: ``"LineWidth"`` و ``"MarkerSize"`` و ``"Color"``. و ``axis([xmin xmax ymin ymax])`` تثبت المنطقة الظاهرة.'],
],[
  Q('Which format string draws red circles joined by a dashed line?','أي سلسلة تنسيق ترسم دوائر حمراء موصولة بخط متقطع؟','$ "r--o"',[['Colour r, style --, marker o.','اللون r والنمط -- والعلامة o.']],['$ "o--red"','$ "r:o"','$ "ro"']),
  Q('Why use 200 points instead of 5 for the curve?','لماذا نستخدم 200 نقطة بدل 5 للمنحنى؟',['plot joins points with straight segments; few points give a broken line','plot تصل النقاط بقطع مستقيمة، والنقاط القليلة تعطي خطاً مكسوراً'],[['The function is only evaluated at the given points.','الدالة تُحسب عند النقاط المعطاة فقط.']],[['To make it exact','لجعله مضبوطاً'],['plot needs at least 100 points','plot تحتاج 100 نقطة على الأقل']]),
  Q('Which command keeps the current curve when the next plot is drawn?','أي أمر يُبقي المنحنى الحالي عند رسم التالي؟','$ hold on',[['Without it each plot replaces the previous one.','دونه يستبدل كل رسم سابقه.']],['$ keep on','$ figure','$ grid on']),
  Q('Which call fixes the axes to `[−1, 1] × [0, 2]`?','أي استدعاء يثبت المحاور على `[−1, 1] × [0, 2]`؟','$ axis([-1 1 0 2])',[['Four numbers: x range, then y range.','أربعة أعداد: مدى x ثم مدى y.']],['$ axis([-1 0 1 2])','$ xlim([-1 1 0 2])','$ axis(-1, 1, 0, 2)']),
]);

lesson('506',32,[
  ['Several curves in one figure: plot several pairs in one call, or use ``hold on``; ``legend`` names them in order:','عدة منحنيات في شكل واحد: ارسم عدة أزواج في استدعاء واحد أو استخدم ``hold on``، و ``legend`` تسميها بالترتيب:'],
  '$ t = linspace(0, 1, 101);\nplot(t, exp(-t), t, 1 - 2*t/3, "--")\nlegend("exact", "tau, N = 1", "Location", "northeast")\n% or give names while plotting:\nplot(t, exp(-t), "DisplayName", "exact"); hold on\nplot(t, 1 - 2*t/3, "--", "DisplayName", "tau"); legend show',
  ['``"DisplayName"`` keeps each name with its curve, which is safer than a separate list when curves are added in a loop.','و ``"DisplayName"`` تبقي كل اسم مع منحناه، وهذا أسلم من قائمة منفصلة حين تُضاف المنحنيات في حلقة.'],
],[
  Q('How many curves does ``plot(t, exp(-t), t, 1 - 2*t/3, "--")`` draw?','كم منحنى يرسم ``plot(t, exp(-t), t, 1 - 2*t/3, "--")``؟','2',[['Two (x, y) pairs.','زوجان (x, y).']],['1','3','4']),
  Q('In which order does ``legend("a", "b")`` assign names?','بأي ترتيب تعيّن ``legend("a", "b")`` الأسماء؟',['In the order the curves were plotted','بترتيب رسم المنحنيات'],[['The first name goes to the first curve.','الاسم الأول للمنحنى الأول.']],[['Alphabetically','أبجدياً'],['From the top curve down','من المنحنى الأعلى نزولاً']]),
  Q('Which option names a curve when it is drawn?','أي خيار يسمّي المنحنى عند رسمه؟','$ "DisplayName"',[['Then ``legend show`` collects the names.','ثم تجمع ``legend show`` الأسماء.']],['$ "Label"','$ "Name"','$ "Legend"']),
  Q('Plot the errors of four runs in a loop with a legend entry for each N.','ارسم أخطاء أربعة تشغيلات في حلقة مع مدخل مفتاح لكل N.','$ for N = [4 8 16 32], semilogy(x, e{N}, "DisplayName", "N = " + N); hold on, end; legend show',[['Each curve carries its own name.','كل منحنى يحمل اسمه.']],['$ for N = [4 8 16 32], plot(x, e{N}); end; legend(N)','$ semilogy(x, e); legend("N")','$ for N = [4 8 16 32], semilogy(x, e{N}); end; legend show']),
]);

lesson('506',33,[
  ['Axis labels, titles and fonts accept TeX (the default interpreter) or LaTeX:','تسميات المحاور والعناوين والخطوط تقبل TeX (المفسر الافتراضي) أو LaTeX:'],
  '$ xlabel("t");  ylabel("max error")\ntitle("D^{1/2} y = -y,  \\lambda = 1/2")              % TeX: ^, _, \\lambda\nylabel("$\\|u - u_N\\|_\\infty$", "Interpreter", "latex")\nset(gca, "FontSize", 12)',
  ['With the TeX interpreter ``^{}`` and ``_{}`` make super- and subscripts and Greek letters are written ``\\alpha``; for full formulas use ``"Interpreter", "latex"`` with dollar signs.','مع مفسر TeX تصنع ``^{}`` و ``_{}`` الأسس والأدلة، وتُكتب الحروف اليونانية ``\\alpha``، وللصيغ الكاملة استخدم ``"Interpreter", "latex"`` مع علامات الدولار.'],
],[
  Q('Write the title `μ = 1/2` with the TeX interpreter.','اكتب العنوان `μ = 1/2` بمفسر TeX.','$ title("\\mu = 1/2")',[['Greek letters with a backslash.','الحروف اليونانية بشرطة مائلة.']],['$ title("mu = 1/2")','$ title("$mu$ = 1/2")','$ title(mu = 1/2)']),
  Q('Which option is needed for ``ylabel("$\\frac{1}{2}$")``?','أي خيار نحتاجه لـ ``ylabel("$\\frac{1}{2}$")``؟','$ "Interpreter", "latex"',[['TeX does not know ``\\frac``.','TeX لا يعرف ``\\frac``.']],['$ "Interpreter", "tex"','$ "FontName", "latex"','$ "Math", "on"']),
  Q('Which call sets the font size of the tick labels of the current axes?','أي استدعاء يحدد حجم خط تسميات تدريج المحاور الحالية؟','$ set(gca, "FontSize", 12)',[['``gca`` is the current axes.','``gca`` المحاور الحالية.']],['$ fontsize(12)','$ set(gcf, "Size", 12)','$ xlabel(12)']),
  Q('How is `t_{k}` written with the TeX interpreter?','كيف تُكتب `t_{k}` بمفسر TeX؟','$ "t_{k}"',[['Braces group the subscript.','الأقواس تجمع الدليل.']],['$ "t[k]"','$ "t__k"','$ "t^k"']),
]);

lesson('506',34,[
  ['Errors are plotted on logarithmic axes: ``semilogy`` for spectral convergence (a straight line in N), ``loglog`` for algebraic convergence (a straight line of slope −p):','تُرسم الأخطاء على محاور لوغاريتمية: ``semilogy`` للتقارب الطيفي (خط مستقيم في N) و ``loglog`` للتقارب الجبري (خط مستقيم ميله −p):'],
  '$ N = [4 8 12 16];  e = [1.2e-3 1.1e-6 1.3e-9 1.2e-12];\nsemilogy(N, e, "o-");  grid on\nc = polyfit(N, log10(e), 1);      % slope c(1) ≈ -0.75\nrho = 10^(-c(1))                  % ≈ 5.6',
  ['A least-squares line through the logarithms gives the observed rate; leave out points at the round-off floor near `10^{−15}`.','ومستقيم المربعات الصغرى عبر اللوغاريتمات يعطي المعدل الملاحظ، واستبعد النقاط عند أرضية التقريب قرب `10^{−15}`.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 5.6',[['`ρ = 10^{−slope}` from the fitted line.','`ρ = 10^{−slope}` من الخط الملاءم.']],['$ 0.75','$ 10','$ 1.78'],'N = [4 8 12 16];  e = [1.2e-3 1.1e-6 1.3e-9 1.2e-12];\nc = polyfit(N, log10(e), 1);\nfprintf("%.1f\\n", 10^(-c(1)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -4.00',[['Algebraic rate: the slope on log–log axes.','معدل جبري: الميل على محاور لوغاريتمية مزدوجة.']],['$ 4.00','$ -1.00','$ -16.00'],'N = [8 16 32 64];  e = 3*N.^-4;\nc = polyfit(log10(N), log10(e), 1);\nfprintf("%.2f\\n", c(1))'),
  Q('Which plot shows `e_N = 5N^{−3}` as a straight line?','أي رسم يُظهر `e_N = 5N^{−3}` خطاً مستقيماً؟','$ loglog(N, e)',['log e = log 5 − 3 log N'],['$ semilogy(N, e)','$ plot(N, e)','$ semilogx(N, e)']),
  Q('Why leave out errors near `10^{−15}` from the fit?','لماذا تُستبعد الأخطاء القريبة من `10^{−15}` من الملاءمة؟',['They are round-off, not discretization error, and bend the line','هي خطأ تقريب لا خطأ تقطيع وتحني الخط'],[['The fitted rate must describe the method.','المعدل الملاءم يجب أن يصف الطريقة.']],[['They are negative','سالبة'],['To shorten the table','لتقصير الجدول']]),
]);

lesson('506',35,[
  ['Several panels in one figure: the classic ``subplot(m, n, k)`` or the newer ``tiledlayout`` with ``nexttile``:','عدة لوحات في شكل واحد: ``subplot(m, n, k)`` الكلاسيكية أو ``tiledlayout`` الأحدث مع ``nexttile``:'],
  '$ for n = 0:3\n    subplot(2, 2, n + 1)\n    plot(x, legendreP(n, x)), title("P_" + n)\nend\n% newer, with compact spacing\ntiledlayout(2, 2, "TileSpacing", "compact")\nnexttile, plot(x, y1)\nnexttile, semilogy(N, e)',
  ['In ``subplot(m, n, k)`` the panels are numbered row by row. ``tiledlayout`` (R2019b and later) handles spacing and shared titles better.','وفي ``subplot(m, n, k)`` تُرقّم اللوحات صفاً صفاً. و ``tiledlayout`` (من R2019b) تعالج التباعد والعناوين المشتركة أفضل.'],
],[
  Q('In ``subplot(2, 3, k)``, which k is the first panel of the second row?','في ``subplot(2, 3, k)`` أي k هي أول لوحة في الصف الثاني؟','4',[['Row by row: 1, 2, 3, then 4.','صفاً صفاً: 1 و 2 و 3 ثم 4.']],['2','3','5']),
  Q('How many panels does ``tiledlayout(3, 2)`` provide?','كم لوحة توفر ``tiledlayout(3, 2)``؟','6',['3·2'],['5','3','2']),
  Q('Which call moves to the next panel of a tiled layout?','أي استدعاء ينتقل إلى اللوحة التالية في تخطيط متجانب؟','$ nexttile',[['Each call creates the next axes.','كل استدعاء ينشئ المحاور التالية.']],['$ subplot next','$ hold on','$ figure']),
  Q('Which option reduces the empty space between tiles?','أي خيار يقلل المساحة الفارغة بين اللوحات؟','$ "TileSpacing", "compact"',[['Also ``"Padding", "compact"`` for the outer margin.','وأيضاً ``"Padding", "compact"`` للهامش الخارجي.']],['$ "Gap", 0','$ "Spacing", "none"','$ "Margin", "small"']),
]);

lesson('506',36,[
  ['Surfaces and contours of `u(x, t)` on a grid from ``meshgrid``:','السطوح وخطوط الكنتور لـ `u(x, t)` على شبكة من ``meshgrid``:'],
  '$ [X, T] = meshgrid(linspace(0, 1, 41), linspace(0, 1, 21));\nU = T.^1.5 .* sin(pi*X);\nsurf(X, T, U), shading interp, xlabel("x"), ylabel("t")\ncontourf(X, T, U, 20), colorbar\nmesh(X, T, U)',
  ['``meshgrid(x, t)`` returns arrays of size ``numel(t) × numel(x)``: rows follow t, columns follow x. Surfaces of the error, ``abs(U - Uexact)``, show where an approximation is worst.','و ``meshgrid(x, t)`` تعيد مصفوفات حجمها ``numel(t) × numel(x)``: الصفوف تتبع t والأعمدة تتبع x. وسطوح الخطأ ``abs(U - Uexact)`` تُظهر أين يكون التقريب أسوأ.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [21 41]',[['Rows follow t (21 values), columns follow x (41 values).','الصفوف تتبع t (21 قيمة) والأعمدة تتبع x (41 قيمة).']],['$ [41 21]','$ [41 41]','$ [861 1]'],'[X, T] = meshgrid(linspace(0, 1, 41), linspace(0, 1, 21));\ndisp(mat2str(size(X)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['`u(1/2, 1) = 1·sin(π/2)`.','`u(1/2, 1) = 1·sin(π/2)`.']],['$ 0','$ 0.5','$ 1.5'],'[X, T] = meshgrid(linspace(0, 1, 3), linspace(0, 1, 3));\nU = T.^1.5 .* sin(pi*X);\ndisp(round(U(3, 2)*1e12)/1e12)'),
  Q('Which command draws filled contours with 20 levels?','أي أمر يرسم خطوط كنتور مملوءة بـ 20 مستوى؟','$ contourf(X, T, U, 20)',[['Add ``colorbar`` for the scale.','أضف ``colorbar`` للمقياس.']],['$ contour(X, T, U, "fill", 20)','$ surf(X, T, U, 20)','$ mesh(X, T, 20)']),
  Q('What does ``shading interp`` do on a surf plot?','ماذا تفعل ``shading interp`` في رسم surf؟',['It removes the grid lines and interpolates the colours smoothly','تحذف خطوط الشبكة وتستكمل الألوان بنعومة'],[['A purely visual setting.','إعداد مرئي فقط.']],[['It refines the grid','تنقّح الشبكة'],['It interpolates the data','تستكمل البيانات']]),
]);

lesson('506',37,[
  ['Look at a matrix before solving with it: ``spy`` shows the nonzero pattern, ``imagesc`` the magnitudes as colours:','انظر إلى المصفوفة قبل الحل بها: ``spy`` تُظهر نمط العناصر غير الصفرية و ``imagesc`` المقادير ألواناً:'],
  '$ spy(D2)        % Theorem 3.1: strictly lower, checkerboard\nimagesc(log10(abs(A) + eps)), colorbar      % orders of magnitude\nspy(kron(eye(4), T))                        % block structure',
  ['Adding ``eps`` avoids `log 0`. Structure seen in ``spy`` suggests the solver: banded, block diagonal or Kronecker structure can be exploited.','وإضافة ``eps`` تتجنب `log 0`. والبنية الظاهرة في ``spy`` تقترح الحلّال: البنية الشريطية أو القطرية الكتلية أو بنية كرونيكر يمكن استغلالها.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 6',[['Pairs (r, j) with r − j even and positive for N = 5 (indices from 0).','الأزواج (r, j) التي فيها r − j زوجي موجب عند N = 5 (الأدلة من 0).']],['$ 9','$ 15','$ 4'],'N = 5;  D = zeros(N + 1);\nfor r = 0:N\n    for j = 0:r-1\n        if mod(r - j, 2) == 0\n            D(r+1, j+1) = 4*(r - j)/2*(2*j + 1)*(r + j + 1);\n        end\n    end\nend\ndisp(nnz(D))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 10',[['A 4 × 4 tridiagonal matrix: 4 + 3 + 3 nonzeros.','مصفوفة 4 × 4 ثلاثية القطر: 4 + 3 + 3.']],['$ 16','$ 4','$ 12'],'T = diag(2*ones(4, 1)) + diag(-ones(3, 1), 1) + diag(-ones(3, 1), -1);\ndisp(nnz(T))'),
  Q('Why add ``eps`` in ``log10(abs(A) + eps)``?','لماذا تُضاف ``eps`` في ``log10(abs(A) + eps)``؟',['To avoid `log 0 = −∞` for zero entries','لتجنب `log 0 = −∞` للعناصر الصفرية'],[['Zeros then show as about −16.','فتظهر الأصفار نحو −16.']],[['To make A invertible','لجعل A قابلة للعكس'],['To scale the colours','لتحجيم الألوان']]),
  Q('What pattern does ``spy(kron(eye(4), T))`` show for tridiagonal T?','أي نمط تُظهره ``spy(kron(eye(4), T))`` لـ T ثلاثية القطر؟',['Four tridiagonal blocks along the diagonal','أربع كتل ثلاثية القطر على القطر'],[['One copy of T per block.','نسخة من T لكل كتلة.']],[['A full matrix','مصفوفة كاملة'],['A single band of width 4','شريط واحد عرضه 4']]),
]);

lesson('506',38,[
  ['Tables of results: ``fprintf`` for text output, ``table`` for a data table that can be sorted and exported:','جداول النتائج: ``fprintf`` لمخرج نصي و ``table`` لجدول بيانات يمكن ترتيبه وتصديره:'],
  '$ Ns = [4 8 12];  e = [1.2e-3 1.1e-6 1.3e-9];\nfprintf("%4s %12s\\n", "N", "error");\nfprintf("%4d %12.3e\\n", [Ns; e]);\nT = table(Ns\', e\', \'VariableNames\', {\'N\', \'error\'});\nwritetable(T, "errors.csv")',
  ['Stacking ``[Ns; e]`` makes each column one row of the table, because ``fprintf`` reads column by column.','ورص ``[Ns; e]`` يجعل كل عمود صفاً في الجدول لأن ``fprintf`` تقرأ عموداً عموداً.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 4 1.200e-03\n8 1.100e-06',[['Each column of ``[Ns; e]`` fills one line.','كل عمود في ``[Ns; e]`` يملأ سطراً.']],['$ 4 8\n1.200e-03 1.100e-06','$ 4 1.2e-03 8 1.1e-06','$ 4 8 1.200e-03 1.100e-06'],'Ns = [4 8];  e = [1.2e-3 1.1e-6];\nfprintf("%d %.3e\\n", [Ns; e]);'),
  Q('Why is ``[Ns; e]`` used instead of ``[Ns e]``?','لماذا يُستخدم ``[Ns; e]`` بدل ``[Ns e]``؟',['fprintf reads column by column, so each column must be one row of the table','fprintf تقرأ عموداً عموداً فيجب أن يكون كل عمود صفاً في الجدول'],[['``[Ns e]`` would print all N first, then all errors.','``[Ns e]`` تطبع كل N أولاً ثم كل الأخطاء.']],[['Both are the same','الاثنان متطابقان'],['To make it faster','لتسريعه']]),
  Q('Which function writes a table to a CSV file?','أي دالة تكتب جدولاً في ملف CSV؟','$ writetable',[['``readtable`` reads it back.','``readtable`` تقرؤه.']],['$ fprintf','$ save','$ csvsave']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 4.0',[['The order between two rows of a table: `log(e_1/e_2)/log 2`.','الرتبة بين صفين في جدول: `log(e_1/e_2)/log 2`.']],['$ 16.0','$ 2.0','$ -4.0'],'e = [1e-3 6.25e-5];\nfprintf("%.1f\\n", log(e(1)/e(2))/log(2))'),
]);

lesson('506',39,[
  ['Figures for a paper are exported in a vector format at their final size:','أشكال البحث تُصدَّر بصيغة متجهية بحجمها النهائي:'],
  '$ f = figure("Units", "centimeters", "Position", [2 2 9 6.5]);   % one column\n...\nexportgraphics(f, "convergence.pdf", "ContentType", "vector")\nexportgraphics(f, "convergence.png", "Resolution", 300)\n% older releases: print(f, "-dpdf", "convergence.pdf")',
  ['``exportgraphics`` (R2020a and later) trims the margins automatically. Set the size before plotting so that fonts keep their size in the paper.','و ``exportgraphics`` (من R2020a) تقص الهوامش تلقائياً. وحدد الحجم قبل الرسم حتى تحافظ الخطوط على حجمها في البحث.'],
],[
  Q('Which format keeps a figure sharp at any zoom in a LaTeX paper?','أي صيغة تبقي الشكل حاداً بأي تكبير في بحث LaTeX؟','$ PDF',[['A vector format.','صيغة متجهية.']],['$ JPG','$ PNG at 72 dpi','$ BMP']),
  Q('Which call exports a figure as a 300 dpi PNG?','أي استدعاء يصدّر شكلاً PNG بدقة 300 نقطة؟','$ exportgraphics(f, "fig.png", "Resolution", 300)',[['Resolution in dots per inch.','الدقة بالنقاط لكل بوصة.']],['$ saveas(f, 300, "fig.png")','$ print("fig.png", 300)','$ exportgraphics(f, "fig.png", "dpi")']),
  Q('Why create the figure at its final size?','لماذا يُنشأ الشكل بحجمه النهائي؟',['Scaling later changes the font size relative to the paper','التحجيم لاحقاً يغيّر حجم الخط نسبة إلى البحث'],[['About 9 cm wide for one column.','نحو 9 سم عرضاً لعمود واحد.']],[['To make the file smaller','لتصغير الملف'],['It does not matter','لا يهم']]),
  Q('Which command exports a PDF in releases without exportgraphics?','أي أمر يصدّر PDF في الإصدارات التي لا فيها exportgraphics؟','$ print(f, "-dpdf", "fig.pdf")',[['The ``-d`` option names the device.','الخيار ``-d`` يسمي الجهاز.']],['$ save(f, "fig.pdf")','$ export(f, "pdf")','$ writepdf(f)']),
]);

lesson('506',40,[
  ['The standard convergence figure: errors on ``semilogy`` with markers, a reference line for the predicted rate, labels, a grid and a legend:','شكل التقارب القياسي: الأخطاء على ``semilogy`` بعلامات، وخط مرجعي للمعدل المتوقع، وتسميات وشبكة ومفتاح:'],
  '$ semilogy(N, e, "o-", "DisplayName", "mapped Legendre"); hold on\nsemilogy(N, 10.^(-0.75*N), "k--", ...\n         "DisplayName", "\\rho^{-N}, \\rho = 10^{0.75}")\nxlabel("N"); ylabel("max error"); grid on; legend show\nexportgraphics(gcf, "conv.pdf", "ContentType", "vector")',
  ['The figure should let a reader see the rate and where it stops; state in the caption how the error was measured (grid, norm, time t).','ويجب أن يسمح الشكل للقارئ برؤية المعدل وأين يتوقف، واذكر في التعليق كيف قيس الخطأ (الشبكة والمعيار والزمن t).'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1e-06',['10^{−0.75·8}'],['$ 1e-08','$ 0.001','$ 6e-01'],'N = 8;\nfprintf("%g\\n", 10.^(-0.75*N))'),
  Q('What should the caption say about the error?','ماذا يجب أن يقول التعليق عن الخطأ؟',['How it was measured: the norm, the grid and the time','كيف قيس: المعيار والشبكة والزمن'],[['For example `L∞` on 101 points at t = 1.','مثلاً `L∞` على 101 نقطة عند t = 1.']],[['Nothing','لا شيء'],['The colour of the curve','لون المنحنى']]),
  Q('Two curves on semilogy are parallel. What does it mean?','منحنيان متوازيان على semilogy. ماذا يعني ذلك؟',['The same exponential rate, differing by a constant factor','المعدل الأسي نفسه مع اختلاف بعامل ثابت'],[['Only the starting error differs.','الخطأ الابتدائي وحده يختلف.']],[['The same errors','الأخطاء نفسها'],['Different rates','معدلات مختلفة']]),
  Q('Which line style draws the black dashed reference line?','أي نمط خط يرسم الخط المرجعي الأسود المتقطع؟','$ "k--"',[['k is black.','k هو الأسود.']],['$ "b--"','$ "k-"','$ "black:"']),
]);

export const MS506 = true;
