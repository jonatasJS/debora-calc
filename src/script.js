const mediaParaSerRetirados = document.getElementById('mediaParaSerRetirados');
const mediaRetirados = document.getElementById('mediaRetirados');
const total = document.getElementById('total');
const retirados = document.getElementById('retirados');
const success = document.getElementById('success');
const checkmark = document.getElementById('checkmark');
const calcular = document.getElementById('calcular');

$("#formulario").submit(function (e) {
  console.log(e);
  return false;
});

function calcularMediaParaSerRetirados(e) {
  mediaParaSerRetirados.innerText = 'Total para bater a meta: ' + Math.floor((Number(e.target.value) * 70) / 100);
}
function calcularMediaRetirados(e) {
  mediaRetirados.innerText = `${((Number(e.target.value) * 100) / total.value).toFixed(2)}% retirados`;
  if (((Number(e.target.value) * 100) / total.value) >= 69) {
    success.style.opacity = '1';
    checkmark.style.width = '100px';
    checkmark.style.height = '100px';
  }
  if (((Number(e.target.value) * 100) / total.value) <= 69) {
    success.style.opacity = '0';
    checkmark.style.width = '0px';
    checkmark.style.height = '0px';
  }
}

total.addEventListener('input', calcularMediaParaSerRetirados);
retirados.addEventListener('input', calcularMediaRetirados);
