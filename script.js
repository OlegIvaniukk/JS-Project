const numberOfFilms = prompt('How many mobies you have watched?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastFilm = prompt('Last watched film', '');
const filmRating = prompt('How do you rate it?', '');
personalMovieDB.movies[lastFilm] = filmRating;

console.log(personalMovieDB);
