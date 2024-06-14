//Emilly Vilela de Souza
function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
        dropdown.style.opacity = 1;
        dropdown.style.transform = "translateY(0)";
    } else {
        dropdown.style.display = "none";
        dropdown.style.opacity = 0;
        dropdown.style.transform = "translateY(-10px)";
    }
}

