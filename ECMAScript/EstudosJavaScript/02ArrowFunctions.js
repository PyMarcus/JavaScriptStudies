// arrow functions são formas simplificadas de escrever funções anônimas


//funcao anonima normal

let quadrado_numero = function(x = 4) {
    return x * x;
}

console.log(`O quadrado do número 4 vale: ${quadrado_numero(4)}`);


//arrow function:
let quadrado = (x = 8) => {// passa-se o parâmetro sem escrever function
    return x * x;
} 

// quando nao se tem muita lógica no bloc:
let exemplo_quadrado = x => x * x;

document.write(`<br>Arrow Function ${quadrado()}`);

// arrow function um pouco mais complexa:
let parImpar = x => x % 2 == 0 ? "Par": "Ímpar";
console.log(parImpar(5));
console.log(parImpar(58));