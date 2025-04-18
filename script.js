
export function iniciarRotacion(indice) {
   const imagenesFondo = [
     'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/6.jpg', 'img/8.jpg', 'img/9.jpg',
     'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg',
     'img/15.jpg', 'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg',
     'img/20.jpg', 'img/21.jpg', 'img/22.jpg', 'img/23.jpg', 'img/24.jpg', 'img/25.jpg'
   ];
 
   let indiceInicial = indice || 0;
 
   function imagenesInicio() {
     document.body.style.backgroundImage = `url('${imagenesFondo[indiceInicial]}')`;
     indiceInicial = (indiceInicial + 1) % imagenesFondo.length;
   }
 
   setInterval(imagenesInicio, 5000);
   imagenesInicio();
 }
 

