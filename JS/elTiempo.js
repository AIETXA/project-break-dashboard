


const apiKey = '22c3d1fc3de64ad5bec60312251504';
const city = 'Mondragon, Pais Vasco';
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=22c3d1fc3de64ad5bec60312251504&q=${city}&aqi=no&lang=es`;


document.addEventListener('DOMContentLoaded', () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const ubicacion = data.location.name;
            const zona = data.location.region;
            const temperatura = data.current.temp_c;
            const humedad = data.current.humidity;
            const condiciones = data.current.condition.text;

            document.getElementById('ubicacion').textContent = `${ubicacion}`;
            document.getElementById('zona').textContent = `${zona}`;
            document.getElementById('temperatura').textContent = `${temperatura}`;
            document.getElementById('humedad').textContent = `${humedad}`;
            document.getElementById('condiciones').textContent = `${condiciones}`;
        })
        .catch(error => console.error('Error al obtener los datos meteorológicos:', error));
});


const horasPrevision = 7;

  function actualizarPrevisonPorHoras() {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=22c3d1fc3de64ad5bec60312251504&q=${city}&days=7&lang=es`)
    .then(response => response.json())
    .then(data => {
      const prevision = data.forecast.forecastday[0].hour;
      const ahora = new Date().getHours();
      const proximasHoras = prevision.slice(ahora, ahora + horasPrevision).filter(h => h);
      let html = '';
      
      
    proximasHoras.forEach(hora => {
      const horaLocal = hora.time.split(' ')[1];
      const iconos = `https:${hora.condition.icon}`;
      const temp = hora.temp_c;
      const texto = hora.condition.text;
        
        
        html += `<div class="container-prevision">
        <div><strong>${horaLocal}</strong></div>
        <img src="${iconos}" alt="${texto}">
        <div>${temp}°C</div>
        <div>${texto}</div>
        </div>
        `;
      });
      document.getElementById('prevision-horas').innerHTML = html;
    })
    .catch(error => console.error('Error al obtener la previsión horaria:', error));
  }
  
  actualizarPrevisonPorHoras();