"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "99");
  while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "99");
  }
}
start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 1; i < 3; i++) {
    let lastFilm = prompt("Один из последних просмотренных фильмов?");
    let rateLastFilm = +prompt("На сколько оцените его?");
    if (
      lastFilm === null ||
      rateLastFilm == null ||
      lastFilm.length > 50 ||
      lastFilm == "" ||
      rateLastFilm == "" ||
      isNaN(rateLastFilm)
    ) {
      console.log("Error");
      i--;
    } else {
      personalMovieDB.movies[lastFilm] = rateLastFilm;
      console.log("Done");
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);
// console.dir(personalMovieDB);



function writeYourgeneres(array){
for(let i = 1; i <=3; i++){
array.push(prompt(`${i}: Your lovely generes`));
}
}

writeYourgeneres(personalMovieDB.genres);
