//Emilly Vilela de Souza
document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('mapContainer');
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58721.587734516215!2d-45.743938558262535!3d-23.093462955516575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc516de4e6e1a3%3A0x6544283198cf070f!2zQ2HDp2FwYXZhLCBTUA!5e0!3m2!1spt-BR!2sbr!4v1717782819592!5m2!1spt-BR!2sbr";
    iframe.width = "600";
    iframe.height = "450";
    iframe.style.border = "0";
    iframe.allowfullscreen = "";
    iframe.loading = "lazy";
    iframe.referrerpolicy = "no-referrer-when-downgrade";
    mapContainer.appendChild(iframe);
});

