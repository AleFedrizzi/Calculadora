var primeiroValor = parseInt (prompt ("Digite o primeiro valor: "))
var segundoValor = parseInt (prompt ("Digite o segundo valor: "))

var operacao = prompt ("Digite: \n 1 para somar \n 2 para subtrair \n 3 para multiplicar\n 4 para dividir")


if (operacao == 1) {
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 2) {
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 3) {
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
}else if (operacao == 4) {
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} else {
  document.write("<h2>Opção invalida</h2>")
}




