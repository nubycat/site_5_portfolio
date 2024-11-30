const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');

let intervalId = null;

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondAngle = 6 * seconds;
    const minuteAngle = 6 * minutes + 0.1 * seconds;
    const hourAngle = 30 * (hours % 12) + 0.5 * minutes;

    secondHand.style.transform = `rotate(${secondAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
}

startButton.addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(updateClock, 1000);
        updateClock(); // Обновление сразу после нажатия
    }
});

pauseButton.addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
});
