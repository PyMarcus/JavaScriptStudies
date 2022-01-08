function contar_historia(personagem = "Robô", cachorro = "Dog"){
    document.write(`<br>Era uma vez alguém chamado ${personagem}.<br>
    Este alguém tinha um cachorro, chamado ${cachorro}.<br>
    Este mesmo alguém viveu feliz para sempre.`);
}

contar_historia(); // sem parametros, e passado default

let nome = prompt("Qual o nome do personagem?");
let dog = prompt("Qual o nome do cachorro? ");
contar_historia(nome, dog);

// definir apenas alguns parâmetros:
contar_historia(undefined, dog);
