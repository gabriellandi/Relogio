let digital = document.querySelector('.digital');

function relogio(){
    let dataAtual = new Date();
    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();
    let hora = ""
    hora += ((horas<10) ? "0" : "") + horas
    hora += ((minutos<10) ? ":0" : ":") + minutos
    hora += ((segundos<10) ? ":0" : ":") + segundos

    digital.innerHTML = hora
}

relogio()
setInterval(relogio, 1000)
