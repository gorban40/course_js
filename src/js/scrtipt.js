"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
    }
}

/* start(); */

const personlMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false
};


function detectPersonalLevel(){
    if (personlMovieDB.count < 10){
        alert("Its a little (");
    }else if (personlMovieDB.count < 30 ) {
        alert("You are classic wathcer");
    }else if (personlMovieDB.count >= 30){
        alert("You are cinemaman");
    }else{
        alert("Problem");
    }
}
/* detectPersonalLevel(); */

function remeberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?","").trim(),
            b = prompt("На сколько оцените его?","");
    
        if(a != null && b != null && a != "" && b != "" && a.length < 50 ){
            personlMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}
/* remeberMyFilms(); */

function showMyDB(hidden){
    if(hidden != true){
        console.log(personlMovieDB);
    }
}
/* showMyDB(personlMovieDB.privat); */

function writeYourGenres(){
    for (let i = 1; i < 4; i++) {
        personlMovieDB.genres[i - 1] = prompt(`Your favorite type film number ${i}`);
        console.log(personlMovieDB);
    }
}
writeYourGenres();

/* let i = 0;
do{
    i++;
    const a = prompt("Один из последних просмотренных фильмов?",""),
    b = prompt("На сколько оцените его?","");

    if(a != null && b != null && a != "" && b != "" && a.length < 50 ){
        personlMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}while( i < 2);
console.log(personlMovieDB.movies); */