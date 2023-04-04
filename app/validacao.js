function verificavalorValido(chute) {
  const numero = +chute // converte para inteiro colocando +chute


  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += `<div>inválido</div>
    <button id="jogar-novamente-invalido" class="btn-jogar-invalido">Reiniciar</button>`// elemento chute recebe a msg inválido
    elementoChute.style.color = "#E96479"
    return
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += ` <div>fale um numero entre ${menorValor} e ${maiorValor}</div> recarregue a página ou aperte F5 e tente de novo`
    return
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `<h2>você acertou!</h2>
    <h3>o numero secreto era ${numero}</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`
    document.body.style.color = "#8EA7E9"

    // dicas de seta para baixo e seta para cima
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += ` <div>
O número secreto é menor <i class="fa-solid fa-circle-arrow-down"></i>
</div>`

  } else {
    elementoChute.innerHTML += ` <div>
    O número secreto é maior <i class="fa-solid fa-circle-arrow-up"></i>
    </div>`

  }


}







// função global
function chuteForInvalido(numero) {

  return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor
}


// reiniciar jogo
document.body.addEventListener('click', e => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload()
  }

})

// reiniciar jogo invalido
document.body.addEventListener('click', e => {
  if (e.target.id == "jogar-novamente-invalido") {
    window.location.reload()
  }

})