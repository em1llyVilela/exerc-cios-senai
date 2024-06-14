//Emilly Vilela de Souza
function filterGallery(category) {
    let items = document.querySelectorAll('.gallery-item');
    if (category === 'all') {
        items.forEach(item => {
            item.classList.add('show');
        });
    } else {
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    }
}

// Mostrar todos os itens por padrão
filterGallery('all');

