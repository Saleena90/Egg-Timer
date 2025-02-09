function startTimer() {
    let time = document.getElementById('timerInput').value;
    let countdownDisplay = document.getElementById('countdown');
    let alarmSound = document.getElementById('alarmSound');
    let interval = setInterval(() => {
        if (time > 0) {
            countdownDisplay.textContent = time + ' seconds remaining';
            time--;
        } else {
            clearInterval(interval);
            countdownDisplay.textContent = 'Time is up!';
            alarmSound.play();
        }
    }, 1000);
}
