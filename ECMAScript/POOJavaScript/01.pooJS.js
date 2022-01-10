// entidade = classe Abstracao
// identidade = objeto especificidade da classe
// características = atributos
// ações = métodos

class ContaBancaria{  //definição da abstração

    // objeto
    constructor(){
      //encapsulamento
        this.agencia = 1234;
        this.numeroConta = 123456789;
        this.saldo = 500;
        this.limite = 1000;
    }
    //ações
    depositar(valor_depositado){
        this.saldo += valor_depositado;
    }

    sacar(valor_sacado){
        if(valor_sacado <= this.saldo){
            this.saldo -= valor_sacado;
            return valor_sacado;
        }else{
            return "Saldo insuficiente!"
        }

    }

    consultarSaldo(){
        return `Você tem R$ ${this.saldo}`
    }

}

 // instânciação / criação da identidade
let contaJoaoDaSilva = new ContaBancaria();
console.log(contaJoaoDaSilva.consultarSaldo());
contaJoaoDaSilva.depositar(399);
console.log(contaJoaoDaSilva.consultarSaldo());
