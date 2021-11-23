var numeros = [];
var numeros2 = [];
var numeros3 = new Array();
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    return Pessoa;
}());
var Tela1 = /** @class */ (function () {
    function Tela1() {
        this.pessoas = [];
        var pessoa = new Pessoa();
        pessoa.nome = "Abraão";
        pessoa.nascimento = "1995";
        this.pessoas.push(pessoa);
        console.log(this.pessoas);
    }
    return Tela1;
}());
var tela = new Tela1();
var tela2 = new Tela1();
var tela3 = new Tela1();
var tela4 = new Tela1();
