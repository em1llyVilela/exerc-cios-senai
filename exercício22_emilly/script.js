//Emilly Vilela de Souzafunction validarFormulario() {
    function validarFormulario() {
        var nome = document.getElementById('nome').value.trim();
        var numeroCartao = document.getElementById('numeroCartao').value.trim();
        var agencia = document.getElementById('agencia').value.trim();
        var validade = document.getElementById('validade').value.trim();
        var errorNome = document.getElementById('errorNome');
        var errorNumeroCartao = document.getElementById('errorNumeroCartao');
        var errorAgencia = document.getElementById('errorAgencia');
        var errorValidade = document.getElementById('errorValidade');
        var isValid = true;
    
        if (nome === '') {
            errorNome.textContent = 'Por favor, preencha o nome no cartão.';
            isValid = false;
        } else {
            errorNome.textContent = '';
        }
    
        if (numeroCartao === '' || numeroCartao.length !== 16) {
            errorNumeroCartao.textContent = 'Por favor, preencha um número de cartão válido.';
            isValid = false;
        } else {
            errorNumeroCartao.textContent = '';
        }
    
        if (agencia === '' || agencia.length !== 4) {
            errorAgencia.textContent = 'A agência deve ter 4 dígitos.';
            isValid = false;
        } else {
            errorAgencia.textContent = '';
        }
    
        if (validade === '' || !validarDataValidade(validade)) {
            errorValidade.textContent = 'Por favor, preencha uma data de validade válida no formato MM/AA.';
            isValid = false;
        } else {
            errorValidade.textContent = '';
        }
    
        return isValid;
    }
    
    
