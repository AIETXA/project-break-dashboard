
const letrasMayMin = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passNúmeros = "0123456789";
const passSímbolos = "!@#$%^&*()-_=+";
//const imagenes = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/6.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg', 'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg', 'img/20.jpg', 'img/21.jpg', 'img/22.jpg', 'img/23.jpg', 'img/24.jpg', 'img/25.jpg'];

let anchorPass = document.getElementById("anchor-pass");
let checkbox1 = document.getElementById("checkbox1");
let checkbox2 = document.getElementById("checkbox2");
let contraseñaGenerada = document.getElementById("contraseña-generada");
const btnGenerador = document.getElementById("btn-generador");

const imagenesFondo = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/6.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg', 'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg', 'img/20.jpg', 'img/21.jpg', 'img/22.jpg', 'img/23.jpg', 'img/24.jpg', 'img/25.jpg'];

let indiceInicial = 8;
function imagenesInicio() {
   document.body.style.backgroundImage = `url('${imagenesFondo[indiceInicial]}')`;
indiceInicial = (indiceInicial + 1) % imagenesFondo.length;
}

setInterval(imagenesInicio, 5000);

imagenesInicio();

const generarContraseña = (caracteres, length) => {
    let contraseña = "";
    for (let i = 0; i < length; i ++ ) {
        let random = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres.charAt(random);
    }
    return contraseña;
};

const creador = () => {
    let length = parseInt(anchorPass.value);
    let caracteres = letrasMayMin;

 if (checkbox1.checked) caracteres += passNúmeros;
 if (checkbox2.checked) caracteres += passSímbolos;

 contraseñaGenerada.innerText = generarContraseña(caracteres, length);
};

window.addEventListener("DOMContentLoaded",() => {
    btnGenerador.addEventListener("click",() => {
        creador();
    });
});
