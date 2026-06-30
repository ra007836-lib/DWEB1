const formularioContato = document.getElementById('formularioContatoId');
formularioContato.addEventListener('submit', processarEnvioFormulario);
const mensagemConfirmacao = document.getElementById('mensagemConfirmacaoId');
const campoNome = document.getElementById('nome');

function processarEnvioFormulario(evento) {
    evento.preventDefault();

    const nomeDigitado = campoNome.value;
    mensagemConfirmacao.textContent = `Obrigado pelo contato, ${nomeDigitado}! Sua mensagem foi enviada com sucesso.`;
    mensagemConfirmacao.classList.add('sucesso');
    formularioContato.reset();

    setTimeout(() => {
        mensagemConfirmacao.classList.remove('sucesso');
        mensagemConfirmacao.textContent = '';
    }, 5000);
}

// Pergunta obrigatória:
// Aponte a linha em que você captura o valor digitado no campo de nome e explique:
// de onde vem esse valor?
// Como o JavaScript sabe o que o usuário digitou?
// O que aconteceria se o campo estivesse vazio?