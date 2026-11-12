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
  Q('What does this program display?','ماذا يعرض هذا البرنامج؟','$ (2, 3) (6,) (3, 2)',[['vstack adds rows, hstack joins end to end, column_stack makes columns.','vstack تضيف صفوفاً، و hstack تضم طرفاً بطرف، و column_stack تصنع أعمدة.']],['$ (3, 2) (6,) (2, 3)','$ (2, 3) (2, 3) (3, 2)','$ (6,) (6,) (6,)'],'import numpy as np\na = np.arange(3)\nv, h = np.vstack([a, a]), np.hstack([a, a])\nc = np.column_stack([a, a])\nprint(v.shape, h.shape, c.shape)'),
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
  Q('Which two steps make Arabic text display correctly in a figure?','أي خطوتين تجعلان النص العربي يظهر صحيحاً في شكل؟',['Reshape the letters (arabic_reshaper) and reorder them right to left (python-bidi), with an Arabic font','وصل الحروف (arabic_reshaper) وترتيبها من اليمين إلى اليسار (python-bidi) مع خط عربي'],[['Without them the letters appear separated and reversed.','دونهما تظهر الحروف منفصلة ومعكوسة.']],[['Only a larger font size','حجم خط أكبر فقط'],['Nothing: it works directly','لا شيء: يعمل مباشرة']]),
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

export const MS505 = true;
