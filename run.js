var songs = require('./main.js');
var colors = require('colors');

// var sorting = [];
// var last = []
// songs.forEach(function (el) {
//   sorting.push(el.difficulty);
// });
//
// sorting.sort();
// console.log(sorting);
// sorting.forEach(function (el, i) {
//   songs.forEach(function (song) {
//     if (el == song.difficulty) {
//       if (song.difficulty < 3) {
//         last.push(colors.green(`${song.title} by ${song.artist} [${song.difficulty}]`));
//       } else if (song.difficulty >= 3 && song.difficulty < 4) {
//         last.push(colors.yellow(`${song.title} by ${song.artist} [${song.difficulty}]`));
//       } else {
//         last.push(colors.red(`${song.title} by ${song.artist} [${song.difficulty}]`));
//       }
//     }
//   });
// });
//
// last = last.filter(function (item, pos, self) {
//   return self.indexOf(item) == pos;
// });
//
// last.forEach(function(el){
//   console.log(el);
// })
var low = 0;
songs.forEach(function (el) {
  if (el.difficulty < 3) {
    el.color = 'green';
  }else if (el.difficulty >= 3 && el.difficulty < 4) {
    el.color = 'yellow';
  } else {
    el.color = 'red';
  }
});
console.log(songs);
