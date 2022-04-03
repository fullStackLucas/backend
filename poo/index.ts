class Pessoa {
  nome: string;
  altura: number;
  peso: number;
  
  constructor(nome: string, altura: number, peso: number) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
  }

  getBMI(): string | undefined {
    const bmi: number = Math.round(this.peso / (this.altura * this.altura));
    switch (true) {
      case bmi < 18.5:
        console.log(`${this.nome} está abaixo do peso`);
        return `O imc de ${this.nome} é ${bmi} e está abaixo do peso`;
        break;
      case bmi >= 18.5 && bmi < 25:
        console.log(`${this.nome} está no peso ideal`);
        return `O imc de ${this.nome} é ${bmi} e está no peso ideal`;
        break;
      case bmi >= 25 && bmi < 30:
        console.log(`${this.nome} está acima do peso`);
        return `O imc de ${this.nome} é ${bmi} e está acima do peso`;
        break;
      case bmi >= 30 && bmi < 35:
        console.log(`${this.nome} está com obesidade grau I`);
        return `O imc de ${this.nome} é ${bmi} e está com obesidade grau I`;
        break;
      case bmi >= 35 && bmi < 40:
        console.log(`${this.nome} está com obesidade grau II`);
        return `O imc de ${this.nome} é ${bmi} e está com obesidade grau II`;
        break;
      case bmi >= 40:
        console.log(`${this.nome} está com obesidade grau III`);
        return `O imc de ${this.nome} é ${bmi} e está com obesidade grau III`;
        break;
    }
  };
  sleep(): void {
    console.log(`${this.nome}: zzzzzzz`);
  }
}

const pessoaRenata = new Pessoa('Renata', 1.70, 62);
const pessoaLucas = new Pessoa('Lucas', 1.82, 81);
const pessoaJoao = new Pessoa('João', 1.75, 70);

console.log(pessoaRenata.getBMI());
console.log(pessoaLucas.getBMI());
console.log(pessoaJoao.getBMI());
pessoaRenata.sleep();
pessoaLucas.sleep();
pessoaJoao.sleep();
