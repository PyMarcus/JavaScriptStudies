//pilar da heranca//serve para ser reutiliizável e nao tornar redundante
class Animal {
    //superclasse
    constructor() {
        this.tamanho = null;
        this.cor = '';
    }
    dormir() {
        console.log('está dormindo')
    }
}
class Cachorro extends Animal { //extende(herda) de animal
    //subclasse (especializada)
    constructor() {
        super(); //operador que faz referência ao construtor da superclasse, sempre dentro do construtor da classe filha
        this.orelha = 'grandes';
    }

    correr() {
        console.log('correndo')
    }

    rosnar() {
        console.log('rosnando')
    }
}
class Passaro extends Animal {
    //subclasse(especializada)
    constructor() {
        super();
        this.bico = 'curto'
    }
    voar() {
        console.log('voando')
    }

}

class Papagaio extends Passaro {
    constructor(bool = true) {
        super();
        this.sabeFalar = bool;
    }
}

//main
let cachorro = new Cachorro();
let passaro = new Passaro();
let cocota = new Papagaio();
passaro.dormir();
cachorro.rosnar();
cocota.voar();
cocota.dormir();