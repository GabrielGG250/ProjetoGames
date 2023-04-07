const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const logo = document.querySelectorAll('.logo');
const descricao = document.querySelectorAll('.descricao');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.selecionado');

        botaoSelecionado.classList.remove('selecionado');

        botao.classList.add('selecionado');

        const imagemAtiva = document.querySelector('.ativa');

        imagemAtiva.classList.remove('ativa');

        imagens[indice].classList.add('ativa');

        const logoSelecionada = document.querySelector('.ativa1')

        logoSelecionada.classList.remove('ativa1');

        logo[indice].classList.add('ativa1');

        const descricaoAtiva = document.querySelector('.ativa2');

        descricaoAtiva.classList.remove('ativa2');

        descricao[indice].classList.add('ativa2')
    })
})