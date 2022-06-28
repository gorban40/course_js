"use strict";

let str = "some";
let strObj = new String(str);

/* console.log(typeof(str));
console.log(typeof(strObj)); */

console.dir([1,3,5]);

const soldier = {
    health: 400,
    armor: 100
};

/* const John = {
    health: 100,
};

John.__proto__ = soldier;

Object.setPrototypeOf(John, soldier);

console.log(John); */

const john = Object.create(soldier);