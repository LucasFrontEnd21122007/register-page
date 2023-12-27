function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessages = document.getElementById('errorMessages');
    
    // Limpar mensagens de erro
    errorMessages.innerHTML = '';
  
    // Validar campos
    if (!username || !email || !password || !confirmPassword) {
      errorMessages.innerHTML = 'Todos os campos são obrigatórios.';
      return;
    }
  
    // Validar senha
    if (password !== confirmPassword) {
      errorMessages.innerHTML = 'As senhas não coincidem.';
      return;
    }
  
    // TODO: Adicionar mais validações, como formato de e-mail, senha forte, etc.
  
    // Se todas as validações passarem, você pode enviar os dados para o servidor ou realizar outras ações.
    alert('Cadastro bem-sucedido!');
  }
  