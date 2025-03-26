const prevButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");
const slides = document.querySelectorAll("[data-carousel-item]");
const indicators = document.querySelectorAll("[data-carousel-slide-to]");

let currentIndex = 0;

// Função para mostrar o slide atual
function showSlide(index) {
 // Garantir que o índice esteja dentro dos limites do carrossel
 if (index < 0) {
  currentIndex = slides.length - 1;
 } else if (index >= slides.length) {
  currentIndex = 0;
 } else {
  currentIndex = index;
 }

 // Ocultar todos os slides e resetar indicadores
 slides.forEach((slide, idx) => {
  slide.classList.add("hidden"); // Oculta o slide
  indicators[idx].classList.remove("bg-slate-200/50"); // Remove estilos dos indicadores
  indicators[idx].classList.add("bg-slate-900/30"); // Coloca um estilo padrão nos indicadores
  indicators[idx].setAttribute("aria-current", "false"); // Atualiza o atributo do indicador
 });

 // Mostrar o slide atual
 slides[currentIndex].classList.remove("hidden");
 indicators[currentIndex].classList.remove("bg-slate-900/30");
 indicators[currentIndex].classList.add("bg-slate-200/50"); // Atualiza o estilo do indicador ativo
 indicators[currentIndex].setAttribute("aria-current", "true");
}

// Navegar para o próximo slide
nextButton.addEventListener("click", () => {
 showSlide(currentIndex + 1);
});

// Navegar para o slide anterior
prevButton.addEventListener("click", () => {
 showSlide(currentIndex - 1);
});

// Navegar para um slide específico ao clicar no indicador
indicators.forEach((indicator, idx) => {
 indicator.addEventListener("click", () => {
  showSlide(idx);
 });
});

// Inicializar o carrossel mostrando o primeiro slide
showSlide(currentIndex);
