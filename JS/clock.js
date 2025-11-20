let useTick1 = true;
let lastHour = new Date().getHours();

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');

    const hourDegrees = (hours % 12) * 30 + minutes * 0.5;
    const minuteDegrees = minutes * 6 + seconds * 0.1;
    const secondDegrees = seconds * 6;

    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDegrees}deg)`;

    // CLOCK TICK SOUND
    const t1 = document.getElementById("tick1");
    const t2 = document.getElementById("tick2");

    if (useTick1) {
        t1.currentTime = 0;
        t1.play();
    } else {
        t2.currentTime = 0;
        t2.play();
    }

    // flip for next tick
    useTick1 = !useTick1;

    // PLAY HOURLY BELL (only at HH:00:00 )
    if (minutes === 0 && seconds === 0 && hours !== lastHour) {
        document.getElementById("hourBell").play();
        lastHour = hours;
    }
}


setInterval(updateClock, 1000);
updateClock();

function updateDigitalClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // 12-hour format)
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    document.getElementById('digitalClock').textContent =
        `${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateDigitalClock, 1000);
updateDigitalClock();


