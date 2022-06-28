"use strict";

const arr = [1, 2, 3, 4, 9, 12,];
/* arr[99] = 0;
console.log(arr.length); */

/* arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside array ${arr} `);
});
 */
/* arr.pop();
arr.push(10); */

/* console.log(arr); */

/* for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */
/* 
for (let value of arr) {
    console.log(value);
} */

const str = prompt("", "");
const products = str.split(", ");

function compareNum(a,b) {
    return a - b;
}

products.sort(compareNum());

console.log(products.join('; '));
