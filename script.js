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

console.log(atividade1(6));
console.log(atividade2(5, "hello-world"));
