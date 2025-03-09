const slider = document.getElementById("slider");
const indicators = document.querySelectorAll(".indicator");
const slides = document.querySelectorAll(".slide");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
 isDown = true;
 startX = e.pageX - slider.offsetLeft;
 scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => (isDown = false));
slider.addEventListener("mouseup", () => (isDown = false));

slider.addEventListener("mousemove", (e) => {
 if (!isDown) return;
 e.preventDefault();
 const x = e.pageX - slider.offsetLeft;
 const walk = (x - startX) * 2;
 slider.scrollLeft = scrollLeft - walk;
});

// Atualiza os indicadores com base na posição do scroll
slider.addEventListener("scroll", () => {
 const index = Math.round(slider.scrollLeft / slider.clientWidth);
 updateIndicators(index);
});

function updateIndicators(index) {
 // Reseta o estilo de todos os indicadores
 indicators.forEach((indicator) => indicator.classList.remove("bg-gray-600"));
 // Atualiza o indicador correspondente
 indicators[index].classList.add("bg-gray-600");
}
