"use strict";

function first() {
    //Something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback){
    console.log(`I learn ${lang}`);
    callback();
}

learnJS('JAVA', function(){
    console.log("I done this lesson");
});