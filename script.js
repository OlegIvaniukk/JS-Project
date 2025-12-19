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

let result = '';

for (let i = 1; i < 7; i++) {
  for (let j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// Место для третьей задачи
function thirdTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];
  const result = [];

  // Пишем решение вот тут
  for (let i = data.length - 1; i >= 0; i--) {
    result.push(data[i]);
  }
  console.log(result);
  // Не трогаем
  return result;
}
