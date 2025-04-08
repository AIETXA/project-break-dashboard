//Al pulsar el botón de `añadir link` se añadirá en el DOM pero también en nuestro `localStorage`
//Cada uno de los elementos tendrá el nombre que hemos añadido y el enlace al pulsar sobre él 
//También tendrá un botón de eliminar
//Será un listado de links que funcionará de la misma manera tanto en la página independiente como en el dashboard.
// `CreateElement`, `appedChild`, ... o directamente un template con `innerHTML`.
// `LocalStorage` para generar persistencia y guardar esos datos.
// Guarda el dato en el `localStorage` a la vez que se crea en el `DOM`
//Cuando se carga la página el dato del `LocalStorage` deberá aparecer de inicio


let nombreURL = document.getElementById("name-url").value;
let direccionURL = document.getElementById("url").value;
const listaLinks = document.getElementById("link-lista");
const btnAñadirEnlace = document.getElementById("añadir-enlace");


btnAñadirEnlace.addEventListener('submit', function() {
localStorage.setItem('nombre', nombreURL)
localStorage.setItem('url', direccionURL)
listaLinks.innerHTML = `${localStorage.getItem('nombre')}<br>${localStorage.get('url')}`

});

console.log(localStorage.getItem('url'));

/*let linksLike = localStorage.getItem('url')
function addLinks() {
    url ++
    listaLinks.innerHTML = url

}
addLinks();
    
window.onload = function() {
    if (localStorage.getItem('nombre') && localStorage.getItem('url')) {
        document.getElementById('datosAlmacenados').innerHTML = 
            `Nombre: ${localStorage.getItem('nombre')}<br>URL: ${localStorage.getItem('url')}`;
    }
};
*/
