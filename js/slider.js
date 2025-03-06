let buttons = document.querySelectorAll(".slider-button");
let counter = 1;
const slidesContainer = document.querySelector(".slider-parent");
const slides = slidesContainer.children;
const indicators = document.querySelectorAll(".indicator");

function updateIndicator() {
 indicators.forEach((indicator, index) => {
  if (index + 1 === counter) {
   indicator.classList.add("active");
  } else {
   indicator.classList.remove("active");
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

// Inicializa o indicador ativo
updateIndicator();
