const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');
//Escuchar los eventos

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event) {
//   console.log({ event });
//   event.preventDefault();
//   const summaInputs = input1.value + input2.value;
//   pResult.innerText = 'Resultado: ' + summaInputs;
// }

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
  //console.log({ event });
  //event.preventDefault();
  const summaInputs = parseFloat(input1.value) + parseFloat(input2.value);
  pResult.innerText = 'Resultado: ' + summaInputs;
}
