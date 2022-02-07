const clock = document.querySelector('.klocka');
const goHomeH1 = document.querySelector('.go-home');

//räkna ut tiden och visa den på sidan.

const time = () => {
    const currentTime = new Date(); //hämtar datum och tid.
    let hours = currentTime.getHours();
    if(hours === 17) { //om timmen är lika med 17 skriv texten i h1 med class go-home
        goHomeH1.innerHTML = 'time to go home';
    }
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let time = `<strong>The time is ${hours}:${minutes}:${seconds}`
    clock.innerHTML = time;
}

//körs 1 gång per sekund

setInterval(() => {
    time();
}, 1000);