function calcularRank(vitorias, derrotas) {
    // Calcula saldo
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão para definir o nível
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna mensagem final
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso com laço de repetição
let jogadores = [
    {vitorias: 8, derrotas: 5},
    {vitorias: 25, derrotas: 10},
    {vitorias: 55, derrotas: 20},
    {vitorias: 102, derrotas: 50}
];

for (let i = 0; i < jogadores.length; i++) {
    let resultado = calcularRank(jogadores[i].vitorias, jogadores[i].derrotas);
    console.log(resultado);
}
