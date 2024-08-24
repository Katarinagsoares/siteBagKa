document.getElementById('cadastroForm').addEventListener('submit', function(event) { 
    event.preventDefault(); 

    // valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const envio = document.getElementById('enviar').value;
    const pagamento = document.getElementById('pagamento').value;
    const check = document.getElementById('check').value;

    ///Exibe os dados
    const result = document.getElementById('result');
result.innerHTML = 
    '<h2>Dados Inseridos:</h2>' +     // + juntar partes de uma string e incluir variáveis dentro delas
    '<p><strong>Nome:</strong> ' + nome + '</p>' +
    '<p><strong>Email:</strong> ' + email + '</p>' +
    '<p><strong>Telefone:</strong> ' + telefone + '</p>' +
    '<p><strong>Data Nascimento</strong> ' + dataNascimento + '</p>' +
    '<p><strong>Forma de Envio:</strong> ' + envio + '</p>' +
    '<p><strong>Forma de Pagamento:</strong> ' + pagamento + '</p>'+
    '<p><strong>Aceita os termos:</strong> ' + (check ? 'sim' : 'não') + '</p>'
});

    