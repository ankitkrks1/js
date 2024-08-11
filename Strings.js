#!/usr/bin/env node

/*
* In JS String are compared from Ascii values
* From Left to Righ. 
* And the first letter determines the result 
*/
console.log('aN'>'An'); // true

console.log('a'.charCodeAt(0),'A'.charCodeAt(0)); // 97 65

console.log('aN'.charCodeAt(1),'An'.charCodeAt(1));// 78 110

console.log('Na'>'nA') // false

/*
* The Only one value in Js That is not equal to itself 
* Is NaN
* NaN represent a result of any non sensical computation
* And any other non sensical out should not be same 
*/
console.log("NaN === NaN ",NaN === NaN)

