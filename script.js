function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let mints = now.getMinutes().toString().padStart(2, '0');
    let sec = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${mints}:${sec}`;
}

setInterval(updateClock, 1000);
updateClock();  