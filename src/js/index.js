const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    const idSelecionado = personagem.attributes.id.value;
    if (idSelecionado === 'ultron') return; 

    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');

    personagem.classList.add('selecionado');

    const imagemJogador1 = document.querySelector('#personagem-jogador-1');
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    const nomeJogador1 = document.querySelector('#nome-jogador-1');
    const nomeSelecionado = personagem.getAttribute('data-name');
    nomeJogador1.innerText = nomeSelecionado;
  })
})