/**
 * SISTEMA CENTRAL DE GERENCIAMENTO DA INTERFACE DO PORTFÓLIO
 * Controla as transições de abas, validação assíncrona e relógio interno do sistema.
 */
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================================================
    // GERENCIAMENTO DE MUDANÇA DE TEMA (DARK/LIGHT MODE)
    // ==========================================================================
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    /**
    * Altera o tema da aplicação (Light/Dark) baseado no clique do botão.
    * Dispara a animação do 'transition-curtain' para simular o efeito do jogo.
    */
    themeToggle.addEventListener("click", () => {

        // Altera as classes do body chaveando o mapeamento de variáveis root do CSS
        if (body.classList.contains("theme-light")) {
            body.classList.remove("theme-light");
            body.classList.add("theme-dark");
        } else {
            body.classList.remove("theme-dark");
            body.classList.add("theme-light");
        }
    });

    // ==========================================================================
    // VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO
    // ==========================================================================
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (event) => {

        // Bloqueia o recarregamento padrão da página (comportamento nativo do submit)
        event.preventDefault();

        // Captura e sanitiza os dados removendo espaços extras nas extremidades
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validação simples de campos obrigatórios vazios
        if (!name || !email || !message) {
            alert("⚠️ Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Expressão Regular para validação de formato estrutural de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("⚠️ Por favor, insira um endereço de e-mail válido.");
            return;
        }

        // Simulação de sucesso no envio e reset dos campos do formulário
        alert("🎉 Mensagem enviada com sucesso!");
        contactForm.reset();
    });

    // ==========================================================================
    // SISTEMA DE ROTEAMENTO INTERNO E TRANSIÇÃO SPA CINEMÁTICA
    // ==========================================================================
    const links = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll(".section-container");
    const curtain = document.getElementById("transition-curtain");

    // Estado Inicial do App: Garante que a primeira aba e link comecem ativos
    if (sections.length > 0 && links.length > 0) {
        sections[0].classList.add("active");
        links[0].classList.add("active");
    }

    // Monitoramento de cliques nos links da barra de navegação para roteamento SPA
    links.forEach(link => {
        link.addEventListener("click", (e) => {

            // Cláusula de Salvaguarda: Ignora a lógica de abas caso o elemento clicado seja o botão de tema
            if (link.id === "theme-toggle" || link.classList.contains("btn-theme") || link.closest('#theme-toggle')) return;

            // Impede o salto brusco nativo da âncora HTML
            e.preventDefault();

            // Extrai o ID de destino (ex: "#portfolio" vira "portfolio")
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Só executa a transição se o alvo existir e não for a aba que já está aberta
            if (targetSection && !targetSection.classList.contains("active")) {

                // Cenário A: Execução da transição estilizada com a Cortina (Shatter Effect)
                if (curtain) {

                    // Sorteia um número de 1 a 4 para alternar aleatoriamente o padrão de corte geométrico do CSS
                    const randomAnimation = Math.floor(Math.random() * 4) + 1;
                    const animationClass = `run-${randomAnimation}`;

                    // Armazena temporariamente no dataset para posterior remoção limpa
                    curtain.dataset.currentClass = animationClass;
                    curtain.classList.add(animationClass);

                    // Janela de Tempo (300ms): Troca o conteúdo em cache exatamente no meio da animação (quando a tela está coberta)
                    setTimeout(() => {
                        sections.forEach(sec => sec.classList.remove("active"));
                        links.forEach(l => l.classList.remove("active"));

                        targetSection.classList.add("active");
                        link.classList.add("active");

                        // Atualiza a URL sem recarregar
                        window.location.hash = targetId;
                    }, 300);

                } else {

                    // Cenário B: Fallback de segurança instantâneo caso a div da cortina não exista no HTML
                    sections.forEach(sec => sec.classList.remove("active"));
                    links.forEach(l => l.classList.remove("active"));
                    targetSection.classList.add("active");
                    link.classList.add("active");
                    window.location.hash = targetId;
                }
            }
        });
    });

    // Coletor de lixo da animação: Remove as classes de animação assim que o ciclo termina
    if (curtain) {
        curtain.addEventListener("animationend", () => {
            const currentClass = curtain.dataset.currentClass;
            if (currentClass) {
                curtain.classList.remove(currentClass);

                // Remove o atributo de dados temporário
                delete curtain.dataset.currentClass;
            }
        });
    }

    // ==========================================================================
    // HUD REPLICATOR: ATUALIZADOR DO RELÓGIO/CALENDÁRIO DE PERSONA 5
    // ==========================================================================
    /**
     * Captura o horário local da máquina do usuário e injeta no display digital formatado.
     */
    function atualizarDataP5() {
        const dataAtual = new Date();

        // Extrai dados cronológicos garantindo o preenchimento de zeros à esquerda (ex: "05")
        const dia = String(dataAtual.getDate()).padStart(2, '0');
        const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');

        // Atualiza dinamicamente o nó de texto no formato DIA/MÊS clássico da UI do jogo
        document.getElementById('p5-current-date').textContent = `${dia}/${mes}`;
    }

    // Dispara a sincronização de dados cronológicos assim que a árvore do DOM estiver pronta
    window.addEventListener('DOMContentLoaded', atualizarDataP5);
});