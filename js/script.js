
"use strict";
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "99");


let personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: true,
};


for(let i = 1; i < 3; i++){
    let lastFilm = prompt("Один из последних просмотренных фильмов?");
    let rateLastFilm = +prompt("На сколько оцените его?");
    personalMovieDB.movies[lastFilm] = rateLastFilm;

}console.dir(personalMovieDB);