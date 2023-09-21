nome = prompt ("Qual seu nome: ");

var nota1 = parseFloat(prompt ("Nota 1: "));
var nota2 = parseFloat(prompt ("Nota 2: "));
var nota3 = parseFloat(prompt ("Nota 3: "));

var media = (nota1 + nota2 + nota3)/3;

alert (`a média do aluno ${nome} é ${media.toFixed(2)}`);