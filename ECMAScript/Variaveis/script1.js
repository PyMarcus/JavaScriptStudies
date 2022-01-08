//Introdução ao EMC6 (padrão de convenção de escrita de códigos JS)
//operadores de declaração de variáveis (usando as features let e var )


//escopos do javascript
let doidera = "12333";



var serie = "Friends"    //essa variavel fica definida em todo o código
function x(){ // funcao
    let doidera = "##";

    console.log(x1);
    console.log(doidera);
    var serie = "Mr robot" // esta variável está no escopo da função e de seus blocos, apenas
    console.log(serie)
    //bloco 1  // dentro da função, a variável é sobreescrita
    if (true){      
        let doidera = "123";
        console.log(doidera);
        var serie = "x"      //var pode ser usada em funções e dentro de blocos
        console.log(serie);
        console.log("Do escopo da função "+serie);
    }
}
// Logo, o let impede a variável de sofrer hosting (elevação de nível para o escopo acima)

var x1 = "e";
x(); // chamada da função

if(true){ //escopo de bloco
    var x1 = 3;
    console.log(x1);
    let doidera = "@";
    console.log(x1);
    console.log(doidera);
    console.log(serie);
}
console.log(x1);


// ou seja, o let é usado so em blocos e var é passível de sobreescrita, por isso, cuidado ao usar  var