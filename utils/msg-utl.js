function sayHello(msg) {
  const name = this.name;
  console.log(msg + ' - from: ' + name);
  const date = getDate();
  console.log('date is ', date);
}

function getDate() {
  return new Date().getDate();
}

class MsgUtils {
  getDate() {
    return new Date().getDate();
  }
  sayHello(msg) {
    console.log(msg + ' - from: sayHello');
    const date = getDate();
    console.log('date is ', date);
  }
}

console.log('hello form module: msg-utils');

module.exports = {
  sayHello: sayHello,
  getDate: getDate,
  MsgUtils: MsgUtils,
};