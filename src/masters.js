/* ============================ MASTER'S PROGRAMME ============================
   Nine courses (501–509), each a road map of 100 lessons in 10 units, from zero to mastery; one file per course
   (ms501.js … ms509.js) on top of the shared core (mscore.js: the authoring markup, course(), lesson(), Q()).
   Importing the course files here, in order, registers them; the rest of the program imports from this file only. */
import { MS_COURSES as C, MS_LESSONS as LS, msKey as K, isLesson as IL, msIntro as MI, msItem as IT, msCount as N, tx as TX } from './mscore.js';
import { MS501 } from './ms501.js';
import { MS502 } from './ms502.js';
import { MS503 } from './ms503.js';
import { MS504 } from './ms504.js';
import { MS505 } from './ms505.js';
import { MS506 } from './ms506.js';
import { MS507 } from './ms507.js';
import { MS508 } from './ms508.js';
import { MS509 } from './ms509.js';

export const MS_COURSES = C;
export const MS_LESSONS = LS;
export const msKey = K;
export const isLesson = IL;
export const msIntro = MI;
export const msItem = IT;
export const msCount = N;
export const tx = TX;
export const MS_FILES = ['ms501', 'ms502', 'ms503', 'ms504', 'ms505', 'ms506', 'ms507', 'ms508', 'ms509'];   // the course files, in order
export const MS_LOADED = [MS501, MS502, MS503, MS504, MS505, MS506, MS507, MS508, MS509].length;
