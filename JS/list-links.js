//Al pulsar el botón de `añadir link` se añadirá en el DOM pero también en nuestro `localStorage`
//Cada uno de los elementos tendrá el nombre que hemos añadido y el enlace al pulsar sobre él 
//También tendrá un botón de eliminar
//Será un listado de links que funcionará de la misma manera tanto en la página independiente como en el dashboard.
// `CreateElement`, `appedChild`, ... o directamente un template con `innerHTML`.
// `LocalStorage` para generar persistencia y guardar esos datos.
// Guarda el dato en el `localStorage` a la vez que se crea en el `DOM`
//Cuando se carga la página el dato del `LocalStorage` deberá aparecer de inicio



const listaLinks = document.getElementById("link-lista");
const btnAñadirEnlace = document.getElementById("añadir-enlace");
const eliminar = document.querySelector('eliminar');
let nombreUrl = document.getElementById("name-url");
let direccionUrl = document.getElementById("url");


window.addEventListener("DOMContentLoaded", mostrarLinksGuardados);
btnAñadirEnlace.addEventListener('click', () => {
    const nombre = nombreUrl.value.trim();
    const direccion = direccionUrl.value.trim();

if(!nombre || !direccion) {
    alert('Campos obligatorios');
return;

}
const link = {nombre, direccion};
agregarLinksAlDOM(link);
guardarLinks(link);


nombreUrl.value = '';
direccionUrl.value = '';

});


function agregarLinksAlDOM(link) { 
    let li = document.createElement('li');
    li.innerHTML = `<a href="${link.direccion}" target="_blank">${link.nombre}</a>
    <button class="eliminar">x</button>`;

const eliminarBtn = li.querySelector('.eliminar');
    if (eliminarBtn) {
        eliminarBtn.addEventListener('click', () => {
            console.log('Eliminando el link:', link);
            eliminarLink(link);
            li.remove();
        });
    } else {
        console.error('No se pudo encontrar el botón de eliminar')
    }

 listaLinks.appendChild(li);
}

function mostrarLinksGuardados() {
    const links = misLinksEnStorage();
    links.forEach(agregarLinksAlDOM);
}

function guardarLinks(link) {
    const links = misLinksEnStorage();
    links.push(link);
    localStorage.setItem('links', JSON.stringify(links));
}

   function eliminarLink(linkAeliminar) {
    let linksGuardados = misLinksEnStorage();
    let linksActualizados = linksGuardados.filter(link => {
        const nombreIgual = link.nombre === linkAeliminar.nombre;
        const direccionIgual = link.direccion ===linkAeliminar.direccion;
        return !(nombreIgual && direccionIgual)
    });
localStorage.setItem('links', JSON.stringify(linksActualizados));
}
   
function misLinksEnStorage() {
    return JSON.parse(localStorage.getItem('links')) || [];
}
