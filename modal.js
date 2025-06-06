
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalClose = document.getElementById("modal-close");
// Seleccione todos los elementos con la clase .inner-box (estas son sus representaciones fotográficas de proyectos)
document.querySelectorAll(".inner-box").forEach(box => {
    box.addEventListener("click", () => {
        const fullImgSrc = box.getAttribute('data-full');
        modalImg.src = fullImgSrc;
        modal.classList.add('open');

    })
});

// Cerrar una ventana modal mediante el botón "×"
modalClose.addEventListener("click", () => {
    modal.classList.remove('open');
    modalImg.src = '';
})

// Cerrar una ventana modal al hacer clic fuera de la imagen(no funciona)
modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('open');
        modalImg.src = '';

    }
})