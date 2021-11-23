let numeros = [];
let numeros2: number[] = [];
let numeros3: number[] = new Array<number>();

class Pessoa {
  public nome;
  public nascimento;
}

class Tela1 {
  public pessoas;

  constructor() {
    this.pessoas = [];
    const pessoa = new Pessoa();
    pessoa.nome = "Abraão";
    pessoa.nascimento = "1995";
    this.pessoas.push(pessoa);
    console.log(this.pessoas);
  }
}

let tela = new Tela1();