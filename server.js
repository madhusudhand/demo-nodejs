const http = require('http');

// const htmlContent = `
// <html>
// <body>
//   <h1>Hello  from HTML !!</h1>
// </body>
// </html>
// `;

const sampleJSON = JSON.stringify({
  status: 'ok',
  result: {
    user: {
      name: 'Madhu'
    }
  }
});

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(sampleJSON);
});

npm
nvm --
npx

server.listen(3000, () => {
  console.log('im listening...');
});

// http: 80
// https: 443
