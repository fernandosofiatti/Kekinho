// VARIÁVEIS GLOBAIS
let slideIndex = 0; // Índice inicial do carrossel Tavares
const CAROUSEL_ID = 'carouselTavares';

// FUNÇÃO PRINCIPAL PARA MOSTRAR OS SLIDES
function showSlides(n) {
    let carousel = document.getElementById(CAROUSEL_ID);
    if (!carousel) return; // Sai se o carrossel não existir (segurança)

    let slides = carousel.getElementsByClassName("carousel-item");
    if (slides.length === 0) return;

    // Atualiza o slideIndex com base na direção (n = 1 ou n = -1)
    if (n !== undefined) {
        slideIndex += n;
    }
    
    // Lógica de loop: se passar do fim, volta para o início; se voltar do início, vai para o fim
    if (slideIndex >= slides.length) { 
        slideIndex = 0; 
    }    
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; 
    }

    // 1. Esconde todos os vídeos e pausa a reprodução
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        let video = slides[i].querySelector('video');
        if (video) {
            video.pause();
            // Volta o vídeo para o início ao pausar, para a próxima vez que ele for exibido
            video.currentTime = 0;
        }
    }

    // 2. Mostra o vídeo atual e inicia a reprodução
    slides[slideIndex].classList.add('active');
    let currentVideo = slides[slideIndex].querySelector('video');
    if (currentVideo) {
        currentVideo.play();
    }
}

// FUNÇÃO QUE ADICIONA ESCUTADORES DE EVENTOS AOS BOTÕES
function setupCarouselControls() {
    let carousel = document.getElementById(CAROUSEL_ID);
    if (!carousel) return;

    // Adiciona o escutador de evento para todos os botões no container
    carousel.querySelector('.carousel-controls').addEventListener('click', function(event) {
        let button = event.target.closest('button');
        if (button) {
            let direction = parseInt(button.getAttribute('data-direction'));
            if (!isNaN(direction)) {
                showSlides(direction);
            }
        }
    });
}


// Inicializa o carrossel quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o carrossel (n = 0 para mostrar o primeiro sem mudar o índice)
    showSlides(0); 
    // Configura a lógica de clique dos botões
    setupCarouselControls();
});