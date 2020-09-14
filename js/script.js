"use strict";
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "99");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};

for (let i = 1; i < 3; i++) {
  let lastFilm = prompt("Один из последних просмотренных фильмов?");
  let rateLastFilm = +prompt("На сколько оцените его?");
  if (lastFilm === null || lastFilm.length > 50 || lastFilm == "" || isNaN(rateLastFilm)) {
      console.log("Error");
    //   console.log();
    i--;
  } else {
    personalMovieDB.movies[lastFilm] = rateLastFilm;
  }
}

if(personalMovieDB.count < 10){
alert("Просмотрено довольно мало фильмов");
}else if ( personalMovieDB.count > 10 && personalMovieDB.count < 30){
alert("Вы классический зритель");
}else if(personalMovieDB.count > 30){
    alert("Вы киноман");
}else{
    alert("Произошла ошибка");
}


console.dir(personalMovieDB);
