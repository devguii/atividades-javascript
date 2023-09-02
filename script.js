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

const atividade6 = (frase) => {
  vogais = ["a", "e", "i", "o", "u"];
  numeroVogais = 0;

  for (i = 0; i < vogais.length; i++) {
    for (z = 0; z < frase.length; z++) {
      if (frase.toLowerCase()[z] == vogais[i]) {
        numeroVogais++;
      }
    }
  }

  return numeroVogais;
};

const atividade7 = (sequencia) => {
  let pilha = [];
  for (i = 0; i < sequencia.length; i++) {
    if (sequencia[i] == "(" || sequencia[i] == "[") {
      pilha.push(sequencia[i]);
    } else if (sequencia[i] == ")" || sequencia[i] == "]") {
      if (pilha.length == 0) {
        return false;
      }
      let c = pilha.pop();
      if (c == "(" && sequencia[i] != ")") {
        return false;
      } else if (c == "[" && sequencia[i] != "]") {
        return false;
      }
    }
  }
  if (pilha.length == 0) {
    return true;
  } else return false;
};

console.log(atividade1(6));
console.log(atividade2(5, "hello-world"));
console.log(atividade3(4, 2, "/"));
console.log(atividade4(10));
console.log(atividade5(2545));
console.log(atividade6("teste vogais"));
console.log(atividade7("()([])()"));
