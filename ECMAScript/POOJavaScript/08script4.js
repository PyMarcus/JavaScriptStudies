//funções factory -> criam objetos em tempo de execução
//quando se cria novos objetos literais, na mao, hardcode,não é muito adequado



//funcao factory retorna um objeto:
//nesse caso, nao sao objetos unicos, ou seja, sao feitos copias ao invés de usar referências

let bicicletaFactory = function(cor, aro, marchas) {
    return {
        cor: cor,
        aro: aro,
        marchas: marchas,
        pedalar() {
            console.log('pedalando...')
        }
    }
}



let bike1 = bicicletaFactory('Azul', 12, 23);
console.log(bike1.aro);
bike1.pedalar();


let bike2 = bicicletaFactory('Red', 13, 43);
console.log(bike2.aro);
bike2.pedalar()