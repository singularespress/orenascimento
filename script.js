// Dados do quiz - Expandindo para 10 perguntas completas
const quizData = [
    {
        id: 1,
        question: "Qual mentira você ainda conta a si mesmo sobre sua fraqueza?",
        image: "images/q1_batalha_interna.png",
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
        question: "Qual vício te domina mais profundamente?",
        image: "images/q3_vicios.png",
        answers: [
            { text: "Procrastinação - sempre deixo para depois.", value: "A" },
            { text: "Pornografia ou masturbação excessiva.", value: "B" },
            { text: "Álcool, drogas ou outros vícios químicos.", value: "C" },
            { text: "Já superei meus vícios principais.", value: "D" }
        ]
    },
    {
        id: 4,
        question: "Como você se sente em relação à sua vida sexual?",
        image: "images/q4_vida_sexual.png",
        answers: [
            { text: "Insatisfeito e com baixa autoestima.", value: "A" },
            { text: "Dependente de fantasias irreais.", value: "B" },
            { text: "Em processo de melhoria.", value: "C" },
            { text: "Confiante e satisfeito.", value: "D" }
        ]
    },
    {
        id: 5,
        question: "Como você lida com seus medos e desafios?",
        image: "images/q5_desafios_medos.png",
        answers: [
            { text: "Evito e procrastino.", value: "A" },
            { text: "Enfrento, mas com muito sofrimento.", value: "B" },
            { text: "Busco ajuda e estratégias.", value: "C" },
            { text: "Encaro de frente com determinação.", value: "D" }
        ]
    },
    {
        id: 6,
        question: "Qual filme de guerra mais te inspira?",
        image: "images/q6_filme_guerra.png",
        answers: [
            { text: "Não gosto de filmes de guerra.", value: "A" },
            { text: "300 - pela coragem dos espartanos.", value: "B" },
            { text: "O Resgate do Soldado Ryan - pela honra.", value: "C" },
            { text: "Gladiador - pela força e determinação.", value: "D" }
        ]
    },
    {
        id: 7,
        question: "Como é seu relacionamento com as mulheres?",
        image: "images/q7_relacionamento_mulheres.png",
        answers: [
            { text: "Tenho dificuldades e inseguranças.", value: "A" },
            { text: "Sou carente e dependente emocionalmente.", value: "B" },
            { text: "Estou aprendendo a ser mais confiante.", value: "C" },
            { text: "Sou respeitado e tenho relacionamentos saudáveis.", value: "D" }
        ]
    },
    {
        id: 8,
        question: "Quando você se sente fraco ou vulnerável, o que faz?",
        image: "images/q8_fraco_vulneravel.png",
        answers: [
            { text: "Me escondo e evito responsabilidades.", value: "A" },
            { text: "Busco vícios para escapar da realidade.", value: "B" },
            { text: "Procuro ajuda e trabalho na melhoria.", value: "C" },
            { text: "Uso isso como combustível para crescer.", value: "D" }
        ]
    },
    {
        id: 9,
        question: "Qual sua atitude em relação ao crescimento pessoal?",
        image: "images/q9_crescimento_pessoal.png",
        answers: [
            { text: "Acho que é perda de tempo.", value: "A" },
            { text: "Tenho interesse, mas não pratico.", value: "B" },
            { text: "Estou ativamente me desenvolvendo.", value: "C" },
            { text: "É minha prioridade número um.", value: "D" }
        ]
    },
    {
        id: 10,
        question: "O que significa ser um homem de verdade para você?",
        image: "images/q10_homem_de_verdade.png",
        answers: [
            { text: "Não sei ao certo.", value: "A" },
            { text: "Ser forte fisicamente.", value: "B" },
            { text: "Ter responsabilidade e caráter.", value: "C" },
            { text: "Dominar a si mesmo completamente.", value: "D" }
        ]
    }
];

// Perfis emocionais atualizados
const profiles = {
    "A": {
        title: "O COVARDE OCULTO",
        description: "Você evita o confronto, se esconde atrás de desculpas e procrastinação. Sente-se paralisado pelo medo e pela insegurança, preferindo a zona de conforto à verdadeira transformação. É passivo e evita responsabilidades, o que o leva a uma vida de frustração e arrependimento. Mas ainda há tempo para mudar essa realidade.",
        image: "images/profiles/carousel_covarde_1.png",
        ebookUrl: "https://drive.google.com/file/d/1NCYEsGs0xXROSx6Cbs4HEfHdT6D1Hptc/view?usp=sharing"
    },
    "B": {
        title: "O FRACO CONSCIENTE", 
        description: "Você reconhece suas fraquezas e vícios, mas ainda luta para superá-los. Tem consciência de suas dores e limitações, mas lhe falta a força de vontade ou o direcionamento para agir. Pode se sentir preso em um ciclo de tentativas e falhas, buscando uma saída, mas sem encontrar o caminho. O primeiro passo é reconhecer - agora é hora de agir.",
        image: "images/profiles/criativo_estatico.png",
        ebookUrl: "https://drive.google.com/file/d/10V10YHnXEre9r7Dg_Y48gCKZXn08Mmgq/view?usp=sharing"
    },
    "C": {
        title: "O EM TRANSFORMAÇÃO",
        description: "Você está ativamente buscando a mudança. Já deu os primeiros passos para superar seus vícios e fraquezas, e está comprometido com o processo de autodesenvolvimento. Enfrenta desafios com coragem, aprende com seus erros e busca constantemente se tornar a melhor versão de si mesmo. Está em uma jornada de renascimento.",
        image: "images/profiles/criativo_estatico.png",
        ebookUrl: "https://drive.google.com/file/d/1Nf_LxDpizdEDOgkoxJYyYz3BqFK7S7ap/view?usp=sharing"
    },
    "D": {
        title: "O BRUTAL IMPARÁVEL",
        description: "Você transcendeu suas limitações e se tornou mestre de si mesmo. É disciplinado, focado e implacável em seus objetivos. Enfrenta qualquer obstáculo com determinação, transformando dor em poder. Lidera pelo exemplo, inspira outros e vive uma vida de propósito e controle. É a personificação da virilidade e da força interior.",
        image: "images/profiles/criativo_estatico.png",
        ebookUrl: "https://drive.google.com/file/d/1CwqfwfyQNBmS4yhcPpMHNeWcNYMHEmGW/view?usp=sharing"
    }
};

// Mapeamento adicional para perfis específicos
const profileMapping = {
    "guerreiro_brutal": "https://drive.google.com/file/d/1u7zjosQyp9URTy2xzcol6n1F0zJqlz_D/view?usp=sharing",
    "estrategista_sombrio": "https://drive.google.com/file/d/1Te1YIQIBwxCqfGsDo10ZwATDDaAzA0wo/view?usp=sharing"
};

// Estado do quiz
let currentQuestion = 0;
let userAnswers = [];
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
    
    questionImage.style.backgroundImage = `url('${question.image}')`;
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
    
    // Adicionar pontos
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
    }, 1200);
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
    showPracticalTips(dominantProfile);
    showTestimonial(dominantProfile);
    
    startUrgencyTimer();
    updateTestCounter();
    unlockAchievement('Autoconhecimento Brutal');
    
    progressBar.style.width = '100%';
    progressText.textContent = `Completo! Pontos: ${userPoints}`;
    localStorage.setItem('userProfile', dominantProfile);
}

// Funções de gamificação
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
    }, 2500);
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
    achievementNotif.innerHTML = `<span class='achievement-icon'>🏆</span> <span class='achievement-text'>Conquista: ${achievementName}!</span>`;
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
        }
    }, 1000);
}

function updateTestCounter() {
    const counterElement = document.getElementById('testCounter');
    if (!counterElement) return;
    let currentCount = parseInt(counterElement.textContent.replace(/\./g, ''));
    setInterval(() => {
        currentCount += Math.floor(Math.random() * 3) + 1;
        counterElement.textContent = currentCount.toLocaleString('pt-BR');
    }, 5000);
}

// Funções de compartilhamento social
function shareResult(platform) {
    const profile = profiles[localStorage.getItem('userProfile')];
    if (!profile) return;
    
    const quizUrl = window.location.href;
    const shareText = `Acabei de descobrir meu perfil de masculinidade no quiz "Instinto - O Renascimento"! Meu perfil é: ${profile.title}. Descubra o seu também:`;

    let url = "";
    switch (platform) {
        case "facebook":
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(quizUrl)}&quote=${encodeURIComponent(shareText)}`;
            break;
        case "whatsapp":
            url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + quizUrl)}`;
            break;
        case "twitter":
            url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(quizUrl)}`;
            break;
        default:
            console.log("Plataforma de compartilhamento não reconhecida.");
            return;
    }
    window.open(url, '_blank');
}

// Função para download do e-book personalizado
function downloadPersonalizedEbook() {
    const userProfile = localStorage.getItem('userProfile');
    const profile = profiles[userProfile];
    
    if (profile && profile.ebookUrl) {
        // Mostrar mensagem de parabéns
        const congratsMessage = document.createElement('div');
        congratsMessage.className = 'achievement-notification';
        congratsMessage.innerHTML = `
            <span class='achievement-icon'>🎉</span> 
            <span class='achievement-text'>Parabéns! Você deu o primeiro passo para a transformação!</span>
        `;
        document.body.appendChild(congratsMessage);
        
        setTimeout(() => {
            document.body.removeChild(congratsMessage);
        }, 4000);
        
        // Abrir o link do e-book
        window.open(profile.ebookUrl, '_blank');
    } else {
        alert('E-book não disponível para este perfil.');
    }
}

// Funções auxiliares
function showImageCarousel(profileKey) {
    const carouselContainer = document.getElementById('imageCarousel');
    if (!carouselContainer) return;

    const profile = profiles[profileKey];
    if (profile && profile.image) {
        carouselContainer.innerHTML = `
            <div class="carousel-wrapper">
                <div class="carousel-image-container">
                    <img src="${profile.image}" alt="${profile.title}" class="carousel-image">
                </div>
            </div>
        `;
    }
}

function showPracticalTips(profileKey) {
    const tipsContainer = document.getElementById('practicalTips');
    if (!tipsContainer) return;
    
    const tips = {
        "A": [
            "Comece com pequenas ações diárias",
            "Defina metas claras e alcançáveis", 
            "Busque um mentor ou grupo de apoio",
            "Pratique exercícios físicos regularmente"
        ],
        "B": [
            "Reconheça seus padrões destrutivos",
            "Substitua vícios por hábitos saudáveis",
            "Procure ajuda profissional se necessário",
            "Celebre pequenas vitórias"
        ],
        "C": [
            "Continue investindo em seu desenvolvimento",
            "Mantenha a disciplina e consistência",
            "Compartilhe sua jornada com outros",
            "Estabeleça novos desafios"
        ],
        "D": [
            "Seja um exemplo para outros homens",
            "Continue refinando suas habilidades",
            "Mentore outros em transformação",
            "Mantenha-se sempre em evolução"
        ]
    };
    
    const profileTips = tips[profileKey] || [];
    tipsContainer.innerHTML = `
        <div class="practical-tips">
            <h3>Dicas Práticas para ${profiles[profileKey].title}:</h3>
            <ul>
                ${profileTips.map(tip => `<li><strong>•</strong> ${tip}</li>`).join('')}
            </ul>
        </div>
    `;
}

function showTestimonial(profileKey) {
    const testimonialContainer = document.getElementById('testimonial');
    if (!testimonialContainer) return;
    
    const testimonials = {
        "A": {
            text: "Eu era exatamente como você. Vivia adiando, fazendo desculpas. O Código Brutal me deu a estrutura que eu precisava para finalmente agir.",
            author: "Carlos M., 34 anos"
        },
        "B": {
            text: "Reconhecia meus problemas, mas não sabia como resolver. Este método me mostrou o caminho prático para a mudança real.",
            author: "Roberto S., 28 anos"
        },
        "C": {
            text: "Já estava no caminho, mas o Código acelerou minha transformação de forma impressionante. Recomendo para todo homem.",
            author: "André L., 31 anos"
        },
        "D": {
            text: "Mesmo sendo disciplinado, sempre há espaço para evolução. Este sistema me levou a um novo patamar de excelência.",
            author: "Marcos T., 38 anos"
        }
    };
    
    const testimonial = testimonials[profileKey];
    if (testimonial) {
        testimonialContainer.innerHTML = `
            <div class="testimonial">
                <blockquote>"${testimonial.text}"</blockquote>
                <cite>- ${testimonial.author}</cite>
            </div>
        `;
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
});

