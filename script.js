function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
let timerDisplay = document.getElementById("time-display");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
let lapbtn = document.getElementById("lap");

let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null;

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId)
    }
    timerId = setInterval(startTimer, 10)
});

pauseBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    msec = 0;
    secs = 0;
    mins = 0;
    timerDisplay.innerHTML = `00 : 00 : 00`;
});
function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }
    let msecstring = msec < 10 ? `0${msec}` : msec;
    let secstring = secs < 10 ?  `0${secs}` : secs;
    let minstring = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minstring} : ${secstring} : ${msecstring}`;
}