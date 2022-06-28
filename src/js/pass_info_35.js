"use strict";

/* let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
}; */

/* const copy = obj; ------> Ссылка  

copy.a = 10;

console.log(copy);
console.log(obj); */

/* function copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
} */
/* const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 123,
        y: 4
    }
}; */
/* 
const newNumbers = copy(numbers); */
/* 
newNumbers.a = 10;

console.log(newNumbers); */
/* console.log(numbers); */


/* const add = {
    d: 17,
    i: 20
};

console.log(Object.assign(numbers, add)); 

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); */

/* const video = ["youtube", 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'telegram'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];

log(...num); */

/* const array = ["a", "b"];

const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newq = {...q}; */


/* const str = "god, sdf, dsfsadf, ssfdsfds,";

console.log(str);

const arr = str.split(",");

console.log(arr);

const str2 = arr.join("_");

console.log(str2);



const add = {
    d: 13,
    c: 132
};
const add21 = {
    a: 12231,
    b: 1231
};

const clone = Object.assign({}, add);

clone.d = 123123123123123;

console.log(clone);
console.log(add);



const oldArray = ['a', 'aasd', 'ca'];
const newArray = oldArray.slice();

console.log(oldArray);

console.log(newArray);



const video = ['youtibb', 'asdfs', '4324234'],
    blogs = [213,123123,123,12,31,23,123,12,3],
    internet = [...video, ...blogs];

console.log(internet); */






/* const someString = 'This is some strange string';


function reverse(str) {
    if(typeof(str) != "string"){
        return "Ошибка";
    }
    console.log(str);
    str = str.split("");
    console.log(str);
    str = str.reverse();
    console.log(str);
    str = str.join('');
    console.log(str);
    return str;
}

reverse(someString); */



const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if(typeof(arr[0]) === undefined){
        return "Нет доступных валют";
    }else{
        let avaible = `Доступные валюты:\n`;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === missingCurr){
                continue;
            }
            avaible += `${arr[i]}\n`;
        }
        console.log(avaible);
        return avaible;
    }
}

availableCurr([...baseCurrencies, ...additionalCurrencies], '');

