//Emilly Vilela de Souza
function addComment() {
    // Obter o texto do campo de comentário
    var commentText = document.getElementById("comment").value;
    
    // Verificar se o campo de comentário está vazio
    if (!commentText.trim()) {
        alert('Por favor, adicione um comentário.');
        return;
    }
    
    // Criar um novo elemento de parágrafo para o comentário
    var commentNode = document.createElement("p");
    var commentContent = document.createTextNode(commentText);
    commentNode.appendChild(commentContent);
    
    // Adicionar o comentário à lista de comentários
    document.getElementById("commentList").appendChild(commentNode);
    
    // Limpar o campo de comentário
    document.getElementById("comment").value = "";
}
