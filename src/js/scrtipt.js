const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

const personlMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false
};
const a = prompt("Один из последних просмотренных фильмов?",""),
    b = prompt("На сколько оцените его?",""),
    c = prompt("Один из последних просмотренных фильмов?",""),
    d = prompt("На сколько оцените его?","");

personlMovieDB.movies[a] = b;
personlMovieDB.movies[c] = d;

console.log(personlMovieDB);
