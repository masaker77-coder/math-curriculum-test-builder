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

/* ---- 506 · Unit 5 (lessons 41–50): linear algebra;  Unit 6 (lessons 51–60): calculus and special functions ---- */
lesson('506',41,[
  ['``x = A\\b`` solves `Ax = b`. MATLAB chooses the method from the matrix: triangular substitution, Cholesky, LU with pivoting, or least squares for a rectangular A:','``x = A\\b`` تحل `Ax = b`، ويختار MATLAB الطريقة حسب المصفوفة: التعويض المثلثي أو Cholesky أو LU مع المحورة أو المربعات الصغرى لمصفوفة مستطيلة:'],
  '$ A = [2 1; 1 3];  b = [3; 5];\nx = A\\b              % [0.8; 1.4]\nnorm(A*x - b)        % about 1e-16\nX = A\\[b, 2*b]       % several right-hand sides at once',
  ['``b`` must be a column with as many rows as A. Always check the residual, and look at ``cond(A)`` when it is not small.','ويجب أن تكون ``b`` عموداً بعدد صفوف A. وافحص الباقي دائماً، وانظر إلى ``cond(A)`` حين لا يكون صغيراً.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.8 1.4',['2x + y = 3,   x + 3y = 5'],['$ 1.4 0.8','$ 1 1','$ 3 5'],'A = [2 1; 1 3];  b = [3; 5];\nx = A\\b;\nfprintf("%g %g\\n", x)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['The residual is at the level of rounding error.','الباقي في مستوى خطأ التقريب.']],['$ 0','$ 1e-16','$ Error'],'A = magic(4) + eye(4);  b = (1:4)\';\nx = A\\b;\ndisp(norm(A*x - b) < 1e-10)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [2 2]',[['Two right-hand sides give a 2 × 2 solution.','طرفان أيمنان يعطيان حلاً 2 × 2.']],['$ [2 1]','$ [1 2]','$ [4 1]'],'A = [2 1; 1 3];  b = [3; 5];\ndisp(mat2str(size(A\\[b, 2*b])))'),
  Q('Why is ``A\\b`` written and not ``b/A``?','لماذا تُكتب ``A\\b`` لا ``b/A``؟',['``A\\b`` solves `Ax = b`; ``b/A`` solves `xA = b` for a row x','``A\\b`` تحل `Ax = b` و ``b/A`` تحل `xA = b` لصف x'],[['The slash puts the matrix on the side it multiplies.','الشرطة تضع المصفوفة في الجهة التي تضرب منها.']],[['They are the same','متطابقتان'],['``b/A`` is faster','``b/A`` أسرع']]),
]);

lesson('506',42,[
  ['``inv(A)`` and ``det(A)`` exist, but numerical work rarely needs them:','``inv(A)`` و ``det(A)`` موجودتان لكن العمل العددي نادراً ما يحتاجهما:'],
  '$ det([1 2; 3 4])        % -2.0000\ninv([1 2; 3 4])        % [-2 1; 1.5 -0.5]\ndet(0.1*eye(50))       % 1.0000e-50, although cond = 1',
  ['``A\\b`` is cheaper and more accurate than ``inv(A)*b``; the Editor even warns about ``inv``. The determinant does not measure near-singularity: use ``cond`` or ``rcond``.','و ``A\\b`` أرخص وأدق من ``inv(A)*b``، والمحرر يحذّر من ``inv``. والمحدد لا يقيس قرب الشذوذ، فاستخدم ``cond`` أو ``rcond``.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [-2 1;1.5 -0.5]',['#f{1}{−2}#m{4, −2 ;; −3, 1}'],['$ [4 -2;-3 1]','$ [1 0.5;0.3333 0.25]','$ [-2 1.5;1 -0.5]'],'disp(mat2str(round(inv([1 2; 3 4])*1e10)/1e10))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1e-50 1',[['A tiny determinant and a perfect condition number.','محدد صغير جداً وعدد شرط مثالي.']],['$ 0 Inf','$ 1e-50 1e+50','$ 0.1 1'],'A = 0.1*eye(50);\nfprintf("%g %g\\n", det(A), cond(A))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -2',[['Rounded, since the computed value has a rounding error.','بعد التقريب لأن القيمة المحسوبة فيها خطأ تقريب.']],['$ 2','$ 10','$ -2.5'],'disp(round(det([1 2; 3 4])))'),
  Q('Why does the Editor warn about ``x = inv(A)*b``?','لماذا يحذّر المحرر من ``x = inv(A)*b``؟',['``A\\b`` is faster and more accurate','``A\\b`` أسرع وأدق'],[['Forming the inverse costs about three times more.','تكوين المعكوس يكلف نحو ثلاثة أضعاف.']],[['inv is deprecated','inv ملغاة'],['inv only works for 2 × 2 matrices','inv تعمل فقط لمصفوفات 2 × 2']]),
]);

lesson('506',43,[
  ['The factorizations behind the backslash, useful when one matrix is used many times:','التحليلات وراء الشرطة العكسية، المفيدة حين تُستخدم مصفوفة واحدة مرات كثيرة:'],
  '$ [L, U, P] = lu(A);        % P*A = L*U\nx = U\\(L\\(P*b));\nR = chol(S);               % S = R\'*R for symmetric positive definite S\n[Q, R] = qr(A);            % A = Q*R, Q orthogonal',
  ['Factor once outside a time loop and reuse ``L``, ``U``, ``P`` inside it. ``decomposition(A)`` (R2017b and later) stores the factorization and is used with ``\\`` like a matrix.','حلّل مرة خارج حلقة الزمن وأعد استخدام ``L`` و ``U`` و ``P`` داخلها. و ``decomposition(A)`` (من R2017b) تخزن التحليل وتُستخدم مع ``\\`` كمصفوفة.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [2 1;0 1.4142]',[['MATLAB’s chol returns the upper factor R with `S = R^TR`.','chol في MATLAB تعيد العامل العلوي R مع `S = R^TR`.']],['$ [2 0;1 1.4142]','$ [4 2;2 3]','$ [1 0.5;0 1]'],'S = [4 2; 2 3];\ndisp(mat2str(round(chol(S)*1e4)/1e4))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1 1',[['Q is orthogonal and QR reproduces A.','Q متعامدة و QR تعيد A.']],['$ 1 0','$ 0 1','$ 0 0'],'A = [1 2; 3 4];\n[Q, R] = qr(A);\nfprintf("%d %d\\n", norm(Q\'*Q - eye(2)) < 1e-12, norm(Q*R - A) < 1e-12)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.8 1.4',[['Solving with the stored LU factors.','الحل بعوامل LU المخزنة.']],['$ 1.4 0.8','$ 3 5','$ 1 1'],'A = [2 1; 1 3];  b = [3; 5];\n[L, U, P] = lu(A);\nx = U\\(L\\(P*b));\nfprintf("%g %g\\n", round(x*1e12)/1e12)'),
  Q('What happens with ``chol([1 2; 2 1])``?','ماذا يحدث مع ``chol([1 2; 2 1])``؟',['An error: the matrix is not positive definite','خطأ: المصفوفة ليست موجبة التعريف'],[['Its eigenvalues are 3 and −1.','قيمها الذاتية 3 و −1.']],[['It returns a complex factor','تعيد عاملاً مركباً'],['It returns the identity','تعيد المحايدة']]),
]);

lesson('506',44,[
  ['``eig(A)`` returns the eigenvalues; ``[V, D] = eig(A)`` also the eigenvectors, with ``A*V = V*D``:','``eig(A)`` تعيد القيم الذاتية، و ``[V, D] = eig(A)`` تعيد المتجهات الذاتية أيضاً مع ``A*V = V*D``:'],
  '$ eig([2 1; 1 2])          % [1; 3]\n[V, D] = eig([2 1; 1 2]);\ndiag(D)                   % the eigenvalues\neig([0 -1; 1 0])          % [0 + 1i; 0 - 1i]',
  ['For symmetric matrices the eigenvalues are real, sorted in increasing order, and V is orthogonal. Golub–Welsch (Lesson 81) uses exactly this on the Jacobi matrix.','وللمصفوفات المتماثلة تكون القيم الذاتية حقيقية مرتبة تصاعدياً و V متعامدة. وطريقة Golub–Welsch (الدرس 81) تستخدم هذا بالضبط على مصفوفة جاكوبي.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1;3]',[['Increasing order for a symmetric matrix.','ترتيب تصاعدي لمصفوفة متماثلة.']],['$ [3;1]','$ [2;2]','$ [1 3]'],'disp(mat2str(eig([2 1; 1 2])))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['`AV = VD` holds.','`AV = VD` صحيحة.']],['$ 0','$ 3','$ Error'],'A = [2 1; 1 2];\n[V, D] = eig(A);\ndisp(norm(A*V - V*D) < 1e-12)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -0.57735 0.57735',['λ^2 = #f{1}{3}',['The 2-point Gauss–Legendre nodes.','عقد جاوس–ليجندر ذات النقطتين.']],['$ -0.5 0.5','$ 0 0.57735','$ -1 1'],'b = 1/sqrt(3);\nfprintf("%.5f %.5f\\n", eig([0 b; b 0]))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0 1',[['A rotation by 90°: eigenvalues ±i; the first has imaginary part ±1.','دوران بزاوية 90°: القيم الذاتية ±i، والأولى جزؤها التخيلي ±1.']],['$ 1 0','$ 0 0','$ 1 1'],'e = eig([0 -1; 1 0]);\nfprintf("%g %g\\n", abs(real(e(1))), abs(imag(e(1))))'),
]);

lesson('506',45,[
  ['Norms and condition numbers:','المعايير وأعداد الشرط:'],
  '$ v = [1 -2 2];\nnorm(v), norm(v, Inf), norm(v, 1)    % 3, 2, 5\nnorm(A)          % largest singular value\ncond(hilb(8))    % about 1.5e10\nrcond(A)         % cheap estimate of 1/cond in the 1-norm',
  ['A solve loses about ``log10(cond(A))`` digits. MATLAB warns «Matrix is close to singular or badly scaled» when ``rcond`` is below about ``eps``.','والحل يفقد نحو ``log10(cond(A))`` رقماً. ويحذّر MATLAB بالرسالة «Matrix is close to singular or badly scaled» حين تكون ``rcond`` أقل من نحو ``eps``.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3 2 5',['#r{1 + 4 + 4},   max |v_i|,   Σ |v_i|'],['$ 5 2 3','$ 3 5 2','$ 9 2 5'],'v = [1 -2 2];\nfprintf("%g %g %g\\n", norm(v), norm(v, Inf), norm(v, 1))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 10',[['The exponent of `κ(H_8) ≈ 1.5 × 10^{10}`.','أس `κ(H_8) ≈ 1.5 × 10^{10}`.']],['$ 8','$ 16','$ 4'],'disp(floor(log10(cond(hilb(8)))))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1000000',['#f{1}{10^{−6}}'],['$ 1e-06','$ 1','$ 1000'],'disp(round(cond(diag([1 1e-6]))))'),
  Q('With `κ ≈ 10^{12}`, about how many correct digits does a double-precision solve keep?','مع `κ ≈ 10^{12}` كم رقماً صحيحاً تقريباً يبقى في حل بدقة مزدوجة؟','≈ 4',['16 − 12'],['≈ 16','≈ 12','≈ 0']),
]);

lesson('506',46,[
  ['For an overdetermined system the backslash returns the least-squares solution; ``polyfit`` fits polynomials:','للنظام فوق المحدد تعيد الشرطة العكسية حل المربعات الصغرى، و ``polyfit`` تلائم كثيرات الحدود:'],
  '$ t = (0:3)\';  y = [1.0; 2.9; 5.1; 7.0];\nc = [ones(4, 1), t] \\ y        % [0.97; 2.02]  intercept, slope\np = polyfit(t, y, 1)            % [2.02 0.97]   highest power first\npolyval(p, 1.5)',
  ['Note the order: the backslash returns the coefficients in the order of the columns, ``polyfit`` highest power first. Fitting ``log10`` of errors gives convergence rates.','وانتبه للترتيب: الشرطة العكسية تعيد المعاملات بترتيب الأعمدة، و ``polyfit`` أعلى قوة أولاً. وملاءمة ``log10`` للأخطاء تعطي معدلات التقارب.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2.02 0.97',['m = #f{10.1}{5},   c = 4 − 2.02·1.5'],['$ 0.97 2.02','$ 2 1','$ 1.99 0.96'],'t = (0:3)\';  y = [1.0; 2.9; 5.1; 7.0];\np = polyfit(t, y, 1);\nfprintf("%.2f %.2f\\n", p)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.97 2.02',[['Column order: ones first, then t.','ترتيب الأعمدة: الآحاد أولاً ثم t.']],['$ 2.02 0.97','$ 1 2','$ 4 1.5'],'t = (0:3)\';  y = [1.0; 2.9; 5.1; 7.0];\nc = [ones(4, 1), t] \\ y;\nfprintf("%.2f %.2f\\n", c)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 4',[['The fitted line at t = 1.5 passes through the mean of the data.','الخط الملاءم عند t = 1.5 يمر بمتوسط البيانات.']],['$ 3.5','$ 4.5','$ 2.02'],'t = (0:3)\';  y = [1.0; 2.9; 5.1; 7.0];\np = polyfit(t, y, 1);\ndisp(round(polyval(p, 1.5)*1e10)/1e10)'),
  Q('What does the backslash minimize for a tall matrix A?','ماذا تصغّر الشرطة العكسية لمصفوفة طويلة A؟','‖Ax − b‖_2',[['The least-squares residual.','باقي المربعات الصغرى.']],['‖x‖_2','‖Ax − b‖_∞','‖A‖']),
]);

lesson('506',47,[
  ['Sparse matrices store only the nonzero entries. Build them with ``sparse``, ``spdiags`` or ``speye``; the backslash then uses sparse solvers:','المصفوفات المتفرقة تخزن العناصر غير الصفرية فقط. ابنها بـ ``sparse`` أو ``spdiags`` أو ``speye``، وعندها تستخدم الشرطة العكسية حلّالات متفرقة:'],
  '$ n = 1000;  e = ones(n, 1);\nT = spdiags([-e 2*e -e], -1:1, n, n);\nnnz(T)                      % 2998\nu = T\\ones(n, 1);            % fast: tridiagonal solve\nfull(T(1:3, 1:3))           % [2 -1 0; -1 2 -1; 0 -1 2]',
  ['``whos`` shows the memory: a full 1000 × 1000 double needs 8 MB, the sparse tridiagonal about 50 KB. ``kron`` of sparse matrices stays sparse.','و ``whos`` تُظهر الذاكرة: المصفوفة الكاملة 1000 × 1000 تحتاج 8 ميغابايت، وثلاثية القطر المتفرقة نحو 50 كيلوبايت. و ``kron`` لمصفوفات متفرقة تبقى متفرقة.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2998',['1000 + 999 + 999'],['$ 3000','$ 1000000','$ 1000'],'n = 1000;  e = ones(n, 1);\nT = spdiags([-e 2*e -e], -1:1, n, n);\ndisp(nnz(T))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [2 -1 0;-1 2 -1;0 -1 2]',[['``full`` converts to an ordinary matrix.','``full`` تحوّل إلى مصفوفة عادية.']],['$ [2 1 0;1 2 1;0 1 2]','$ [-1 2 -1]','$ [2 0 0;0 2 0;0 0 2]'],'e = ones(5, 1);\nT = spdiags([-e 2*e -e], -1:1, 5, 5);\ndisp(mat2str(full(T(1:3, 1:3))))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.1250',[['`−u″ = 1` with `u(0) = u(1) = 0` gives `u(1/2) = 1/8`, reproduced exactly by finite differences; disp shows 4 decimals.','`−u″ = 1` مع `u(0) = u(1) = 0` تعطي `u(1/2) = 1/8` وتعيدها الفروق المحدودة بالضبط، و disp تعرض 4 أرقام عشرية.']],['$ 0.2500','$ 0.5000','$ 0.0625'],'n = 999;  h = 1/(n + 1);  e = ones(n, 1);\nT = spdiags([-e 2*e -e], -1:1, n, n)/h^2;\nu = T\\ones(n, 1);\ndisp(round(u(500)*1e10)/1e10)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['kron of sparse matrices is sparse.','kron لمصفوفات متفرقة متفرقة.']],['$ 0','$ 9','$ Error'],'T = speye(3);\ndisp(issparse(kron(speye(3), T)))'),
]);

lesson('506',48,[
  ['A matrix equation `AX + XB = C` is a Sylvester equation; ``sylvester(A, B, C)`` solves it in `O(n^3)`. The same equation in Kronecker form has `n^2` unknowns:','المعادلة المصفوفية `AX + XB = C` معادلة سيلفستر، و ``sylvester(A, B, C)`` تحلها بتكلفة `O(n^3)`. والمعادلة نفسها بصيغة كرونيكر فيها `n^2` مجهولاً:'],
  '$ X = sylvester(A, B, C);\n% Kronecker form:  (I ⊗ A + B.\' ⊗ I) vec(X) = vec(C)\nK = kron(eye(n), A) + kron(B.\', eye(n));\nx = K \\ C(:);   X2 = reshape(x, n, n);',
  ['The mapped Legendre system `𝒴 − χ^T𝒴D^{(2)} = ℋ` is of the generalized form `A𝒴 + B𝒴C = ℋ`, so it is solved with the Kronecker form, or by diagonalizing one factor.','ونظام ليجندر المحوّل `𝒴 − χ^T𝒴D^{(2)} = ℋ` من الصورة المعممة `A𝒴 + B𝒴C = ℋ`، فيُحل بصيغة كرونيكر أو بتقطير أحد العاملين.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['sylvester agrees with the Kronecker solve.','sylvester تتفق مع حل كرونيكر.']],['$ 0','$ 9','$ Error'],'A = [4 1 0; 1 4 1; 0 1 4];  B = [3 1 0; 0 3 1; 1 0 3];  C = magic(3);\nX = sylvester(A, B, C);\nK = kron(eye(3), A) + kron(B.\', eye(3));\nX2 = reshape(K \\ C(:), 3, 3);\ndisp(norm(X - X2) < 1e-10)'),
  Q('How many unknowns does the Kronecker form have for n = 30?','كم مجهولاً في صيغة كرونيكر عند n = 30؟','900',['n^2'],['60','30','27 000']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['The residual of the Sylvester equation is tiny.','باقي معادلة سيلفستر صغير جداً.']],['$ 0','$ 3','$ Error'],'A = [4 1; 1 4];  B = [3 0; 1 3];  C = [1 2; 3 4];\nX = sylvester(A, B, C);\ndisp(norm(A*X + X*B - C) < 1e-12)'),
  Q('Why is ``B.\'`` used in the Kronecker form?','لماذا تُستخدم ``B.\'`` في صيغة كرونيكر؟',['`vec(XB) = (B^T ⊗ I)vec(X)`, with a plain transpose','`vec(XB) = (B^T ⊗ I)vec(X)` مع نقل عادي'],[['``.\'`` avoids conjugation for complex B.','``.\'`` تتجنب الترافق لـ B المركبة.']],[['By convention','اصطلاحاً'],['It is a typo','خطأ مطبعي']]),
]);

lesson('506',49,[
  ['Doubles have 53 binary digits. ``eps`` is the spacing of numbers near 1; ``eps(x)`` near x:','الأعداد المزدوجة فيها 53 رقماً ثنائياً. و ``eps`` المسافة بين الأعداد قرب 1، و ``eps(x)`` قرب x:'],
  '$ eps                 % 2.2204e-16\neps(1000)           % 1.1369e-13\n0.1 + 0.2 == 0.3     % false\nabs(0.1 + 0.2 - 0.3) < 10*eps   % true\nrealmax, realmin',
  ['Compare floats with a tolerance relative to their size. Cancellation in differences of nearly equal numbers loses digits, so rewrite formulas such as `1 − cos x` as `2 sin^2(x/2)`.','قارن الأعداد العشرية بسماحية نسبية لحجمها. والإلغاء في فروق الأعداد المتقاربة يفقد الأرقام، فأعد كتابة صيغ مثل `1 − cos x` بالصورة `2 sin^2(x/2)`.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0 1',[['Exact equality fails; a tolerance works.','المساواة الدقيقة تفشل والسماحية تنجح.']],['$ 1 1','$ 0 0','$ 1 0'],'fprintf("%d %d\\n", 0.1 + 0.2 == 0.3, abs(0.1 + 0.2 - 0.3) < 10*eps)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2.2204e-16',[['`2^{−52}`.','`2^{−52}`.']],['$ 1e-16','$ 1.1102e-16','$ 2.2204e-15'],'fprintf("%.4e\\n", eps)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0 0.5',[['Cancellation destroys the direct formula; the rewritten one is accurate.','الإلغاء يدمر الصيغة المباشرة، والمعاد كتابتها دقيقة.']],['$ 0.5 0.5','$ 0 0','$ 1 0.5'],'x = 1e-8;\na = (1 - cos(x))/x^2;\nb = 2*sin(x/2)^2/x^2;\nfprintf("%g %g\\n", a, round(b*1e10)/1e10)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['eps grows with the size of the number.','eps تكبر مع حجم العدد.']],['$ 0','$ 1000','$ eps'],'disp(eps(1000) > eps)'),
]);

lesson('506',50,[
  ['Matrices defined by formulas are built without loops from index grids:','المصفوفات المعرّفة بقوانين تُبنى دون حلقات من شبكات الأدلة:'],
  '$ [r, j] = ndgrid(0:N, 0:N);            % r varies down the rows\nmask = r > j & mod(r - j, 2) == 0;\nD2 = mask .* (4/gam^2*(r - j)/2.*(2*j + 1).*(r + j + 1));\nH = 1./(r + j + 1);                      % = hilb(N + 1)',
  ['``ndgrid`` gives matrix-style indices (first argument down the rows); ``meshgrid`` gives plotting-style grids (first argument along the columns). Adding 1 to the zero-based r and j is not needed: the formula uses them as numbers.','و ``ndgrid`` تعطي أدلة بأسلوب المصفوفات (المتغير الأول على الصفوف)، و ``meshgrid`` تعطي شبكات بأسلوب الرسم (المتغير الأول على الأعمدة). ولا حاجة لإضافة 1 إلى r و j المبدوءين من الصفر لأن الصيغة تستخدمهما أعداداً.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 12 60 40',[['`d_{2,0}`, `d_{3,1}`, `d_{4,0}` for γ = 1; MATLAB entry (r + 1, j + 1).','`d_{2,0}` و `d_{3,1}` و `d_{4,0}` عند γ = 1، والعنصر في MATLAB هو (r + 1, j + 1).']],['$ 6 30 20','$ 12 0 40','$ 3 15 10'],'N = 4;  gam = 1;\n[r, j] = ndgrid(0:N, 0:N);\nmask = r > j & mod(r - j, 2) == 0;\nD2 = mask .* (4/gam^2*(r - j)/2.*(2*j + 1).*(r + j + 1));\nfprintf("%g %g %g\\n", D2(3, 1), D2(4, 2), D2(5, 1))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['The formula reproduces hilb.','الصيغة تعيد hilb.']],['$ 0','$ 4','$ Error'],'N = 3;\n[r, j] = ndgrid(0:N, 0:N);\ndisp(isequal(1./(r + j + 1), hilb(N + 1)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [0 0;1 1] [0 1;0 1]',[['With ndgrid the first output varies down the rows.','مع ndgrid يتغير المخرج الأول على الصفوف.']],['$ [0 1;0 1] [0 0;1 1]','$ [0 0;0 0] [1 1;1 1]','$ [0 1] [0 1]'],'[r, j] = ndgrid(0:1, 0:1);\nfprintf("%s %s\\n", mat2str(r), mat2str(j))'),
  Q('Why is D2 entry `d_{r,j}` stored at ``D2(r + 1, j + 1)``?','لماذا يُخزن العنصر `d_{r,j}` في ``D2(r + 1, j + 1)``؟',['MATLAB indices start at 1 while the degrees start at 0','فهارس MATLAB تبدأ من 1 بينما الدرجات تبدأ من 0'],[['A constant source of off-by-one errors.','مصدر دائم لأخطاء الإزاحة بواحد.']],[['By convention of the paper','باصطلاح البحث'],['It is not','ليس كذلك']]),
]);

lesson('506',51,[
  ['``integral(f, a, b)`` integrates adaptively; f must accept vectors. Infinite limits and integrable end singularities are allowed:','``integral(f, a, b)`` تكامل تكيفياً، ويجب أن تقبل f المتجهات. والحدود اللانهائية والانفرادات الطرفية القابلة للتكامل مسموحة:'],
  '$ integral(@(x) exp(-x.^2), 0, 1)           % 0.7468\nintegral(@(x) 1./sqrt(x), 0, 1)            % 2\nintegral(@(x) exp(-x), 0, Inf)             % 1\nintegral(f, a, b, "AbsTol", 1e-14, "RelTol", 1e-12)',
  ['The default tolerances are about `10^{−10}` absolute and `10^{−6}` relative; tighten them for reference values. ``integral2`` and ``integral3`` handle double and triple integrals.','والسماحيات الافتراضية نحو `10^{−10}` مطلقة و `10^{−6}` نسبية، فشددها للقيم المرجعية. و ``integral2`` و ``integral3`` تعالجان التكاملات الثنائية والثلاثية.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.746824',['∫_0^1 e^{−x^2} dx'],['$ 0.886227','$ 1.000000','$ 0.500000'],'fprintf("%.6f\\n", integral(@(x) exp(-x.^2), 0, 1))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2.000000',['∫_0^1 x^{−1/2} dx = 2'],['$ Inf','$ 1.000000','$ 0.500000'],'fprintf("%.6f\\n", integral(@(x) 1./sqrt(x), 0, 1))'),
  Q('Compute `D^{−1/2}1` at t = 1 as `(1/Γ(1/2))∫_0^1 (1 − s)^{−1/2} ds`.','احسب `D^{−1/2}1` عند t = 1 بالصورة `(1/Γ(1/2))∫_0^1 (1 − s)^{−1/2} ds`.','$ 1.128379',['#f{2}{#r{π}}'],['$ 2.000000','$ 0.564190','$ 1.772454'],'fprintf("%.6f\\n", integral(@(s) (1 - s).^(-0.5), 0, 1)/gamma(0.5))'),
  Q('Why does ``integral(@(x) x^2, 0, 1)`` fail?','لماذا تفشل ``integral(@(x) x^2, 0, 1)``؟',['integral passes a vector of points, and ``x^2`` is a matrix power','integral تمرر متجهاً من النقاط و ``x^2`` أس مصفوفي'],[['Write ``x.^2``.','اكتب ``x.^2``.']],[['The interval is too small','المجال صغير جداً'],['It does not fail','لا تفشل']]),
]);

lesson('506',52,[
  ['``trapz(x, y)`` integrates sampled data by the trapezoidal rule; ``cumtrapz`` gives the running integral:','``trapz(x, y)`` تكامل البيانات المأخوذة بقاعدة شبه المنحرف، و ``cumtrapz`` تعطي التكامل التراكمي:'],
  '$ x = linspace(0, 1, 101);  y = x.^2;\ntrapz(x, y)              % 0.33335   (error h^2/6)\nY = cumtrapz(x, y);       % Y(end) = trapz(x, y)',
  ['The error is `O(h^2)` for smooth data; for periodic functions over a full period it is spectrally accurate. For tabulated data at Gauss points use the Gauss weights instead.','والخطأ `O(h^2)` للبيانات الملساء، وللدوال الدورية على دورة كاملة يكون دقيقاً طيفياً. وللبيانات المجدولة عند نقاط جاوس استخدم أوزان جاوس بدلاً منه.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.333350',[['Error `h^2/6` with h = 0.01.','الخطأ `h^2/6` مع h = 0.01.']],['$ 0.333333','$ 0.333000','$ 0.340000'],'x = linspace(0, 1, 101);\nfprintf("%.6f\\n", trapz(x, x.^2))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 4.0',[['Halving h divides the error by 4.','تنصيف h يقسم الخطأ على 4.']],['$ 2.0','$ 8.0','$ 16.0'],'f = @(x) exp(x);  ex = exp(1) - 1;\ne1 = abs(trapz(linspace(0, 1, 11), f(linspace(0, 1, 11))) - ex);\ne2 = abs(trapz(linspace(0, 1, 21), f(linspace(0, 1, 21))) - ex);\nfprintf("%.1f\\n", e1/e2)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['The last value of cumtrapz equals trapz.','آخر قيمة لـ cumtrapz تساوي trapz.']],['$ 0','$ 101','$ Error'],'x = linspace(0, 1, 101);  y = sin(x);\nY = cumtrapz(x, y);\ndisp(abs(Y(end) - trapz(x, y)) < 1e-15)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['For a smooth periodic function over a period, the trapezoidal rule is spectrally accurate.','لدالة دورية ملساء على دورة يكون شبه المنحرف دقيقاً طيفياً.']],['$ 0','$ 0.5','$ 2'],'x = linspace(0, 2*pi, 21);\nI = trapz(x, exp(cos(x)));\ndisp(abs(I - 2*pi*besseli(0, 1)) < 1e-12)'),
]);

lesson('506',53,[
  ['``diff`` gives differences, so ``diff(y)./diff(x)`` is a one-sided difference quotient; ``gradient`` gives central differences of the same length as y:','``diff`` تعطي الفروق، فـ ``diff(y)./diff(x)`` خارج قسمة فروق أحادي الجانب، و ``gradient`` تعطي فروقاً مركزية بطول y نفسه:'],
  '$ x = linspace(0, 1, 11);  y = x.^3;  h = x(2) - x(1);\nd1 = diff(y)./diff(x);        % 10 values, first order\nd2 = gradient(y, h);          % 11 values, second order inside\nd2y = diff(y, 2)/h^2;          % second differences',
  ['Finite differences lose accuracy when h is too small (cancellation) and when it is too large (truncation); spectral differentiation matrices (Lesson 82) avoid this trade-off for smooth functions.','والفروق المحدودة تفقد الدقة حين تكون h صغيرة جداً (الإلغاء) وحين تكون كبيرة جداً (القطع)، ومصفوفات التفاضل الطيفية (الدرس 82) تتجنب هذه المقايضة للدوال الملساء.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 10 11',[['diff shortens by one, gradient keeps the length.','diff تقصّر بواحد و gradient تحفظ الطول.']],['$ 11 11','$ 10 10','$ 11 10'],'x = linspace(0, 1, 11);  y = x.^3;  h = x(2) - x(1);\nfprintf("%d %d\\n", numel(diff(y)./diff(x)), numel(gradient(y, h)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.76',[['The central difference at x = 0.5 of `x^3`: exact 0.75, error `h^2 = 0.01`.','الفرق المركزي عند x = 0.5 لـ `x^3`: المضبوط 0.75 والخطأ `h^2 = 0.01`.']],['$ 0.75','$ 0.8','$ 0.5'],'x = linspace(0, 1, 11);  h = x(2) - x(1);\ng = gradient(x.^3, h);\nfprintf("%.2f\\n", g(6))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2',[['Second differences of `x^2` divided by `h^2` are exactly 2.','الفروق الثانية لـ `x^2` مقسومة على `h^2` تساوي 2 بالضبط.']],['$ 1','$ 0','$ 4'],'x = linspace(0, 1, 11);  h = x(2) - x(1);\nd = diff(x.^2, 2)/h^2;\ndisp(round(d(3)*1e8)/1e8)'),
  Q('Why does a forward difference with `h = 10^{−12}` give a poor derivative?','لماذا يعطي الفرق الأمامي مع `h = 10^{−12}` مشتقة سيئة؟',['Cancellation: `f(x + h) − f(x)` keeps only about 4 correct digits, then is divided by h','الإلغاء: `f(x + h) − f(x)` تحتفظ بنحو 4 أرقام صحيحة فقط ثم تُقسم على h'],[['The best h for a forward difference is about `#r{ε} ≈ 10^{−8}`.','وأفضل h للفرق الأمامي نحو `#r{ε} ≈ 10^{−8}`.']],[['h is too large','h كبيرة جداً'],['It gives an exact result','تعطي نتيجة مضبوطة']]),
]);

lesson('506',54,[
  ['``fzero(f, x0)`` finds a root of a scalar function near x0 or inside a bracket ``[a b]``; ``roots(p)`` returns all roots of a polynomial from its coefficients:','``fzero(f, x0)`` تجد جذراً لدالة قياسية قرب x0 أو داخل مجال ``[a b]``، و ``roots(p)`` تعيد كل جذور كثيرة حدود من معاملاتها:'],
  '$ fzero(@(x) x.^3 - 2*x - 5, 2)        % 2.0946\nfzero(@(x) cos(x) - x, [0 1])         % 0.7391\nroots([1 0 -2 -5])                    % 2.0946 and two complex roots',
  ['A bracket with a sign change is the safest input. ``roots`` uses the eigenvalues of the companion matrix; for high-degree orthogonal polynomials Golub–Welsch is more accurate.','والمجال الذي تتغير فيه الإشارة أأمن مدخل. و ``roots`` تستخدم القيم الذاتية لمصفوفة المرافق، ولكثيرات الحدود المتعامدة عالية الدرجة تكون Golub–Welsch أدق.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2.094551',[['The real root of `x^3 − 2x − 5`.','الجذر الحقيقي لـ `x^3 − 2x − 5`.']],['$ 2.000000','$ 3.000000','$ -1.047276'],'fprintf("%.6f\\n", fzero(@(x) x.^3 - 2*x - 5, [2 3]))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.739085',[['The fixed point of cos.','النقطة الثابتة لـ cos.']],['$ 0.5','$ 1','$ 0.707107'],'fprintf("%.6f\\n", fzero(@(x) cos(x) - x, [0 1]))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['Exactly one real root.','جذر حقيقي واحد بالضبط.']],['$ 3','$ 2','$ 0'],'r = roots([1 0 -2 -5]);\ndisp(sum(abs(imag(r)) < 1e-12))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -0.57735 0.57735',['P_2(x) = #f{3x^2 − 1}{2}'],['$ -0.5 0.5','$ -1 1','$ 0 0.57735'],'r = sort(roots([3 0 -1]/2));\nfprintf("%.5f %.5f\\n", r)'),
]);

lesson('506',55,[
  ['Polynomials are row vectors of coefficients, highest power first:','كثيرات الحدود متجهات صفية من المعاملات، أعلى قوة أولاً:'],
  '$ p2 = [3 0 -1]/2;            % P_2(x) = (3x^2 - 1)/2\npolyval(p2, 0.5)             % -0.125\npolyder(p2)                  % [3 0]      = 3x\npolyint(p2)                  % [0.5 0 -0.5 0]\nconv([1 1], [1 -1])          % [1 0 -1]   product of polynomials',
  ['``conv`` multiplies polynomials, ``deconv`` divides. Bonnet’s recurrence can be run on coefficient vectors with ``conv([1 0], p)`` for the multiplication by x.','و ``conv`` تضرب كثيرات الحدود و ``deconv`` تقسمها. ويمكن تشغيل علاقة بونيه على متجهات المعاملات مع ``conv([1 0], p)`` للضرب في x.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -0.125 [3 0]',['P_2(0.5) = −0.125,   P_2′(x) = 3x'],['$ 0.125 [3 0]','$ -0.125 [1.5 0]','$ -0.5 [3]'],'p2 = [3 0 -1]/2;\nfprintf("%g %s\\n", polyval(p2, 0.5), mat2str(polyder(p2)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 0 -1]',['(x + 1)(x − 1) = x^2 − 1'],['$ [1 -1]','$ [1 0 1]','$ [0 1 -1]'],'disp(mat2str(conv([1 1], [1 -1])))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.4000',[['`∫_{−1}^{1} P_2^2 dx = 2/5`, via polyint and conv.','`∫_{−1}^{1} P_2^2 dx = 2/5` عبر polyint و conv.']],['$ 0.6667','$ 2','$ 0'],'p2 = [3 0 -1]/2;\nq = polyint(conv(p2, p2));\ndisp(round((polyval(q, 1) - polyval(q, -1))*1e12)/1e12)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [2.5 0 -1.5 0]',[['Bonnet: `P_3 = (5xP_2 − 2P_1)/3` on coefficient vectors.','بونيه: `P_3 = (5xP_2 − 2P_1)/3` على متجهات المعاملات.']],['$ [5 0 -3]','$ [2.5 -1.5]','$ [1.5 0 -0.5 0]'],'p1 = [1 0];  p2 = [3 0 -1]/2;\np3 = (5*conv([1 0], p2) - 2*[0 0 p1])/3;\ndisp(mat2str(p3))'),
]);

lesson('506',56,[
  ['``interp1`` interpolates tabulated data (linear by default, also ``"spline"``, ``"pchip"``); ``spline`` builds a cubic spline:','``interp1`` تستكمل البيانات المجدولة (خطياً افتراضياً، وأيضاً ``"spline"`` و ``"pchip"``)، و ``spline`` تبني شريحة تكعيبية:'],
  '$ x = [0 1 2];  y = [1 3 7];\ninterp1(x, y, 0.5)               % 2   (linear)\ninterp1(x, y, 0.5, "spline")\npp = spline(x, y);  ppval(pp, 0.5)\npolyfit(x, y, 2)                  % [1 1 1]: the interpolating quadratic',
  ['For one global polynomial through n + 1 points use ``polyfit(x, y, n)`` (only for small n) or the barycentric formula; equally spaced points with large n give Runge’s phenomenon.','ولكثيرة حدود شاملة واحدة عبر n + 1 نقطة استخدم ``polyfit(x, y, n)`` (لـ n صغير فقط) أو الصيغة الباريسنترية، والنقاط المتساوية التباعد مع n كبير تعطي ظاهرة رونغه.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2',[['Linear interpolation between (0, 1) and (1, 3).','استكمال خطي بين (0, 1) و (1, 3).']],['$ 1.75','$ 2.5','$ 3'],'disp(interp1([0 1 2], [1 3 7], 0.5))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 1 1]',[['The quadratic through the three points is `x^2 + x + 1`.','كثيرة الحدود التربيعية عبر النقاط الثلاث هي `x^2 + x + 1`.']],['$ [1 2 1]','$ [2 1 1]','$ [1 0 1]'],'disp(mat2str(round(polyfit([0 1 2], [1 3 7], 2)*1e10)/1e10))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.7500',[['With three points the spline is the interpolating quadratic: `0.25 + 0.5 + 1`.','بثلاث نقاط تكون الشريحة هي كثيرة الحدود التربيعية: `0.25 + 0.5 + 1`.']],['$ 2','$ 1.5000','$ 2.2500'],'disp(interp1([0 1 2], [1 3 7], 0.5, "spline"))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 11',[['Outside the data interp1 extrapolates only with ``"extrap"``; the last segment has slope 4.','خارج البيانات لا تستقرئ interp1 إلا مع ``"extrap"``، والقطعة الأخيرة ميلها 4.']],['$ 7','$ 13','$ 10'],'disp(interp1([0 1 2], [1 3 7], 3, "linear", "extrap"))'),
]);

lesson('506',57,[
  ['The special functions of fractional calculus:','الدوال الخاصة في التفاضل الكسري:'],
  '$ gamma(2.5)            % 1.3293 = 3*sqrt(pi)/4\nbeta(2, 3)             % 0.0833 = 1/12\nfactorial(5)           % 120\ngammaln(200)           % 857.93: log Gamma without overflow\ngamma(k + 1)./gamma(k + 1 + mu)   % a whole table at once',
  ['They work element by element on arrays. ``gamma(200)`` overflows to ``Inf``; differences of ``gammaln`` give ratios safely.','وهي تعمل عنصراً بعنصر على المصفوفات. و ``gamma(200)`` تفيض إلى ``Inf``، وفروق ``gammaln`` تعطي النسب بأمان.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.329340 0.083333',['Γ(#f{5}{2}) = #f{3#r{π}}{4},   B(2, 3) = #f{1}{12}'],['$ 1.772454 0.083333','$ 1.329340 0.166667','$ 0.886227 0.5'],'fprintf("%.6f %.6f\\n", gamma(2.5), beta(2, 3))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.1284 0.7523 0.6018',['#f{Γ(k + 1)}{Γ(k + 3/2)},   k = 0, 1, 2'],['$ 1 1 1','$ 0.8862 1.3293 3.3234','$ 1.7725 0.8862 1.3293'],'k = 0:2;  mu = 0.5;\nfprintf("%.4f %.4f %.4f\\n", gamma(k + 1)./gamma(k + 1 + mu))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ Inf 1',[['Γ(200) overflows; the ratio through gammaln is fine.','Γ(200) تفيض والنسبة عبر gammaln سليمة.']],['$ Inf 0','$ 857.93 1','$ 0 1'],'r = exp(gammaln(200) - gammaln(201))*200;\nfprintf("%g %g\\n", gamma(200), round(r*1e10)/1e10)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['`Γ(1/2)^2 = π`.','`Γ(1/2)^2 = π`.']],['$ 0','$ 3.1416','$ 1.7725'],'disp(abs(gamma(0.5)^2 - pi) < 1e-14)'),
]);

lesson('506',58,[
  ['Bonnet’s recurrence gives all `P_0, …, P_N` at all points at once. Note that MATLAB’s built-in ``legendre(n, x)`` returns the associated Legendre functions `P_n^m`, m = 0, …, n, one per row; its first row is `P_n`:','علاقة بونيه تعطي كل `P_0, …, P_N` عند كل النقاط دفعة واحدة. ولاحظ أن ``legendre(n, x)`` الجاهزة في MATLAB تعيد دوال ليجندر المرافقة `P_n^m` عند m = 0, …, n صفاً لكل منها، وصفها الأول هو `P_n`:'],
  '$ P = zeros(numel(x), N + 1);  P(:, 1) = 1;  P(:, 2) = x(:);\nfor k = 1:N-1\n    P(:, k+2) = ((2*k + 1)*x(:).*P(:, k+1) - k*P(:, k))/(k + 1);\nend\nL = legendre(2, x);  L(1, :)      % P_2(x), the m = 0 row',
  ['The table ``P(i, k + 1) = P_k(x_i)`` is the basis matrix of collocation and quadrature.','والجدول ``P(i, k + 1) = P_k(x_i)`` هو مصفوفة الأساس للتجميع والتربيع.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1 0.5 -0.125 -0.4375',['P_3(0.5) = #f{5·0.125 − 3·0.5}{2}'],['$ 1 0.5 0.125 0.4375','$ 0.5 -0.125 -0.4375','$ 1 0.5 -0.125 0.4375'],'x = 0.5;  N = 3;\nP = zeros(numel(x), N + 1);  P(:, 1) = 1;  P(:, 2) = x(:);\nfor k = 1:N-1\n    P(:, k+2) = ((2*k + 1)*x(:).*P(:, k+1) - k*P(:, k))/(k + 1);\nend\nfprintf("%g %g %g %g\\n", P)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [3 2]',[['Rows m = 0, 1, 2 for two points.','الصفوف m = 0, 1, 2 لنقطتين.']],['$ [1 2]','$ [2 3]','$ [3 1]'],'disp(mat2str(size(legendre(2, [0 0.5]))))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -0.5 -0.125',[['The first row of legendre is `P_2` itself.','الصف الأول من legendre هو `P_2` نفسها.']],['$ 3 2.25','$ 0 -1.299','$ 0.5 0.125'],'L = legendre(2, [0 0.5]);\nfprintf("%g %g\\n", L(1, :))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['The recurrence agrees with the built-in function for degree 6.','العلاقة تتفق مع الدالة الجاهزة عند الدرجة 6.']],['$ 0','$ 7','$ Error'],'x = linspace(-1, 1, 21)\';  N = 6;\nP = zeros(numel(x), N + 1);  P(:, 1) = 1;  P(:, 2) = x;\nfor k = 1:N-1\n    P(:, k+2) = ((2*k + 1)*x.*P(:, k+1) - k*P(:, k))/(k + 1);\nend\nL = legendre(N, x);\ndisp(norm(P(:, N+1) - L(1, :)\') < 1e-12)'),
]);

lesson('506',59,[
  ['Jacobi polynomials by their three-term recurrence (`c = 2n + α + β`):','كثيرات جاكوبي بعلاقة التكرار الثلاثية (`c = 2n + α + β`):'],
  '$ % P_0 = 1,  P_1 = (a + 1) + (a + b + 2)(x - 1)/2\nfor n = 1:N-1\n    c = 2*n + a + b;\n    num = (c + 1)*((c + 2)*c*x + a^2 - b^2).*P(:, n+1) ...\n          - 2*(n + a)*(n + b)*(c + 2)*P(:, n);\n    P(:, n+2) = num / (2*(n + 1)*(n + a + b + 1)*c);\nend',
  ['Check with known values: `P_n^{(α,β)}(1) = C(n + α, n)` and the Legendre case α = β = 0. The Symbolic Math Toolbox function ``jacobiP(n, a, b, x)`` gives exact references.','وتحقق بقيم معروفة: `P_n^{(α,β)}(1) = C(n + α, n)` وحالة ليجندر α = β = 0. ودالة ``jacobiP(n, a, b, x)`` في صندوق الرياضيات الرمزية تعطي مراجع مضبوطة.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2 3',['P_1^{(1,0)}(1) = C(2, 1),   P_2^{(1,1)}(1) = C(3, 2)'],['$ 1 1','$ 2 6','$ 1 3'],'x = 1;\nP1 = @(a, b) (a + 1) + (a + b + 2)*(x - 1)/2;\na = 1;  b = 1;  n = 1;  c = 2*n + a + b;\nnum = (c + 1)*((c + 2)*c*x + a^2 - b^2)*P1(a, b) ...\n      - 2*(n + a)*(n + b)*(c + 2);\nP2 = num/(2*(n + 1)*(n + a + b + 1)*c);\nfprintf("%g %g\\n", P1(1, 0), P2)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -0.296875',[['`P_3^{(1,0)}(0.5)` by the recurrence.','`P_3^{(1,0)}(0.5)` بعلاقة التكرار.']],['$ 0.296875','$ -0.4375','$ 0.5'],'x = 0.5;  a = 1;  b = 0;  N = 3;\nP = zeros(1, N + 1);  P(1) = 1;  P(2) = (a + 1) + (a + b + 2)*(x - 1)/2;\nfor n = 1:N-1\n    c = 2*n + a + b;\n    num = (c + 1)*((c + 2)*c*x + a^2 - b^2)*P(n+1) ...\n          - 2*(n + a)*(n + b)*(c + 2)*P(n);\n    P(n+2) = num / (2*(n + 1)*(n + a + b + 1)*c);\nend\nfprintf("%g\\n", P(N+1))'),
  Q('Reduce the recurrence to α = β = 0.','اختصر علاقة التكرار إلى α = β = 0.','(n + 1)P_{n+1} = (2n + 1)xP_n − nP_{n−1}',['c = 2n:   2(n + 1)^2·2n P_{n+1} = (2n + 1)(2n + 2)2n x P_n − 2n^2(2n + 2)P_{n−1}'],['(n + 1)P_{n+1} = 2nxP_n − nP_{n−1}','nP_{n+1} = (2n + 1)xP_n − (n + 1)P_{n−1}','P_{n+1} = xP_n − P_{n−1}']),
  Q('What is the value `P_3^{(2,0)}(1)`?','ما القيمة `P_3^{(2,0)}(1)`؟','10',['C(3 + 2, 3) = C(5, 3)'],['1','6','20']),
]);

lesson('506',60,[
  ['MATLAB has no built-in Mittag-Leffler function. For moderate arguments the series is enough; for large ones use a dedicated algorithm such as Garrappa’s ``ml.m`` from the File Exchange:','لا توجد دالة ميتاج–ليفلر جاهزة في MATLAB. وللمتغيرات المعتدلة تكفي المتسلسلة، وللكبيرة استخدم خوارزمية مخصصة مثل ``ml.m`` لـ Garrappa من File Exchange:'],
  '$ ml = @(a, z) sum(z.^(0:100) ./ gamma(a*(0:100) + 1));\nml(1, 1)          % e\nml(0.5, -1)       % 0.4276 = erfcx(1)\nml(2, -1.5^2)     % cos(1.5)',
  ['The series terms are computed as a vector and summed. Check against the known cases `E_1(z) = e^z`, `E_2(−z^2) = cos z` and `E_{1/2}(−z) = e^{z^2}erfc(z)` before using it.','وحدود المتسلسلة تُحسب متجهاً وتُجمع. وتحقق منها مقابل الحالات المعروفة `E_1(z) = e^z` و `E_2(−z^2) = cos z` و `E_{1/2}(−z) = e^{z^2}erfc(z)` قبل استخدامها.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',['E_1(1) = e'],['$ 0','$ 2.7183','$ Error'],'ml = @(a, z) sum(z.^(0:100) ./ gamma(a*(0:100) + 1));\ndisp(abs(ml(1, 1) - exp(1)) < 1e-12)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.427584 0.427584',['E_{1/2}(−1) = e·erfc(1)'],['$ 0.367879 0.427584','$ 0.5 0.5','$ 0.427584 0.367879'],'ml = @(a, z) sum(z.^(0:100) ./ gamma(a*(0:100) + 1));\nfprintf("%.6f %.6f\\n", ml(0.5, -1), erfcx(1))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',['E_2(−z^2) = cos z,   z = 1.5'],['$ 0','$ 0.0707','$ -1'],'ml = @(a, z) sum(z.^(0:100) ./ gamma(a*(0:100) + 1));\ndisp(abs(ml(2, -1.5^2) - cos(1.5)) < 1e-12)'),
  Q('Which function solves `D^{α}y = −y`, `y(0) = 1`?','أي دالة تحل `D^{α}y = −y` مع `y(0) = 1`؟','y = E_{α}(−t^{α})',[['The fractional analogue of `e^{−t}`.','النظير الكسري لـ `e^{−t}`.']],['y = e^{−t^{α}}','y = E_{α}(−t)','y = t^{α}']),
]);

/* ---- 506 · Unit 7 (lessons 61–70): the Symbolic Math Toolbox;  Unit 8 (lessons 71–80): differential equations ---- */
lesson('506',61,[
  ['The Symbolic Math Toolbox computes exactly with symbols. ``syms`` creates symbolic variables, and ordinary operators build expressions:','صندوق الرياضيات الرمزية يحسب بالرموز بالضبط. و ``syms`` تنشئ متغيرات رمزية، والعمليات العادية تبني المقادير:'],
  '$ syms x t\nf = (x + 1)^2;\nexpand(f)            % x^2 + 2*x + 1\nsubs(f, x, 3)        % 16\nsyms mu positive     % an assumption on mu',
  ['Symbolic expressions do not need the dot operators. ``subs`` replaces a symbol without changing the expression; ``double`` turns an exact result into a number. Assumptions such as ``positive`` help ``simplify`` and ``int``.','والمقادير الرمزية لا تحتاج العمليات المنقطة. و ``subs`` تستبدل رمزاً دون تغيير المقدار، و ``double`` تحوّل النتيجة المضبوطة إلى عدد. والافتراضات مثل ``positive`` تساعد ``simplify`` و ``int``.'],
],[
  Q('What is ``expand((x + 1)^2)`` for a symbolic x?','ما ``expand((x + 1)^2)`` لـ x رمزي؟','$ x^2 + 2*x + 1',['(x + 1)^2 = x^2 + 2x + 1'],['$ (x + 1)^2','$ x.^2 + 2.*x + 1','$ 1 + 2*x + x^2']),
  Q('What is ``subs((x + 1)^2, x, 3)``?','ما ``subs((x + 1)^2, x, 3)``؟','$ 16',['(3 + 1)^2'],['$ 9','$ (x + 1)^2','$ 4']),
  Q('What does ``double(sym(1)/3)`` return?','ماذا تعيد ``double(sym(1)/3)``؟','$ 0.3333',[['The exact 1/3 converted to a double, shown with 4 decimals.','الكسر المضبوط 1/3 محولاً إلى عدد مزدوج ومعروضاً بأربعة أرقام عشرية.']],['$ 1/3','$ 0','$ sym(0.3333)']),
  Q('Why is ``sym(1)/3`` exact while ``sym(1/3)`` may not be what you want?','لماذا يكون ``sym(1)/3`` مضبوطاً بينما قد لا يكون ``sym(1/3)`` ما تريده؟',['``1/3`` is computed in double first; sym then guesses the fraction from that double','``1/3`` تُحسب بالدقة المزدوجة أولاً ثم تخمّن sym الكسر من ذلك العدد'],[['For simple fractions the guess is right, but not for every number.','للكسور البسيطة يكون التخمين صحيحاً لكن ليس لكل عدد.']],[['They are always identical','متطابقان دائماً'],['sym(1)/3 is a double','sym(1)/3 عدد مزدوج']]),
]);

lesson('506',62,[
  ['Simplification commands:','أوامر التبسيط:'],
  '$ syms x\nsimplify(sin(x)^2 + cos(x)^2)     % 1\nexpand((x - 1)*(x + 2))           % x^2 + x - 2\nfactor(x^2 - 1)                   % [x - 1, x + 1]   (a vector of factors)\npartfrac(1/(x^2 - 1))             % partial fractions\nsimplify(sqrt(x^2), "IgnoreAnalyticConstraints", true)   % x',
  ['In recent releases ``factor`` returns the factors as a vector; use ``prod(factor(p))`` to get the product back. ``simplify`` only uses identities valid for all complex x unless told otherwise.','وفي الإصدارات الحديثة تعيد ``factor`` العوامل متجهاً، فاستخدم ``prod(factor(p))`` لاستعادة الضرب. و ``simplify`` لا تستخدم إلا متطابقات صحيحة لكل x مركب ما لم يُطلب غير ذلك.'],
],[
  Q('What is ``simplify(sin(x)^2 + cos(x)^2)``?','ما ``simplify(sin(x)^2 + cos(x)^2)``؟','$ 1',[['The Pythagorean identity.','متطابقة فيثاغورس.']],['$ 0','$ sin(x)^2 + cos(x)^2','$ 2']),
  Q('What kind of result does ``factor(x^2 - 1)`` give?','أي نوع من النتائج تعطيه ``factor(x^2 - 1)``؟',['A vector of the factors `x − 1` and `x + 1`','متجه من العاملين `x − 1` و `x + 1`'],[['Not a single product expression.','لا مقداراً واحداً على صورة ضرب.']],['$ (x - 1)*(x + 1)','$ x^2 - 1']),
  Q('What is ``expand((x - 1)*(x + 2))``?','ما ``expand((x - 1)*(x + 2))``؟','$ x^2 + x - 2',['x^2 + 2x − x − 2'],['$ x^2 - x - 2','$ x^2 + 3*x - 2','$ (x - 1)*(x + 2)']),
  Q('Why does ``simplify(sqrt(x^2))`` not give x?','لماذا لا تعطي ``simplify(sqrt(x^2))`` القيمة x؟',['`#r{x^2} = x` is false for negative or complex x','`#r{x^2} = x` خاطئة لـ x سالبة أو مركبة'],[['Declare ``syms x positive`` or use ``IgnoreAnalyticConstraints``.','أعلن ``syms x positive`` أو استخدم ``IgnoreAnalyticConstraints``.']],[['simplify is broken','simplify معطوبة'],['It does give x','بل تعطي x']]),
]);

lesson('506',63,[
  ['``diff`` differentiates and ``int`` integrates, indefinitely or between limits:','``diff`` تشتق و ``int`` تكامل، تكاملاً غير محدد أو بين حدين:'],
  '$ syms x t mu positive\ndiff(x^3)                       % 3*x^2\ndiff(sin(x), 2)                 % -sin(x)\nint(x^2, 0, 1)                  % 1/3\nint(t^mu*(1 - t), t, 0, 1)      % 1/((mu + 1)*(mu + 2))\nint(legendreP(3, x)^2, -1, 1)   % 2/7',
  ['With the positive assumption on μ, integrals with fractional powers come out in closed form. These exact values are the references for numerical code.','ومع افتراض أن μ موجبة تخرج التكاملات ذات القوى الكسرية بصيغة مغلقة. وهذه القيم المضبوطة مراجع للكود العددي.'],
],[
  Q('What is ``int(legendreP(3, x)^2, -1, 1)``?','ما ``int(legendreP(3, x)^2, -1, 1)``؟','$ 2/7',['#f{2}{2n + 1},   n = 3'],['$ 2/5','$ 0.2857','$ 1/7']),
  Q('What is ``diff(sin(x), 2)``?','ما ``diff(sin(x), 2)``؟','$ -sin(x)',['(sin x)″ = −sin x'],['$ cos(x)','$ -cos(x)','$ 2*sin(x)']),
  Q('What is ``int(sqrt(t), 0, 1)``?','ما ``int(sqrt(t), 0, 1)``؟','$ 2/3',['∫_0^1 t^{1/2} dt'],['$ 1/2','$ 3/2','$ 0.6667']),
  Q('What is `∫_0^1 t^{μ}(1 − t) dt` for μ > 0?','ما `∫_0^1 t^{μ}(1 − t) dt` عند μ > 0؟','#f{1}{(μ + 1)(μ + 2)}',['#f{1}{μ + 1} − #f{1}{μ + 2}'],['#f{1}{μ + 1}','#f{μ}{μ + 2}','#f{1}{μ + 2}']),
]);

lesson('506',64,[
  ['``solve`` finds exact solutions, ``vpasolve`` numerical ones to many digits:','``solve`` تجد الحلول المضبوطة و ``vpasolve`` الحلول العددية بأرقام كثيرة:'],
  '$ syms x a b\nsolve(x^2 - 5*x + 6 == 0, x)           % [2; 3]\nsolve(legendreP(2, x) == 0, x)          % [-3^(1/2)/3; 3^(1/2)/3]\n[as, bs] = solve([a + 2*b == 3, 3*a - b == 1], [a, b])   % 5/7, 8/7\nvpasolve(legendreP(4, x) == 0, x, 0.9) % 0.86113631159405257522...',
  ['Equations use ``==``. For several unknowns give a list of equations and of variables, and ask for as many outputs. ``vpasolve`` with a starting point finds the root near it.','والمعادلات تستخدم ``==``. ولعدة مجاهيل أعطِ قائمة معادلات ومتغيرات واطلب مخرجات بعددها. و ``vpasolve`` مع نقطة بدء تجد الجذر القريب منها.'],
],[
  Q('What is ``solve(x^2 - 5*x + 6 == 0, x)``?','ما ``solve(x^2 - 5*x + 6 == 0, x)``؟','$ [2; 3]',['(x − 2)(x − 3) = 0'],['$ [-2; -3]','$ [1; 6]','$ 2']),
  Q('What are the solutions a and b of `a + 2b = 3`, `3a − b = 1`?','ما الحلان a و b للمعادلتين `a + 2b = 3` و `3a − b = 1`؟','a = #f{5}{7},   b = #f{8}{7}',['a = 3 − 2b,   9 − 7b = 1'],['a = #f{8}{7},   b = #f{5}{7}','a = 1,   b = 1','a = #f{3}{7},   b = #f{2}{7}']),
  Q('What does ``vpasolve(legendreP(4, x) == 0, x, 0.9)`` return, to 6 digits?','ماذا تعيد ``vpasolve(legendreP(4, x) == 0, x, 0.9)`` بستة أرقام؟','0.861136',[['The largest Gauss–Legendre node for n = 4.','أكبر عقدة جاوس–ليجندر عند n = 4.']],['0.339981','0.9','0.774597']),
  Q('Why write ``x^2 == 4`` and not ``x^2 = 4`` inside solve?','لماذا نكتب ``x^2 == 4`` لا ``x^2 = 4`` داخل solve؟',['``=`` is assignment; an equation is written with ``==``','``=`` إسناد، والمعادلة تُكتب بـ ``==``'],[['``x^2 = 4`` is a syntax error.','``x^2 = 4`` خطأ في الصياغة.']],[['They are the same','متطابقان'],['== is faster','== أسرع']]),
]);

lesson('506',65,[
  ['``taylor`` gives Taylor polynomials and ``limit`` limits, including one-sided ones:','``taylor`` تعطي كثيرات تايلور و ``limit`` النهايات بما فيها من جهة واحدة:'],
  '$ syms x n\ntaylor(exp(x), x, "Order", 4)       % x^3/6 + x^2/2 + x + 1\ntaylor(gamma(1 + x), x, "Order", 2)  % 1 - eulergamma*x\nlimit(sin(x)/x, x, 0)                % 1\nlimit((1 + 1/n)^n, n, Inf)           % exp(1)\nlimit(1/x, x, 0, "right")            % Inf',
  ['``"Order", k`` gives terms up to degree k − 1 (the O term is not shown). MATLAB writes symbolic polynomials with the highest power first.','و ``"Order", k`` تعطي الحدود حتى الدرجة k − 1 (حد O لا يظهر). ويكتب MATLAB كثيرات الحدود الرمزية بأعلى قوة أولاً.'],
],[
  Q('What is ``taylor(exp(x), x, "Order", 4)``?','ما ``taylor(exp(x), x, "Order", 4)``؟','$ x^3/6 + x^2/2 + x + 1',['1 + x + #f{x^2}{2} + #f{x^3}{6}'],['$ x^4/24 + x^3/6 + x^2/2 + x + 1','$ x^2/2 + x + 1','$ 1 + x + x^2 + x^3']),
  Q('What is ``limit(sin(x)/x, x, 0)``?','ما ``limit(sin(x)/x, x, 0)``؟','$ 1',[['A classic limit.','نهاية كلاسيكية.']],['$ 0','$ Inf','$ -1']),
  Q('What is ``limit(1/x, x, 0, "left")``?','ما ``limit(1/x, x, 0, "left")``؟','$ -Inf',[['x < 0 near 0.','x < 0 قرب 0.']],['$ Inf','$ 0','$ 1']),
  Q('What is the coefficient of x in ``taylor(gamma(1 + x), x, "Order", 2)``?','ما معامل x في ``taylor(gamma(1 + x), x, "Order", 2)``؟','−γ ≈ −0.5772',['Γ′(1) = −γ'],['γ ≈ 0.5772','1','0']),
]);

lesson('506',66,[
  ['The orthogonal polynomials are symbolic functions of the toolbox, and also accept numeric arguments:','كثيرات الحدود المتعامدة دوال رمزية في الصندوق وتقبل متغيرات عددية أيضاً:'],
  '$ syms x\nlegendreP(2, x)        % (3*x^2)/2 - 1/2\njacobiP(1, 1, 0, x)    % (3*x)/2 + 1/2\nchebyshevT(3, x)       % 4*x^3 - 3*x\nlegendreP(2, 0.5)      % -0.1250   (numeric input, numeric result)\nexpand(legendreP(2, 2*x - 1))   % 6*x^2 - 6*x + 1',
  ['``legendreP`` is the Legendre polynomial; the core function ``legendre`` gives the associated functions (Lesson 58). For large-scale numerical work the recurrence is faster than the symbolic functions.','و ``legendreP`` كثيرة ليجندر، والدالة الأساسية ``legendre`` تعطي الدوال المرافقة (الدرس 58). وللعمل العددي الكبير تكون علاقة التكرار أسرع من الدوال الرمزية.'],
],[
  Q('What is ``jacobiP(1, 1, 0, x)``?','ما ``jacobiP(1, 1, 0, x)``؟','$ (3*x)/2 + 1/2',['P_1^{(1,0)}(x) = #f{3x + 1}{2}'],['$ x','$ 2*x + 1','$ 3*x + 1']),
  Q('What is ``expand(legendreP(2, 2*x - 1))``?','ما ``expand(legendreP(2, 2*x - 1))``؟','$ 6*x^2 - 6*x + 1',['P_2^*(x) = P_2(2x − 1)'],['$ 3*x^2 - 1','$ 6*x^2 + 6*x + 1','$ 2*x - 1']),
  Q('What is ``chebyshevT(3, x)``?','ما ``chebyshevT(3, x)``؟','$ 4*x^3 - 3*x',['T_3 = 4x^3 − 3x'],['$ (5*x^3)/2 - (3*x)/2','$ 4*x^3 + 3*x','$ 8*x^3 - 6*x']),
  Q('Which function gives `P_2(x)` itself, ``legendreP(2, x)`` or the first row of ``legendre(2, x)``?','أي دالة تعطي `P_2(x)` نفسها: ``legendreP(2, x)`` أم الصف الأول من ``legendre(2, x)``؟',['Both: the m = 0 row of legendre is `P_2`','الاثنتان: الصف m = 0 من legendre هو `P_2`'],[['The other rows of legendre are the associated functions.','والصفوف الأخرى من legendre هي الدوال المرافقة.']],[['Only legendreP','legendreP فقط'],['Only legendre','legendre فقط']]),
]);

lesson('506',67,[
  ['``vpa`` evaluates with variable precision; ``digits`` sets the default number of significant digits (32):','``vpa`` تحسب بدقة متغيرة، و ``digits`` تحدد العدد الافتراضي للأرقام المعنوية (32):'],
  '$ vpa(pi, 30)              % 3.14159265358979323846264338328\ndigits(50);\nvpa(sqrt(sym(2)))        % 50 digits of sqrt(2)\nA = vpa(hilb(sym(12)));   % Hilbert matrix with 50-digit entries\nx = A \\ ones(12, 1);      % a solve that keeps about 34 digits',
  ['Convert exact values (``sym(2)``) rather than doubles, otherwise the 16-digit rounding of the double comes along. High precision is the tool for checking ill-conditioned computations such as the power form of Theorem 3.2.','حوّل القيم المضبوطة (``sym(2)``) لا الأعداد المزدوجة، وإلا جاء معها التقريب إلى 16 رقماً. والدقة العالية أداة التحقق من الحسابات سيئة الشرط مثل صيغة القوى في النظرية 3.2.'],
],[
  Q('What is ``vpa(pi, 30)``?','ما ``vpa(pi, 30)``؟','$ 3.14159265358979323846264338328',[['30 significant digits.','30 رقماً معنوياً.']],['$ 3.141592653589793','$ 3.14','$ pi']),
  Q('What is the default value of ``digits``?','ما القيمة الافتراضية لـ ``digits``؟','32',[['vpa uses 32 significant digits unless changed.','vpa تستخدم 32 رقماً معنوياً ما لم تُغيَّر.']],['16','15','64']),
  Q('Why is ``vpa(sqrt(sym(2)), 40)`` better than ``vpa(sqrt(2), 40)``?','لماذا تكون ``vpa(sqrt(sym(2)), 40)`` أفضل من ``vpa(sqrt(2), 40)``؟',['``sqrt(2)`` is a double, already rounded to 16 digits','``sqrt(2)`` عدد مزدوج مقرّب أصلاً إلى 16 رقماً'],[['Start from exact symbolic values.','ابدأ من قيم رمزية مضبوطة.']],[['They are the same','متطابقتان'],['sym is slower','sym أبطأ']]),
  Q('`κ(H_{12}) ≈ 1.7 × 10^{16}`. About how many correct digits does a 50-digit solve keep?','`κ(H_{12}) ≈ 1.7 × 10^{16}`. كم رقماً صحيحاً تقريباً يبقى في حل بـ 50 رقماً؟','≈ 34',['50 − 16'],['≈ 0','≈ 16','≈ 50']),
]);

lesson('506',68,[
  ['``dsolve`` solves ordinary differential equations symbolically. Define the unknown with ``syms y(t)`` and give conditions as equations:','``dsolve`` تحل المعادلات التفاضلية العادية رمزياً. عرّف المجهول بـ ``syms y(t)`` وأعطِ الشروط معادلات:'],
  '$ syms y(t)\ndsolve(diff(y, t) == -2*t*y, y(0) == 1)           % exp(-t^2)\nDy = diff(y, t);\ndsolve(diff(y, t, 2) + y == 0, [y(0) == 0, Dy(0) == 1])   % sin(t)\ndsolve(diff(y, t) == y)                           % C1*exp(t)',
  ['Without conditions the answer contains constants ``C1``, ``C2``. Derivative conditions use a named derivative such as ``Dy``.','ودون شروط يحوي الجواب ثوابت ``C1`` و ``C2``. وشروط المشتقات تستخدم مشتقة مسماة مثل ``Dy``.'],
],[
  Q('What is ``dsolve(diff(y, t) == -2*t*y, y(0) == 1)``?','ما ``dsolve(diff(y, t) == -2*t*y, y(0) == 1)``؟','$ exp(-t^2)',['y′ = −2ty,   y(0) = 1'],['$ exp(-2*t)','$ exp(t^2)','$ C1*exp(-t^2)']),
  Q('What is the solution of `y″ + y = 0`, `y(0) = 0`, `y′(0) = 1`?','ما حل `y″ + y = 0` مع `y(0) = 0` و `y′(0) = 1`؟','$ sin(t)',['y = A cos t + B sin t,   A = 0,   B = 1'],['$ cos(t)','$ exp(-t)','$ t']),
  Q('How many constants appear in the general solution of a second-order equation?','كم ثابتاً يظهر في الحل العام لمعادلة من الرتبة الثانية؟','2',[['``C1`` and ``C2``.','``C1`` و ``C2``.']],['1','0','3']),
  Q('Why is ``Dy = diff(y, t)`` defined before ``dsolve``?','لماذا تُعرَّف ``Dy = diff(y, t)`` قبل ``dsolve``؟',['To write the condition `y′(0) = 1` as ``Dy(0) == 1``','لكتابة الشرط `y′(0) = 1` بالصورة ``Dy(0) == 1``'],[['A derivative evaluated at a point needs a name.','المشتقة المحسوبة عند نقطة تحتاج اسماً.']],[['To speed up dsolve','لتسريع dsolve'],['It is not needed','لا حاجة']]),
]);

lesson('506',69,[
  ['``matlabFunction`` turns a symbolic expression into a fast numeric function handle, with element-wise operators inserted automatically:','``matlabFunction`` تحوّل المقدار الرمزي إلى مقبض دالة عددية سريعة مع إدراج العمليات المنقطة تلقائياً:'],
  '$ syms x t\nf = matlabFunction(legendreP(5, x));       % @(x) ...\nf(linspace(-1, 1, 5))                      % a numeric row\ng = matlabFunction(t^(3/2)*sin(pi*x), "Vars", [x t]);\nmatlabFunction(expr, "File", "source_f")   % write it to a file',
  ['Derive once symbolically (a source term f, an exact solution), convert, then evaluate on grids. ``"Vars"`` fixes the order of the inputs; ``"File"`` writes an optimized .m file.','اشتق مرة رمزياً (حد مصدر f أو حل مضبوط) ثم حوّل واحسب على الشبكات. و ``"Vars"`` تثبت ترتيب المدخلات، و ``"File"`` تكتب ملف .m محسّناً.'],
],[
  Q('What is ``f(0.5)`` for ``f = matlabFunction(legendreP(2, x))``?','ما ``f(0.5)`` لـ ``f = matlabFunction(legendreP(2, x))``؟','$ -0.1250',['#f{3(0.25) − 1}{2}'],['$ 0.1250','$ -0.5000','$ 0.2500']),
  Q('Why does ``matlabFunction`` insert ``.^`` and ``.*``?','لماذا تدرج ``matlabFunction`` العمليات ``.^`` و ``.*``؟',['So that the function works on whole vectors and grids','حتى تعمل الدالة على متجهات وشبكات كاملة'],[['The symbolic expression has no notion of arrays.','المقدار الرمزي لا يعرف المصفوفات.']],[['For exactness','للضبط'],['It does not','لا تدرجها']]),
  Q('What does the option ``"Vars", [x t]`` decide?','ماذا يحدد الخيار ``"Vars", [x t]``؟',['The order of the inputs of the handle: ``g(x, t)``','ترتيب مدخلات المقبض: ``g(x, t)``'],[['Without it the variables are sorted alphabetically.','دونه تُرتب المتغيرات أبجدياً.']],[['The output type','نوع المخرج'],['The precision','الدقة']]),
  Q('What is ``g(0.5, 1)`` for ``g = matlabFunction(t^(3/2)*sin(pi*x), "Vars", [x t])``?','ما ``g(0.5, 1)`` لـ ``g = matlabFunction(t^(3/2)*sin(pi*x), "Vars", [x t])``؟','1',['1^{3/2} sin(#f{π}{2})'],['0','0.5','π']),
]);

lesson('506',70,[
  ['Check every formula exactly on small cases before coding it. For Theorem 3.1 compare the formula with direct symbolic differentiation, with a symbolic γ:','تحقق من كل صيغة بالضبط على حالات صغيرة قبل برمجتها. فللنظرية 3.1 قارن الصيغة بالاشتقاق الرمزي المباشر مع γ رمزية:'],
  '$ syms x g positive\nL = @(i) legendreP(i, 2*x/g - 1);\nd = @(r, j) 4/g^2*(r - j)/2*(2*j + 1)*(r + j + 1);\nfor r = 0:6\n    s = 0;\n    for j = r-2:-2:0, s = s + d(r, j)*L(j); end\n    assert(simplify(diff(L(r), x, 2) - s) == 0)\nend',
  ['The loop over ``j = r-2:-2:0`` visits exactly the even gaps `r − j = 2s`. A symbolic γ catches a wrong power of γ that a test at γ = 1 would miss.','والحلقة على ``j = r-2:-2:0`` تمر على الفجوات الزوجية `r − j = 2s` بالضبط. و γ الرمزية تكشف قوة خاطئة لـ γ قد يفوتها اختبار عند γ = 1.'],
],[
  Q('Which j does ``r-2:-2:0`` give for r = 5?','أي قيم j تعطيها ``r-2:-2:0`` عند r = 5؟','3, 1',[['Odd gaps are skipped: r − j = 2, 4.','الفجوات الفردية تُتجاوز: r − j = 2, 4.']],['3, 1, 0','4, 2, 0','5, 3, 1']),
  Q('What is `d_{3,1}` for γ = 2?','ما `d_{3,1}` عند γ = 2؟','15',['#f{4}{4}·1·3·5'],['60','30','#f{15}{4}']),
  Q('What does ``assert`` do if the difference is not zero?','ماذا تفعل ``assert`` إذا لم يكن الفرق صفراً؟',['It stops with an error at that r','تتوقف بخطأ عند r تلك'],[['A silent pass means the formula holds for r = 0, …, 6.','والمرور الصامت يعني صحة الصيغة عند r = 0, …, 6.']],[['It prints a warning and continues','تطبع تحذيراً وتكمل'],['Nothing','لا شيء']]),
  Q('Why test with a symbolic γ instead of γ = 1?','لماذا الاختبار مع γ رمزية بدل γ = 1؟',['The factor `4/γ^2` is invisible at γ = 1','العامل `4/γ^2` غير مرئي عند γ = 1'],[['A wrong power of γ would pass.','قوة خاطئة لـ γ ستنجح.']],[['It is faster','أسرع'],['γ = 1 is not allowed','γ = 1 غير مسموح']]),
]);

lesson('506',71,[
  ['``ode45`` solves `y′ = f(t, y)` with an adaptive Runge–Kutta pair. The right-hand side is a function of t and y that returns a column:','``ode45`` تحل `y′ = f(t, y)` بزوج رونغه–كوتا تكيفي. والطرف الأيمن دالة في t و y تعيد عموداً:'],
  '$ [t, y] = ode45(@(t, y) -y, [0 1], 1);\ny(end) - exp(-1)                 % small: default RelTol = 1e-3\nopts = odeset("RelTol", 1e-10, "AbsTol", 1e-12);\n[t, y] = ode45(@(t, y) -y, [0 1], 1, opts);\nsol = ode45(@(t, y) -y, [0 1], 1);  deval(sol, 0.5)   % value at any t',
  ['The output times are chosen by the solver; give a vector ``[0 0.1 … 1]`` as tspan to get values at those times. Tighten the tolerances for reference solutions.','وأزمنة المخرجات يختارها الحلّال، فأعطِ متجهاً ``[0 0.1 … 1]`` بدل tspan للحصول على قيم عند تلك الأزمنة. وشدّد السماحيات للحلول المرجعية.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['Even the default tolerances give `e^{−1}` to about `10^{−4}`.','حتى السماحيات الافتراضية تعطي `e^{−1}` بدقة نحو `10^{−4}`.']],['$ 0','$ 0.3679','$ Error'],'[t, y] = ode45(@(t, y) -y, [0 1], 1);\ndisp(abs(y(end) - exp(-1)) < 1e-3)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['With tight tolerances the error is far below `10^{−8}`.','مع السماحيات المشددة يكون الخطأ أقل بكثير من `10^{−8}`.']],['$ 0','$ 1e-10','$ 0.3679'],'opts = odeset("RelTol", 1e-10, "AbsTol", 1e-12);\n[t, y] = ode45(@(t, y) -y, [0 1], 1, opts);\ndisp(abs(y(end) - exp(-1)) < 1e-8)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.5',['y = #f{1}{1 + t},   t = 1'],['$ 0.3679','$ 1','$ 2'],'opts = odeset("RelTol", 1e-10, "AbsTol", 1e-12);\n[t, y] = ode45(@(t, y) -y.^2, [0 1], 1, opts);\nfprintf("%.4g\\n", y(end))'),
  Q('How do you get the solution exactly at t = 0, 0.25, 0.5, 0.75, 1?','كيف تحصل على الحل بالضبط عند t = 0, 0.25, 0.5, 0.75, 1؟','$ [t, y] = ode45(f, 0:0.25:1, y0);',[['A vector tspan sets the output times.','متجه tspan يحدد أزمنة المخرجات.']],['$ [t, y] = ode45(f, [0 1], y0, 5);','$ ode45(f, [0 1], y0, "Times", 5)','$ [t, y] = ode45(f, [0 1], y0); t = 0:0.25:1;']),
]);

lesson('506',72,[
  ['A higher-order equation is written as a first-order system. For `y″ = −y`, set `Y = (y, y′)`:','المعادلة من رتبة أعلى تُكتب نظاماً من الرتبة الأولى. لـ `y″ = −y` نضع `Y = (y, y′)`:'],
  '$ f = @(t, Y) [Y(2); -Y(1)];\n[t, Y] = ode45(f, [0 pi], [1; 0], opts);\nY(end, 1)          % cos(pi) = -1\n% predator–prey\nf = @(t, u) [u(1)*(1 - u(2)); u(2)*(u(1) - 1)];',
  ['The state is a column, and each row of the output ``Y`` is the state at one time: ``Y(:, 1)`` is y, ``Y(:, 2)`` is y′.','والحالة عمود، وكل صف في المخرج ``Y`` هو الحالة عند زمن واحد: ``Y(:, 1)`` هي y و ``Y(:, 2)`` هي y′.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -1.000000',['cos π = −1'],['$ 1.000000','$ 0.000000','$ 3.141593'],'opts = odeset("RelTol", 1e-10, "AbsTol", 1e-12);\n[t, Y] = ode45(@(t, Y) [Y(2); -Y(1)], [0 pi], [1; 0], opts);\nfprintf("%.6f\\n", Y(end, 1))'),
  Q('Write `y‴ = −y` as a first-order system.','اكتب `y‴ = −y` نظاماً من الرتبة الأولى.','$ f = @(t, Y) [Y(2); Y(3); -Y(1)];',[['`Y = (y, y′, y″)`.','`Y = (y, y′, y″)`.']],['$ f = @(t, Y) [Y(2); -Y(1)];','$ f = @(t, Y) [Y(3); Y(2); -Y(1)];','$ f = @(t, Y) -Y;']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.000000',[['`y′(π) = −sin π = 0`.','`y′(π) = −sin π = 0`.']],['$ -1.000000','$ 1.000000','$ 3.141593'],'opts = odeset("RelTol", 1e-10, "AbsTol", 1e-12);\n[t, Y] = ode45(@(t, Y) [Y(2); -Y(1)], [0 pi], [1; 0], opts);\nfprintf("%.6f\\n", abs(Y(end, 2)))'),
  Q('Which column of the output holds y′?','أي عمود في المخرج يحمل y′؟','2',[['The second component of the state.','المركبة الثانية من الحالة.']],['1','3',['The last row','الصف الأخير']]),
]);

lesson('506',73,[
  ['A stiff problem has very different time scales; explicit solvers such as ode45 then need tiny steps for stability. Implicit solvers such as ``ode15s`` take steps set by accuracy only:','المسألة الجاسئة فيها مقاييس زمنية مختلفة جداً، فتحتاج الحلّالات الصريحة مثل ode45 خطوات صغيرة جداً للاستقرار. والحلّالات الضمنية مثل ``ode15s`` تأخذ خطوات تحددها الدقة فقط:'],
  '$ f = @(t, y) -1000*(y - cos(t));\n[t1, y1] = ode45(f, [0 1], 1);     % about 1200 steps\n[t2, y2] = ode15s(f, [0 1], 1);    % about 20 steps\ny2(end)                             % 0.5411',
  ['The semi-discretized heat equation (Lesson 77) is stiff: its eigenvalues grow like `N^2`. If ode45 is unexpectedly slow, try ode15s.','ومعادلة الحرارة المقطعة جزئياً (الدرس 77) جاسئة لأن قيمها الذاتية تنمو مثل `N^2`. وإذا كانت ode45 بطيئة على غير المتوقع فجرّب ode15s.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['ode45 needs more than ten times as many steps.','ode45 تحتاج خطوات أكثر بعشر مرات.']],['$ 0','$ 1233','$ 19'],'f = @(t, y) -1000*(y - cos(t));\n[t1, y1] = ode45(f, [0 1], 1);\n[t2, y2] = ode15s(f, [0 1], 1);\ndisp(numel(t1) > 10*numel(t2))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.5411',[['The solution follows `cos t` closely, plus a small lag `≈ sin(t)/1000`.','الحل يتبع `cos t` عن قرب مع تأخر صغير `≈ sin(t)/1000`.']],['$ 0.5403','$ 1.0000','$ 0.0000'],'f = @(t, y) -1000*(y - cos(t));\n[t, y] = ode15s(f, [0 1], 1);\nfprintf("%.4f\\n", y(end))'),
  Q('Why is the semi-discrete heat equation stiff?','لماذا تكون معادلة الحرارة المقطعة جزئياً جاسئة؟',['Its eigenvalues range from about −π^2 to about −4/h^2','قيمها الذاتية تمتد من نحو −π^2 إلى نحو −4/h^2'],[['Fast modes decay quickly but force small explicit steps.','الأنماط السريعة تتلاشى بسرعة لكنها تفرض خطوات صريحة صغيرة.']],[['Because it is nonlinear','لأنها غير خطية'],['It is not stiff','ليست جاسئة']]),
  Q('Which solver is the first choice for a suspected stiff problem?','أي حلّال هو الخيار الأول لمسألة يُشتبه في جساءتها؟','$ ode15s',[['ode23s is an alternative for crude tolerances.','و ode23s بديل للسماحيات المتساهلة.']],['$ ode45','$ ode23','$ ode113']),
]);

lesson('506',74,[
  ['``odeset`` sets options: tolerances, a maximum step, and events that stop the integration when a function crosses zero:','``odeset`` تحدد الخيارات: السماحيات والخطوة القصوى والأحداث التي توقف التكامل حين تعبر دالة الصفر:'],
  '$ ev = @(t, y) deal(y(1), 1, -1);   % value, stop?, direction (falling)\nopts = odeset("Events", ev, "RelTol", 1e-8);\n[t, y, te] = ode45(@(t, y) [y(2); -9.81], [0 5], [10; 0], opts);\nte                                % time of impact: 1.4278',
  ['The event function returns three things: the value whose zero is sought, whether to stop (1) and the direction of crossing (−1 falling, +1 rising, 0 both).','ودالة الحدث تعيد ثلاثة أشياء: القيمة التي يُبحث عن صفرها، وهل يتوقف (1)، واتجاه العبور (−1 نازل و +1 صاعد و 0 الاثنان).'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.4278',['t = #r{#f{2·10}{9.81}}'],['$ 1.0194','$ 2.0389','$ 5.0000'],'opts = odeset("Events", @(t, y) deal(y(1), 1, -1), "RelTol", 1e-8);\n[t, y, te] = ode45(@(t, y) [y(2); -9.81], [0 5], [10; 0], opts);\nfprintf("%.4f\\n", te)'),
  Q('What does the third output of the event function, −1, mean?','ماذا يعني المخرج الثالث لدالة الحدث −1؟',['Only zero crossings where the value is decreasing count','لا تُحتسب إلا عبورات الصفر التي تتناقص فيها القيمة'],[['A falling object crosses y = 0 downward.','الجسم الساقط يعبر y = 0 نزولاً.']],[['Stop at the first step','توقف عند الخطوة الأولى'],['Integrate backwards','كامل إلى الخلف']]),
  Q('Which option limits the largest step size?','أي خيار يحد أكبر طول خطوة؟','$ "MaxStep"',[['Useful when the right-hand side has short features.','مفيد حين يكون للطرف الأيمن تفاصيل قصيرة.']],['$ "InitialStep"','$ "RelTol"','$ "Refine"']),
  Q('What are the default RelTol and AbsTol of ode45?','ما قيمتا RelTol و AbsTol الافتراضيتان لـ ode45؟','$ 1e-3 and 1e-6',[['Often too loose for reference solutions.','غالباً متساهلتان جداً للحلول المرجعية.']],['$ 1e-6 and 1e-10','$ 1e-10 and 1e-12','$ eps and eps']),
]);

lesson('506',75,[
  ['``bvp4c`` solves two-point boundary-value problems written as first-order systems, with a function for the boundary residuals and an initial guess from ``bvpinit``:','``bvp4c`` تحل مسائل القيم الحدية ذات النقطتين مكتوبة أنظمة من الرتبة الأولى، مع دالة لبواقي الشروط الحدية وتخمين ابتدائي من ``bvpinit``:'],
  '$ % y″ = -y,  y(0) = 0,  y(1) = 1\nodefun = @(x, Y) [Y(2); -Y(1)];\nbcfun  = @(Ya, Yb) [Ya(1); Yb(1) - 1];\nsolinit = bvpinit(linspace(0, 1, 11), [0 0]);\nsol = bvp4c(odefun, bcfun, solinit);\ndeval(sol, 0.5)          % [0.5697; ...] = sin(0.5)/sin(1)',
  ['``bcfun`` returns the residuals that must vanish. ``bvp5c`` is a higher-order alternative; ``deval`` evaluates the solution anywhere.','و ``bcfun`` تعيد البواقي التي يجب أن تنعدم. و ``bvp5c`` بديل أعلى رتبة، و ``deval`` تحسب الحل في أي مكان.'],
],[
  Q('What is `y(0.5)` for the example?','ما `y(0.5)` للمثال؟','0.569747',['#f{sin 0.5}{sin 1} = #f{0.479426}{0.841471}'],['0.5','0.479426','0.841471']),
  Q('Write ``bcfun`` for `y(−1) = 0`, `y(1) = 2`.','اكتب ``bcfun`` لـ `y(−1) = 0` و `y(1) = 2`.','$ bcfun = @(Ya, Yb) [Ya(1); Yb(1) - 2];',[['Residuals that vanish at the solution.','بواقٍ تنعدم عند الحل.']],['$ bcfun = @(Ya, Yb) [Ya(1); Yb(1)];','$ bcfun = @(Ya, Yb) [0; 2];','$ bcfun = @(Ya, Yb) [Ya(2); Yb(2) - 2];']),
  Q('Write ``odefun`` for `u″ = 6x`.','اكتب ``odefun`` لـ `u″ = 6x`.','$ odefun = @(x, Y) [Y(2); 6*x];',[['Y(1) = u, Y(2) = u′.','Y(1) = u و Y(2) = u′.']],['$ odefun = @(x, Y) 6*x;','$ odefun = @(x, Y) [6*x; Y(1)];','$ odefun = @(Y, x) [Y(2); 6]']),
  Q('What does ``bvpinit(linspace(0, 1, 11), [0 0])`` provide?','ماذا توفر ``bvpinit(linspace(0, 1, 11), [0 0])``؟',['An initial mesh of 11 points and a constant initial guess for y and y′','شبكة ابتدائية من 11 نقطة وتخميناً ابتدائياً ثابتاً لـ y و y′'],[['bvp4c refines the mesh as needed.','bvp4c تنقّح الشبكة حسب الحاجة.']],[['The final solution','الحل النهائي'],['The boundary conditions','الشروط الحدية']]),
]);

lesson('506',76,[
  ['Finite differences for `−u″ = f`, `u(0) = u(1) = 0`, with a sparse tridiagonal matrix:','الفروق المحدودة لـ `−u″ = f` مع `u(0) = u(1) = 0` بمصفوفة ثلاثية القطر متفرقة:'],
  '$ n = 99;  h = 1/(n + 1);  x = (1:n)\'*h;  e = ones(n, 1);\nA = spdiags([-e 2*e -e], -1:1, n, n)/h^2;\nu = A \\ (pi^2*sin(pi*x));\nerr = max(abs(u - sin(pi*x)))       % O(h^2)',
  ['The error falls by about 4 when n is doubled. Non-zero boundary values move to the right-hand side: the first equation gets `+u(0)/h^2`, the last `+u(1)/h^2`.','والخطأ يصغر نحو 4 مرات عند مضاعفة n. والقيم الحدية غير الصفرية تنتقل إلى الطرف الأيمن: المعادلة الأولى تأخذ `+u(0)/h^2` والأخيرة `+u(1)/h^2`.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 4.0',[['Second order: halving h divides the error by 4.','رتبة ثانية: تنصيف h يقسم الخطأ على 4.']],['$ 2.0','$ 8.0','$ 16.0'],'err = zeros(1, 2);  ns = [49 99];\nfor k = 1:2\n    n = ns(k);  h = 1/(n + 1);  x = (1:n)\'*h;  e = ones(n, 1);\n    A = spdiags([-e 2*e -e], -1:1, n, n)/h^2;\n    u = A \\ (pi^2*sin(pi*x));\n    err(k) = max(abs(u - sin(pi*x)));\nend\nfprintf("%.1f\\n", err(1)/err(2))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['For `u = x(1 − x)` the scheme is exact at the nodes.','لـ `u = x(1 − x)` يكون المخطط مضبوطاً عند العقد.']],['$ 0','$ 0.25','$ 9'],'n = 9;  h = 1/(n + 1);  x = (1:n)\'*h;  e = ones(n, 1);\nA = spdiags([-e 2*e -e], -1:1, n, n)/h^2;\nu = A \\ (2*ones(n, 1));\ndisp(max(abs(u - x.*(1 - x))) < 1e-12)'),
  Q('With `u(0) = 1`, what is added to the first entry of the right-hand side?','مع `u(0) = 1` ماذا يُضاف إلى أول عنصر في الطرف الأيمن؟','#f{1}{h^2}',['−#f{u_0 − 2u_1 + u_2}{h^2}',['The known `u_0 = 1` moves to the right-hand side.','القيمة المعلومة `u_0 = 1` تنتقل إلى الطرف الأيمن.']],['1','h^2','2/h^2']),
  Q('About how many unknowns give `10^{−8}` if the error is `0.08h^2`?','كم مجهولاً تقريباً يعطي `10^{−8}` إذا كان الخطأ `0.08h^2`؟','≈ 2800',['h ≈ #r{#f{10^{−8}}{0.08}} ≈ 3.5 × 10^{−4}'],['≈ 30','≈ 300','≈ 10^8']),
]);

lesson('506',77,[
  ['The method of lines: discretize `u_t = u_{xx}` in space with finite differences, then integrate the system of ordinary equations in time with a stiff solver:','طريقة الخطوط: قطّع `u_t = u_{xx}` في المكان بالفروق المحدودة ثم كامل نظام المعادلات العادية في الزمن بحلّال للمسائل الجاسئة:'],
  '$ n = 49;  h = 1/(n + 1);  x = (1:n)\'*h;  e = ones(n, 1);\nA = spdiags([e -2*e e], -1:1, n, n)/h^2;\nopts = odeset("RelTol", 1e-8, "AbsTol", 1e-10, "Jacobian", A);\n[t, U] = ode15s(@(t, u) A*u, [0 0.1], sin(pi*x), opts);\nU(end, 25)            % u(0.5, 0.1), exact exp(-pi^2/10) = 0.3727',
  ['Giving the constant Jacobian ``A`` saves the solver from estimating it. Each row of ``U`` is the solution at one time on the interior nodes.','وإعطاء الجاكوبي الثابت ``A`` يوفر على الحلّال تقديره. وكل صف في ``U`` هو الحل عند زمن واحد على العقد الداخلية.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['The value at the middle node agrees with `e^{−π^2/10}` to about `10^{−4}`.','القيمة عند العقدة الوسطى تتفق مع `e^{−π^2/10}` بدقة نحو `10^{−4}`.']],['$ 0','$ 0.3727','$ 25'],'n = 49;  h = 1/(n + 1);  x = (1:n)\'*h;  e = ones(n, 1);\nA = spdiags([e -2*e e], -1:1, n, n)/h^2;\nopts = odeset("RelTol", 1e-8, "AbsTol", 1e-10);\n[t, U] = ode15s(@(t, u) A*u, [0 0.1], sin(pi*x), opts);\ndisp(abs(U(end, 25) - exp(-pi^2*0.1)) < 1e-3)'),
  Q('Which node is x = 0.5 for n = 49 interior nodes?','أي عقدة هي x = 0.5 مع 49 عقدة داخلية؟','25',['x_k = #f{k}{50}'],['24','49','50']),
  Q('What is the exact value `u(0.5, 0.1)`?','ما القيمة المضبوطة `u(0.5, 0.1)`؟','≈ 0.3727',['e^{−π^2·0.1} sin(#f{π}{2})'],['≈ 0.9870','≈ 0.5','≈ 0.1']),
  Q('Why give ``"Jacobian", A`` to ode15s?','لماذا تُعطى ``"Jacobian", A`` لـ ode15s؟',['The solver needs `∂f/∂u = A`; giving it avoids finite-difference estimates','الحلّال يحتاج `∂f/∂u = A`، وإعطاؤه يتجنب تقديرات الفروق المحدودة'],[['For a sparse A it also keeps the linear algebra sparse.','ولـ A متفرقة يبقي الجبر الخطي متفرقاً أيضاً.']],[['It changes the equation','يغيّر المعادلة'],['It is required','إلزامي']]),
]);

lesson('506',78,[
  ['``pdepe`` solves one-dimensional parabolic–elliptic systems written as `c u_t = x^{−m}(x^m f)_x + s`. You supply three functions and a mesh:','``pdepe`` تحل الأنظمة المكافئية–الناقصية الأحادية المكتوبة `c u_t = x^{−m}(x^m f)_x + s`. وتوفر ثلاث دوال وشبكة:'],
  '$ m = 0;                                        % slab geometry\npdefun = @(x, t, u, dudx) deal(1, dudx, 0);    % c = 1, f = u_x, s = 0\nicfun  = @(x) sin(pi*x);\n% p + q f = 0, here u = 0 at both ends:\nbcfun  = @(xl, ul, xr, ur, t) deal(ul, 0, ur, 0);\nx = linspace(0, 1, 51);  t = linspace(0, 0.1, 11);\nsol = pdepe(m, pdefun, icfun, bcfun, x, t);\nsol(end, 26)                                   % ≈ exp(-pi^2/10)',
  ['The boundary conditions are written as `p + q f = 0` at each end. pdepe has no fractional time derivative, so the time-fractional problems of Unit 9 need the spectral solver.','والشروط الحدية تُكتب `p + q f = 0` عند كل طرف. ولا تتعامل pdepe مع المشتقة الزمنية الكسرية، فمسائل الوحدة 9 الكسرية الزمنية تحتاج الحلّال الطيفي.'],
],[
  Q('What is m for a problem on an interval (slab), a cylinder and a sphere?','ما m لمسألة على مجال (شريحة) وأسطوانة وكرة؟','0, 1, 2',[['The factor `x^{−m}(x^m f)_x` gives the radial Laplacian.','العامل `x^{−m}(x^m f)_x` يعطي اللابلاسي القطري.']],['1, 2, 3','0, 0, 0','2, 1, 0']),
  Q('For `u_t = u_{xx}`, what are c, f and s?','لـ `u_t = u_{xx}` ما c و f و s؟','c = 1,   f = u_x,   s = 0',['u_t = (u_x)_x'],['c = 0,   f = u,   s = 1','c = 1,   f = u,   s = u_{xx}','c = u_x,   f = 1,   s = 0']),
  Q('How is `u = 0` at the left end written as `p + q f = 0`?','كيف يُكتب `u = 0` عند الطرف الأيسر بالصورة `p + q f = 0`؟','p = u_l,   q = 0',[['Then the condition is `u_l = 0`.','فيكون الشرط `u_l = 0`.']],['p = 0,   q = 1','p = 1,   q = u_l','p = u_l,   q = 1']),
  Q('Can pdepe solve `D_t^{1/2}u = u_{xx}`?','هل تستطيع pdepe حل `D_t^{1/2}u = u_{xx}`؟',['No: its time derivative is of first order only','لا: مشتقتها الزمنية من الرتبة الأولى فقط'],[['Unit 9 builds a spectral solver for this.','الوحدة 9 تبني حلّالاً طيفياً لذلك.']],[['Yes, with m = 1/2','نعم مع m = 1/2'],['Yes, with c = 1/2','نعم مع c = 1/2']]),
]);

lesson('506',79,[
  ['A manufactured pair (u, f) tests a solver: choose u, compute f exactly, and check the pair. For `D_t^{1/2}u = u_{xx} + f` with `u = t^{3/2} sin(πx)`, the Caputo power rule gives','الزوج المصنَّع (u, f) يختبر الحلّال: اختر u واحسب f بالضبط وتحقق من الزوج. ولـ `D_t^{1/2}u = u_{xx} + f` مع `u = t^{3/2} sin(πx)` تعطي قاعدة القوة لكابوتو'],
  'f = #f{Γ(5/2)}{Γ(2)} t sin(πx) + π^2 t^{3/2} sin(πx)',
  ['Code it as a vectorized handle, ``f = @(x, t) (gamma(2.5)*t + pi^2*t.^1.5).*sin(pi*x)``, and check it against the symbolic derivation at a few points. Check also that u satisfies the initial and boundary conditions the solver will use.','واكتبها مقبضاً متجهياً ``f = @(x, t) (gamma(2.5)*t + pi^2*t.^1.5).*sin(pi*x)``، وتحقق منها مقابل الاشتقاق الرمزي عند بضع نقاط. وتحقق أيضاً أن u تحقق الشروط الابتدائية والحدية التي سيستخدمها الحلّال.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 11.198945',['#f{3#r{π}}{4} + π^2   at (x, t) = (#f{1}{2}, 1)'],['$ 9.869604','$ 1.329340','$ 0.000000'],'f = @(x, t) (gamma(2.5)*t + pi^2*t.^1.5).*sin(pi*x);\nfprintf("%.6f\\n", f(0.5, 1))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0 0 0',[['u vanishes at t = 0 and at x = 0, 1.','u تنعدم عند t = 0 وعند x = 0, 1.']],['$ 0 1 0','$ 1 0 0','$ 0 0 1'],'u = @(x, t) t.^1.5.*sin(pi*x);\na = round(u(0, 0.7)*1e12);  b = round(u(1, 0.7)*1e12);\nfprintf("%g %g %g\\n", u(0.3, 0), a, b)'),
  Q('Compute `D_t^{1/2}t^{3/2}`.','احسب `D_t^{1/2}t^{3/2}`.','#f{3#r{π}}{4} t',['#f{Γ(5/2)}{Γ(2)} t'],['#f{#r{π}}{2} t','#f{3}{4} t','#f{4}{3#r{π}} t']),
  Q('Which λ makes this u polynomial in time?','أي λ تجعل u هذه كثيرة حدود في الزمن؟','λ = #f{1}{2}',['t^{3/2} = s^3,   s = t^{1/2}'],['λ = #f{3}{2}','λ = 1','λ = #f{1}{4}']),
]);

lesson('506',80,[
  ['The maximum error on a grid that includes the boundary, and the relative error:','أكبر خطأ على شبكة تتضمن الحدود، والخطأ النسبي:'],
  '$ [X, T] = meshgrid(linspace(0, 1, 101), linspace(0, 1, 51));\nE = abs(uN(X, T) - uex(X, T));\nerr = max(E(:));\nrel = err / max(abs(uex(X(:), T(:))));\n[~, k] = max(E(:));  [X(k), T(k)]        % where the error is largest',
  ['``E(:)`` flattens the grid so that ``max`` gives one number. The location of the largest error often points to the cause, for example the singular behaviour near t = 0.','و ``E(:)`` تسطّح الشبكة فتعطي ``max`` عدداً واحداً. وموقع أكبر خطأ يدل غالباً على السبب، مثل السلوك الشاذ قرب t = 0.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 5151',['101·51'],['$ 152','$ 101','$ 5000'],'[X, T] = meshgrid(linspace(0, 1, 101), linspace(0, 1, 51));\ndisp(numel(X))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.5 1',[['The largest error of `0.01·u` sits where u is largest.','أكبر خطأ لـ `0.01·u` يقع حيث u أكبر.']],['$ 0 0','$ 1 1','$ 0.5 0.5'],'[X, T] = meshgrid(linspace(0, 1, 11), linspace(0, 1, 11));\nE = abs(0.01*T.^1.5.*sin(pi*X));\n[~, k] = max(E(:));\nfprintf("%g %g\\n", X(k), T(k))'),
  Q('`max |u − u_N| = 3 × 10^{−7}` and `max |u| = 1.5`. What is the relative error?','`max |u − u_N| = 3 × 10^{−7}` و `max |u| = 1.5`. ما الخطأ النسبي؟','2 × 10^{−7}',['#f{3 × 10^{−7}}{1.5}'],['3 × 10^{−7}','4.5 × 10^{−7}','2 × 10^{−6}']),
  Q('Why use ``max(E(:))`` rather than ``max(E)``?','لماذا نستخدم ``max(E(:))`` بدل ``max(E)``؟',['``max(E)`` gives the maximum of each column; ``E(:)`` gives one overall maximum','``max(E)`` تعطي أكبر قيمة لكل عمود، و ``E(:)`` تعطي أكبر قيمة كلية'],[['Or ``max(E, [], "all")`` in recent releases.','أو ``max(E, [], "all")`` في الإصدارات الحديثة.']],[['They are the same','متطابقتان'],['E(:) is faster','E(:) أسرع']]),
]);

/* ---- 506 · Unit 9 (lessons 81–90): spectral and fractional computing;  Unit 10 (lessons 91–100): mastery ---- */
lesson('506',81,[
  ['The Gauss–Legendre nodes are the eigenvalues of the symmetric tridiagonal Jacobi matrix, and the weights are twice the squared first components of its normalized eigenvectors (Golub–Welsch):','عقد جاوس–ليجندر هي القيم الذاتية لمصفوفة جاكوبي المتماثلة ثلاثية القطر، والأوزان ضعف مربعات المركبات الأولى لمتجهاتها الذاتية المطبّعة (Golub–Welsch):'],
  '$ function [x, w] = gauss_legendre(n)\n    k = 1:n-1;  beta = k./sqrt(4*k.^2 - 1);\n    [V, D] = eig(diag(beta, 1) + diag(beta, -1));\n    [x, i] = sort(diag(D));\n    w = 2*V(1, i)\'.^2;\nend',
  ['On `[0, 1]` use ``t = (x + 1)/2`` and ``w/2``; for the fractional rule map ``t = s.^(1/lam)`` and keep the weights.','وعلى `[0, 1]` استخدم ``t = (x + 1)/2`` و ``w/2``، وللقاعدة الكسرية حوّل ``t = s.^(1/lam)`` واحتفظ بالأوزان.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2.000000 0.666667',[['The weights sum to 2, and `∫ x^2 = 2/3` exactly.','الأوزان مجموعها 2، و `∫ x^2 = 2/3` بالضبط.']],['$ 1.000000 0.666667','$ 2.000000 0.333333','$ 2.000000 2.000000'],'n = 5;  k = 1:n-1;  beta = k./sqrt(4*k.^2 - 1);\n[V, D] = eig(diag(beta, 1) + diag(beta, -1));\n[x, i] = sort(diag(D));  w = 2*V(1, i)\'.^2;\nfprintf("%.6f %.6f\\n", sum(w), w\'*x.^2)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.861136',[['The largest node for n = 4.','أكبر عقدة عند n = 4.']],['$ 0.339981','$ 0.774597','$ 0.906180'],'n = 4;  k = 1:n-1;  beta = k./sqrt(4*k.^2 - 1);\nx = sort(eig(diag(beta, 1) + diag(beta, -1)));\nfprintf("%.6f\\n", x(end))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.718282',['∫_0^1 e^t dt = e − 1'],['$ 2.718282','$ 1.000000','$ 0.718282'],'n = 6;  k = 1:n-1;  beta = k./sqrt(4*k.^2 - 1);\n[V, D] = eig(diag(beta, 1) + diag(beta, -1));\n[x, i] = sort(diag(D));  w = 2*V(1, i)\'.^2;\nt = (x + 1)/2;  wt = w/2;\nfprintf("%.6f\\n", wt\'*exp(t))'),
  Q('Why sort the eigenvalues and reorder V with the same index?','لماذا تُرتب القيم الذاتية ويُعاد ترتيب V بالفهرس نفسه؟',['Each weight must stay with its node','يجب أن يبقى كل وزن مع عقدته'],[['eig does not promise an order for every matrix type.','eig لا تضمن ترتيباً لكل نوع من المصفوفات.']],[['To normalize the weights','لتطبيع الأوزان'],['It is not needed','لا حاجة']]),
]);

lesson('506',82,[
  ['Differentiation matrix at nodes x from the barycentric weights:','مصفوفة التفاضل عند العقد x من الأوزان الباريسنترية:'],
  '$ n = numel(x);  x = x(:);\ndx = x - x.\' + eye(n);              % x_i - x_j, with ones on the diagonal\nlam = 1./prod(dx, 2);               % barycentric weights\nD = (lam.\'./lam)./dx;\nD(1:n+1:end) = 0;\nD(1:n+1:end) = -sum(D, 2);           % rows sum to zero',
  ['Implicit expansion (``x - x.\'``, R2016b and later) builds the matrix of differences; ``D(1:n+1:end)`` addresses the diagonal. ``D*u`` differentiates the interpolant exactly.','والتوسع الضمني (``x - x.\'`` من R2016b) يبني مصفوفة الفروق، و ``D(1:n+1:end)`` تعنون القطر. و ``D*u`` تشتق كثيرة الاستكمال بالضبط.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [-1.5 2 -0.5;-0.5 0 0.5;0.5 -2 1.5]',[['The classical 3-point matrix.','المصفوفة الكلاسيكية للنقاط الثلاث.']],['$ [-0.5 0 0.5;-0.5 0 0.5;-0.5 0 0.5]','$ [1 -2 1;1 -2 1;1 -2 1]','$ [0 0.5 0;-0.5 0 0.5;0 -0.5 0]'],'x = [-1; 0; 1];  n = 3;\ndx = x - x.\' + eye(n);\nlam = 1./prod(dx, 2);\nD = (lam.\'./lam)./dx;\nD(1:n+1:end) = 0;  D(1:n+1:end) = -sum(D, 2);\ndisp(mat2str(D + 0))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['Exact for `x^9` with 12 Chebyshev points.','مضبوطة لـ `x^9` مع 12 نقطة تشيبيشيف.']],['$ 0','$ 9','$ -1'],'n = 12;  x = cos(pi*(0:n-1)\'/(n-1));\ndx = x - x.\' + eye(n);\nlam = 1./prod(dx, 2);\nD = (lam.\'./lam)./dx;\nD(1:n+1:end) = 0;  D(1:n+1:end) = -sum(D, 2);\ndisp(norm(D*x.^9 - 9*x.^8, Inf) < 1e-9)'),
  Q('Which entries does ``D(1:n+1:end)`` address?','أي عناصر تعنونها ``D(1:n+1:end)``؟',['The diagonal: in column-major order the diagonal entries are n + 1 apart','القطر: في ترتيب الأعمدة تبعد العناصر القطرية n + 1 بعضها عن بعض'],[['Linear indices 1, n + 2, 2n + 3, …','الفهارس الخطية 1 و n + 2 و 2n + 3 و …']],[['The first row','الصف الأول'],['Every other entry','عنصراً بعد عنصر']]),
  Q('What is ``D*ones(n, 1)``?','ما ``D*ones(n, 1)``؟','$ zeros(n, 1)',[['The derivative of a constant.','مشتقة الثابت.']],['$ ones(n, 1)','$ x','$ n']),
]);

lesson('506',83,[
  ['Chebyshev collocation for `u″ = f`, `u(±1) = 0`: square D, keep the interior rows and columns, solve:','تجميع تشيبيشيف لـ `u″ = f` مع `u(±1) = 0`: ربّع D وأبقِ الصفوف والأعمدة الداخلية وحلّ:'],
  '$ N = 16;  x = cos(pi*(0:N)\'/N);\nD = diffmat(x);  D2 = D^2;\nu = zeros(N + 1, 1);\nu(2:N) = D2(2:N, 2:N) \\ exp(x(2:N));\nexact = exp(x) - x*sinh(1) - cosh(1);',
  ['The boundary values are zero, so their columns are dropped. For smooth f the error falls exponentially until rounding (`κ ~ N^4`) stops it near `10^{−13}`.','والقيم الحدية أصفار فتُحذف أعمدتها. وللدوال الملساء f يتناقص الخطأ أسياً حتى يوقفه التقريب (`κ ~ N^4`) قرب `10^{−13}`.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['N = 16 gives about 12 digits.','N = 16 تعطي نحو 12 رقماً.']],['$ 0','$ 16','$ 1e-3'],'N = 16;  x = cos(pi*(0:N)\'/N);  n = N + 1;\ndx = x - x.\' + eye(n);  lam = 1./prod(dx, 2);\nD = (lam.\'./lam)./dx;  D(1:n+1:end) = 0;  D(1:n+1:end) = -sum(D, 2);\nD2 = D^2;  u = zeros(n, 1);\nu(2:N) = D2(2:N, 2:N) \\ exp(x(2:N));\ndisp(norm(u - (exp(x) - x*sinh(1) - cosh(1)), Inf) < 1e-10)'),
  Q('With nodes `{−1, 0, 1}` and `f = 2`, what is `u(0)`?','مع العقد `{−1, 0, 1}` و `f = 2` ما `u(0)`؟','−1',['u_0 − 2u_1 + u_2 = 2,   u_0 = u_2 = 0',['Exact: `u = x^2 − 1`.','مضبوط: `u = x^2 − 1`.']],['1','0','−2']),
  Q('How many interior unknowns are there for N = 16?','كم مجهولاً داخلياً عند N = 16؟','15',['N − 1'],['17','16','14']),
  Q('How should non-zero boundary values `u(1) = a`, `u(−1) = b` be handled?','كيف تُعالج القيم الحدية غير الصفرية `u(1) = a` و `u(−1) = b`؟',['Move their columns to the right-hand side: subtract ``D2(2:N, [1 N+1])*[a; b]``','انقل أعمدتها إلى الطرف الأيمن: اطرح ``D2(2:N, [1 N+1])*[a; b]``'],[['x(1) = 1 and x(N+1) = −1 for these points.','x(1) = 1 و x(N+1) = −1 لهذه النقاط.']],[['Ignore them','تجاهلها'],['Add them to the diagonal','أضفها إلى القطر']]),
]);

lesson('506',84,[
  ['Galerkin with `φ_k = P_k − P_{k+2}` for `−u″ = f`, `u(±1) = 0`: the stiffness matrix is ``diag(4*(0:N) + 6)``, and the right-hand side comes from Gauss quadrature:','جاليركن بالأساس `φ_k = P_k − P_{k+2}` لـ `−u″ = f` مع `u(±1) = 0`: مصفوفة الجساءة ``diag(4*(0:N) + 6)``، والطرف الأيمن من تربيع جاوس:'],
  '$ [xq, wq] = gauss_legendre(N + 10);\nP = legendre_table(N + 2, xq);          % P(:, k+1) = P_k(xq)\nPhi = P(:, 1:N+1) - P(:, 3:N+3);\nb = Phi.\' * (wq .* f(xq));\nc = b ./ (4*(0:N)\' + 6);',
  ['The solve is a division. The error decays spectrally for smooth f; this is the Legendre–Galerkin method of Course 501, Unit 5.','والحل قسمة. والخطأ يتناقص طيفياً للدوال الملساء، وهذه طريقة ليجندر–جاليركن في المقرر 501، الوحدة 5.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.333333',[['For `f = 1`: `⟨1, φ_0⟩ = 2` and `c_0 = 2/6`.','لـ `f = 1`: `⟨1, φ_0⟩ = 2` و `c_0 = 2/6`.']],['$ 0.5','$ 0.666667','$ 0.166667'],'x = [-1; 1]/sqrt(3);  w = [1; 1];\nphi0 = 1 - (3*x.^2 - 1)/2;\nfprintf("%.6f\\n", (w.\'*phi0)/6)'),
  Q('What is the stiffness entry for k = 3?','ما عنصر الجساءة عند k = 3؟','18',['4·3 + 6'],['10','14','22']),
  Q('Which function is `c_0φ_0` for `f = 1`?','ما الدالة `c_0φ_0` عند `f = 1`؟','#f{1 − x^2}{2}',['#f{1}{3}(1 − P_2) = #f{1}{3}·#f{3}{2}(1 − x^2)'],['1 − x^2','#f{1 − x^2}{3}','#f{x^2}{2}']),
  Q('Why use N + 10 quadrature points?','لماذا تُستخدم N + 10 نقطة تربيع؟',['So that the integrals `⟨f, φ_k⟩` are accurate and do not limit the error','حتى تكون التكاملات `⟨f, φ_k⟩` دقيقة ولا تحد الخطأ'],[['`fφ_k` has higher degree than φ_k.','درجة `fφ_k` أعلى من φ_k.']],[['To make the system square','لجعل النظام مربعاً'],['It is not needed','لا حاجة']]),
]);

lesson('506',85,[
  ['The coefficients `E_{n,r} = (−1)^{n−r}(n + r)!/((n − r)!(r!)^2)` of the fractional Legendre functions `L_n^{λ}(t) = Σ_r E_{n,r}t^{rλ}`:','المعاملات `E_{n,r} = (−1)^{n−r}(n + r)!/((n − r)!(r!)^2)` لدوال ليجندر الكسرية `L_n^{λ}(t) = Σ_r E_{n,r}t^{rλ}`:'],
  '$ E = zeros(M + 1);\nfor n = 0:M\n    for r = 0:n\n        E(n+1, r+1) = (-1)^(n-r)*factorial(n+r) ...\n                      / (factorial(n-r)*factorial(r)^2);\n    end\nend\nL = (t(:).^((0:M)*lam)) * E.\';      % L(i, n+1) = L_n^lam(t_i)',
  ['Row n + 1 holds the powers of `P_n^*`. The name ``E`` is fine in MATLAB (it is ``exp(1)`` that gives e), but the entries grow fast: `E_{20,20} ≈ 1.4 × 10^{11}`.','والصف n + 1 يحمل قوى `P_n^*`. والاسم ``E`` مقبول في MATLAB (فالعدد e هو ``exp(1)``)، لكن العناصر تكبر بسرعة: `E_{20,20} ≈ 1.4 × 10^{11}`.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 -6 6]',['P_2^*(t) = 1 − 6t + 6t^2'],['$ [6 -6 1]','$ [-1 3 0]','$ [1 6 6]'],'n = 2;  e = zeros(1, 3);\nfor r = 0:n\n    e(r+1) = (-1)^(n-r)*factorial(n+r)/(factorial(n-r)*factorial(r)^2);\nend\ndisp(mat2str(e))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.38e+11',['#f{40!}{(20!)^2}'],['$ 2.00e+01','$ 4.00e+01','$ 1.00e+00'],'fprintf("%.2e\\n", factorial(40)/factorial(20)^2)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['Every row of E sums to `P_n^*(1) = 1`.','كل صف في E مجموعه `P_n^*(1) = 1`.']],['$ 0','$ -1','$ 5'],'n = 4;  s = 0;\nfor r = 0:n\n    s = s + (-1)^(n-r)*factorial(n+r)/(factorial(n-r)*factorial(r)^2);\nend\ndisp(s)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['The table reproduces `L_2^{1/2}(t) = P_2(2#r{t} − 1)` on a grid.','الجدول يعيد `L_2^{1/2}(t) = P_2(2#r{t} − 1)` على شبكة.']],['$ 0','$ 3','$ Error'],'t = linspace(0, 1, 7)\';  lam = 0.5;  e = [1 -6 6];\nL2 = (t.^((0:2)*lam))*e.\';\nz = 2*t.^lam - 1;\ndisp(norm(L2 - (3*z.^2 - 1)/2) < 1e-12)'),
]);

lesson('506',86,[
  ['Theorem 3.1 in MATLAB, and an exact check through the power coefficients of `L_i^{γ}`:','النظرية 3.1 في MATLAB، وتحقق مضبوط عبر معاملات القوى لـ `L_i^{γ}`:'],
  '$ [r, j] = ndgrid(0:N, 0:N);\nmask = r > j & mod(r - j, 2) == 0;\nD2 = mask .* (4/gam^2*(r - j)/2.*(2*j + 1).*(r + j + 1));\n% check: C(i+1, :) = powers of L_i (from E with 1/gam^p); then\n% second derivative of each row  ==  D2 * C',
  ['Comparing coefficient arrays checks the theorem exactly for every row at once, without sampling points.','ومقارنة مصفوفات المعاملات تتحقق من النظرية بالضبط لكل الصفوف دفعة واحدة دون أخذ نقاط.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['`D^{(2)}C` equals the second derivatives of the rows of C for N = 6, γ = 3.','`D^{(2)}C` تساوي المشتقات الثانية لصفوف C عند N = 6 و γ = 3.']],['$ 0','$ 6','$ Error'],'N = 6;  gam = 3;\nC = zeros(N + 1);\nfor i = 0:N\n    for p = 0:i\n        C(i+1, p+1) = (-1)^(i-p)*factorial(i+p) ...\n                      / (factorial(i-p)*factorial(p)^2*gam^p);\n    end\nend\nC2 = zeros(N + 1);  p = 0:N-2;\nC2(:, 1:N-1) = C(:, 3:N+1) .* ((p + 2).*(p + 1));\n[r, j] = ndgrid(0:N, 0:N);\nmask = r > j & mod(r - j, 2) == 0;\nD2 = mask .* (4/gam^2*(r - j)/2.*(2*j + 1).*(r + j + 1));\ndisp(norm(D2*C - C2) < 1e-9*norm(C2))'),
  Q('With γ = 1, what is `d_{4,2}`?','مع γ = 1 ما `d_{4,2}`؟','140',['4·1·5·7'],['35','70','0']),
  Q('In the check, why are the power coefficients divided by `γ^p`?','في الفحص لماذا تُقسم معاملات القوى على `γ^p`؟',['`L_i^{γ}(x) = P_i^*(x/γ)`, so each power `x^p` gets `γ^{−p}`','`L_i^{γ}(x) = P_i^*(x/γ)` فتأخذ كل قوة `x^p` العامل `γ^{−p}`'],[['The guide’s formula for `L_i^{γ}`.','صيغة الدليل لـ `L_i^{γ}`.']],[['To normalize','للتطبيع'],['By mistake','خطأً']]),
  Q('Which entry of D2 holds `d_{r,j}`?','أي عنصر في D2 يحمل `d_{r,j}`؟','$ D2(r + 1, j + 1)',[['Indices from 1.','الفهارس من 1.']],['$ D2(r, j)','$ D2(j + 1, r + 1)','$ D2(r - 1, j - 1)']),
]);

lesson('506',87,[
  ['Theorem 3.2 vectorized, and the hand example of the guide as the first test:','النظرية 3.2 بصورة متجهية، والمثال اليدوي في الدليل أول اختبار:'],
  '$ k = 0:M;\ng = gamma(k*lam + 1)./gamma(k*lam + mu + 1);\n[K, S] = ndgrid(k, k);\nW = 1./(1 + K + S + mu/lam);\nchi = (E.*g)*W*E.\' .* (2*k + 1);     % D^{-mu} Phi ≈ chi Phi\n% M = 1, lam = 1/2, mu = 3/2:  [0.18806 0.33851; -0.01082 0.01598]',
  ['``E.*g`` scales column k of E by `g_k` (implicit expansion), and the final ``.* (2*k + 1)`` scales column j by `2j + 1`.','و ``E.*g`` تحجّم العمود k من E بـ `g_k` (توسع ضمني)، و ``.* (2*k + 1)`` الأخيرة تحجّم العمود j بـ `2j + 1`.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [0.18806 0.33851;-0.01082 0.01598]',[['The guide’s hand example.','المثال اليدوي في الدليل.']],['$ [0.25 0.45;0 0]','$ [0.18806 -0.01082;0.33851 0.01598]','$ [1 0;0 1]'],'M = 1;  lam = 0.5;  mu = 1.5;\nE = [1 0; -1 2];  k = 0:M;\ng = gamma(k*lam + 1)./gamma(k*lam + mu + 1);\n[K, S] = ndgrid(k, k);\nW = 1./(1 + K + S + mu/lam);\nchi = (E.*g)*W*E.\' .* (2*k + 1);\ndisp(mat2str(round(chi*1e5)/1e5))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [0.5 0.5;-0.1667 0]',[['For λ = μ = 1, χ is the Legendre integration matrix with the last term dropped.','عند λ = μ = 1 تكون χ مصفوفة تكامل ليجندر مع حذف الحد الأخير.']],['$ [1 0;0 1]','$ [0.5 0;0.5 0]','$ [0.5 0.5;0.1667 0]'],'M = 1;  lam = 1;  mu = 1;\nE = [1 0; -1 2];  k = 0:M;\ng = gamma(k*lam + 1)./gamma(k*lam + mu + 1);\n[K, S] = ndgrid(k, k);\nW = 1./(1 + K + S + mu/lam);\nchi = (E.*g)*W*E.\' .* (2*k + 1);\ndisp(mat2str(round(chi*1e4)/1e4 + 0))'),
  Q('Compute `χ_{0,0}` for λ = 1/2, μ = 3/2.','احسب `χ_{0,0}` عند λ = 1/2 و μ = 3/2.','#f{1}{4Γ(5/2)} ≈ 0.18806',['#f{Γ(1)}{Γ(5/2)(1 + 3)}'],['#f{1}{Γ(5/2)} ≈ 0.7523','#f{1}{4}','#f{1}{3Γ(5/2)} ≈ 0.2508']),
  Q('Why does ``E.*g`` scale columns, not rows?','لماذا تحجّم ``E.*g`` الأعمدة لا الصفوف؟',['g is a row vector, so implicit expansion repeats it down the rows','g متجه صفي فيكرره التوسع الضمني نزولاً على الصفوف'],[['Each column k is multiplied by `g_k`.','كل عمود k يُضرب في `g_k`.']],[['It scales rows','بل تحجّم الصفوف'],['It is a matrix product','ضرب مصفوفي']]),
]);

lesson('506',88,[
  ['Solve `D^{α}y = −y`, `y(0) = 1` in integrated form, `y = 1 − D^{−α}y`, i.e. `(I + χ^T)c = e_0`:','حل `D^{α}y = −y` مع `y(0) = 1` بالصيغة التكاملية `y = 1 − D^{−α}y` أي `(I + χ^T)c = e_0`:'],
  '$ chi = chi_matrix(M, lam, alpha);\nc = (eye(M + 1) + chi.\') \\ [1; zeros(M, 1)];\ny1 = sum(c);                       % y(1), since L_n(1) = 1\nerr = abs(y1 - erfcx(1))           % E_{1/2}(-1) = e*erfc(1)',
  ['With α = λ = 1/2 the error falls quickly up to M ≈ 10, then grows: the power form of `χ` loses digits as the E coefficients grow. Variable precision (``vpa``) removes the floor.','ومع α = λ = 1/2 يتناقص الخطأ بسرعة حتى M ≈ 10 ثم يكبر: صيغة القوى لـ `χ` تفقد الأرقام مع كبر معاملات E. والدقة المتغيرة (``vpa``) تزيل هذه الأرضية.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2.8e-04 5.7e-08',[['Errors at t = 1 for M = 4 and M = 8.','الأخطاء عند t = 1 لـ M = 4 و M = 8.']],['$ 1.2e-02 2.8e-04','$ 1.0e-04 1.0e-08','$ 2.8e-04 2.8e-04'],'lam = 0.5;  mu = 0.5;  out = zeros(1, 2);  Ms = [4 8];\nfor q = 1:2\n    M = Ms(q);  E = zeros(M + 1);\n    for n = 0:M\n        for r = 0:n\n            E(n+1, r+1) = (-1)^(n-r)*factorial(n+r) ...\n                      / (factorial(n-r)*factorial(r)^2);\n        end\n    end\n    k = 0:M;  g = gamma(k*lam + 1)./gamma(k*lam + mu + 1);\n    [K, S] = ndgrid(k, k);  W = 1./(1 + K + S + mu/lam);\n    chi = (E.*g)*W*E.\' .* (2*k + 1);\n    c = (eye(M + 1) + chi.\') \\ [1; zeros(M, 1)];\n    out(q) = abs(sum(c) - erfcx(1));\nend\nfprintf("%.1e %.1e\\n", out)'),
  Q('Why is `y(1) = Σ c_n`?','لماذا يكون `y(1) = Σ c_n`؟',['Every `L_n^{λ}(1) = P_n^*(1) = 1`','كل `L_n^{λ}(1) = P_n^*(1) = 1`'],[['So the value at t = 1 is the sum of the coefficients.','فالقيمة عند t = 1 مجموع المعاملات.']],[['By definition of c','بتعريف c'],['Only for M = 1','فقط عند M = 1']]),
  Q('Why is the matrix `I + χ^T` and not `I + χ`?','لماذا تكون المصفوفة `I + χ^T` لا `I + χ`؟','c^TΦ + c^TχΦ = e_0^TΦ',['(I + χ)^T c = e_0'],['χc = e_0','c^TΦ = c^TχΦ','(I − χ)c = e_0']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.427584',['E_{1/2}(−1) = e·erfc(1)'],['$ 0.367879','$ 0.5','$ 1'],'fprintf("%.6f\\n", erfcx(1))'),
]);

lesson('506',89,[
  ['A time-fractional diffusion problem with a manufactured solution, the test problem for the full method:','مسألة انتشار كسرية زمنية بحل مُصنَّع، وهي مسألة اختبار الطريقة كاملة:'],
  'D_t^{1/2}u = u_{xx} + f,   0 < x < 1,     u = t^{3/2} sin(πx),     f = (#f{3#r{π}}{4} t + π^2 t^{3/2}) sin(πx)',
  ['The ingredients: fractional Legendre functions in t with λ = 1/2 (then `t^{3/2} = s^3`), shifted Legendre in x, χ for `D_t^{−1/2}`, `D^{(2)}` for `u_{xx}`, collocation points in both variables, and one linear solve.','والمكونات: دوال ليجندر الكسرية في t مع λ = 1/2 (فتكون `t^{3/2} = s^3`)، وليجندر المزاحة في x، و χ لـ `D_t^{−1/2}`، و `D^{(2)}` لـ `u_{xx}`، ونقاط التجميع في المتغيرين، وحل خطي واحد.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 11.198945',['f(#f{1}{2}, 1) = #f{3#r{π}}{4} + π^2'],['$ 9.869604','$ 1.329340','$ 0.000000'],'f = @(x, t) (gamma(2.5)*t + pi^2*t.^1.5).*sin(pi*x);\nfprintf("%.6f\\n", f(0.5, 1))'),
  Q('Which M makes the time part exact with λ = 1/2?','أي M يجعل الجزء الزمني مضبوطاً مع λ = 1/2؟','M = 3',['t^{3/2} = s^3'],['M = 1','M = 2','M = 6']),
  Q('How many unknowns are there for N = 8 in x and M = 4 in t?','كم مجهولاً عند N = 8 في x و M = 4 في t؟','45',['(N + 1)(M + 1) = 9·5'],['32','40','36']),
  Q('Write the integrated form, with `u(x, 0) = 0`.','اكتب الصيغة التكاملية مع `u(x, 0) = 0`.','u = D_t^{−1/2}(u_{xx} + f)',['D_t^{−1/2}D_t^{1/2}u = u − u(x, 0)'],['u = D_t^{1/2}(u_{xx} + f)','u = u_{xx} + f','u = 1 + D_t^{−1/2}u']),
]);

lesson('506',90,[
  ['With `u ≈ Φ(t)^T𝒴Ψ(x)` the integrated equation becomes `𝒴 − χ^T𝒴D^{(2)} = ℋ`. In Kronecker form, with ``Y(:)`` column stacking:','مع `u ≈ Φ(t)^T𝒴Ψ(x)` تصبح المعادلة التكاملية `𝒴 − χ^T𝒴D^{(2)} = ℋ`. وبصيغة كرونيكر مع رص الأعمدة ``Y(:)``:'],
  '$ n = (M + 1)*(N + 1);\nK = eye(n) - kron(D2.\', chi.\');\ny = K \\ H(:);\nY = reshape(y, M + 1, N + 1);\n% then replace the boundary rows of K by\n% the conditions u(0, t) = u(1, t) = 0',
  ['Time operators act on the left of 𝒴 (rows), space operators on the right (columns). The boundary conditions are imposed by replacing equations; Kronecker products keep the assembly short.','ومؤثرات الزمن تعمل على يسار 𝒴 (الصفوف) ومؤثرات المكان على يمينها (الأعمدة). وتُفرض الشروط الحدية باستبدال معادلات، وضروب كرونيكر تبقي التجميع قصيراً.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['The Kronecker form agrees with the matrix form.','صيغة كرونيكر تتفق مع الصيغة المصفوفية.']],['$ 0','$ 20','$ Error'],'M = 3;  N = 4;\nchi = magic(M + 1)/10;  D2 = hilb(N + 1);\nY = reshape(1:(M+1)*(N+1), M + 1, N + 1)/7;\nlhs = Y - chi.\'*Y*D2;\nK = eye((M+1)*(N+1)) - kron(D2.\', chi.\');\ndisp(norm(lhs(:) - K*Y(:)) < 1e-10)'),
  Q('How many unknowns for M = 6, N = 10?','كم مجهولاً عند M = 6 و N = 10؟','77',['7·11'],['60','66','70']),
  Q('Why is it ``kron(D2.\', chi.\')`` and not ``kron(chi.\', D2)``?','لماذا هي ``kron(D2.\', chi.\')`` لا ``kron(chi.\', D2)``؟','vec(AYB) = (B^T ⊗ A) vec(Y)',['A = χ^T,   B = D^{(2)}'],['vec(AYB) = (A ⊗ B) vec(Y)','vec(AYB) = (A^T ⊗ B) vec(Y)','vec(AYB) = (B ⊗ A^T) vec(Y)']),
  Q('After the solve, how is the coefficient matrix 𝒴 recovered?','بعد الحل كيف تُستعاد مصفوفة المعاملات 𝒴؟','$ Y = reshape(y, M + 1, N + 1);',[['The inverse of ``Y(:)``.','معكوس ``Y(:)``.']],['$ Y = reshape(y, N + 1, M + 1);','$ Y = y\';','$ Y = y(:);']),
]);

lesson('506',91,[
  ['Measure before optimizing. ``tic``/``toc`` time a block, ``timeit`` times a function reliably, and the Profiler shows where the time goes line by line:','قِس قبل التحسين. ``tic``/``toc`` تقيس كتلة، و ``timeit`` تقيس دالة بموثوقية، و Profiler يبيّن أين يذهب الوقت سطراً سطراً:'],
  '$ tic;  chi = chi_matrix(20, 0.5, 1.9);  toc\nt = timeit(@() chi_matrix(20, 0.5, 1.9))\nprofile on;  solve_problem(p, 12, 12);  profile viewer',
  ['``timeit`` runs the function several times and returns a typical time, so it is better than one ``tic``/``toc`` for short computations. In spectral codes, building matrices or evaluating symbolic expressions usually dominates, not the solve.','و ``timeit`` تشغّل الدالة عدة مرات وتعيد زمناً نموذجياً، فهي أفضل من ``tic``/``toc`` واحدة للحسابات القصيرة. وفي الأكواد الطيفية يسيطر عادة بناء المصفوفات أو حساب المقادير الرمزية لا الحل.'],
],[
  Q('Which tool shows the time spent in each line of a function?','أي أداة تُظهر الزمن المستغرق في كل سطر من دالة؟','$ profile on ... profile viewer',[['The Profiler report links to each line.','تقرير Profiler يربط كل سطر.']],['$ tic ... toc','$ timeit','$ clock']),
  Q('Why is ``timeit`` preferred to a single ``tic``/``toc`` for a short function?','لماذا تُفضَّل ``timeit`` على ``tic``/``toc`` واحدة لدالة قصيرة؟',['It repeats the call and returns a typical time, reducing noise','تكرر الاستدعاء وتعيد زمناً نموذجياً فتقلل التشويش'],[['The first call may include loading and compiling.','الاستدعاء الأول قد يتضمن التحميل والترجمة.']],[['It is exact','مضبوطة'],['It is required','إلزامية']]),
  Q('The solve takes 1 ms and the matrix assembly 2 s. What should be optimized?','الحل يستغرق 1 ms وتجميع المصفوفة 2 s. ماذا يجب تحسينه؟',['The assembly','التجميع'],[['Vectorize it or reuse precomputed tables.','حوّله إلى متجهي أو أعد استخدام جداول محسوبة مسبقاً.']],[['The solve','الحل'],['Nothing','لا شيء']]),
  Q('What does ``toc`` return when called as ``t = toc``?','ماذا تعيد ``toc`` عند استدعائها ``t = toc``؟',['The elapsed time in seconds since the last ``tic``','الزمن المنقضي بالثواني منذ آخر ``tic``'],[['Without an output it prints the time instead.','ودون مخرج تطبع الزمن بدلاً من ذلك.']],[['The CPU time of the session','زمن المعالج للجلسة'],['Nothing','لا شيء']]),
]);

lesson('506',92,[
  ['Rules for fast MATLAB code:','قواعد كود MATLAB السريع:'],
  '$ % 1. preallocate           e = zeros(1, nN);\n% 2. vectorize             s = sum(w .* f(x));\n% 3. use sparse matrices   A = spdiags(...);\n% 4. factor once           dA = decomposition(A);  x = dA \\ b;\n% 5. leave symbolic code   f = matlabFunction(expr);\n% 6. avoid growing strings and cell arrays in loops',
  ['Modern MATLAB compiles loops efficiently, so the biggest gains usually come from algorithms (sparse instead of dense, one factorization instead of many) and from keeping symbolic computations out of numerical loops.','و MATLAB الحديث يترجم الحلقات بكفاءة، فالمكاسب الكبرى تأتي غالباً من الخوارزميات (المتفرق بدل الكثيف، وتحليل واحد بدل كثير) ومن إبقاء الحسابات الرمزية خارج الحلقات العددية.'],
],[
  Q('A loop calls ``subs`` on a symbolic expression 10 000 times. What is the fix?','حلقة تستدعي ``subs`` على مقدار رمزي 10 000 مرة. ما الإصلاح؟','$ f = matlabFunction(expr);  values = f(x);',[['One conversion, then fast numeric evaluation on the whole vector.','تحويل واحد ثم حساب عددي سريع على المتجه كله.']],['$ subs(expr, x, values) inside parfor','$ vpa(expr)','$ simplify(expr) first']),
  Q('The same matrix is solved with 500 right-hand sides one at a time. What is the fix?','المصفوفة نفسها تُحل مع 500 طرف أيمن واحداً واحداً. ما الإصلاح؟',['Factor once (``decomposition`` or ``lu``), or solve all columns at once with ``A \\ B``','حلّل مرة واحدة (``decomposition`` أو ``lu``) أو حلّ كل الأعمدة معاً بـ ``A \\ B``'],[['The factorization is the expensive part.','التحليل هو الجزء المكلف.']],[['Use inv(A)','استخدم inv(A)'],['Use a for loop','استخدم حلقة for']]),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['Solving all right-hand sides at once gives the same result.','حل كل الأطراف اليمنى معاً يعطي النتيجة نفسها.']],['$ 0','$ 500','$ Error'],'A = magic(5) + 5*eye(5);  B = reshape(1:25, 5, 5);\nX1 = A \\ B;  X2 = zeros(5);\nfor k = 1:5, X2(:, k) = A \\ B(:, k); end\ndisp(norm(X1 - X2) < 1e-12)'),
  Q('Which matrix type makes a 10 000 × 10 000 tridiagonal solve fast?','أي نوع مصفوفة يجعل حل نظام ثلاثي القطر 10 000 × 10 000 سريعاً؟','$ sparse',[['The backslash then uses a banded solver.','فتستخدم الشرطة العكسية حلّالاً شريطياً.']],['$ full','$ single','$ symbolic']),
]);

lesson('506',93,[
  ['A project is a folder of functions with a clear layout, put on the path once:','المشروع مجلد دوال بتخطيط واضح يُضاف إلى المسار مرة واحدة:'],
  '$ mapped_legendre/\n    +ml/                 % package: call as ml.chi_matrix(...)\n        e_table.m  d2_matrix.m  chi_matrix.m  solve.m\n    tests/   test_matrices.m\n    scripts/ convergence_table.m\n% at the start of a session\naddpath(genpath("mapped_legendre"))',
  ['A package folder ``+ml`` puts the functions in a namespace, so they cannot clash with other functions of the same name. One function per file, named like the file.','ومجلد الحزمة ``+ml`` يضع الدوال في فضاء أسماء فلا تتصادم مع دوال أخرى بالاسم نفسه. ودالة واحدة لكل ملف باسم الملف نفسه.'],
],[
  Q('How is ``chi_matrix.m`` inside the package folder ``+ml`` called?','كيف تُستدعى ``chi_matrix.m`` داخل مجلد الحزمة ``+ml``؟','$ ml.chi_matrix(M, lam, mu)',[['The package name comes first.','اسم الحزمة يأتي أولاً.']],['$ chi_matrix(M, lam, mu)','$ +ml/chi_matrix(M, lam, mu)','$ ml_chi_matrix(M, lam, mu)']),
  Q('What does ``addpath(genpath("mapped_legendre"))`` do?','ماذا تفعل ``addpath(genpath("mapped_legendre"))``؟',['Adds the folder and all its subfolders to the search path','تضيف المجلد وكل مجلداته الفرعية إلى مسار البحث'],[['Package folders themselves are found through their parent.','ومجلدات الحزم نفسها تُعثر عليها عبر مجلدها الأب.']],[['Copies the files','تنسخ الملفات'],['Runs every script','تشغّل كل ملف']]),
  Q('Why one function per file, named like the file?','لماذا دالة واحدة لكل ملف باسم الملف؟',['MATLAB finds a function by its file name on the path','MATLAB يجد الدالة باسم ملفها على المسار'],[['Local helper functions may follow inside the same file.','ويمكن أن تتبعها دوال مساعدة محلية في الملف نفسه.']],[['It is faster','أسرع'],['There is no reason','لا سبب']]),
  Q('Where should the convergence study go?','أين يجب أن توضع دراسة التقارب؟',['In ``scripts/``, separate from the library functions','في ``scripts/`` منفصلة عن دوال المكتبة'],[['The library stays reusable and testable.','تبقى المكتبة قابلة لإعادة الاستخدام والاختبار.']],[['Inside solve.m','داخل solve.m'],['In the Command Window only','في نافذة الأوامر فقط']]),
]);

lesson('506',94,[
  ['A Live Script (``.mlx``) mixes formatted text, equations, code and results in one document, like a notebook:','الملف الحي (``.mlx``) يخلط النص المنسق والمعادلات والكود والنتائج في مستند واحد مثل الدفتر:'],
  '$ %% Convergence of the mapped Legendre method\n% Text cells explain; equations are typed with the equation editor (LaTeX).\nN = 4:2:16;\ne = arrayfun(@(n) run_error(n), N);\nsemilogy(N, e, "o-")       % the figure appears next to the code\n% Live controls: a slider for lam, a drop-down for the example',
  ['Live Scripts can be exported to PDF, HTML or LaTeX, which makes them good reports. For version control, plain ``.m`` files are easier to compare; recent releases can also save Live Scripts as ``.m``.','ويمكن تصدير الملفات الحية إلى PDF أو HTML أو LaTeX فتصلح تقارير. ولإدارة النسخ تكون ملفات ``.m`` العادية أسهل في المقارنة، والإصدارات الحديثة تحفظ الملفات الحية بصيغة ``.m`` أيضاً.'],
],[
  Q('What is the file extension of a Live Script?','ما امتداد ملف الملف الحي؟','$ .mlx',[['Plain scripts and functions use .m.','الملفات النصية والدوال العادية تستخدم .m.']],['$ .m','$ .mat','$ .fig']),
  Q('What does ``arrayfun(@(n) run_error(n), N)`` do?','ماذا تفعل ``arrayfun(@(n) run_error(n), N)``؟',['Calls run_error for each element of N and collects the results in an array','تستدعي run_error لكل عنصر في N وتجمع النتائج في مصفوفة'],[['A compact loop.','حلقة مختصرة.']],[['Runs in parallel','تعمل بالتوازي'],['Plots the errors','ترسم الأخطاء']]),
  Q('Which format is easier to compare in Git: .mlx or .m?','أي صيغة أسهل للمقارنة في Git: ‏.mlx أم .m؟','$ .m',[['.m is plain text; .mlx is a zipped document.','.m نص عادي و .mlx مستند مضغوط.']],['$ .mlx','$ both equally','$ neither']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 4 9]',[['arrayfun applies the function to each element.','arrayfun تطبق الدالة على كل عنصر.']],['$ [1 2 3]','$ 14','$ [2 4 6]'],'disp(mat2str(arrayfun(@(n) n^2, 1:3)))'),
]);

lesson('506',95,[
  ['Unit tests check known results automatically. A function-based test file:','اختبارات الوحدة تتحقق من نتائج معروفة تلقائياً. ملف اختبار قائم على الدوال:'],
  '$ % file tests/test_matrices.m\nfunction tests = test_matrices\n    tests = functiontests(localfunctions);\nend\nfunction test_hand_example(tc)\n    C = ml.chi_matrix(1, 0.5, 1.5);\n    verifyEqual(tc, C(1, 1), 0.18806, "AbsTol", 1e-5);\nend\n% run with:  results = runtests("tests")',
  ['``verifyEqual`` with a tolerance compares floats; ``assert(cond, msg)`` is the simplest check and also works in scripts and in GNU Octave.','و ``verifyEqual`` مع سماحية تقارن الأعداد العشرية، و ``assert(cond, msg)`` أبسط فحص ويعمل في الملفات النصية و GNU Octave أيضاً.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ failed: d2(2,0) should be 12',[['The assertion fails because the value is wrong on purpose.','يفشل التأكيد لأن القيمة خاطئة عمداً.']],['$ 12','$ passed','$ 1'],'d = 6;\ntry\n    assert(d == 12, "d2(2,0) should be 12");\n    disp("passed")\ncatch err\n    disp([\'failed: \' err.message])\nend'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ passed',[['The value is within the tolerance.','القيمة ضمن السماحية.']],['$ failed','$ 0.18806','$ 1'],'c = 0.188063;\ntry\n    assert(abs(c - 0.18806) < 1e-5);\n    disp("passed")\ncatch\n    disp("failed")\nend'),
  Q('Which command runs all tests in the folder ``tests``?','أي أمر يشغّل كل الاختبارات في المجلد ``tests``؟','$ runtests("tests")',[['It returns a results array with Passed/Failed flags.','تعيد مصفوفة نتائج فيها علامات النجاح والفشل.']],['$ run tests','$ test all','$ assert("tests")']),
  Q('Why compare with ``"AbsTol"`` rather than exact equality?','لماذا المقارنة مع ``"AbsTol"`` بدل المساواة الدقيقة؟',['Computed floats differ from printed reference values by rounding','الأعداد المحسوبة تختلف عن القيم المرجعية المطبوعة بالتقريب'],[['The hand example is known to 5 digits.','المثال اليدوي معروف حتى 5 أرقام.']],[['It is faster','أسرع'],['verifyEqual requires it','verifyEqual تتطلبه']]),
]);

lesson('506',96,[
  ['Data files: ``save``/``load`` for MATLAB’s own .mat format, ``writematrix``/``readmatrix`` and ``writetable``/``readtable`` for text and spreadsheets:','ملفات البيانات: ``save``/``load`` لصيغة .mat الخاصة بـ MATLAB، و ``writematrix``/``readmatrix`` و ``writetable``/``readtable`` للنصوص وجداول البيانات:'],
  '$ save("run12.mat", "Y", "err", "p")      % variables, with full precision\nS = load("run12.mat");  S.err\nwritematrix([N(:) e(:)], "errors.csv")\nA = readmatrix("errors.csv");\nfid = fopen("log.txt", "a");  fprintf(fid, "%d %.3e\\n", N, e);  fclose(fid);',
  ['``.mat`` keeps all digits and types; CSV is for exchange with Python, Mathematica or a spreadsheet. ``load`` into a structure (``S = load(...)``) keeps the workspace clean.','و ``.mat`` تحفظ كل الأرقام والأنواع، و CSV للتبادل مع Python أو Mathematica أو جداول البيانات. والتحميل إلى هيكل (``S = load(...)``) يبقي مساحة العمل نظيفة.'],
],[
  Q('Which format keeps the full precision of a matrix and its variable name?','أي صيغة تحفظ الدقة الكاملة للمصفوفة واسم متغيرها؟','$ .mat',[['Written by save, read by load.','تكتبها save وتقرؤها load.']],['$ .csv','$ .txt','$ .png']),
  Q('Why ``S = load("run12.mat")`` instead of ``load("run12.mat")``?','لماذا ``S = load("run12.mat")`` بدل ``load("run12.mat")``؟',['The variables go into the structure S instead of overwriting workspace variables','تذهب المتغيرات إلى الهيكل S بدل الكتابة فوق متغيرات مساحة العمل'],[['Access them as ``S.err``.','وصول إليها بـ ``S.err``.']],[['It is faster','أسرع'],['load needs an output','load تحتاج مخرجاً']]),
  Q('Why is ``fclose(fid)`` needed after writing?','لماذا نحتاج ``fclose(fid)`` بعد الكتابة؟',['To flush the data to disk and release the file','لدفع البيانات إلى القرص وتحرير الملف'],[['Unclosed files may lose their last lines.','الملفات غير المغلقة قد تفقد أسطرها الأخيرة.']],[['To delete the file','لحذف الملف'],['It is not needed','لا حاجة']]),
  Q('Which format do you use to pass an error table to Python?','أي صيغة تستخدم لنقل جدول أخطاء إلى Python؟','$ CSV',[['``numpy.loadtxt`` reads it directly.','``numpy.loadtxt`` تقرؤه مباشرة.']],['$ .fig','$ .mlx','$ .p']),
]);

lesson('506',97,[
  ['Translating a Mathematica notebook into MATLAB, the main correspondences:','ترجمة دفتر Mathematica إلى MATLAB، والمقابلات الأساسية:'],
  '$ Table[f[k], {k, 0, n}]     →  arrayfun(@f, 0:n)   or a vectorized f(0:n)\nLegendreP[n, x]             →  legendreP(n, x)  or the recurrence\nNIntegrate[f, {x, a, b}]    →  integral(f, a, b)\nLinearSolve[A, b]           →  A \\ b\nKroneckerProduct[A, B]      →  kron(A, B)\nFlatten[Transpose[Y]]       →  Y(:)\nm[[i, j]]                   →  m(i, j)        (both from 1)',
  ['Both languages index from 1, so indices carry over unchanged. The traps: ``1/3`` is exact in Mathematica and a double in MATLAB; Mathematica’s rules (``/.``) become function handles or ``subs``; and MATLAB stores matrices column by column, which is exactly the `vec` of the Kronecker identity.','واللغتان تفهرسان من 1 فتنتقل الفهارس دون تغيير. والفخاخ: ``1/3`` مضبوط في Mathematica وعدد مزدوج في MATLAB، وقواعد Mathematica (``/.``) تصبح مقابض دوال أو ``subs``، و MATLAB يخزن المصفوفات عموداً عموداً وهذا هو `vec` في متطابقة كرونيكر بالضبط.'],
],[
  Q('Translate ``Table[k^2, {k, 1, 4}]``.','ترجم ``Table[k^2, {k, 1, 4}]``.','$ (1:4).^2',[['Vectorized; the dot is needed.','متجهية، والنقطة لازمة.']],['$ (1:4)^2','$ table(k^2, 1, 4)','$ [k^2 for k = 1:4]']),
  Q('The Mathematica entry ``m[[3, 2]]`` becomes what in MATLAB?','العنصر ``m[[3, 2]]`` في Mathematica يصبح ماذا في MATLAB؟','$ m(3, 2)',[['Both index from 1.','الاثنتان تفهرسان من 1.']],['$ m(2, 1)','$ m[3, 2]','$ m{3, 2}']),
  Q('Translate ``Flatten[Transpose[Y]]``.','ترجم ``Flatten[Transpose[Y]]``.','$ Y(:)',[['Column stacking is MATLAB’s natural order.','رص الأعمدة هو الترتيب الطبيعي في MATLAB.']],['$ Y.\'(:)','$ reshape(Y\', 1, [])','$ flatten(Y)']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1 3 2 4]',[['``Y(:)`` stacks the columns, as ``Flatten[Transpose[Y]]`` does.','``Y(:)`` ترص الأعمدة كما تفعل ``Flatten[Transpose[Y]]``.']],['$ [1 2 3 4]','$ [4 3 2 1]','$ [1 3;2 4]'],'Y = [1 2; 3 4];\ndisp(mat2str(Y(:).\'))'),
]);

lesson('506',98,[
  ['GNU Octave is a free program that runs most MATLAB code unchanged. Writing code that runs in both:','GNU Octave برنامج مجاني يشغّل معظم كود MATLAB دون تغيير. ولكتابة كود يعمل في الاثنين:'],
  '$ % portable                   % Octave only (avoid)\nfprintf("%d\\n", n)          % printf("%d\\n", n)\n% comment                   # comment\nend                         % endfunction, endif, endfor\nx = x + 1;                  % x += 1;\n% functions in a script file need the line  1;  at the top in Octave',
  ['The numerical core (matrices, backslash, eig, ode45, integral, sparse) works in both. Missing or different in Octave: some toolboxes (Symbolic needs the ``symbolic`` package), ``tiledlayout``, ``bvp4c``, ``pdepe``, and parts of the graphics. Every numerical answer in this course was checked in Octave.','والنواة العددية (المصفوفات والشرطة العكسية و eig و ode45 و integral والمتفرقة) تعمل في الاثنين. والناقص أو المختلف في Octave: بعض الصناديق (الرمزي يحتاج حزمة ``symbolic``)، و ``tiledlayout`` و ``bvp4c`` و ``pdepe`` وأجزاء من الرسم. وكل جواب عددي في هذا المقرر فُحص في Octave.'],
],[
  Q('Which comment character works in both MATLAB and Octave?','أي حرف تعليق يعمل في MATLAB و Octave معاً؟','$ %',[['``#`` is Octave only.','``#`` خاص بـ Octave.']],['$ #','$ //','$ --']),
  Q('Which block ending works in both?','أي نهاية كتلة تعمل في الاثنين؟','$ end',[['``endif``, ``endfor``, ``endfunction`` are Octave only.','``endif`` و ``endfor`` و ``endfunction`` خاصة بـ Octave.']],['$ endif','$ endfunction','$ fi']),
  Q('Is ``x += 1`` portable MATLAB?','هل ``x += 1`` كود MATLAB محمول؟',['No: write ``x = x + 1``','لا: اكتب ``x = x + 1``'],[['Octave accepts both.','Octave يقبل الاثنين.']],[['Yes','نعم'],['Only in scripts','في الملفات النصية فقط']]),
  Q('What does this program display, in both MATLAB and Octave?','ماذا يعرض هذا البرنامج في MATLAB و Octave معاً؟','$ 0.8 1.4',[['The numerical core is the same.','النواة العددية واحدة.']],['$ 1.4 0.8','$ 3 5','$ Error'],'A = [2 1; 1 3];\nfprintf("%g %g\\n", A \\ [3; 5])'),
]);

lesson('506',99,[
  ['Reproducing a table: run with the paper’s parameters, print in the same format, and compare digit by digit. For Example 1 (exact solution `t^3x^2(1 − x)^2e^x`, ν = 1.9, λ = 1/2) the notebook rerun gives `2.5865 × 10^{−9}` at N = M = 10, Table 1 prints `2.59 × 10^{−9}`:','إعادة إنتاج جدول: شغّل بوسائط البحث واطبع بالصيغة نفسها وقارن رقماً برقم. للمثال 1 (الحل المضبوط `t^3x^2(1 − x)^2e^x` و ν = 1.9 و λ = 1/2) تعطي إعادة تشغيل الدفتر `2.5865 × 10^{−9}` عند N = M = 10، ويطبع الجدول 1 القيمة `2.59 × 10^{−9}`:'],
  '$ fprintf("%% MATLAB %s, lam = %g, nu = %g\\n", version, lam, nu);\nfprintf("%4s %10s %9s\\n", "N", "error", "time");\nfor N = 4:2:12\n    tic;  e = run_error(N);  dt = toc;\n    fprintf("%4d %10.2e %9.3f\\n", N, e, dt);\nend',
  ['A difference in the last printed digit is rounding; a constant factor points to a different detail of the scheme, for example h evaluated at the points instead of projected.','والاختلاف في آخر رقم مطبوع تقريب، والعامل الثابت يدل على تفصيل مختلف في الطريقة، مثل حساب h عند النقاط بدل إسقاطها.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 10   2.59e-09',[['Width 4 for N, scientific format with 2 decimals for the error.','عرض 4 لـ N والصيغة العلمية برقمين عشريين للخطأ.']],['$ 10 2.5865e-09','$ 10   0.00','$ 10 2.6e-9'],'fprintf("%4d %10.2e\\n", 10, 2.5865e-9)'),
  Q('Why is Example 1 exact in time for M ≥ 6 with λ = 1/2?','لماذا يكون المثال 1 مضبوطاً في الزمن عند M ≥ 6 مع λ = 1/2؟','t^3 = s^6',['s = t^{1/2}'],['t^3 = s^3','t^3 = s^{3/2}','t^3 = s^{12}']),
  Q('Your error is `3.55 × 10^{−11}` and the paper’s `2.50 × 10^{−12}`. What is the factor?','خطؤك `3.55 × 10^{−11}` وخطأ البحث `2.50 × 10^{−12}`. ما العامل؟','≈ 14',['#f{35.5}{2.5}'],['≈ 1.4','≈ 140','≈ 10']),
  Q('Why print the version and the parameters at the top?','لماذا تُطبع الإصدارة والوسائط في الأعلى؟',['So that the run can be repeated exactly','حتى يمكن تكرار التشغيل بالضبط'],[['The output documents itself.','المخرج يوثق نفسه.']],[['For decoration','للزينة'],['MATLAB requires it','يتطلبه MATLAB']]),
]);

lesson('506',100,[
  ['Capstone project: a MATLAB package ``+ml`` for the mapped Legendre method. Requirements: (1) functions ``e_table``, ``d2_matrix``, ``chi_matrix``, ``h_function`` and ``solve`` with help text; (2) tests for the E table, Theorem 3.1 by coefficients, the hand example of Theorem 3.2 and a full solve; (3) the three examples of the paper as structures; (4) a script producing the convergence table and a semilogy figure exported to PDF; (5) a short study of λ, and of double versus ``vpa``, run also in GNU Octave where possible.','المشروع الختامي: حزمة MATLAB باسم ``+ml`` لطريقة ليجندر المحوّلة. المتطلبات: (1) الدوال ``e_table`` و ``d2_matrix`` و ``chi_matrix`` و ``h_function`` و ``solve`` مع نص المساعدة، (2) اختبارات لجدول E والنظرية 3.1 بالمعاملات والمثال اليدوي للنظرية 3.2 وحل كامل، (3) أمثلة البحث الثلاثة هياكلَ، (4) ملف ينتج جدول التقارب وشكل semilogy مصدَّراً إلى PDF، (5) دراسة قصيرة لـ λ وللدقة المزدوجة مقابل ``vpa``، تُشغَّل أيضاً في GNU Octave حيث أمكن.'],
  'y = t^{1+ν_1+ν_2} sin x,     ν_1 + ν_2 = 2.9   ⇒   y = t^{3.9} sin x',
  ['This is Example 2 of the paper, the hardest test: with λ = 1/2, `t^{3.9} = s^{7.8}` is not a polynomial in s. Report how the error depends on λ and M and explain what you see.','وهذا هو المثال 2 في البحث، أصعب اختبار: مع λ = 1/2 تكون `t^{3.9} = s^{7.8}` ليست كثيرة حدود في s. قدّم كيف يعتمد الخطأ على λ و M وفسّر ما تراه.'],
],[
  Q('Which λ ≤ 1 makes `t^{3.9}` equal to `s^4`?','أي λ ≤ 1 تجعل `t^{3.9}` تساوي `s^4`؟','λ = 0.975',['#f{3.9}{4}'],['λ = 0.5','λ = 0.39','λ = 1']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 7.8 4',[['The power of s for λ = 0.5 and λ = 0.975.','قوة s عند λ = 0.5 و λ = 0.975.']],['$ 3.9 3.9','$ 4 7.8','$ 1.95 3.8'],'fprintf("%g %g\\n", 3.9/0.5, round(3.9/0.975*1e10)/1e10)'),
  Q('How should the three examples be stored for the solver?','كيف تُخزَّن الأمثلة الثلاثة للحلّال؟',['As structures with fields such as exact, orders, gam and lam','هياكلَ بحقول مثل exact و orders و gam و lam'],[['The solver then stays the same for every example.','فيبقى الحلّال كما هو لكل مثال.']],[['As separate copies of the solver','نسخاً منفصلة من الحلّال'],['As global variables','متغيرات عامة']]),
  Q('Why run the tests in GNU Octave as well?','لماذا تُشغَّل الاختبارات في GNU Octave أيضاً؟',['It shows that the numerical core is portable and lets others reproduce it without a licence','تُظهر أن النواة العددية محمولة وتسمح للآخرين بإعادة الإنتاج دون ترخيص'],[['Symbolic parts may need the Octave symbolic package.','الأجزاء الرمزية قد تحتاج حزمة symbolic في Octave.']],[['Octave is faster','Octave أسرع'],['MATLAB cannot run tests','MATLAB لا يشغّل الاختبارات']]),
]);

export const MS506 = true;
