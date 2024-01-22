let numeroSecreto = 5;
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
       let campo = document.querySelector(tag);
       campo.innerHTML = texto;
}

function exibirMensagemInicial(){
     exibirTextoNaTela('h1', 'Seja bem-vindo ao jogo do Matheus Mendes');
     exibirTextoNaTela('p', 'Escolha um número entre 1 a 10: ');
}
exibirMensagemInicial();
function verificarChute() {
   let chute = document.querySelector('input').value;
     
   if(chute == numeroSecreto) {
       exibirTextoNaTela('h1', 'Parabéns, você acertou!!');
       let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
       let mensagemTentativas = (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
       exibirTextoNaTela('p', mensagemTentativas);
       document.getElementById('reiniciar').removeAttribute('disabled')

   } else {
       if(chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Tente novamente...');
            exibirTextoNaTela('p', 'Vou lhe dar uma dica, o número secreto é menor');
       } else {
            exibirTextoNaTela('p', 'Tente novamente...');
            exibirTextoNaTela('p', 'Vou lhe dar um dica, número secreto é maior');
       }
       tentativas++
       limparCampo()
   }
}
function gerarNumeroAleatorio(){
     return parseInt(Math.random() * 10 + 1);
}
function limparCampo(){
     chute = document.querySelector('input');
     chute.value = '';
}
function reiniciarJogo(){
     numeroSecreto = gerarNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirMensagemInicial();
     document.getElementById('reiniciar').setAttribute('disabled', true);

}