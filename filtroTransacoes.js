const dados = require("./dados.json");

console.log("Transações incompletas (Falhas e sem motivo):\n");

// Filtrar objetos que com status de 'falha' e que não possuem o campo 'motivo', ou seja, transações inválidas.
const transacoesIncompletas = dados.filter(repasse => repasse.status === "falha" && !repasse.motivo);

if (transacoesIncompletas.length === 0) {
    console.log("Todas as transações estão válidas.");
} else {
    
    transacoesIncompletas.forEach((repasse, index) => {
        console.log("*--------------------------------------*");
        console.log(`Transação ${index + 1}:`);
        console.log(`Órgão: ${repasse.orgao}`);
        console.log(`Status: ${repasse.status}`);
        console.log(`Data: ${repasse.data}`);
        console.log(`Valor: R$ ${repasse.valor}`);
        console.log("(Motivo ausente)");
        console.log("*--------------------------------------*\n");
    });
}
// Filtro para transações válidas.
const transacoesValidas = dados.filter(repasse => !(repasse.status === "falha" && !repasse.motivo))
