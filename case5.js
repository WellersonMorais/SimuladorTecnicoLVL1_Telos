const dados = require("./dados.json");

console.log("Transações incompletas (sem o campo 'motivo'):\n");

// Filtrar objetos que não têm o campo "motivo"
const transacoesSemMotivo = dados.filter(repasse => !repasse.motivo);

// Caso não encontre
if (transacoesSemMotivo.length === 0) {
    console.log("Todas as transações possuem o campo 'motivo'.");
} else {
    
    transacoesSemMotivo.forEach((repasse, index) => {
        console.log("*--------------------------------------*");
        console.log(`Transação ${index + 1}:`);
        console.log(`Órgão: ${repasse.orgao}`);
        console.log(`Status: ${repasse.status}`);
        console.log(`Data: ${repasse.data}`);
        console.log(`Valor: R$ ${repasse.valor}`);

        // Aqui não mostramos o motivo, porque justamente está faltando
        console.log("(Motivo ausente)");
        console.log("*--------------------------------------*\n");
    });
}
