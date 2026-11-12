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

export const MS506 = true;
