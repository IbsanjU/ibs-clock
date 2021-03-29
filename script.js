setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const digitalClock = document.querySelector('[data-digital-clock]');


function setClock() {
   const currentDate = new Date();
   const seccondsRatio = currentDate.getSeconds() / 60;
   const minutesRatio = (seccondsRatio + currentDate.getMinutes()) / 60;
   const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

   setRotation(secondHand, seccondsRatio);
   setRotation(minuteHand, minutesRatio);
   setRotation(hourHand, hoursRatio);

   setDigitalClock(currentDate);
}

function setRotation(element, rotationRation) {
   element.style.setProperty('--rotation', rotationRation * 360);
}

let setDigitalClock = date => {
   digitalClock.innerHTML = date.toLocaleTimeString();
}

setClock()