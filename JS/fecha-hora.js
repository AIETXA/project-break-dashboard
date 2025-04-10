const hoy = document.querySelector('fecha-hora');
const lugar = document.getElementById('zona-horaria');
//let relojOk = hour + ':' + minutes + ':' + seconds
function horarioActual() {
    const momentoActual = new Date();
    hour = momentoActual.getHours(),
    minutes = momentoActual.getMinutes(),
    seconds = momentoActual.getSeconds(),
    
    hoy.innerHTML 
}

setInterval(horarioActual,1000);

horarioActual()