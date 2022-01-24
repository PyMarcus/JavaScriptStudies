//prototype é o modelo que está por trás dos panos no javascript
// todos objetos herdam de Object, ou seja, do padrão ou prototype


//objeto de uma instância de classe
class Aviao {
    constructor() {
        this.cor = 'Branco';
        this.modelo = 'F1';
    }
    levantar_voo() {
        console.log('Voando...');
    }
}

//função construtora
let Aviao1 = () => {
    this.cor = 'Preto',
        this.modelo = 'F12',
        this.levantar_voo = () => {
            console.log('Voando...')
        }
}

//objeto literal
let Aviao2 = {
    cor: 'Preto',
    modelo: 'F12',
    levantar_voo: () => {
        console.log('Voando...')
    }
}


//dado então os objetos abaixo, pode-se fazer herança, ao definir que os objetos nao farao mais referencia a Object.prototype
// mas ao objeto em questao
let a = { attr1: 1 }
let b = { __proto__: a, attr2: 2 }
let c = { __proto__: b, attr3: 3 } //proto aqui faz heranca do objeto b
console.log(c.attr2);
console.log(c.attr3);
console.log(c.attr1);

//Atributo definido a toda aplicação:
Object.prototype.attr4 = 'Marcus';
console.log(c.attr4);