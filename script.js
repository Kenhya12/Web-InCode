// Datos de cada miembro del equipo
const teamMembers = [
    {
        name: "Yelyzaveta Krasiuk",
        role: "Desarrolladora Web",
        description:
            "Cuenta con mas de 4 años de experiencia desarrollando sitios web acessibles y responsivos,experta en HTML,CSS,JavaScript y usabilidad. Colabora con diseño para crear interfaces intuitivas e inclusivas.",
        email: "yelyzabeta@inncode.com",
        img: "img/Yelizabeta2_400x400.webp",
    },
    {
        name: "Vanderlene Oliveira",
        role: "Backend Engineer",
        description:
            "Más de 5 años creando sistemas backend seguros y escalables. Experta en Node.js, bases de datos y APIs, enfocada en optimizar rendimiento y colaborar con el equipo para lograr productos sólidos.",
        email: "vanderlene@inncode.com",
        img: "img/Vanderlene2_400x400.webp",
    },
    {
        name: "Alejandro Cuesta",
        role: "Frontend Engineer",
        description:
            "Especialista en crear interfaces modernas y eficientes. Experto en React, CSS y experiencia de usuario, comprometido con la innovación y la mejora continua.",
        email: "alejandrocuesta@inncode.com",
        img: "img/Alejandro2_400x400.webp",
    },
    {
        name: "Paula Apsé",
        role: "Diseñadora UX/UI",
        description:
            "Diseñadora UX/UI especializada en interfaces intuitivas y eficientes. Combina principios de usabilidad y diseño centrado en el usuario para optimizar flujos y mejorar la experiencia digital en productos multiplataforma.",
        email: "paulaapese@inncode.com",
        img: "img/Paula2_400x400.webp",
    },
];

// Seleccionamos todas las tarjetas
const cards = document.querySelectorAll(".inner-box");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalRole = document.getElementById("modal-role");
const modalDescription = document.getElementById("modal-description");
const modalEmail = document.getElementById("modal-email");
const modalClose = document.getElementById("modal-close");

// Añadimos evento click a cada tarjeta para abrir el modal con la información correspondiente
cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        const member = teamMembers[index];
        modalImg.src = member.img;
        modalName.textContent = member.name;
        modalRole.textContent = member.role;
        modalDescription.textContent = member.description;
        modalEmail.textContent = `Email: ${member.email}`;
        modal.style.display = "block"; // Mostrar el modal
    });
});

// Cerrar el modal al hacer clic en la "X"
modalClose.addEventListener("click", () => {
    modal.style.display = "none"; // Ocultar el modal
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none"; // Ocultar el modal
    }
});