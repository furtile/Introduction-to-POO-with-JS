import modificador from './modificador.js';
import ingredientes from './ingredientes.js';
const containerIngredientes = document.getElementById('container-ingredientes');

const ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome')
const ingredienteCapitalizados = modificador.capitalizar(ingredientesOrdenados, 'nome')

for(let ingredientes of ingredienteCapitalizados){
    let textoHTML = `
    <div class="ingrediente">
        <img src="./Download/img/${ingredientes.img}">
        <p class="nome-ingrediente">${ingredientes.nome}</p>
    </div>
    `;
    containerIngredientes.innerHTML += textoHTML;
}
