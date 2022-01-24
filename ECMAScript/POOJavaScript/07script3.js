pessoa = {
    nome: 'José',
    idade: 45
}


console.log(pessoa.nome)

//modificar o objeto:
pessoa.nome = 'João'
pessoa.idade = 32

console.log(pessoa.nome)

//inclusão dinâmica de atributos
console.log(pessoa)
pessoa.sexo = 'Masculino';
pessoa.dizOi = () => console.log('Oi');
console.log(pessoa)

//objetos literais sãoúnicos, logo, ao utilizá-los é apontado para um mesmo endereço de memória
//Ou seja, é feito uma cópia da referência de memória do objeto e não do objeto
//assim, ao alterá-lo em um ponto,todo ponto acima também será alterado



//criar objetos a partir de funções construtoras:
let Carro = function() {
    this.cor = 'Amarelo';
    this.modelo = 'Chevette';
    this.velocidade = 0;
    let velocidadeMaxima = 190; //variavel declarada como se fosse privada para nao ser modificada fora do escopo da funcao

    this.getVelocidade = () => {
        return this.velocidade;
    }
    this.setVelocidade = (nova_velocidade) => {
        if (nova_velocidade <= velocidadeMaxima && nova_velocidade >= 0) { this.velocidade = nova_velocidade; } else {
            return "velocidade não disponível"
        }
    }
    this.acelerar = () => {
        let velocidade = this.getVelocidade() + 10;
        this.setVelocidade(velocidade);
    }
}

let carro = new Carro();
console.log(carro.velocidadeMaxima)
console.log(carro.getVelocidade());
carro.acelerar();
carro.acelerar();
console.log(carro.getVelocidade());


//a vantagem de funcoes construtoras sobre classes, no JS, é que classes sao publicas, mas funcoes construtoras possuem escopo