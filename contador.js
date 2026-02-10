// COUNTDOWN
const dataCasamento = new Date('2026-12-19T16:00:00');
function iniciarContagem() {
  function tick() {
    const diff = dataCasamento - new Date();

    const dias = document.getElementById('dias');
    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundos');

    if (!dias || !horas || !minutos || !segundos) return;

    if (diff <= 0) {
      dias.innerText = '0';
      horas.innerText = '0';
      minutos.innerText = '0';
      segundos.innerText = '0';
      return;
    }

    dias.innerText = String(Math.floor(diff / 86400000));
    horas.innerText = String(Math.floor((diff / 3600000) % 24));
    minutos.innerText = String(Math.floor((diff / 60000) % 60));
    segundos.innerText = String(Math.floor((diff / 1000) % 60));
  }

  tick();
  setInterval(tick, 1000);
}