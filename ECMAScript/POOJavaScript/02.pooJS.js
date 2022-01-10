// uma das principais vantagens de poo, é a generalização, ou seja, grande capacidade de abstração
class Movel{
  constructor(color = 'azul', giratoria = false, qnt_pernas = 'não possui, apenas base'){
    this.color = color;
    this.giratoria = giratoria;
    this.qnt_pernas = qnt_pernas;
  }

  girarMovel(){
    if(this.giratoria){
        return "Girou";
    }else{
        return "Impossível girar";
    }
  }

}

let sofa = new Movel('vermelho', false, undefined);
console.log(sofa.girarMovel())
let cadeira = new Movel('preta', true, 1);
console.log(cadeira.girarMovel());
