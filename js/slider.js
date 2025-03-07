let buttons = document.querySelectorAll(".slider-button");
let counter = 1;
const slidesContainer = document.querySelector(".slider-parent");
const slides = slidesContainer.children;
const indicators = document.querySelectorAll(".indicator");

function updateIndicator() {
 indicators.forEach((indicator, index) => {
  if (index + 1 === counter) {
   indicator.classList.add("bg-slate-200");
   indicator.classList.remove("bg-gray-400");
  } else {
   indicator.classList.add("bg-gray-400");
   indicator.classList.remove("bg-slate-200");
  }
 });
}

buttons.forEach((button) => {
 button.addEventListener("click", (event) => {
  event.preventDefault(); // Previne o comportamento padrão do link

  if (button.classList.contains("next")) {
   counter++;
   if (counter > slides.length) {
    counter = 1;
   }
  } else if (button.classList.contains("back")) {
   counter--;
   if (counter < 1) {
    counter = slides.length;
   }
  }

  // Atualiza a posição de rolagem do slider
  slidesContainer.scrollTo({
   left: (counter - 1) * slides[0].offsetWidth,
   behavior: "smooth",
  });

  // Atualiza os indicadores
  updateIndicator();
 });
});

// Adiciona evento de clique nas bolinhas para trocar de slide
indicators.forEach((indicator, index) => {
 indicator.addEventListener("click", () => {
  counter = index + 1;
  slidesContainer.scrollTo({
   left: index * slides[0].offsetWidth,
   behavior: "smooth",
  });
  updateIndicator();
 });
});

// Inicializa o indicador ativo
updateIndicator();
