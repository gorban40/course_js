"use strict";

const personlMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    detectPersonalLevel: function () {
        if (personlMovieDB.count < 10) {
            alert("Its a little (");
        } else if (personlMovieDB.count < 30) {
            alert("You are classic wathcer");
        } else if (personlMovieDB.count >= 30) {
            alert("You are cinemaman");
        } else {
            alert("Problem");
        }
    },
    remeberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
                b = prompt("На сколько оцените его?", "");
            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personlMovieDB.movies[a] = b;
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
        }
    },
    start: function () {
        personlMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", "");

        while (personlMovieDB.count == "" || personlMovieDB.count == null || isNaN(personlMovieDB.count)) {
            personlMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", "");
        }
    },
    showMyDB: function(hidden) {
        if (hidden != true) {
            console.log(personlMovieDB);
        }
    },
    writeYourGenres: function(){
        for (let i = 1; i < 4; i++) {
            personlMovieDB.genres[i - 1] = prompt(`Your favorite type film number ${i}`);

            while(personlMovieDB.genres[i - 1] =="" || personlMovieDB.genres[i - 1] == null){
                personlMovieDB.genres[i - 1] = prompt(`Your favorite type film number ${i}`);
            } 
        }
        console.log(personlMovieDB.genres.forEach(function(item,i,arr){
            let str = `Люмыюый жанр ${i + 1} - это ${item}`;
            console.log(str);
        })); 
/*let genres = prompt(`Write your favorite genrues cheres zapatuu`);

            if(genres ==="" || genres == null){
                i--;
            }else{
                personlMovieDB.genres = genres.split(",");
                personlMovieDB.genres.sort();
            } */
    },
    toggleVisibleMyDB: function(){
        if(personlMovieDB.privat){
            personlMovieDB.privat = false;
        }else{
            personlMovieDB.privat = true;
        }
    }
};
//personlMovieDB.toggleVisibleMyDB();
//personlMovieDB.start();
//personlMovieDB.detectPersonalLevel();
//personlMovieDB.remeberMyFilms();
//personlMovieDB.showMyDB(personlMovieDB.privat);
//personlMovieDB.writeYourGenres(); 