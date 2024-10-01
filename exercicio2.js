let number = prompt("Digite um número");

function verificaParOuImpar(number) {
  if (number % 2 === 0) {
    console.log("O número é par")
  } else {
    console.log("O número é ímpar")
  }
}
verificaParOuImpar(number);