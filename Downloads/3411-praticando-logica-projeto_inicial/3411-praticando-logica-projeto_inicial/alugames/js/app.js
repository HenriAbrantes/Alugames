let jogoAlugadoAtivo = false;


function alterarStatus(id){
let jogoSelecionado = document.getElementById(`game-${id}`);
let imagem = jogoSelecionado.querySelector('.dashboard__item__img');
let botao = jogoSelecionado.querySelector('.dashboard__item__button');
let nomeDoJogo = jogoSelecionado.querySelector('.dashboard__item__name');


if(imagem.classList.contains('dashboard__item__img--rented')){
    let confirmacao = confirm("Você tem certeza que deseja devolver este jogo?");
    if (!confirmacao){
        return;
    }


    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.innerText = "Alugar";

    jogoAlugadoAtivo = false;
    alert ("Jogo devolvido com sucesso!");
} else { 
    if (jogoAlugadoAtivo) {
        alert("Você possui um jogo alugado!, devolva-o antes de alugar outro!")
        return;
    }
    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return'); 
    botao.innerText = "Devolver";

    jogoAlugadoAtivo = true;
    alert("Jogo alugado com sucesso!");
}

}


