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

    const links = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll(".section-container");
    const curtain = document.getElementById("transition-curtain");

    if (sections.length > 0 && links.length > 0) {
        sections[0].classList.add("active");
        links[0].classList.add("active");
    }

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            if (link.id === "theme-toggle" || link.classList.contains("btn-theme") || link.closest('#theme-toggle')) return;

            e.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection && !targetSection.classList.contains("active")) {
                
                if (curtain) {
                    //curtain.classList.add("run");
                    const randomAnimation = Math.floor(Math.random() * 4) + 1;
                    const animationClass = `run-${randomAnimation}`;

                    curtain.dataset.currentClass = animationClass;
                    curtain.classList.add(animationClass);
                    
                    setTimeout(() => {
                        sections.forEach(sec => sec.classList.remove("active"));
                        links.forEach(l => l.classList.remove("active"));
                        targetSection.classList.add("active");
                        link.classList.add("active");
                        window.location.hash = targetId;
                    }, 300);

                    //setTimeout(() => {
                    //    curtain.classList.remove("run");
                    //}, 600);
                } else {
                    sections.forEach(sec => sec.classList.remove("active"));
                    links.forEach(l => l.classList.remove("active"));
                    targetSection.classList.add("active");
                    link.classList.add("active");
                    Window.location.hash = targetId;
                } 
            }
        });
    });

    if (curtain) {
        curtain.addEventListener("animationend", () => {
            const currentClass = curtain.dataset.currentClass;
            if (currentClass) {
                curtain.classList.remove(currentClass);
                delete curtain.dataset.currentClass;
            }
        });
    }
});