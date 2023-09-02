// Script contendo as resoluções das atividades
// Feito por Guilherme Antunes

const atividade1 = (num) => {
  fatorial = num;
  for (i = num - 1; i > 0; i--) {
    fatorial = fatorial * i;
  }
  return fatorial;
};

const atividade2 = (n, mensagem) => {
  stringRetorno = mensagem;
  for (i = 1; i < n; i++) {
    stringRetorno += " ";
    stringRetorno += mensagem;
  }
  return stringRetorno;
};

const atividade3 = (num1, num2, operacao) => {
  switch (operacao) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 == 0) {
        return null;
      }
      return num1 / num2;
    default:
      return null;
  }
};

const atividade4 = (num) => {
  tabuada = [];
  for (i = 0; i < 10; i++) {
    tabuada[i] = num * (i + 1);
  }
  return tabuada;
};

const atividade5 = (num) => {
  return parseInt(num.toString().split("").reverse().join(""));
};

console.log(atividade1(6));
console.log(atividade2(5, "hello-world"));
console.log(atividade3(4, 2, "/"));
console.log(atividade4(10));
console.log(atividade5(2545));
