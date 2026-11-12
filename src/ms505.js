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

export const MS505 = true;
