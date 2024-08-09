document.addEventListener('DOMContentLoaded', () => {
    const redLight = document.querySelector('.red');
    const yellowLight = document.querySelector('.yellow');
    const greenLight = document.querySelector('.green');

    const redCounter = document.querySelector('.red-counter');
    const yellowCounter = document.querySelector('.yellow-counter');
    const greenCounter = document.querySelector('.green-counter');

    let redTime = 5;
    let yellowTime = 3;
    let greenTime = 15;

    function changeLight(light, counter, time) {
        light.classList.add('active');
        counter.classList.add('counter-visible');

        let countdown = setInterval(() => {
            counter.textContent = time;
            if (time <= 0) {
                clearInterval(countdown);
                light.classList.remove('active');
                counter.classList.remove('counter-visible');
            }
            time--;
        }, 1000);
    }

    function trafficCycle() {
        changeLight(redLight, redCounter, redTime);
        setTimeout(() => {
            changeLight(yellowLight, yellowCounter, yellowTime);
        }, redTime * 1000);
        setTimeout(() => {
            changeLight(greenLight, greenCounter, greenTime);
        }, (redTime + yellowTime) * 1000);
        setTimeout(trafficCycle, (redTime + yellowTime + greenTime) * 1000);
    }

    trafficCycle();
});

