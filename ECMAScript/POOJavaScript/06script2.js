//objetos estáticos(literais)
class Produto {
    constructor(descricao, preco) {
        this.descricao = descricao;
        this.preco = preco;
    }
    verDescricao() {
        console.log(`${this.descricao} por apenas R$ ${this.preco}`);
    }
}
let produto = new Produto('Notebook', 3030);
produto.verDescricao();

//OBJETO LITERAL -> JSON ou Discionário no python
produto = {
    descricao: 'Notebook',
    preco: 1500,
    verDescricao: function(descricao, preco) {
        console.log(this.descricao + ' por ' + this.preco);
    }
}

//objetos literais sao usados quando necessita-se de apenas um objeto na aplicacao
//comuns em formulários
//obj literal -> json -> http post -> servidor


produto.verDescricao()