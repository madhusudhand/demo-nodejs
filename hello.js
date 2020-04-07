const msgUtils = require('./utils/msg-utl');
const colors = require('colors');

const args = require('minimist')(process.argv.slice(2));

console.log(colors.green('Hello'), args);

// const myName = 'Madhu';
// const test = require('./test')(myName);

// msgUtils.sayHello.call({name: 'Madhu'}, 'Hello world');

// msgUtils.sayHello('Second message');