const dados = require("./dados.json")

//sistema deverá exibir os seguintes repasses:

dados.forEach(repasse => {

    if (typeof repasse !== "string") return;

    repasse = repasse.toLowerCase();
});


// 1-{ Detalhes do repasse com maior valor
const maiorObjeto = dados.reduce((anterior, atual) => {
    return atual.valor > anterior.valor ? atual : anterior;
});
console.log(maiorObjeto);
//--------------------------------------------}


// 2-{ Detalhes do repasse com menor valor
const menorObjeto = dados.reduce((anterior, atual) => {
    return atual.valor < anterior.valor ? atual : anterior;
});
console.log(menorObjeto);
//--------------------------------------------}


//3-{ Dia com mais repasses
function encontrarDiaMaisRepetido(dados) {
    const contagemDatas = {};

    dados.forEach(repasse => {
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
const resultadoDia = encontrarDiaMaisRepetido(dados);
console.log(`O dia com mais repasses é: ${resultadoDia.dia}`);
//--------------------------------------------}


//4-{ Órgão com mais repasses
function encontrarOrgaoMaisRepetido(dados) {
    const contagemOrgaos = {};

    dados.forEach(repasse => {
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
const resultadoOrgao = encontrarOrgaoMaisRepetido(dados);
console.log(`O órgão com mais repasses é: ${resultadoOrgao.orgao}`);
//--------------------------------------------}

//5-{ Órgão com mais repasses com sucesso
function encontrarOrgaoMaisRepetidoSucesso(dados) {
    const contagemOrgaos = {};

    dados.forEach(repasse => {
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
const resultadoOrgaoSucesso = encontrarOrgaoMaisRepetidoSucesso(dados);
console.log(`O órgão com mais repasses com sucesso é: ${resultadoOrgaoSucesso.orgao}`);
//--------------------------------------------}
//6-{ Órgão com mais repasses falhados
function encontrarOrgaoMaisRepetidoFalha(dados) {
    const contagemOrgaos = {};

    dados.forEach(repasse => {
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
const resultadoOrgaoFalha = encontrarOrgaoMaisRepetidoFalha(dados);
console.log(`O órgão com mais repasses falhados é: ${resultadoOrgaoFalha.orgao}`);
//--------------------------------------------}

//7-{ Motivo de falha com mais repasses
function encontrarMotivoMaisRepetidoFalha(dados) {
    const contagemMotivos = {};

    dados.forEach(repasse => {
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
const resultadoMotivoFalha = encontrarMotivoMaisRepetidoFalha(dados);
console.log(`O motivo de falha com mais repasses é: ${resultadoMotivoFalha.motivo}`);
//--------------------------------------------}