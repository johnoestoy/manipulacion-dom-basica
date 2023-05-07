const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btn-calcular');
const resultado = document.querySelector('#resultado');
const form = document.querySelector('#form');

form.addEventListener('submit',sumar);

function sumar(event){
  event.preventDefault();
  let suma = Number(calculo1.value) + Number(calculo2.value)
  resultado.innerText = suma
}

