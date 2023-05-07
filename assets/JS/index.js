const contar = document.getElementById('contador');
let numeral = document.querySelector('.num');
let borrar = document.querySelector('.btn-reiniciar');
let conteo = document.querySelector('.btn-conteo');
let contador = 0;
     conteo.addEventListener('click', () =>{
        contador++;
        numeral.textContent = contador;
     });

     borrar.addEventListener('click', () =>{
        contador = 0;
        numeral.textContent = contador;
     })


