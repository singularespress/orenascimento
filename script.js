// Dados do quiz
const quizData = [
    {
        id: 1,
        question: "Qual mentira você ainda conta a si mesmo sobre sua fraqueza?",
        image: "images/q1_batalha_interna.png", // Manter ou atualizar conforme novas imagens
        answers: [
            { text: "Que 'amanhã eu começo' a mudar.", value: "A" },
            { text: "Que meus vícios não são tão ruins assim.", value: "B" },
            { text: "Que a culpa é dos outros, não minha.", value: "C" },
            { text: "Que não tenho força para ser diferente.", value: "D" }
        ]
    },
    {
        id: 2,
        question: "Diante do desrespeito, qual sua reação mais comum?",
        image: "images/q2_desrespeito.png",
        answers: [
            { text: "Engulo em seco e me afasto, remoendo a raiva.", value: "A" },
            { text: "Explodo, mas depois me sinto um idiota.", value: "B" },
            { text: "Tento justificar o outro, me diminuindo no processo.", value: "C" },
            { text: "Marco minha posição com firmeza, mas sem perder o controle.", value: "D" }
        ]
    },
    {
        id: 3,
        question: "Seus vícios (pornografia, procrastinação, comida lixo) são seus mestres ou seus escravos?",
        image: "images/q3_vicios.png",
        answers: [
            { text: "Totalmente mestres. Sou um fantoche deles.", value: "A" },
            { text: "Luto, mas eles quase sempre vencem a batalha.", value: "B" },
            { text: "Estou aprendendo a domesticá-los, mas ainda escapam.", value: "C" },
            { text: "Eu os controlo. Eles servem a mim, não o contrário.", value: "D" }
        ]
    },
    {
        id: 4,
        question: "Sua vida sexual hoje te define como um Garanhão ou um Fracassado?",
        image: "images/q4_vida_sexual.png",
        answers: [
            { text: "Fracassado. A chama apagou faz tempo.", value: "A" },
            { text: "Mais para o lado do fracasso, com lampejos de esperança.", value: "B" },
            { text: "Em reconstrução. Redescobrindo o fogo.", value: "C" },
            { text: "Garanhão. Poder e controle na cama.", value: "D" }
        ]
    },
    {
        id: 5,
        question: "O medo te paralisa ou te impulsiona para a guerra?",
        image: "images/q5_desafios_medos.png",
        answers: [
            { text: "Paralisa. Fujo de qualquer confronto ou desafio.", value: "A" },
            { text: "Sinto o medo, mas avanço com o coração na boca.", value: "B" },
            { text: "Uso o medo como combustível para me preparar melhor.", value: "C" },
            { text: "O medo? É só um tempero para a vitória.", value: "D" }
        ]
    },
    {
        id: 6, // Pergunta Surpresa
        question: "Se sua vida fosse um filme de guerra, qual seria seu papel principal?",
        image: "images/q6_filme_guerra.png", // Nova imagem sugerida
        answers: [
            { text: "O recruta assustado que se esconde na trincheira.", value: "A" },
            { text: "O soldado que cumpre ordens, mas sonha com o fim da guerra.", value: "B" },
            { text: "O sargento que lidera pelo exemplo, mesmo ferido.", value: "C" },
            { text: "O general estrategista que comanda a vitória final.", value: "D" }
        ]
    },
    {
        id: 7,
        question: "Com as mulheres, você é o 'bonzinho' que sempre fica na friendzone ou o homem que elas desejam?",
        image: "images/q7_relacionamento_mulheres.png",
        answers: [
            { text: "Rei da friendzone. O 'amigo' que elas nunca olham diferente.", value: "A" },
            { text: "Às vezes consigo algo, mas não sei como manter o interesse.", value: "B" },
            { text: "Estou aprendendo a ser mais assertivo e atraente.", value: "C" },
            { text: "Elas me desejam. Eu escolho.", value: "D" }
        ]
    },
    {
        id: 8,
        question: "Quando a fraqueza bate, você se entrega à escuridão ou acende a porra da sua luz interior?",
        image: "images/q8_fraco_vulneravel.png",
        answers: [
            { text: "Me afogo na escuridão. A autopiedade é meu refúgio.", value: "A" },
            { text: "Tento lutar, mas a escuridão é forte demais.", value: "B" },
            { text: "Busco uma faísca, uma pequena luz para me guiar.", value: "C" },
            { text: "Eu SOU a luz. A fraqueza não tem vez aqui.", value: "D" }
        ]
    },
    {
        id: 9,
        question: "Sua procrastinação é um hábito ou uma sentença de morte para seus sonhos?",
        image: "images/q9_crescimento_pessoal.png",
        answers: [
            { text: "Sentença de morte. Meus sonhos morrem na praia.", value: "A" },
            { text: "Um hábito terrível que sabota meu progresso.", value: "B" },
            { text: "Luto contra ela diariamente, com algumas vitórias.", value: "C" },
            { text: "Procrastinação? Não conheço essa palavra. Eu EXECUTO.", value: "D" }
        ]
    },
    {
        id: 10,
        question: "Ser HOMEM DE VERDADE é sobre ter nascido com um pênis ou sobre FORJAR um legado de honra e poder?",
        image: "images/q10_homem_de_verdade.png",
        answers: [
            { text: "Acho que é só sobre ter nascido assim...", value: "A" },
            { text: "É sobre ser forte e não mostrar fraquezas.", value: "B" },
            { text: "É sobre ser autêntico e ter coragem de ser quem se é.", value: "C" },
            { text: "É FORJAR um legado de honra, poder e impacto no mundo.", value: "D" }
        ]
    }
];

// Perfis emocionais (mantidos, pois são bons)
const profiles = {
    "A": {
        title: "O COVARDE OCULTO",
        description: "Você evita o confronto, se esconde atrás de desculpas e procrastinação. Sente-se paralisado pelo medo e pela insegurança, preferindo a zona de conforto à verdadeira transformação. É passivo e evita responsabilidades, o que o leva a uma vida de frustração e arrependimento. Mas ainda há tempo para mudar essa realidade."
    },
    "B": {
        title: "O FRACO CONSCIENTE",
        description: "Você reconhece suas fraquezas e vícios, mas ainda luta para superá-los. Tem consciência de suas dores e limitações, mas lhe falta a força de vontade ou o direcionamento para agir. Pode se sentir preso em um ciclo de tentativas e falhas, buscando uma saída, mas sem encontrar o caminho. O primeiro passo é reconhecer - agora é hora de agir."
    },
    "C": {
        title: "O EM TRANSFORMAÇÃO",
        description: "Você está ativamente buscando a mudança. Já deu os primeiros passos para superar seus vícios e fraquezas, e está comprometido com o processo de autodesenvolvimento. Enfrenta desafios com coragem, aprende com seus erros e busca constantemente se tornar a melhor versão de si mesmo. Está em uma jornada de renascimento."
    },
    "D": {
        title: "O BRUTAL IMPARÁVEL",
        description: "Você transcendeu suas limitações e se tornou mestre de si mesmo. É disciplinado, focado e implacável em seus objetivos. Enfrenta qualquer obstáculo com determinação, transformando dor em poder. Lidera pelo exemplo, inspira outros e vive uma vida de propósito e controle. É a personificação da virilidade e da força interior."
    }
};

// Estado do quiz
let currentQuestion = 0;
let userAnswers = []; // Renomeado para evitar conflito com a variável global 'answers' de algumas extensões de navegador
let userPoints = 0;

// Elementos DOM
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const questionImage = document.getElementById('questionImage');
const questionTitle = document.getElementById('questionTitle');
const answersContainer = document.getElementById('answersContainer');
const quizContainer = document.getElementById('quizContainer');
const resultContainer = document.getElementById('resultContainer');
const resultTitle = document.getElementById('resultTitle');
const resultDescription = document.getElementById('resultDescription');

// Inicializar quiz
function initQuiz() {
    showQuestion(currentQuestion);
}

// Mostrar pergunta
function showQuestion(index) {
    const question = quizData[index];
    
    const progress = ((index + 1) / quizData.length) * 100;
    progressBar.style.width = progress + '%';
    progressText.textContent = `${index + 1} / ${quizData.length}`;
    
    // Adicionar GIF de fundo à questão (exemplo, precisa de um GIF real)
    // questionImage.style.backgroundImage = `url('images/gifs/fogo_sutil.gif'), url('${question.image}')`; 
    // A linha acima é um exemplo, precisaria de um GIF e ajuste no CSS para múltiplos backgrounds
    questionImage.style.backgroundImage = `url('${question.image}')`;
    questionImage.innerHTML = ''; // Limpar GIFs anteriores se houver

    // Adicionar GIF específico para a pergunta 6 (exemplo)
    if (question.id === 6) {
        const gifOverlay = document.createElement('img');
        gifOverlay.src = 'images/gifs/explosao_surpresa.gif'; // Exemplo de GIF
        gifOverlay.style.position = 'absolute';
        gifOverlay.style.top = '0';
        gifOverlay.style.left = '0';
        gifOverlay.style.width = '100%';
        gifOverlay.style.height = '100%';
        gifOverlay.style.opacity = '0.7';
        // questionImage.appendChild(gifOverlay); // Descomentar se tiver o GIF
    }

    questionTitle.textContent = question.question;
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, answerIndex) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = answer.text;
        button.onclick = () => selectAnswer(answer.value, button);
        answersContainer.appendChild(button);
    });
}

// Selecionar resposta
function selectAnswer(value, button) {
    document.querySelectorAll('.answer-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
    userAnswers[currentQuestion] = value;
    
    // Adicionar pontos (exemplo simples, pode ser mais complexo)
    let pointsEarned = 0;
    if (value === 'D') pointsEarned = 20;
    else if (value === 'C') pointsEarned = 15;
    else if (value === 'B') pointsEarned = 10;
    else pointsEarned = 5;
    userPoints += pointsEarned;
    showPointsAnimation(pointsEarned);

    showIntermediateFeedback(currentQuestion + 1);
    setTimeout(() => {
        nextQuestion();
    }, 1200); // Aumentar um pouco o delay para o feedback e pontos
}

// Próxima pergunta
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion(currentQuestion);
    } else {
        showResult();
    }
}

// Mostrar resultado
function showResult() {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    userAnswers.forEach(answer => {
        if (answer) counts[answer]++;
    });
    
    const dominantProfile = Object.keys(counts).reduce((a, b) => 
        counts[a] > counts[b] ? a : b
    );
    const profile = profiles[dominantProfile];
    
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    resultTitle.textContent = profile.title;
    resultDescription.textContent = profile.description;
    
    showImageCarousel(dominantProfile);
    const practicalTips = getPracticalTips(dominantProfile);
    const tipsContainer = document.getElementById('practicalTips');
    if (tipsContainer) tipsContainer.innerHTML = practicalTips;
    
    const testimonial = getTestimonial(dominantProfile);
    const testimonialContainer = document.getElementById('testimonial');
    if (testimonialContainer) testimonialContainer.innerHTML = testimonial;
    
    startUrgencyTimer();
    updateTestCounter();
    addPoints(100); // Pontos por completar
    unlockAchievement("Autoconhecimento Brutal");
    
    progressBar.style.width = '100%';
    progressText.textContent = `Completo! Pontos: ${userPoints}`;
    localStorage.setItem('userProfile', dominantProfile);
}

// Capturar email
function captureEmail() {
    const email = document.getElementById('emailInput').value;
    const profile = localStorage.getItem('userProfile');
    
    if (email && email.includes('@')) {
        const profileEbookNames = {
            'A': 'O Mapa da Guerra Interior: Quebrando as Correntes do Medo',
            'B': 'O Protocolo Alfa: Da Consciência à Ação Implacável', 
            'C': 'A Forja do Guerreiro: Acelerando Sua Evolução Brutal',
            'D': 'O Legado do Imparável: Dominando Sua Realidade'
        };
        
        const ebookName = profileEbookNames[profile] || 'O Código da Transformação Suprema';
        
        alert(`🔥 E-book BRUTAL "${ebookName}" enviado para ${email}!\n\nVerifique sua caixa de entrada (e spam) AGORA.\n\nPrepare-se para uma sequência de 7 e-mails que vão esmagar sua mediocridade.`);
        
        addPoints(50);
        unlockAchievement("Arsenal Desbloqueado");
        document.getElementById('emailInput').value = '';
        document.querySelector('.email-capture').style.display = 'none';
        
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.innerHTML = `
            <h3>✅ ARSENAL ENVIADO!</h3>
            <p>Sua jornada para a brutalidade começou. Agora, clique no botão abaixo e DESTRUA suas limitações:</p>
        `;
        document.querySelector('.result-card').insertBefore(successMsg, document.querySelector('.cta-button'));
        
    } else {
        alert('Insira um e-mail de GUERREIRO, porra!');
    }
}

// Funções de gamificação (exemplos, precisam ser implementadas no HTML/CSS também)
function showIntermediateFeedback(questionNumber) {
    const feedbackMessages = [
        "Resposta registrada. Continue a jornada...",
        "Interessante... Sua mente está sendo mapeada.",
        "Cada resposta te aproxima da verdade.",
        "Não hesite. A brutalidade exige decisão.",
        "Mantenha o foco. A transformação está próxima.",
        "Essa foi profunda... O que mais você esconde?",
        "Quase lá. A revelação será impactante.",
        "Seus padrões estão ficando claros...",
        "Mais uma etapa vencida. Sinta a força.",
        "Última barreira. Prepare-se para o veredito."
    ];
    const feedback = document.createElement('div');
    feedback.className = 'intermediate-feedback';
    feedback.textContent = feedbackMessages[questionNumber - 1] || "Avançando...";
    document.body.appendChild(feedback);
    setTimeout(() => {
        document.body.removeChild(feedback);
    }, 2500); // Duração do feedback
}

function showPointsAnimation(points) {
    const pointsAnim = document.createElement('div');
    pointsAnim.className = 'points-animation';
    pointsAnim.textContent = `+${points} PTS`;
    document.body.appendChild(pointsAnim);
    setTimeout(() => {
        document.body.removeChild(pointsAnim);
    }, 1800);
}

function unlockAchievement(achievementName) {
    const achievementNotif = document.createElement('div');
    achievementNotif.className = 'achievement-notification';
    achievementNotif.innerHTML = `<span class="achievement-icon">🏆</span> <span class="achievement-text">Conquista: ${achievementName}!</span>`;
    document.body.appendChild(achievementNotif);
    setTimeout(() => {
        document.body.removeChild(achievementNotif);
    }, 3800);
}

function startUrgencyTimer() {
    let timeLeft = 15 * 60; // 15 minutos em segundos
    const timerElement = document.getElementById('urgencyTimer');
    if (!timerElement) return;

    const interval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(interval);
            timerElement.textContent = "TEMPO ESGOTADO!";
            // Poderia desabilitar o botão CTA ou mudar a oferta aqui
        }
    }, 1000);
}

function updateTestCounter() {
    const counterElement = document.getElementById('testCounter');
    if (!counterElement) return;
    let currentCount = parseInt(counterElement.textContent.replace(/\./g, '')) || 2847;
    currentCount += Math.floor(Math.random() * 5) + 1; // Incremento aleatório pequeno
    counterElement.textContent = currentCount.toLocaleString('pt-BR');
}

// Carrossel de Imagens (exemplo básico)
function showImageCarousel(profile) {
    const carouselContainer = document.getElementById('imageCarousel');
    if (!carouselContainer) return;

    const images = {
        "A": ["images/results/covarde1.png", "images/results/covarde2.png"],
        "B": ["images/results/fraco1.png", "images/results/fraco2.png"],
        "C": ["images/results/transformacao1.png", "images/results/transformacao2.png"],
        "D": ["images/results/brutal1.png", "images/results/brutal2.png"]
    };
    const profileImages = images[profile] || [];
    if (profileImages.length === 0) return;

    carouselContainer.innerHTML = ''; // Limpar anterior
    const wrapper = document.createElement('div');
    wrapper.className = 'carousel-wrapper';
    const imageDiv = document.createElement('div');
    imageDiv.className = 'carousel-image-container';
    const img = document.createElement('img');
    img.className = 'carousel-image';
    img.src = profileImages[0];
    imageDiv.appendChild(img);
    wrapper.appendChild(imageDiv);

    if (profileImages.length > 1) {
        const dotsDiv = document.createElement('div');
        dotsDiv.className = 'carousel-dots';
        profileImages.forEach((src, index) => {
            const dot = document.createElement('span');
            dot.className = 'dot' + (index === 0 ? ' active' : '');
            dot.onclick = () => {
                img.style.opacity = 0;
                setTimeout(() => {
                    img.src = profileImages[index];
                    img.style.opacity = 1;
                    document.querySelectorAll('.carousel-dots .dot').forEach(d => d.classList.remove('active'));
                    dot.classList.add('active');
                }, 500);
            };
            dotsDiv.appendChild(dot);
        });
        wrapper.appendChild(dotsDiv);
    }
    carouselContainer.appendChild(wrapper);
}

// Dicas e Testemunhos (mantidos como no original, mas podem ser expandidos)
function getPracticalTips(profile) {
    const tips = {
        "A": `
            <div class="practical-tips">
                <h3>AÇÕES DE GUERRA IMEDIATAS PARA VOCÊ (COVARDE OCULTO):</h3>
                <ul>
                    <li><strong>ESMAGUE 1 MEDO HOJE:</strong> Escolha a menor coisa que te apavora e FAÇA. Sem desculpas.</li>
                    <li><strong>DESTRUA 1 DISTRAÇÃO AGORA:</strong> Desinstale aquele app inútil. Bloqueie aquele site. Recupere seu foco.</li>
                    <li><strong>FORJE 1 RITUAL MATINAL DE PODER:</strong> 5 minutos. Olhe no espelho e declare: EU NÃO SOU MAIS UM FRACO.</li>
                </ul>
            </div>
        `,
        "B": `
            <div class="practical-tips">
                <h3>PROTOCOLO DE CHOQUE PARA VOCÊ (FRACO CONSCIENTE):</h3>
                <ul>
                    <li><strong>MAPEIE SEUS INIMIGOS INTERNOS:</strong> Anote quando e por que seus vícios te dominam. Conheça o inimigo.</li>
                    <li><strong>SUBSTITUA FRAQUEZA POR FORÇA:</strong> Troque 1 hora de vício por 30 minutos de treino BRUTAL. HOJE.</li>
                    <li><strong>DECLARE GUERRA À SUA MEDIOCRIDADE:</strong> Conte a UM homem de confiança sua decisão de mudar. Sem volta.</li>
                </ul>
            </div>
        `,
        "C": `
            <div class="practical-tips">
                <h3>DIRETRIZES DE AVANÇO PARA VOCÊ (EM TRANSFORMAÇÃO):</h3>
                <ul>
                    <li><strong>CELEBRE CADA VITÓRIA COMO UM LEÃO:</strong> Reconheça sua força. Cada passo é um massacre contra seu antigo eu.</li>
                    <li><strong>BLINDE SEU 'PORQUÊ':</strong> Escreva 3 MOTIVOS INEGOCIÁVEIS pelos quais você NUNCA MAIS voltará a ser fraco.</li>
                    <li><strong>BUSQUE ALIANÇAS DE AÇO:</strong> Conecte-se com homens que já venceram essa guerra. Modele a excelência.</li>
                </ul>
            </div>
        `,
        "D": `
            <div class="practical-tips">
                <h3>ORDENS DE COMANDO PARA VOCÊ (BRUTAL IMPARÁVEL):</h3>
                <ul>
                    <li><strong>ELEVE O PADRÃO. DE NOVO:</strong> O topo da montanha é a base da próxima. Defina desafios que te façam tremer.</li>
                    <li><strong>FORJE NOVOS GUERREIROS:</strong> Sua jornada inspira. Mentore outros homens. Deixe um legado de força.</li>
                    <li><strong>DOMINE SUA MISSÃO:</strong> Clareza ABSOLUTA sobre seu propósito. Impacto MASSIVO no mundo. Sem piedade.</li>
                </ul>
            </div>
        `
    };
    return tips[profile] || '';
}

function getTestimonial(profile) {
    const testimonials = {
        "A": `
            <div class="testimonial">
                <blockquote>
                    "Eu era um rato assustado. Vivia me escondendo. O Código Brutal me deu um tapa na cara e as ferramentas pra virar um leão. Se eu consegui, VOCÊ CONSEGUE."
                </blockquote>
                <cite>- Ricardo 'Ex-Covarde', 35 anos</cite>
            </div>
        `,
        "B": `
            <div class="testimonial">
                <blockquote>
                    "Sabia que tava na merda, mas não sabia como sair. Esse quiz foi o primeiro passo. Hoje, eu comando minha vida, não meus vícios. Acredite, a mudança é possível."
                </blockquote>
                <cite>- Fernando 'O Resiliente', 29 anos</cite>
            </div>
        `,
        "C": `
            <div class="testimonial">
                <blockquote>
                    "A jornada é dura, mas a recompensa é indescritível. Deixei de ser uma sombra pra me tornar a porra de um guerreiro. Continue lutando, a vitória é certa!"
                </blockquote>
                <cite>- André 'Em Ascensão', 31 anos</cite>
            </div>
        `,
        "D": `
            <div class="testimonial">
                <blockquote>
                    "Não existe limite pra quem decide ser imparável. O Código Brutal é só o começo. Use cada palavra, cada desafio, pra construir um império. Nos vemos no topo."
                </blockquote>
                <cite>- 'Comandante' Silva, 42 anos</cite>
            </div>
        `
    };
    return testimonials[profile] || '';
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', initQuiz);


