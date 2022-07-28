const mediaParaSerRetirados = document.getElementById('mediaParaSerRetirados');
const mediaRetirados = document.getElementById('mediaRetirados');
const total = document.getElementById('total');
const retirados = document.getElementById('retirados');
const success = document.getElementById('success');
const checkmark = document.getElementById('checkmark');
const calcular = document.getElementById('calcular');

$("#formulario").submit(function (e) {
  return false;
});

function calcularMediaParaSerRetirados(e) {
  mediaParaSerRetirados.innerText = 'Total para bater a meta: ' + Math.floor((Number(e.target.value) * 70) / 100);
  if (Number(document.getElementById('retirados').value) < 0) return console.clear();
  else calcularMediaRetirados(Number(document.getElementById('retirados').value));
}

function calcularMediaRetirados(e) {
  const valor = Number(document.getElementById('retirados').value) || e.target?.value
  if ((valor * 100) / total.value === Infinity || Number(valor) < 0) {
    mediaRetirados.style.color = 'red';
    mediaRetirados.style.animation = 'flicker 1.5s infinite alternate';
    
    return mediaRetirados.innerText = 'Algo está errado!';
  }


  mediaRetirados.innerText = `${((Number(valor) * 100) / total.value).toFixed(2)}% retirados`;
  mediaRetirados.style.color = 'black';
  mediaRetirados.style.animation = '';
  if (((Number(valor) * 100) / total.value) >= 70) {
    success.style.opacity = '1';
    checkmark.style.width = '100px';
    checkmark.style.height = '100px';
  }
  if (((Number(valor) * 100) / total.value) <= 69) {
    success.style.opacity = '0';
    checkmark.style.width = '0px';
    checkmark.style.height = '0px';
  }
}

total.addEventListener('input', calcularMediaParaSerRetirados);
retirados.addEventListener('input', calcularMediaRetirados);
