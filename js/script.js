document.addEventListener("DOMContentLoaded", () => {
    

    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("theme-light")) {
            body.classList.remove("theme-light");
            body.classList.add("theme-dark");
        } else {
            body.classList.remove("theme-dark");
            body.classList.add("theme-light");
        }
    });

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("⚠️ Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("⚠️ Por favor, insira um endereço de e-mail válido.");
            return;
        }

        alert("🎉 Mensagem enviada com sucesso! (Simulação)");
        contactForm.reset();
    });
});