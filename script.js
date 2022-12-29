let digital = document.querySelector('.digital');
let pontSecond = document.querySelector('.p_s');
let pontMinute = document.querySelector('.p_m');
let pontHour = document.querySelector('.p_h');

function relogio(){
    let dataAtual = new Date();
    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();
    let hora = ""
    hora += ((horas<10) ? "0" : "") + horas
    hora += ((minutos<10) ? ":0" : ":") + minutos
    hora += ((segundos<10) ? ":0" : ":") + segundos

    pontSecond.style.transform = `rotate(${segundos*6-90}deg)`;
    pontMinute.style.transform = `rotate(${minutos*6-90}deg)`;
    pontHour.style.transform = `rotate(${horas*30-90}deg)`;

    digital.innerHTML = hora
}

relogio()
setInterval(relogio, 1000)
