const http = require('http');
const { handleRequest } = require('./routes');

const PORT = process.env.PORT || 3000;

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Portal server is running on http://localhost:${PORT}`);
});