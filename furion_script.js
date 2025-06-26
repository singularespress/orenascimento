// Estado do quiz
let currentPhase = 1;
const totalPhases = 8;

// Links dos e-books personalizados
const ebookLinks = {
    "guerreiro_brutal": "https://drive.google.com/file/d/1u7zjosQyp9URTy2xzcol6n1F0zJqlz_D/view?usp=sharing",
    "fraco_consciente": "https://drive.google.com/file/d/10V10YHnXEre9r7Dg_Y48gCKZXn08Mmgq/view?usp=sharing",
    "estrategista_sombrio": "https://drive.google.com/file/d/1Te1YIQIBwxCqfGsDo10ZwATDDaAzA0wo/view?usp=sharing",
    "em_transformacao": "https://drive.google.com/file/d/1Nf_LxDpizdEDOgkoxJYyYz3BqFK7S7ap/view?usp=sharing",
    "covarde_oculto": "https://drive.google.com/file/d/1NCYEsGs0xXROSx6Cbs4HEfHdT6D1Hptc/view?usp=sharing",
    "brutal_imparavel": "https://drive.google.com/file/d/1CwqfwfyQNBmS4yhcPpMHNeWcNYMHEmGW/view?usp=sharing"
};

// Elementos DOM
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

// Inicializar o quiz
function initQuiz() {
    updateProgress();
    startCountdown();
    
    // Adicionar eventos de teclado para navegação
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight' || event.key === 'Enter') {
            nextPhase();
        } else if (event.key === 'ArrowLeft') {
            previousPhase();
        }
    });
}

// Atualizar barra de progresso
function updateProgress() {
    const progress = (currentPhase / totalPhases) * 100;
    progressBar.style.width = progress + '%';
    progressText.textContent = `${currentPhase} / ${totalPhases}`;
}

// Avançar para próxima fase
function nextPhase() {
    if (currentPhase < totalPhases) {
        // Ocultar fase atual
        const currentSection = document.getElementById(`phase${currentPhase}`);
        currentSection.classList.remove('active');
        
        // Avançar para próxima fase
        currentPhase++;
        
        // Mostrar próxima fase
        const nextSection = document.getElementById(`phase${currentPhase}`);
        nextSection.classList.add('active');
        
        // Atualizar progresso
        updateProgress();
        
        // Adicionar efeito de transição
        nextSection.style.animation = 'fadeIn 0.8s ease-in-out';
        
        // Scroll para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Executar ações específicas da fase
        executePhaseActions();
    }
}

// Voltar para fase anterior
function previousPhase() {
    if (currentPhase > 1) {
        // Ocultar fase atual
        const currentSection = document.getElementById(`phase${currentPhase}`);
        currentSection.classList.remove('active');
        
        // Voltar para fase anterior
        currentPhase--;
        
        // Mostrar fase anterior
        const previousSection = document.getElementById(`phase${currentPhase}`);
        previousSection.classList.add('active');
        
        // Atualizar progresso
        updateProgress();
        
        // Scroll para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Executar ações específicas de cada fase
function executePhaseActions() {
    switch(currentPhase) {
        case 2:
            animateStats();
            break;
        case 3:
            animateVisionItems();
            break;
        case 4:
            animateTestimonials();
            break;
        case 5:
            animateMethodSteps();
            break;
        case 6:
            animateOffer();
            break;
        case 7:
            animateObjections();
            break;
        case 8:
            startFinalCountdown();
            break;
    }
}

// Animações específicas das fases
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach((stat, index) => {
        setTimeout(() => {
            stat.style.animation = 'pulse 0.5s ease-in-out';
        }, index * 200);
    });
}

function animateVisionItems() {
    const visionItems = document.querySelectorAll('.vision-item');
    visionItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = 'fadeIn 0.6s ease-in-out';
        }, index * 300);
    });
}

function animateTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
            testimonial.style.animation = 'fadeIn 0.6s ease-in-out';
        }, index * 400);
    });
}

function animateMethodSteps() {
    const steps = document.querySelectorAll('.step-item');
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.style.animation = 'fadeIn 0.5s ease-in-out';
        }, index * 250);
    });
}

function animateOffer() {
    const productImage = document.querySelector('.product-image');
    const productDetails = document.querySelector('.product-details');
    
    setTimeout(() => {
        productImage.style.animation = 'fadeIn 0.8s ease-in-out';
    }, 200);
    
    setTimeout(() => {
        productDetails.style.animation = 'fadeIn 0.8s ease-in-out';
    }, 600);
}

function animateObjections() {
    const objections = document.querySelectorAll('.objection-item');
    objections.forEach((objection, index) => {
        setTimeout(() => {
            objection.style.animation = 'fadeIn 0.6s ease-in-out';
        }, index * 300);
    });
}

// Countdown timer para urgência
function startCountdown() {
    let timeLeft = 15 * 60; // 15 minutos em segundos
    
    const interval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        if (minutesElement && secondsElement) {
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
        }
        
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(interval);
            if (minutesElement && secondsElement) {
                minutesElement.textContent = "00";
                secondsElement.textContent = "00";
            }
        }
    }, 1000);
}

// Countdown final mais intenso
function startFinalCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.style.animation = 'pulse 1s infinite';
    }
}

// Redirecionar para checkout
function redirectToCheckout() {
    // Mostrar mensagem de redirecionamento
    showNotification('Redirecionando para o checkout...', 'success');
    
    // Redirecionar após 1 segundo
    setTimeout(() => {
        window.open('https://pay.kiwify.com.br/8ex04Xk', '_blank');
    }, 1000);
}

// Download do e-book personalizado
function downloadPersonalizedEbook() {
    // Determinar perfil baseado na fase atual ou preferência
    const profile = determineUserProfile();
    const ebookUrl = ebookLinks[profile];
    
    if (ebookUrl) {
        // Mostrar mensagem de parabéns
        showNotification('Parabéns! Você deu o primeiro passo para a transformação!', 'success');
        
        // Abrir o link do e-book
        setTimeout(() => {
            window.open(ebookUrl, '_blank');
        }, 1500);
    } else {
        showNotification('E-book não disponível no momento. Tente novamente.', 'error');
    }
}

// Determinar perfil do usuário (simplificado para este exemplo)
function determineUserProfile() {
    // Por enquanto, retorna um perfil aleatório
    // Em uma implementação real, isso seria baseado nas respostas do usuário
    const profiles = Object.keys(ebookLinks);
    const randomIndex = Math.floor(Math.random() * profiles.length);
    return profiles[randomIndex];
}

// Sistema de notificações
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-text">${message}</span>
        </div>
    `;
    
    // Adicionar estilos
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${getNotificationColor(type)};
        color: #ffffff;
        padding: 20px 30px;
        border-radius: 15px;
        font-size: 1.1rem;
        font-weight: bold;
        z-index: 10000;
        animation: fadeInOut 3s ease-in-out;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        max-width: 90%;
        text-align: center;
    `;
    
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            document.body.removeChild(notification);
        }
    }, 3000);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return '🎉';
        case 'error': return '⚠️';
        case 'warning': return '⚡';
        default: return 'ℹ️';
    }
}

function getNotificationColor(type) {
    switch(type) {
        case 'success': return 'linear-gradient(135deg, #28a745, #20c997)';
        case 'error': return 'linear-gradient(135deg, #dc3545, #c82333)';
        case 'warning': return 'linear-gradient(135deg, #ffc107, #e0a800)';
        default: return 'linear-gradient(135deg, #17a2b8, #138496)';
    }
}

// Funcionalidades de gamificação
function addPointsAnimation(points) {
    const pointsElement = document.createElement('div');
    pointsElement.className = 'points-animation';
    pointsElement.textContent = `+${points} PTS`;
    pointsElement.style.cssText = `
        position: fixed;
        top: 20%;
        right: 20px;
        background: linear-gradient(45deg, #dc143c, #8b0000);
        color: #ffffff;
        padding: 10px 15px;
        border-radius: 20px;
        font-weight: bold;
        z-index: 1000;
        animation: slideInRight 2s ease-out;
        font-size: 0.9rem;
    `;
    
    document.body.appendChild(pointsElement);
    
    setTimeout(() => {
        if (pointsElement.parentNode) {
            document.body.removeChild(pointsElement);
        }
    }, 2000);
}

// Adicionar CSS para animações via JavaScript
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
        
        @keyframes slideInRight {
            0% { 
                transform: translateX(100px);
                opacity: 0;
            }
            20% { 
                transform: translateX(0);
                opacity: 1;
            }
            80% { 
                transform: translateX(0);
                opacity: 1;
            }
            100% { 
                transform: translateX(100px);
                opacity: 0;
            }
        }
        
        .notification {
            pointer-events: none;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .notification-icon {
            font-size: 1.5rem;
        }
    `;
    document.head.appendChild(style);
}

// Tracking de eventos (para analytics)
function trackEvent(eventName, eventData = {}) {
    // Aqui você pode integrar com Google Analytics, Facebook Pixel, etc.
    console.log('Event tracked:', eventName, eventData);
    
    // Exemplo de integração com Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, eventData);
    }
    
    // Exemplo de integração com Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

// Funcionalidades de compartilhamento social
function shareOnSocial(platform) {
    const url = window.location.href;
    const text = "Descobri meu perfil de masculinidade no CÓDIGO BRUTAL! Descubra o seu também:";
    
    let shareUrl = "";
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
        trackEvent('social_share', { platform: platform });
    }
}

// Salvar progresso no localStorage
function saveProgress() {
    const progressData = {
        currentPhase: currentPhase,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
    };
    
    localStorage.setItem('furion_quiz_progress', JSON.stringify(progressData));
}

// Carregar progresso do localStorage
function loadProgress() {
    const savedProgress = localStorage.getItem('furion_quiz_progress');
    
    if (savedProgress) {
        try {
            const progressData = JSON.parse(savedProgress);
            const savedTime = new Date(progressData.timestamp);
            const currentTime = new Date();
            const timeDiff = currentTime - savedTime;
            
            // Se foi salvo há menos de 1 hora, restaurar progresso
            if (timeDiff < 3600000) { // 1 hora em milissegundos
                currentPhase = progressData.currentPhase;
                
                // Mostrar fase salva
                document.querySelectorAll('.phase-section').forEach(section => {
                    section.classList.remove('active');
                });
                
                const savedSection = document.getElementById(`phase${currentPhase}`);
                if (savedSection) {
                    savedSection.classList.add('active');
                    updateProgress();
                }
                
                showNotification('Progresso restaurado!', 'info');
            }
        } catch (error) {
            console.error('Erro ao carregar progresso:', error);
        }
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    initQuiz();
    addAnimationStyles();
    loadProgress();
    
    // Salvar progresso a cada mudança de fase
    const originalNextPhase = nextPhase;
    nextPhase = function() {
        originalNextPhase();
        saveProgress();
        trackEvent('phase_advance', { phase: currentPhase });
    };
    
    // Tracking de tempo na página
    let startTime = Date.now();
    
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        trackEvent('time_on_page', { seconds: timeSpent, phase: currentPhase });
    });
    
    // Tracking de cliques nos botões
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('continue-btn')) {
            trackEvent('button_click', { 
                button: 'continue',
                phase: currentPhase 
            });
        } else if (event.target.classList.contains('main-cta-btn')) {
            trackEvent('button_click', { 
                button: 'main_cta',
                phase: currentPhase 
            });
        } else if (event.target.classList.contains('bonus-btn')) {
            trackEvent('button_click', { 
                button: 'bonus_download',
                phase: currentPhase 
            });
        }
    });
});

// Detectar saída da página (exit intent)
let exitIntentShown = false;

document.addEventListener('mouseleave', function(event) {
    if (event.clientY <= 0 && !exitIntentShown && currentPhase < totalPhases) {
        exitIntentShown = true;
        showExitIntent();
    }
});

function showExitIntent() {
    const exitModal = document.createElement('div');
    exitModal.className = 'exit-intent-modal';
    exitModal.innerHTML = `
        <div class="exit-modal-content">
            <h2>Espere! Não vá embora ainda...</h2>
            <p>Você está prestes a descobrir o segredo que pode transformar sua vida completamente.</p>
            <div class="exit-modal-buttons">
                <button onclick="continueQuiz()" class="stay-btn">CONTINUAR DESCOBERTA</button>
                <button onclick="closeExitModal()" class="leave-btn">Sair mesmo assim</button>
            </div>
        </div>
        <div class="exit-modal-overlay" onclick="closeExitModal()"></div>
    `;
    
    exitModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(exitModal);
    trackEvent('exit_intent_shown', { phase: currentPhase });
}

function continueQuiz() {
    const modal = document.querySelector('.exit-intent-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
    trackEvent('exit_intent_stayed', { phase: currentPhase });
}

function closeExitModal() {
    const modal = document.querySelector('.exit-intent-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
    trackEvent('exit_intent_left', { phase: currentPhase });
}

// Adicionar estilos para o modal de exit intent
const exitIntentStyles = `
    .exit-modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
    }
    
    .exit-modal-content {
        background: linear-gradient(135deg, #1a1a1a, #2a0a0a);
        border: 2px solid #dc143c;
        border-radius: 20px;
        padding: 40px;
        max-width: 500px;
        text-align: center;
        position: relative;
        z-index: 10001;
        color: #ffffff;
    }
    
    .exit-modal-content h2 {
        color: #dc143c;
        font-size: 1.8rem;
        margin-bottom: 20px;
        font-weight: 900;
    }
    
    .exit-modal-content p {
        font-size: 1.1rem;
        line-height: 1.5;
        margin-bottom: 30px;
        color: #cccccc;
    }
    
    .exit-modal-buttons {
        display: flex;
        gap: 15px;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .stay-btn {
        background: linear-gradient(45deg, #dc143c, #8b0000);
        border: none;
        color: #ffffff;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        font-size: 0.9rem;
    }
    
    .stay-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(220, 20, 60, 0.4);
    }
    
    .leave-btn {
        background: transparent;
        border: 1px solid #666;
        color: #cccccc;
        padding: 15px 25px;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.9rem;
    }
    
    .leave-btn:hover {
        border-color: #999;
        color: #ffffff;
    }
`;

// Adicionar estilos do exit intent
const exitStyleElement = document.createElement('style');
exitStyleElement.textContent = exitIntentStyles;
document.head.appendChild(exitStyleElement);

