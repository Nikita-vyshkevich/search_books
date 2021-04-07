const express = require('express');

const server = express();

server.get('/', function (req, res) {
  res.send('Server is working!');
});

server.listen(3000, () => console.log('Server is working!'));
