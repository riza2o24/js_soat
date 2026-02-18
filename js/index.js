function updateClock() {
    const now = new Date();

    let soat = now.getHours();
    let minut = now.getMinutes();
    let sekund = now.getSeconds();

    hours = (soat < 10)? "0" + soat : soat;
    minutes = (minut < 10) ? "0" + minut : minut;
    seconds = (sekund < 10) ? "0" + sekund : sekund;

    const timeString = `${soat}:${minut}:${sekund}`;

    const sasas=  document.getElementById("time").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();
