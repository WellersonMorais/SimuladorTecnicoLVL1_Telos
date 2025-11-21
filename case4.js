const dados = require("./dados.json");

// Mapa com os órgãos
const mapaEspecifico = new Map();
mapaEspecifico.set(1, "polícia civil");
mapaEspecifico.set(2, "polícia militar");
mapaEspecifico.set(3, "corpo de bombeiros");
mapaEspecifico.set(4, "receita federal");
mapaEspecifico.set(5, "defesa civil");
mapaEspecifico.set(6, "detran");
mapaEspecifico.set(7, "ibama");
mapaEspecifico.set(8, "anvisa");
mapaEspecifico.set(9, "cetesb");

// Seleciona o órgão baseado no número
const orgaoSelecionado = mapaEspecifico.get(1); // troque o número para selecionar outro órgão

console.log(`Transações encontradas para o órgão: ${orgaoSelecionado}\n`);

// Filtra ignorando diferenças de maiúsculas/minúsculas
const transacoesSelecionadas = dados.filter(repasse =>
    repasse.orgao.toLowerCase() === orgaoSelecionado.toLowerCase()
);

// Se não encontrar nada
if (transacoesSelecionadas.length === 0) {
    console.log("Nenhuma transação encontrada para o órgão selecionado.");
} else {
    // Exibir cada repasse formatado
    transacoesSelecionadas.forEach((repasse, posicao) => {
        console.log('*---------------------------*');
        console.log(`Transação ${posicao + 1}:`);
        console.log(`Órgão: ${repasse.orgao}`);
        console.log(`Status: ${repasse.status}`);
        console.log(`Valor: R$ ${repasse.valor}`);

        if (repasse.motivo) {
            console.log(`Motivo de falha: ${repasse.motivo}`);
        }

        console.log('*----------------------------*');
    });
}
