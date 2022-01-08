// operador const
// é similar a ideia do let, mas, define constantes, ou seja, nao altera o valor
// mais usadas em links para apis, senhas para banco de dados etc

const SERIE = "Mr robot";//é boa prática definir constantes com caracteres maiúsculos

console.log(SERIE);

function x(){
    const SERIE = "Mr robot 4 temporada"; //funciona como let
    console.log(SERIE);
}

x();