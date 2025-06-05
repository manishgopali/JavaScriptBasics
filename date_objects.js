// Date objects  = objects that contain values that represent 
//dates and times 
// these date objects can be changed and formatted



//Date(year,month,day,hour,minute,second,ms); // 0 = january

// const date = new Date(2025,0,15,12,25);
// const date = new Date("2025-03-08T10:30");

//get in Date() method

/*
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const second = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(second);
console.log(dayOfWeek);
*/



//set in Date() method

/* 
const date = new Date();
date.setFullYear(2025);
date.setMonth(5); // june since 0 is jan
date.setHours(11);
date.setMinutes(5);
date.setSeconds(4);

console.log(date);
*/

//comparision

const date1 = new Date("2024-12-31");
const date2  = new Date("2025-01-01");

if(date2> date1){
    console.log("Happy New Year!!");
}