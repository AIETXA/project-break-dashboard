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
const eliminar = document.getElementById('eliminar');

let nombreUrl = document.getElementById("name-url");
let direccionUrl = document.getElementById("url");

btnAñadirEnlace.addEventListener('click', () => {
    const nombre = nombreUrl.value.trim();
    const direccion = direccionUrl.value.trim();

if(!nombre || !direccion) {
    alert('Campos obligatorios');
return;

}

let li = document.createElement('li');
li.innerHTML = `<a href="${direccion}" target="_blank">${nombre}<eliminar></a>`;
listaLinks.appendChild(li);
});


function misLinks() {
    return JSON.parse(localStorage.getItem('links')) || [];
}

function guardarLinks(links) {
    localStorage.setItem('links', JSON.stringify(links));
}

function addLinks(links) {
    listaLinks.innerHTML += template(links);
    let link = [];
    links.push(link);
    guardarLinks(links);
}

eliminar.addEventListener('click', () => {
    localStorage.removeItem(link)
})