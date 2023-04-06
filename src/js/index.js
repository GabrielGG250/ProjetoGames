const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')
const logo = document.querySelectorAll('.logo')

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
    })
})