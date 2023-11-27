/** @format */

const http = require('http');

const data = [
  {
    id: 1,
    name: 'Radha',
  },
  {
    id: 1,
    name: 'Krishna',
  },
  {
    id: 1,
    name: 'RadhaeKrishna',
  },
  {
    id: 1,
    name: 'Govinda',
  },
  {
    id: 1,
    name: 'Harae',
  },
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Language', 'en-US');
  res.setHeader('Date', new Date(Date.now()));
  res.setHeader('X-Powered-BY', 'Node.js');

  res.end(
    JSON.stringify({
      success: true,
      results: data.length,
      data: data,
    })
  );
});

server.listen(3000, () => {
  console.log('Server has started.');
});
