const dados = require("./dados.json")

// {Coloca todos os valores de status em minusculo
// dados.forEach(repasse => {
//     if (typeof repasse.status !== "string") return;
//     repasse.status = repasse.status.toLowerCase();
// });
//--------------------------------------------}

//Coloca para minúsculo todos os valores do objeto que forem strings
dados.forEach(repasse => {
    for(let chave in repasse) {
        if(typeof repasse[chave] === "string"){
            repasse[chave] = repasse[chave].toLowerCase();
        }
    }
});

// Filtrar objetos que com status de 'falha' e que não possuem o campo 'motivo'
const transacoesIncompletas = dados.filter(repasse => repasse.status === "falha" && !repasse.motivo);


if (transacoesIncompletas.length === 0) {
    console.log("Todas as transações estão válidas.\n");
} else {
    console.log("Resumo das transações incompletas (Falhas e sem motivo\n):");
    transacoesIncompletas.forEach((repasse, index) => {
        console.log(`Transação ${index + 1}:`);
        console.log(`Órgão: ${repasse.orgao}`);
        console.log(`Status: ${repasse.status}`);
        console.log(`Data: ${repasse.data}`);
        console.log(`Valor: R$ ${repasse.valor}`);
        console.log("(Motivo ausente)");
        console.log("*--------------------------------------*\n");
    });
}

const transacoesValidas = dados.filter (repasse => !(repasse.status === "falha" && !repasse.motivo))

console.log("*--------------------------------------*");
console.log("Total de repasses processados:", transacoesValidas.length)
console.log("*--------------------------------------*\n");




// { HU2-----------------------------------------------> 

const sucessos =  transacoesValidas.filter(repasse => (repasse.status === "sucesso"));

// {Quantidade total de repasses bem sucedidos
console.log("*--------------------------------------*");
console.log(`\nTotal de repasses bem sucedidos: ${sucessos.length}`);
console.log("*--------------------------------------*");
//--------------------------------------------} 

// {Quantidade total de repasses bem sucedidos por órgão
console.log("*--------------------------------------*");
console.log("Quantidade total de repasses bem sucedidos por órgão:\n");
const mapa = new Map();

transacoesValidas.forEach(repasse => {

    if (repasse.status === "sucesso"){
        mapa.set(repasse.orgao, (mapa.get(repasse.orgao) || 0) + 1)
    }
});

console.log(mapa);
console.log("*--------------------------------------*");
//--------------------------------------------}

//  4 -{Valor total de repasses bem sucedidos
const valorTotal = sucessos.reduce((previous, repasse) => previous + repasse.valor, 0);
console.log("*--------------------------------------*");
console.log(`a soma dos valores dos repasses bem sucedidos é: R$ ${valorTotal}\n`);
console.log("*--------------------------------------*");
//--------------------------------------------}

// 5- {Valor total de repasses bem sucedidos por órgão
console.log("*--------------------------------------*");
console.log("Valor total de repasses bem sucedidos por órgão:\n");

const mapa2 = new Map();
transacoesValidas.forEach(repasse => {
    if (repasse.status !== "sucesso") return;
    if (typeof repasse.orgao !== "string") return;

    const orgao = repasse.orgao;
    const ValorAtual = mapa2.get(orgao) || 0;

    mapa2.set(orgao, ValorAtual + repasse.valor)
})
console.log(mapa2);
console.log("*--------------------------------------*");
//--------------------------------------------}

// 6- {Quantidade total de repasses com falha

const falhas = transacoesValidas.filter(repasse => (repasse.status === "falha"));
console.log("*--------------------------------------*");
console.log(`Total de repasses com falha: ${falhas.length}\n`); 
console.log("*--------------------------------------*");
//--------------------------------------------}

// 7-{Quantidade total de repasses com falha por motivo
console.log("*--------------------------------------*");
console.log("Quantidade total de repasses com falha por motivo:\n");
const mapa3 = new Map();

transacoesValidas.forEach(repasse => {
    if (repasse.status === "falha"){
        mapa3.set(repasse.motivo, (mapa3.get(repasse.motivo) || 0) + 1)
    }
});

console.log(mapa3);
console.log("*--------------------------------------*");
//--------------------------------------------}

// 8 - {Valor total de repasses com falha
const valorTotalFalhas = falhas.reduce((previous, repasse) => previous + repasse.valor, 0);
console.log("*--------------------------------------*");
console.log(`a soma dos valores dos repasses com falha é: R$ ${valorTotalFalhas}\n`);  
console.log("*--------------------------------------*");   
//--------------------------------------------}

// 9- {Valor total de repasses com falha por motivo  
console.log("*--------------------------------------*");
console.log("Valor total de repasses com falha por motivo:\n");
const mapa4 = new Map();
transacoesValidas.forEach(repasse => {

    if (repasse.status !== "falha") return;
    if (typeof repasse.motivo !== "string") return;

    const motivo = repasse.motivo;
    const ValorAtual = mapa4.get(motivo) || 0;

    mapa4.set(motivo, ValorAtual + repasse.valor)

})

console.log(mapa4);
console.log("*--------------------------------------*");
//--------------------------------------------}

// 10- {Valor total de repasses com falha por órgão
console.log("*--------------------------------------*");
console.log("Valor total de repasses com falha por órgão:\n");
const mapa5 = new Map();
transacoesValidas.forEach(repasse => {

    if (repasse.status !== "falha") return;
    if (typeof repasse.orgao !== "string") return;

    const orgao = repasse.orgao;
    const ValorAtual = mapa5.get(orgao) || 0;

    mapa5.set(orgao, ValorAtual + repasse.valor)

})

console.log(mapa5); 
console.log("*--------------------------------------*");
//<-------------------------------------- HU2}

console.log("*--------------------------------------*");
console.log("\n HISTÓRIA DE USUÁRIO 3\n")
console.log("*--------------------------------------*\n");

// HU3----------------------------------------------->

console.log("*--------------------------------------*\n");
// { Detalhes do repasse com maior valor
console.log("Detalhes do repasse com maior valor: ")
const maiorObjeto = transacoesValidas.reduce((anterior, atual) => {
    return atual.valor > anterior.valor ? atual : anterior;
});
console.log(maiorObjeto);
console.log("*--------------------------------------*\n");
//--------------------------------------------}

// { Detalhes do repasse com menor valor
console.log("*--------------------------------------*\n");
console.log("Detalhes do repasse com maior valor: ")
const menorObjeto = transacoesValidas.reduce((anterior, atual) => {
    return atual.valor < anterior.valor ? atual : anterior;
});
console.log(menorObjeto);
console.log("*--------------------------------------*\n");
//--------------------------------------------}


// { Dia com mais repasses
function encontrarDiaMaisRepetido(transacoesValidas) {
    const contagemDatas = {};

    transacoesValidas.forEach(repasse => {
        const dia = repasse.data;
        contagemDatas[dia] = (contagemDatas[dia] || 0) + 1;
    });

    let diaMaisRepetido = null;
    let maiorQuantidade = 0;

    for (dia in contagemDatas) {
        if (contagemDatas[dia] > maiorQuantidade) {
            maiorQuantidade = contagemDatas[dia];
            diaMaisRepetido = dia;
        }
    } return {
        dia: diaMaisRepetido
    };
}
const resultadoDia = encontrarDiaMaisRepetido(transacoesValidas);
console.log("*--------------------------------------*\n");
console.log(`O dia com mais repasses é: ${resultadoDia.dia}`);
console.log("*--------------------------------------*\n");
//--------------------------------------------}


// { Órgão com mais repasses
function encontrarOrgaoMaisRepetido(transacoesValidas) {
    const contagemOrgaos = {};

    transacoesValidas.forEach(repasse => {
        const orgao = repasse.orgao;
        contagemOrgaos[orgao] = (contagemOrgaos[orgao] || 0) + 1;
    });

    let orgaoMaisRepetido = null;
    let maiorQuantidade = 0;

    for (orgao in contagemOrgaos) {
        if (contagemOrgaos[orgao] > maiorQuantidade) {
            maiorQuantidade = contagemOrgaos[orgao];
            orgaoMaisRepetido = orgao;
        }
    } return {
        orgao: orgaoMaisRepetido
    };
}
const resultadoOrgao = encontrarOrgaoMaisRepetido(transacoesValidas);
console.log("*--------------------------------------*\n");
console.log(`O órgão com mais repasses é: ${resultadoOrgao.orgao}`);
console.log("*--------------------------------------*\n");
//--------------------------------------------}

// { Órgão com mais repasses com sucesso
function encontrarOrgaoMaisRepetidoSucesso(transacoesValidas) {
    const contagemOrgaos = {};

    transacoesValidas.forEach(repasse => {
        if (repasse.status !== "sucesso") return;

        const orgao = repasse.orgao;
        contagemOrgaos[orgao] = (contagemOrgaos[orgao] || 0) + 1;
    });

    let orgaoMaisRepetido = null;
    let maiorQuantidade = 0;

    for (orgao in contagemOrgaos) {
        if (contagemOrgaos[orgao] > maiorQuantidade) {
            maiorQuantidade = contagemOrgaos[orgao];
            orgaoMaisRepetido = orgao;
        }
    } return {
        orgao: orgaoMaisRepetido
    };
}
const resultadoOrgaoSucesso = encontrarOrgaoMaisRepetidoSucesso(transacoesValidas);
console.log("*--------------------------------------*\n");
console.log(`O órgão com mais repasses com sucesso é: ${resultadoOrgaoSucesso.orgao}`);
console.log("*--------------------------------------*\n");

//--------------------------------------------}
// { Órgão com mais repasses falhados
function encontrarOrgaoMaisRepetidoFalha(transacoesValidas) {
    const contagemOrgaos = {};

    transacoesValidas.forEach(repasse => {
        if (repasse.status !== "falha") return;

        const orgao = repasse.orgao;
        contagemOrgaos[orgao] = (contagemOrgaos[orgao] || 0) + 1;
    });

    let orgaoMaisRepetido = null;
    let maiorQuantidade = 0;

    for (orgao in contagemOrgaos) {
        if (contagemOrgaos[orgao] > maiorQuantidade) {
            maiorQuantidade = contagemOrgaos[orgao];
            orgaoMaisRepetido = orgao;
        }
    } return {
        orgao: orgaoMaisRepetido
    };
}
const resultadoOrgaoFalha = encontrarOrgaoMaisRepetidoFalha(transacoesValidas);
console.log("*--------------------------------------*\n");
console.log(`O órgão com mais repasses falhados é: ${resultadoOrgaoFalha.orgao}`);
console.log("*--------------------------------------*\n");
//--------------------------------------------}

// { Motivo de falha com mais repasses
function encontrarMotivoMaisRepetidoFalha(transacoesValidas) {
    const contagemMotivos = {};

    transacoesValidas.forEach(repasse => {
        if (repasse.status !== "falha") return;

        const motivo = repasse.motivo;
        contagemMotivos[motivo] = (contagemMotivos[motivo] || 0) + 1;
    });

    let motivoMaisRepetido = null;
    let maiorQuantidade = 0;

    for (motivo in contagemMotivos) {
        if (contagemMotivos[motivo] > maiorQuantidade) {
            maiorQuantidade = contagemMotivos[motivo];
            motivoMaisRepetido = motivo;
        }
    } return {
        motivo: motivoMaisRepetido
    };
}
const resultadoMotivoFalha = encontrarMotivoMaisRepetidoFalha(transacoesValidas);
console.log("*--------------------------------------*\n");
console.log(`O motivo de falha com mais repasses é: ${resultadoMotivoFalha.motivo}`);
console.log("*--------------------------------------*\n");
//-------------------------------------------- HU3}

// { HU4----------------------------------------------->

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
const orgaoSelecionado = mapaEspecifico.get(6); // o numero deve ser trocado de acordo com o número do orgão desejado
// utiliza apenas as transações válidas
const transacoesValidasPorOrgao = transacoesValidas.filter(repasse => {
    const mesmoOrgao = repasse.orgao.toLowerCase().trim() === orgaoSelecionado.toLowerCase();
    return mesmoOrgao;
})

console.log(`Transações encontradas para o órgão: ${orgaoSelecionado}\n`);

 // Exibir cada repasse formatado
    transacoesValidasPorOrgao.forEach((repasse, posicao) => {
        console.log('*---------------------------*');``
        console.log(`Transação ${posicao + 1}:`);
        console.log(`Órgão: ${repasse.orgao}`);
        console.log(`Status: ${repasse.status}`);
        console.log(`Valor: R$ ${repasse.valor}`);
        console.log(`Motivo: ${repasse.motivo ? repasse.motivo : "(Sem motivo)"}`);
        console.log('*----------------------------*');
    });
// -----------------------------------------------> HU4 }


