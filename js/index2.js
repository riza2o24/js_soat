function soatw(){
    const now = new Date()

    let soat = now.getHours()
    let minut = now.getMinutes()
    let sekund = now.getSeconds()

    const quti = `${soat} : ${minut} : ${sekund}` 
    const quti2=document.getElementById("times").textContent=quti
}

setInterval(soatw, 1000)
soatw()