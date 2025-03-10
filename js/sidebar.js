// Array de itens para a sidebar
const sidebarItems = [
 { id: 1, icon: "fa-book", text: "Colégio" },
 { id: 2, icon: "fa-newspaper", text: "Notícias" },
 { id: 3, icon: "fa-pen-ruler", text: "Cursos" },
 { id: 3, icon: "fa-signature", text: "Inscrições" },
 { id: 3, icon: "fa-headset", text: "Contato" },
 { id: 3, icon: "fa-bars", text: "Menu" },
];

function renderSidebar() {
 const ulElement = document.getElementById("sidebar-list");

 // Seleciona apenas os itens da sidebar (não a logo)
 const existingLogo = ulElement.querySelector("li:first-child").outerHTML;

 // Cria os novos itens sem sobrescrever a logo
 const newItems = sidebarItems
  .map((item) => {
   return `
        <li class="border-b-[1.5px] border-slate-200">
          <a href="#" class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-200 transition duration-200 space-y-2">
            <i class="fa-solid ${item.icon} text-4xl"></i>
            <span class="text-xs font-semibold text-wrap">${item.text}</span>
          </a>
        </li>
      `;
  })
  .join("");

 // Atualiza a lista mantendo a logo
 ulElement.innerHTML = existingLogo + newItems;
}

// Chama a função para renderizar a lista ao carregar a página
renderSidebar();
