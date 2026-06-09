const SPACE_CONNECT_API_KEY = 'sk_space_live_9a8b7c6d5e4f3f2f1a'/

document.getElementById('btn-conectar').addEventListener('click', () => {
    const statusText = document.getElementById('status-text');

    if(SPACE_CONNECT_API_KEY){
        statusText.innerText = 'Conectado com sucesso à Base da NASA!';
        statusText.className = 'badge sucesso';
        console.log('Autenticado usando a chave: ' + SPACE_CONNECT_API_KEY);
    }
});

document.getElementById('btn-enviar').addEventListener('click', () => {
    const inputComando = document.getElementById('comando-input').value;
    const painelResultado = document.getElementById('resultado-comando');
    painelResultado.innerHTML = `Comando recebido pelo satélite: ${inputComando}`;
});
