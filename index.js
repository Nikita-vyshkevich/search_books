const express = require('express');
const calculator = require('./calculator');
const bodyParser = require('body-parser')
const server = express();

server.use(bodyParser.json())
server.get('/', function (req, res) {
  res.send('Server is working!');
});

console.log(calculator.sum(12,24));

server.put('/', (request, response) => {

  const operationType = request.query.operationType
  const num1 = request.body.num1;
  const num2 = request.body.num2;
  let total
  {

  if (operationType === "sum") {
    const result = calculator.sum(num1,num2);
    total = (result);
  }
  else if (operationType === "devision") {
    const result = calculator.devision(num1,num2)
    total = (result)
  }
  else  if (operationType === "multiplication") {
    const result = calculator.multiplication(num1,num2)
    total = (result)
  }
  else  if (operationType === "subtraction") {
    const result  = calculator.subtraction(num1,num2)
    total = (result)
  }
  else {
    console.log("operation false")
  }

  response.json(total);
}});

server.listen(3000, () => console.log('Server is working!'));

//добавилась функция "калькулятор"
