////////////// Function Declaration 

name(); /*-----> обращение к функции МОЖНО перед объявлением  */

function name() {
    console.log("Hello World");
}

name(); /*-----> обращение к функции */

////////////// Function Expression

let name2 = function(){};

name2(); /*-----> обращение к функции Только после объявления */ 

///////////// Function Arrow (Стрелочная)

let name3 = (a, b) => { return a + b };

// НЕ МОЖЕТ БЫТЬ ВЫЗВАНА 


// LESSON 27

/* const usd = 28;
const discount = 0.9;

function convert(amount, curr) {
    return(curr * amount);
}

function promotion(result){
    console.log(result * discount);
}

const res = convert(500, usd);
promotion(res); */

//LESSON 25

/* let num = 20;

function showFirstMessage(text){
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a,b){
    return (a + b);
}
console.log(calc(4,8));

console.log(calc(1,0));

console.log(calc(10,3212));

console.log(calc(6,-1));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function(){
    console.log("hellO");
};

logger(); */
/////

function returnNeighboringNumbers(number) {
    let arr = [];
    arr = [number - 1, number, number + 1];
    return arr;
}

function getMathResult(main, repeat) {
    if (typeof(repeat) != "number" || repeat <= 0){
        return main;
    }
    let str = '';
    for(let i = 0; i < repeat; i++){
        str  += main + (i * main);
        if (i == repeat - 1){
            continue;
        }
        str  += "---";
    }
    return str;
}

console.log(getMathResult(5,0));
