//Emilly Vilela de Souza
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageElement = document.getElementById('message');
  
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Dados de login
      const correctUsername = 'emilly';
      const correctPassword = 'senai';
  
      if (username === correctUsername && password === correctPassword) {
        // Login bem-sucedido
        localStorage.setItem('loggedIn', 'true');
        showMessage('Login bem-sucedido!', 'success-message');
      } else {
        // Login falhou
        localStorage.setItem('loggedIn', 'false');
        showMessage('Usuário ou senha incorretos.', 'error-message');
      }
    });
  
    // Verifica se o usuário já está logado ao carregar a página
    if (localStorage.getItem('loggedIn') === 'true') {
      showMessage('Você já está logado.', 'success-message');
    }
  
    function showMessage(message, className) {
      messageElement.innerText = message;
      messageElement.className = className;
    }
  });
  