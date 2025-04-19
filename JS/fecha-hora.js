
window.addEventListener("DOMContentLoaded", () => {

const hoy = document.querySelector('fecha');
const cajaSegundosAmPm = document.querySelector('caja-segundos-ampm');
const lugar = document.getElementById('zona-horaria');

const imagenesFondo = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/6.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg', 'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg', 'img/20.jpg', 'img/21.jpg', 'img/22.jpg', 'img/23.jpg', 'img/24.jpg', 'img/25.jpg'];

let indiceInicial = 5;
function imagenesInicio() {
   document.body.style.backgroundImage = `url('${imagenesFondo[indiceInicial]}')`;
indiceInicial = (indiceInicial + 1) % imagenesFondo.length;
}

setInterval(imagenesInicio, 5000);

imagenesInicio();

const fechaYhora = document.getElementById('fecha-hora');

function imgRandom() {
    fechaYhora.addEventListener('click', () => {
        const pagina = Math.floor(Math.random() * imagenesFondo.length);
        document.body.style.backgroundImage = `url('${imagenesFondo[pagina]}')`;
    })
}

function actualizarReloj() {
let momentoActual = new Date();
    hora = momentoActual.getHours(),
    minutos = momentoActual.getMinutes(),
    segundos = momentoActual.getSeconds(),
    dia = momentoActual.getDay();
    numeros = momentoActual.getDate();
    mes = momentoActual.getMonth();
    año = momentoActual.getFullYear();
   
    
    pDia = document.getElementById('dia');
    pNumero = document.getElementById('numero');
    pMes = document.getElementById('mes');
    pAño = document.getElementById('año');
    pHoras = document.getElementById('horas');
    pMinutos = document.getElementById('minutos');
    pSegundos = document.getElementById('segundos');
    
const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
pDia.textContent = diasSemana[dia]; 

pNumero.textContent = numeros;

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
pMes.textContent = meses[mes];
pAño.textContent = año;

if (hora < 10) {
    hora = '0' + hora
};

pHoras.textContent = hora;


if (minutos < 10) {
    minutos = '0' + minutos
};
if (segundos < 10) {
    segundos = '0' + segundos
};

pMinutos.textContent = minutos;
pSegundos.textContent = segundos;
 
frasesMotivadoras(hora);

}

actualizarReloj();
setInterval(actualizarReloj, 1000);



function frasesMotivadoras() {
      let frasesPum = document.getElementById('frases');
      
    if (!frasesPum) return;
      
    if (hora >= 7 && hora <= 12) {
        frasesPum.innerText = ('Buenos días, desayuna fuerte y a darle al código')
    }  
    else if (hora > 12 && hora <= 14) {
        frasesPum.innerText = ('Echa un rato más pero no olvides comer!') 
    }
    else if (hora > 14 && hora <= 16) {
        frasesPum.innerText = ('Espero que hayas comido')
    }
    else if (hora > 16 && hora <= 18) {
        frasesPum.innerText = ('Buenas tardes, el último empujón')
    }
    else if (hora > 18 && hora >= 22) {
        frasesPum.innerText = ('Esto ya son horas extras, ... piensa en parar pronto')
    }
    else if (hora > 22 && hora <= 24) {
        frasesPum.innerText = ('Buenas noches, es hora de parar y descansar')
    }
    else if (hora > 0 && hora <= 7) {
        frasesPum.innerText = ('Es hora de descansar. Apaga y sigue mañana')
    }
}
actualizarReloj();
setInterval(actualizarReloj, 1000);

});