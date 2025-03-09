// Array de itens para a sidebar
const sidebarItems = [
 { id: 1, icon: "fa-book", text: "Colégio" },
 { id: 2, icon: "fa-newspaper", text: "Notícias" },
 { id: 3, icon: "fa-pen-ruler", text: "Cursos" },
];

// Função para renderizar a lista de itens na sidebar
function renderSidebar() {
 const ulElement = document.getElementById("sidebar-list");

 // Usando map para criar os <li> e renderizar na tela
 ulElement.innerHTML = sidebarItems
  .map((item) => {
   return `
            <li>
              <a href="#" class="flex flex-col items-center p-3 rounded-lg hover:bg-gray-200 transition duration-200">
                <i class="fa-solid ${item.icon} text-lg"></i>
                <span class="text-sm">${item.text}</span>
              </a>
            </li>
          `;
  })
  .join("");
}

// Chama a função para renderizar a lista ao carregar a página
renderSidebar();
