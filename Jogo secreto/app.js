let listaNumerosSorteados = [];
let numeroSecreto = 9;
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
       let campo = document.querySelector(tag);
       campo.innerHTML = texto;
       responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
       {rate:1.2});
}      

function exibirMensagemInicial(){
     exibirTextoNaTela('h1', 'Seja bem-vindo ao jogo do Mendes');
     exibirTextoNaTela('p', 'Digite um na 10: ');
}
exibirMensagemInicial();
function verificarChute() {
   let chute = document.querySelector('input').value;
     
   if(chute == numeroSecreto) {
       exibirTextoNaTela('h1', 'Parabéns, você acertou!!');
       let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
       let mensagemTentativas = (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
       exibirTextoNaTela('p', mensagemTentativas);
       document.getElementById('reiniciar').removeAttribute('disabled');

   } else {
       if(chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Tente novamente...');
            exibirTextoNaTela('p', 'Vou lhe dar uma dica, o número secreto é menor');
       } else {
            exibirTextoNaTela('p', 'Tente novamente...');
            exibirTextoNaTela('p', 'Vou lhe dar uma dica, número secreto é maior');
       }
       tentativas++
       limparCampo()
   }
}
function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * 10 + 1);
     if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
     } else {
         listaNumerosSorteados.push(numeroEscolhido);
         console,console.log(numeroEscolhido);
         return numeroEscolhido;
    }
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