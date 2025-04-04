//Tendrá entre 12 caracteres como mínimo y 50 de máximo.
//Se podrá elegir el número de caracteres
//Se compondrá de mayúsculas, minúsculas, números y símbolos. Mínimo una de cada.
//- Guarda cada uno de los datos (mayúsculas, minúsculas, símbolos y núemeros) en una variable para poder recorrerlos.
//Usa bucles y condicionales
//`Math.random()` Para generar aleatoriedad
const letrasMayMin = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passNúmeros = "0123456789";
const passSímbolos = "!@#$%^&*()-_=+";


let anchorPass = document.getElementById("anchor-pass");
let checkbox1 = document.getElementById("checkbox1");
let checkbox2 = document.getElementById("checkbox2");
let contraseñaGenerada = document.getElementById("contraseña-generada");
const btnGenerador = document.getElementById("btn-generador");


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
