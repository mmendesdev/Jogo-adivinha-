let numeroSecreto = 5;

function exibirTextoNaTela(tag, texto){
       let campo = document.querySelector(tag);
       campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'Seja bem-vindo ao jogo do Matheus Mendes');
exibirTextoNaTela('p', 'Escolha um número entre 1 a 10: ');

function verificarChute() {
   let chute = document.querySelector('input').value;
     
   if(chute == numeroSecreto) {
       exibirTextoNaTela('h1', 'Parabéns, você acertou!!');
       exibirTextoNaTela('p', 'Você descobriu o número secreto!');
   } else {
       if(chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Tente novamente');
            exibirTextoNaTela('p', 'Vou lhe dar uma dica, o número secreto é menor');
       } else {
            exibirTextoNaTela('p', 'Tente novamente');
            exibirTextoNaTela('p', 'Vou lhe dar um dica, número secreto é maior');
       }
       
}
       
}
function gerarNumeroAleatorio(){
     return parseInt(Math.random() * 10 + 1);
}