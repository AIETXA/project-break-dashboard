const hoy = document.querySelector('fecha');
const cajaSegundosAmPm = document.querySelector('caja-segundos-ampm');
const lugar = document.getElementById('zona-horaria');


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
 
};

actualizarReloj();
setInterval(actualizarReloj, 1000);



 let frasesPum = document.getElementById('Frases');
  function frasesMotivadoras() {
     
    if (hora > 7 && hora <= 12) {
        frasesPum.innerText = ('Buenos días, desayuna fuerte y a darle al código')
    }  
    if (hora > 12 && hora <= 14) {
        frasesPum.innerText = ('Echa un rato más pero no olvides comer!') 
    }
    if (hora > 14 && hora <= 16) {
        frasesPum.innerText = ('Espero que hayas comido')
    }
    if (hora > 16 && hora <= 18) {
        frasesPum.innerText = ('¡Buenas tardes!, el último empujón')
    }
    if (hora > 18 && hora >= 22) {
        frasesPum.innerText = ('Esto ya son horas extras, ... piensa en parar pronto')
    }
    if (hora > 22 && hora <= 24) {
        frasesPum.innerText = ('Buenas noches, es hora de parar y descansar')
    }
    if (hora > 0 && hora <= 7) {
        frasesPum.innerText = ('Es hora de descansar. Apaga y sigue mañana')
    }
}
frasesMotivadoras();
actualizarReloj();
setInterval(actualizarReloj, 1000);