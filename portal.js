
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio do formulário para validação

            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            if (!email || !senha) {
                alert('Por favor, preencha todos os campos!');
                return;
            }

            // Aqui você pode adicionar o código para enviar os dados ao servidor, caso queira.
            // Para fins de exemplo, vamos apenas mostrar um alert.
            alert('Formulário enviado com sucesso!');
        });