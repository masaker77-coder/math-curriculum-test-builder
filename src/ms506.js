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

export const MS506 = true;
