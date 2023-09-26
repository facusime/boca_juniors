// JavaScript para la galería de fotos
document.addEventListener("DOMContentLoaded", function () {
    const imagenDestacada = document.getElementById("imagen-destacada");
    const miniaturas = document.getElementById("miniaturas").getElementsByTagName("img");

    for (let i = 0; i < miniaturas.length; i++) {
        miniaturas[i].addEventListener("click", function () {
            imagenDestacada.innerHTML = ""; // Limpia la imagen destacada actual
            const imagenNueva = document.createElement("img");
            imagenNueva.src = this.src;
            imagenNueva.alt = this.alt;
            imagenDestacada.appendChild(imagenNueva);
        });
    }
});

// JavaScript para mostrar información adicional
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("#informacion-adicional ul li a");
    const infoDinamica = document.getElementById("info-dinamica");

    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const info = this.getAttribute("data-info");
            infoDinamica.innerHTML = `<p>${info}</p>`;
        });
    });
});
