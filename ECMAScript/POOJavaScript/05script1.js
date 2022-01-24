//Pilar do polimorfismo
//polimorfismo é a sobreescrita de métodos, isso ocorre ao utilizar a herança
//usado quando as caracteristicas gerais de uma classe pai nao coicide com as caracteristicas da classe filha

class Passaro {
    constructor(bico, tamanho, cor) {
        this.bico = bico;
        this.tamanho = tamanho;
        this.cor = cor;
    }
    voar() {
        console.log('voar');
    }
    comer() {
        console.log('comer');
    }
}

class Papagaio extends Passaro {
    constructor(falar = true, bico, tamanho, cor) {
        super(bico, tamanho, cor);
        this.fala = falar;
    }
    falar() {
        console.log('falar');
    }
}

class Avestruz extends Passaro {
    constructor(bico, tamanho, cor) {
        super(bico, tamanho, cor);
    }
    nadar() {
            console.log('nadar')
        }
        //override
    voar() {
        console.log('não voa')
    }
}


//instancias:
avestruz = new Avestruz('curto', 140, 'preto e branco');
papagaio = new Papagaio('medio', 30, 'verde');
avestruz.nadar();
avestruz.voar();
papagaio.voar();
papagaio.falar();