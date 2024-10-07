const number1 = parseInt(prompt("Digite o primeiro número"));
const number2 = parseInt(prompt("Digite o segundo número"));
const operacao = prompt("Qual operação deseja realizar? (Soma, Subtracao, Multiplicacao, Divisao)");

function calculate(number1, number2, operacao) {
  if (operacao == 'soma') {
    const soma = number1 + number2;
    return soma;
  }

  if (operacao == 'subtracao') {
    const subtracao = number1 - number2;
    return subtracao;
  }

  if (operacao == 'multiplicacao') {
    const multiplicacao = number1 * number2;
    return multiplicacao;
  }

  if (operacao == 'divisao')
    if (number2 == 0) {
      return ('Divisão por zero não é permitida');
    }

  return number1 / number2;
}


const result = calculate(number1, number2, operacao);


alert(`O resultado da operação ${operacao} entre ${number1} e ${number2} é ${result}`); 