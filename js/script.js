// VARIÁVEIS GLOBAIS
let slideIndex = 0; // Índice inicial do carrossel Tavares

// FUNÇÃO PARA MOSTRAR OS VÍDEOS
function showSlides() {
    let i;
    // Pega todos os itens do carrossel da Expedição Tavares
    let slides = document.getElementById("carouselTavares").getElementsByClassName("carousel-item");
    
    // Se não houver slides, a função para
    if (slides.length === 0) return;

    // Reseta o slideIndex se for maior que o número de slides
    if (slideIndex >= slides.length) { 
        slideIndex = 0; // Volta para o primeiro vídeo
    }    
    // Reseta o slideIndex se for menor que 0
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Vai para o último vídeo
    }

    // Esconde todos os vídeos
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        // Pausa o vídeo antes de mudar
        slides[i].querySelector('video').pause();
    }

    // Mostra o vídeo atual e o coloca para rodar
    slides[slideIndex].classList.add('active');
    slides[slideIndex].querySelector('video').play();
}

// FUNÇÃO CHAMADA PELO BOTÃO NEXT
function nextVideo() {
    slideIndex++;
    showSlides();
}

// FUNÇÃO CHAMADA PELO BOTÃO PREV
function prevVideo() {
    slideIndex--;
    showSlides();
}

// Inicializa o carrossel quando a página carregar
document.addEventListener('DOMContentLoaded', (event) => {
    showSlides(); 
});