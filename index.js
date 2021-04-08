const express = require('express');
const calculate = require('./calculator');

const server = express();

server.get('/', function (req, res) {
  res.send('Server is working!');
});

server.put('/', (request, response) => {
  const num1 = parseInt(request.query.num1,10)
  const num2 = parseInt(request.query.num2,10)
  const result = calculate(num1, num2);

  response.json(result);
});

server.listen(3000, () => console.log('Server is working!'));

//добавилась функция "калькулятор"
