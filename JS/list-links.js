//Al pulsar el botón de `añadir link` se añadirá en el DOM pero también en nuestro `localStorage`
//Cada uno de los elementos tendrá el nombre que hemos añadido y el enlace al pulsar sobre él 
//También tendrá un botón de eliminar
//Será un listado de links que funcionará de la misma manera tanto en la página independiente como en el dashboard.
// `CreateElement`, `appedChild`, ... o directamente un template con `innerHTML`.
// `LocalStorage` para generar persistencia y guardar esos datos.
// Guarda el dato en el `localStorage` a la vez que se crea en el `DOM`
//Cuando se carga la página el dato del `LocalStorage` deberá aparecer de inicio


let nombreURL = document.getElementById("name-url");
let direccionURL = document.getElementById("url");
const btnAñadirEnlace = document.getElementById("añadir-enlace");

