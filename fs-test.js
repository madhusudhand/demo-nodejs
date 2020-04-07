const fs = require('fs');

// const buffer = fs.readFileSync('./readme.md');
// fs.writeFileSync('./readme-new.md', buffer);

const stats = fs.statSync('./utils/msg-utls.js');

console.log('write complete', stats.isDirectory());

// const result = fs.readFile('./readme.md', (err, data) => {
//   if (err) {
//     console.log('error', err);
//     return;
//   }

//   // your code
//   console.log('result - ', data.toString());

//   fs.readFile('./readme.md', () => {

//     // more code
//   })
// });

