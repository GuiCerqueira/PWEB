var num1 = parseFloat(prompt("Número 1: "));
var num2 = parseFloat(prompt("Número 2: "));

var soma = num1 + num2;
var subtracao = num1 - num2;
var multiplicacao = num1 * num2;
var divisao = num1 / num2;
var resto = num1 % num2;

alert(`a soma é ${soma.toFixed(2)}
a subtração é ${subtracao.toFixed(2)}
a multiplicacao é ${multiplicacao.toFixed(2)}
a divisão é ${divisao.toFixed(2)}
o resto é ${resto.toFixed(2)}`);