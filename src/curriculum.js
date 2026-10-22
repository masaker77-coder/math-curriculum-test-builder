/* ============================ CURRICULUM ============================ */
/* human-readable label for every generator topic */
export const TOPIC_LABELS = {
  intAddSub:'Integer add / subtract', intMulDiv:'Integer multiply / divide', orderOps:'Order of operations',
  fracAddSub:'Add / subtract fractions', fracMul:'Multiply fractions', simplifyRatio:'Simplify ratios',
  proportions:'Ratios & proportions', rounding:'Rounding', percentOf:'Percent of a number',
  fracToDecimal:'Fraction to decimal', gcfLcm:'GCF & LCM', powers:'Exponents', absValue:'Absolute value',
  scientificNotation:'Scientific notation', decimalOps:'Decimal operations',
  oneStep:'One-step equations', twoStep:'Two-step equations', multiStep:'Multi-step equations',
  combineLike:'Combine like terms', distribute:'Distributive property', evalExpr:'Evaluate expressions',
  inequalities:'Solve inequalities', exponentRules:'Exponent rules', factorGCF:'Factor out the GCF',
  factorQuad:'Factor quadratics', solveQuad:'Solve quadratics', simplifyRadical:'Simplify radicals',
  polyMultiply:'Multiply binomials (FOIL)', powerOfPower:'Power of a power', vertex:'Vertex of a parabola',
  logEval:'Evaluate logarithms', expEquation:'Exponential equations', arithmeticSeq:'Arithmetic sequences',
  geometricSeq:'Geometric sequences', iPowers:'Powers of i',
  slope:'Slope from two points', midpoint:'Midpoint', distanceFormula:'Distance formula',
  rectangle:'Rectangle area & perimeter', triangleArea:'Triangle area', circle:'Circle area & circumference',
  pythagorean:'Pythagorean theorem', parallelogram:'Parallelogram area', trapezoid:'Trapezoid area',
  volumeBox:'Volume of a prism', volumeCylinder:'Volume of a cylinder', triangleAngles:'Triangle angle sum',
  polygonAngles:'Polygon interior angles',
  trigValues:'Special-angle values', trigRatios:'Right-triangle ratios', degRad:'Degrees to radians',
  trigValuesRad:'Radian-angle values', radToDeg:'Radians to degrees', referenceAngle:'Reference angles',
  derivative:'Power-rule derivatives', integral:'Power-rule integrals', defIntegral:'Definite integrals',
  limitPoly:'Polynomial limits', secondDerivative:'Second derivatives', tangentSlope:'Tangent-line slope',
  derivTrig:'Derivatives of functions', avgRateOfChange:'Average rate of change',
  meanMedianMode:'Mean, median, mode', probability:'Probability', zScore:'z-scores',
  combinations:'Combinations (nCr)', permutations:'Permutations (nPr)',
  matrixAdd:'Matrix addition', determinant2:'Determinant (2×2)', matrixMultiply:'Matrix multiplication (2×2)',
  complexAdd:'Add complex numbers', complexMultiply:'Multiply complex numbers', complexModulus:'Modulus of a complex number',
  modArithmetic:'Modular arithmetic', isPrime:'Prime numbers',
  simpleInterest:'Simple interest', compoundInterest:'Compound interest', presentValue:'Present value',
};
/* majors -> courses (code, title, topics). Empty topics = no auto-generated problems yet. */
export const CURRICULUM = [
  { major:'Foundation (Shared)', courses:[
    { code:'MATH 130', title:'Fundamentals of Mathematics', topics:['intAddSub','intMulDiv','orderOps','fracAddSub','fracMul','fracToDecimal','decimalOps','rounding','percentOf','powers','absValue','gcfLcm','scientificNotation','simplifyRatio','proportions'] },
    { code:'(prep)', title:'Algebra (preparatory)', topics:['oneStep','twoStep','multiStep','combineLike','distribute','evalExpr','inequalities','exponentRules','factorGCF','factorQuad','solveQuad','simplifyRadical','polyMultiply','powerOfPower','vertex','logEval','expEquation','arithmeticSeq','geometricSeq','iPowers'] },
    { code:'(prep)', title:'Geometry (preparatory)', topics:['rectangle','triangleArea','circle','pythagorean','parallelogram','trapezoid','volumeBox','volumeCylinder','triangleAngles','polygonAngles','distanceFormula','midpoint','slope'] },
    { code:'(prep)', title:'Trigonometry (preparatory)', topics:['trigValues','trigRatios','degRad','trigValuesRad','radToDeg','referenceAngle'] },
    { code:'MATH 140', title:'Calculus', topics:['derivative','integral','defIntegral','limitPoly','tangentSlope','secondDerivative','avgRateOfChange','derivTrig'] },
    { code:'STAT 101', title:'Statistics', topics:['meanMedianMode','probability','zScore'] },
    { code:'CS 130', title:'Computer skills', topics:[] },
    { code:'PHYS 101', title:'General Physics', topics:[] },
  ]},
  { major:'Mathematics', courses:[
    { code:'MATH 212', title:'Introduction to Integral Calculus', topics:['integral','defIntegral'] },
    { code:'MATH 231', title:'Differential and Integral Calculus', topics:['derivative','secondDerivative','tangentSlope'] },
    { code:'MATH 233', title:'Foundations of Mathematics', topics:[] },
    { code:'MATH 242', title:'Linear Algebra', topics:['matrixAdd','matrixMultiply','determinant2','systems'] },
    { code:'MATH 353', title:'Numerical Analysis', topics:[] },
    { code:'MATH 333', title:'Ordinary Differential Equations', topics:[] },
    { code:'MATH 315', title:'Partial Differential Equations', topics:[] },
    { code:'MATH 335', title:'Vector Analysis', topics:[] },
    { code:'MATH 383', title:'Real Analysis', topics:[] },
    { code:'MATH 473', title:'Topology', topics:[] },
    { code:'MATH 475', title:'Differential Geometry', topics:[] },
    { code:'MATH 343', title:'Group Theory', topics:[] },
    { code:'MATH 444', title:'Rings and Fields', topics:[] },
    { code:'MATH 485', title:'Complex Analysis', topics:['complexAdd','complexMultiply','complexModulus','iPowers'] },
    { code:'MATH 367', title:'Number Theory', topics:['gcfLcm','modArithmetic','isPrime'] },
    { code:'MATH 468', title:'Graph Theory', topics:[] },
    { code:'MATH 417', title:'Special Functions', topics:[] },
    { code:'MATH 432', title:'Functional Analysis', topics:[] },
  ]},
  { major:'Statistics', courses:[
    { code:'STAT 211', title:'Probability Theory 1', topics:['probability','combinations','permutations'] },
    { code:'STAT 312', title:'Probability Theory 2', topics:[] },
    { code:'STAT 302', title:'Statistical Methods', topics:['meanMedianMode','zScore'] },
    { code:'STAT 303', title:'Regression Analysis', topics:['slope'] },
    { code:'STAT 321', title:'Statistical Inference', topics:[] },
    { code:'STAT 361', title:'Operations Research 1', topics:[] },
    { code:'STAT 413', title:'Stochastic Processes', topics:[] },
    { code:'STAT 405', title:'Design & Analysis of Experiments', topics:[] },
    { code:'STAT 451', title:'Sampling Theory', topics:[] },
  ]},
  { major:'Financial Mathematics', courses:[
    { code:'FM 321', title:'Elementary and Financial Mathematics', topics:['simpleInterest','compoundInterest','presentValue','percentOf'] },
    { code:'FM 371', title:'Economic and Financial Mathematics', topics:[] },
    { code:'FM 372', title:'Quantitative Finance', topics:[] },
    { code:'FM 422', title:'Options, Futures and Derivatives', topics:[] },
    { code:'FM 423', title:'Computational Financial Mathematics', topics:[] },
    { code:'FM 471', title:'Derivatives of Financial Mathematics', topics:[] },
  ]},
];
/* flat search index over every topic in the curriculum */
export const INDEX = [];
CURRICULUM.forEach((m,mi)=>m.courses.forEach((c,ci)=>c.topics.forEach(t=>{
  INDEX.push({ mi, ci, major:m.major, code:c.code, ctitle:c.title, topic:t, label:TOPIC_LABELS[t]||t });
})));
export function courseAt(mi,ci){ return CURRICULUM[mi] && CURRICULUM[mi].courses[ci]; }

