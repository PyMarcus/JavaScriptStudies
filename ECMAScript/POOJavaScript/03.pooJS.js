// encapsulamento traz segurança, pois define-se o que estará disponível ao público
class Tv{
  constructor(){
    //atributos privados
    this._relacaoCanais = Array(2, 3, 4, 5, 6); // por convenção, o atributo privado é definido por um _,mas,igual ao python no quesito segurança
    this._canalAtivo = 4;
    this._volume = 5;
  }

  //getters e setters, consolidando o encapsulamento
  get canalAtivo(){
    return this._canalAtivo;
  }
  set canalAtivo(canal){
      if(this._relacaoCanais.indexOf(canal) !== -1){
          this._canalAtivo = canal;
          console.log("Acessado");
      }else{
        console.log("Fora do ar");
      }
    }
  }




let tv = new Tv();
console.log(tv.canalAtivo);
//alert(tv.canalAtivo)
tv.canalAtivo = 2;
console.log(tv.canalAtivo)
