//Emilly Vilela de Souza
function previewFiles() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    const filePreview = document.getElementById('filePreview');
  
    filePreview.innerHTML = '';
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
  
      reader.onload = function(event) {
        const img = document.createElement('img');
        img.src = event.target.result;
        img.classList.add('preview-image');
        filePreview.appendChild(img);
      }
  
      reader.readAsDataURL(file);
    }
  }
  
  function submitForm(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
  
    // Aqui você pode adicionar a lógica para enviar os arquivos para o servidor
    // Por enquanto, vamos apenas exibir um alerta de envio bem-sucedido
    showAlert('Arquivos enviados com sucesso!');
  }