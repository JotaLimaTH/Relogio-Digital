const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time(){
        let dateToday = new Date();
        let hr = dateToday.getHours();
        let min = dateToday.getMinutes();
        let s = dateToday.getSeconds();

        if (hr < 10){
            horas.textContent = "0" + hr;
        } else {
            horas.textContent = hr;
        }
        if (min < 10){
            minutos.textContent = "0" + min;
        } else {
            minutos.textContent = min;
        }
        if (s < 10){
            segundos.textContent = "0" + s;
        } else {
            segundos.textContent = s;
        }
    }
)

// que código feio da disgraça