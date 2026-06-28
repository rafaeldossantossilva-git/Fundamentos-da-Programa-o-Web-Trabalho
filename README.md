# Persona 5 Inspired Portfolio - Rafael Santos

Bem-vindo ao repositório do meu portfólio online! Este projeto foi desenvolvido como Atividade Prática (Portfólio) para o centro universitário Uninter, integrando conceitos de desenvolvimento front-end com uma identidade visual fortemente inspirada na interface de usuário (UI) do jogo Persona 5 Royal.

O site foi estruturado como uma Single Page Application (SPA), utilizando navegação por âncoras para transição suave entre as seções, combinando automações desenvolvidas para o setor financeiro/contábil e projetos de desenvolvimento de jogos.

---

## Tecnologias Utilizadas

Para atender estritamente aos critérios avaliativos da disciplina, o projeto foi construído sem o uso de nenhuma biblioteca ou framework externo. Todo o comportamento e estilização foram feitos de forma nativa:

* HTML5: Estruturação semântica das seções e formulários.
* CSS3: Layout responsivo baseado em Flexbox/Grid, animações customizadas e efeitos de distorção geométrica (`skew`) baseados na identidade visual de Persona 5.
* JavaScript: Gerenciamento dinâmico do calendário do HUD, controle do alternador de temas (Light/Dark Mode), disparos da cortina de transição cinematográfica (Shatter Effect) e validação lógica do formulário de contato.

---

## Estrutura do Projeto e Seções

O portfólio está organizado de forma modular em uma única página conectada por um menu global fixo:

1.Sobre Mim: Apresentação da minha trajetória de 8 anos na área contábil/financeira e minha transição acadêmica para a tecnologia, unindo os cursos de Análise e Desenvolvimento de Sistemas e Ciências Contábeis.
2.Formação Acadêmica: Exibição das minhas graduações em andamento pela Uninter.
3.Portfólio de Projetos: Mostruário contendo aplicações reais de automação:
    *Conversor e Auditor Digital DMED: Pipeline desktop de ETL para tratamento de relatórios do ISS Fortaleza.
    *Processador Automatizado de Notas Fiscais: Script em C# com parsing de PDF para auditoria em massa.
    *ImportadorAG: Middleware de conversão estrutural de XMLs fiscais.
    *LifeRPG & Operation Cozy World: Projetos práticos desenvolvidos na Unity 6.
4.Contato: Formulário de envio de mensagens com validação e simulação de envio 100% controladas por JavaScript nativo.

---

## Validação e Regras de Negócio (JavaScript)

* Validação de Formulário: O script intercepta o evento de `submit`, valida os critérios de preenchimento dos campos `Nome`, `E-mail` (verificação de formato) e `Mensagem`, impedindo envios em branco.
* HUD Dinâmico: O componente de calendário superior (`#p5-calendar`) realiza a captura em tempo real da data do sistema do usuário e formata dinamicamente na tela no padrão estético do jogo.

---

## Publicação e Hospedagem

O projeto cumpre a obrigatoriedade de hospedagem pública e gratuita, estando disponível online através do GitHub Pages. 

* URL do Repositório: `https://github.com/rafaeldossantossilva-git/Fundamentos-da-Programa-o-Web-Trabalho`
* URL do Site Publicado: `https://rafaeldossantossilva-git.github.io/Fundamentos-da-Programa-o-Web-Trabalho/`

> Nota para a Avaliação: O código-fonte encontra-se integralmente documentado com comentários nativos (`<!-- -->` no HTML, `/* */` no CSS e `//` no JS) nas seções estratégicas, explicando a arquitetura e os seletores visuais utilizados.