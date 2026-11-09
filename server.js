const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World from Pxxl!\n');
});

server.listen(port, () => {
  console.log(`Hello World server listening on port ${port}`);
});
