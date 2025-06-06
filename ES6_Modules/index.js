//ES6 Module = an external file that conatians reusable code
// that can be imported into other javascirpt files.
//write resuable cod efor many different apps.
//can conatain variables,classes,functins.. and more


import {PI, getArea, getCircumference, getVolume} from './mathUtil.js';

console.log(`The value of PI is: ${PI}`);

const circumference = getCircumference(12);

console.log(`Circumference : ${circumference.toFixed(2)}cm`);


const area = getArea(10);

console.log(`Area  : ${area.toFixed(2)}cm^2`);

const volume = getVolume(8);

console.log(`Volume : ${volume.toFixed(2)}cm^3`);