const dados = require("./dados.json")


//1- {Coloca todos os valores de status em minusculo
dados.forEach(repasse => {

    if (typeof repasse.status !== "string") return;

    repasse.status = repasse.status.toLowerCase();
});
//--------------------------------------------}


const sucessos =  dados.filter(repasse => (repasse.status === "sucesso"));


// 2 -{Quantidade total de repasses bem sucedidos
console.log("Total de repasses bem sucedidos: ", sucessos.length);
//--------------------------------------------} 

// 3- {Quantidade total de repasses bem sucedidos por órgão
console.log("Quantidade total de repasses bem sucedidos por órgão:");
const mapa = new Map();

dados.forEach(repasse => {

    if (repasse.status === "sucesso"){
        repasse.orgao = repasse.orgao.toLowerCase()
        mapa.set(repasse.orgao, (mapa.get(repasse.orgao) || 0) + 1)
    }
});

console.log(mapa);
//--------------------------------------------}

//  4 -{Valor total de repasses bem sucedidos
const valorTotal = sucessos.reduce((previous, repasse) => previous + repasse.valor, 0);
console.log(`a soma dos valores dos repasses bem sucedidos é: R$ ${valorTotal}`);
//--------------------------------------------}

// 5- {Valor total de repasses bem sucedidos por órgão
console.log("Valor total de repasses bem sucedidos por órgão:");

const mapa2 = new Map();
dados.forEach(repasse => {
    if (repasse.status !== "sucesso") return;
    if (typeof repasse.orgao !== "string") return;

    const orgao = repasse.orgao.toLowerCase();
    const ValorAtual = mapa2.get(orgao) || 0;

    mapa2.set(orgao, ValorAtual + repasse.valor)
})
console.log(mapa2);
//--------------------------------------------}

// 6- {Quantidade total de repasses com falha
const falhas = dados.filter(repasse => (repasse.status === "falha"));

console.log("Total de repasses com falha: ", falhas.length); 
//--------------------------------------------}

// 7-{Quantidade total de repasses com falha por motivo

console.log("Quantidade total de repasses com falha por motivo:");
const mapa3 = new Map();

dados.forEach(repasse => {
    if (repasse.status === "falha"){
        repasse.motivo = repasse.motivo.toLowerCase()
        mapa3.set(repasse.motivo, (mapa3.get(repasse.motivo) || 0) + 1)
    }
});

console.log(mapa3);
//--------------------------------------------}

// 8 - {Valor total de repasses com falha
const valorTotalFalhas = falhas.reduce((previous, repasse) => previous + repasse.valor, 0);

console.log(`a soma dos valores dos repasses com falha é: R$ ${valorTotalFalhas}`);     
//--------------------------------------------}

// 9- {Valor total de repasses com falha por motivo  

console.log("Valor total de repasses com falha por motivo:");
const mapa4 = new Map();
dados.forEach(repasse => {

    if (repasse.status !== "falha") return;
    if (typeof repasse.motivo !== "string") return;

    const motivo = repasse.motivo.toLowerCase();
    const ValorAtual = mapa4.get(motivo) || 0;

    mapa4.set(motivo, ValorAtual + repasse.valor)

})

console.log(mapa4);
//--------------------------------------------}

// 10- {Valor total de repasses com falha por órgão
console.log("Valor total de repasses com falha por órgão:");
const mapa5 = new Map();
dados.forEach(repasse => {

    if (repasse.status !== "falha") return;
    if (typeof repasse.orgao !== "string") return;

    const orgao = repasse.orgao.toLowerCase();
    const ValorAtual = mapa5.get(orgao) || 0;

    mapa5.set(orgao, ValorAtual + repasse.valor)

})

console.log(mapa5); 
//--------------------------------------------}