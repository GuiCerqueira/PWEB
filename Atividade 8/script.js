var escolhaJogador = prompt("Escolha pedra, papel ou tesoura: ");
var escolhaPC = Math.random;

if (escolhaPC < 0.33) {
    escolhaPC = "Pedra";
} else if (escolhaPC < 0.66) {
    escolhaPC = "Tesoura";
} else {
    escolhaPC = "Papel";
}

if (escolhaJogador == 'Pedra' || escolhaJogador == 'Papel' || escolhaJogador == 'Tesoura') {
    if (escolhaJogador == escolhaPC) {
        alert(`Jogador: ${escolhaJogador}\nComputador: ${escolhaPC}\n\nEmpate!`);
    } else if (escolhaJogador == "Pedra" & escolhaPC == "Papel") {
        alert(`Jogador: ${escolhaJogador}\nComputador: ${escolhaPC}\n\nComputador venceu!`);
    } else if (escolhaJogador == "Papel" & escolhaPC == "Tesoura") {
        alert(`Jogador: ${escolhaJogador}\nComputador: ${escolhaPC}\n\nComputador venceu!`)
    } else if (escolhaJogador == "Tesoura" & escolhaPC == "Pedra") {
        alert(`Jogador: ${escolhaJogador}\nComputador: ${escolhaPC}\n\nComputador venceu!`)
    } else {
        alert(`Jogador: ${escolhaJogador}\nComputador: ${escolhaPC}\n\nJogador venceu!`)
    }
} else {
    alert("POR FAVOR, DIGITE UMA OPÇÃO VÁLIDA. SE ATENTAR QUE A PRIMEIRA LETRA É MAIÚSCULA")
}
