/* MATH/COMP 505 — the course's road map (10 units × 10 lessons) and its lessons. The authoring markup is described in mscore.js. */
import { course, lesson, Q } from './mscore.js';

/* ---------------- 505: Python ---------------- */
course('505','COMP 505','Python','بايثون (505 حسب)',`
# Unit 1 · First steps | الوحدة 1 · الخطوات الأولى
Running Python and the print function | تشغيل بايثون ودالة print
Numbers and arithmetic | الأعداد والعمليات الحسابية
Variables and types | المتغيرات والأنواع
Strings | النصوص
Lists | القوائم
Conditions: if, elif, else | الشروط: if و elif و else
Loops: for and range | الحلقات: for و range
Loops: while, break and continue | الحلقات: while و break و continue
Functions: def and return | الدوال: def و return
Reading error messages | قراءة رسائل الخطأ
# Unit 2 · Data structures and style | الوحدة 2 · هياكل البيانات والأسلوب
Tuples and unpacking | الصفوف (tuples) والتفكيك
Dictionaries | القواميس
Sets | المجموعات
List comprehensions | القوائم المختصرة (comprehensions)
Functions: default and keyword arguments | الدوال: القيم الافتراضية والمتغيرات المسماة
Lambda functions | دوال lambda
Modules and import: math | الوحدات و import: مكتبة math
Reading and writing files | قراءة الملفات وكتابتها
Exceptions: try and except | الاستثناءات: try و except
Clean code: names, docstrings and PEP 8 | الكود النظيف: الأسماء والتوثيق و PEP 8
# Unit 3 · NumPy | الوحدة 3 · مكتبة NumPy
Arrays: creating and inspecting | المصفوفات: الإنشاء والفحص
arange, linspace, zeros, ones, eye | arange و linspace و zeros و ones و eye
Indexing and slicing | الفهرسة والتقطيع
Element-wise operations and broadcasting | العمليات عنصراً بعنصر والبث (broadcasting)
Vectorization instead of loops | المعالجة المتجهية بدل الحلقات
Mathematical functions on arrays | الدوال الرياضية على المصفوفات
Sums, means and cumulative operations | المجاميع والمتوسطات والعمليات التراكمية
Boolean masks | الأقنعة المنطقية
Reshaping and stacking | تغيير الشكل والرص
Floating-point numbers and rounding error | الأعداد العشرية العائمة وخطأ التقريب
# Unit 4 · Plotting with Matplotlib | الوحدة 4 · الرسم بـ Matplotlib
A first plot | الرسم الأول
Labels, legends and styles | العناوين والمفاتيح والأنماط
Several curves and subplots | عدة منحنيات واللوحات الفرعية
Logarithmic axes for errors: semilogy | المحاور اللوغاريتمية للأخطاء: semilogy
Scatter plots and markers | الرسوم النقطية والعلامات
Surfaces and contour plots | السطوح وخطوط الكنتور
Heat maps of a matrix: imshow and spy | الخرائط الحرارية لمصفوفة: imshow و spy
Arabic and mathematical text in figures | النص العربي والرياضي في الأشكال
Saving figures for a paper | حفظ الأشكال لبحث علمي
Convergence plots: the standard figure | رسوم التقارب: الشكل القياسي
# Unit 5 · Linear algebra | الوحدة 5 · الجبر الخطي
Matrices and the @ operator | المصفوفات والعامل @
Solving linear systems: np.linalg.solve | حل النظم الخطية: np.linalg.solve
Determinants, inverses and why to avoid them | المحددات والمعكوسات ولماذا نتجنبها
Eigenvalues and eigenvectors | القيم والمتجهات الذاتية
Norms and condition numbers | المعايير وأعداد الشرط
LU, QR and Cholesky with SciPy | LU و QR و Cholesky بـ SciPy
Least squares | المربعات الصغرى
Sparse matrices: scipy.sparse | المصفوفات المتفرقة: scipy.sparse
Kronecker products and matrix equations | حواصل ضرب كرونكر والمعادلات المصفوفية
Building a matrix from a formula | بناء مصفوفة من قانون
# Unit 6 · SymPy | الوحدة 6 · مكتبة SymPy
Symbols and expressions | الرموز والمقادير
Exact numbers: Rational and sqrt | الأعداد المضبوطة: Rational و sqrt
Simplify, expand and factor | simplify و expand و factor
Derivatives and integrals | المشتقات والتكاملات
Solving equations | حل المعادلات
Series and limits | المتسلسلات والنهايات
Special functions: gamma, beta, legendre, jacobi | الدوال الخاصة: gamma و beta و legendre و jacobi
Matrices in SymPy | المصفوفات في SymPy
lambdify: from symbols to fast numbers | lambdify: من الرموز إلى أعداد سريعة
Checking a formula exactly before coding it | التحقق من قانون بالضبط قبل برمجته
# Unit 7 · SciPy | الوحدة 7 · مكتبة SciPy
scipy.special: gamma, beta and orthogonal polynomials | scipy.special: gamma و beta وكثيرات الحدود المتعامدة
Evaluating Legendre and Jacobi polynomials | حساب كثيرات حدود ليجندر وجاكوبي
Gauss nodes and weights: roots_legendre, roots_jacobi | عقد جاوس وأوزانه: roots_legendre و roots_jacobi
Numerical integration: quad | التكامل العددي: quad
Root finding: brentq and fsolve | إيجاد الجذور: brentq و fsolve
Interpolation | الاستكمال
Initial-value problems: solve_ivp | مسائل القيمة الابتدائية: solve_ivp
Boundary-value problems: solve_bvp | مسائل القيم الحدية: solve_bvp
Optimization: minimize | الأمثلية: minimize
The Mittag-Leffler function in Python | دالة ميتاج–ليفلر في بايثون
# Unit 8 · Numerical methods from scratch | الوحدة 8 · الطرق العددية من الصفر
Bonnet's recurrence for P_n(x) | علاقة بونيه لحساب P_n(x)
Newton's method for the zeros of P_n | طريقة نيوتن لجذور P_n
The Golub–Welsch method | طريقة Golub–Welsch
The barycentric formula | الصيغة الباريسنترية
Differentiation matrices | مصفوفات التفاضل
Finite differences for a boundary-value problem | الفروق المحدودة لمسألة قيم حدية
Collocation for a boundary-value problem | طريقة التجميع لمسألة قيم حدية
Galerkin with φ_k = P_k − P_{k+2} | جاليركن بالأساس φ_k = P_k − P_{k+2}
The Tau method | طريقة تاو
Measuring errors and convergence rates | قياس الأخطاء ومعدلات التقارب
# Unit 9 · Fractional and spectral computing | الوحدة 9 · الحساب الكسري والطيفي
D^{−μ} of a power and of a polynomial | D^{−μ} لقوة ولكثيرة حدود
The coefficients E_{n,r} of the fractional Legendre functions | المعاملات E_{n,r} لدوال ليجندر الكسرية
Coding Theorem 3.1: the matrix D^{(2)} | برمجة النظرية 3.1: المصفوفة D^{(2)}
Coding Theorem 3.2: the matrix χ_{−μ}^λ | برمجة النظرية 3.2: المصفوفة χ_{−μ}^λ
Reproducing the hand example of Theorem 3.2 | إعادة إنتاج المثال اليدوي للنظرية 3.2
Solving D^α y = −y in integrated form | حل D^α y = −y بالصيغة التكاملية
Mapped collocation points t_i = s_i^{1/λ} | نقاط التجميع المحولة t_i = s_i^{1/λ}
A time-fractional diffusion problem | مسألة انتشار كسرية زمنية
The matrix equation for 𝒴 and its solution | المعادلة المصفوفية لـ 𝒴 وحلها
High precision with mpmath | الدقة العالية بمكتبة mpmath
# Unit 10 · Mastery | الوحدة 10 · الاحتراف
Classes and objects | الأصناف والكائنات
Organizing a project into modules | تنظيم المشروع في وحدات
Testing with pytest | الاختبار بـ pytest
Profiling: where the time goes | قياس الأداء: أين يذهب الوقت
Speed: vectorization and Numba | السرعة: المعالجة المتجهية و Numba
Jupyter notebooks and reproducible research | دفاتر Jupyter والبحث القابل لإعادة الإنتاج
Version control with Git | إدارة النسخ بـ Git
Translating a Mathematica notebook into Python | ترجمة دفتر Mathematica إلى بايثون
Reproducing the tables of a research paper | إعادة إنتاج جداول بحث علمي
Capstone project | مشروع ختامي
`);

lesson('505',1,[
  ['Python runs your instructions one line after another. You can type them in an interactive window (the prompt ``>>>``), in a Jupyter notebook cell, or save them in a file ``name.py`` and run the file.',
   'ينفذ بايثون تعليماتك سطراً بعد سطر. تكتبها في نافذة تفاعلية (المحث ``>>>``) أو في خلية دفتر Jupyter أو تحفظها في ملف ``name.py`` وتشغله.'],
  '$ print(2 + 3*4)        # 14\nprint("Hello")        # Hello',
  ['``print`` shows a value on the screen. Text goes between quotes; without quotes Python computes. Several values separated by commas are printed with spaces between them. Everything after ``#`` on a line is a comment.',
   '``print`` تعرض قيمة على الشاشة. النص يوضع بين علامتي تنصيص، ودونهما يحسب بايثون. وعدة قيم بينها فواصل تُطبع وبينها مسافات. وكل ما بعد ``#`` في السطر تعليق.'],
  ['Python is case-sensitive, and the spaces at the start of a line (indentation) are part of the language, so never start a line with extra spaces.',
   'وبايثون حساس لحالة الحرف، والمسافات في أول السطر (الإزاحة) جزء من اللغة، فلا تبدأ سطراً بمسافات زائدة.'],
],[
  Q('What does ``print(2 + 3*4)`` display?','ماذا يعرض ``print(2 + 3*4)``؟','$ 14',[['Multiplication first:','الضرب أولاً:'], '2 + 12 = 14'],['$ 20','$ 2 + 3*4','$ 24']),
  Q('What does ``print("2 + 3")`` display?','ماذا يعرض ``print("2 + 3")``؟','$ 2 + 3',
    [['The quotes make it text, so nothing is computed.','علامتا التنصيص تجعلانه نصاً فلا يُحسب شيء.']],['$ 5','$ "2 + 3"','$ 23']),
  Q('What does ``print(10 - 4, 10 / 4)`` display?','ماذا يعرض ``print(10 - 4, 10 / 4)``؟','$ 6 2.5',
    [['Two values, printed with one space between them. Division ``/`` always gives a decimal number.','قيمتان تُطبعان وبينهما مسافة. والقسمة ``/`` تعطي عدداً عشرياً دائماً.']],['$ 6, 2.5','$ 6 2','$ (6, 2.5)']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ Hi there',
    [['The first line is a comment and is ignored. The two texts are printed with a space between them.','السطر الأول تعليق فيُهمل. والنصان يُطبعان وبينهما مسافة.']],['$ Hithere','$ # greeting Hi there','$ Hi, there'],'# greeting\nprint("Hi", "there")'),
]);

lesson('505',2,[
  ['Python has integers (``int``), decimal numbers (``float``) and complex numbers. The arithmetic operators are:','في بايثون أعداد صحيحة (``int``) وعشرية (``float``) ومركبة. والعمليات الحسابية هي:'],
  '$ 7 + 2     # 9          7 - 2    # 5\n7 * 2     # 14         7 / 2    # 3.5   (true division)\n7 // 2    # 3   (floor division)      7 % 2    # 1   (remainder)\n2 ** 10   # 1024   (power, not ^)',
  ['Integers are exact and can be as large as you like. Floats carry about 16 digits, so decimal fractions are stored approximately:','الأعداد الصحيحة مضبوطة ومهما كبرت. والعشرية تحمل نحو 16 رقماً، فالكسور العشرية تُخزَّن تقريبياً:'],
  '$ 0.1 + 0.2          # 0.30000000000000004',
  ['This is not a bug; it is how every numerical program works. It is why we never test floats with ``==`` and why errors near `10^{−16}` mean «exact to machine precision».',
   'وهذا ليس عيباً بل طريقة عمل كل برنامج عددي. ولهذا لا نختبر الأعداد العشرية بـ ``==``، ولهذا الخطأ القريب من `10^{−16}` يعني «مضبوط بدقة الآلة».'],
],[
  Q('What are the values of ``7 // 2``, ``7 % 2`` and ``7 / 2``?','ما قيم ``7 // 2`` و ``7 % 2`` و ``7 / 2``؟','$ 3, 1, 3.5',['7 = 3·2 + 1', ['Quotient 3, remainder 1, and true division 3.5.','خارج القسمة 3 والباقي 1 والقسمة الحقيقية 3.5.']],['$ 3.5, 1, 3','$ 3, 0.5, 3.5','$ 4, 1, 3.5']),
  Q('What is the value of ``2 ** 10``? And of ``2 ^ 10``?','ما قيمة ``2 ** 10``؟ وما قيمة ``2 ^ 10``؟','$ 1024 and 8',
    ['2^{10} = 1024', ['In Python ``^`` is not a power: it is the bitwise «exclusive or», and `0010 ⊕ 1010 = 1000` in binary, which is 8. Always write ``**``.','في بايثون ``^`` ليست أساً: هي «أو الحصرية» على البتات، و `0010 ⊕ 1010 = 1000` بالنظام الثنائي أي 8. فاكتب ``**`` دائماً.']],['$ 1024 and 1024','$ 20 and 1024','$ 1024 and 100']),
  Q('What is the value of ``-7 // 2``?','ما قيمة ``-7 // 2``؟','$ -4',
    [['Floor division rounds down, toward `−∞`, not toward zero:','القسمة الصحيحة تقرّب إلى الأسفل نحو `−∞` لا نحو الصفر:'], '−3.5  →  −4'],['$ -3','$ -3.5','$ 3']),
  Q('What does ``print(0.1 + 0.2 == 0.3)`` display, and how should the test be written?','ماذا يعرض ``print(0.1 + 0.2 == 0.3)`` وكيف يُكتب الاختبار؟','$ False',
    [['The sum is 0.30000000000000004. Compare with a tolerance instead:','المجموع 0.30000000000000004. فنقارن بسماحية:'], '$ abs(0.1 + 0.2 - 0.3) < 1e-12     # True'],['$ True','$ 0.3','$ Error']),
]);

lesson('505',3,[
  ['A variable is a name attached to a value by ``=``. You do not declare its type; the value decides it, and ``type()`` tells you what it is.',
   'المتغير اسم يُربط بقيمة بواسطة ``=``. لا تعلن نوعه، فالقيمة تحدده، و ``type()`` تخبرك به.'],
  '$ n = 5            # int\nx = 2.5          # float\nname = "Jacobi"  # str\nok = True        # bool',
  ['``=`` assigns and ``==`` compares. ``x = x + 1`` is not an equation: it computes the right side, then stores it under the name x (shorthand ``x += 1``).',
   '``=`` تُسند و ``==`` تقارن. و ``x = x + 1`` ليست معادلة: يُحسب الطرف الأيمن ثم يُخزَّن بالاسم x (واختصاره ``x += 1``).'],
  ['Convert between types with ``int()``, ``float()`` and ``str()``. To put numbers inside text, use an f-string: ``f"{x:.2f}"`` writes x with 2 decimals.',
   'حوّل بين الأنواع بـ ``int()`` و ``float()`` و ``str()``. ولوضع أعداد داخل نص استخدم النص المنسق: ``f"{x:.2f}"`` تكتب x برقمين عشريين.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 7',[['x starts at 5, then 2 is added and the result is stored back in x.','x تبدأ بـ 5 ثم يُضاف 2 وتُخزَّن النتيجة في x.']],['$ 5','$ 52','$ x + 2'],'x = 5\nx += 2\nprint(x)'),
  Q('What are the values of ``int("12") + 3`` and ``"12" + "3"``?','ما قيمتا ``int("12") + 3`` و ``"12" + "3"``؟',"$ 15 and '123'",
    [['``int("12")`` is the number 12. For two texts, ``+`` joins them.','``int("12")`` هو العدد 12. وبين نصين ``+`` تضمهما.']],["$ 15 and 15","$ '123' and '123'","$ 15 and Error"]),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2 1',
    [['The right side `(b, a) = (2, 1)` is built first, then unpacked into a and b: the values are swapped without a third variable.','يُبنى الطرف الأيمن `(b, a) = (2, 1)` أولاً ثم يُفك في a و b: تُبدَّل القيمتان دون متغير ثالث.']],['$ 1 2','$ 2 2','$ 1 1'],'a, b = 1, 2\na, b = b, a\nprint(a, b)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ error = 3.14',
    [['``{e:.2f}`` writes e as a decimal number with 2 digits after the point.','``{e:.2f}`` تكتب e عدداً عشرياً برقمين بعد الفاصلة.']],['$ error = 3.14159','$ error = {e:.2f}','$ error = 3.1'],'e = 3.14159\nprint(f"error = {e:.2f}")'),
]);

lesson('505',4,[
  ['A string is a sequence of characters between quotes. Its characters are numbered from 0, and negative numbers count from the end:',
   'النص متتالية حروف بين علامتي تنصيص. وحروفه مرقمة من 0، والأرقام السالبة تعدّ من النهاية:'],
  '$ s = "spectral"\ns[0]      # \'s\'        s[-1]     # \'l\'\ns[2:5]    # \'ect\'      len(s)    # 8',
  ['A slice ``s[a:b]`` starts at index a and stops before b, so it has `b − a` characters. This «start at 0, stop before the end» rule is the same for lists and NumPy arrays, so learn it once here.',
   'المقطع ``s[a:b]`` يبدأ عند الفهرس a ويقف قبل b فطوله `b − a` حرفاً. وقاعدة «ابدأ من 0 وقف قبل النهاية» نفسها للقوائم ومصفوفات NumPy، فتعلّمها هنا مرة واحدة.'],
  ['Strings cannot be changed in place; methods such as ``s.upper()`` and ``s.replace(a, b)`` return a new string.','والنصوص لا تُعدَّل في مكانها؛ الدوال مثل ``s.upper()`` و ``s.replace(a, b)`` تعيد نصاً جديداً.'],
],[
  Q('For ``s = "spectral"`` what are ``s[0]``, ``s[-1]`` and ``s[2:5]``?','للنص ``s = "spectral"`` ما قيم ``s[0]`` و ``s[-1]`` و ``s[2:5]``؟',"$ 's', 'l', 'ect'",
    [['Indices: s=0, p=1, e=2, c=3, t=4, r=5, a=6, l=7. The slice takes indices 2, 3, 4.','الفهارس: s=0 و p=1 و e=2 و c=3 و t=4 و r=5 و a=6 و l=7. والمقطع يأخذ الفهارس 2 و 3 و 4.']],["$ 'p', 'l', 'pec'","$ 's', 'a', 'ectr'","$ 's', 'l', 'ectr'"]),
  Q('What is ``s[::-1]`` for ``s = "spectral"``?','ما قيمة ``s[::-1]`` للنص ``s = "spectral"``؟',"$ 'lartceps'",
    [['A step of −1 walks through the string backwards.','الخطوة −1 تمر على النص بالعكس.']],["$ 'spectral'","$ 'l'","$ 'spectra'"]),
  Q('What are ``"ab" * 3`` and ``"math" in "mathematics"``?','ما قيمتا ``"ab" * 3`` و ``"math" in "mathematics"``؟',"$ 'ababab' and True",
    [['``*`` repeats a string, and ``in`` tests whether one string is inside another.','``*`` تكرر النص و ``in`` تختبر وجود نص داخل آخر.']],["$ 'ab3' and True","$ 'ababab' and False","$ Error and True"]),
  Q('What is ``s.find("t")`` for ``s = "spectral"``, and ``len(s[2:5])``?','ما قيمة ``s.find("t")`` للنص ``s = "spectral"`` وما قيمة ``len(s[2:5])``؟','$ 4 and 3',
    [['The letter t is at index 4, and the slice has `5 − 2 = 3` characters.','الحرف t عند الفهرس 4 والمقطع فيه `5 − 2 = 3` حروف.']],['$ 5 and 3','$ 4 and 4','$ 5 and 4']),
]);

lesson('505',5,[
  ['A list is an ordered collection in square brackets. Unlike a string it can be changed: you can replace, add and remove elements.',
   'القائمة مجموعة مرتبة بين قوسين مربعين. وهي بخلاف النص قابلة للتعديل: تستبدل عناصرها وتضيف وتحذف.'],
  '$ a = [3, 1, 2]\na.append(5)       # a is now [3, 1, 2, 5]\na[0] = 10         # a is now [10, 1, 2, 5]\nlen(a), sum(a)    # (4, 18)',
  ['Indexing and slicing work as for strings. A list comprehension builds a list from a formula in one line, which is how tables of values are made:',
   'والفهرسة والتقطيع كما في النصوص. والقائمة المختصرة تبني قائمة من قانون في سطر واحد، وبها تُصنع جداول القيم:'],
  '$ [k**2 for k in range(5)]      # [0, 1, 4, 9, 16]',
  ['Warning: ``b = a`` does not copy the list. Both names point to the same list, so a change through one is seen through the other. Use ``b = a.copy()`` for a real copy.',
   'تنبيه: ``b = a`` لا تنسخ القائمة. الاسمان يشيران إلى القائمة نفسها، فالتعديل عبر أحدهما يظهر عبر الآخر. استخدم ``b = a.copy()`` لنسخة حقيقية.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1, 2, 3, 5] [3, 1, 2, 5]',
    [['``sorted(a)`` returns a new sorted list and leaves a unchanged.','``sorted(a)`` تعيد قائمة جديدة مرتبة وتترك a كما هي.']],['$ [1, 2, 3, 5] [1, 2, 3, 5]','$ [3, 1, 2, 5] [3, 1, 2, 5]','$ [5, 3, 2, 1] [3, 1, 2, 5]'],'a = [3, 1, 2]\na.append(5)\nprint(sorted(a), a)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 99',
    [['b and a are two names of one list, so changing ``b[0]`` changes ``a[0]``.','b و a اسمان لقائمة واحدة، فتغيير ``b[0]`` يغيّر ``a[0]``.']],['$ 3','$ [99, 1, 2]','$ Error'],'a = [3, 1, 2]\nb = a\nb[0] = 99\nprint(a[0])'),
  Q('What is the value of ``[k**2 for k in range(5)]``?','ما قيمة ``[k**2 for k in range(5)]``؟','$ [0, 1, 4, 9, 16]',
    [['``range(5)`` gives 0, 1, 2, 3, 4 (it stops before 5), and each is squared.','``range(5)`` تعطي 0 و 1 و 2 و 3 و 4 (تقف قبل 5) ويُربَّع كل منها.']],['$ [1, 4, 9, 16, 25]','$ [0, 1, 4, 9, 16, 25]','$ [0, 2, 4, 6, 8]']),
  Q('What are ``sum(range(1, 101))`` and ``len([1, [2, 3], 4])``?','ما قيمتا ``sum(range(1, 101))`` و ``len([1, [2, 3], 4])``؟','$ 5050 and 3',
    ['1 + 2 + ⋯ + 100 = #f{100·101}{2} = 5050', ['The inner list ``[2, 3]`` counts as one element.','القائمة الداخلية ``[2, 3]`` تُعد عنصراً واحداً.']],['$ 5050 and 4','$ 4950 and 3','$ 5151 and 4']),
]);

/* ---- 505 · Unit 1 (lessons 6–10) and Unit 2 (lessons 11–20) ---- */
lesson('505',6,[
  ['``if`` runs a block only when its condition is true; ``elif`` and ``else`` give the other cases. The block is marked by indentation (four spaces) after a colon:','``if`` تنفذ كتلة فقط عندما يكون شرطها صحيحاً، و ``elif`` و ``else`` تعطيان الحالات الأخرى. وتُحدَّد الكتلة بالإزاحة (أربع مسافات) بعد النقطتين:'],
  '$ x = -3\nif x > 0:\n    sign = 1\nelif x == 0:\n    sign = 0\nelse:\n    sign = -1\nprint(sign)       # -1',
  ['Conditions combine with ``and``, ``or`` and ``not``, and comparisons can be chained: ``0 <= t <= 1``. Only the first true branch runs.','وتتحد الشروط بـ ``and`` و ``or`` و ``not``، ويمكن تسلسل المقارنات: ``0 <= t <= 1``. ولا يُنفَّذ إلا أول فرع صحيح.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ B',[['The first condition is false, the second true; the else is skipped.','الشرط الأول خاطئ والثاني صحيح، ويُتجاوز else.']],['$ A','$ C','$ B C'],'score = 75\nif score >= 90:\n    print("A")\nelif score >= 70:\n    print("B")\nelse:\n    print("C")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True False',[['Chained comparison: `0 ≤ 0.5 ≤ 1`, but 1.5 is outside.','مقارنة متسلسلة: `0 ≤ 0.5 ≤ 1` أما 1.5 فخارج المجال.']],['$ True True','$ False False','$ False True'],'t = 0.5\nprint(0 <= t <= 1, 0 <= t + 1 <= 1)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ even',[['`10 % 2 = 0`.','`10 % 2 = 0`.']],['$ odd','$ 0','$ even odd'],'n = 10\nprint("even" if n % 2 == 0 else "odd")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ small',[['Both conditions hold, but only the first true branch runs.','الشرطان صحيحان لكن لا يُنفَّذ إلا أول فرع صحيح.']],['$ small medium','$ medium','$ nothing'],'x = 3\nif x < 5:\n    print("small")\nelif x < 10:\n    print("medium")'),
]);

lesson('505',7,[
  ['``for`` repeats a block for each element of a sequence. ``range(a, b, step)`` gives the integers from a up to, but not including, b:','``for`` تكرر كتلة لكل عنصر في متتالية. و ``range(a, b, step)`` تعطي الأعداد الصحيحة من a حتى b دون أن تشملها:'],
  '$ for k in range(3):\n    print(k)          # 0, 1, 2 on separate lines\ntotal = 0\nfor k in range(1, 11):\n    total += k\nprint(total)          # 55',
  ['``range(n)`` has exactly n values, 0 to n − 1, which matches the index of a list of length n. ``enumerate`` gives index and value together, ``zip`` walks through two lists side by side.','و ``range(n)`` فيها n قيمة بالضبط من 0 إلى n − 1، وهذا يطابق فهارس قائمة طولها n. و ``enumerate`` تعطي الفهرس والقيمة معاً، و ``zip`` تمر على قائمتين جنباً إلى جنب.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [2, 5, 8]',[['Start 2, step 3, stop before 10.','البداية 2 والخطوة 3 والتوقف قبل 10.']],['$ [2, 5, 8, 11]','$ [2, 3, 4, 5, 6, 7, 8, 9]','$ [3, 6, 9]'],'print(list(range(2, 10, 3)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 120',['5! = 1·2·3·4·5'],['$ 24','$ 15','$ 720'],'p = 1\nfor k in range(1, 6):\n    p *= k\nprint(p)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0:a 1:b 2:c',[['enumerate gives the pairs (0, a), (1, b), (2, c); ``end=" "`` keeps them on one line.','enumerate تعطي الأزواج (0, a) و (1, b) و (2, c)، و ``end=" "`` تبقيها في سطر واحد.']],['$ 1:a 2:b 3:c','$ a:0 b:1 c:2','$ 0:a1:b2:c'],'for i, c in enumerate("abc"):\n    print(f"{i}:{c}", end=" ")'),
  Q('Compute `Σ_{i} w_i x_i^2` for the 2-point Gauss rule (`w = 1, 1`, `x = ±0.57735`).','احسب `Σ_{i} w_i x_i^2` لقاعدة جاوس ذات النقطتين (`w = 1, 1` و `x = ±0.57735`).','$ 0.6667',['1·#f{1}{3} + 1·#f{1}{3} = #f{2}{3}',['Exact `∫_{−1}^{1} x^2 dx = 2/3`.','بالضبط `∫_{−1}^{1} x^2 dx = 2/3`.']],['$ 0.3333','$ 1.1547','$ 2.0'],'x = [-0.5773502692, 0.5773502692]\nw = [1.0, 1.0]\ns = 0\nfor xi, wi in zip(x, w):\n    s += wi * xi**2\nprint(round(s, 4))'),
]);

lesson('505',8,[
  ['``while`` repeats as long as its condition is true; ``break`` leaves the loop at once and ``continue`` jumps to the next round:','``while`` تكرر ما دام شرطها صحيحاً، و ``break`` تخرج من الحلقة فوراً، و ``continue`` تقفز إلى الدورة التالية:'],
  '$ x = 1.0\nwhile x > 1e-3:\n    x /= 2\nprint(x)          # 0.0009765625',
  ['A while loop is the natural form of an iteration that stops on a tolerance, such as Newton’s method. Always make sure the condition eventually becomes false, or add a maximum number of steps.','وحلقة while هي الصورة الطبيعية لتكرار يتوقف عند سماحية، مثل طريقة نيوتن. وتأكد دائماً أن الشرط سيصبح خاطئاً في النهاية، أو أضف حداً أقصى لعدد الخطوات.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 7',[['`2^7 = 128` is the first power greater than 100.','`2^7 = 128` أول قوة أكبر من 100.']],['$ 6','$ 128','$ 100'],'n = 0\nwhile 2**n <= 100:\n    n += 1\nprint(n)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1 3 5',[['``continue`` skips the even numbers; the loop runs k = 0, …, 5.','``continue`` تتجاوز الأعداد الزوجية، والحلقة تمر على k = 0, …, 5.']],['$ 0 2 4','$ 1 3 5 7','$ 0 1 2 3 4 5'],'for k in range(6):\n    if k % 2 == 0:\n        continue\n    print(k, end=" ")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 4',[['The loop stops at the first k with `k^2 > 10`.','تتوقف الحلقة عند أول k يحقق `k^2 > 10`.']],['$ 3','$ 16','$ 10'],'for k in range(1, 100):\n    if k * k > 10:\n        break\nprint(k)'),
  Q('Newton’s method for `#r{2}` stops when the change is below `10^{−12}`. What does the program display?','طريقة نيوتن لـ `#r{2}` تتوقف حين يصبح التغير أقل من `10^{−12}`. ماذا يعرض البرنامج؟','$ 1.414213562373095 6',[['Quadratic convergence: the fifth step already gives all digits, and the sixth confirms that the change is below the tolerance.','تقارب تربيعي: الخطوة الخامسة تعطي كل الأرقام والسادسة تؤكد أن التغير أقل من السماحية.']],['$ 1.414213562373095 50','$ 1.5 1','$ 1.4142 3'],'x, steps = 1.0, 0\nwhile True:\n    new = (x + 2 / x) / 2\n    steps += 1\n    if abs(new - x) < 1e-12:\n        break\n    x = new\nprint(new, steps)'),
]);

lesson('505',9,[
  ['``def`` defines a function; ``return`` sends a value back. A function without return gives ``None``:','``def`` تعرّف دالة و ``return`` تعيد قيمة. والدالة دون return تعطي ``None``:'],
  '$ def legendre2(x):\n    """The Legendre polynomial P_2."""\n    return (3 * x**2 - 1) / 2\n\nprint(legendre2(1.0))    # 1.0',
  ['Variables created inside a function are local and disappear when it returns. A function can return several values as a tuple: ``return a, b``.','والمتغيرات المنشأة داخل الدالة محلية وتختفي عند العودة. ويمكن للدالة أن تعيد عدة قيم صفاً: ``return a, b``.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -0.125',['#f{3(0.25) − 1}{2}'],['$ 0.125','$ -0.5','$ 0.25'],'def p2(x):\n    return (3 * x**2 - 1) / 2\nprint(p2(0.5))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ None',[['The function prints nothing and has no return, so the result is None.','الدالة لا تطبع ولا تعيد شيئاً فالنتيجة None.']],['$ 4','$ 0','$ Error'],'def square(x):\n    y = x * x\nprint(square(2))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2 1',[['Two values are returned and unpacked.','تُعاد قيمتان وتُفكّان.']],['$ (2, 1)','$ 7 3','$ 2'],'def divmod_(a, b):\n    return a // b, a % b\nq, r = divmod_(7, 3)\nprint(q, r)'),
  Q('Write a function for the shifted Legendre polynomial `P_1^*(t) = 2t − 1` and evaluate it at 0.25.','اكتب دالة لكثيرة ليجندر المزاحة `P_1^*(t) = 2t − 1` واحسبها عند 0.25.','$ -0.5',['2(0.25) − 1'],['$ 0.5','$ -0.75','$ 1.5'],'def p1_shifted(t):\n    return 2 * t - 1\nprint(p1_shifted(0.25))'),
]);

lesson('505',10,[
  ['When something goes wrong Python prints a traceback. Read it from the bottom: the last line names the error type and the line above it shows where it happened:','حين يحدث خطأ يطبع بايثون تتبعاً (traceback). اقرأه من الأسفل: السطر الأخير يسمّي نوع الخطأ والسطر الذي فوقه يبيّن مكانه:'],
  '$ Traceback (most recent call last):\n  File "solver.py", line 12, in <module>\n    u = a / b\nZeroDivisionError: division by zero',
  ['The common types: ``NameError`` (unknown name), ``TypeError`` (wrong type, for example text + number), ``IndexError`` (index outside a list), ``ZeroDivisionError``, ``SyntaxError`` and ``IndentationError`` (the code cannot even be read).','الأنواع الشائعة: ``NameError`` (اسم غير معروف)، و ``TypeError`` (نوع خاطئ مثل نص + عدد)، و ``IndexError`` (فهرس خارج القائمة)، و ``ZeroDivisionError``، و ``SyntaxError`` و ``IndentationError`` (لا يمكن حتى قراءة الكود).'],
],[
  Q('Which error does ``[1, 2, 3][3]`` raise?','أي خطأ يسببه ``[1, 2, 3][3]``؟','$ IndexError',[['The indices are 0, 1, 2.','الفهارس 0 و 1 و 2.']],['$ ValueError','$ KeyError','$ TypeError']),
  Q('Which error does ``"N = " + 8`` raise?','أي خطأ يسببه ``"N = " + 8``؟','$ TypeError',[['A string cannot be added to an int; write ``"N = " + str(8)``.','لا يمكن جمع نص وعدد صحيح، فاكتب ``"N = " + str(8)``.']],['$ ValueError','$ NameError','$ SyntaxError']),
  Q('Which error does ``print(nodes)`` raise if nodes was never defined?','أي خطأ يسببه ``print(nodes)`` إذا لم تُعرَّف nodes أبداً؟','$ NameError',[['Often a typing mistake in the name.','غالباً خطأ في كتابة الاسم.']],['$ IndexError','$ ImportError','$ AttributeError']),
  Q('Where do you look first in a traceback?','أين تنظر أولاً في التتبع؟',['At the last line: the error type and message, then the line just above it','في السطر الأخير: نوع الخطأ ورسالته، ثم السطر الذي فوقه مباشرة'],[['The lines above show the chain of calls that led there.','والأسطر الأعلى تبيّن سلسلة الاستدعاءات التي أدت إليه.']],[['At the first line','في السطر الأول'],['Only at the file name','في اسم الملف فقط']]),
]);

lesson('505',11,[
  ['A tuple is like a list but cannot be changed. It is written with round brackets, or just commas, and is unpacked into several names at once:','الصف (tuple) يشبه القائمة لكنه لا يُعدَّل. يُكتب بأقواس مستديرة أو بفواصل فقط، ويُفك إلى عدة أسماء دفعة واحدة:'],
  '$ point = (0.5, 2.0)\nx, y = point\nnodes, weights = (1, 2, 3), (4, 5, 6)\nfirst, *rest = [1, 2, 3, 4]     # first = 1, rest = [2, 3, 4]',
  ['Functions that return several results, such as ``np.polynomial.legendre.leggauss`` returning nodes and weights, return tuples, so unpacking is everywhere in numerical code.','والدوال التي تعيد عدة نتائج، مثل ``np.polynomial.legendre.leggauss`` التي تعيد العقد والأوزان، تعيد صفوفاً، فالتفكيك موجود في كل كود عددي.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1 [2, 3, 4]',[['The starred name collects the rest as a list.','الاسم ذو النجمة يجمع الباقي في قائمة.']],['$ 1 (2, 3, 4)','$ [1] [2, 3, 4]','$ 1 2'],'first, *rest = [1, 2, 3, 4]\nprint(first, rest)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟',"$ TypeError",[['Tuples cannot be changed.','الصفوف لا تُعدَّل.']],['$ (9, 2)','$ 9','$ None'],'t = (1, 2)\ntry:\n    t[0] = 9\nexcept TypeError:\n    print("TypeError")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ <class \'tuple\'> 1',[['A single element needs a trailing comma.','العنصر الواحد يحتاج فاصلة بعده.']],['$ <class \'int\'> 1','$ <class \'list\'> 1','$ <class \'tuple\'> 0'],'a = (5,)\nprint(type(a), len(a))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3 -1',[['Two values computed and returned as a tuple.','قيمتان تُحسبان وتُعادان صفاً.']],['$ (3, -1)','$ 3','$ -1 3'],'def sum_diff(a, b):\n    return a + b, a - b\ns, d = sum_diff(1, 2)\nprint(s, d)'),
]);

lesson('505',12,[
  ['A dictionary maps keys to values. Look-up by key is fast, and keys must be unchangeable (numbers, strings, tuples):','القاموس يربط مفاتيح بقيم. والبحث بالمفتاح سريع، ويجب أن تكون المفاتيح غير قابلة للتعديل (أعداد ونصوص وصفوف):'],
  '$ params = {"N": 8, "M": 6, "lam": 0.5}\nparams["N"]              # 8\nparams["gam"] = 1.0      # add a key\nparams.get("mu", 1.9)    # 1.9 (default, key absent)\nfor key, value in params.items():\n    print(key, value)',
  ['Dictionaries are the natural way to store the parameters of a problem, or a cache of computed values keyed by n.','والقواميس الطريقة الطبيعية لتخزين وسائط المسألة، أو ذاكرة للقيم المحسوبة مفتاحها n.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 8 None 0.5',[['``get`` returns None (or a default) for a missing key instead of an error.','``get`` تعيد None (أو قيمة افتراضية) للمفتاح المفقود بدل الخطأ.']],['$ 8 0 0.5','$ 8 KeyError 0.5','$ N mu lam'],'p = {"N": 8, "lam": 0.5}\nprint(p["N"], p.get("mu"), p["lam"])'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3',[['Three keys: a, b and the new c.','ثلاثة مفاتيح: a و b و c الجديد.']],['$ 2','$ 6','$ 4'],'d = {"a": 1, "b": 2}\nd["c"] = 3\nprint(len(d))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ {0: 1, 1: 1, 2: 2, 3: 6}',[['A dictionary comprehension from n to n!.','قاموس مختصر من n إلى n!.']],['$ {1: 1, 2: 2, 3: 6}','$ [1, 1, 2, 6]','$ {0: 0, 1: 1, 2: 2, 3: 6}'],'import math\nprint({n: math.factorial(n) for n in range(4)})'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ KeyError',[['Direct indexing with a missing key raises an error.','الفهرسة المباشرة بمفتاح مفقود تسبب خطأ.']],['$ None','$ 0','$ mu'],'p = {"N": 8}\ntry:\n    print(p["mu"])\nexcept KeyError:\n    print("KeyError")'),
]);

lesson('505',13,[
  ['A set is an unordered collection without duplicates, with fast membership tests and the operations of set theory:','المجموعة تجميع غير مرتب دون تكرار، باختبارات انتماء سريعة وعمليات نظرية المجموعات:'],
  '$ a = {1, 2, 3}\nb = {3, 4}\na | b      # {1, 2, 3, 4}  union\na & b      # {3}           intersection\na - b      # {1, 2}        difference\nset([1, 1, 2])   # {1, 2}',
  ['Use a set to remove duplicates or to test membership in a large collection; ``x in s`` is fast for a set and slow for a long list. An empty set is ``set()``, because ``{}`` is an empty dictionary.','استخدم المجموعة لحذف المكرر أو لاختبار الانتماء في تجميع كبير؛ و ``x in s`` سريعة للمجموعة وبطيئة للقائمة الطويلة. والمجموعة الفارغة ``set()`` لأن ``{}`` قاموس فارغ.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3',[['The duplicates collapse to {1, 2, 3}.','المكرر يختزل إلى {1, 2, 3}.']],['$ 6','$ 1','$ 4'],'print(len(set([1, 2, 2, 3, 3, 3])))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1, 2]',[['Elements of a that are not in b.','عناصر a غير الموجودة في b.']],['$ [3]','$ [1, 2, 3, 4]','$ [4]'],'a, b = {1, 2, 3}, {3, 4}\nprint(sorted(a - b))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟',"$ <class 'dict'> <class 'set'>",[['Empty braces make a dictionary.','الأقواس الفارغة تصنع قاموساً.']],["$ <class 'set'> <class 'set'>","$ <class 'dict'> <class 'dict'>","$ <class 'set'> <class 'dict'>"],'print(type({}), type(set()))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [2, 4]',[['The intersection of the even numbers and the numbers below 5.','تقاطع الأعداد الزوجية والأعداد الأقل من 5.']],['$ [0, 2, 4]','$ [2, 4, 6, 8]','$ [1, 2, 3, 4]'],'evens = {2, 4, 6, 8}\nsmall = set(range(1, 5))\nprint(sorted(evens & small))'),
]);

lesson('505',14,[
  ['A list comprehension builds a list from a formula and optional condition in one expression:','القائمة المختصرة تبني قائمة من قانون وشرط اختياري في مقدار واحد:'],
  '$ [k**2 for k in range(6)]               # [0, 1, 4, 9, 16, 25]\n[k for k in range(20) if k % 7 == 0]   # [0, 7, 14]\n[[i * j for j in range(3)] for i in range(2)]   # [[0, 0, 0], [0, 1, 2]]',
  ['Comprehensions are clearer than an empty list plus append in a loop. For numbers, NumPy arrays (Unit 3) are faster still.','والقوائم المختصرة أوضح من قائمة فارغة مع append في حلقة، وللأعداد تكون مصفوفات NumPy (الوحدة 3) أسرع أيضاً.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1, 3, 5, 7, 9]',[['Odd numbers below 10.','الأعداد الفردية الأقل من 10.']],['$ [0, 2, 4, 6, 8]','$ [1, 3, 5, 7]','$ [1, 9, 25, 49, 81]'],'print([k for k in range(10) if k % 2 == 1])'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [[1, 0], [0, 1]]',[['The 2 × 2 identity as nested lists.','المصفوفة المحايدة 2 × 2 قوائمَ متداخلة.']],['$ [[1, 1], [0, 0]]','$ [1, 0, 0, 1]','$ [[0, 1], [1, 0]]'],'print([[1 if i == j else 0 for j in range(2)] for i in range(2)])'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [0.0, 0.25, 0.5, 0.75, 1.0]',[['Five equally spaced points on [0, 1].','خمس نقاط متساوية التباعد على [0, 1].']],['$ [0, 0.25, 0.5, 0.75]','$ [0.25, 0.5, 0.75, 1.0]','$ [0.0, 0.2, 0.4, 0.6, 0.8, 1.0]'],'n = 4\nprint([k / n for k in range(n + 1)])'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1, 1, 1, 1]',[['`P_n(1) = 1` for every n; the values come from Bonnet’s recurrence.','`P_n(1) = 1` لكل n، والقيم من علاقة بونيه.']],['$ [1, 0, 0, 0]','$ [0, 1, 2, 3]','$ [1, -1, 1, -1]'],'def P(n, x):\n    p0, p1 = 1, x\n    if n == 0:\n        return p0\n    for k in range(2, n + 1):\n        p0, p1 = p1, ((2*k - 1) * x * p1 - (k - 1) * p0) / k\n    return p1\nprint([round(P(n, 1.0)) for n in range(4)])'),
]);

lesson('505',15,[
  ['Arguments can have default values and can be passed by name, which makes calls with many parameters readable:','يمكن أن تكون للمتغيرات قيم افتراضية وأن تُمرَّر بالاسم، وهذا يجعل الاستدعاءات ذات الوسائط الكثيرة مقروءة:'],
  '$ def solve(n, m=6, lam=0.5, gam=1.0):\n    ...\nsolve(8)                   # m=6, lam=0.5, gam=1.0\nsolve(8, lam=1/3)          # change only lam',
  ['Never use a mutable object such as a list as a default value: it is created once, when the function is defined, and shared between calls. Use ``None`` and create the list inside.','ولا تستخدم كائناً قابلاً للتعديل مثل القائمة قيمة افتراضية: يُنشأ مرة واحدة عند تعريف الدالة ويُشارك بين الاستدعاءات. استخدم ``None`` وأنشئ القائمة في الداخل.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 8 6 0.25',[['m keeps its default, lam is given by name.','m تبقى بقيمتها الافتراضية و lam تُعطى بالاسم.']],['$ 8 0.25 0.5','$ 8 6 0.5','$ Error'],'def f(n, m=6, lam=0.5):\n    print(n, m, lam)\nf(8, lam=0.25)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1, 2] [1, 2]',[['The default list is created once and shared: both calls return the same list, which holds 1 and 2 when it is printed.','القائمة الافتراضية تُنشأ مرة واحدة وتُشارك: الاستدعاءان يعيدان القائمة نفسها، وفيها 1 و 2 عند الطباعة.']],['$ [1] [2]','$ [1] [1, 2]','$ [] []'],'def add(x, acc=[]):\n    acc.append(x)\n    return acc\nprint(add(1), add(2))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1] [2]',[['A new list is created at each call.','تُنشأ قائمة جديدة عند كل استدعاء.']],['$ [1] [1, 2]','$ None None','$ [1, 2] [1, 2]'],'def add(x, acc=None):\n    if acc is None:\n        acc = []\n    acc.append(x)\n    return acc\nprint(add(1), add(2))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 6',[['``*args`` collects any number of positional arguments in a tuple.','``*args`` تجمع أي عدد من المتغيرات الموضعية في صف.']],['$ (1, 2, 3)','$ 3','$ Error'],'def total(*args):\n    return sum(args)\nprint(total(1, 2, 3))'),
]);

lesson('505',16,[
  ['``lambda`` writes a small function in one expression. It is mostly used as an argument, for example as the key of a sort:','``lambda`` تكتب دالة صغيرة في مقدار واحد، وتُستخدم غالباً متغيراً، مثل مفتاح الترتيب:'],
  '$ square = lambda x: x**2\nsquare(3)                                  # 9\nsorted([-3, 1, -2], key=lambda v: abs(v))  # [1, -2, -3]\nweight = lambda x, a=1, b=0: (1 - x)**a * (1 + x)**b',
  ['For anything longer than one line use ``def``: it has a name, a docstring and can be tested.','ولأي شيء أطول من سطر استخدم ``def``: لها اسم وتوثيق ويمكن اختبارها.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1, -2, -3]',[['Sorted by absolute value.','مرتبة حسب القيمة المطلقة.']],['$ [-3, -2, 1]','$ [1, 2, 3]','$ [-2, 1, -3]'],'print(sorted([-3, 1, -2], key=lambda v: abs(v)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.5',['(1 − 0.5)^1(1 + 0.5)^0'],['$ 0.75','$ 1.5','$ 0.25'],'w = lambda x, a=1, b=0: (1 - x)**a * (1 + x)**b\nprint(w(0.5))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [0, 2, 6]',[['``map`` applies the lambda to each element.','``map`` تطبق lambda على كل عنصر.']],['$ [0, 1, 4]','$ [1, 3, 7]','$ [0, 2, 4]'],'print(list(map(lambda k: k * (k + 1), range(3))))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [(1, \'b\'), (2, \'a\')]',[['Sorted by the first entry of each pair.','مرتبة حسب العنصر الأول من كل زوج.']],['$ [(2, \'a\'), (1, \'b\')]','$ [\'a\', \'b\']','$ [1, 2]'],'pairs = [(2, "a"), (1, "b")]\nprint(sorted(pairs, key=lambda p: p[0]))'),
]);

lesson('505',17,[
  ['Modules add functions. ``import math`` gives the standard mathematical functions and constants:','الوحدات تضيف دوالاً. و ``import math`` تعطي الدوال والثوابت الرياضية المعتادة:'],
  '$ import math\nmath.sqrt(2)          # 1.4142135623730951\nmath.pi, math.e\nmath.gamma(0.5)       # 1.7724538509055159 = sqrt(pi)\nmath.factorial(5)     # 120\nfrom math import comb\ncomb(5, 2)            # 10',
  ['``math`` works on single numbers; for arrays use NumPy. ``math.gamma`` is `Γ`, ``math.lgamma`` its logarithm (useful when Γ overflows), ``math.comb`` the binomial coefficient.','و ``math`` تعمل على أعداد مفردة، وللمصفوفات استخدم NumPy. و ``math.gamma`` هي `Γ`، و ``math.lgamma`` لوغاريتمها (مفيدة حين تفيض Γ)، و ``math.comb`` المعامل الثنائي.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.329340',['Γ(#f{5}{2}) = #f{3#r{π}}{4}'],['$ 1.772454','$ 0.886227','$ 2.000000'],'import math\nprint(f"{math.gamma(2.5):.6f}")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 20',['#f{(3 + 3)!}{0!(3!)^2} = #f{720}{36}',['This is `E_{3,3}`, the leading coefficient of `P_3^*(t) = 20t^3 − 30t^2 + 12t − 1`.','وهذا `E_{3,3}` المعامل الرئيس لـ `P_3^*(t) = 20t^3 − 30t^2 + 12t − 1`.']],['$ 30','$ 12','$ 1'],'from math import factorial as f\nn, k = 3, 3\nprint(f(n + k) // (f(n - k) * f(k)**2))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['`Γ(1/2) = #r{π}`.','`Γ(1/2) = #r{π}`.']],['$ False','$ 1.7724538509055159','$ Error'],'import math\nprint(abs(math.gamma(0.5) - math.sqrt(math.pi)) < 1e-14)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ OverflowError 857.93',[['`Γ(200)` is about `10^{372}`, too large for a float; its logarithm is fine.','`Γ(200)` نحو `10^{372}` وهي أكبر من أن يحملها float، ولوغاريتمها لا مشكلة فيه.']],['$ inf 857.93','$ 857.93 857.93','$ OverflowError OverflowError'],'import math\ntry:\n    math.gamma(200)\nexcept OverflowError:\n    print("OverflowError", end=" ")\nprint(round(math.lgamma(200), 2))'),
]);

lesson('505',18,[
  ['Files are opened with ``with open(...)``, which closes them automatically. ``"w"`` writes (and erases), ``"a"`` appends, ``"r"`` reads:','تُفتح الملفات بـ ``with open(...)`` التي تغلقها تلقائياً. و ``"w"`` تكتب (وتمسح)، و ``"a"`` تضيف، و ``"r"`` تقرأ:'],
  '$ with open("errors.txt", "w") as f:\n    for n, e in [(4, 1.2e-3), (8, 2.1e-6)]:\n        f.write(f"{n} {e:.3e}\\n")\nwith open("errors.txt") as f:\n    lines = f.read().splitlines()   # [\'4 1.200e-03\', \'8 2.100e-06\']',
  ['For tables of numbers, ``np.savetxt`` and ``np.loadtxt`` (Unit 3) are simpler. Always write ``"\\n"`` at the end of a line yourself; ``write`` does not add it.','ولجداول الأعداد تكون ``np.savetxt`` و ``np.loadtxt`` (الوحدة 3) أبسط. واكتب ``"\\n"`` في آخر السطر بنفسك لأن ``write`` لا تضيفه.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [\'4 1.200e-03\', \'8 2.100e-06\']',[['Each value is written in scientific format with 3 decimals.','تُكتب كل قيمة بالصيغة العلمية بثلاثة أرقام عشرية.']],['$ [\'4 0.0012\', \'8 2.1e-06\']','$ [\'41.200e-03\', \'82.100e-06\']','$ [\'8 2.100e-06\']'],'import os, tempfile\npath = os.path.join(tempfile.mkdtemp(), "e.txt")\nwith open(path, "w") as f:\n    for n, e in [(4, 1.2e-3), (8, 2.1e-6)]:\n        f.write(f"{n} {e:.3e}\\n")\nwith open(path) as f:\n    print(f.read().splitlines())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['Mode ``"w"`` erases the file each time it is opened.','الوضع ``"w"`` يمسح الملف كلما فُتح.']],['$ 2','$ 0','$ Error'],'import os, tempfile\np = os.path.join(tempfile.mkdtemp(), "a.txt")\nfor k in range(2):\n    with open(p, "w") as f:\n        f.write("line\\n")\nprint(len(open(p).readlines()))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2',[['Mode ``"a"`` appends to the end.','الوضع ``"a"`` يضيف إلى النهاية.']],['$ 1','$ 0','$ 4'],'import os, tempfile\np = os.path.join(tempfile.mkdtemp(), "a.txt")\nfor k in range(2):\n    with open(p, "a") as f:\n        f.write("line\\n")\nprint(len(open(p).readlines()))'),
  Q('Why use ``with open(...)`` instead of ``f = open(...)``?','لماذا نستخدم ``with open(...)`` بدل ``f = open(...)``؟',['The file is closed automatically, even if an error happens inside the block','يُغلق الملف تلقائياً حتى لو حدث خطأ داخل الكتلة'],[['Unclosed files can lose data that was not yet written.','الملفات غير المغلقة قد تفقد بيانات لم تُكتب بعد.']],[['It is faster','أسرع'],['It reads the file twice','تقرأ الملف مرتين']]),
]);

lesson('505',19,[
  ['``try`` runs a block and ``except`` catches a chosen error type, so the program can react instead of stopping:','``try`` تنفذ كتلة و ``except`` تلتقط نوع خطأ محدداً فيستطيع البرنامج أن يتصرف بدل التوقف:'],
  '$ try:\n    x = float(text)\nexcept ValueError:\n    print("not a number")\nelse:\n    print("ok", x)\nfinally:\n    print("done")',
  ['Catch only the errors you expect; a bare ``except:`` hides real bugs. ``raise ValueError("…")`` signals an error in your own function, for example a negative order μ.','والتقط فقط الأخطاء التي تتوقعها، فـ ``except:`` المجردة تخفي عيوباً حقيقية. و ``raise ValueError("…")`` تعلن خطأ في دالتك، مثل رتبة μ سالبة.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ not a number',[['``float("abc")`` raises ValueError.','``float("abc")`` تسبب ValueError.']],['$ abc','$ 0.0','$ ValueError'],'try:\n    x = float("abc")\nexcept ValueError:\n    print("not a number")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ ok 2.5 done',[['No error: the else part runs, then finally.','لا خطأ: يُنفَّذ else ثم finally.']],['$ ok 2.5','$ done','$ not a number done'],'try:\n    x = float("2.5")\nexcept ValueError:\n    print("bad", end=" ")\nelse:\n    print("ok", x, end=" ")\nfinally:\n    print("done")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ mu must be positive',[['The function raises its own error, caught by the caller.','الدالة تعلن خطأها الخاص ويلتقطه المستدعي.']],['$ -0.5','$ ValueError','$ None'],'def check(mu):\n    if mu <= 0:\n        raise ValueError("mu must be positive")\n    return mu\ntry:\n    check(-0.5)\nexcept ValueError as e:\n    print(e)'),
  Q('Why is a bare ``except:`` dangerous?','لماذا تكون ``except:`` المجردة خطيرة؟',['It catches every error, including typing mistakes and interrupts, and hides real bugs','تلتقط كل خطأ بما فيه أخطاء الكتابة والمقاطعات فتخفي عيوباً حقيقية'],[['Name the expected error type.','سمِّ نوع الخطأ المتوقع.']],[['It is slower','أبطأ'],['It is not dangerous','ليست خطيرة']]),
]);

lesson('505',20,[
  ['Clean code follows the conventions of PEP 8, the Python style guide: lowercase names with underscores (``gauss_nodes``), four-space indentation, spaces around operators, and a docstring for every function:','الكود النظيف يتبع اصطلاحات PEP 8 دليل أسلوب بايثون: أسماء صغيرة مع شرطة سفلية (``gauss_nodes``)، وإزاحة أربع مسافات، ومسافات حول العمليات، وتوثيق لكل دالة:'],
  '$ def shifted_legendre(n, t):\n    """Return P_n*(t) = P_n(2t - 1) by Bonnet\'s recurrence.\n\n    n : degree (int >= 0),  t : float or array in [0, 1]\n    """\n    ...',
  ['A docstring says what the function computes, its arguments and its result; ``help(shifted_legendre)`` shows it. Tools such as ``ruff`` or ``flake8`` check the style automatically.','والتوثيق يقول ماذا تحسب الدالة ومتغيراتها ونتيجتها، و ``help(shifted_legendre)`` تعرضه. وأدوات مثل ``ruff`` أو ``flake8`` تفحص الأسلوب تلقائياً.'],
],[
  Q('Which name follows PEP 8 for a function?','أي اسم يتبع PEP 8 لدالة؟','$ gauss_nodes',[['Lowercase with underscores.','حروف صغيرة مع شرطة سفلية.']],['$ GaussNodes','$ gaussNodes','$ GAUSS_NODES']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ Return P_1(x).',[['``__doc__`` holds the docstring.','``__doc__`` تحمل التوثيق.']],['$ p1','$ None','$ x'],'def p1(x):\n    """Return P_1(x)."""\n    return x\nprint(p1.__doc__)'),
  Q('Which name is used by convention for constants?','أي اسم يُستخدم اصطلاحاً للثوابت؟','$ MAX_ITER = 50',[['Constants are written in capitals.','الثوابت تُكتب بحروف كبيرة.']],['$ maxIter = 50','$ MaxIter = 50','$ m = 50']),
  Q('What should a docstring of a numerical function contain?','ماذا يجب أن يحوي توثيق دالة عددية؟',['What it computes, the meaning and type of each argument, and what it returns','ماذا تحسب، ومعنى كل متغير ونوعه، وماذا تعيد'],[['Also the interval or assumptions, for example t in [0, 1].','وأيضاً المجال أو الافتراضات مثل t في [0, 1].']],[['The author’s name only','اسم الكاتب فقط'],['The code again','الكود مرة أخرى']]),
]);

/* ---- 505 · Unit 3 (lessons 21–30): NumPy;  Unit 4 (lessons 31–40): Matplotlib ---- */
lesson('505',21,[
  ['NumPy’s ``ndarray`` holds numbers of one type in a block of memory. Every array has a shape, a number of dimensions and a data type:','المصفوفة ``ndarray`` في NumPy تحمل أعداداً من نوع واحد في كتلة من الذاكرة. ولكل مصفوفة شكل وعدد أبعاد ونوع بيانات:'],
  '$ import numpy as np\na = np.array([1, 2, 3])\nA = np.array([[1.0, 2.0], [3.0, 4.0]])\na.shape, a.ndim, a.dtype     # (3,), 1, int64\nA.shape, A.size              # (2, 2), 4',
  ['A shape ``(3,)`` is a 1-D array of 3 numbers, not a row or a column. Mixing integers and floats gives a float array; the convention ``import numpy as np`` is universal.','والشكل ``(3,)`` مصفوفة أحادية من 3 أعداد لا صف ولا عمود. وخلط الأعداد الصحيحة والعشرية يعطي مصفوفة عشرية، والاصطلاح ``import numpy as np`` عالمي.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ (2, 3) 2 6',[['2 rows, 3 columns.','صفان وثلاثة أعمدة.']],['$ (3, 2) 2 6','$ (2, 3) 6 2','$ (6,) 1 6'],'import numpy as np\nA = np.array([[1, 2, 3], [4, 5, 6]])\nprint(A.shape, A.ndim, A.size)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ float64',[['One float makes the whole array float.','عدد عشري واحد يجعل المصفوفة كلها عشرية.']],['$ int64','$ object','$ mixed'],'import numpy as np\nprint(np.array([1, 2.5, 3]).dtype)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [2 4 6]',[['Arithmetic on an array acts on every element.','الحساب على المصفوفة يعمل على كل عنصر.']],['$ [1, 2, 3, 1, 2, 3]','$ [2, 4, 6]','$ 12'],'import numpy as np\nprint(np.array([1, 2, 3]) * 2)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1, 2, 3, 1, 2, 3]',[['For a list, ``*`` repeats it.','للقائمة ``*`` تكررها.']],['$ [2, 4, 6]','$ [2 4 6]','$ Error'],'print([1, 2, 3] * 2)'),
]);

lesson('505',22,[
  ['Arrays are rarely typed by hand. The constructors:','نادراً ما تُكتب المصفوفات يدوياً. والمنشئات:'],
  '$ np.arange(5)              # [0 1 2 3 4]\nnp.arange(0, 1, 0.25)     # [0.   0.25 0.5  0.75]   (stop excluded)\nnp.linspace(0, 1, 5)      # [0.   0.25 0.5  0.75 1.  ]  (ends included)\nnp.zeros((2, 3)), np.ones(4), np.eye(3)',
  ['For grids prefer ``linspace``: you choose the number of points and both ends are included. With a float step, ``arange`` can give one point more or less than expected because of rounding.','وللشبكات فضّل ``linspace``: تختار عدد النقاط ويُشمل الطرفان. ومع خطوة عشرية قد تعطي ``arange`` نقطة زائدة أو ناقصة بسبب التقريب.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [0.0, 0.25, 0.5, 0.75, 1.0]',[['5 points with both ends.','5 نقاط مع الطرفين.']],['$ [0.0, 0.2, 0.4, 0.6, 0.8]','$ [0.0, 0.25, 0.5, 0.75]','$ [0.25, 0.5, 0.75, 1.0]'],'import numpy as np\nprint(np.linspace(0, 1, 5).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 10',[['0, 0.1, …, 0.9: the stop 1 is excluded.','0 و 0.1 و … و 0.9: النهاية 1 مستبعدة.']],['$ 11','$ 9','$ 1'],'import numpy as np\nprint(len(np.arange(0, 1, 0.1)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [[1.0, 0.0], [0.0, 1.0]]',[['The identity matrix, as floats.','المصفوفة المحايدة بأعداد عشرية.']],['$ [[1, 1], [1, 1]]','$ [1.0, 1.0]','$ [[0.0, 1.0], [1.0, 0.0]]'],'import numpy as np\nprint(np.eye(2).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ (2, 3) 0.0',[['A shape is given as a tuple.','الشكل يُعطى صفاً.']],['$ (3, 2) 0.0','$ (6,) 0','$ (2, 3) 1.0'],'import numpy as np\nz = np.zeros((2, 3))\nprint(z.shape, z.sum())'),
]);

lesson('505',23,[
  ['Indexing works as for lists, with one index per dimension. A slice of an array is a view: it shares the memory of the original:','الفهرسة كما في القوائم مع فهرس لكل بعد. ومقطع المصفوفة عرض (view) يشارك ذاكرة الأصل:'],
  '$ a = np.arange(10)\na[2:5]          # [2 3 4]\na[::-1]         # reversed\nA = np.arange(6).reshape(2, 3)\nA[1, 2], A[0, :], A[:, 1]     # 5, [0 1 2], [1 4]',
  ['Changing a view changes the original; use ``.copy()`` when you need an independent array. Fancy indexing with a list of indices, ``a[[0, 2]]``, always makes a copy.','وتغيير العرض يغيّر الأصل، فاستخدم ``.copy()`` حين تحتاج مصفوفة مستقلة. والفهرسة بقائمة فهارس ``a[[0, 2]]`` تنشئ نسخة دائماً.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [99, 1, 2, 3]',[['b is a view of a.','b عرض لـ a.']],['$ [0, 1, 2, 3]','$ [99]','$ [99, 99, 99, 3]'],'import numpy as np\na = np.arange(4)\nb = a[:3]\nb[0] = 99\nprint(a.tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [0, 1, 2, 3]',[['``copy`` makes an independent array.','``copy`` تنشئ مصفوفة مستقلة.']],['$ [99, 1, 2, 3]','$ [99, 1, 2]','$ Error'],'import numpy as np\na = np.arange(4)\nb = a[:3].copy()\nb[0] = 99\nprint(a.tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 5 [1, 4]',[['Row 1, column 2; and the whole column 1.','الصف 1 والعمود 2، والعمود 1 كاملاً.']],['$ 4 [3, 4, 5]','$ 5 [0, 1, 2]','$ 6 [1, 4]'],'import numpy as np\nA = np.arange(6).reshape(2, 3)\nprint(A[1, 2], A[:, 1].tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [9, 7, 5, 3, 1]',[['From the end, in steps of −2.','من النهاية بخطوة −2.']],['$ [1, 3, 5, 7, 9]','$ [9, 8, 7, 6, 5]','$ [0, 2, 4, 6, 8]'],'import numpy as np\nprint(np.arange(10)[::-2].tolist())'),
]);

lesson('505',24,[
  ['Operations between arrays act element by element. When shapes differ, NumPy broadcasts: dimensions of size 1 are stretched to match:','العمليات بين المصفوفات تعمل عنصراً بعنصر. وحين تختلف الأشكال يبث NumPy: الأبعاد ذات الحجم 1 تُمد لتتطابق:'],
  '$ x = np.array([1.0, 2.0, 3.0])\nx + 1, x * x, 1 / x\ncol = np.arange(3)[:, None]      # shape (3, 1)\nrow = np.arange(2)[None, :]      # shape (1, 2)\ncol + row                        # shape (3, 2): [[0 1] [1 2] [2 3]]',
  ['Broadcasting builds tables without loops: ``x[:, None] - x[None, :]`` is the matrix of all differences `x_i − x_j`, the first step of a differentiation matrix.','والبث يبني الجداول دون حلقات: ``x[:, None] - x[None, :]`` مصفوفة كل الفروق `x_i − x_j`، وهي أول خطوة في مصفوفة التفاضل.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [[0, 1], [1, 2], [2, 3]]',[['(3, 1) + (1, 2) gives (3, 2).','(3, 1) + (1, 2) تعطي (3, 2).']],['$ [0, 2]','$ [[0, 1, 2], [1, 2, 3]]','$ Error'],'import numpy as np\nprint((np.arange(3)[:, None] + np.arange(2)[None, :]).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [[0, -1, -2], [1, 0, -1], [2, 1, 0]]',[['Entry (i, j) is `x_i − x_j`.','العنصر (i, j) هو `x_i − x_j`.']],['$ [[0, 1, 2], [-1, 0, 1], [-2, -1, 0]]','$ [0, 0, 0]','$ [[0, 0, 0], [0, 0, 0], [0, 0, 0]]'],'import numpy as np\nx = np.arange(3)\nprint((x[:, None] - x[None, :]).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ ValueError',[['Shapes (3,) and (2,) cannot be broadcast.','الشكلان (3,) و (2,) لا يمكن بثهما.']],['$ [5, 7]','$ [5, 7, 3]','$ [1, 2, 3, 4, 5]'],'import numpy as np\ntry:\n    np.array([1, 2, 3]) + np.array([4, 5])\nexcept ValueError:\n    print("ValueError")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1.0, 0.5, 0.25]',[['Element-wise division.','قسمة عنصراً بعنصر.']],['$ [1, 2, 4]','$ 1.75','$ [0.25, 0.5, 1.0]'],'import numpy as np\nprint((1 / np.array([1.0, 2.0, 4.0])).tolist())'),
]);

lesson('505',25,[
  ['Vectorized code replaces a Python loop by one array operation. It is shorter and typically 10–100 times faster, because the loop runs in compiled code:','الكود المتجهي يستبدل حلقة بايثون بعملية مصفوفية واحدة، وهو أقصر وأسرع عادة 10 إلى 100 مرة لأن الحلقة تعمل في كود مترجم:'],
  '$ x = np.linspace(-1, 1, 1_000_000)\n# loop\np2 = [ (3 * xi**2 - 1) / 2 for xi in x ]\n# vectorized\np2 = (3 * x**2 - 1) / 2',
  ['Write formulas for whole arrays from the start: the Gauss rule becomes ``w @ f(x)``, the error ``np.max(np.abs(u - uex))``, and a basis table ``P[:, k]`` for all nodes at once.','واكتب الصيغ لمصفوفات كاملة من البداية: قاعدة جاوس تصبح ``w @ f(x)``، والخطأ ``np.max(np.abs(u - uex))``، وجدول الأساس ``P[:, k]`` لكل العقد دفعة واحدة.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.666667',['∫_{−1}^{1} x^2 dx = #f{2}{3}'],['$ 0.333333','$ 2.000000','$ 1.000000'],'import numpy as np\nx, w = np.polynomial.legendre.leggauss(3)\nprint(f"{w @ x**2:.6f}")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['The loop and the vectorized formula give the same numbers.','الحلقة والصيغة المتجهية تعطيان الأعداد نفسها.']],['$ False','$ 0','$ Error'],'import numpy as np\nx = np.linspace(-1, 1, 11)\na = np.array([(3 * xi**2 - 1) / 2 for xi in x])\nb = (3 * x**2 - 1) / 2\nprint(np.allclose(a, b))'),
  Q('Write the maximum error between arrays ``u`` and ``uex`` without a loop.','اكتب أكبر خطأ بين المصفوفتين ``u`` و ``uex`` دون حلقة.','$ np.max(np.abs(u - uex))',[['Every operation acts on the whole array.','كل عملية تعمل على المصفوفة كاملة.']],['$ max(u - uex)','$ np.abs(np.max(u) - np.max(uex))','$ for i in u: max(abs(i))']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.718282',['∫_0^1 e^x dx = e − 1'],['$ 2.718282','$ 1.000000','$ 0.718282'],'import numpy as np\nx, w = np.polynomial.legendre.leggauss(5)\nt, wt = (x + 1) / 2, w / 2\nprint(f"{wt @ np.exp(t):.6f}")'),
]);

lesson('505',26,[
  ['NumPy’s mathematical functions act on whole arrays: ``np.sin``, ``np.cos``, ``np.exp``, ``np.log``, ``np.sqrt``, ``np.abs``. Special functions such as `Γ` are in ``scipy.special``:','دوال NumPy الرياضية تعمل على مصفوفات كاملة: ``np.sin`` و ``np.cos`` و ``np.exp`` و ``np.log`` و ``np.sqrt`` و ``np.abs``. والدوال الخاصة مثل `Γ` في ``scipy.special``:'],
  '$ t = np.linspace(0, 1, 5)\nnp.sqrt(t), np.exp(-t)\nfrom scipy.special import gamma\ngamma(np.array([0.5, 1.5, 2.5]))     # [1.772 0.886 1.329]',
  ['Invalid operations give ``nan`` (not a number) or ``inf`` with a warning instead of an error, for example ``np.sqrt(-1.0)``. Check results with ``np.isfinite``.','والعمليات غير الصالحة تعطي ``nan`` (ليس عدداً) أو ``inf`` مع تحذير بدل الخطأ، مثل ``np.sqrt(-1.0)``. فافحص النتائج بـ ``np.isfinite``.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1.0, 2.0, 3.0]',[['Element-wise square roots.','جذور تربيعية عنصراً بعنصر.']],['$ 6.0','$ [1, 4, 9]','$ [1.0, 1.414, 1.732]'],'import numpy as np\nprint(np.sqrt(np.array([1.0, 4.0, 9.0])).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ nan',[['No error, only a warning (silenced here).','لا خطأ، تحذير فقط (مكتوم هنا).']],['$ ValueError','$ 1j','$ 0.0'],'import numpy as np\nwith np.errstate(invalid="ignore"):\n    print(np.sqrt(-1.0))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1.7725, 0.8862, 1.3293]',['Γ(#f{1}{2}) = #r{π},   Γ(#f{3}{2}) = #f{#r{π}}{2},   Γ(#f{5}{2}) = #f{3#r{π}}{4}'],['$ [1.0, 1.0, 2.0]','$ [0.5, 1.5, 2.5]','$ [1.7725, 1.7725, 1.7725]'],'import numpy as np\nfrom scipy.special import gamma\nprint(np.round(gamma(np.array([0.5, 1.5, 2.5])), 4).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [True, False, False]',[['``inf`` and ``nan`` are not finite.','``inf`` و ``nan`` ليسا منتهيين.']],['$ [True, True, False]','$ [False, True, True]','$ True'],'import numpy as np\nprint(np.isfinite(np.array([1.0, np.inf, np.nan])).tolist())'),
]);

lesson('505',27,[
  ['Reductions summarize an array, along all elements or along one axis:','الاختزالات تلخص مصفوفة على كل العناصر أو على محور واحد:'],
  '$ A = np.array([[1, 2], [3, 4]])\nA.sum(), A.mean(), A.max()      # 10, 2.5, 4\nA.sum(axis=0)                   # [4 6]   (down the columns)\nA.sum(axis=1)                   # [3 7]   (along the rows)\nnp.cumsum([1, 2, 3]), np.diff([1, 4, 9])   # [1 3 6], [3 5]',
  ['``axis=0`` collapses the rows (one result per column), ``axis=1`` collapses the columns. ``argmax`` gives the position of the maximum, useful for locating the largest error.','و ``axis=0`` تطوي الصفوف (نتيجة لكل عمود)، و ``axis=1`` تطوي الأعمدة. و ``argmax`` تعطي موضع الأكبر، وهذا مفيد لتحديد موقع أكبر خطأ.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [4, 6] [3, 7]',[['Column sums, then row sums.','مجاميع الأعمدة ثم مجاميع الصفوف.']],['$ [3, 7] [4, 6]','$ 10 10','$ [1, 2] [3, 4]'],'import numpy as np\nA = np.array([[1, 2], [3, 4]])\nprint(A.sum(axis=0).tolist(), A.sum(axis=1).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2 0.3',[['The largest error is at index 2.','أكبر خطأ عند الفهرس 2.']],['$ 0.3 2','$ 3 0.3','$ 2 0.1'],'import numpy as np\nerr = np.array([0.1, -0.2, 0.3, -0.05])\nk = np.argmax(np.abs(err))\nprint(k, err[k])'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1, 3, 6, 10] [3, 5, 7]',[['Running sums; successive differences.','مجاميع تراكمية، وفروق متتالية.']],['$ 10 [3, 5, 7]','$ [1, 3, 6, 10] [1, 4, 9]','$ [1, 2, 3, 4] [3, 5, 7]'],'import numpy as np\nprint(np.cumsum([1, 2, 3, 4]).tolist(), np.diff([1, 4, 9, 16]).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3.5 5.0',[['The mean of all six entries, then the mean of the second row.','متوسط العناصر الستة ثم متوسط الصف الثاني.']],['$ 3.5 2.0','$ 21 15','$ 5.0 3.5'],'import numpy as np\nA = np.array([[1, 2, 3], [4, 5, 6]])\nprint(A.mean(), A[1].mean())'),
]);

lesson('505',28,[
  ['A comparison on an array gives a boolean array, a mask, which selects elements:','المقارنة على مصفوفة تعطي مصفوفة منطقية (قناعاً) تختار العناصر:'],
  '$ a = np.array([3, -1, 4, -1, 5])\na > 0                 # [ True False  True False  True]\na[a > 0]              # [3 4 5]\nnp.where(a > 0, a, 0) # [3 0 4 0 5]\nnp.count_nonzero(a < 0), (a > 0).any(), (a > 0).all()',
  ['Combine masks with ``&`` (and), ``|`` (or), ``~`` (not), with brackets around each comparison: ``(x >= 0) & (x <= 1)``.','وادمج الأقنعة بـ ``&`` (و) و ``|`` (أو) و ``~`` (ليس) مع أقواس حول كل مقارنة: ``(x >= 0) & (x <= 1)``.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [3, 4, 5]',[['The mask keeps the positive values.','القناع يبقي القيم الموجبة.']],['$ [True, False, True, False, True]','$ [0, 2, 4]','$ [-1, -1]'],'import numpy as np\na = np.array([3, -1, 4, -1, 5])\nprint(a[a > 0].tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [3, 0, 4, 0, 5]',[['Negative entries replaced by 0.','العناصر السالبة استُبدلت بـ 0.']],['$ [3, 4, 5]','$ [0, -1, 0, -1, 0]','$ [3, -1, 4, -1, 5]'],'import numpy as np\na = np.array([3, -1, 4, -1, 5])\nprint(np.where(a > 0, a, 0).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3',[['The interior nodes in (0, 1): 0.25, 0.5, 0.75.','العقد الداخلية في (0, 1): 0.25 و 0.5 و 0.75.']],['$ 5','$ 4','$ 2'],'import numpy as np\nx = np.linspace(0, 1, 5)\nprint(np.count_nonzero((x > 0) & (x < 1)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True False',[['Some, but not all, are negative.','بعضها سالب لا كلها.']],['$ False True','$ True True','$ 2 5'],'import numpy as np\na = np.array([3, -1, 4, -1, 5])\nprint((a < 0).any(), (a < 0).all())'),
]);

lesson('505',29,[
  ['Reshaping changes the shape without changing the data; stacking joins arrays:','تغيير الشكل يغيّر الشكل دون تغيير البيانات، والرص يضم المصفوفات:'],
  '$ a = np.arange(6)\nA = a.reshape(2, 3)         # [[0 1 2] [3 4 5]]\nA.T                         # transpose, shape (3, 2)\nA.ravel()                   # rows stacked:    [0 1 2 3 4 5]\nA.ravel(order="F")          # columns stacked: [0 3 1 4 2 5]\nnp.vstack([a, a]), np.hstack([a, a]), np.column_stack([a, a])',
  ['``ravel(order="F")`` is the column stacking `vec(𝒴)` used with Kronecker products, which is MATLAB’s and Mathematica’s ``Flatten[Transpose[…]]`` order; the default ``ravel()`` stacks rows.','و ``ravel(order="F")`` هي رص الأعمدة `vec(𝒴)` المستخدم مع ضروب كرونيكر، وهو ترتيب MATLAB و ``Flatten[Transpose[…]]`` في Mathematica، أما ``ravel()`` الافتراضية فترص الصفوف.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [0, 3, 1, 4, 2, 5]',[['Column by column.','عموداً بعد عمود.']],['$ [0, 1, 2, 3, 4, 5]','$ [5, 4, 3, 2, 1, 0]','$ [0, 2, 4, 1, 3, 5]'],'import numpy as np\nA = np.arange(6).reshape(2, 3)\nprint(A.ravel(order="F").tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ (3, 2)',[['The transpose swaps the dimensions.','المنقولة تبدّل البعدين.']],['$ (2, 3)','$ (6,)','$ (3, 3)'],'import numpy as np\nprint(np.arange(6).reshape(2, 3).T.shape)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ (2, 3) (6,) (3, 2)',[['vstack adds rows, hstack joins end to end, ``column_stack`` makes columns.','vstack تضيف صفوفاً، و hstack تضم طرفاً بطرف، و ``column_stack`` تصنع أعمدة.']],['$ (3, 2) (6,) (2, 3)','$ (2, 3) (2, 3) (3, 2)','$ (6,) (6,) (6,)'],'import numpy as np\na = np.arange(3)\nv, h = np.vstack([a, a]), np.hstack([a, a])\nc = np.column_stack([a, a])\nprint(v.shape, h.shape, c.shape)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ ValueError',[['6 elements cannot form a 4 × 2 array.','6 عناصر لا تصنع مصفوفة 4 × 2.']],['$ (4, 2)','$ [[0, 1], [2, 3], [4, 5], [0, 0]]','$ None'],'import numpy as np\ntry:\n    np.arange(6).reshape(4, 2)\nexcept ValueError:\n    print("ValueError")'),
]);

lesson('505',30,[
  ['Floats carry 53 binary digits, about 16 decimal digits. The machine epsilon `ε ≈ 2.2 × 10^{−16}` is the gap between 1 and the next float:','الأعداد العشرية العائمة تحمل 53 رقماً ثنائياً أي نحو 16 رقماً عشرياً. وإبسيلون الآلة `ε ≈ 2.2 × 10^{−16}` هو الفجوة بين 1 والعدد التالي:'],
  '$ np.finfo(float).eps     # 2.220446049250313e-16\n0.1 + 0.2                # 0.30000000000000004\n(1 + 1e-16) - 1          # 0.0\nnp.isclose(0.1 + 0.2, 0.3)   # True',
  ['Subtracting nearly equal numbers loses digits (cancellation): `(1 − cos x)/x^2` computed directly for `x = 10^{−8}` gives 0 instead of 0.5. Rewriting it as `2 sin^2(x/2)/x^2` avoids the subtraction.','وطرح أعداد متقاربة جداً يفقد أرقاماً (الإلغاء): `(1 − cos x)/x^2` محسوبة مباشرة عند `x = 10^{−8}` تعطي 0 بدل 0.5. وإعادة كتابتها `2 sin^2(x/2)/x^2` تتجنب الطرح.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.0 0.5',[['The direct formula loses everything to cancellation; the rewritten one is accurate.','الصيغة المباشرة تفقد كل شيء بالإلغاء، والمعاد كتابتها دقيقة.']],['$ 0.5 0.5','$ 0.0 0.0','$ 1.0 0.5'],'import numpy as np\nx = 1e-8\na = (1 - np.cos(x)) / x**2\nb = 2 * np.sin(x / 2)**2 / x**2\nprint(a, round(b, 12))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.0',[['`10^{−16}` is below half of ε, so `1 + 10^{−16}` rounds to 1.','`10^{−16}` أقل من نصف ε فيقرَّب `1 + 10^{−16}` إلى 1.']],['$ 1e-16','$ 1.0','$ 2.220446049250313e-16'],'print((1 + 1e-16) - 1)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ False True',[['Never test floats with ``==``; use a tolerance.','لا تختبر الأعداد العشرية بـ ``==``، واستخدم سماحية.']],['$ True True','$ False False','$ True False'],'import numpy as np\nprint(0.1 + 0.2 == 0.3, np.isclose(0.1 + 0.2, 0.3))'),
  Q('A computed error stops at about `10^{−15}` however large N is. Why?','خطأ محسوب يتوقف عند نحو `10^{−15}` مهما كبر N. لماذا؟',['Rounding error: the method is already exact to machine precision','خطأ التقريب: الطريقة مضبوطة أصلاً بدقة الآلة'],[['A small multiple of ε is the floor of double precision.','مضاعف صغير لـ ε هو أرضية الدقة المزدوجة.']],[['The method diverges','الطريقة متباعدة'],['N is too small','N صغير جداً']]),
]);

lesson('505',31,[
  ['Matplotlib draws figures. The object-oriented style creates a figure and axes and calls methods on the axes:','Matplotlib ترسم الأشكال. والأسلوب الكائني ينشئ شكلاً ومحاور ويستدعي دوال المحاور:'],
  '$ import numpy as np\nimport matplotlib.pyplot as plt\nx = np.linspace(-1, 1, 200)\nfig, ax = plt.subplots()\nax.plot(x, (3 * x**2 - 1) / 2)\nplt.show()                      # or fig.savefig("p2.png")',
  ['``ax.plot`` joins the points in order, so use enough of them (200 is plenty for a smooth curve). ``plt.show()`` opens a window or shows the figure in Jupyter.','و ``ax.plot`` تصل النقاط بالترتيب، فاستخدم عدداً كافياً منها (200 تكفي لمنحنى أملس). و ``plt.show()`` تفتح نافذة أو تعرض الشكل في Jupyter.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1 Line2D',[['plot returns a list with one line object.','plot تعيد قائمة فيها كائن خط واحد.']],['$ 200 Line2D','$ 1 Figure','$ 0 None'],'import matplotlib\nmatplotlib.use("Agg")\nimport matplotlib.pyplot as plt\nimport numpy as np\nfig, ax = plt.subplots()\nlines = ax.plot(np.linspace(0, 1, 200), np.linspace(0, 1, 200)**2)\nprint(len(lines), type(lines[0]).__name__)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 200',[['One x value for each sample point.','قيمة x لكل نقطة عينة.']],['$ 1','$ 2','$ 100'],'import matplotlib\nmatplotlib.use("Agg")\nimport matplotlib.pyplot as plt\nimport numpy as np\nfig, ax = plt.subplots()\n(line,) = ax.plot(np.linspace(0, 1, 200), np.zeros(200))\nprint(len(line.get_xdata()))'),
  Q('Why can a curve drawn with ``np.linspace(0, 1, 5)`` look broken?','لماذا قد يبدو منحنى مرسوم بـ ``np.linspace(0, 1, 5)`` مكسوراً؟',['plot joins only 5 points with straight segments','plot تصل 5 نقاط فقط بقطع مستقيمة'],[['Use a few hundred points for a smooth curve.','استخدم بضع مئات من النقاط لمنحنى أملس.']],[['linspace is wrong','linspace خاطئة'],['The axes are too small','المحاور صغيرة جداً']]),
  Q('Which backend lets a script save figures without a display?','أي محرك يسمح للسكربت بحفظ الأشكال دون شاشة؟','$ matplotlib.use("Agg")',[['Used on servers and in tests.','يُستخدم على الخوادم وفي الاختبارات.']],['$ plt.show()','$ matplotlib.use("Screen")','$ plt.figure(display=False)']),
]);

lesson('505',32,[
  ['Labels and legends make a figure readable:','العناوين والمفاتيح تجعل الشكل مقروءاً:'],
  '$ ax.plot(x, y1, "b-", label="exact")\nax.plot(x, y2, "r--o", label="approximate", markersize=4)\nax.set_xlabel("t");  ax.set_ylabel("y")\nax.set_title("Solution");  ax.legend();  ax.grid(True)',
  ['A format string combines colour, line style and marker: ``"r--o"`` is red, dashed, with circles. Keyword arguments (``color``, ``linestyle``, ``marker``, ``linewidth``) do the same more explicitly.','وسلسلة التنسيق تجمع اللون ونمط الخط والعلامة: ``"r--o"`` أحمر متقطع بدوائر. والمتغيرات المسماة (``color`` و ``linestyle`` و ``marker`` و ``linewidth``) تفعل الشيء نفسه بوضوح أكبر.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ r -- o',[['Colour, style and marker of the line.','لون الخط ونمطه وعلامته.']],['$ red dashed circle','$ b - None','$ r - o'],'import matplotlib\nmatplotlib.use("Agg")\nimport matplotlib.pyplot as plt\nfig, ax = plt.subplots()\n(l,) = ax.plot([0, 1], [0, 1], "r--o")\nprint(l.get_color(), l.get_linestyle(), l.get_marker())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [\'exact\', \'approximate\']',[['The legend shows the labels in plotting order.','المفتاح يعرض التسميات بترتيب الرسم.']],['$ [\'approximate\', \'exact\']','$ []','$ [\'line0\', \'line1\']'],'import matplotlib\nmatplotlib.use("Agg")\nimport matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([0, 1], [0, 1], label="exact")\nax.plot([0, 1], [1, 0], label="approximate")\nleg = ax.legend()\nprint([t.get_text() for t in leg.get_texts()])'),
  Q('Why does ``ax.legend()`` show nothing?','لماذا لا تُظهر ``ax.legend()`` شيئاً؟',['The curves were plotted without ``label=``','رُسمت المنحنيات دون ``label=``'],[['A warning says no artists with labels were found.','يقول تحذير إنه لم يُعثر على عناصر لها تسميات.']],[['legend needs plt.show()','legend تحتاج plt.show()'],['The figure is too small','الشكل صغير جداً']]),
  Q('Which call puts the label `t` on the horizontal axis?','أي استدعاء يضع التسمية `t` على المحور الأفقي؟','$ ax.set_xlabel("t")',[['``set_ylabel`` for the vertical axis.','و ``set_ylabel`` للمحور الرأسي.']],['$ ax.xlabel = "t"','$ ax.set_title("t")','$ plt.label("t")']),
]);

lesson('505',33,[
  ['``plt.subplots(rows, cols)`` returns a figure and an array of axes, one per panel:','``plt.subplots(rows, cols)`` تعيد شكلاً ومصفوفة محاور، واحداً لكل لوحة:'],
  '$ fig, axs = plt.subplots(2, 2, figsize=(8, 6), sharex=True)\nfor n, ax in enumerate(axs.flat):\n    ax.plot(x, legendre(n, x));  ax.set_title(f"P_{n}")\nfig.tight_layout()',
  ['``axs.flat`` walks through all panels; ``sharex``/``sharey`` give common axes; ``tight_layout`` prevents overlapping labels. Several curves in one panel are just several plot calls on the same axes.','و ``axs.flat`` تمر على كل اللوحات، و ``sharex``/``sharey`` تعطي محاور مشتركة، و ``tight_layout`` تمنع تداخل التسميات. وعدة منحنيات في لوحة واحدة هي عدة استدعاءات plot على المحاور نفسها.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ (2, 3) 6',[['An array of axes, one per panel.','مصفوفة محاور، واحد لكل لوحة.']],['$ (3, 2) 6','$ (6,) 6','$ 2 3'],'import matplotlib\nmatplotlib.use("Agg")\nimport matplotlib.pyplot as plt\nfig, axs = plt.subplots(2, 3)\nprint(axs.shape, len(axs.flat))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3',[['Three plot calls on one axes give three lines.','ثلاثة استدعاءات plot على محاور واحدة تعطي ثلاثة خطوط.']],['$ 1','$ 0','$ 9'],'import matplotlib\nmatplotlib.use("Agg")\nimport matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nfor k in range(3):\n    ax.plot([0, 1], [k, k])\nprint(len(ax.get_lines()))'),
  Q('Which call fixes overlapping titles and labels between panels?','أي استدعاء يصلح تداخل العناوين والتسميات بين اللوحات؟','$ fig.tight_layout()',[['Or create the figure with ``layout="constrained"``.','أو أنشئ الشكل بـ ``layout="constrained"``.']],['$ plt.show()','$ fig.clear()','$ ax.grid()']),
  Q('What is ``axs`` for ``plt.subplots(1, 1)``?','ما ``axs`` عند ``plt.subplots(1, 1)``؟',['A single Axes object, not an array','كائن Axes واحد لا مصفوفة'],[['Use ``squeeze=False`` to always get an array.','استخدم ``squeeze=False`` لتحصل دائماً على مصفوفة.']],[['An array of shape (1, 1)','مصفوفة شكلها (1, 1)'],['None','لا شيء']]),
]);

lesson('505',34,[
  ['Errors span many orders of magnitude, so they are plotted on logarithmic axes. ``semilogy`` uses a log scale for y, ``loglog`` for both:','الأخطاء تمتد عبر رتب كثيرة فتُرسم على محاور لوغاريتمية. و ``semilogy`` تستخدم مقياساً لوغاريتمياً لـ y، و ``loglog`` للمحورين:'],
  '$ N = np.array([4, 8, 12, 16])\nerr = np.array([1.2e-3, 1.1e-6, 1.3e-9, 1.2e-12])\nax.semilogy(N, err, "o-")\nax.set_xlabel("N");  ax.set_ylabel("max error")',
  ['On ``semilogy`` a spectral rate `e_N ~ ρ^{−N}` is a straight line; on ``loglog`` an algebraic rate `e_N ~ N^{−p}` is a straight line of slope −p.','وفي ``semilogy`` يكون المعدل الطيفي `e_N ~ ρ^{−N}` خطاً مستقيماً، وفي ``loglog`` يكون المعدل الجبري `e_N ~ N^{−p}` خطاً مستقيماً ميله −p.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ linear log',[['semilogy changes only the y scale.','semilogy تغيّر مقياس y فقط.']],['$ log log','$ log linear','$ linear linear'],'import matplotlib\nmatplotlib.use("Agg")\nimport matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.semilogy([4, 8], [1e-3, 1e-6])\nprint(ax.get_xscale(), ax.get_yscale())'),
  Q('Fit the slope of `log_{10} e` against N for the data above.','قدّر ميل `log_{10} e` مقابل N للبيانات أعلاه.','$ -0.75',[['`ρ = 10^{0.75} ≈ 5.6`.','`ρ = 10^{0.75} ≈ 5.6`.']],['$ -3.0','$ 0.75','$ -1.5'],'import numpy as np\nN = np.array([4, 8, 12, 16])\nerr = np.array([1.2e-3, 1.1e-6, 1.3e-9, 1.2e-12])\nprint(round(np.polyfit(N, np.log10(err), 1)[0], 2))'),
  Q('Which plot makes `e_N = 5N^{−3}` a straight line?','أي رسم يجعل `e_N = 5N^{−3}` خطاً مستقيماً؟','$ ax.loglog(N, err)',['log e = log 5 − 3 log N'],['$ ax.semilogy(N, err)','$ ax.plot(N, err)','$ ax.semilogx(N, err)']),
  Q('Why do zero errors break a log plot?','لماذا تفسد الأخطاء الصفرية الرسم اللوغاريتمي؟',['`log 0` is not defined, so those points are dropped','`log 0` غير معرّف فتُحذف تلك النقاط'],[['Replace exact zeros by a small floor such as ε, or mark them separately.','استبدل الأصفار بأرضية صغيرة مثل ε أو علّمها منفصلة.']],[['They are drawn at 1','تُرسم عند 1'],['They are not a problem','ليست مشكلة']]),
]);

lesson('505',35,[
  ['``scatter`` draws points with individual sizes or colours; ``plot`` with a marker and no line does the same for simple cases:','``scatter`` ترسم نقاطاً بأحجام أو ألوان فردية، و ``plot`` بعلامة ودون خط تفعل الشيء نفسه في الحالات البسيطة:'],
  '$ x, w = np.polynomial.legendre.leggauss(8)\nax.scatter(x, w, s=40, c=w, cmap="viridis")\nax.plot(x, np.zeros_like(x), "k|", markersize=15)   # nodes on the axis',
  ['Common markers: ``"o"`` circle, ``"s"`` square, ``"^"`` triangle, ``"x"``, ``"+"``, ``"|"``. Plotting nodes is a quick check that they cluster toward the ends as expected.','العلامات الشائعة: ``"o"`` دائرة، و ``"s"`` مربع، و ``"^"`` مثلث، و ``"x"`` و ``"+"`` و ``"|"``. ورسم العقد فحص سريع لتكاثفها نحو الطرفين كما يُتوقع.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 8',[['One point per node.','نقطة لكل عقدة.']],['$ 1','$ 16','$ 0'],'import matplotlib\nmatplotlib.use("Agg")\nimport matplotlib.pyplot as plt\nimport numpy as np\nx, w = np.polynomial.legendre.leggauss(8)\nfig, ax = plt.subplots()\nsc = ax.scatter(x, w)\nprint(len(sc.get_offsets()))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['Gauss–Legendre weights are largest in the middle.','أوزان جاوس–ليجندر أكبرها في الوسط.']],['$ False','$ 0.3626','$ 8'],'import numpy as np\nx, w = np.polynomial.legendre.leggauss(8)\nprint(w[3] > w[0])'),
  Q('Which format draws only red squares, without a line?','أي تنسيق يرسم مربعات حمراء فقط دون خط؟','$ "rs"',[['Colour r and marker s; no line style.','اللون r والعلامة s دون نمط خط.']],['$ "r-s"','$ "sr--"','$ "red square"']),
  Q('What does ``c=w, cmap="viridis"`` do in scatter?','ماذا يفعل ``c=w, cmap="viridis"`` في scatter؟',['Colours each point by its weight using the viridis colour map','يلوّن كل نقطة حسب وزنها باستخدام خريطة ألوان viridis'],[['Add ``fig.colorbar(sc)`` to show the scale.','أضف ``fig.colorbar(sc)`` لعرض المقياس.']],[['Sets the size of the points','يحدد حجم النقاط'],['Nothing','لا شيء']]),
]);

lesson('505',36,[
  ['Functions of two variables need a grid. ``np.meshgrid`` builds the coordinate arrays:','دوال المتغيرين تحتاج شبكة، و ``np.meshgrid`` تبني مصفوفات الإحداثيات:'],
  '$ x = np.linspace(0, 1, 41);  t = np.linspace(0, 1, 21)\nX, T = np.meshgrid(x, t)          # shapes (21, 41)\nU = T**1.5 * np.sin(np.pi * X)\nax.contourf(X, T, U, levels=20);  fig.colorbar(...)\nax3 = fig.add_subplot(projection="3d");  ax3.plot_surface(X, T, U)',
  ['With the default indexing ``"xy"``, the first argument varies along the columns, so the arrays have shape (len(t), len(x)). Contour plots of `u(x, t)` show the whole space-time solution in one picture.','ومع الفهرسة الافتراضية ``"xy"`` يتغير المتغير الأول على الأعمدة، فيكون شكل المصفوفات (len(t), len(x)). ورسوم الكنتور لـ `u(x, t)` تعرض الحل الزمكاني كله في صورة واحدة.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ (21, 41)',[['Rows follow t, columns follow x.','الصفوف تتبع t والأعمدة تتبع x.']],['$ (41, 21)','$ (41, 41)','$ (862,)'],'import numpy as np\nX, T = np.meshgrid(np.linspace(0, 1, 41), np.linspace(0, 1, 21))\nprint(X.shape)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [0.0, 0.5, 1.0] [0.0, 0.0, 0.0]',[['The first row of X is the x grid, the first row of T is t = 0.','الصف الأول من X شبكة x، والصف الأول من T هو t = 0.']],['$ [0.0, 0.0, 0.0] [0.0, 0.5, 1.0]','$ [0.0, 1.0] [0.0, 1.0]','$ [0.0, 0.5, 1.0] [0.0, 1.0, 2.0]'],'import numpy as np\nX, T = np.meshgrid(np.linspace(0, 1, 3), np.linspace(0, 2, 5))\nprint(X[0].tolist(), T[0].tolist())'),
  Q('Evaluate `u = t^{3/2} sin(πx)` at the grid point `(x, t) = (0.5, 1)`.','احسب `u = t^{3/2} sin(πx)` عند نقطة الشبكة `(x, t) = (0.5, 1)`.','$ 1.0',['1·sin(#f{π}{2})'],['$ 0.0','$ 0.5','$ 1.5'],'import numpy as np\nX, T = np.meshgrid(np.linspace(0, 1, 3), np.linspace(0, 1, 3))\nU = T**1.5 * np.sin(np.pi * X)\nprint(round(U[2, 1], 6))'),
  Q('Which call creates 3-D axes for ``plot_surface``?','أي استدعاء ينشئ محاور ثلاثية لـ ``plot_surface``؟','$ fig.add_subplot(projection="3d")',[['Built into Matplotlib.','مدمج في Matplotlib.']],['$ plt.subplots(3)','$ fig.add_axes3d()','$ ax.set_zlim()']),
]);

lesson('505',37,[
  ['A matrix can be shown as a picture: ``imshow`` colours each entry, ``spy`` marks the nonzero ones:','يمكن عرض المصفوفة صورةً: ``imshow`` تلوّن كل عنصر، و ``spy`` تعلّم غير الصفرية:'],
  '$ D2 = second_derivative_matrix(12)\nax1.imshow(np.log10(np.abs(D2) + 1e-16), cmap="magma");  fig.colorbar(...)\nax2.spy(D2, markersize=4)',
  ['``spy`` shows structure at a glance: the strictly lower triangular, checkerboard pattern of Theorem 3.1, the bands of a Galerkin matrix, or the blocks of a Kronecker system. ``imshow`` of the logarithm shows how fast the entries grow.','و ``spy`` تُظهر البنية بنظرة: نمط رقعة الشطرنج المثلثي السفلي تماماً في النظرية 3.1، أو أشرطة مصفوفة جاليركن، أو كتل نظام كرونيكر. و ``imshow`` للوغاريتم تُظهر سرعة نمو العناصر.'],
],[
  Q('For the matrix `D^{(2)}` of Theorem 3.1 with N = 4, how many nonzero entries does ``spy`` show?','لمصفوفة `D^{(2)}` في النظرية 3.1 مع N = 4 كم عنصراً غير صفري تُظهر ``spy``؟','$ 4',[['Pairs (r, j) with r − j even and positive: (2,0), (3,1), (4,0), (4,2).','الأزواج (r, j) التي فيها r − j زوجي موجب: (2,0) و (3,1) و (4,0) و (4,2).']],['$ 6','$ 10','$ 2'],'import numpy as np\nN = 4\nD = np.zeros((N + 1, N + 1))\nfor r in range(N + 1):\n    for j in range(r):\n        if (r - j) % 2 == 0:\n            D[r, j] = 4 * (r - j) / 2 * (2 * j + 1) * (r + j + 1)\nprint(np.count_nonzero(D))'),
  Q('Why plot ``np.log10(np.abs(A) + 1e-16)`` rather than A?','لماذا نرسم ``np.log10(np.abs(A) + 1e-16)`` بدل A؟',['The entries span many orders of magnitude; the logarithm makes all of them visible, and the small shift avoids `log 0`','العناصر تمتد عبر رتب كثيرة، واللوغاريتم يُظهرها كلها، والإزاحة الصغيرة تتجنب `log 0`'],[['Otherwise only the largest entries are visible.','وإلا تظهر أكبر العناصر فقط.']],[['To make it faster','لتسريعه'],['imshow needs negative values','imshow تحتاج قيماً سالبة']]),
  Q('What pattern does ``spy`` show for `I ⊗ T` with T tridiagonal?','أي نمط تُظهره ``spy`` لـ `I ⊗ T` مع T ثلاثية القطر؟',['Tridiagonal blocks along the diagonal','كتل ثلاثية القطر على القطر'],[['One copy of T per diagonal block.','نسخة من T لكل كتلة قطرية.']],[['A full matrix','مصفوفة كاملة'],['A single band','شريط واحد']]),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 10',[['A 4 × 4 tridiagonal matrix: 4 + 3 + 3.','مصفوفة 4 × 4 ثلاثية القطر: 4 + 3 + 3.']],['$ 16','$ 4','$ 12'],'import numpy as np\nT = 2 * np.eye(4) - np.eye(4, k=1) - np.eye(4, k=-1)\nprint(np.count_nonzero(T))'),
]);

lesson('505',38,[
  ['Mathematical text uses LaTeX-like syntax between dollar signs in a raw string; Matplotlib renders it without a LaTeX installation:','النص الرياضي يستخدم صيغة شبيهة بـ LaTeX بين علامتي دولار في نص خام، وترسمه Matplotlib دون تثبيت LaTeX:'],
  '$ ax.set_xlabel(r"$t$")\nax.set_ylabel(r"$\\lambda t^{\\lambda - 1}$")\nax.set_title(r"$E_{1/2}(-t^{1/2})$")',
  ['Arabic needs two extra steps, because Matplotlib draws characters one by one: join the letters with ``arabic_reshaper.reshape`` and reorder them right to left with ``bidi.algorithm.get_display``, and use a font that has Arabic glyphs, such as Amiri or Noto Naskh Arabic.','والعربية تحتاج خطوتين إضافيتين لأن Matplotlib ترسم الحروف واحداً واحداً: صِل الحروف بـ ``arabic_reshaper.reshape`` ورتبها من اليمين إلى اليسار بـ ``bidi.algorithm.get_display``، واستخدم خطاً فيه حروف عربية مثل Amiri أو Noto Naskh Arabic.'],
],[
  Q('Why is the label written as a raw string ``r"..."``?','لماذا تُكتب التسمية نصاً خاماً ``r"..."``؟',['So that backslashes such as ``\\lambda`` reach Matplotlib unchanged','حتى تصل الشرطات المائلة مثل ``\\lambda`` إلى Matplotlib دون تغيير'],[['In a normal string ``\\t`` would be a tab.','في النص العادي ``\\t`` تصبح مسافة جدولة.']],[['To make it bold','لجعله عريضاً'],['It is required for every label','إلزامي لكل تسمية']]),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1 4',[['``"\\t"`` is one tab character; the raw string ``r"\\tau"`` keeps the backslash, so it has 4 characters.','``"\\t"`` حرف جدولة واحد، والنص الخام ``r"\\tau"`` يبقي الشرطة المائلة ففيه 4 حروف.']],['$ 2 4','$ 1 3','$ 2 3'],'print(len("\\t"), len(r"\\tau"))'),
  Q('Which two steps make Arabic text display correctly in a figure?','أي خطوتين تجعلان النص العربي يظهر صحيحاً في شكل؟',['Reshape the letters (``arabic_reshaper``) and reorder them right to left (python-bidi), with an Arabic font','وصل الحروف (``arabic_reshaper``) وترتيبها من اليمين إلى اليسار (python-bidi) مع خط عربي'],[['Without them the letters appear separated and reversed.','دونهما تظهر الحروف منفصلة ومعكوسة.']],[['Only a larger font size','حجم خط أكبر فقط'],['Nothing: it works directly','لا شيء: يعمل مباشرة']]),
  Q('Write the label `‖u − u_N‖_∞` in Matplotlib mathtext.','اكتب التسمية `‖u − u_N‖_∞` بصيغة mathtext في Matplotlib.','$ r"$\\|u - u_N\\|_\\infty$"',[['``\\|`` is the double bar, ``\\infty`` the infinity sign.','``\\|`` الخط المزدوج و ``\\infty`` علامة اللانهاية.']],['$ "$||u - u_N||_inf$"','$ r"\\|u - u_N\\|_\\infty"','$ r"$|u - u_N|^\\infty$"']),
]);

lesson('505',39,[
  ['Figures for a paper are saved in a vector format at the final size, so that text matches the paper’s fonts:','أشكال البحث تُحفظ بصيغة متجهية بحجمها النهائي حتى يطابق النص خطوط البحث:'],
  '$ fig, ax = plt.subplots(figsize=(3.5, 2.6))     # inches: one journal column\n...\nfig.savefig("convergence.pdf", bbox_inches="tight")\nfig.savefig("convergence.png", dpi=300)',
  ['``bbox_inches="tight"`` removes empty margins. PDF and SVG stay sharp at any zoom; PNG at 300 dpi is fine for slides. Set the size first rather than scaling the picture later, which would change the font sizes.','و ``bbox_inches="tight"`` تحذف الهوامش الفارغة. و PDF و SVG تبقيان حادتين بأي تكبير، و PNG بدقة 300 نقطة مناسبة للعروض. وحدد الحجم أولاً بدل تحجيم الصورة لاحقاً لأن ذلك يغيّر أحجام الخطوط.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1050, 780]',[['3.5 × 300 and 2.6 × 300 pixels.','3.5 × 300 و 2.6 × 300 نقطة.']],['$ [350, 260]','$ [3.5, 2.6]','$ [300, 300]'],'import matplotlib\nmatplotlib.use("Agg")\nimport matplotlib.pyplot as plt\nfig = plt.figure(figsize=(3.5, 2.6), dpi=300)\nprint([int(v) for v in fig.get_size_inches() * fig.dpi])'),
  Q('Which format should be used in a LaTeX paper?','أي صيغة تُستخدم في بحث LaTeX؟','$ PDF',[['A vector format.','صيغة متجهية.']],['$ JPG','$ BMP','$ GIF']),
  Q('What does ``bbox_inches="tight"`` do?','ماذا تفعل ``bbox_inches="tight"``؟',['It trims the empty space around the figure','تقص المساحة الفارغة حول الشكل'],[['The saved file fits its content.','الملف المحفوظ يناسب محتواه.']],[['It enlarges the fonts','تكبّر الخطوط'],['It compresses the file','تضغط الملف']]),
  Q('Why set ``figsize`` to the final size instead of scaling later?','لماذا نحدد ``figsize`` بالحجم النهائي بدل التحجيم لاحقاً؟',['Scaling changes the font size; at the final size the text matches the paper','التحجيم يغيّر حجم الخط، وبالحجم النهائي يطابق النص البحث'],[['A one-column figure is about 3.5 inches wide.','الشكل بعرض عمود واحد نحو 3.5 بوصة.']],[['To make the file smaller','لتصغير الملف'],['It does not matter','لا يهم']]),
]);

lesson('505',40,[
  ['The standard convergence figure: error against N on ``semilogy`` (spectral) or ``loglog`` (algebraic), one marker per run, labelled axes, a grid, and a reference line for the expected rate:','شكل التقارب القياسي: الخطأ مقابل N في ``semilogy`` (طيفي) أو ``loglog`` (جبري)، بعلامة لكل تشغيل، ومحاور مسماة، وشبكة، وخط مرجعي للمعدل المتوقع:'],
  '$ fig, ax = plt.subplots(figsize=(3.5, 2.6))\nax.semilogy(N, err, "o-", label="mapped Legendre")\nax.semilogy(N, 10.0**(-0.75 * N), "k--",\n            label=r"$\\rho^{-N},\\ \\rho = 10^{0.75}$")\nax.set_xlabel("$N$");  ax.set_ylabel("max error")\nax.grid(True, which="both", alpha=0.3);  ax.legend()\nfig.savefig("conv.pdf", bbox_inches="tight")',
  ['The observed rate comes from a straight-line fit of the logarithm: ``np.polyfit(N, np.log10(err), 1)`` for spectral, ``np.polyfit(np.log10(N), np.log10(err), 1)`` for algebraic convergence.','والمعدل الملاحظ يأتي من ملاءمة خط مستقيم للوغاريتم: ``np.polyfit(N, np.log10(err), 1)`` للتقارب الطيفي، و ``np.polyfit(np.log10(N), np.log10(err), 1)`` للجبري.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -4.0',[['The slope of `log e` against `log N`.','ميل `log e` مقابل `log N`.']],['$ 4.0','$ -1.0','$ -16.0'],'import numpy as np\nN = np.array([8, 16, 32, 64])\nerr = 3.0 * N**-4.0\nprint(round(np.polyfit(np.log10(N), np.log10(err), 1)[0], 6))'),
  Q('Errors fall by a constant factor for each added term. Which plot shows this best?','الأخطاء تصغر بعامل ثابت لكل حد مضاف. أي رسم يُظهر ذلك أفضل؟','$ semilogy',[['Exponential decay is a straight line on a semi-log plot.','التناقص الأسي خط مستقيم في الرسم نصف اللوغاريتمي.']],['$ loglog','$ plot','$ semilogx']),
  Q('Why draw a reference line such as `ρ^{−N}`?','لماذا يُرسم خط مرجعي مثل `ρ^{−N}`؟',['It shows the reader the predicted rate next to the measured one','يُظهر للقارئ المعدل المتوقع بجانب المقاس'],[['Parallel lines mean the predicted rate is achieved.','الخطوط المتوازية تعني تحقق المعدل المتوقع.']],[['To fill the figure','لملء الشكل'],['It is required by journals','تشترطه المجلات']]),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 5.6',[['The fitted slope is about −0.748, so `ρ = 10^{0.748} ≈ 5.6`.','الميل الملاءم نحو −0.748 فيكون `ρ = 10^{0.748} ≈ 5.6`.']],['$ 0.75','$ 10.0','$ 1.78'],'import numpy as np\nN = np.array([4, 8, 12, 16])\nerr = np.array([1.2e-3, 1.1e-6, 1.3e-9, 1.2e-12])\nslope = np.polyfit(N, np.log10(err), 1)[0]\nprint(round(10**(-slope), 2))'),
]);

/* ---- 505 · Unit 5 (lessons 41–50): linear algebra;  Unit 6 (lessons 51–60): SymPy ---- */
lesson('505',41,[
  ['In NumPy ``@`` is the matrix product and ``*`` multiplies element by element:','في NumPy تكون ``@`` الضرب المصفوفي و ``*`` الضرب عنصراً بعنصر:'],
  '$ A = np.array([[1, 2], [3, 4]])\nv = np.array([1, 1])\nA @ A          # [[ 7 10] [15 22]]\nA * A          # [[ 1  4] [ 9 16]]\nA @ v          # [3 7]\nv @ v          # 2   (dot product)',
  ['A 1-D array acts as a column on the right of ``@`` and as a row on the left. Use ``A.T`` for the transpose.','والمصفوفة الأحادية تعمل عموداً على يمين ``@`` وصفاً على يسارها. واستخدم ``A.T`` للمنقولة.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [[7, 10], [15, 22]] [[1, 4], [9, 16]]',[['Matrix product, then element-wise product.','الضرب المصفوفي ثم الضرب عنصراً بعنصر.']],['$ [[1, 4], [9, 16]] [[7, 10], [15, 22]]','$ [[7, 10], [15, 22]] [[7, 10], [15, 22]]','$ [[2, 4], [6, 8]] [[1, 4], [9, 16]]'],'import numpy as np\nA = np.array([[1, 2], [3, 4]])\nprint((A @ A).tolist(), (A * A).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [3, 7] [4, 6]',[['Column sums and row sums appear depending on the side.','تظهر مجاميع الصفوف أو الأعمدة حسب الجهة.']],['$ [4, 6] [3, 7]','$ [3, 7] [3, 7]','$ 10 10'],'import numpy as np\nA = np.array([[1, 2], [3, 4]])\nv = np.array([1, 1])\nprint((A @ v).tolist(), (v @ A).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 32',['4 + 10 + 18'],['$ [4, 10, 18]','$ 15','$ 21'],'import numpy as np\nprint(np.array([1, 2, 3]) @ np.array([4, 5, 6]))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ ValueError',[['A (2, 3) matrix cannot multiply a vector of length 2.','مصفوفة (2, 3) لا تضرب متجهاً طوله 2.']],['$ [5, 14]','$ [1, 2]','$ None'],'import numpy as np\nA = np.arange(6).reshape(2, 3)\ntry:\n    A @ np.array([1, 2])\nexcept ValueError:\n    print("ValueError")'),
]);

lesson('505',42,[
  ['``np.linalg.solve(A, b)`` solves `Ax = b` by LU factorization with pivoting. Always check the residual `‖Ax − b‖`:','``np.linalg.solve(A, b)`` تحل `Ax = b` بتحليل LU مع المحورة. وافحص دائماً الباقي `‖Ax − b‖`:'],
  '$ A = np.array([[2.0, 1.0], [1.0, 3.0]])\nb = np.array([3.0, 5.0])\nx = np.linalg.solve(A, b)        # [0.8 1.4]\nnp.linalg.norm(A @ x - b)        # about 1e-16',
  ['``b`` can also be a matrix: then each column is a right-hand side. A singular matrix raises ``LinAlgError``.','ويمكن أن تكون ``b`` مصفوفة فيكون كل عمود طرفاً أيمن. والمصفوفة الشاذة تسبب ``LinAlgError``.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [0.8, 1.4]',['2x + y = 3,   x + 3y = 5'],['$ [1.4, 0.8]','$ [1.0, 1.0]','$ [3.0, 5.0]'],'import numpy as np\nA = np.array([[2.0, 1.0], [1.0, 3.0]])\nprint(np.linalg.solve(A, [3.0, 5.0]).round(12).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ LinAlgError',[['The rows are equal: the matrix is singular.','الصفان متساويان: المصفوفة شاذة.']],['$ [inf, inf]','$ [0.5, 0.5]','$ None'],'import numpy as np\ntry:\n    np.linalg.solve(np.ones((2, 2)), [1.0, 2.0])\nexcept np.linalg.LinAlgError:\n    print("LinAlgError")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['The residual is at the level of rounding error.','الباقي في مستوى خطأ التقريب.']],['$ False','$ 0.0','$ 1e-16'],'import numpy as np\nrng = np.random.default_rng(0)\nA = rng.standard_normal((50, 50))\nb = rng.standard_normal(50)\nx = np.linalg.solve(A, b)\nprint(np.linalg.norm(A @ x - b) < 1e-10)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ (2, 3)',[['Three right-hand sides solved at once.','ثلاثة أطراف يمنى تُحل معاً.']],['$ (3, 2)','$ (2,)','$ (2, 2)'],'import numpy as np\nA = np.array([[2.0, 1.0], [1.0, 3.0]])\nB = np.ones((2, 3))\nprint(np.linalg.solve(A, B).shape)'),
]);

lesson('505',43,[
  ['``np.linalg.det`` and ``np.linalg.inv`` exist, but in numerical work they are rarely needed:','``np.linalg.det`` و ``np.linalg.inv`` موجودتان لكنهما نادراً ما تُحتاجان في العمل العددي:'],
  '$ np.linalg.det([[1, 2], [3, 4]])     # -2.0000000000000004\nnp.linalg.inv([[1, 2], [3, 4]])     # [[-2.   1. ] [ 1.5 -0.5]]',
  ['To solve a system, ``solve`` is about three times cheaper than forming the inverse and more accurate. The determinant is a poor test of near-singularity: ``det(0.1 I_{50}) = 10^{−50}`` for a perfectly conditioned matrix; use the condition number instead.','ولحل نظام تكون ``solve`` أرخص من تكوين المعكوس بنحو ثلاث مرات وأدق. والمحدد اختبار سيئ لقرب الشذوذ: ``det(0.1 I_{50}) = 10^{−50}`` لمصفوفة شرطها مثالي، فاستخدم عدد الشرط بدلاً منه.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -2.0',[['Rounded; the raw value carries a rounding error in the last digit.','بعد التقريب، والقيمة الخام فيها خطأ تقريب في آخر رقم.']],['$ 2.0','$ -2','$ 10.0'],'import numpy as np\nprint(round(np.linalg.det(np.array([[1, 2], [3, 4]])), 10))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1e-50 1.0',[['A tiny determinant, yet condition number 1.','محدد صغير جداً لكن عدد الشرط 1.']],['$ 0.0 inf','$ 1e-50 1e50','$ 0.1 1.0'],'import numpy as np\nA = 0.1 * np.eye(50)\nprint(f"{np.linalg.det(A):.0e}", np.linalg.cond(A))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [[-2.0, 1.0], [1.5, -0.5]]',['#f{1}{−2}#m{4, −2 ;; −3, 1}'],['$ [[4.0, -2.0], [-3.0, 1.0]]','$ [[1.0, 0.5], [0.3333, 0.25]]','$ [[-2.0, 1.5], [1.0, -0.5]]'],'import numpy as np\nprint(np.linalg.inv(np.array([[1.0, 2.0], [3.0, 4.0]])).round(10).tolist())'),
  Q('Why prefer ``solve(A, b)`` to ``inv(A) @ b``?','لماذا نفضّل ``solve(A, b)`` على ``inv(A) @ b``؟',['Less work and smaller rounding errors','عمل أقل وأخطاء تقريب أصغر'],[['Forming the inverse costs about three times as much.','تكوين المعكوس يكلف نحو ثلاثة أضعاف.']],[['They are identical','متطابقتان'],['inv is exact','inv مضبوطة']]),
]);

lesson('505',44,[
  ['``np.linalg.eig`` computes eigenvalues and eigenvectors of a general matrix; for symmetric matrices use ``eigh``, which is faster, returns real values in increasing order and orthonormal vectors:','``np.linalg.eig`` تحسب القيم والمتجهات الذاتية لمصفوفة عامة، وللمصفوفات المتماثلة استخدم ``eigh`` الأسرع التي تعيد قيماً حقيقية تصاعدية ومتجهات متعامدة معيارية:'],
  '$ S = np.array([[2.0, 1.0], [1.0, 2.0]])\nvals, vecs = np.linalg.eigh(S)     # vals = [1. 3.]\nvecs[:, 1]                         # eigenvector for 3: ±[0.707 0.707]',
  ['The columns of ``vecs`` are the eigenvectors. Golub–Welsch (Lesson 73) applies ``eigh`` to the symmetric Jacobi matrix: the eigenvalues are the Gauss nodes.','وأعمدة ``vecs`` هي المتجهات الذاتية. وطريقة Golub–Welsch (الدرس 73) تطبق ``eigh`` على مصفوفة جاكوبي المتماثلة فتكون القيم الذاتية عقد جاوس.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1.0, 3.0]',[['Increasing order.','ترتيب تصاعدي.']],['$ [3.0, 1.0]','$ [2.0, 2.0]','$ [0.0, 4.0]'],'import numpy as np\nvals, vecs = np.linalg.eigh(np.array([[2.0, 1.0], [1.0, 2.0]]))\nprint(vals.round(12).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [-0.57735, 0.57735]',['λ^2 = #f{1}{3}',['The 2-point Gauss–Legendre nodes.','عقد جاوس–ليجندر ذات النقطتين.']],['$ [-0.5, 0.5]','$ [0.0, 0.57735]','$ [-1.0, 1.0]'],'import numpy as np\nb = 1 / np.sqrt(3)\nprint(np.linalg.eigh(np.array([[0, b], [b, 0]]))[0].round(5).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['`Sv = λv` for each column.','`Sv = λv` لكل عمود.']],['$ False','$ 3.0','$ None'],'import numpy as np\nS = np.array([[2.0, 1.0], [1.0, 2.0]])\nvals, vecs = np.linalg.eigh(S)\nprint(np.allclose(S @ vecs, vecs * vals))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1j, -1j]',[['A rotation matrix has complex eigenvalues ±i.','مصفوفة الدوران لها قيم ذاتية مركبة ±i.']],['$ [1.0, -1.0]','$ [0.0, 0.0]','$ [1, 1]'],'import numpy as np\nvals = np.linalg.eig(np.array([[0.0, -1.0], [1.0, 0.0]]))[0]\nprint([complex(round(v.real, 12), round(v.imag, 12)) for v in vals])'),
]);

lesson('505',45,[
  ['``np.linalg.norm`` computes vector and matrix norms; ``np.linalg.cond`` the condition number `κ = ‖A‖‖A^{−1}‖`:','``np.linalg.norm`` تحسب معايير المتجهات والمصفوفات، و ``np.linalg.cond`` عدد الشرط `κ = ‖A‖‖A^{−1}‖`:'],
  '$ v = np.array([1.0, -2.0, 2.0])\nnp.linalg.norm(v)            # 3.0\nnp.linalg.norm(v, np.inf)    # 2.0\nnp.linalg.norm(v, 1)         # 5.0\nfrom scipy.linalg import hilbert\nnp.linalg.cond(hilbert(8))       # about 1.5e10',
  ['A solve loses roughly `log_{10} κ` digits. Spectral collocation matrices grow like `N^{2}` per derivative, so check κ when results stop improving.','والحل يفقد نحو `log_{10} κ` رقماً. ومصفوفات التجميع الطيفي تنمو مثل `N^{2}` لكل مشتقة، فافحص κ حين تتوقف النتائج عن التحسن.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3.0 2.0 5.0',['#r{1 + 4 + 4},   max |v_i|,   Σ |v_i|'],['$ 5.0 2.0 3.0','$ 3.0 5.0 2.0','$ 9.0 2.0 5.0'],'import numpy as np\nv = np.array([1.0, -2.0, 2.0])\nprint(np.linalg.norm(v), np.linalg.norm(v, np.inf), np.linalg.norm(v, 1))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 10',[['The exponent of κ for the 8 × 8 Hilbert matrix.','أس κ لمصفوفة هيلبرت 8 × 8.']],['$ 8','$ 16','$ 4'],'import numpy as np\nfrom scipy.linalg import hilbert\nprint(int(np.log10(np.linalg.cond(hilbert(8)))))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1000000.0',['#f{1}{10^{−6}}'],['$ 1e-06','$ 1.0','$ 1000.0'],'import numpy as np\nprint(round(np.linalg.cond(np.diag([1.0, 1e-6])), 6))'),
  Q('With `κ ≈ 10^{10}`, about how many correct digits does a double-precision solve keep?','مع `κ ≈ 10^{10}` كم رقماً صحيحاً تقريباً يبقى في حل بدقة مزدوجة؟','≈ 6',['16 − 10'],['≈ 16','≈ 10','≈ 1']),
]);

lesson('505',46,[
  ['SciPy exposes the factorizations, which can be reused for many right-hand sides:','تكشف SciPy عن التحليلات التي يمكن إعادة استخدامها لأطراف يمنى كثيرة:'],
  '$ from scipy.linalg import lu_factor, lu_solve, qr, cholesky\nlu, piv = lu_factor(A);  x = lu_solve((lu, piv), b)\nQ, R = qr(A)                 # Q orthogonal, R upper triangular\nL = np.linalg.cholesky(S)    # S = L L^T for symmetric positive definite S',
  ['Factor once and solve many times, for example in time stepping with a fixed matrix. Cholesky is twice as cheap as LU but needs a symmetric positive definite matrix, such as a Galerkin mass or stiffness matrix.','حلّل مرة وحلّ مرات، مثلاً في الخطوات الزمنية بمصفوفة ثابتة. و Cholesky أرخص من LU بمرتين لكنها تحتاج مصفوفة متماثلة موجبة التعريف مثل مصفوفة الكتلة أو الجساءة في جاليركن.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True True',[['Q is orthogonal and QR reproduces A.','Q متعامدة و QR تعيد A.']],['$ True False','$ False True','$ False False'],'import numpy as np\nfrom scipy.linalg import qr\nA = np.array([[1.0, 2.0], [3.0, 4.0]])\nQ, R = qr(A)\nprint(np.allclose(Q.T @ Q, np.eye(2)), np.allclose(Q @ R, A))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [[2.0, 0.0], [1.0, 1.4142]]',['L_{11} = #r{4},   L_{21} = #f{2}{2},   L_{22} = #r{3 − 1}'],['$ [[2.0, 1.0], [0.0, 1.4142]]','$ [[4.0, 0.0], [2.0, 2.0]]','$ [[1.0, 0.0], [0.5, 1.0]]'],'import numpy as np\nS = np.array([[4.0, 2.0], [2.0, 3.0]])\nprint(np.linalg.cholesky(S).round(4).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ LinAlgError',[['The matrix is not positive definite.','المصفوفة ليست موجبة التعريف.']],['$ [[1.0, 0.0], [2.0, nan]]','$ None','$ [[1.0, 2.0], [2.0, 1.0]]'],'import numpy as np\ntry:\n    np.linalg.cholesky(np.array([[1.0, 2.0], [2.0, 1.0]]))\nexcept np.linalg.LinAlgError:\n    print("LinAlgError")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [0.8, 1.4] [1.0, 1.0]',[['One factorization, two solves.','تحليل واحد وحلان.']],['$ [0.8, 1.4] [0.8, 1.4]','$ [1.0, 1.0] [0.8, 1.4]','$ [3.0, 5.0] [3.0, 4.0]'],'import numpy as np\nfrom scipy.linalg import lu_factor, lu_solve\nA = np.array([[2.0, 1.0], [1.0, 3.0]])\nf = lu_factor(A)\nx1 = lu_solve(f, [3.0, 5.0]).round(12)\nx2 = lu_solve(f, [3.0, 4.0]).round(12)\nprint(x1.tolist(), x2.tolist())'),
]);

lesson('505',47,[
  ['When there are more equations than unknowns, ``np.linalg.lstsq`` finds the x that minimizes `‖Ax − b‖_2`. Fitting a line or a polynomial is the classic case:','حين تكون المعادلات أكثر من المجاهيل تجد ``np.linalg.lstsq`` قيمة x التي تصغّر `‖Ax − b‖_2`. وملاءمة خط أو كثيرة حدود هي الحالة الكلاسيكية:'],
  '$ t = np.array([0.0, 1.0, 2.0, 3.0])\ny = np.array([1.0, 2.9, 5.1, 7.0])\nA = np.column_stack([np.ones_like(t), t])\ncoef, res, rank, sv = np.linalg.lstsq(A, y, rcond=None)\nnp.polyfit(t, y, 1)          # the same line, highest power first',
  ['Least squares on the logarithm of the errors gives the observed convergence rate, as in Lesson 40.','والمربعات الصغرى على لوغاريتم الأخطاء تعطي معدل التقارب الملاحظ كما في الدرس 40.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1.0, 2.0]',[['The data lie exactly on `y = 1 + 2t`.','البيانات تقع بالضبط على `y = 1 + 2t`.']],['$ [2.0, 1.0]','$ [0.0, 2.0]','$ [1.0, 1.0]'],'import numpy as np\nt = np.arange(4.0)\ny = 1 + 2 * t\nA = np.column_stack([np.ones_like(t), t])\nprint(np.linalg.lstsq(A, y, rcond=None)[0].round(10).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [2.0, 1.0]',[['polyfit returns the highest power first.','polyfit تعيد أعلى قوة أولاً.']],['$ [1.0, 2.0]','$ [2.0]','$ [0.0, 2.0, 1.0]'],'import numpy as np\nt = np.arange(4.0)\nprint(np.polyfit(t, 1 + 2 * t, 1).round(10).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2.02 0.97',['m = #f{Σ(t_i − t̄)(y_i − ȳ)}{Σ(t_i − t̄)^2} = #f{10.1}{5},   c = ȳ − m t̄ = 4 − 2.02·1.5'],['$ 2.0 1.0','$ 1.0 2.0','$ 0.97 2.02'],'import numpy as np\nt = np.array([0.0, 1.0, 2.0, 3.0])\ny = np.array([1.0, 2.9, 5.1, 7.0])\nm, c = np.polyfit(t, y, 1)\nprint(round(m, 2), round(c, 2))'),
  Q('What does ``lstsq`` minimize?','ماذا تصغّر ``lstsq``؟','‖Ax − b‖_2',[['The Euclidean norm of the residual.','المعيار الإقليدي للباقي.']],['‖x‖_2','‖Ax − b‖_∞','‖A‖_2']),
]);

lesson('505',48,[
  ['``scipy.sparse`` stores only the nonzero entries; ``spsolve`` solves sparse systems:','``scipy.sparse`` تخزن العناصر غير الصفرية فقط، و ``spsolve`` تحل الأنظمة المتفرقة:'],
  '$ import scipy.sparse as sp\nfrom scipy.sparse.linalg import spsolve\nn = 1000;  h = 1 / (n + 1)\nT = sp.diags([-1, 2, -1], [-1, 0, 1], shape=(n, n), format="csr") / h**2\nu = spsolve(T, np.ones(n))',
  ['A dense 1000 × 1000 matrix stores `10^6` numbers; the tridiagonal one about `3 × 10^3`. Use the ``csr`` format for arithmetic and solving.','المصفوفة الكثيفة 1000 × 1000 تخزن `10^6` عدد، وثلاثية القطر نحو `3 × 10^3`. واستخدم صيغة ``csr`` للحساب والحل.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2998',['1000 + 999 + 999'],['$ 3000','$ 1000000','$ 1000'],'import scipy.sparse as sp\nT = sp.diags([-1, 2, -1], [-1, 0, 1], shape=(1000, 1000), format="csr")\nprint(T.nnz)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.125',[['`−u″ = 1`, `u(0) = u(1) = 0` gives `u = x(1 − x)/2`; at x = 1/2 this is 1/8, reproduced exactly.','`−u″ = 1` مع `u(0) = u(1) = 0` تعطي `u = x(1 − x)/2`، وعند x = 1/2 تساوي 1/8 وتُعاد بالضبط.']],['$ 0.25','$ 0.5','$ 0.0625'],'import numpy as np\nimport scipy.sparse as sp\nfrom scipy.sparse.linalg import spsolve\nn = 999\nh = 1 / (n + 1)\nT = sp.diags([-1, 2, -1], [-1, 0, 1], shape=(n, n), format="csr") / h**2\nu = spsolve(T, np.ones(n))\nprint(round(u[n // 2], 10))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [[2.0, -1.0, 0.0], [-1.0, 2.0, -1.0], [0.0, -1.0, 2.0]]',[['``toarray`` converts to a dense array.','``toarray`` تحول إلى مصفوفة كثيفة.']],['$ [[2.0, 1.0, 0.0], [1.0, 2.0, 1.0], [0.0, 1.0, 2.0]]','$ [2.0, -1.0, 2.0]','$ [[-1.0, 2.0, -1.0]]'],'import scipy.sparse as sp\nT = sp.diags([-1.0, 2.0, -1.0], [-1, 0, 1], shape=(3, 3))\nprint(T.toarray().tolist())'),
  Q('Which sparse format is best for solving and products?','أي صيغة متفرقة أفضل للحل والضرب؟','$ csr',[['Compressed sparse rows; ``lil`` or ``coo`` are for building.','الصفوف المتفرقة المضغوطة، و ``lil`` أو ``coo`` للبناء.']],['$ dense','$ lil','$ dok']),
]);

lesson('505',49,[
  ['``np.kron(A, B)`` is the Kronecker product. With column stacking, a matrix equation becomes a linear system:','``np.kron(A, B)`` هي ضرب كرونيكر. ومع رص الأعمدة تصبح المعادلة المصفوفية نظاماً خطياً:'],
  '$ vec = lambda Y: Y.ravel(order="F")\nnp.allclose(vec(A @ Y @ B), np.kron(B.T, A) @ vec(Y))     # True\n# solve  A Y + Y B = C\nfrom scipy.linalg import solve_sylvester\nY = solve_sylvester(A, B, C)',
  ['The Kronecker system has `n^2` unknowns for n × n factors, so it is built only for small problems; ``solve_sylvester`` solves `AY + YB = C` in `O(n^3)` without forming it.','ونظام كرونيكر فيه `n^2` مجهولاً لعاملين n × n فلا يُبنى إلا للمسائل الصغيرة، و ``solve_sylvester`` تحل `AY + YB = C` بتكلفة `O(n^3)` دون تكوينه.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['The identity `vec(AYB) = (B^T ⊗ A) vec(Y)`.','المتطابقة `vec(AYB) = (B^T ⊗ A) vec(Y)`.']],['$ False','$ (4, 4)','$ None'],'import numpy as np\nrng = np.random.default_rng(1)\nA, Y, B = (rng.standard_normal((3, 3)) for _ in range(3))\nvec = lambda M: M.ravel(order="F")\nprint(np.allclose(vec(A @ Y @ B), np.kron(B.T, A) @ vec(Y)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ (12, 12)',['3·4 = 12'],['$ (7, 7)','$ (3, 4)','$ (9, 16)'],'import numpy as np\nprint(np.kron(np.eye(3), np.eye(4)).shape)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [[1.0, 1.0, 0.0, 0.0], [0.0, 0.0, 2.0, 2.0]]',[['Each entry of the first factor multiplies the block (1, 1).','كل عنصر في العامل الأول يضرب الكتلة (1, 1).']],['$ [[1.0, 0.0, 1.0, 0.0], [0.0, 2.0, 0.0, 2.0]]','$ [[1.0, 1.0], [2.0, 2.0]]','$ [[2.0, 2.0, 0.0, 0.0], [0.0, 0.0, 1.0, 1.0]]'],'import numpy as np\nprint(np.kron(np.diag([1.0, 2.0]), np.ones((1, 2))).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['``solve_sylvester`` agrees with the Kronecker solve.','``solve_sylvester`` تتفق مع حل كرونيكر.']],['$ False','$ (9,)','$ LinAlgError'],'import numpy as np\nfrom scipy.linalg import solve_sylvester\nrng = np.random.default_rng(2)\nA = rng.standard_normal((3, 3)) + 5 * np.eye(3)\nB = rng.standard_normal((3, 3)) + 5 * np.eye(3)\nC = rng.standard_normal((3, 3))\nY = solve_sylvester(A, B, C)\nK = np.kron(np.eye(3), A) + np.kron(B.T, np.eye(3))\ny = np.linalg.solve(K, C.ravel(order="F"))\nprint(np.allclose(Y.ravel(order="F"), y))'),
]);

lesson('505',50,[
  ['Matrices defined by formulas are built without loops from index grids:','المصفوفات المعرّفة بقوانين تُبنى دون حلقات من شبكات الأدلة:'],
  '$ r, j = np.meshgrid(np.arange(N + 1), np.arange(N + 1), indexing="ij")\nmask = (r > j) & ((r - j) % 2 == 0)\nentry = 4 / gam**2 * (r - j) / 2 * (2 * j + 1) * (r + j + 1)\nD2 = np.where(mask, entry, 0.0)',
  ['``indexing="ij"`` makes the first array vary along rows, as matrix indices do. This builds Theorem 3.1 in three lines; ``np.fromfunction`` is an alternative.','و ``indexing="ij"`` تجعل المصفوفة الأولى تتغير على الصفوف كما تفعل أدلة المصفوفات. وهذا يبني النظرية 3.1 في ثلاثة أسطر، و ``np.fromfunction`` بديل.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 12.0 60.0 40.0',[['`d_{2,0}`, `d_{3,1}`, `d_{4,0}` for γ = 1.','`d_{2,0}` و `d_{3,1}` و `d_{4,0}` عند γ = 1.']],['$ 6.0 30.0 20.0','$ 12.0 0.0 40.0','$ 3.0 15.0 10.0'],'import numpy as np\nN, gam = 4, 1.0\nr, j = np.meshgrid(np.arange(N + 1), np.arange(N + 1), indexing="ij")\nmask = (r > j) & ((r - j) % 2 == 0)\nentry = 4 / gam**2 * (r - j) / 2 * (2 * j + 1) * (r + j + 1)\nD2 = np.where(mask, entry, 0.0)\nprint(D2[2, 0], D2[3, 1], D2[4, 0])'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [[2, 3], [3, 4]]',[['``fromfunction`` passes the index arrays.','``fromfunction`` تمرر مصفوفات الأدلة.']],['$ [[0, 1], [1, 2]]','$ [[1, 2], [2, 3]]','$ [2, 3, 3, 4]'],'import numpy as np\nprint(np.fromfunction(lambda i, j: i + j + 2, (2, 2), dtype=int).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [[1.0, 0.5], [0.5, 0.3333]]',['#f{1}{i + j + 1}'],['$ [[1.0, 0.5], [0.3333, 0.25]]','$ [[0.5, 0.3333], [0.3333, 0.25]]','$ [[1.0, 1.0], [1.0, 1.0]]'],'import numpy as np\ni, j = np.meshgrid(np.arange(2), np.arange(2), indexing="ij")\nprint((1 / (i + j + 1)).round(4).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [[0, 0], [1, 1]] [[0, 1], [0, 1]]',[['With ``"ij"`` the first array follows the rows.','مع ``"ij"`` تتبع المصفوفة الأولى الصفوف.']],['$ [[0, 1], [0, 1]] [[0, 0], [1, 1]]','$ [[0, 0], [0, 0]] [[1, 1], [1, 1]]','$ [0, 1] [0, 1]'],'import numpy as np\ni, j = np.meshgrid(np.arange(2), np.arange(2), indexing="ij")\nprint(i.tolist(), j.tolist())'),
]);

lesson('505',51,[
  ['SymPy computes with symbols exactly. Symbols are created explicitly and expressions are built with ordinary operators:','SymPy تحسب بالرموز بالضبط. تُنشأ الرموز صراحة وتُبنى المقادير بالعمليات العادية:'],
  '$ import sympy as sp\nx, t = sp.symbols("x t")\nexpr = (x + 1)**2\nsp.expand(expr)          # x**2 + 2*x + 1\nexpr.subs(x, 3)          # 16',
  ['SymPy prints with ``**`` and ``*``; ``sp.pprint`` or ``sp.latex(expr)`` give nicer forms. ``subs`` replaces a symbol without changing the expression itself.','وتطبع SymPy بـ ``**`` و ``*``، و ``sp.pprint`` أو ``sp.latex(expr)`` تعطيان صوراً أجمل. و ``subs`` تستبدل رمزاً دون تغيير المقدار نفسه.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ x**2 + 2*x + 1',[['SymPy writes powers with ``**``.','SymPy تكتب القوى بـ ``**``.']],['$ (x + 1)**2','$ x^2 + 2x + 1','$ 1 + 2*x + x**2'],'import sympy as sp\nx = sp.symbols("x")\nprint(sp.expand((x + 1)**2))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 16 (x + 1)**2',[['subs returns a new expression; the original is unchanged.','subs تعيد مقداراً جديداً والأصل لا يتغير.']],['$ 16 16','$ (x + 1)**2 16','$ 16 x'],'import sympy as sp\nx = sp.symbols("x")\ne = (x + 1)**2\nprint(e.subs(x, 3), e)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ \\frac{3 x^{2}}{2} - \\frac{1}{2}',[['``latex`` gives the LaTeX source.','``latex`` تعطي مصدر LaTeX.']],['$ 3*x**2/2 - 1/2','$ \\frac{3x^2 - 1}{2}','$ (3x^2-1)/2'],'import sympy as sp\nx = sp.symbols("x")\nprint(sp.latex(sp.legendre(2, x)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['A symbol with ``positive=True`` lets SymPy simplify `#r{t^2}`.','الرمز مع ``positive=True`` يسمح لـ SymPy بتبسيط `#r{t^2}`.']],['$ False','$ t','$ Abs(t)'],'import sympy as sp\nt = sp.symbols("t", positive=True)\nprint(sp.sqrt(t**2) == t)'),
]);

lesson('505',52,[
  ['Exact numbers: ``sp.Rational(1, 3)``, ``sp.sqrt(2)``, ``sp.pi``. A Python expression such as ``1/3`` is a float before SymPy sees it:','الأعداد المضبوطة: ``sp.Rational(1, 3)`` و ``sp.sqrt(2)`` و ``sp.pi``. والمقدار ``1/3`` في بايثون عدد عشري قبل أن تراه SymPy:'],
  '$ sp.Rational(1, 3) + sp.Rational(1, 6)     # 1/2\nsp.sqrt(8)                                # 2*sqrt(2)\nx / 3, x * (1/3)                          # x/3, 0.333333333333333*x\nsp.N(sp.pi, 30)                           # 30 digits',
  ['Write fractions with ``sp.Rational`` or ``sp.S(1)/3``, or divide a symbol by an integer; otherwise the float silently destroys exactness.','واكتب الكسور بـ ``sp.Rational`` أو ``sp.S(1)/3``، أو اقسم رمزاً على عدد صحيح، وإلا فإن العدد العشري يفسد الضبط دون أن يُلاحظ.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1/2',['#f{1}{3} + #f{1}{6} = #f{1}{2}'],['$ 0.5','$ 0.500000000000000','$ 2/6'],'import sympy as sp\nprint(sp.Rational(1, 3) + sp.Rational(1, 6))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.333333333333333*x',[['``1/3`` is computed by Python as a float first.','``1/3`` يحسبها بايثون عدداً عشرياً أولاً.']],['$ x/3','$ 1/3*x','$ x*0.33'],'import sympy as sp\nx = sp.symbols("x")\nprint(x * (1/3))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2*sqrt(2)',['#r{8} = 2#r{2}'],['$ 2.82842712474619','$ sqrt(8)','$ 2.83'],'import sympy as sp\nprint(sp.sqrt(8))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3.14159265358979323846264338328',[['``N`` with 30 significant digits.','``N`` بـ 30 رقماً معنوياً.']],['$ 3.141592653589793','$ pi','$ 3.14'],'import sympy as sp\nprint(sp.N(sp.pi, 30))'),
]);

lesson('505',53,[
  ['Algebraic simplification:','التبسيط الجبري:'],
  '$ sp.expand((x - 1)*(x + 2))          # x**2 + x - 2\nsp.factor(x**2 - 3*x + 2)            # (x - 2)*(x - 1)\nsp.simplify(sp.sin(x)**2 + sp.cos(x)**2)   # 1\nsp.apart(1/(x**2 - 1)), sp.together(1/x + 1/(x + 1))',
  ['``simplify`` tries many strategies and can be slow; the specific functions (``expand``, ``factor``, ``cancel``, ``apart``, ``trigsimp``) are faster and predictable.','و ``simplify`` تجرب استراتيجيات كثيرة وقد تكون بطيئة، والدوال المحددة (``expand`` و ``factor`` و ``cancel`` و ``apart`` و ``trigsimp``) أسرع ونتائجها متوقعة.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ (x - 2)*(x - 1)',['x^2 − 3x + 2'],['$ (x - 1)*(x - 2)','$ x**2 - 3*x + 2','$ (x + 1)*(x + 2)'],'import sympy as sp\nx = sp.symbols("x")\nprint(sp.factor(x**2 - 3*x + 2))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -1/(2*(x + 1)) + 1/(2*(x - 1))',['#f{1}{x^2 − 1} = #f{1}{2}(#f{1}{x − 1} − #f{1}{x + 1})'],['$ 1/(x - 1) - 1/(x + 1)','$ 1/((x - 1)*(x + 1))','$ 1/(2*(x - 1)) + 1/(2*(x + 1))'],'import sympy as sp\nx = sp.symbols("x")\nprint(sp.apart(1/(x**2 - 1)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1',[['The Pythagorean identity.','متطابقة فيثاغورس.']],['$ sin(x)**2 + cos(x)**2','$ 0','$ 2'],'import sympy as sp\nx = sp.symbols("x")\nprint(sp.simplify(sp.sin(x)**2 + sp.cos(x)**2))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0',[['Bonnet’s recurrence for n = 2 expands to zero.','علاقة بونيه عند n = 2 تُنشر إلى الصفر.']],['$ x','$ 3*x**3','$ None'],'import sympy as sp\nx = sp.symbols("x")\nP = lambda n: sp.legendre(n, x)\nprint(sp.expand(3*P(3) - 5*x*P(2) + 2*P(1)))'),
]);

lesson('505',54,[
  ['``sp.diff`` differentiates and ``sp.integrate`` integrates, exactly:','``sp.diff`` تشتق و ``sp.integrate`` تكامل بالضبط:'],
  '$ sp.diff(x**3, x)                                  # 3*x**2\nsp.diff(sp.sin(x), x, 2)                           # -sin(x)\nsp.integrate(x**2, (x, 0, 1))                      # 1/3\nsp.integrate(sp.legendre(2, x)**2, (x, -1, 1))     # 2/5',
  ['With positive symbols, integrals with fractional powers come out in closed form, for example `∫_0^1 t^{μ}(1 − t) dt = 1/((μ + 1)(μ + 2))`.','ومع الرموز الموجبة تخرج التكاملات ذات القوى الكسرية بصيغة مغلقة، مثل `∫_0^1 t^{μ}(1 − t) dt = 1/((μ + 1)(μ + 2))`.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2/5',['#f{2}{2n + 1},   n = 2'],['$ 2/3','$ 0.4','$ 1/5'],'import sympy as sp\nx = sp.symbols("x")\nprint(sp.integrate(sp.legendre(2, x)**2, (x, -1, 1)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2/3',['∫_0^1 t^{1/2} dt'],['$ 1/2','$ 0.666666666666667','$ 3/2'],'import sympy as sp\nt = sp.symbols("t", positive=True)\nprint(sp.integrate(sp.sqrt(t), (t, 0, 1)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3*x',['#f{d}{dx}#f{3x^2 − 1}{2}'],['$ 6*x','$ 3*x**2/2','$ x'],'import sympy as sp\nx = sp.symbols("x")\nprint(sp.diff(sp.legendre(2, x), x))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1/(mu**2 + 3*mu + 2)',['#f{1}{μ + 1} − #f{1}{μ + 2}'],['$ 1/(mu + 1)','$ 1/((mu + 1)*(mu + 2))','$ mu/(mu + 2)'],'import sympy as sp\nt, mu = sp.symbols("t mu", positive=True)\nprint(sp.simplify(sp.integrate(t**mu * (1 - t), (t, 0, 1))))'),
]);

lesson('505',55,[
  ['``sp.solve`` solves equations (given as expressions equal to zero, or with ``sp.Eq``); ``sp.linsolve`` solves linear systems:','``sp.solve`` تحل المعادلات (معطاة مقادير تساوي الصفر أو بـ ``sp.Eq``)، و ``sp.linsolve`` تحل الأنظمة الخطية:'],
  '$ sp.solve(x**2 - 5*x + 6, x)                     # [2, 3]\nsp.solve(sp.Eq(sp.legendre(2, x), 0), x)        # [-sqrt(3)/3, sqrt(3)/3]\nsp.linsolve([a + 2*b - 3, 3*a - b - 1], [a, b])  # {(5/7, 8/7)}',
  ['For high-degree polynomials there are no closed formulas; use ``sp.nroots`` or numerical methods.','ولكثيرات الحدود عالية الدرجة لا توجد صيغ مغلقة، فاستخدم ``sp.nroots`` أو الطرق العددية.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [2, 3]',['(x − 2)(x − 3) = 0'],['$ [-2, -3]','$ {2, 3}','$ [x - 2, x - 3]'],'import sympy as sp\nx = sp.symbols("x")\nprint(sp.solve(x**2 - 5*x + 6, x))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [-sqrt(3)/3, sqrt(3)/3]',['x^2 = #f{1}{3}'],['$ [-1/3, 1/3]','$ [-0.577, 0.577]','$ [sqrt(3)]'],'import sympy as sp\nx = sp.symbols("x")\nprint(sp.solve(sp.legendre(2, x), x))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ {(5/7, 8/7)}',['a = 3 − 2b,   3(3 − 2b) − b = 1'],['$ {(8/7, 5/7)}','$ [5/7, 8/7]','$ {(1, 1)}'],'import sympy as sp\na, b = sp.symbols("a b")\nprint(sp.linsolve([a + 2*b - 3, 3*a - b - 1], [a, b]))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [-0.861136, -0.339981, 0.339981, 0.861136]',[['The 4-point Gauss–Legendre nodes.','عقد جاوس–ليجندر الأربع.']],['$ [-0.774597, 0.0, 0.774597]','$ [-1.0, -0.5, 0.5, 1.0]','$ [-0.57735, 0.57735]'],'import sympy as sp\nx = sp.symbols("x")\nprint([round(float(r), 6) for r in sp.nroots(sp.legendre(4, x))])'),
]);

lesson('505',56,[
  ['Series expansions and limits:','مفكوكات المتسلسلات والنهايات:'],
  '$ sp.series(sp.exp(x), x, 0, 4)        # 1 + x + x**2/2 + x**3/6 + O(x**4)\nsp.series(sp.gamma(1 + x), x, 0, 2)    # 1 - EulerGamma*x + O(x**2)\nsp.limit(sp.sin(x)/x, x, 0)            # 1\nsp.limit((1 + 1/n)**n, n, sp.oo)       # E',
  ['``.removeO()`` drops the order term. ``sp.oo`` is infinity; one-sided limits use ``dir="+"`` or ``dir="-"``.','و ``.removeO()`` تحذف حد الرتبة. و ``sp.oo`` اللانهاية، والنهايات من جهة واحدة تستخدم ``dir="+"`` أو ``dir="-"``.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1 - x**2/6 + x**4/120 + O(x**6)',['#f{sin x}{x} = 1 − #f{x^2}{6} + #f{x^4}{120} − …'],['$ x - x**3/6 + O(x**6)','$ 1 - x**2/2 + x**4/24 + O(x**6)','$ 1 + O(x**6)'],'import sympy as sp\nx = sp.symbols("x")\nprint(sp.series(sp.sin(x)/x, x, 0, 6))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ E',[['The limit defining e.','النهاية التي تعرّف e.']],['$ 1','$ oo','$ 2.71828182845905'],'import sympy as sp\nn = sp.symbols("n", positive=True)\nprint(sp.limit((1 + 1/n)**n, n, sp.oo))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -oo oo',[['One-sided limits of `1/x` at 0.','النهايتان من جهة واحدة لـ `1/x` عند 0.']],['$ oo oo','$ 0 0','$ oo -oo'],'import sympy as sp\nx = sp.symbols("x")\nprint(sp.limit(1/x, x, 0, dir="-"), sp.limit(1/x, x, 0, dir="+"))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 4/3',['#f{2^3}{3!}'],['$ 8','$ 1/6','$ 2/3'],'import sympy as sp\nx = sp.symbols("x")\nprint(sp.series(sp.exp(2*x), x, 0, 4).removeO().coeff(x, 3))'),
]);

lesson('505',57,[
  ['SymPy knows the special functions of the programme, exactly:','SymPy تعرف الدوال الخاصة في البرنامج بالضبط:'],
  '$ sp.gamma(sp.Rational(5, 2))      # 3*sqrt(pi)/4\nsp.beta(2, 3)                     # 1/12\nsp.legendre(3, x)                 # 5*x**3/2 - 3*x/2\nsp.jacobi(1, 1, 0, x)             # 3*x/2 + 1/2\nsp.chebyshevt(3, x)               # 4*x**3 - 3*x',
  ['These exact forms are the reference against which numerical code is tested. For general symbolic n they stay unevaluated: ``sp.legendre(n, x)``.','وهذه الصيغ المضبوطة هي المرجع الذي يُختبر عليه الكود العددي. وعند n رمزي تبقى دون حساب: ``sp.legendre(n, x)``.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3*sqrt(pi)/4',['Γ(#f{5}{2}) = #f{3}{2}·#f{1}{2}#r{π}'],['$ 1.32934038817914','$ sqrt(pi)/2','$ 3/4'],'import sympy as sp\nprint(sp.gamma(sp.Rational(5, 2)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3*x/2 + 1/2',['P_1^{(1,0)}(x) = #f{3x + 1}{2}'],['$ x','$ 2*x + 1','$ 3*x + 1'],'import sympy as sp\nx = sp.symbols("x")\nprint(sp.jacobi(1, 1, 0, x))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 6*t**2 - 6*t + 1',['P_2^*(t) = P_2(2t − 1)'],['$ 3*t**2 - 1','$ 6*t**2 + 6*t + 1','$ 2*t - 1'],'import sympy as sp\nt = sp.symbols("t")\nprint(sp.expand(sp.legendre(2, 2*t - 1)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1/12',['#f{Γ(2)Γ(3)}{Γ(5)} = #f{2}{24}'],['$ 1/6','$ 2/24','$ 0.0833'],'import sympy as sp\nprint(sp.beta(2, 3))'),
]);

lesson('505',58,[
  ['``sp.Matrix`` holds exact entries and supports exact linear algebra:','``sp.Matrix`` تحمل عناصر مضبوطة وتدعم الجبر الخطي المضبوط:'],
  '$ M = sp.Matrix([[2, 1], [1, 2]])\nM.det(), M.inv()            # 3, Matrix([[2/3, -1/3], [-1/3, 2/3]])\nM.eigenvals()               # {3: 1, 1: 1}  (value: multiplicity)\nM * M, M.T',
  ['In SymPy ``*`` is the matrix product. Exact matrices are slow beyond a few dozen rows, but they verify small cases without rounding error.','في SymPy تكون ``*`` الضرب المصفوفي. والمصفوفات المضبوطة بطيئة بعد بضع عشرات من الصفوف، لكنها تتحقق من الحالات الصغيرة دون خطأ تقريب.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3 Matrix([[2/3, -1/3], [-1/3, 2/3]])',[['Exact fractions.','كسور مضبوطة.']],['$ 3.0 Matrix([[0.667, -0.333], [-0.333, 0.667]])','$ 3 Matrix([[2, -1], [-1, 2]])','$ -3 Matrix([[2/3, 1/3], [1/3, 2/3]])'],'import sympy as sp\nM = sp.Matrix([[2, 1], [1, 2]])\nprint(M.det(), M.inv())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ {3: 1, 1: 1}',[['Each eigenvalue with its multiplicity.','كل قيمة ذاتية مع تكرارها.']],['$ [1, 3]','$ {1: 3}','$ (3, 1)'],'import sympy as sp\nprint(sp.Matrix([[2, 1], [1, 2]]).eigenvals())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ Matrix([[7, 10], [15, 22]])',[['``*`` is the matrix product for SymPy matrices.','``*`` هي الضرب المصفوفي لمصفوفات SymPy.']],['$ Matrix([[1, 4], [9, 16]])','$ Matrix([[2, 4], [6, 8]])','$ [[7, 10], [15, 22]]'],'import sympy as sp\nM = sp.Matrix([[1, 2], [3, 4]])\nprint(M * M)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ Matrix([[1], [1]])',['2x + y = 3,   x + 2y = 3'],['$ Matrix([[1/2], [1/2]])','$ Matrix([[3], [3]])','$ [1, 1]'],'import sympy as sp\nM = sp.Matrix([[2, 1], [1, 2]])\nprint(M.LUsolve(sp.Matrix([3, 3])))'),
]);

lesson('505',59,[
  ['``sp.lambdify`` turns a SymPy expression into a fast NumPy function, the bridge from exact derivation to numerical computation:','``sp.lambdify`` تحول مقدار SymPy إلى دالة NumPy سريعة، وهي الجسر من الاشتقاق المضبوط إلى الحساب العددي:'],
  '$ expr = sp.legendre(5, x)\nf = sp.lambdify(x, expr, "numpy")\nxs = np.linspace(-1, 1, 1001)\nvals = f(xs)                     # an array, computed at NumPy speed',
  ['Derive once with SymPy (a source term f, a Jacobian, an exact solution), then lambdify and evaluate on grids. Calling ``expr.subs`` in a loop is thousands of times slower.','اشتق مرة بـ SymPy (حد مصدر f أو جاكوبي أو حل مضبوط) ثم استخدم lambdify واحسب على الشبكات. واستدعاء ``expr.subs`` في حلقة أبطأ بآلاف المرات.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1.0, -0.125, 1.0]',['P_2(−1) = 1,   P_2(0.5) = −0.125,   P_2(1) = 1'],['$ [1.0, 0.125, 1.0]','$ [-1.0, -0.125, 1.0]','$ [0.0, 0.5, 1.0]'],'import numpy as np\nimport sympy as sp\nx = sp.symbols("x")\nf = sp.lambdify(x, sp.legendre(2, x), "numpy")\nprint(f(np.array([-1.0, 0.5, 1.0])).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.375',[['The derivative `3x` at 0.125, lambdified.','المشتقة `3x` عند 0.125 بعد lambdify.']],['$ 3.0','$ 0.125','$ -0.4765625'],'import sympy as sp\nx = sp.symbols("x")\nd = sp.lambdify(x, sp.diff(sp.legendre(2, x), x))\nprint(d(0.125))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.4142',[['A two-variable expression becomes a two-argument function.','مقدار بمتغيرين يصبح دالة بمتغيرين.']],['$ 2.0','$ 1.0','$ 0.7071'],'import sympy as sp\nx, t = sp.symbols("x t")\nu = sp.lambdify((x, t), t**sp.Rational(3, 2) * sp.sin(sp.pi * x))\nprint(round(u(0.5, 2.0**(1/3)), 4))'),
  Q('Why lambdify instead of calling ``subs`` at each grid point?','لماذا نستخدم lambdify بدل استدعاء ``subs`` عند كل نقطة شبكة؟',['subs works symbolically and is thousands of times slower than a NumPy function','subs تعمل رمزياً وهي أبطأ بآلاف المرات من دالة NumPy'],[['lambdify evaluates whole arrays at once.','lambdify تحسب مصفوفات كاملة دفعة واحدة.']],[['subs is inexact','subs غير مضبوطة'],['There is no difference','لا فرق']]),
]);

lesson('505',60,[
  ['Before coding a formula, check it exactly on small cases. For Theorem 3.1, compare the formula with direct differentiation of the shifted Legendre polynomials:','قبل برمجة صيغة تحقق منها بالضبط على حالات صغيرة. فللنظرية 3.1 قارن الصيغة بالاشتقاق المباشر لكثيرات ليجندر المزاحة:'],
  '$ g = sp.Symbol("gamma", positive=True)\nL = lambda i: sp.legendre(i, 2*x/g - 1)\ndef d(r, j):\n    if r > j and (r - j) % 2 == 0:\n        return 4/g**2 * sp.Rational(r - j, 2) * (2*j + 1) * (r + j + 1)\n    return 0\nres = [sp.simplify(sp.diff(L(r), x, 2)\n                   - sum(d(r, j) * L(j) for j in range(r)))\n       for r in range(7)]\nok = all(e == 0 for e in res)',
  ['An exact check with symbolic γ proves the formula for these r once and for all; a numerical check at random points is the quick complement for larger r. Only then translate the formula into NumPy.','والتحقق المضبوط مع γ رمزية يثبت الصيغة لقيم r هذه مرة واحدة، والفحص العددي عند نقاط عشوائية مكمّل سريع لقيم r الأكبر. وبعدها فقط تُترجم الصيغة إلى NumPy.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['The formula matches exact differentiation for r = 0, …, 6 and any γ.','الصيغة تطابق الاشتقاق المضبوط عند r = 0, …, 6 ولأي γ.']],['$ False','$ 0','$ [True]'],'import sympy as sp\nx = sp.symbols("x")\ng = sp.Symbol("gamma", positive=True)\nL = lambda i: sp.legendre(i, 2*x/g - 1)\ndef d(r, j):\n    if r > j and (r - j) % 2 == 0:\n        return 4/g**2 * sp.Rational(r - j, 2) * (2*j + 1) * (r + j + 1)\n    return 0\nres = [sp.simplify(sp.diff(L(r), x, 2)\n                   - sum(d(r, j) * L(j) for j in range(r)))\n       for r in range(7)]\nprint(all(e == 0 for e in res))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 60/gamma**2',['d_{3,1} = #f{4}{γ^2}·1·3·5'],['$ 15/gamma**2','$ 60','$ 4/gamma**2'],'import sympy as sp\ng = sp.Symbol("gamma", positive=True)\nd = lambda r, j: 4/g**2 * sp.Rational(r - j, 2) * (2*j + 1) * (r + j + 1)\nprint(d(3, 1))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0',[['Fractional orthogonality for λ = 1/2: the weight is `λt^{λ−1}`.','التعامد الكسري عند λ = 1/2: الوزن `λt^{λ−1}`.']],['$ 1/3','$ 1/5','$ 1/2'],'import sympy as sp\nt = sp.symbols("t", positive=True)\nlam = sp.Rational(1, 2)\nfL = lambda k: sp.legendre(k, 2*t**lam - 1)\nprint(sp.integrate(lam * t**(lam - 1) * fL(1) * fL(2), (t, 0, 1)))'),
  Q('Why check with a symbolic γ instead of γ = 1?','لماذا التحقق مع γ رمزية بدل γ = 1؟',['A factor such as `4/γ^2` cannot be seen at γ = 1','العامل مثل `4/γ^2` لا يظهر عند γ = 1'],[['A wrong power of γ would pass a test at γ = 1.','قوة خاطئة لـ γ تنجح في اختبار عند γ = 1.']],[['It is faster','أسرع'],['γ = 1 is not allowed','γ = 1 غير مسموح']]),
]);

/* ---- 505 · Unit 7 (lessons 61–70): SciPy;  Unit 8 (lessons 71–80): numerical methods from scratch ---- */
lesson('505',61,[
  ['``scipy.special`` provides the special functions as fast, vectorized NumPy functions:','``scipy.special`` توفر الدوال الخاصة دوالَّ NumPy سريعة ومتجهية:'],
  '$ from scipy.special import gamma, gammaln, beta, binom, factorial\ngamma([0.5, 1.5, 2.5])        # [1.7725 0.8862 1.3293]\nbeta(2, 3)                    # 0.08333 = 1/12\ngammaln(200.0)                # 857.93  (log Γ, no overflow)\nbinom(5, 2), factorial(5)     # 10.0, 120.0',
  ['They accept arrays, so a whole table of `Γ(k + 1)/Γ(k + μ + 1)` for k = 0, …, M is one line. Use ``gammaln`` and exponentiate differences when the values are large.','وهي تقبل المصفوفات، فجدول كامل لـ `Γ(k + 1)/Γ(k + μ + 1)` عند k = 0, …, M سطر واحد. واستخدم ``gammaln`` وأسّ الفروق حين تكون القيم كبيرة.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',['Γ(#f{1}{2})^2 = π'],['$ False','$ 3.141592653589793','$ 1.7724538509055159'],'import numpy as np\nfrom scipy.special import gamma\nprint(np.isclose(gamma(0.5)**2, np.pi))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1.1284, 0.7523, 0.6018]',['#f{Γ(k + 1)}{Γ(k + 3/2)},   k = 0, 1, 2'],['$ [1.0, 1.0, 1.0]','$ [0.8862, 1.3293, 3.3234]','$ [1.7725, 0.8862, 1.3293]'],'import numpy as np\nfrom scipy.special import gamma\nk = np.arange(3)\nprint(np.round(gamma(k + 1) / gamma(k + 1.5), 4).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.0833',['B(2, 3) = #f{1}{12}'],['$ 0.1667','$ 12.0','$ 0.5'],'from scipy.special import beta\nprint(round(beta(2, 3), 4))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.0',[['`Γ(200)/Γ(201) = 1/200`, computed through logarithms without overflow; times 200 gives 1.','`Γ(200)/Γ(201) = 1/200` محسوبة عبر اللوغاريتمات دون فيضان، وضربها في 200 يعطي 1.']],['$ inf','$ nan','$ 200.0'],'import numpy as np\nfrom scipy.special import gammaln\nprint(round(np.exp(gammaln(200.0) - gammaln(201.0)) * 200, 10))'),
]);

lesson('505',62,[
  ['``scipy.special`` evaluates orthogonal polynomials stably at many points:','``scipy.special`` تحسب كثيرات الحدود المتعامدة بثبات عند نقاط كثيرة:'],
  '$ from scipy.special import (eval_legendre, eval_jacobi,\n                           eval_sh_legendre, eval_chebyt)\neval_legendre(2, 0.5)          # -0.125\neval_jacobi(1, 1, 0, 1.0)      # 2.0\neval_sh_legendre(2, 0.25)      # P_2(2t - 1) at t = 0.25: -0.125\neval_chebyt(3, 0.5)            # -1.0',
  ['``eval_sh_legendre`` is the shifted Legendre polynomial on [0, 1]; the fractional functions are then ``eval_sh_legendre(k, t**lam)``.','و ``eval_sh_legendre`` هي كثيرة ليجندر المزاحة على [0, 1]، فتكون الدوال الكسرية ``eval_sh_legendre(k, t**lam)``.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -0.125 -0.125',[['`P_2^*(0.25) = P_2(−0.5) = P_2(0.5)` by symmetry.','`P_2^*(0.25) = P_2(−0.5) = P_2(0.5)` بالتماثل.']],['$ -0.125 0.125','$ 0.125 0.125','$ -0.5 -0.125'],'from scipy.special import eval_legendre, eval_sh_legendre\nprint(eval_legendre(2, 0.5), eval_sh_legendre(2, 0.25))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2.0 3.0',['P_1^{(1,0)}(1) = C(2, 1),   P_2^{(1,1)}(1) = C(3, 2)'],['$ 1.0 1.0','$ 2.0 6.0','$ 1.0 3.0'],'from scipy.special import eval_jacobi\nprint(eval_jacobi(1, 1, 0, 1.0), eval_jacobi(2, 1, 1, 1.0))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [-1.0, 0.0, 1.0]',[['`L_1^{1/2}(t) = 2#r{t} − 1` at t = 0, 1/4, 1.','`L_1^{1/2}(t) = 2#r{t} − 1` عند t = 0 و 1/4 و 1.']],['$ [-1.0, -0.5, 1.0]','$ [0.0, 0.5, 1.0]','$ [1.0, 0.0, -1.0]'],'import numpy as np\nfrom scipy.special import eval_sh_legendre\nt = np.array([0.0, 0.25, 1.0])\nprint(eval_sh_legendre(1, t**0.5).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -1.0',['T_3(0.5) = cos(3·#f{π}{3})'],['$ 1.0','$ 0.5','$ -0.5'],'from scipy.special import eval_chebyt\nprint(round(eval_chebyt(3, 0.5), 12))'),
]);

lesson('505',63,[
  ['Gauss rules come ready-made:','قواعد جاوس جاهزة:'],
  '$ from scipy.special import roots_legendre, roots_jacobi, roots_sh_legendre\nx, w = roots_legendre(5)              # on [-1, 1], weight 1\nx, w = roots_jacobi(4, 1.0, 0.0)      # weight (1 - x)^1 (1 + x)^0\nt, w = roots_sh_legendre(5)           # on [0, 1]',
  ['The weights of ``roots_jacobi(n, a, b)`` sum to `∫ (1 − x)^{a}(1 + x)^{b} dx = 2^{a+b+1}B(a + 1, b + 1)`. For the fractional rule map ``t = s**(1/lam)`` and keep the weights (Course 503, Lesson 67).','وأوزان ``roots_jacobi(n, a, b)`` مجموعها `∫ (1 − x)^{a}(1 + x)^{b} dx = 2^{a+b+1}B(a + 1, b + 1)`. وللقاعدة الكسرية حوّل ``t = s**(1/lam)`` واحتفظ بالأوزان (المقرر 503، الدرس 67).'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [-0.3333] [2.0]',[['The zero of `(3x + 1)/2` and `h_0 = 2`.','جذر `(3x + 1)/2` و `h_0 = 2`.']],['$ [0.3333] [1.0]','$ [0.0] [2.0]','$ [-0.5] [2.0]'],'import numpy as np\nfrom scipy.special import roots_jacobi\nx, w = roots_jacobi(1, 1.0, 0.0)\nprint(np.round(x, 4).tolist(), np.round(w, 4).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.333333',[['`2^3 B(2, 2) = 8/6` for a = b = 1.','`2^3 B(2, 2) = 8/6` عند a = b = 1.']],['$ 2.0','$ 0.666667','$ 1.0'],'from scipy.special import roots_jacobi\nx, w = roots_jacobi(6, 1.0, 1.0)\nprint(f"{w.sum():.6f}")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.333333',['∫_0^1 t^2 dt',['Exact with 2 points, since 2 ≤ 2·2 − 1.','مضبوط بنقطتين لأن 2 ≤ 2·2 − 1.']],['$ 0.5','$ 0.25','$ 1.0'],'from scipy.special import roots_sh_legendre\nt, w = roots_sh_legendre(2)\nprint(f"{w @ t**2:.6f}")'),
  Q('Compute `∫_0^1 t^{1/2} dt` with the substitution `t = s^2` and 3 shifted Gauss points in s.','احسب `∫_0^1 t^{1/2} dt` بالتعويض `t = s^2` و 3 نقاط جاوس مزاحة في s.','$ 0.666667',[['With `t = s^2`, `dt = 2s ds`, the integrand becomes the polynomial `2s^2`, integrated exactly.','مع `t = s^2` و `dt = 2s ds` تصبح الدالة كثيرة الحدود `2s^2` فتُكامل بالضبط.']],['$ 0.5','$ 0.333333','$ 1.0'],'from scipy.special import roots_sh_legendre\ns, w = roots_sh_legendre(3)\nprint(f"{w @ (2 * s * s):.6f}")'),
]);

lesson('505',64,[
  ['``scipy.integrate.quad`` integrates adaptively and returns the value and an error estimate:','``scipy.integrate.quad`` تكامل تكيفياً وتعيد القيمة وتقدير الخطأ:'],
  '$ from scipy.integrate import quad\nval, err = quad(lambda x: x**2, 0, 1)            # 0.3333, ~3.7e-15\nquad(lambda x: np.exp(-x), 0, np.inf)[0]         # 1.0\n# weight (x - a)^alpha (b - x)^beta handled exactly:\nquad(lambda x: 1.0, 0, 1, weight="alg", wvar=(-0.5, 0))[0]   # 2.0',
  ['The ``weight="alg"`` option integrates the singular factor `(x − a)^{α}(b − x)^{β}` exactly, which is how a Riemann–Liouville integral `∫_0^t (t − s)^{μ−1} f(s) ds` is computed accurately for a single t.','والخيار ``weight="alg"`` يكامل العامل الشاذ `(x − a)^{α}(b − x)^{β}` بالضبط، وهكذا يُحسب تكامل ريمان–ليوفيل `∫_0^t (t − s)^{μ−1} f(s) ds` بدقة عند t واحدة.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.746824',['∫_0^1 e^{−x^2} dx'],['$ 0.886227','$ 1.0','$ 0.5'],'import numpy as np\nfrom scipy.integrate import quad\nprint(f"{quad(lambda x: np.exp(-x**2), 0, 1)[0]:.6f}")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2.0',['∫_0^1 x^{−1/2} dx = 2'],['$ inf','$ 1.0','$ nan'],'from scipy.integrate import quad\nprint(round(quad(lambda x: 1.0, 0, 1, weight="alg", wvar=(-0.5, 0))[0], 10))'),
  Q('Compute `D^{−1/2}1` at t = 1 as `(1/Γ(1/2))∫_0^1 (1 − s)^{−1/2} ds`.','احسب `D^{−1/2}1` عند t = 1 بالصورة `(1/Γ(1/2))∫_0^1 (1 − s)^{−1/2} ds`.','$ 1.128379',['#f{2}{#r{π}}'],['$ 2.0','$ 0.564190','$ 1.772454'],'import numpy as np\nfrom scipy.integrate import quad\nfrom scipy.special import gamma\nval = quad(lambda s: 1.0, 0, 1, weight="alg", wvar=(0, -0.5))[0]\nval = val / gamma(0.5)\nprint(f"{val:.6f}")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.0',['∫_0^∞ e^{−x} dx'],['$ inf','$ 0.0','$ 2.718282'],'import numpy as np\nfrom scipy.integrate import quad\nprint(round(quad(lambda x: np.exp(-x), 0, np.inf)[0], 10))'),
]);

lesson('505',65,[
  ['``brentq`` finds a root in a bracket where the function changes sign (always converges); ``fsolve`` solves systems from a starting guess:','``brentq`` تجد جذراً في مجال تتغير فيه إشارة الدالة (تتقارب دائماً)، و ``fsolve`` تحل الأنظمة من تخمين ابتدائي:'],
  '$ from scipy.optimize import brentq, fsolve\nbrentq(lambda x: x**3 - 2*x - 5, 2, 3)        # 2.0945514815423265\nF = lambda v: [v[0]**2 + v[1]**2 - 1, v[0] - v[1]]\nfsolve(F, [1, 0])                             # [0.7071 0.7071]',
  ['A bracket `[a, b]` with `f(a)f(b) < 0` guarantees a root; for the zeros of `P_n` the Chebyshev points give safe brackets and starting values.','والمجال `[a, b]` مع `f(a)f(b) < 0` يضمن جذراً، ولجذور `P_n` تعطي نقاط تشيبيشيف مجالات وقيماً ابتدائية آمنة.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2.094551',[['The real root of `x^3 − 2x − 5`.','الجذر الحقيقي لـ `x^3 − 2x − 5`.']],['$ 2.0','$ 3.0','$ -1.047276'],'from scipy.optimize import brentq\nprint(f"{brentq(lambda x: x**3 - 2*x - 5, 2, 3):.6f}")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.861136',[['The largest zero of `P_4`.','أكبر جذر لـ `P_4`.']],['$ 0.339981','$ 0.774597','$ 0.906180'],'from scipy.optimize import brentq\nfrom scipy.special import eval_legendre\nprint(f"{brentq(lambda x: eval_legendre(4, x), 0.6, 1.0):.6f}")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ ValueError',[['No sign change in [0, 1] for `x^2 + 1`.','لا تغير في الإشارة على [0, 1] لـ `x^2 + 1`.']],['$ 0.0','$ nan','$ 1.0'],'from scipy.optimize import brentq\ntry:\n    brentq(lambda x: x**2 + 1, 0, 1)\nexcept ValueError:\n    print("ValueError")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [0.7071, 0.7071]',[['The intersection of the unit circle and the line x = y.','تقاطع دائرة الوحدة والخط x = y.']],['$ [1.0, 0.0]','$ [-0.7071, -0.7071]','$ [0.5, 0.5]'],'import numpy as np\nfrom scipy.optimize import fsolve\nv = fsolve(lambda v: [v[0]**2 + v[1]**2 - 1, v[0] - v[1]], [1, 0])\nprint(np.round(v, 4).tolist())'),
]);

lesson('505',66,[
  ['Interpolation in SciPy: ``CubicSpline`` for piecewise smooth curves, ``BarycentricInterpolator`` for one polynomial through given points:','الاستكمال في SciPy: ``CubicSpline`` للمنحنيات الملساء المجزأة، و ``BarycentricInterpolator`` لكثيرة حدود واحدة عبر نقاط معطاة:'],
  '$ from scipy.interpolate import CubicSpline, BarycentricInterpolator\ncs = CubicSpline(xs, ys)\nP = BarycentricInterpolator(xs, ys)\ncs(0.3), P(0.3)\nnp.interp(0.3, xs, ys)          # piecewise linear',
  ['Polynomial interpolation is excellent at Chebyshev or Legendre points and dangerous at equally spaced points for large n (Runge’s phenomenon).','والاستكمال بكثيرة حدود ممتاز عند نقاط تشيبيشيف أو ليجندر وخطير عند النقاط المتساوية التباعد لـ n كبير (ظاهرة رونغه).'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 13.0',[['The quadratic through (0, 1), (1, 3), (2, 7) is `1 + x + x^2`.','كثيرة الحدود التربيعية عبر (0, 1) و (1, 3) و (2, 7) هي `1 + x + x^2`.']],['$ 11.0','$ 9.0','$ 15.0'],'from scipy.interpolate import BarycentricInterpolator\nP = BarycentricInterpolator([0, 1, 2], [1, 3, 7])\nprint(round(float(P(3.0)), 10))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2.0',[['Linear interpolation between (0, 1) and (1, 3) at x = 0.5.','الاستكمال الخطي بين (0, 1) و (1, 3) عند x = 0.5.']],['$ 1.75','$ 2.5','$ 3.0'],'import numpy as np\nprint(np.interp(0.5, [0, 1, 2], [1, 3, 7]))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['At 21 equally spaced points the interpolant of `1/(1 + 25x^2)` oscillates wildly near ±1; at Chebyshev points it does not.','عند 21 نقطة متساوية التباعد يتذبذب مستكمل `1/(1 + 25x^2)` بشدة قرب ±1، وعند نقاط تشيبيشيف لا.']],['$ False','$ 0.0','$ nan'],'import numpy as np\nfrom scipy.interpolate import BarycentricInterpolator\nf = lambda x: 1 / (1 + 25 * x**2)\nn = 21\nxe = np.linspace(-1, 1, n)\nxc = np.cos(np.pi * (2 * np.arange(n) + 1) / (2 * n))\nt = np.linspace(-1, 1, 2001)\nee = np.max(np.abs(BarycentricInterpolator(xe, f(xe))(t) - f(t)))\nec = np.max(np.abs(BarycentricInterpolator(xc, f(xc))(t) - f(t)))\nprint(ee > 10 and ec < 0.1)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.0',[['A cubic spline reproduces a cubic exactly (with not-a-knot end conditions).','الشريحة التكعيبية تعيد كثيرة تكعيبية بالضبط (مع شروط not-a-knot الطرفية).']],['$ 0.01','$ 1.0','$ nan'],'import numpy as np\nfrom scipy.interpolate import CubicSpline\nx = np.linspace(0, 1, 6)\ncs = CubicSpline(x, x**3)\nprint(round(float(abs(cs(0.33) - 0.33**3)), 12))'),
]);

lesson('505',67,[
  ['``solve_ivp`` integrates systems `y′ = f(t, y)` with adaptive Runge–Kutta (or implicit) methods:','``solve_ivp`` تكامل الأنظمة `y′ = f(t, y)` بطرق رونغه–كوتا التكيفية (أو الضمنية):'],
  '$ from scipy.integrate import solve_ivp\nsol = solve_ivp(lambda t, y: -y, (0, 1), [1.0],\n                rtol=1e-10, atol=1e-12, dense_output=True)\nsol.y[0, -1]          # ≈ exp(-1)\nsol.sol(0.5)          # value at any t',
  ['The right-hand side takes ``(t, y)`` and returns an array; ``y0`` is a list even for one equation. Tighten ``rtol`` and ``atol`` for reference solutions. Fractional derivatives are not supported: they need the methods of Unit 9.','والطرف الأيمن يأخذ ``(t, y)`` ويعيد مصفوفة، و ``y0`` قائمة حتى لمعادلة واحدة. شدّد ``rtol`` و ``atol`` للحلول المرجعية. والمشتقات الكسرية غير مدعومة وتحتاج طرق الوحدة 9.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',['y = e^{−t}'],['$ False','$ 0.3679','$ 1.0'],'import numpy as np\nfrom scipy.integrate import solve_ivp\nsol = solve_ivp(lambda t, y: -y, (0, 1), [1.0],\n                rtol=1e-10, atol=1e-12)\nprint(abs(sol.y[0, -1] - np.exp(-1)) < 1e-8)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -1.0',[['`y″ = −y` as a system; `cos π = −1`.','`y″ = −y` نظاماً، و `cos π = −1`.']],['$ 1.0','$ 0.0','$ 3.1416'],'import numpy as np\nfrom scipy.integrate import solve_ivp\nsol = solve_ivp(lambda t, y: [y[1], -y[0]], (0, np.pi), [1.0, 0.0],\n                rtol=1e-10, atol=1e-12)\nprint(round(sol.y[0, -1], 6))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.5',['y = #f{1}{1 + t},   t = 1'],['$ 0.3679','$ 1.0','$ 2.0'],'from scipy.integrate import solve_ivp\nsol = solve_ivp(lambda t, y: -y**2, (0, 1), [1.0],\n                rtol=1e-10, atol=1e-12, dense_output=True)\nprint(round(float(sol.sol(1.0)[0]), 6))'),
  Q('Why must ``y0`` be ``[1.0]`` and not ``1.0``?','لماذا يجب أن تكون ``y0`` هي ``[1.0]`` لا ``1.0``؟',['``solve_ivp`` works with vectors of unknowns, even for one equation','``solve_ivp`` تعمل بمتجهات من المجاهيل حتى لمعادلة واحدة'],[['The solution is stored in ``sol.y`` with one row per unknown.','يُخزن الحل في ``sol.y`` بصف لكل مجهول.']],[['To make it exact','لجعله مضبوطاً'],['It does not matter','لا يهم']]),
]);

lesson('505',68,[
  ['``solve_bvp`` solves two-point boundary-value problems written as first-order systems:','``solve_bvp`` تحل مسائل القيم الحدية ذات النقطتين مكتوبة أنظمة من الرتبة الأولى:'],
  '$ from scipy.integrate import solve_bvp\n# y″ = -y,  y(0) = 0,  y(1) = 1   →  y = sin x / sin 1\nf = lambda x, Y: np.vstack([Y[1], -Y[0]])\nbc = lambda Ya, Yb: np.array([Ya[0], Yb[0] - 1])\nx = np.linspace(0, 1, 11)\nsol = solve_bvp(f, bc, x, np.zeros((2, x.size)))',
  ['``bc`` returns the residuals of the boundary conditions. The method is a collocation scheme with mesh refinement; check ``sol.status == 0`` (success).','و ``bc`` تعيد بواقي الشروط الحدية. والطريقة مخطط تجميع مع تنقيح الشبكة، وافحص ``sol.status == 0`` (النجاح).'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0 0.569747',['#f{sin 0.5}{sin 1}'],['$ 0 0.5','$ 1 0.569747','$ 0 0.479426'],'import numpy as np\nfrom scipy.integrate import solve_bvp\nf = lambda x, Y: np.vstack([Y[1], -Y[0]])\nbc = lambda Ya, Yb: np.array([Ya[0], Yb[0] - 1])\nx = np.linspace(0, 1, 11)\nsol = solve_bvp(f, bc, x, np.zeros((2, x.size)), tol=1e-8)\nprint(sol.status, f"{sol.sol(0.5)[0]:.6f}")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.25',[['`y″ = −2`, `y(0) = y(1) = 0` gives `y = x − x^2`.','`y″ = −2` مع `y(0) = y(1) = 0` تعطي `y = x − x^2`.']],['$ 0.5','$ -0.25','$ 0.125'],'import numpy as np\nfrom scipy.integrate import solve_bvp\nf = lambda x, Y: np.vstack([Y[1], -2 * np.ones_like(x)])\nbc = lambda Ya, Yb: np.array([Ya[0], Yb[0]])\nx = np.linspace(0, 1, 5)\nsol = solve_bvp(f, bc, x, np.zeros((2, x.size)))\nprint(round(float(sol.sol(0.5)[0]), 6))'),
  Q('Write ``u″ = 6x`` as a first-order system for ``solve_bvp``.','اكتب ``u″ = 6x`` نظاماً من الرتبة الأولى لـ ``solve_bvp``.','$ lambda x, Y: np.vstack([Y[1], 6 * x])',[['Y[0] = u and Y[1] = u′.','Y[0] = u و Y[1] = u′.']],['$ lambda x, Y: 6 * x','$ lambda x, Y: np.vstack([6 * x, Y[0]])','$ lambda Y, x: [Y[1], 6]']),
  Q('What does ``bc(Ya, Yb)`` return for `u(−1) = 0`, `u(1) = 2`?','ماذا تعيد ``bc(Ya, Yb)`` لـ `u(−1) = 0` و `u(1) = 2`؟','$ np.array([Ya[0], Yb[0] - 2])',[['Residuals that must vanish.','بواقٍ يجب أن تنعدم.']],['$ np.array([Ya[0], Yb[0]])','$ [0, 2]','$ np.array([Ya[1], Yb[1] - 2])']),
]);

lesson('505',69,[
  ['``minimize`` finds a local minimum of a function of several variables; ``minimize_scalar`` for one variable:','``minimize`` تجد قيمة صغرى محلية لدالة عدة متغيرات، و ``minimize_scalar`` لمتغير واحد:'],
  '$ from scipy.optimize import minimize, minimize_scalar\nrosen = lambda v: (1 - v[0])**2 + 100 * (v[1] - v[0]**2)**2\nres = minimize(rosen, [-1.0, 2.0])\nres.x, res.fun, res.success\nminimize_scalar(lambda lam: err(lam), bounds=(0.1, 1), method="bounded")',
  ['A typical research use: choose the parameter λ of the fractional basis that minimizes the error for a fixed M, as in Course 501 where the best λ depends on M.','واستخدام بحثي نموذجي: اختيار الوسيط λ للأساس الكسري الذي يصغّر الخطأ لـ M ثابت، كما في المقرر 501 حيث تعتمد λ الفضلى على M.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1.0, 1.0]',[['The Rosenbrock function has its minimum at (1, 1).','دالة روزنبروك قيمتها الصغرى عند (1, 1).']],['$ [0.0, 0.0]','$ [-1.0, 2.0]','$ [1.0, 0.0]'],'import numpy as np\nfrom scipy.optimize import minimize\nrosen = lambda v: (1 - v[0])**2 + 100 * (v[1] - v[0]**2)**2\nres = minimize(rosen, [-1.0, 2.0], tol=1e-12)\nprint(np.round(res.x, 4).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.5',[['`(λ − 1/2)^2 + 1` is smallest at 1/2.','`(λ − 1/2)^2 + 1` أصغر ما تكون عند 1/2.']],['$ 1.0','$ 0.1','$ 0.0'],'from scipy.optimize import minimize_scalar\nerr = lambda lam: (lam - 0.5)**2 + 1\nres = minimize_scalar(err, bounds=(0.1, 1), method="bounded")\nprint(round(res.x, 4))'),
  Q('Does ``minimize`` always find the global minimum?','هل تجد ``minimize`` دائماً القيمة الصغرى الكلية؟',['No: it finds a local minimum near the starting point','لا: تجد قيمة صغرى محلية قرب نقطة البدء'],[['Try several starting points for non-convex problems.','جرّب عدة نقاط بدء للمسائل غير المحدبة.']],[['Yes','نعم'],['Only in one dimension','في بعد واحد فقط']]),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['``success`` reports whether the optimizer converged.','``success`` تخبر هل تقارب المحسِّن.']],['$ False','$ 1','$ None'],'from scipy.optimize import minimize\nprint(minimize(lambda v: (v[0] - 3)**2, [0.0]).success)'),
]);

lesson('505',70,[
  ['SciPy has no Mittag-Leffler function, but for moderate arguments the series is enough:','لا توجد دالة ميتاج–ليفلر في SciPy، لكن المتسلسلة تكفي للمتغيرات المعتدلة:'],
  '$ from scipy.special import gamma\ndef ml(a, z, K=100):\n    """E_a(z) = sum z^k / Gamma(a k + 1), for moderate |z|."""\n    k = np.arange(K)\n    return np.sum(z**k / gamma(a * k + 1))',
  ['Check it with known cases: `E_1(z) = e^z`, `E_2(−z^2) = cos z`, `E_{1/2}(−z) = e^{z^2} erfc(z)`. For large negative arguments the series suffers cancellation; then use a dedicated algorithm (for example Garrappa’s method).','وتحقق منها بالحالات المعروفة: `E_1(z) = e^z` و `E_2(−z^2) = cos z` و `E_{1/2}(−z) = e^{z^2} erfc(z)`. وللمتغيرات السالبة الكبيرة تعاني المتسلسلة من الإلغاء، فاستخدم خوارزمية مخصصة (مثل طريقة Garrappa).'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',['E_1(1) = e'],['$ False','$ 2.718','$ 1.0'],'import numpy as np\nfrom scipy.special import gamma\ndef ml(a, z, K=100):\n    k = np.arange(K)\n    return np.sum(z**k / gamma(a * k + 1))\nprint(np.isclose(ml(1.0, 1.0), np.e))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.427584 0.427584',[['`E_{1/2}(−1) = e·erfc(1)`, which is ``erfcx(1)``.','`E_{1/2}(−1) = e·erfc(1)` أي ``erfcx(1)``.']],['$ 0.367879 0.427584','$ 0.427584 0.367879','$ 0.5 0.5'],'import numpy as np\nfrom scipy.special import gamma, erfcx\ndef ml(a, z, K=100):\n    k = np.arange(K)\n    return np.sum(z**k / gamma(a * k + 1))\nprint(f"{ml(0.5, -1.0):.6f} {erfcx(1.0):.6f}")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',['E_2(−z^2) = cos z,   z = 1.5'],['$ False','$ 0.0707','$ nan'],'import numpy as np\nfrom scipy.special import gamma\ndef ml(a, z, K=100):\n    k = np.arange(K)\n    return np.sum(z**k / gamma(a * k + 1))\nprint(np.isclose(ml(2.0, -1.5**2), np.cos(1.5)))'),
  Q('Which function solves `D^{α}y = −y`, `y(0) = 1`?','أي دالة تحل `D^{α}y = −y` مع `y(0) = 1`؟','y = E_{α}(−t^{α})',[['The fractional analogue of `e^{−t}`.','النظير الكسري لـ `e^{−t}`.']],['y = e^{−t^{α}}','y = E_{α}(−t)','y = t^{α}']),
]);

lesson('505',71,[
  ['Bonnet’s recurrence evaluates `P_0, …, P_N` at all points at once, stably:','علاقة بونيه تحسب `P_0, …, P_N` عند كل النقاط دفعة واحدة بثبات:'],
  '$ def legendre_table(N, x):\n    """Return P with P[:, k] = P_k(x) for k = 0..N."""\n    x = np.asarray(x, dtype=float)\n    P = np.zeros((x.size, N + 1));  P[:, 0] = 1\n    if N > 0: P[:, 1] = x\n    for k in range(1, N):\n        P[:, k+1] = ((2*k + 1) * x * P[:, k] - k * P[:, k-1]) / (k + 1)\n    return P',
  ['The table is the basis matrix of collocation and quadrature: ``P[i, k] = P_k(x_i)``. Evaluating the monomial form of `P_n` instead loses digits quickly for large n.','والجدول هو مصفوفة الأساس للتجميع والتربيع: ``P[i, k] = P_k(x_i)``. وحساب صيغة القوى لـ `P_n` بدلاً منه يفقد الأرقام بسرعة لـ n كبير.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1.0, 0.5, -0.125, -0.4375]',['P_3(0.5) = #f{5(0.125) − 3(0.5)}{2}'],['$ [1.0, 0.5, 0.125, 0.4375]','$ [1.0, 0.5, -0.125, 0.4375]','$ [0.5, -0.125, -0.4375]'],'import numpy as np\ndef legendre_table(N, x):\n    x = np.asarray(x, dtype=float)\n    P = np.zeros((x.size, N + 1)); P[:, 0] = 1\n    if N > 0: P[:, 1] = x\n    for k in range(1, N):\n        P[:, k+1] = ((2*k + 1) * x * P[:, k] - k * P[:, k-1]) / (k + 1)\n    return P\nprint(legendre_table(3, [0.5])[0].tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['The table agrees with SciPy for n = 0, …, 30.','الجدول يتفق مع SciPy عند n = 0, …, 30.']],['$ False','$ 31','$ nan'],'import numpy as np\nfrom scipy.special import eval_legendre\ndef legendre_table(N, x):\n    x = np.asarray(x, dtype=float)\n    P = np.zeros((x.size, N + 1)); P[:, 0] = 1\n    if N > 0: P[:, 1] = x\n    for k in range(1, N):\n        P[:, k+1] = ((2*k + 1) * x * P[:, k] - k * P[:, k-1]) / (k + 1)\n    return P\nx = np.linspace(-1, 1, 101)\nP = legendre_table(30, x)\nprint(all(np.allclose(P[:, n], eval_legendre(n, x)) for n in range(31)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ (5, 4)',[['5 points, degrees 0 to 3.','5 نقاط والدرجات من 0 إلى 3.']],['$ (4, 5)','$ (5,)','$ (3, 5)'],'import numpy as np\ndef legendre_table(N, x):\n    x = np.asarray(x, dtype=float)\n    P = np.zeros((x.size, N + 1)); P[:, 0] = 1\n    if N > 0: P[:, 1] = x\n    for k in range(1, N):\n        P[:, k+1] = ((2*k + 1) * x * P[:, k] - k * P[:, k-1]) / (k + 1)\n    return P\nprint(legendre_table(3, np.linspace(-1, 1, 5)).shape)'),
  Q('Why is the recurrence preferred to the explicit power form for large n?','لماذا تُفضَّل علاقة التكرار على صيغة القوى الصريحة لـ n كبير؟',['The power coefficients are huge with alternating signs, so summing them loses digits by cancellation','معاملات القوى ضخمة بإشارات متناوبة فيفقد جمعها الأرقام بالإلغاء'],[['The recurrence keeps every value of size about 1.','العلاقة تبقي كل قيمة بحجم نحو 1.']],[['It is exact','مضبوطة'],['It uses less memory','تستهلك ذاكرة أقل']]),
]);

lesson('505',72,[
  ['The zeros of `P_n` by Newton’s method, from the Chebyshev-type starting values `cos((4k − 1)π/(4n + 2))`, using `P_n′(x) = n(xP_n − P_{n−1})/(x^2 − 1)`:','جذور `P_n` بطريقة نيوتن من القيم الابتدائية من نوع تشيبيشيف `cos((4k − 1)π/(4n + 2))` باستخدام `P_n′(x) = n(xP_n − P_{n−1})/(x^2 − 1)`:'],
  '$ def gauss_legendre(n, iters=50):\n    k = np.arange(1, n + 1)\n    x = np.cos((4*k - 1) * np.pi / (4*n + 2))\n    for _ in range(iters):\n        P = legendre_table(n, x)\n        dP = n * (x * P[:, n] - P[:, n - 1]) / (x**2 - 1)\n        dx = P[:, n] / dP;  x -= dx\n        if np.max(np.abs(dx)) < 1e-15: break\n    return x[::-1], 2 / ((1 - x[::-1]**2) * dP[::-1]**2)',
  ['All n zeros are iterated together as one vector; a few steps reach machine precision. The weights follow from the derivative at the converged nodes.','وكل الجذور الـ n تُكرر معاً متجهاً واحداً، وبضع خطوات تبلغ دقة الآلة. والأوزان تأتي من المشتقة عند العقد المتقاربة.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True True',[['Nodes and weights agree with NumPy’s leggauss.','العقد والأوزان تتفق مع leggauss في NumPy.']],['$ True False','$ False True','$ False False'],'import numpy as np\nfrom scipy.special import eval_legendre\ndef gl(n):\n    k = np.arange(1, n + 1)\n    x = np.cos((4*k - 1) * np.pi / (4*n + 2))\n    for _ in range(50):\n        p, q = eval_legendre(n, x), eval_legendre(n - 1, x)\n        d = n * (x * p - q) / (x**2 - 1)\n        dx = p / d\n        x = x - dx\n        if np.max(np.abs(dx)) < 1e-15:\n            break\n    p, q = eval_legendre(n, x), eval_legendre(n - 1, x)\n    d = n * (x * p - q) / (x**2 - 1)\n    return x[::-1], 2 / ((1 - x[::-1]**2) * d[::-1]**2)\nx, w = gl(10)\nx0, w0 = np.polynomial.legendre.leggauss(10)\nprint(np.allclose(x, x0), np.allclose(w, w0))'),
  Q('Compute the starting value for k = 1, n = 4.','احسب القيمة الابتدائية عند k = 1 و n = 4.','$ 0.866025',['cos(#f{3π}{18}) = cos(#f{π}{6})'],['$ 0.861136','$ 0.984808','$ 0.707107'],'import numpy as np\nprint(f"{np.cos(3 * np.pi / 18):.6f}")'),
  Q('Why is the starting value so important?','لماذا تهم القيمة الابتدائية كثيراً؟',['Newton converges fast only near a root; a poor start can jump to another root or diverge','نيوتن يتقارب بسرعة قرب الجذر فقط، والبداية السيئة قد تقفز إلى جذر آخر أو تتباعد'],[['These starts are within about `1/n^2` of the true roots.','هذه البدايات تبعد نحو `1/n^2` عن الجذور الحقيقية.']],[['It is not','ليست مهمة'],['It changes the root found to the same one','تغيّر الجذر إلى الجذر نفسه']]),
  Q('Why is the formula for `P_n′` not used at x = ±1?','لماذا لا تُستخدم صيغة `P_n′` عند x = ±1؟',['The denominator `x^2 − 1` vanishes there; the zeros of `P_n` are strictly inside (−1, 1)','المقام `x^2 − 1` ينعدم هناك، وجذور `P_n` داخل (−1, 1) تماماً'],[['So the iteration never reaches the ends.','فلا يصل التكرار إلى الطرفين أبداً.']],[['It is less accurate there','أقل دقة هناك'],['It can be used','يمكن استخدامها']]),
]);

lesson('505',73,[
  ['The Golub–Welsch method: the Gauss nodes are the eigenvalues of the symmetric tridiagonal Jacobi matrix, and the weights come from the first components of its eigenvectors:','طريقة Golub–Welsch: عقد جاوس هي القيم الذاتية لمصفوفة جاكوبي المتماثلة ثلاثية القطر، والأوزان تأتي من المركبات الأولى لمتجهاتها الذاتية:'],
  '$ def golub_welsch(n):\n    k = np.arange(1, n)\n    b = k / np.sqrt(4 * k**2 - 1)           # Legendre off-diagonal\n    J = np.diag(b, 1) + np.diag(b, -1)\n    x, V = np.linalg.eigh(J)\n    return x, 2 * V[0, :]**2                # mu_0 = 2',
  ['For a Jacobi weight the diagonal and off-diagonal entries come from the recurrence coefficients, and `μ_0 = ∫ w` replaces 2. The method is stable for any n; ``scipy.linalg.eigh_tridiagonal`` makes it faster.','ولوزن جاكوبي تأتي عناصر القطر والقطرين الجانبيين من معاملات التكرار، و `μ_0 = ∫ w` تحل محل 2. والطريقة مستقرة لأي n، و ``scipy.linalg.eigh_tridiagonal`` تسرّعها.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True True',[['Same rule as leggauss.','القاعدة نفسها كما في leggauss.']],['$ True False','$ False False','$ False True'],'import numpy as np\ndef golub_welsch(n):\n    k = np.arange(1, n)\n    b = k / np.sqrt(4 * k**2 - 1)\n    J = np.diag(b, 1) + np.diag(b, -1)\n    x, V = np.linalg.eigh(J)\n    return x, 2 * V[0, :]**2\nx, w = golub_welsch(12)\nx0, w0 = np.polynomial.legendre.leggauss(12)\nprint(np.allclose(x, x0), np.allclose(w, w0))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [0.5556, 0.8889, 0.5556]',['#f{5}{9},  #f{8}{9},  #f{5}{9}'],['$ [0.3333, 1.3333, 0.3333]','$ [1.0, 1.0, 1.0]','$ [0.6667, 0.6667, 0.6667]'],'import numpy as np\nk = np.arange(1, 3)\nb = k / np.sqrt(4 * k**2 - 1)\nx, V = np.linalg.eigh(np.diag(b, 1) + np.diag(b, -1))\nprint(np.round(2 * V[0, :]**2, 4).tolist())'),
  Q('What are the two off-diagonal entries for n = 3?','ما العنصران الجانبيان عند n = 3؟','#f{1}{#r{3}},   #f{2}{#r{15}}',['#f{k}{#r{4k^2 − 1}},   k = 1, 2'],['#f{1}{3},   #f{2}{15}','#f{1}{2},   #f{2}{3}','1,   2']),
  Q('Why are the eigenvectors normalized before taking `V_{0j}^2`?','لماذا تُطبَّع المتجهات الذاتية قبل أخذ `V_{0j}^2`؟',['The weight formula `w_j = μ_0 V_{0j}^2` holds for unit eigenvectors; ``eigh`` returns them normalized','صيغة الوزن `w_j = μ_0 V_{0j}^2` تصح للمتجهات الذاتية الواحدية، و ``eigh`` تعيدها مطبّعة'],[['The weights then sum to `μ_0`.','فيكون مجموع الأوزان `μ_0`.']],[['To make them positive','لجعلها موجبة'],['They are not','ليست مطبّعة']]),
]);

lesson('505',74,[
  ['The barycentric formula evaluates the interpolating polynomial stably in `O(n)` per point:','الصيغة الباريسنترية تحسب كثيرة الاستكمال بثبات بتكلفة `O(n)` لكل نقطة:'],
  'p(x) = #f{Σ_j λ_j f_j/(x − x_j)}{Σ_j λ_j/(x − x_j)},     λ_j = #f{1}{Π_{k≠j}(x_j − x_k)}',
  ['The weights can be scaled by any common factor. For Chebyshev–Lobatto points `cos(jπ/n)` they are simply `(−1)^j`, halved at the two ends. At a node the formula is replaced by the data value.','ويمكن تحجيم الأوزان بأي عامل مشترك. ولنقاط تشيبيشيف–لوباتو `cos(jπ/n)` هي ببساطة `(−1)^j` مع تنصيفها عند الطرفين. وعند العقدة تُستبدل الصيغة بقيمة البيانات.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [0.5, -1.0, 0.5]',[['For nodes {−1, 0, 1}: `λ = (1/2, −1, 1/2)`.','للعقد {−1, 0, 1}: `λ = (1/2, −1, 1/2)`.']],['$ [1.0, -2.0, 1.0]','$ [-0.5, 1.0, -0.5]','$ [0.5, 1.0, 0.5]'],'import numpy as np\nx = np.array([-1.0, 0.0, 1.0])\nlam = np.array([1 / np.prod([x[j] - x[k] for k in range(3) if k != j])\n                for j in range(3)])\nprint(lam.tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.09',[['The quadratic through `x^2` data reproduces `x^2` at 0.3.','كثيرة الحدود التربيعية عبر بيانات `x^2` تعيد `x^2` عند 0.3.']],['$ 0.3','$ 0.0','$ 0.9'],'import numpy as np\nx = np.array([-1.0, 0.0, 1.0]); f = x**2\nlam = np.array([0.5, -1.0, 0.5])\nt = 0.3\nprint(round(np.sum(lam * f / (t - x)) / np.sum(lam / (t - x)), 12))'),
  Q('Why may the weights be rescaled by a common factor?','لماذا يجوز تحجيم الأوزان بعامل مشترك؟',['The factor cancels between numerator and denominator','العامل يُختصر بين البسط والمقام'],[['So the Chebyshev weights can be written as ±1, ±1/2.','فتُكتب أوزان تشيبيشيف ±1 و ±1/2.']],[['It cannot','لا يجوز'],['To avoid overflow only','لتجنب الفيضان فقط']]),
  Q('What happens if x equals a node exactly?','ماذا يحدث إذا ساوت x عقدة بالضبط؟',['Division by zero: return the data value `f_j` instead','قسمة على صفر: أعد قيمة البيانات `f_j` بدلاً من ذلك'],[['Implementations check for this case.','التطبيقات تفحص هذه الحالة.']],[['Nothing','لا شيء'],['The result is 0','النتيجة 0']]),
]);

lesson('505',75,[
  ['The differentiation matrix from the barycentric weights, vectorized with broadcasting:','مصفوفة التفاضل من الأوزان الباريسنترية بصورة متجهية بالبث:'],
  '$ def diff_matrix(x):\n    n = x.size\n    dx = x[:, None] - x[None, :] + np.eye(n)\n    lam = 1 / np.prod(dx, axis=1)\n    D = (lam[None, :] / lam[:, None]) / dx\n    np.fill_diagonal(D, 0)\n    D[np.diag_indices(n)] = -D.sum(axis=1)\n    return D',
  ['Adding the identity avoids division by zero on the diagonal, which is then overwritten by the negative row sums. ``D @ f`` differentiates the interpolant exactly.','وإضافة المحايدة تتجنب القسمة على صفر على القطر الذي يُستبدل بعد ذلك بمجاميع الصفوف السالبة. و ``D @ f`` تشتق كثيرة الاستكمال بالضبط.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [[-1.5, 2.0, -0.5], [-0.5, 0.0, 0.5], [0.5, -2.0, 1.5]]',[['The classical 3-point matrix.','المصفوفة الكلاسيكية للنقاط الثلاث.']],['$ [[-0.5, 0.0, 0.5], [-0.5, 0.0, 0.5], [-0.5, 0.0, 0.5]]','$ [[1.0, -2.0, 1.0], [1.0, -2.0, 1.0], [1.0, -2.0, 1.0]]','$ [[0.0, 0.5, 0.0], [-0.5, 0.0, 0.5], [0.0, -0.5, 0.0]]'],'import numpy as np\ndef diff_matrix(x):\n    n = x.size\n    dx = x[:, None] - x[None, :] + np.eye(n)\n    lam = 1 / np.prod(dx, axis=1)\n    D = (lam[None, :] / lam[:, None]) / dx\n    np.fill_diagonal(D, 0)\n    D[np.diag_indices(n)] = -D.sum(axis=1)\n    return D\nprint((diff_matrix(np.array([-1.0, 0.0, 1.0])) + 0.0).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['Exact for `x^9` with 12 Chebyshev points.','مضبوطة لـ `x^9` مع 12 نقطة تشيبيشيف.']],['$ False','$ 9','$ nan'],'import numpy as np\ndef diff_matrix(x):\n    n = x.size\n    dx = x[:, None] - x[None, :] + np.eye(n)\n    lam = 1 / np.prod(dx, axis=1)\n    D = (lam[None, :] / lam[:, None]) / dx\n    np.fill_diagonal(D, 0)\n    D[np.diag_indices(n)] = -D.sum(axis=1)\n    return D\nx = np.cos(np.pi * np.arange(12) / 11)\nprint(np.allclose(diff_matrix(x) @ x**9, 9 * x**8))'),
  Q('What is ``D @ np.ones(n)``?','ما ``D @ np.ones(n)``؟','$ zeros',[['The derivative of a constant: every row sums to 0.','مشتقة الثابت: مجموع كل صف صفر.']],['$ ones','$ x','$ n']),
  Q('Why is ``np.eye(n)`` added to ``dx``?','لماذا تُضاف ``np.eye(n)`` إلى ``dx``؟',['To avoid dividing by zero on the diagonal, which is replaced afterwards','لتجنب القسمة على صفر على القطر الذي يُستبدل بعد ذلك'],[['It also makes the product in λ skip the k = j factor.','وتجعل الضرب في λ يتجاوز العامل k = j.']],[['To make D symmetric','لجعل D متماثلة'],['To regularize the problem','لتنظيم المسألة']]),
]);

lesson('505',76,[
  ['Finite differences for `−u″ = f`, `u(0) = u(1) = 0`, as a sparse tridiagonal system:','الفروق المحدودة لـ `−u″ = f` مع `u(0) = u(1) = 0` نظاماً ثلاثي القطر متفرقاً:'],
  '$ def fd_solve(f, n):\n    h = 1 / (n + 1)\n    x = h * np.arange(1, n + 1)\n    A = sp.diags([-1, 2, -1], [-1, 0, 1], shape=(n, n)).tocsc() / h**2\n    return x, spsolve(A, f(x))',
  ['The error is `O(h^2)`: doubling n divides it by about 4. This is the baseline against which spectral methods are compared: for smooth problems they reach the same accuracy with far fewer unknowns.','والخطأ `O(h^2)`: مضاعفة n تقسمه على نحو 4. وهذا هو خط الأساس الذي تُقارن به الطرق الطيفية: للمسائل الملساء تبلغ الدقة نفسها بمجاهيل أقل بكثير.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 4.0',[['Halving h divides the error by 4: second order.','تنصيف h يقسم الخطأ على 4: رتبة ثانية.']],['$ 2.0','$ 8.0','$ 16.0'],'import numpy as np\nimport scipy.sparse as sp\nfrom scipy.sparse.linalg import spsolve\ndef fd_solve(f, n):\n    h = 1 / (n + 1)\n    x = h * np.arange(1, n + 1)\n    A = sp.diags([-1, 2, -1], [-1, 0, 1], shape=(n, n)).tocsc() / h**2\n    return x, spsolve(A, f(x))\nf = lambda x: np.pi**2 * np.sin(np.pi * x)\ne = []\nfor n in (49, 99):\n    x, u = fd_solve(f, n)\n    e.append(np.max(np.abs(u - np.sin(np.pi * x))))\nprint(round(e[0] / e[1], 1))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['For a quadratic solution the scheme is exact at the nodes.','للحل التربيعي يكون المخطط مضبوطاً عند العقد.']],['$ False','$ 0.25','$ 1e-4'],'import numpy as np\nimport scipy.sparse as sp\nfrom scipy.sparse.linalg import spsolve\nn = 9\nh = 1 / (n + 1)\nx = h * np.arange(1, n + 1)\nA = sp.diags([-1, 2, -1], [-1, 0, 1], shape=(n, n)).tocsc() / h**2\nu = spsolve(A, 2 * np.ones(n))\nprint(np.allclose(u, x * (1 - x)))'),
  Q('About how many points does finite differences need for `10^{−8}` if the error is about `0.08 h^2`?','كم نقطة تقريباً تحتاج الفروق المحدودة لـ `10^{−8}` إذا كان الخطأ نحو `0.08 h^2`؟','≈ 2800',['h ≈ #r{#f{10^{−8}}{0.08}} ≈ 3.5 × 10^{−4}'],['≈ 30','≈ 300','≈ 10^8']),
  Q('Why is the matrix converted with ``.tocsc()``?','لماذا تُحوَّل المصفوفة بـ ``.tocsc()``؟',['spsolve works directly with compressed column storage','spsolve تعمل مباشرة مع التخزين المضغوط بالأعمدة'],[['csr also works but is converted.','و csr تعمل أيضاً لكنها تُحوَّل.']],[['It is exact','مضبوطة'],['It stores fewer entries','تخزن عناصر أقل']]),
]);

lesson('505',77,[
  ['Chebyshev collocation for `u″ = f`, `u(±1) = 0`: square the differentiation matrix, keep the interior rows and impose the boundary values:','تجميع تشيبيشيف لـ `u″ = f` مع `u(±1) = 0`: ربّع مصفوفة التفاضل وأبقِ الصفوف الداخلية وافرض القيم الحدية:'],
  '$ x = np.cos(np.pi * np.arange(N + 1) / N)        # Chebyshev–Lobatto\nD = diff_matrix(x);  D2 = D @ D\nA = D2[1:-1, 1:-1]          # u(±1) = 0 removes the end columns\nu = np.zeros(N + 1);  u[1:-1] = np.linalg.solve(A, f(x[1:-1]))',
  ['With homogeneous conditions the boundary unknowns are zero, so their rows and columns are simply removed. For smooth f the error falls exponentially until about `10^{−13}`, where the `N^4` conditioning stops it.','ومع الشروط المتجانسة تكون المجاهيل الحدية أصفاراً فتُحذف صفوفها وأعمدتها. وللدوال الملساء f يتناقص الخطأ أسياً حتى نحو `10^{−13}` حيث يوقفه الشرط `N^4`.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['`u = e^{x} − x sinh 1 − cosh 1` solves `u″ = e^x`, `u(±1) = 0`; N = 16 gives about 12 digits.','`u = e^{x} − x sinh 1 − cosh 1` تحل `u″ = e^x` مع `u(±1) = 0`، و N = 16 تعطي نحو 12 رقماً.']],['$ False','$ 16','$ 1e-3'],'import numpy as np\ndef diff_matrix(x):\n    n = x.size\n    dx = x[:, None] - x[None, :] + np.eye(n)\n    lam = 1 / np.prod(dx, axis=1)\n    D = (lam[None, :] / lam[:, None]) / dx\n    np.fill_diagonal(D, 0)\n    D[np.diag_indices(n)] = -D.sum(axis=1)\n    return D\nN = 16\nx = np.cos(np.pi * np.arange(N + 1) / N)\nD = diff_matrix(x); A = (D @ D)[1:-1, 1:-1]\nu = np.zeros(N + 1); u[1:-1] = np.linalg.solve(A, np.exp(x[1:-1]))\nexact = np.exp(x) - x * np.sinh(1) - np.cosh(1)\nprint(np.max(np.abs(u - exact)) < 1e-10)'),
  Q('Why are the first and last columns removed together with the rows?','لماذا تُحذف العمودان الأول والأخير مع الصفين؟',['The boundary values are known to be zero, so they contribute nothing to the interior equations','القيم الحدية معلومة أنها صفر فلا تساهم في المعادلات الداخلية'],[['For non-zero boundary values move their columns to the right-hand side.','وللقيم الحدية غير الصفرية انقل أعمدتها إلى الطرف الأيمن.']],[['To make the matrix square','لجعل المصفوفة مربعة'],['By mistake','خطأً']]),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 15 15',[['N − 1 interior unknowns.','N − 1 مجهولاً داخلياً.']],['$ 17 17','$ 16 16','$ 15 17'],'import numpy as np\nN = 16\nA = np.zeros((N + 1, N + 1))[1:-1, 1:-1]\nprint(*A.shape)'),
  Q('How does the error behave for N = 4, 8, 16, 32 with a smooth f?','كيف يسلك الخطأ عند N = 4, 8, 16, 32 مع f ملساء؟',['It falls exponentially, then levels off near `10^{−13}`–`10^{−12}`','يتناقص أسياً ثم يستقر قرب `10^{−13}`–`10^{−12}`'],[['The floor comes from rounding amplified by the conditioning.','الأرضية من التقريب المضخّم بالشرط.']],[['It falls like `N^{−2}`','يتناقص مثل `N^{−2}`'],['It grows','يكبر']]),
]);

lesson('505',78,[
  ['Galerkin with Shen’s basis `φ_k = P_k − P_{k+2}` for `−u″ = f`, `u(±1) = 0`: the stiffness matrix is diagonal, `(4k + 6)δ_{jk}`, and the right-hand side comes from Gauss quadrature:','جاليركن بأساس شين `φ_k = P_k − P_{k+2}` لـ `−u″ = f` مع `u(±1) = 0`: مصفوفة الجساءة قطرية `(4k + 6)δ_{jk}`، والطرف الأيمن من تربيع جاوس:'],
  '$ xq, wq = np.polynomial.legendre.leggauss(N + 10)\nP = legendre_table(N + 2, xq)\nPhi = P[:, :N + 1] - P[:, 2:N + 3]          # phi_k at the quadrature nodes\nb = Phi.T @ (wq * f(xq))\nc = b / (4 * np.arange(N + 1) + 6)\nu = lambda x: (legendre_table(N + 2, x)[:, :N + 1]\n               - legendre_table(N + 2, x)[:, 2:N + 3]) @ c',
  ['The solve costs `O(N)`; the error decays spectrally for smooth f. This is the Legendre–Galerkin method of Course 501, Unit 5.','وتكلفة الحل `O(N)`، والخطأ يتناقص طيفياً للدوال الملساء. وهذه طريقة ليجندر–جاليركن في المقرر 501، الوحدة 5.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.333333',[['For `f = 1`: `⟨1, φ_0⟩ = 2` and `c_0 = 2/6`.','لـ `f = 1`: `⟨1, φ_0⟩ = 2` و `c_0 = 2/6`.']],['$ 0.5','$ 0.666667','$ 0.166667'],'import numpy as np\nfrom scipy.special import eval_legendre\nxq, wq = np.polynomial.legendre.leggauss(10)\nphi0 = eval_legendre(0, xq) - eval_legendre(2, xq)\nprint(f"{(wq @ phi0) / 6:.6f}")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [6.0, 10.0, 14.0]',['⟨φ_k′, φ_k′⟩ = 4k + 6'],['$ [2.0, 6.0, 10.0]','$ [6.0, 6.0, 6.0]','$ [4.0, 8.0, 12.0]'],'import numpy as np\nfrom numpy.polynomial import legendre as L\nvals = []\nfor k in range(3):\n    c = np.zeros(k + 3); c[k] = 1; c[k + 2] = -1\n    d = L.legder(c)\n    sq = L.legint(L.legmul(d, d), lbnd=-1)\n    vals.append(round(float(L.legval(1.0, sq)), 10))\nprint(vals)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['`−u″ = π^2 sin(πx)` has `u = sin(πx)`; N = 20 gives about 13 digits.','`−u″ = π^2 sin(πx)` حلها `u = sin(πx)`، و N = 20 تعطي نحو 13 رقماً.']],['$ False','$ 20','$ 1e-3'],'import numpy as np\nfrom scipy.special import eval_legendre\nN = 20\nxq, wq = np.polynomial.legendre.leggauss(N + 10)\nphi = lambda k, x: eval_legendre(k, x) - eval_legendre(k + 2, x)\nf = lambda x: np.pi**2 * np.sin(np.pi * x)\nc = np.array([wq @ (f(xq) * phi(k, xq)) / (4 * k + 6)\n              for k in range(N + 1)])\nx = np.linspace(-1, 1, 201)\nu = sum(c[k] * phi(k, x) for k in range(N + 1))\nprint(np.max(np.abs(u - np.sin(np.pi * x))) < 1e-10)'),
  Q('Why are more quadrature points (N + 10) used than unknowns?','لماذا تُستخدم نقاط تربيع (N + 10) أكثر من المجاهيل؟',['So the right-hand side integrals are computed accurately and do not limit the error','حتى تُحسب تكاملات الطرف الأيمن بدقة ولا تحد الخطأ'],[['The products `f φ_k` have higher degree than `φ_k`.','الضروب `f φ_k` درجتها أعلى من `φ_k`.']],[['To make the matrix square','لجعل المصفوفة مربعة'],['It is not needed','لا حاجة']]),
]);

lesson('505',79,[
  ['The tau method for `u′ + u = 0`, `u(0) = 1` on [0, 1] with NumPy’s Legendre module: build the operator on coefficients, drop the last residual equation and add the initial condition:','طريقة تاو لـ `u′ + u = 0` مع `u(0) = 1` على [0, 1] بوحدة ليجندر في NumPy: ابنِ المؤثر على المعاملات، واحذف آخر معادلة باقٍ، وأضف الشرط الابتدائي:'],
  '$ from numpy.polynomial import legendre as L\ndef tau(N):\n    A = np.zeros((N + 1, N + 1))\n    for k in range(N + 1):                  # column k: u = P_k\n        e = np.zeros(N + 1);  e[k] = 1\n        r = e.copy();  d = 2 * L.legder(e)\n        r[:d.size] += d                      # coefficients of u′ + u\n        A[:, k] = r\n    A[N, :] = L.legval(-1.0, np.eye(N + 1))  # u(0) = 1 replaces row N\n    b = np.zeros(N + 1);  b[N] = 1\n    return L.legval(1.0, np.linalg.solve(A, b))   # u(1)',
  ['On [0, 1] with `x = 2t − 1` the derivative picks up a factor 2. The answer for N = 2 is `u(1) = 7/19` (Course 503, Lesson 82), with error about `5 × 10^{−4}`.','وعلى [0, 1] مع `x = 2t − 1` تكتسب المشتقة العامل 2. والجواب عند N = 2 هو `u(1) = 7/19` (المقرر 503، الدرس 82) بخطأ نحو `5 × 10^{−4}`.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.368421',[['`7/19`, the tau answer for N = 2.','`7/19` جواب تاو عند N = 2.']],['$ 0.333333','$ 0.367879','$ 0.5'],'import numpy as np\nfrom numpy.polynomial import legendre as L\ndef tau(N):\n    A = np.zeros((N + 1, N + 1))\n    for k in range(N + 1):\n        e = np.zeros(N + 1); e[k] = 1\n        r = e.copy()\n        d = 2 * L.legder(e)\n        r[:d.size] += d\n        A[:, k] = r\n    A[N, :] = L.legval(-1.0, np.eye(N + 1))\n    b = np.zeros(N + 1); b[N] = 1\n    c = np.linalg.solve(A, b)\n    return L.legval(1.0, c)\nprint(f"{tau(2):.6f}")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['N = 10 reaches about 12 digits.','N = 10 تبلغ نحو 12 رقماً.']],['$ False','$ 0.368','$ 10'],'import numpy as np\nfrom numpy.polynomial import legendre as L\ndef tau(N):\n    A = np.zeros((N + 1, N + 1))\n    for k in range(N + 1):\n        e = np.zeros(N + 1); e[k] = 1\n        r = e.copy()\n        d = 2 * L.legder(e)\n        r[:d.size] += d\n        A[:, k] = r\n    A[N, :] = L.legval(-1.0, np.eye(N + 1))\n    b = np.zeros(N + 1); b[N] = 1\n    return L.legval(1.0, np.linalg.solve(A, b))\nprint(abs(tau(10) - np.exp(-1)) < 1e-10)'),
  Q('Why is the derivative multiplied by 2?','لماذا تُضرب المشتقة في 2؟',['With `x = 2t − 1`, `d/dt = 2 d/dx`','مع `x = 2t − 1` يكون `d/dt = 2 d/dx`'],[['The polynomials are in x on [−1, 1], the problem is in t on [0, 1].','كثيرات الحدود في x على [−1, 1] والمسألة في t على [0, 1].']],[['By convention','اصطلاحاً'],['It is a tau correction','تصحيح تاو']]),
  Q('Which row of A holds the initial condition?','أي صف في A يحمل الشرط الابتدائي؟',['The last row: the values `P_k(−1)`, since t = 0 is x = −1','الصف الأخير: القيم `P_k(−1)` لأن t = 0 تقابل x = −1'],[['It replaces the dropped residual equation.','يحل محل معادلة الباقي المحذوفة.']],[['The first row','الصف الأول'],['No row','لا صف']]),
]);

lesson('505',80,[
  ['A convergence study: solve for a sequence of N, measure the maximum error on a fine grid, and estimate the rate:','دراسة التقارب: حلّ لمتتالية من N، وقِس أكبر خطأ على شبكة دقيقة، وقدّر المعدل:'],
  '$ Ns = [4, 8, 12, 16, 20]\nxs = np.linspace(-1, 1, 2001)\nerrs = [np.max(np.abs(solve(N)(xs) - exact(xs))) for N in Ns]\nslope = np.polyfit(Ns, np.log10(errs), 1)[0]   # rho = 10**(-slope)\nfor N, e in zip(Ns, errs):\n    print(f"{N:3d}  {e:.2e}")',
  ['Use a grid much finer than the collocation points, report the error in scientific format, and stop the fit at the round-off floor; points below `10^{−13}` should not be included.','واستخدم شبكة أدق بكثير من نقاط التجميع، واعرض الخطأ بالصيغة العلمية، وأوقف الملاءمة عند أرضية التقريب، فلا تُدرج النقاط تحت `10^{−13}`.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$   8  1.23e-04',[['``:3d`` pads the integer to width 3, ``:.2e`` gives two decimals in scientific form.','``:3d`` تملأ العدد الصحيح إلى عرض 3، و ``:.2e`` تعطي رقمين عشريين بالصيغة العلمية.']],['$ 8 0.000123','$ 8  1.2e-04','$ 008  1.23E-04'],'print(f"{8:3d}  {1.2345e-4:.2e}")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3.0',[['Errors `C N^{−3}` give slope −3 on log–log axes.','الأخطاء `C N^{−3}` تعطي ميلاً −3 على محاور لوغاريتمية مزدوجة.']],['$ -3.0','$ 1.0','$ 8.0'],'import numpy as np\nNs = np.array([10, 20, 40, 80])\nerrs = 2.0 / Ns**3\nprint(round(-np.polyfit(np.log10(Ns), np.log10(errs), 1)[0], 6))'),
  Q('Why exclude errors below `10^{−13}` from the fit?','لماذا تُستبعد الأخطاء تحت `10^{−13}` من الملاءمة؟',['They are round-off, not discretization error, and would bend the line','هي خطأ تقريب لا خطأ تقطيع وستحني الخط'],[['The fitted rate must describe the method, not the machine.','المعدل الملاءم يجب أن يصف الطريقة لا الآلة.']],[['They are wrong','خاطئة'],['To make the table shorter','لتقصير الجدول']]),
  Q('Why measure the error on a grid of 2001 points rather than at the nodes?','لماذا يُقاس الخطأ على شبكة من 2001 نقطة بدل العقد؟',['The error between the nodes can be much larger than at them','الخطأ بين العقد قد يكون أكبر بكثير منه عندها'],[['At collocation nodes the residual vanishes by construction.','عند عقد التجميع ينعدم الباقي بالبناء.']],[['It is faster','أسرع'],['The nodes are unknown','العقد مجهولة']]),
]);

/* ---- 505 · Unit 9 (lessons 81–90): fractional and spectral computing;  Unit 10 (lessons 91–100): mastery ---- */
lesson('505',81,[
  ['The Riemann–Liouville integral of a power is explicit, so the integral of any polynomial in `t^{λ}` is a sum of powers:','تكامل ريمان–ليوفيل لقوة صريح، فتكامل أي كثيرة حدود في `t^{λ}` مجموع قوى:'],
  '$ def rl_power(p, mu):\n    """D^{-mu} t^p = c t^(p + mu); return c."""\n    return gamma(p + 1) / gamma(p + mu + 1)\n\ndef rl_poly(a, lam, mu, t):\n    """D^{-mu} of sum_r a[r] t^(r lam), evaluated at t."""\n    r = np.arange(len(a))\n    return np.sum(a * rl_power(r * lam, mu) * t**(r * lam + mu))',
  ['Always compare once with a direct quadrature of `(1/Γ(μ))∫_0^t (t − s)^{μ−1} f(s) ds`, using ``quad`` with ``weight="alg"``.','وقارن مرة واحدة دائماً بتربيع مباشر لـ `(1/Γ(μ))∫_0^t (t − s)^{μ−1} f(s) ds` باستخدام ``quad`` مع ``weight="alg"``.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.128379',['D^{−1/2}1 = #f{t^{1/2}}{Γ(3/2)},   t = 1:   #f{2}{#r{π}}'],['$ 1.0','$ 0.564190','$ 1.772454'],'from scipy.special import gamma\nprint(f"{gamma(1) / gamma(1.5):.6f}")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['The power rule agrees with direct quadrature for `f = t` and μ = 0.7 at t = 0.8.','قاعدة القوة تتفق مع التربيع المباشر لـ `f = t` و μ = 0.7 عند t = 0.8.']],['$ False','$ 0.0','$ nan'],'import numpy as np\nfrom scipy.integrate import quad\nfrom scipy.special import gamma\nmu, t = 0.7, 0.8\nexact = gamma(2) / gamma(2 + mu) * t**(1 + mu)\nq = quad(lambda s: s, 0, t, weight="alg", wvar=(0, mu - 1))[0] / gamma(mu)\nprint(np.isclose(exact, q))'),
  Q('What is `D^{−1/2}(3t − 2)`?','ما `D^{−1/2}(3t − 2)`؟','#f{4}{#r{π}}#r{t}(t − 1)',['3#f{Γ(2)}{Γ(5/2)}t^{3/2} − 2#f{Γ(1)}{Γ(3/2)}t^{1/2}'],['#f{4}{#r{π}}#r{t}(t + 1)','2t^{3/2} − 4t^{1/2}','#f{2}{#r{π}}#r{t}(3t − 2)']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.0',[['`D^{−1/2}(3t − 2) = (4/#r{π})#r{t}(t − 1)` vanishes at t = 1.','`D^{−1/2}(3t − 2) = (4/#r{π})#r{t}(t − 1)` تنعدم عند t = 1.']],['$ 2.256758','$ -2.256758','$ 1.0'],'import numpy as np\nfrom scipy.special import gamma\nrl_power = lambda p, mu: gamma(p + 1) / gamma(p + mu + 1)\na, lam, mu, t = np.array([-2.0, 3.0]), 1.0, 0.5, 1.0\nr = np.arange(2)\nval = np.sum(a * rl_power(r * lam, mu) * t**(r * lam + mu))\nprint(round(float(val), 12))'),
]);

lesson('505',82,[
  ['The fractional Legendre functions `L_n^{λ}(t) = Σ_r E_{n,r} t^{rλ}` use the coefficients `E_{n,r} = (−1)^{n−r}(n + r)!/((n − r)!(r!)^2)`:','دوال ليجندر الكسرية `L_n^{λ}(t) = Σ_r E_{n,r} t^{rλ}` تستخدم المعاملات `E_{n,r} = (−1)^{n−r}(n + r)!/((n − r)!(r!)^2)`:'],
  '$ from math import factorial as fct\ndef E_table(M):\n    E = np.zeros((M + 1, M + 1))\n    for n in range(M + 1):\n        for r in range(n + 1):\n            E[n, r] = (-1)**(n-r) * fct(n+r) / (fct(n-r) * fct(r)**2)\n    return E',
  ['Row n holds the power coefficients of `P_n^*`. Check the table against ``eval_sh_legendre(n, t**lam)``. The entries grow very fast (`E_{20,20} ≈ 1.4 × 10^{11}`), which is why the power form loses accuracy for large M.','والصف n يحمل معاملات القوى لـ `P_n^*`. وتحقق من الجدول مقابل ``eval_sh_legendre(n, t**lam)``. والعناصر تكبر بسرعة كبيرة (`E_{20,20} ≈ 1.4 × 10^{11}`) ولهذا تفقد صيغة القوى الدقة لـ M كبير.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [1.0, -6.0, 6.0]',['P_2^*(t) = 1 − 6t + 6t^2'],['$ [6.0, -6.0, 1.0]','$ [-1.0, 3.0, 0.0]','$ [1.0, 6.0, 6.0]'],'import numpy as np\nfrom math import factorial as fct\nn = 2\nE = [(-1)**(n-r) * fct(n+r) / (fct(n-r) * fct(r)**2) for r in range(3)]\nprint(E)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['The table reproduces `L_3^{λ}` with λ = 0.4.','الجدول يعيد `L_3^{λ}` مع λ = 0.4.']],['$ False','$ 20.0','$ nan'],'import numpy as np\nfrom math import factorial as fct\nfrom scipy.special import eval_sh_legendre\nM, lam = 3, 0.4\nE = np.zeros((M + 1, M + 1))\nfor n in range(M + 1):\n    for r in range(n + 1):\n        E[n, r] = (-1)**(n-r) * fct(n+r) / (fct(n-r) * fct(r)**2)\nt = np.linspace(0, 1, 7)\nT = t[:, None] ** (np.arange(M + 1) * lam)\nprint(np.allclose(T @ E[3], eval_sh_legendre(3, t**lam)))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.38e+11',[['`E_{20,20} = 40!/(20!)^2`.','`E_{20,20} = 40!/(20!)^2`.']],['$ 1.0e+00','$ 2.0e+01','$ 4.0e+01'],'from math import factorial as fct\nprint(f"{fct(40) / fct(20)**2:.2e}")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 1.0',[['Every `L_n^{λ}(1) = P_n^*(1) = 1`: the row sums of E are 1.','كل `L_n^{λ}(1) = P_n^*(1) = 1`: مجاميع صفوف E تساوي 1.']],['$ 0.0','$ -1.0','$ 4.0'],'import numpy as np\nfrom math import factorial as fct\nn = 4\nrow = [(-1)**(n-r) * fct(n+r) / (fct(n-r) * fct(r)**2)\n       for r in range(n + 1)]\nprint(float(sum(row)))'),
]);

lesson('505',83,[
  ['Theorem 3.1 as a NumPy function, checked against NumPy’s Legendre differentiation on `[0, γ]`:','النظرية 3.1 دالةً في NumPy مع التحقق مقابل اشتقاق ليجندر في NumPy على `[0, γ]`:'],
  '$ def d2_matrix(N, gam):\n    r, j = np.meshgrid(np.arange(N + 1), np.arange(N + 1), indexing="ij")\n    mask = (r > j) & ((r - j) % 2 == 0)\n    entry = 4 / gam**2 * (r - j) / 2 * (2 * j + 1) * (r + j + 1)\n    return np.where(mask, entry, 0.0)\n# check: row r = coefficients of the second derivative of L_r\nfrom numpy.polynomial import legendre as L\nrow = L.legder(np.eye(N + 1)[r], 2) * (2 / gam)**2',
  ['``L.legder(c, 2)`` differentiates a Legendre series twice on [−1, 1]; the factor `(2/γ)^2` maps to `[0, γ]`.','و ``L.legder(c, 2)`` تشتق متسلسلة ليجندر مرتين على [−1, 1]، والعامل `(2/γ)^2` ينقل إلى `[0, γ]`.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['Every row agrees with NumPy for N = 8, γ = 3.','كل صف يتفق مع NumPy عند N = 8 و γ = 3.']],['$ False','$ 8','$ nan'],'import numpy as np\nfrom numpy.polynomial import legendre as L\ndef d2_matrix(N, gam):\n    r, j = np.meshgrid(np.arange(N + 1), np.arange(N + 1), indexing="ij")\n    mask = (r > j) & ((r - j) % 2 == 0)\n    entry = 4 / gam**2 * (r - j) / 2 * (2 * j + 1) * (r + j + 1)\n    return np.where(mask, entry, 0.0)\nN, gam = 8, 3.0\nD = d2_matrix(N, gam)\nok = True\nfor r in range(N + 1):\n    row = L.legder(np.eye(N + 1)[r], 2) * (2 / gam)**2\n    ok &= np.allclose(D[r, :row.size], row)\n    ok &= np.allclose(D[r, row.size:], 0)\nprint(ok)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [12.0]',[['`L_2″ = 12` on [0, 1].','`L_2″ = 12` على [0, 1].']],['$ [3.0]','$ [6.0]','$ [12.0, 0.0, 0.0]'],'import numpy as np\nfrom numpy.polynomial import legendre as L\nprint((L.legder([0, 0, 1], 2) * 2**2).tolist())'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 6',[['(2, 0), (3, 1), (4, 0), (4, 2), (5, 1), (5, 3): r − j even and positive.','(2, 0) و (3, 1) و (4, 0) و (4, 2) و (5, 1) و (5, 3): r − j زوجي موجب.']],['$ 9','$ 15','$ 4'],'import numpy as np\nN = 5\nr, j = np.meshgrid(np.arange(N + 1), np.arange(N + 1), indexing="ij")\nprint(int(np.count_nonzero((r > j) & ((r - j) % 2 == 0))))'),
  Q('Why is the factor `(2/γ)^2` needed in the check?','لماذا نحتاج العامل `(2/γ)^2` في الفحص؟',['NumPy differentiates in x on [−1, 1]; with `x = 2t/γ − 1` each derivative brings `2/γ`','NumPy تشتق في x على [−1, 1]، ومع `x = 2t/γ − 1` تأتي كل مشتقة بـ `2/γ`'],[['Two derivatives give `4/γ^2`, the factor of Theorem 3.1.','مشتقتان تعطيان `4/γ^2` وهو عامل النظرية 3.1.']],[['To normalize','للتطبيع'],['It is not needed','لا حاجة']]),
]);

lesson('505',84,[
  ['Theorem 3.2 vectorized: the double sum is two matrix products:','النظرية 3.2 بصورة متجهية: المجموع المزدوج ضربان مصفوفيان:'],
  '$ def chi_matrix(M, lam, mu):\n    E = E_table(M);  k = np.arange(M + 1)\n    g = gamma(k * lam + 1) / gamma(k * lam + mu + 1)     # g[k]\n    K, S = np.meshgrid(k, k, indexing="ij")\n    W = 1 / (1 + K + S + mu / lam)                       # W[k, s]\n    return (E * g) @ W @ E.T * (2 * k + 1)               # entry (i, j)',
  ['``E * g`` multiplies column k of E by `g_k`; multiplying by ``(2 * k + 1)`` at the end scales column j by `2j + 1`. Then `D^{−μ}Φ ≈ χΦ` for the vector `Φ = (L_0^{λ}, …, L_M^{λ})^T`.','و ``E * g`` تضرب العمود k من E في `g_k`، والضرب في ``(2 * k + 1)`` في النهاية يحجّم العمود j بـ `2j + 1`. وعندها `D^{−μ}Φ ≈ χΦ` للمتجه `Φ = (L_0^{λ}, …, L_M^{λ})^T`.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ (6, 6)',[['An (M + 1) × (M + 1) matrix.','مصفوفة (M + 1) × (M + 1).']],['$ (5, 5)','$ (36,)','$ (6, 5)'],'import numpy as np\nM = 5\nk = np.arange(M + 1)\nK, S = np.meshgrid(k, k, indexing="ij")\nprint((1 / (1 + K + S + 3.0)).shape)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [[1.0, 2.0], [3.0, 4.0]] [[1.0, 4.0], [3.0, 8.0]]',[['``A * g`` scales the columns, ``A * (2k + 1)`` too.','``A * g`` تحجّم الأعمدة، وكذلك ``A * (2k + 1)``.']],['$ [[1.0, 2.0], [6.0, 8.0]] [[1.0, 2.0], [9.0, 12.0]]','$ [[1.0, 2.0], [3.0, 4.0]] [[3.0, 6.0], [3.0, 4.0]]','$ [[2.0, 4.0], [6.0, 8.0]] [[1.0, 4.0], [3.0, 8.0]]'],'import numpy as np\nA = np.array([[1.0, 2.0], [3.0, 4.0]])\nprint((A * np.ones(2)).tolist(), (A * np.array([1.0, 2.0])).tolist())'),
  Q('For μ = 1 and λ = 1, what is `χ_{0,0}`?','عند μ = 1 و λ = 1 ما `χ_{0,0}`؟','#f{1}{2}',['#f{Γ(1)}{Γ(2)}·#f{1}{1 + 0 + 0 + 1}',['`∫_0^t 1 = t = (L_0 + L_1)/2`.','`∫_0^t 1 = t = (L_0 + L_1)/2`.']],['1','#f{1}{3}','2']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [[0.5, 0.5, 0.0], [-0.1667, 0.0, 0.1667], [0.0, -0.1, 0.0]]',[['For μ = λ = 1 χ is the Legendre integration matrix; the last row lacks the dropped `L_3` term.','عند μ = λ = 1 تكون χ مصفوفة تكامل ليجندر، والصف الأخير ينقصه الحد `L_3` المحذوف.']],['$ [[1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 0.0, 1.0]]','$ [[0.5, 0.5, 0.0], [0.1667, 0.0, 0.1667], [0.0, 0.1, 0.0]]','$ [[0.5, 0.0, 0.0], [0.5, 0.0, 0.0], [0.0, 0.0, 0.0]]'],'import numpy as np\nfrom math import factorial as fct\nfrom scipy.special import gamma\ndef chi_matrix(M, lam, mu):\n    E = np.zeros((M + 1, M + 1))\n    for n in range(M + 1):\n        for r in range(n + 1):\n            E[n, r] = (-1)**(n-r) * fct(n+r) / (fct(n-r) * fct(r)**2)\n    k = np.arange(M + 1)\n    g = gamma(k * lam + 1) / gamma(k * lam + mu + 1)\n    K, S = np.meshgrid(k, k, indexing="ij")\n    W = 1 / (1 + K + S + mu / lam)\n    return (E * g) @ W @ E.T * (2 * k + 1)\nprint((chi_matrix(2, 1.0, 1.0).round(4) + 0.0).tolist())'),
]);

lesson('505',85,[
  ['The hand example of the guide is the first unit test of ``chi_matrix``: M = 1, λ = 1/2, μ = 3/2 must give','المثال اليدوي في الدليل هو أول اختبار وحدة لـ ``chi_matrix``: M = 1 و λ = 1/2 و μ = 3/2 يجب أن تعطي'],
  'χ ≈ #m{0.18806, 0.33851 ;; −0.01082, 0.01598}',
  ['A second, independent check projects `D^{−μ}L_i^{λ}` onto `L_j^{λ}` by Gauss quadrature in `s = t^{λ}`, without the formula. Agreement of the two to about 15 digits confirms both the derivation and the code.','وفحص ثانٍ مستقل يُسقط `D^{−μ}L_i^{λ}` على `L_j^{λ}` بتربيع جاوس في `s = t^{λ}` دون الصيغة. واتفاق الاثنين حتى نحو 15 رقماً يؤكد الاشتقاق والكود معاً.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ [[0.18806, 0.33851], [-0.01082, 0.01598]]',[['The guide’s hand example.','المثال اليدوي في الدليل.']],['$ [[0.25, 0.45], [0.0, 0.0]]','$ [[0.18806, -0.01082], [0.33851, 0.01598]]','$ [[1.0, 0.0], [0.0, 1.0]]'],'import numpy as np\nfrom math import factorial as fct\nfrom scipy.special import gamma\ndef chi_matrix(M, lam, mu):\n    E = np.zeros((M + 1, M + 1))\n    for n in range(M + 1):\n        for r in range(n + 1):\n            E[n, r] = (-1)**(n-r) * fct(n+r) / (fct(n-r) * fct(r)**2)\n    k = np.arange(M + 1)\n    g = gamma(k * lam + 1) / gamma(k * lam + mu + 1)\n    K, S = np.meshgrid(k, k, indexing="ij")\n    W = 1 / (1 + K + S + mu / lam)\n    return (E * g) @ W @ E.T * (2 * k + 1)\nprint(chi_matrix(1, 0.5, 1.5).round(5).tolist())'),
  Q('Project `u^3/Γ(5/2)` (with `u = t^{1/2}`) onto `L_0` and `L_1`.','أسقط `u^3/Γ(5/2)` (مع `u = t^{1/2}`) على `L_0` و `L_1`.','#f{1/4}{Γ(5/2)},   #f{9/20}{Γ(5/2)}',['∫_0^1 u^3 du = #f{1}{4},   3∫_0^1 u^3(2u − 1) du = 3(#f{2}{5} − #f{1}{4}) = #f{9}{20}'],['#f{1}{4},   #f{9}{20}','#f{1/3}{Γ(5/2)},   #f{1/2}{Γ(5/2)}','#f{1/4}{Γ(3/2)},   #f{9/20}{Γ(3/2)}']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.18806 0.33851',[['Independent check by quadrature: `D^{−3/2}1 = u^3/Γ(5/2)` projected onto `L_0` and `L_1`.','فحص مستقل بالتربيع: `D^{−3/2}1 = u^3/Γ(5/2)` مسقطة على `L_0` و `L_1`.']],['$ 0.25 0.45','$ 0.75225 0.33851','$ 0.18806 0.01598'],'import numpy as np\nfrom scipy.special import gamma, roots_sh_legendre, eval_sh_legendre\nu, w = roots_sh_legendre(10)\nf = u**3 / gamma(2.5)\nc0 = w @ (f * eval_sh_legendre(0, u))\nc1 = 3 * w @ (f * eval_sh_legendre(1, u))\nprint(f"{c0:.5f} {c1:.5f}")'),
  Q('Why is an independent check worth more than a second run of the same code?','لماذا يساوي الفحص المستقل أكثر من تشغيل ثانٍ للكود نفسه؟',['A second run repeats the same mistakes; a different method can only agree if both are right','التشغيل الثاني يكرر الأخطاء نفسها، والطريقة المختلفة لا تتفق إلا إذا كان الاثنان صحيحين'],[['Here: the formula against quadrature.','وهنا: الصيغة مقابل التربيع.']],[['It is faster','أسرع'],['It is not','لا يساوي أكثر']]),
]);

lesson('505',86,[
  ['Solve `D^{α}y = −y`, `y(0) = 1` in integrated form, `y = 1 − D^{−α}y`. With `y = c^TΦ` and `D^{−α}Φ ≈ χΦ`:','حل `D^{α}y = −y` مع `y(0) = 1` بالصيغة التكاملية `y = 1 − D^{−α}y`. ومع `y = c^TΦ` و `D^{−α}Φ ≈ χΦ`:'],
  '$ C = chi_matrix(M, lam, alpha)\ne0 = np.zeros(M + 1);  e0[0] = 1           # the constant 1 = L_0\nc = np.linalg.solve(np.eye(M + 1) + C.T, e0)\ny1 = sum(c[k] * eval_sh_legendre(k, 1.0) for k in range(M + 1))',
  ['The exact solution is `E_{α}(−t^{α})`; for α = 1/2, `y(1) = e·erfc(1) ≈ 0.427584`. With λ = 1/2 the error falls fast up to M ≈ 10, then grows again: the power form of `χ` loses digits because the E coefficients are huge (Lesson 82). Lesson 90 fixes this with higher precision.','والحل المضبوط `E_{α}(−t^{α})`، وعند α = 1/2 يكون `y(1) = e·erfc(1) ≈ 0.427584`. ومع λ = 1/2 يتناقص الخطأ بسرعة حتى M ≈ 10 ثم يكبر ثانية: صيغة القوى لـ `χ` تفقد أرقاماً لأن معاملات E ضخمة (الدرس 82). والدرس 90 يعالج ذلك بدقة أعلى.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2.8e-04 5.7e-08 1.3e-10',[['Errors at t = 1 for M = 4, 8, 10.','الأخطاء عند t = 1 لـ M = 4 و 8 و 10.']],['$ 1.2e-02 2.8e-04 5.7e-08','$ 1.0e-04 1.0e-08 1.0e-12','$ 2.8e-04 2.8e-04 2.8e-04'],'import numpy as np\nfrom math import factorial as fct\nfrom scipy.special import gamma, eval_sh_legendre, erfcx\ndef chi_matrix(M, lam, mu):\n    E = np.zeros((M + 1, M + 1))\n    for n in range(M + 1):\n        for r in range(n + 1):\n            E[n, r] = (-1)**(n-r) * fct(n+r) / (fct(n-r) * fct(r)**2)\n    k = np.arange(M + 1)\n    g = gamma(k * lam + 1) / gamma(k * lam + mu + 1)\n    K, S = np.meshgrid(k, k, indexing="ij")\n    W = 1 / (1 + K + S + mu / lam)\n    return (E * g) @ W @ E.T * (2 * k + 1)\nout = []\nfor M in (4, 8, 10):\n    e0 = np.zeros(M + 1); e0[0] = 1\n    c = np.linalg.solve(np.eye(M + 1) + chi_matrix(M, 0.5, 0.5).T, e0)\n    y1 = sum(c[k] * eval_sh_legendre(k, 1.0) for k in range(M + 1))\n    out.append(f"{abs(y1 - erfcx(1.0)):.1e}")\nprint(*out)'),
  Q('Why is the system `(I + χ^T)c = e_0`?','لماذا يكون النظام `(I + χ^T)c = e_0`؟','c^TΦ + c^TχΦ = e_0^TΦ',['y + D^{−α}y = 1,   y = c^TΦ,   D^{−α}y ≈ c^TχΦ'],['c^TΦ − c^TχΦ = e_0^TΦ','χc = e_0','c + χc = e_0']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.427584',[['`E_{1/2}(−1) = e·erfc(1)`, which is ``erfcx(1)``.','`E_{1/2}(−1) = e·erfc(1)` أي ``erfcx(1)``.']],['$ 0.367879','$ 0.5','$ 1.0'],'from scipy.special import erfcx\nprint(f"{erfcx(1.0):.6f}")'),
  Q('Why does the error grow again for M > 10 in double precision?','لماذا يكبر الخطأ ثانية عند M > 10 بالدقة المزدوجة؟',['The power form sums huge E coefficients with alternating signs: rounding error grows with M','صيغة القوى تجمع معاملات E ضخمة بإشارات متناوبة فيكبر خطأ التقريب مع M'],[['Higher precision (mpmath) or a recurrence-based projection removes the floor.','الدقة الأعلى (mpmath) أو الإسقاط المعتمد على علاقات التكرار يزيل هذه الأرضية.']],[['The method diverges','الطريقة متباعدة'],['λ is wrong','λ خاطئة']]),
]);

lesson('505',87,[
  ['Collocation points in time are the roots of `L_{M+1}^{λ}`: the shifted Legendre roots `s_i` mapped by `t_i = s_i^{1/λ}`:','نقاط التجميع في الزمن هي جذور `L_{M+1}^{λ}`: جذور ليجندر المزاحة `s_i` محوّلة بـ `t_i = s_i^{1/λ}`:'],
  '$ from scipy.special import roots_sh_legendre\ns, w = roots_sh_legendre(M + 1)\nt = s**(1 / lam)              # crowd toward t = 0 for small lam',
  ['Smaller λ pushes the points toward 0, where the solution behaves like `t^{λ}`. The weights stay the same: `∫_0^1 λt^{λ−1}f(t) dt ≈ Σ w_i f(t_i)`.','و λ الأصغر تدفع النقاط نحو 0 حيث يسلك الحل مثل `t^{λ}`. والأوزان تبقى نفسها: `∫_0^1 λt^{λ−1}f(t) dt ≈ Σ w_i f(t_i)`.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3.94e-04 7.83e-06',[['The smallest of 8 points for λ = 1/2 and λ = 1/3.','أصغر النقاط الثماني عند λ = 1/2 و λ = 1/3.']],['$ 1.99e-02 1.99e-02','$ 7.83e-06 3.94e-04','$ 1.99e-02 3.94e-04'],'from scipy.special import roots_sh_legendre\ns, w = roots_sh_legendre(8)\nprint(f"{(s**2)[0]:.2e} {(s**3)[0]:.2e}")'),
  Q('Compute `∫_0^1 λt^{λ−1}·2t dt` with λ = 1/2 by the mapped rule with 4 points.','احسب `∫_0^1 λt^{λ−1}·2t dt` مع λ = 1/2 بالقاعدة المحوّلة بأربع نقاط.','$ 0.666667',[['In `s = t^{1/2}` the integral is `∫_0^1 2s^2 ds = 2/3`, exact with 4 points.','في `s = t^{1/2}` يكون التكامل `∫_0^1 2s^2 ds = 2/3` مضبوطاً بأربع نقاط.']],['$ 0.5','$ 0.333333','$ 1.0'],'import numpy as np\nfrom scipy.special import roots_sh_legendre\ns, w = roots_sh_legendre(4)\nlam = 0.5\nt = s**(1 / lam)\nprint(f"{w @ (2 * t):.6f}")'),
  Q('Map the shifted Legendre root `s = 1/2` with λ = 1/3.','حوّل جذر ليجندر المزاح `s = 1/2` مع λ = 1/3.','t = #f{1}{8}',['(#f{1}{2})^3'],['t = #f{1}{2}','t = #f{1}{6}','t = #f{1}{9}']),
  Q('Why do the weights not change under the map?','لماذا لا تتغير الأوزان بالتحويل؟',['The rule integrates in `s = t^{λ}`, and `ds = λt^{λ−1}dt` is exactly the weight','القاعدة تكامل في `s = t^{λ}`، و `ds = λt^{λ−1}dt` هو الوزن بالضبط'],[['Only the points move.','النقاط وحدها تتحرك.']],[['They do change','بل تتغير'],['Because λ is small','لأن λ صغيرة']]),
]);

lesson('505',88,[
  ['A time-fractional diffusion problem with a manufactured solution:','مسألة انتشار كسرية زمنية بحل مُصنَّع:'],
  'D_t^{1/2}u = u_{xx} + f,   0 < x < 1,     u = t^{3/2} sin(πx),     f = (#f{3#r{π}}{4} t + π^2 t^{3/2}) sin(πx)',
  ['The pieces of the method: fractional Legendre functions in t with λ = 1/2 (then `t^{3/2} = s^3` exactly), Legendre in x, the integrated form `u = D_t^{−1/2}(u_{xx} + f)` since `u(x, 0) = 0`, collocation, and one linear solve. Before solving, check f with SymPy.','ومكونات الطريقة: دوال ليجندر الكسرية في t مع λ = 1/2 (فتكون `t^{3/2} = s^3` بالضبط)، وليجندر في x، والصيغة التكاملية `u = D_t^{−1/2}(u_{xx} + f)` لأن `u(x, 0) = 0`، والتجميع، وحل خطي واحد. وقبل الحل تحقق من f بـ SymPy.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 11.198945',['#f{3#r{π}}{4} + π^2 at (x, t) = (#f{1}{2}, 1)'],['$ 9.869604','$ 1.329340','$ 0.0'],'import numpy as np\nprint(f"{3 * np.sqrt(np.pi) / 4 + np.pi**2:.6f}")'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 3*sqrt(pi)*t/4',[['The Caputo derivative of order 1/2 of `t^{3/2}`.','مشتقة كابوتو من الرتبة 1/2 لـ `t^{3/2}`.']],['$ sqrt(pi)*t/2','$ 3*t/4','$ t**(3/2)'],'import sympy as sp\nt = sp.symbols("t", positive=True)\nprint(sp.gamma(sp.Rational(5, 2)) / sp.gamma(2) * t)'),
  Q('Which M makes the time part exact with λ = 1/2?','أي M يجعل الجزء الزمني مضبوطاً مع λ = 1/2؟','M = 3',['t^{3/2} = s^3'],['M = 1','M = 2','M = 6']),
  Q('Why is the integrated form `u = D_t^{−1/2}(u_{xx} + f)` without an extra term?','لماذا تأتي الصيغة التكاملية `u = D_t^{−1/2}(u_{xx} + f)` دون حد إضافي؟',['`u(x, 0) = 0`, so Lemma 2.1 adds nothing','`u(x, 0) = 0` فلا تضيف اللمة 2.1 شيئاً'],['D_t^{−1/2}D_t^{1/2}u = u − u(x, 0)'],[['Because f is smooth','لأن f ملساء'],['By convention','اصطلاحاً']]),
]);

lesson('505',89,[
  ['With `u ≈ Σ_{k,i} 𝒴_{ki} L_k^{λ}(t)L_i(x)`, the integrated equation becomes a matrix equation; time operators act on the left of 𝒴, space operators on the right:','مع `u ≈ Σ_{k,i} 𝒴_{ki} L_k^{λ}(t)L_i(x)` تصبح المعادلة التكاملية معادلة مصفوفية؛ مؤثرات الزمن تعمل على يسار 𝒴 ومؤثرات المكان على يمينها:'],
  '𝒴 − χ^T 𝒴 D^{(2)} = ℋ     ⇔     (I − D^{(2)T} ⊗ χ^T) vec(𝒴) = vec(ℋ)',
  ['With NumPy: ``K = np.eye(n) - np.kron(D2.T, C.T)`` and ``y = np.linalg.solve(K, H.ravel(order="F"))``, then the boundary conditions replace the rows of the boundary equations. The system has `(M + 1)(N + 1)` unknowns.','وفي NumPy: ``K = np.eye(n) - np.kron(D2.T, C.T)`` و ``y = np.linalg.solve(K, H.ravel(order="F"))``، ثم تحل الشروط الحدية محل صفوف المعادلات الحدية. وللنظام `(M + 1)(N + 1)` مجهولاً.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['The Kronecker form agrees with the matrix form for random matrices.','صيغة كرونيكر تتفق مع الصيغة المصفوفية لمصفوفات عشوائية.']],['$ False','$ (20, 20)','$ None'],'import numpy as np\nrng = np.random.default_rng(3)\nM, N = 3, 4\nC = rng.standard_normal((M + 1, M + 1))\nD2 = rng.standard_normal((N + 1, N + 1))\nY = rng.standard_normal((M + 1, N + 1))\nlhs = (Y - C.T @ Y @ D2).ravel(order="F")\nK = np.eye((M + 1) * (N + 1)) - np.kron(D2.T, C.T)\nprint(np.allclose(lhs, K @ Y.ravel(order="F")))'),
  Q('How many unknowns for M = 6, N = 10?','كم مجهولاً عند M = 6 و N = 10؟','77',['(M + 1)(N + 1) = 7·11'],['60','66','70']),
  Q('Why does `χ^T` stand on the left of 𝒴?','لماذا تقف `χ^T` على يسار 𝒴؟',['The rows of 𝒴 belong to the time functions: `D_t^{−μ}u = Φ^T χ^T 𝒴 Ψ`','صفوف 𝒴 تخص دوال الزمن: `D_t^{−μ}u = Φ^T χ^T 𝒴 Ψ`'],[['Space operators act on the columns, from the right.','مؤثرات المكان تعمل على الأعمدة من اليمين.']],[['By convention only','اصطلاحاً فقط'],['It should be on the right','يجب أن تكون على اليمين']]),
  Q('Which NumPy expression gives `vec(𝒴)` for this identity?','أي مقدار في NumPy يعطي `vec(𝒴)` لهذه المتطابقة؟','$ Y.ravel(order="F")',[['Column stacking.','رص الأعمدة.']],['$ Y.ravel()','$ Y.flatten()','$ Y.T.ravel(order="F")']),
]);

lesson('505',90,[
  ['``mpmath`` computes with any number of digits. Set the precision with ``mp.dps`` and use ``mpf`` numbers, ``mp.gamma``, ``mp.quad``, ``mp.matrix`` and ``mp.lu_solve``:','``mpmath`` تحسب بأي عدد من الأرقام. حدد الدقة بـ ``mp.dps`` واستخدم أعداد ``mpf`` و ``mp.gamma`` و ``mp.quad`` و ``mp.matrix`` و ``mp.lu_solve``:'],
  '$ from mpmath import mp, mpf\nmp.dps = 40\nmp.gamma(mpf(1) / 2)**2 - mp.pi       # 0 to 40 digits\nmp.quad(lambda s: s**3, [0, 1])       # 0.25\nmp.lu_solve(mp.matrix(A), mp.matrix(b))',
  ['Building `χ` with ``mpf`` arithmetic at 40 digits removes the round-off floor of Lesson 86, so the error keeps falling for larger M. Write numbers as strings, ``mpf("0.1")``, so that they are not rounded to doubles first.','وبناء `χ` بحساب ``mpf`` عند 40 رقماً يزيل أرضية التقريب في الدرس 86 فيستمر الخطأ في التناقص لـ M أكبر. واكتب الأعداد نصوصاً ``mpf("0.1")`` حتى لا تُقرَّب أولاً إلى الدقة المزدوجة.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.1 0.1000000000000000055511151231257827021182',[['``mpf(0.1)`` inherits the binary error of the double 0.1.','``mpf(0.1)`` ترث الخطأ الثنائي للعدد المزدوج 0.1.']],['$ 0.1 0.1','$ 0.1000000000000000055511151231257827021182 0.1','$ 0.1 0.1000000000000000000000000000000000000000'],'from mpmath import mp, mpf\nmp.dps = 40\nprint(mpf("0.1"), mpf(0.1))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['`Γ(1/2)^2 = π` to 40 digits.','`Γ(1/2)^2 = π` حتى 40 رقماً.']],['$ False','$ 3.14159','$ 1e-16'],'from mpmath import mp, mpf\nmp.dps = 40\nprint(abs(mp.gamma(mpf(1) / 2)**2 - mp.pi) < mpf(10)**-38)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['With 40 digits the integrated solve keeps improving: M = 14 is more accurate than double precision allowed.','مع 40 رقماً يستمر الحل التكاملي في التحسن: M = 14 أدق مما سمحت به الدقة المزدوجة.']],['$ False','$ 6.2e-08','$ 0.427584'],'from mpmath import mp, mpf, factorial as fct, gamma, erfc, e\nmp.dps = 40\nM, lam, mu = 14, mpf(1) / 2, mpf(1) / 2\ndef cE(n, r):\n    return (-1)**(n-r) * fct(n+r) / (fct(n-r) * fct(r)**2) if r <= n else 0\ng = [gamma(k*lam + 1) / gamma(k*lam + mu + 1) for k in range(M + 1)]\nchi = mp.matrix(M + 1, M + 1)\nfor i in range(M + 1):\n    for j in range(M + 1):\n        terms = (cE(i, k) * cE(j, q) * g[k] / (1 + k + q + mu/lam)\n                 for k in range(i + 1) for q in range(j + 1))\n        chi[i, j] = (2*j + 1) * sum(terms)\nc = mp.lu_solve(mp.eye(M + 1) + chi.T, mp.matrix([1] + [0] * M))\ny1 = sum(c[k] for k in range(M + 1))\nprint(abs(y1 - e * erfc(1)) < mpf(10)**-12)'),
  Q('Why write ``mpf("0.1")`` rather than ``mpf(0.1)``?','لماذا نكتب ``mpf("0.1")`` بدل ``mpf(0.1)``؟',['The float 0.1 is already rounded in binary; the string gives the exact decimal','العدد العشري 0.1 مقرَّب أصلاً ثنائياً، والنص يعطي العدد العشري المضبوط'],[['The first error would limit the accuracy to 16 digits.','الخطأ الأول يحد الدقة بـ 16 رقماً.']],[['It is faster','أسرع'],['There is no difference','لا فرق']]),
]);

lesson('505',91,[
  ['A class groups data and the functions that use it. A fractional Legendre basis is a natural class: it holds λ and M and knows how to evaluate itself:','الصنف يجمع البيانات والدوال التي تستخدمها. وأساس ليجندر الكسري صنف طبيعي: يحمل λ و M ويعرف كيف يحسب نفسه:'],
  '$ class FractionalBasis:\n    def __init__(self, M, lam):\n        self.M, self.lam = M, lam\n    def __call__(self, t):\n        """Matrix with column k = L_k^lam(t)."""\n        s = np.asarray(t, float)**self.lam\n        cols = [eval_sh_legendre(k, s) for k in range(self.M + 1)]\n        return np.column_stack(cols)\n    def __repr__(self):\n        return f"FractionalBasis(M={self.M}, lam={self.lam})"',
  ['``__init__`` runs when an object is created, ``self`` is the object, ``__call__`` makes it callable like a function and ``__repr__`` gives its printed form.','و ``__init__`` تُنفَّذ عند إنشاء الكائن، و ``self`` هو الكائن، و ``__call__`` تجعله قابلاً للاستدعاء كدالة، و ``__repr__`` تعطي صورته المطبوعة.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ FractionalBasis(M=4, lam=0.5)',[['``print`` uses ``__repr__`` when no ``__str__`` is defined.','``print`` تستخدم ``__repr__`` حين لا تُعرَّف ``__str__``.']],['$ <FractionalBasis object>','$ FractionalBasis','$ (4, 0.5)'],'class FractionalBasis:\n    def __init__(self, M, lam):\n        self.M, self.lam = M, lam\n    def __repr__(self):\n        return f"FractionalBasis(M={self.M}, lam={self.lam})"\nprint(FractionalBasis(4, 0.5))'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ (3, 5) [-1.0, 0.0, 1.0]',[['Three points, five functions; column 1 is `2#r{t} − 1`.','ثلاث نقاط وخمس دوال، والعمود 1 هو `2#r{t} − 1`.']],['$ (5, 3) [-1.0, 0.0, 1.0]','$ (3, 5) [1.0, 1.0, 1.0]','$ (3, 4) [-1.0, -0.5, 1.0]'],'import numpy as np\nfrom scipy.special import eval_sh_legendre\nclass FractionalBasis:\n    def __init__(self, M, lam):\n        self.M, self.lam = M, lam\n    def __call__(self, t):\n        s = np.asarray(t, float)**self.lam\n        cols = [eval_sh_legendre(k, s) for k in range(self.M + 1)]\n        return np.column_stack(cols)\nB = FractionalBasis(4, 0.5)(np.array([0.0, 0.25, 1.0]))\nprint(B.shape, B[:, 1].tolist())'),
  Q('What does ``self`` refer to inside a method?','إلامَ تشير ``self`` داخل دالة الصنف؟',['The object on which the method is called','الكائن الذي تُستدعى عليه الدالة'],[['``basis(t)`` passes ``basis`` as self.','``basis(t)`` تمرر ``basis`` على أنها self.']],[['The class itself','الصنف نفسه'],['The first argument the user gives','أول متغير يعطيه المستخدم']]),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 0.5 0.25',[['Attributes can be read and changed after creation.','يمكن قراءة الخصائص وتغييرها بعد الإنشاء.']],['$ 0.25 0.25','$ 0.5 0.5','$ Error'],'class FractionalBasis:\n    def __init__(self, M, lam):\n        self.M, self.lam = M, lam\nb = FractionalBasis(4, 0.5)\nold = b.lam\nb.lam = 0.25\nprint(old, b.lam)'),
]);

lesson('505',92,[
  ['A project is organized as a package: a folder with ``__init__.py`` and one module per topic, plus tests and scripts:','يُنظَّم المشروع حزمةً: مجلد فيه ``__init__.py`` ووحدة لكل موضوع مع الاختبارات والسكربتات:'],
  '$ mapped_legendre/\n    __init__.py          # from .solver import solve\n    basis.py             # E_table, FractionalBasis\n    matrices.py          # d2_matrix, chi_matrix\n    solver.py            # solve(problem, N, M, lam)\ntests/\n    test_matrices.py\nscripts/\n    convergence_table.py',
  ['Import with ``from mapped_legendre.matrices import chi_matrix``. Code that should run only when a file is executed, not imported, goes under ``if __name__ == "__main__":``.','واستورد بـ ``from mapped_legendre.matrices import chi_matrix``. والكود الذي يجب أن يعمل فقط عند تنفيذ الملف لا استيراده يوضع تحت ``if __name__ == "__main__":``.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ __main__',[['A file run directly has the name ``__main__``.','الملف المنفذ مباشرة اسمه ``__main__``.']],['$ main','$ None','$ <module>'],'print(__name__)'),
  Q('Which line imports ``chi_matrix`` from the module ``matrices`` of the package?','أي سطر يستورد ``chi_matrix`` من الوحدة ``matrices`` في الحزمة؟','$ from mapped_legendre.matrices import chi_matrix',[['Package, then module, then name.','الحزمة ثم الوحدة ثم الاسم.']],['$ import chi_matrix from mapped_legendre','$ from matrices import mapped_legendre.chi_matrix','$ include mapped_legendre/matrices.py']),
  Q('What makes a folder a regular package?','ما الذي يجعل المجلد حزمة عادية؟','$ __init__.py',[['It runs when the package is imported.','يُنفَّذ عند استيراد الحزمة.']],['$ main.py','$ setup.cfg','$ package.json']),
  Q('Why put the convergence study in ``scripts/`` instead of in ``solver.py``?','لماذا توضع دراسة التقارب في ``scripts/`` بدل ``solver.py``؟',['The library stays reusable; experiments that produce tables and figures are separate','تبقى المكتبة قابلة لإعادة الاستخدام، والتجارب التي تنتج الجداول والأشكال منفصلة'],[['Importing the solver must not run experiments.','استيراد الحلّال يجب ألا يشغّل التجارب.']],[['It is faster','أسرع'],['Python requires it','بايثون تتطلبه']]),
]);

lesson('505',93,[
  ['``pytest`` runs every function named ``test_*`` in files named ``test_*.py``; a test passes if its assertions hold:','``pytest`` تشغّل كل دالة اسمها ``test_*`` في ملفات اسمها ``test_*.py``، وينجح الاختبار إذا تحققت تأكيداته:'],
  '$ # tests/test_matrices.py\nimport numpy as np, pytest\nfrom mapped_legendre.matrices import chi_matrix, d2_matrix\n\ndef test_hand_example():\n    C = chi_matrix(1, 0.5, 1.5)\n    assert C[0, 0] == pytest.approx(0.18806, abs=1e-5)\n\ndef test_d2_entry():\n    assert d2_matrix(4, 1.0)[2, 0] == 12',
  ['Run ``pytest -q`` from the project folder. ``pytest.approx`` compares floats with a tolerance; ``np.testing.assert_allclose`` compares arrays.','وشغّل ``pytest -q`` من مجلد المشروع. و ``pytest.approx`` تقارن الأعداد العشرية بسماحية، و ``np.testing.assert_allclose`` تقارن المصفوفات.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True False',[['approx allows a relative tolerance of about `10^{−6}` by default.','approx تسمح افتراضياً بسماحية نسبية نحو `10^{−6}`.']],['$ False False','$ True True','$ False True'],'import pytest\nprint(0.1 + 0.2 == pytest.approx(0.3), 0.1 + 0.2 == 0.3)'),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ AssertionError',[['The arrays differ by more than the tolerance.','المصفوفتان تختلفان بأكثر من السماحية.']],['$ True','$ False','$ None'],'import numpy as np\ntry:\n    np.testing.assert_allclose([1.0, 2.0], [1.0, 2.1], rtol=1e-6)\nexcept AssertionError:\n    print("AssertionError")'),
  Q('Which function name will pytest collect?','أي اسم دالة يجمعه pytest؟','$ test_chi_hand_example',[['Names must start with ``test``.','يجب أن تبدأ الأسماء بـ ``test``.']],['$ check_chi','$ chi_test','$ TestChi']),
  Q('What should a good test of ``chi_matrix`` compare against?','بماذا يجب أن يقارن اختبار جيد لـ ``chi_matrix``؟',['Values known independently: the hand example and a quadrature projection','قيم معروفة باستقلال: المثال اليدوي وإسقاط بالتربيع'],[['Not against the output of the same function.','لا مقابل مخرج الدالة نفسها.']],[['Its own previous output only','مخرجها السابق فقط'],['Nothing: it runs without error','لا شيء: تعمل دون خطأ']]),
]);

lesson('505',94,[
  ['Measure before optimizing. ``time.perf_counter`` times a block, ``timeit`` repeats a small statement, and ``cProfile`` shows which functions take the time:','قِس قبل التحسين. ``time.perf_counter`` تقيس كتلة، و ``timeit`` تكرر عبارة صغيرة، و ``cProfile`` تبيّن أي الدوال تأخذ الوقت:'],
  '$ import time, timeit, cProfile\nt0 = time.perf_counter()\nC = chi_matrix(20, 0.5, 1.9)\nt1 = time.perf_counter()\nprint(f"{t1 - t0:.3f} s")\nsetup = "import numpy as np; x = np.ones(10**6)"\ntimeit.timeit("np.sum(x**2)", setup=setup, number=100)\ncProfile.run("solve(problem, 12, 12, 0.5)", sort="cumtime")',
  ['Typical findings in spectral codes: building matrices in Python loops, or evaluating symbolic expressions point by point, dominates; the linear solve itself is cheap for a few hundred unknowns.','والنتائج المعتادة في الأكواد الطيفية: بناء المصفوفات في حلقات بايثون أو حساب المقادير الرمزية نقطة نقطة هو المسيطر، أما الحل الخطي نفسه فرخيص لبضع مئات من المجاهيل.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['The vectorized sum is many times faster than the loop.','المجموع المتجهي أسرع من الحلقة بمرات كثيرة.']],['$ False','$ 1.0','$ None'],'import timeit\nsetup = "import numpy as np; x = np.ones(200000)"\nloop = "s = 0.0\\nfor v in x: s += v*v"\nt_loop = timeit.timeit(loop, setup=setup, number=3)\nt_vec = timeit.timeit("np.dot(x, x)", setup=setup, number=3)\nprint(t_loop > 5 * t_vec)'),
  Q('Which tool tells you which function takes most of the time?','أي أداة تخبرك أي دالة تأخذ معظم الوقت؟','$ cProfile',[['Sort by ``cumtime`` to see the expensive call chains.','رتّب حسب ``cumtime`` لترى سلاسل الاستدعاء المكلفة.']],['$ perf_counter','$ print','$ pytest']),
  Q('Why use ``perf_counter`` rather than ``time.time`` for timing?','لماذا نستخدم ``perf_counter`` بدل ``time.time`` للتوقيت؟',['It is a high-resolution clock meant for measuring short intervals','ساعة عالية الدقة مخصصة لقياس الفترات القصيرة'],[['``time.time`` can jump when the system clock is adjusted.','``time.time`` قد تقفز عند ضبط ساعة النظام.']],[['It is faster to call','أسرع في الاستدعاء'],['It measures CPU time only','تقيس زمن المعالج فقط']]),
  Q('A solve of 169 unknowns takes 1 ms, building the matrix 2 s. What should be optimized?','حل 169 مجهولاً يستغرق 1 ms وبناء المصفوفة 2 s. ماذا يجب تحسينه؟',['The construction of the matrix','بناء المصفوفة'],[['Vectorize it or build it from precomputed tables.','حوّله إلى متجهي أو ابنه من جداول محسوبة مسبقاً.']],[['The solver','الحلّال'],['Nothing','لا شيء']]),
]);

lesson('505',95,[
  ['When a loop cannot be vectorized, Numba compiles it to machine code with one decorator:','حين لا يمكن تحويل حلقة إلى متجهية، تترجمها Numba إلى كود آلة بمزخرف واحد:'],
  '$ from numba import njit\n@njit\ndef legendre_value(n, x):\n    p0, p1 = 1.0, x\n    if n == 0:\n        return p0\n    for k in range(1, n):\n        p0, p1 = p1, ((2*k + 1) * x * p1 - k * p0) / (k + 1)\n    return p1',
  ['The first call compiles (it takes a moment); later calls run at C speed. Numba supports NumPy arrays and most of NumPy, but not arbitrary Python objects; time the second call, not the first.','الاستدعاء الأول يترجم (يستغرق لحظة) والاستدعاءات اللاحقة تعمل بسرعة C. و Numba تدعم مصفوفات NumPy ومعظم NumPy لا الكائنات العامة في بايثون، فقِس الاستدعاء الثاني لا الأول.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ -0.4375',['P_3(0.5) = #f{5·0.125 − 3·0.5}{2}'],['$ 0.4375','$ -0.125','$ 0.5'],'from numba import njit\n@njit\ndef legendre_value(n, x):\n    p0, p1 = 1.0, x\n    if n == 0:\n        return p0\n    for k in range(1, n):\n        p0, p1 = p1, ((2*k + 1) * x * p1 - k * p0) / (k + 1)\n    return p1\nprint(legendre_value(3, 0.5))'),
  Q('Why is the first call of an ``@njit`` function slow?','لماذا يكون الاستدعاء الأول لدالة ``@njit`` بطيئاً؟',['It includes compiling the function for the argument types','يتضمن ترجمة الدالة لأنواع المتغيرات'],[['Later calls with the same types reuse the compiled code.','الاستدعاءات اللاحقة بالأنواع نفسها تعيد استخدام الكود المترجم.']],[['Numba is slow','Numba بطيئة'],['It runs in Python','يعمل في بايثون']]),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 5050.0',[['A compiled loop over a NumPy array.','حلقة مترجمة على مصفوفة NumPy.']],['$ 5050','$ 100.0','$ 4950.0'],'import numpy as np\nfrom numba import njit\n@njit\ndef total(a):\n    s = 0.0\n    for v in a:\n        s += v\n    return s\nprint(total(np.arange(1, 101, dtype=np.float64)))'),
  Q('When is Numba the right tool?','متى تكون Numba الأداة المناسبة؟',['For numerical loops that cannot be written as array operations, such as recurrences','للحلقات العددية التي لا تُكتب عمليات مصفوفية، مثل علاقات التكرار'],[['Vectorized NumPy code is often already fast enough.','وكود NumPy المتجهي غالباً سريع بما يكفي.']],[['For string processing','لمعالجة النصوص'],['Always, for every function','دائماً لكل دالة']]),
]);

lesson('505',96,[
  ['Jupyter notebooks mix code, results and text. For reproducible research: fix random seeds, record the versions, run the notebook from top to bottom before sharing, and keep the reusable code in modules:','دفاتر Jupyter تخلط الكود والنتائج والنص. وللبحث القابل لإعادة الإنتاج: ثبّت البذور العشوائية، وسجّل الإصدارات، وشغّل الدفتر من الأعلى إلى الأسفل قبل المشاركة، واحفظ الكود القابل لإعادة الاستخدام في وحدات:'],
  '$ rng = np.random.default_rng(42)          # same numbers every run\nimport sys, numpy, scipy\nprint(sys.version.split()[0], numpy.__version__, scipy.__version__)\n# Kernel ▸ Restart & Run All  before sharing',
  ['A ``requirements.txt`` with pinned versions (``numpy==2.5.3``) lets others rebuild the same environment.','و ``requirements.txt`` بإصدارات مثبتة (``numpy==2.5.3``) تسمح للآخرين بإعادة بناء البيئة نفسها.'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ True',[['The same seed gives the same numbers.','البذرة نفسها تعطي الأعداد نفسها.']],['$ False','$ 42','$ None'],'import numpy as np\na = np.random.default_rng(42).standard_normal(3)\nb = np.random.default_rng(42).standard_normal(3)\nprint(np.array_equal(a, b))'),
  Q('Why run «Restart & Run All» before sharing a notebook?','لماذا نشغّل «Restart & Run All» قبل مشاركة دفتر؟',['Cells run out of order can hide errors; a clean run proves the notebook works','الخلايا المشغلة بغير ترتيبها قد تخفي أخطاء، والتشغيل النظيف يثبت أن الدفتر يعمل'],[['Old variables in memory may make broken code look fine.','المتغيرات القديمة في الذاكرة قد تجعل الكود المعطوب يبدو سليماً.']],[['To make it faster','لتسريعه'],['It is not needed','لا حاجة']]),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ False',[['Without a seed each generator gives different numbers.','دون بذرة يعطي كل مولد أعداداً مختلفة.']],['$ True','$ 0','$ Error'],'import numpy as np\na = np.random.default_rng().standard_normal(5)\nb = np.random.default_rng().standard_normal(5)\nprint(np.array_equal(a, b))'),
  Q('What should a ``requirements.txt`` line look like for exact reproducibility?','كيف يجب أن يبدو سطر في ``requirements.txt`` لإعادة الإنتاج بالضبط؟','$ numpy==2.5.3',[['A pinned version.','إصدار مثبت.']],['$ numpy','$ numpy>=1','$ import numpy']),
]);

lesson('505',97,[
  ['Git records the history of a project. The daily cycle:','Git تسجل تاريخ المشروع. والدورة اليومية:'],
  '$ git init                       # once\ngit status                     # what changed\ngit add matrices.py            # stage a change\ngit commit -m "Add chi_matrix with hand-example test"\ngit log --oneline              # history\ngit diff                       # unstaged changes',
  ['Commit small, working steps with clear messages; never commit generated files or large data (list them in ``.gitignore``, for example ``__pycache__/`` and ``*.pdf``). A branch (``git switch -c new-idea``) lets you try an idea without breaking the main line.','احفظ خطوات صغيرة عاملة برسائل واضحة، ولا تحفظ الملفات المولدة أو البيانات الكبيرة (اذكرها في ``.gitignore`` مثل ``__pycache__/`` و ``*.pdf``). والفرع (``git switch -c new-idea``) يسمح بتجربة فكرة دون كسر الخط الرئيس.'],
],[
  Q('Which command shows what has changed since the last commit?','أي أمر يبيّن ما تغيّر منذ آخر حفظ؟','$ git status',[['``git diff`` shows the changed lines themselves.','``git diff`` تُظهر الأسطر المتغيرة نفسها.']],['$ git log','$ git commit','$ git init']),
  Q('Which two commands record a change to ``solver.py``?','أي أمرين يسجلان تغييراً في ``solver.py``؟','$ git add solver.py; git commit -m "…"',[['Stage, then commit.','التجهيز ثم الحفظ.']],['$ git commit solver.py','$ git save solver.py','$ git push solver.py']),
  Q('Which line in ``.gitignore`` keeps Python’s cache folders out of the repository?','أي سطر في ``.gitignore`` يُبقي مجلدات ذاكرة بايثون خارج المستودع؟','$ __pycache__/',[['Generated files are rebuilt automatically.','الملفات المولدة تُعاد تلقائياً.']],['$ *.py','$ tests/','$ .git']),
  Q('What is a good commit message?','ما رسالة الحفظ الجيدة؟','$ Fix sign of the e-term in h; add test',[['Short, specific, in the imperative.','قصيرة ومحددة وبصيغة الأمر.']],['$ changes','$ update','$ asdf']),
]);

lesson('505',98,[
  ['Translating a Mathematica notebook into Python, the main correspondences:','ترجمة دفتر Mathematica إلى بايثون، والمقابلات الأساسية:'],
  '$ Table[f[k], {k, 0, n}]        →  np.array([f(k) for k in range(n + 1)])\nLegendreP[n, x]                →  scipy.special.eval_legendre(n, x)\nNIntegrate[f, {x, a, b}]       →  scipy.integrate.quad(f, a, b)[0]\nLinearSolve[A, b]              →  np.linalg.solve(A, b)\nKroneckerProduct[A, B]         →  np.kron(A, B)\nFlatten[Transpose[Y]]          →  Y.ravel(order="F")\nm[[i, j]]   (from 1)           →  m[i - 1, j - 1]   (from 0)',
  ['The usual traps: indices start at 0 in Python; ``1/3`` is exact in Mathematica but a float in Python; ``^`` is not a power in Python; and Mathematica’s ``E`` is Euler’s number, so a coefficient table called E needs another name in both.','والفخاخ المعتادة: الأدلة تبدأ من 0 في بايثون، و ``1/3`` مضبوط في Mathematica وعشري في بايثون، و ``^`` ليست أساً في بايثون، و ``E`` في Mathematica هو عدد أويلر فجدول المعاملات المسمى E يحتاج اسماً آخر في الاثنين.'],
],[
  Q('Translate ``Table[k^2, {k, 1, 4}]``.','ترجم ``Table[k^2, {k, 1, 4}]``.','$ [k**2 for k in range(1, 5)]',[['``range`` stops before its end, and ``**`` is the power.','``range`` تقف قبل نهايتها و ``**`` هي الأس.']],['$ [k^2 for k in range(1, 4)]','$ [k**2 for k in range(1, 4)]','$ np.table(k**2, 1, 4)']),
  Q('The Mathematica entry ``m[[3, 2]]`` becomes what in NumPy?','العنصر ``m[[3, 2]]`` في Mathematica يصبح ماذا في NumPy؟','$ m[2, 1]',[['Subtract 1 from each index.','اطرح 1 من كل دليل.']],['$ m[3, 2]','$ m[[3, 2]]','$ m[4, 3]']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 2',[['In Python ``^`` is the bitwise exclusive or: `1 ⊕ 3 = 2`.','في بايثون ``^`` هي «أو الحصرية»: `1 ⊕ 3 = 2`.']],['$ 1','$ 3','$ 1.0'],'print(1 ^ 3)'),
  Q('Translate ``Flatten[Transpose[Y]]``.','ترجم ``Flatten[Transpose[Y]]``.','$ Y.ravel(order="F")',[['Column stacking.','رص الأعمدة.']],['$ Y.ravel()','$ Y.T.ravel(order="F")','$ np.flatten(Y)']),
]);

lesson('505',99,[
  ['A script that reproduces a table prints it in the paper’s format and records everything needed to rerun it:','السكربت الذي يعيد إنتاج جدول يطبعه بصيغة البحث ويسجل كل ما يلزم لإعادة تشغيله:'],
  '$ print(f"# numpy {np.__version__}, lam = {lam}, nu = {nu}")\nprint(f"{\'N\':>4} {\'error\':>10} {\'time (s)\':>9}")\nfor N in (4, 6, 8, 10, 12):\n    t0 = time.perf_counter();  e = error(N);  dt = time.perf_counter() - t0\n    print(f"{N:4d} {e:10.2e} {dt:9.3f}")',
  ['Compare digit by digit with the paper: agreement in the printed digits means the scheme is reproduced; a constant factor points to a different detail (for example evaluating h at the points instead of projecting it).','وقارن رقماً برقم مع البحث: الاتفاق في الأرقام المطبوعة يعني إعادة إنتاج الطريقة، والعامل الثابت يدل على تفصيل مختلف (مثل حساب h عند النقاط بدل إسقاطها).'],
],[
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 10   2.59e-09',[['Width 4 for N, width 10 with 2 decimals in scientific form for the error.','عرض 4 لـ N، وعرض 10 برقمين عشريين بالصيغة العلمية للخطأ.']],['$ 10 2.5865e-09','$ 10   0.00','$   10 2.59e-9'],'print(f"{10:4d} {2.5865e-9:10.2e}")'),
  Q('Your error is `3.55 × 10^{−11}` and the paper’s `2.50 × 10^{−12}`. What is the factor?','خطؤك `3.55 × 10^{−11}` وخطأ البحث `2.50 × 10^{−12}`. ما العامل؟','≈ 14',['#f{35.5}{2.5}'],['≈ 1.4','≈ 140','≈ 10']),
  Q('Why print the library versions and parameters at the top of the output?','لماذا تُطبع إصدارات المكتبات والوسائط في أول المخرجات؟',['So anyone can rerun the exact computation','حتى يستطيع أي أحد إعادة الحساب نفسه بالضبط'],[['The output file then documents itself.','فيوثق ملف المخرجات نفسه.']],[['For decoration','للزينة'],['Python requires it','بايثون تتطلبه']]),
  Q('Why is Example 1 of the paper exact in time for M ≥ 6 with λ = 1/2?','لماذا يكون المثال 1 في البحث مضبوطاً في الزمن عند M ≥ 6 مع λ = 1/2؟','t^3 = s^6',['s = t^{1/2}'],['t^3 = s^3','t^3 = s^{3/2}','t^3 = s^{12}']),
]);

lesson('505',100,[
  ['Capstone project: a tested Python package for the mapped Legendre method. Requirements: (1) modules ``basis``, ``matrices`` and ``solver`` with docstrings; (2) pytest tests for the E table, Theorem 3.1 against NumPy, the hand example of Theorem 3.2 and one full solve; (3) the three examples of the paper as data; (4) a script producing the convergence table and a ``semilogy`` figure in PDF; (5) a short study of λ and of double versus mpmath precision.','المشروع الختامي: حزمة بايثون مختبرة لطريقة ليجندر المحوّلة. المتطلبات: (1) الوحدات ``basis`` و ``matrices`` و ``solver`` مع التوثيق، (2) اختبارات pytest لجدول E والنظرية 3.1 مقابل NumPy والمثال اليدوي للنظرية 3.2 وحل كامل واحد، (3) أمثلة البحث الثلاثة بيانات، (4) سكربت ينتج جدول التقارب وشكل ``semilogy`` بصيغة PDF، (5) دراسة قصيرة لـ λ وللدقة المزدوجة مقابل mpmath.'],
  'y = t^{1+ν_1+ν_2} sin x,     ν_1 + ν_2 = 2.9   ⇒   y = t^{3.9} sin x',
  ['This is Example 2 of the paper, the hardest test: with λ = 1/2, `t^{3.9} = s^{7.8}` is not a polynomial in s. Report how the error depends on λ and M, and explain the behaviour you see.','وهذا هو المثال 2 في البحث، أصعب اختبار: مع λ = 1/2 تكون `t^{3.9} = s^{7.8}` ليست كثيرة حدود في s. قدّم كيف يعتمد الخطأ على λ و M وفسّر السلوك الذي تراه.'],
],[
  Q('Which λ ≤ 1 makes `t^{3.9}` equal to `s^4`?','أي λ ≤ 1 تجعل `t^{3.9}` تساوي `s^4`؟','λ = 0.975',['#f{3.9}{4}'],['λ = 0.5','λ = 0.39','λ = 1']),
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ 7.8 4.0',[['The power of s for λ = 0.5 and λ = 0.975.','قوة s عند λ = 0.5 و λ = 0.975.']],['$ 3.9 3.9','$ 4.0 7.8','$ 1.95 3.8'],'print(round(3.9 / 0.5, 6), round(3.9 / 0.975, 6))'),
  Q('Which tests should run before every change to the package?','أي الاختبارات يجب أن تعمل قبل كل تغيير في الحزمة؟',['All of them, with ``pytest -q``','كلها بـ ``pytest -q``'],[['A change that breaks the hand example is caught at once.','التغيير الذي يكسر المثال اليدوي يُكتشف فوراً.']],[['Only the new one','الجديد فقط'],['None, if the code runs','لا شيء إذا عمل الكود']]),
  Q('Why compare double precision with mpmath in the report?','لماذا تُقارن الدقة المزدوجة بـ mpmath في التقرير؟',['To separate the discretization error from round-off in the power form of χ','لفصل خطأ التقطيع عن خطأ التقريب في صيغة القوى لـ χ'],[['Lesson 86 showed the round-off floor near M = 10.','أظهر الدرس 86 أرضية التقريب قرب M = 10.']],[['mpmath is faster','mpmath أسرع'],['Journals require it','تشترطه المجلات']]),
]);

export const MS505 = true;
