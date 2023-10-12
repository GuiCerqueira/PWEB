var idade = [4];
var sexo = [4];
var opiniao = [4];
var qtdNegativa = 0;
var qtdPositiva = 0;
var qtdMulher= 0;
var qtdHomem = 0;
var soma = 0;

for (i = 0; i < 5; i++){
    var escolhaIdade = parseInt(prompt("Digite sua idade: "));
    var escolhaSexo = prompt("Escolha seu sexo (M ou F): ");
    var escolhaOpiniao = parseInt(prompt("Escolha sua opinião (1-péssimo / 2-regular / 3-bom / 4-ótimo): "));

    idade [i] = escolhaIdade;
    sexo [i] = escolhaSexo;
    opiniao [i] = escolhaOpiniao;

    if((opiniao [i] == 1)){
        qtdNegativa = qtdNegativa + 1
    }

    if((opiniao [i]== 3) || (opiniao [i] == 4)){
        qtdPositiva = qtdPositiva + 1
    }

    if(sexo[i] == 'F'){
        qtdMulher = qtdMulher+1
    }else {
        qtdHomem = qtdHomem+1
    }
    
    soma = soma + idade [i];
    media = soma / idade.length;
}

alert (`A média da idade é: ${(media).toFixed(2)}
A idade da pessoa mais velha: ${Math.max.apply(null, idade)}
A idade da pessoa mais nova: ${Math.min.apply(null, idade)}
Qtd de pessoas que responderam péssimo: ${qtdNegativa}
% que responderam ótimo ou bom: ${((qtdPositiva/opiniao.length)*100).toFixed(2)}%
Nº de mulheres: ${qtdMulher}
Nº de homens: ${qtdHomem}`)
