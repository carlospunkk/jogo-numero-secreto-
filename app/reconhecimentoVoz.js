const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;


const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

// variavel recognition faz o evento de escutar dai eu chamo a função callback que escutou o resultado
recognition.addEventListener('result', onSpeak)
function onSpeak(evento) {
  chute = evento.results[0][0].transcript
  exibechuteNaTela(chute)
  console.log(chute)
  verificavalorValido(chute)

}

function exibechuteNaTela(chute) {
  elementoChute.innerHTML = `
<div> você disse : </div> 
<span class="box"> ${chute}</span>
`
}
// continuar o jogo até acertar 
//adicionei o evento quando acabar chama a função anonima que dá liga a o microfone mais vezes 
recognition.addEventListener("end", () => recognition.start())

