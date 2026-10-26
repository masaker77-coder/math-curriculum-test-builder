/* Welcome page and per-mode guides shown in the output area until "Run" is pressed. Pure: returns HTML. */
import { L } from './viz.js';

const FEATURES = [
  ['📚', ['Every course of the study plan', 'كل مقررات الخطة'], ['Levels 1–8, the electives and the Business Administration course, each with its own topics.', 'من المستوى الأول إلى الثامن والمقررات الاختيارية ومقرر قسم إدارة الأعمال، وكل مقرر بمواضيعه.']],
  ['∞', ['Endless fresh questions', 'أسئلة جديدة بلا نهاية'], ['Every run generates new numbers: essay or multiple choice, at three difficulty levels.', 'كل تنفيذ يولّد أسئلة بأرقام جديدة: مقالية أو اختيار من متعدد، بثلاثة مستويات صعوبة.']],
  ['✎', ['Step-by-step solutions', 'حلول بالخطوات'], ['A simple, detailed solution for every question, with graphs and the statistical tables used.', 'حل مبسط ومفصل لكل سؤال، مع الرسوم البيانية والجداول الإحصائية المستخدمة.']],
  ['📝', ['Homework and exams', 'واجبات واختبارات'], ['Ready presets with questions, parts and marks, several versions and an answer key.', 'قوالب جاهزة بالأسئلة والفروع والدرجات، مع نماذج متعددة ومفتاح إجابة.']],
  ['📖', ['Professional booklets', 'ملازم احترافية'], ['Cover, index, a short overview of each topic and worked examples on numbered A4 pages.', 'غلاف وفهرس وشرح مبسط لكل موضوع وأمثلة محلولة في صفحات A4 مرقمة.']],
  ['📱', ['Interactive practice app', 'تطبيق تدريب تفاعلي'], ['Instant checking and gradual hints; download it as one file that works offline for students.', 'تصحيح فوري وخطوات تظهر تدريجياً، ويُنزَّل كملف واحد يعمل بدون إنترنت للطلاب.']],
  ['∴', ['Proofs of formulas', 'إثبات القوانين'], ['Each course has its main formulas proved in simple steps, right after their topic.', 'لكل مقرر قوانينه الأساسية مُثبتة بخطوات بسيطة، بعد موضوعها مباشرة.']],
  ['🌐', ['Arabic · English · both', 'عربي · إنجليزي · الاثنان'], ['Switch the language at any time; each language has its own colours.', 'بدّل اللغة في أي وقت، ولكل لغة ألوان تميزها.']],
  ['🖨', ['Print, PDF and saving', 'الطباعة وPDF والحفظ'], ['Print or save as PDF, save tests in the browser, export and import them as files.', 'اطبع أو احفظ PDF، واحفظ الاختبارات في المتصفح، وصدّرها واستوردها كملفات.']],
];

const MODE_GUIDE = {
  practice: { icon:'✎', t:['Practice sheet','ورقة تدريب'],
    d:['Numbered questions, one part per topic, for classwork or self-study.', 'أسئلة مرقمة، كل موضوع في جزء مستقل، للتدريب في المحاضرة أو للمذاكرة.'],
    f:[['Choose how many essay and multiple-choice questions each topic gets.','حدد عدد الأسئلة المقالية والاختيارية لكل موضوع.'],
       ['Answer key on a separate page or the same page, with step-by-step solutions if you wish.','مفتاح الإجابة في صفحة مستقلة أو في الصفحة نفسها، مع الحلول بالخطوات إن أردت.'],
       ['Up to 6 versions with shuffled questions, and adjustable work space.','حتى 6 نماذج بترتيب مختلف للأسئلة، ومسافة حل قابلة للتعديل.'],
       ['Present mode shows one question at a time on the projector.','وضع العرض يعرض سؤالاً واحداً في كل مرة على جهاز العرض.']] },
  hw: { icon:'📝', t:['Homework','واجب'],
    d:['A homework sheet: 5 questions, 2 marks in total by default.', 'ورقة واجب: 5 أسئلة ومجموعها درجتان افتراضياً.'],
    f:[['When you pick more items than questions, each question is split into parts (a), (b), … and its marks are shared.','إذا كانت البنود أكثر من عدد الأسئلة يُقسَّم السؤال إلى فروع (أ)، (ب)… وتُوزَّع درجته عليها.'],
       ['Change the number of questions and the marks per question below the topics.','غيّر عدد الأسئلة ودرجة كل سؤال من الحقول أسفل المواضيع.'],
       ['No topic ticked? The program picks different topics of the course for you.','لم تحدد موضوعاً؟ يختار البرنامج مواضيع مختلفة من المقرر.']] },
  mid: { icon:'⏱', t:['Midterm exam','اختبار فصلي'],
    d:['A midterm exam: 3 questions × 5 marks by default, with a header for name, date and score.', 'اختبار فصلي: 3 أسئلة × 5 درجات افتراضياً، مع ترويسة للاسم والتاريخ والدرجة.'],
    f:[['Questions split into parts automatically, with the marks of each part shown.','تُقسَّم الأسئلة إلى فروع تلقائياً مع درجة كل فرع.'],
       ['Several versions with an answer key and step-by-step solutions for the grader.','نماذج متعددة مع مفتاح إجابة وحلول بالخطوات للمصحح.'],
       ['Statistics topics can add a full page of z, t and F tables.','مواضيع الإحصاء يمكن أن تضيف صفحة كاملة لجداول z و t و F.']] },
  final: { icon:'🎓', t:['Final exam','اختبار نهائي'],
    d:['A final exam: 5 questions × 10 marks by default, covering any topics you choose.', 'اختبار نهائي: 5 أسئلة × 10 درجات افتراضياً، يغطي أي مواضيع تختارها.'],
    f:[['Mix topics from the course — or from all courses — in one exam.','اجمع مواضيع من المقرر — أو من كل المقررات — في اختبار واحد.'],
       ['Essay and multiple-choice parts, versions, answer key and solutions.','فروع مقالية واختيار من متعدد، ونماذج، ومفتاح إجابة، وحلول.'],
       ['Save the exam to reuse or edit later, or export it as a file.','احفظ الاختبار لإعادة استخدامه أو تعديله لاحقاً، أو صدّره كملف.']] },
  examples: { icon:'💡', t:['Worked examples','أمثلة محلولة'],
    d:['For each topic: a short overview, then worked examples (5 by default), each solved step by step.', 'لكل موضوع: شرح مبسط ثم أمثلة محلولة (5 افتراضياً)، كل مثال محلول خطوة بخطوة.'],
    f:[['Ideal to explain a topic in the lecture or to hand out for revision.','مناسب لشرح الموضوع في المحاضرة أو للتوزيع للمراجعة.'],
       ['Graphs, tables and the final answer are shown with every example.','الرسوم والجداول والإجابة النهائية تظهر مع كل مثال.'],
       ['Set the number of examples next to each topic.','حدد عدد الأمثلة بجانب كل موضوع.']] },
  booklet: { icon:'📖', t:['Study booklet','ملزمة'],
    d:['A printable booklet: cover page, index, then each topic with a short overview and worked examples.', 'ملزمة جاهزة للطباعة: صفحة غلاف، ثم الفهرس، ثم كل موضوع بشرح مبسط وأمثلة محلولة.'],
    f:[['Cover with the course details and an illustration drawn from its topics; optional university, author and semester.','غلاف ببيانات المقرر وصورة مرسومة من مواضيعه، مع الجامعة والإعداد والفصل الدراسي اختيارياً.'],
       ['Index with page numbers; each topic starts on a new numbered A4 page.','فهرس بأرقام الصفحات، وكل موضوع يبدأ في صفحة A4 مرقمة جديدة.'],
       ['Pages are filled: extra examples are added where there is room, graphs sit beside the solution, short examples go two per row.','تُملأ الصفحات: أمثلة إضافية حيث يوجد فراغ، والرسم بجانب الحل، والأمثلة القصيرة مثالان في صف.'],
       ['3 examples per topic by default; long examples continue on the next page.','3 أمثلة لكل موضوع افتراضياً، والأمثلة الطويلة تُكمَل في الصفحة التالية.']] },
  app: { icon:'📱', t:['Interactive app','تطبيق تفاعلي'],
    d:['A practice app for students: endless multiple-choice questions with instant checking.', 'تطبيق تدريب للطلاب: أسئلة اختيار من متعدد لا تنتهي مع تصحيح فوري.'],
    f:[['Steps of the solution appear one at a time; the topic overview is one tap away.','خطوات الحل تظهر خطوة خطوة، والشرح المبسط بضغطة.'],
       ['Score, percentage and streak; choice of topic and level.','النتيجة والنسبة والإجابات المتتالية، مع اختيار الموضوع والمستوى.'],
       ['Download it as one HTML file that works offline on any phone or computer, and share it.','نزّله كملف HTML واحد يعمل بدون إنترنت على أي جوال أو حاسب، وشاركه.']] },
};

const STEPS = [
  [['Choose what to make','اختر ما تريد إنشاءه'], ['Use the buttons at the top: practice sheet, homework, exams, worked examples, booklet or interactive app.','من الأزرار في الأعلى: ورقة تدريب، واجب، اختبارات، أمثلة محلولة، ملزمة، أو تطبيق تفاعلي.']],
  [['Pick the course and topics','اختر المقرر والمواضيع'], ['Choose the level and the course, tick one or more topics and set how many questions each one gets.','اختر المستوى والمقرر، وحدد موضوعاً أو أكثر، وعدد الأسئلة لكل موضوع.']],
  [['Press ▶ Run','اضغط ▶ تنفيذ'], ['The result appears here, ready to review, print or save.','تظهر النتيجة هنا جاهزة للمراجعة والطباعة والحفظ.']],
];

const card = ([icon, t, d]) => `<div class="gd-card"><div class="gd-ic">${icon}</div><div><div class="gd-ct">${L(...t)}</div><div class="gd-cd">${L(...d)}</div></div></div>`;

/* kind: 'welcome' or a mode key; stats: {courses, topics, proofs}; hasTopics: a test is already built */
export function guideHTML(kind, stats, hasTopics){
  if(kind==='welcome') return `<div class="sheet guide">
    <div class="gd-hero"><div class="gd-kicker">${L('Welcome','مرحباً بك')}</div>
      <h2>${L('Math Test Builder','منشئ اختبارات الرياضيات')}</h2>
      <p>${L('Tests, homework, worked examples, study booklets and interactive practice apps for every course of the mathematics study plan — with step-by-step solutions.',
             'اختبارات وواجبات وأمثلة محلولة وملازم وتطبيقات تدريب تفاعلية لكل مقررات خطة الرياضيات — مع الحلول بالخطوات.')}</p>
      <div class="gd-stats"><div><b>${stats.courses}</b>${L('courses','مقرراً')}</div><div><b>${stats.topics}</b>${L('topics','موضوعاً')}</div><div><b>${stats.proofs}</b>${L('proofs','برهاناً')}</div><div><b>3</b>${L('language modes','أوضاع لغة')}</div></div></div>
    <h3 class="gd-h">${L('Features','المميزات')}</h3>
    <div class="gd-grid">${FEATURES.map(card).join('')}</div>
    <h3 class="gd-h">${L('How to start','كيف تبدأ')}</h3>
    <ol class="gd-steps">${STEPS.map(([t,d])=>`<li><b>${L(...t)}</b><span>${L(...d)}</span></li>`).join('')}</ol>
  </div>`;
  const g=MODE_GUIDE[kind];
  return `<div class="sheet guide">
    <div class="gd-hero small"><div class="gd-kicker">${L('You chose','اخترت')}</div><h2>${g.icon} ${L(...g.t)}</h2><p>${L(...g.d)}</p></div>
    <h3 class="gd-h">${L('What you get','ماذا ستحصل عليه')}</h3>
    <ul class="gd-list">${g.f.map(f=>`<li>${L(...f)}</li>`).join('')}</ul>
    <h3 class="gd-h">${L('Instructions','التعليمات')}</h3>
    <ol class="gd-steps">${STEPS.slice(1).map(([t,d])=>`<li><b>${L(...t)}</b><span>${L(...d)}</span></li>`).join('')}</ol>
    ${hasTopics?`<div class="gd-note">${L('The topics already chosen are kept: press ▶ Run to show them in this format, or tick other topics first.','المواضيع المختارة سابقاً محفوظة: اضغط ▶ تنفيذ لعرضها بهذا الشكل، أو حدد مواضيع أخرى أولاً.')}</div>`:''}
  </div>`;
}
