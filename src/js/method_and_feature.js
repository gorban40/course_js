"use strict";

///// feature 

let str = "test";

console.log(str.toUpperCase());

console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q"));

const logg = "Hello world";

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));


function getTimeFromMinutes(min) {
    if(typeof(min) !== "number" || min < 0 || !Number.isInteger(min)){
        return "Ошибка, проверьте данные";
    }
    let hour;
    let end;
    hour = parseInt(min / 60);
    end = min - (hour * 60);
    console.log(hour,end);
    return `Это ${hour} часа и ${end}`;
}

getTimeFromMinutes(50);


function getTimeFromMinutes(min) {
    if(typeof(min) !== "number" || min < 0 || !Number.isInteger(min)){
        return "Ошибка, проверьте данные";
    }
    let hour;
    let end;
    hour = parseInt(min / 60);
    end = min - (hour * 60);
    if(hour === 0){
        return `Это ${hour} часов и ${end} минут`;
    }else if(hour === 1){
        return `Это ${hour} час и ${end} минут`;
    }else if(hour > 1 || hour < 5){
        return `Это ${hour} часa и ${end} минут`;
    }else{
        return `Это ${hour} часов и ${end} минут`;
    }
}

getTimeFromMinutes();

console.log(Math.max(2,5,9,1,11,4));


function fib(num) {
    let obj = [];
    let j = 0;
    for(let i = 0; i < num; i++){
        obj[i] = i;
    }
    console.log(obj);
    return obj;
}

fib(5);