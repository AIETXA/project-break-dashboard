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
    ampm = '';
    
    pDia = document.getElementById('dia');
    pNumero = document.getElementById('numero');
    pMes = document.getElementById('mes');
    pAño = document.getElementById('año');
    pHoras = document.getElementById('horas');
    pMinutos = document.getElementById('minutos');
    pAMPM = document.getElementById('am-pm');
    pSegundos = document.getElementById('segundos');
    
const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
pDia.textContent = diasSemana[dia]; 

pNumero.textContent = numeros;

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
pMes.textContent = meses[mes];
pAño.textContent = año;

if (hora >= 12) {
    hora = hora - 12;
    ampm = 'PM';
} else {
    ampm = 'AM';
}

if (hora == 0) {
    hora = 12;
};
pHoras.textContent = hora;
pAMPM.textContent = ampm;

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
