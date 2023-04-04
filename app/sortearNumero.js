// inputs 
const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

// função que gera os numeros aletórios
function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1)
}

//teste na tela 
console.log("o numero secreto é : " + numeroSecreto)

//manipulação Dom
const ElementoMenorValor = document.getElementById('menor-valor')
ElementoMenorValor.innerHTML = menorValor
const ElementoMaiorValor = document.getElementById('maior-valor')
ElementoMaiorValor.innerHTML = maiorValor

