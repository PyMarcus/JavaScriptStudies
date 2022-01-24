//operador rest e spread.
//rest=junta estruturas de dados.
//spread=espalha estruturas de dados.


//spread
let valor = "texto qualquer";
console.log(...valor); //espalha as strings



let vetor = ['Vetor1', 'vetorPrimeiro'];
let vetor2 = ['Vetor2', 'vetorSegundo'];
let spread = [...vetor, ...vetor2]; //mescla os vetores
console.log(spread);
let pessoa = { nome: 'Fulano', idade: 44 };
let endereco = { rua: 'A' }
let dados_pessoais = {...pessoa, ...endereco };
console.log(dados_pessoais);



//rest
let soma = (...parametro) => {
    let resultado = 0;
    for (let numeros of parametro) {
        resultado += numeros;
    }
    return resultado;
}


console.log(soma(1, 2, 3, 4));